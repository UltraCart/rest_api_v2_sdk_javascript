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
    root.UltraCartRestApiV2.ResultSet = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResultSet model module.
   * @module com.ultracart.admin.v2.models/ResultSet
   * @version 2.4.109
   */

  /**
   * Constructs a new <code>ResultSet</code>.
   * @alias module:com.ultracart.admin.v2.models/ResultSet
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ResultSet} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ResultSet} The populated <code>ResultSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'Boolean');
      }
      if (data.hasOwnProperty('next_offset')) {
        obj['next_offset'] = ApiClient.convertToType(data['next_offset'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('total_records')) {
        obj['total_records'] = ApiClient.convertToType(data['total_records'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Number of results in this set
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Maximum number of results that can be returned in a set
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * True if there are more results to query
   * @member {Boolean} more
   */
  exports.prototype['more'] = undefined;
  /**
   * The next offset that you should query to retrieve more results
   * @member {Number} next_offset
   */
  exports.prototype['next_offset'] = undefined;
  /**
   * Offset of this result set (zero based)
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true.
   * @member {Number} total_records
   */
  exports.prototype['total_records'] = undefined;



  return exports;
}));


