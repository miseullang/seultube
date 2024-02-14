import React from 'react'
import { MdOutlineWbTwilight } from "react-icons/md";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { SiTistory } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";
import { RiKakaoTalkFill } from "react-icons/ri";

import { CiYoutube } from "react-icons/ci";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className="headerLogo">
            <a href='/'>
                <em aria-hidden='true'><CiYoutube /></em>
                <span>seultube</span>
            </a>
        </h1>
        <nav className="headerMenu">
            <ul className='menu'>
                <li className='active'>
                    <a href='/'>
                        <MdOutlineWbTwilight /> 미슬랭
                    </a>
                </li>
                <li>
                    <a href='/today'>
                        <CiMoneyBill /> 추천 영상
                    </a>
                </li>
                <li>
                    <a href='/developer'>
                        <CiCoins1 /> 추천 개발자
                    </a>
                </li>
                <li>
                    <a href='/webdesign'>
                        <CiBoxes /> 웹디자인기능사
                    </a>
                </li>
                <li>
                    <a href='/website'>
                        <CiBullhorn /> 웹표준 사이트
                    </a>
                </li>
                <li>
                    <a href='/gsap'>
                        <CiCoffeeCup /> GSAP Parallax
                    </a>
                </li>
                <li>
                    <a href='/port'>
                        <CiDumbbell /> 포트폴리오 사이트
                    </a>
                </li>
                <li>
                    <a href='/youtube'>
                        <CiFries /> 유튜브 클론 사이트
                    </a>
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href='/search/webstoryboy'>miseullang</a>
                </li>
                <li>
                    <a href='/search/html'>HTML</a>
                </li>
                <li>
                    <a href='/search/css'>CSS</a>
                </li>
                <li>
                    <a href='/search/javascript'>JQuery</a>
                </li>
                <li>
                    <a href='/search/javascript'>JavaScript</a>
                </li>
                <li>
                    <a href='/search/react.js'>React.js</a>
                </li>
                <li>
                    <a href='/search/React Portfolio'>portfolio</a>
                </li>
                <li>
                    <a href='/search/NewJeans'>music</a>
                </li>
            </ul>
        </nav>
        <div className="headerSns">
            <ul>
                <li>
                    <a href='https://github.com/miseullang' rel='noopener noreferrer'>
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a href='https://miseullang.github.io/portfolio_ver.2/' rel='noopener noreferrer'>
                        <IoMdDocument />
                    </a>
                </li>
                <li>
                    <a href='https://miseullang.tistory.com/' rel='noopener noreferrer'>
                        <SiTistory />
                    </a>
                </li>
                <li>
                    <a href='https://open.kakao.com/o/syEly7Yf' rel='noopener noreferrer'>
                        <RiKakaoTalkFill />
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
