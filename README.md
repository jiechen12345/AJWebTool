# AJWebTool
# mongodb設定帳號密碼
 use admin<br>
 db.createUser({user:"root", pwd: "root", roles: [{role:"root", db: "admin"}]})<br>
 use AJWebTool<br>
 db.createUser({user:"AJWebTool", pwd: "AJWebTool", roles: [{role:"dbOwner", db: "AJWebTool"}]})<br>
 exit<br>

# 啟動node js
 npm i<br>
 node app.js<br>

# 開啟網頁
 http://localhost:8003/
