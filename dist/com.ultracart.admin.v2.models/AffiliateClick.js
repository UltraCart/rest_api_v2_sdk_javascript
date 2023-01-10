"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AffiliateLink = _interopRequireDefault(require("./AffiliateLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AffiliateClick model module.
 * @module com.ultracart.admin.v2.models/AffiliateClick
 * @version 4.0.108-RC
 */
var AffiliateClick = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateClick</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateClick
   */
  function AffiliateClick() {
    _classCallCheck(this, AffiliateClick);

    AffiliateClick.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AffiliateClick, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AffiliateClick</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateClick} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateClick} The populated <code>AffiliateClick</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateClick();

        if (data.hasOwnProperty('affiliate_click_oid')) {
          obj['affiliate_click_oid'] = _ApiClient["default"].convertToType(data['affiliate_click_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_link_oid')) {
          obj['affiliate_link_oid'] = _ApiClient["default"].convertToType(data['affiliate_link_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('click_dts')) {
          obj['click_dts'] = _ApiClient["default"].convertToType(data['click_dts'], 'String');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('landing_page')) {
          obj['landing_page'] = _ApiClient["default"].convertToType(data['landing_page'], 'String');
        }

        if (data.hasOwnProperty('landing_page_query_string')) {
          obj['landing_page_query_string'] = _ApiClient["default"].convertToType(data['landing_page_query_string'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _AffiliateLink["default"].constructFromObject(data['link']);
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ApiClient["default"].convertToType(data['referrer'], 'String');
        }

        if (data.hasOwnProperty('referrer_query_string')) {
          obj['referrer_query_string'] = _ApiClient["default"].convertToType(data['referrer_query_string'], 'String');
        }

        if (data.hasOwnProperty('screen_recording_uuid')) {
          obj['screen_recording_uuid'] = _ApiClient["default"].convertToType(data['screen_recording_uuid'], 'String');
        }

        if (data.hasOwnProperty('sub_id')) {
          obj['sub_id'] = _ApiClient["default"].convertToType(data['sub_id'], 'String');
        }

        if (data.hasOwnProperty('ucacid')) {
          obj['ucacid'] = _ApiClient["default"].convertToType(data['ucacid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AffiliateClick;
}();
/**
 * Unique object identifier for this click
 * @member {Number} affiliate_click_oid
 */


AffiliateClick.prototype['affiliate_click_oid'] = undefined;
/**
 * Unique object identifier for for the link that this click is associated with
 * @member {Number} affiliate_link_oid
 */

AffiliateClick.prototype['affiliate_link_oid'] = undefined;
/**
 * Affiliate object ID associated with this click
 * @member {Number} affiliate_oid
 */

AffiliateClick.prototype['affiliate_oid'] = undefined;
/**
 * Date/time that the click was made
 * @member {String} click_dts
 */

AffiliateClick.prototype['click_dts'] = undefined;
/**
 * IP address that generated the click
 * @member {String} ip_address
 */

AffiliateClick.prototype['ip_address'] = undefined;
/**
 * URL of the landing page the customer was sent to.
 * @member {String} landing_page
 */

AffiliateClick.prototype['landing_page'] = undefined;
/**
 * Query string on the landing page URL the customer was sent to.
 * @member {String} landing_page_query_string
 */

AffiliateClick.prototype['landing_page_query_string'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink} link
 */

AffiliateClick.prototype['link'] = undefined;
/**
 * URL that referred the click (Browser Header Referer)
 * @member {String} referrer
 */

AffiliateClick.prototype['referrer'] = undefined;
/**
 * Query string that was on the referrer URL.
 * @member {String} referrer_query_string
 */

AffiliateClick.prototype['referrer_query_string'] = undefined;
/**
 * Screen recording UUID
 * @member {String} screen_recording_uuid
 */

AffiliateClick.prototype['screen_recording_uuid'] = undefined;
/**
 * Sub ID value passed on the click
 * @member {String} sub_id
 */

AffiliateClick.prototype['sub_id'] = undefined;
/**
 * UC Analytics Identifier
 * @member {String} ucacid
 */

AffiliateClick.prototype['ucacid'] = undefined;
var _default = AffiliateClick;
exports["default"] = _default;