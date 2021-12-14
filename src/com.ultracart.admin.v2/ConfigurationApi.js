/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/BaseResponse', 'com.ultracart.admin.v2.models/DelayAutoOrdersResponse', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/PaymentsConfiguration', 'com.ultracart.admin.v2.models/PaymentsConfigurationResponse', 'com.ultracart.admin.v2.models/PaymentsWepayEnroll', 'com.ultracart.admin.v2.models/RotatingTransactionGateway', 'com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse', 'com.ultracart.admin.v2.models/RotatingTransactionGatewaysResponse', 'com.ultracart.admin.v2.models/RtgSummaryResponse', 'com.ultracart.admin.v2.models/StripeConnectResponse', 'com.ultracart.admin.v2.models/TransactionGatewaysRequest', 'com.ultracart.admin.v2.models/TransactionGatewaysResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/BaseResponse'), require('../com.ultracart.admin.v2.models/DelayAutoOrdersResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/PaymentsConfiguration'), require('../com.ultracart.admin.v2.models/PaymentsConfigurationResponse'), require('../com.ultracart.admin.v2.models/PaymentsWepayEnroll'), require('../com.ultracart.admin.v2.models/RotatingTransactionGateway'), require('../com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse'), require('../com.ultracart.admin.v2.models/RotatingTransactionGatewaysResponse'), require('../com.ultracart.admin.v2.models/RtgSummaryResponse'), require('../com.ultracart.admin.v2.models/StripeConnectResponse'), require('../com.ultracart.admin.v2.models/TransactionGatewaysRequest'), require('../com.ultracart.admin.v2.models/TransactionGatewaysResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConfigurationApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.BaseResponse, root.UltraCartRestApiV2.DelayAutoOrdersResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.PaymentsConfiguration, root.UltraCartRestApiV2.PaymentsConfigurationResponse, root.UltraCartRestApiV2.PaymentsWepayEnroll, root.UltraCartRestApiV2.RotatingTransactionGateway, root.UltraCartRestApiV2.RotatingTransactionGatewayResponse, root.UltraCartRestApiV2.RotatingTransactionGatewaysResponse, root.UltraCartRestApiV2.RtgSummaryResponse, root.UltraCartRestApiV2.StripeConnectResponse, root.UltraCartRestApiV2.TransactionGatewaysRequest, root.UltraCartRestApiV2.TransactionGatewaysResponse);
  }
}(this, function(ApiClient, BaseResponse, DelayAutoOrdersResponse, ErrorResponse, PaymentsConfiguration, PaymentsConfigurationResponse, PaymentsWepayEnroll, RotatingTransactionGateway, RotatingTransactionGatewayResponse, RotatingTransactionGatewaysResponse, RtgSummaryResponse, StripeConnectResponse, TransactionGatewaysRequest, TransactionGatewaysResponse) {
  'use strict';

  /**
   * Configuration service.
   * @module com.ultracart.admin.v2/ConfigurationApi
   * @version 3.6.34
   */

  /**
   * Constructs a new ConfigurationApi. 
   * @alias module:com.ultracart.admin.v2/ConfigurationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the delayAutoOrders operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~delayAutoOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/DelayAutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delay auto order processing for a day for this rotating transaction gateway
     * Delay auto order processing for a day for this rotating transaction gateway 
     * @param {Number} rtg_oid The rtg_oid to delay.
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~delayAutoOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/DelayAutoOrdersResponse}
     */
    this.delayAutoOrders = function(rtg_oid, callback) {
      var postBody = null;

      // verify the required parameter 'rtg_oid' is set
      if (rtg_oid === undefined || rtg_oid === null) {
        throw new Error("Missing the required parameter 'rtg_oid' when calling delayAutoOrders");
      }


      var pathParams = {
        'rtg_oid': rtg_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = DelayAutoOrdersResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/{rtg_oid}/delayAutoOrders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRotatingTransactionGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~deleteRotatingTransactionGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a rotating transaction gateway
     * Delete a rotating transaction gateway 
     * @param {Number} rtg_oid The rtg_oid to delete.
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~deleteRotatingTransactionGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
    this.deleteRotatingTransactionGateway = function(rtg_oid, callback) {
      var postBody = null;

      // verify the required parameter 'rtg_oid' is set
      if (rtg_oid === undefined || rtg_oid === null) {
        throw new Error("Missing the required parameter 'rtg_oid' when calling deleteRotatingTransactionGateway");
      }


      var pathParams = {
        'rtg_oid': rtg_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = BaseResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/{rtg_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsConfiguration operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve payments configuration
     * Retrieves payments configuration for this account. 
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse}
     */
    this.getPaymentsConfiguration = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentsConfigurationResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsRotatingGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a rotating transaction gateway
     * Retrieve a rotating transaction gateway 
     * @param {Number} rtg_oid The rtg_oid for the desired record.
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse}
     */
    this.getPaymentsRotatingGateway = function(rtg_oid, callback) {
      var postBody = null;

      // verify the required parameter 'rtg_oid' is set
      if (rtg_oid === undefined || rtg_oid === null) {
        throw new Error("Missing the required parameter 'rtg_oid' when calling getPaymentsRotatingGateway");
      }


      var pathParams = {
        'rtg_oid': rtg_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewayResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/{rtg_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsRotatingGatewayByCode operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingGatewayByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a rotating transaction gateway by code
     * Retrieve a rotating transaction gateway by code 
     * @param {String} code The code for the desired rotating transaction gateway.
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingGatewayByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse}
     */
    this.getPaymentsRotatingGatewayByCode = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getPaymentsRotatingGatewayByCode");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewayResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/byCode/{code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsRotatingTransactionGateways operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingTransactionGatewaysCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of rotating transaction gateways
     * Retrieve a list of rotating transaction gateways 
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRotatingTransactionGatewaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewaysResponse}
     */
    this.getPaymentsRotatingTransactionGateways = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewaysResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsRtgSummaries operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRtgSummariesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RtgSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a summary of rotating transaction gateways
     * Retrieve a summary of rotating transaction gateways 
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsRtgSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RtgSummaryResponse}
     */
    this.getPaymentsRtgSummaries = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RtgSummaryResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/summaries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentsTransactionGateways operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsTransactionGatewaysCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TransactionGatewaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of transaction gateways
     * Retrieve a list of transaction gateways 
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~getPaymentsTransactionGatewaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TransactionGatewaysResponse}
     */
    this.getPaymentsTransactionGateways = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransactionGatewaysResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/tg', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertRotatingTransactionGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~insertRotatingTransactionGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a rotating transaction gateway
     * Insert a rotating transaction gateway 
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGateway} rotating_transaction_gateway Rotating transaction gateway
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~insertRotatingTransactionGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse}
     */
    this.insertRotatingTransactionGateway = function(rotating_transaction_gateway, callback) {
      var postBody = rotating_transaction_gateway;

      // verify the required parameter 'rotating_transaction_gateway' is set
      if (rotating_transaction_gateway === undefined || rotating_transaction_gateway === null) {
        throw new Error("Missing the required parameter 'rotating_transaction_gateway' when calling insertRotatingTransactionGateway");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewayResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the migrateToRotatingTransactionGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~migrateToRotatingTransactionGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Migrate a normal transaction gateway to a rotating transaction gateway
     * Migrate a normal transaction gateway to a rotating transaction gateway 
     * @param {String} code The short code for the new rotating transaction gateway
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~migrateToRotatingTransactionGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse}
     */
    this.migrateToRotatingTransactionGateway = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling migrateToRotatingTransactionGateway");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewayResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/tg/migrateToRtgWithCodeOf/{code}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the stripeConnect operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~stripeConnectCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/StripeConnectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Begin the processing of connecting with Stripe
     * Begin the processing of connecting with Stripe. 
     * @param {Number} rtg_oid The rtg_oid to be connected to stripe.
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~stripeConnectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/StripeConnectResponse}
     */
    this.stripeConnect = function(rtg_oid, callback) {
      var postBody = null;

      // verify the required parameter 'rtg_oid' is set
      if (rtg_oid === undefined || rtg_oid === null) {
        throw new Error("Missing the required parameter 'rtg_oid' when calling stripeConnect");
      }


      var pathParams = {
        'rtg_oid': rtg_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = StripeConnectResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/{rtg_oid}/stripeConnect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentsConfiguration operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~updatePaymentsConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates payments configuration
     * Updates payments configuration on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/PaymentsConfiguration} payments_configuration Payments configuration
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~updatePaymentsConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse}
     */
    this.updatePaymentsConfiguration = function(payments_configuration, callback) {
      var postBody = payments_configuration;

      // verify the required parameter 'payments_configuration' is set
      if (payments_configuration === undefined || payments_configuration === null) {
        throw new Error("Missing the required parameter 'payments_configuration' when calling updatePaymentsConfiguration");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = PaymentsConfigurationResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentsTransactionGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~updatePaymentsTransactionGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TransactionGatewaysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates payments transaction gateway
     * Updates payments transaction gateway on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/TransactionGatewaysRequest} update_gateway_request Transaction gateways
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~updatePaymentsTransactionGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TransactionGatewaysResponse}
     */
    this.updatePaymentsTransactionGateway = function(update_gateway_request, callback) {
      var postBody = update_gateway_request;

      // verify the required parameter 'update_gateway_request' is set
      if (update_gateway_request === undefined || update_gateway_request === null) {
        throw new Error("Missing the required parameter 'update_gateway_request' when calling updatePaymentsTransactionGateway");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = TransactionGatewaysResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/tg', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRotatingTransactionGateway operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~updateRotatingTransactionGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a rotating transaction gateway
     * Update a rotating transaction gateway 
     * @param {Number} rtg_oid The rtg_oid to update.
     * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGateway} rotating_transaction_gateway Rotating transaction gateway
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~updateRotatingTransactionGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RotatingTransactionGatewayResponse}
     */
    this.updateRotatingTransactionGateway = function(rtg_oid, rotating_transaction_gateway, callback) {
      var postBody = rotating_transaction_gateway;

      // verify the required parameter 'rtg_oid' is set
      if (rtg_oid === undefined || rtg_oid === null) {
        throw new Error("Missing the required parameter 'rtg_oid' when calling updateRotatingTransactionGateway");
      }

      // verify the required parameter 'rotating_transaction_gateway' is set
      if (rotating_transaction_gateway === undefined || rotating_transaction_gateway === null) {
        throw new Error("Missing the required parameter 'rotating_transaction_gateway' when calling updateRotatingTransactionGateway");
      }


      var pathParams = {
        'rtg_oid': rtg_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = RotatingTransactionGatewayResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/payments/rtg/{rtg_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wepayEnroll operation.
     * @callback module:com.ultracart.admin.v2/ConfigurationApi~wepayEnrollCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enroll with WePay
     * Enroll with WePay on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/PaymentsWepayEnroll} wepay_enroll Wepay enrollment information
     * @param {module:com.ultracart.admin.v2/ConfigurationApi~wepayEnrollCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PaymentsConfigurationResponse}
     */
    this.wepayEnroll = function(wepay_enroll, callback) {
      var postBody = wepay_enroll;

      // verify the required parameter 'wepay_enroll' is set
      if (wepay_enroll === undefined || wepay_enroll === null) {
        throw new Error("Missing the required parameter 'wepay_enroll' when calling wepayEnroll");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = PaymentsConfigurationResponse;

      return this.apiClient.callApi(
        '/configuration/checkout/wepayEnroll', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
