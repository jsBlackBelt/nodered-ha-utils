export function mostFrequentElement (array) {
  if (!array.length) {
    return [null, 0];
  }

  if (array.length === 1) {
    return [array[0], 1];
  }

  const map = {};
  let mfi = array[0];
  array.map(el => {
      map[el] = (map[el] || 0) + 1;
      if (map[el] >= map[mfi]) {
          mfi = el;
      }
  });

  return [mfi, map[mfi]];
}
