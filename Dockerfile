# Node.js 18 버전을 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 빌드 시 필요한 인자 정의
ARG TYPE

# 애플리케이션 소스 코드 복사
COPY . .

# 시스템 패키지 업데이트 및 필요한 패키지 설치
# 주요 라이브러리와 도구들을 설치합니다
RUN apt-get update && apt-get install -y \
    locales

# 한국어 UTF-8 로케일 생성
RUN locale-gen ko_KR.UTF-8

# 환경 변수 설정
ENV LANG ko_KR.UTF-8
ENV LANGUAGE ko_KR:kr
ENV LC_ALL ko_KR.UTF-8
ARG ENV=$TYPE
ENV RUNNING_ENV $ENV
ENV TZ Asia/Seoul

# Node.js 의존성 설치 및 애플리케이션 빌드
RUN yarn add rimraf
RUN yarn build
COPY . .

# 포트 3000 열기
EXPOSE 3000

# 애플리케이션 시작 명령
CMD node ./dist/main.js