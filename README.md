# react-webpack-startkit-babel-7

This project is use to duplicate the babel v7 and core-js v3 caused issue.

issue see here: https://github.com/babel/babel/issues/10036

This project has installed antd that use babel-runtime v6.x ( that use core-js v2 )

```
npm install
npm start 
```
And the project will show error below:

```
> webpack-dev-server --open --hot --config webpack.dev.js

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/neinei/project/react-webpack-start-kit-babel7
ℹ ｢wds｣: 404s will fallback to /index.html
ℹ ｢wdm｣: wait until bundle finished: /
✖ ｢wdm｣: Hash: f694d17dc7105794ff94
Version: webpack 4.32.2
Time: 9387ms
Built at: 2019-05-29 15:15:18
          Asset       Size        Chunks             Chunk Names
     index.html  657 bytes                [emitted]  
        main.js    103 KiB          main  [emitted]  main
      styles.js    658 KiB        styles  [emitted]  styles
vendors~main.js   7.21 MiB  vendors~main  [emitted]  vendors~main
Entrypoint main = styles.js vendors~main.js main.js
[0] multi (webpack)-dev-server/client?http://localhost (webpack)/hot/dev-server.js ./src 52 bytes {main} [built]
[./node_modules/loglevel/lib/loglevel.js] 7.68 KiB {vendors~main} [built]
[./node_modules/querystring-es3/index.js] 127 bytes {vendors~main} [built]
[./node_modules/react-dom/index.js] 1.33 KiB {vendors~main} [built]
[./node_modules/react-hot-loader/index.js] 1.2 KiB {vendors~main} [built]
[./node_modules/react/index.js] 190 bytes {vendors~main} [built]
[./node_modules/strip-ansi/index.js] 150 bytes {vendors~main} [built]
[./node_modules/url/url.js] 22.8 KiB {vendors~main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost] (webpack)-dev-server/client?http://localhost 9.26 KiB {vendors~main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.59 KiB {vendors~main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.05 KiB {vendors~main} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {vendors~main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
[./node_modules/webpack/hot/dev-server.js] (webpack)/hot/dev-server.js 1.61 KiB {vendors~main} [built]
[./src/index.js] 1.23 KiB {main} [built]
    + 1110 hidden modules

ERROR in ./node_modules/babel-runtime/core-js/array/from.js
Module not found: Error: Can't resolve 'core-js/library/fn/array/from' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/array'
 @ ./node_modules/babel-runtime/core-js/array/from.js 1:30-70
 @ ./node_modules/babel-runtime/helpers/toConsumableArray.js
 @ ./node_modules/rc-form/es/createBaseForm.js
 @ ./node_modules/rc-form/es/createDOMForm.js
 @ ./node_modules/antd/es/form/Form.js
 @ ./node_modules/antd/es/form/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/assign.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/assign' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/assign.js 1:30-73
 @ ./node_modules/babel-runtime/helpers/extends.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/create.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/create' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/create.js 1:30-73
 @ ./node_modules/babel-runtime/helpers/inherits.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/define-property.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/define-property' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/define-property.js 1:30-82
 @ ./node_modules/babel-runtime/helpers/createClass.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/get-own-property-descriptor' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js 1:30-94
 @ ./node_modules/babel-runtime/helpers/get.js
 @ ./node_modules/rc-slider/es/common/createSlider.js
 @ ./node_modules/rc-slider/es/Range.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/get-prototype-of' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/get-prototype-of.js 1:30-83
 @ ./node_modules/babel-runtime/helpers/get.js
 @ ./node_modules/rc-slider/es/common/createSlider.js
 @ ./node_modules/rc-slider/es/Range.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/object/set-prototype-of.js
Module not found: Error: Can't resolve 'core-js/library/fn/object/set-prototype-of' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/object'
 @ ./node_modules/babel-runtime/core-js/object/set-prototype-of.js 1:30-83
 @ ./node_modules/babel-runtime/helpers/inherits.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/symbol.js
Module not found: Error: Can't resolve 'core-js/library/fn/symbol' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js'
 @ ./node_modules/babel-runtime/core-js/symbol.js 1:30-66
 @ ./node_modules/babel-runtime/helpers/typeof.js
 @ ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js

ERROR in ./node_modules/babel-runtime/core-js/symbol/iterator.js
Module not found: Error: Can't resolve 'core-js/library/fn/symbol/iterator' in '/Users/neinei/project/react-webpack-start-kit-babel7/node_modules/babel-runtime/core-js/symbol'
 @ ./node_modules/babel-runtime/core-js/symbol/iterator.js 1:30-75
 @ ./node_modules/babel-runtime/helpers/typeof.js
 @ ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
 @ ./node_modules/rc-slider/es/Handle.js
 @ ./node_modules/antd/es/slider/index.js
 @ ./node_modules/antd/es/index.js
 @ ./src/containers/Home/Home.js
 @ ./src/containers/index.js
 @ ./src/index.js
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html] 692 bytes {0} [built]
    [./node_modules/lodash/lodash.js] 527 KiB {0} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Failed to compile.
```

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
