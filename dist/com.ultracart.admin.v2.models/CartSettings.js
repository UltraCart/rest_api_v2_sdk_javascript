"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartSettingsBilling = _interopRequireDefault(require("./CartSettingsBilling"));

var _CartSettingsGift = _interopRequireDefault(require("./CartSettingsGift"));

var _CartSettingsPayment = _interopRequireDefault(require("./CartSettingsPayment"));

var _CartSettingsShipping = _interopRequireDefault(require("./CartSettingsShipping"));

var _CartSettingsTaxes = _interopRequireDefault(require("./CartSettingsTaxes"));

var _CartSettingsTerms = _interopRequireDefault(require("./CartSettingsTerms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartSettings model module.
 * @module com.ultracart.admin.v2.models/CartSettings
 * @version 4.0.44-RC
 */
var CartSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettings
   */
  function CartSettings() {
    _classCallCheck(this, CartSettings);

    CartSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettings} The populated <code>CartSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettings();

        if (data.hasOwnProperty('billing')) {
          obj['billing'] = _CartSettingsBilling["default"].constructFromObject(data['billing']);
        }

        if (data.hasOwnProperty('gift')) {
          obj['gift'] = _CartSettingsGift["default"].constructFromObject(data['gift']);
        }

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _CartSettingsPayment["default"].constructFromObject(data['payment']);
        }

        if (data.hasOwnProperty('shipping')) {
          obj['shipping'] = _CartSettingsShipping["default"].constructFromObject(data['shipping']);
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _CartSettingsTaxes["default"].constructFromObject(data['taxes']);
        }

        if (data.hasOwnProperty('terms')) {
          obj['terms'] = _CartSettingsTerms["default"].constructFromObject(data['terms']);
        }
      }

      return obj;
    }
  }]);

  return CartSettings;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsBilling} billing
 */


CartSettings.prototype['billing'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsGift} gift
 */

CartSettings.prototype['gift'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsPayment} payment
 */

CartSettings.prototype['payment'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShipping} shipping
 */

CartSettings.prototype['shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsTaxes} taxes
 */

CartSettings.prototype['taxes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsTerms} terms
 */

CartSettings.prototype['terms'] = undefined;
var _default = CartSettings;
exports["default"] = _default;