import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
    e.target.reset();
  };
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button_text="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          name="avatar"
          type="url"
          placeholder="Ссылка на новый аватар"
          className="popup__input"
          id="avatar"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="avatar-error" />
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
