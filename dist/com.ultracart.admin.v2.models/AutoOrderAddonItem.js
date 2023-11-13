"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoOrderAddonItemOption = _interopRequireDefault(require("./AutoOrderAddonItemOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AutoOrderAddonItem model module.
 * @module com.ultracart.admin.v2.models/AutoOrderAddonItem
 * @version 4.0.188
 */
var AutoOrderAddonItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderAddonItem</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderAddonItem
   */
  function AutoOrderAddonItem() {
    _classCallCheck(this, AutoOrderAddonItem);

    AutoOrderAddonItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrderAddonItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrderAddonItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} The populated <code>AutoOrderAddonItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderAddonItem();

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _ApiClient["default"].convertToType(data['arbitrary_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('next_x_orders')) {
          obj['next_x_orders'] = _ApiClient["default"].convertToType(data['next_x_orders'], 'Number');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_AutoOrderAddonItemOption["default"]]);
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AutoOrderAddonItem;
}();
/**
 * @member {Number} arbitrary_unit_cost
 */


AutoOrderAddonItem.prototype['arbitrary_unit_cost'] = undefined;
/**
 * @member {Boolean} free_shipping
 */

AutoOrderAddonItem.prototype['free_shipping'] = undefined;
/**
 * @member {String} item_id
 */

AutoOrderAddonItem.prototype['item_id'] = undefined;
/**
 * @member {Number} next_x_orders
 */

AutoOrderAddonItem.prototype['next_x_orders'] = undefined;
/**
 * Options associated with this item
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderAddonItemOption>} options
 */

AutoOrderAddonItem.prototype['options'] = undefined;
/**
 * @member {Number} quantity
 */

AutoOrderAddonItem.prototype['quantity'] = undefined;
var _default = AutoOrderAddonItem;
exports["default"] = _default;