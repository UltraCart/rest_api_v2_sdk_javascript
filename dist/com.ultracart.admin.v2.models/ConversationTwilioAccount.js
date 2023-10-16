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
 * The ConversationTwilioAccount model module.
 * @module com.ultracart.admin.v2.models/ConversationTwilioAccount
 * @version 4.0.179
 */
var ConversationTwilioAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationTwilioAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationTwilioAccount
   */
  function ConversationTwilioAccount() {
    _classCallCheck(this, ConversationTwilioAccount);

    ConversationTwilioAccount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationTwilioAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationTwilioAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationTwilioAccount} The populated <code>ConversationTwilioAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationTwilioAccount();

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('twilio_phone_numbers')) {
          obj['twilio_phone_numbers'] = _ApiClient["default"].convertToType(data['twilio_phone_numbers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ConversationTwilioAccount;
}();
/**
 * @member {String} merchant_id
 */


ConversationTwilioAccount.prototype['merchant_id'] = undefined;
/**
 * @member {Array.<String>} twilio_phone_numbers
 */

ConversationTwilioAccount.prototype['twilio_phone_numbers'] = undefined;
var _default = ConversationTwilioAccount;
exports["default"] = _default;