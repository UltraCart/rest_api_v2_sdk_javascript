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
 * The EmailCampaignFolder model module.
 * @module com.ultracart.admin.v2.models/EmailCampaignFolder
 * @version 4.0.65-RC
 */
var EmailCampaignFolder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCampaignFolder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaignFolder
   */
  function EmailCampaignFolder() {
    _classCallCheck(this, EmailCampaignFolder);

    EmailCampaignFolder.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCampaignFolder, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCampaignFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCampaignFolder} The populated <code>EmailCampaignFolder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCampaignFolder();

        if (data.hasOwnProperty('esp_campaign_folder_uuid')) {
          obj['esp_campaign_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_campaign_folder_uuid'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('system_generated')) {
          obj['system_generated'] = _ApiClient["default"].convertToType(data['system_generated'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailCampaignFolder;
}();
/**
 * Email campaign folder UUID
 * @member {String} esp_campaign_folder_uuid
 */


EmailCampaignFolder.prototype['esp_campaign_folder_uuid'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCampaignFolder.prototype['merchant_id'] = undefined;
/**
 * Name of email campaign folder
 * @member {String} name
 */

EmailCampaignFolder.prototype['name'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCampaignFolder.prototype['storefront_oid'] = undefined;
/**
 * System generated folder
 * @member {Boolean} system_generated
 */

EmailCampaignFolder.prototype['system_generated'] = undefined;
var _default = EmailCampaignFolder;
exports["default"] = _default;