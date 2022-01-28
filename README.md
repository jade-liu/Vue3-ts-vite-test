# Vue 3 + Typescript + Vite

1. npm init vite@latest my-vue-app -- --template vue
2. 在 github 上创建一个项目
3. git clone 拉取项目
4. 复制.git 文件
5. 暂存，提交，git push
6. npm install element-plus --save
7. npm i --save ant-design-vue@next
8. 在 main.js 中引入 element-plus 和 ant-design-vue
9. npm i less -D
10. 集成路由工具 Vue Router，新建文件 router/index.ts
11. 配置.editorconfig，为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格
12. 集成 Prettier 配置，代码格式化工具，安装 Prettier，配置 .prettierrc
11. 安装 ESLint，npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
12. 配置 ESLint，npx eslint --init（安装代码失败，手动安装）
13. npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue -D
14. ESLint 配置文件 .eslintrc.js（格式化代码html失败，原因是.eslintrc.js配置失败，替换配置文件）
15. vue.config.ts中找不到模块“path”或其相应的类型声明，找不到名称“_dirname”，执行npm install @types/node --save-dev