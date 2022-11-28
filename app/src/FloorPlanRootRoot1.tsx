import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import dateFnsFormat from "date-fns/format";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import axios from "axios";

export const API_URL = "http://127.0.0.1:3001/";

const WORKSPACE_NAME = "freespace";

const seatingStatus = {
  booked: `https://file.rendit.io/n/xUPiyA7zn7ukotinQgzQ.svg`,
  selected: `https://file.rendit.io/n/OK851SCi8IATLrydtCZo.svg`,
  available: `https://file.rendit.io/n/tnihUMst1yC7I8uJtHU9.svg`,
};

enum SEATINGTYPE {
  LARGE = "LARGE",
  CIRCULAR = "CIRCULAR",
  SQUARE = "SQUARE",
}

enum SEATING_STATUS {
  AVAILABLE = "AVAILABLE",
  SELECTED = "SELECTED",
  BOOKED = "BOOKED",
}

interface IObjectKeys {
  [key: string]: string | number | Date | string[] | number[] | boolean;
}

export interface BookingSeat {
  ids: number[];
}

export interface BookingInfo extends BookingSeat {
  fullName: string;
  email: string;
  seatingIds: string[];
  startTime: string;
  endTime: string;
  isFullDay: boolean;
  companyName: string;
  comments: string;
}

export enum Hours {
  "1:00" = "1:00",
  "2:00" = "2:00",
  "3:00" = "3:00",
  "4:00" = "4:00",
  "5:00" = "5:00",
  "6:00" = "6:00",
  "7:00" = "7:00",
  "8:00" = "8:00",
  "9:00" = "9:00",
  "10:00" = "10:00",
  "11:00" = "11:00",
  "12:00" = "12:00",
}

export enum Minutes {
  "15 mins" = "15",
  "30 mins" = "30",
  "45 mins" = "45",
  "60 mins" = "60",
}

export interface SeatingType {
  id: string;
  category: SEATINGTYPE;
  status: SEATING_STATUS;
  seatNo: number;
}

const ToggleSwitch = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "18px 0px 10px 0px",
        borderTopStyle: "hidden",
        borderRightStyle: "hidden",
        borderLeftStyle: "hidden",
        borderBottomStyle: "groove",
        color: "whitesmoke",
      }}
    >
      <Label>
        <SpanElement>Full Day</SpanElement>
        <ToggleInput
          checked={props.value}
          type="checkbox"
          onChange={props.onChange}
        />
        <Switch />
      </Label>
    </div>
  );
};

