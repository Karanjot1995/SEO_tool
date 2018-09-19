export const INCREMENT = "INCREMENT";
export const FAILED = "FAILED"

export function increment () {
 return {
  type: INCREMENT,
  }
}
export function failed () {
  return {
    type: FAILED,
  }
}
      