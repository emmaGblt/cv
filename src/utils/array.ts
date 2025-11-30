function getNextItem<T>(currentItem: T, array: Array<T>) {
  const currentItemIndex = array.indexOf(currentItem);

  // currentItem is not present in array
  if (currentItemIndex < 0) return undefined;

  const numberOfItems = array.length;

  // currentItem is the last item => return the first item
  if (currentItemIndex === numberOfItems - 1) return array[0];

  // return the next item in the array
  return array[currentItemIndex + 1];
}

export { getNextItem };
