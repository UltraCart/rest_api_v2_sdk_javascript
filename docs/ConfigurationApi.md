# UltraCartRestApiV2.ConfigurationApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delayAutoOrders**](ConfigurationApi.md#delayAutoOrders) | **POST** /configuration/checkout/payments/rtg/{rtg_oid}/delayAutoOrders | Delay auto order processing for a day for this rotating transaction gateway
[**deleteRotatingTransactionGateway**](ConfigurationApi.md#deleteRotatingTransactionGateway) | **DELETE** /configuration/checkout/payments/rtg/{rtg_oid} | Delete a rotating transaction gateway
[**getPaymentsConfiguration**](ConfigurationApi.md#getPaymentsConfiguration) | **GET** /configuration/checkout/payments | Retrieve payments configuration
[**getPaymentsRotatingGateway**](ConfigurationApi.md#getPaymentsRotatingGateway) | **GET** /configuration/checkout/payments/rtg/{rtg_oid} | Retrieve a rotating transaction gateway
[**getPaymentsRotatingGatewayByCode**](ConfigurationApi.md#getPaymentsRotatingGatewayByCode) | **GET** /configuration/checkout/payments/rtg/byCode/{code} | Retrieve a rotating transaction gateway by code
[**getPaymentsRotatingTransactionGateways**](ConfigurationApi.md#getPaymentsRotatingTransactionGateways) | **GET** /configuration/checkout/payments/rtg | Retrieve a list of rotating transaction gateways
[**getPaymentsRtgSummaries**](ConfigurationApi.md#getPaymentsRtgSummaries) | **GET** /configuration/checkout/payments/rtg/summaries | Retrieve a summary of rotating transaction gateways
[**getPaymentsTransactionGateways**](ConfigurationApi.md#getPaymentsTransactionGateways) | **GET** /configuration/checkout/payments/tg | Retrieve a list of transaction gateways
[**insertRotatingTransactionGateway**](ConfigurationApi.md#insertRotatingTransactionGateway) | **POST** /configuration/checkout/payments/rtg/ | Insert a rotating transaction gateway
[**migrateToRotatingTransactionGateway**](ConfigurationApi.md#migrateToRotatingTransactionGateway) | **POST** /configuration/checkout/payments/tg/migrateToRtgWithCodeOf/{code} | Migrate a normal transaction gateway to a rotating transaction gateway
[**stripeConnect**](ConfigurationApi.md#stripeConnect) | **POST** /configuration/checkout/payments/rtg/{rtg_oid}/stripeConnect | Begin the processing of connecting with Stripe
[**updatePaymentsConfiguration**](ConfigurationApi.md#updatePaymentsConfiguration) | **PUT** /configuration/checkout/payments | Updates payments configuration
[**updatePaymentsTransactionGateway**](ConfigurationApi.md#updatePaymentsTransactionGateway) | **PUT** /configuration/checkout/payments/tg | Updates payments transaction gateway
[**updateRotatingTransactionGateway**](ConfigurationApi.md#updateRotatingTransactionGateway) | **PUT** /configuration/checkout/payments/rtg/{rtg_oid} | Update a rotating transaction gateway
[**wepayEnroll**](ConfigurationApi.md#wepayEnroll) | **PUT** /configuration/checkout/wepayEnroll | Enroll with WePay


<a name="delayAutoOrders"></a>
# **delayAutoOrders**
> DelayAutoOrdersResponse delayAutoOrders(rtg_oid)

Delay auto order processing for a day for this rotating transaction gateway

Delay auto order processing for a day for this rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rtg_oid = 56; // Number | The rtg_oid to delay.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.delayAutoOrders(rtg_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rtg_oid** | **Number**| The rtg_oid to delay. | 

### Return type

[**DelayAutoOrdersResponse**](DelayAutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="deleteRotatingTransactionGateway"></a>
# **deleteRotatingTransactionGateway**
> BaseResponse deleteRotatingTransactionGateway(rtg_oid)

Delete a rotating transaction gateway

Delete a rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rtg_oid = 56; // Number | The rtg_oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRotatingTransactionGateway(rtg_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rtg_oid** | **Number**| The rtg_oid to delete. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="getPaymentsConfiguration"></a>
# **getPaymentsConfiguration**
> PaymentsConfigurationResponse getPaymentsConfiguration()

Retrieve payments configuration

Retrieves payments configuration for this account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentsConfigurationResponse**](PaymentsConfigurationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentsRotatingGateway"></a>
# **getPaymentsRotatingGateway**
> RotatingTransactionGatewayResponse getPaymentsRotatingGateway(rtg_oid)

Retrieve a rotating transaction gateway

Retrieve a rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rtg_oid = 56; // Number | The rtg_oid for the desired record.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsRotatingGateway(rtg_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rtg_oid** | **Number**| The rtg_oid for the desired record. | 

### Return type

[**RotatingTransactionGatewayResponse**](RotatingTransactionGatewayResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentsRotatingGatewayByCode"></a>
# **getPaymentsRotatingGatewayByCode**
> RotatingTransactionGatewayResponse getPaymentsRotatingGatewayByCode(code)

Retrieve a rotating transaction gateway by code

Retrieve a rotating transaction gateway by code 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var code = "code_example"; // String | The code for the desired rotating transaction gateway.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsRotatingGatewayByCode(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| The code for the desired rotating transaction gateway. | 

### Return type

[**RotatingTransactionGatewayResponse**](RotatingTransactionGatewayResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentsRotatingTransactionGateways"></a>
# **getPaymentsRotatingTransactionGateways**
> RotatingTransactionGatewaysResponse getPaymentsRotatingTransactionGateways()

Retrieve a list of rotating transaction gateways

Retrieve a list of rotating transaction gateways 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsRotatingTransactionGateways(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RotatingTransactionGatewaysResponse**](RotatingTransactionGatewaysResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentsRtgSummaries"></a>
# **getPaymentsRtgSummaries**
> RtgSummaryResponse getPaymentsRtgSummaries()

Retrieve a summary of rotating transaction gateways

Retrieve a summary of rotating transaction gateways 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsRtgSummaries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RtgSummaryResponse**](RtgSummaryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentsTransactionGateways"></a>
# **getPaymentsTransactionGateways**
> TransactionGatewaysResponse getPaymentsTransactionGateways()

Retrieve a list of transaction gateways

Retrieve a list of transaction gateways 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentsTransactionGateways(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TransactionGatewaysResponse**](TransactionGatewaysResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insertRotatingTransactionGateway"></a>
# **insertRotatingTransactionGateway**
> RotatingTransactionGatewayResponse insertRotatingTransactionGateway(rotating_transaction_gateway)

Insert a rotating transaction gateway

Insert a rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rotating_transaction_gateway = new UltraCartRestApiV2.RotatingTransactionGateway(); // RotatingTransactionGateway | Rotating transaction gateway


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.insertRotatingTransactionGateway(rotating_transaction_gateway, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rotating_transaction_gateway** | [**RotatingTransactionGateway**](RotatingTransactionGateway.md)| Rotating transaction gateway | 

### Return type

[**RotatingTransactionGatewayResponse**](RotatingTransactionGatewayResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="migrateToRotatingTransactionGateway"></a>
# **migrateToRotatingTransactionGateway**
> RotatingTransactionGatewayResponse migrateToRotatingTransactionGateway(code)

Migrate a normal transaction gateway to a rotating transaction gateway

Migrate a normal transaction gateway to a rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var code = "code_example"; // String | The short code for the new rotating transaction gateway


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.migrateToRotatingTransactionGateway(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| The short code for the new rotating transaction gateway | 

### Return type

[**RotatingTransactionGatewayResponse**](RotatingTransactionGatewayResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="stripeConnect"></a>
# **stripeConnect**
> StripeConnectResponse stripeConnect(rtg_oid)

Begin the processing of connecting with Stripe

Begin the processing of connecting with Stripe. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rtg_oid = 56; // Number | The rtg_oid to be connected to stripe.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stripeConnect(rtg_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rtg_oid** | **Number**| The rtg_oid to be connected to stripe. | 

### Return type

[**StripeConnectResponse**](StripeConnectResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updatePaymentsConfiguration"></a>
# **updatePaymentsConfiguration**
> PaymentsConfigurationResponse updatePaymentsConfiguration(payments_configuration)

Updates payments configuration

Updates payments configuration on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var payments_configuration = new UltraCartRestApiV2.PaymentsConfiguration(); // PaymentsConfiguration | Payments configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentsConfiguration(payments_configuration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payments_configuration** | [**PaymentsConfiguration**](PaymentsConfiguration.md)| Payments configuration | 

### Return type

[**PaymentsConfigurationResponse**](PaymentsConfigurationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updatePaymentsTransactionGateway"></a>
# **updatePaymentsTransactionGateway**
> TransactionGatewaysResponse updatePaymentsTransactionGateway(update_gateway_request)

Updates payments transaction gateway

Updates payments transaction gateway on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var update_gateway_request = new UltraCartRestApiV2.TransactionGatewaysRequest(); // TransactionGatewaysRequest | Transaction gateways


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentsTransactionGateway(update_gateway_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_gateway_request** | [**TransactionGatewaysRequest**](TransactionGatewaysRequest.md)| Transaction gateways | 

### Return type

[**TransactionGatewaysResponse**](TransactionGatewaysResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updateRotatingTransactionGateway"></a>
# **updateRotatingTransactionGateway**
> RotatingTransactionGateway updateRotatingTransactionGateway(rtg_oid, rotating_transaction_gateway)

Update a rotating transaction gateway

Update a rotating transaction gateway 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var rtg_oid = 56; // Number | The rtg_oid to update.

var rotating_transaction_gateway = new UltraCartRestApiV2.RotatingTransactionGateway(); // RotatingTransactionGateway | Rotating transaction gateway


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRotatingTransactionGateway(rtg_oid, rotating_transaction_gateway, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rtg_oid** | **Number**| The rtg_oid to update. | 
 **rotating_transaction_gateway** | [**RotatingTransactionGateway**](RotatingTransactionGateway.md)| Rotating transaction gateway | 

### Return type

[**RotatingTransactionGateway**](RotatingTransactionGateway.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="wepayEnroll"></a>
# **wepayEnroll**
> PaymentsConfigurationResponse wepayEnroll(wepay_enroll)

Enroll with WePay

Enroll with WePay on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConfigurationApi();


var wepay_enroll = new UltraCartRestApiV2.PaymentsWepayEnroll(); // PaymentsWepayEnroll | Wepay enrollment information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wepayEnroll(wepay_enroll, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wepay_enroll** | [**PaymentsWepayEnroll**](PaymentsWepayEnroll.md)| Wepay enrollment information | 

### Return type

[**PaymentsConfigurationResponse**](PaymentsConfigurationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

