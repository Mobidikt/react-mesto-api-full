import React from 'react';
import success from '../images/popup/success.svg';
import failure from '../images/popup/failure.svg';

function InfoTooltip({isOpen, onClose, loged}) {
  const open = isOpen && "popup_opened";
  const handleClickClose = () => {
    onClose();
  }
  return (
    <div
      className={`popup popup_type_info ${open}`}
    >
      <div className={`popup__container popup__container_info`}>
        <img className='popup__image' src={loged ? success : failure} alt='Ответ от сервера'/>
        <h3 className="popup__title popup__title_login">{loged? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h3>
        <button
          type="button"
          className="popup__close"
          onClick={handleClickClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;