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
    root.UltraCartRestApiV2.ItemRevguard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemRevguard model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRevguard
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>ItemRevguard</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRevguard
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ItemRevguard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRevguard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ItemRevguard} The populated <code>ItemRevguard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('revguard_canceled_csr_prompt_group')) {
        obj['revguard_canceled_csr_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_csr_prompt_group'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_canceled_ivr_prompt_group')) {
        obj['revguard_canceled_ivr_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_ivr_prompt_group'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_canceled_web_prompt_group')) {
        obj['revguard_canceled_web_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_web_prompt_group'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_client_brand')) {
        obj['revguard_client_brand'] = ApiClient.convertToType(data['revguard_client_brand'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_csr_prompt_group')) {
        obj['revguard_csr_prompt_group'] = ApiClient.convertToType(data['revguard_csr_prompt_group'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_ivr_prompt_group')) {
        obj['revguard_ivr_prompt_group'] = ApiClient.convertToType(data['revguard_ivr_prompt_group'], 'Integer');
      }
      if (data.hasOwnProperty('revguard_web_prompt_group')) {
        obj['revguard_web_prompt_group'] = ApiClient.convertToType(data['revguard_web_prompt_group'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Canceled CSR prompt group
   * @member {Integer} revguard_canceled_csr_prompt_group
   */
  exports.prototype['revguard_canceled_csr_prompt_group'] = undefined;
  /**
   * IVR prompt group
   * @member {Integer} revguard_canceled_ivr_prompt_group
   */
  exports.prototype['revguard_canceled_ivr_prompt_group'] = undefined;
  /**
   * Canceled web prompt group
   * @member {Integer} revguard_canceled_web_prompt_group
   */
  exports.prototype['revguard_canceled_web_prompt_group'] = undefined;
  /**
   * Client brand
   * @member {Integer} revguard_client_brand
   */
  exports.prototype['revguard_client_brand'] = undefined;
  /**
   * CSR prompt group
   * @member {Integer} revguard_csr_prompt_group
   */
  exports.prototype['revguard_csr_prompt_group'] = undefined;
  /**
   * IVR prompt group
   * @member {Integer} revguard_ivr_prompt_group
   */
  exports.prototype['revguard_ivr_prompt_group'] = undefined;
  /**
   * Web prompt group
   * @member {Integer} revguard_web_prompt_group
   */
  exports.prototype['revguard_web_prompt_group'] = undefined;



  return exports;
}));


