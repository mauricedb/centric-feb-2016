@IF EXIST node_modules GOTO start-server
    call npm install --cache-min 999999

:start-server
start npm run webpack -- --watch
npm start
