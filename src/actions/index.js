export const PASSED = "PASSED";
export const FAILED = "FAILED"
export const WARNING = "WARNING"
export const TOTAL = "TOTAL"

export function passed () {
 return {
  type: PASSED,
  }
}
export function failed () {
  return {
    type: FAILED,
  }
}
export function warning () {
  return {
    type: WARNING
  }
}
export function total (){
  return {
    type: TOTAL
  }
}
      