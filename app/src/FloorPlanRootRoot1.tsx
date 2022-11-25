import React, { useCallback, useState } from "react";
import styled from "styled-components";

const seatingStatus = {
  avaialable: `https://file.rendit.io/n/xUPiyA7zn7ukotinQgzQ.svg`,
  selected: `https://file.rendit.io/n/OK851SCi8IATLrydtCZo.svg`,
  booked: `https://file.rendit.io/n/tnihUMst1yC7I8uJtHU9.svg`,
};

enum SEATINGTYPE {
  LARGE,
  CIRCULAR,
  SQUARE,
}

enum SEATING_STATUS {
  AVAIALABLE,
  SELECTED,
  BOOKED,
}

export interface SeatingType {
  id: string;
  category: SEATINGTYPE;
  status: SEATING_STATUS;
}

export const FloorPlanRootRoot1 = () => {
  const [seatStatus, selectedStatus] = useState(seatingStatus.avaialable);

  const onSelectSeat = useCallback((event: any) => {
    console.log(event);

    selectedStatus(seatingStatus.selected);
  }, []);

  const seatingTableList: SeatingType[] = [
    {
      id: "largeTable1",
      category: SEATINGTYPE.LARGE,
      status: SEATING_STATUS.AVAIALABLE,
    },
    {
      id: "largeTable2",
      category: SEATINGTYPE.LARGE,
      status: SEATING_STATUS.AVAIALABLE,
    },
    {
      id: "circularTable1",
      category: SEATINGTYPE.CIRCULAR,
      status: SEATING_STATUS.AVAIALABLE,
    },
  ];

  return (
    <FloorPlanRootRootRoot>
      <WhiteRectangle />
      <WhiteRectangle1 />
      <FlexRow>
        <FlexColumn>
          <FlexRow1>
            {seatingTableList
              .filter((table) => table.category === SEATINGTYPE.LARGE)
              .map((table, index) => (
                <Ellipse21
                  key={index}
                  onClick={() => onSelectSeat(table)}
                  src={seatStatus}
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
          </FlexRow1>
          <FlexRow2>
            <Ellipse21
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
            />
          </FlexRow2>
          <FlexRow3>
            <Ellipse21
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
            />
          </FlexRow3>
        </FlexColumn>
        <FlexColumn1>
          <FlexRow4>
            <Ellipse29 onClick={(e) => onSelectSeat(e)} src={seatStatus} />
            <FlexColumn2>
              <Ellipse21
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
              />
            </FlexColumn2>
            <FlexColumn3>
              <Ellipse19
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
              />
            </FlexColumn3>

            <FlexColumn4>
              <Ellipse20
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
              <Ellipse9
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />
            </FlexColumn4>

            {/* Table 4 */}
            <FlexColumn5>
              <Ellipse18
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
              />
            </FlexColumn5>

            <FlexColumn6>
              <Ellipse21
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />

              <FlexColumn7>
                {/* <Bifiltercircle
                  onClick={(e) => onSelectSeat(e)}
                  src={seatStatus}
                /> */}
                <Ellipse16
                  onClick={(e) => onSelectSeat(e)}
                  src={seatStatus}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </FlexColumn7>
            </FlexColumn6>
          </FlexRow4>

          {/* Desk 1 */}
          <FlexRow5>
            <Ellipse
              onClick={(e) => onSelectSeat(e)}
              src={seatStatus}
              style={{
                cursor: "pointer",
              }}
            />

            {/* Desk two */}
            <FlexRow6>
              <Ellipse14
                onClick={(e) => onSelectSeat(e)}
                src={seatStatus}
                style={{
                  cursor: "pointer",
                }}
              />

              {/* circular table 1 */}
              <FlexRow7>
                <FlexColumn8>
                  <FlexRow8>
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse13
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                  </FlexRow8>
                  <Ellipse12
                    onClick={(e) => onSelectSeat(e)}
                    src={seatStatus}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </FlexColumn8>

                {/* circular table 2 */}
                <FlexColumn9>
                  {}
                  <FlexRow9>
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse10
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                    <Ellipse13
                      onClick={(e) => onSelectSeat(e)}
                      src={seatStatus}
                    />
                  </FlexRow9>
                  <Ellipse6
                    onClick={(e) => onSelectSeat(e)}
                    src={seatStatus}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </FlexColumn9>
              </FlexRow7>
            </FlexRow6>
          </FlexRow5>
        </FlexColumn1>
      </FlexRow>
    </FloorPlanRootRootRoot>
  );
};

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
const FlexColumn4 = styled.div`
  width: 34.8px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 87.1px 0px 0px;
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
const Ellipse18 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
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
const Ellipse16 = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
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
const Ellipse = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 0px 16.5px 0px;
`;
const FlexRow6 = styled.div`
  height: 89.1px;
  gap: 50.3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Ellipse14 = styled.img`
  width: 29px;
  height: 29px;
  align-self: flex-end;
  margin: 0px 0px 13.6px 0px;
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
const Ellipse12 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 0px 23.2px;
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
const Ellipse6 = styled.img`
  width: 29px;
  height: 29px;
  margin: 0px 0px 0px 27.1px;
`;
