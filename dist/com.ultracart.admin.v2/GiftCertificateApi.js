"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
var _GiftCertificate = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificate"));
var _GiftCertificateCreateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificateCreateRequest"));
var _GiftCertificateLedgerEntry = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificateLedgerEntry"));
var _GiftCertificateQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificateQuery"));
var _GiftCertificateResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificateResponse"));
var _GiftCertificatesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GiftCertificatesResponse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* GiftCertificate service.
* @module com.ultracart.admin.v2/GiftCertificateApi
* @version 4.1.15
*/
var GiftCertificateApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new GiftCertificateApi. 
  * @alias module:com.ultracart.admin.v2/GiftCertificateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GiftCertificateApi(apiClient) {
    _classCallCheck(this, GiftCertificateApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addGiftCertificateLedgerEntry operation.
   * @callback module:com.ultracart.admin.v2/GiftCertificateApi~addGiftCertificateLedgerEntryCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a gift certificate ledger entry
   * Adds a ledger entry for this gift certificate. 
   * @param {Number} gift_certificate_oid 
   * @param {module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry} gift_certificate_ledger_entry Gift certificate ledger entry
   * @param {module:com.ultracart.admin.v2/GiftCertificateApi~addGiftCertificateLedgerEntryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
   */
  return _createClass(GiftCertificateApi, [{
    key: "addGiftCertificateLedgerEntry",
    value: function addGiftCertificateLedgerEntry(gift_certificate_oid, gift_certificate_ledger_entry, callback) {
      var postBody = gift_certificate_ledger_entry;
      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling addGiftCertificateLedgerEntry");
      }
      // verify the required parameter 'gift_certificate_ledger_entry' is set
      if (gift_certificate_ledger_entry === undefined || gift_certificate_ledger_entry === null) {
        throw new Error("Missing the required parameter 'gift_certificate_ledger_entry' when calling addGiftCertificateLedgerEntry");
      }
      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GiftCertificateResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/{gift_certificate_oid}/ledger_entry', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~createGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a gift certificate
     * Creates a gift certificate for this merchant account. 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} gift_certificate_create_request Gift certificate create request
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~createGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
  }, {
    key: "createGiftCertificate",
    value: function createGiftCertificate(gift_certificate_create_request, callback) {
      var postBody = gift_certificate_create_request;
      // verify the required parameter 'gift_certificate_create_request' is set
      if (gift_certificate_create_request === undefined || gift_certificate_create_request === null) {
        throw new Error("Missing the required parameter 'gift_certificate_create_request' when calling createGiftCertificate");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GiftCertificateResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~deleteGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a gift certificate
     * Deletes a gift certificate for this merchant account. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~deleteGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteGiftCertificate",
    value: function deleteGiftCertificate(gift_certificate_oid, callback) {
      var postBody = null;
      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling deleteGiftCertificate");
      }
      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gift_certificate/gift_certificates/{gift_certificate_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getGiftCertificateByCode operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by code
     * Retrieves a gift certificate from the account based on the code (the value the customer enters at checkout time). 
     * @param {String} code 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
  }, {
    key: "getGiftCertificateByCode",
    value: function getGiftCertificateByCode(code, callback) {
      var postBody = null;
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getGiftCertificateByCode");
      }
      var pathParams = {
        'code': code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GiftCertificateResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/by_code/{code}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getGiftCertificateByOid operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByOidCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by oid
     * Retrieves a gift certificate from the account based on the internal primary key. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByOidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
  }, {
    key: "getGiftCertificateByOid",
    value: function getGiftCertificateByOid(gift_certificate_oid, callback) {
      var postBody = null;
      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling getGiftCertificateByOid");
      }
      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GiftCertificateResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/{gift_certificate_oid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getGiftCertificatesByEmail operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by email
     * Retrieves all gift certificates from the account based on customer email. 
     * @param {String} email 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificatesResponse}
     */
  }, {
    key: "getGiftCertificatesByEmail",
    value: function getGiftCertificatesByEmail(email, callback) {
      var postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getGiftCertificatesByEmail");
      }
      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GiftCertificatesResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/by_email/{email}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getGiftCertificatesByQuery operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificates by query
     * Retrieves gift certificates from the account.  If no parameters are specified, all gift certificates will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateQuery} gift_certificate_query Gift certificates query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificatesResponse}
     */
  }, {
    key: "getGiftCertificatesByQuery",
    value: function getGiftCertificatesByQuery(gift_certificate_query, opts, callback) {
      opts = opts || {};
      var postBody = gift_certificate_query;
      // verify the required parameter 'gift_certificate_query' is set
      if (gift_certificate_query === undefined || gift_certificate_query === null) {
        throw new Error("Missing the required parameter 'gift_certificate_query' when calling getGiftCertificatesByQuery");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GiftCertificatesResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~updateGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a gift certificate
     * Update a gift certificate for this merchant account. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificate} gift_certificate Gift certificate
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~updateGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
  }, {
    key: "updateGiftCertificate",
    value: function updateGiftCertificate(gift_certificate_oid, gift_certificate, callback) {
      var postBody = gift_certificate;
      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling updateGiftCertificate");
      }
      // verify the required parameter 'gift_certificate' is set
      if (gift_certificate === undefined || gift_certificate === null) {
        throw new Error("Missing the required parameter 'gift_certificate' when calling updateGiftCertificate");
      }
      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GiftCertificateResponse["default"];
      return this.apiClient.callApi('/gift_certificate/gift_certificates/{gift_certificate_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();