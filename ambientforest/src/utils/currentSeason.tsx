// Spring: March 1 – May 31
// Summer: June 1 – August 31
// Autumn (Fall): September 1 – November 30
// Winter: December 1 – February 28 (or February 29 in leap years)

export const getCurrentSeason = () => {
  const date = new Date(Date.now()).getUTCMonth()
  if (date === 11 || (date >= 0 && date <= 1)){
    return "winter"
  } else if (date >= 2 && date <= 4){
    return "spring"
  } else if (date >= 5 && date <= 7){
    return "summer"
  } else if (date >= 8 && date <= 10){
    return "autumn"
  } else { // will never reach
    return "winter"
  }
}