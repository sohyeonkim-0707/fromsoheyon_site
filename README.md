### 🌱 피동보다 능동 갤러리 홈페이지 제작

> http://fromsohyeon.com

오랜 숙원사업이었던 제가 직접 찍은 필름 사진을 한데 모아볼 수 있는 사이트를 직접 만들었습니다.
shop 페이지에서 인스타그램 피드처럼 사진들을 볼 수 있습니다. 미흡한 부분이 많지만 추후 보완될 예정입니다.
(gif로 변환하여 시연 영상이 고르지 못한 점 양해 바랍니다.)

### 🎨 Figma 목업 & 디자인 작업

![](https://velog.velcdn.com/images/hjthgus777/post/95923b00-f6b5-4d5a-b467-7103da9bd293/image.png)

<br>

### 📡 Google Cloud Platform 를 통한 배포
- 현재 http 만 배포됨. 

<br>

### 🛠 사용 기술 스택

- Html
- Css
- Js
- Typescript
- React
- Next.js
- Apollo Client
- Graphql
- Git
- Google Cloud Platform

<br>

### 🖥 페이지 구성

#### 1. Main

- react slick carousell 적용

<img src="https://velog.velcdn.com/images/hjthgus777/post/57ed2f25-643c-4a8e-b491-d6a4e6cadfe9/image.gif">

- Footer 영역 링크 클릭시 외부 SNS 이동

  ![](https://velog.velcdn.com/images/hjthgus777/post/9a949800-1b5a-439a-88e4-b8ce0222f449/image.gif)

<br>

---

#### 2. Login & SignUp

- yup 적용 아이디, 비밀번호 유효성 검사
- 로그아웃 적용 
- 해당 입력 칸에 올 바르지 못한 값을 입력시 버튼 비활성화

  ![](https://velog.velcdn.com/images/hjthgus777/post/f5f49e6c-08d7-4306-8f60-8ff5e68cdb52/image.gif)

<br>

---

#### 3. About

- 기본 퍼블리싱 작업

  ![](https://velog.velcdn.com/images/hjthgus777/post/f49568d0-4fe8-46c4-8343-c7868d195627/image.gif)

<br>

---

#### 4. Shop

- 무한 스크롤

  ![](https://velog.velcdn.com/images/hjthgus777/post/bf2a1e03-5190-4108-bf5e-0552edb8f0ee/image.gif)

- 상품 CRUD

  ![](https://velog.velcdn.com/images/hjthgus777/post/1e889ef3-32c3-469e-9d60-9fd47e319fe2/image.gif)

- 장바구니 담기

  ![](https://velog.velcdn.com/images/hjthgus777/post/161fba27-adcd-45b3-98c0-d5acf500dd3e/image.gif)

- 구매하기

  ![](https://velog.velcdn.com/images/hjthgus777/post/10a3dc20-e313-4026-a484-abd702415301/image.gif)

- QnA 댓글 CRUD

  ![](https://velog.velcdn.com/images/hjthgus777/post/35020257-d12e-4507-97cd-d47822236d21/image.gif)

<br>

---

#### 5. Community

- 페이지네이션
- 로그인한 유저 글 등록 가능하도록 권한분기

  ![](https://velog.velcdn.com/images/hjthgus777/post/84a7d1d7-4951-4d5e-8e74-ceae6b326a6e/image.gif)

- 게시글 CRUD

  ![](https://velog.velcdn.com/images/hjthgus777/post/23aaa77b-d9a3-4e74-a2ae-c899a4095306/image.gif)

<br>

---

#### 6. Mypage

- 장바구니에 담긴 물건 확인
- 구매 목록 확인

  ![](https://velog.velcdn.com/images/hjthgus777/post/9d368aec-8d26-44b7-9e7a-e0d1bfe2e2f4/image.gif)

- 포인트 충전 import 결제

  ![](https://velog.velcdn.com/images/hjthgus777/post/58ab12eb-efd8-433f-bb4e-b3e52132f67b/image.gif)

<br>

---

#### 7. Contact

- kakao map 연동
- 이메일 클릭시 메일 보내기

  ![](https://velog.velcdn.com/images/hjthgus777/post/e390b56f-f99f-4452-a024-e29ffb28a1e9/image.gif)

<br>

---

### 📱 media query 반응형 작업

**[web] min-width: 1024px**

![](https://velog.velcdn.com/images/hjthgus777/post/153c9cfc-a489-4297-8707-4436a8c72288/image.gif)

**[tablet] (min-width: 381px) and (max-width: 1023px)**

![](https://velog.velcdn.com/images/hjthgus777/post/02ff3947-c999-4b05-afd2-e2bf38081aa8/image.gif)

**[mobild](max-width: 380px)**

<img src="https://velog.velcdn.com/images/hjthgus777/post/fed49ad2-6d2c-4ef2-93f8-90e41c2c9798/image.gif">

<br>

---

### 🤔 개선할점

ui는 깔끔해 보이지만 커뮤니티 게시판 부분을 디자인하면서 사진을 여러 장 첨부했을 때, 완료 누르기 전 첨부된 사진들을 어디에 위치시킬지 생각을 해봤다. 아래 작게 박스 형식으로 나타낼까 했는데 배치를 어디에 해야 할지 아직까지 고민 중이다. 이 부분은 실습을 해본 적이 있어서 쉽게 수정이 가능할 것 같다. 좀 더 고민해 봐야지.

애니메이션 부분에서 인터랙티브한 요소들이 부족한 것 같다. 사진이라는 자체가 정적인 느낌이 강해서 딱히 애니메이션 요소를 적용하기가 애매하긴한데 적절한 곳이 없을까?

그리고 대용량의 사진 파일이 많아서 로딩이 조금 오래 걸린다는 단점이 있는데 이는 이미지 최적화 방법을 따로 찾아서 적용해야 할 것 같다.

반응형 작업은 완료했지만 적응형 작업도 도전해보고 싶다.
