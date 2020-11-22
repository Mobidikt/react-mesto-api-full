import { API_URL } from './constant';

class Api {
  constructor({ serverUrl }) {
    this._serverUrl = serverUrl;
  }

  _fetch(url, params) {
    return fetch(this._serverUrl + url, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  getUserInfo(jwt) {
    return this._fetch('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
    });
  }
  //редактирование информации профиля
  setUserInfo(info, jwt) {
    return this._fetch('/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    });
  }
  //редактирование информации профиля
  setUserAvatar(info, jwt) {
    return this._fetch('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: info,
      }),
    });
  }
  //добавление карточки
  getInitialCards(jwt) {
    return this._fetch('/cards', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
  }
  createCard(info, jwt) {
    return this._fetch('/cards', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      }),
    });
  }
  //удаление карточки
  deleteCard(cardId, jwt) {
    return this._fetch(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
  //  Реализация лайка
  createLike(cardId, jwt) {
    return this._fetch(`/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
  deleteLike(cardId, jwt) {
    return this._fetch(`/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
  changeLikeCardStatus(cardId, isLiked, jwt) {
    return this._fetch(`/cards/likes/${cardId}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
}

// const api = new Api({
//   serverUrl: "http://localhost:3000",
// });
const api = new Api({
  serverUrl: API_URL,
});
export default api;
