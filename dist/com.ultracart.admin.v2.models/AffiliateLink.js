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
 * The AffiliateLink model module.
 * @module com.ultracart.admin.v2.models/AffiliateLink
 * @version 4.0.115-RC
 */
var AffiliateLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateLink</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateLink
   */
  function AffiliateLink() {
    _classCallCheck(this, AffiliateLink);

    AffiliateLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AffiliateLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AffiliateLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLink} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateLink} The populated <code>AffiliateLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateLink();

        if (data.hasOwnProperty('affiliate_link_oid')) {
          obj['affiliate_link_oid'] = _ApiClient["default"].convertToType(data['affiliate_link_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_managed_link_oid')) {
          obj['affiliate_managed_link_oid'] = _ApiClient["default"].convertToType(data['affiliate_managed_link_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_program_item_oid')) {
          obj['affiliate_program_item_oid'] = _ApiClient["default"].convertToType(data['affiliate_program_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('creative_oid')) {
          obj['creative_oid'] = _ApiClient["default"].convertToType(data['creative_oid'], 'Number');
        }

        if (data.hasOwnProperty('custom_html')) {
          obj['custom_html'] = _ApiClient["default"].convertToType(data['custom_html'], 'String');
        }

        if (data.hasOwnProperty('custom_html_approval_status')) {
          obj['custom_html_approval_status'] = _ApiClient["default"].convertToType(data['custom_html_approval_status'], 'String');
        }

        if (data.hasOwnProperty('custom_landing_url')) {
          obj['custom_landing_url'] = _ApiClient["default"].convertToType(data['custom_landing_url'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('invisible_link_approval_status')) {
          obj['invisible_link_approval_status'] = _ApiClient["default"].convertToType(data['invisible_link_approval_status'], 'String');
        }

        if (data.hasOwnProperty('invisible_link_url_prefix')) {
          obj['invisible_link_url_prefix'] = _ApiClient["default"].convertToType(data['invisible_link_url_prefix'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AffiliateLink;
}();
/**
 * Unique object identifier associated with this link
 * @member {Number} affiliate_link_oid
 */


AffiliateLink.prototype['affiliate_link_oid'] = undefined;
/**
 * Managed link OID that this link object was generated from
 * @member {Number} affiliate_managed_link_oid
 */

AffiliateLink.prototype['affiliate_managed_link_oid'] = undefined;
/**
 * Affiliate object ID associated with this link
 * @member {Number} affiliate_oid
 */

AffiliateLink.prototype['affiliate_oid'] = undefined;
/**
 * The affiliate program item this managed link is associated with
 * @member {Number} affiliate_program_item_oid
 */

AffiliateLink.prototype['affiliate_program_item_oid'] = undefined;
/**
 * Code associated with the link
 * @member {String} code
 */

AffiliateLink.prototype['code'] = undefined;
/**
 * Creative (image or text) associated with this link
 * @member {Number} creative_oid
 */

AffiliateLink.prototype['creative_oid'] = undefined;
/**
 * Custom HTML associated with this link
 * @member {String} custom_html
 */

AffiliateLink.prototype['custom_html'] = undefined;
/**
 * Approved status of the custom html
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.CustomHtmlApprovalStatusEnum} custom_html_approval_status
 */

AffiliateLink.prototype['custom_html_approval_status'] = undefined;
/**
 * Custom landing page URL if configured
 * @member {String} custom_landing_url
 */

AffiliateLink.prototype['custom_landing_url'] = undefined;
/**
 * True if the link has been deleted
 * @member {Boolean} deleted
 */

AffiliateLink.prototype['deleted'] = undefined;
/**
 * Invisible link approval status
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.InvisibleLinkApprovalStatusEnum} invisible_link_approval_status
 */

AffiliateLink.prototype['invisible_link_approval_status'] = undefined;
/**
 * Invisible link URL prefix
 * @member {String} invisible_link_url_prefix
 */

AffiliateLink.prototype['invisible_link_url_prefix'] = undefined;
/**
 * Name of the link
 * @member {String} name
 */

AffiliateLink.prototype['name'] = undefined;
/**
 * Type of link
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink.TypeEnum} type
 */

AffiliateLink.prototype['type'] = undefined;
/**
 * Allowed values for the <code>custom_html_approval_status</code> property.
 * @enum {String}
 * @readonly
 */

AffiliateLink['CustomHtmlApprovalStatusEnum'] = {
  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Approved"
   * @const
   */
  "Approved": "Approved",

  /**
   * value: "Rejected"
   * @const
   */
  "Rejected": "Rejected"
};
/**
 * Allowed values for the <code>invisible_link_approval_status</code> property.
 * @enum {String}
 * @readonly
 */

AffiliateLink['InvisibleLinkApprovalStatusEnum'] = {
  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Approved"
   * @const
   */
  "Approved": "Approved",

  /**
   * value: "Rejected"
   * @const
   */
  "Rejected": "Rejected"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

AffiliateLink['TypeEnum'] = {
  /**
   * value: "image"
   * @const
   */
  "image": "image",

  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "invisible"
   * @const
   */
  "invisible": "invisible",

  /**
   * value: "direct"
   * @const
   */
  "direct": "direct"
};
var _default = AffiliateLink;
exports["default"] = _default;