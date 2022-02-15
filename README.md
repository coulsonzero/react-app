# Get Started

## 一、项目演示
[https://coulsonzero.github.io/react-app](https://coulsonzero.github.io/react-app)


## 二、终端命令

### 1.1 创建React-app

1. `npx create-react-app react-app`
2. `cd react-app`
3. `npm start`  | `yarn satrt`


### 1.2 运行clone的项目React-app

1. `git clone https://github.com/coulsonzero/react-app`
2. `npm insatll`
3. `npm start` | `yarn satrt`

open [http://localhost:3000](http://localhost:3000) in the browser.


### 1.3 项目部署

#### local部署

1. `npm run build`
2. `npm install -g serve`
3. `serve -s build`
4. `http://localhost:3000`



#### 服务器部署(ok)
**package.json**
```json
"homepage": "./",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

1. `npm run build`
2. `git push`
```sh
git add .
git commit -m "update gh-pages"
git push origin master
```
3. `git subtree push --prefix=build origin gh-pages`

> 此时多一个分支`pg-pages`
> 上述命令将master分支下某个文件（如：build）复制一份到 gh-pages 这个新分支下。
> 不过代码每次迭代之后，都需要手动在部署一下，才能达到线上线下一致。
4. 设置`Setting`-`pages`-`Source`-`Branch: pg-pages` 即可




#### 服务器部署(X)

**package.json**
```json
"homepage": "https://coulsonzero.github.io/react-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

```
git push
npm install gh-pages --save-dev
npm run deploy
```

[https://coulsonzero.github.io/react-app](https://coulsonzero.github.io/react-app)


## Code

1. src目录下新建`components`组件

  * components目录下新建`Navbar.jsx`等
  * components下`index.js`导入其它`jsx`文件

```jsx
export { default as Navbar } from './Navbar';
export { default as About } from './About';
export { default as Contact } from './Contact';
export { default as Skill } from './Skill';
export { default as Community } from './Community';
export { default as Footer } from './Footer';

```

1. `App.js`导入components中index.js的各种jsx

```jsx
import React from 'react';

import './App.css';
import { Navbar, Header, About, Contact, Skill, Community } from "./components";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        {/* <Header /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <skill /> */}
        {/* <Community /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
```


### `rafce`
```
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}
export default Home
```

### class -> className



### import assets
```jsx
import logo from '../imgs/navbar/Z-logo.png';
...
<img src={logo} alt="Z" className="nav_logo" />
```

### <img>
<img> -> `<img />`

### {
{ -> `{'{'}`

### import scroolreveal

```sh
npm install scroolreveal --save
```

```js
import ScrollReveal from "scrollreveal"
```

### import boxicon

```sh
npm install boxicon --save
```

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css');
```

### 获取json报错
> Uncaught SyntaxError: Unexpected token < in JSON at position 0