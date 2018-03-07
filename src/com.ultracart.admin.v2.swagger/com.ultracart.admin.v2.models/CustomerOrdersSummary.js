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
    root.UltraCartRestApiV2.CustomerOrdersSummary = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerOrdersSummary model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerOrdersSummary
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>CustomerOrdersSummary</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerOrdersSummary
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CustomerOrdersSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerOrdersSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerOrdersSummary} The populated <code>CustomerOrdersSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('first_order_dts')) {
        obj['first_order_dts'] = ApiClient.convertToType(data['first_order_dts'], 'String');
      }
      if (data.hasOwnProperty('last_order_dts')) {
        obj['last_order_dts'] = ApiClient.convertToType(data['last_order_dts'], 'String');
      }
      if (data.hasOwnProperty('order_count')) {
        obj['order_count'] = ApiClient.convertToType(data['order_count'], 'Integer');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * First order date
   * @member {String} first_order_dts
   */
  exports.prototype['first_order_dts'] = undefined;
  /**
   * Last order date
   * @member {String} last_order_dts
   */
  exports.prototype['last_order_dts'] = undefined;
  /**
   * Total number of orders
   * @member {Integer} order_count
   */
  exports.prototype['order_count'] = undefined;
  /**
   * Total amount associated with the orders
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));

