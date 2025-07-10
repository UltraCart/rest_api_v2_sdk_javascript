# UltraCartRestApiV2.AutoOrderApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consolidateAutoOrders**](AutoOrderApi.md#consolidateAutoOrders) | **PUT** /auto_order/auto_orders/{auto_order_oid}/consolidate | Consolidates multiple auto orders
[**establishAutoOrderByReferenceOrderId**](AutoOrderApi.md#establishAutoOrderByReferenceOrderId) | **POST** /auto_order/auto_orders/reference_order_id/{reference_order_id} | Establish an auto order by referencing a regular order id
[**getAutoOrder**](AutoOrderApi.md#getAutoOrder) | **GET** /auto_order/auto_orders/{auto_order_oid} | Retrieve an auto order by oid
[**getAutoOrderByCode**](AutoOrderApi.md#getAutoOrderByCode) | **GET** /auto_order/auto_orders/code/{auto_order_code} | Retrieve an auto order by code
[**getAutoOrderByReferenceOrderId**](AutoOrderApi.md#getAutoOrderByReferenceOrderId) | **GET** /auto_order/auto_orders/reference_order_id/{reference_order_id} | Retrieve an auto order by order id
[**getAutoOrders**](AutoOrderApi.md#getAutoOrders) | **GET** /auto_order/auto_orders | Retrieve auto orders
[**getAutoOrdersBatch**](AutoOrderApi.md#getAutoOrdersBatch) | **POST** /auto_order/auto_orders/batch | Retrieve auto order batch
[**getAutoOrdersByQuery**](AutoOrderApi.md#getAutoOrdersByQuery) | **POST** /auto_order/auto_orders/query | Retrieve auto orders by query
[**pauseAutoOrder**](AutoOrderApi.md#pauseAutoOrder) | **PUT** /auto_order/auto_orders/{auto_order_oid}/pause | Pause auto order
[**updateAutoOrder**](AutoOrderApi.md#updateAutoOrder) | **PUT** /auto_order/auto_orders/{auto_order_oid} | Update an auto order
[**updateAutoOrdersBatch**](AutoOrderApi.md#updateAutoOrdersBatch) | **PUT** /auto_order/auto_orders/batch | Update multiple auto orders



## consolidateAutoOrders

> AutoOrderResponse consolidateAutoOrders(auto_order_oid, auto_order_consolidate, opts)

Consolidates multiple auto orders

Consolidates mutliple auto orders on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE consolidateAutoOrders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_oid = 56; // Number | The auto order oid to consolidate into.
let auto_order_consolidate = new UltraCartRestApiV2.AutoOrderConsolidate(); // AutoOrderConsolidate | Auto orders to consolidate
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.consolidateAutoOrders(auto_order_oid, auto_order_consolidate, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE consolidateAutoOrders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to consolidate into. | 
 **auto_order_consolidate** | [**AutoOrderConsolidate**](AutoOrderConsolidate.md)| Auto orders to consolidate | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## establishAutoOrderByReferenceOrderId

> AutoOrderResponse establishAutoOrderByReferenceOrderId(reference_order_id, opts)

Establish an auto order by referencing a regular order id

Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 


### Example

<!-- UC_START_EXAMPLE establishAutoOrderByReferenceOrderId -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let reference_order_id = "reference_order_id_example"; // String | The order id to attach this auto order to
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.establishAutoOrderByReferenceOrderId(reference_order_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE establishAutoOrderByReferenceOrderId -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_order_id** | **String**| The order id to attach this auto order to | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrder

> AutoOrderResponse getAutoOrder(auto_order_oid, opts)

Retrieve an auto order by oid

Retrieves a single auto order using the specified auto order oid. 


### Example

<!-- UC_START_EXAMPLE getAutoOrder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_oid = 56; // Number | The auto order oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getAutoOrder(auto_order_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderByCode

> AutoOrderResponse getAutoOrderByCode(auto_order_code, opts)

Retrieve an auto order by code

Retrieves a single auto order using the specified reference (original) order id. 


### Example

<!-- UC_START_EXAMPLE getAutoOrderByCode -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_code = "auto_order_code_example"; // String | The auto order oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getAutoOrderByCode(auto_order_code, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrderByCode -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_code** | **String**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderByReferenceOrderId

> AutoOrderResponse getAutoOrderByReferenceOrderId(reference_order_id, opts)

Retrieve an auto order by order id

Retrieves a single auto order using the specified reference (original) order id. 


### Example

<!-- UC_START_EXAMPLE getAutoOrderByReferenceOrderId -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let reference_order_id = "reference_order_id_example"; // String | The auto order oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getAutoOrderByReferenceOrderId(reference_order_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrderByReferenceOrderId -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_order_id** | **String**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrders

> AutoOrdersResponse getAutoOrders(opts)

Retrieve auto orders

Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getAutoOrders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  'auto_order_code': "auto_order_code_example", // String | Auto order code
  'original_order_id': "original_order_id_example", // String | Original order id
  'first_name': "first_name_example", // String | First name
  'last_name': "last_name_example", // String | Last name
  'company': "company_example", // String | Company
  'city': "city_example", // String | City
  'state': "state_example", // String | State
  'postal_code': "postal_code_example", // String | Postal code
  'country_code': "country_code_example", // String | Country code (ISO-3166 two letter)
  'phone': "phone_example", // String | Phone
  'email': "email_example", // String | Email
  'original_order_date_begin': "original_order_date_begin_example", // String | Original order date begin
  'original_order_date_end': "original_order_date_end_example", // String | Original order date end
  'next_shipment_date_begin': "next_shipment_date_begin_example", // String | Next shipment date begin
  'next_shipment_date_end': "next_shipment_date_end_example", // String | Next shipment date end
  'card_type': "card_type_example", // String | Card type
  'item_id': "item_id_example", // String | Item ID
  'status': "status_example", // String | Status
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_since': "_since_example", // String | Fetch auto orders that have been created/modified since this date/time.
  '_sort': "_sort_example", // String | The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getAutoOrders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_code** | **String**| Auto order code | [optional] 
 **original_order_id** | **String**| Original order id | [optional] 
 **first_name** | **String**| First name | [optional] 
 **last_name** | **String**| Last name | [optional] 
 **company** | **String**| Company | [optional] 
 **city** | **String**| City | [optional] 
 **state** | **String**| State | [optional] 
 **postal_code** | **String**| Postal code | [optional] 
 **country_code** | **String**| Country code (ISO-3166 two letter) | [optional] 
 **phone** | **String**| Phone | [optional] 
 **email** | **String**| Email | [optional] 
 **original_order_date_begin** | **String**| Original order date begin | [optional] 
 **original_order_date_end** | **String**| Original order date end | [optional] 
 **next_shipment_date_begin** | **String**| Next shipment date begin | [optional] 
 **next_shipment_date_end** | **String**| Next shipment date end | [optional] 
 **card_type** | **String**| Card type | [optional] 
 **item_id** | **String**| Item ID | [optional] 
 **status** | **String**| Status | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch auto orders that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrdersBatch

> AutoOrdersResponse getAutoOrdersBatch(auto_order_batch, opts)

Retrieve auto order batch

Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 


### Example

<!-- UC_START_EXAMPLE getAutoOrdersBatch -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_batch = new UltraCartRestApiV2.AutoOrderQueryBatch(); // AutoOrderQueryBatch | Auto order batch
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.
};
apiInstance.getAutoOrdersBatch(auto_order_batch, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrdersBatch -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_batch** | [**AutoOrderQueryBatch**](AutoOrderQueryBatch.md)| Auto order batch | 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAutoOrdersByQuery

> AutoOrdersResponse getAutoOrdersByQuery(auto_order_query, opts)

Retrieve auto orders by query

Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getAutoOrdersByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_query = new UltraCartRestApiV2.AutoOrderQuery(); // AutoOrderQuery | Auto order query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example", // String | The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.
};
apiInstance.getAutoOrdersByQuery(auto_order_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAutoOrdersByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_query** | [**AutoOrderQuery**](AutoOrderQuery.md)| Auto order query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pauseAutoOrder

> AutoOrderResponse pauseAutoOrder(auto_order_oid, auto_order, opts)

Pause auto order

Completely pause an auto order 


### Example

<!-- UC_START_EXAMPLE pauseAutoOrder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_oid = 56; // Number | The auto order oid to pause.
let auto_order = new UltraCartRestApiV2.AutoOrder(); // AutoOrder | Auto order to pause
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.pauseAutoOrder(auto_order_oid, auto_order, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE pauseAutoOrder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to pause. | 
 **auto_order** | [**AutoOrder**](AutoOrder.md)| Auto order to pause | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrder

> AutoOrderResponse updateAutoOrder(auto_order_oid, auto_order, opts)

Update an auto order

Update an auto order on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE updateAutoOrder -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_order_oid = 56; // Number | The auto order oid to update.
let auto_order = new UltraCartRestApiV2.AutoOrder(); // AutoOrder | Auto order to update
let opts = {
  'validate_original_order': "validate_original_order_example", // String | Validate original order before updating
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.updateAutoOrder(auto_order_oid, auto_order, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateAutoOrder -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update. | 
 **auto_order** | [**AutoOrder**](AutoOrder.md)| Auto order to update | 
 **validate_original_order** | **String**| Validate original order before updating | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrdersBatch

> AutoOrdersResponse updateAutoOrdersBatch(auto_orders_request, opts)

Update multiple auto orders

Update multiple auto orders on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE updateAutoOrdersBatch -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.AutoOrderApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let auto_orders_request = new UltraCartRestApiV2.AutoOrdersRequest(); // AutoOrdersRequest | Auto orders to update (synchronous maximum 20 / asynchronous maximum 100)
let opts = {
  '_expand': "_expand_example", // String | The object expansion to perform on the result.  See documentation for examples
  '_placeholders': true, // Boolean | Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
  '_async': true // Boolean | True if the operation should be run async.  No result returned
};
apiInstance.updateAutoOrdersBatch(auto_orders_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateAutoOrdersBatch -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_orders_request** | [**AutoOrdersRequest**](AutoOrdersRequest.md)| Auto orders to update (synchronous maximum 20 / asynchronous maximum 100) | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 
 **_async** | **Boolean**| True if the operation should be run async.  No result returned | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

