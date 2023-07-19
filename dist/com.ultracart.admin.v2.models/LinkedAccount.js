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
 * The LinkedAccount model module.
 * @module com.ultracart.admin.v2.models/LinkedAccount
 * @version 4.0.166
 */
var LinkedAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkedAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/LinkedAccount
   */
  function LinkedAccount() {
    _classCallCheck(this, LinkedAccount);

    LinkedAccount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkedAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkedAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LinkedAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LinkedAccount} The populated <code>LinkedAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkedAccount();

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LinkedAccount;
}();
/**
 * The company name of this linked account.
 * @member {String} company
 */


LinkedAccount.prototype['company'] = undefined;
/**
 * A merchant id that is linked to this account.
 * @member {String} merchant_id
 */

LinkedAccount.prototype['merchant_id'] = undefined;
/**
 * If true, this user configuration (permissions, notifications, everything) is cascaded to this linked account.
 * @member {Boolean} selected
 */

LinkedAccount.prototype['selected'] = undefined;
var _default = LinkedAccount;
exports["default"] = _default;