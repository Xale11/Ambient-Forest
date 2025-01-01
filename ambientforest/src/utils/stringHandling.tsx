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