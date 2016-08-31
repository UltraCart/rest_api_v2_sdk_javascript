# UltraCartRestApiV2.ItemApi

All URIs are relative to *https://localhost/rest/admin/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemItemsGet**](ItemApi.md#itemItemsGet) | **GET** /item/items | Retrieve items
[**itemItemsMerchantItemOidDelete**](ItemApi.md#itemItemsMerchantItemOidDelete) | **DELETE** /item/items/{merchant_item_oid} | Delete an item
[**itemItemsMerchantItemOidGet**](ItemApi.md#itemItemsMerchantItemOidGet) | **GET** /item/items/{merchant_item_oid} | Retrieve an item
[**itemItemsMerchantItemOidPut**](ItemApi.md#itemItemsMerchantItemOidPut) | **PUT** /item/items/{merchant_item_oid} | Update an item
[**itemItemsPost**](ItemApi.md#itemItemsPost) | **POST** /item/items | Create an item
[**itemTempMultimediaPost**](ItemApi.md#itemTempMultimediaPost) | **POST** /item/temp_multimedia | Upload an image to the temporary multimedia.


<a name="itemItemsGet"></a>
# **itemItemsGet**
> ItemsResponse itemItemsGet(opts)

Retrieve items

Retrieves a group of items from the account.  If no parameters are specified, all items will be returned. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var opts = { 
  'parentCategoryId': 56 // Integer | The parent category to retrieve items for.  Unspecified means all items on the account.  0 = root
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemItemsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentCategoryId** | **Integer**| The parent category to retrieve items for.  Unspecified means all items on the account.  0 &#x3D; root | [optional] 

### Return type

[**ItemsResponse**](ItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemItemsMerchantItemOidDelete"></a>
# **itemItemsMerchantItemOidDelete**
> itemItemsMerchantItemOidDelete(merchantItemOid)

Delete an item

Delete an item on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var merchantItemOid = 56; // Integer | The item oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.itemItemsMerchantItemOidDelete(merchantItemOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantItemOid** | **Integer**| The item oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemItemsMerchantItemOidGet"></a>
# **itemItemsMerchantItemOidGet**
> ItemResponse itemItemsMerchantItemOidGet(merchantItemOid)

Retrieve an item

Retrieves a single item using the specified item oid. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var merchantItemOid = 56; // Integer | The item oid to retrieve.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemItemsMerchantItemOidGet(merchantItemOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantItemOid** | **Integer**| The item oid to retrieve. | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemItemsMerchantItemOidPut"></a>
# **itemItemsMerchantItemOidPut**
> ItemResponse itemItemsMerchantItemOidPut(item, merchantItemOid)

Update an item

Update a new item on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var item = new UltraCartRestApiV2.Item(); // Item | Item to create

var merchantItemOid = 56; // Integer | The item oid to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemItemsMerchantItemOidPut(item, merchantItemOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)| Item to create | 
 **merchantItemOid** | **Integer**| The item oid to update. | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemItemsPost"></a>
# **itemItemsPost**
> ItemResponse itemItemsPost(item)

Create an item

Create a new item on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var item = new UltraCartRestApiV2.Item(); // Item | Item to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemItemsPost(item, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)| Item to create | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemTempMultimediaPost"></a>
# **itemTempMultimediaPost**
> TempMultimediaResponse itemTempMultimediaPost(file)

Upload an image to the temporary multimedia.

Uploads an image and returns back meta information about the image as well as the identifier needed for the item update. 

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

var apiInstance = new UltraCartRestApiV2.ItemApi();

var file = "/path/to/file.txt"; // File | File to upload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemTempMultimediaPost(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File to upload | 

### Return type

[**TempMultimediaResponse**](TempMultimediaResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

