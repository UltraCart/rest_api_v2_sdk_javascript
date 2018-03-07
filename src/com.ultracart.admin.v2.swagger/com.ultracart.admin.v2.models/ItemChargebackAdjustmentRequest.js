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
    root.UltraCartRestApiV2.ItemChargebackAdjustmentRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemChargebackAdjustmentRequest model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>ItemChargebackAdjustmentRequest</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemChargebackAdjustmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} The populated <code>ItemChargebackAdjustmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chargeback_adjustment_request_oid')) {
        obj['chargeback_adjustment_request_oid'] = ApiClient.convertToType(data['chargeback_adjustment_request_oid'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('reason_code')) {
        obj['reason_code'] = ApiClient.convertToType(data['reason_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * Chargeback adjustment request object identifier
   * @member {Integer} chargeback_adjustment_request_oid
   */
  exports.prototype['chargeback_adjustment_request_oid'] = undefined;
  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Reason code
   * @member {String} reason_code
   */
  exports.prototype['reason_code'] = undefined;



  return exports;
}));


