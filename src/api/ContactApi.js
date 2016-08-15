/**
 * SendX API
 * SendX is built on the simple tenet that users must have open access to their data. SendX API is the first step in that direction. To cite some examples:   - subscribe / unsubscribe a contact from a list   - Schedule campaign to a segment of users   - Trigger transactional emails   - Get / PUT / POST and DELETE operations on team, campaign, list, contact, report etc. and so on.  As companies grow big, custom use cases around email marketing also crop up. SendX API ensures   that SendX platform is able to satisfy such unforeseen use cases. They may range from building     custom reporting dashboard to tagging contacts with custom attributes or triggering emails based on recommendation algorithm.  We do our best to have all our URLs be [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer). Every endpoint (URL) may support one of four different http verbs. GET requests fetch information about an object, POST requests create objects, PUT requests update objects, and finally DELETE requests will delete objects.  Also all API calls besides:   - Subscribe / unsubscribe signup form  required **api_key** to be passed as **header**   ### The Envelope Every response is contained by an envelope. That is, each response has a predictable set of keys with which you can expect to interact: ```json {     \"status\": \"200\",      \"message\": \"OK\",     \"data\"\": [        {          ...        },        .        .        .     ] } ```  #### Status  The status key is used to communicate extra information about the response to the developer. If all goes well, you'll only ever see a code key with value 200. However, sometimes things go wrong, and in that case you might see a response like: ```json {     \"status\": \"404\" } ```  #### Data  The data key is the meat of the response. It may be a list containing single object or multiple objects  #### Message  This returns back human readable message. This is specially useful to make sense in case of error scenarios. 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Contact', 'model/ContactAddUpdate', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Contact'), require('../model/ContactAddUpdate'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'));
  } else {
    // Browser globals (root is window)
    if (!root.SendXApi) {
      root.SendXApi = {};
    }
    root.SendXApi.ContactApi = factory(root.SendXApi.ApiClient, root.SendXApi.Contact, root.SendXApi.ContactAddUpdate, root.SendXApi.InlineResponse2002, root.SendXApi.InlineResponse2003, root.SendXApi.InlineResponse2004);
  }
}(this, function(ApiClient, Contact, ContactAddUpdate, InlineResponse2002, InlineResponse2003, InlineResponse2004) {
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
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactContactIdDelete operation.
     * @callback module:api/ContactApi~contactContactIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a contact
     * 
     * @param {String} apiKey 
     * @param {Integer} contactId Contact ID to delete
     * @param {module:api/ContactApi~contactContactIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactContactIdDelete = function(apiKey, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling contactContactIdDelete";
      }

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling contactContactIdDelete";
      }


      var pathParams = {
        'contactId': contactId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contact/{contactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactContactIdGet operation.
     * @callback module:api/ContactApi~contactContactIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find contact by ID
     * 
     * @param {String} apiKey 
     * @param {Integer} contactId ID of contact that needs to be fetched
     * @param {module:api/ContactApi~contactContactIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */
    this.contactContactIdGet = function(apiKey, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling contactContactIdGet";
      }

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling contactContactIdGet";
      }


      var pathParams = {
        'contactId': contactId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Contact;

      return this.apiClient.callApi(
        '/contact/{contactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactContactIdPut operation.
     * @callback module:api/ContactApi~contactContactIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a contact by ID
     * 
     * @param {String} apiKey 
     * @param {Integer} contactId ID of contact that needs to be updated
     * @param {module:model/ContactAddUpdate} body Contact object that needs to be added
     * @param {module:api/ContactApi~contactContactIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.contactContactIdPut = function(apiKey, contactId, body, callback) {
      var postBody = body;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling contactContactIdPut";
      }

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling contactContactIdPut";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling contactContactIdPut";
      }


      var pathParams = {
        'contactId': contactId
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/contact/{contactId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactGet operation.
     * @callback module:api/ContactApi~contactGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about all contacts
     * 
     * @param {String} apiKey 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10.
     * @param {Integer} opts.offset Offset from where we contacts should be retrieved. Default value is 0.
     * @param {module:api/ContactApi~contactGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.contactGet = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling contactGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/contact', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactPost operation.
     * @callback module:api/ContactApi~contactPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new contact
     * 
     * @param {String} apiKey 
     * @param {module:model/ContactAddUpdate} body Contact object that needs to be added
     * @param {module:api/ContactApi~contactPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.contactPost = function(apiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling contactPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling contactPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));