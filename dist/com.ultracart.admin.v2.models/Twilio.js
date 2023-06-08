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
 * The Twilio model module.
 * @module com.ultracart.admin.v2.models/Twilio
 * @version 4.0.157
 */
var Twilio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Twilio</code>.
   * @alias module:com.ultracart.admin.v2.models/Twilio
   */
  function Twilio() {
    _classCallCheck(this, Twilio);

    Twilio.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Twilio, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Twilio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Twilio} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Twilio} The populated <code>Twilio</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Twilio();

        if (data.hasOwnProperty('account_sid')) {
          obj['account_sid'] = _ApiClient["default"].convertToType(data['account_sid'], 'String');
        }

        if (data.hasOwnProperty('auth_token')) {
          obj['auth_token'] = _ApiClient["default"].convertToType(data['auth_token'], 'String');
        }

        if (data.hasOwnProperty('esp_twilio_uuid')) {
          obj['esp_twilio_uuid'] = _ApiClient["default"].convertToType(data['esp_twilio_uuid'], 'String');
        }

        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Twilio;
}();
/**
 * @member {String} account_sid
 */


Twilio.prototype['account_sid'] = undefined;
/**
 * @member {String} auth_token
 */

Twilio.prototype['auth_token'] = undefined;
/**
 * @member {String} esp_twilio_uuid
 */

Twilio.prototype['esp_twilio_uuid'] = undefined;
/**
 * @member {Array.<String>} phone_numbers
 */

Twilio.prototype['phone_numbers'] = undefined;
var _default = Twilio;
exports["default"] = _default;