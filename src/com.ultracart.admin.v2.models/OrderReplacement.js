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
    define(['ApiClient', 'com.ultracart.admin.v2.models/OrderReplacementItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderReplacementItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderReplacement = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderReplacementItem);
  }
}(this, function(ApiClient, OrderReplacementItem) {
  'use strict';




  /**
   * The OrderReplacement model module.
   * @module com.ultracart.admin.v2.models/OrderReplacement
   * @version 2.4.9
   */

  /**
   * Constructs a new <code>OrderReplacement</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacement
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>OrderReplacement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderReplacement} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderReplacement} The populated <code>OrderReplacement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_merchant_notes_new_order')) {
        obj['additional_merchant_notes_new_order'] = ApiClient.convertToType(data['additional_merchant_notes_new_order'], 'String');
      }
      if (data.hasOwnProperty('additional_merchant_notes_original_order')) {
        obj['additional_merchant_notes_original_order'] = ApiClient.convertToType(data['additional_merchant_notes_original_order'], 'String');
      }
      if (data.hasOwnProperty('custom_field1')) {
        obj['custom_field1'] = ApiClient.convertToType(data['custom_field1'], 'String');
      }
      if (data.hasOwnProperty('custom_field2')) {
        obj['custom_field2'] = ApiClient.convertToType(data['custom_field2'], 'String');
      }
      if (data.hasOwnProperty('custom_field3')) {
        obj['custom_field3'] = ApiClient.convertToType(data['custom_field3'], 'String');
      }
      if (data.hasOwnProperty('custom_field4')) {
        obj['custom_field4'] = ApiClient.convertToType(data['custom_field4'], 'String');
      }
      if (data.hasOwnProperty('custom_field5')) {
        obj['custom_field5'] = ApiClient.convertToType(data['custom_field5'], 'String');
      }
      if (data.hasOwnProperty('custom_field6')) {
        obj['custom_field6'] = ApiClient.convertToType(data['custom_field6'], 'String');
      }
      if (data.hasOwnProperty('custom_field7')) {
        obj['custom_field7'] = ApiClient.convertToType(data['custom_field7'], 'String');
      }
      if (data.hasOwnProperty('free')) {
        obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
      }
      if (data.hasOwnProperty('immediate_charge')) {
        obj['immediate_charge'] = ApiClient.convertToType(data['immediate_charge'], 'Boolean');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [OrderReplacementItem]);
      }
      if (data.hasOwnProperty('original_order_id')) {
        obj['original_order_id'] = ApiClient.convertToType(data['original_order_id'], 'String');
      }
      if (data.hasOwnProperty('shipping_method')) {
        obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
      }
      if (data.hasOwnProperty('skip_payment')) {
        obj['skip_payment'] = ApiClient.convertToType(data['skip_payment'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Additional merchant notes to append to the new order
   * @member {String} additional_merchant_notes_new_order
   */
  exports.prototype['additional_merchant_notes_new_order'] = undefined;
  /**
   * Additional merchant notes to append to the original order
   * @member {String} additional_merchant_notes_original_order
   */
  exports.prototype['additional_merchant_notes_original_order'] = undefined;
  /**
   * Custom field 1
   * @member {String} custom_field1
   */
  exports.prototype['custom_field1'] = undefined;
  /**
   * Custom field 2
   * @member {String} custom_field2
   */
  exports.prototype['custom_field2'] = undefined;
  /**
   * Custom field 3
   * @member {String} custom_field3
   */
  exports.prototype['custom_field3'] = undefined;
  /**
   * Custom field 4
   * @member {String} custom_field4
   */
  exports.prototype['custom_field4'] = undefined;
  /**
   * Custom field 5
   * @member {String} custom_field5
   */
  exports.prototype['custom_field5'] = undefined;
  /**
   * Custom field 6
   * @member {String} custom_field6
   */
  exports.prototype['custom_field6'] = undefined;
  /**
   * Custom field 7
   * @member {String} custom_field7
   */
  exports.prototype['custom_field7'] = undefined;
  /**
   * Set to true if this replacement shipment should be free for the customer.
   * @member {Boolean} free
   */
  exports.prototype['free'] = undefined;
  /**
   * Set to true if you want to immediately charge the payment on this order, otherwise it will go to Accounts Receivable.
   * @member {Boolean} immediate_charge
   */
  exports.prototype['immediate_charge'] = undefined;
  /**
   * Items to include in the replacement order
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderReplacementItem>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Original order id
   * @member {String} original_order_id
   */
  exports.prototype['original_order_id'] = undefined;
  /**
   * Shipping method to use.  If not specified or invalid then least cost shipping will take place.
   * @member {String} shipping_method
   */
  exports.prototype['shipping_method'] = undefined;
  /**
   * Set to true if you want to skip the payment as if it was successful.
   * @member {Boolean} skip_payment
   */
  exports.prototype['skip_payment'] = undefined;



  return exports;
}));

