import { upperCaseFirstLetter } from '../../utils/upperCaseFirstLetter'

describe("upperCaseFirstLetter", () => {
  it("Converts the first letter to uppercase", () => {
    const input = "hello"
    const output = "Hello"
    expect(upperCaseFirstLetter(input)).toEqual(output)
  })
})