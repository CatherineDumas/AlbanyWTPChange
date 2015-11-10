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

		var attrDiv = $('<div style="display:inline-block;vertical-align:text-top;margin-left:10px;margin-right:10px;" id='+attribute+'_div></div>');

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
			var keyBox = $('<input style="margin:0 auto;display:block;"type=text class="input" id='+attr+'_where placeholder="  One (or more) id numbers"> </input>');
			keyBox.appendTo('#'+attr+'_div');
		}
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "value"){
			var keyBox = $('<input size=8 style="margin:0 auto; display:block;"type=text class="input" id='+attr+'_where placeholder="Number"> </input>');
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
		csvQuery(params);		
	}



})

function csvQuery(params){
	console.log(params)
	// params.db = params.db.split(' ').join('_');
	// params.table = params.table.split(' ').join('_');

	// console.log(params)

	var url  = dbs[params.db]['tables'][params.table].route
	console.log("URL in execQuery", url);

	var fileName = params.db + params.table;



	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){


		console.log("data",dataFromServer);
		JSONToCSVConvertor(dataFromServer, fileName, true);
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
		tsvQuery(params);		
	}



})

function tsvQuery(params){
	console.log(params)
	// params.db = params.db.split(' ').join('_');
	// params.table = params.table.split(' ').join('_');

	// console.log(params)

	var url  = dbs[params.db]['tables'][params.table].route
	console.log("URL in execQuery", url);

	var fileName = params.db + params.table;



	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){



		console.log("data",dataFromServer);
		JSONToTSVConvertor(dataFromServer, fileName, true);
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


function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = ReportTitle;
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function JSONToTSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var tsv = '';    
    //Set Report title in first row or line
    
    tsv += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + '\t';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        tsv += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '"\t';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        tsv += row + '\r\n';
    }

    if (tsv == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = ReportTitle;
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want tsv or xls
    var uri = 'data:text/tsv;charset=utf-8,' + escape(tsv);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".tsv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
}