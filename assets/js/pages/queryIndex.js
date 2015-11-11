var curDB;
var curTable;
var curAttr = [];


//Prints all DBs from db_info.js
Object.keys(dbs).forEach(function(db){

	var curId = db;
	console.log(dbs[db]);

	var radioBtn = $('<button onClick="db_function(this.id)" class = "btn btn-primary:active" name="db" id='+curId+' value='+db+' ><b>'+dbs[db].name+"</b><br>"+db+'</button>');
	    radioBtn.appendTo('#db_list');


})



function db_function(db){
	curDB = db;
	console.log(curDB);


	var dbButtons = $("#db_list :button");

	Object.keys(dbButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+dbButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	$("#"+curDB).removeClass('btn-primary:active').addClass('btn-primary');

	$("#table_list").empty();
	$("#attribute_list").empty();


	Object.keys(dbs[curDB].tables).forEach(function(table){
		var radioBtn = $('<button  class = "btn btn-primary:active" onClick="table_function(this.id)" name="table" id='+table+' value='+table+' ><b>'+dbs[curDB].tables[table].name+"</b><br>"+table+'</button>');
		    radioBtn.appendTo('#table_list');
	})
}

function table_function(table){
 	curTable = table;
	console.log(curTable);
	$("#attribute_list").empty();
	curAttr = [];

	var tableButtons = $("#table_list :button");

	Object.keys(tableButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+tableButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	$("#"+curTable).removeClass('btn-primary:active').addClass('btn-primary');



	Object.keys(dbs[curDB]['tables'][curTable]['fields']).forEach(function(attribute){

		var attrDiv = $('<div style="display:inline-block;vertical-align:text-top;" id='+attribute+'_div></div>');

		attrDiv.appendTo('#attribute_list');

		var checkboxBtn = $('<button style="margin-bottom:5px;" class = "btn btn-primary:active" onClick="attr_function(this.id)" name="attribute" id='+attribute+' value='+attribute+' >'+attribute+'</button>');
		    checkboxBtn.appendTo('#'+attribute+'_div');
 
	})
}

function attr_function(attr){

	var attrIndex = curAttr.indexOf(attr);

	if(attrIndex == -1){
		curAttr.push(attr);	
		where_attr(attr);
	}
	else{
		curAttr.splice(attrIndex,1);
		$('#'+attr+'_where').remove();
	}



	if($("#"+attr).hasClass('btn-primary:active')){
		$("#"+attr).removeClass('btn-primary:active').addClass('btn-primary');
	}
	else{
		$("#"+attr).removeClass('btn-primary').addClass('btn-primary:active');
	}

  


	console.log(curAttr);
}

//Creates the appropriate where_clause input box for the given (selected) attribute
function where_attr(attr){
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "key"){
			var keyBox = $('<input style="margin:0 auto;display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="  One (or more) id numbers"> </input>');
			keyBox.appendTo('#'+attr+'_div');
		}
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "value"){
			var keyBox = $('<input size=8 style="margin:0 auto; display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="Number"> </input>');
			keyBox.appendTo('#'+attr+'_div');
		}
}



//Jquery to execute query. Gets all selected attributes
$("#csv").on('click', function(){


	console.log("annyong");




	console.log("in CSV button",curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};


	if(params.attr == null){
		params.attr = "all";
	}

	//Run function to error-check parameters based on the DB and Table
	if(checkParams(params)){
		dbQuery(params,"csv",processData);		
	}



})


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



function dbQuery(params,type,cb){
	console.log(params)
	// params.db = params.db.split(' ').join('_');
	// params.table = params.table.split(' ').join('_');

	// console.log(params)

	var url  = dbs[params.db]['tables'][params.table].route
	console.log("URL in execQuery", url);

	var fileName = params.db + params.table;



	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){

		//cb = processData
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

//Jquery to execute query. Gets all selected attributes
$("#tsv").on('click', function(){
	console.log(curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};


	if(params.attr == null){
		params.attr = "all";
	}

	//Run function to error-check parameters based on the DB and Table
	if(checkParams(params)){
		dbQuery(params,"tsv",processData);		
	}
})