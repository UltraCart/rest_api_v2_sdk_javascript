"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Coupon"));

var _CouponAutoApplyConditions = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponAutoApplyConditions"));

var _CouponCodesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponCodesRequest"));

var _CouponCodesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponCodesResponse"));

var _CouponDeletesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponDeletesRequest"));

var _CouponEditorValues = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponEditorValues"));

var _CouponExistsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponExistsResponse"));

var _CouponItemSearchResultsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponItemSearchResultsResponse"));

var _CouponQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponQuery"));

var _CouponResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponResponse"));

var _CouponsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponsRequest"));

var _CouponsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CouponsResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _UploadCouponCodesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/UploadCouponCodesRequest"));

var _UploadCouponCodesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/UploadCouponCodesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Coupon service.
* @module com.ultracart.admin.v2/CouponApi
* @version 4.0.83-RC
*/
var CouponApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CouponApi. 
  * @alias module:com.ultracart.admin.v2/CouponApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CouponApi(apiClient) {
    _classCallCheck(this, CouponApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(CouponApi, [{
    key: "deleteCoupon",
    value: function deleteCoupon(coupon_oid, callback) {
      var postBody = null; // verify the required parameter 'coupon_oid' is set

      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling deleteCoupon");
      }

      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coupon/coupons/{coupon_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "deleteCouponsByCode",
    value: function deleteCouponsByCode(coupon_delete_request, callback) {
      var postBody = coupon_delete_request; // verify the required parameter 'coupon_delete_request' is set

      if (coupon_delete_request === undefined || coupon_delete_request === null) {
        throw new Error("Missing the required parameter 'coupon_delete_request' when calling deleteCouponsByCode");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coupon/coupons/by_code', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "deleteCouponsByOid",
    value: function deleteCouponsByOid(coupon_delete_request, callback) {
      var postBody = coupon_delete_request; // verify the required parameter 'coupon_delete_request' is set

      if (coupon_delete_request === undefined || coupon_delete_request === null) {
        throw new Error("Missing the required parameter 'coupon_delete_request' when calling deleteCouponsByOid");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coupon/coupons/by_oid', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the doesCouponCodeExist operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~doesCouponCodeExistCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponExistsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Determines if a coupon merchant code already exists
     * Determines if a coupon merchant code already exists. 
     * @param {String} merchant_code The coupon merchant code to examine.
     * @param {module:com.ultracart.admin.v2/CouponApi~doesCouponCodeExistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponExistsResponse}
     */

  }, {
    key: "doesCouponCodeExist",
    value: function doesCouponCodeExist(merchant_code, callback) {
      var postBody = null; // verify the required parameter 'merchant_code' is set

      if (merchant_code === undefined || merchant_code === null) {
        throw new Error("Missing the required parameter 'merchant_code' when calling doesCouponCodeExist");
      }

      var pathParams = {
        'merchant_code': merchant_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponExistsResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/merchant_code/{merchant_code}/exists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "generateCouponCodes",
    value: function generateCouponCodes(coupon_oid, coupon_codes_request, callback) {
      var postBody = coupon_codes_request; // verify the required parameter 'coupon_oid' is set

      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling generateCouponCodes");
      } // verify the required parameter 'coupon_codes_request' is set


      if (coupon_codes_request === undefined || coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'coupon_codes_request' when calling generateCouponCodes");
      }

      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponCodesResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/{coupon_oid}/generate_codes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "generateOneTimeCodesByMerchantCode",
    value: function generateOneTimeCodesByMerchantCode(merchant_code, coupon_codes_request, callback) {
      var postBody = coupon_codes_request; // verify the required parameter 'merchant_code' is set

      if (merchant_code === undefined || merchant_code === null) {
        throw new Error("Missing the required parameter 'merchant_code' when calling generateOneTimeCodesByMerchantCode");
      } // verify the required parameter 'coupon_codes_request' is set


      if (coupon_codes_request === undefined || coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'coupon_codes_request' when calling generateOneTimeCodesByMerchantCode");
      }

      var pathParams = {
        'merchant_code': merchant_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponCodesResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/merchant_code/{merchant_code}/generate_codes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAutoApply operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~getAutoApplyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponAutoApplyConditions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve auto apply rules and conditions
     * Retrieve auto apply rules and conditions 
     * @param {module:com.ultracart.admin.v2/CouponApi~getAutoApplyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponAutoApplyConditions}
     */

  }, {
    key: "getAutoApply",
    value: function getAutoApply(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponAutoApplyConditions["default"];
      return this.apiClient.callApi('/coupon/auto_apply', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCoupon",
    value: function getCoupon(coupon_oid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'coupon_oid' is set

      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling getCoupon");
      }

      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/{coupon_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCouponByMerchantCode",
    value: function getCouponByMerchantCode(merchant_code, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'merchant_code' is set

      if (merchant_code === undefined || merchant_code === null) {
        throw new Error("Missing the required parameter 'merchant_code' when calling getCouponByMerchantCode");
      }

      var pathParams = {
        'merchant_code': merchant_code
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/merchant_code/{merchant_code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCoupons",
    value: function getCoupons(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponsResponse["default"];
      return this.apiClient.callApi('/coupon/coupons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCouponsByQuery",
    value: function getCouponsByQuery(coupon_query, opts, callback) {
      opts = opts || {};
      var postBody = coupon_query; // verify the required parameter 'coupon_query' is set

      if (coupon_query === undefined || coupon_query === null) {
        throw new Error("Missing the required parameter 'coupon_query' when calling getCouponsByQuery");
      }

      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CouponsResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getEditorValues",
    value: function getEditorValues(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponEditorValues["default"];
      return this.apiClient.callApi('/coupon/editor_values', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertCoupon",
    value: function insertCoupon(coupon, opts, callback) {
      opts = opts || {};
      var postBody = coupon; // verify the required parameter 'coupon' is set

      if (coupon === undefined || coupon === null) {
        throw new Error("Missing the required parameter 'coupon' when calling insertCoupon");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponResponse["default"];
      return this.apiClient.callApi('/coupon/coupons', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertCoupons operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~insertCouponsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert multiple coupons
     * Insert multiple coupon on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CouponsRequest} coupons_request Coupons to insert (maximum 50)
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/CouponApi~insertCouponsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */

  }, {
    key: "insertCoupons",
    value: function insertCoupons(coupons_request, opts, callback) {
      opts = opts || {};
      var postBody = coupons_request; // verify the required parameter 'coupons_request' is set

      if (coupons_request === undefined || coupons_request === null) {
        throw new Error("Missing the required parameter 'coupons_request' when calling insertCoupons");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponsResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchItems operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~searchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponItemSearchResultsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for items to display within a coupon editor and assign to coupons
     * Searches for items to display within a coupon editor and assign to coupons 
     * @param {Object} opts Optional parameters
     * @param {String} opts.s 
     * @param {Number} opts.m 
     * @param {module:com.ultracart.admin.v2/CouponApi~searchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponItemSearchResultsResponse}
     */

  }, {
    key: "searchItems",
    value: function searchItems(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        's': opts['s'],
        'm': opts['m']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CouponItemSearchResultsResponse["default"];
      return this.apiClient.callApi('/coupon/searchItems', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateAutoApply operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~updateAutoApplyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update auto apply rules and conditions
     * Update auto apply rules and conditions 
     * @param {module:com.ultracart.admin.v2.models/CouponAutoApplyConditions} conditions Conditions
     * @param {module:com.ultracart.admin.v2/CouponApi~updateAutoApplyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateAutoApply",
    value: function updateAutoApply(conditions, callback) {
      var postBody = conditions; // verify the required parameter 'conditions' is set

      if (conditions === undefined || conditions === null) {
        throw new Error("Missing the required parameter 'conditions' when calling updateAutoApply");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/coupon/auto_apply', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} coupon_oid The coupon_oid to update.
     * @param {module:com.ultracart.admin.v2.models/Coupon} coupon Coupon to update
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CouponApi~updateCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponResponse}
     */

  }, {
    key: "updateCoupon",
    value: function updateCoupon(coupon_oid, coupon, opts, callback) {
      opts = opts || {};
      var postBody = coupon; // verify the required parameter 'coupon_oid' is set

      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling updateCoupon");
      } // verify the required parameter 'coupon' is set


      if (coupon === undefined || coupon === null) {
        throw new Error("Missing the required parameter 'coupon' when calling updateCoupon");
      }

      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/{coupon_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateCoupons operation.
     * @callback module:com.ultracart.admin.v2/CouponApi~updateCouponsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CouponsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update multiple coupons
     * Update multiple coupon on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CouponsRequest} coupons_request Coupons to update (synchronous maximum 50 / asynchronous maximum 100)
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {Boolean} opts._async True if the operation should be run async.  No result returned
     * @param {module:com.ultracart.admin.v2/CouponApi~updateCouponsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CouponsResponse}
     */

  }, {
    key: "updateCoupons",
    value: function updateCoupons(coupons_request, opts, callback) {
      opts = opts || {};
      var postBody = coupons_request; // verify the required parameter 'coupons_request' is set

      if (coupons_request === undefined || coupons_request === null) {
        throw new Error("Missing the required parameter 'coupons_request' when calling updateCoupons");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders'],
        '_async': opts['_async']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CouponsResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/batch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "uploadCouponCodes",
    value: function uploadCouponCodes(coupon_oid, upload_coupon_codes_request, callback) {
      var postBody = upload_coupon_codes_request; // verify the required parameter 'coupon_oid' is set

      if (coupon_oid === undefined || coupon_oid === null) {
        throw new Error("Missing the required parameter 'coupon_oid' when calling uploadCouponCodes");
      } // verify the required parameter 'upload_coupon_codes_request' is set


      if (upload_coupon_codes_request === undefined || upload_coupon_codes_request === null) {
        throw new Error("Missing the required parameter 'upload_coupon_codes_request' when calling uploadCouponCodes");
      }

      var pathParams = {
        'coupon_oid': coupon_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _UploadCouponCodesResponse["default"];
      return this.apiClient.callApi('/coupon/coupons/{coupon_oid}/upload_codes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CouponApi;
}();

exports["default"] = CouponApi;