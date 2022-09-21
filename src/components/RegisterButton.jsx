import { useEffect } from "react";
import "../styles/RegisterButton.css";
import facebook from "../logos/facebook.png";
import apple from "../logos/apple.png";
import google from "../logos/google.png";

function RegisterButton() {
  useEffect(() => {
    const registerButton = document.querySelector(".button--register");
    const registerWindow = document.querySelector(".register--blur");

    registerButton.addEventListener("click", () => {
      registerWindow.classList.add("show");
    });
    registerWindow.addEventListener("click", () => {
      registerWindow.classList.remove("show");
    });
  });
  return (
    <div>
      <a className="button--register">Zarejestruj się | Zaloguj się </a>
      <div className="register--blur">
        <div className="register--window">
          <h2>Dołącz i sprzedawaj swoje ubrania bez opłat</h2>
          <p className="facebook--button">
            <img src={facebook} alt="facebook"></img>Kontynuuj przez Facebook
          </p>
          <p className="google--button">
            <img src={google} alt="facebook"></img>Kontynuuj przez Google
          </p>
          <p className="apple--button">
            <img src={apple} alt="facebook"></img>Kontynuuj,uzywając konta Apple
          </p>
          <p className="email--title">
            Lub Zarejestruj się przez{" "}
            <span className="email--button">E-mail</span>
          </p>
          <p className="login--title">
            Masz ju konto? <span className="login--button">Zaloguj się</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterButton;
