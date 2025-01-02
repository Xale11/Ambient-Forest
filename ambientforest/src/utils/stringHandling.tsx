export const limitText = (string: string | undefined, charLength: number) => {
  if (!string){
    return ""
  }
  if (string.length <= charLength){
    return string
  }
  const shortenedText = string.substring(0, charLength) + "..."
  return shortenedText
}

export const makeFirstLetterUpper = (string: string | undefined) => {
  if (!string){
    return ""
  }
  const firstLetter = string.charAt(0)

  const firstLetterCap = firstLetter.toUpperCase()

  const remainingLetters = string.slice(1)

  const capitalizedWord = firstLetterCap + remainingLetters

  return capitalizedWord
}