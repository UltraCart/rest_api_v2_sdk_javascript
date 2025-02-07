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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationLocationStateProvince'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationLocationStateProvince'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationLocationCountry = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationLocationStateProvince);
  }
}(this, function(ApiClient, ConversationLocationStateProvince) {
  'use strict';

  /**
   * The ConversationLocationCountry model module.
   * @module com.ultracart.admin.v2.models/ConversationLocationCountry
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationLocationCountry</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationLocationCountry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationLocationCountry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationLocationCountry} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationLocationCountry} The populated <code>ConversationLocationCountry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('iso2'))
        obj.iso2 = ApiClient.convertToType(data['iso2'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('state_provinces'))
        obj.state_provinces = ApiClient.convertToType(data['state_provinces'], [ConversationLocationStateProvince]);
    }
    return obj;
  }

  /**
   * @member {String} iso2
   */
  exports.prototype.iso2 = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationLocationStateProvince>} state_provinces
   */
  exports.prototype.state_provinces = undefined;

  return exports;

}));
