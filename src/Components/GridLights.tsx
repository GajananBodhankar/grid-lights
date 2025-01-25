import { useEffect, useState } from "react";
import "../styles/style.css";
import Cell from "./Cell";
import { handleTimer } from "../BusinessLogic/Logic";

function GridLights() {
  // states
  const [arr, setArr] = useState(
    [...new Array(9).keys()].map((_item) => ({ isClicked: false }))
  );
  const [clickedIndexes, setClickedIndexes] = useState<Array<any>>([]);
  const [flag, setFlag] = useState(false);

  // effects
  useEffect(() => {
    var timer: any =
      flag && handleTimer(clickedIndexes, setClickedIndexes, setArr, setFlag);
    return () => {
      clearTimeout(timer);
    };
  }, [arr]);

  return (
    <div className="container">
      <div className="grid">
        {arr.map((item, index) => {
          if (index != 4) {
            return (
              <Cell
                key={index}
                item={item}
                ind={index}
                clickedIndexes={clickedIndexes}
                setArr={setArr}
                setClickedIndexes={setClickedIndexes}
                arr={arr}
                setFlag={setFlag}
              />
            );
          }
          return <span key={index}></span>;
        })}
      </div>
    </div>
  );
}

export default GridLights;
