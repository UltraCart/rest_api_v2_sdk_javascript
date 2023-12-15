# UltraCartRestApiV2.ChargebackApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteChargeback**](ChargebackApi.md#deleteChargeback) | **DELETE** /chargeback/chargebacks/{chargeback_dispute_oid} | Delete a chargeback
[**getChargebackDispute**](ChargebackApi.md#getChargebackDispute) | **GET** /chargeback/chargebacks/{chargeback_dispute_oid} | Retrieve a chargeback
[**getChargebackDisputes**](ChargebackApi.md#getChargebackDisputes) | **GET** /chargeback/chargebacks | Retrieve chargebacks
[**insertChargeback**](ChargebackApi.md#insertChargeback) | **POST** /chargeback/chargebacks | Insert a chargeback
[**updateChargeback**](ChargebackApi.md#updateChargeback) | **PUT** /chargeback/chargebacks/{chargeback_dispute_oid} | Update a chargeback


<a name="deleteChargeback"></a>
# **deleteChargeback**
> ChargebackDisputeResponse deleteChargeback(chargeback_dispute_oid)

Delete a chargeback

Delete a chargeback on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChargebackApi();


var chargeback_dispute_oid = 56; // Number | The chargeback_dispute_oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteChargeback(chargeback_dispute_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeback_dispute_oid** | **Number**| The chargeback_dispute_oid to delete. | 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChargebackDispute"></a>
# **getChargebackDispute**
> ChargebackDisputeResponse getChargebackDispute(chargeback_dispute_oid, opts)

Retrieve a chargeback

Retrieves a single chargeback using the specified chargeback dispute oid. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChargebackApi();


var chargeback_dispute_oid = 56; // Number | The chargeback dispute oid to retrieve.

var opts = { 
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChargebackDispute(chargeback_dispute_oid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeback_dispute_oid** | **Number**| The chargeback dispute oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChargebackDisputes"></a>
# **getChargebackDisputes**
> ChargebackDisputesResponse getChargebackDisputes(opts)

Retrieve chargebacks

Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChargebackApi();


var opts = { 
  'order_id': "order_id_example", // String | Order Id
  'case_number': "case_number_example", // String | Case number
  'status': "status_example", // String | Status
  'expiration_dts_start': "expiration_dts_start_example", // String | Expiration dts start
  'expiration_dts_end': "expiration_dts_end_example", // String | Expiration dts end
  'chargeback_dts_start': "chargeback_dts_start_example", // String | Chargeback dts start
  'chargeback_dts_end': "chargeback_dts_end_example", // String | Chargeback dts end
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_since': "_since_example", // String | Fetch chargebacks that have been created/modified since this date/time.
  '_sort': "_sort_example", // String | The sort order of the chargebacks.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChargebackDisputes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| Order Id | [optional] 
 **case_number** | **String**| Case number | [optional] 
 **status** | **String**| Status | [optional] 
 **expiration_dts_start** | **String**| Expiration dts start | [optional] 
 **expiration_dts_end** | **String**| Expiration dts end | [optional] 
 **chargeback_dts_start** | **String**| Chargeback dts start | [optional] 
 **chargeback_dts_end** | **String**| Chargeback dts end | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch chargebacks that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the chargebacks.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputesResponse**](ChargebackDisputesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insertChargeback"></a>
# **insertChargeback**
> ChargebackDisputeResponse insertChargeback(chargeback, opts)

Insert a chargeback

Insert a chargeback on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChargebackApi();


var chargeback = new UltraCartRestApiV2.ChargebackDispute(); // ChargebackDispute | Chargeback to insert

var opts = { 
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.insertChargeback(chargeback, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeback** | [**ChargebackDispute**](ChargebackDispute.md)| Chargeback to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updateChargeback"></a>
# **updateChargeback**
> ChargebackDisputeResponse updateChargeback(chargeback, chargeback_dispute_oid, opts)

Update a chargeback

Update a chargeback on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ChargebackApi();


var chargeback = new UltraCartRestApiV2.ChargebackDispute(); // ChargebackDispute | Chargeback to update

var chargeback_dispute_oid = 56; // Number | The chargeback_dispute_oid to update.

var opts = { 
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChargeback(chargeback, chargeback_dispute_oid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeback** | [**ChargebackDispute**](ChargebackDispute.md)| Chargeback to update | 
 **chargeback_dispute_oid** | **Number**| The chargeback_dispute_oid to update. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

