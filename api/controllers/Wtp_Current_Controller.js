module.exports = {

    'Wtp_data_issues': function (req, res) {


        var params = req.param('params');
        console.log("params: ", params);
        var queryAttr = "";
        //console.log(params.attr);


        if (params.attr.length == 0) {
            queryAttr += "*";
        } else {
            params.attr.forEach(function (attr) {
                    queryAttr += attr + ",";
                })
                //Remove last , since it is unnecessary
            queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        }

        console.log("Query Params", queryAttr);

        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            whereClause = "where " + params.where[0] + " ";
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (params.where.indexOf(clause) == params.where.length - 1) {
                    whereClause = whereClause + clause + " ";
                } else {
                    whereClause = whereClause + clause + " and ";
                }
            });

        }
        var newQuery = "Select " + queryAttr + " from wtp_data_issues " + whereClause;





        console.log("In the controller local_wtp_data_issues");

        //finalQuery = "Select * from wtp_data_issues LIMIT 100";

        //res.json({data:"NOTHING"});
        //console.log(finalQuery);
        //console.log(newQuery);
        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })


    },

    'Wtp_data_petition_issues': function (req, res) {
        console.log(req.param('params'));

        var params = req.param('params');
        console.log("params: ", params);
        var queryAttr = "";
        //console.log(params.attr);


        if (params.attr.length == 0) {
            queryAttr += "*";
        } else {
            params.attr.forEach(function (attr) {
                queryAttr += attr + ",";
            })
            queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        }

        console.log("Query Params", queryAttr);


        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            whereClause = "where " + params.where[0] + " ";
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (params.where.indexOf(clause) == params.where.length - 1) {
                    whereClause = whereClause + clause + " ";
                } else {
                    whereClause = whereClause + clause + " and ";
                }
            });

        }
        var newQuery = "Select " + queryAttr + " from wtp_data_petition_issues " + whereClause;


        //var finalQuery = 'Select * from wtp_data_petition_issues LIMIT 100';

        console.log("In the controller local_data_petition_issues");


        //res.json({data:"NOTHING"});

        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })


    },

    'Wtp_data_petition_responses': function (req, res) {
        console.log(req.param('params'));

        var params = req.param('params');
        console.log("params: ", params);
        var queryAttr = "";
        //console.log(params.attr);


        if (params.attr.length == 0) {
            queryAttr += "*";
        } else {
            params.attr.forEach(function (attr) {
                queryAttr += attr + ",";
            })
            queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        }

        console.log("Query Params", queryAttr);

        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            whereClause = "where " + params.where[0] + " ";
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (params.where.indexOf(clause) == params.where.length - 1) {
                    whereClause = whereClause + clause + " ";
                } else {
                    whereClause = whereClause + clause + " and ";
                }
            });

        }
        var newQuery = "Select " + queryAttr + " from wtp_data_petition_responses " + whereClause;
        //var finalQuery = 'Select * from wtp_data_petition_responses LIMIT 100';

        console.log("In the controller local_wtp_data_petition_responses");


        //res.json({data:"NOTHING"});

        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })


    },

    'Wtp_data_petitions': function (req, res) {
        console.log(req.param('params'));

        var params = req.param('params');
        console.log("params: ", params);
        var queryAttr = "";
        //console.log(params.attr);


        if (params.attr.length == 0) {
            queryAttr += "*";
        } else {
            params.attr.forEach(function (attr) {
                queryAttr += attr + ",";
            })
            queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        }

        console.log("Query Params", queryAttr);

        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            whereClause = "where " + params.where[0] + " ";
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (params.where.indexOf(clause) == params.where.length - 1) {
                    whereClause = whereClause + clause + " ";
                } else {
                    whereClause = whereClause + clause + " and ";
                }
            });

        }
        var newQuery = "Select " + queryAttr + " from wtp_data_petitions " + whereClause;

        //var finalQuery = 'Select * from wtp_data_petitions LIMIT 100';

        console.log("In the controller local_ Wtp_data_petitions");
        console.log(newQuery);

        //res.json({data:"NOTHING"});

        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })
    },

    'Wtp_data_responses': function (req, res) {
        console.log(req.param('params'));

        var params = req.param('params');
        console.log("params: ", params);
        var queryAttr = "";
        //console.log(params.attr);


        if (params.attr.length == 0) {
            queryAttr += "*";
        } else {
            params.attr.forEach(function (attr) {
                queryAttr += attr + ",";
            })
            queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        }

        console.log("Query Params", queryAttr);


        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            whereClause = "where " + params.where[0] + " ";
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (params.where.indexOf(clause) == params.where.length - 1) {
                    whereClause = whereClause + clause + " ";
                } else {
                    whereClause = whereClause + clause + " and ";
                }
            });

        }
        var newQuery = "Select " + queryAttr + " from wtp_data_responses " + whereClause;

        //var finalQuery = 'Select * from wtp_data_responses LIMIT 100';

        console.log("In the controller local_Wtp_data_responses");


        //res.json({data:"NOTHING"});

        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })


    },

    'Wtp_data_signatures': function (req, res) {
        console.log(req.param('params'));
        var flag = 0;
        var params = req.param('params');
        var queryAttr = "date(from_unixtime(created)) as date, count(*) as count";
        //console.log(params.attr);
        var idQueryBuff; //dummy buffer if signature count exits

        //select clause
        //		if(params.attr.length == 0){
        //			queryAttr += "*";
        //		}
        //		else{
        //			params.attr.forEach(function(attr){
        //				//dont want to select id
        //				if(attr == "petition_id"){
        //					idQueryBuff = attr + ","
        //				}
        //				else if(attr == "number_of_days" || attr == "day_number"  ){
        //					queryAttr += " count(*),";
        //					flag = 1; //this flag will reprsent if signature count is here
        //				}
        //				else{
        //					queryAttr += attr + ",";
        //				}
        //			})
        //			//if no signature count
        //			if(!flag){
        //				queryAttr += idQueryBuff;
        //			}
        //
        //			if(queryAttr.length != 0){
        //				queryAttr = queryAttr.substring(0, queryAttr.length - 1);
        //			}
        //		}

        console.log("Query Params", queryAttr);


        var whereClause = "";
        if (params.where.length == 0) {

        } else if (params.where.length == 1) {
            if (params.where[0] == null) {

            } else {
                whereClause = "where " + params.where[0] + " ";
            }
        } else {
            whereClause = "where ";
            params.where.forEach(function (clause) {
                if (clause == null) {

                } else {
                    if (params.where.indexOf(clause) == params.where.length - 1) {
                        whereClause = whereClause + clause + " ";
                    } else {
                        whereClause = whereClause + clause + " and ";
                    }
                }
            });

        }

        var newQuery;
        //if flag is true signature count is selected
        //need to build query differently

        if (flag) {
            newQuery = "Select " + queryAttr + " from wtp_data_signatures,wtp_data_petitions " + whereClause;
        } else {
            newQuery = "Select " + queryAttr + " from wtp_data_signatures " + whereClause + "group by date";
        }

        //var finalQuery = 'Select * from wtp_data_signatures LIMIT 100';

        //console.log("In the controller local_wtp_data_signatures");
        console.log(newQuery);

        //res.json({data:"NOTHING"});

        Local_wtp.query(newQuery, null, function (err, data) {
            console.log("Error", err);
            res.json(data);
        })


    }



};