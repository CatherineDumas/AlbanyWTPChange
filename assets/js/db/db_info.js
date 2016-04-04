var dbs = {
    //Structure is as follows:
    //DB -> Tables -> Attributes of Tables
    //DB has 'name', which is flavorful/descriptive name of database
    //Tables have 'name', same as above
    //Fields have type, which is what kind of field it is
    //key means it is a key/ID number, so the user only cares about being able to look up SPECIFIC ones
    //value means it is a value, user will want specific, ranges, greater/less etc.
    //url means it is a web url
    //time is a time value
    //term_text means it is a single (or few) word text field.
    //term_num means it is a number field but cannot apply greater than/less than, etc. 
    //text means it is a multiple-word text field. user will want boolean word search, and number of words
    wtp_current: {
        name: "Most Recent WTP Data",
        tables: {
            wtp_data_issues: {
                name: "Incomplete Issue Code Table",
                route: "/Wtp_current_data_issues_query",
                fields: {
                    'id': {
                        type: "key"
                    },
                    'name': {
                        type: "term_text"
                    }
                }
            },
            wtp_data_petition_issues: {
                name: "Petition and Issue Crosstable",
                route: "/Wtp_current_data_petition_issues_query",
                fields: {
                    'petition_id': {
                        type: "key"
                    },
                    'issue_id': {
                        type: "key"
                    }

                }
            },
            wtp_data_petition_responses: {
                name: "Petition and Response Crosstable",
                route: "/Wtp_current_data_petition_responses_query",
                fields: {
                    'petition_id': {
                        type: "key"
                    },
                    'response_id': {
                        type: "key"
                    },
                    'association_time': {
                        type: ""
                    }
                }
            },
            wtp_data_petitions: {
                name: "Petitions",
                route: "/Wtp_current_data_petitions_query",
                fields: {
                    'serial': {
                        type: "key"
                    },
                    'id': {
                        type: "key"
                    },
                    'type': {
                        type: "term_text"
                    },
                    'title': {
                        type: "text"
                    },
                    'body': {
                        type: "text"
                    },
                    'signature_threshold': {
                        type: "value"
                    },
                    'signature_count': {
                        type: "value"
                    },
                    'url': {
                        type: "url"
                    },
                    'deadline': {
                        type: "term_num"
                    },
                    'created': {
                        type: "time"
                    }
                }
            },
            wtp_data_responses: {
                name: "Response URL",
                route: "/Wtp_current_data_responses_query",
                fields: {
                    'id': {
                        type: "key"
                    },
                    'url': {
                        type: "url"
                    }
                }
            },
            wtp_data_signatures: {
                name: "Signatures",
                route: "/Wtp_current_data_signatures_query",
                fields: {
                    'id': {
                        type: "key"
                    },
                    'petition_id': {
                        type: "key"
                    },
                    'type': {
                        type: "term_text"
                    },
                    'name': {
                        type: "term_text"
                    },
                    'zip': {
                        type: "term_num"
                    },
                    'created': {
                        type: "time"
                    }
                }
            },
            signature_total_day_count: {
                name: "Cumulative Signatures",
                route: "/Wtp_current_data_signatures_query",
                fields: {
                    'petition_id': {
                        type: "key"
                    },
                    'number_of_days': {
                        type: "term_num"
                    }
                }
            },
            signature_single_day_count: {
                name: "Single Day Signatures",
                route: "/Wtp_current_data_signatures_query",
                fields: {
                    'petition_id': {
                        type: "key"
                    },
                    'day_number': {
                        type: "term_num"
                    }
                }
            }
        }
    }
}