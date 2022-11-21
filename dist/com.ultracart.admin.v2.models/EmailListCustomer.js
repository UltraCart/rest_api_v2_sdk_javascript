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
 * The EmailListCustomer model module.
 * @module com.ultracart.admin.v2.models/EmailListCustomer
 * @version 4.0.84-RC
 */
var EmailListCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailListCustomer</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListCustomer
   */
  function EmailListCustomer() {
    _classCallCheck(this, EmailListCustomer);

    EmailListCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailListCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailListCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListCustomer} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListCustomer} The populated <code>EmailListCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailListCustomer();

        if (data.hasOwnProperty('add_dts')) {
          obj['add_dts'] = _ApiClient["default"].convertToType(data['add_dts'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('email_customer_uuid')) {
          obj['email_customer_uuid'] = _ApiClient["default"].convertToType(data['email_customer_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_list_member_uuid')) {
          obj['email_list_member_uuid'] = _ApiClient["default"].convertToType(data['email_list_member_uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailListCustomer;
}();
/**
 * Added timestamp
 * @member {String} add_dts
 */


EmailListCustomer.prototype['add_dts'] = undefined;
/**
 * Email
 * @member {String} email
 */

EmailListCustomer.prototype['email'] = undefined;
/**
 * Email customer UUID
 * @member {String} email_customer_uuid
 */

EmailListCustomer.prototype['email_customer_uuid'] = undefined;
/**
 * Email list member UUID
 * @member {String} email_list_member_uuid
 */

EmailListCustomer.prototype['email_list_member_uuid'] = undefined;
var _default = EmailListCustomer;
exports["default"] = _default;