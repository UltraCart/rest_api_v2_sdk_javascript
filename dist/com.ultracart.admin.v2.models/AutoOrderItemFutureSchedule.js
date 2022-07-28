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
 * The AutoOrderItemFutureSchedule model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
 * @version 4.0.44-RC
 */
var AutoOrderItemFutureSchedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderItemFutureSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
   */
  function AutoOrderItemFutureSchedule() {
    _classCallCheck(this, AutoOrderItemFutureSchedule);

    AutoOrderItemFutureSchedule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrderItemFutureSchedule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrderItemFutureSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} The populated <code>AutoOrderItemFutureSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderItemFutureSchedule();

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('rebill_count')) {
          obj['rebill_count'] = _ApiClient["default"].convertToType(data['rebill_count'], 'Number');
        }

        if (data.hasOwnProperty('shipment_dts')) {
          obj['shipment_dts'] = _ApiClient["default"].convertToType(data['shipment_dts'], 'String');
        }

        if (data.hasOwnProperty('unit_cost')) {
          obj['unit_cost'] = _ApiClient["default"].convertToType(data['unit_cost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AutoOrderItemFutureSchedule;
}();
/**
 * Item ID that should rebill
 * @member {String} item_id
 */


AutoOrderItemFutureSchedule.prototype['item_id'] = undefined;
/**
 * The number of times this rebill represents
 * @member {Number} rebill_count
 */

AutoOrderItemFutureSchedule.prototype['rebill_count'] = undefined;
/**
 * Date/time that this item is scheduled to rebill
 * @member {String} shipment_dts
 */

AutoOrderItemFutureSchedule.prototype['shipment_dts'] = undefined;
/**
 * The unit cost of the item rebilling
 * @member {Number} unit_cost
 */

AutoOrderItemFutureSchedule.prototype['unit_cost'] = undefined;
var _default = AutoOrderItemFutureSchedule;
exports["default"] = _default;