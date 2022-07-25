"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderPaymentECheck model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentECheck
 * @version 4.0.41-RC
 */
var OrderPaymentECheck = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentECheck</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentECheck
   */
  function OrderPaymentECheck() {
    _classCallCheck(this, OrderPaymentECheck);

    OrderPaymentECheck.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentECheck, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentECheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentECheck} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentECheck} The populated <code>OrderPaymentECheck</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentECheck();

        if (data.hasOwnProperty('bank_aba_code')) {
          obj['bank_aba_code'] = _ApiClient["default"].convertToType(data['bank_aba_code'], 'String');
        }

        if (data.hasOwnProperty('bank_account_name')) {
          obj['bank_account_name'] = _ApiClient["default"].convertToType(data['bank_account_name'], 'String');
        }

        if (data.hasOwnProperty('bank_account_number')) {
          obj['bank_account_number'] = _ApiClient["default"].convertToType(data['bank_account_number'], 'String');
        }

        if (data.hasOwnProperty('bank_account_type')) {
          obj['bank_account_type'] = _ApiClient["default"].convertToType(data['bank_account_type'], 'String');
        }

        if (data.hasOwnProperty('bank_name')) {
          obj['bank_name'] = _ApiClient["default"].convertToType(data['bank_name'], 'String');
        }

        if (data.hasOwnProperty('bank_owner_type')) {
          obj['bank_owner_type'] = _ApiClient["default"].convertToType(data['bank_owner_type'], 'String');
        }

        if (data.hasOwnProperty('customer_tax_id')) {
          obj['customer_tax_id'] = _ApiClient["default"].convertToType(data['customer_tax_id'], 'String');
        }

        if (data.hasOwnProperty('drivers_license_dob')) {
          obj['drivers_license_dob'] = _ApiClient["default"].convertToType(data['drivers_license_dob'], 'String');
        }

        if (data.hasOwnProperty('drivers_license_number')) {
          obj['drivers_license_number'] = _ApiClient["default"].convertToType(data['drivers_license_number'], 'String');
        }

        if (data.hasOwnProperty('drivers_license_state')) {
          obj['drivers_license_state'] = _ApiClient["default"].convertToType(data['drivers_license_state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentECheck;
}();
/**
 * Bank routing code
 * @member {String} bank_aba_code
 */


OrderPaymentECheck.prototype['bank_aba_code'] = undefined;
/**
 * Bank account name
 * @member {String} bank_account_name
 */

OrderPaymentECheck.prototype['bank_account_name'] = undefined;
/**
 * Bank account number (masked to last 4)
 * @member {String} bank_account_number
 */

OrderPaymentECheck.prototype['bank_account_number'] = undefined;
/**
 * Bank account type
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck.BankAccountTypeEnum} bank_account_type
 */

OrderPaymentECheck.prototype['bank_account_type'] = undefined;
/**
 * Bank name
 * @member {String} bank_name
 */

OrderPaymentECheck.prototype['bank_name'] = undefined;
/**
 * Bank owner type
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck.BankOwnerTypeEnum} bank_owner_type
 */

OrderPaymentECheck.prototype['bank_owner_type'] = undefined;
/**
 * Customer tax id (masked to last 4)
 * @member {String} customer_tax_id
 */

OrderPaymentECheck.prototype['customer_tax_id'] = undefined;
/**
 * Driver license date of birth
 * @member {String} drivers_license_dob
 */

OrderPaymentECheck.prototype['drivers_license_dob'] = undefined;
/**
 * Driver license number (masked to last 4)
 * @member {String} drivers_license_number
 */

OrderPaymentECheck.prototype['drivers_license_number'] = undefined;
/**
 * Driver license state
 * @member {String} drivers_license_state
 */

OrderPaymentECheck.prototype['drivers_license_state'] = undefined;
/**
 * Allowed values for the <code>bank_account_type</code> property.
 * @enum {String}
 * @readonly
 */

OrderPaymentECheck['BankAccountTypeEnum'] = {
  /**
   * value: "Checking"
   * @const
   */
  "Checking": "Checking",

  /**
   * value: "Savings"
   * @const
   */
  "Savings": "Savings"
};
/**
 * Allowed values for the <code>bank_owner_type</code> property.
 * @enum {String}
 * @readonly
 */

OrderPaymentECheck['BankOwnerTypeEnum'] = {
  /**
   * value: "Personal"
   * @const
   */
  "Personal": "Personal",

  /**
   * value: "Business"
   * @const
   */
  "Business": "Business"
};
var _default = OrderPaymentECheck;
exports["default"] = _default;