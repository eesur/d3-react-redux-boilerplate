export const selectItem = (item) => {
  console.log('You clicked on user: ', item.title)
  return {
    type: 'ITEM_SELECTED',
    payload: item
  }
}
