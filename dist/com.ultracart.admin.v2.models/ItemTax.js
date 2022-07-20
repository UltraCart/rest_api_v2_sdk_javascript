"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemTaxExemption = _interopRequireDefault(require("./ItemTaxExemption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemTax model module.
 * @module com.ultracart.admin.v2.models/ItemTax
 * @version 4.0.36-RC
 */
var ItemTax = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemTax</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTax
   */
  function ItemTax() {
    _classCallCheck(this, ItemTax);

    ItemTax.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemTax, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemTax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTax} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTax} The populated <code>ItemTax</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemTax();

        if (data.hasOwnProperty('exemptions')) {
          obj['exemptions'] = _ApiClient["default"].convertToType(data['exemptions'], [_ItemTaxExemption["default"]]);
        }

        if (data.hasOwnProperty('tax_free')) {
          obj['tax_free'] = _ApiClient["default"].convertToType(data['tax_free'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_product_type')) {
          obj['tax_product_type'] = _ApiClient["default"].convertToType(data['tax_product_type'], 'String');
        }

        if (data.hasOwnProperty('taxable_cost')) {
          obj['taxable_cost'] = _ApiClient["default"].convertToType(data['taxable_cost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemTax;
}();
/**
 * Exemptions
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemTaxExemption>} exemptions
 */


ItemTax.prototype['exemptions'] = undefined;
/**
 * True if tax free
 * @member {Boolean} tax_free
 */

ItemTax.prototype['tax_free'] = undefined;
/**
 * Tax product type
 * @member {module:com.ultracart.admin.v2.models/ItemTax.TaxProductTypeEnum} tax_product_type
 */

ItemTax.prototype['tax_product_type'] = undefined;
/**
 * Taxable cost if different than regular cost
 * @member {Number} taxable_cost
 */

ItemTax.prototype['taxable_cost'] = undefined;
/**
 * Allowed values for the <code>tax_product_type</code> property.
 * @enum {String}
 * @readonly
 */

ItemTax['TaxProductTypeEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

  /**
   * value: "digital"
   * @const
   */
  "digital": "digital",

  /**
   * value: "physical"
   * @const
   */
  "physical": "physical",

  /**
   * value: "service"
   * @const
   */
  "service": "service"
};
var _default = ItemTax;
exports["default"] = _default;