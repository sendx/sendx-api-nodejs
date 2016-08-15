# SendXApi.SubscribeApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscribeEncryptedListIdPost**](SubscribeApi.md#subscribeEncryptedListIdPost) | **POST** /subscribe/{encryptedListId} | Subscribe a new user a list
[**subscribeEncryptedListIdPut**](SubscribeApi.md#subscribeEncryptedListIdPut) | **PUT** /subscribe/{encryptedListId} | Subscribe an existing user a list


<a name="subscribeEncryptedListIdPost"></a>
# **subscribeEncryptedListIdPost**
> subscribeEncryptedListIdPost(encryptedListId, body)

Subscribe a new user a list



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.SubscribeApi();

var encryptedListId = "encryptedListId_example"; // String | encrypted list Id of the list to which you want to add user

var body = new SendXApi.ContactAddUpdate(); // ContactAddUpdate | Contact object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subscribeEncryptedListIdPost(encryptedListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptedListId** | **String**| encrypted list Id of the list to which you want to add user | 
 **body** | [**ContactAddUpdate**](ContactAddUpdate.md)| Contact object that needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscribeEncryptedListIdPut"></a>
# **subscribeEncryptedListIdPut**
> subscribeEncryptedListIdPut(encryptedListId, body)

Subscribe an existing user a list



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.SubscribeApi();

var encryptedListId = "encryptedListId_example"; // String | encrypted list Id of the list to which you want to add user

var body = new SendXApi.Email(); // Email | Contact Emil needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subscribeEncryptedListIdPut(encryptedListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptedListId** | **String**| encrypted list Id of the list to which you want to add user | 
 **body** | [**Email**](Email.md)| Contact Emil needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

