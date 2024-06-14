"use client";
import NavMenuItem from "../header/navMenuItem/NavMenuItem";
import "./popupMenu.css";
import CustomButton from "../customButton/CustomButton";

export default function PopupMenu() {
  function closePopup() {
    document.querySelector(".popup").classList.remove("popup_opened");
  }
  return (
    <div class="popup" id="popup-card-form">
      <div class="overlay" id="overlay-add"></div>
      <CustomButton onClick={closePopup}>X</CustomButton>
      <ul className="popup__nav__menu">
        <NavMenuItem className={"popup__link"} href="/">
          Home
        </NavMenuItem>
        <NavMenuItem className={"popup__link"} href="#servicos">
          Serviços
        </NavMenuItem>
        <NavMenuItem className={"popup__link"} href="/cursos">
          Cursos
        </NavMenuItem>
        <NavMenuItem className={"popup__link"} href="#contact">
          contactos
        </NavMenuItem>
      </ul>
      <CustomButton className="nav__btn">Agende Aqui</CustomButton>
    </div>
  );
}
