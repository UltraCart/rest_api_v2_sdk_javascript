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
    root.UltraCartRestApiV2.EmailSegmentCustomer = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailSegmentCustomer model module.
   * @module com.ultracart.admin.v2.models/EmailSegmentCustomer
   * @version 2.4.42
   */

  /**
   * Constructs a new <code>EmailSegmentCustomer</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegmentCustomer
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EmailSegmentCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailSegmentCustomer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailSegmentCustomer} The populated <code>EmailSegmentCustomer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add_dts')) {
        obj['add_dts'] = ApiClient.convertToType(data['add_dts'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('email_customer_uuid')) {
        obj['email_customer_uuid'] = ApiClient.convertToType(data['email_customer_uuid'], 'String');
      }
      if (data.hasOwnProperty('email_segment_member_uuid')) {
        obj['email_segment_member_uuid'] = ApiClient.convertToType(data['email_segment_member_uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Added timestamp
   * @member {String} add_dts
   */
  exports.prototype['add_dts'] = undefined;
  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Email customer UUID
   * @member {String} email_customer_uuid
   */
  exports.prototype['email_customer_uuid'] = undefined;
  /**
   * Email segment member UUID
   * @member {String} email_segment_member_uuid
   */
  exports.prototype['email_segment_member_uuid'] = undefined;



  return exports;
}));


