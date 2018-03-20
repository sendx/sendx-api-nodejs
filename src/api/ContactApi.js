/**
 * SendX REST API
 * **NOTE:** All API calls contain 2 parameters - 'api_key' and 'team_id'. These can be inferred from your settings page 'https://app.sendx.io/setting' under the sections 'Api Key' and 'Team Id' respectively.  For checking language specific Clients: -  [Golang](https://github.com/sendx/sendx-api-go) -  [Python](https://github.com/sendx/sendx-api-python) -  [Ruby](https://github.com/sendx/sendx-api-ruby) -  [Java](https://github.com/sendx/sendx-api-java) -  [PHP](https://github.com/sendx/sendx-api-php) -  [NodeJS](https://github.com/sendx/sendx-api-nodejs)  We also have a [Javascript API](http://help.sendx.io/knowledge_base/topics/javascript-api-1) for client side integrations.  SendX REST API has two methods:    * Identify   * Track    ## Identify API Method    Identify API Method is used to attach data to a visitor. If a contact is not yet created then we will create the contact. In case contact already exists then we update it.    **Example Request:**       ```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         lastName: \"Doe\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\",           \"Age\": \"27\",           \"Experience\": \"5\"         },         tags: [\"Developer\", \"API Team\"],      }   ```         Note that tags are an array of strings. In case they don't exist previously then API will create them and associate them with the contact.      Similarly if a custom field doesn't exist then it is first created and then associated with the contact along-with the corresponding value. In case custom field exists already then we simply update the value of it for the aforementioned contact.    Custom Fields are associated with data types and which be created and edited inside the app. If a custom field is not present inside the app and an API call is made containing it, a custom field with type 'string' is created and the value set. For custom fields with data type 'number', values can be added to or subtracted from existing values. This can be done by using \"++\" or \"--\" operator before the number(e.g. \"customField_name\": \"++34\" would increase the value of existing \"customField_name\" in SendX for the contact. If it doesn't already exist, the value '34' would be inserted for it).      We don't delete any of the properties based on identify call. What this means is that if for the same contact you did two API calls like:         **API Call A**        ```json      {         email: \"john.doe@gmail.com\",         firstName: \"John\",         birthday: \"1989-03-03\",         customFields: {           \"Designation\": \"Software Engineer\"         },         tags: [\"Developer\"],      }   ```         **API Call B**       ```json      {         email: \"john.doe@gmail.com\",         customFields: {           \"Age\": \"29\"         },         tags: [\"API Team\"],      }   ```         Then the final contact will have firstName as **John**, birthday as **1989-03-03** present. Also both tags **Developer** and **API Team** shall be present along with custom fields **Designation** and **Age**.         **Properties:**      * **firstName**: type string   * **lastName**: type string   * **email**: type string     * **newEmail**: type string     * **company**: type string     * **birthday**: type string with format **YYYY-MM-DD** eg: 2016-11-21     * **customFields**: type map[string]string      * **tags**: type array of string       In case email of an already existing contact needs to be updated then specify current email under email property and updated email under newEmail property.          **Response:**       ```json      {         \"status\": \"200\",         \"message\": \"OK\",         \"data\": {           \"encryptedTeamId\": \"CLdh9Ig5GLIN1u8gTRvoja\",           \"encryptedId\": \"c9QF63nrBenCaAXe660byz\",           \"tags\": [             \"API Team\",             \"Tech\"           ],           \"firstName\": \"John\",           \"lastName\": \"Doe\",           \"email\": \"john.doe@gmail.com\",           \"company\": \"\",           \"birthday\": \"1989-03-03\",           \"customFields\": {             \"Age\": \"29\",             \"Designation\": \"Software Engineer\"           }           }        }   ```         ## Track API Method      Track API Method is used to track a contact. In the track API object you can:      * **addTags**:   * **removeTags**:      You can have automation rules based on tag addition as well as tag removal and they will get executed. For eg:      * On **user registration** tag start onboarding drip for him / her.   * **Account Upgrade** tag start add user to paid user list and start account expansion drip.    * On removal of **trial user** tag start upsell trial completed users drip.         **Example Request:**      >     \\_scq.push([\"track\", {        \"addTags\": [\"blogger\", \"female\"]     }]);           >     \\_scq.push([\"track\", {        \"addTags\": [\"paid user\"],        \"removeTags\": [\"trial user\"]     }]);           **Response:**      >      {       \"status\": \"200\",       \"message\": \"OK\",       \"data\": \"success\"      } 
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ContactRequest', 'model/ContactResponse', 'model/TrackRequest', 'model/TrackResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContactRequest'), require('../model/ContactResponse'), require('../model/TrackRequest'), require('../model/TrackResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXRestApi) {
      root.SendXRestApi = {};
    }
    root.SendXRestApi.ContactApi = factory(root.SendXRestApi.ApiClient, root.SendXRestApi.ContactRequest, root.SendXRestApi.ContactResponse, root.SendXRestApi.TrackRequest, root.SendXRestApi.TrackResponse);
  }
}(this, function(ApiClient, ContactRequest, ContactResponse, TrackRequest, TrackResponse) {
  'use strict';

  /**
   * Contact service.
   * @module api/ContactApi
   * @version v1
   */

  /**
   * Constructs a new ContactApi. 
   * @alias module:api/ContactApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactIdentifyPost operation.
     * @callback module:api/ContactApi~contactIdentifyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify a contact as user
     * 
     * @param {String} apiKey 
     * @param {String} teamId 
     * @param {module:model/ContactRequest} contactDetails Contact details
     * @param {module:api/ContactApi~contactIdentifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactResponse}
     */
    this.contactIdentifyPost = function(apiKey, teamId, contactDetails, callback) {
      var postBody = contactDetails;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling contactIdentifyPost");
      }

      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling contactIdentifyPost");
      }

      // verify the required parameter 'contactDetails' is set
      if (contactDetails === undefined || contactDetails === null) {
        throw new Error("Missing the required parameter 'contactDetails' when calling contactIdentifyPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'team_id': teamId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContactResponse;

      return this.apiClient.callApi(
        '/contact/identify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactTrackPost operation.
     * @callback module:api/ContactApi~contactTrackPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add tracking info using tags to a contact
     * 
     * @param {String} apiKey 
     * @param {String} teamId 
     * @param {String} email 
     * @param {module:model/TrackRequest} trackDetails Track Details
     * @param {module:api/ContactApi~contactTrackPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackResponse}
     */
    this.contactTrackPost = function(apiKey, teamId, email, trackDetails, callback) {
      var postBody = trackDetails;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling contactTrackPost");
      }

      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling contactTrackPost");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactTrackPost");
      }

      // verify the required parameter 'trackDetails' is set
      if (trackDetails === undefined || trackDetails === null) {
        throw new Error("Missing the required parameter 'trackDetails' when calling contactTrackPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'team_id': teamId,
        'email': email,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TrackResponse;

      return this.apiClient.callApi(
        '/contact/track', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
