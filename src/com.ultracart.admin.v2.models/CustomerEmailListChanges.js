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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerEmailListChanges = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerEmailListChanges model module.
   * @module com.ultracart.admin.v2.models/CustomerEmailListChanges
   * @version 3.5.0
   */

  /**
   * Constructs a new <code>CustomerEmailListChanges</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEmailListChanges
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerEmailListChanges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} The populated <code>CustomerEmailListChanges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_to_lists'))
        obj.add_to_lists = ApiClient.convertToType(data['add_to_lists'], ['String']);
      if (data.hasOwnProperty('remove_from_lists'))
        obj.remove_from_lists = ApiClient.convertToType(data['remove_from_lists'], ['String']);
    }
    return obj;
  }

  /**
   * Add this customer to these email lists
   * @member {Array.<String>} add_to_lists
   */
  exports.prototype.add_to_lists = undefined;

  /**
   * Remove this customer from these email lists
   * @member {Array.<String>} remove_from_lists
   */
  exports.prototype.remove_from_lists = undefined;

  return exports;

}));
