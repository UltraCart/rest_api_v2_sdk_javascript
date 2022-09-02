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
 * The ItemAutoOrderStepArbitraryUnitCostSchedule model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
 * @version 4.0.59-RC
 */
var ItemAutoOrderStepArbitraryUnitCostSchedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
   */
  function ItemAutoOrderStepArbitraryUnitCostSchedule() {
    _classCallCheck(this, ItemAutoOrderStepArbitraryUnitCostSchedule);

    ItemAutoOrderStepArbitraryUnitCostSchedule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemAutoOrderStepArbitraryUnitCostSchedule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} The populated <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemAutoOrderStepArbitraryUnitCostSchedule();

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('retry_days')) {
          obj['retry_days'] = _ApiClient["default"].convertToType(data['retry_days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemAutoOrderStepArbitraryUnitCostSchedule;
}();
/**
 * Arbitrary unit cost
 * @member {Number} arbitrary_unit_cost
 */


ItemAutoOrderStepArbitraryUnitCostSchedule.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Retry days
 * @member {Number} retry_days
 */

ItemAutoOrderStepArbitraryUnitCostSchedule.prototype['retry_days'] = undefined;
var _default = ItemAutoOrderStepArbitraryUnitCostSchedule;
exports["default"] = _default;