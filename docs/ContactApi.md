# SendXRestApi.ContactApi

All URIs are relative to *http://app.sendx.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactIdentifyPost**](ContactApi.md#contactIdentifyPost) | **POST** /contact/identify | Identify a contact as user
[**contactTrackPost**](ContactApi.md#contactTrackPost) | **POST** /contact/track | Add tracking info using tags to a contact


<a name="contactIdentifyPost"></a>
# **contactIdentifyPost**
> ContactResponse contactIdentifyPost(apiKey, teamId, body)

Identify a contact as user



### Example
```javascript
var SendXRestApi = require('send_x_rest_api');

var apiInstance = new SendXRestApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var teamId = "teamId_example"; // String | 

var body = new SendXRestApi.Contact(); // Contact | Contact details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactIdentifyPost(apiKey, teamId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **String**|  | 
 **body** | [**Contact**](Contact.md)| Contact details | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactTrackPost"></a>
# **contactTrackPost**
> TrackResponse contactTrackPost(apiKey, teamId, contactId, tag)

Add tracking info using tags to a contact



### Example
```javascript
var SendXRestApi = require('send_x_rest_api');

var apiInstance = new SendXRestApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var teamId = "teamId_example"; // String | 

var contactId = "contactId_example"; // String | 

var tag = "tag_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactTrackPost(apiKey, teamId, contactId, tag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **String**|  | 
 **contactId** | **String**|  | 
 **tag** | **String**|  | 

### Return type

[**TrackResponse**](TrackResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

