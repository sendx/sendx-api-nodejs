# SendXApi.ContactApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactContactIdDelete**](ContactApi.md#contactContactIdDelete) | **DELETE** /contact/{contactId} | Deletes a contact
[**contactContactIdGet**](ContactApi.md#contactContactIdGet) | **GET** /contact/{contactId} | Find contact by ID
[**contactContactIdPut**](ContactApi.md#contactContactIdPut) | **PUT** /contact/{contactId} | Update a contact by ID
[**contactGet**](ContactApi.md#contactGet) | **GET** /contact | Get information about all contacts
[**contactPost**](ContactApi.md#contactPost) | **POST** /contact | Add a new contact


<a name="contactContactIdDelete"></a>
# **contactContactIdDelete**
> contactContactIdDelete(apiKey, contactId)

Deletes a contact



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var contactId = 789; // Integer | Contact ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactContactIdDelete(apiKey, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **contactId** | **Integer**| Contact ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactContactIdGet"></a>
# **contactContactIdGet**
> Contact contactContactIdGet(apiKey, contactId)

Find contact by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var contactId = 789; // Integer | ID of contact that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactContactIdGet(apiKey, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **contactId** | **Integer**| ID of contact that needs to be fetched | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactContactIdPut"></a>
# **contactContactIdPut**
> InlineResponse2002 contactContactIdPut(apiKey, contactId, body)

Update a contact by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var contactId = 789; // Integer | ID of contact that needs to be updated

var body = new SendXApi.ContactAddUpdate(); // ContactAddUpdate | Contact object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactContactIdPut(apiKey, contactId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **contactId** | **Integer**| ID of contact that needs to be updated | 
 **body** | [**ContactAddUpdate**](ContactAddUpdate.md)| Contact object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactGet"></a>
# **contactGet**
> InlineResponse2003 contactGet(apiKey, opts)

Get information about all contacts



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var opts = { 
  'limit': 56, // Integer | Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10.
  'offset': 56 // Integer | Offset from where we contacts should be retrieved. Default value is 0.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactGet(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **limit** | **Integer**| Maximum number of contacts to be returned. Note that limit maximum value is 100 and default value is 10. | [optional] 
 **offset** | **Integer**| Offset from where we contacts should be retrieved. Default value is 0. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactPost"></a>
# **contactPost**
> InlineResponse2004 contactPost(apiKey, body)

Add a new contact



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.ContactAddUpdate(); // ContactAddUpdate | Contact object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**ContactAddUpdate**](ContactAddUpdate.md)| Contact object that needs to be added | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

