export const upperCaseFirstLetter = (value: string) => {
  return value.substr(0, 1).toUpperCase() + value.substr(1, value.length - 1)
}