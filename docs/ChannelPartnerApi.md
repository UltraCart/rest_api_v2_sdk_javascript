# UltraCartRestApiV2.ChannelPartnerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#cancelOrderByChannelPartnerOrderId) | **DELETE** /channel_partner/cancel/by_channel_partner_order_id/{order_id} | Cancel channel partner order by channel partner order id
[**cancelOrderByUltraCartOrderId**](ChannelPartnerApi.md#cancelOrderByUltraCartOrderId) | **DELETE** /channel_partner/cancel/by_ultracart_order_id/{order_id} | Cancel channel partner order by UltraCart order id
[**deleteChannelPartnerShipToPreference**](ChannelPartnerApi.md#deleteChannelPartnerShipToPreference) | **DELETE** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Delete a ship to preference record for the channel partner.
[**estimateShippingForChannelPartnerOrder**](ChannelPartnerApi.md#estimateShippingForChannelPartnerOrder) | **POST** /channel_partner/estimate_shipping | Estimate shipping for channel partner order
[**estimateTaxForChannelPartnerOrder**](ChannelPartnerApi.md#estimateTaxForChannelPartnerOrder) | **POST** /channel_partner/estimate_tax | Estimate tax for channel partner order
[**getChannelPartnerShipToPreference**](ChannelPartnerApi.md#getChannelPartnerShipToPreference) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Retrieve the ship to preference associated with the channel partner and the specific id.
[**getChannelPartnerShipToPreferences**](ChannelPartnerApi.md#getChannelPartnerShipToPreferences) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Retrieve the ship to preferences associated with the channel partner.
[**getChannelPartners**](ChannelPartnerApi.md#getChannelPartners) | **GET** /channel_partner/channel_partners | Retrieve the channel partners configured on the account.
[**importChannelPartnerOrder**](ChannelPartnerApi.md#importChannelPartnerOrder) | **POST** /channel_partner/import | Insert channel partner order
[**insertChannelPartnerShipToPreference**](ChannelPartnerApi.md#insertChannelPartnerShipToPreference) | **POST** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Insert a ship to preference record for the channel partner.
[**updateChannelPartnerShipToPreference**](ChannelPartnerApi.md#updateChannelPartnerShipToPreference) | **PUT** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Update a ship to preference record for the channel partner.


<a name="cancelOrderByChannelPartnerOrderId"></a>
# **cancelOrderByChannelPartnerOrderId**
> ChannelPartnerCancelResponse cancelOrderByChannelPartnerOrderId(order_id)

Cancel channel partner order by channel partner order id

Cancel channel partner order by channel partner order id 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var order_id = "order_id_example"; // String | The channel partner order id to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrderByChannelPartnerOrderId(order_id, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelOrderByUltraCartOrderId"></a>
# **cancelOrderByUltraCartOrderId**
> ChannelPartnerCancelResponse cancelOrderByUltraCartOrderId(order_id)

Cancel channel partner order by UltraCart order id

Cancel channel partner order by UltraCart order id 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var order_id = "order_id_example"; // String | The UltraCart order id to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOrderByUltraCartOrderId(order_id, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChannelPartnerShipToPreference"></a>
# **deleteChannelPartnerShipToPreference**
> deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Delete a ship to preference record for the channel partner.

Delete a ship to preference record for the channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_oid = 56; // Number | 

var channel_partner_ship_to_preference_oid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estimateShippingForChannelPartnerOrder"></a>
# **estimateShippingForChannelPartnerOrder**
> ChannelPartnerEstimateShippingResponse estimateShippingForChannelPartnerOrder(channel_partner_order)

Estimate shipping for channel partner order

Estimate shipping for order from a channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order needing shipping estimate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.estimateShippingForChannelPartnerOrder(channel_partner_order, callback);
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

<a name="estimateTaxForChannelPartnerOrder"></a>
# **estimateTaxForChannelPartnerOrder**
> ChannelPartnerEstimateTaxResponse estimateTaxForChannelPartnerOrder(channel_partner_order)

Estimate tax for channel partner order

Estimate tax for order from a channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order needing tax estimate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.estimateTaxForChannelPartnerOrder(channel_partner_order, callback);
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

<a name="getChannelPartnerShipToPreference"></a>
# **getChannelPartnerShipToPreference**
> ChannelPartnerShipToPreferenceResponse getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Retrieve the ship to preference associated with the channel partner and the specific id.

Retrieve the ship to preference associated with the channel partner and the specific id. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_oid = 56; // Number | 

var channel_partner_ship_to_preference_oid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelPartnerShipToPreferences"></a>
# **getChannelPartnerShipToPreferences**
> ChannelPartnerShipToPreferencesResponse getChannelPartnerShipToPreferences(channel_partner_oid)

Retrieve the ship to preferences associated with the channel partner.

Retrieve the ship to preferences associated with the channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_oid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelPartnerShipToPreferences(channel_partner_oid, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChannelPartners"></a>
# **getChannelPartners**
> ChannelPartnersResponse getChannelPartners()

Retrieve the channel partners configured on the account.

Retrieve the channel partners configured on the account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChannelPartners(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ChannelPartnersResponse**](ChannelPartnersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importChannelPartnerOrder"></a>
# **importChannelPartnerOrder**
> ChannelPartnerImportResponse importChannelPartnerOrder(channel_partner_order)

Insert channel partner order

Insert order from a channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_order = new UltraCartRestApiV2.ChannelPartnerOrder(); // ChannelPartnerOrder | Order to insert


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importChannelPartnerOrder(channel_partner_order, callback);
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

<a name="insertChannelPartnerShipToPreference"></a>
# **insertChannelPartnerShipToPreference**
> ChannelPartnerShipToPreferenceResponse insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference)

Insert a ship to preference record for the channel partner.

Insert a ship to preference record for the channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_oid = 56; // Number | 

var ship_to_preference = new UltraCartRestApiV2.ChannelPartnerShipToPreference(); // ChannelPartnerShipToPreference | Ship to preference to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference, callback);
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

<a name="updateChannelPartnerShipToPreference"></a>
# **updateChannelPartnerShipToPreference**
> ChannelPartnerShipToPreferenceResponse updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference)

Update a ship to preference record for the channel partner.

Update a ship to preference record for the channel partner. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChannelPartnerApi();


var channel_partner_oid = 56; // Number | 

var channel_partner_ship_to_preference_oid = 56; // Number | 

var ship_to_preference = new UltraCartRestApiV2.ChannelPartnerShipToPreference(); // ChannelPartnerShipToPreference | Ship to preference to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference, callback);
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

