function FBDEFINE(appid, scope)
{
  var fd = this;
  this.appid = appid;
  this.scope = scope;
  this.token;
  this.userid;
  this.friendlist;

  this.Init = function(appid, scope){
      this.appid = appid;
      this.scope = scope;
      console.log(fd);
      FBInit(document, 'script', 'facebook-jssdk');
  };

  this.login = function($this, token, userid)
  {
    $this.token = token;
    $this.userid = userid;
  }

  this.set_friendlist = function($this, friendlist)
  {
    $this.friendlist = friendlist;
  }

  function fun_login(fun_haslogin, fun_nologin)
  {
    FB.login(function(response) {
      if (response.status === 'connected') {
        fd.login(fd, response.authResponse.accessToken, response.authResponse.userID);
        fun_haslogin(response);
      } else if (response.status === 'not_authorized') {
        fun_nologin();
      } else {
        fun_nologin();
      }
    },{scope:fd.scope}); 
  }

  function statusChangeCallback(response, fun_haslogin, fun_nologin) {
    if (response.status === 'connected') {
      fd.login(fd, response.authResponse.accessToken, response.authResponse.userID);
      fun_haslogin(response);
    } else if (response.status === 'not_authorized') {
      // fun_login(fun_haslogin, fun_nologin);
    } else {
      // fun_login(fun_haslogin, fun_nologin);
    }
  }

  function checkLoginState(fun_haslogin, fun_nologin) {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response, fun_haslogin, fun_nologin);
    });
  }

  window.fbAsyncInit = function() {
      FB.init({
          appId      : fd.appid,
          xfbml      : true,
          version    : 'v2.5'
      });
  };

  var FBInit = function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   };

  function fb_login(fun_haslogin, fun_nologin, state)
  {
    switch(state)
    {
      case 'data':
        FB.init({
          appId      : fd.appid,
          xfbml      : true,
          version    : 'v2.1'
        });
        checkLoginState(fun_haslogin, fun_nologin);
      break;
      case 'login':
        fun_login(fun_haslogin, fun_nologin);
      break;
      case 'redirect':
        top.location = 'https://www.facebook.com/dialog/oauth?client_id='+fd.appid+'&redirect_uri='+gd.share_web + 'index.html?play=1'+'&scope='+fd.scope;
      break;
    }
  }

  function fb_logout(fun_haslogout)
  {
    FB.logout(function(response) {
      fun_haslogout(response);
    });
  }

  function postToFeed(n, c, d, l, p, fun_hasshare, fun_noshare) {
    var obj = {
      method: 'feed',
      name: n,
      caption: c,
      description: d,
      link: l, 
      picture: p
    }; 

    function callback(response) {
      if (response && response.post_id) {
        fun_hasshare(response);
      } else {
        fun_noshare(response);
      }
    }

    FB.ui(obj, callback);
  }

  function fb_aboutme(callback)
  {
    FB.api('/me', function(response) {
        callback(response);
      //console.log(JSON.stringify(response));
    });
  }

  function fb_friendlist(fun_hasfriendlist, fun_nofriendlist)
  {
      FB.api(
          "/me/friends/",
          function (response) {
            if (response && !response.error) {
              fd.set_friendlist(fd, response);
              fun_hasfriendlist(response);
              /* handle the result */
            }
            else
            {
              // //console.log(response.error);
              fun_nofriendlist(response);
            }
          }
      );
  }
  
  this.Init(appid, scope);
  this.FBLogin = fb_login;
  this.FBAboutMe = fb_aboutme;
}