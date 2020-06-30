export const PASSED = "PASSED";
export const FAILED = "FAILED"
export const WARNING = "WARNING"
export const TOTAL = "TOTAL"
export const KEYWORDS = "KEYWORDS"
export const URL = "URL"



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
export function keywords (keyword1){
  return{
    type: KEYWORDS,
    keyword1: keyword1

  }
}
export function url (url){
  return{
    type: URL,
    url: url

  }
}
      