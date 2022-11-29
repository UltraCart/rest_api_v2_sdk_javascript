"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Mailgun = _interopRequireDefault(require("./Mailgun"));

var _VerificationRecord = _interopRequireDefault(require("./VerificationRecord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailDomain model module.
 * @module com.ultracart.admin.v2.models/EmailDomain
 * @version 4.0.87-RC
 */
var EmailDomain = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailDomain</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailDomain
   */
  function EmailDomain() {
    _classCallCheck(this, EmailDomain);

    EmailDomain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailDomain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailDomain} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailDomain} The populated <code>EmailDomain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailDomain();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('dkim')) {
          obj['dkim'] = _ApiClient["default"].convertToType(data['dkim'], [_VerificationRecord["default"]]);
        }

        if (data.hasOwnProperty('dkim_status')) {
          obj['dkim_status'] = _ApiClient["default"].convertToType(data['dkim_status'], 'String');
        }

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ApiClient["default"].convertToType(data['domain'], 'String');
        }

        if (data.hasOwnProperty('esp_domain_uuid')) {
          obj['esp_domain_uuid'] = _ApiClient["default"].convertToType(data['esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('identity_status')) {
          obj['identity_status'] = _ApiClient["default"].convertToType(data['identity_status'], 'String');
        }

        if (data.hasOwnProperty('mailgun')) {
          obj['mailgun'] = _Mailgun["default"].constructFromObject(data['mailgun']);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('spf')) {
          obj['spf'] = _VerificationRecord["default"].constructFromObject(data['spf']);
        }

        if (data.hasOwnProperty('start_dkim_dts')) {
          obj['start_dkim_dts'] = _ApiClient["default"].convertToType(data['start_dkim_dts'], 'String');
        }

        if (data.hasOwnProperty('start_identity_dts')) {
          obj['start_identity_dts'] = _ApiClient["default"].convertToType(data['start_identity_dts'], 'String');
        }

        if (data.hasOwnProperty('verification')) {
          obj['verification'] = _VerificationRecord["default"].constructFromObject(data['verification']);
        }
      }

      return obj;
    }
  }]);

  return EmailDomain;
}();
/**
 * @member {String} comment
 */


EmailDomain.prototype['comment'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/VerificationRecord>} dkim
 */

EmailDomain.prototype['dkim'] = undefined;
/**
 * @member {String} dkim_status
 */

EmailDomain.prototype['dkim_status'] = undefined;
/**
 * @member {String} domain
 */

EmailDomain.prototype['domain'] = undefined;
/**
 * @member {String} esp_domain_uuid
 */

EmailDomain.prototype['esp_domain_uuid'] = undefined;
/**
 * @member {String} identity_status
 */

EmailDomain.prototype['identity_status'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Mailgun} mailgun
 */

EmailDomain.prototype['mailgun'] = undefined;
/**
 * @member {String} merchant_id
 */

EmailDomain.prototype['merchant_id'] = undefined;
/**
 * @member {String} provider
 */

EmailDomain.prototype['provider'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/VerificationRecord} spf
 */

EmailDomain.prototype['spf'] = undefined;
/**
 * @member {String} start_dkim_dts
 */

EmailDomain.prototype['start_dkim_dts'] = undefined;
/**
 * @member {String} start_identity_dts
 */

EmailDomain.prototype['start_identity_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/VerificationRecord} verification
 */

EmailDomain.prototype['verification'] = undefined;
var _default = EmailDomain;
exports["default"] = _default;