export const FloorPlanRootRoot1 = () => {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>(
    {} as BookingInfo
  );

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const [seatingTableList, setSeatingTableList] = useState<SeatingType[]>([]);

  const getWorkspace = () => {
    axios
      .get(API_URL + `get-workspace-by-name/${WORKSPACE_NAME}`)
      .then((res) => {
        console.log("Koca: res ", res);
        if (res) {
          setSeatingTableList(res.data.seatingList);
        } else {
          setSeatingTableList([]);
        }
      });
  };

  useEffect(() => {
    getWorkspace();
  }, []);

  const formatDate = (
    date: Date,
    format: string,
    locale: Locale | undefined
  ) => {
    return dateFnsFormat(date, format, { locale });
  };

  const FORMAT = "MM/dd/yyyy";

  const onSelectSeats = useCallback(
    (table: SeatingType) => {
      const isTableExists = selectedSeats.find((seat) => seat === table.seatNo);
      if (isTableExists) {
        const filteredSeats = selectedSeats.filter(
          (seat) => seat !== table.seatNo
        );
        setSelectedSeats(filteredSeats);

        setBookingInfo({
          ...bookingInfo,
          ids: filteredSeats,
        });
      } else {
        setSelectedSeats([...selectedSeats, table.seatNo]);
        setBookingInfo({
          ...bookingInfo,
          ids: [...selectedSeats, table.seatNo],
        });
      }
    },
    [selectedSeats, bookingInfo]
  );

  const onChange = useCallback(
    (event: any, key: string) => {
      const inputValue = event.target.value;

      if (key === "toggle") {
        setBookingInfo({
          ...bookingInfo,
          isFullDay: !bookingInfo.isFullDay,
        });
      } else {
        setBookingInfo({
          ...bookingInfo,
          [key]: inputValue,
        });
      }
    },
    [bookingInfo]
  );

  const onConfirmBooking = useCallback(() => {
    console.log("Koca: bookingInfo", bookingInfo);

    axios.put(API_URL + `update-workspace-by-name`, bookingInfo).then((res) => {
      console.log("Koca: res ", res);
      // if (res) {
      //   setSeatingTableList(res.data.seatingList);
      // } else {
      //   setSeatingTableList([]);
      // }
    });
  }, [bookingInfo]);

  console.log("selectedSeats: ", selectedSeats);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <HeaderContentBox>
        <CalenderSection>
          <DayPickerInput
            formatDate={() => formatDate(new Date(), "dd/mm/yyy", undefined)}
            format={FORMAT}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            parseDate={() => new Date()}
            onDayChange={() => console.log("")}
            onDayPickerHide={() => console.log("")}
            onDayPickerShow={() => console.log("")}
          />
        </CalenderSection>
        <InformationSection>
          <InformationBlock>
            <Checkin
              src={`https://file.rendit.io/n/7mxJaUvi9RsErfESm3T4.svg`}
            />
            <Text2>Available</Text2>
            <Checkin
              src={`https://file.rendit.io/n/0Vu4tfj410bUFLUPHwdP.svg`}
            />
            <Text3>Selected</Text3>
            <Checkin
              src={`https://file.rendit.io/n/RSufhvaCPQiSlcD9VmLR.svg`}
            />
            <Text4>Reserved</Text4>
          </InformationBlock>
        </InformationSection>
      </HeaderContentBox>

      {seatingTableList && (
        <ContentBox>
          <FloorPlanRootRootRoot>
            <WhiteRectangle />
            <WhiteRectangle1 />
            <FlexRow>
              <FlexColumn>
                {/* large table left */}
                <FlexRow1>
                  {seatingTableList
                    .filter((table) => [1, 2].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse21
                        key={index}
                        onClick={() => onSelectSeats(table)}
                        src={
                          table.status === SEATING_STATUS.BOOKED
                            ? seatingStatus.booked
                            : selectedSeats.includes(table.seatNo)
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}
                </FlexRow1>

                {/* large table right */}
                <FlexRow2>
                  {seatingTableList
                    .filter((table) => [3, 4].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse21
                        key={index}
                        onClick={() => onSelectSeats(table)}
                        src={
                          table.status === SEATING_STATUS.BOOKED
                            ? seatingStatus.booked
                            : selectedSeats.includes(table.seatNo)
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}
                </FlexRow2>

                {/* large table bottom */}
                <FlexRow3>
                  {seatingTableList
                    .filter((table) => [5, 6].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse21
                        key={index}
                        onClick={() => onSelectSeats(table)}
                        src={
                          table.status === SEATING_STATUS.BOOKED
                            ? seatingStatus.booked
                            : selectedSeats.includes(table.seatNo)
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}
                </FlexRow3>
              </FlexColumn>
              <FlexColumn1>
                <FlexRow4>
                  {seatingTableList
                    .filter((table) => [7].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse29
                        key={index}
                        onClick={() => onSelectSeats(table)}
                        src={
                          table.status === SEATING_STATUS.BOOKED
                            ? seatingStatus.booked
                            : selectedSeats.includes(table.seatNo)
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  <FlexColumn2>
                    {seatingTableList
                      .filter((table) => [8, 9].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse21
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}
                  </FlexColumn2>
                  <FlexColumn3>
                    {seatingTableList
                      .filter((table) => [10].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse19
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [11].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse1
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [12].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse21
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}
                  </FlexColumn3>
                  <FlexColumn4>
                    {seatingTableList
                      .filter((table) => [13].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse20
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [14].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse8
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [15].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse3
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [16].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse3
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}
                  </FlexColumn4>

                  {/* Table 4 */}

                  <FlexColumn5>
                    {seatingTableList
                      .filter((table) => [17].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse18
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {seatingTableList
                      .filter((table) => [18].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse21
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}
                  </FlexColumn5>

                  <FlexColumn6>
                    {seatingTableList
                      .filter((table) => [19].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse21
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    <FlexColumn7>
                      {seatingTableList
                        .filter((table) => [20].includes(table.seatNo))
                        .map((table, index) => (
                          <Ellipse16
                            key={index}
                            onClick={() => onSelectSeats(table)}
                            src={
                              selectedSeats.includes(table.seatNo)
                                ? seatingStatus.selected
                                : seatingStatus.available
                            }
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        ))}
                    </FlexColumn7>
                  </FlexColumn6>
                </FlexRow4>

                {/* Desk 1 */}
                <FlexRow5>
                  {seatingTableList
                    .filter((table) => [21].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse
                        key={index}
                        onClick={() => onSelectSeats(table)}
                        src={
                          table.status === SEATING_STATUS.BOOKED
                            ? seatingStatus.booked
                            : selectedSeats.includes(table.seatNo)
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* Desk two */}
                  <FlexRow6>
                    {seatingTableList
                      .filter((table) => [22].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse14
                          key={index}
                          onClick={() => onSelectSeats(table)}
                          src={
                            table.status === SEATING_STATUS.BOOKED
                              ? seatingStatus.booked
                              : selectedSeats.includes(table.seatNo)
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}

                    {/* circular table 1 */}
                    <FlexRow7>
                      <FlexColumn8>
                        <FlexRow8>
                          {seatingTableList
                            .filter((table) => [23, 24].includes(table.seatNo))
                            .map((table, index) => (
                              <Ellipse10
                                key={index}
                                onClick={() => onSelectSeats(table)}
                                src={
                                  table.status === SEATING_STATUS.BOOKED
                                    ? seatingStatus.booked
                                    : selectedSeats.includes(table.seatNo)
                                    ? seatingStatus.selected
                                    : seatingStatus.available
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            ))}

                          {seatingTableList
                            .filter((table) => [25].includes(table.seatNo))
                            .map((table, index) => (
                              <Ellipse13
                                key={index}
                                onClick={() => onSelectSeats(table)}
                                src={
                                  table.status === SEATING_STATUS.BOOKED
                                    ? seatingStatus.booked
                                    : selectedSeats.includes(table.seatNo)
                                    ? seatingStatus.selected
                                    : seatingStatus.available
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            ))}
                        </FlexRow8>

                        {seatingTableList
                          .filter((table) => [26].includes(table.seatNo))
                          .map((table, index) => (
                            <Ellipse12
                              key={index}
                              onClick={() => onSelectSeats(table)}
                              src={
                                table.status === SEATING_STATUS.BOOKED
                                  ? seatingStatus.booked
                                  : selectedSeats.includes(table.seatNo)
                                  ? seatingStatus.selected
                                  : seatingStatus.available
                              }
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          ))}
                      </FlexColumn8>

                      {/* circular table 2 */}
                      <FlexColumn9>
                        {}
                        <FlexRow9>
                          {seatingTableList
                            .filter((table) => [27, 28].includes(table.seatNo))
                            .map((table, index) => (
                              <Ellipse10
                                key={index}
                                onClick={() => onSelectSeats(table)}
                                src={
                                  table.status === SEATING_STATUS.BOOKED
                                    ? seatingStatus.booked
                                    : selectedSeats.includes(table.seatNo)
                                    ? seatingStatus.selected
                                    : seatingStatus.available
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            ))}

                          {seatingTableList
                            .filter((table) => [29].includes(table.seatNo))
                            .map((table, index) => (
                              <Ellipse13
                                key={index}
                                onClick={() => onSelectSeats(table)}
                                src={
                                  table.status === SEATING_STATUS.BOOKED
                                    ? seatingStatus.booked
                                    : selectedSeats.includes(table.seatNo)
                                    ? seatingStatus.selected
                                    : seatingStatus.available
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              />
                            ))}
                        </FlexRow9>

                        {seatingTableList
                          .filter((table) => [30].includes(table.seatNo))
                          .map((table, index) => (
                            <Ellipse6
                              key={index}
                              onClick={() => onSelectSeats(table)}
                              src={
                                table.status === SEATING_STATUS.BOOKED
                                  ? seatingStatus.booked
                                  : selectedSeats.includes(table.seatNo)
                                  ? seatingStatus.selected
                                  : seatingStatus.available
                              }
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          ))}
                      </FlexColumn9>
                    </FlexRow7>
                  </FlexRow6>
                </FlexRow5>
              </FlexColumn1>
            </FlexRow>
          </FloorPlanRootRootRoot>
          <Content2>
            <div
              style={{
                display: "flex",
              }}
            >
              <SpaceInOrangeCircleRootRootRoot
                src={`https://file.rendit.io/n/3fTvamPvyQ0H9OgAO3od.png`}
              />
              <BookingFormRootRootRoot>Booking Form</BookingFormRootRootRoot>
            </div>

            <div>
              <input
                onChange={(e) => onChange(e, "fullName")}
                value={bookingInfo.fullName}
                placeholder="Jon Doe"
                required
                style={{
                  border: "white",
                  outline: "none",
                  borderBottom: "1px solid lightgray",
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              />
              <Label>Email</Label>
              <input
                value={bookingInfo.email}
                onChange={(e) => onChange(e, "email")}
                type="email"
                id="email"
                name="email"
                placeholder="Jon.doe@gmail.com"
                style={{
                  border: "white",
                  outline: "none",
                  borderBottom: "1px solid lightgray",
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              />

              <Label>Time</Label>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  paddingTop: "4px",
                }}
              >
                <div
                  style={{
                    flex: 4,
                    width: "100%",
                  }}
                >
                  <select
                    style={{
                      border: "0px",
                      outline: "none",
                      width: "100%",
                      borderBottom: "2px solid #2e375b14",
                      backgroundColor: "white",
                    }}
                    id="number-dd"
                    name="number"
                    onChange={(e) => onChange(e, "startTime")}
                  >
                    {Object.keys(Hours).map((hour) => (
                      <option value={hour}>{hour}</option>
                    ))}
                  </select>
                </div>
                <label
                  style={{
                    flex: 1,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  to
                </label>

                <div
                  style={{
                    flex: 4,
                    width: "100%",
                  }}
                >
                  <select
                    style={{
                      border: "0px",
                      outline: "none",
                      width: "100%",
                      borderBottom: "2px solid #2e375b14",
                      backgroundColor: "white",
                    }}
                    id="number-dd"
                    name="number"
                    onChange={(e) => onChange(e, "endTime")}
                  >
                    {Object.keys(Minutes).map((minute) => (
                      <option value={minute}>{minute}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <ToggleSwitch
                  onChange={(event: any) => onChange(event, "toggle")}
                  value={bookingInfo.isFullDay}
                />
              </div>

              <div
                style={{
                  paddingTop: "15px",
                }}
              >
                <Label>Company</Label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={(e) => onChange(e, "companyName")}
                  value={bookingInfo.companyName}
                  placeholder="Freespace."
                  style={{
                    border: "white",
                    outline: "none",
                    borderBottom: "1px solid lightgray",
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <input
                type="text"
                id="comments"
                name="comments"
                onChange={(e) => onChange(e, "comments")}
                value={bookingInfo.comments}
                placeholder="Add Comments"
                style={{
                  border: "white",
                  outline: "none",
                  borderBottom: "1px solid lightgray",
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              />

              <button
                style={{
                  backgroundColor: "#F7707D",
                  border: "none",
                  fontSize: "14px",
                  color: "#FDF0ED",
                  padding: "18px",
                  textAlign: "center",
                  textDecoration: "none",
                  overflow: "hidden",
                  cursor: "pointer",
                  width: "100%",
                  borderRadius: "12px",
                  marginTop: "34px",
                }}
                className="button"
                onClick={onConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </Content2>
        </ContentBox>
      )}
    </div>
  );
};

const Label = styled.label`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #444444;
  padding-top: 6px;
`;

const Switch = styled.div`
  position: relative;
  width: 36px;
  height: 16px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 35px;
    top: 50%;
    left: 1px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const ToggleInput = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(22px, -50%);
    }
  }
`;

const SpanElement = styled.span`
  width: 50px;
  height: 19px;
  /* Nunito Regular 13 */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #444444;
  margin-right: 10px;
`;

// Booking Form Section
const BookingFormRootRootRoot = styled.span`
  margin: 0px 12px;
  color: #2e375b;
  font-family: Gilroy;
  white-space: nowrap;
  left: 1082px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
`;

const SpaceInOrangeCircleRootRootRoot = styled.img`
  width: 42px;
  height: 40.4px;
  left: 71.32%;
  right: 25.76%;
  top: 24.43%;
  bottom: 71.09%;
`;

const HeaderContentBox = styled.div`
  display: flex;
  background: #f5f5f5;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  padding: 16px;
`;

const CalenderSection = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const InformationSection = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  grid-area: content;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InformationBlock = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 0px;
`;

const Checkin = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 3.43px 0px 0px;
`;

const Text2 = styled.div`
  align-self: flex-start;
  margin: 0px 17.5px 0px 0px;
  color: #444444;
  font-size: 11px;
  font-weight: 700;
  font-family: Nunito;
  white-space: nowrap;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 0px 15.6px 0px 0px;
  color: #444444;
  font-size: 11px;
  font-weight: 700;
  font-family: Nunito;
  white-space: nowrap;
`;

const Text4 = styled.div`
  align-self: flex-start;
  color: #444444;
  font-size: 11px;
  font-weight: 700;
  font-family: Nunito;
  white-space: nowrap;
`;

const Content2 = styled.div`
  // background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const FloorPlanRootRootRoot = styled.div`
  width: 953px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const WhiteRectangle = styled.div`
  width: 892px;
  height: 609px;
  left: 60.5px;
  top: 1.13px;
  position: absolute;
  background-color: rgba(253, 255, 240, 0.4);
`;
const WhiteRectangle1 = styled.div`
  width: 60.5px;
  height: 346px;
  left: 3.78px;
  top: 260px;
  position: absolute;
  background-color: rgba(253, 255, 240, 0.4);
`;
const FlexRow = styled.div`
  width: 855px;
  height: 550px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 44.5px 57.3px 15.5px 40.7px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/1MxUsYqhqesILDO5qSCQ.png");
  mix-blend-mode: multiply;
`;
const FlexColumn = styled.div`
  height: 445px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 52.3px 0px;
`;
const FlexRow1 = styled.div`
  height: 29px;
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 32.9px 0px;
`;
const FlexRow2 = styled.div`
  height: 29px;
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 34.8px 0px;
`;
const FlexRow3 = styled.div`
  height: 29px;
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 31px 0px 29px;
`;
const FlexColumn1 = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FlexRow4 = styled.div`
  width: 568px;
  height: 320px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Ellipse29 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 61.9px 2.94px 0px;
`;
const FlexColumn2 = styled.div`
  height: 318px;
  gap: 69.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px 92.9px 0px 0px;
  padding: 1px 0px;
`;
const FlexColumn3 = styled.div`
  width: 34.8px;
  height: 313px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 58.1px 0px 0px;
  padding: 3.87px 0px;
`;

const FlexRow6 = styled.div`
  height: 89.1px;
  gap: 50.3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexRow7 = styled.div`
  height: 89.1px;
  gap: 13.6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn8 = styled.div`
  width: 81.3px;
  height: 89.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexRow8 = styled.div`
  width: 81.3px;
  height: 29px;
  position: relative;
  gap: 23.2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 29px 0px 0px 0px;
`;

const FlexColumn9 = styled.div`
  width: 85.2px;
  gap: 3.87px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FlexRow9 = styled.div`
  width: 85.2px;
  height: 29px;
  position: relative;
  gap: 27.1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 27.1px 0px 0px 0px;
`;

const FlexRow5 = styled.div`
  width: 424px;
  height: 89.1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12.6px 0px 132px;
`;
const FlexColumn5 = styled.div`
  width: 34.8px;
  height: 318px;
  gap: 69.7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 61.9px 0px 0px;
  padding: 1px 0px;
`;
const FlexColumn4 = styled.div`
  width: 34.8px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 87.1px 0px 0px;
`;
const FlexColumn6 = styled.div`
  width: 43.6px;
  height: 320px;
  gap: 69.7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const FlexColumn7 = styled.div`
  width: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  padding: 0px 0px 0px 0px;
`;

const Ellipse21 = styled.img`
  width: 29px;
  height: 29px;
`;
const Ellipse10 = styled.img`
  width: 29px;
  height: 29px;
  position: relative;
`;
const Ellipse13 = styled.img`
  width: 29px;
  height: 29px;
  left: 27.1px;
  top: 0px;
  position: absolute;
`;

const Ellipse19 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 69.7px 0px;
`;
const Ellipse1 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-start;
  margin: 0px 0px 62px 0px;
`;

const Ellipse20 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 1.94px 71.6px 0px;
`;
const Ellipse8 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 60px 0px;
`;
const Ellipse3 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 0px 69.7px 0px;
`;

const Ellipse18 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
`;

const Ellipse16 = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
`;

const Ellipse = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 0px 13.5px 0px;
`;

const Ellipse14 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 0px 13.6px 0px;
`;

const Ellipse12 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 0px 23.2px;
`;

const Ellipse6 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 0px 27.1px;
`;
