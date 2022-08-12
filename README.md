### 🌱 피동보다 능동 갤러리 홈페이지 제작

> http://fromsohyeon.com

필름 사진을 찍는 취미를 가지고 있습니다. 개인 SNS에만 아카이빙 해오던 사진들을 제가 직접 홈페이지를 만들어 갤러리 마켓 형식으로 사진을 보여주는 사이트를 제작했습니다.

### 🎨 Figma 목업 & 디자인 작업

- Figma 를 이용하여 웹페이지 전반을 디자인했습니다.

![](https://velog.velcdn.com/images/hjthgus777/post/95923b00-f6b5-4d5a-b467-7103da9bd293/image.png)

<br>

### 📡 Google Cloud Platform 를 통한 배포

- 현재 http 로 배포를 완료하였습니다. (추후 https로 배포 예정입니다.)

<br>

### 🔒 API

- 코드 캠프 6기 API를 사용했습니다.

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

- react slick carousell 라이브러리를 사용해서 메인 화면의 이미지가 왼쪽으로 넘어가도록 작업했습니다.

<img src="https://velog.velcdn.com/images/hjthgus777/post/57ed2f25-643c-4a8e-b491-d6a4e6cadfe9/image.gif">

- Footer 영역의 메뉴를 클릭시 외부 SNS로 이동합니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/9a949800-1b5a-439a-88e4-b8ce0222f449/image.gif)

<br>

---

#### 2. Login & SignUp

- react hook form 을 사용하여 구현하였습니다.
- yup을 사용하여 잘못된 입력값이 들어올 경우 에러를 띄우고 버튼을 비활성화 시켰습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/f5f49e6c-08d7-4306-8f60-8ff5e68cdb52/image.gif)

<br>

---

#### 3. About

- 작가 소개 페이지 입니다.
- 기본 퍼블리싱 작업만 진행하였습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/f49568d0-4fe8-46c4-8343-c7868d195627/image.gif)

<br>

---

#### 4. Shop

- Shop 메뉴를 클릭하면 바로 나오는 페이지로 사진을 모아볼 수 있는 목록입니다.

- 무한 스크롤과 map으로 해당 데이터를 계속해서 불러옵니다.

![](https://velog.velcdn.com/images/hjthgus777/post/bf2a1e03-5190-4108-bf5e-0552edb8f0ee/image.gif)

- 사진을 등록하는 페이지에서 비회원 유저는 게시글을 등록할 수 없도록 페이지에 권한 분기가 되어 있습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/1e889ef3-32c3-469e-9d60-9fd47e319fe2/image.gif)

- Cart 를 누르면 해당 사진이 로컬스토리지에 담기도록 장바구니를 구현했습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/161fba27-adcd-45b3-98c0-d5acf500dd3e/image.gif)

- Buy here 을 눌러 해당 사진을 구매할 수 있으며, 금액 만큼 포인트가 차감됩니다. 잔액이 없을 경우 충전이 필요하다는 alert 창이 뜹니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/10a3dc20-e313-4026-a484-abd702415301/image.gif)

- 해당 사진에 QnA 대댓글을 기능을 추가했습니다.
- 댓글 수정 및 삭제가 가능합니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/35020257-d12e-4507-97cd-d47822236d21/image.gif)

<br>

---

#### 5. Community

- 커뮤니티 게시판 목록에서 페이지네이션 기능을 구현하였습니다.
- 로그인한 유저만 게시글을 등록할 수 있도록 권한을 분기하였습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/84a7d1d7-4951-4d5e-8e74-ceae6b326a6e/image.gif)

- 게시물 등록하기에서 React Quill 웹 에디터를 적용시켜보았습니다.
- YouTube Url을 입력시 동영상 업로드가 가능합니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/23aaa77b-d9a3-4e74-a2ae-c899a4095306/image.gif)

<br>

---

#### 6. Mypage

- 마이페이지에서 장바구니, 포인트 충전, 충전 내역, 구매 내역을 확인할 수 있습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/9d368aec-8d26-44b7-9e7a-e0d1bfe2e2f4/image.gif)

  ![](https://velog.velcdn.com/images/hjthgus777/post/58ab12eb-efd8-433f-bb4e-b3e52132f67b/image.gif)

<br>

---

#### 7. Contact

- kakao map 을 연동하여 office 주소를 안내합니다.
- email을 클릭시 메일을 보낼 수 있습니다.

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

### 🤔 회고 및 개선할점 (평어체를 사용했습니다.)

1. **디자인과 기능구현**

- 디자인부터 기획 그리고 기능 구현까지 혼자 진행하다 보니 작업을 하면서 바로 그 자리에서 디자인을 수정하면서 작업을 했다. 그 과정에서 내가 심미적인 부분만 신경 써서 디자인 작업을 했다는 것을 알았고, 사용자 입장에서 내가 만든 웹페이지를 볼 때 과연 UX 적으로 사용이 편리할까?라는 의문이 들었다.

- 애니메이션 요소가 부족하다. 하지만 페이지 테마가 정적인 느낌의 ‘갤러리’다 보니 동적인 요소를 추가하다 보면 자칫 가벼워질 수 있겠다. 이 페이지의 주인공은 ‘사진’ 이니까 오히려 애니메이션 요소가 적은 것도 괜찮지 않을까? 그리고 반응형 작업에서 모바일 사이즈로 변경시 상단 메뉴들을 햄버거 메뉴바로 변경해도 괜찮을 것 같다.

- 마이페이지에서 cart, mypage, oder history 영역을 페이지 별로 나누지 않고 컴포넌트로 한 페이지에서 처리하면 렌더링 시간을 단축할 수 있지 않았을까?

2. **성능 최적화하기 > 이미지부분**

- Storage 용량 낭비 해결하기
  - 이미지 업로드 부분에서 Browser에 이미지를 등록하면 백엔드에서 storage에 이미지를 올려 url을 받아 그 url을 Browser에게 반환해주는 방식인데 이는 Storage 용량 낭비 문제 있다. 미리보기 성능을 올리기 위해서 FileReader()를 활용해 아직 파일을 업로드하지는 않은 상태로 임시주소를 만들어서 이미지를 보여주는것을 적용해보자.
- 사진 업로드에서 시간 단축은 어떻게 할까 ?

  - 사진 등록하기에서 사진 업로드를 하게되면 시간이 비교적 오래 걸렸다. 시간 단축을 위해 동시에 보내는 방법으로 Promise.all()을 사용해서 효율성을 높이는 것도 좋을 것 같다. 어떻게 로직을 짜볼까? 등록버튼을 눌렀을 때 한번에 모든 파일을 uploadFile을 통해 업로드하고, createBoard로 한번에 요청하는 방법을 시도해봐야겠다.

- shop 리스트 부분에서 LazyLoad와 PreLoad 를 적용해보면 어떨까?
  - LazyLoad는 아래 위로 긴 페이지에서 이미지를 포함하여 모든 내용을 한 번에 받아 오는 것이 아닌, 스크롤을 내리면서 보여질 필요가 있는 부분만 추가적으로 받아오는 식으로 불필요한 서버와의 통신을 줄일 수 있고, PreLoad는 이미지를 사전에 미리 로드해 놓고, 필요할 때 이미 다운로드된 이미지를 보여줌으로써 렌더링 시간을 단축시키는 장점이 있으니 둘 중 무엇으로 적용할지 고민해볼 필요가 있을 것 같다.
