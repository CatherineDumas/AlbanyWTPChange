var dbs = {
//Structure is as follows:
//DB -> Tables -> Attributes of Tables
//DB has 'name', which is flavorful/descriptive name of database
//Tables have 'name', same as above
//Fields have type, which is what kind of field it is
//key means it is a key/ID number, so the user only cares about being able to look up SPECIFIC ones
//value means it is a value, user will want specific, ranges, etc.
//Text means it is a text field. user will want boolean word search, and number of words
	geo_wtp:{
		name:"Full We The People Data",
		tables:{
			wtp_data_issues:{
				name:"Incomplete Issue Code Table",
				route:"/geo_wtp_data_issues_query",
				fields:{
					'id':{type:"key"},
					'name':{type:""}
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
					'type':{type:""},
					'title':{type:""},
					'body':{type:""},
					'signature_threshold':{type:""},
					'signature_count':{type:""},
					'url':{type:""},
					'deadline':{type:""},
					'created':{type:""}
				}
			},
			wtp_data_responses:{
				name:"Response URL",
				route:"/geo_wtp_data_responses_query",
				fields:{
					'id':{type:"key"},
					'url':{type:""}
				}
			},
			wtp_data_signatures:{
				name:"Signatures",
				route:"/geo_wtp_data_signatures_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'type':{type:""},
					'name':{type:""},
					'zip':{type:""},
					'created':{type:""}
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
					'created_at':{type:""},
					'text':{type:""},
					'longitude':{type:""},
					'favorite_count':{type:""},
					'retweet_count':{type:""},
					'user_id':{type:"key"},
					'user_followers_count':{type:""},
					'user_friends_count':{type:""},
					'user_location':{type:""},
					'user_screen_name':{type:""}
				}
			},
			url:{
				name:"URL and Status Crosstable",
				route:"/twitter_data_urls_query",
				fields:{
					'id':{type:"key"},
					'status_id':{type:"key"},
					'url':{type:""}
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
					'name':{type:""}
				}
			},
			petition:{
				name:"Petitions",
				route:"/wtp_petitions_query",
				fields:{
					'id':{type:"key"},
					'title':{type:""},
					'status':{type:""},
					'url':{type:""},
					'body':{type:""},
					'created':{type:""},
					'deadline':{type:""},
					'is_public':{type:""},
					'is_signable':{type:""},
					'signature_threshold':{type:""}
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
					'responded':{type:""},
					'url':{type:""}
				}
			},
			signature:{
				name:"Signatures",
				route:"wtp_signatures_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'created':{type:""},
					'name':{type:""},
					'city':{type:""},
					'state':{type:""},
					'zip':{type:""}
				}
			},
			signature_counts:{
				name:"Signature Count and Petition Crosstable",
				route:"/wtp_signature_counts_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'signature_count':{type:""}
				}
			},
			signature_tmp:{
				name:"Temporary Signature Table",
				route:"/wtp_signature_tmp_query",
				fields:{
					'id':{type:"key"},
					'petition_id':{type:"key"},
					'created':{type:""},
					'name':{type:""},
					'city':{type:""},
					'state':{type:""},
					'zip':{type:""}
				}
			},
			temp:{
				name:"Temporary Petition Table",
				route:"/wtp_temp_query",
				fields:{
					'id':{type:"key"},
					'title':{type:""},
					'status':{type:""},
					'url':{type:""},
					'body':{type:""},
					'created':{type:""},
					'deadline':{type:""},
					'is_public':{type:""},
					'is_signable':{type:""},
					'signature_threshold':{type:""}
				}
			}
		}	
	}
}