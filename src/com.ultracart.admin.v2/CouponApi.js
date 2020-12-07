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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Coupon', 'com.ultracart.admin.v2.models/CouponCodesRequest', 'com.ultracart.admin.v2.models/CouponCodesResponse', 'com.ultracart.admin.v2.models/CouponDeletesRequest', 'com.ultracart.admin.v2.models/CouponEditorValues', 'com.ultracart.admin.v2.models/CouponQuery', 'com.ultracart.admin.v2.models/CouponResponse', 'com.ultracart.admin.v2.models/CouponsResponse', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/UploadCouponCodesRequest', 'com.ultracart.admin.v2.models/UploadCouponCodesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/Coupon'), require('../com.ultracart.admin.v2.models/CouponCodesRequest'), require('../com.ultracart.admin.v2.models/CouponCodesResponse'), require('../com.ultracart.admin.v2.models/CouponDeletesRequest'), require('../com.ultracart.admin.v2.models/CouponEditorValues'), require('../com.ultracart.admin.v2.models/CouponQuery'), require('../com.ultracart.admin.v2.models/CouponResponse'), require('../com.ultracart.admin.v2.models/CouponsResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/UploadCouponCodesRequest'), require('../com.ultracart.admin.v2.models/UploadCouponCodesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Coupon, root.UltraCartRestApiV2.CouponCodesRequest, root.UltraCartRestApiV2.CouponCodesResponse, root.UltraCartRestApiV2.CouponDeletesRequest, root.UltraCartRestApiV2.CouponEditorValues, root.UltraCartRestApiV2.CouponQuery, root.UltraCartRestApiV2.CouponResponse, root.UltraCartRestApiV2.CouponsResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.UploadCouponCodesRequest, root.UltraCartRestApiV2.UploadCouponCodesResponse);
  }
}(this, function(ApiClient, Coupon, CouponCodesRequest, CouponCodesResponse, CouponDeletesRequest, CouponEditorValues, CouponQuery, CouponResponse, CouponsResponse, ErrorResponse, UploadCouponCodesRequest, UploadCouponCodesResponse) {
  'use strict';

  /**
   * Coupon service.
   * @module com.ultracart.admin.v2/CouponApi
   * @version 3.0.48
   */

  /**
   * Constructs a new CouponApi. 
   * @alias module:com.ultracart.admin.v2/CouponApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCoupon operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~deleteCouponCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a coupon
     * Delete a coupon on the UltraCart account. 
     * @param {Number} coupon_oid The coupon_oid to delete.
     * @param {module:com.ultracart.admin.v2/CouponApi~deleteCouponCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCoupon = function(coupon_oid, callback) {
      var postBody = null;

      // verify the required parameter 'coupon_oid' is set
      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling deleteCoupon");
      }


      var pathParams = {
        'coupon_oid': coupon_oid
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
      var returnType = null;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCouponsByCode operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~deleteCouponsByCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes multiple coupons
     * Delete coupons on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CouponDeletesRequest} coupon_delete_request Coupon oids to delete
     * @param {module:com.ultracart.admin.v2/CouponApi~deleteCouponsByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCouponsByCode = function(coupon_delete_request, callback) {
      var postBody = coupon_delete_request;

      // verify the required parameter 'coupon_delete_request' is set
      if (coupon_delete_request === undefined || coupon_delete_request === null) {
        throw new Error("Missing the required parameter 'coupon_delete_request' when calling deleteCouponsByCode");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coupon/coupons/by_code', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCouponsByOid operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~deleteCouponsByOidCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes multiple coupons
     * Delete coupons on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CouponDeletesRequest} coupon_delete_request Coupon oids to delete
     * @param {module:com.ultracart.admin.v2/CouponApi~deleteCouponsByOidCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCouponsByOid = function(coupon_delete_request, callback) {
      var postBody = coupon_delete_request;

      // verify the required parameter 'coupon_delete_request' is set
      if (coupon_delete_request === undefined || coupon_delete_request === null) {
        throw new Error("Missing the required parameter 'coupon_delete_request' when calling deleteCouponsByOid");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coupon/coupons/by_oid', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateCouponCodes operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~generateCouponCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates one time codes for a coupon
     * Generate one time codes for a coupon 
     * @param {Number} coupon_oid The coupon oid to generate codes.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesRequest} coupon_codes_request Coupon code generation parameters
     * @param {module:com.ultracart.admin.v2/CouponApi~generateCouponCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponCodesResponse}
     */
    this.generateCouponCodes = function(coupon_oid, coupon_codes_request, callback) {
      var postBody = coupon_codes_request;

      // verify the required parameter 'coupon_oid' is set
      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling generateCouponCodes");
      }

      // verify the required parameter 'coupon_codes_request' is set
      if (coupon_codes_request === undefined || coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'coupon_codes_request' when calling generateCouponCodes");
      }


      var pathParams = {
        'coupon_oid': coupon_oid
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
      var returnType = CouponCodesResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}/generate_codes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateOneTimeCodesByMerchantCode operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~generateOneTimeCodesByMerchantCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates one time codes by merchant code
     * Generate one time codes by merchant code 
     * @param {String} merchant_code The merchant code to generate one time codes.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesRequest} coupon_codes_request Coupon code generation parameters
     * @param {module:com.ultracart.admin.v2/CouponApi~generateOneTimeCodesByMerchantCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponCodesResponse}
     */
    this.generateOneTimeCodesByMerchantCode = function(merchant_code, coupon_codes_request, callback) {
      var postBody = coupon_codes_request;

      // verify the required parameter 'merchant_code' is set
      if (merchant_code === undefined || merchant_code === null) {
        throw new Error("Missing the required parameter 'merchant_code' when calling generateOneTimeCodesByMerchantCode");
      }

      // verify the required parameter 'coupon_codes_request' is set
      if (coupon_codes_request === undefined || coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'coupon_codes_request' when calling generateOneTimeCodesByMerchantCode");
      }


      var pathParams = {
        'merchant_code': merchant_code
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
      var returnType = CouponCodesResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/merchant_code/{merchant_code}/generate_codes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCoupon operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a coupon
     * Retrieves a single coupon using the specified coupon profile oid. 
     * @param {Number} coupon_oid The coupon oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.getCoupon = function(coupon_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'coupon_oid' is set
      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling getCoupon");
      }


      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
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
      var returnType = CouponResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCouponByMerchantCode operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getCouponByMerchantCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a coupon by merchant code
     * Retrieves a single coupon using the specified merchant code. 
     * @param {String} merchant_code The coupon merchant code to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponByMerchantCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.getCouponByMerchantCode = function(merchant_code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'merchant_code' is set
      if (merchant_code === undefined || merchant_code === null) {
        throw new Error("Missing the required parameter 'merchant_code' when calling getCouponByMerchantCode");
      }


      var pathParams = {
        'merchant_code': merchant_code
      };
      var queryParams = {
        '_expand': opts['_expand'],
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
      var returnType = CouponResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/merchant_code/{merchant_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCoupons operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getCouponsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve coupons
     * Retrieves coupons for this account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.merchant_code Merchant code
     * @param {String} opts.description Description
     * @param {String} opts.coupon_type Coupon type
     * @param {String} opts.start_date_begin Start date begin
     * @param {String} opts.start_date_end Start date end
     * @param {String} opts.expiration_date_begin Expiration date begin
     * @param {String} opts.expiration_date_end Expiration date end
     * @param {Number} opts.affiliate_oid Affiliate oid
     * @param {Boolean} opts.exclude_expired Exclude expired
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */
    this.getCoupons = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'merchant_code': opts['merchant_code'],
        'description': opts['description'],
        'coupon_type': opts['coupon_type'],
        'start_date_begin': opts['start_date_begin'],
        'start_date_end': opts['start_date_end'],
        'expiration_date_begin': opts['expiration_date_begin'],
        'expiration_date_end': opts['expiration_date_end'],
        'affiliate_oid': opts['affiliate_oid'],
        'exclude_expired': opts['exclude_expired'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand'],
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
      var returnType = CouponsResponse;

      return this.apiClient.callApi(
        '/coupon/coupons', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCouponsByQuery operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getCouponsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve coupons by query
     * Retrieves coupons from the account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/CouponQuery} coupon_query Coupon query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */
    this.getCouponsByQuery = function(coupon_query, opts, callback) {
      opts = opts || {};
      var postBody = coupon_query;

      // verify the required parameter 'coupon_query' is set
      if (coupon_query === undefined || coupon_query === null) {
        throw new Error("Missing the required parameter 'coupon_query' when calling getCouponsByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand'],
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
      var returnType = CouponsResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/query', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEditorValues operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getEditorValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponEditorValues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve values needed for a coupon editor
     * Retrieve values needed for a coupon editor 
     * @param {module:com.ultracart.admin.v2/CouponApi~getEditorValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponEditorValues}
     */
    this.getEditorValues = function(callback) {
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
      var returnType = CouponEditorValues;

      return this.apiClient.callApi(
        '/coupon/editor_values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertCoupon operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~insertCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a coupon
     * Insert a coupon on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Coupon} coupon Coupon to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~insertCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.insertCoupon = function(coupon, opts, callback) {
      opts = opts || {};
      var postBody = coupon;

      // verify the required parameter 'coupon' is set
      if (coupon === undefined || coupon === null) {
        throw new Error("Missing the required parameter 'coupon' when calling insertCoupon");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['_expand'],
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
      var returnType = CouponResponse;

      return this.apiClient.callApi(
        '/coupon/coupons', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCoupon operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~updateCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a coupon
     * Update a coupon on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Coupon} coupon Coupon to update
     * @param {Number} coupon_oid The coupon_oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~updateCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.updateCoupon = function(coupon, coupon_oid, opts, callback) {
      opts = opts || {};
      var postBody = coupon;

      // verify the required parameter 'coupon' is set
      if (coupon === undefined || coupon === null) {
        throw new Error("Missing the required parameter 'coupon' when calling updateCoupon");
      }

      // verify the required parameter 'coupon_oid' is set
      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling updateCoupon");
      }


      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
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
      var returnType = CouponResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadCouponCodes operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~uploadCouponCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload one-time codes for a coupon
     * Upload one-time codes for a coupon 
     * @param {Number} coupon_oid The coupon oid to associate with the provided one-time codes.
     * @param {module:com.ultracart.admin.v2.models/UploadCouponCodesRequest} upload_coupon_codes_request One-time coupon codes
     * @param {module:com.ultracart.admin.v2/CouponApi~uploadCouponCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UploadCouponCodesResponse}
     */
    this.uploadCouponCodes = function(coupon_oid, upload_coupon_codes_request, callback) {
      var postBody = upload_coupon_codes_request;

      // verify the required parameter 'coupon_oid' is set
      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling uploadCouponCodes");
      }

      // verify the required parameter 'upload_coupon_codes_request' is set
      if (upload_coupon_codes_request === undefined || upload_coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'upload_coupon_codes_request' when calling uploadCouponCodes");
      }


      var pathParams = {
        'coupon_oid': coupon_oid
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
      var returnType = UploadCouponCodesResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}/upload_codes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
