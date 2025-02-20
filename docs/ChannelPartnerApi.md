# UltraCartRestApiV2.ChannelPartnerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#cancelOrderByChannelPartnerOrderId) | **DELETE** /channel_partner/cancel/by_channel_partner_order_id/{order_id} | Cancel channel partner order by channel partner order id
[**cancelOrderByUltraCartOrderId**](ChannelPartnerApi.md#cancelOrderByUltraCartOrderId) | **DELETE** /channel_partner/cancel/by_ultracart_order_id/{order_id} | Cancel channel partner order by UltraCart order id
[**deleteChannelPartnerShipToPreference**](ChannelPartnerApi.md#deleteChannelPartnerShipToPreference) | **DELETE** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Delete a ship to preference record for the channel partner.
[**estimateShippingForChannelPartnerOrder**](ChannelPartnerApi.md#estimateShippingForChannelPartnerOrder) | **POST** /channel_partner/estimate_shipping | Estimate shipping for channel partner order
[**estimateTaxForChannelPartnerOrder**](ChannelPartnerApi.md#estimateTaxForChannelPartnerOrder) | **POST** /channel_partner/estimate_tax | Estimate tax for channel partner order
[**getChannelPartnerOrder**](ChannelPartnerApi.md#getChannelPartnerOrder) | **GET** /channel_partner/orders/{order_id} | Retrieve a channel partner order
[**getChannelPartnerOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#getChannelPartnerOrderByChannelPartnerOrderId) | **GET** /channel_partner/orders/by_channel_partner_order_id/{order_id} | Retrieve a channel partner order by the channel partner order id
[**getChannelPartnerShipToPreference**](ChannelPartnerApi.md#getChannelPartnerShipToPreference) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Retrieve the ship to preference associated with the channel partner and the specific id.
[**getChannelPartnerShipToPreferences**](ChannelPartnerApi.md#getChannelPartnerShipToPreferences) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Retrieve the ship to preferences associated with the channel partner.
[**getChannelPartners**](ChannelPartnerApi.md#getChannelPartners) | **GET** /channel_partner/channel_partners | Retrieve the channel partners configured on the account.
[**importChannelPartnerOrder**](ChannelPartnerApi.md#importChannelPartnerOrder) | **POST** /channel_partner/import | Insert channel partner order
[**insertChannelPartnerShipToPreference**](ChannelPartnerApi.md#insertChannelPartnerShipToPreference) | **POST** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Insert a ship to preference record for the channel partner.
[**refundChannelPartnerOrder**](ChannelPartnerApi.md#refundChannelPartnerOrder) | **PUT** /channel_partner/orders/{order_id}/refund | Refund a channel partner order
[**updateChannelPartnerShipToPreference**](ChannelPartnerApi.md#updateChannelPartnerShipToPreference) | **PUT** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Update a ship to preference record for the channel partner.



## cancelOrderByChannelPartnerOrderId

> ChannelPartnerCancelResponse cancelOrderByChannelPartnerOrderId(order_id)

Cancel channel partner order by channel partner order id

Cancel channel partner order by channel partner order id 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

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
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

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


## deleteChannelPartnerShipToPreference

> deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Delete a ship to preference record for the channel partner.

Delete a ship to preference record for the channel partner. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let channel_partner_oid = 56; // Number | 
let channel_partner_ship_to_preference_oid = 56; // Number | 
apiInstance.deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 

### Return type

null (empty response body)

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
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

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
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

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


## getChannelPartnerOrder

> OrderResponse getChannelPartnerOrder(order_id, opts)

Retrieve a channel partner order

Retrieves a single order using the specified order id.  Only orders belonging to this channel partner may be retrieved. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let order_id = "order_id_example"; // String | The order id to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples
};
apiInstance.getChannelPartnerOrder(order_id, opts, (error, data, response) => {
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
 **order_id** | **String**| The order id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerOrderByChannelPartnerOrderId

> OrderResponse getChannelPartnerOrderByChannelPartnerOrderId(order_id, opts)

Retrieve a channel partner order by the channel partner order id

Retrieves a single order using the channel partner order id, not the ultracart order id.  Only orders belonging to this channel partner may be retrieved. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let order_id = "order_id_example"; // String | The channel partner order id to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples
};
apiInstance.getChannelPartnerOrderByChannelPartnerOrderId(order_id, opts, (error, data, response) => {
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
 **order_id** | **String**| The channel partner order id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Retrieve the ship to preference associated with the channel partner and the specific id.

Retrieve the ship to preference associated with the channel partner and the specific id. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let channel_partner_oid = 56; // Number | 
let channel_partner_ship_to_preference_oid = 56; // Number | 
apiInstance.getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, (error, data, response) => {
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
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerShipToPreferences

> ChannelPartnerShipToPreferencesResponse getChannelPartnerShipToPreferences(channel_partner_oid)

Retrieve the ship to preferences associated with the channel partner.

Retrieve the ship to preferences associated with the channel partner. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let channel_partner_oid = 56; // Number | 
apiInstance.getChannelPartnerShipToPreferences(channel_partner_oid, (error, data, response) => {
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
 **channel_partner_oid** | **Number**|  | 

### Return type

[**ChannelPartnerShipToPreferencesResponse**](ChannelPartnerShipToPreferencesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartners

> ChannelPartnersResponse getChannelPartners()

Retrieve the channel partners configured on the account.

Retrieve the channel partners configured on the account. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getChannelPartners((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ChannelPartnersResponse**](ChannelPartnersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importChannelPartnerOrder

> ChannelPartnerImportResponse importChannelPartnerOrder(channel_partner_order)

Insert channel partner order

Insert order from a channel partner. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

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


## insertChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference)

Insert a ship to preference record for the channel partner.

Insert a ship to preference record for the channel partner. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let channel_partner_oid = 56; // Number | 
let ship_to_preference = new UltraCartRestApiV2.ChannelPartnerShipToPreference(); // ChannelPartnerShipToPreference | Ship to preference to create
apiInstance.insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference, (error, data, response) => {
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
 **channel_partner_oid** | **Number**|  | 
 **ship_to_preference** | [**ChannelPartnerShipToPreference**](ChannelPartnerShipToPreference.md)| Ship to preference to create | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refundChannelPartnerOrder

> OrderResponse refundChannelPartnerOrder(order_id, order, opts)

Refund a channel partner order

Perform a refund operation on a channel partner order and then update the order if successful.  All of the object properties ending in _refunded should be the TOTAL amount that should end up being refunded.  UltraCart will calculate the actual amount to refund based upon the prior refunds. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let order_id = "order_id_example"; // String | The order id to refund.
let order = new UltraCartRestApiV2.Order(); // Order | Order to refund
let opts = {
  'reject_after_refund': false, // Boolean | Reject order after refund
  'skip_customer_notification': false, // Boolean | Skip customer email notification
  'auto_order_cancel': false, // Boolean | Cancel associated auto orders
  'manual_refund': false, // Boolean | Consider a manual refund done externally
  'reverse_affiliate_transactions': true, // Boolean | Reverse affiliate transactions
  'issue_store_credit': false, // Boolean | Issue a store credit instead of refunding the original payment method, loyalty must be configured on merchant account
  'auto_order_cancel_reason': "auto_order_cancel_reason_example", // String | Reason for auto orders cancellation
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See OrderApi.refundOrder documentation for examples
};
apiInstance.refundChannelPartnerOrder(order_id, order, opts, (error, data, response) => {
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
 **order_id** | **String**| The order id to refund. | 
 **order** | [**Order**](Order.md)| Order to refund | 
 **reject_after_refund** | **Boolean**| Reject order after refund | [optional] [default to false]
 **skip_customer_notification** | **Boolean**| Skip customer email notification | [optional] [default to false]
 **auto_order_cancel** | **Boolean**| Cancel associated auto orders | [optional] [default to false]
 **manual_refund** | **Boolean**| Consider a manual refund done externally | [optional] [default to false]
 **reverse_affiliate_transactions** | **Boolean**| Reverse affiliate transactions | [optional] [default to true]
 **issue_store_credit** | **Boolean**| Issue a store credit instead of refunding the original payment method, loyalty must be configured on merchant account | [optional] [default to false]
 **auto_order_cancel_reason** | **String**| Reason for auto orders cancellation | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.refundOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference)

Update a ship to preference record for the channel partner.

Update a ship to preference record for the channel partner. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ChannelPartnerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let channel_partner_oid = 56; // Number | 
let channel_partner_ship_to_preference_oid = 56; // Number | 
let ship_to_preference = new UltraCartRestApiV2.ChannelPartnerShipToPreference(); // ChannelPartnerShipToPreference | Ship to preference to create
apiInstance.updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference, (error, data, response) => {
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
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 
 **ship_to_preference** | [**ChannelPartnerShipToPreference**](ChannelPartnerShipToPreference.md)| Ship to preference to create | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

