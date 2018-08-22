 
  export function isUndefined(value) {
    return value === undefined;
  }

  export function isNull(value) {
    return value === null;
  }

  export function isTrue(value) {
    if(value) {
      return true;
    }
    return false;
  }

  export function isTrueNotUndefined(value) {
    if(value !== undefined) {
      return true
    }
    return false;
  }

  export function isType(value, type) {
    return value.constructor === type;
  }

  export function isSimpleType(value) {
    if(typeof value !== 'object') {
      return true;
    }
    return false;
  }
