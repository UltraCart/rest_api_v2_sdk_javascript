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
 * The OrderReason model module.
 * @module com.ultracart.admin.v2.models/OrderReason
 * @version 4.0.192
 */
var OrderReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderReason</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReason
   */
  function OrderReason() {
    _classCallCheck(this, OrderReason);

    OrderReason.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderReason, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReason} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReason} The populated <code>OrderReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderReason();

        if (data.hasOwnProperty('default_reason')) {
          obj['default_reason'] = _ApiClient["default"].convertToType(data['default_reason'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderReason;
}();
/**
 * Default reason
 * @member {Boolean} default_reason
 */


OrderReason.prototype['default_reason'] = undefined;
/**
 * Reason description.  This is the friendly description of the reason that should be displayed to the user.
 * @member {String} description
 */

OrderReason.prototype['description'] = undefined;
/**
 * Reason value.  This is what should be submitted with a refund operation.
 * @member {String} value
 */

OrderReason.prototype['value'] = undefined;
var _default = OrderReason;
exports["default"] = _default;