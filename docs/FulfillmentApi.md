# UltraCartRestApiV2.FulfillmentApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeOrders**](FulfillmentApi.md#acknowledgeOrders) | **PUT** /fulfillment/distribution_centers/{distribution_center_code}/acknowledgements | Acknowledge receipt of orders.
[**getDistributionCenterOrders**](FulfillmentApi.md#getDistributionCenterOrders) | **GET** /fulfillment/distribution_centers/{distribution_center_code}/orders | Retrieve orders queued up for this distribution center.
[**getDistributionCenters**](FulfillmentApi.md#getDistributionCenters) | **GET** /fulfillment/distribution_centers | Retrieve distribution centers
[**shipOrders**](FulfillmentApi.md#shipOrders) | **POST** /fulfillment/distribution_centers/{distribution_center_code}/shipments | Mark orders as shipped
[**updateInventory**](FulfillmentApi.md#updateInventory) | **POST** /fulfillment/distribution_centers/{distribution_center_code}/inventory | Update inventory


<a name="acknowledgeOrders"></a>
# **acknowledgeOrders**
> acknowledgeOrders(distributionCenterCode, orderIds)

Acknowledge receipt of orders.

Acknowledge receipt of orders so that they are removed from the fulfillment queue.  This method must be called after receiving and order (via webhook) or retrieving (via retrieve orders method). 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.FulfillmentApi();

var distributionCenterCode = "distributionCenterCode_example"; // String | Distribution center code

var orderIds = [new UltraCartRestApiV2.[String]()]; // [String] | Orders to acknowledge receipt of (limit 100)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.acknowledgeOrders(distributionCenterCode, orderIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributionCenterCode** | **String**| Distribution center code | 
 **orderIds** | **[String]**| Orders to acknowledge receipt of (limit 100) | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDistributionCenterOrders"></a>
# **getDistributionCenterOrders**
> OrdersResponse getDistributionCenterOrders(distributionCenterCode)

Retrieve orders queued up for this distribution center.

Retrieves up to 100 orders that are queued up in this distribution center.  You must acknowledge them before additional new orders will be returned.  The orders that are returned contain only items for this distribution center and are expanded with billing, buysafe, channel_partner, checkout, coupons, customer_profile, edi, gift, gift_certificate, internal, items, payment, shipping, summary, taxes. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.FulfillmentApi();

var distributionCenterCode = "distributionCenterCode_example"; // String | Distribution center code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistributionCenterOrders(distributionCenterCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributionCenterCode** | **String**| Distribution center code | 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDistributionCenters"></a>
# **getDistributionCenters**
> DistributionCentersResponse getDistributionCenters()

Retrieve distribution centers

Retrieves the distribution centers that this user has access to. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.FulfillmentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistributionCenters(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DistributionCentersResponse**](DistributionCentersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shipOrders"></a>
# **shipOrders**
> shipOrders(distributionCenterCode, shipments)

Mark orders as shipped

Store the tracking information and mark the order shipped for this distribution center. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.FulfillmentApi();

var distributionCenterCode = "distributionCenterCode_example"; // String | Distribution center code

var shipments = [new UltraCartRestApiV2.FulfillmentShipment()]; // [FulfillmentShipment] | Orders to mark shipped


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.shipOrders(distributionCenterCode, shipments, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributionCenterCode** | **String**| Distribution center code | 
 **shipments** | [**[FulfillmentShipment]**](FulfillmentShipment.md)| Orders to mark shipped | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventory"></a>
# **updateInventory**
> updateInventory(distributionCenterCode, inventories)

Update inventory

Update the inventory for items associated with this distribution center 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.FulfillmentApi();

var distributionCenterCode = "distributionCenterCode_example"; // String | Distribution center code

var inventories = [new UltraCartRestApiV2.FulfillmentInventory()]; // [FulfillmentInventory] | Inventory updates (limit 500)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventory(distributionCenterCode, inventories, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distributionCenterCode** | **String**| Distribution center code | 
 **inventories** | [**[FulfillmentInventory]**](FulfillmentInventory.md)| Inventory updates (limit 500) | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

