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
 * The OrderUtm model module.
 * @module com.ultracart.admin.v2.models/OrderUtm
 * @version 4.0.191
 */
var OrderUtm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderUtm</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderUtm
   */
  function OrderUtm() {
    _classCallCheck(this, OrderUtm);

    OrderUtm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderUtm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderUtm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderUtm} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderUtm} The populated <code>OrderUtm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderUtm();

        if (data.hasOwnProperty('attribution_first_click_subtotal')) {
          obj['attribution_first_click_subtotal'] = _ApiClient["default"].convertToType(data['attribution_first_click_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('attribution_first_click_total')) {
          obj['attribution_first_click_total'] = _ApiClient["default"].convertToType(data['attribution_first_click_total'], 'Number');
        }

        if (data.hasOwnProperty('attribution_last_click_subtotal')) {
          obj['attribution_last_click_subtotal'] = _ApiClient["default"].convertToType(data['attribution_last_click_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('attribution_last_click_total')) {
          obj['attribution_last_click_total'] = _ApiClient["default"].convertToType(data['attribution_last_click_total'], 'Number');
        }

        if (data.hasOwnProperty('attribution_linear_subtotal')) {
          obj['attribution_linear_subtotal'] = _ApiClient["default"].convertToType(data['attribution_linear_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('attribution_linear_total')) {
          obj['attribution_linear_total'] = _ApiClient["default"].convertToType(data['attribution_linear_total'], 'Number');
        }

        if (data.hasOwnProperty('attribution_position_based_subtotal')) {
          obj['attribution_position_based_subtotal'] = _ApiClient["default"].convertToType(data['attribution_position_based_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('attribution_position_based_total')) {
          obj['attribution_position_based_total'] = _ApiClient["default"].convertToType(data['attribution_position_based_total'], 'Number');
        }

        if (data.hasOwnProperty('click_dts')) {
          obj['click_dts'] = _ApiClient["default"].convertToType(data['click_dts'], 'String');
        }

        if (data.hasOwnProperty('facebook_ad_id')) {
          obj['facebook_ad_id'] = _ApiClient["default"].convertToType(data['facebook_ad_id'], 'String');
        }

        if (data.hasOwnProperty('fbclid')) {
          obj['fbclid'] = _ApiClient["default"].convertToType(data['fbclid'], 'String');
        }

        if (data.hasOwnProperty('gbraid')) {
          obj['gbraid'] = _ApiClient["default"].convertToType(data['gbraid'], 'String');
        }

        if (data.hasOwnProperty('glcid')) {
          obj['glcid'] = _ApiClient["default"].convertToType(data['glcid'], 'String');
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

  return OrderUtm;
}();
/**
 * @member {Number} attribution_first_click_subtotal
 */


OrderUtm.prototype['attribution_first_click_subtotal'] = undefined;
/**
 * @member {Number} attribution_first_click_total
 */

OrderUtm.prototype['attribution_first_click_total'] = undefined;
/**
 * @member {Number} attribution_last_click_subtotal
 */

OrderUtm.prototype['attribution_last_click_subtotal'] = undefined;
/**
 * @member {Number} attribution_last_click_total
 */

OrderUtm.prototype['attribution_last_click_total'] = undefined;
/**
 * @member {Number} attribution_linear_subtotal
 */

OrderUtm.prototype['attribution_linear_subtotal'] = undefined;
/**
 * @member {Number} attribution_linear_total
 */

OrderUtm.prototype['attribution_linear_total'] = undefined;
/**
 * @member {Number} attribution_position_based_subtotal
 */

OrderUtm.prototype['attribution_position_based_subtotal'] = undefined;
/**
 * @member {Number} attribution_position_based_total
 */

OrderUtm.prototype['attribution_position_based_total'] = undefined;
/**
 * Date/time that the click happened
 * @member {String} click_dts
 */

OrderUtm.prototype['click_dts'] = undefined;
/**
 * @member {String} facebook_ad_id
 */

OrderUtm.prototype['facebook_ad_id'] = undefined;
/**
 * @member {String} fbclid
 */

OrderUtm.prototype['fbclid'] = undefined;
/**
 * @member {String} gbraid
 */

OrderUtm.prototype['gbraid'] = undefined;
/**
 * @member {String} glcid
 */

OrderUtm.prototype['glcid'] = undefined;
/**
 * @member {String} msclkid
 */

OrderUtm.prototype['msclkid'] = undefined;
/**
 * @member {String} ttclid
 */

OrderUtm.prototype['ttclid'] = undefined;
/**
 * @member {String} uc_message_id
 */

OrderUtm.prototype['uc_message_id'] = undefined;
/**
 * @member {String} utm_campaign
 */

OrderUtm.prototype['utm_campaign'] = undefined;
/**
 * @member {String} utm_content
 */

OrderUtm.prototype['utm_content'] = undefined;
/**
 * @member {String} utm_id
 */

OrderUtm.prototype['utm_id'] = undefined;
/**
 * @member {String} utm_medium
 */

OrderUtm.prototype['utm_medium'] = undefined;
/**
 * @member {String} utm_source
 */

OrderUtm.prototype['utm_source'] = undefined;
/**
 * @member {String} utm_term
 */

OrderUtm.prototype['utm_term'] = undefined;
/**
 * @member {String} vmcid
 */

OrderUtm.prototype['vmcid'] = undefined;
/**
 * @member {String} wbraid
 */

OrderUtm.prototype['wbraid'] = undefined;
var _default = OrderUtm;
exports["default"] = _default;