var curDB;
var curTable;
var curAttr = [];



//Creates buttons for every DB
Object.keys(dbs).forEach(function(db){

	var curId = db;
	console.log(dbs[db]);

	//Each DB button has an on-click function, and it passes its own ID to it.
	var radioBtn = $('<button onClick="db_function(this.id)" class = "btn btn-primary:active" name="db" id='+curId+' value='+db+' ><b>'+dbs[db].name+"</b><br>"+db+'</button>');
	    radioBtn.appendTo('#db_list');


})


//Function responsible for what happens when a DB button is clicked
function db_function(db){
	curDB = db;
	console.log(curDB);


	var dbButtons = $("#db_list :button");

	//Only 1 db  button can be active at a time
	//de-select every db button
	Object.keys(dbButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+dbButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	//Then, selecct the current DB
	$("#"+curDB).removeClass('btn-primary:active').addClass('btn-primary');

	//Empty the tables and attribute sections, since they are DB specific
	$("#table_list").empty();
	$("#attribute_list").empty();

	//Create the list of table buttons for this DB
	Object.keys(dbs[curDB].tables).forEach(function(table){
		var radioBtn = $('<button  class = "btn btn-primary:active" onClick="table_function(this.id)" name="table" id='+table+' value='+table+' ><b>'+dbs[curDB].tables[table].name+"</b><br>"+table+'</button>');
		    radioBtn.appendTo('#table_list');
	})
}

//Function responsible for what happens when a table button is clicked
function table_function(table){
 	curTable = table;
	console.log(curTable);
	$("#attribute_list").empty();
	curAttr = [];

	var tableButtons = $("#table_list :button");


	//Only 1 table  button can be active at a time
	//de-select every table button
	Object.keys(tableButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+tableButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	$("#"+curTable).removeClass('btn-primary:active').addClass('btn-primary');



	Object.keys(dbs[curDB]['tables'][curTable]['fields']).forEach(function(attribute){

		curAttr.push(attribute);
		var attrDiv = $('<div style="display:inline-block;vertical-align:text-top;" id='+attribute+'_div></div>');

		attrDiv.appendTo('#attribute_list');

		var checkboxBtn = $('<button style="margin-bottom:5px;" class = "btn-primary" onClick="attr_function(this.id)" name="attribute" id='+attribute+' value='+attribute+' >'+attribute+'</button>');
		    checkboxBtn.appendTo('#'+attribute+'_div');
 
	})
}

//Function responsible ffor what happens when a attribute button is clicked
function attr_function(attr){

	var attrIndex = curAttr.indexOf(attr);

	//If the attribute was not already selected
	//Add it to the curAttr array (for querying)
	//Call function to generate where_clause input field
	if(attrIndex == -1){
		toggleButton(attr);
		curAttr.push(attr);	
	}
	else{


		//If its length is still 0, it doesnt exist

		var curAttrDiv = $("#"+attr+"_where");

		//See if an input box already exists
		if(curAttrDiv.length == 0){
			//It does not. 
			//Try to make one.
			where_attr(attr);
			curAttrDiv = $("#"+attr+"_where");
			//This means 'where' is not currently active
			if(curAttrDiv.length == 0){
				//It can't make one. Toggle it off.
				//Remove and empty whatever is there
				curAttr.splice(attrIndex,1);
				$("#"+attr+'_where_div').empty();
				toggleButton(attr);
			}
			//If it exists, above if will not execute
			//And the input will remain			
		}
		else{
			//It existed. Time to Toggle off
			curAttr.splice(attrIndex,1);
			$("#"+attr+'_where_div').empty();
			toggleButton(attr);
		}




	}



	console.log(curAttr);
}

function toggleButton(id){
	//Toggles the color of the button
	if($("#"+id).hasClass('btn-primary:active')){
		$("#"+id).removeClass('btn-primary:active').addClass('btn-primary');
	}
	else{
		$("#"+id).removeClass('btn-primary').addClass('btn-primary:active');
	}	
}

//Creates the appropriate where_clause input box for the given (selected) attribute
function where_attr(attr){

		var whereAttrDiv = $('<div style="vertical-align:text-top;" id='+attr+'_where_div></div>');

		whereAttrDiv.appendTo('#'+attr+'_div');


		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "key"){
			var keyBox = $('<input style="margin:0 auto;display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="  One (or more) id numbers"> </input>');
			keyBox.appendTo('#'+attr+'_where_div');

			var idBtn1 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="andor'+attr+'" id="'+attr+'_where" value="=" >and</input>');
			var idBtn2 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="andor'+attr+'" id="'+attr+'_where" value="=" >Or</input>');

			idBtn1.appendTo('#'+attr+'_where_div');
			idBtn2.appendTo('#'+attr+'_where_div');
		}
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "time"){

			var dateBox = $('<aside class="widget"> <p><input style="border:2px solid black;" id='+attr+'_where type="text" id="widget_"'+attr+'></p></aside>')
			dateBox.appendTo('#'+attr+'_where_div');
			$("#"+attr+"_where").datepicker();

			var dateBtn1 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="dateRange'+attr+'" id="'+attr+'_where" value="<" >Prior to</input>');
			var dateBtn2 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="dateRange'+attr+'" id="'+attr+'_where" value="=" >On</input>');
			var dateBtn3 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="dateRange'+attr+'" id="'+attr+'_where" value=">" >After</input>');
			var dateBtn4 = $('<input onclick=between('+attr+') style="margin-left:.4em; margin-bottom:1em" type="radio" name="dateRange'+attr+'" id="'+attr+'_where" value="between" >Between</input>');

			
			dateBtn1.appendTo('#'+attr+'_where_div');
			dateBtn2.appendTo('#'+attr+'_where_div');
			dateBtn3.appendTo('#'+attr+'_where_div');
			dateBtn4.appendTo('#'+attr+'_where_div');

		}
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "text"){
			var keyBox = $('<input style="margin:0 auto;display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="  Keywords separated by commas"> </input>');
			keyBox.appendTo('#'+attr+'_where_div');

			var keywordBtn1 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="keyword'+attr+'" id="'+attr+'_where" value="=" >and</input>');
			var keywordBtn2 = $('<input onclick=between('+attr+') style="margin-left:.4em;" type="radio" name="keyword'+attr+'" id="'+attr+'_where" value="=" >Or</input>');

			keywordBtn1.appendTo('#'+attr+'_where_div');
			keywordBtn2.appendTo('#'+attr+'_where_div');
		}
		if(attr == "signature_count"){
			var countBox = $('<input style="margin:0 auto;display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="  One (or more) signature day counts"> </input>');			
			countBox.appendTo('#'+attr+'_where_div');
		}
}

