/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPaymentECheck = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderPaymentECheck model module.
   * @module com.ultracart.admin.v2.models/OrderPaymentECheck
   * @version 2.4.18
   */

  /**
   * Constructs a new <code>OrderPaymentECheck</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentECheck
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>OrderPaymentECheck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPaymentECheck} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPaymentECheck} The populated <code>OrderPaymentECheck</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bank_aba_code')) {
        obj['bank_aba_code'] = ApiClient.convertToType(data['bank_aba_code'], 'String');
      }
      if (data.hasOwnProperty('bank_account_name')) {
        obj['bank_account_name'] = ApiClient.convertToType(data['bank_account_name'], 'String');
      }
      if (data.hasOwnProperty('bank_account_number')) {
        obj['bank_account_number'] = ApiClient.convertToType(data['bank_account_number'], 'String');
      }
      if (data.hasOwnProperty('bank_account_type')) {
        obj['bank_account_type'] = ApiClient.convertToType(data['bank_account_type'], 'String');
      }
      if (data.hasOwnProperty('bank_name')) {
        obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
      }
      if (data.hasOwnProperty('bank_owner_type')) {
        obj['bank_owner_type'] = ApiClient.convertToType(data['bank_owner_type'], 'String');
      }
      if (data.hasOwnProperty('customer_tax_id')) {
        obj['customer_tax_id'] = ApiClient.convertToType(data['customer_tax_id'], 'String');
      }
      if (data.hasOwnProperty('drivers_license_dob')) {
        obj['drivers_license_dob'] = ApiClient.convertToType(data['drivers_license_dob'], 'String');
      }
      if (data.hasOwnProperty('drivers_license_number')) {
        obj['drivers_license_number'] = ApiClient.convertToType(data['drivers_license_number'], 'String');
      }
      if (data.hasOwnProperty('drivers_license_state')) {
        obj['drivers_license_state'] = ApiClient.convertToType(data['drivers_license_state'], 'String');
      }
    }
    return obj;
  }

  /**
   * Bank routing code
   * @member {String} bank_aba_code
   */
  exports.prototype['bank_aba_code'] = undefined;
  /**
   * Bank account name
   * @member {String} bank_account_name
   */
  exports.prototype['bank_account_name'] = undefined;
  /**
   * Bank account number (masked to last 4)
   * @member {String} bank_account_number
   */
  exports.prototype['bank_account_number'] = undefined;
  /**
   * Bank account type
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck.BankAccountTypeEnum} bank_account_type
   */
  exports.prototype['bank_account_type'] = undefined;
  /**
   * Bank name
   * @member {String} bank_name
   */
  exports.prototype['bank_name'] = undefined;
  /**
   * Bank owner type
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck.BankOwnerTypeEnum} bank_owner_type
   */
  exports.prototype['bank_owner_type'] = undefined;
  /**
   * Customer tax id (masked to last 4)
   * @member {String} customer_tax_id
   */
  exports.prototype['customer_tax_id'] = undefined;
  /**
   * Driver license date of birth
   * @member {String} drivers_license_dob
   */
  exports.prototype['drivers_license_dob'] = undefined;
  /**
   * Driver license number (masked to last 4)
   * @member {String} drivers_license_number
   */
  exports.prototype['drivers_license_number'] = undefined;
  /**
   * Driver license state
   * @member {String} drivers_license_state
   */
  exports.prototype['drivers_license_state'] = undefined;


  /**
   * Allowed values for the <code>bank_account_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BankAccountTypeEnum = {
    /**
     * value: "Checking"
     * @const
     */
    "Checking": "Checking",
    /**
     * value: "Savings"
     * @const
     */
    "Savings": "Savings"  };

  /**
   * Allowed values for the <code>bank_owner_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BankOwnerTypeEnum = {
    /**
     * value: "Personal"
     * @const
     */
    "Personal": "Personal",
    /**
     * value: "Business"
     * @const
     */
    "Business": "Business"  };


  return exports;
}));


