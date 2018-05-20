/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" and "headers" or "err"
 */
export default function request(url, options) {

    return fetch(url, options).then((response) => {
      const { status, headers } = response;

      if (status >= 200 && status < 300) {
        if (status === 204) {
          return { data: null, headers };
        }
  
        return response.json().then((data) => ({ data, headers }));
      }
      if (headers.get('Content-Type') !== 'application/json') {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
  
      return response.json().then((data) => {
        const error = new Error(data.message || response.statusText);
        error.response = response;
        error.data = data;
        console.log('je passe');
        throw error;
      });
    });
  }
  