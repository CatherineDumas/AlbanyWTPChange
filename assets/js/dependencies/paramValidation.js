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

	//console.log(attributes);

	attributes.forEach(function(attr){
		console.log("attrs are :" + attr);
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
					if(buttonValue == "between"){ //need to get both values
						var betweenValue = $("#"+attr+"_where2")
						console.log(betweenValue[0]);
						endDate = betweenValue[0].value;
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
				else if(attr == "signature_total_day_count"){ //need to hardcode a lot of this
					var id;
					var interval = curAttr[0].value; //get how many days we want
					//need to get ID as well
					attributes.forEach(function(findIdAttr){
						var curr = $("#"+findIdAttr+"_where")
						if(findIdAttr == "petition_id"){
							id = curr[0].value;
						}
					});


					console.log("petition_id " + id +",count + " + interval);
					//now we have ID
					//need to get date created

					//query that works in the real database:
					/*select wtp_data_signatures.id FROM wtp_data_signatures,wtp_data_petitions where wtp_data_signatures.petition_id = '4e7b21632ee8d04577000000' AND wtp_data_petitions.id = '4e7b21632ee8d04577000000' AND wtp_data_signatures.created <= (wtp_data_petitions.created + 86400);
					*/
					var dayCount = interval * 86400; //number of seconds in a day * how many days you want to add 
					clause = " wtp_data_signatures.petition_id = '" + id + "' AND wtp_data_petitions.id = '" + id + "' AND wtp_data_signatures.created < (wtp_data_petitions.created + " + dayCount + ") ";
					whereClauses.push(clause);

				}
				else if(attr == "signature_single_day_count"){ //need to hardcode a lot of this
					var id;
					var interval = curAttr[0].value; //get how many days we want
					//need to get ID as well
					attributes.forEach(function(findIdAttr){
						var curr = $("#"+findIdAttr+"_where")
						if(findIdAttr == "petition_id"){
							id = curr[0].value;
						}
					});


					console.log("petition_id " + id +",count + " + interval);
					//now we have ID
					//need to get date created

					//query that works in the real database:
					/*select wtp_data_signatures.id FROM wtp_data_signatures,wtp_data_petitions where wtp_data_signatures.petition_id = '4e7b21632ee8d04577000000' AND wtp_data_petitions.id = '4e7b21632ee8d04577000000' AND wtp_data_signatures.created <= (wtp_data_petitions.created + 86400);
					*/
					var beginDayCount = interval * 86400; //number of seconds in a day * how many days you want to add 
					var endDayCount = (interval+1) * 86400;
					clause = " wtp_data_signatures.petition_id = '" + id + "' AND wtp_data_petitions.id = '" + id + "' AND wtp_data_signatures.created between (wtp_data_petitions.created + " + beginDayCount + ") AND (wtp_data_petitions.created + " + endDayCount + ")";
					whereClauses.push(clause);

				}
			}


			}


		
	})
	console.log("where clauses: " + whereClauses);
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