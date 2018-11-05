// returns array with typical price for each day
export const getTypicalPrice = arr => {
  return arr.map(day => ((day.high + day.low + day.close) / 3).toFixed(6));
};

// returns array with specified price for each day- close/open/high/low
export const getPrice = (arr, type) => {
  return arr.map(day => day[type].toFixed(6));
};

// function adds a class to selected elements after component mounts
export const animateFadeIn = (className, classToAdd, timeout = 50) => {
  const elements = document.getElementsByClassName(className);
  setTimeout(() => {
    for (var el of elements) {
      el.classList.add(classToAdd);
    }
  }, timeout);
};

//truncating string to specific length

export const truncate = (s, n, useWordBoundary) => {
  if (s.length <= n) {
    return s;
  }
  var subString = s.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  );
};

//returns how much time passed since date/timestamp

export const timeSince = date => {
  var seconds = Math.floor(new Date().getTime() / 1000 - date);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
