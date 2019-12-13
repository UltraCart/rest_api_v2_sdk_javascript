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
    root.UltraCartRestApiV2.CartFinalizeOrderRequestOptions = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartFinalizeOrderRequestOptions model module.
   * @module com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions
   * @version 2.4.60
   */

  /**
   * Constructs a new <code>CartFinalizeOrderRequestOptions</code>.
   * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CartFinalizeOrderRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderRequestOptions} The populated <code>CartFinalizeOrderRequestOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auto_approve_purchase_order')) {
        obj['auto_approve_purchase_order'] = ApiClient.convertToType(data['auto_approve_purchase_order'], 'Boolean');
      }
      if (data.hasOwnProperty('channel_partner_code')) {
        obj['channel_partner_code'] = ApiClient.convertToType(data['channel_partner_code'], 'String');
      }
      if (data.hasOwnProperty('channel_partner_oid')) {
        obj['channel_partner_oid'] = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      }
      if (data.hasOwnProperty('channel_partner_order_id')) {
        obj['channel_partner_order_id'] = ApiClient.convertToType(data['channel_partner_order_id'], 'String');
      }
      if (data.hasOwnProperty('consider_recurring')) {
        obj['consider_recurring'] = ApiClient.convertToType(data['consider_recurring'], 'Boolean');
      }
      if (data.hasOwnProperty('credit_card_authorization_amount')) {
        obj['credit_card_authorization_amount'] = ApiClient.convertToType(data['credit_card_authorization_amount'], 'Number');
      }
      if (data.hasOwnProperty('credit_card_authorization_date')) {
        obj['credit_card_authorization_date'] = ApiClient.convertToType(data['credit_card_authorization_date'], 'String');
      }
      if (data.hasOwnProperty('credit_card_authorization_reference_number')) {
        obj['credit_card_authorization_reference_number'] = ApiClient.convertToType(data['credit_card_authorization_reference_number'], 'String');
      }
      if (data.hasOwnProperty('no_realtime_payment_processing')) {
        obj['no_realtime_payment_processing'] = ApiClient.convertToType(data['no_realtime_payment_processing'], 'Boolean');
      }
      if (data.hasOwnProperty('setup_next_cart')) {
        obj['setup_next_cart'] = ApiClient.convertToType(data['setup_next_cart'], 'Boolean');
      }
      if (data.hasOwnProperty('skip_payment_processing')) {
        obj['skip_payment_processing'] = ApiClient.convertToType(data['skip_payment_processing'], 'Boolean');
      }
      if (data.hasOwnProperty('store_completed')) {
        obj['store_completed'] = ApiClient.convertToType(data['store_completed'], 'Boolean');
      }
      if (data.hasOwnProperty('store_if_payment_declines')) {
        obj['store_if_payment_declines'] = ApiClient.convertToType(data['store_if_payment_declines'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Automatically approve the purchase order
   * @member {Boolean} auto_approve_purchase_order
   */
  exports.prototype['auto_approve_purchase_order'] = undefined;
  /**
   * Channel partner code to associate this order with
   * @member {String} channel_partner_code
   */
  exports.prototype['channel_partner_code'] = undefined;
  /**
   * Channel partner oid to associate this order with
   * @member {Number} channel_partner_oid
   */
  exports.prototype['channel_partner_oid'] = undefined;
  /**
   * Channel partner order id for reference
   * @member {String} channel_partner_order_id
   */
  exports.prototype['channel_partner_order_id'] = undefined;
  /**
   * Consider this order a recurring order for the purposes of payment gateway recurring flag
   * @member {Boolean} consider_recurring
   */
  exports.prototype['consider_recurring'] = undefined;
  /**
   * If the order was authorized outside of UltraCart, this is the amount of the authorization
   * @member {Number} credit_card_authorization_amount
   */
  exports.prototype['credit_card_authorization_amount'] = undefined;
  /**
   * If the order was authorized outside of UltraCart, this is the date/time of the authorization
   * @member {String} credit_card_authorization_date
   */
  exports.prototype['credit_card_authorization_date'] = undefined;
  /**
   * If the order was authorized outside of UltraCart, this is the authorization reference number
   * @member {String} credit_card_authorization_reference_number
   */
  exports.prototype['credit_card_authorization_reference_number'] = undefined;
  /**
   * Prevents normal real-time processing of the payment and sends the order to Accounts Receivable
   * @member {Boolean} no_realtime_payment_processing
   */
  exports.prototype['no_realtime_payment_processing'] = undefined;
  /**
   * True if the system should create another cart automatically if the current cart was logged into a profile
   * @member {Boolean} setup_next_cart
   */
  exports.prototype['setup_next_cart'] = undefined;
  /**
   * Skip payment processing and move the order on to shipping (or completed if no shipping required)
   * @member {Boolean} skip_payment_processing
   */
  exports.prototype['skip_payment_processing'] = undefined;
  /**
   * True the order in the completed stage
   * @member {Boolean} store_completed
   */
  exports.prototype['store_completed'] = undefined;
  /**
   * Store the order in accounts receivable if the payment declines
   * @member {Boolean} store_if_payment_declines
   */
  exports.prototype['store_if_payment_declines'] = undefined;



  return exports;
}));


