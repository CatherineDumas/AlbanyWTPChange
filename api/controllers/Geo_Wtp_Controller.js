module.exports = {

	'Wtp_data_issues': function(req,res){


		// var params = req.param('params');
		// console.log("params: ",params);

		// params = JSON.parse(params);

		// var query = 'Select ';
		// var queryTable = ' from wtp_data_issues';

		// //Get attributes for select statement
		// var queryAttr = params.attr;
		// console.log("attr: ",queryAttr);
		// //Check for 'all'
		// if(queryAttr[0] != 'all'){
		// 	//Add attributes to query
		// 	queryAttr.forEach(function(attribute){
		// 		query = query + '`' + attribute + '`' + ',';
		// 	})		

		// 	//Remove last , since it is unnecessary
		// 	query = query.substring(0, queryAttr.length - 1);

		// }
		// else{
		// 	query = query + '*';
		// }





		// query = query + queryTable;

		// //For TESTING PURPOSES ONLYYYYY
		// var queryEnd = " LIMIT 100";


		// var finalQuery = query + queryEnd;

		console.log("In the controller wtp_data_issues");

		finalQuery = "Select * from wtp_data_issues LIMIT 10";

		//res.json({data:"NOTHING"});
		console.log(finalQuery);
		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petition_issues': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_petition_issues LIMIT 10';

		console.log("In the controller data_petition_issues");


		//res.json({data:"NOTHING"});

		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petition_responses': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_petition_responses LIMIT 10';

		console.log("In the controller wtp_data_petition_responses");


		//res.json({data:"NOTHING"});

		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petitions': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_petitions LIMIT 10';

		console.log("In the controller  Wtp_data_petitions");


		//res.json({data:"NOTHING"});

		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})
	},

	'Wtp_data_responses': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_responses LIMIT 10';

		console.log("In the controller Wtp_data_responses");


		//res.json({data:"NOTHING"});

		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_signatures': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_signatures LIMIT 10';

		console.log("In the controller wtp_data_signatures");


		//res.json({data:"NOTHING"});

		Geo_Wtp.query(finalQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	}



};
