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
 * The EmailCommseqPostcard model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcard
 * @version 4.0.81-RC
 */
var EmailCommseqPostcard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqPostcard</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcard
   */
  function EmailCommseqPostcard() {
    _classCallCheck(this, EmailCommseqPostcard);

    EmailCommseqPostcard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqPostcard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqPostcard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} The populated <code>EmailCommseqPostcard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqPostcard();

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('edited_by_user')) {
          obj['edited_by_user'] = _ApiClient["default"].convertToType(data['edited_by_user'], 'String');
        }

        if (data.hasOwnProperty('email_communication_sequence_postcard_uuid')) {
          obj['email_communication_sequence_postcard_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_postcard_uuid'], 'String');
        }

        if (data.hasOwnProperty('filter_profile_equation_json')) {
          obj['filter_profile_equation_json'] = _ApiClient["default"].convertToType(data['filter_profile_equation_json'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('postcard_back_container_cjson')) {
          obj['postcard_back_container_cjson'] = _ApiClient["default"].convertToType(data['postcard_back_container_cjson'], 'String');
        }

        if (data.hasOwnProperty('postcard_back_container_uuid')) {
          obj['postcard_back_container_uuid'] = _ApiClient["default"].convertToType(data['postcard_back_container_uuid'], 'String');
        }

        if (data.hasOwnProperty('postcard_container_cjson_last_modified_dts')) {
          obj['postcard_container_cjson_last_modified_dts'] = _ApiClient["default"].convertToType(data['postcard_container_cjson_last_modified_dts'], 'String');
        }

        if (data.hasOwnProperty('postcard_front_container_cjson')) {
          obj['postcard_front_container_cjson'] = _ApiClient["default"].convertToType(data['postcard_front_container_cjson'], 'String');
        }

        if (data.hasOwnProperty('postcard_front_container_uuid')) {
          obj['postcard_front_container_uuid'] = _ApiClient["default"].convertToType(data['postcard_front_container_uuid'], 'String');
        }

        if (data.hasOwnProperty('screenshot_back_url')) {
          obj['screenshot_back_url'] = _ApiClient["default"].convertToType(data['screenshot_back_url'], 'String');
        }

        if (data.hasOwnProperty('screenshot_front_url')) {
          obj['screenshot_front_url'] = _ApiClient["default"].convertToType(data['screenshot_front_url'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqPostcard;
}();
/**
 * Deleted
 * @member {Boolean} deleted
 */


EmailCommseqPostcard.prototype['deleted'] = undefined;
/**
 * Edited by user
 * @member {String} edited_by_user
 */

EmailCommseqPostcard.prototype['edited_by_user'] = undefined;
/**
 * communication sequence postcard uuid
 * @member {String} email_communication_sequence_postcard_uuid
 */

EmailCommseqPostcard.prototype['email_communication_sequence_postcard_uuid'] = undefined;
/**
 * Filter profile equation json
 * @member {String} filter_profile_equation_json
 */

EmailCommseqPostcard.prototype['filter_profile_equation_json'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCommseqPostcard.prototype['merchant_id'] = undefined;
/**
 * Postcard back container cjson
 * @member {String} postcard_back_container_cjson
 */

EmailCommseqPostcard.prototype['postcard_back_container_cjson'] = undefined;
/**
 * Postcard back container uuid
 * @member {String} postcard_back_container_uuid
 */

EmailCommseqPostcard.prototype['postcard_back_container_uuid'] = undefined;
/**
 * Timestamp the last time the container was modified.
 * @member {String} postcard_container_cjson_last_modified_dts
 */

EmailCommseqPostcard.prototype['postcard_container_cjson_last_modified_dts'] = undefined;
/**
 * Postcard front container cjson
 * @member {String} postcard_front_container_cjson
 */

EmailCommseqPostcard.prototype['postcard_front_container_cjson'] = undefined;
/**
 * Postcard front container uuid
 * @member {String} postcard_front_container_uuid
 */

EmailCommseqPostcard.prototype['postcard_front_container_uuid'] = undefined;
/**
 * URL to screenshot of the back of the postcard
 * @member {String} screenshot_back_url
 */

EmailCommseqPostcard.prototype['screenshot_back_url'] = undefined;
/**
 * URL to screenshot of the front of the postcard
 * @member {String} screenshot_front_url
 */

EmailCommseqPostcard.prototype['screenshot_front_url'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCommseqPostcard.prototype['storefront_oid'] = undefined;
var _default = EmailCommseqPostcard;
exports["default"] = _default;