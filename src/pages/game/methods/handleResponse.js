const handleResponse = (response, fetchingSubject) => {
  if (response.status !== 200) {
    throw new Error(`Looks like there was a problem with fetching ${fetchingSubject}. Status Code: ${response.status}`)
  }
  return response.json()
}

export default handleResponse;
