export const httpGetJson = <T>(url: string): Promise<T> => {
  // Use XMLHttpRequest instead of fetch() in case we need to support Internet Explorer later
  // Also, no need to use a library like Axios yet, but consider moving to it later if needed
  return new Promise(resolve => {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText)
          resolve(response as T)
        }
      }
    }
    request.send()
  })
}