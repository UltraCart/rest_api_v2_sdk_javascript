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
 * The HitSessionUtm model module.
 * @module com.ultracart.admin.v2.models/HitSessionUtm
 * @version 4.0.153
 */
var HitSessionUtm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HitSessionUtm</code>.
   * @alias module:com.ultracart.admin.v2.models/HitSessionUtm
   */
  function HitSessionUtm() {
    _classCallCheck(this, HitSessionUtm);

    HitSessionUtm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HitSessionUtm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HitSessionUtm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HitSessionUtm} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HitSessionUtm} The populated <code>HitSessionUtm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HitSessionUtm();

        if (data.hasOwnProperty('fb_ad_id')) {
          obj['fb_ad_id'] = _ApiClient["default"].convertToType(data['fb_ad_id'], 'String');
        }

        if (data.hasOwnProperty('fbclid')) {
          obj['fbclid'] = _ApiClient["default"].convertToType(data['fbclid'], 'String');
        }

        if (data.hasOwnProperty('gbraid')) {
          obj['gbraid'] = _ApiClient["default"].convertToType(data['gbraid'], 'String');
        }

        if (data.hasOwnProperty('gclid')) {
          obj['gclid'] = _ApiClient["default"].convertToType(data['gclid'], 'String');
        }

        if (data.hasOwnProperty('msclkid')) {
          obj['msclkid'] = _ApiClient["default"].convertToType(data['msclkid'], 'String');
        }

        if (data.hasOwnProperty('ttclid')) {
          obj['ttclid'] = _ApiClient["default"].convertToType(data['ttclid'], 'String');
        }

        if (data.hasOwnProperty('uc_message_id')) {
          obj['uc_message_id'] = _ApiClient["default"].convertToType(data['uc_message_id'], 'String');
        }

        if (data.hasOwnProperty('utm_campaign')) {
          obj['utm_campaign'] = _ApiClient["default"].convertToType(data['utm_campaign'], 'String');
        }

        if (data.hasOwnProperty('utm_content')) {
          obj['utm_content'] = _ApiClient["default"].convertToType(data['utm_content'], 'String');
        }

        if (data.hasOwnProperty('utm_id')) {
          obj['utm_id'] = _ApiClient["default"].convertToType(data['utm_id'], 'String');
        }

        if (data.hasOwnProperty('utm_medium')) {
          obj['utm_medium'] = _ApiClient["default"].convertToType(data['utm_medium'], 'String');
        }

        if (data.hasOwnProperty('utm_source')) {
          obj['utm_source'] = _ApiClient["default"].convertToType(data['utm_source'], 'String');
        }

        if (data.hasOwnProperty('utm_term')) {
          obj['utm_term'] = _ApiClient["default"].convertToType(data['utm_term'], 'String');
        }

        if (data.hasOwnProperty('vmcid')) {
          obj['vmcid'] = _ApiClient["default"].convertToType(data['vmcid'], 'String');
        }

        if (data.hasOwnProperty('wbraid')) {
          obj['wbraid'] = _ApiClient["default"].convertToType(data['wbraid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HitSessionUtm;
}();
/**
 * @member {String} fb_ad_id
 */


HitSessionUtm.prototype['fb_ad_id'] = undefined;
/**
 * @member {String} fbclid
 */

HitSessionUtm.prototype['fbclid'] = undefined;
/**
 * @member {String} gbraid
 */

HitSessionUtm.prototype['gbraid'] = undefined;
/**
 * @member {String} gclid
 */

HitSessionUtm.prototype['gclid'] = undefined;
/**
 * @member {String} msclkid
 */

HitSessionUtm.prototype['msclkid'] = undefined;
/**
 * @member {String} ttclid
 */

HitSessionUtm.prototype['ttclid'] = undefined;
/**
 * @member {String} uc_message_id
 */

HitSessionUtm.prototype['uc_message_id'] = undefined;
/**
 * @member {String} utm_campaign
 */

HitSessionUtm.prototype['utm_campaign'] = undefined;
/**
 * @member {String} utm_content
 */

HitSessionUtm.prototype['utm_content'] = undefined;
/**
 * @member {String} utm_id
 */

HitSessionUtm.prototype['utm_id'] = undefined;
/**
 * @member {String} utm_medium
 */

HitSessionUtm.prototype['utm_medium'] = undefined;
/**
 * @member {String} utm_source
 */

HitSessionUtm.prototype['utm_source'] = undefined;
/**
 * @member {String} utm_term
 */

HitSessionUtm.prototype['utm_term'] = undefined;
/**
 * @member {String} vmcid
 */

HitSessionUtm.prototype['vmcid'] = undefined;
/**
 * @member {String} wbraid
 */

HitSessionUtm.prototype['wbraid'] = undefined;
var _default = HitSessionUtm;
exports["default"] = _default;