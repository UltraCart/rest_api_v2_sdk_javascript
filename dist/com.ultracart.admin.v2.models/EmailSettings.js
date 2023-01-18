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
 * The EmailSettings model module.
 * @module com.ultracart.admin.v2.models/EmailSettings
 * @version 4.0.115-RC
 */
var EmailSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSettings
   */
  function EmailSettings() {
    _classCallCheck(this, EmailSettings);

    EmailSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSettings} The populated <code>EmailSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSettings();

        if (data.hasOwnProperty('marketing_esp_domain_user')) {
          obj['marketing_esp_domain_user'] = _ApiClient["default"].convertToType(data['marketing_esp_domain_user'], 'String');
        }

        if (data.hasOwnProperty('marketing_esp_domain_uuid')) {
          obj['marketing_esp_domain_uuid'] = _ApiClient["default"].convertToType(data['marketing_esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('marketing_esp_friendly_name')) {
          obj['marketing_esp_friendly_name'] = _ApiClient["default"].convertToType(data['marketing_esp_friendly_name'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_address1')) {
          obj['postcard_from_address1'] = _ApiClient["default"].convertToType(data['postcard_from_address1'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_address2')) {
          obj['postcard_from_address2'] = _ApiClient["default"].convertToType(data['postcard_from_address2'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_city')) {
          obj['postcard_from_city'] = _ApiClient["default"].convertToType(data['postcard_from_city'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_name')) {
          obj['postcard_from_name'] = _ApiClient["default"].convertToType(data['postcard_from_name'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_postal_code')) {
          obj['postcard_from_postal_code'] = _ApiClient["default"].convertToType(data['postcard_from_postal_code'], 'String');
        }

        if (data.hasOwnProperty('postcard_from_state')) {
          obj['postcard_from_state'] = _ApiClient["default"].convertToType(data['postcard_from_state'], 'String');
        }

        if (data.hasOwnProperty('reviews_io_configured')) {
          obj['reviews_io_configured'] = _ApiClient["default"].convertToType(data['reviews_io_configured'], 'Boolean');
        }

        if (data.hasOwnProperty('sms_esp_twilio_uuid')) {
          obj['sms_esp_twilio_uuid'] = _ApiClient["default"].convertToType(data['sms_esp_twilio_uuid'], 'String');
        }

        if (data.hasOwnProperty('sms_phone_number')) {
          obj['sms_phone_number'] = _ApiClient["default"].convertToType(data['sms_phone_number'], 'String');
        }

        if (data.hasOwnProperty('transactional_esp_domain_user')) {
          obj['transactional_esp_domain_user'] = _ApiClient["default"].convertToType(data['transactional_esp_domain_user'], 'String');
        }

        if (data.hasOwnProperty('transactional_esp_domain_uuid')) {
          obj['transactional_esp_domain_uuid'] = _ApiClient["default"].convertToType(data['transactional_esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('transactional_esp_friendly_name')) {
          obj['transactional_esp_friendly_name'] = _ApiClient["default"].convertToType(data['transactional_esp_friendly_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailSettings;
}();
/**
 * @member {String} marketing_esp_domain_user
 */


EmailSettings.prototype['marketing_esp_domain_user'] = undefined;
/**
 * @member {String} marketing_esp_domain_uuid
 */

EmailSettings.prototype['marketing_esp_domain_uuid'] = undefined;
/**
 * @member {String} marketing_esp_friendly_name
 */

EmailSettings.prototype['marketing_esp_friendly_name'] = undefined;
/**
 * @member {String} postcard_from_address1
 */

EmailSettings.prototype['postcard_from_address1'] = undefined;
/**
 * @member {String} postcard_from_address2
 */

EmailSettings.prototype['postcard_from_address2'] = undefined;
/**
 * @member {String} postcard_from_city
 */

EmailSettings.prototype['postcard_from_city'] = undefined;
/**
 * @member {String} postcard_from_name
 */

EmailSettings.prototype['postcard_from_name'] = undefined;
/**
 * @member {String} postcard_from_postal_code
 */

EmailSettings.prototype['postcard_from_postal_code'] = undefined;
/**
 * @member {String} postcard_from_state
 */

EmailSettings.prototype['postcard_from_state'] = undefined;
/**
 * True if the Reviews.io integration is configured
 * @member {Boolean} reviews_io_configured
 */

EmailSettings.prototype['reviews_io_configured'] = undefined;
/**
 * @member {String} sms_esp_twilio_uuid
 */

EmailSettings.prototype['sms_esp_twilio_uuid'] = undefined;
/**
 * @member {String} sms_phone_number
 */

EmailSettings.prototype['sms_phone_number'] = undefined;
/**
 * @member {String} transactional_esp_domain_user
 */

EmailSettings.prototype['transactional_esp_domain_user'] = undefined;
/**
 * @member {String} transactional_esp_domain_uuid
 */

EmailSettings.prototype['transactional_esp_domain_uuid'] = undefined;
/**
 * @member {String} transactional_esp_friendly_name
 */

EmailSettings.prototype['transactional_esp_friendly_name'] = undefined;
var _default = EmailSettings;
exports["default"] = _default;