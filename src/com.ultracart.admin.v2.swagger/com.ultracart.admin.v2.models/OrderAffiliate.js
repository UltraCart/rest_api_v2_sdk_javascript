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
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliateLedger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderAffiliateLedger'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderAffiliate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderAffiliateLedger);
  }
}(this, function(ApiClient, OrderAffiliateLedger) {
  'use strict';




  /**
   * The OrderAffiliate model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliate
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>OrderAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliate
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OrderAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliate} The populated <code>OrderAffiliate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('affiliate_oid')) {
        obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Integer');
      }
      if (data.hasOwnProperty('ledger_entries')) {
        obj['ledger_entries'] = ApiClient.convertToType(data['ledger_entries'], [OrderAffiliateLedger]);
      }
      if (data.hasOwnProperty('sub_id')) {
        obj['sub_id'] = ApiClient.convertToType(data['sub_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Affiliate ID
   * @member {Integer} affiliate_oid
   */
  exports.prototype['affiliate_oid'] = undefined;
  /**
   * Ledger entries associated with all the commissions earned on this order
   * @member {Array.<module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderAffiliateLedger>} ledger_entries
   */
  exports.prototype['ledger_entries'] = undefined;
  /**
   * Sub identifier provided by the affiliate on the click that generated this order
   * @member {String} sub_id
   */
  exports.prototype['sub_id'] = undefined;



  return exports;
}));


