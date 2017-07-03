# UltraCartRestApiV2.CustomerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /customer/customers/{customer_profile_oid} | Delete a customer
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer/customers/{customer_profile_oid} | Retrieve a customer
[**getCustomers**](CustomerApi.md#getCustomers) | **GET** /customer/customers | Retrieve customers
[**insertCustomer**](CustomerApi.md#insertCustomer) | **POST** /customer/customers | Insert a customer
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /customer/customers/{customer_profile_oid} | Update a customer


<a name="deleteCustomer"></a>
# **deleteCustomer**
> CustomerResponse deleteCustomer(customerProfileOid)

Delete a customer

Delete a customer on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CustomerApi();

var customerProfileOid = 56; // Integer | The customer_profile_oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCustomer(customerProfileOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerProfileOid** | **Integer**| The customer_profile_oid to delete. | 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="getCustomer"></a>
# **getCustomer**
> CustomerResponse getCustomer(customerProfileOid, opts)

Retrieve a customer

Retrieves a single customer using the specified customer profile oid. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CustomerApi();

var customerProfileOid = 56; // Integer | The customer oid to retrieve.

var opts = { 
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomer(customerProfileOid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerProfileOid** | **Integer**| The customer oid to retrieve. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomers"></a>
# **getCustomers**
> CustomersResponse getCustomers(opts)

Retrieve customers

Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CustomerApi();

var opts = { 
  'email': "email_example", // String | Email
  'qbClass': "qbClass_example", // String | Quickbooks class
  'quickbooksCode': "quickbooksCode_example", // String | Quickbooks code
  'lastModifiedDtsStart': "lastModifiedDtsStart_example", // String | Last modified date start
  'lastModifiedDtsEnd': "lastModifiedDtsEnd_example", // String | Last modified date end
  'signupDtsStart': "signupDtsStart_example", // String | Signup date start
  'signupDtsEnd': "signupDtsEnd_example", // String | Signup date end
  'billingFirstName': "billingFirstName_example", // String | Billing first name
  'billingLastName': "billingLastName_example", // String | Billing last name
  'billingCompany': "billingCompany_example", // String | Billing company
  'billingCity': "billingCity_example", // String | Billing city
  'billingState': "billingState_example", // String | Billing state
  'billingPostalCode': "billingPostalCode_example", // String | Billing postal code
  'billingCountryCode': "billingCountryCode_example", // String | Billing country code
  'billingDayPhone': "billingDayPhone_example", // String | Billing day phone
  'billingEveningPhone': "billingEveningPhone_example", // String | Billing evening phone
  'shippingFirstName': "shippingFirstName_example", // String | Shipping first name
  'shippingLastName': "shippingLastName_example", // String | Shipping last name
  'shippingCompany': "shippingCompany_example", // String | Shipping company
  'shippingCity': "shippingCity_example", // String | Shipping city
  'shippingState': "shippingState_example", // String | Shipping state
  'shippingPostalCode': "shippingPostalCode_example", // String | Shipping postal code
  'shippingCountryCode': "shippingCountryCode_example", // String | Shipping country code
  'shippingDayPhone': "shippingDayPhone_example", // String | Shipping day phone
  'shippingEveningPhone': "shippingEveningPhone_example", // String | Shipping evening phone
  'pricingTierOid': 56, // Integer | Pricing tier oid
  'pricingTierName': "pricingTierName_example", // String | Pricing tier name
  'limit': 100, // Integer | The maximum number of records to return on this one API call. (Max 200)
  'offset': 0, // Integer | Pagination of the record set.  Offset is a zero based index.
  'since': "since_example", // String | Fetch customers that have been created/modified since this date/time.
  'sort': "sort_example", // String | The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | [optional] 
 **qbClass** | **String**| Quickbooks class | [optional] 
 **quickbooksCode** | **String**| Quickbooks code | [optional] 
 **lastModifiedDtsStart** | **String**| Last modified date start | [optional] 
 **lastModifiedDtsEnd** | **String**| Last modified date end | [optional] 
 **signupDtsStart** | **String**| Signup date start | [optional] 
 **signupDtsEnd** | **String**| Signup date end | [optional] 
 **billingFirstName** | **String**| Billing first name | [optional] 
 **billingLastName** | **String**| Billing last name | [optional] 
 **billingCompany** | **String**| Billing company | [optional] 
 **billingCity** | **String**| Billing city | [optional] 
 **billingState** | **String**| Billing state | [optional] 
 **billingPostalCode** | **String**| Billing postal code | [optional] 
 **billingCountryCode** | **String**| Billing country code | [optional] 
 **billingDayPhone** | **String**| Billing day phone | [optional] 
 **billingEveningPhone** | **String**| Billing evening phone | [optional] 
 **shippingFirstName** | **String**| Shipping first name | [optional] 
 **shippingLastName** | **String**| Shipping last name | [optional] 
 **shippingCompany** | **String**| Shipping company | [optional] 
 **shippingCity** | **String**| Shipping city | [optional] 
 **shippingState** | **String**| Shipping state | [optional] 
 **shippingPostalCode** | **String**| Shipping postal code | [optional] 
 **shippingCountryCode** | **String**| Shipping country code | [optional] 
 **shippingDayPhone** | **String**| Shipping day phone | [optional] 
 **shippingEveningPhone** | **String**| Shipping evening phone | [optional] 
 **pricingTierOid** | **Integer**| Pricing tier oid | [optional] 
 **pricingTierName** | **String**| Pricing tier name | [optional] 
 **limit** | **Integer**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **offset** | **Integer**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insertCustomer"></a>
# **insertCustomer**
> CustomerResponse insertCustomer(customer, opts)

Insert a customer

Insert a customer on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CustomerApi();

var customer = new UltraCartRestApiV2.Customer(); // Customer | Customer to insert

var opts = { 
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.insertCustomer(customer, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)| Customer to insert | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> CustomerResponse updateCustomer(customer, customerProfileOid, opts)

Update a customer

Update a customer on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CustomerApi();

var customer = new UltraCartRestApiV2.Customer(); // Customer | Customer to update

var customerProfileOid = 56; // Integer | The customer_profile_oid to update.

var opts = { 
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomer(customer, customerProfileOid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)| Customer to update | 
 **customerProfileOid** | **Integer**| The customer_profile_oid to update. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

