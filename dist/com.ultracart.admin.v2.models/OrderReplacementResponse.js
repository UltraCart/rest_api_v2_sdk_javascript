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
 * The OrderReplacementResponse model module.
 * @module com.ultracart.admin.v2.models/OrderReplacementResponse
 * @version 4.0.119-RC
 */
var OrderReplacementResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderReplacementResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacementResponse
   */
  function OrderReplacementResponse() {
    _classCallCheck(this, OrderReplacementResponse);

    OrderReplacementResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderReplacementResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderReplacementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacementResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReplacementResponse} The populated <code>OrderReplacementResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderReplacementResponse();

        if (data.hasOwnProperty('chargeSuccessful')) {
          obj['chargeSuccessful'] = _ApiClient["default"].convertToType(data['chargeSuccessful'], 'Boolean');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('feedback')) {
          obj['feedback'] = _ApiClient["default"].convertToType(data['feedback'], 'String');
        }

        if (data.hasOwnProperty('free')) {
          obj['free'] = _ApiClient["default"].convertToType(data['free'], 'Boolean');
        }

        if (data.hasOwnProperty('orderId')) {
          obj['orderId'] = _ApiClient["default"].convertToType(data['orderId'], 'String');
        }

        if (data.hasOwnProperty('successful')) {
          obj['successful'] = _ApiClient["default"].convertToType(data['successful'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderReplacementResponse;
}();
/**
 * @member {Boolean} chargeSuccessful
 */


OrderReplacementResponse.prototype['chargeSuccessful'] = undefined;
/**
 * @member {String} errorMessage
 */

OrderReplacementResponse.prototype['errorMessage'] = undefined;
/**
 * @member {String} feedback
 */

OrderReplacementResponse.prototype['feedback'] = undefined;
/**
 * @member {Boolean} free
 */

OrderReplacementResponse.prototype['free'] = undefined;
/**
 * @member {String} orderId
 */

OrderReplacementResponse.prototype['orderId'] = undefined;
/**
 * @member {Boolean} successful
 */

OrderReplacementResponse.prototype['successful'] = undefined;
var _default = OrderReplacementResponse;
exports["default"] = _default;