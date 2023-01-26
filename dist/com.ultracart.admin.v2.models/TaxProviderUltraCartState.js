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
 * The TaxProviderUltraCartState model module.
 * @module com.ultracart.admin.v2.models/TaxProviderUltraCartState
 * @version 4.0.125-RC
 */
var TaxProviderUltraCartState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderUltraCartState</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCartState
   */
  function TaxProviderUltraCartState() {
    _classCallCheck(this, TaxProviderUltraCartState);

    TaxProviderUltraCartState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxProviderUltraCartState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxProviderUltraCartState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} The populated <code>TaxProviderUltraCartState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderUltraCartState();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('exempt_digital_items')) {
          obj['exempt_digital_items'] = _ApiClient["default"].convertToType(data['exempt_digital_items'], 'Boolean');
        }

        if (data.hasOwnProperty('exempt_physical_items')) {
          obj['exempt_physical_items'] = _ApiClient["default"].convertToType(data['exempt_physical_items'], 'Boolean');
        }

        if (data.hasOwnProperty('exempt_service_items')) {
          obj['exempt_service_items'] = _ApiClient["default"].convertToType(data['exempt_service_items'], 'Boolean');
        }

        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }

        if (data.hasOwnProperty('state_name')) {
          obj['state_name'] = _ApiClient["default"].convertToType(data['state_name'], 'String');
        }

        if (data.hasOwnProperty('tax_gift_charge')) {
          obj['tax_gift_charge'] = _ApiClient["default"].convertToType(data['tax_gift_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_gift_wrap')) {
          obj['tax_gift_wrap'] = _ApiClient["default"].convertToType(data['tax_gift_wrap'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_rate_formatted')) {
          obj['tax_rate_formatted'] = _ApiClient["default"].convertToType(data['tax_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('tax_shipping')) {
          obj['tax_shipping'] = _ApiClient["default"].convertToType(data['tax_shipping'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TaxProviderUltraCartState;
}();
/**
 * True if this state taxes are managed by UltraCart
 * @member {Boolean} enabled
 */


TaxProviderUltraCartState.prototype['enabled'] = undefined;
/**
 * True if digital items are exempt from sales tax in this state.
 * @member {Boolean} exempt_digital_items
 */

TaxProviderUltraCartState.prototype['exempt_digital_items'] = undefined;
/**
 * True if physical items are exempt from sales tax in this state.
 * @member {Boolean} exempt_physical_items
 */

TaxProviderUltraCartState.prototype['exempt_physical_items'] = undefined;
/**
 * True if service items are exempt from sales tax in this state.
 * @member {Boolean} exempt_service_items
 */

TaxProviderUltraCartState.prototype['exempt_service_items'] = undefined;
/**
 * State Code (2 digits)
 * @member {String} state_code
 */

TaxProviderUltraCartState.prototype['state_code'] = undefined;
/**
 * Fully spelled out state name
 * @member {String} state_name
 */

TaxProviderUltraCartState.prototype['state_name'] = undefined;
/**
 * True if gift charges should be taxed in this state.
 * @member {Boolean} tax_gift_charge
 */

TaxProviderUltraCartState.prototype['tax_gift_charge'] = undefined;
/**
 * True if gift wrap should be taxed in this state.
 * @member {Boolean} tax_gift_wrap
 */

TaxProviderUltraCartState.prototype['tax_gift_wrap'] = undefined;
/**
 * State tax rate formatted for display
 * @member {String} tax_rate_formatted
 */

TaxProviderUltraCartState.prototype['tax_rate_formatted'] = undefined;
/**
 * True if shipping should be taxed in this state.
 * @member {Boolean} tax_shipping
 */

TaxProviderUltraCartState.prototype['tax_shipping'] = undefined;
var _default = TaxProviderUltraCartState;
exports["default"] = _default;