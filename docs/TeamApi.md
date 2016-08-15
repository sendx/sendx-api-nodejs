# SendXApi.TeamApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamGet**](TeamApi.md#teamGet) | **GET** /team | Get information about all teams
[**teamPost**](TeamApi.md#teamPost) | **POST** /team | Add a new team
[**teamTeamIdCampaignsGet**](TeamApi.md#teamTeamIdCampaignsGet) | **GET** /team/{teamId}/campaigns | Find campaigns of a team by ID
[**teamTeamIdContactsGet**](TeamApi.md#teamTeamIdContactsGet) | **GET** /team/{teamId}/contacts | Find contacts of a team by ID
[**teamTeamIdDelete**](TeamApi.md#teamTeamIdDelete) | **DELETE** /team/{teamId} | Deletes a team
[**teamTeamIdGet**](TeamApi.md#teamTeamIdGet) | **GET** /team/{teamId} | Find team by ID
[**teamTeamIdListsGet**](TeamApi.md#teamTeamIdListsGet) | **GET** /team/{teamId}/lists | Find lists of a team by ID
[**teamTeamIdPut**](TeamApi.md#teamTeamIdPut) | **PUT** /team/{teamId} | Update a team by ID
[**teamTeamIdTagsGet**](TeamApi.md#teamTeamIdTagsGet) | **GET** /team/{teamId}/tags | Find tags of a team by ID


<a name="teamGet"></a>
# **teamGet**
> InlineResponse20012 teamGet(apiKey)

Get information about all teams



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamPost"></a>
# **teamPost**
> InlineResponse20013 teamPost(apiKey, body)

Add a new team



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.TeamAddUpdate(); // TeamAddUpdate | Team object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**TeamAddUpdate**](TeamAddUpdate.md)| Team object that needs to be added | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdCampaignsGet"></a>
# **teamTeamIdCampaignsGet**
> [Campaign] teamTeamIdCampaignsGet(apiKey, teamId)

Find campaigns of a team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team whose campaigns need to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdCampaignsGet(apiKey, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team whose campaigns need to be fetched | 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdContactsGet"></a>
# **teamTeamIdContactsGet**
> [DeepTeamEmailContact] teamTeamIdContactsGet(apiKey, teamId, opts)

Find contacts of a team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team whose campaigns need to be fetched

var opts = { 
  'limit': 56, // Integer | Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10.
  'offset': 56, // Integer | Offset from where we contacts should be retrieved. Default value is 0.
  'contactType': "contactType_example", // String | Can be any of the following - all, confirmed, unconfirmed, unsubscribed, bounced, markedspam. Default contact_type is all
  'search': "search_example" // String | search term which shall be run against contact's first name, last name and email.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdContactsGet(apiKey, teamId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team whose campaigns need to be fetched | 
 **limit** | **Integer**| Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10. | [optional] 
 **offset** | **Integer**| Offset from where we contacts should be retrieved. Default value is 0. | [optional] 
 **contactType** | **String**| Can be any of the following - all, confirmed, unconfirmed, unsubscribed, bounced, markedspam. Default contact_type is all | [optional] 
 **search** | **String**| search term which shall be run against contact&#39;s first name, last name and email. | [optional] 

### Return type

[**[DeepTeamEmailContact]**](DeepTeamEmailContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdDelete"></a>
# **teamTeamIdDelete**
> teamTeamIdDelete(apiKey, teamId)

Deletes a team



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | Team ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamTeamIdDelete(apiKey, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| Team ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdGet"></a>
# **teamTeamIdGet**
> Team teamTeamIdGet(apiKey, teamId)

Find team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdGet(apiKey, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team that needs to be fetched | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdListsGet"></a>
# **teamTeamIdListsGet**
> [Array] teamTeamIdListsGet(apiKey, teamId)

Find lists of a team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team whose campaigns need to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdListsGet(apiKey, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team whose campaigns need to be fetched | 

### Return type

**[Array]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdPut"></a>
# **teamTeamIdPut**
> InlineResponse2002 teamTeamIdPut(apiKey, teamId, body)

Update a team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team that needs to be updated

var body = new SendXApi.TeamAddUpdate(); // TeamAddUpdate | Team object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdPut(apiKey, teamId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team that needs to be updated | 
 **body** | [**TeamAddUpdate**](TeamAddUpdate.md)| Team object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamTeamIdTagsGet"></a>
# **teamTeamIdTagsGet**
> [Tag] teamTeamIdTagsGet(apiKey, teamId)

Find tags of a team by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TeamApi();

var apiKey = "apiKey_example"; // String | 

var teamId = 789; // Integer | ID of team whose campaigns need to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamTeamIdTagsGet(apiKey, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **Integer**| ID of team whose campaigns need to be fetched | 

### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

