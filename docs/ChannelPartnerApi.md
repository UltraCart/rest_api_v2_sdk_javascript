# UltraCartRestApiV2.ChannelPartnerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#cancelOrderByChannelPartnerOrderId) | **DELETE** /channel_partner/cancel/by_channel_partner_order_id/{order_id} | Cancel channel partner order by channel partner order id
[**cancelOrderByUltraCartOrderId**](ChannelPartnerApi.md#cancelOrderByUltraCartOrderId) | **DELETE** /channel_partner/cancel/by_ultracart_order_id/{order_id} | Cancel channel partner order by UltraCart order id
[**estimateShippingForChannelPartnerOrder**](ChannelPartnerApi.md#estimateShippingForChannelPartnerOrder) | **POST** /channel_partner/estimate_shipping | Estimate shipping for channel partner order
[**estimateTaxForChannelPartnerOrder**](ChannelPartnerApi.md#estimateTaxForChannelPartnerOrder) | **POST** /channel_partner/estimate_tax | Estimate tax for channel partner order
[**importChannelPartnerOrder**](ChannelPartnerApi.md#importChannelPartnerOrder) | **POST** /channel_partner/import | Insert channel partner order



## cancelOrderByChannelPartnerOrderId

> ChannelPartnerCancelResponse cancelOrderByChannelPartnerOrderId(order_id)

Cancel channel partner order by channel partner order id

Cancel channel partner order by channel partner order id 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();
let order_id = "order_id_example"; // String | The channel partner order id to delete.
apiInstance.cancelOrderByChannelPartnerOrderId(order_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The channel partner order id to delete. | 

### Return type

[**ChannelPartnerCancelResponse**](ChannelPartnerCancelResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelOrderByUltraCartOrderId

> ChannelPartnerCancelResponse cancelOrderByUltraCartOrderId(order_id)

Cancel channel partner order by UltraCart order id

Cancel channel partner order by UltraCart order id 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();
let order_id = "order_id_example"; // String | The UltraCart order id to delete.
apiInstance.cancelOrderByUltraCartOrderId(order_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The UltraCart order id to delete. | 

### Return type

[**ChannelPartnerCancelResponse**](ChannelPartnerCancelResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## estimateShippingForChannelPartnerOrder

> ChannelPartnerEstimateShippingResponse estimateShippingForChannelPartnerOrder(channel_partner_order)

Estimate shipping for channel partner order

Estimate shipping for order from a channel partner. 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();
let channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order needing shipping estimate
apiInstance.estimateShippingForChannelPartnerOrder(channel_partner_order, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order needing shipping estimate | 

### Return type

[**ChannelPartnerEstimateShippingResponse**](ChannelPartnerEstimateShippingResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## estimateTaxForChannelPartnerOrder

> ChannelPartnerEstimateTaxResponse estimateTaxForChannelPartnerOrder(channel_partner_order)

Estimate tax for channel partner order

Estimate tax for order from a channel partner. 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();
let channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order needing tax estimate
apiInstance.estimateTaxForChannelPartnerOrder(channel_partner_order, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order needing tax estimate | 

### Return type

[**ChannelPartnerEstimateTaxResponse**](ChannelPartnerEstimateTaxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## importChannelPartnerOrder

> ChannelPartnerImportResponse importChannelPartnerOrder(channel_partner_order)

Insert channel partner order

Insert order from a channel partner. 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();
let channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order to insert
apiInstance.importChannelPartnerOrder(channel_partner_order, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order to insert | 

### Return type

[**ChannelPartnerImportResponse**](ChannelPartnerImportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

