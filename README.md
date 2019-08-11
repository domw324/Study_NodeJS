# Study_NodeJS
Node.js를 이용하여 간단한 웹 서버를 구축해보자.

---
# 준비하기
이 프로젝트는 Node.js를 이용하여 작업되며,
더 나아가 PM2를 활용하여 웹 서버를 관리하고.
express, express-generator(+pug)를 사용합니다.

# Node.js
Node.js는 공식 홈페이지로 가면 바로 설치 할 수 있다!

설치가 잘 됐는지 확인하려면
cmd 창에
```cmd
node -v
```
입력하면 설치한 버전이 정상적으로 뜨면 완료!

---
## PM2
PM2를 이용해 서버를 관리해보자!

### 설치
npm install pm2 -g

### 명령어
```bash
$ pm2 start [filename] # pm2로 프로그램 실행
$ pm2 start [filename] --watch # 파일의 변경을 항상 감지, 재시작 및 반영

$ pm2 stop [filename] # 실행중인 프로세스 종료

$ pm2 list # 현재 실행중인 파일 목록

$ pm2 monit # 현재 pm2로 관리 중인 프로세스의 목록 및 정보 표시
$ pm2 log # 변경 사항 및 상태 로그 표시 (--watch 옵션으로 프로그램을 실행한 경우 터미널로 오류목록을 볼 수 없는데, log를 이용해 볼 수 있다.)
```

---

## html
html 활용할 문법들을 적어보자

### Form
url로 정보를 보낼 때 사용할 수 있다.
기본적으로 <form> 태그 안에 <input> 태그를 넣어준다.
```html
<form action="경로명" method="post">
    <input type="text" name="이름" placeholder="텍스트">
    <input type="submit">
    <textarea name="이름">
</form>
```

form 속성
action : 실행할(이동할) url
method : 전송할 방식. 이때 post형식으로 해야 담고 있는 정보들을 숨겨서 보낼 수 있다.

input 속성
type : 형식
name : input의 이름. 전송 받은 데이터를 이 name 속성을 이용해 찾을 수 있다. 보낼 데이터가 있다면 꼭 써줘야 한다.
placeholder : 기본으로 표시할 가이드 텍스트