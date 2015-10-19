module.exports = {

	'Wtp_data_petitions': function(req,res){

		var finalQuery = 'Select * from wtp_data_petitions LIMIT 10';

		console.log("In the controller");


		//res.json({data:"NOTHING"});

		Wtp_Geo.query(finalQuery,null,function(err,data){
			console.log(data);
			//res.json(data);
		})
	}


};
