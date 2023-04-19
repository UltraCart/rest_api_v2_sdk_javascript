"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartSettingsProvince = _interopRequireDefault(require("./CartSettingsProvince"));

var _CartSettingsShippingCalendar = _interopRequireDefault(require("./CartSettingsShippingCalendar"));

var _CartSettingsShippingEstimate = _interopRequireDefault(require("./CartSettingsShippingEstimate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartSettingsShipping model module.
 * @module com.ultracart.admin.v2.models/CartSettingsShipping
 * @version 4.0.148
 */
var CartSettingsShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsShipping
   */
  function CartSettingsShipping() {
    _classCallCheck(this, CartSettingsShipping);

    CartSettingsShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsShipping} The populated <code>CartSettingsShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsShipping();

        if (data.hasOwnProperty('deliver_on_date')) {
          obj['deliver_on_date'] = _CartSettingsShippingCalendar["default"].constructFromObject(data['deliver_on_date']);
        }

        if (data.hasOwnProperty('estimates')) {
          obj['estimates'] = _ApiClient["default"].convertToType(data['estimates'], [_CartSettingsShippingEstimate["default"]]);
        }

        if (data.hasOwnProperty('need_shipping')) {
          obj['need_shipping'] = _ApiClient["default"].convertToType(data['need_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('provinces')) {
          obj['provinces'] = _ApiClient["default"].convertToType(data['provinces'], [_CartSettingsProvince["default"]]);
        }

        if (data.hasOwnProperty('ship_on_date')) {
          obj['ship_on_date'] = _CartSettingsShippingCalendar["default"].constructFromObject(data['ship_on_date']);
        }
      }

      return obj;
    }
  }]);

  return CartSettingsShipping;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} deliver_on_date
 */


CartSettingsShipping.prototype['deliver_on_date'] = undefined;
/**
 * Estimates for this cart
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate>} estimates
 */

CartSettingsShipping.prototype['estimates'] = undefined;
/**
 * True if this order needs shipping
 * @member {Boolean} need_shipping
 */

CartSettingsShipping.prototype['need_shipping'] = undefined;
/**
 * Provinces
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsProvince>} provinces
 */

CartSettingsShipping.prototype['provinces'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} ship_on_date
 */

CartSettingsShipping.prototype['ship_on_date'] = undefined;
var _default = CartSettingsShipping;
exports["default"] = _default;