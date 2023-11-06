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
 * The AccountsReceivableRetryTransactionReject model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject
 * @version 4.0.185
 */
var AccountsReceivableRetryTransactionReject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsReceivableRetryTransactionReject</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject
   */
  function AccountsReceivableRetryTransactionReject() {
    _classCallCheck(this, AccountsReceivableRetryTransactionReject);

    AccountsReceivableRetryTransactionReject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountsReceivableRetryTransactionReject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountsReceivableRetryTransactionReject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject} The populated <code>AccountsReceivableRetryTransactionReject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsReceivableRetryTransactionReject();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountsReceivableRetryTransactionReject;
}();
/**
 * Transaction response name
 * @member {String} name
 */


AccountsReceivableRetryTransactionReject.prototype['name'] = undefined;
/**
 * Transaction response value
 * @member {String} value
 */

AccountsReceivableRetryTransactionReject.prototype['value'] = undefined;
var _default = AccountsReceivableRetryTransactionReject;
exports["default"] = _default;