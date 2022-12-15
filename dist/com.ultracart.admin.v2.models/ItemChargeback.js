"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemChargebackAddendum = _interopRequireDefault(require("./ItemChargebackAddendum"));

var _ItemChargebackAdjustmentRequest = _interopRequireDefault(require("./ItemChargebackAdjustmentRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemChargeback model module.
 * @module com.ultracart.admin.v2.models/ItemChargeback
 * @version 4.0.98-RC
 */
var ItemChargeback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemChargeback</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChargeback
   */
  function ItemChargeback() {
    _classCallCheck(this, ItemChargeback);

    ItemChargeback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemChargeback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemChargeback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChargeback} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChargeback} The populated <code>ItemChargeback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemChargeback();

        if (data.hasOwnProperty('addendums')) {
          obj['addendums'] = _ApiClient["default"].convertToType(data['addendums'], [_ItemChargebackAddendum["default"]]);
        }

        if (data.hasOwnProperty('adjustment_requests')) {
          obj['adjustment_requests'] = _ApiClient["default"].convertToType(data['adjustment_requests'], [_ItemChargebackAdjustmentRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ItemChargeback;
}();
/**
 * Addendums
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemChargebackAddendum>} addendums
 */


ItemChargeback.prototype['addendums'] = undefined;
/**
 * Adjustment requests
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest>} adjustment_requests
 */

ItemChargeback.prototype['adjustment_requests'] = undefined;
var _default = ItemChargeback;
exports["default"] = _default;