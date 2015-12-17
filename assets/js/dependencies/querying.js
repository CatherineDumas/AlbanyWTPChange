//Performs post-processing on certain fields/types
function processData(dataFromServer){

	if(!dataFromServer[0]){
		$("#downloadStatus").empty();
		$("#error").text("No results match your query");
		return false;
	}
	else{
		$("#error").empty();
		$("#downloadStatus").text("Results downloading");
		Object.keys(dataFromServer[0]).forEach(function(attrName){

			//if column name = created, we want to convert it to a date
			if(attrName == "created"){
				Object.keys(dataFromServer).forEach(function(row){
					var date = new Date(dataFromServer[row][attrName]*1000);

					dataFromServer[row][attrName] = date.toString();	
				})
			}
		});


		return dataFromServer;		
	}

}


//Takes query parameters
//Type of file to be downloaded
//And callback function -- which is always processData
function dbQuery(params,type,cb){
	console.log("in db query", params);

	var url  = dbs[params.db]['tables'][params.table].route;
	console.log("URL in execQuery", url);

	$("#error").empty();
	$("#downloadStatus").text("Executing Query");


	var fileName = params.db + "_" + params.table;

		d3.json(url)
		.post(JSON.stringify({params:params}),function(err,dataFromServer){

			var processData = cb(dataFromServer);

			if(processData == false){

			}
			else{
				console.log("data",processData);

				if(type == "csv"){
					JSONToCSVConvertor(processData, fileName, true);			
				}
				else{
					JSONToTSVConvertor(processData, fileName, true);
				}			
			}

		})			

	




}
