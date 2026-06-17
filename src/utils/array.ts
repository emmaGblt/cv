function getNextItem<T>(currentItem: T, array: Array<T>) {
  if (array.length === 0) return undefined;

  const currentItemIndex = array.indexOf(currentItem);

  if (currentItemIndex < 0) return undefined;

  return array[(currentItemIndex + 1) % array.length];
}

export { getNextItem };
