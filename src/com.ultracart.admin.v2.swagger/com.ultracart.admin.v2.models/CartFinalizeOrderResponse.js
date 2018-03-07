/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Cart', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartFinalizeOrderResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Cart, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, Cart, Order) {
  'use strict';




  /**
   * The CartFinalizeOrderResponse model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartFinalizeOrderResponse
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>CartFinalizeOrderResponse</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartFinalizeOrderResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CartFinalizeOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartFinalizeOrderResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartFinalizeOrderResponse} The populated <code>CartFinalizeOrderResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
      if (data.hasOwnProperty('next_cart')) {
        obj['next_cart'] = Cart.constructFromObject(data['next_cart']);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = Order.constructFromObject(data['order']);
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
      }
      if (data.hasOwnProperty('successful')) {
        obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Error messages if the order could not be completed
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Cart} next_cart
   */
  exports.prototype['next_cart'] = undefined;
  /**
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Order} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Order ID assigned to the order
   * @member {String} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * True if the cart was converted successfully to an order
   * @member {Boolean} successful
   */
  exports.prototype['successful'] = undefined;



  return exports;
}));


