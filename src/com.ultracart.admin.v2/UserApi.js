/**
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


import ApiClient from "../ApiClient";
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';
import Group from '../com.ultracart.admin.v2.models/Group';
import GroupResponse from '../com.ultracart.admin.v2.models/GroupResponse';
import GroupsResponse from '../com.ultracart.admin.v2.models/GroupsResponse';
import User from '../com.ultracart.admin.v2.models/User';
import UserLoginsResponse from '../com.ultracart.admin.v2.models/UserLoginsResponse';
import UserResponse from '../com.ultracart.admin.v2.models/UserResponse';
import UsersResponse from '../com.ultracart.admin.v2.models/UsersResponse';

/**
* User service.
* @module com.ultracart.admin.v2/UserApi
* @version 4.0.116-RC
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:com.ultracart.admin.v2/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    deleteGroup(group_oid, callback) {
      let postBody = null;
      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling deleteGroup");
      }

      let pathParams = {
        'group_oid': group_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/groups/{group_oid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    deleteUser(user_id, callback) {
      let postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteUser");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getGroup(group_oid, callback) {
      let postBody = null;
      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling getGroup");
      }

      let pathParams = {
        'group_oid': group_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/groups/{group_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getGroups(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupsResponse;
      return this.apiClient.callApi(
        '/user/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getUser(user_id, callback) {
      let postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUser");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/user/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getUserLogins(user_id, callback) {
      let postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getUserLogins");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserLoginsResponse;
      return this.apiClient.callApi(
        '/user/users/{user_id}/logins', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getUsers(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UsersResponse;
      return this.apiClient.callApi(
        '/user/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    insertGroup(group, callback) {
      let postBody = group;
      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling insertGroup");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = GroupResponse;
      return this.apiClient.callApi(
        '/user/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    insertUser(user, callback) {
      let postBody = user;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling insertUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/user/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} group_oid The group_oid to update.
     * @param {module:com.ultracart.admin.v2.models/Group} group Group to update
     * @param {module:com.ultracart.admin.v2/UserApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GroupResponse}
     */
    updateGroup(group_oid, group, callback) {
      let postBody = group;
      // verify the required parameter 'group_oid' is set
      if (group_oid === undefined || group_oid === null) {
        throw new Error("Missing the required parameter 'group_oid' when calling updateGroup");
      }
      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling updateGroup");
      }

      let pathParams = {
        'group_oid': group_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = GroupResponse;
      return this.apiClient.callApi(
        '/user/groups/{group_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} user_id The user_id to update.
     * @param {module:com.ultracart.admin.v2.models/User} user User to update
     * @param {module:com.ultracart.admin.v2/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/UserResponse}
     */
    updateUser(user_id, user, callback) {
      let postBody = user;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling updateUser");
      }
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/user/users/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
