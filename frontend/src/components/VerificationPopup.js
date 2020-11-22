import React from "react";
import PopupWithForm from "./PopupWithForm";

function VerificationPopup({ card, isOpen, onClose, onDeleteCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCard(card);
  };
  return (
    <PopupWithForm
      name="verification"
      title="Вы уверены?"
      button_text="ДА"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
export default VerificationPopup;
