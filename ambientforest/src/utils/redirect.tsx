export const customRedirect = (url: string) => {
  if (!url.includes("http://") || !url.includes("https://")){
    window.open(`https://${url}`)
  } else {
    window.open(url)
  }
}