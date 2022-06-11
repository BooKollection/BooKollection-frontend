export const filterObject = (data: unknown, listToFilter: string[]) => {
  const filteredObject = listToFilter.reduce((accumulate, propName) => {
    accumulate[propName] = data[propName]

    return accumulate
  }, {})
  return filteredObject
}
