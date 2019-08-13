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
    root.UltraCartRestApiV2.ItemContentAssignment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemContentAssignment model module.
   * @module com.ultracart.admin.v2.models/ItemContentAssignment
   * @version 2.4.18
   */

  /**
   * Constructs a new <code>ItemContentAssignment</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ItemContentAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemContentAssignment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemContentAssignment} The populated <code>ItemContentAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group_oid')) {
        obj['group_oid'] = ApiClient.convertToType(data['group_oid'], 'Number');
      }
      if (data.hasOwnProperty('group_path')) {
        obj['group_path'] = ApiClient.convertToType(data['group_path'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('sort_order')) {
        obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
      }
      if (data.hasOwnProperty('url_part')) {
        obj['url_part'] = ApiClient.convertToType(data['url_part'], 'String');
      }
    }
    return obj;
  }

  /**
   * Page (group) object identifier
   * @member {Number} group_oid
   */
  exports.prototype['group_oid'] = undefined;
  /**
   * Page (group) path
   * @member {String} group_path
   */
  exports.prototype['group_path'] = undefined;
  /**
   * StoreFront host name
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * Sort order (optional)
   * @member {Number} sort_order
   */
  exports.prototype['sort_order'] = undefined;
  /**
   * URL part if the item id is not used
   * @member {String} url_part
   */
  exports.prototype['url_part'] = undefined;



  return exports;
}));


