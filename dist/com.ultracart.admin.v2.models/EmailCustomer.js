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
 * The EmailCustomer model module.
 * @module com.ultracart.admin.v2.models/EmailCustomer
 * @version 4.0.173
 */
var EmailCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCustomer</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCustomer
   */
  function EmailCustomer() {
    _classCallCheck(this, EmailCustomer);

    EmailCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomer} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCustomer} The populated <code>EmailCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCustomer();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('email_customer_uuid')) {
          obj['email_customer_uuid'] = _ApiClient["default"].convertToType(data['email_customer_uuid'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('global_unsubscribe')) {
          obj['global_unsubscribe'] = _ApiClient["default"].convertToType(data['global_unsubscribe'], 'Boolean');
        }

        if (data.hasOwnProperty('last_interaction_dts')) {
          obj['last_interaction_dts'] = _ApiClient["default"].convertToType(data['last_interaction_dts'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('list_uuids')) {
          obj['list_uuids'] = _ApiClient["default"].convertToType(data['list_uuids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EmailCustomer;
}();
/**
 * True if the customer is flagged as active within StoreFront Communications
 * @member {Boolean} active
 */


EmailCustomer.prototype['active'] = undefined;
/**
 * Email
 * @member {String} email
 */

EmailCustomer.prototype['email'] = undefined;
/**
 * Email customer UUID
 * @member {String} email_customer_uuid
 */

EmailCustomer.prototype['email_customer_uuid'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

EmailCustomer.prototype['first_name'] = undefined;
/**
 * True if the customer has globally unsubscribed from all communication.
 * @member {Boolean} global_unsubscribe
 */

EmailCustomer.prototype['global_unsubscribe'] = undefined;
/**
 * Last interaction
 * @member {String} last_interaction_dts
 */

EmailCustomer.prototype['last_interaction_dts'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

EmailCustomer.prototype['last_name'] = undefined;
/**
 * UUIDs of the lists they are subscribed to
 * @member {Array.<String>} list_uuids
 */

EmailCustomer.prototype['list_uuids'] = undefined;
var _default = EmailCustomer;
exports["default"] = _default;