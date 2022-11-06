// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    let msHours = h * 3600000;
    let msMin = m * 60000;
    let msSec = s * 1000
    let msAfterMidnight = msHours + msMin + msSec;
    return msAfterMidnight;
}

function past2(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
}