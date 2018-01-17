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
    root.UltraCartRestApiV2.OrderChannelPartner = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderChannelPartner model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderChannelPartner
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>OrderChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderChannelPartner
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OrderChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderChannelPartner} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderChannelPartner} The populated <code>OrderChannelPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channel_partner_code')) {
        obj['channel_partner_code'] = ApiClient.convertToType(data['channel_partner_code'], 'String');
      }
      if (data.hasOwnProperty('channel_partner_data')) {
        obj['channel_partner_data'] = ApiClient.convertToType(data['channel_partner_data'], 'String');
      }
      if (data.hasOwnProperty('channel_partner_oid')) {
        obj['channel_partner_oid'] = ApiClient.convertToType(data['channel_partner_oid'], 'Integer');
      }
      if (data.hasOwnProperty('channel_partner_order_id')) {
        obj['channel_partner_order_id'] = ApiClient.convertToType(data['channel_partner_order_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The code of the channel partner
   * @member {String} channel_partner_code
   */
  exports.prototype['channel_partner_code'] = undefined;
  /**
   * Additional data provided by the channel partner
   * @member {String} channel_partner_data
   */
  exports.prototype['channel_partner_data'] = undefined;
  /**
   * Channel partner object identifier
   * @member {Integer} channel_partner_oid
   */
  exports.prototype['channel_partner_oid'] = undefined;
  /**
   * The order ID assigned by the channel partner for this order
   * @member {String} channel_partner_order_id
   */
  exports.prototype['channel_partner_order_id'] = undefined;



  return exports;
}));


