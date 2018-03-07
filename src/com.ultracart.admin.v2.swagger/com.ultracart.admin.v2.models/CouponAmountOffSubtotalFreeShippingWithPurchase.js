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
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponAmountOffSubtotalFreeShippingWithPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponAmountOffSubtotalFreeShippingWithPurchase model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} The populated <code>CouponAmountOffSubtotalFreeShippingWithPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discount_amount')) {
        obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
      }
      if (data.hasOwnProperty('purchase_amount')) {
        obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'Number');
      }
      if (data.hasOwnProperty('shipping_methods')) {
        obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The amount of subtotal discount
   * @member {Number} discount_amount
   */
  exports.prototype['discount_amount'] = undefined;
  /**
   * The purchase amount to qualify for subtotal discount and free shipping
   * @member {Number} purchase_amount
   */
  exports.prototype['purchase_amount'] = undefined;
  /**
   * One or more shipping methods that may be free
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype['shipping_methods'] = undefined;



  return exports;
}));


