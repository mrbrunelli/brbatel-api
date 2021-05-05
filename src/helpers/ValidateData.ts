export class ValidateData {
  /**
   * @param validFormat - A valid format of data. Ex: ["name", "email", "age"]
   * @param receivedData - A object to compare with validFormat. Ex: {name: "john", age: 22} returns false
   */
  static isValidData(validFormat: Array<string>, receivedData: object): boolean {
    return validFormat.every((key) => Object.keys(receivedData).includes(key));
  }
}
