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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OauthTokenResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OauthTokenResponse model module.
   * @module com.ultracart.admin.v2.models/OauthTokenResponse
   * @version 2.4.102
   */

  /**
   * Constructs a new <code>OauthTokenResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OauthTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>OauthTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OauthTokenResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OauthTokenResponse} The populated <code>OauthTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('error_description')) {
        obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
      }
      if (data.hasOwnProperty('error_uri')) {
        obj['error_uri'] = ApiClient.convertToType(data['error_uri'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Access token to use in OAuth authenticated API call
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} error_description
   */
  exports.prototype['error_description'] = undefined;
  /**
   * @member {String} error_uri
   */
  exports.prototype['error_uri'] = undefined;
  /**
   * The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token
   * @member {String} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * The refresh token that should be used to fetch a new access token when the expiration occurs
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;
  /**
   * The scope of permissions associated with teh access token
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * Type of token
   * @member {module:com.ultracart.admin.v2.models/OauthTokenResponse.TokenTypeEnum} token_type
   */
  exports.prototype['token_type'] = undefined;


  /**
   * Allowed values for the <code>token_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TokenTypeEnum = {
    /**
     * value: "bearer"
     * @const
     */
    "bearer": "bearer"  };


  return exports;
}));


