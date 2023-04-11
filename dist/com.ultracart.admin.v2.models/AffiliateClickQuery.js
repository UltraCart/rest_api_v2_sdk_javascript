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
 * The AffiliateClickQuery model module.
 * @module com.ultracart.admin.v2.models/AffiliateClickQuery
 * @version 4.0.145
 */
var AffiliateClickQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateClickQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateClickQuery
   */
  function AffiliateClickQuery() {
    _classCallCheck(this, AffiliateClickQuery);

    AffiliateClickQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AffiliateClickQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AffiliateClickQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateClickQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateClickQuery} The populated <code>AffiliateClickQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateClickQuery();

        if (data.hasOwnProperty('affiliate_link_oid')) {
          obj['affiliate_link_oid'] = _ApiClient["default"].convertToType(data['affiliate_link_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('click_dts_begin')) {
          obj['click_dts_begin'] = _ApiClient["default"].convertToType(data['click_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('click_dts_end')) {
          obj['click_dts_end'] = _ApiClient["default"].convertToType(data['click_dts_end'], 'String');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('sub_id')) {
          obj['sub_id'] = _ApiClient["default"].convertToType(data['sub_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AffiliateClickQuery;
}();
/**
 * Unique object identifier for for the link that this click is associated with
 * @member {Number} affiliate_link_oid
 */


AffiliateClickQuery.prototype['affiliate_link_oid'] = undefined;
/**
 * Affiliate ID associated with the click
 * @member {Number} affiliate_oid
 */

AffiliateClickQuery.prototype['affiliate_oid'] = undefined;
/**
 * Minimum click date/time to return
 * @member {String} click_dts_begin
 */

AffiliateClickQuery.prototype['click_dts_begin'] = undefined;
/**
 * Maximum click date/time to return
 * @member {String} click_dts_end
 */

AffiliateClickQuery.prototype['click_dts_end'] = undefined;
/**
 * IP address that generated the click
 * @member {String} ip_address
 */

AffiliateClickQuery.prototype['ip_address'] = undefined;
/**
 * Sub ID value passed on the click
 * @member {String} sub_id
 */

AffiliateClickQuery.prototype['sub_id'] = undefined;
var _default = AffiliateClickQuery;
exports["default"] = _default;