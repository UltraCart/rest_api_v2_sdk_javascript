# UltraCartRestApiV2.CouponApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCoupon**](CouponApi.md#deleteCoupon) | **DELETE** /coupon/coupons/{coupon_oid} | Delete a coupon
[**generateCouponCodes**](CouponApi.md#generateCouponCodes) | **POST** /coupon/coupons/{coupon_oid}/generate_codes | Generates one time codes for a coupon
[**generateOneTimeCodesByMerchantCode**](CouponApi.md#generateOneTimeCodesByMerchantCode) | **POST** /coupon/coupons/merchant_code/{merchant_code}/generate_codes | Generates one time codes by merchant code
[**getCoupon**](CouponApi.md#getCoupon) | **GET** /coupon/coupons/{coupon_oid} | Retrieve a coupon
[**getCouponByMerchantCode**](CouponApi.md#getCouponByMerchantCode) | **GET** /coupon/coupons/merchant_code/{merchant_code} | Retrieve a coupon by merchant code
[**getCoupons**](CouponApi.md#getCoupons) | **GET** /coupon/coupons | Retrieve coupons
[**getCouponsByQuery**](CouponApi.md#getCouponsByQuery) | **GET** /coupon/coupons/query | Retrieve coupons by query
[**getEditorValues**](CouponApi.md#getEditorValues) | **GET** /coupon/editor_values | Retrieve values needed for a coupon editor
[**insertCoupon**](CouponApi.md#insertCoupon) | **POST** /coupon/coupons | Insert a coupon
[**updateCoupon**](CouponApi.md#updateCoupon) | **PUT** /coupon/coupons/{coupon_oid} | Update a coupon


<a name="deleteCoupon"></a>
# **deleteCoupon**
> CouponResponse deleteCoupon(couponOid)

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

var couponOid = 56; // Number | The coupon_oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCoupon(couponOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponOid** | **Number**| The coupon_oid to delete. | 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateCouponCodes"></a>
# **generateCouponCodes**
> CouponCodesResponse generateCouponCodes(couponOid, couponCodesRequest)

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

var couponOid = 56; // Number | The coupon oid to generate codes.

var couponCodesRequest = new UltraCartRestApiV2.CouponCodesRequest(); // CouponCodesRequest | Coupon code generation parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateCouponCodes(couponOid, couponCodesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponOid** | **Number**| The coupon oid to generate codes. | 
 **couponCodesRequest** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="generateOneTimeCodesByMerchantCode"></a>
# **generateOneTimeCodesByMerchantCode**
> CouponCodesResponse generateOneTimeCodesByMerchantCode(merchantCode, couponCodesRequest)

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

var merchantCode = "merchantCode_example"; // String | The merchant code to generate one time codes.

var couponCodesRequest = new UltraCartRestApiV2.CouponCodesRequest(); // CouponCodesRequest | Coupon code generation parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateOneTimeCodesByMerchantCode(merchantCode, couponCodesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantCode** | **String**| The merchant code to generate one time codes. | 
 **couponCodesRequest** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="getCoupon"></a>
# **getCoupon**
> CouponResponse getCoupon(couponOid, opts)

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

var couponOid = 56; // Number | The coupon oid to retrieve.

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
apiInstance.getCoupon(couponOid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponOid** | **Number**| The coupon oid to retrieve. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponByMerchantCode"></a>
# **getCouponByMerchantCode**
> CouponResponse getCouponByMerchantCode(merchantCode, opts)

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

var merchantCode = "merchantCode_example"; // String | The coupon merchant code to retrieve.

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
apiInstance.getCouponByMerchantCode(merchantCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantCode** | **String**| The coupon merchant code to retrieve. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

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
  'merchantCode': "merchantCode_example", // String | Merchant code
  'description': "description_example", // String | Description
  'couponType': "couponType_example", // String | Coupon type
  'startDateBegin': "startDateBegin_example", // String | Start date begin
  'startDateEnd': "startDateEnd_example", // String | Start date end
  'expirationDateBegin': "expirationDateBegin_example", // String | Expiration date begin
  'expirationDateEnd': "expirationDateEnd_example", // String | Expiration date end
  'affiliateOid': 56, // Number | Affiliate oid
  'excludeExpired': true, // Boolean | Exclude expired
  'limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  'offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  'sort': "sort_example", // String | The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
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
 **merchantCode** | **String**| Merchant code | [optional] 
 **description** | **String**| Description | [optional] 
 **couponType** | **String**| Coupon type | [optional] 
 **startDateBegin** | **String**| Start date begin | [optional] 
 **startDateEnd** | **String**| Start date end | [optional] 
 **expirationDateBegin** | **String**| Expiration date begin | [optional] 
 **expirationDateEnd** | **String**| Expiration date end | [optional] 
 **affiliateOid** | **Number**| Affiliate oid | [optional] 
 **excludeExpired** | **Boolean**| Exclude expired | [optional] 
 **limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByQuery"></a>
# **getCouponsByQuery**
> CouponsResponse getCouponsByQuery(couponQuery, opts)

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

var couponQuery = new UltraCartRestApiV2.CouponQuery(); // CouponQuery | Coupon query

var opts = { 
  'limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  'offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  'sort': "sort_example", // String | The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCouponsByQuery(couponQuery, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponQuery** | [**CouponQuery**](CouponQuery.md)| Coupon query | 
 **limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

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
  'expand': "expand_example" // String | The object expansion to perform on the result.  See documentation for examples
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
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="updateCoupon"></a>
# **updateCoupon**
> CouponResponse updateCoupon(coupon, couponOid, opts)

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

var couponOid = 56; // Number | The coupon_oid to update.

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
apiInstance.updateCoupon(coupon, couponOid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | [**Coupon**](Coupon.md)| Coupon to update | 
 **couponOid** | **Number**| The coupon_oid to update. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

