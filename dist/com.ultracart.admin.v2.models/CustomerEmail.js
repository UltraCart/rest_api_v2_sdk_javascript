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
 * The CustomerEmail model module.
 * @module com.ultracart.admin.v2.models/CustomerEmail
 * @version 4.0.150
 */
var CustomerEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEmail
   */
  function CustomerEmail() {
    _classCallCheck(this, CustomerEmail);

    CustomerEmail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEmail} The populated <code>CustomerEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerEmail();

        if (data.hasOwnProperty('customer_profile_email_oid')) {
          obj['customer_profile_email_oid'] = _ApiClient["default"].convertToType(data['customer_profile_email_oid'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('receipt_notification')) {
          obj['receipt_notification'] = _ApiClient["default"].convertToType(data['receipt_notification'], 'Boolean');
        }

        if (data.hasOwnProperty('refund_notification')) {
          obj['refund_notification'] = _ApiClient["default"].convertToType(data['refund_notification'], 'Boolean');
        }

        if (data.hasOwnProperty('shipment_notification')) {
          obj['shipment_notification'] = _ApiClient["default"].convertToType(data['shipment_notification'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CustomerEmail;
}();
/**
 * ID of the email
 * @member {Number} customer_profile_email_oid
 */


CustomerEmail.prototype['customer_profile_email_oid'] = undefined;
/**
 * Email
 * @member {String} email
 */

CustomerEmail.prototype['email'] = undefined;
/**
 * Label
 * @member {String} label
 */

CustomerEmail.prototype['label'] = undefined;
/**
 * CC this email on receipt notifications
 * @member {Boolean} receipt_notification
 */

CustomerEmail.prototype['receipt_notification'] = undefined;
/**
 * CC this email on refund notifications
 * @member {Boolean} refund_notification
 */

CustomerEmail.prototype['refund_notification'] = undefined;
/**
 * CC this email on shipment notifications
 * @member {Boolean} shipment_notification
 */

CustomerEmail.prototype['shipment_notification'] = undefined;
var _default = CustomerEmail;
exports["default"] = _default;