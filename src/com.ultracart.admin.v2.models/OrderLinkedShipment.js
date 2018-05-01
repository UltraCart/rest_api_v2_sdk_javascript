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
    root.UltraCartRestApiV2.OrderLinkedShipment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderLinkedShipment model module.
   * @module com.ultracart.admin.v2.models/OrderLinkedShipment
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>OrderLinkedShipment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderLinkedShipment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OrderLinkedShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderLinkedShipment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderLinkedShipment} The populated <code>OrderLinkedShipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('has_linked_shipment')) {
        obj['has_linked_shipment'] = ApiClient.convertToType(data['has_linked_shipment'], 'Boolean');
      }
      if (data.hasOwnProperty('linked_shipment')) {
        obj['linked_shipment'] = ApiClient.convertToType(data['linked_shipment'], 'Boolean');
      }
      if (data.hasOwnProperty('linked_shipment_channel_partner_order_ids')) {
        obj['linked_shipment_channel_partner_order_ids'] = ApiClient.convertToType(data['linked_shipment_channel_partner_order_ids'], ['String']);
      }
      if (data.hasOwnProperty('linked_shipment_order_ids')) {
        obj['linked_shipment_order_ids'] = ApiClient.convertToType(data['linked_shipment_order_ids'], ['String']);
      }
      if (data.hasOwnProperty('linked_shipment_to_order_id')) {
        obj['linked_shipment_to_order_id'] = ApiClient.convertToType(data['linked_shipment_to_order_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if this order has child linked shipments
   * @member {Boolean} has_linked_shipment
   */
  exports.prototype['has_linked_shipment'] = undefined;
  /**
   * True if this order is linked to another parent order
   * @member {Boolean} linked_shipment
   */
  exports.prototype['linked_shipment'] = undefined;
  /**
   * The child linked shipment channel partner order ids
   * @member {Array.<String>} linked_shipment_channel_partner_order_ids
   */
  exports.prototype['linked_shipment_channel_partner_order_ids'] = undefined;
  /**
   * The child linked shipment order ids
   * @member {Array.<String>} linked_shipment_order_ids
   */
  exports.prototype['linked_shipment_order_ids'] = undefined;
  /**
   * The parent order id that this one is linked to
   * @member {String} linked_shipment_to_order_id
   */
  exports.prototype['linked_shipment_to_order_id'] = undefined;



  return exports;
}));

