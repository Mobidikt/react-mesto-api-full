import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.find((id) => id === currentUser._id);
  const cardDeleteButtonClassName = `card__btn-delete ${
    isOwn ? "" : "card__btn-delete_invis"
  }`;
  const cardLikeButtonClassName = `card__btn-like ${
    isLiked ? "card__btn-like_active" : ""
  }`;
  function handleClick() {
    onClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDelete() {
    onCardDelete(card);
  }
  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDelete}
      />
      <div className="card__text">
        <p className="card__title">{card.name}</p>
        <div className="card__like">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="card__number-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
