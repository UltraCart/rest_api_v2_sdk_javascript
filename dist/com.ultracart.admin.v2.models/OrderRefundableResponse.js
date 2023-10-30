"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _OrderReason = _interopRequireDefault(require("./OrderReason"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderRefundableResponse model module.
 * @module com.ultracart.admin.v2.models/OrderRefundableResponse
 * @version 4.0.183
 */
var OrderRefundableResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderRefundableResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderRefundableResponse
   */
  function OrderRefundableResponse() {
    _classCallCheck(this, OrderRefundableResponse);

    OrderRefundableResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderRefundableResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderRefundableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderRefundableResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderRefundableResponse} The populated <code>OrderRefundableResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderRefundableResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('item_level_refund_reason_required')) {
          obj['item_level_refund_reason_required'] = _ApiClient["default"].convertToType(data['item_level_refund_reason_required'], 'Boolean');
        }

        if (data.hasOwnProperty('item_level_refund_reasons')) {
          obj['item_level_refund_reasons'] = _ApiClient["default"].convertToType(data['item_level_refund_reasons'], [_OrderReason["default"]]);
        }

        if (data.hasOwnProperty('item_level_return_reasons')) {
          obj['item_level_return_reasons'] = _ApiClient["default"].convertToType(data['item_level_return_reasons'], [_OrderReason["default"]]);
        }

        if (data.hasOwnProperty('manual_because_multiple_charges')) {
          obj['manual_because_multiple_charges'] = _ApiClient["default"].convertToType(data['manual_because_multiple_charges'], 'Boolean');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('order_level_refund_reason_required')) {
          obj['order_level_refund_reason_required'] = _ApiClient["default"].convertToType(data['order_level_refund_reason_required'], 'Boolean');
        }

        if (data.hasOwnProperty('order_level_refund_reasons')) {
          obj['order_level_refund_reasons'] = _ApiClient["default"].convertToType(data['order_level_refund_reasons'], [_OrderReason["default"]]);
        }

        if (data.hasOwnProperty('order_level_reject_reasons')) {
          obj['order_level_reject_reasons'] = _ApiClient["default"].convertToType(data['order_level_reject_reasons'], [_OrderReason["default"]]);
        }

        if (data.hasOwnProperty('refundable')) {
          obj['refundable'] = _ApiClient["default"].convertToType(data['refundable'], 'Boolean');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return OrderRefundableResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


OrderRefundableResponse.prototype['error'] = undefined;
/**
 * True if the item level refund reason is required
 * @member {Boolean} item_level_refund_reason_required
 */

OrderRefundableResponse.prototype['item_level_refund_reason_required'] = undefined;
/**
 * Reason codes available at the item level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_refund_reasons
 */

OrderRefundableResponse.prototype['item_level_refund_reasons'] = undefined;
/**
 * Return codes available at the item level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_return_reasons
 */

OrderRefundableResponse.prototype['item_level_return_reasons'] = undefined;
/**
 * If true, this refund will have to be manually done because of additional charges with the virtual terminal were made
 * @member {Boolean} manual_because_multiple_charges
 */

OrderRefundableResponse.prototype['manual_because_multiple_charges'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

OrderRefundableResponse.prototype['metadata'] = undefined;
/**
 * True if the order level refund reason is required
 * @member {Boolean} order_level_refund_reason_required
 */

OrderRefundableResponse.prototype['order_level_refund_reason_required'] = undefined;
/**
 * Reason codes available at the order level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_refund_reasons
 */

OrderRefundableResponse.prototype['order_level_refund_reasons'] = undefined;
/**
 * Reject codes available at the order level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_reject_reasons
 */

OrderRefundableResponse.prototype['order_level_reject_reasons'] = undefined;
/**
 * Whether the order is refundable or not.  Null should be interpreted as false.
 * @member {Boolean} refundable
 */

OrderRefundableResponse.prototype['refundable'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

OrderRefundableResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

OrderRefundableResponse.prototype['warning'] = undefined;
var _default = OrderRefundableResponse;
exports["default"] = _default;