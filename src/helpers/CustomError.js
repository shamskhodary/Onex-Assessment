class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
export default CustomError;
