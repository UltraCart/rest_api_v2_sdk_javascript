"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cart = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Cart"));

var _CartAffirmCheckoutResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartAffirmCheckoutResponse"));

var _CartFinalizeOrderRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartFinalizeOrderRequest"));

var _CartFinalizeOrderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartFinalizeOrderResponse"));

var _CartProfileLoginRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartProfileLoginRequest"));

var _CartProfileLoginResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartProfileLoginResponse"));

var _CartProfileRegisterRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartProfileRegisterRequest"));

var _CartProfileRegisterResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartProfileRegisterResponse"));

var _CartResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartResponse"));

var _CartValidationRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartValidationRequest"));

var _CartValidationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CartValidationResponse"));

var _CheckoutAllowedCountriesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse"));

var _CheckoutHandoffRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutHandoffRequest"));

var _CheckoutHandoffResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutHandoffResponse"));

var _CheckoutSetupBrowserKeyRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest"));

var _CheckoutSetupBrowserKeyResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse"));

var _CheckoutStateProvinceResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CheckoutStateProvinceResponse"));

var _CityStateZip = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CityStateZip"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _ItemsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ItemsResponse"));

var _RegisterAffiliateClickRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/RegisterAffiliateClickRequest"));

var _RegisterAffiliateClickResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/RegisterAffiliateClickResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Checkout service.
* @module com.ultracart.admin.v2/CheckoutApi
* @version 4.0.99-RC
*/
var CheckoutApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CheckoutApi. 
  * @alias module:com.ultracart.admin.v2/CheckoutApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CheckoutApi(apiClient) {
    _classCallCheck(this, CheckoutApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cityState operation.
   * @callback module:com.ultracart.admin.v2/CheckoutApi~cityStateCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/CityStateZip} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * City/State for Zip
   * Look up the city and state for the shipping zip code.  Useful for building an auto complete for parts of the shipping address 
   * @param {module:com.ultracart.admin.v2.models/Cart} cart Cart
   * @param {module:com.ultracart.admin.v2/CheckoutApi~cityStateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/CityStateZip}
   */


  _createClass(CheckoutApi, [{
    key: "cityState",
    value: function cityState(cart, callback) {
      var postBody = cart; // verify the required parameter 'cart' is set

      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling cityState");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CityStateZip["default"];
      return this.apiClient.callApi('/checkout/city_state', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the finalizeOrder operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~finalizeOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finalize Order
     * Finalize the cart into an order.  This method can not be called with browser key authentication.  It is ONLY meant for server side code to call. 
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequest} finalize_request Finalize request
     * @param {module:com.ultracart.admin.v2/CheckoutApi~finalizeOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse}
     */

  }, {
    key: "finalizeOrder",
    value: function finalizeOrder(finalize_request, callback) {
      var postBody = finalize_request; // verify the required parameter 'finalize_request' is set

      if (finalize_request === undefined || finalize_request === null) {
        throw new Error("Missing the required parameter 'finalize_request' when calling finalizeOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartFinalizeOrderResponse["default"];
      return this.apiClient.callApi('/checkout/cart/finalizeOrder', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAffirmCheckout operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getAffirmCheckoutCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get affirm checkout (by cart id)
     * Get a Affirm checkout object for the specified cart_id parameter. 
     * @param {String} cart_id Cart ID to retrieve
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getAffirmCheckoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse}
     */

  }, {
    key: "getAffirmCheckout",
    value: function getAffirmCheckout(cart_id, callback) {
      var postBody = null; // verify the required parameter 'cart_id' is set

      if (cart_id === undefined || cart_id === null) {
        throw new Error("Missing the required parameter 'cart_id' when calling getAffirmCheckout");
      }

      var pathParams = {
        'cart_id': cart_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartAffirmCheckoutResponse["default"];
      return this.apiClient.callApi('/checkout/cart/{cart_id}/affirmCheckout', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllowedCountries operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getAllowedCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allowed countries
     * Lookup the allowed countries for this merchant id 
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getAllowedCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse}
     */

  }, {
    key: "getAllowedCountries",
    value: function getAllowedCountries(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CheckoutAllowedCountriesResponse["default"];
      return this.apiClient.callApi('/checkout/allowedCountries', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCart operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cart
     * If the cookie is set on the browser making the request then it will return their active cart.  Otherwise it will create a new cart. 
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "getCart",
    value: function getCart(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/cart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCartByCartId operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getCartByCartIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cart (by cart id)
     * Get a cart specified by the cart_id parameter. 
     * @param {String} cart_id Cart ID to retrieve
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getCartByCartIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "getCartByCartId",
    value: function getCartByCartId(cart_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cart_id' is set

      if (cart_id === undefined || cart_id === null) {
        throw new Error("Missing the required parameter 'cart_id' when calling getCartByCartId");
      }

      var pathParams = {
        'cart_id': cart_id
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/cart/{cart_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCartByReturnCode operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getCartByReturnCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cart (by return code)
     * Get a cart specified by the return code parameter. 
     * @param {String} return_code Return code to lookup cart ID by
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getCartByReturnCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "getCartByReturnCode",
    value: function getCartByReturnCode(return_code, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'return_code' is set

      if (return_code === undefined || return_code === null) {
        throw new Error("Missing the required parameter 'return_code' when calling getCartByReturnCode");
      }

      var pathParams = {
        'return_code': return_code
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/return/{return_code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCartByReturnToken operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getCartByReturnTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cart (by return token)
     * Get a cart specified by the encrypted return token parameter. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.return_token Return token provided by StoreFront Communications
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getCartByReturnTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "getCartByReturnToken",
    value: function getCartByReturnToken(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'return_token': opts['return_token'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/return_token', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStateProvincesForCountry operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~getStateProvincesForCountryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CheckoutStateProvinceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get state/province list for a country code
     * Lookup a state/province list for a given country code 
     * @param {String} country_code Two letter ISO country code
     * @param {module:com.ultracart.admin.v2/CheckoutApi~getStateProvincesForCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CheckoutStateProvinceResponse}
     */

  }, {
    key: "getStateProvincesForCountry",
    value: function getStateProvincesForCountry(country_code, callback) {
      var postBody = null; // verify the required parameter 'country_code' is set

      if (country_code === undefined || country_code === null) {
        throw new Error("Missing the required parameter 'country_code' when calling getStateProvincesForCountry");
      }

      var pathParams = {
        'country_code': country_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CheckoutStateProvinceResponse["default"];
      return this.apiClient.callApi('/checkout/stateProvincesForCountry/{country_code}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the handoffCart operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~handoffCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handoff cart
     * Handoff the browser to UltraCart for view cart on StoreFront, transfer to PayPal, transfer to Affirm, transfer to Sezzle or finalization of the order (including upsell processing). 
     * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} handoff_request Handoff request
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~handoffCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CheckoutHandoffResponse}
     */

  }, {
    key: "handoffCart",
    value: function handoffCart(handoff_request, opts, callback) {
      opts = opts || {};
      var postBody = handoff_request; // verify the required parameter 'handoff_request' is set

      if (handoff_request === undefined || handoff_request === null) {
        throw new Error("Missing the required parameter 'handoff_request' when calling handoffCart");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckoutHandoffResponse["default"];
      return this.apiClient.callApi('/checkout/cart/handoff', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the login operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartProfileLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Profile login
     * Login in to the customer profile specified by cart.billing.email and password 
     * @param {module:com.ultracart.admin.v2.models/CartProfileLoginRequest} login_request Login request
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartProfileLoginResponse}
     */

  }, {
    key: "login",
    value: function login(login_request, opts, callback) {
      opts = opts || {};
      var postBody = login_request; // verify the required parameter 'login_request' is set

      if (login_request === undefined || login_request === null) {
        throw new Error("Missing the required parameter 'login_request' when calling login");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartProfileLoginResponse["default"];
      return this.apiClient.callApi('/checkout/cart/profile/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Profile logout
     * Log the cart out of the current profile.  No error will occur if they are not logged in. 
     * @param {module:com.ultracart.admin.v2.models/Cart} cart Cart
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "logout",
    value: function logout(cart, opts, callback) {
      opts = opts || {};
      var postBody = cart; // verify the required parameter 'cart' is set

      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling logout");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/cart/profile/logout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the register operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartProfileRegisterResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Profile registration
     * Register a new customer profile.  Requires the cart.billing object to be populated along with the password. 
     * @param {module:com.ultracart.admin.v2.models/CartProfileRegisterRequest} register_request Register request
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartProfileRegisterResponse}
     */

  }, {
    key: "register",
    value: function register(register_request, opts, callback) {
      opts = opts || {};
      var postBody = register_request; // verify the required parameter 'register_request' is set

      if (register_request === undefined || register_request === null) {
        throw new Error("Missing the required parameter 'register_request' when calling register");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartProfileRegisterResponse["default"];
      return this.apiClient.callApi('/checkout/cart/profile/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerAffiliateClick operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~registerAffiliateClickCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register affiliate click
     * Register an affiliate click.  Used by custom checkouts that are completely API based and do not perform checkout handoff. 
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} register_affiliate_click_request Register affiliate click request
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~registerAffiliateClickCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse}
     */

  }, {
    key: "registerAffiliateClick",
    value: function registerAffiliateClick(register_affiliate_click_request, opts, callback) {
      opts = opts || {};
      var postBody = register_affiliate_click_request; // verify the required parameter 'register_affiliate_click_request' is set

      if (register_affiliate_click_request === undefined || register_affiliate_click_request === null) {
        throw new Error("Missing the required parameter 'register_affiliate_click_request' when calling registerAffiliateClick");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RegisterAffiliateClickResponse["default"];
      return this.apiClient.callApi('/checkout/affiliateClick/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the relatedItemsForCart operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~relatedItemsForCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Related items
     * Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 
     * @param {module:com.ultracart.admin.v2.models/Cart} cart Cart
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See item resource documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~relatedItemsForCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */

  }, {
    key: "relatedItemsForCart",
    value: function relatedItemsForCart(cart, opts, callback) {
      opts = opts || {};
      var postBody = cart; // verify the required parameter 'cart' is set

      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling relatedItemsForCart");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ItemsResponse["default"];
      return this.apiClient.callApi('/checkout/related_items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the relatedItemsForItem operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~relatedItemsForItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Related items (specific item)
     * Retrieve all the related items for the cart contents.  Expansion is limited to content, content.assignments, content.attributes, content.multimedia, content.multimedia.thumbnails, options, pricing, and pricing.tiers. 
     * @param {String} item_id Item ID to retrieve related items for
     * @param {module:com.ultracart.admin.v2.models/Cart} cart Cart
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See item resource documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~relatedItemsForItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */

  }, {
    key: "relatedItemsForItem",
    value: function relatedItemsForItem(item_id, cart, opts, callback) {
      opts = opts || {};
      var postBody = cart; // verify the required parameter 'item_id' is set

      if (item_id === undefined || item_id === null) {
        throw new Error("Missing the required parameter 'item_id' when calling relatedItemsForItem");
      } // verify the required parameter 'cart' is set


      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling relatedItemsForItem");
      }

      var pathParams = {
        'item_id': item_id
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ItemsResponse["default"];
      return this.apiClient.callApi('/checkout/relatedItems/{item_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the setupBrowserKey operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~setupBrowserKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup Browser Application
     * Setup a browser key authenticated application with checkout permissions.  This REST call must be made with an authentication scheme that is not browser key.  The new application will be linked to the application that makes this call.  If this application is disabled / deleted, then so will the application setup by this call.  The purpose of this call is to allow an OAuth application, such as the Wordpress plugin, to setup the proper browser based authentication for the REST checkout API to use. 
     * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} browser_key_request Setup browser key request
     * @param {module:com.ultracart.admin.v2/CheckoutApi~setupBrowserKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyResponse}
     */

  }, {
    key: "setupBrowserKey",
    value: function setupBrowserKey(browser_key_request, callback) {
      var postBody = browser_key_request; // verify the required parameter 'browser_key_request' is set

      if (browser_key_request === undefined || browser_key_request === null) {
        throw new Error("Missing the required parameter 'browser_key_request' when calling setupBrowserKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckoutSetupBrowserKeyResponse["default"];
      return this.apiClient.callApi('/checkout/browser_key', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateCart operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~updateCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update cart
     * Update the cart. 
     * @param {module:com.ultracart.admin.v2.models/Cart} cart Cart
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~updateCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartResponse}
     */

  }, {
    key: "updateCart",
    value: function updateCart(cart, opts, callback) {
      opts = opts || {};
      var postBody = cart; // verify the required parameter 'cart' is set

      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling updateCart");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartResponse["default"];
      return this.apiClient.callApi('/checkout/cart', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the validateCart operation.
     * @callback module:com.ultracart.admin.v2/CheckoutApi~validateCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CartValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate
     * Validate the cart for errors.  Specific checks can be passed and multiple validations can occur throughout your checkout flow. 
     * @param {module:com.ultracart.admin.v2.models/CartValidationRequest} validation_request Validation request
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CheckoutApi~validateCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CartValidationResponse}
     */

  }, {
    key: "validateCart",
    value: function validateCart(validation_request, opts, callback) {
      opts = opts || {};
      var postBody = validation_request; // verify the required parameter 'validation_request' is set

      if (validation_request === undefined || validation_request === null) {
        throw new Error("Missing the required parameter 'validation_request' when calling validateCart");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CartValidationResponse["default"];
      return this.apiClient.callApi('/checkout/cart/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CheckoutApi;
}();

exports["default"] = CheckoutApi;