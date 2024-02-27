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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemKitComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemKitComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemKitDefinition = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemKitComponent);
  }
}(this, function(ApiClient, ItemKitComponent) {
  'use strict';

  /**
   * The ItemKitDefinition model module.
   * @module com.ultracart.admin.v2.models/ItemKitDefinition
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>ItemKitDefinition</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemKitDefinition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemKitDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemKitDefinition} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemKitDefinition} The populated <code>ItemKitDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('components'))
        obj.components = ApiClient.convertToType(data['components'], [ItemKitComponent]);
    }
    return obj;
  }

  /**
   * Components
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemKitComponent>} components
   */
  exports.prototype.components = undefined;

  return exports;

}));
