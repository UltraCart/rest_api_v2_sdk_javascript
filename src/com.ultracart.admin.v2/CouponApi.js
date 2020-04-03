/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Coupon', 'com.ultracart.admin.v2.models/CouponCodesRequest', 'com.ultracart.admin.v2.models/CouponCodesResponse', 'com.ultracart.admin.v2.models/CouponEditorValues', 'com.ultracart.admin.v2.models/CouponQuery', 'com.ultracart.admin.v2.models/CouponResponse', 'com.ultracart.admin.v2.models/CouponsResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/Coupon'), require('../com.ultracart.admin.v2.models/CouponCodesRequest'), require('../com.ultracart.admin.v2.models/CouponCodesResponse'), require('../com.ultracart.admin.v2.models/CouponEditorValues'), require('../com.ultracart.admin.v2.models/CouponQuery'), require('../com.ultracart.admin.v2.models/CouponResponse'), require('../com.ultracart.admin.v2.models/CouponsResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Coupon, root.UltraCartRestApiV2.CouponCodesRequest, root.UltraCartRestApiV2.CouponCodesResponse, root.UltraCartRestApiV2.CouponEditorValues, root.UltraCartRestApiV2.CouponQuery, root.UltraCartRestApiV2.CouponResponse, root.UltraCartRestApiV2.CouponsResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, Coupon, CouponCodesRequest, CouponCodesResponse, CouponEditorValues, CouponQuery, CouponResponse, CouponsResponse, ErrorResponse) {
  'use strict';

  /**
   * Coupon service.
   * @module com.ultracart.admin.v2/CouponApi
   * @version 2.4.87
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
     * @param {module:com.ultracart.admin.v2.models/CouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a coupon
     * Delete a coupon on the UltraCart account. 
     * @param {Number} couponOid The coupon_oid to delete.
     * @param {module:com.ultracart.admin.v2/CouponApi~deleteCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.deleteCoupon = function(couponOid, callback) {
      var postBody = null;

      // verify the required parameter 'couponOid' is set
      if (couponOid === undefined || couponOid === null) {
        throw new Error("Missing the required parameter 'couponOid' when calling deleteCoupon");
      }


      var pathParams = {
        'coupon_oid': couponOid
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
      var returnType = CouponResponse;

      return this.apiClient.callApi(
        '/coupon/coupons/{coupon_oid}', 'DELETE',
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
     * @param {Number} couponOid The coupon oid to generate codes.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesRequest} couponCodesRequest Coupon code generation parameters
     * @param {module:com.ultracart.admin.v2/CouponApi~generateCouponCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponCodesResponse}
     */
    this.generateCouponCodes = function(couponOid, couponCodesRequest, callback) {
      var postBody = couponCodesRequest;

      // verify the required parameter 'couponOid' is set
      if (couponOid === undefined || couponOid === null) {
        throw new Error("Missing the required parameter 'couponOid' when calling generateCouponCodes");
      }

      // verify the required parameter 'couponCodesRequest' is set
      if (couponCodesRequest === undefined || couponCodesRequest === null) {
        throw new Error("Missing the required parameter 'couponCodesRequest' when calling generateCouponCodes");
      }


      var pathParams = {
        'coupon_oid': couponOid
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
     * @param {String} merchantCode The merchant code to generate one time codes.
     * @param {module:com.ultracart.admin.v2.models/CouponCodesRequest} couponCodesRequest Coupon code generation parameters
     * @param {module:com.ultracart.admin.v2/CouponApi~generateOneTimeCodesByMerchantCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponCodesResponse}
     */
    this.generateOneTimeCodesByMerchantCode = function(merchantCode, couponCodesRequest, callback) {
      var postBody = couponCodesRequest;

      // verify the required parameter 'merchantCode' is set
      if (merchantCode === undefined || merchantCode === null) {
        throw new Error("Missing the required parameter 'merchantCode' when calling generateOneTimeCodesByMerchantCode");
      }

      // verify the required parameter 'couponCodesRequest' is set
      if (couponCodesRequest === undefined || couponCodesRequest === null) {
        throw new Error("Missing the required parameter 'couponCodesRequest' when calling generateOneTimeCodesByMerchantCode");
      }


      var pathParams = {
        'merchant_code': merchantCode
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
     * @param {Number} couponOid The coupon oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.getCoupon = function(couponOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'couponOid' is set
      if (couponOid === undefined || couponOid === null) {
        throw new Error("Missing the required parameter 'couponOid' when calling getCoupon");
      }


      var pathParams = {
        'coupon_oid': couponOid
      };
      var queryParams = {
        '_expand': opts['expand'],
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
     * @param {String} merchantCode The coupon merchant code to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponByMerchantCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.getCouponByMerchantCode = function(merchantCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'merchantCode' is set
      if (merchantCode === undefined || merchantCode === null) {
        throw new Error("Missing the required parameter 'merchantCode' when calling getCouponByMerchantCode");
      }


      var pathParams = {
        'merchant_code': merchantCode
      };
      var queryParams = {
        '_expand': opts['expand'],
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
     * @param {String} opts.merchantCode Merchant code
     * @param {String} opts.description Description
     * @param {String} opts.couponType Coupon type
     * @param {String} opts.startDateBegin Start date begin
     * @param {String} opts.startDateEnd Start date end
     * @param {String} opts.expirationDateBegin Expiration date begin
     * @param {String} opts.expirationDateEnd Expiration date end
     * @param {Number} opts.affiliateOid Affiliate oid
     * @param {Boolean} opts.excludeExpired Exclude expired
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */
    this.getCoupons = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'merchant_code': opts['merchantCode'],
        'description': opts['description'],
        'coupon_type': opts['couponType'],
        'start_date_begin': opts['startDateBegin'],
        'start_date_end': opts['startDateEnd'],
        'expiration_date_begin': opts['expirationDateBegin'],
        'expiration_date_end': opts['expirationDateEnd'],
        'affiliate_oid': opts['affiliateOid'],
        'exclude_expired': opts['excludeExpired'],
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_sort': opts['sort'],
        '_expand': opts['expand'],
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
     * @param {module:com.ultracart.admin.v2.models/CouponQuery} couponQuery Coupon query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~getCouponsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */
    this.getCouponsByQuery = function(couponQuery, opts, callback) {
      opts = opts || {};
      var postBody = couponQuery;

      // verify the required parameter 'couponQuery' is set
      if (couponQuery === undefined || couponQuery === null) {
        throw new Error("Missing the required parameter 'couponQuery' when calling getCouponsByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_sort': opts['sort'],
        '_expand': opts['expand'],
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
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
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
        '_expand': opts['expand'],
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
     * @param {Number} couponOid The coupon_oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~updateCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */
    this.updateCoupon = function(coupon, couponOid, opts, callback) {
      opts = opts || {};
      var postBody = coupon;

      // verify the required parameter 'coupon' is set
      if (coupon === undefined || coupon === null) {
        throw new Error("Missing the required parameter 'coupon' when calling updateCoupon");
      }

      // verify the required parameter 'couponOid' is set
      if (couponOid === undefined || couponOid === null) {
        throw new Error("Missing the required parameter 'couponOid' when calling updateCoupon");
      }


      var pathParams = {
        'coupon_oid': couponOid
      };
      var queryParams = {
        '_expand': opts['expand'],
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
  };

  return exports;
}));
