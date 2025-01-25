import React, { useCallback } from "react";
import { Iarr } from "../BusinessLogic/Logic";

interface Icell {
  item: any;
  ind: number;
  clickedIndexes: Array<number>;
  arr: Array<Iarr>;
  setArr: (arg0: any) => void;
  setClickedIndexes: (arg0: any) => void;
  setFlag: (arg0: any) => void;
}

function Cell({ item, ind, clickedIndexes, arr, setArr, setClickedIndexes, setFlag }: Icell) {
  const handleClick = useCallback(() => {
    // if the clickedIndexes clicked is turn to green color
    // i.e if it is clicked then add it to the indexArray
    // else just remove the clickedIndexes clicked from the clickedIndexes array
    let updatedArr = [...arr];
    updatedArr[ind].isClicked = !updatedArr[ind].isClicked;

    let updatedClickedIndex = updatedArr[ind].isClicked
      ? [...clickedIndexes, ind]
      : clickedIndexes.filter((ele) => ele != ind);
    setArr(updatedArr);
    setClickedIndexes(updatedClickedIndex);
    if (clickedIndexes.length + 2 == arr.length) {
      setFlag(true);
    }
  }, [arr, clickedIndexes]);

  return (
    <div
      className="items"
      style={{ backgroundColor: item.isClicked ? "green" : "white" }}
      onClick={handleClick}
    ></div>
  );
}

export default React.memo(Cell);
