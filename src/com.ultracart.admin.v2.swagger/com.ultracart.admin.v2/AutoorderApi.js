/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrdersResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/AutoOrderResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/AutoOrdersResponse'), require('../com.ultracart.admin.v2.models/AutoOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoorderApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrderResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.AutoOrdersResponse, root.UltraCartRestApiV2.AutoOrder);
  }
}(this, function(ApiClient, AutoOrderResponse, ErrorResponse, AutoOrdersResponse, AutoOrder) {
  'use strict';

  /**
   * Autoorder service.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi
   * @version 2.0.7
   */

  /**
   * Constructs a new AutoorderApi. 
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi
   * @class
   * @param {module:com.ultracart.admin.v2.swagger/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ultracart.admin.v2.swagger/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAutoOrder operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified auto order oid. 
     * @param {Integer} autoOrderOid The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrder = function(autoOrderOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'autoOrderOid' is set
      if (autoOrderOid == undefined || autoOrderOid == null) {
        throw "Missing the required parameter 'autoOrderOid' when calling getAutoOrder";
      }


      var pathParams = {
        'auto_order_oid': autoOrderOid
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/{auto_order_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrderByCode operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} autoOrderCode The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByCode = function(autoOrderCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'autoOrderCode' is set
      if (autoOrderCode == undefined || autoOrderCode == null) {
        throw "Missing the required parameter 'autoOrderCode' when calling getAutoOrderByCode";
      }


      var pathParams = {
        'auto_order_code': autoOrderCode
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/code/{auto_order_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrderByReferenceOrderId operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderByReferenceOrderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} referenceOrderId The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrderByReferenceOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByReferenceOrderId = function(referenceOrderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceOrderId' is set
      if (referenceOrderId == undefined || referenceOrderId == null) {
        throw "Missing the required parameter 'referenceOrderId' when calling getAutoOrderByReferenceOrderId";
      }


      var pathParams = {
        'reference_order_id': referenceOrderId
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/reference_order_id/{reference_order_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrders operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve auto orders
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.autoOrderCode Auto order code
     * @param {String} opts.originalOrderId Original order id
     * @param {String} opts.firstName First name
     * @param {String} opts.lastName Last name
     * @param {String} opts.company Company
     * @param {String} opts.city City
     * @param {String} opts.state State
     * @param {String} opts.postalCode Postal code
     * @param {String} opts.countryCode Country code (ISO-3166 two letter)
     * @param {String} opts.phone Phone
     * @param {String} opts.email Email
     * @param {String} opts.originalOrderDateBegin Original order date begin
     * @param {String} opts.originalOrderDateEnd Original order date end
     * @param {String} opts.nextShipmentDateBegin Next shipment date begin
     * @param {String} opts.nextShipmentDateEnd Next shipment date end
     * @param {String} opts.cardType Card type
     * @param {String} opts.itemId Item ID
     * @param {String} opts.status Status
     * @param {Integer} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Integer} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch auto orders that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~getAutoOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrders = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'auto_order_code': opts['autoOrderCode'],
        'original_order_id': opts['originalOrderId'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'company': opts['company'],
        'city': opts['city'],
        'state': opts['state'],
        'postal_code': opts['postalCode'],
        'country_code': opts['countryCode'],
        'phone': opts['phone'],
        'email': opts['email'],
        'original_order_date_begin': opts['originalOrderDateBegin'],
        'original_order_date_end': opts['originalOrderDateEnd'],
        'next_shipment_date_begin': opts['nextShipmentDateBegin'],
        'next_shipment_date_end': opts['nextShipmentDateEnd'],
        'card_type': opts['cardType'],
        'item_id': opts['itemId'],
        'status': opts['status'],
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
        '_sort': opts['sort'],
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutoOrdersResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAutoOrder operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~updateAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an auto order
     * Update an auto order on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrder} autoOrder Auto order to update
     * @param {Integer} autoOrderOid The auto order oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AutoorderApi~updateAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.updateAutoOrder = function(autoOrder, autoOrderOid, opts, callback) {
      opts = opts || {};
      var postBody = autoOrder;

      // verify the required parameter 'autoOrder' is set
      if (autoOrder == undefined || autoOrder == null) {
        throw "Missing the required parameter 'autoOrder' when calling updateAutoOrder";
      }

      // verify the required parameter 'autoOrderOid' is set
      if (autoOrderOid == undefined || autoOrderOid == null) {
        throw "Missing the required parameter 'autoOrderOid' when calling updateAutoOrder";
      }


      var pathParams = {
        'auto_order_oid': autoOrderOid
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/{auto_order_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));