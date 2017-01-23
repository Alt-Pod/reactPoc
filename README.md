Single Page App. ('Main' component)

<b>SETUP</b>

npm init
npm install --save babel-cli@6.11.x babel-core@6.13.x <br>
npm install babel-preset-es2015@6.13.x babel-preset-react@6.11.x ejs@2.5.x<br>
npm install express@4.14.x react@15.3.x react-dom@15.3.x react-router@2.6.x<br>
npm install --save-dev webpack@1.13.x babel-loader@6.2.x http-server@0.9.x

<b>BUNDLE</b>

NODE_ENV=production node_modules/.bin/webpack -p

<b>START APP</b>

node_modules/.bin/http-server src/static

________

No Redux
