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
 * The CustomerOrdersSummary model module.
 * @module com.ultracart.admin.v2.models/CustomerOrdersSummary
 * @version 4.0.175
 */
var CustomerOrdersSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerOrdersSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerOrdersSummary
   */
  function CustomerOrdersSummary() {
    _classCallCheck(this, CustomerOrdersSummary);

    CustomerOrdersSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerOrdersSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerOrdersSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} The populated <code>CustomerOrdersSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerOrdersSummary();

        if (data.hasOwnProperty('first_order_dts')) {
          obj['first_order_dts'] = _ApiClient["default"].convertToType(data['first_order_dts'], 'String');
        }

        if (data.hasOwnProperty('last_order_dts')) {
          obj['last_order_dts'] = _ApiClient["default"].convertToType(data['last_order_dts'], 'String');
        }

        if (data.hasOwnProperty('order_count')) {
          obj['order_count'] = _ApiClient["default"].convertToType(data['order_count'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerOrdersSummary;
}();
/**
 * First order date
 * @member {String} first_order_dts
 */


CustomerOrdersSummary.prototype['first_order_dts'] = undefined;
/**
 * Last order date
 * @member {String} last_order_dts
 */

CustomerOrdersSummary.prototype['last_order_dts'] = undefined;
/**
 * Total number of orders
 * @member {Number} order_count
 */

CustomerOrdersSummary.prototype['order_count'] = undefined;
/**
 * Total amount associated with the orders
 * @member {Number} total
 */

CustomerOrdersSummary.prototype['total'] = undefined;
var _default = CustomerOrdersSummary;
exports["default"] = _default;