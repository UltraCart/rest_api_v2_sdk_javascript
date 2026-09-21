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



## cityState

> CityStateZip cityState(cart)

City/State for Zip

Look up the city and state for the shipping zip code.  Useful for building an auto complete for parts of the shipping address 


### Example

```javascript
import { checkoutApi } from '../api.js';

/// <summary>
/// Takes a postal code and returns back a city and state (US Only)
/// </summary>
export class CityState {
    /// <summary>
    /// Takes a postal code and returns back a city and state (US Only)
    /// </summary>
    static async Execute() {
        // Reference Implementation: https://github.com/UltraCart/responsive_checkout
        // Takes a postal code and returns back a city and state (US Only)

        const cartId = "123456789123456789123456789123456789";  // you should have the cart id from session or cookie.
        const cart = {
            cart_id: cartId, // required
            shipping: {
                postal_code: "44233"
            }
        };

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.cityState(cart, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            console.log("City: " + apiResponse.city);
            console.log("State: " + apiResponse.state);
        } catch (error) {
            console.error("Error retrieving city and state:", error);
        }
    }
}
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


## finalizeOrder

> CartFinalizeOrderResponse finalizeOrder(finalize_request)

Finalize Order

Finalize the cart into an order.  This method can not be called with browser key authentication.  It is ONLY meant for server side code to call. 


### Example

```javascript
import { checkoutApi } from '../api.js';

