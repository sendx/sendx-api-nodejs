# SendXApi.ListApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listGet**](ListApi.md#listGet) | **GET** /list | Get information about all lists
[**listListIdContactsGet**](ListApi.md#listListIdContactsGet) | **GET** /list/{listId}/contacts | Find contacts belonging to a list
[**listListIdDelete**](ListApi.md#listListIdDelete) | **DELETE** /list/{listId} | Deletes a list
[**listListIdGet**](ListApi.md#listListIdGet) | **GET** /list/{listId} | Find list by ID
[**listListIdPut**](ListApi.md#listListIdPut) | **PUT** /list/{listId} | Update a list by ID
[**listPost**](ListApi.md#listPost) | **POST** /list | Add a new list


<a name="listGet"></a>
# **listGet**
> InlineResponse2007 listGet(apiKey)

Get information about all lists



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listListIdContactsGet"></a>
# **listListIdContactsGet**
> [DeepListEmailContact] listListIdContactsGet(apiKey, listId, opts)

Find contacts belonging to a list



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 

var listId = 789; // Integer | ID of list that needs to be fetched

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
apiInstance.listListIdContactsGet(apiKey, listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **listId** | **Integer**| ID of list that needs to be fetched | 
 **limit** | **Integer**| Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10. | [optional] 
 **offset** | **Integer**| Offset from where we contacts should be retrieved. Default value is 0. | [optional] 
 **contactType** | **String**| Can be any of the following - all, confirmed, unconfirmed, unsubscribed, bounced, markedspam. Default contact_type is all | [optional] 
 **search** | **String**| search term which shall be run against contact&#39;s first name, last name and email. | [optional] 

### Return type

[**[DeepListEmailContact]**](DeepListEmailContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listListIdDelete"></a>
# **listListIdDelete**
> listListIdDelete(apiKey, listId)

Deletes a list



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 

var listId = 789; // Integer | List ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.listListIdDelete(apiKey, listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **listId** | **Integer**| List ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listListIdGet"></a>
# **listListIdGet**
> Array listListIdGet(apiKey, listId)

Find list by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 

var listId = 789; // Integer | ID of list that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listListIdGet(apiKey, listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **listId** | **Integer**| ID of list that needs to be fetched | 

### Return type

**Array**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listListIdPut"></a>
# **listListIdPut**
> InlineResponse2002 listListIdPut(apiKey, listId, body)

Update a list by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 

var listId = 789; // Integer | ID of list that needs to be updated

var body = new SendXApi.ListAddUpdate(); // ListAddUpdate | List object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listListIdPut(apiKey, listId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **listId** | **Integer**| ID of list that needs to be updated | 
 **body** | [**ListAddUpdate**](ListAddUpdate.md)| List object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPost"></a>
# **listPost**
> InlineResponse2008 listPost(apiKey, body)

Add a new list



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ListApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.ListAddUpdate(); // ListAddUpdate | List object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**ListAddUpdate**](ListAddUpdate.md)| List object that needs to be added | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

