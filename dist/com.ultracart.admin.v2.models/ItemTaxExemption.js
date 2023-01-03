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
 * The ItemTaxExemption model module.
 * @module com.ultracart.admin.v2.models/ItemTaxExemption
 * @version 4.0.103-RC
 */
var ItemTaxExemption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemTaxExemption</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemTaxExemption
   */
  function ItemTaxExemption() {
    _classCallCheck(this, ItemTaxExemption);

    ItemTaxExemption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemTaxExemption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemTaxExemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTaxExemption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTaxExemption} The populated <code>ItemTaxExemption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemTaxExemption();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('county')) {
          obj['county'] = _ApiClient["default"].convertToType(data['county'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemTaxExemption;
}();
/**
 * City
 * @member {String} city
 */


ItemTaxExemption.prototype['city'] = undefined;
/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */

ItemTaxExemption.prototype['country_code'] = undefined;
/**
 * County
 * @member {String} county
 */

ItemTaxExemption.prototype['county'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

ItemTaxExemption.prototype['postal_code'] = undefined;
/**
 * State code
 * @member {String} state_code
 */

ItemTaxExemption.prototype['state_code'] = undefined;
var _default = ItemTaxExemption;
exports["default"] = _default;