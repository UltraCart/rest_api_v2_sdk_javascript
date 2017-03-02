# UltraCartRestApiV2.OrderApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderOrdersGet**](OrderApi.md#orderOrdersGet) | **GET** /order/orders | Retrieve orders
[**orderOrdersOrderIdCancelPost**](OrderApi.md#orderOrdersOrderIdCancelPost) | **POST** /order/orders/{order_id}/cancel | Cancel an order
[**orderOrdersOrderIdDelete**](OrderApi.md#orderOrdersOrderIdDelete) | **DELETE** /order/orders/{order_id} | Delete an order
[**orderOrdersOrderIdGet**](OrderApi.md#orderOrdersOrderIdGet) | **GET** /order/orders/{order_id} | Retrieve an order
[**orderOrdersOrderIdPut**](OrderApi.md#orderOrdersOrderIdPut) | **PUT** /order/orders/{order_id} | Update an order
[**orderOrdersOrderIdResendReceiptPost**](OrderApi.md#orderOrdersOrderIdResendReceiptPost) | **POST** /order/orders/{order_id}/resend_receipt | Resend receipt
[**orderOrdersOrderIdResendShipmentConfirmationPost**](OrderApi.md#orderOrdersOrderIdResendShipmentConfirmationPost) | **POST** /order/orders/{order_id}/resend_shipment_confirmation | Resend shipment confirmation


<a name="orderOrdersGet"></a>
# **orderOrdersGet**
> OrdersResponse orderOrdersGet(opts)

Retrieve orders

Retrieves a group of orders from the account.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var opts = { 
  'orderId': "orderId_example", // String | Order Id
  'paymentMethod': "paymentMethod_example", // String | Payment Method
  'company': "company_example", // String | Company
  'firstName': "firstName_example", // String | First Name
  'lastName': "lastName_example", // String | Last Name
  'city': "city_example", // String | City
  'stateRegion': "stateRegion_example", // String | State/Region
  'postalCode': "postalCode_example", // String | Postal Code
  'countryCode': "countryCode_example", // String | Country Code (ISO-3166 two letter)
  'phone': "phone_example", // String | Phone
  'email': "email_example", // String | Email
  'ccEmail': "ccEmail_example", // String | CC Email
  'total': 3.4, // Number | Total
  'screenBrandingThemeCode': "screenBrandingThemeCode_example", // String | Screen Branding Theme Code
  'storefrontHostName': "storefrontHostName_example", // String | StoreFront Host Name
  'creationDateBegin': "creationDateBegin_example", // String | Creation Date Begin
  'creationDateEnd': "creationDateEnd_example", // String | Creation Date End
  'paymentDateBegin': "paymentDateBegin_example", // String | Payment Date Begin
  'paymentDateEnd': "paymentDateEnd_example", // String | Payment Date End
  'shipmentDateBegin': "shipmentDateBegin_example", // String | Shipment Date Begin
  'shipmentDateEnd': "shipmentDateEnd_example", // String | Shipment Date End
  'rma': "rma_example", // String | RMA
  'purchaseOrderNumber': "purchaseOrderNumber_example", // String | Purchase Order Number
  'itemId': "itemId_example", // String | Item Id
  'currentStage': "currentStage_example", // String | Current Stage
  'channelPartnerCode': "channelPartnerCode_example", // String | Channel Partner Code
  'channelPartnerOrderId': "channelPartnerOrderId_example", // String | Channel Partner Order ID
  'limit': 100, // Integer | The maximum number of records to return on this one API call. (Maximum 200)
  'offset': 0, // Integer | Pagination of the record set.  Offset is a zero based index.
  'sort': "sort_example", // String | The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
  'expand': "expand_example" // String | The object expansion to perform on the result.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderOrdersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| Order Id | [optional] 
 **paymentMethod** | **String**| Payment Method | [optional] 
 **company** | **String**| Company | [optional] 
 **firstName** | **String**| First Name | [optional] 
 **lastName** | **String**| Last Name | [optional] 
 **city** | **String**| City | [optional] 
 **stateRegion** | **String**| State/Region | [optional] 
 **postalCode** | **String**| Postal Code | [optional] 
 **countryCode** | **String**| Country Code (ISO-3166 two letter) | [optional] 
 **phone** | **String**| Phone | [optional] 
 **email** | **String**| Email | [optional] 
 **ccEmail** | **String**| CC Email | [optional] 
 **total** | **Number**| Total | [optional] 
 **screenBrandingThemeCode** | **String**| Screen Branding Theme Code | [optional] 
 **storefrontHostName** | **String**| StoreFront Host Name | [optional] 
 **creationDateBegin** | **String**| Creation Date Begin | [optional] 
 **creationDateEnd** | **String**| Creation Date End | [optional] 
 **paymentDateBegin** | **String**| Payment Date Begin | [optional] 
 **paymentDateEnd** | **String**| Payment Date End | [optional] 
 **shipmentDateBegin** | **String**| Shipment Date Begin | [optional] 
 **shipmentDateEnd** | **String**| Shipment Date End | [optional] 
 **rma** | **String**| RMA | [optional] 
 **purchaseOrderNumber** | **String**| Purchase Order Number | [optional] 
 **itemId** | **String**| Item Id | [optional] 
 **currentStage** | **String**| Current Stage | [optional] 
 **channelPartnerCode** | **String**| Channel Partner Code | [optional] 
 **channelPartnerOrderId** | **String**| Channel Partner Order ID | [optional] 
 **limit** | **Integer**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **offset** | **Integer**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **sort** | **String**| The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderOrdersOrderIdCancelPost"></a>
# **orderOrdersOrderIdCancelPost**
> BaseResponse orderOrdersOrderIdCancelPost(orderId)

Cancel an order

Cancel an order on the UltraCart account.  If the success flag is false, then consult the error message for why it failed. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var orderId = "orderId_example"; // String | The order id to cancel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderOrdersOrderIdCancelPost(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id to cancel. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderOrdersOrderIdDelete"></a>
# **orderOrdersOrderIdDelete**
> orderOrdersOrderIdDelete(orderId)

Delete an order

Delete an order on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var orderId = "orderId_example"; // String | The order id to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderOrdersOrderIdDelete(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderOrdersOrderIdGet"></a>
# **orderOrdersOrderIdGet**
> OrderResponse orderOrdersOrderIdGet(orderId, opts)

Retrieve an order

Retrieves a single order using the specified order id. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var orderId = "orderId_example"; // String | The order id to retrieve.

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
apiInstance.orderOrdersOrderIdGet(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id to retrieve. | 
 **expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderOrdersOrderIdPut"></a>
# **orderOrdersOrderIdPut**
> OrderResponse orderOrdersOrderIdPut(order, orderId)

Update an order

Update a new order on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var order = new UltraCartRestApiV2.Order(); // Order | Order to update

var orderId = "orderId_example"; // String | The order id to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderOrdersOrderIdPut(order, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)| Order to update | 
 **orderId** | **String**| The order id to update. | 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json

<a name="orderOrdersOrderIdResendReceiptPost"></a>
# **orderOrdersOrderIdResendReceiptPost**
> BaseResponse orderOrdersOrderIdResendReceiptPost(orderId)

Resend receipt

Resend the receipt for an order on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var orderId = "orderId_example"; // String | The order id to resend the receipt for.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderOrdersOrderIdResendReceiptPost(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id to resend the receipt for. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderOrdersOrderIdResendShipmentConfirmationPost"></a>
# **orderOrdersOrderIdResendShipmentConfirmationPost**
> BaseResponse orderOrdersOrderIdResendShipmentConfirmationPost(orderId)

Resend shipment confirmation

Resend shipment confirmation for an order on the UltraCart account. 

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

var apiInstance = new UltraCartRestApiV2.OrderApi();

var orderId = "orderId_example"; // String | The order id to resend the shipment notification for.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderOrdersOrderIdResendShipmentConfirmationPost(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id to resend the shipment notification for. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

