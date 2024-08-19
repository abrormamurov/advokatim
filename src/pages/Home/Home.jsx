import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import AdvokatlarMinbari from "../../components/HomeAdvokat/AdvokatlarMinbari";
function Home() {
  return (
    <div>
      <div className="  home bg-cover bg-no-repeat bg-center p-4 md:p-0 container">
        <h1 className="text-5xl md:text-[107.3px] font-bold text-white uppercase pt-16 md:pt-32">
          Masofaviy <br /> yuridik yordam
        </h1>

        <p className="text-white bg-black bg-opacity-50 backdrop-blur-lg rounded-lg p-4 md:p-6 mt-6 md:mt-12 mb-6 text-xl md:text-2xl home-p">
          Malakali yuristlar va advokatlar xizmatidan onlayn foydalaning. Biz
          sizga eng tezkor, ishonchli va professional xizmat ko'rsatamiz.
          O'zbekistonning eng yaxshi yurist va advokatlari javob beradilar.
        </p>
        <div className="links-home flex flex-col md:flex-row items-center gap-4 md:gap-8 pb-8 md:pb-32">
          <NavLink className="link-home1 bg-blue-600 text-white w-full md:w-auto text-center flex items-center justify-center gap-2 md:gap-[8px] py-[18.29px] md:py-[18.29px] px-[28px] md:px-[28px] rounded-[4px] text-[18px] font-Urbanist">
            <img
              src={process.env.PUBLIC_URL + "/icons/savol.svg"}
              width={26.89}
              height={26.89}
              alt="Savol bering"
            />
            Savol bering
          </NavLink>
          <NavLink className="link-home2 bg-white text-blue-600 w-full md:w-auto text-center flex items-center justify-center gap-2 md:gap-[8px] py-[18.29px] md:py-[18.29px] px-[28px] md:px-[28px] rounded-[4px] text-[18px] font-Urbanist">
            <img
              src={process.env.PUBLIC_URL + "/icons/advokat1.svg"}
              width={26.89}
              height={26.89}
              alt="Advokat tanlang"
            />
            Advokat tanlang
          </NavLink>
          <NavLink className="link-home3 bg-white text-blue-600 w-full md:w-auto text-center flex items-center justify-center gap-2 md:gap-[8px] py-[18.29px] md:py-[18.29px] px-[28px] md:px-[28px] rounded-[4px] text-[18px] font-Urbanist">
            <img
              src={process.env.PUBLIC_URL + "/icons/yurist1.svg"}
              width={26.89}
              height={26.89}
              alt="Yurist tanlang"
            />
            Yurist tanlang
          </NavLink>
        </div>
      </div>

      <div className="">
        <AdvokatlarMinbari />
      </div>
    </div>
  );
}

export default Home;
