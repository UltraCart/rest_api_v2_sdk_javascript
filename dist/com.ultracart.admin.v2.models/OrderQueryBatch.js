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
 * The OrderQueryBatch model module.
 * @module com.ultracart.admin.v2.models/OrderQueryBatch
 * @version 4.0.164
 */
var OrderQueryBatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderQueryBatch</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderQueryBatch
   */
  function OrderQueryBatch() {
    _classCallCheck(this, OrderQueryBatch);

    OrderQueryBatch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderQueryBatch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderQueryBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderQueryBatch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderQueryBatch} The populated <code>OrderQueryBatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderQueryBatch();

        if (data.hasOwnProperty('order_ids')) {
          obj['order_ids'] = _ApiClient["default"].convertToType(data['order_ids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return OrderQueryBatch;
}();
/**
 * Order IDs
 * @member {Array.<String>} order_ids
 */


OrderQueryBatch.prototype['order_ids'] = undefined;
var _default = OrderQueryBatch;
exports["default"] = _default;