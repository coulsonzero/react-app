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
2. `npm insatll` $\color{red}{!!}$
3. `npm start` | `yarn satrt`

open [http://localhost:3000](http://localhost:3000) in the browser.


### 1.3 项目部署

* local部署
  
1. `npm run build`
2. `npm install -g serve`
3. `serve -s build`
4. `http://localhost:3000`

* 服务器部署
  
1. `npm run build`
2. 
```sh
git add .
git commit -m "update gh-pages"
git push origin master
```
3. `git subtree push --prefix=build origin gh-pages` $\color{green}{✓}$
   
此时多一个分支`pg-pages`
> 上述命令将master分支下某个文件（如：build）复制一份到 gh-pages 这个新分支下。
> 不过代码每次迭代之后，都需要手动在部署一下，才能达到线上线下一致。
4. 设置`Setting`-`pages`-`Source`-`Branch: pg-pages` 即可

[https://coulsonzero.github.io/react-app](https://coulsonzero.github.io/react-app)
