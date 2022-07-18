"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountsReceivableRetryConfig = _interopRequireDefault(require("./AccountsReceivableRetryConfig"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AccountsReceivableRetryConfigResponse model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse
 * @version 4.0.35-RC
 */
var AccountsReceivableRetryConfigResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsReceivableRetryConfigResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse
   */
  function AccountsReceivableRetryConfigResponse() {
    _classCallCheck(this, AccountsReceivableRetryConfigResponse);

    AccountsReceivableRetryConfigResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountsReceivableRetryConfigResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountsReceivableRetryConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse} The populated <code>AccountsReceivableRetryConfigResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsReceivableRetryConfigResponse();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _AccountsReceivableRetryConfig["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('coupon_codes')) {
          obj['coupon_codes'] = _ApiClient["default"].convertToType(data['coupon_codes'], ['String']);
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], ['String']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('has_linked_accounts')) {
          obj['has_linked_accounts'] = _ApiClient["default"].convertToType(data['has_linked_accounts'], 'Boolean');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return AccountsReceivableRetryConfigResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} config
 */


AccountsReceivableRetryConfigResponse.prototype['config'] = undefined;
/**
 * @member {Array.<String>} coupon_codes
 */

AccountsReceivableRetryConfigResponse.prototype['coupon_codes'] = undefined;
/**
 * @member {Array.<String>} emails
 */

AccountsReceivableRetryConfigResponse.prototype['emails'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

AccountsReceivableRetryConfigResponse.prototype['error'] = undefined;
/**
 * @member {Boolean} has_linked_accounts
 */

AccountsReceivableRetryConfigResponse.prototype['has_linked_accounts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

AccountsReceivableRetryConfigResponse.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

AccountsReceivableRetryConfigResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

AccountsReceivableRetryConfigResponse.prototype['warning'] = undefined;
var _default = AccountsReceivableRetryConfigResponse;
exports["default"] = _default;