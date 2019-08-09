# Study_NodeJS
Node.js 공부를 해보자

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