//Deals with creating a second calandar for date ranges
function between(attr){
	var buttonValue = $("input:radio[name='dateRange"+attr.id+"']:checked").val();	

	if(buttonValue == "between"){
			console.log(attr.id);
			var dateBox2 = $('<aside class="widget"> <p><input style="border:2px solid black;" id='+attr.id+'_where2 type="text" id="widget_2_"'+attr.id+'></p></aside>')
			dateBox2.appendTo('#'+attr.id+'_where_div');
			$("#"+attr.id+"_where2").datepicker();		
	}
	else{
		if($("#"+attr.id+"_where2") != null){
			$("#"+attr.id+"_where2").remove();
		}
	}
}


//Jquery to execute query. Gets all selected attributes
$("#csv").on('click', function(){

	console.log("in CSV button",curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};


	if(params.attr == null){
		params.attr = "all";
	}
	
	params.where = checkParams(params);
	//Run function to error-check parameters based on the DB and Table
	console.log("in csv click" + params);
	dbQuery(params,"csv",processData);		
	
})

//Jquery to execute query. Gets all selected attributes
$("#tsv").on('click', function(){
	console.log("In TSV button",curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};

	if(params.attr == null){
		params.attr = "all";
	}
	params.where = checkParams(params);
	//Run function to error-check parameters based on the DB and Table
	dbQuery(params,"tsv",processData);		
	
})