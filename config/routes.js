/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'index'
  },

  /***************************************************************************
  *
  * geo_wtp routes
  *
  ***************************************************************************/

  '/geo_wtp_data_issues_query' : 'Geo_Wtp_Controller.Wtp_data_issues',

  '/geo_wtp_data_petition_issues_query' : 'Geo_Wtp_Controller.Wtp_data_petition_issues',

  '/geo_wtp_data_petition_responses_query' : 'Geo_Wtp_Controller.Wtp_data_petition_responses',

  '/geo_wtp_data_petitions_query' : 'Geo_Wtp_Controller.Wtp_data_petitions',

  '/geo_wtp_data_responses_query' : 'Geo_Wtp_Controller.Wtp_data_responses',

  '/geo_wtp_data_signatures_query' : 'Geo_Wtp_Controller.Wtp_data_signatures',



  /***************************************************************************
  *
  * twitter_data routes
  *
  ***************************************************************************/ 
  
  '/twitter_data_statuses_query' : 'Twitter_Data_Controller.Statuses',

  '/twitter_data_urls_query' : 'Twitter_Data_Controller.Urls',



  /***************************************************************************
  *
  * wtp routes
  *
  ***************************************************************************/


  '/wtp_issues_query' : 'Wtp_Controller.Wtp_issues',


  '/wtp_petition_issues_query' : 'Wtp_Controller.Wtp_petition_issues',

  '/wtp_petition_responses_query' : 'Wtp_Controller.Wtp_petition_responses',

  '/wtp_petitions_query' : 'Wtp_Controller.Wtp_petitions',

  '/wtp_responses_query' : 'Wtp_Controller.Wtp_responses',

  '/wtp_signatures_query' : 'Wtp_Controller.Wtp_signatures',

  '/wtp_signature_counts_query' : 'Wtp_Controller.Wtp_signature_counts',

  '/wtp_signature_tmp_query' : 'Wtp_Controller.Wtp_signature_tmp',
  
  '/wtp_temp_query' : 'Wtp_Controller.Wtp_temp',


  /***************************************************************************
  *
  * local_wtp routes
  *
  ***************************************************************************/

  '/Local_wtp_data_issues_query' : 'Local_Wtp_Controller.Wtp_data_issues',

  '/Local_wtp_data_petition_issues_query' : 'Local_Wtp_Controller.Wtp_data_petition_issues',

  '/Local_wtp_data_petition_responses_query' : 'Local_Wtp_Controller.Wtp_data_petition_responses',

  '/Local_wtp_data_petitions_query' : 'Local_Wtp_Controller.Wtp_data_petitions',

  '/Local_wtp_data_responses_query' : 'Local_Wtp_Controller.Wtp_data_responses',

  '/Local_wtp_data_signatures_query' : 'Local_Wtp_Controller.Wtp_data_signatures'





  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
