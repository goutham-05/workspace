import React, { useCallback, useState } from "react";
import styled from "styled-components";

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
  AVAilABLE = "AVAilABLE",
  SELECTED = "SELECTED",
  BOOKED = "BOOKED",
}

export interface SeatingType {
  id: string;
  category: SEATINGTYPE;
  status: SEATING_STATUS;
  seatNo: number;
}

export const FloorPlanRootRoot1 = () => {
  const [seatStatus, selectedStatus] = useState(seatingStatus.available);

  const [selectedSeats, setSelectedSeats] = useState<SeatingType[]>([]);

  const [selectedSeat, setSelectedSeat] = useState<SeatingType>(
    {} as SeatingType
  );

  const onSelectSeat = useCallback((data: any) => {
    console.log(data);

    selectedStatus(seatingStatus.selected);
    setSelectedSeat(data);
  }, []);

  const seatingTableList: SeatingType[] = [
    {
      id: "largeTable1",
      category: SEATINGTYPE.LARGE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 1,
    },
    {
      id: "largeTable2",
      category: SEATINGTYPE.LARGE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 2,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 3,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 4,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 5,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 6,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 7,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 8,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 9,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 10,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 11,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 12,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 13,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 14,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 15,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 16,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 17,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 18,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 19,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 20,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 21,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 22,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 23,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 24,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 25,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 26,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 27,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 28,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 29,
    },
    {
      id: "squareTable1",
      category: SEATINGTYPE.SQUARE,
      status: SEATING_STATUS.AVAilABLE,
      seatNo: 30,
    },
  ];

  console.log("Koca: ", selectedSeat);

  return (
    <>
      <HeaderContentBox>
        <CalenderSection>Calender Goes here</CalenderSection>
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
                      onClick={() => onSelectSeat(table)}
                      src={
                        selectedSeat?.seatNo === table.seatNo
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
                      onClick={() => onSelectSeat(table)}
                      src={
                        selectedSeat?.seatNo === table.seatNo
                          ? seatingStatus.selected
                          : seatingStatus.available
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  ))}

                {/* <Ellipse21
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            />
            <Ellipse21
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            /> */}
              </FlexRow2>

              {/* large table bottom */}
              <FlexRow3>
                {seatingTableList
                  .filter((table) => [5, 6].includes(table.seatNo))
                  .map((table, index) => (
                    <Ellipse21
                      key={index}
                      onClick={() => onSelectSeat(table)}
                      src={
                        selectedSeat?.seatNo === table.seatNo
                          ? seatingStatus.selected
                          : seatingStatus.available
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  ))}

                {/* <Ellipse21
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            />
            <Ellipse21
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            /> */}
              </FlexRow3>
            </FlexColumn>
            <FlexColumn1>
              <FlexRow4>
                {seatingTableList
                  .filter((table) => [7].includes(table.seatNo))
                  .map((table, index) => (
                    <Ellipse29
                      key={index}
                      onClick={() => onSelectSeat(table)}
                      src={
                        selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}
                </FlexColumn2>
                <FlexColumn3>
                  {seatingTableList
                    .filter((table) => [10].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse19
                        key={index}
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse19
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse1
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}
                </FlexColumn3>

                <FlexColumn4>
                  {seatingTableList
                    .filter((table) => [13].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse20
                        key={index}
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse20
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse8
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse3
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse3
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}
                </FlexColumn4>

                {/* Table 4 */}

                <FlexColumn5>
                  {seatingTableList
                    .filter((table) => [17].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse18
                        key={index}
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
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
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse18
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
              <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}
                </FlexColumn5>

                <FlexColumn6>
                  {seatingTableList
                    .filter((table) => [19].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse21
                        key={index}
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}

                  <FlexColumn7>
                    {seatingTableList
                      .filter((table) => [20].includes(table.seatNo))
                      .map((table, index) => (
                        <Ellipse16
                          key={index}
                          onClick={() => onSelectSeat(table)}
                          src={
                            selectedSeat?.seatNo === table.seatNo
                              ? seatingStatus.selected
                              : seatingStatus.available
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    {/* <Ellipse16
                  onClick={(e) => onSelectSeat(e)}
                  src={seatStatus}
                  style={{
                    cursor: "pointer",
                  }}
                /> */}
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
                      onClick={() => onSelectSeat(table)}
                      src={
                        selectedSeat?.seatNo === table.seatNo
                          ? seatingStatus.selected
                          : seatingStatus.available
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  ))}
                {/* <Ellipse
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            /> */}

                {/* Desk two */}
                <FlexRow6>
                  {seatingTableList
                    .filter((table) => [22].includes(table.seatNo))
                    .map((table, index) => (
                      <Ellipse14
                        key={index}
                        onClick={() => onSelectSeat(table)}
                        src={
                          selectedSeat?.seatNo === table.seatNo
                            ? seatingStatus.selected
                            : seatingStatus.available
                        }
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ))}

                  {/* <Ellipse14
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              /> */}

                  {/* circular table 1 */}
                  <FlexRow7>
                    <FlexColumn8>
                      <FlexRow8>
                        {seatingTableList
                          .filter((table) => [23, 24].includes(table.seatNo))
                          .map((table, index) => (
                            <Ellipse10
                              key={index}
                              onClick={() => onSelectSeat(table)}
                              src={
                                selectedSeat?.seatNo === table.seatNo
                                  ? seatingStatus.selected
                                  : seatingStatus.available
                              }
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          ))}

                        {/* <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    /> */}
                        {/* <Ellipse13
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    /> */}

                        {seatingTableList
                          .filter((table) => [25].includes(table.seatNo))
                          .map((table, index) => (
                            <Ellipse13
                              key={index}
                              onClick={() => onSelectSeat(table)}
                              src={
                                selectedSeat?.seatNo === table.seatNo
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
                            onClick={() => onSelectSeat(table)}
                            src={
                              selectedSeat?.seatNo === table.seatNo
                                ? seatingStatus.selected
                                : seatingStatus.available
                            }
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      {/* <Ellipse12
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                      style={{
                        cursor: "pointer",
                      }}
                    /> */}
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
                              onClick={() => onSelectSeat(table)}
                              src={
                                selectedSeat?.seatNo === table.seatNo
                                  ? seatingStatus.selected
                                  : seatingStatus.available
                              }
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          ))}
                        {/* <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    /> */}

                        {seatingTableList
                          .filter((table) => [29].includes(table.seatNo))
                          .map((table, index) => (
                            <Ellipse13
                              key={index}
                              onClick={() => onSelectSeat(table)}
                              src={
                                selectedSeat?.seatNo === table.seatNo
                                  ? seatingStatus.selected
                                  : seatingStatus.available
                              }
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          ))}
                        {/* <Ellipse13
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    /> */}
                      </FlexRow9>

                      {seatingTableList
                        .filter((table) => [30].includes(table.seatNo))
                        .map((table, index) => (
                          <Ellipse6
                            key={index}
                            onClick={() => onSelectSeat(table)}
                            src={
                              selectedSeat?.seatNo === table.seatNo
                                ? seatingStatus.selected
                                : seatingStatus.available
                            }
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      {/* 
                  <Ellipse6
                    onClick={(e) => onSelectSeat(e)}
                    src={seatStatus}
                    style={{
                      cursor: "pointer",
                    }}
                  /> */}
                    </FlexColumn9>
                  </FlexRow7>
                </FlexRow6>
              </FlexRow5>
            </FlexColumn1>
          </FlexRow>
        </FloorPlanRootRootRoot>
        <Content2>
          <SpaceInOrangeCircleRootRootRoot
            src={`https://file.rendit.io/n/3fTvamPvyQ0H9OgAO3od.png`}
          />
          <BookingFormRootRootRoot>Booking Form</BookingFormRootRootRoot>
        </Content2>
      </ContentBox>
    </>
  );
};

// Booking Form Section
const BookingFormRootRootRoot = styled.span`
  color: #2e375b;
  font-size: 16px;
  font-weight: 700;
  font-family: Gilroy;
  white-space: nowrap;
`;

const SpaceInOrangeCircleRootRootRoot = styled.img`
  width: 42px;
  height: 40.4px;
`;

const YourFullNameRootRootRoot = styled.div`
  color: #444444;
  font-size: 20px;
  font-weight: 600;
  font-family: Nunito;
  white-space: nowrap;
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
const Text1 = styled.div`
  color: #444444;
  font-size: 16px;
  font-family: Nunito;
  white-space: nowrap;
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

const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const Content2 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div`
  float: left;
  width: 100%;
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
const Ellipse9 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 0px 1.94px;
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
