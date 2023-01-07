/**
 * Created by Linu Sherin Issac
 * on Jan 07, 2023
 * API main method General api to acces data from web
 */

export default function api(path, params, method) {
  console.log('API METHOD: ===', method);
  console.log('API PARAMS: ===', params);
  console.log('API URL', path);

  let options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: method,
    body: JSON.stringify(params),
  };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => resolve(jsonResponse))
      .catch(error => reject(error));
  });
}
