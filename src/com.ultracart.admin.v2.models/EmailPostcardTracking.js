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
    root.UltraCartRestApiV2.EmailPostcardTracking = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailPostcardTracking model module.
   * @module com.ultracart.admin.v2.models/EmailPostcardTracking
   * @version 3.10.88
   */

  /**
   * Constructs a new <code>EmailPostcardTracking</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPostcardTracking
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPostcardTracking</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPostcardTracking} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPostcardTracking} The populated <code>EmailPostcardTracking</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('commseq_postcard_uuid'))
        obj.commseq_postcard_uuid = ApiClient.convertToType(data['commseq_postcard_uuid'], 'String');
      if (data.hasOwnProperty('commseq_step_uuid'))
        obj.commseq_step_uuid = ApiClient.convertToType(data['commseq_step_uuid'], 'String');
      if (data.hasOwnProperty('commseq_uuid'))
        obj.commseq_uuid = ApiClient.convertToType(data['commseq_uuid'], 'String');
      if (data.hasOwnProperty('conversion_dts'))
        obj.conversion_dts = ApiClient.convertToType(data['conversion_dts'], 'String');
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('customer_uuid'))
        obj.customer_uuid = ApiClient.convertToType(data['customer_uuid'], 'String');
      if (data.hasOwnProperty('delivered_dts'))
        obj.delivered_dts = ApiClient.convertToType(data['delivered_dts'], 'String');
      if (data.hasOwnProperty('from_address_line1'))
        obj.from_address_line1 = ApiClient.convertToType(data['from_address_line1'], 'String');
      if (data.hasOwnProperty('from_address_line2'))
        obj.from_address_line2 = ApiClient.convertToType(data['from_address_line2'], 'String');
      if (data.hasOwnProperty('from_city'))
        obj.from_city = ApiClient.convertToType(data['from_city'], 'String');
      if (data.hasOwnProperty('from_name'))
        obj.from_name = ApiClient.convertToType(data['from_name'], 'String');
      if (data.hasOwnProperty('from_state'))
        obj.from_state = ApiClient.convertToType(data['from_state'], 'String');
      if (data.hasOwnProperty('from_zip'))
        obj.from_zip = ApiClient.convertToType(data['from_zip'], 'String');
      if (data.hasOwnProperty('mailed_dts'))
        obj.mailed_dts = ApiClient.convertToType(data['mailed_dts'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('postcard_tracking_uuid'))
        obj.postcard_tracking_uuid = ApiClient.convertToType(data['postcard_tracking_uuid'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('submit_dts'))
        obj.submit_dts = ApiClient.convertToType(data['submit_dts'], 'String');
      if (data.hasOwnProperty('to_address_line1'))
        obj.to_address_line1 = ApiClient.convertToType(data['to_address_line1'], 'String');
      if (data.hasOwnProperty('to_address_line2'))
        obj.to_address_line2 = ApiClient.convertToType(data['to_address_line2'], 'String');
      if (data.hasOwnProperty('to_city'))
        obj.to_city = ApiClient.convertToType(data['to_city'], 'String');
      if (data.hasOwnProperty('to_name'))
        obj.to_name = ApiClient.convertToType(data['to_name'], 'String');
      if (data.hasOwnProperty('to_state'))
        obj.to_state = ApiClient.convertToType(data['to_state'], 'String');
      if (data.hasOwnProperty('to_zip'))
        obj.to_zip = ApiClient.convertToType(data['to_zip'], 'String');
      if (data.hasOwnProperty('tracking_description'))
        obj.tracking_description = ApiClient.convertToType(data['tracking_description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} commseq_postcard_uuid
   */
  exports.prototype.commseq_postcard_uuid = undefined;

  /**
   * @member {String} commseq_step_uuid
   */
  exports.prototype.commseq_step_uuid = undefined;

  /**
   * @member {String} commseq_uuid
   */
  exports.prototype.commseq_uuid = undefined;

  /**
   * Conversion date time.
   * @member {String} conversion_dts
   */
  exports.prototype.conversion_dts = undefined;

  /**
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * @member {String} customer_uuid
   */
  exports.prototype.customer_uuid = undefined;

  /**
   * Delivered date time.
   * @member {String} delivered_dts
   */
  exports.prototype.delivered_dts = undefined;

  /**
   * @member {String} from_address_line1
   */
  exports.prototype.from_address_line1 = undefined;

  /**
   * @member {String} from_address_line2
   */
  exports.prototype.from_address_line2 = undefined;

  /**
   * @member {String} from_city
   */
  exports.prototype.from_city = undefined;

  /**
   * @member {String} from_name
   */
  exports.prototype.from_name = undefined;

  /**
   * @member {String} from_state
   */
  exports.prototype.from_state = undefined;

  /**
   * @member {String} from_zip
   */
  exports.prototype.from_zip = undefined;

  /**
   * Mailed date time.
   * @member {String} mailed_dts
   */
  exports.prototype.mailed_dts = undefined;

  /**
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {String} postcard_tracking_uuid
   */
  exports.prototype.postcard_tracking_uuid = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Submit date time.
   * @member {String} submit_dts
   */
  exports.prototype.submit_dts = undefined;

  /**
   * @member {String} to_address_line1
   */
  exports.prototype.to_address_line1 = undefined;

  /**
   * @member {String} to_address_line2
   */
  exports.prototype.to_address_line2 = undefined;

  /**
   * @member {String} to_city
   */
  exports.prototype.to_city = undefined;

  /**
   * @member {String} to_name
   */
  exports.prototype.to_name = undefined;

  /**
   * @member {String} to_state
   */
  exports.prototype.to_state = undefined;

  /**
   * @member {String} to_zip
   */
  exports.prototype.to_zip = undefined;

  /**
   * @member {String} tracking_description
   */
  exports.prototype.tracking_description = undefined;

  return exports;

}));
