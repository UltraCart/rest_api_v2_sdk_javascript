# UltraCartRestApiV2.CheckoutApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cityState**](CheckoutApi.md#cityState) | **POST** /checkout/city_state | City/State for Zip
[**finalizeOrder**](CheckoutApi.md#finalizeOrder) | **POST** /checkout/cart/finalizeOrder | Finalize Order
[**getAffirmCheckout**](CheckoutApi.md#getAffirmCheckout) | **GET** /checkout/cart/{cart_id}/affirmCheckout | Get affirm checkout (by cart id)
[**getAllowedCountries**](CheckoutApi.md#getAllowedCountries) | **POST** /checkout/allowedCountries | Allowed countries
[**getCart**](CheckoutApi.md#getCart) | **GET** /checkout/cart | Get cart
[**getCartByCartId**](CheckoutApi.md#getCartByCartId) | **GET** /checkout/cart/{cart_id} | Get cart (by cart id)
[**getCartByReturnCode**](CheckoutApi.md#getCartByReturnCode) | **GET** /checkout/return/{return_code} | Get cart (by return code)
[**getCartByReturnToken**](CheckoutApi.md#getCartByReturnToken) | **GET** /checkout/return_token | Get cart (by return token)
[**getStateProvincesForCountry**](CheckoutApi.md#getStateProvincesForCountry) | **POST** /checkout/stateProvincesForCountry/{country_code} | Get state/province list for a country code
[**handoffCart**](CheckoutApi.md#handoffCart) | **POST** /checkout/cart/handoff | Handoff cart
[**login**](CheckoutApi.md#login) | **POST** /checkout/cart/profile/login | Profile login
[**logout**](CheckoutApi.md#logout) | **POST** /checkout/cart/profile/logout | Profile logout
[**register**](CheckoutApi.md#register) | **POST** /checkout/cart/profile/register | Profile registration
[**registerAffiliateClick**](CheckoutApi.md#registerAffiliateClick) | **POST** /checkout/affiliateClick/register | Register affiliate click
[**relatedItemsForCart**](CheckoutApi.md#relatedItemsForCart) | **POST** /checkout/related_items | Related items
[**relatedItemsForItem**](CheckoutApi.md#relatedItemsForItem) | **POST** /checkout/relatedItems/{item_id} | Related items (specific item)
[**setupBrowserKey**](CheckoutApi.md#setupBrowserKey) | **PUT** /checkout/browser_key | Setup Browser Application
[**updateCart**](CheckoutApi.md#updateCart) | **PUT** /checkout/cart | Update cart
[**validateCart**](CheckoutApi.md#validateCart) | **POST** /checkout/cart/validate | Validate


<a name="cityState"></a>
# **cityState**
> CityStateZip cityState(cart)

City/State for Zip

Look up the city and state for the shipping zip code.  Useful for building an auto complete for parts of the shipping address 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart = new UltraCartRestApiV2.Cart(); // Cart | Cart


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cityState(cart, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart** | [**Cart**](Cart.md)| Cart | 

### Return type

[**CityStateZip**](CityStateZip.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="finalizeOrder"></a>
# **finalizeOrder**
> CartFinalizeOrderResponse finalizeOrder(finalize_request)

Finalize Order

Finalize the cart into an order.  This method can not be called with browser key authentication.  It is ONLY meant for server side code to call. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var finalize_request = new UltraCartRestApiV2.CartFinalizeOrderRequest(); // CartFinalizeOrderRequest | Finalize request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.finalizeOrder(finalize_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finalize_request** | [**CartFinalizeOrderRequest**](CartFinalizeOrderRequest.md)| Finalize request | 

### Return type

[**CartFinalizeOrderResponse**](CartFinalizeOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAffirmCheckout"></a>
# **getAffirmCheckout**
> CartAffirmCheckoutResponse getAffirmCheckout(cart_id)

Get affirm checkout (by cart id)

Get a Affirm checkout object for the specified cart_id parameter. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart_id = "cart_id_example"; // String | Cart ID to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAffirmCheckout(cart_id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart_id** | **String**| Cart ID to retrieve | 

### Return type

[**CartAffirmCheckoutResponse**](CartAffirmCheckoutResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllowedCountries"></a>
# **getAllowedCountries**
> CheckoutAllowedCountriesResponse getAllowedCountries()

Allowed countries

Lookup the allowed countries for this merchant id 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllowedCountries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CheckoutAllowedCountriesResponse**](CheckoutAllowedCountriesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCart"></a>
# **getCart**
> CartResponse getCart(opts)

Get cart

If the cookie is set on the browser making the request then it will return their active cart.  Otherwise it will create a new cart. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


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
apiInstance.getCart(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartByCartId"></a>
# **getCartByCartId**
> CartResponse getCartByCartId(cart_id, opts)

Get cart (by cart id)

Get a cart specified by the cart_id parameter. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart_id = "cart_id_example"; // String | Cart ID to retrieve

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
apiInstance.getCartByCartId(cart_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart_id** | **String**| Cart ID to retrieve | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartByReturnCode"></a>
# **getCartByReturnCode**
> CartResponse getCartByReturnCode(return_code, opts)

Get cart (by return code)

Get a cart specified by the return code parameter. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var return_code = "return_code_example"; // String | Return code to lookup cart ID by

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
apiInstance.getCartByReturnCode(return_code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **return_code** | **String**| Return code to lookup cart ID by | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartByReturnToken"></a>
# **getCartByReturnToken**
> CartResponse getCartByReturnToken(opts)

Get cart (by return token)

Get a cart specified by the encrypted return token parameter. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var opts = { 
  'return_token': "return_token_example", // String | Return token provided by StoreFront Communications
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCartByReturnToken(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **return_token** | **String**| Return token provided by StoreFront Communications | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStateProvincesForCountry"></a>
# **getStateProvincesForCountry**
> CheckoutStateProvinceResponse getStateProvincesForCountry(country_code)

Get state/province list for a country code

Lookup a state/province list for a given country code 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var country_code = "country_code_example"; // String | Two letter ISO country code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStateProvincesForCountry(country_code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **String**| Two letter ISO country code | 

### Return type

[**CheckoutStateProvinceResponse**](CheckoutStateProvinceResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="handoffCart"></a>
# **handoffCart**
> CheckoutHandoffResponse handoffCart(handoff_request, opts)

Handoff cart

Handoff the browser to UltraCart for view cart on StoreFront, transfer to PayPal, transfer to Affirm, transfer to Sezzle or finalization of the order (including upsell processing). 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var handoff_request = new UltraCartRestApiV2.CheckoutHandoffRequest(); // CheckoutHandoffRequest | Handoff request

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
apiInstance.handoffCart(handoff_request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **handoff_request** | [**CheckoutHandoffRequest**](CheckoutHandoffRequest.md)| Handoff request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CheckoutHandoffResponse**](CheckoutHandoffResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> CartProfileLoginResponse login(login_request, opts)

Profile login

Login in to the customer profile specified by cart.billing.email and password 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var login_request = new UltraCartRestApiV2.CartProfileLoginRequest(); // CartProfileLoginRequest | Login request

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
apiInstance.login(login_request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_request** | [**CartProfileLoginRequest**](CartProfileLoginRequest.md)| Login request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartProfileLoginResponse**](CartProfileLoginResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> CartResponse logout(cart, opts)

Profile logout

Log the cart out of the current profile.  No error will occur if they are not logged in. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart = new UltraCartRestApiV2.Cart(); // Cart | Cart

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
apiInstance.logout(cart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart** | [**Cart**](Cart.md)| Cart | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="register"></a>
# **register**
> CartProfileRegisterResponse register(register_request, opts)

Profile registration

Register a new customer profile.  Requires the cart.billing object to be populated along with the password. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var register_request = new UltraCartRestApiV2.CartProfileRegisterRequest(); // CartProfileRegisterRequest | Register request

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
apiInstance.register(register_request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_request** | [**CartProfileRegisterRequest**](CartProfileRegisterRequest.md)| Register request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartProfileRegisterResponse**](CartProfileRegisterResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerAffiliateClick"></a>
# **registerAffiliateClick**
> RegisterAffiliateClickResponse registerAffiliateClick(register_affiliate_click_request, opts)

Register affiliate click

Register an affiliate click.  Used by custom checkouts that are completely API based and do not perform checkout handoff. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var register_affiliate_click_request = new UltraCartRestApiV2.RegisterAffiliateClickRequest(); // RegisterAffiliateClickRequest | Register affiliate click request

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
apiInstance.registerAffiliateClick(register_affiliate_click_request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_affiliate_click_request** | [**RegisterAffiliateClickRequest**](RegisterAffiliateClickRequest.md)| Register affiliate click request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**RegisterAffiliateClickResponse**](RegisterAffiliateClickResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="relatedItemsForCart"></a>
# **relatedItemsForCart**
> ItemsResponse relatedItemsForCart(cart, opts)

Related items

Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart = new UltraCartRestApiV2.Cart(); // Cart | Cart

var opts = { 
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See item resource documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.relatedItemsForCart(cart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart** | [**Cart**](Cart.md)| Cart | 
 **_expand** | **String**| The object expansion to perform on the result.  See item resource documentation for examples | [optional] 

### Return type

[**ItemsResponse**](ItemsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="relatedItemsForItem"></a>
# **relatedItemsForItem**
> ItemsResponse relatedItemsForItem(item_id, cart, opts)

Related items (specific item)

Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var item_id = "item_id_example"; // String | Item ID to retrieve related items for

var cart = new UltraCartRestApiV2.Cart(); // Cart | Cart

var opts = { 
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See item resource documentation for examples
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.relatedItemsForItem(item_id, cart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **String**| Item ID to retrieve related items for | 
 **cart** | [**Cart**](Cart.md)| Cart | 
 **_expand** | **String**| The object expansion to perform on the result.  See item resource documentation for examples | [optional] 

### Return type

[**ItemsResponse**](ItemsResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setupBrowserKey"></a>
# **setupBrowserKey**
> CheckoutSetupBrowserKeyResponse setupBrowserKey(browser_key_request)

Setup Browser Application

Setup a browser key authenticated application with checkout permissions.  This REST call must be made with an authentication scheme that is not browser key.  The new application will be linked to the application that makes this call.  If this application is disabled / deleted, then so will the application setup by this call.  The purpose of this call is to allow an OAuth application, such as the Wordpress plugin, to setup the proper browser based authentication for the REST checkout API to use. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var browser_key_request = new UltraCartRestApiV2.CheckoutSetupBrowserKeyRequest(); // CheckoutSetupBrowserKeyRequest | Setup browser key request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setupBrowserKey(browser_key_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **browser_key_request** | [**CheckoutSetupBrowserKeyRequest**](CheckoutSetupBrowserKeyRequest.md)| Setup browser key request | 

### Return type

[**CheckoutSetupBrowserKeyResponse**](CheckoutSetupBrowserKeyResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCart"></a>
# **updateCart**
> CartResponse updateCart(cart, opts)

Update cart

Update the cart. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var cart = new UltraCartRestApiV2.Cart(); // Cart | Cart

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
apiInstance.updateCart(cart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart** | [**Cart**](Cart.md)| Cart | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartResponse**](CartResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateCart"></a>
# **validateCart**
> CartValidationResponse validateCart(validation_request, opts)

Validate

Validate the cart for errors.  Specific checks can be passed and multiple validations can occur throughout your checkout flow. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.CheckoutApi();


var validation_request = new UltraCartRestApiV2.CartValidationRequest(); // CartValidationRequest | Validation request

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
apiInstance.validateCart(validation_request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_request** | [**CartValidationRequest**](CartValidationRequest.md)| Validation request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CartValidationResponse**](CartValidationResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

