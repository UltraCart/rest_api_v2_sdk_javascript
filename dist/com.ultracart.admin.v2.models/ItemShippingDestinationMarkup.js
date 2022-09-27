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
 * The ItemShippingDestinationMarkup model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
 * @version 4.0.66-RC
 */
var ItemShippingDestinationMarkup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingDestinationMarkup</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
   */
  function ItemShippingDestinationMarkup() {
    _classCallCheck(this, ItemShippingDestinationMarkup);

    ItemShippingDestinationMarkup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingDestinationMarkup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingDestinationMarkup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} The populated <code>ItemShippingDestinationMarkup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingDestinationMarkup();

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('flat_fee')) {
          obj['flat_fee'] = _ApiClient["default"].convertToType(data['flat_fee'], 'Number');
        }

        if (data.hasOwnProperty('per_item')) {
          obj['per_item'] = _ApiClient["default"].convertToType(data['per_item'], 'Number');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingDestinationMarkup;
}();
/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */


ItemShippingDestinationMarkup.prototype['country_code'] = undefined;
/**
 * Flat fee
 * @member {Number} flat_fee
 */

ItemShippingDestinationMarkup.prototype['flat_fee'] = undefined;
/**
 * Per item
 * @member {Number} per_item
 */

ItemShippingDestinationMarkup.prototype['per_item'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

ItemShippingDestinationMarkup.prototype['postal_code'] = undefined;
/**
 * Shipping method
 * @member {String} shipping_method
 */

ItemShippingDestinationMarkup.prototype['shipping_method'] = undefined;
/**
 * State
 * @member {String} state
 */

ItemShippingDestinationMarkup.prototype['state'] = undefined;
var _default = ItemShippingDestinationMarkup;
exports["default"] = _default;