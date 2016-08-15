# SendXApi.TagApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagGet**](TagApi.md#tagGet) | **GET** /tag | Get information about all tags
[**tagPost**](TagApi.md#tagPost) | **POST** /tag | Add a new tag
[**tagTagIdContactDelete**](TagApi.md#tagTagIdContactDelete) | **DELETE** /tag/{tagId}/contact | Remove a contact from a tag
[**tagTagIdContactPost**](TagApi.md#tagTagIdContactPost) | **POST** /tag/{tagId}/contact | Add a contact to a tag
[**tagTagIdContactsGet**](TagApi.md#tagTagIdContactsGet) | **GET** /tag/{tagId}/contacts | Find contacts belonging to a tag
[**tagTagIdDelete**](TagApi.md#tagTagIdDelete) | **DELETE** /tag/{tagId} | Deletes a tag
[**tagTagIdGet**](TagApi.md#tagTagIdGet) | **GET** /tag/{tagId} | Find tag by ID
[**tagTagIdPut**](TagApi.md#tagTagIdPut) | **PUT** /tag/{tagId} | Update a tag by ID


<a name="tagGet"></a>
# **tagGet**
> InlineResponse2009 tagGet(apiKey)

Get information about all tags



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagPost"></a>
# **tagPost**
> InlineResponse20010 tagPost(apiKey, body)

Add a new tag



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.TagAddUpdate(); // TagAddUpdate | Tag object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**TagAddUpdate**](TagAddUpdate.md)| Tag object that needs to be added | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagTagIdContactDelete"></a>
# **tagTagIdContactDelete**
> tagTagIdContactDelete(apiKey, tagId, body)

Remove a contact from a tag



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | ID of tag for which contact needs to be remove

var body = new SendXApi.TagContact(); // TagContact | Contact email and team id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tagTagIdContactDelete(apiKey, tagId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| ID of tag for which contact needs to be remove | 
 **body** | [**TagContact**](TagContact.md)| Contact email and team id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagTagIdContactPost"></a>
# **tagTagIdContactPost**
> InlineResponse20011 tagTagIdContactPost(apiKey, tagId, body)

Add a contact to a tag



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | ID of tag for which the contact needs to be added

var body = new SendXApi.TagContact(); // TagContact | Contact email and team id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagTagIdContactPost(apiKey, tagId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| ID of tag for which the contact needs to be added | 
 **body** | [**TagContact**](TagContact.md)| Contact email and team id | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagTagIdContactsGet"></a>
# **tagTagIdContactsGet**
> [DeepTeamEmailContact] tagTagIdContactsGet(apiKey, tagId, opts)

Find contacts belonging to a tag



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | ID of tag that needs to be fetched

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
apiInstance.tagTagIdContactsGet(apiKey, tagId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| ID of tag that needs to be fetched | 
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

<a name="tagTagIdDelete"></a>
# **tagTagIdDelete**
> tagTagIdDelete(apiKey, tagId)

Deletes a tag



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | Tag ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tagTagIdDelete(apiKey, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| Tag ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagTagIdGet"></a>
# **tagTagIdGet**
> Tag tagTagIdGet(apiKey, tagId)

Find tag by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | ID of tag that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagTagIdGet(apiKey, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| ID of tag that needs to be fetched | 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagTagIdPut"></a>
# **tagTagIdPut**
> InlineResponse2002 tagTagIdPut(apiKey, tagId, body)

Update a tag by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.TagApi();

var apiKey = "apiKey_example"; // String | 

var tagId = 789; // Integer | ID of tag that needs to be updated

var body = new SendXApi.TagAddUpdate(); // TagAddUpdate | Tag object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagTagIdPut(apiKey, tagId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **tagId** | **Integer**| ID of tag that needs to be updated | 
 **body** | [**TagAddUpdate**](TagAddUpdate.md)| Tag object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

