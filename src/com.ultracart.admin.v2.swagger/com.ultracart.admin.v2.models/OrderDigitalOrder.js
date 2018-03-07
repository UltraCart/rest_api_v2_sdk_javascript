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
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderDigitalItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderDigitalOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderDigitalItem);
  }
}(this, function(ApiClient, OrderDigitalItem) {
  'use strict';




  /**
   * The OrderDigitalOrder model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalOrder
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>OrderDigitalOrder</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalOrder
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OrderDigitalOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalOrder} The populated <code>OrderDigitalOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('creation_dts')) {
        obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
      }
      if (data.hasOwnProperty('expiration_dts')) {
        obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [OrderDigitalItem]);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('url_id')) {
        obj['url_id'] = ApiClient.convertToType(data['url_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date/time that the digital order was created
   * @member {String} creation_dts
   */
  exports.prototype['creation_dts'] = undefined;
  /**
   * Expiration date/time of the digital order
   * @member {String} expiration_dts
   */
  exports.prototype['expiration_dts'] = undefined;
  /**
   * Digital items associated with the digital order
   * @member {Array.<module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderDigitalItem>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * URL where the customer can go to and download their digital order content
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * URL ID is a unique code that is part of the URLs
   * @member {String} url_id
   */
  exports.prototype['url_id'] = undefined;



  return exports;
}));


