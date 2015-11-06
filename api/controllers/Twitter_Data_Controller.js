module.exports = {

	'Statuses': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from statuses LIMIT 10";
		console.log(newQuery);
		//var finalQuery = 'Select * from statuses LIMIT 10';

		console.log("In the controller twitter_data_statuses");


		//res.json({data:"NOTHING"});

		Twitter_Data.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Urls': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from urls LIMIT 10";
		console.log(newQuery);

		//var finalQuery = 'Select * from urls LIMIT 10';

		console.log("In the controller twitter_data_urls");


		//res.json({data:"NOTHING"});

		Twitter_Data.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	}
}