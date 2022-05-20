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
    root.UltraCartRestApiV2.ScreenRecordingFilterGeoDistance = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingFilterGeoDistance model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
   * @version 3.10.4
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterGeoDistance</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterGeoDistance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} The populated <code>ScreenRecordingFilterGeoDistance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('distance_uom'))
        obj.distance_uom = ApiClient.convertToType(data['distance_uom'], 'String');
      if (data.hasOwnProperty('from_address'))
        obj.from_address = ApiClient.convertToType(data['from_address'], 'String');
      if (data.hasOwnProperty('lat'))
        obj.lat = ApiClient.convertToType(data['lat'], 'Number');
      if (data.hasOwnProperty('lon'))
        obj.lon = ApiClient.convertToType(data['lon'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * @member {String} distance_uom
   */
  exports.prototype.distance_uom = undefined;

  /**
   * @member {String} from_address
   */
  exports.prototype.from_address = undefined;

  /**
   * @member {Number} lat
   */
  exports.prototype.lat = undefined;

  /**
   * @member {Number} lon
   */
  exports.prototype.lon = undefined;

  return exports;

}));
