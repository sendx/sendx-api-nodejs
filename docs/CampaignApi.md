# SendXApi.CampaignApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignCampaignIdDelete**](CampaignApi.md#campaignCampaignIdDelete) | **DELETE** /campaign/{campaignId} | Deletes a campaign
[**campaignCampaignIdGet**](CampaignApi.md#campaignCampaignIdGet) | **GET** /campaign/{campaignId} | Find campaign by ID
[**campaignCampaignIdPut**](CampaignApi.md#campaignCampaignIdPut) | **PUT** /campaign/{campaignId} | Update a campaign by ID
[**campaignGet**](CampaignApi.md#campaignGet) | **GET** /campaign | Get information about all campaigns
[**campaignPost**](CampaignApi.md#campaignPost) | **POST** /campaign | Add a new campaign


<a name="campaignCampaignIdDelete"></a>
# **campaignCampaignIdDelete**
> campaignCampaignIdDelete(apiKey, campaignId)

Deletes a campaign



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.CampaignApi();

var apiKey = "apiKey_example"; // String | 

var campaignId = 789; // Integer | Campaign ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignCampaignIdDelete(apiKey, campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **campaignId** | **Integer**| Campaign ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignCampaignIdGet"></a>
# **campaignCampaignIdGet**
> Campaign campaignCampaignIdGet(apiKey, campaignId)

Find campaign by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.CampaignApi();

var apiKey = "apiKey_example"; // String | 

var campaignId = 789; // Integer | ID of campaign that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignCampaignIdGet(apiKey, campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **campaignId** | **Integer**| ID of campaign that needs to be fetched | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignCampaignIdPut"></a>
# **campaignCampaignIdPut**
> InlineResponse2002 campaignCampaignIdPut(apiKey, campaignId, body)

Update a campaign by ID



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.CampaignApi();

var apiKey = "apiKey_example"; // String | 

var campaignId = 789; // Integer | ID of campaign that needs to be updated

var body = new SendXApi.CampaignAddUpdate(); // CampaignAddUpdate | Campaign object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignCampaignIdPut(apiKey, campaignId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **campaignId** | **Integer**| ID of campaign that needs to be updated | 
 **body** | [**CampaignAddUpdate**](CampaignAddUpdate.md)| Campaign object that needs to be added | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignGet"></a>
# **campaignGet**
> InlineResponse200 campaignGet(apiKey)

Get information about all campaigns



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.CampaignApi();

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignGet(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignPost"></a>
# **campaignPost**
> InlineResponse2001 campaignPost(apiKey, body)

Add a new campaign



### Example
```javascript
var SendXApi = require('send_x_api');

var apiInstance = new SendXApi.CampaignApi();

var apiKey = "apiKey_example"; // String | 

var body = new SendXApi.CampaignAddUpdate(); // CampaignAddUpdate | Campaign object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignPost(apiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **body** | [**CampaignAddUpdate**](CampaignAddUpdate.md)| Campaign object that needs to be added | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

