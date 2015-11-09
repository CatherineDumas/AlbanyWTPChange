module.exports = {

	'Wtp_issues': function(req,res){


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
			//Remove last , since it is unnecessary
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);

		var newQuery = "Select " + queryAttr + " from issue LIMIT 100";





		console.log("In the controller wtp_issues");

		//finalQuery = "Select * from wtp_issues LIMIT 100";

		//res.json({data:"NOTHING"});
		//console.log(finalQuery);
		//console.log(newQuery);
		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_petition_issues': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from petition_issue LIMIT 100";

		//var finalQuery = 'Select * from wtp_petition_issues LIMIT 100';

		console.log("In the controller data_petition_issues");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_petition_responses': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from petition_response LIMIT 100";

		//var finalQuery = 'Select * from wtp_petition_responses LIMIT 100';

		console.log("In the controller wtp_petition_responses");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_petitions': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from petition LIMIT 100";

		//var finalQuery = 'Select * from wtp_petitions LIMIT 100';

		console.log("In the controller  Wtp_petitions");
		console.log(newQuery);

		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})
	},

	'Wtp_responses': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from response LIMIT 100";

		//var finalQuery = 'Select * from wtp_responses LIMIT 100';

		console.log("In the controller Wtp_responses");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Wtp_signatures': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from signature LIMIT 100";

		//var finalQuery = 'Select * from wtp_signatures LIMIT 100';

		console.log("In the controller wtp_signatures");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Wtp_signature_counts': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from signature_counts LIMIT 100";

		//var finalQuery = 'Select * from wtp_signatures LIMIT 100';

		console.log("In the controller wtp_signature_Counts");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Wtp_signature_tmp': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from signature_tmp LIMIT 100";

		//var finalQuery = 'Select * from wtp_signatures LIMIT 100';

		console.log("In the controller wtp_signature_tmp");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},
	'Wtp_temp': function(req,res){
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


		var newQuery = "Select " + queryAttr + " from temp LIMIT 100";

		//var finalQuery = 'Select * from wtp_signatures LIMIT 100';

		console.log("In the controller wtp_temp");


		//res.json({data:"NOTHING"});

		Wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	}



};
