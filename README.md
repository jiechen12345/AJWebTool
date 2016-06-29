# AJWebTool
# mongodb設定帳號密碼
 use admin
 db.createUser({user:"root", pwd: "root", roles: [{role:"root", db: "admin"}]})
 use AJWebTool
 db.createUser({user:"AJWebTool", pwd: "AJWebTool", roles: [{role:"dbOwner", db: "AJWebTool"}]})
 exit

# 啟動node js
 npm i
 node app.js

# 開啟網頁
 http://localhost:8003/
