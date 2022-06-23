"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _Item = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Item"));

var _ItemResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ItemResponse"));

var _ItemsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ItemsRequest"));

var _ItemsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ItemsResponse"));

var _PricingTiersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/PricingTiersResponse"));

var _TempMultimediaResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TempMultimediaResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Item service.
* @module com.ultracart.admin.v2/ItemApi
* @version 4.0.23-RC
*/
var ItemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ItemApi. 
  * @alias module:com.ultracart.admin.v2/ItemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ItemApi(apiClient) {
    _classCallCheck(this, ItemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteItem operation.
   * @callback module:com.ultracart.admin.v2/ItemApi~deleteItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete an item
   * Delete an item on the UltraCart account. 
   * @param {Number} merchant_item_oid The item oid to delete.
   * @param {module:com.ultracart.admin.v2/ItemApi~deleteItemCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ItemApi, [{
    key: "deleteItem",
    value: function deleteItem(merchant_item_oid, callback) {
      var postBody = null; // verify the required parameter 'merchant_item_oid' is set

      if (merchant_item_oid === undefined || merchant_item_oid === null) {
        throw new Error("Missing the required parameter 'merchant_item_oid' when calling deleteItem");
      }

      var pathParams = {
        'merchant_item_oid': merchant_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/item/items/{merchant_item_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getItem operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~getItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an item
     * Retrieves a single item using the specified item oid. 
     * @param {Number} merchant_item_oid The item oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */

  }, {
    key: "getItem",
    value: function getItem(merchant_item_oid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'merchant_item_oid' is set

      if (merchant_item_oid === undefined || merchant_item_oid === null) {
        throw new Error("Missing the required parameter 'merchant_item_oid' when calling getItem");
      }

      var pathParams = {
        'merchant_item_oid': merchant_item_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ItemResponse["default"];
      return this.apiClient.callApi('/item/items/{merchant_item_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getItemByMerchantItemId operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~getItemByMerchantItemIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an item by item id
     * Retrieves a single item using the specified item id. 
     * @param {String} merchant_item_id The item id to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemByMerchantItemIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */

  }, {
    key: "getItemByMerchantItemId",
    value: function getItemByMerchantItemId(merchant_item_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'merchant_item_id' is set

      if (merchant_item_id === undefined || merchant_item_id === null) {
        throw new Error("Missing the required parameter 'merchant_item_id' when calling getItemByMerchantItemId");
      }

      var pathParams = {
        'merchant_item_id': merchant_item_id
      };
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ItemResponse["default"];
      return this.apiClient.callApi('/item/items/merchant_item_id/{merchant_item_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getItems operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~getItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve items
     * Retrieves a group of items from the account.  If no parameters are specified, all items will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parent_category_id The parent category object id to retrieve items for.  Unspecified means all items on the account.  0 = root
     * @param {String} opts.parent_category_path The parent category path to retrieve items for.  Unspecified means all items on the account.  / = root
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 2000) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch items that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */

  }, {
    key: "getItems",
    value: function getItems(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'parent_category_id': opts['parent_category_id'],
        'parent_category_path': opts['parent_category_path'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ItemsResponse["default"];
      return this.apiClient.callApi('/item/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPricingTiers operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~getPricingTiersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/PricingTiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve pricing tiers
     * Retrieves the pricing tiers 
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ItemApi~getPricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PricingTiersResponse}
     */

  }, {
    key: "getPricingTiers",
    value: function getPricingTiers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PricingTiersResponse["default"];
      return this.apiClient.callApi('/item/pricing_tiers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertItem operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~insertItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an item
     * Create a new item on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Item} item Item to create
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~insertItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */

  }, {
    key: "insertItem",
    value: function insertItem(item, opts, callback) {
      opts = opts || {};
      var postBody = item; // verify the required parameter 'item' is set

      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling insertItem");
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
      var returnType = _ItemResponse["default"];
      return this.apiClient.callApi('/item/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateItem operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~updateItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item
     * Update a new item on the UltraCart account. 
     * @param {Number} merchant_item_oid The item oid to update.
     * @param {module:com.ultracart.admin.v2.models/Item} item Item to update
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~updateItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */

  }, {
    key: "updateItem",
    value: function updateItem(merchant_item_oid, item, opts, callback) {
      opts = opts || {};
      var postBody = item; // verify the required parameter 'merchant_item_oid' is set

      if (merchant_item_oid === undefined || merchant_item_oid === null) {
        throw new Error("Missing the required parameter 'merchant_item_oid' when calling updateItem");
      } // verify the required parameter 'item' is set


      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling updateItem");
      }

      var pathParams = {
        'merchant_item_oid': merchant_item_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ItemResponse["default"];
      return this.apiClient.callApi('/item/items/{merchant_item_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateItems operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~updateItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update multiple items
     * Update multiple item on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/ItemsRequest} items_request Items to update (synchronous maximum 20 / asynchronous maximum 100)
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {Boolean} opts._async True if the operation should be run async.  No result returned
     * @param {module:com.ultracart.admin.v2/ItemApi~updateItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */

  }, {
    key: "updateItems",
    value: function updateItems(items_request, opts, callback) {
      opts = opts || {};
      var postBody = items_request; // verify the required parameter 'items_request' is set

      if (items_request === undefined || items_request === null) {
        throw new Error("Missing the required parameter 'items_request' when calling updateItems");
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
      var returnType = _ItemsResponse["default"];
      return this.apiClient.callApi('/item/items/batch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the uploadTemporaryMultimedia operation.
     * @callback module:com.ultracart.admin.v2/ItemApi~uploadTemporaryMultimediaCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TempMultimediaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload an image to the temporary multimedia.
     * Uploads an image and returns back meta information about the image as well as the identifier needed for the item update. 
     * @param {File} file File to upload
     * @param {module:com.ultracart.admin.v2/ItemApi~uploadTemporaryMultimediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TempMultimediaResponse}
     */

  }, {
    key: "uploadTemporaryMultimedia",
    value: function uploadTemporaryMultimedia(file, callback) {
      var postBody = null; // verify the required parameter 'file' is set

      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadTemporaryMultimedia");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': file
      };
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _TempMultimediaResponse["default"];
      return this.apiClient.callApi('/item/temp_multimedia', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ItemApi;
}();

exports["default"] = ItemApi;