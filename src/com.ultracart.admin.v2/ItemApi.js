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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/Item', 'com.ultracart.admin.v2.models/ItemResponse', 'com.ultracart.admin.v2.models/ItemsRequest', 'com.ultracart.admin.v2.models/ItemsResponse', 'com.ultracart.admin.v2.models/PricingTiersResponse', 'com.ultracart.admin.v2.models/TempMultimediaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/Item'), require('../com.ultracart.admin.v2.models/ItemResponse'), require('../com.ultracart.admin.v2.models/ItemsRequest'), require('../com.ultracart.admin.v2.models/ItemsResponse'), require('../com.ultracart.admin.v2.models/PricingTiersResponse'), require('../com.ultracart.admin.v2.models/TempMultimediaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.Item, root.UltraCartRestApiV2.ItemResponse, root.UltraCartRestApiV2.ItemsRequest, root.UltraCartRestApiV2.ItemsResponse, root.UltraCartRestApiV2.PricingTiersResponse, root.UltraCartRestApiV2.TempMultimediaResponse);
  }
}(this, function(ApiClient, ErrorResponse, Item, ItemResponse, ItemsRequest, ItemsResponse, PricingTiersResponse, TempMultimediaResponse) {
  'use strict';

  /**
   * Item service.
   * @module com.ultracart.admin.v2/ItemApi
   * @version 2.4.18
   */

  /**
   * Constructs a new ItemApi. 
   * @alias module:com.ultracart.admin.v2/ItemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * @param {Number} merchantItemOid The item oid to delete.
     * @param {module:com.ultracart.admin.v2/ItemApi~deleteItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItem = function(merchantItemOid, callback) {
      var postBody = null;

      // verify the required parameter 'merchantItemOid' is set
      if (merchantItemOid === undefined || merchantItemOid === null) {
        throw new Error("Missing the required parameter 'merchantItemOid' when calling deleteItem");
      }


      var pathParams = {
        'merchant_item_oid': merchantItemOid
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
        '/item/items/{merchant_item_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {Number} merchantItemOid The item oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */
    this.getItem = function(merchantItemOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'merchantItemOid' is set
      if (merchantItemOid === undefined || merchantItemOid === null) {
        throw new Error("Missing the required parameter 'merchantItemOid' when calling getItem");
      }


      var pathParams = {
        'merchant_item_oid': merchantItemOid
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
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
      var returnType = ItemResponse;

      return this.apiClient.callApi(
        '/item/items/{merchant_item_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} merchantItemId The item id to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemByMerchantItemIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */
    this.getItemByMerchantItemId = function(merchantItemId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'merchantItemId' is set
      if (merchantItemId === undefined || merchantItemId === null) {
        throw new Error("Missing the required parameter 'merchantItemId' when calling getItemByMerchantItemId");
      }


      var pathParams = {
        'merchant_item_id': merchantItemId
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
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
      var returnType = ItemResponse;

      return this.apiClient.callApi(
        '/item/items/merchant_item_id/{merchant_item_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {Number} opts.parentCategoryId The parent category object id to retrieve items for.  Unspecified means all items on the account.  0 &#x3D; root
     * @param {String} opts.parentCategoryPath The parent category path to retrieve items for.  Unspecified means all items on the account.  / &#x3D; root
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Default 100, Max 2000) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch items that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~getItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */
    this.getItems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'parent_category_id': opts['parentCategoryId'],
        'parent_category_path': opts['parentCategoryPath'],
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
        '_sort': opts['sort'],
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
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
      var returnType = ItemsResponse;

      return this.apiClient.callApi(
        '/item/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ItemApi~getPricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PricingTiersResponse}
     */
    this.getPricingTiers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PricingTiersResponse;

      return this.apiClient.callApi(
        '/item/pricing_tiers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~insertItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */
    this.insertItem = function(item, opts, callback) {
      opts = opts || {};
      var postBody = item;

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling insertItem");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
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
      var returnType = ItemResponse;

      return this.apiClient.callApi(
        '/item/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {module:com.ultracart.admin.v2.models/Item} item Item to update
     * @param {Number} merchantItemOid The item oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/ItemApi~updateItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemResponse}
     */
    this.updateItem = function(item, merchantItemOid, opts, callback) {
      opts = opts || {};
      var postBody = item;

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling updateItem");
      }

      // verify the required parameter 'merchantItemOid' is set
      if (merchantItemOid === undefined || merchantItemOid === null) {
        throw new Error("Missing the required parameter 'merchantItemOid' when calling updateItem");
      }


      var pathParams = {
        'merchant_item_oid': merchantItemOid
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
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
      var returnType = ItemResponse;

      return this.apiClient.callApi(
        '/item/items/{merchant_item_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {module:com.ultracart.admin.v2.models/ItemsRequest} itemsRequest Items to update (synchronous maximum 20 / asynchronous maximum 100)
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {Boolean} opts.async True if the operation should be run async.  No result returned
     * @param {module:com.ultracart.admin.v2/ItemApi~updateItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ItemsResponse}
     */
    this.updateItems = function(itemsRequest, opts, callback) {
      opts = opts || {};
      var postBody = itemsRequest;

      // verify the required parameter 'itemsRequest' is set
      if (itemsRequest === undefined || itemsRequest === null) {
        throw new Error("Missing the required parameter 'itemsRequest' when calling updateItems");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
        '_async': opts['async'],
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
      var returnType = ItemsResponse;

      return this.apiClient.callApi(
        '/item/items/batch', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.uploadTemporaryMultimedia = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadTemporaryMultimedia");
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
        'file': file
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = TempMultimediaResponse;

      return this.apiClient.callApi(
        '/item/temp_multimedia', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
