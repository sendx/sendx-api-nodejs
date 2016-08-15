# SendXApi.UnsubscribeApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**unsubscribeEncryptedListIdPost**](UnsubscribeApi.md#unsubscribeEncryptedListIdPost) | **POST** /unsubscribe/{encryptedListId} | Unsubscribe a user from list based on email id


<a name="unsubscribeEncryptedListIdPost"></a>
# **unsubscribeEncryptedListIdPost**
> unsubscribeEncryptedListIdPost(encryptedListId, body)

Unsubscribe a user from list based on email id



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.UnsubscribeApi();

var encryptedListId = "encryptedListId_example"; // String | encrypted list Id of the list to which you want to add user

var body = new SendXApi.Email(); // Email | Email object of the user that needs to be unsubscribed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unsubscribeEncryptedListIdPost(encryptedListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptedListId** | **String**| encrypted list Id of the list to which you want to add user | 
 **body** | [**Email**](Email.md)| Email object of the user that needs to be unsubscribed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

