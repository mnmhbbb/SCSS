## 1일 1SCSS 공부하기

- 직관적이고 깔끔한 UI/UX 디자인을 효율적으로 만들 줄 아는 능력을 쌓기 위해 시작하였다.
- `node-sass`를 통해 컴파일하는 방법도 있지만 vscode의 extension `Live Sass Compiler`로 간편하게 작업하였다.

```js
  // settings.json
  "liveSassCompile.settings.generateMap": false,
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../../"
    }
  ]
```

- [김버그님의 SCSS 강의](https://edu.goorm.io/lecture/25681/%EA%B9%80%EB%B2%84%EA%B7%B8%EC%9D%98-ui-%EA%B0%9C%EB%B0%9C-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84-%EA%B2%BD%EB%A0%A5%EA%B0%99%EC%9D%80-%EC%8B%A0%EC%9E%85%EC%9C%BC%EB%A1%9C-%EB%A0%88%EB%B2%A8%EC%97%85)을 들으면서 공부하고 추가적으로 만들고 싶은 것도 만들어 볼 예정이다.
- 사용자 입장에서 이용하면서 깔끔하다고 생각했던 `오늘의 집`과 `인프런` 웹 사이트 디자인을 클론코딩할 예정이다.
- root 디렉토리에는 `index.html`과 최종적으로 컴파일된 `main.css`이 있다.
- `/src` 는 크게 `assets`과 `styles`으로 구성된다.
- **Bootstrap**처럼 그리드시스템을 기반으로 class를 구성하여 반응형 웹사이트를 만든다.

```
SCSS-study
├─ .prettierrc
├─ Favicon.svg
├─ README.md
├─ index.html
├─ main.css
└─ src
   ├─ assets
   │  ├─ Icon
   │  ├─ Logo.svg
   │  ├─ fonts
   │  │  ├─ tomorrow.eot
   │  │  ├─ tomorrow.svg
   │  │  ├─ tomorrow.ttf
   │  │  └─ tomorrow.woff
   │  └─ images
   └─ styles
      ├─ base
      │  ├─ _fonts.scss
      │  ├─ _globals.scss
      │  ├─ _normalize.scss
      │  └─ _reset.scss
      ├─ constants
      │  ├─ _breakpoints.scss
      │  ├─ _colors.scss
      │  └─ _typography.scss
      ├─ layouts
      │  └─ _grids.scss
      ├─ main.scss
      ├─ mixins
      │  ├─ _flexbox.scss
      │  ├─ _positions.scss
      │  ├─ _responsive.scss
      │  └─ _text-style.scss
      └─ modules
         ├─ _avatars.scss
         ├─ _buttons.scss
         ├─ _forms.scss
         ├─ _icons.scss
         ├─ _pagination.scss
         └─ _tags.scss

```
