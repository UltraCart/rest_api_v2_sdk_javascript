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
    root.UltraCartRestApiV2.OrderEdiDocument = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderEdiDocument model module.
   * @module com.ultracart.admin.v2.models/OrderEdiDocument
   * @version 3.10.155
   */

  /**
   * Constructs a new <code>OrderEdiDocument</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderEdiDocument
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderEdiDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderEdiDocument} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderEdiDocument} The populated <code>OrderEdiDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('doc_dts'))
        obj.doc_dts = ApiClient.convertToType(data['doc_dts'], 'String');
      if (data.hasOwnProperty('document'))
        obj.document = ApiClient.convertToType(data['document'], 'String');
      if (data.hasOwnProperty('document_type_description'))
        obj.document_type_description = ApiClient.convertToType(data['document_type_description'], 'String');
      if (data.hasOwnProperty('document_type_number'))
        obj.document_type_number = ApiClient.convertToType(data['document_type_number'], 'Number');
      if (data.hasOwnProperty('external_id'))
        obj.external_id = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('functional_acknowledgement'))
        obj.functional_acknowledgement = ApiClient.convertToType(data['functional_acknowledgement'], 'String');
      if (data.hasOwnProperty('functional_acknowledgement_dts'))
        obj.functional_acknowledgement_dts = ApiClient.convertToType(data['functional_acknowledgement_dts'], 'String');
      if (data.hasOwnProperty('functional_acknowledgement_pending'))
        obj.functional_acknowledgement_pending = ApiClient.convertToType(data['functional_acknowledgement_pending'], 'Boolean');
      if (data.hasOwnProperty('group_control_number'))
        obj.group_control_number = ApiClient.convertToType(data['group_control_number'], 'Number');
      if (data.hasOwnProperty('internal_id'))
        obj.internal_id = ApiClient.convertToType(data['internal_id'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('test_mode'))
        obj.test_mode = ApiClient.convertToType(data['test_mode'], 'Boolean');
    }
    return obj;
  }

  /**
   * Direction the document flowed
   * @member {module:com.ultracart.admin.v2.models/OrderEdiDocument.DirectionEnum} direction
   */
  exports.prototype.direction = undefined;

  /**
   * Date/time the document was created/received
   * @member {String} doc_dts
   */
  exports.prototype.doc_dts = undefined;

  /**
   * @member {String} document
   */
  exports.prototype.document = undefined;

  /**
   * @member {String} document_type_description
   */
  exports.prototype.document_type_description = undefined;

  /**
   * @member {Number} document_type_number
   */
  exports.prototype.document_type_number = undefined;

  /**
   * @member {String} external_id
   */
  exports.prototype.external_id = undefined;

  /**
   * @member {String} functional_acknowledgement
   */
  exports.prototype.functional_acknowledgement = undefined;

  /**
   * @member {String} functional_acknowledgement_dts
   */
  exports.prototype.functional_acknowledgement_dts = undefined;

  /**
   * @member {Boolean} functional_acknowledgement_pending
   */
  exports.prototype.functional_acknowledgement_pending = undefined;

  /**
   * @member {Number} group_control_number
   */
  exports.prototype.group_control_number = undefined;

  /**
   * @member {String} internal_id
   */
  exports.prototype.internal_id = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {Boolean} test_mode
   */
  exports.prototype.test_mode = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "inbound"
     * @const
     */
    inbound: "inbound",

    /**
     * value: "outbound"
     * @const
     */
    outbound: "outbound"
  };

  return exports;

}));
