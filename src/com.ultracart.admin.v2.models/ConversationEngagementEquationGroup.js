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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationEngagementEquationFunction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationEngagementEquationFunction'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationEngagementEquationGroup = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationEngagementEquationFunction);
  }
}(this, function(ApiClient, ConversationEngagementEquationFunction) {
  'use strict';

  /**
   * The ConversationEngagementEquationGroup model module.
   * @module com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
   * @version 3.10.145
   */

  /**
   * Constructs a new <code>ConversationEngagementEquationGroup</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEngagementEquationGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquationGroup} The populated <code>ConversationEngagementEquationGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('functions'))
        obj.functions = ApiClient.convertToType(data['functions'], [ConversationEngagementEquationFunction]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction>} functions
   */
  exports.prototype.functions = undefined;

  return exports;

}));
