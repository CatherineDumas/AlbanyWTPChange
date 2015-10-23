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

	Object.keys(dbs[curDB]['tables'][curTable]['fields']).forEach(function(attribute){
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


	if(params.attr == null){
		params.attr = "all";
	}

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

	var fileName = params.db + params.table;



	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){



		console.log("data",dataFromServer);
		JSONToCSVConvertor(dataFromServer, fileName, true);
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