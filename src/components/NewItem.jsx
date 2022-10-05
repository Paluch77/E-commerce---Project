import { useEffect, useState } from "react";
import "../styles/NewItem.css";
import Header from "./Header";
import xLogo from "../logos/x.png";
import rotate from "../logos/rotate.png";

function NewItem() {
  const [file, setFile] = useState("");

  const inputClick = () => {
    const input = document.querySelector(".photo--input");
    input.click();
  };

  const Examplefun = (x, y) => {
    const files = x.filter(
      (elem) =>
        elem[0].props.children[1].props.children[0].props.alt !== y.target.alt
    );
    console.log(files);
    return files;
  };

  const deleteImage = (e) => {
    let fileFiltered = file.filter((elem) =>
      elem.length > 1
        ? Examplefun(elem, e)
        : elem[0].props.children[1].props.children[0].props.alt !== e.target.alt
    );

    setFile(fileFiltered);
  };
  const handleImage = (e) => {
    const files = e.target.files;
    let wholeFiles = [];

    Object.values(files).forEach((file) => {
      let imageDiv = (
        <div className="photo--div" key={file.name}>
          <img
            className="input--photo"
            src={URL.createObjectURL(file)}
            alt={file.name}
          ></img>
          <div className="photo--buttons">
            <img
              className={"x-logo " + file.name}
              src={xLogo}
              alt={file.name}
            ></img>
            <img className="rotate-logo" src={rotate} alt="rotate"></img>
          </div>
        </div>
      );
      wholeFiles.push(imageDiv);
    });
    console.log(wholeFiles);
    setFile((oldArray) =>
      oldArray.length > 0 ? [...oldArray, wholeFiles] : [wholeFiles]
    );
  };

  useEffect(() => {
    let docu = document.querySelectorAll(".x-logo");
    if (docu) {
      docu.forEach((elem) => {
        elem.addEventListener("click", (e) => deleteImage(e));
      });
    } else console.log(docu);
    return () =>
      docu.forEach((elem) =>
        elem.removeEventListener("click", (e) => deleteImage(e))
      );
  }, [file]);

  return (
    <div>
      <Header></Header>
      <div className="site">
        <div className="new__item">
          <div className="item--title">
            <h2>Sprzedaj Ubranie</h2>
          </div>

          <div className="item--form">
            <div className="form--input--photo">
              <p>Dodaj do 5 zdjęć.</p>
              <div className="photo--button--wrapper">
                <span className="photo--button" onClick={inputClick}>
                  + Dodaj Zdjęcie
                </span>
                <input
                  type="file"
                  className="photo--input"
                  multiple
                  onChange={handleImage}
                ></input>
                {file}
                {/* <div className="photo--div">
                  <img className="input--photo" src={file} alt={file}></img>
                  <img className="x-logo" src={xLogo}></img>
                  <img className="rotate-logo" src={rotate}></img>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
