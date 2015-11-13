//Check the parameters based on the DB and table
//Returns true if all parameters have been verified, false otherwise
//Need to now look for where clauses.
function checkParams(params){
	//Set default to true
	var paramsStatus = true;
	var whereParams = [];

	//Check DB
	paramsStatus = checkDB(params.db);

	//Check table
	paramsStatus = checkTable(params.db,params.table);

	//Check attributes
	paramsStatus = checkAttr(params);

	//Need to add something to params
	whereParams = getWhere(params.attr);

	return false;
}

//Takes in an array of attributes
function getWhere(attributes){

	console.log(attributes);

	attributes.forEach(function(attr){

		var curAttr = $("#"+attr+"_where")
		//If length is 0, it does not have a where field
		if(curAttr.length == 0){

		}
		else{
			//In here is all the attributes that have a where field

			//There will be a radio button along with the input for time
			if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "time"){
				console.log(curAttr[0].value);	
				var buttonValue = $("input:radio[name='dateRange"+attr+"']:checked").val();	
				console.log(buttonValue);	
			}
			else{

			}


		}
	})

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