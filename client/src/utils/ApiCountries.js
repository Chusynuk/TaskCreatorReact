import config from '../config';

export function ApiCountries(chatId, message) {
  const request = {
    method: 'GET',
    // headers: getFullHeaders(),
    body: JSON.stringify({ message }),
  };
  return fetch(config.config + '/countries/', request)
    .then(res => {
      if (!res.ok) throw res.status;
      return res.json();
    })
    .then(resJson => {
      if (resJson.errors && resJson.errors.length > 0) {
        throw resJson;
      }
      return resJson;
    });
}
