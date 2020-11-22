import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
  };

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      button_text="Создать"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          name="name"
          type="text"
          placeholder="Название"
          className="popup__input popup__input_mesto"
          maxLength="30"
          minLength="1"
          id="mesto"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="mesto-error" />
      </label>
      <label className="popup__field">
        <input
          name="src"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_src"
          id="src"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="src-error" />
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
