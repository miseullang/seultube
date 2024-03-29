# 유튜브 클론 코딩 사이트

React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, 
YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.

## 완성작 보기
미리보기 : 

## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 타이틀`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- axios를 설치합니다. `npm install axios`
- react-icons을 설치합니다. `npm install react-icons`
- react-player를 설치합니다. `npm install react-player`
- sass를 설치합니다. `npm install sass`
- react-helmet-async를 설치합니다. `npm install react-helmet-async`
(각 페이지별 메타데이터 설정 : 웹 표준 준수, 검색 노출 용이)
- swiper를 설치합니다. `npm install swiper`

### 기타 메모
1. App.js 기본값으로 초기화 : rafce
자동완성이 안 되는 경우 ES7 React/Redux/GraphQL/React-Native snippets 익스텐션 설치

2. 내부 링크는 Link, 외부 링크는 a 태그를 사용하되 보안과 관련된 속성 지정
rel='noopener noreferrer'

3. SEO 설정
리액트는 SPA이기 때문에 SEO에 대한 노출이 약한 편입니다.
이를 극복하기 위해 페이지 별로 페이지에 대한 설명이나 타이틀을 작업합니다.
이 작업을 위해 react-helmet-async 라이브러리가 설치합니다.