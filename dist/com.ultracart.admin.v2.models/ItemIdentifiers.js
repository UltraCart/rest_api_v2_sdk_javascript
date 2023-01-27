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
 * The ItemIdentifiers model module.
 * @module com.ultracart.admin.v2.models/ItemIdentifiers
 * @version 4.0.126-RC
 */
var ItemIdentifiers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemIdentifiers</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemIdentifiers
   */
  function ItemIdentifiers() {
    _classCallCheck(this, ItemIdentifiers);

    ItemIdentifiers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemIdentifiers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemIdentifiers} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemIdentifiers} The populated <code>ItemIdentifiers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemIdentifiers();

        if (data.hasOwnProperty('barcode')) {
          obj['barcode'] = _ApiClient["default"].convertToType(data['barcode'], 'String');
        }

        if (data.hasOwnProperty('manufacturer_name')) {
          obj['manufacturer_name'] = _ApiClient["default"].convertToType(data['manufacturer_name'], 'String');
        }

        if (data.hasOwnProperty('manufacturer_sku')) {
          obj['manufacturer_sku'] = _ApiClient["default"].convertToType(data['manufacturer_sku'], 'String');
        }

        if (data.hasOwnProperty('unspsc')) {
          obj['unspsc'] = _ApiClient["default"].convertToType(data['unspsc'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemIdentifiers;
}();
/**
 * Barcode
 * @member {String} barcode
 */


ItemIdentifiers.prototype['barcode'] = undefined;
/**
 * Manufacturer Name
 * @member {String} manufacturer_name
 */

ItemIdentifiers.prototype['manufacturer_name'] = undefined;
/**
 * Manufacturer SKU
 * @member {String} manufacturer_sku
 */

ItemIdentifiers.prototype['manufacturer_sku'] = undefined;
/**
 * UNSPSC
 * @member {String} unspsc
 */

ItemIdentifiers.prototype['unspsc'] = undefined;
var _default = ItemIdentifiers;
exports["default"] = _default;