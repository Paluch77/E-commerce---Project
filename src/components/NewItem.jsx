import { useEffect, useState } from "react";
import "../styles/NewItem.css";
import Header from "./Header";
import xLogo from "../logos/x.png";
import rotate from "../logos/rotate.png";

function NewItem() {
  const [file, setFile] = useState([]);
  const [rotateState, setRotate] = useState("dupa");
  const inputClick = () => {
    const input = document.querySelector(".photo--input");
    input.click();
  };

  const FilesFilter = (x, y) => {
    const files = x.filter(
      (elem) =>
        elem[0].props.children[1].props.children[0].props.alt !== y.target.alt
    );
    return files;
  };

  const deleteImage = (e) => {
    let fileFiltered = file.filter((elem) =>
      elem.length > 1
        ? FilesFilter(elem, e)
        : elem.props.children[1].props.children[0].props.alt !== e.target.alt
    );

    setFile(fileFiltered);
  };

  const rotateImage = (e) => {
    let filesAll = [];
    file.forEach((elem) => {
      if (elem.props.children[1].props.children[0].props.alt === e.target.alt) {
        console.log("jesttu");
        setRotate("rotateimg90");
        filesAll.push(elem);
      } else {
        filesAll.push(elem);
      }
    });
    console.log(filesAll);
    setFile(filesAll);
  };

  const handleImage = (e) => {
    const files = e.target.files;
    let wholeFiles = [];

    Object.values(files).forEach((file) => {
      let imageDiv = (
        <div className="photo--div" key={file.name}>
          <img
            className={"input--photo " + file.name + rotateState}
            src={URL.createObjectURL(file)}
            alt={file.name}
          ></img>
          <div className="photo--buttons">
            <img
              className={"x-logo " + file.name}
              src={xLogo}
              alt={file.name}
            ></img>
            <img className="rotate-logo" src={rotate} alt={file.name}></img>
          </div>
        </div>
      );
      wholeFiles.push(imageDiv);
    });

    setFile((oldArray) =>
      Object.values(oldArray).length > 0 &&
      Object.values(oldArray).length + wholeFiles.length <= 5
        ? [...oldArray, ...wholeFiles]
        : [
            ...oldArray,
            ...wholeFiles.slice(0, 5 - Object.values(oldArray).length),
          ]
    );
  };

  useEffect(() => {
    let docu = document.querySelectorAll(".x-logo");
    let rotateButton = document.querySelectorAll(".rotate-logo");
    let photoButton = document.querySelector(".photo--button");
    let photoButtonPlus = document.querySelector(".photo--button--plus");

    if (file.length > 0) {
      photoButton.style.display = "none";
      photoButtonPlus.style.display = "block";
    } else {
      photoButton.style.display = "block";
      photoButtonPlus.style.display = "none";
    }

    if (file.length >= 5) {
      photoButton.style.display = "none";
      photoButtonPlus.style.display = "none";
    }
    if (docu) {
      docu.forEach((elem) => {
        elem.addEventListener("click", (e) => deleteImage(e));
      });
      rotateButton.forEach((elem) => {
        elem.addEventListener("click", (e) => rotateImage(e));
      });
    }

    return () => {
      docu.forEach((elem) =>
        elem.removeEventListener("click", (e) => deleteImage(e))
      );
      rotateButton.forEach((elem) => {
        elem.addEventListener("click", (e) => rotateImage(e));
      });
    };
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
                <span className="photo--button--plus" onClick={inputClick}>
                  +
                </span>
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
