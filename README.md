### 🌱 피동보다 능동 갤러리 마켓 홈페이지

> http://fromsohyeon.com (서버만료)

필름 사진을 찍는 취미를 가지고 있습니다. 개인 SNS에만 아카이빙 해오던 사진들을 제가 직접 홈페이지를 만들어 갤러리 마켓 형식으로 사진을 보여주는 사이트를 제작했습니다.

### 🎨 Figma 목업 & 디자인 작업

- Figma 를 이용하여 웹페이지 전반을 디자인했습니다.

![](https://velog.velcdn.com/images/hjthgus777/post/95923b00-f6b5-4d5a-b467-7103da9bd293/image.png)

<br>

### 📡 Google Cloud Platform 를 통한 배포

- 현재 http 로 배포를 완료하였습니다. (추후 https로 배포 예정입니다.)

<br>

### 🔒 API

- 코드 캠프 6기 API를 사용했습니다. (서버 만료)

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

- react slick 라이브러리를 사용해서 메인 화면의 이미지가 오른쪽으로 넘어가도록 슬라이드를 구현했습니다.

![](https://velog.velcdn.com/images/hjthgus777/post/57ed2f25-643c-4a8e-b491-d6a4e6cadfe9/image.gif)

- Footer 영역의 메뉴를 클릭하면 외부 SNS로 이동합니다.

![](https://velog.velcdn.com/images/hjthgus777/post/45110a09-8c8d-4d44-afc3-cdb8bef5eae2/image.gif)

<br>

---

#### 2. Login & SignUp

- react hook form 을 사용하여 입력창을 구현했습니다.

- yup을 사용하여 잘못된 입력값이 들어올 경우 에러를 띄우고 버튼을 비활성화 시켰습니다.
  ![](https://velog.velcdn.com/images/hjthgus777/post/f5f49e6c-08d7-4306-8f60-8ff5e68cdb52/image.gif)

<br>

---

#### 3. About

- 작가 소개 페이지 입니다.

- 기본 퍼블리싱 작업을 진행했습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/f49568d0-4fe8-46c4-8343-c7868d195627/image.gif)

<br>

---

#### 4. Shop

- Shop 메뉴를 클릭하면 바로 나오는 페이지로 사진을 모아볼 수 있는 목록입니다.

- 무한 스크롤과 map으로 해당 데이터를 계속해서 불러옵니다.

![](https://velog.velcdn.com/images/hjthgus777/post/bf2a1e03-5190-4108-bf5e-0552edb8f0ee/image.gif)

- 사진을 등록하는 페이지에서 비회원 유저는 게시글을 등록할 수 없도록 페이지에 권한 분기가 되어 있습니다.

- 로그인한 유저는 사진을 직접 올리고, 수정 및 삭제를 할 수 있습니다.

- 10MB 이상 사진 파일과 jpg, jpeg, png 이외의 파일은 업로드 할 수 없도록 검증을 합니다.

- yup을 사용하여 잘못된 입력값이 들어올 경우 에러를 띄우고 버튼을 비활성화 시켰습니다.

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

- 상단 오른쪽에서 검색기능을 사용할 수 있습니다.

- 로그인한 유저만 게시글을 등록할 수 있도록 권한을 분기하였습니다.

![](https://velog.velcdn.com/images/hjthgus777/post/6cb40168-5473-4a5c-9e37-4f2ddd9f38b4/image.gif)

- 게시물 등록하기에서 React Quill 웹 에디터를 적용시켰습니다.

- YouTube Url을 입력시 동영상 업로드가 가능합니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/23aaa77b-d9a3-4e74-a2ae-c899a4095306/image.gif)

<br>

---

#### 6. Mypage

- 마이페이지에서 장바구니, 포인트 충전, 충전 내역, 구매 내역을 확인할 수 있습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/9d368aec-8d26-44b7-9e7a-e0d1bfe2e2f4/image.gif)

- 마이페이지 Charge 버튼을 클릭하면 아임포트를 통해 포인트를 충전할 수 있습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/58ab12eb-efd8-433f-bb4e-b3e52132f67b/image.gif)

<br>

---

#### 7. Contact

- kakao map을 연동하여 피동보다 능동 office 주소로 길찾기를 안내합니다.

- email을 클릭시 작가에게 메일을 보낼 수 있습니다.

  ![](https://velog.velcdn.com/images/hjthgus777/post/e390b56f-f99f-4452-a024-e29ffb28a1e9/image.gif)

<br>

---

### 📱 media query 반응형 작업

**[web] min-width: 1024px**

![](https://velog.velcdn.com/images/hjthgus777/post/153c9cfc-a489-4297-8707-4436a8c72288/image.gif)

**[tablet] (min-width: 381px) and (max-width: 1023px)**

![](https://velog.velcdn.com/images/hjthgus777/post/02ff3947-c999-4b05-afd2-e2bf38081aa8/image.gif)

**[mobild](max-width: 380px)**
![](https://velog.velcdn.com/images/hjthgus777/post/0500d9bd-a60f-485a-8fec-fb5cf3caee7b/image.gif)

<br>

---

### 🤔 \***\*셀프 피드백\*\***

- **컴포넌트 단일화**
  - 마이페이지에서 cart, mypage, oder history 영역을 페이지 별로 나누지 않고 조건부 렌더링을 사용해 컴포넌트 별로 한 페이지에서 처리하면 렌더링 시간을 단축할 수 있을 것 같습니다.
- **성능 최적화**
  - Storage 용량 낭비 해결하기
    - 이미지 업로드 부분에서 Browser에 이미지를 등록하면 백엔드에서 storage에 이미지를 올려 url을 받아 그 url을 Browser에게 반환해 주는 방식인데 이는 Storage 용량 낭비 문제 있습니다. 미리 보기 성능을 올리기 위해서 FileReader()를 활용해 아직 파일을 업로드하지는 않은 상태로 임시 주소를 만들어서 이미지를 보여주는 것을 생각해 볼 필요가 있습니다.
  - 사진 업로드에서 시간 단축 해결하기
    - 사진 등록하기에서 사진 업로드를 하게 되면 시간이 비교적 오래 걸렸습니다. 시간 단축을 위해 동시에 보내는 방법으로 Promise.all()을 사용해서 효율성을 높이는 방법을 적용해 볼 예정입니다. 등록 버튼을 눌렀을 때 한 번에 모든 파일을 uploadFile을 통해 업로드하고, createBoard로 한 번에 요청하는 방법입니다.
  - shop 리스트 부분에서 LazyLoad와 PreLoad 를 적용하기
    - LazyLoad는 아래 위로 긴 페이지에서 이미지를 포함하여 모든 내용을 한 번에 받아 오는 것이 아닌, 스크롤을 내리면서 보일 필요가 있는 부분만 추가적으로 받아오는 식으로 불필요한 서버와의 통신을 줄일 수 있고, PreLoad는 이미지를 사전에 미리 로드해 놓고, 필요할 때 이미 다운로드된 이미지를 보여줌으로써 렌더링 시간을 단축시키는 장점이 있으니 둘 중 무엇으로 적용할지 고민해 볼 필요가 있을 것 같습니다.

<br>

### 📝 프로젝트 회고

부트 캠프 수료 후 React와 next.js 이용해 개인 홈페이지를 만들었습니다. 성과를 증명해 줄 객관적인 수치나 지표가 없지만 실제로 업무에서 쓰이는 기술로 각각의 기능을 하는 웹사이트를 만들었다는 점에서 스스로 발전하고 있다는 생각이 들었습니다.

디자인부터 기획 그리고 기능 구현, 배포까지 혼자 진행하다 보니 그만큼 능동적으로 해결해야 하는 부분이 많았습니다. 기술 구현을 하면서도 계속해서 디자인을 수정하게 되고, 구현하고자 했던 기능들을 완성은 했지만 내가 짠 코드가 좋은 코드인지, 좋은 설계인지 객관적인 지표가 없어서 혼란스러웠습니다.

하지만 더 열심히 자료를 찾아보고 공부를 하면서 저의 부족한 부분을 채워나갔습니다. 이 모든 과정을 포기하지 않고 어떻게든 프로젝트를 완성하고 배포시켰다는 점에서 제가 하고 있는 일에 더 애착도 가지게 되었습니다. 처음으로 진행한 개인 프로젝트지만 몸소 체감한 부족한 점들을 개선하여 다음 프로젝트에서 한층 더 성장한 실력을 발휘하고 싶습니다.
