import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import products from "../products.json";
import "../styles/ProductSite.css";
import approved from "../logos/approved.png";
import orlen from "../logos/orlen.png";
import dpd from "../logos/dpd.png";

function ProductSite() {
  const { id } = useParams();
  let product = {};
  products.forEach((elem) => {
    if (elem.id === parseInt(id)) {
      product = elem;
    }
  });
  console.log(product);
  return (
    <div>
      <Header></Header>
      <div className="product__background">
        <div className="product__info">
          <div className="product__leftside">
            <img
              src={product.image}
              alt="product"
              className="leftside--image"
            ></img>
          </div>
          <div className="product__rightside">
            <div className="rightside--price">
              <h3 className="price">{product.price} zł</h3>
              <p className="price--description">
                Cena przedmiotu i wszystkie pozostałe opłaty są przeliczone na
                twoją walutę.{" "}
                <span className="description--moreinfo">
                  Dowiedz się więcej.
                </span>
              </p>
            </div>
            <div className="rightside--customersecurity">
              <div className="customersecurity">
                <img
                  src={approved}
                  alt="logo"
                  className="customersecurity--logo"
                ></img>
                <p className="logo--description">
                  Opłata za ochronę kupujących <br></br>
                  <span className="logo--price">
                    2,90 zł + 5% ceny przedmiotu
                  </span>
                </p>
              </div>

              <p className="customersecurity--description">
                Każdy zakup dokonany za pomocą przycisku „Kup teraz” jest objęty
                naszą{" "}
                <span className="description--info">Ochroną Kupujących</span>{" "}
                podlegającą dodatkowej opłacie. W skład Ochrony Kupujących
                wchodzi nasza{" "}
                <span className="description--return">Polityka zwrotów</span>.
              </p>
            </div>
            <div className="rightside--shipment">
              <table>
                <tr>
                  <td className="shipment--name">
                    <img
                      src={orlen}
                      alt="logo"
                      className="shipment--logo"
                    ></img>
                    ORLEN Paczka
                  </td>
                  <td className="shipment--price">7.17zł</td>
                </tr>
                <tr>
                  <td className="shipment--name">
                    {" "}
                    <img src={dpd} alt="logo" className="shipment--logo"></img>
                    DPD Pickup
                  </td>
                  <td className="shipment--price">8.15zł</td>
                </tr>
              </table>
            </div>
            <div className="rightside--product--table">
              <table>
                <tr>
                  <td className="table--desc">MARKA</td>
                  <td className="table--info">NIKE</td>
                  <td className="table--ext">...</td>
                </tr>
                <tr>
                  <td className="table--desc">ROZMIAR</td>
                  <td className="table--info">44</td>
                  <td className="table--ext">...</td>
                </tr>
                <tr>
                  <td className="table--desc">STAN</td>
                  <td className="table--info">DOBRY</td>
                  <td className="table--ext"></td>
                </tr>
                <tr>
                  <td className="table--desc">KOLOR</td>
                  <td className="table--info">CZARNY</td>
                  <td className="table--ext"></td>
                </tr>
                <tr>
                  <td className="table--desc">LOKALIZACJA</td>
                  <td className="table--info">KRAKÓW</td>
                  <td className="table--ext"></td>
                </tr>
                <tr>
                  <td className="table--desc">LICZBA WYŚWIETLEŃ</td>
                  <td className="table--info-counter">0</td>
                  <td className="table--ext"></td>
                </tr>
                <tr>
                  <td className="table--desc">DODANE</td>
                  <td className="table--info">6 GODZIN TEMU</td>
                  <td className="table--ext"></td>
                </tr>
              </table>
            </div>
            <div className="rightside--description">
              <p>{product.description}</p>
              <span className="description--favourite" key={product.id}>
                Dodaj do ulubionych
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSite;
