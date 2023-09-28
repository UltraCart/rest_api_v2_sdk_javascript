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
 * The ItemAutoOrderStepGrandfatherPricing model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing
 * @version 4.0.178
 */
var ItemAutoOrderStepGrandfatherPricing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemAutoOrderStepGrandfatherPricing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing
   */
  function ItemAutoOrderStepGrandfatherPricing() {
    _classCallCheck(this, ItemAutoOrderStepGrandfatherPricing);

    ItemAutoOrderStepGrandfatherPricing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemAutoOrderStepGrandfatherPricing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemAutoOrderStepGrandfatherPricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing} The populated <code>ItemAutoOrderStepGrandfatherPricing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemAutoOrderStepGrandfatherPricing();

        if (data.hasOwnProperty('on_or_before_date')) {
          obj['on_or_before_date'] = _ApiClient["default"].convertToType(data['on_or_before_date'], 'String');
        }

        if (data.hasOwnProperty('unit_cost')) {
          obj['unit_cost'] = _ApiClient["default"].convertToType(data['unit_cost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemAutoOrderStepGrandfatherPricing;
}();
/**
 * On or before date
 * @member {String} on_or_before_date
 */


ItemAutoOrderStepGrandfatherPricing.prototype['on_or_before_date'] = undefined;
/**
 * Unit cost
 * @member {Number} unit_cost
 */

ItemAutoOrderStepGrandfatherPricing.prototype['unit_cost'] = undefined;
var _default = ItemAutoOrderStepGrandfatherPricing;
exports["default"] = _default;