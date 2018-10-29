export default class DateFormat {
  static getDate(format) {
    const regex = /[^\w]+/g;
    const formats = format.split(regex);
    const splits = format.match(regex);

    const date = new Date();
    const time = [];


    formats.forEach((element,index) => {
      if(element === 'yyyy') {
        time.push(date.getFullYear(), splits[index]);
      }

      if(element === 'yy') {
        time.push(date.getFullYear().substr(-1, 2), splits[index]);
      }

      if(element === 'MM') {
        time.push(date.getMonth() + 1, splits[index]);
      }

      if(element === 'dd') {
        time.push(date.getDate(), splits[index]);
      }

      if(element === 'HH') {
        time.push(date.getHours(), splits[index]);
      }

      if(element === 'mm') {
        time.push(date.getMinutes(), splits[index]);
      }

      if(element === 'ss') {
        time.push(date.getSeconds(), splits[index]);
      }
    });

    console.log("time:", time.join(''))
  }


  static parseDate(date, format) {
    const regex = /[^\w]+/g;
    const formats = format.split(regex);
    const splits = format.match(regex);
    
    const dateSplits = date.match(regex);

    if(!DateFormat.eq(dateSplits, splits)) return;

    

  }

  static eq(arr1, arr2) {
    let same = true;
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        same = false;
        break;
      }
    }
    return same
  }
}