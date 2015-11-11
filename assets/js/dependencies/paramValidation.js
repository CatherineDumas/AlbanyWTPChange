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