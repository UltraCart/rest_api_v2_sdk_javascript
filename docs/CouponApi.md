# UltraCartRestApiV2.CouponApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCoupon**](CouponApi.md#deleteCoupon) | **DELETE** /coupon/coupons/{coupon_oid} | Delete a coupon
[**deleteCouponsByCode**](CouponApi.md#deleteCouponsByCode) | **DELETE** /coupon/coupons/by_code | Deletes multiple coupons
[**deleteCouponsByOid**](CouponApi.md#deleteCouponsByOid) | **DELETE** /coupon/coupons/by_oid | Deletes multiple coupons
[**generateCouponCodes**](CouponApi.md#generateCouponCodes) | **POST** /coupon/coupons/{coupon_oid}/generate_codes | Generates one time codes for a coupon
[**generateOneTimeCodesByMerchantCode**](CouponApi.md#generateOneTimeCodesByMerchantCode) | **POST** /coupon/coupons/merchant_code/{merchant_code}/generate_codes | Generates one time codes by merchant code
[**getAutoApply**](CouponApi.md#getAutoApply) | **GET** /coupon/auto_apply | Retrieve auto apply rules and conditions
[**getCoupon**](CouponApi.md#getCoupon) | **GET** /coupon/coupons/{coupon_oid} | Retrieve a coupon
[**getCouponByMerchantCode**](CouponApi.md#getCouponByMerchantCode) | **GET** /coupon/coupons/merchant_code/{merchant_code} | Retrieve a coupon by merchant code
[**getCoupons**](CouponApi.md#getCoupons) | **GET** /coupon/coupons | Retrieve coupons
[**getCouponsByQuery**](CouponApi.md#getCouponsByQuery) | **GET** /coupon/coupons/query | Retrieve coupons by query
[**getEditorValues**](CouponApi.md#getEditorValues) | **GET** /coupon/editor_values | Retrieve values needed for a coupon editor
[**insertCoupon**](CouponApi.md#insertCoupon) | **POST** /coupon/coupons | Insert a coupon
[**searchItems**](CouponApi.md#searchItems) | **GET** /coupon/searchItems | Searches for items to display within a coupon editor and assign to coupons
[**updateAutoApply**](CouponApi.md#updateAutoApply) | **POST** /coupon/auto_apply | Update auto apply rules and conditions
[**updateCoupon**](CouponApi.md#updateCoupon) | **PUT** /coupon/coupons/{coupon_oid} | Update a coupon
[**uploadCouponCodes**](CouponApi.md#uploadCouponCodes) | **POST** /coupon/coupons/{coupon_oid}/upload_codes | Upload one-time codes for a coupon


<a name="deleteCoupon"></a>
# **deleteCoupon**
> deleteCoupon(coupon_oid)

Delete a coupon

Delete a coupon on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_oid = 56; // Number | The coupon_oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCoupon(coupon_oid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon_oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCouponsByCode"></a>
# **deleteCouponsByCode**
> deleteCouponsByCode(coupon_delete_request)

Deletes multiple coupons

Delete coupons on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_delete_request = new UltraCartRestApiV2.CouponDeletesRequest(); // CouponDeletesRequest | Coupon oids to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCouponsByCode(coupon_delete_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_delete_request** | [**CouponDeletesRequest**](CouponDeletesRequest.md)| Coupon oids to delete | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCouponsByOid"></a>
# **deleteCouponsByOid**
> deleteCouponsByOid(coupon_delete_request)

Deletes multiple coupons

Delete coupons on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_delete_request = new UltraCartRestApiV2.CouponDeletesRequest(); // CouponDeletesRequest | Coupon oids to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCouponsByOid(coupon_delete_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_delete_request** | [**CouponDeletesRequest**](CouponDeletesRequest.md)| Coupon oids to delete | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateCouponCodes"></a>
# **generateCouponCodes**
> CouponCodesResponse generateCouponCodes(coupon_oid, coupon_codes_request)

Generates one time codes for a coupon

Generate one time codes for a coupon 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_oid = 56; // Number | The coupon oid to generate codes.

var coupon_codes_request = new UltraCartRestApiV2.CouponCodesRequest(); // CouponCodesRequest | Coupon code generation parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateCouponCodes(coupon_oid, coupon_codes_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to generate codes. | 
 **coupon_codes_request** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="generateOneTimeCodesByMerchantCode"></a>
# **generateOneTimeCodesByMerchantCode**
> CouponCodesResponse generateOneTimeCodesByMerchantCode(merchant_code, coupon_codes_request)

Generates one time codes by merchant code

Generate one time codes by merchant code 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var merchant_code = "merchant_code_example"; // String | The merchant code to generate one time codes.

var coupon_codes_request = new UltraCartRestApiV2.CouponCodesRequest(); // CouponCodesRequest | Coupon code generation parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateOneTimeCodesByMerchantCode(merchant_code, coupon_codes_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| The merchant code to generate one time codes. | 
 **coupon_codes_request** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="getAutoApply"></a>
# **getAutoApply**
> CouponAutoApplyConditions getAutoApply()

Retrieve auto apply rules and conditions

Retrieve auto apply rules and conditions 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAutoApply(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CouponAutoApplyConditions**](CouponAutoApplyConditions.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCoupon"></a>
# **getCoupon**
> CouponResponse getCoupon(coupon_oid, opts)

Retrieve a coupon

Retrieves a single coupon using the specified coupon profile oid. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_oid = 56; // Number | The coupon oid to retrieve.

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
apiInstance.getCoupon(coupon_oid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponByMerchantCode"></a>
# **getCouponByMerchantCode**
> CouponResponse getCouponByMerchantCode(merchant_code, opts)

Retrieve a coupon by merchant code

Retrieves a single coupon using the specified merchant code. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var merchant_code = "merchant_code_example"; // String | The coupon merchant code to retrieve.

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
apiInstance.getCouponByMerchantCode(merchant_code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| The coupon merchant code to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCoupons"></a>
# **getCoupons**
> CouponsResponse getCoupons(opts)

Retrieve coupons

Retrieves coupons for this account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var opts = { 
  'merchant_code': "merchant_code_example", // String | Merchant code
  'description': "description_example", // String | Description
  'coupon_type': "coupon_type_example", // String | Coupon type
  'start_date_begin': "start_date_begin_example", // String | Start date begin
  'start_date_end': "start_date_end_example", // String | Start date end
  'expiration_date_begin': "expiration_date_begin_example", // String | Expiration date begin
  'expiration_date_end': "expiration_date_end_example", // String | Expiration date end
  'affiliate_oid': 56, // Number | Affiliate oid
  'exclude_expired': true, // Boolean | Exclude expired
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example", // String | The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCoupons(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| Merchant code | [optional] 
 **description** | **String**| Description | [optional] 
 **coupon_type** | **String**| Coupon type | [optional] 
 **start_date_begin** | **String**| Start date begin | [optional] 
 **start_date_end** | **String**| Start date end | [optional] 
 **expiration_date_begin** | **String**| Expiration date begin | [optional] 
 **expiration_date_end** | **String**| Expiration date end | [optional] 
 **affiliate_oid** | **Number**| Affiliate oid | [optional] 
 **exclude_expired** | **Boolean**| Exclude expired | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByQuery"></a>
# **getCouponsByQuery**
> CouponsResponse getCouponsByQuery(coupon_query, opts)

Retrieve coupons by query

Retrieves coupons from the account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_query = new UltraCartRestApiV2.CouponQuery(); // CouponQuery | Coupon query

var opts = { 
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example", // String | The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCouponsByQuery(coupon_query, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_query** | [**CouponQuery**](CouponQuery.md)| Coupon query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEditorValues"></a>
# **getEditorValues**
> CouponEditorValues getEditorValues()

Retrieve values needed for a coupon editor

Retrieve values needed for a coupon editor 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEditorValues(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CouponEditorValues**](CouponEditorValues.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insertCoupon"></a>
# **insertCoupon**
> CouponResponse insertCoupon(coupon, opts)

Insert a coupon

Insert a coupon on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon = new UltraCartRestApiV2.Coupon(); // Coupon | Coupon to insert

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
apiInstance.insertCoupon(coupon, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | [**Coupon**](Coupon.md)| Coupon to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="searchItems"></a>
# **searchItems**
> CouponItemSearchResultsResponse searchItems(opts)

Searches for items to display within a coupon editor and assign to coupons

Searches for items to display within a coupon editor and assign to coupons 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var opts = { 
  's': "s_example", // String | 
  'm': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchItems(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **s** | **String**|  | [optional] 
 **m** | **Number**|  | [optional] 

### Return type

[**CouponItemSearchResultsResponse**](CouponItemSearchResultsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAutoApply"></a>
# **updateAutoApply**
> updateAutoApply(conditions)

Update auto apply rules and conditions

Update auto apply rules and conditions 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var conditions = new UltraCartRestApiV2.CouponAutoApplyConditions(); // CouponAutoApplyConditions | Conditions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAutoApply(conditions, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conditions** | [**CouponAutoApplyConditions**](CouponAutoApplyConditions.md)| Conditions | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCoupon"></a>
# **updateCoupon**
> CouponResponse updateCoupon(coupon, coupon_oid, opts)

Update a coupon

Update a coupon on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon = new UltraCartRestApiV2.Coupon(); // Coupon | Coupon to update

var coupon_oid = 56; // Number | The coupon_oid to update.

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
apiInstance.updateCoupon(coupon, coupon_oid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | [**Coupon**](Coupon.md)| Coupon to update | 
 **coupon_oid** | **Number**| The coupon_oid to update. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="uploadCouponCodes"></a>
# **uploadCouponCodes**
> UploadCouponCodesResponse uploadCouponCodes(coupon_oid, upload_coupon_codes_request)

Upload one-time codes for a coupon

Upload one-time codes for a coupon 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.instance;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.CouponApi();

var coupon_oid = 56; // Number | The coupon oid to associate with the provided one-time codes.

var upload_coupon_codes_request = new UltraCartRestApiV2.UploadCouponCodesRequest(); // UploadCouponCodesRequest | One-time coupon codes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadCouponCodes(coupon_oid, upload_coupon_codes_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to associate with the provided one-time codes. | 
 **upload_coupon_codes_request** | [**UploadCouponCodesRequest**](UploadCouponCodesRequest.md)| One-time coupon codes | 

### Return type

[**UploadCouponCodesResponse**](UploadCouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

