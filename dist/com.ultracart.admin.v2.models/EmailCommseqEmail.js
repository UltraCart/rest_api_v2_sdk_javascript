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
 * The EmailCommseqEmail model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqEmail
 * @version 4.0.77-RC
 */
var EmailCommseqEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqEmail
   */
  function EmailCommseqEmail() {
    _classCallCheck(this, EmailCommseqEmail);

    EmailCommseqEmail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqEmail} The populated <code>EmailCommseqEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqEmail();

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('edited_by_user')) {
          obj['edited_by_user'] = _ApiClient["default"].convertToType(data['edited_by_user'], 'String');
        }

        if (data.hasOwnProperty('email_communication_sequence_email_uuid')) {
          obj['email_communication_sequence_email_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_email_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_communication_sequence_uuid')) {
          obj['email_communication_sequence_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_container_cjson')) {
          obj['email_container_cjson'] = _ApiClient["default"].convertToType(data['email_container_cjson'], 'String');
        }

        if (data.hasOwnProperty('email_container_cjson_last_modified_dts')) {
          obj['email_container_cjson_last_modified_dts'] = _ApiClient["default"].convertToType(data['email_container_cjson_last_modified_dts'], 'String');
        }

        if (data.hasOwnProperty('email_template_vm_path')) {
          obj['email_template_vm_path'] = _ApiClient["default"].convertToType(data['email_template_vm_path'], 'String');
        }

        if (data.hasOwnProperty('filter_profile_equation_json')) {
          obj['filter_profile_equation_json'] = _ApiClient["default"].convertToType(data['filter_profile_equation_json'], 'String');
        }

        if (data.hasOwnProperty('individually_render')) {
          obj['individually_render'] = _ApiClient["default"].convertToType(data['individually_render'], 'Boolean');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('magic_link')) {
          obj['magic_link'] = _ApiClient["default"].convertToType(data['magic_link'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('pending_review')) {
          obj['pending_review'] = _ApiClient["default"].convertToType(data['pending_review'], 'Boolean');
        }

        if (data.hasOwnProperty('preview_text')) {
          obj['preview_text'] = _ApiClient["default"].convertToType(data['preview_text'], 'String');
        }

        if (data.hasOwnProperty('rejected')) {
          obj['rejected'] = _ApiClient["default"].convertToType(data['rejected'], 'Boolean');
        }

        if (data.hasOwnProperty('requires_review')) {
          obj['requires_review'] = _ApiClient["default"].convertToType(data['requires_review'], 'Boolean');
        }

        if (data.hasOwnProperty('screenshot_large_full_url')) {
          obj['screenshot_large_full_url'] = _ApiClient["default"].convertToType(data['screenshot_large_full_url'], 'String');
        }

        if (data.hasOwnProperty('screenshot_large_viewport_url')) {
          obj['screenshot_large_viewport_url'] = _ApiClient["default"].convertToType(data['screenshot_large_viewport_url'], 'String');
        }

        if (data.hasOwnProperty('screenshot_small_full_url')) {
          obj['screenshot_small_full_url'] = _ApiClient["default"].convertToType(data['screenshot_small_full_url'], 'String');
        }

        if (data.hasOwnProperty('screenshot_small_viewport_url')) {
          obj['screenshot_small_viewport_url'] = _ApiClient["default"].convertToType(data['screenshot_small_viewport_url'], 'String');
        }

        if (data.hasOwnProperty('smart_sending')) {
          obj['smart_sending'] = _ApiClient["default"].convertToType(data['smart_sending'], 'Boolean');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('suspended_for_spam')) {
          obj['suspended_for_spam'] = _ApiClient["default"].convertToType(data['suspended_for_spam'], 'Boolean');
        }

        if (data.hasOwnProperty('transactional_email')) {
          obj['transactional_email'] = _ApiClient["default"].convertToType(data['transactional_email'], 'Boolean');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqEmail;
}();
/**
 * Deleted
 * @member {Boolean} deleted
 */


EmailCommseqEmail.prototype['deleted'] = undefined;
/**
 * Edited by user
 * @member {String} edited_by_user
 */

EmailCommseqEmail.prototype['edited_by_user'] = undefined;
/**
 * Email communication sequence email uuid
 * @member {String} email_communication_sequence_email_uuid
 */

EmailCommseqEmail.prototype['email_communication_sequence_email_uuid'] = undefined;
/**
 * Email commseq UUID
 * @member {String} email_communication_sequence_uuid
 */

EmailCommseqEmail.prototype['email_communication_sequence_uuid'] = undefined;
/**
 * Email container cjson
 * @member {String} email_container_cjson
 */

EmailCommseqEmail.prototype['email_container_cjson'] = undefined;
/**
 * Timestamp the last time the container was modified.
 * @member {String} email_container_cjson_last_modified_dts
 */

EmailCommseqEmail.prototype['email_container_cjson_last_modified_dts'] = undefined;
/**
 * Email template virtual path
 * @member {String} email_template_vm_path
 */

EmailCommseqEmail.prototype['email_template_vm_path'] = undefined;
/**
 * Filter profile equation json
 * @member {String} filter_profile_equation_json
 */

EmailCommseqEmail.prototype['filter_profile_equation_json'] = undefined;
/**
 * Individually render
 * @member {Boolean} individually_render
 */

EmailCommseqEmail.prototype['individually_render'] = undefined;
/**
 * If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated.
 * @member {Number} library_item_oid
 */

EmailCommseqEmail.prototype['library_item_oid'] = undefined;
/**
 * True if email links should contain magic link tokens to log the customer in automatically
 * @member {Boolean} magic_link
 */

EmailCommseqEmail.prototype['magic_link'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCommseqEmail.prototype['merchant_id'] = undefined;
/**
 * True if the content of this email is pending review by UltraCart
 * @member {Boolean} pending_review
 */

EmailCommseqEmail.prototype['pending_review'] = undefined;
/**
 * Preview text
 * @member {String} preview_text
 */

EmailCommseqEmail.prototype['preview_text'] = undefined;
/**
 * True if the content of this email was rejected during review by UltraCart
 * @member {Boolean} rejected
 */

EmailCommseqEmail.prototype['rejected'] = undefined;
/**
 * True if the content of this email is requires review by UltraCart
 * @member {Boolean} requires_review
 */

EmailCommseqEmail.prototype['requires_review'] = undefined;
/**
 * URL to screenshot in large form factor full page
 * @member {String} screenshot_large_full_url
 */

EmailCommseqEmail.prototype['screenshot_large_full_url'] = undefined;
/**
 * URL to screenshot in large form factor viewport
 * @member {String} screenshot_large_viewport_url
 */

EmailCommseqEmail.prototype['screenshot_large_viewport_url'] = undefined;
/**
 * URL to screenshot in small form factor full page
 * @member {String} screenshot_small_full_url
 */

EmailCommseqEmail.prototype['screenshot_small_full_url'] = undefined;
/**
 * URL to screenshot in small form factor viewport
 * @member {String} screenshot_small_viewport_url
 */

EmailCommseqEmail.prototype['screenshot_small_viewport_url'] = undefined;
/**
 * Smart sending
 * @member {Boolean} smart_sending
 */

EmailCommseqEmail.prototype['smart_sending'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCommseqEmail.prototype['storefront_oid'] = undefined;
/**
 * Subject
 * @member {String} subject
 */

EmailCommseqEmail.prototype['subject'] = undefined;
/**
 * True if the email was suspended for too high of a spam rate.
 * @member {Boolean} suspended_for_spam
 */

EmailCommseqEmail.prototype['suspended_for_spam'] = undefined;
/**
 * Transactional email
 * @member {Boolean} transactional_email
 */

EmailCommseqEmail.prototype['transactional_email'] = undefined;
/**
 * Version
 * @member {Number} version
 */

EmailCommseqEmail.prototype['version'] = undefined;
var _default = EmailCommseqEmail;
exports["default"] = _default;