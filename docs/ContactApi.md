# SendXRestApi.ContactApi

All URIs are relative to *https://app.sendx.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactIdentifyPost**](ContactApi.md#contactIdentifyPost) | **POST** /contact/identify | Identify a contact as user
[**contactTrackPost**](ContactApi.md#contactTrackPost) | **POST** /contact/track | Add tracking info using tags to a contact


<a name="contactIdentifyPost"></a>
# **contactIdentifyPost**
> ContactResponse contactIdentifyPost(apiKey, teamId, contactDetails)

Identify a contact as user



### Example
```javascript
var SendXRestApi = require('send_x_rest_api');

var apiInstance = new SendXRestApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var teamId = "teamId_example"; // String | 

var contactDetails = new SendXRestApi.ContactRequest(); // ContactRequest | Contact details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactIdentifyPost(apiKey, teamId, contactDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **String**|  | 
 **contactDetails** | [**ContactRequest**](ContactRequest.md)| Contact details | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactTrackPost"></a>
# **contactTrackPost**
> TrackResponse contactTrackPost(apiKey, teamId, email, trackDetails)

Add tracking info using tags to a contact



### Example
```javascript
var SendXRestApi = require('send_x_rest_api');

var apiInstance = new SendXRestApi.ContactApi();

var apiKey = "apiKey_example"; // String | 

var teamId = "teamId_example"; // String | 

var email = "email_example"; // String | 

var trackDetails = new SendXRestApi.TrackRequest(); // TrackRequest | Track Details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactTrackPost(apiKey, teamId, email, trackDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **teamId** | **String**|  | 
 **email** | **String**|  | 
 **trackDetails** | [**TrackRequest**](TrackRequest.md)| Track Details | 

### Return type

[**TrackResponse**](TrackResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

