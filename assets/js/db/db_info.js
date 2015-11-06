var dbs = {

	geo_wtp:{
		tables:{
			wtp_data_issues:{
				route:"/geo_wtp_data_issues_query",
				fields:{
					'id':{},
					'name':{}
				}
			},
			wtp_data_petition_issues:{
				route:"/geo_wtp_data_petition_issues_query",
				fields:{
					'petition_id':{},
					'issue_id':{}

				}
			},
			wtp_data_petition_responses:{
				route:"/geo_wtp_data_petition_responses_query",
				fields:{
					'petition_id':{},
					'response_id':{},
					'association_time':{}
				}
			},
			wtp_data_petitions:{
				route:"/geo_wtp_data_petitions_query",
				fields:{
					'serial':{},
					'id':{},
					'type':{},
					'title':{},
					'body':{},
					'signature_threshold':{},
					'signature_count':{},
					'url':{},
					'deadline':{},
					'created':{}
				}
			},
			wtp_data_responses:{
				route:"/geo_wtp_data_responses_query",
				fields:{
					'id':{},
					'url':{}
				}
			},
			wtp_data_signatures:{
				route:"/geo_wtp_data_signatures_query",
				fields:{
					'id':{},
					'petition_id':{},
					'type':{},
					'name':{},
					'zip':{},
					'created':{}
				}
			}
		}
	},

	twitter_data:{
		tables:{
			statuses:{
				route:"/twitter_data_statuses_query",
				fields:{
					'id':{},
					'original_status_id':{},
					'created_at':{},
					'text':{},
					'longitude':{},
					'favorite_count':{},
					'retweet_count':{},
					'user_id':{},
					'user_followers_count':{},
					'user_friends_count':{},
					'user_location':{},
					'user_screen_name':{}
				}
			},
			url:{
				route:"/twitter_data_urls_query",
				fields:{
					'id':{},
					'status_id':{},
					'url':{}
				}
			}
		}
	},

	wtp:{
		tables:{
			issue:{
				route:"/wtp_issue_query",
				fields:{
					'id':{},
					'name':{}
				}
			},
		petition:{
			route:"/wtp_petition_query",
			fields:{
				'id':{},
				'title':{},
				'status':{},
				'url':{},
				'body':{},
				'created':{},
				'deadline':{},
				'is_public':{},
				'is_signable':{},
				'signature_threshold':{}
			}
		},
		petition_issue:{
			route:"/wtp_petition_issue_query",
			fields:{
				'id':{},
				'petition_id':{},
				'issue_id':{}
			}
		},
		petition_response:{
			route:"/wtp_petition_response_query",
			fields:{
				'id':{},
				'petition_id':{},
				'response_id':{}
			}
		},
		response:{
			route:"/wtp_response_query",
			fields:{
				'id':{},
				'responded':{},
				'url':{}
			}
		},
		signature:{
			route:"wtp_signature_query",
			fields:{
				'id':{},
				'petition_id':{},
				'created':{},
				'name':{},
				'city':{},
				'state':{},
				'zip':{}
			}
		},
		signature_counts:{
			route:"/wtp_signature_counts_query",
			fields:{
				'id':{},
				'petition_id':{},
				'signature_count':{}
			}
		},
		signature_tmp:{
			route:"/wtp_signature_tmp_query",
			fields:{
				'id':{},
				'petition_id':{},
				'created':{},
				'name':{},
				'city':{},
				'state':{},
				'zip':{}
			}
		},
		temp:{
			route:"/wtp_temp_query",
			fields:{
				'id':{},
				'title':{},
				'status':{},
				'url':{},
				'body':{},
				'created':{},
				'deadline':{},
				'is_public':{},
				'is_signable':{},
				'signature_threshold':{}
			}
		}
	}	
}
}