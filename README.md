# 스파르타 타입스크립트 과제

이 프로젝트는 vitest, testing-library를 활용하여 테스트코드를 완성하는 과제입니다.

## 사용 기술 스택

| Types      | Techs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Front      | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Tanstack Query](https://img.shields.io/badge/-tanstack%20Query-FF4154?style=flat&logo=react%20query&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white) [zustand](https://github.com/pmndrs/zustand) |
| Build tool | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) |                                                                                                                                                                                                                  |
| Test       | ![Testing-Library](https://img.shields.io/badge/-Testing%20Library-%23E33332?style=flat&logo=testing-library&logoColor=white) |

## 실행

### 1. 과제를 시작하기 위해 Google Firebase에서 프로젝트를 생성 후 프로젝트의 key들을 .env파일에 추가합니다.

<img src="https://github.com/user-attachments/assets/b8867200-cebf-4dbf-b708-d36b2975433a" width="50%" />
<img src="https://github.com/user-attachments/assets/eb922e23-8774-489d-956b-1d49dc8a2a1e" width="50%" />
<img src="https://github.com/user-attachments/assets/d4618067-52f7-47c5-a4b4-20d51a9b517d" width="50%" />
<img src="https://github.com/user-attachments/assets/b6638995-05f8-4e13-a2a0-533d52f6e88a" width="50%" />

```
#.env
VITE_FIREBASE_API_KEY="FIREBASE_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="FIREBASE_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="FIREBASE_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="FIREBASE_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="FIREBASE_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="FIREBASE_APP_ID"
```

### 2. Firebase 콘솔에서 Authentication을 프로비저닝 합니다.
<img src="https://github.com/user-attachments/assets/4ec0175e-57de-4800-aa83-2415d88c74bc" width="30%" />

- Authentication에서 이메일과 비밀번호를 사용하도록 설정해줍니다.
<img src="https://github.com/user-attachments/assets/4de88fe0-68dd-4482-9deb-69d8909479ae" width="50%" />

### 3. Firebase 콘솔에서 Firestore Database를 프로비저닝 합니다.
<img src="https://github.com/user-attachments/assets/3ef7edaf-e061-43bc-aa42-ecdf13af498a" width="30%" />
<br/>
<img src="https://github.com/user-attachments/assets/ca5919f6-6969-49b4-af7f-1d9edfba8898" width="50%" />
<img src="https://github.com/user-attachments/assets/93b46988-d6e1-4b35-b6c7-14e55cf53f95" width="50%" />

- Firestore Database를 사용하기 위해 규칙을 다음과 같이 수정해줍니다.
<img src="https://github.com/user-attachments/assets/51042f45-82c8-4ad5-99f2-57007ed41fa1" width="50%" />

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 3. Firebase 콘솔에서 Firebase Storage를 프로비저닝 합니다.
<img src="https://github.com/user-attachments/assets/4ac6216e-09b2-44f3-bc00-174056a6b7d9" width="30%" />
<br/>
<img src="https://github.com/user-attachments/assets/e89e3ff5-1bac-4155-858d-dfc110e3e168" width="50%" />

- Storage를 사용하기 위해 규칙을 다음과 같이 수정해줍니다.
<img src="https://github.com/user-attachments/assets/516a5ecf-7ba1-4f33-8a23-75159ef9efdf" width="50%" />

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. 의존성 라이브러리를 설치한 뒤 어플리케이션을 실행합니다.
```sh
$ pnpm i
$ pnpm run dev
$ pnpm run test
```

## 기능
<table width="100%">
  <tr>
    <th width="50%">회원가입 페이지</th>
    <th width="50%">로그인 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/5e76dc63-4dc8-4239-9a56-df068a888f33" width="100%" /></td>
    <td><img src="https://github.com/user-attachments/assets/ec80d445-0f72-4348-ad23-2cee822cbaf5" width="100%" /></td>
  </tr>
</table>

<table width="100%">
  <tr>
    <th width="50%">메인 페이지</th>
    <th width="50%">장바구니 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/832c7f09-8233-4e31-9291-ccd2708e9179" width="100%" /></td>
    <td><img src="https://github.com/user-attachments/assets/bc338d6e-bb7f-438d-b097-9431388d4aa6" width="100%" /></td>
  </tr>
</table>

<table width="100%">
  <tr>
    <th width="50%">주문 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/6d23a2ca-d514-4354-b655-d4e194f9bad9" width="100%" /></td>
  </tr>
</table>

<table width="100%">
  <tr>
    <th width="50%">상품 등록 기능</th>
    <th width="50%">필터링 기능</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9323cc52-87a0-4f58-8f13-5b54ab2801fc" width="100%" /></td>
    <td><img src="https://github.com/user-attachments/assets/02333df1-68e5-4fde-8877-6aad1a79dc40" width="100%" /></td>
  </tr>
</table>


