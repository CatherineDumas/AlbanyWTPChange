var url  = "wtp_geo_data_petitions_query";

console.log("URL in queryPage", url);

d3.json(url,function(err,dataFromServer){

	console.log("data",dataFromServer);

})