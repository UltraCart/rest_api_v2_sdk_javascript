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
 * The OrderValidationResponse model module.
 * @module com.ultracart.admin.v2.models/OrderValidationResponse
 * @version 4.0.174
 */
var OrderValidationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderValidationResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderValidationResponse
   */
  function OrderValidationResponse() {
    _classCallCheck(this, OrderValidationResponse);

    OrderValidationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderValidationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderValidationResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderValidationResponse} The populated <code>OrderValidationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderValidationResponse();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }

        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], ['String']);
        }

        if (data.hasOwnProperty('order_was_updated')) {
          obj['order_was_updated'] = _ApiClient["default"].convertToType(data['order_was_updated'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderValidationResponse;
}();
/**
 * Errors to display to the merchant if they failed any of the validations checked
 * @member {Array.<String>} errors
 */


OrderValidationResponse.prototype['errors'] = undefined;
/**
 * Informational messages
 * @member {Array.<String>} messages
 */

OrderValidationResponse.prototype['messages'] = undefined;
/**
 * If true, this order was updated during the validation call.  This may happen during address standardization fixes.
 * @member {Boolean} order_was_updated
 */

OrderValidationResponse.prototype['order_was_updated'] = undefined;
var _default = OrderValidationResponse;
exports["default"] = _default;