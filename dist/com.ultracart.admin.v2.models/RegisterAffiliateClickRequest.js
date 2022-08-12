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
 * The RegisterAffiliateClickRequest model module.
 * @module com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
 * @version 4.0.54-RC
 */
var RegisterAffiliateClickRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisterAffiliateClickRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
   */
  function RegisterAffiliateClickRequest() {
    _classCallCheck(this, RegisterAffiliateClickRequest);

    RegisterAffiliateClickRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterAffiliateClickRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterAffiliateClickRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} The populated <code>RegisterAffiliateClickRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterAffiliateClickRequest();

        if (data.hasOwnProperty('affid')) {
          obj['affid'] = _ApiClient["default"].convertToType(data['affid'], 'Number');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('landing_page_url')) {
          obj['landing_page_url'] = _ApiClient["default"].convertToType(data['landing_page_url'], 'String');
        }

        if (data.hasOwnProperty('referrer_url')) {
          obj['referrer_url'] = _ApiClient["default"].convertToType(data['referrer_url'], 'String');
        }

        if (data.hasOwnProperty('subid')) {
          obj['subid'] = _ApiClient["default"].convertToType(data['subid'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegisterAffiliateClickRequest;
}();
/**
 * Affiliate Id (must be specified if landing_page_url is not)
 * @member {Number} affid
 */


RegisterAffiliateClickRequest.prototype['affid'] = undefined;
/**
 * IP Address (must be specified for non-browser key authenticated)
 * @member {String} ip_address
 */

RegisterAffiliateClickRequest.prototype['ip_address'] = undefined;
/**
 * Landing Page URL
 * @member {String} landing_page_url
 */

RegisterAffiliateClickRequest.prototype['landing_page_url'] = undefined;
/**
 * Referrer URL (used for detecting invisible linking)
 * @member {String} referrer_url
 */

RegisterAffiliateClickRequest.prototype['referrer_url'] = undefined;
/**
 * Sub Id (optional value if affid is specified.
 * @member {String} subid
 */

RegisterAffiliateClickRequest.prototype['subid'] = undefined;
/**
 * User agent of the browser (must be specified for non-browser key authenticated)
 * @member {String} user_agent
 */

RegisterAffiliateClickRequest.prototype['user_agent'] = undefined;
var _default = RegisterAffiliateClickRequest;
exports["default"] = _default;