
/*
  array: array will sorted
  order: array will base on it to sort
  key: use key to sort. EX: use id -> key replaced by 'id'
*/

export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}
