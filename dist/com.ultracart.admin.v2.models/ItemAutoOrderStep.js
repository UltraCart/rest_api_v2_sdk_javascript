"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemAutoOrderStepArbitraryUnitCostSchedule = _interopRequireDefault(require("./ItemAutoOrderStepArbitraryUnitCostSchedule"));

var _ItemAutoOrderStepGrandfatherPricing = _interopRequireDefault(require("./ItemAutoOrderStepGrandfatherPricing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemAutoOrderStep model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrderStep
 * @version 4.0.96-RC
 */
var ItemAutoOrderStep = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemAutoOrderStep</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStep
   */
  function ItemAutoOrderStep() {
    _classCallCheck(this, ItemAutoOrderStep);

    ItemAutoOrderStep.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemAutoOrderStep, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemAutoOrderStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStep} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStep} The populated <code>ItemAutoOrderStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemAutoOrderStep();

        if (data.hasOwnProperty('arbitrary_schedule_days')) {
          obj['arbitrary_schedule_days'] = _ApiClient["default"].convertToType(data['arbitrary_schedule_days'], 'Number');
        }

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('arbitrary_unit_cost_schedules')) {
          obj['arbitrary_unit_cost_schedules'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost_schedules'], [_ItemAutoOrderStepArbitraryUnitCostSchedule["default"]]);
        }

        if (data.hasOwnProperty('grandfather_pricing')) {
          obj['grandfather_pricing'] = _ApiClient["default"].convertToType(data['grandfather_pricing'], [_ItemAutoOrderStepGrandfatherPricing["default"]]);
        }

        if (data.hasOwnProperty('managed_by')) {
          obj['managed_by'] = _ApiClient["default"].convertToType(data['managed_by'], 'String');
        }

        if (data.hasOwnProperty('pause_days')) {
          obj['pause_days'] = _ApiClient["default"].convertToType(data['pause_days'], 'Number');
        }

        if (data.hasOwnProperty('pause_until_date')) {
          obj['pause_until_date'] = _ApiClient["default"].convertToType(data['pause_until_date'], 'String');
        }

        if (data.hasOwnProperty('preshipment_notice_days')) {
          obj['preshipment_notice_days'] = _ApiClient["default"].convertToType(data['preshipment_notice_days'], 'Number');
        }

        if (data.hasOwnProperty('recurring_merchant_item_id')) {
          obj['recurring_merchant_item_id'] = _ApiClient["default"].convertToType(data['recurring_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('recurring_merchant_item_oid')) {
          obj['recurring_merchant_item_oid'] = _ApiClient["default"].convertToType(data['recurring_merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('repeat_count')) {
          obj['repeat_count'] = _ApiClient["default"].convertToType(data['repeat_count'], 'Number');
        }

        if (data.hasOwnProperty('schedule')) {
          obj['schedule'] = _ApiClient["default"].convertToType(data['schedule'], 'String');
        }

        if (data.hasOwnProperty('subscribe_email_list_name')) {
          obj['subscribe_email_list_name'] = _ApiClient["default"].convertToType(data['subscribe_email_list_name'], 'String');
        }

        if (data.hasOwnProperty('subscribe_email_list_oid')) {
          obj['subscribe_email_list_oid'] = _ApiClient["default"].convertToType(data['subscribe_email_list_oid'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemAutoOrderStep;
}();
/**
 * If the schedule is arbitrary, then this is the number of days
 * @member {Number} arbitrary_schedule_days
 */


ItemAutoOrderStep.prototype['arbitrary_schedule_days'] = undefined;
/**
 * Arbitrary unit cost used to override the regular item cost
 * @member {Number} arbitrary_unit_cost
 */

ItemAutoOrderStep.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Arbitrary unit costs schedules for more advanced discounting by rebill attempt
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule>} arbitrary_unit_cost_schedules
 */

ItemAutoOrderStep.prototype['arbitrary_unit_cost_schedules'] = undefined;
/**
 * Grand-father pricing configuration if the rebill schedule has changed over time
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing>} grandfather_pricing
 */

ItemAutoOrderStep.prototype['grandfather_pricing'] = undefined;
/**
 * Managed by (defaults to UltraCart)
 * @member {String} managed_by
 */

ItemAutoOrderStep.prototype['managed_by'] = undefined;
/**
 * Number of days to pause
 * @member {Number} pause_days
 */

ItemAutoOrderStep.prototype['pause_days'] = undefined;
/**
 * Wait for this step to happen until the specified date
 * @member {String} pause_until_date
 */

ItemAutoOrderStep.prototype['pause_until_date'] = undefined;
/**
 * If set, a pre-shipment notice is sent to the customer this many days in advance
 * @member {Number} preshipment_notice_days
 */

ItemAutoOrderStep.prototype['preshipment_notice_days'] = undefined;
/**
 * Item id to rebill
 * @member {String} recurring_merchant_item_id
 */

ItemAutoOrderStep.prototype['recurring_merchant_item_id'] = undefined;
/**
 * Item object identifier to rebill
 * @member {Number} recurring_merchant_item_oid
 */

ItemAutoOrderStep.prototype['recurring_merchant_item_oid'] = undefined;
/**
 * Number of times to rebill.  Last step can be null for infinite
 * @member {Number} repeat_count
 */

ItemAutoOrderStep.prototype['repeat_count'] = undefined;
/**
 * Frequency of the rebill
 * @member {String} schedule
 */

ItemAutoOrderStep.prototype['schedule'] = undefined;
/**
 * Email list name to subscribe the customer to when the rebill occurs
 * @member {String} subscribe_email_list_name
 */

ItemAutoOrderStep.prototype['subscribe_email_list_name'] = undefined;
/**
 * Email list identifier to subscribe the customer to when this rebill occurs
 * @member {Number} subscribe_email_list_oid
 */

ItemAutoOrderStep.prototype['subscribe_email_list_oid'] = undefined;
/**
 * Type of step (item, kit only, loop or pause)
 * @member {module:com.ultracart.admin.v2.models/ItemAutoOrderStep.TypeEnum} type
 */

ItemAutoOrderStep.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ItemAutoOrderStep['TypeEnum'] = {
  /**
   * value: "item"
   * @const
   */
  "item": "item",

  /**
   * value: "pause"
   * @const
   */
  "pause": "pause",

  /**
   * value: "loop"
   * @const
   */
  "loop": "loop",

  /**
   * value: "kit only"
   * @const
   */
  "kit only": "kit only"
};
var _default = ItemAutoOrderStep;
exports["default"] = _default;