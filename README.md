# Novel Java의 서재

읽은 책을 오래 기억하기 위해 기록하는 Astro 기반 독서 리뷰 블로그입니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 새 리뷰 작성

`src/content/reviews/_template.md.example`을 복사하여 파일명을 영문 슬러그로 바꾼 뒤,
Front Matter와 본문을 작성합니다. `draft: false`로 변경하면 사이트에 공개됩니다.

`shelf`는 개발서라면 `development`, 그 밖의 책이라면 `general`로 설정합니다.

## 배포

`master` 브랜치에 푸시하면 GitHub Actions가 사이트를 빌드해 GitHub Pages로 배포합니다.
