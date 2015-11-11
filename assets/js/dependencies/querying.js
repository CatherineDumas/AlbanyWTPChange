//Performs post-processing on certain fields/types
function processData(dataFromServer){
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


//Takes query parameters
//Type of file to be downloaded
//And callback function -- which is always processData
function dbQuery(params,type,cb){
	console.log(params);

	var url  = dbs[params.db]['tables'][params.table].route;
	console.log("URL in execQuery", url);

	var fileName = params.db + "_" + params.table;

	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){

		var processData = cb(dataFromServer);

		console.log("data",processData);

		if(type == "csv"){
			JSONToCSVConvertor(processData, fileName, true);			
		}
		else{
			JSONToTSVConvertor(processData, fileName, true);
		}
	})
}