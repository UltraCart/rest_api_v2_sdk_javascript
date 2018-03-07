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
    root.UltraCartRestApiV2.ItemRealtimePricing = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemRealtimePricing model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRealtimePricing
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>ItemRealtimePricing</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRealtimePricing
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemRealtimePricing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRealtimePricing} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRealtimePricing} The populated <code>ItemRealtimePricing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('realtime_pricing_parameter')) {
        obj['realtime_pricing_parameter'] = ApiClient.convertToType(data['realtime_pricing_parameter'], 'String');
      }
      if (data.hasOwnProperty('realtime_pricing_provider')) {
        obj['realtime_pricing_provider'] = ApiClient.convertToType(data['realtime_pricing_provider'], 'String');
      }
      if (data.hasOwnProperty('realtime_pricing_provider_oid')) {
        obj['realtime_pricing_provider_oid'] = ApiClient.convertToType(data['realtime_pricing_provider_oid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Real-time pricing provider parameters
   * @member {String} realtime_pricing_parameter
   */
  exports.prototype['realtime_pricing_parameter'] = undefined;
  /**
   * Real-time pricing provider name
   * @member {String} realtime_pricing_provider
   */
  exports.prototype['realtime_pricing_provider'] = undefined;
  /**
   * Real-time pricing provide object identifier
   * @member {Integer} realtime_pricing_provider_oid
   */
  exports.prototype['realtime_pricing_provider_oid'] = undefined;



  return exports;
}));


