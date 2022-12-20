"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AffiliateClickQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AffiliateClickQuery"));

var _AffiliateClicksResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AffiliateClicksResponse"));

var _AffiliateLedgerQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AffiliateLedgerQuery"));

var _AffiliateLedgersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AffiliateLedgersResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Affiliate service.
* @module com.ultracart.admin.v2/AffiliateApi
* @version 4.0.99-RC
*/
var AffiliateApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AffiliateApi. 
  * @alias module:com.ultracart.admin.v2/AffiliateApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AffiliateApi(apiClient) {
    _classCallCheck(this, AffiliateApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getClicksByQuery operation.
   * @callback module:com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/AffiliateClicksResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve clicks
   * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
   * @param {module:com.ultracart.admin.v2.models/AffiliateClickQuery} click_query Click query
   * @param {Object} opts Optional parameters
   * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
   * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
   * @param {String} opts._expand The object expansion to perform on the result.  Only option is link.
   * @param {module:com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/AffiliateClicksResponse}
   */


  _createClass(AffiliateApi, [{
    key: "getClicksByQuery",
    value: function getClicksByQuery(click_query, opts, callback) {
      opts = opts || {};
      var postBody = click_query; // verify the required parameter 'click_query' is set

      if (click_query === undefined || click_query === null) {
        throw new Error("Missing the required parameter 'click_query' when calling getClicksByQuery");
      }

      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateClicksResponse["default"];
      return this.apiClient.callApi('/affiliate/clicks/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getLedgersByQuery operation.
     * @callback module:com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedgersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve ledger entries
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} ledger_query Ledger query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._expand The object expansion to perform on the result.  Only option is link.
     * @param {module:com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AffiliateLedgersResponse}
     */

  }, {
    key: "getLedgersByQuery",
    value: function getLedgersByQuery(ledger_query, opts, callback) {
      opts = opts || {};
      var postBody = ledger_query; // verify the required parameter 'ledger_query' is set

      if (ledger_query === undefined || ledger_query === null) {
        throw new Error("Missing the required parameter 'ledger_query' when calling getLedgersByQuery");
      }

      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateLedgersResponse["default"];
      return this.apiClient.callApi('/affiliate/ledgers/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AffiliateApi;
}();

exports["default"] = AffiliateApi;