class Author {
  constructor({ serverUrl }) {
    this._serverUrl = serverUrl;
  }

  _fetch(url, params) {
    return fetch(this._serverUrl + url, params).then((res) => {
      console.log("fetch")
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }
  getToken(token) {
    return this._fetch("/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`,
        },
    });
  }
  login (password, email) {
    return this._fetch("/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    });  
  }
  register (password, email) { 
    return this._fetch("/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email }),
    });
  }
}
const author = new Author({
  serverUrl: 'http://localhost:3000'
});
export default author;
