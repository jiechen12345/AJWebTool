(function(){
	$(function(){
		var urlvars = new ALCOMMON().GetUrlVars();
		var game = new GAME({
			listDiv:$('.listdiv'),
			messageDiv:$('.messagediv'),
			chatTitleDiv:$('#chattitle'),
			chatDiv:$('.chatdiv'),
			mID:urlvars.id
		});
		var socket = io();
		var listClickDiv = $('.media');
		var alsend = new SEND();
		var sendBtn = $('#send');
		var backBtn = $('#back');
		var listClickDiv = $('.media');

		function ListClick() {
			game.tID = $(this).attr('id').match(/(member)(.*)/)[2];

			alsend.SocketSuccessSend(socket, {
				action:'getmessageall',
				data:{
					member:[game.mID, game.tID],
					tID:game.tID,
					mID:game.mID
				}
			});
		};

		function SendMessage() {
			var message = $('#message').val();

			alsend.SocketSuccessSend(socket, {
				action:'sendmessage',
				data:{
					member:[game.mID, game.tID],
					tID:game.tID,
					sender:game.mID,
					message:message
				}
			});
		}

		function GetMember() {
			console.log('GetMember1');
			alsend.SocketSuccessSend(socket, {
				action:'getmember',
				data:{
					id:game.mID
				}
			});
		}

		socket.on('connect', function(){
			console.log('connect');

			alsend.SocketSuccessSend(socket, {
				action:'login',
				data:{
					id:game.mID
				}
			});
		});

		socket.on('error', function(){
			console.log('error');
			console.log(arguments);
		});

		socket.on('message', function(prop){
			console.log('message');
			console.log(prop);

			var status = prop.status;
			var message = prop.message;
			var action = prop.action;
			var data = prop.data;

			switch(action)
			{
				case 'login':

				break;
				case 'adduser':
					if(game.status == 'list')
						game.AddUser(data, ListClick);

					$.notify('有新好友加入：' + data.name, 'success');
				break;
				case 'getmember':
					game.GetMember(data, ListClick);
				break;
				case 'getmessageall':
					game.InitChat(data);
				break;
				case 'sendmessage':
					if(game.status == 'chat' && (data.id == game.tID || data.id == game.mID))
						game.AppendChat(data);
					else
					{
						if(data.id != game.mID)
							$.notify(data.name + ' 對你說：' + data.message, 'success');

						if(game.status == 'list')
						{
							$('#member' + data.id).find('.listmessage').text('');
							$('#member' + data.id).find('.listmessage').text(data.message);
						}
					}
				break;
				case 'error':
					switch(status)
					{
						case 11:
						case '11':
							alert('帳號重複登入，請確認帳號是否重複');
							location.href = 'login';
						break;
					}
					console.error('error');
					console.error(prop);
				break;
				default:
					console.error('error : action');
					console.error(prop);
				break;
			}
		});

		socket.on('disconnect', function(prop){
			console.log('disconnect');
			console.log(arguments);
		});

		listClickDiv.click(ListClick);
		sendBtn.click(SendMessage);
		backBtn.click(GetMember);
	});


    $(window).bind('beforeunload', function (e) {
    	socket.disconnect();
    })
})();