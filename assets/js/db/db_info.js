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
	geo_wtp:{
		name:"Full We The People Data",
		tables:{
			wtp_data_issues:{
				name:"Incomplete Issue Code Table",
				route:"/geo_wtp_data_issues_query",
				fields:{
					'id':{type:"key"},
					'name':{type:"term_text"}
				}
			},
			wtp_data_petition_issues:{
				name:"Petition and Issue Crosstable",
				route:"/geo_wtp_data_petition_issues_query",
				fields:{
					'petition_id':{type:"key"},
					'issue_id':{type:"key"}

				}
			},
			wtp_data_petition_responses:{
				name:"Petition and Response Crosstable",
				route:"/geo_wtp_data_petition_responses_query",
				fields:{
					'petition_id':{type:"key"},
					'response_id':{type:"key"},
					'association_time':{type:""}
				}
			},
			wtp_data_petitions:{
				name:"Petitions",
				route:"/geo_wtp_data_petitions_query",
				fields:{
					'serial':{type:"key"},
					'id':{type:"key"},
					'type':{type:"term_text"},
					'title':{type:"text"},
					'body':{type:"text"},
					'signature_threshold':{type:"value"},
					'signature_count':{type:"value"},
					'url':{type:"url"},
					'deadline':{type:"term_num"},
					'created':{type:"time"}
				}
			},
			wtp_data_responses:{
				name:"Response URL",
				route:"/geo_wtp_data_responses_query",
				fields:{
					'id':{type:"key"},
					'url':{type:"url"}
				}
			},
			wtp_data_signatures:{
				name:"Signatures",
				route:"/geo_wtp_data_signatures_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'type':{type:"term_text"},
					'name':{type:"term_text"},
					'zip':{type:"term_num"},
					'created':{type:"time"}
				}
			}
		}
	},
	twitter_data:{
		name:"Twitter Data",
		tables:{
			statuses:{
				name:"Statuses",
				route:"/twitter_data_statuses_query",
				fields:{
					'id':{type:"key"},
					'original_status_id':{type:"key"},
					'created_at':{type:"time"},
					'text':{type:"text"},
					'longitude':{type:"value"},
					'latitude':{type:"value"},
					'favorite_count':{type:"value"},
					'retweet_count':{type:"value"},
					'user_id':{type:"key"},
					'user_followers_count':{type:"value"},
					'user_friends_count':{type:"value"},
					'user_location':{type:"term_text"},
					'user_screen_name':{type:"term_text"}
				}
			},
			url:{
				name:"URL and Status Crosstable",
				route:"/twitter_data_urls_query",
				fields:{
					'id':{type:"key"},
					'status_id':{type:"key"},
					'url':{type:"url"}
				}
			}
		}
	},

	wtp:{
		name:"Public We The People Data",
		tables:{
			issue:{
				name:"Issue Code Table",
				route:"/wtp_issues_query",
				fields:{
					'id':{type:"key"},
					'name':{type:"term"}
				}
			},
			petition:{
				name:"Petitions",
				route:"/wtp_petitions_query",
				fields:{
					'id':{type:"key"},
					'title':{type:"text"},
					'status':{type:"term_text"},
					'url':{type:"url"},
					'body':{type:"text"},
					'created':{type:"time"},
					'deadline':{type:"term_num"},
					'is_public':{type:"boolean"},
					'is_signable':{type:"boolean"},
					'signature_threshold':{type:"value"},
					'categories':{type:"term_text"}
				}
			},
			petition_issue:{
				name:"Petition and Issue Crosstable",
				route:"/wtp_petition_issues_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'issue_id':{type:"key"}
				}
			},
			petition_response:{
				name:"Petition and Response Crosstable",
				route:"/wtp_petition_responses_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'response_id':{type:"key"}
				}
			},
			response:{
				name: "Responses",
				route:"/wtp_responses_query",
				fields:{
					'id':{type:"key"},
					'responded':{type:"time"},
					'url':{type:"url"}
				}
			},
			signature:{
				name:"Signatures",
				route:"wtp_signatures_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'created':{type:"time"},
					'name':{type:"term_text"},
					'city':{type:"term_text"},
					'state':{type:"term_text"},
					'zip':{type:"term_num"}
				}
			},
			signature_counts:{
				name:"Signature Count and Petition Crosstable",
				route:"/wtp_signature_counts_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'signature_count':{type:"value"}
				}
			},
			signature_tmp:{
				name:"Temporary Signature Table",
				route:"/wtp_signature_tmp_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'created':{type:"time"},
					'name':{type:"term_text"},
					'city':{type:"term_text"},
					'state':{type:"term_text"},
					'zip':{type:"term_num"}
				}
			},
			temp:{
				name:"Temporary Petition Table",
				route:"/wtp_temp_query",
				fields:{
					'id':{type:"key"},
					'title':{type:"text"},
					'status':{type:"term_text"},
					'url':{type:"url"},
					'body':{type:"text"},
					'created':{type:"time"},
					'deadline':{type:"term_num"},
					'is_public':{type:"boolean"},
					'is_signable':{type:"boolean"},
					'signature_threshold':{type:"value"}
				}
			}
		}	
	},
	local_wtp:{
		name:"Local WTP Database",
		tables:{
			wtp_data_issues:{
				name:"Incomplete Issue Code Table",
				route:"/local_wtp_data_issues_query",
				fields:{
					'id':{type:"key"},
					'name':{type:"term_text"}
				}
			},
			wtp_data_petition_issues:{
				name:"Petition and Issue Crosstable",
				route:"/local_wtp_data_petition_issues_query",
				fields:{
					'petition_id':{type:"key"},
					'issue_id':{type:"key"}

				}
			},
			wtp_data_petition_responses:{
				name:"Petition and Response Crosstable",
				route:"/local_wtp_data_petition_responses_query",
				fields:{
					'petition_id':{type:"key"},
					'response_id':{type:"key"},
					'association_time':{type:""}
				}
			},
			wtp_data_petitions:{
				name:"Petitions",
				route:"/local_wtp_data_petitions_query",
				fields:{
					'serial':{type:"key"},
					'id':{type:"key"},
					'type':{type:"term_text"},
					'title':{type:"text"},
					'body':{type:"text"},
					'signature_threshold':{type:"value"},
					'signature_count':{type:"value"},
					'url':{type:"url"},
					'deadline':{type:"term_num"},
					'created':{type:"time"}
				}
			},
			wtp_data_responses:{
				name:"Response URL",
				route:"/local_wtp_data_responses_query",
				fields:{
					'id':{type:"key"},
					'url':{type:"url"}
				}
			},
			wtp_data_signatures:{
				name:"Signatures",
				route:"/local_wtp_data_signatures_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'type':{type:"term_text"},
					'name':{type:"term_text"},
					'zip':{type:"term_num"},
					'created':{type:"time"}
				}
			}
		}
	},
}