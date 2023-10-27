"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderValidationRequest model module.
 * @module com.ultracart.admin.v2.models/OrderValidationRequest
 * @version 4.0.182
 */
var OrderValidationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderValidationRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderValidationRequest
   */
  function OrderValidationRequest() {
    _classCallCheck(this, OrderValidationRequest);

    OrderValidationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderValidationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderValidationRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderValidationRequest} The populated <code>OrderValidationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderValidationRequest();

        if (data.hasOwnProperty('checks')) {
          obj['checks'] = _ApiClient["default"].convertToType(data['checks'], ['String']);
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _Order["default"].constructFromObject(data['order']);
        }
      }

      return obj;
    }
  }]);

  return OrderValidationRequest;
}();
/**
 * Checks to perform
 * @member {Array.<String>} checks
 */


OrderValidationRequest.prototype['checks'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */

OrderValidationRequest.prototype['order'] = undefined;
var _default = OrderValidationRequest;
exports["default"] = _default;