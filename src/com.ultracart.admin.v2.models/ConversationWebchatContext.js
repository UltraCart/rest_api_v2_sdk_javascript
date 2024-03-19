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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrder', 'com.ultracart.admin.v2.models/Cart', 'com.ultracart.admin.v2.models/HitPageView', 'com.ultracart.admin.v2.models/HitSessionStart', 'com.ultracart.admin.v2.models/HitSessionUtm', 'com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoOrder'), require('./Cart'), require('./HitPageView'), require('./HitSessionStart'), require('./HitSessionUtm'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationWebchatContext = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrder, root.UltraCartRestApiV2.Cart, root.UltraCartRestApiV2.HitPageView, root.UltraCartRestApiV2.HitSessionStart, root.UltraCartRestApiV2.HitSessionUtm, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, AutoOrder, Cart, HitPageView, HitSessionStart, HitSessionUtm, Order) {
  'use strict';

  /**
   * The ConversationWebchatContext model module.
   * @module com.ultracart.admin.v2.models/ConversationWebchatContext
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>ConversationWebchatContext</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatContext
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebchatContext} The populated <code>ConversationWebchatContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auto_orders'))
        obj.auto_orders = ApiClient.convertToType(data['auto_orders'], [AutoOrder]);
      if (data.hasOwnProperty('cart'))
        obj.cart = Cart.constructFromObject(data['cart']);
      if (data.hasOwnProperty('current_url'))
        obj.current_url = ApiClient.convertToType(data['current_url'], 'String');
      if (data.hasOwnProperty('orders'))
        obj.orders = ApiClient.convertToType(data['orders'], [Order]);
      if (data.hasOwnProperty('page_view'))
        obj.page_view = ApiClient.convertToType(data['page_view'], [HitPageView]);
      if (data.hasOwnProperty('session_start'))
        obj.session_start = HitSessionStart.constructFromObject(data['session_start']);
      if (data.hasOwnProperty('session_start_dts'))
        obj.session_start_dts = ApiClient.convertToType(data['session_start_dts'], 'String');
      if (data.hasOwnProperty('session_utm'))
        obj.session_utm = HitSessionUtm.constructFromObject(data['session_utm']);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} auto_orders
   */
  exports.prototype.auto_orders = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Cart} cart
   */
  exports.prototype.cart = undefined;

  /**
   * @member {String} current_url
   */
  exports.prototype.current_url = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Order>} orders
   */
  exports.prototype.orders = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/HitPageView>} page_view
   */
  exports.prototype.page_view = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/HitSessionStart} session_start
   */
  exports.prototype.session_start = undefined;

  /**
   * Date/time that the session was started (if known)
   * @member {String} session_start_dts
   */
  exports.prototype.session_start_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/HitSessionUtm} session_utm
   */
  exports.prototype.session_utm = undefined;

  return exports;

}));
