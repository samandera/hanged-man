

const fetchIdiomsIndexesList = (url) => {
  return fetch(
    url,
    {
      method: 'get',
      mode: "cors"
    }
  ).then(response => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(data => console.log(data));
  })
}

export default fetchIdiomsIndexesList;
