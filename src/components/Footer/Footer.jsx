import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container footer1">
        <div className="footer-card">
          <img
            className="f-advokatim"
            src="/img/advokatim.png"
            alt="advokatim"
          />
          <p>
            <code>Advokatim.uz</code> – mijozlarga <br /> yuristlik va
            advokatlik xizmatini <br /> uydan chiqmagan holda foydalanish <br />
            imkonini beruvchi platforma.{" "}
          </p>
          <div className="links-f">
            <img
              src="/icons/telegram.svg"
              width={42.18}
              height={42.18}
              alt="telegram"
            />{" "}
            <img
              src="/icons/instagram.svg"
              width={42.18}
              height={42.18}
              alt="telegram"
            />{" "}
            <img
              src="/icons/youtube.svg"
              width={42.18}
              height={42.18}
              alt="telegram"
            />{" "}
            <img
              src="/icons/facebook.svg"
              width={42.18}
              height={42.18}
              alt="telegram"
            />
          </div>
        </div>
        <div className="footer-card2">
          <h5>Aloqa uchun</h5>
          <p>
            Farg‘ona viloyati, Farg‘ona shahar, <br /> Sayilgoh ko‘chasi 111
          </p>
          <a href="email">
            <code>Email:</code> advokatim@gmail.com <br /> <br />
          </a>
          <a href="tell:">
            <code>Phone:</code> +998 99 12345 67 <br />
            <br />
            <br />
          </a>
          <code className="yonaltirish">Yo‘naltirish → </code>
        </div>
        <div className="footer-card-3">
          <h5>Yuridik amaliyotlar</h5>
          <ul className="links-footer1">
            <li>
              <Link className="links-footer">→ bankrot</Link>
            </li>
            <li>
              <Link className="links-footer">→ Sud vakilligi</Link>
            </li>
            <li>
              <Link className="links-footer">→ Fuqaro sudlari</Link>
            </li>
            <li>
              <Link className="links-footer">→ meros boʻyicha yordam</Link>
            </li>
            <li>
              <Link className="links-footer">→ Biznesga yuridik yordam</Link>
            </li>
          </ul>
        </div>
        <div className="footer-card4">
          <h5>Yangiliklar</h5>
          <p>
            So‘ngi yangiliklardan xabardor bo‘lish <br />
            uchun ro‘yxatdan o‘ting
          </p>
          <form action="">
            <input type="email" placeholder="Email pochta*" />
            <button>Ro‘yxatdan o‘tish</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
