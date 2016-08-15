# SendXApi.SendApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendEmailPost**](SendApi.md#sendEmailPost) | **POST** /send/email | Send transactional email to user


<a name="sendEmailPost"></a>
# **sendEmailPost**
> sendEmailPost(apiKey, body)

Send transactional email to user



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.SendApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.EMessage(); // EMessage | EMessage object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendEmailPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**EMessage**](EMessage.md)| EMessage object that needs to be added | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

