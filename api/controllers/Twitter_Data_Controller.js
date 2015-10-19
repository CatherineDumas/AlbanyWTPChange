module.exports = {

	'Statuses': function(req,res){

		var finalQuery = 'Select * from statuses LIMIT 10';

		console.log("In the controller twitter_data_statuses");


		//res.json({data:"NOTHING"});

		Twitter_Data.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Urls': function(req,res){
		console.log(req.param('params'));

		var finalQuery = 'Select * from urls LIMIT 10';

		console.log("In the controller twitter_data_urls");


		//res.json({data:"NOTHING"});

		Twitter_Data.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	}
}