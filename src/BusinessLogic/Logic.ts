export interface Iarr {
  isClicked: boolean;
}
function handleTimer(
  index: number[],
  setIndex: (arg0: (prev: Array<number>) => number[]) => void,
  setArr: (arg0: (prev: Array<Iarr>) => Iarr[]) => void,
  setFlag: (arg0: boolean) => void
) {
  return setTimeout(() => {
    // change the last clicked index to false from the arr and
    // remove the last clicked index from the index array
    setArr((prev: Array<Iarr>) => {
      let result = [...prev];
      index[0] >= 0 ? (result[index[0]].isClicked = false) : null;
      return result;
    });
    setIndex((prev: Array<number>) => {
      let res = [...prev];
      res.shift();
      if (!res.length) {
        setFlag(false);
      }
      return res;
    });
  }, 1000);
}

export { handleTimer };
