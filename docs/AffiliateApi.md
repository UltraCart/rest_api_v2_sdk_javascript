# UltraCartRestApiV2.AffiliateApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /affiliate/affiliates/{affiliate_oid} | Delete an affiliate
[**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /affiliate/affiliates/{affiliate_oid} | Retrieve an affiliate
[**getAffiliatesByQuery**](AffiliateApi.md#getAffiliatesByQuery) | **POST** /affiliate/affiliates/query | Retrieve affiliates
[**getClicksByQuery**](AffiliateApi.md#getClicksByQuery) | **POST** /affiliate/clicks/query | Retrieve clicks
[**getLedgersByQuery**](AffiliateApi.md#getLedgersByQuery) | **POST** /affiliate/ledgers/query | Retrieve ledger entries
[**insertAffiliate**](AffiliateApi.md#insertAffiliate) | **POST** /affiliate/affiliates | Insert an affiliate
[**sendAffiliateWelcomeEmail**](AffiliateApi.md#sendAffiliateWelcomeEmail) | **POST** /affiliate/affiliates/{affiliate_oid}/welcome_email | Send a welcome email to an affiliate
[**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PUT** /affiliate/affiliates/{affiliate_oid} | Update an affiliate



## deleteAffiliate

> deleteAffiliate(affiliate_oid)

Delete an affiliate

Delete an affiliate on the UltraCart account.  The affiliate is disabled within the active affiliate program; their ledger and click history is preserved. 


### Example

<!-- UC_START_EXAMPLE deleteAffiliate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate_oid = 56; // Number | The affiliate oid to delete.
apiInstance.deleteAffiliate(affiliate_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteAffiliate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliate

> AffiliateResponse getAffiliate(affiliate_oid, opts)

Retrieve an affiliate

Retrieves a single affiliate using the specified affiliate oid. 


### Example

<!-- UC_START_EXAMPLE getAffiliate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate_oid = 56; // Number | The affiliate oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getAffiliate(affiliate_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAffiliate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliatesByQuery

> AffiliatesResponse getAffiliatesByQuery(affiliate_query, opts)

Retrieve affiliates

Retrieves a group of affiliates from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the affiliates returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getAffiliatesByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate_query = new UltraCartRestApiV2.AffiliateQuery(); // AffiliateQuery | Affiliate query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the affiliates.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getAffiliatesByQuery(affiliate_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAffiliatesByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_query** | [**AffiliateQuery**](AffiliateQuery.md)| Affiliate query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the affiliates.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**AffiliatesResponse**](AffiliatesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClicksByQuery

> AffiliateClicksResponse getClicksByQuery(click_query, opts)

Retrieve clicks

Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getClicksByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let click_query = new UltraCartRestApiV2.AffiliateClickQuery(); // AffiliateClickQuery | Click query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  Only option is link.
};
apiInstance.getClicksByQuery(click_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getClicksByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **click_query** | [**AffiliateClickQuery**](AffiliateClickQuery.md)| Click query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_expand** | **String**| The object expansion to perform on the result.  Only option is link. | [optional] 

### Return type

[**AffiliateClicksResponse**](AffiliateClicksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLedgersByQuery

> AffiliateLedgersResponse getLedgersByQuery(ledger_query, opts)

Retrieve ledger entries

Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getLedgersByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let ledger_query = new UltraCartRestApiV2.AffiliateLedgerQuery(); // AffiliateLedgerQuery | Ledger query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  Only option is link.
};
apiInstance.getLedgersByQuery(ledger_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getLedgersByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger_query** | [**AffiliateLedgerQuery**](AffiliateLedgerQuery.md)| Ledger query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_expand** | **String**| The object expansion to perform on the result.  Only option is link. | [optional] 

### Return type

[**AffiliateLedgersResponse**](AffiliateLedgersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertAffiliate

> AffiliateResponse insertAffiliate(affiliate, opts)

Insert an affiliate

Insert an affiliate on the UltraCart account.  The affiliate is created within the merchant&#39;s active affiliate program. 


### Example

<!-- UC_START_EXAMPLE insertAffiliate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate = new UltraCartRestApiV2.Affiliate(); // Affiliate | Affiliate to insert
let opts = {
  'send_welcome_email': false, // Boolean | Whether to send a welcome email to the affiliate after it is created.  Defaults to false.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.insertAffiliate(affiliate, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertAffiliate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate** | [**Affiliate**](Affiliate.md)| Affiliate to insert | 
 **send_welcome_email** | **Boolean**| Whether to send a welcome email to the affiliate after it is created.  Defaults to false. | [optional] [default to false]
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## sendAffiliateWelcomeEmail

> sendAffiliateWelcomeEmail(affiliate_oid)

Send a welcome email to an affiliate

Sends a welcome email to the specified affiliate using the welcome letter configured on the merchant&#39;s active affiliate program. 


### Example

<!-- UC_START_EXAMPLE sendAffiliateWelcomeEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate_oid = 56; // Number | The affiliate oid to send the welcome email to.
apiInstance.sendAffiliateWelcomeEmail(affiliate_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE sendAffiliateWelcomeEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to send the welcome email to. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAffiliate

> AffiliateResponse updateAffiliate(affiliate_oid, affiliate, opts)

Update an affiliate

Update an affiliate on the UltraCart account.  This is a full replacement of the affiliate; omitted fields are reset to their defaults, with the exception of password which is only changed when supplied. 


### Example

<!-- UC_START_EXAMPLE updateAffiliate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AffiliateApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let affiliate_oid = 56; // Number | The affiliate oid to update.
let affiliate = new UltraCartRestApiV2.Affiliate(); // Affiliate | Affiliate to update
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.updateAffiliate(affiliate_oid, affiliate, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateAffiliate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to update. | 
 **affiliate** | [**Affiliate**](Affiliate.md)| Affiliate to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

