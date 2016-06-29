(function(){
	fb = new FBDEFINE('227302660982891', 'user_friends, public_profile, email');


	function FBLoginSucess(res) {
		fb.FBAboutMe(function(response){
			console.log(response);
			$.post('login',
			{
				name:response.name,
				id:response.id
			},
			function(data,status){
				console.log('FBAboutMe');
				console.log(data);
				console.log(status);
				
				var id = data.data.id;
				if(id)
					// top.location.href = '../message?capacity=client&id=' + id;
					alert('登入成功');
				else
					alert('登入失敗');
			});
		});
	}

	function FBLoginError() {
		console.error('FBLoginError');
	}

	function FBLogin() {
		fb.FBLogin(FBLoginSucess, FBLoginError, 'login');
	}

	function UserLogin() {
		var email = $('#email').val();
		var password = $('#password').val() || true;
		var pic = $('#pic').val();

		if(!email || !password || !pic)
		{
			alert('請輸入完整資料');
			return false;
		}

		var options = { 
	        success:       function(prop, statusText, xhr, $form){
				console.log('UserLogin');
				console.log(prop);

				if(prop.status == 0)
					top.location.href = 'message?id=' + prop.data.id;
				else
				{
					console.error(prop);
					alert('登入失敗');				
				}
	        }, 
	        url:       		'login',         // override for form's 'action' attribute 
	        type:      		'post',        // 'get' or 'post', override for form's 'method' attribute 
	        dataType:  		'json'        // 'xml', 'script', or 'json' (expected server response type) 
	    }; 

        $('#loginForm').ajaxSubmit(options); 

        return false; 	
    }

	$(function(){
		// $('#login_btn').click(FBLogin);
		$('#login_btn').click(UserLogin);
	});
})();