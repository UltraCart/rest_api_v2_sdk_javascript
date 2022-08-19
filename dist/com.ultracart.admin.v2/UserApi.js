"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _Group = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Group"));

var _GroupResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GroupResponse"));

var _GroupsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GroupsResponse"));

var _User = _interopRequireDefault(require("../com.ultracart.admin.v2.models/User"));

var _UserLoginsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/UserLoginsResponse"));

var _UserResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/UserResponse"));

var _UsersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/UsersResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* User service.
* @module com.ultracart.admin.v2/UserApi
* @version 4.0.55-RC
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:com.ultracart.admin.v2/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(UserApi, [{
    key: "deleteGroup",
    value: function deleteGroup(group_oid, callback) {
      var postBody = null; // verify the required parameter 'group_oid' is set

      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling deleteGroup");
      }

      var pathParams = {
        'group_oid': group_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/groups/{group_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "deleteUser",
    value: function deleteUser(user_id, callback) {
      var postBody = null; // verify the required parameter 'user_id' is set

      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteUser");
      }

      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getGroup",
    value: function getGroup(group_oid, callback) {
      var postBody = null; // verify the required parameter 'group_oid' is set

      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling getGroup");
      }

      var pathParams = {
        'group_oid': group_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/groups/{group_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getGroups",
    value: function getGroups(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GroupsResponse["default"];
      return this.apiClient.callApi('/user/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getUser",
    value: function getUser(user_id, callback) {
      var postBody = null; // verify the required parameter 'user_id' is set

      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUser");
      }

      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserResponse["default"];
      return this.apiClient.callApi('/user/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getUserLogins",
    value: function getUserLogins(user_id, callback) {
      var postBody = null; // verify the required parameter 'user_id' is set

      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUserLogins");
      }

      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserLoginsResponse["default"];
      return this.apiClient.callApi('/user/users/{user_id}/logins', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getUsers",
    value: function getUsers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UsersResponse["default"];
      return this.apiClient.callApi('/user/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertGroup",
    value: function insertGroup(group, callback) {
      var postBody = group; // verify the required parameter 'group' is set

      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling insertGroup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _GroupResponse["default"];
      return this.apiClient.callApi('/user/groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertUser",
    value: function insertUser(user, callback) {
      var postBody = user; // verify the required parameter 'user' is set

      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling insertUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _UserResponse["default"];
      return this.apiClient.callApi('/user/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} group_oid The group_oid to update.
     * @param {module:com.ultracart.admin.v2.models/Group} group Group to update
     * @param {module:com.ultracart.admin.v2/UserApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GroupResponse}
     */

  }, {
    key: "updateGroup",
    value: function updateGroup(group_oid, group, callback) {
      var postBody = group; // verify the required parameter 'group_oid' is set

      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling updateGroup");
      } // verify the required parameter 'group' is set


      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling updateGroup");
      }

      var pathParams = {
        'group_oid': group_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _GroupResponse["default"];
      return this.apiClient.callApi('/user/groups/{group_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} user_id The user_id to update.
     * @param {module:com.ultracart.admin.v2.models/User} user User to update
     * @param {module:com.ultracart.admin.v2/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserResponse}
     */

  }, {
    key: "updateUser",
    value: function updateUser(user_id, user, callback) {
      var postBody = user; // verify the required parameter 'user_id' is set

      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling updateUser");
      } // verify the required parameter 'user' is set


      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _UserResponse["default"];
      return this.apiClient.callApi('/user/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;