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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PointOfSaleLocation', 'com.ultracart.admin.v2.models/PointOfSaleReader', 'com.ultracart.admin.v2.models/PointOfSaleRegister'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PointOfSaleLocation'), require('./PointOfSaleReader'), require('./PointOfSaleRegister'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPointOfSale = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PointOfSaleLocation, root.UltraCartRestApiV2.PointOfSaleReader, root.UltraCartRestApiV2.PointOfSaleRegister);
  }
}(this, function(ApiClient, PointOfSaleLocation, PointOfSaleReader, PointOfSaleRegister) {
  'use strict';

  /**
   * The OrderPointOfSale model module.
   * @module com.ultracart.admin.v2.models/OrderPointOfSale
   * @version 3.10.125
   */

  /**
   * Constructs a new <code>OrderPointOfSale</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPointOfSale
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderPointOfSale</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPointOfSale} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPointOfSale} The populated <code>OrderPointOfSale</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('location'))
        obj.location = PointOfSaleLocation.constructFromObject(data['location']);
      if (data.hasOwnProperty('reader'))
        obj.reader = PointOfSaleReader.constructFromObject(data['reader']);
      if (data.hasOwnProperty('register'))
        obj.register = PointOfSaleRegister.constructFromObject(data['register']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/PointOfSaleLocation} location
   */
  exports.prototype.location = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader} reader
   */
  exports.prototype.reader = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PointOfSaleRegister} register
   */
  exports.prototype.register = undefined;

  return exports;

}));
