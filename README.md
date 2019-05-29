# react-webpack-startkit-babel-7

This project is use to duplicate the babel v7 and core-js v3 caused issue.

issue see here: https://github.com/babel/babel/issues/10036

This project has installed antd that use babel-runtime v6.x ( that use core-js v2 )

```
npm install
npm start 
```
And the project will show error. 

After do this:
```
npm install --save-dev core-js@2
```
and edit the `webpack.common.js` and `.babelrc`

from 
```
useBuiltIns: 'usage',
corejs: 3,
```
to
```
useBuiltIns: 'usage',
corejs: 2,
```
it will be compiled successfully.

OR

```
npm uninstall --save-dev core-js
```
and take out the `useBuiltIns` and `corejs` setting in `webpack.common.js` and `.babelrc`

it will be compiled successfully too.

---

```
npm start
```
-> run at localhost development env ( by webpack-dev-server ) 

---

```
npm run build 
``` 
-> run to build a production env at ./dist 

---

```
npm run server 
```
-> run at localhost by webpack-dev-middleware and express 

recommend to run with server-render web 
