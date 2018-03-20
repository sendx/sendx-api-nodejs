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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendXRestApi);
  }
}(this, function(expect, SendXRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendXRestApi.TrackResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TrackResponse', function() {
    it('should create an instance of TrackResponse', function() {
      // uncomment below and update the code to test TrackResponse
      //var instane = new SendXRestApi.TrackResponse();
      //expect(instance).to.be.a(SendXRestApi.TrackResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SendXRestApi.TrackResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new SendXRestApi.TrackResponse();
      //expect(instance).to.be();
    });

  });

}));
