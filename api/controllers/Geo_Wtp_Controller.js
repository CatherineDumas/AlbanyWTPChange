module.exports = {

	'Wtp_data_issues': function(req,res){
		console.log(req.param('params'));
		var finalQuery = 'Select * from wtp_data_issues LIMIT 100';

		console.log("In the controller wtp_data_issues");


		//res.json({data:"NOTHING"});

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
