import React from 'react'
import Main from '../components/section/Main'
import Developer from '../components/contents/Developer'
import Today from '../components/contents/Today'
import Webdesign from '../components/contents/Webdesign'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main title = "미슬랭" description = "미슬랭의 유튜브 채널에 오신 것을 환영합니다." >
      <Today />
      <Developer />
      <Webdesign />
      <Website />
      <Gsap />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home
