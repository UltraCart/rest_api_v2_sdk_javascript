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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Distance', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Distance'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemPhysical = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Distance, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Distance, Weight) {
  'use strict';

  /**
   * The ItemPhysical model module.
   * @module com.ultracart.admin.v2.models/ItemPhysical
   * @version 3.1.40
   */

  /**
   * Constructs a new <code>ItemPhysical</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPhysical
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemPhysical} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemPhysical} The populated <code>ItemPhysical</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = Distance.constructFromObject(data['height']);
      if (data.hasOwnProperty('length'))
        obj.length = Distance.constructFromObject(data['length']);
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('width'))
        obj.width = Distance.constructFromObject(data['width']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} length
   */
  exports.prototype.length = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
