import React, { useState } from "react";
import "./AdvokatlarMinbari.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function AdvokatlarMinbari() {
  const [ratings, setRatings] = useState([0, 0, 0]);

  const handleStarClick = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  return (
    <>
      <div className="container container-adv ">
        <div className="top-advokatlar">
          <h2>Top advokatlar</h2>
          <div className="advokat-users-top flex justify-center">
            <button className="button1">
              <IoIosArrowBack size={52} />
            </button>
            <div className="advokat-users">
              <img
                className="user-img1"
                src="/img/user.png"
                width={173.61}
                height={203.93}
                alt="User"
              />
              <h5 className="h5">Voxidov anvarbek mirzobekovich</h5>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < ratings[0] ? "selected" : ""}`}
                    onClick={() => handleStarClick(0, i + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <button className="btn1">Litsenziya faol</button>
              <a href="tel:">+998 90 123 44 45</a>
              <p className="advokt-users-p">Odil huquq</p>
            </div>
            <div className="advokat-users2">
              <img
                className="user-img2"
                src="/img/user.png"
                width={224.47}
                height={263.68}
                alt="User"
              />
              <h5 className="h5">Voxidov anvarbek mirzobekovich</h5>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < ratings[1] ? "selected" : ""}`}
                    onClick={() => handleStarClick(1, i + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <button className="btn1">Litsenziya faol</button>
              <a href="tel:">+998 90 123 44 45</a>
              <p>Odil huquq</p>
            </div>
            <div className="advokat-users">
              <img
                className="user-img1"
                src="/img/user.png"
                width={173.61}
                height={203.93}
                alt="User"
              />
              <h5 className="h5">Voxidov anvarbek mirzobekovich</h5>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < ratings[2] ? "selected" : ""}`}
                    onClick={() => handleStarClick(2, i + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <button className="btn1">Litsenziya faol</button>
              <a href="tel:">+998 90 123 44 45</a>
              <p className="advokt-users-p">Odil huquq</p>
            </div>
            <button className="button1">
              <IoIosArrowForward size={52} />
            </button>
          </div>
          <div className="flex justify-center">
            <Link className="advotaklar-list ">Barchasini ko‘rsatish </Link>
          </div>{" "}
        </div>
      </div>
      <div>
        <div className="bizning-natijalar container">
          <h2>bIZNING nATIJALAR</h2>
          <div className="cards">
            <div className="card">
              <img
                src="/icons/users.svg"
                alt="users"
                width={51}
                height={46.86}
              />
              <h3>1000+</h3>
              <p>bizning mijozlar</p>
            </div>
            <div className="card">
              <img
                src="/icons/diplomat.svg"
                alt="users"
                width={51}
                height={46.86}
              />
              <h3>5000+</h3>
              <p>ADVOKATLAR</p>
            </div>{" "}
            <div className="card">
              <img src="/icons/sms.svg" alt="users" width={51} height={46.86} />
              <h3>998</h3>
              <p>BERILGAN SAVOLLAR</p>
            </div>{" "}
            <div className="card">
              <img
                src="/icons/list.svg"
                alt="users"
                width={51}
                height={46.86}
              />
              <h3>956</h3>
              <p>BERILGAN JAVOBLAR</p>
            </div>{" "}
            <div className="card">
              <img src="/icons/sud.svg" alt="users" width={51} height={46.86} />
              <h3>7+</h3>
              <p>SOHADAGI FAOLIYAT</p>
            </div>
          </div>
        </div>
        <div className="advokat-minbari container">
          <h2>advOkat minbari</h2>
          <div className="user-card">
            <div className="user1">
              <span className="span-con">
                {" "}
                <img
                  src="/icons/sud2.svg"
                  width={40.79}
                  height={38.92}
                  alt="sud2"
                />
              </span>
              <span className="hover-text">
                <p>
                  Merosdan vos kechish: jarayonning nozik jihatlari va ariza
                  yozish.
                </p>
                <h5>Vohidov Anvarbek</h5>
                <Link
                  href="link-to-read-more"
                  className="read-more-link"
                ></Link>
              </span>
            </div>{" "}
            <div className="user1">
              <span className="span-con">
                {" "}
                <img
                  src="/icons/tarozi.svg"
                  width={40.79}
                  height={38.92}
                  alt="sud2"
                />
              </span>
              <span className="hover-text">
                <p>
                  Merosdan vos kechish: jarayonning nozik jihatlari va ariza
                  yozish.
                </p>
                <h5>Vohidov Anvarbek</h5>
                <Link
                  href="link-to-read-more"
                  className="read-more-link"
                ></Link>
              </span>
            </div>{" "}
            <div className="user1">
              <span className="span-con">
                {" "}
                <img
                  src="/icons/users2.svg"
                  width={40.79}
                  height={38.92}
                  alt="sud2"
                />
              </span>
              <span className="hover-text">
                <p>
                  Merosdan vos kechish: jarayonning nozik jihatlari va ariza
                  yozish.
                </p>
                <h5>Vohidov Anvarbek</h5>
                <Link
                  href="link-to-read-more"
                  className="read-more-link"
                ></Link>
              </span>
            </div>
          </div>
        </div>
        <div className="xizmatlarimiz container">
          <h2>Xizmatlarimiz</h2>
          <div className="btnn">
            <Link className="button-personal">Advokat yollash</Link>
            <Link className="button-personal">Protsessual tartiblash</Link>
            <Link className="button-personal">Huquqiy yordam</Link>
          </div>
        </div>
        <div className="hamkorlarimiz container">
          <h2>Hamkorlarimiz</h2>
          <div className="ichki-ishlar">
            <span className="ichki">
              <img src="/icons/palatasi.svg" alt="palatasi" />
              <h4>
                O‘zbekiston Respublikasi <br /> Advokatlar Palatasi
              </h4>
            </span>{" "}
            <span className="ichki">
              <img src="/icons/IIV.svg" alt="palatasi" />
              <h4>
                O‘zbekiston Respublikasi <br />
                Ichki ishlar vazirligi
              </h4>
            </span>{" "}
            <span className="ichki">
              <img src="/icons/adliya.svg" alt="palatasi" />
              <h4>
                O‘zbekiston Respublikasi <br />
                adliya vazirligi
              </h4>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvokatlarMinbari;
