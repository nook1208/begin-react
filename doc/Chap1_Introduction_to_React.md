# Instroduction to React
기본적인 React 의 기능들을 하나씩 사용해본다.

## How to Run 
```
yarn start
```
Runs the app in the development mode.

## Terminology
### JSX
JSX 는 리액트에서 생김새를 정의할 때 사용하는 문법  
e.g.) HTML 같아도 실제론 자바스크립트이다. 
```javascript
return <div>안녕하세요</div>;
```

### Babel
Babel 은 자바스크립트의 문법을 확장해주는 도구이며 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줌  

## Notice
### 불변성 지키기
리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.  
```javascript
// X
inputs[name] = value;

// O
setInputs({
      ...inputs,
        [name]: value
        });

```
