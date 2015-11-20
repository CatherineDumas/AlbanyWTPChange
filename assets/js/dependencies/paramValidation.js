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
	console.log("checkParams " + whereParams);
	if(paramsStatus){
		console.log("in if");
		return whereParams;
	}
	else{
		return false;
	}
}

//Takes in an array of attributes
function getWhere(attributes){

	var whereClauses = [];
	var clause;

	console.log(attributes);

	attributes.forEach(function(attr){

		var curAttr = $("#"+attr+"_where")
		//If length is 0, it does not have a where field
		if(curAttr.length == 0){

		}
		else{
			//In here is all the attributes that have a where field

			if(curAttr[0].value != ""){
				//There will be a radio button along with the input for time
				if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "time"){

					origDate = curAttr[0].value;

					var yearMonDay_orig = "";

					yearMonDay_orig = yearMonDay_orig + origDate.substring(6,10) + "/" + origDate.substring(0,2) +"/" + origDate.substring(3,5);
					console.log(yearMonDay_orig);

					var timeVal_orig = Date.parse(yearMonDay_orig)/1000 

					var buttonValue = $("input:radio[name='dateRange"+attr+"']:checked").val();	
					console.log("Button value: " + buttonValue); 
					if(buttonValue == "Between"){ //need to get both values
						endDate = curAttr[1].value;
						var yearMonDay_end = "";
						yearMonDay_end = yearMonDay_end + endDate.substring(6,10) + "/" + endDate.substring(0,2) +"/" + endDate.substring(3,5);
						console.log(yearMonDay_end);

						var timeVal_end = Date.parse(yearMonDay_end)/1000 
						clause = attr + " " + buttonValue + " " + timeVal_orig + " and " + timeVal_end + " ";	
					}
					else{
						clause = attr + " " + buttonValue + " " + timeVal_orig;						
					}
					console.log(clause);
					whereClauses.push(clause);

				}
				else if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "key"){
					var keyVal=curAttr[0].value;

				/*	var arrayOfIds = keyVal.split(",");
					arrayOfIds.forEach(function(id){
						clause = attr + " = '" + id+"'";
						whereClauses.push(clause);						
					}); */
					console.log(clause);
					whereClauses.push(clause);
				}
				else if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "text"){
					var textVal = curAttr[0].value;
				
					var arrayOfStrings = textVal.split(",");
				
					arrayOfStrings.forEach(function(keyword){
						clause = attr+ " like '%" +keyword+ "%' ";
						whereClauses.push(clause);						
					});

				}
			}


			}


		
	})
	return whereClauses;
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