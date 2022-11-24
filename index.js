// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return (someValue - 42); 
  }
  else {
    return (42 - someValue);
  }
}

function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue)
  const feet = blocks * 264
  return feet
}

function distanceTravelledInFeet(start, destination) {
  let a = (destination - start)
  let b = (start - destination)
  if (start > destination) {
      return -264 * a
    }
    else if (start < destination) {
      return -264 * b 
    }
}

function calculatesFarePrice(start, destination) {
  let c = (destination - start)
  let d = distanceTravelledInFeet(start, destination)
    if (c < 400) {
      return 0;
    }
    else if (c > 400 || c < 2000) {
      return (d - 400) * .02;
    }
    else if (c > 2000 && c < 2500) {
      return 25;
    }
    else if (c > 2500) {
      return 'cannot travel that far';
    }
  }
    