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
    root.UltraCartRestApiV2.OrderTaxes = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderTaxes model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderTaxes
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>OrderTaxes</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderTaxes
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>OrderTaxes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderTaxes} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderTaxes} The populated <code>OrderTaxes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tax_city_accounting_code')) {
        obj['tax_city_accounting_code'] = ApiClient.convertToType(data['tax_city_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('tax_country_accounting_code')) {
        obj['tax_country_accounting_code'] = ApiClient.convertToType(data['tax_country_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('tax_county')) {
        obj['tax_county'] = ApiClient.convertToType(data['tax_county'], 'String');
      }
      if (data.hasOwnProperty('tax_county_accounting_code')) {
        obj['tax_county_accounting_code'] = ApiClient.convertToType(data['tax_county_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('tax_postal_code_accounting_code')) {
        obj['tax_postal_code_accounting_code'] = ApiClient.convertToType(data['tax_postal_code_accounting_code'], 'String');
      }
      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_city')) {
        obj['tax_rate_city'] = ApiClient.convertToType(data['tax_rate_city'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_country')) {
        obj['tax_rate_country'] = ApiClient.convertToType(data['tax_rate_country'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_county')) {
        obj['tax_rate_county'] = ApiClient.convertToType(data['tax_rate_county'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_postal_code')) {
        obj['tax_rate_postal_code'] = ApiClient.convertToType(data['tax_rate_postal_code'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_state')) {
        obj['tax_rate_state'] = ApiClient.convertToType(data['tax_rate_state'], 'Number');
      }
      if (data.hasOwnProperty('tax_state_accounting_code')) {
        obj['tax_state_accounting_code'] = ApiClient.convertToType(data['tax_state_accounting_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * QuickBooks tax city code
   * @member {String} tax_city_accounting_code
   */
  exports.prototype['tax_city_accounting_code'] = undefined;
  /**
   * QuickBooks tax country code
   * @member {String} tax_country_accounting_code
   */
  exports.prototype['tax_country_accounting_code'] = undefined;
  /**
   * County used for tax calculation purposes (only in the United States)
   * @member {String} tax_county
   */
  exports.prototype['tax_county'] = undefined;
  /**
   * QuickBooks tax county code
   * @member {String} tax_county_accounting_code
   */
  exports.prototype['tax_county_accounting_code'] = undefined;
  /**
   * QuickBooks tax postal code code
   * @member {String} tax_postal_code_accounting_code
   */
  exports.prototype['tax_postal_code_accounting_code'] = undefined;
  /**
   * Tax rate
   * @member {Number} tax_rate
   */
  exports.prototype['tax_rate'] = undefined;
  /**
   * Tax rate at the city level
   * @member {Number} tax_rate_city
   */
  exports.prototype['tax_rate_city'] = undefined;
  /**
   * Tax rate at the country level
   * @member {Number} tax_rate_country
   */
  exports.prototype['tax_rate_country'] = undefined;
  /**
   * Tax rate at the county level
   * @member {Number} tax_rate_county
   */
  exports.prototype['tax_rate_county'] = undefined;
  /**
   * Tax rate at the postal code level
   * @member {Number} tax_rate_postal_code
   */
  exports.prototype['tax_rate_postal_code'] = undefined;
  /**
   * Tax rate at the state level
   * @member {Number} tax_rate_state
   */
  exports.prototype['tax_rate_state'] = undefined;
  /**
   * QuickBOoks tax state code
   * @member {String} tax_state_accounting_code
   */
  exports.prototype['tax_state_accounting_code'] = undefined;



  return exports;
}));


