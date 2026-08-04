# UltraCartRestApiV2.FraudApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**declineEmail**](FraudApi.md#declineEmail) | **POST** /fraud/decline_email | Decline email during checkout fraud review
[**deleteFraudRule**](FraudApi.md#deleteFraudRule) | **DELETE** /fraud/rules/{fraud_rule_oid} | Delete a fraud rule
[**establishFraudRulesFromOrder**](FraudApi.md#establishFraudRulesFromOrder) | **POST** /fraud/rules/from_order | Establish fraud rules from an order
[**getFraudLookupValues**](FraudApi.md#getFraudLookupValues) | **GET** /fraud/lookup_values | Retrieve fraud rule lookup values
[**insertFraudRule**](FraudApi.md#insertFraudRule) | **POST** /fraud/rules | Insert a fraud rule
[**searchFraudRules**](FraudApi.md#searchFraudRules) | **POST** /fraud/rules/search | Search fraud rules



## declineEmail

> declineEmail(fraud_decline_emails_request)

Decline email during checkout fraud review

Adds one email address to the fraud decline list for this merchant account. 


### Example

<!-- UC_START_EXAMPLE declineEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let fraud_decline_emails_request = new UltraCartRestApiV2.FraudDeclineEmailRequest(); // FraudDeclineEmailRequest | Fraud decline emails request
apiInstance.declineEmail(fraud_decline_emails_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE declineEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_decline_emails_request** | [**FraudDeclineEmailRequest**](FraudDeclineEmailRequest.md)| Fraud decline emails request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFraudRule

> deleteFraudRule(fraud_rule_oid)

Delete a fraud rule

Deletes a fraud rule for this merchant account. 


### Example

<!-- UC_START_EXAMPLE deleteFraudRule -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let fraud_rule_oid = 56; // Number | 
apiInstance.deleteFraudRule(fraud_rule_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteFraudRule -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## establishFraudRulesFromOrder

> FraudRulesResponse establishFraudRulesFromOrder(fraud_rule_from_order_request)

Establish fraud rules from an order

Creates one or more fraud rules for this merchant account derived from an existing order, mirroring the &#39;establish fraud filter&#39; action in the order processing screen. Select which filters to establish; all values are taken from the order. The IP rule is created against the order&#39;s /24 subnet (last octet masked). The credit card filter duplicates the order&#39;s stored card vault token, so no card number is sent through the API. Filters whose order data is missing (no stored card, no email, no usable IP, or no numeric street) are skipped and reported in the warning slot rather than failing the request. 


### Example

<!-- UC_START_EXAMPLE establishFraudRulesFromOrder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let fraud_rule_from_order_request = new UltraCartRestApiV2.FraudRuleFromOrderRequest(); // FraudRuleFromOrderRequest | Fraud rule from order request
apiInstance.establishFraudRulesFromOrder(fraud_rule_from_order_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE establishFraudRulesFromOrder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_from_order_request** | [**FraudRuleFromOrderRequest**](FraudRuleFromOrderRequest.md)| Fraud rule from order request | 

### Return type

[**FraudRulesResponse**](FraudRulesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFraudLookupValues

> FraudLookupValuesResponse getFraudLookupValues()

Retrieve fraud rule lookup values

Returns the dropdown values required to build valid fraud rule insert and search requests. Includes rule types, failure actions, user actions, IP range types, AVS match types, the merchant&#39;s rotating transaction gateways, screen branding themes, countries, and affiliates. 


### Example

<!-- UC_START_EXAMPLE getFraudLookupValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getFraudLookupValues((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getFraudLookupValues -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**FraudLookupValuesResponse**](FraudLookupValuesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertFraudRule

> FraudRuleResponse insertFraudRule(fraud_rule_insert_request)

Insert a fraud rule

Creates a fraud rule for this merchant account. Field names in the request body are semantic (eg amount_threshold, email, ip_address). Call GET /v2/fraud/lookup_values for the list of valid rule_type, failure_action, and related dropdown values. The &#39;credit card matches&#39; rule type is not supported via REST. 


### Example

<!-- UC_START_EXAMPLE insertFraudRule -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let fraud_rule_insert_request = new UltraCartRestApiV2.FraudRuleInsertRequest(); // FraudRuleInsertRequest | Fraud rule insert request
apiInstance.insertFraudRule(fraud_rule_insert_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertFraudRule -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_insert_request** | [**FraudRuleInsertRequest**](FraudRuleInsertRequest.md)| Fraud rule insert request | 

### Return type

[**FraudRuleResponse**](FraudRuleResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchFraudRules

> FraudRulesResponse searchFraudRules(fraud_rule_search_request, opts)

Search fraud rules

Searches fraud rules for this merchant account using semantic filter fields. Pagination and sort are passed as query parameters (_limit, _offset, _sort). You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. Results are capped at 10,000 records by ElasticSearch and the warning slot indicates when that cap was hit. Use more selective filters in that case. 


### Example

<!-- UC_START_EXAMPLE searchFraudRules -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.FraudApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let fraud_rule_search_request = new UltraCartRestApiV2.FraudRuleSearchRequest(); // FraudRuleSearchRequest | Fraud rule search request
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the fraud rules.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.searchFraudRules(fraud_rule_search_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchFraudRules -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_search_request** | [**FraudRuleSearchRequest**](FraudRuleSearchRequest.md)| Fraud rule search request | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the fraud rules.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**FraudRulesResponse**](FraudRulesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

