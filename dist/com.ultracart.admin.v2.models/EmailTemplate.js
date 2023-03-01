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
 * The EmailTemplate model module.
 * @module com.ultracart.admin.v2.models/EmailTemplate
 * @version 4.0.137
 */
var EmailTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailTemplate</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailTemplate
   */
  function EmailTemplate() {
    _classCallCheck(this, EmailTemplate);

    EmailTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailTemplate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailTemplate} The populated <code>EmailTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailTemplate();

        if (data.hasOwnProperty('container_cjson')) {
          obj['container_cjson'] = _ApiClient["default"].convertToType(data['container_cjson'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email_template_oid')) {
          obj['email_template_oid'] = _ApiClient["default"].convertToType(data['email_template_oid'], 'Number');
        }

        if (data.hasOwnProperty('email_template_vm_path')) {
          obj['email_template_vm_path'] = _ApiClient["default"].convertToType(data['email_template_vm_path'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('preview_amazon_listing_key')) {
          obj['preview_amazon_listing_key'] = _ApiClient["default"].convertToType(data['preview_amazon_listing_key'], 'String');
        }

        if (data.hasOwnProperty('sort_order')) {
          obj['sort_order'] = _ApiClient["default"].convertToType(data['sort_order'], 'Number');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], 'Boolean');
        }

        if (data.hasOwnProperty('trigger_type')) {
          obj['trigger_type'] = _ApiClient["default"].convertToType(data['trigger_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailTemplate;
}();
/**
 * Container cjson
 * @member {String} container_cjson
 */


EmailTemplate.prototype['container_cjson'] = undefined;
/**
 * Description of email template
 * @member {String} description
 */

EmailTemplate.prototype['description'] = undefined;
/**
 * Email template oid
 * @member {Number} email_template_oid
 */

EmailTemplate.prototype['email_template_oid'] = undefined;
/**
 * Email Template VM Path
 * @member {String} email_template_vm_path
 */

EmailTemplate.prototype['email_template_vm_path'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailTemplate.prototype['merchant_id'] = undefined;
/**
 * Name of email template
 * @member {String} name
 */

EmailTemplate.prototype['name'] = undefined;
/**
 * Amazon key for preview png image
 * @member {String} preview_amazon_listing_key
 */

EmailTemplate.prototype['preview_amazon_listing_key'] = undefined;
/**
 * Sort order (optional)
 * @member {Number} sort_order
 */

EmailTemplate.prototype['sort_order'] = undefined;
/**
 * StoreFront oid
 * @member {Number} storefront_oid
 */

EmailTemplate.prototype['storefront_oid'] = undefined;
/**
 * True if this email template is system-wide,false if merchant specific
 * @member {Boolean} system
 */

EmailTemplate.prototype['system'] = undefined;
/**
 * Trigger type
 * @member {String} trigger_type
 */

EmailTemplate.prototype['trigger_type'] = undefined;
var _default = EmailTemplate;
exports["default"] = _default;