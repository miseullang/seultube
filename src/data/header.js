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

export const headerMenus = [
    {
        title: "미슬랭",
        icon: <CiYoutube />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <CiBoxes />,
        src: "/webdesign"
    },
    {
        title: "웹표준 사이트",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "miseullang",
        src: "/search/miseullang"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "JQuery",
        src: "/search/JQuery"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/miseullang",
        icon: <AiFillGithub />
    },
    {
        title: "portfolio",
        url: "https://miseullang.github.io/portfolio_ver.2/",
        icon: <IoMdDocument />
    },
    {
        title: "tistoty",
        url: "https://miseullang.tistory.com/",
        icon: <SiTistory />
    },
    {
        title: "kakao",
        url: "https://open.kakao.com/o/syEly7Yf",
        icon: <RiKakaoTalkFill />
    },
]
