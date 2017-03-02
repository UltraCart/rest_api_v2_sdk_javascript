/**
 * UltraCart Rest API V2
 * This is the next generation UltraCart REST API...
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
    root.UltraCartRestApiV2.CartSettingsPaymentAmazon = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartSettingsPaymentAmazon model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CartSettingsPaymentAmazon</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CartSettingsPaymentAmazon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} The populated <code>CartSettingsPaymentAmazon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amazon_button_url')) {
        obj['amazon_button_url'] = ApiClient.convertToType(data['amazon_button_url'], 'String');
      }
      if (data.hasOwnProperty('amazon_merchant_id')) {
        obj['amazon_merchant_id'] = ApiClient.convertToType(data['amazon_merchant_id'], 'String');
      }
      if (data.hasOwnProperty('amazon_widget_url')) {
        obj['amazon_widget_url'] = ApiClient.convertToType(data['amazon_widget_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Amazon button URL
   * @member {String} amazon_button_url
   */
  exports.prototype['amazon_button_url'] = undefined;
  /**
   * Amazon merchant ID
   * @member {String} amazon_merchant_id
   */
  exports.prototype['amazon_merchant_id'] = undefined;
  /**
   * Amazon widget URL
   * @member {String} amazon_widget_url
   */
  exports.prototype['amazon_widget_url'] = undefined;



  return exports;
}));


