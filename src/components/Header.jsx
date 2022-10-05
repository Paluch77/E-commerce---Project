import { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../logos/vinted.jpeg";
import "font-awesome/css/font-awesome.min.css";
import RegisterButton from "./RegisterButton";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [choice, setChoice] = useState("");

  useEffect(() => {
    const choiceBar = document.querySelector(".searchBar--choice");
    const options = document.querySelectorAll(".dropdown--option");
    const dropdown = document.querySelector(".choice--dropdown");
    const functionTest = (e) => {
      setChoice(e.target.textContent);
      console.log(e.target.textContent);
      dropdown.style.left = "-999rem";
    };
    choiceBar.addEventListener("click", () => (dropdown.style.left = "auto"));
    options.forEach((option) => {
      option.addEventListener("click", functionTest);
    });
    return () => {
      options.forEach((option) => {
        option.removeEventListener("click", functionTest);
      });
      choiceBar.removeEventListener(
        "click",
        () => (dropdown.style.left = null)
      );
    };
  });
  return (
    <div className="header">
      {/* LOGO */}

      <NavLink to="/">
        <img src={logo} alt="logo" className="header--img"></img>
      </NavLink>

      {/* SEARCH BAR */}
      <div className="header__searchBar">
        <p className="searchBar--choice">{choice ? choice : "Przedmioty  "}</p>
        <span className="triangle-bottom"></span>
        <div className="choice--dropdown">
          <p className="dropdown--option">Przedmioty</p>
          <p className="dropdown--option">Użytkownicy</p>
          <p className="dropdown--option">Forum</p>
          <p className="dropdown--option">Centrum Pomocy</p>
        </div>
        <div className="header--border"></div>
        <input
          className="searchBar--bar"
          placeholder="Szukaj przedmiotów"
        ></input>
      </div>
      {/* LOGIN/LOGOUT BUTTON */}
      <div className="header--buttons">
        <RegisterButton></RegisterButton>
        <Link className="wrapper__button" to="/item/new">
          <button className="button--sell">Sprzedaj</button>
        </Link>
      </div>
      {/* SELL BUTTON */}
      {/* LANGUAGE */}
    </div>
  );
}

export default Header;
