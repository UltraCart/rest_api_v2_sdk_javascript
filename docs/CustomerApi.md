# UltraCartRestApiV2.CustomerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerStoreCredit**](CustomerApi.md#addCustomerStoreCredit) | **POST** /customer/customers/{customer_profile_oid}/store_credit | Adds store credit to a customer
[**adjustInternalCertificate**](CustomerApi.md#adjustInternalCertificate) | **POST** /customer/customers/{customer_profile_oid}/adjust_cashback_balance | Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed.
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /customer/customers/{customer_profile_oid} | Delete a customer
[**deleteWishListItem**](CustomerApi.md#deleteWishListItem) | **DELETE** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Delete a customer wishlist item
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer/customers/{customer_profile_oid} | Retrieve a customer
[**getCustomerByEmail**](CustomerApi.md#getCustomerByEmail) | **GET** /customer/customers/by_email/{email} | Retrieve a customer by Email
[**getCustomerEditorValues**](CustomerApi.md#getCustomerEditorValues) | **GET** /customer/editor_values | Retrieve values needed for a customer profile editor
[**getCustomerEmailLists**](CustomerApi.md#getCustomerEmailLists) | **GET** /customer/email_lists | Retrieve all email lists across all storefronts
[**getCustomerStoreCredit**](CustomerApi.md#getCustomerStoreCredit) | **GET** /customer/customers/{customer_profile_oid}/store_credit | Retrieve the customer store credit accumulated through loyalty programs
[**getCustomerWishList**](CustomerApi.md#getCustomerWishList) | **GET** /customer/customers/{customer_profile_oid}/wishlist | Retrieve wishlist items for customer
[**getCustomerWishListItem**](CustomerApi.md#getCustomerWishListItem) | **GET** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Retrieve wishlist item for customer
[**getCustomers**](CustomerApi.md#getCustomers) | **GET** /customer/customers | Retrieve customers
[**getCustomersByQuery**](CustomerApi.md#getCustomersByQuery) | **POST** /customer/customers/query | Retrieve customers by query
[**getCustomersForDataTables**](CustomerApi.md#getCustomersForDataTables) | **POST** /customer/customers/dataTables | Retrieve customers for DataTables plugin
[**getEmailVerificationToken**](CustomerApi.md#getEmailVerificationToken) | **POST** /customer/customers/email_verify/get_token | Create a token that can be used to verify a customer email address
[**getMagicLink**](CustomerApi.md#getMagicLink) | **PUT** /customer/customers/{customer_profile_oid}/magic_link/{storefront_host_name} | getMagicLink
[**insertCustomer**](CustomerApi.md#insertCustomer) | **POST** /customer/customers | Insert a customer
[**insertWishListItem**](CustomerApi.md#insertWishListItem) | **POST** /customer/customers/{customer_profile_oid}/wishlist | Insert a customer wishlist item
[**mergeCustomer**](CustomerApi.md#mergeCustomer) | **PUT** /customer/customers/{customer_profile_oid}/merge | Merge customer into this customer
[**searchCustomerProfileValues**](CustomerApi.md#searchCustomerProfileValues) | **POST** /customer/search | Searches for all matching values (using POST)
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /customer/customers/{customer_profile_oid} | Update a customer
[**updateCustomerEmailLists**](CustomerApi.md#updateCustomerEmailLists) | **POST** /customer/customers/{customer_profile_oid}/email_lists | Update email list subscriptions for a customer
[**updateWishListItem**](CustomerApi.md#updateWishListItem) | **PUT** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Update a customer wishlist item
[**validateEmailVerificationToken**](CustomerApi.md#validateEmailVerificationToken) | **POST** /customer/customers/email_verify/validate_token | Validate a token that can be used to verify a customer email address



## addCustomerStoreCredit

> BaseResponse addCustomerStoreCredit(customer_profile_oid, store_credit_request)

Adds store credit to a customer

Adds store credit to a customer 


### Example

<!-- UC_START_EXAMPLE addCustomerStoreCredit -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid to credit.
let store_credit_request = new UltraCartRestApiV2.CustomerStoreCreditAddRequest(); // CustomerStoreCreditAddRequest | Store credit to add
apiInstance.addCustomerStoreCredit(customer_profile_oid, store_credit_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE addCustomerStoreCredit -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to credit. | 
 **store_credit_request** | [**CustomerStoreCreditAddRequest**](CustomerStoreCreditAddRequest.md)| Store credit to add | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## adjustInternalCertificate

> AdjustInternalCertificateResponse adjustInternalCertificate(customer_profile_oid, adjust_internal_certificate_request)

Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed.

Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed. 


### Example

<!-- UC_START_EXAMPLE adjustInternalCertificate -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer profile oid
let adjust_internal_certificate_request = new UltraCartRestApiV2.AdjustInternalCertificateRequest(); // AdjustInternalCertificateRequest | adjustInternalCertificateRequest
apiInstance.adjustInternalCertificate(customer_profile_oid, adjust_internal_certificate_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE adjustInternalCertificate -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **adjust_internal_certificate_request** | [**AdjustInternalCertificateRequest**](AdjustInternalCertificateRequest.md)| adjustInternalCertificateRequest | 

### Return type

[**AdjustInternalCertificateResponse**](AdjustInternalCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## deleteCustomer

> deleteCustomer(customer_profile_oid)

Delete a customer

Delete a customer on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE deleteCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer_profile_oid to delete.
apiInstance.deleteCustomer(customer_profile_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWishListItem

> CustomerWishListItem deleteWishListItem(customer_profile_oid, customer_wishlist_item_oid)

Delete a customer wishlist item

Delete a customer wishlist item 


### Example

<!-- UC_START_EXAMPLE deleteWishListItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid for this wishlist.
let customer_wishlist_item_oid = 56; // Number | The wishlist oid for this wishlist item to delete.
apiInstance.deleteWishListItem(customer_profile_oid, customer_wishlist_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteWishListItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item to delete. | 

### Return type

[**CustomerWishListItem**](CustomerWishListItem.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomer

> CustomerResponse getCustomer(customer_profile_oid, opts)

Retrieve a customer

Retrieves a single customer using the specified customer profile oid. 


### Example

<!-- UC_START_EXAMPLE getCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getCustomer(customer_profile_oid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerByEmail

> CustomerResponse getCustomerByEmail(email, opts)

Retrieve a customer by Email

Retrieves a single customer using the specified customer email address. 


### Example

<!-- UC_START_EXAMPLE getCustomerByEmail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let email = "email_example"; // String | The email address of the customer to retrieve.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getCustomerByEmail(email, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerByEmail -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address of the customer to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerEditorValues

> CustomerEditorValues getCustomerEditorValues()

Retrieve values needed for a customer profile editor

Retrieve values needed for a customer profile editor. 


### Example

<!-- UC_START_EXAMPLE getCustomerEditorValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getCustomerEditorValues((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerEditorValues -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomerEditorValues**](CustomerEditorValues.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerEmailLists

> EmailListsResponse getCustomerEmailLists()

Retrieve all email lists across all storefronts

Retrieve all email lists across all storefronts 


### Example

<!-- UC_START_EXAMPLE getCustomerEmailLists -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getCustomerEmailLists((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerEmailLists -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**EmailListsResponse**](EmailListsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerStoreCredit

> CustomerStoreCreditResponse getCustomerStoreCredit(customer_profile_oid)

Retrieve the customer store credit accumulated through loyalty programs

Retrieve the customer store credit accumulated through loyalty programs 


### Example

<!-- UC_START_EXAMPLE getCustomerStoreCredit -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid to retrieve.
apiInstance.getCustomerStoreCredit(customer_profile_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerStoreCredit -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to retrieve. | 

### Return type

[**CustomerStoreCreditResponse**](CustomerStoreCreditResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerWishList

> CustomerWishListItemsResponse getCustomerWishList(customer_profile_oid)

Retrieve wishlist items for customer

Retrieve wishlist items for customer. 


### Example

<!-- UC_START_EXAMPLE getCustomerWishList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid for this wishlist.
apiInstance.getCustomerWishList(customer_profile_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerWishList -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 

### Return type

[**CustomerWishListItemsResponse**](CustomerWishListItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerWishListItem

> CustomerWishListItemResponse getCustomerWishListItem(customer_profile_oid, customer_wishlist_item_oid)

Retrieve wishlist item for customer

Retrieve wishlist item for customer. 


### Example

<!-- UC_START_EXAMPLE getCustomerWishListItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid for this wishlist.
let customer_wishlist_item_oid = 56; // Number | The wishlist oid for this wishlist item.
apiInstance.getCustomerWishListItem(customer_profile_oid, customer_wishlist_item_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomerWishListItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item. | 

### Return type

[**CustomerWishListItemResponse**](CustomerWishListItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomers

> CustomersResponse getCustomers(opts)

Retrieve customers

Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getCustomers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  'email': "email_example", // String | Email
  'qb_class': "qb_class_example", // String | Quickbooks class
  'quickbooks_code': "quickbooks_code_example", // String | Quickbooks code
  'last_modified_dts_start': "last_modified_dts_start_example", // String | Last modified date start
  'last_modified_dts_end': "last_modified_dts_end_example", // String | Last modified date end
  'signup_dts_start': "signup_dts_start_example", // String | Signup date start
  'signup_dts_end': "signup_dts_end_example", // String | Signup date end
  'billing_first_name': "billing_first_name_example", // String | Billing first name
  'billing_last_name': "billing_last_name_example", // String | Billing last name
  'billing_company': "billing_company_example", // String | Billing company
  'billing_city': "billing_city_example", // String | Billing city
  'billing_state': "billing_state_example", // String | Billing state
  'billing_postal_code': "billing_postal_code_example", // String | Billing postal code
  'billing_country_code': "billing_country_code_example", // String | Billing country code
  'billing_day_phone': "billing_day_phone_example", // String | Billing day phone
  'billing_evening_phone': "billing_evening_phone_example", // String | Billing evening phone
  'shipping_first_name': "shipping_first_name_example", // String | Shipping first name
  'shipping_last_name': "shipping_last_name_example", // String | Shipping last name
  'shipping_company': "shipping_company_example", // String | Shipping company
  'shipping_city': "shipping_city_example", // String | Shipping city
  'shipping_state': "shipping_state_example", // String | Shipping state
  'shipping_postal_code': "shipping_postal_code_example", // String | Shipping postal code
  'shipping_country_code': "shipping_country_code_example", // String | Shipping country code
  'shipping_day_phone': "shipping_day_phone_example", // String | Shipping day phone
  'shipping_evening_phone': "shipping_evening_phone_example", // String | Shipping evening phone
  'pricing_tier_oid': 56, // Number | Pricing tier oid
  'pricing_tier_name': "pricing_tier_name_example", // String | Pricing tier name
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_since': "_since_example", // String | Fetch customers that have been created/modified since this date/time.
  '_sort': "_sort_example", // String | The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getCustomers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomers -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | [optional] 
 **qb_class** | **String**| Quickbooks class | [optional] 
 **quickbooks_code** | **String**| Quickbooks code | [optional] 
 **last_modified_dts_start** | **String**| Last modified date start | [optional] 
 **last_modified_dts_end** | **String**| Last modified date end | [optional] 
 **signup_dts_start** | **String**| Signup date start | [optional] 
 **signup_dts_end** | **String**| Signup date end | [optional] 
 **billing_first_name** | **String**| Billing first name | [optional] 
 **billing_last_name** | **String**| Billing last name | [optional] 
 **billing_company** | **String**| Billing company | [optional] 
 **billing_city** | **String**| Billing city | [optional] 
 **billing_state** | **String**| Billing state | [optional] 
 **billing_postal_code** | **String**| Billing postal code | [optional] 
 **billing_country_code** | **String**| Billing country code | [optional] 
 **billing_day_phone** | **String**| Billing day phone | [optional] 
 **billing_evening_phone** | **String**| Billing evening phone | [optional] 
 **shipping_first_name** | **String**| Shipping first name | [optional] 
 **shipping_last_name** | **String**| Shipping last name | [optional] 
 **shipping_company** | **String**| Shipping company | [optional] 
 **shipping_city** | **String**| Shipping city | [optional] 
 **shipping_state** | **String**| Shipping state | [optional] 
 **shipping_postal_code** | **String**| Shipping postal code | [optional] 
 **shipping_country_code** | **String**| Shipping country code | [optional] 
 **shipping_day_phone** | **String**| Shipping day phone | [optional] 
 **shipping_evening_phone** | **String**| Shipping evening phone | [optional] 
 **pricing_tier_oid** | **Number**| Pricing tier oid | [optional] 
 **pricing_tier_name** | **String**| Pricing tier name | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomersByQuery

> CustomersResponse getCustomersByQuery(customer_query, opts)

Retrieve customers by query

Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

<!-- UC_START_EXAMPLE getCustomersByQuery -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_query = new UltraCartRestApiV2.CustomerQuery(); // CustomerQuery | Customer query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_since': "_since_example", // String | Fetch customers that have been created/modified since this date/time.
  '_sort': "_sort_example", // String | The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getCustomersByQuery(customer_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomersByQuery -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_query** | [**CustomerQuery**](CustomerQuery.md)| Customer query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCustomersForDataTables

> DataTablesServerSideResponse getCustomersForDataTables(opts)

Retrieve customers for DataTables plugin

Retrieves customers from the account.  If no searches are specified, all customers will be returned. 


### Example

<!-- UC_START_EXAMPLE getCustomersForDataTables -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getCustomersForDataTables(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomersForDataTables -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**DataTablesServerSideResponse**](DataTablesServerSideResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailVerificationToken

> EmailVerifyTokenResponse getEmailVerificationToken(token_request)

Create a token that can be used to verify a customer email address

Create a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 


### Example

<!-- UC_START_EXAMPLE getEmailVerificationToken -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let token_request = new UltraCartRestApiV2.EmailVerifyTokenRequest(); // EmailVerifyTokenRequest | Token request
apiInstance.getEmailVerificationToken(token_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmailVerificationToken -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_request** | [**EmailVerifyTokenRequest**](EmailVerifyTokenRequest.md)| Token request | 

### Return type

[**EmailVerifyTokenResponse**](EmailVerifyTokenResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMagicLink

> CustomerMagicLinkResponse getMagicLink(customer_profile_oid, storefront_host_name)

getMagicLink

Retrieves a magic link to allow a merchant to login as a customer.  This method is a PUT call intentionally. 


### Example

<!-- UC_START_EXAMPLE getMagicLink -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer_profile_oid of the customer.
let storefront_host_name = "storefront_host_name_example"; // String | The storefront to log into.
apiInstance.getMagicLink(customer_profile_oid, storefront_host_name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getMagicLink -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid of the customer. | 
 **storefront_host_name** | **String**| The storefront to log into. | 

### Return type

[**CustomerMagicLinkResponse**](CustomerMagicLinkResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertCustomer

> CustomerResponse insertCustomer(customer, opts)

Insert a customer

Insert a customer on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE insertCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer = new UltraCartRestApiV2.Customer(); // Customer | Customer to insert
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.insertCustomer(customer, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)| Customer to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertWishListItem

> CustomerWishListItem insertWishListItem(customer_profile_oid, wishlist_item)

Insert a customer wishlist item

Insert a customer wishlist item 


### Example

<!-- UC_START_EXAMPLE insertWishListItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid for this wishlist.
let wishlist_item = new UltraCartRestApiV2.CustomerWishListItem(); // CustomerWishListItem | Wishlist item to insert
apiInstance.insertWishListItem(customer_profile_oid, wishlist_item, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertWishListItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **wishlist_item** | [**CustomerWishListItem**](CustomerWishListItem.md)| Wishlist item to insert | 

### Return type

[**CustomerWishListItem**](CustomerWishListItem.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## mergeCustomer

> mergeCustomer(customer_profile_oid, customer, opts)

Merge customer into this customer

Merge customer into this customer. 


### Example

<!-- UC_START_EXAMPLE mergeCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer_profile_oid to update.
let customer = new UltraCartRestApiV2.CustomerMergeRequest(); // CustomerMergeRequest | Customer to merge into this profile.
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.mergeCustomer(customer_profile_oid, customer, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE mergeCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to update. | 
 **customer** | [**CustomerMergeRequest**](CustomerMergeRequest.md)| Customer to merge into this profile. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## searchCustomerProfileValues

> LookupResponse searchCustomerProfileValues(lookup_request)

Searches for all matching values (using POST)


### Example

<!-- UC_START_EXAMPLE searchCustomerProfileValues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let lookup_request = new UltraCartRestApiV2.LookupRequest(); // LookupRequest | LookupRequest
apiInstance.searchCustomerProfileValues(lookup_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchCustomerProfileValues -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookup_request** | [**LookupRequest**](LookupRequest.md)| LookupRequest | 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomer

> CustomerResponse updateCustomer(customer_profile_oid, customer, opts)

Update a customer

Update a customer on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE updateCustomer -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer_profile_oid to update.
let customer = new UltraCartRestApiV2.Customer(); // Customer | Customer to update
let opts = {
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.updateCustomer(customer_profile_oid, customer, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomer -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to update. | 
 **customer** | [**Customer**](Customer.md)| Customer to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomerEmailLists

> CustomerEmailListChanges updateCustomerEmailLists(customer_profile_oid, list_changes)

Update email list subscriptions for a customer

Update email list subscriptions for a customer 


### Example

<!-- UC_START_EXAMPLE updateCustomerEmailLists -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer profile oid
let list_changes = new UltraCartRestApiV2.CustomerEmailListChanges(); // CustomerEmailListChanges | List changes
apiInstance.updateCustomerEmailLists(customer_profile_oid, list_changes, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomerEmailLists -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **list_changes** | [**CustomerEmailListChanges**](CustomerEmailListChanges.md)| List changes | 

### Return type

[**CustomerEmailListChanges**](CustomerEmailListChanges.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateWishListItem

> CustomerWishListItem updateWishListItem(customer_profile_oid, customer_wishlist_item_oid, wishlist_item)

Update a customer wishlist item

Update a customer wishlist item 


### Example

<!-- UC_START_EXAMPLE updateWishListItem -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let customer_profile_oid = 56; // Number | The customer oid for this wishlist.
let customer_wishlist_item_oid = 56; // Number | The wishlist oid for this wishlist item.
let wishlist_item = new UltraCartRestApiV2.CustomerWishListItem(); // CustomerWishListItem | Wishlist item to update
apiInstance.updateWishListItem(customer_profile_oid, customer_wishlist_item_oid, wishlist_item, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateWishListItem -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item. | 
 **wishlist_item** | [**CustomerWishListItem**](CustomerWishListItem.md)| Wishlist item to update | 

### Return type

[**CustomerWishListItem**](CustomerWishListItem.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## validateEmailVerificationToken

> EmailVerifyTokenValidateResponse validateEmailVerificationToken(validation_request)

Validate a token that can be used to verify a customer email address

Validate a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 


### Example

<!-- UC_START_EXAMPLE validateEmailVerificationToken -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.CustomerApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let validation_request = new UltraCartRestApiV2.EmailVerifyTokenValidateRequest(); // EmailVerifyTokenValidateRequest | Token validation request
apiInstance.validateEmailVerificationToken(validation_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE validateEmailVerificationToken -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_request** | [**EmailVerifyTokenValidateRequest**](EmailVerifyTokenValidateRequest.md)| Token validation request | 

### Return type

[**EmailVerifyTokenValidateResponse**](EmailVerifyTokenValidateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

