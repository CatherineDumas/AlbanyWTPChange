var curDB;
var curTable;
var curAttr = [];



Object.keys(dbs).forEach(function(db){

	var radioBtn = $('<input type="radio" name="db" id="db" value='+db+' >'+db+'</input>');
	    radioBtn.appendTo('#db_list');


})


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

$("#table_list").on('change',function(){
	console.log("hello");




	var chk = $('#table_list input:radio:checked');
 	curTable = chk.attr('value');
	console.log(curTable);
	$("#attribute_list").empty();

	dbs[curDB]['tables'][curTable]['fields'].forEach(function(attribute){
		var checkboxBtn = $('<input class="attribute" type="checkbox" name="attribute" id="attribute" value='+attribute+' >'+attribute+'</input>');
		    checkboxBtn.appendTo('#attribute_list');
	})

})


$("#executeQuery").on('click', function(){

	var url  = "/twitter_data_urls_query";
	curAttr = $('.attribute:checkbox:checked').map(function() {
	    return this.value;
	}).get();

	console.log($('#attribute_list checkbox:checked'))
	console.log(curAttr);

	//console.log(dbs);

	console.log("URL in queryPage", url);

	var params = {db:curDB,table:curTable,attr:curAttr};



	d3.json(url)
	.post(JSON.stringify({params:params}),function(err,dataFromServer){

		console.log("data",dataFromServer);

	})
})
