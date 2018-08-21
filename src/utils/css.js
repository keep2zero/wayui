function endWith(end) {
  return this.substr(this.length - end.length) === end;
}
const EMUNIT = 0.0625;
export function toEm(value) {
  if(typeof value === 'string') {
    if(endWith.call(value, 'px')) {
       const num = parseFloat(value.substr(0, value.length - 2));
       console.log(num * EMUNIT, "num")
       return (num * EMUNIT) + 'em'; 
    }
  } else if (typeof value === "number") {
    return (value * EMUNIT) + 'em';
  } 
  return value;
}