module.exports = {
	connection:'Twitter_data',
	attributes: {
		'id': 'Char(18)' ,
		'original_status_id': 'Char(18)' ,
		'created_at': 'Datetime',
		'text': 'Varchar(500)' ,
		'longitude': 'Float',
		'favorite_count': 'Int(11)' ,
		'retweet_count': 'Int(11)' ,
		'user_id': 'Varchar(18)' ,
		'user_followers_count': 'Int(11)' ,
		'user_friends_count': 'Int(11)' ,
		'user_location': 'Varchar(100)' ,
		'user_screen_name': 'Varchar(30)' 
	}
};