# SendXApi.LinkApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkGet**](LinkApi.md#linkGet) | **GET** /link | Get information about all links
[**linkLinkIdDelete**](LinkApi.md#linkLinkIdDelete) | **DELETE** /link/{linkId} | Deletes a link
[**linkLinkIdGet**](LinkApi.md#linkLinkIdGet) | **GET** /link/{linkId} | Find link by ID
[**linkLinkIdPut**](LinkApi.md#linkLinkIdPut) | **PUT** /link/{linkId} | Update a link by ID
[**linkPost**](LinkApi.md#linkPost) | **POST** /link | Add a new link


<a name="linkGet"></a>
# **linkGet**
> InlineResponse2005 linkGet(apiKey)

Get information about all links



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.LinkApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.linkGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="linkLinkIdDelete"></a>
# **linkLinkIdDelete**
> linkLinkIdDelete(apiKey, linkId)

Deletes a link



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.LinkApi();

var apiKey = "apiKey_example"; // String | 

var linkId = 789; // Integer | Link ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.linkLinkIdDelete(apiKey, linkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **linkId** | **Integer**| Link ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="linkLinkIdGet"></a>
# **linkLinkIdGet**
> Link linkLinkIdGet(apiKey, linkId)

Find link by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.LinkApi();

var apiKey = "apiKey_example"; // String | 

var linkId = 789; // Integer | ID of link that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.linkLinkIdGet(apiKey, linkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **linkId** | **Integer**| ID of link that needs to be fetched | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="linkLinkIdPut"></a>
# **linkLinkIdPut**
> InlineResponse2002 linkLinkIdPut(apiKey, linkId, body)

Update a link by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.LinkApi();

var apiKey = "apiKey_example"; // String | 

var linkId = 789; // Integer | ID of link that needs to be updated

var body = new SendXApi.LinkAddUpdate(); // LinkAddUpdate | Link object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.linkLinkIdPut(apiKey, linkId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **linkId** | **Integer**| ID of link that needs to be updated | 
 **body** | [**LinkAddUpdate**](LinkAddUpdate.md)| Link object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="linkPost"></a>
# **linkPost**
> InlineResponse2006 linkPost(apiKey, body)

Add a new link



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.LinkApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.LinkAddUpdate(); // LinkAddUpdate | Link object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.linkPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**LinkAddUpdate**](LinkAddUpdate.md)| Link object that needs to be added | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

