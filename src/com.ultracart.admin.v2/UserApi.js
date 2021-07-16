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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/Group', 'com.ultracart.admin.v2.models/GroupResponse', 'com.ultracart.admin.v2.models/GroupsResponse', 'com.ultracart.admin.v2.models/User', 'com.ultracart.admin.v2.models/UserLoginsResponse', 'com.ultracart.admin.v2.models/UserResponse', 'com.ultracart.admin.v2.models/UsersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/Group'), require('../com.ultracart.admin.v2.models/GroupResponse'), require('../com.ultracart.admin.v2.models/GroupsResponse'), require('../com.ultracart.admin.v2.models/User'), require('../com.ultracart.admin.v2.models/UserLoginsResponse'), require('../com.ultracart.admin.v2.models/UserResponse'), require('../com.ultracart.admin.v2.models/UsersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.UserApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.Group, root.UltraCartRestApiV2.GroupResponse, root.UltraCartRestApiV2.GroupsResponse, root.UltraCartRestApiV2.User, root.UltraCartRestApiV2.UserLoginsResponse, root.UltraCartRestApiV2.UserResponse, root.UltraCartRestApiV2.UsersResponse);
  }
}(this, function(ApiClient, ErrorResponse, Group, GroupResponse, GroupsResponse, User, UserLoginsResponse, UserResponse, UsersResponse) {
  'use strict';

  /**
   * User service.
   * @module com.ultracart.admin.v2/UserApi
   * @version 3.3.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:com.ultracart.admin.v2/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:com.ultracart.admin.v2/UserApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group
     * Delete a group on the UltraCart account. 
     * @param {Number} group_oid The group_oid to delete.
     * @param {module:com.ultracart.admin.v2/UserApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(group_oid, callback) {
      var postBody = null;

      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling deleteGroup");
      }


      var pathParams = {
        'group_oid': group_oid
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
      var returnType = null;

      return this.apiClient.callApi(
        '/user/groups/{group_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:com.ultracart.admin.v2/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Delete a user on the UltraCart account. 
     * @param {Number} user_id The user_id to delete.
     * @param {module:com.ultracart.admin.v2/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(user_id, callback) {
      var postBody = null;

      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteUser");
      }


      var pathParams = {
        'user_id': user_id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/user/users/{user_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:com.ultracart.admin.v2/UserApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a group
     * Retrieves a single group using the specified group id. 
     * @param {Number} group_oid The group id to retrieve.
     * @param {module:com.ultracart.admin.v2/UserApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getGroup = function(group_oid, callback) {
      var postBody = null;

      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling getGroup");
      }


      var pathParams = {
        'group_oid': group_oid
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
        '/user/groups/{group_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback module:com.ultracart.admin.v2/UserApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get groups
     * @param {module:com.ultracart.admin.v2/UserApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GroupsResponse}
     */
    this.getGroups = function(callback) {
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
      var returnType = GroupsResponse;

      return this.apiClient.callApi(
        '/user/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:com.ultracart.admin.v2/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user
     * Retrieves a single user using the specified user id. 
     * @param {Number} user_id The user id to retrieve.
     * @param {module:com.ultracart.admin.v2/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserResponse}
     */
    this.getUser = function(user_id, callback) {
      var postBody = null;

      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUser");
      }


      var pathParams = {
        'user_id': user_id
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
      var returnType = UserResponse;

      return this.apiClient.callApi(
        '/user/users/{user_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserLogins operation.
     * @callback module:com.ultracart.admin.v2/UserApi~getUserLoginsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UserLoginsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user's login history
     * Retrieves logins for a single user using the specified user id. 
     * @param {Number} user_id The user id to retrieve.
     * @param {module:com.ultracart.admin.v2/UserApi~getUserLoginsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserLoginsResponse}
     */
    this.getUserLogins = function(user_id, callback) {
      var postBody = null;

      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUserLogins");
      }


      var pathParams = {
        'user_id': user_id
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
      var returnType = UserLoginsResponse;

      return this.apiClient.callApi(
        '/user/users/{user_id}/logins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:com.ultracart.admin.v2/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users
     * @param {module:com.ultracart.admin.v2/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UsersResponse}
     */
    this.getUsers = function(callback) {
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
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/user/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertGroup operation.
     * @callback module:com.ultracart.admin.v2/UserApi~insertGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a group
     * Insert a group on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Group} group Group to insert
     * @param {module:com.ultracart.admin.v2/UserApi~insertGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GroupResponse}
     */
    this.insertGroup = function(group, callback) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling insertGroup");
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
      var returnType = GroupResponse;

      return this.apiClient.callApi(
        '/user/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertUser operation.
     * @callback module:com.ultracart.admin.v2/UserApi~insertUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a user
     * Insert a user on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/User} user User to insert
     * @param {module:com.ultracart.admin.v2/UserApi~insertUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserResponse}
     */
    this.insertUser = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling insertUser");
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
      var returnType = UserResponse;

      return this.apiClient.callApi(
        '/user/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:com.ultracart.admin.v2/UserApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group
     * Update a group on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Group} group Group to update
     * @param {Number} group_oid The group_oid to update.
     * @param {module:com.ultracart.admin.v2/UserApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GroupResponse}
     */
    this.updateGroup = function(group, group_oid, callback) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling updateGroup");
      }

      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling updateGroup");
      }


      var pathParams = {
        'group_oid': group_oid
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
      var returnType = GroupResponse;

      return this.apiClient.callApi(
        '/user/groups/{group_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:com.ultracart.admin.v2/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Update a user on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/User} user User to update
     * @param {Number} user_id The user_id to update.
     * @param {module:com.ultracart.admin.v2/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserResponse}
     */
    this.updateUser = function(user, user_id, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling updateUser");
      }


      var pathParams = {
        'user_id': user_id
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
      var returnType = UserResponse;

      return this.apiClient.callApi(
        '/user/users/{user_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
