var curDB;
var curTable;
var curAttr = [];


//Prints all DBs from db_info.js
Object.keys(dbs).forEach(function(db){

	var radioBtn = $('<input type="radio" name="db" id="db" value='+db+' >'+db+'</input>');
	    radioBtn.appendTo('#db_list');


})

//When a DB is selected, prints all tables for that DB, from db_info.js
$("input[name='db']:radio").on('change',function(){
	curDB = $(this).val();

	console.log(curDB);

	$("#table_list").empty();
	$("#attribute_list").empty();


	Object.keys(dbs[curDB].tables).forEach(function(table){
		var radioBtn = $('<input type="radio" name="table" id="table" value='+table+' >'+table+'</input>');
		    radioBtn.appendTo('#table_list');
	})
})

//When a table is selected, prints all the fields for that table, from db_info.js
$("#table_list").on('change',function(){

	var chk = $('#table_list input:radio:checked');
 	curTable = chk.attr('value');
	console.log(curTable);
	$("#attribute_list").empty();

	dbs[curDB]['tables'][curTable]['fields'].forEach(function(attribute){
		var checkboxBtn = $('<input class="attribute" type="checkbox" name="attribute" id="attribute" value='+attribute+' >'+attribute+'</input>');
		    checkboxBtn.appendTo('#attribute_list');
	})

})

//Jquery to execute query. Gets all selected attributes
$("#executeQuery").on('click', function(){




	curAttr = $('.attribute:checkbox:checked').map(function() {
	    return this.value;
	}).get();


	console.log(curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};

	//Run function to error-check parameters based on the DB and Table
	if(checkParams(params)){
		execQuery(params);		
	}



})

function execQuery(params){
	console.log(params)
	// params.db = params.db.split(' ').join('_');
	// params.table = params.table.split(' ').join('_');

	// console.log(params)

	var url  = dbs[params.db]['tables'][params.table].route
	console.log("URL in execQuery", url);






	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){

		console.log("data",dataFromServer);

	})

}

//Check the parameters based on the DB and table
//Returns true if all parameters have been verified, false otherwise
function checkParams(params){

	//Set default to true
	var paramsStatus = true;


	//Check DB
	paramsStatus = checkDB(params.db);

	//Check table
	paramsStatus = checkTable(params.db,params.table);

	//Check attributes
	paramsStatus = checkAttr(params);


	return paramsStatus;


}

//Checks to make sure DB is a legit DB or not
//Takes just a DB
//Returns a boolean
function checkDB(db){

	//Default to true
	var dbStatus = true;

	return dbStatus;
}


//Checks to make sure given DB contains the given table
//Takes DB and Table
//Returns a boolean
function checkTable(db,table){

	//Default to true
	var tableStatus = true;

	return tableStatus;


}

//Checks attributes
//Takes all params
//Returns a boolean
function checkAttr(params){

	//default to true
	var attrStatus = true;

	return attrStatus;

}