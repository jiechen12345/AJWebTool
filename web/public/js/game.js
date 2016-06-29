var GAME = function(prop){
	this.status = 'list';
	this.mID = prop.mID;
	var tID = '';
	var listDiv = prop.listDiv;
	var messageDiv = prop.messageDiv;
	var listClickDiv = prop.listClickDiv;
	var chatTitleDiv = prop.chatTitleDiv;
	var chatDiv = prop.chatDiv;
	var tName = '';
	var tPic = '';

	var AddUser = function(prop, callback) {
		var text = '<div class="media" id="member{{member.id}}">';
		
		text += '<div class="media-left">';
		text += '<img class="media-object" src="{{ member.pic }}" alt="">';
		text += '</div>';
		text += '<div class="media-body">';
		text += '<h4 class="media-heading">{{ member.name }}</h4>';
		text += '<p class="listmessage">{{ member.message }}</p>';
		text += '</div>';
		text += '</div>';

		text = Replace(text, 'member.id', prop.id);
		text = Replace(text, 'member.pic', prop.pic);
		text = Replace(text, 'member.name', prop.name);
		text = Replace(text, 'member.message', prop.message);

		listDiv.append(text).promise().done(function(){
			$('.media').click(callback);
		});
	};

	var GetMember = function(member, callback) {
		this.status = 'list';
		this.tID = '';
		listDiv.html('');

		for(var i in member) {
			AddUser(member[i], callback);
		}

		messageDiv.hide();
		listDiv.show();
	};

	var AppendChat = function(message) {
		var text = '<div class="answer {{message.self}}">';

		text += '<div class="avatar">';
		text += '<img src="{{message.pic}}" alt="User name">';
		text += '<div class="status offline"></div>';
		text += '</div>';
		text += '<div class="name">{{message.name}}</div>';
		text += '<div class="text">';
		text += '{{message.message}}';
		text += '</div>';
		text += '<div class="time">{{message.time}}</div>';
		text += '</div>';

		text = Replace(text, 'message.self', message.self);
		text = Replace(text, 'message.pic', message.pic);
		text = Replace(text, 'message.name', message.name);
		text = Replace(text, 'message.message', message.message);
		text = Replace(text, 'message.time', message.time);

		chatDiv.append(text);
	}

	var InitChat = function(prop) {
		var message = prop.message;

		tName = prop.name;
		tPic = prop.pic;

		this.status = 'chat';
		chatTitleDiv.text(tName);
		chatDiv.html('');

		for(var i in message)
		{
			AppendChat(message[i]);
		}

		listDiv.hide();
		messageDiv.show();
	};

	var Replace = function(text, template, str) {
		var reg = new RegExp('\\\{\\\{\\\s*' + template + '\\\s*\\\}\\\}');
		var dst = text.replace(reg, str);

		return dst;
	};

	this.listDiv = listDiv;
	this.tID = tID;
	this.AddUser = AddUser;
	this.InitChat = InitChat;
	this.AppendChat = AppendChat;
	this.GetMember = GetMember;

	return this;
};