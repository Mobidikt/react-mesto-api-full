import React, { useState, useEffect } from "react";
import {useHistory, Switch, Route, Redirect} from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import VerificationPopup from "./VerificationPopup";
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import Register from './Register';
import Login from './Login';
import { ROUTES_MAP } from '../utils/routesMap';
import author from '../utils/author';
import NotFound from './NotFound';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isVerificationPopupOpen, setVerificationPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [iconPopup, setIconPopup] = useState(true);
  const [email, setEmail] = useState('');
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const history = useHistory();

  useEffect(()=>{   
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      author.getToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
          history.push('/');
        })
        .catch((err) => {
          
          if(err === 401){
            console.log("Переданный токен некорректен");
          } else {
            console.log(`Ошибка: ${err}`);
          }
        });
    }
},[loggedIn, history])
  useEffect(() => {
    if(loggedIn){
      const jwt = localStorage.getItem('jwt');
    api
      .getUserInfo(jwt)
      .then((userInfo) => {
        
        setCurrentUser(userInfo);
        console.log("setCurrentUser", currentUser)
      })
      .catch((err) => {
        console.log(`Данные о пользователе не получены. ${err}`);
      });}
  }, [loggedIn]);
  const handleCardLike = (card) => {
    console.log(card)
    const jwt = localStorage.getItem('jwt');
    console.log("isLiked", isLiked)
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked, jwt)
      .then((newCard) => {
        console.log("newCard", newCard)
         console.log(cards[0]._id)
         console.log("card._id", card._id)
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Ошибка инициализации лайка. ${err}`);
      });
  }
  const handleCardDelete = (card) => {
    const jwt = localStorage.getItem('jwt');
    api
      .deleteCard(card._id, jwt)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Удаление карточки не выполнено. ${err}`);
      });
  }
  const handleAddPlaceSubmit = (card) => {
    const jwt = localStorage.getItem('jwt');
    api
      .createCard(card, jwt)
      .then((res) => {
        const newCard = res;
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка добавления карточки. ${err}`);
      })
      .finally(() => {});
  }
  useEffect(() => {
    if(loggedIn){
      const jwt = localStorage.getItem('jwt');
    api
      .getInitialCards(jwt)
      .then((card) => {
        setCards(card);
      })
      .catch((err) => {
        console.log(`Данные карточек не получены. ${err}`);
      });}
  }, [loggedIn]);

  const handleUpdateUser = (info) => {
    const jwt = localStorage.getItem('jwt');
    api
      .setUserInfo(info, jwt)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных пользователя. ${err}`);
      })
      .finally(() => {});
  }
  const handleUpdateAvatar = (avatar) => {
    const jwt = localStorage.getItem('jwt');
    api
      .setUserAvatar(avatar, jwt)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления аватара. ${err}`);
      })
      .finally(() => {});
  }
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }
  const overlayClose = (e) => {
    if (e.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }
  const setEventListeners = () => {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", overlayClose);
  }
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
    setEventListeners();
  }
  const handleDeleteCardClick = (card) => {
    setVerificationPopupOpen(true);
    setSelectedCard(card);
    setEventListeners();
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
    setEventListeners();
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
    setEventListeners();
  }
  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
    setEventListeners();
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setVerificationPopupOpen(false);
    setImagePopupOpen(false);
    setInfoTooltipOpen(false);
    // setSelectedCard(null);
    document.removeEventListener("keydown", handleEsc);
    document.removeEventListener("click", overlayClose);
  }
  const exit = () => {
    setLoggedIn(false);
  }

  const handleLogin =( password, email ) =>{
    author.login(password, email).then((res)=>{
      localStorage.setItem('jwt', res.token); 
      author.getToken(res.token).then((res)=>{
      setLoggedIn(true);
      setEmail(res.email);
      history.push('/');
    })
    .catch((err)=>{
      if(err === 401){
        console.log("Переданный токен некорректен");
      } else {
        console.log(`Ошибка: ${err}`);
      }
      setIconPopup(false);
      setInfoTooltipOpen(true);
      setEventListeners();
    });
  }).catch((err)=>{
    if (err === 400) {
      return console.log("Не передано одно из полей");
    } 
    if (err === 401){
      return console.log("Пользователь с email не найден");
    } else {
      return console.log(`Ошибка: ${err}`);
    }
  })
};
  const handleRegister =(password, email) =>{
    author.register(password, email)
      .then(()=>{
        setIconPopup(true);
        setInfoTooltipOpen(true);
        setEventListeners();
      history.push('/sign-in');
      })
      .catch((err)=>{
        if (err === 400) {
          setIconPopup(false);
          setInfoTooltipOpen(true);
          setEventListeners();
          return console.log("Некорректно заполнено одно из полей");
        } else {  //если статус ошибки не 400
          setIconPopup(false);
          setInfoTooltipOpen(true);
          setEventListeners();
          return console.log(`Ошибка: ${err}`);
        }
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header 
          email={email}
          login={loggedIn}
          exit={exit}
        />
        <Switch>
          <Route path={ROUTES_MAP.SIGN_UP}>
            <Register onRegister={handleRegister}/>
          </Route>
          <Route path={ROUTES_MAP.SIGN_IN}>
            <Login onLogin={handleLogin}/>
          </Route>
          <ProtectedRoute exact path={ROUTES_MAP.MAIN}
              loggedIn={loggedIn}
              component={Main}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCardClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />
          {/* <Route exact path={ROUTES_MAP.NOT_FOUND}>
            <NotFound login={loggedIn} />
          </Route> */}
          <Route path='*'>{loggedIn ? 
            <Redirect to={ROUTES_MAP.MAIN} /> :
            <Redirect to={ROUTES_MAP.SIGN_IN} />
          }
          </Route>
        </Switch>
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <VerificationPopup
          isOpen={isVerificationPopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          card={selectedCard}
        />
        <InfoTooltip 
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          loged={iconPopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
