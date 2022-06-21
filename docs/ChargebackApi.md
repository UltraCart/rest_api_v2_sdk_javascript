# UltraCartRestApiV2.ChargebackApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteChargeback**](ChargebackApi.md#deleteChargeback) | **DELETE** /chargeback/chargebacks/{chargeback_dispute_oid} | Delete a chargeback
[**getChargebackDispute**](ChargebackApi.md#getChargebackDispute) | **GET** /chargeback/chargebacks/{chargeback_dispute_oid} | Retrieve a chargeback
[**getChargebackDisputes**](ChargebackApi.md#getChargebackDisputes) | **GET** /chargeback/chargebacks | Retrieve chargebacks
[**insertChargeback**](ChargebackApi.md#insertChargeback) | **POST** /chargeback/chargebacks | Insert a chargeback
[**updateChargeback**](ChargebackApi.md#updateChargeback) | **PUT** /chargeback/chargebacks/{chargeback_dispute_oid} | Update a chargeback



## deleteChargeback

> ChargebackDisputeResponse deleteChargeback(chargeback_dispute_oid)

Delete a chargeback

Delete a chargeback on the UltraCart account. 

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

let apiInstance = new UltraCartRestApiV2.ChargebackApi();
let chargeback_dispute_oid = 56; // Number | The chargeback_dispute_oid to delete.
apiInstance.deleteChargeback(chargeback_dispute_oid, (error, data, response) => {
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
 **chargeback_dispute_oid** | **Number**| The chargeback_dispute_oid to delete. | 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChargebackDispute

> ChargebackDisputeResponse getChargebackDispute(chargeback_dispute_oid, opts)

Retrieve a chargeback

Retrieves a single chargeback using the specified chargeback dispute oid. 

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

let apiInstance = new UltraCartRestApiV2.ChargebackApi();
let chargeback_dispute_oid = 56; // Number | The chargeback dispute oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getChargebackDispute(chargeback_dispute_oid, opts, (error, data, response) => {
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
 **chargeback_dispute_oid** | **Number**| The chargeback dispute oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChargebackDisputes

> ChargebackDisputesResponse getChargebackDisputes(opts)

Retrieve chargebacks

Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

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

let apiInstance = new UltraCartRestApiV2.ChargebackApi();
let opts = {
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
apiInstance.getChargebackDisputes(opts, (error, data, response) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## insertChargeback

> ChargebackDisputeResponse insertChargeback(chargeback, opts)

Insert a chargeback

Insert a chargeback on the UltraCart account. 

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

let apiInstance = new UltraCartRestApiV2.ChargebackApi();
let chargeback = new UltraCartRestApiV2.ChargebackDispute(); // ChargebackDispute | Chargeback to insert
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.insertChargeback(chargeback, opts, (error, data, response) => {
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
 **chargeback** | [**ChargebackDispute**](ChargebackDispute.md)| Chargeback to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateChargeback

> ChargebackDisputeResponse updateChargeback(chargeback_dispute_oid, chargeback, opts)

Update a chargeback

Update a chargeback on the UltraCart account. 

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

let apiInstance = new UltraCartRestApiV2.ChargebackApi();
let chargeback_dispute_oid = 56; // Number | The chargeback_dispute_oid to update.
let chargeback = new UltraCartRestApiV2.ChargebackDispute(); // ChargebackDispute | Chargeback to update
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.updateChargeback(chargeback_dispute_oid, chargeback, opts, (error, data, response) => {
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
 **chargeback_dispute_oid** | **Number**| The chargeback_dispute_oid to update. | 
 **chargeback** | [**ChargebackDispute**](ChargebackDispute.md)| Chargeback to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**ChargebackDisputeResponse**](ChargebackDisputeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

