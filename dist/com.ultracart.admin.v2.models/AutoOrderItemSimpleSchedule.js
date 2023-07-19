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
 * The AutoOrderItemSimpleSchedule model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
 * @version 4.0.166
 */
var AutoOrderItemSimpleSchedule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderItemSimpleSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
   */
  function AutoOrderItemSimpleSchedule() {
    _classCallCheck(this, AutoOrderItemSimpleSchedule);

    AutoOrderItemSimpleSchedule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrderItemSimpleSchedule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrderItemSimpleSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} The populated <code>AutoOrderItemSimpleSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderItemSimpleSchedule();

        if (data.hasOwnProperty('frequency')) {
          obj['frequency'] = _ApiClient["default"].convertToType(data['frequency'], 'String');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('repeat_count')) {
          obj['repeat_count'] = _ApiClient["default"].convertToType(data['repeat_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AutoOrderItemSimpleSchedule;
}();
/**
 * Frequency of the rebill if not a fixed schedule
 * @member {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule.FrequencyEnum} frequency
 */


AutoOrderItemSimpleSchedule.prototype['frequency'] = undefined;
/**
 * Item ID that should rebill
 * @member {String} item_id
 */

AutoOrderItemSimpleSchedule.prototype['item_id'] = undefined;
/**
 * The number of times this simple schedule is configured for
 * @member {Number} repeat_count
 */

AutoOrderItemSimpleSchedule.prototype['repeat_count'] = undefined;
/**
 * Allowed values for the <code>frequency</code> property.
 * @enum {String}
 * @readonly
 */

AutoOrderItemSimpleSchedule['FrequencyEnum'] = {
  /**
   * value: "Weekly"
   * @const
   */
  "Weekly": "Weekly",

  /**
   * value: "Biweekly"
   * @const
   */
  "Biweekly": "Biweekly",

  /**
   * value: "Every..."
   * @const
   */
  "Every...": "Every...",

  /**
   * value: "Every 10 Days"
   * @const
   */
  "Every 10 Days": "Every 10 Days",

  /**
   * value: "Every 24 Days"
   * @const
   */
  "Every 24 Days": "Every 24 Days",

  /**
   * value: "Every 28 Days"
   * @const
   */
  "Every 28 Days": "Every 28 Days",

  /**
   * value: "Monthly"
   * @const
   */
  "Monthly": "Monthly",

  /**
   * value: "Every 45 Days"
   * @const
   */
  "Every 45 Days": "Every 45 Days",

  /**
   * value: "Every 2 Months"
   * @const
   */
  "Every 2 Months": "Every 2 Months",

  /**
   * value: "Every 3 Months"
   * @const
   */
  "Every 3 Months": "Every 3 Months",

  /**
   * value: "Every 4 Months"
   * @const
   */
  "Every 4 Months": "Every 4 Months",

  /**
   * value: "Every 6 Months"
   * @const
   */
  "Every 6 Months": "Every 6 Months",

  /**
   * value: "Yearly"
   * @const
   */
  "Yearly": "Yearly"
};
var _default = AutoOrderItemSimpleSchedule;
exports["default"] = _default;