export class FinalizeOrder {
    /// <summary>
    /// Finalizes an order from a cart
    /// </summary>
    static async Execute() {
        // Reference Implementation: https://github.com/UltraCart/responsive_checkout

        // Note: You probably should NOT be using this method.  Use handoffCart() instead.
        // This method is a server-side only (no browser key allowed) method for turning a cart into an order.
        // It exists for merchants who wish to provide their own upsells, but again, a warning, using this method
        // will exclude the customer checkout from a vast and powerful suite of functionality provided free by UltraCart.
        // Still, some merchants need this functionality, so here it is.  If you're unsure, you don't need it.  Use handoff.

        const expansion = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes"; //
        // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html
        /*
        affiliate                   checkout                            customer_profile
        billing                     coupons                             gift
        gift_certificate            items.attributes                   items.multimedia
        items                       items.multimedia.thumbnails         items.physical
        marketing                   payment                                settings.gift
        settings.billing.provinces  settings.shipping.deliver_on_date   settings.shipping.estimates
        settings.shipping.provinces settings.shipping.ship_on_date     settings.taxes
        settings.terms              shipping                           taxes
        summary                     upsell_after
         */

        const cartId = "123456789123456789123456789123456789"; // get the cart id from session or cookie.  beyond this sample scope.

        try {
            const cartResponse = await new Promise((resolve, reject) => {
                checkoutApi.getCartByCartId(cartId, {_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const cart = cartResponse.cart;

            // TODO - add some items, collect billing and shipping, use hosted fields to collect payment, etc.

            if (!cart) {
                throw new Error('Cart not found');
            }

            const finalizeRequest = {
                cart: cart,
                options: {} // Lots of options here. Contact support if you're unsure what you need.
            };

            const orderResponse = await new Promise((resolve, reject) => {
                checkoutApi.finalizeOrder(finalizeRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            // orderResponse.successful;
            // orderResponse.errors;
            // orderResponse.orderId;
            // orderResponse.order;

            console.log(JSON.stringify(orderResponse, null, 2));
        } catch (error) {
            console.error('Error finalizing order:', error);
        }
    }
}
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


## getAffirmCheckout

> CartAffirmCheckoutResponse getAffirmCheckout(cart_id)

Get affirm checkout (by cart id)

Get a Affirm checkout object for the specified cart_id parameter. 


### Example

```javascript
import { checkoutApi } from '../api.js';

export class GetAffirmCheckout {
    /// <summary>
    /// For a given cart id (the cart should be fully updated in UltraCart), returns back the json object
    /// needed to proceed with an Affirm checkout.
    /// </summary>
    static async Execute() {
        // Reference Implementation: https://github.com/UltraCart/responsive_checkout
        // For a given cart id (the cart should be fully updated in UltraCart), returns back the json object
        // needed to proceed with an Affirm checkout.  See https://www.affirm.com/ for details about Affirm.
        // This sample does not show the construction of the affirm checkout widgets.  See the affirm api for those examples.

        const cartId = "123456789123456789123456789123456789"; // this should be retrieved from a session or cookie

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getAffirmCheckout(cartId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (apiResponse.errors && apiResponse.errors.length > 0) {
                // TODO: display errors to customer about the failure
                apiResponse.errors.forEach(error => {
                    console.log(error);
                });
            } else {
                console.log(apiResponse.checkout_json); // this is the object to send to Affirm.
            }
        } catch (error) {
            console.error('Error retrieving Affirm checkout:', error);
        }
    }
}
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllowedCountries

> CheckoutAllowedCountriesResponse getAllowedCountries()

Allowed countries

Lookup the allowed countries for this merchant id 


### Example

```javascript
import { checkoutApi } from '../api.js';

export class GetAllowedCountries {
    /// <summary>
    /// A simple method for populating the country list boxes with all the countries this merchant has configured to accept.
    /// </summary>
    static async Execute() {
        // Reference Implementation: https://github.com/UltraCart/responsive_checkout
        // A simple method for populating the country list boxes with all the countries this merchant has configured to accept.

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getAllowedCountries(function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const allowedCountries = apiResponse.countries || [];

            allowedCountries.forEach(country => {
                console.log(JSON.stringify(country, null, 2));
            });
        } catch (error) {
            console.error('Error retrieving allowed countries:', error);
        }
    }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**CheckoutAllowedCountriesResponse**](CheckoutAllowedCountriesResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCart

> CartResponse getCart(opts)

Get cart

If the cookie is set on the browser making the request then it will return their active cart.  Otherwise it will create a new cart. 


### Example

```javascript
import { checkoutApi } from '../api.js';
import { DateTime } from 'luxon';

export class GetCart {
    /// <summary>
    /// Retrieves a cart either by creating a new one or getting an existing one by cart ID
    /// </summary>
    static async Execute() {
        // Reference Implementation: https://github.com/UltraCart/responsive_checkout

        // this example is the same for both getCart.php and getCartByCartId.php.  They work as a pair and are called
        // depending on the presence of an existing cart id or not.  For new carts, getCart() is used.  For existing
        // carts, getCartByCartId($cart_id) is used.

        const expansion = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes"; //
        // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html
        /*
        affiliate                   checkout                            customer_profile
        billing                     coupons                             gift
        gift_certificate            items.attributes                   items.multimedia
        items                       items.multimedia.thumbnails         items.physical
        marketing                   payment                                settings.gift
        settings.billing.provinces  settings.shipping.deliver_on_date   settings.shipping.estimates
        settings.shipping.provinces settings.shipping.ship_on_date     settings.taxes
        settings.terms              shipping                           taxes
        summary                     upsell_after
         */

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getCart({_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const cart = apiResponse.cart;

            if (!cart || !cart.cart_id) {
                throw new Error('No cart retrieved');
            }

            // TODO: set or re-set the cart cookie if this is part of a multi-page process. two weeks is a generous cart id time.
            // In TypeScript/browser environment, this would typically be handled using document.cookie or browser storage APIs
            this.setCookie(
                "UltraCartShoppingCartID",
                cart.cart_id,
                DateTime.now().plus({days: 14}).toJSDate()
            );

            console.log(JSON.stringify(cart, null, 2));
        } catch (error) {
            console.error('Error retrieving cart:', error);
        }
    }

    /// <summary>
    /// Sets a cookie with the given name, value, and expiration
    /// </summary>
    static setCookie(name, value, expires) {
        const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
        document.cookie = cookieValue;
    }
}
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCartByCartId

> CartResponse getCartByCartId(cart_id, opts)

Get cart (by cart id)

Get a cart specified by the cart_id parameter. 


### Example

```javascript
import { checkoutApi } from '../api.js';
import { DateTime } from 'luxon';

/**
 * Retrieves a cart either by creating a new one or getting an existing one by cart ID
 * Reference Implementation: https://github.com/UltraCart/responsive_checkout
 *
 * This example is the same for both getCart.php and getCartByCartId.php. They work as a pair and are called
 * depending on the presence of an existing cart id or not. For new carts, getCart() is used.
 * For existing carts, getCartByCartId($cart_id) is used.
 */
export async function execute() {
    // For this example, we're just getting a cart to insert some items into it.
    const expansion = "items";

    // Get from session or cookie.
    const cartId = "123456780123456780123456780123456780";

    try {
        // Perform the API call
        const apiResponse = await new Promise((resolve, reject) => {
            checkoutApi.getCartByCartId(cartId, {_expand: expansion}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const cart = apiResponse.cart;

        if (cart) {
            // TODO: set or re-set the cart cookie if this is part of a multi-page process.
            // Two weeks is a generous cart id time.

            // Note: In a browser environment, you would use document.cookie or browser-specific cookie management
            document.cookie = `UltraCartShoppingCartID=${cart.cart_id}; expires=${DateTime.now().plus({days: 14}).toHTTP()}; path=/;`;

            // Log the cart details
            console.log(JSON.stringify(cart, null, 2));
        }
    } catch (error) {
        // Error handling
        console.error('Error retrieving cart:', error);
    }
}
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCartByReturnCode

> CartResponse getCartByReturnCode(return_code, opts)

Get cart (by return code)

Get a cart specified by the return code parameter. 


### Example

```javascript
import { checkoutApi } from '../api.js';
import { DateTime } from 'luxon';

/**
 * Retrieves a cart using a return code
 * Reference Implementation: https://github.com/UltraCart/responsive_checkout
 *
 * This example returns a shopping cart given a return_code. The return_code is generated by UltraCart
 * and usually emailed to a customer. The email will provide a link to this script where you may use the
 * return_code to retrieve the customer's cart.
 *
 * Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html)
 * - affiliate                   - checkout                            - customer_profile
 * - billing                     - coupons                             - gift
 * - gift_certificate            - items.attributes                    - items.multimedia
 * - items                       - items.multimedia.thumbnails         - items.physical
 * - marketing                   - payment                             - settings.gift
 * - settings.billing.provinces  - settings.shipping.deliver_on_date   - settings.shipping.estimates
 * - settings.shipping.provinces - settings.shipping.ship_on_date      - settings.shipping.terms
 * - settings.terms              - shipping                            - taxes
 * - summary                     - upsell_after
 */
export async function execute() {
    // Expansion to include multiple cart details
    const expansion = "items,billing,shipping,coupons,checkout,payment,summary,taxes";

    // Usually retrieved from a query parameter
    const returnCode = "1234567890";

    try {
        // Retrieve cart by return code
        const apiResponse = await new Promise((resolve, reject) => {
            checkoutApi.getCartByReturnCode(returnCode, {_expand: expansion}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const cart = apiResponse.cart;

        if (cart) {
            // TODO: set or re-set the cart cookie if this is part of a multi-page process.
            // Two weeks is a generous cart id time.

            // Note: In a browser environment, you would use document.cookie or browser-specific cookie management
            document.cookie = `UltraCartShoppingCartID=${cart.cart_id}; expires=${DateTime.now().plus({ days: 14 }).toHTTP()}; path=/;`;

            // Log the cart details
            console.log(JSON.stringify(cart, null, 2));
        }
    } catch (error) {
        // Error handling
        console.error('Error retrieving cart by return code:', error);
    }
}
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCartByReturnToken

> CartResponse getCartByReturnToken(opts)

Get cart (by return token)

Get a cart specified by the encrypted return token parameter. 


### Example

```javascript
import {checkoutApi} from '../api.js';
import {DateTime} from 'luxon';

/**
 * Retrieves a cart using a return token
 * Reference Implementation: https://github.com/UltraCart/responsive_checkout
 *
 * This example returns a shopping cart given a return_token. The return token is generated by StoreFront Communications
 * and usually emailed to a customer. The link within the email will (when you configure your storefront communications)
 * provide a link to this script where you may use the token to retrieve the customer's cart.
 *
 * Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html)
 * - affiliate                   - checkout                            - customer_profile
 * - billing                     - coupons                             - gift
 * - gift_certificate            - items.attributes                    - items.multimedia
 * - items                       - items.multimedia.thumbnails         - items.physical
 * - marketing                   - payment                             - settings.gift
 * - settings.billing.provinces  - settings.shipping.deliver_on_date   - settings.shipping.estimates
 * - settings.shipping.provinces - settings.shipping.ship_on_date      - settings.shipping.terms
 * - settings.terms              - shipping                            - taxes
 * - summary                     - upsell_after
 */
export async function execute() {
    // Expansion to include multiple cart details
    const expansion = "items,billing,shipping,coupons,checkout,payment,summary,taxes";

    // Usually retrieved from a query parameter
    const cartToken = "1234567890";

    try {
        // Retrieve cart by return token
        const apiResponse = await new Promise((resolve, reject) => {
            checkoutApi.getCartByReturnToken(cartToken, {_expand: expansion}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const cart = apiResponse.cart;

        if (cart) {
            // TODO: set or re-set the cart cookie if this is part of a multi-page process.
            // Two weeks is a generous cart id time.

            // Note: In a browser environment, you would use document.cookie or browser-specific cookie management
            document.cookie = `UltraCartShoppingCartID=${cart.cart_id}; expires=${DateTime.now().plus({days: 14}).toHTTP()}; path=/;`;

            // Log the cart details
            console.log(JSON.stringify(cart, null, 2));
        }
    } catch (error) {
        // Error handling
        console.error('Error retrieving cart by return token:', error);
    }
}
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getStateProvincesForCountry

> CheckoutStateProvinceResponse getStateProvincesForCountry(country_code)

Get state/province list for a country code

Lookup a state/province list for a given country code 


### Example

```javascript
import {checkoutApi} from '../api.js';

/// <summary>
/// A simple method for populating the state_region list boxes with all the states/regions allowed for a country code.
/// </summary>
export class GetStateProvincesForCountry {
    /// <summary>
    /// A simple method for populating the state_region list boxes with all the states/regions allowed for a country code.
    /// Reference Implementation: https://github.com/UltraCart/responsive_checkout
    /// </summary>
    static async execute() {
        // Use the API key from your configuration (replace with actual method of getting API key)
        const countryCode = "US";

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getStateProvincesForCountry(countryCode, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const provinces = apiResponse.stateProvinces || [];

            provinces.forEach(province => {
                console.log(JSON.stringify(province, null, 2));
            });
        } catch (error) {
            console.error("Error fetching state provinces:", error);
        }
    }
}

// Optional: If you want to call the method
// GetStateProvincesForCountry.execute().catch(console.error);
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

- **Content-Type**: Not defined
- **Accept**: application/json


## handoffCart

> CheckoutHandoffResponse handoffCart(handoff_request, opts)

Handoff cart

Handoff the browser to UltraCart for view cart on StoreFront, transfer to PayPal, transfer to Affirm, transfer to Sezzle or finalization of the order (including upsell processing). 


### Example

```javascript
import { checkoutApi } from '../api.js';

/// <summary>
/// Hands off a cart to the UltraCart engine for further processing
/// </summary>
export class HandoffCart {
    /// <summary>
    /// Hands off a cart to the UltraCart engine for further processing
    /// Reference Implementation: https://github.com/UltraCart/responsive_checkout
    ///
    /// This example uses the getCart code as a starting point, because we must get a cart to handoff a cart.
    /// Here, we are handing off the cart to the ultracart engine with an operation of 'view', meaning that we
    /// simply added some items to the cart and wish for UltraCart to gather the remaining customer information
    /// as part of a normal checkout operation.
    ///
    /// Valid operations are: "view", "checkout", "paypal", "paypalcredit", "affirm", "sezzle"
    /// Besides "view", the other operations are finalizers.
    /// "checkout": finalize the transaction using a customer's personal credit card (traditional checkout)
    /// "paypal": finalize the transaction by sending the customer to PayPal
    /// </summary>
    static async execute() {
        try {
            // expand parameter to include items in the cart
            const expand = "items";

            // Get cart ID from cookie (commented out in original code)
            // In a real application, you'd replace this with your actual cookie/session management
            const cartId = undefined;

            // Retrieve cart - either by existing cart ID or create a new one
            let cart;
            let apiResponse;

            if (!cartId) {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCart({_expand:expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
            } else {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCartByCartId(cartId, {_expand:expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
            }
            cart = apiResponse.cart;

            // Prepare handoff request
            const handoffRequest = {
                cart: cart,
                operation: "View",
                error_return_url: "/some/page/on/this/php/server/that/can/handle/errors/if/ultracart/encounters/an/issue/with/this/cart.php",
                error_parameter_name: "uc_error", // name this whatever the script supplied in ->setErrorReturnUrl() will check for in the $_GET object.
                secure_host_name: "mystorefront.com" // set to desired storefront. some merchants have multiple storefronts.
            };

            // Perform cart handoff
            const handoffResponse = await new Promise((resolve, reject) => {
                checkoutApi.handoffCart(handoffRequest, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Handle response
            if (handoffResponse.errors && handoffResponse.errors.length > 0) {
                // TODO: handle errors that might happen before handoff and manage those
                console.error("Errors during cart handoff:", handoffResponse.errors);
            } else {
                const redirectUrl = handoffResponse.redirect_to_url;
                console.log(redirectUrl);
                // In a web application, you would typically redirect the user
                // This could be done via window.location.href or a routing mechanism
                // window.location.href = redirectUrl;
            }
        } catch (error) {
            console.error("Error during cart handoff:", error);
        }
    }
}

// Optional: If you want to call the method
// HandoffCart.execute().catch(console.error);
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


## login

> CartProfileLoginResponse login(login_request, opts)

Profile login

Login in to the customer profile specified by cart.billing.email and password 


### Example

```javascript
import {checkoutApi} from '../api.js';

/// <summary>
/// Handles user login in the UltraCart system
/// </summary>
export class Login {
    /// <summary>
    /// Logs a user into the UltraCart system
    /// Reference Implementation: https://github.com/UltraCart/responsive_checkout
    ///
    /// This example assumes you already have a shopping cart object created.
    /// For new carts, getCart() is used. For existing carts, getCartByCartId(cart_id) is used.
    ///
    /// Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html)
    /// </summary>
    static async execute() {
        try {
            // Note: customer_profile is a required expand for login to work properly
            const expand = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes";

            // Create a new cart
            let cart = await new Promise((resolve, reject) => {
                checkoutApi.getCart({_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            }).then(data => data.cart);

            if (!cart) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return {success: false};
            }

            // Collect these from user input in a real application
            const email = "test@ultracart.com";
            const password = "ABC123";

            // Prepare billing information
            cart.billing = {
                email: email
            };

            // Prepare login request
            const loginRequest = {
                cart: cart, // will look for billing.email
                password: password
            };

            // Perform login
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.login(loginRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Update cart with response
            cart = apiResponse.cart;

            // Check for errors
            if (apiResponse.errors && apiResponse.errors.length > 0) {
                console.error("Login failed:", apiResponse.errors);
                return {success: false};
            }

            // Successful login
            return {
                success: true,
                cart: cart
            };

        } catch (error) {
            console.error("Error during login process:", error);
            return {success: false};
        }
    }
}

// Optional: If you want to call the method
// Login.execute().then(result => {
//     if (result.success) {
//         console.log("Login successful", result.cart);
//     } else {
//         console.log("Login failed");
//     }
// });
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


## logout

> CartResponse logout(cart, opts)

Profile logout

Log the cart out of the current profile.  No error will occur if they are not logged in. 


### Example

```javascript
import { checkoutApi } from '../api.js';

/// <summary>
/// Handles user logout in the UltraCart system
/// </summary>
export class Logout {
    /// <summary>
    /// Logs a user OUT of the UltraCart system
    /// Reference Implementation: https://github.com/UltraCart/responsive_checkout
    ///
    /// This example assumes the shopping cart has already had a successful login.
    /// See login SDK sample for logging in help.
    /// For new carts, getCart() is used. For existing carts, getCartByCartId(cart_id) is used.
    ///
    /// Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html)
    /// </summary>
    static async execute() {
        try {
            // Note: customer_profile is a required expand for login to work properly
            const expand = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes";

            // Create a new cart
            let cart = await new Promise((resolve, reject) => {
                checkoutApi.getCart({_expand:expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            }).then(data => data.cart);

            if (!cart) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return {success: false};
            }

            // Collect these from user input in a real application
            const email = "test@test.com";
            const password = "ABC123";

            // Prepare billing information
            cart.billing = {
                email: email
            };

            // Prepare login request
            const loginRequest = {
                cart: cart, // will look for billing.email
                password: password
            };

            // Perform login
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.login(loginRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            cart = apiResponse.cart;

            // Check for login errors
            if (apiResponse.errors && apiResponse.errors.length > 0) {
                console.error("Login failed:", apiResponse.errors);
                return { success: false };
            }
            if (!cart) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return {success: false};
            }

            // Perform logout
            await new Promise((resolve, reject) => {
                checkoutApi.logout(cart, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            return { success: true };

        } catch (error) {
            console.error("Error during logout process:", error);
            return { success: false };
        }
    }
}

// Optional: If you want to call the method
// Logout.execute().then(result => {
//     if (result.success) {
//         console.log("Logout successful");
//     } else {
//         console.log("Logout failed");
//     }
// });
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


## register

> CartProfileRegisterResponse register(register_request, opts)

Profile registration

Register a new customer profile.  Requires the cart.billing object to be populated along with the password. 


### Example

```javascript
import {checkoutApi} from '../api.js';

export class Register {
    /**
     * Registers a user in your merchant system. This will create a customer profile.
     * For new carts, getCart() is used. For existing carts, getCartByCartId(cart_id) is used.
     *
     * Reference Implementation: https://github.com/UltraCart/responsive_checkout
     */
    static async execute() {
        try {
            // Note: customer_profile is a required expansion for login to work properly
            // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html
            const expand = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes";

            // create a new cart (change this to an existing if you have one)
            const cartResponse = await new Promise((resolve, reject) => {
                checkoutApi.getCart({_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const cart = cartResponse.cart;

            if (!cart) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return;
            }

            const email = "test@test.com"; // collect this from user
            const password = "ABC123"; // collect this from user

            cart.billing = {
                email: email // this is the username
            };

            const registerRequest = {
                cart: cart, // will look for billing.email
                password: password
            };

            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.register(registerRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const updatedCart = apiResponse.cart; // Important! Get the cart from the response

            if (apiResponse.errors && apiResponse.errors.length > 0) {
                apiResponse.errors.forEach(error => {
                    console.log(error);
                });
            } else {
                console.log("Successfully registered new customer profile!");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }
}
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


## registerAffiliateClick

> RegisterAffiliateClickResponse registerAffiliateClick(register_affiliate_click_request, opts)

Register affiliate click

Register an affiliate click.  Used by custom checkouts that are completely API based and do not perform checkout handoff. 


### Example

```javascript
import {checkoutApi} from '../api.js';

export class RegisterAffiliateClick {
    /**
     * Records an affiliate click.
     *
     * Reference Implementation: https://github.com/UltraCart/responsive_checkout
     */
    static async execute() {
        try {
            // Note: In TypeScript, you'll need to get these values from your request context
            // This is a simplified example - implement proper request handling in your application
            const ipAddress = "127.0.0.1"; // Replace with actual implementation to get IP
            const userAgent = ""; // Replace with actual implementation to get user agent
            const refererUrl = ""; // Replace with actual implementation to get referer URL

            const clickRequest = {
                ip_address: ipAddress,
                user_agent: userAgent,
                referrer_url: refererUrl,
                affid: 123456789, // you should know this from your UltraCart affiliate system
                subid: "TODO:SupplyThisValue",
                // landingPageUrl: undefined,  // if you have landing page url
            };

            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.registerAffiliateClick(clickRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log(JSON.stringify(apiResponse, null, 2));
        } catch (error) {
            console.error("Error registering affiliate click:", error);
        }
    }
}
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


## relatedItemsForCart

> ItemsResponse relatedItemsForCart(cart, opts)

Related items

Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 


### Example

```javascript
import {checkoutApi} from '../api.js';

export class RelatedItemsForCart {
    /**
     * Retrieves items related to the items within the cart.
     * Item relations are configured in the UltraCart backend.
     *
     * Reference Implementation: https://github.com/UltraCart/responsive_checkout
     *
     * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377171/Related+Items
     *
     * Note: The returned items have a fixed expansion (only so many item properties are returned).
     * Item expansion includes:
     * content, content.assignments, content.attributes, content.multimedia,
     * content.multimedia.thumbnails, options, pricing, and pricing.tiers
     */
    static async execute() {
        try {
            // Expansion options for the cart
            // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html
            /*
            affiliate                   checkout                            customer_profile
            billing                     coupons                             gift
            gift_certificate            items.attributes                   items.multimedia
            items                       items.multimedia.thumbnails         items.physical
            marketing                   payment                                settings.gift
            settings.billing.provinces  settings.shipping.deliver_on_date   settings.shipping.estimates
            settings.shipping.provinces settings.shipping.ship_on_date     settings.taxes
            settings.terms              shipping                           taxes
            summary                     upsell_after
            */
            const expand = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes";

            // In TypeScript web application, you'd get the cookie from your request context
            let cartId;
            // Example of how you might get the cookie
            // cartId = request.cookies["UltraCartShoppingCartID"];

            let cart;
            let apiResponse;

            if (!cartId) {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCart({_expand:expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
                cart = apiResponse.cart;
            } else {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCartByCartId(
                        cartId,
                        {_expand:expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
                cart = apiResponse.cart;
            }

            if (cart === undefined) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return;
            }

            // Add some items to the cart and update
            cart.items = [{
                item_id: "ITEM_ABC",
                quantity: 1
            }];

            // Update the cart and assign it back to our variable
            const updateResponse = await new Promise((resolve, reject) => {
                checkoutApi.updateCart(cart, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            cart = updateResponse.cart;

            if (cart === undefined) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return;
            }

            // Get related items for the cart
            const apiResponse2 = await new Promise((resolve, reject) => {
                checkoutApi.relatedItemsForCart(cart, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const relatedItems = apiResponse2.items || [];

            // Output related items
            relatedItems.forEach(item => {
                console.log(JSON.stringify(item, null, 2));
            });

        } catch (error) {
            console.error("Error retrieving related items:", error);
        }
    }
}
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


## relatedItemsForItem

> ItemsResponse relatedItemsForItem(item_id, cart, opts)

Related items (specific item)

Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 


### Example

```javascript
import {checkoutApi} from '../api.js';

export class RelatedItemsForItem {
    /**
     * Retrieves items related to the items within the cart, in addition to another item id.
     * Item relations are configured in the UltraCart backend.
     *
     * Reference Implementation: https://github.com/UltraCart/responsive_checkout
     *
     * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377171/Related+Items
     *
     * Note: The returned items have a fixed expansion (only so many item properties are returned).
     * Item expansion includes:
     * content, content.assignments, content.attributes, content.multimedia,
     * content.multimedia.thumbnails, options, pricing, and pricing.tiers
     */
    static async execute() {
        try {
            // Expansion options for the cart
            // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html
            /*
            affiliate                   checkout                            customer_profile
            billing                     coupons                             gift
            gift_certificate            items.attributes                   items.multimedia
            items                       items.multimedia.thumbnails         items.physical
            marketing                   payment                                settings.gift
            settings.billing.provinces  settings.shipping.deliver_on_date   settings.shipping.estimates
            settings.shipping.provinces settings.shipping.ship_on_date     settings.taxes
            settings.terms              shipping                           taxes
            summary                     upsell_after
            */
            const expand = "customer_profile,items,billing,shipping,coupons,checkout,payment,summary,taxes";

            // In TypeScript web application, you'd get the cookie from your request context
            let cartId;
            // Example of how you might get the cookie
            // cartId = request.cookies["UltraCartShoppingCartID"];

            let cart;
            let apiResponse;

            if (!cartId) {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCart({_expand:expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
                cart = apiResponse.cart;
            } else {
                apiResponse = await new Promise((resolve, reject) => {
                    checkoutApi.getCartByCartId(
                        cartId,{_expand: expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
                cart = apiResponse.cart;
            }

            if (cart === undefined) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return;
            }

            // Add some items to the cart and update
            cart.items = [{
                item_id: "ITEM_ABC",
                quantity: 1
            }];

            // Update the cart and assign it back to our variable
            const updateResponse = await new Promise((resolve, reject) => {
                checkoutApi.updateCart(cart, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            cart = updateResponse.cart;

            if (cart === undefined) {
                console.error("Could not get a cart from UltraCart, cannot continue.");
                return;
            }

            // Another item ID to find related items for
            const anotherItemId = "ITEM_ZZZ";

            // Get related items for the specific item and cart
            const apiResponse2 = await new Promise((resolve, reject) => {
                checkoutApi.relatedItemsForItem(anotherItemId, cart,{_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const relatedItems = apiResponse2.items || [];

            // Output related items
            relatedItems.forEach(item => {
                console.log(JSON.stringify(item, null, 2));
            });

        } catch (error) {
            console.error("Error retrieving related items:", error);
        }
    }
}
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


## setupBrowserKey

> CheckoutSetupBrowserKeyResponse setupBrowserKey(browser_key_request)

Setup Browser Application

Setup a browser key authenticated application with checkout permissions.  This REST call must be made with an authentication scheme that is not browser key.  The new application will be linked to the application that makes this call.  If this application is disabled / deleted, then so will the application setup by this call.  The purpose of this call is to allow an OAuth application, such as the Wordpress plugin, to setup the proper browser based authentication for the REST checkout API to use. 


### Example

```javascript
import {checkoutApi} from '../api.js';

export class SetupBrowserKey {
    /**
     * Creates a browser key for use in a client-side checkout.
     *
     * This call must be made server-side with a Simple API Key or an OAuth access token.
     */
    static async execute() {
        try {
            // Prepare the browser key request
            const keyRequest = {
                allowed_referrers: ["https://www.mywebsite.com"]
            };

            // Setup the browser key
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.setupBrowserKey(keyRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const browserKey = apiResponse.browser_key || "";

            // Output the browser key
            console.log(browserKey);

        } catch (error) {
            console.error("Error setting up browser key:", error);
        }
    }
}
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


## updateCart

> CartResponse updateCart(cart, opts)

Update cart

Update the cart. 


### Example

```javascript
import { checkoutApi } from '../api.js';
import { DateTime } from 'luxon';

/**
 * Reference Implementation: https://github.com/UltraCart/responsive_checkout
 *
 * This example uses the getCart.php code as a starting point, because we must get a cart to update a cart.
 * This example is the same for both getCart.php and getCartByCartId.php. They work as a pair and are called
 * depending on the presence of an existing cart id or not. For new carts, getCart() is used.
 * For existing carts, getCartByCartId(cart_id) is used.
 */
export class UpdateCart {
    static async execute() {
        // For this example, we're just getting a cart to insert some items into it.
        const expand = "items";

        // In web applications, you'd retrieve the cookie from the browser context
        let cartId = undefined;
        // Example of how you might retrieve a cookie in a web application:
        // cartId = document.cookie.split('; ').find(row => row.startsWith('UltraCartShoppingCartID='))?.split('=')[1];

        let cart;
        if (cartId === undefined) {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getCart({_expand:expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            cart = apiResponse.cart;
        } else {
            const apiResponse = await new Promise((resolve, reject) => {
                checkoutApi.getCartByCartId(cartId, {_expand:expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            cart = apiResponse.cart;
        }

        // Get the items array on the cart, creating it if it doesn't exist
        let items = cart?.items ?? [];

        // Create a new item
        const item = {
            item_id: "BASEBALL", // TODO: Adjust the item id
            quantity: 1, // TODO: Adjust the quantity

            // TODO: If your item has options then you need to create a new CartItemOption object and add it to the list.
            options: []
        };

        // Add the item to the items list
        items.push(item);

        // Make sure to update the cart with the new list
        if (cart) {
            cart.items = items;

            // Push the cart up to save the item
            const cartResponse = await new Promise((resolve, reject) => {
                checkoutApi.updateCart(cart, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Extract the updated cart from the response
            cart = cartResponse.cart;

            // TODO: set or re-set the cart cookie if this is part of a multi-page process.
            // Two weeks is a generous cart id time.
            // Example of how you might set a cookie in a web application:
            // document.cookie = `UltraCartShoppingCartID=${cart.cartId}; expires=${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;

            // In a real-world scenario, you might want to log or handle the updated cart
            console.log(JSON.stringify(cart, null, 2));
        }
    }
}
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


## validateCart

> CartValidationResponse validateCart(validation_request, opts)

Validate

Validate the cart for errors.  Specific checks can be passed and multiple validations can occur throughout your checkout flow. 


### Example

```javascript
import { checkoutApi } from '../api.js';

/**
 * This is a checkout api method. It can be used both server side or client side.
 * This example is a server side call using a Simple API Key.
 * See the JavaScript sdk samples if you wish to see a browser key implementation.
 *
 * validateCart passes a shopping cart to UltraCart for validation.
 */
export class ValidateCart {
    static async execute() {
        // Usually this would be retrieved from a session variable or cookie.
        const cartId = "123456789123456789123456789123456789";

        // Possible Expansion Variables: (see https://www.ultracart.com/api/#resource_checkout.html)
        // also see getCart() example
        const expand = "items,billing,shipping,coupons,checkout,payment,summary,taxes";

        // Retrieve the cart
        const retrievedCartResponse = await new Promise((resolve, reject) => {
            checkoutApi.getCartByCartId(cartId, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const cart = retrievedCartResponse.cart;

        // Create validation request
        const validationRequest = {
            cart: cart
            // validationRequest.checks = undefined; // leave this undefined for all validations
        };

        /**
         * Possible Checks:
         * All,Advertising Source Provided,Billing Address Provided,
         * Billing Destination Restriction,Billing Phone Numbers Provided,Billing State Abbreviation Valid,
         * Billing Validate City State Zip,Coupon Zip Code Restriction,Credit Card Shipping Method Conflict,
         * Customer Profile Does Not Exist.,CVV2 Not Required,Electronic Check Confirm Account Number,
         * Email confirmed,Email provided if required,Gift Message Length,Item Quantity Valid,
         * Item Restrictions,Items Present,Merchant Specific Item Relationships,One per customer violations,
         * Options Provided,Payment Information Validate,Payment Method Provided,Payment Method Restriction,
         * Pricing Tier Limits,Quantity requirements met,Referral Code Provided,Shipping Address Provided,
         * Shipping Destination Restriction,Shipping Method Provided,Shipping Needs Recalculation,
         * Shipping State Abbreviation Valid,Shipping Validate City State Zip,Special Instructions Length,
         * Tax County Specified,Valid Delivery Date,Valid Ship On Date,Auth Test Credit Card
         */

        // This method also does an update in the process, so pass in a good expansion and grab the return cart variable.
        const apiResponse = await new Promise((resolve, reject) => {
            checkoutApi.validateCart(validationRequest, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const updatedCart = apiResponse.cart;

        // Logging validation results
        console.log("Validation Errors:");
        if (apiResponse.errors) {
            apiResponse.errors.forEach(error => {
                console.log(error);
            });
        }
        console.log(JSON.stringify(updatedCart, null, 2));
    }
}
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

