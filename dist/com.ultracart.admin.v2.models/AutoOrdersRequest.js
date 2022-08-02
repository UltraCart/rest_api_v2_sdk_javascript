"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoOrder = _interopRequireDefault(require("./AutoOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AutoOrdersRequest model module.
 * @module com.ultracart.admin.v2.models/AutoOrdersRequest
 * @version 4.0.47-RC
 */
var AutoOrdersRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrdersRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrdersRequest
   */
  function AutoOrdersRequest() {
    _classCallCheck(this, AutoOrdersRequest);

    AutoOrdersRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrdersRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrdersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrdersRequest} The populated <code>AutoOrdersRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrdersRequest();

        if (data.hasOwnProperty('autoOrders')) {
          obj['autoOrders'] = _ApiClient["default"].convertToType(data['autoOrders'], [_AutoOrder["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AutoOrdersRequest;
}();
/**
 * auto_orders
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} autoOrders
 */


AutoOrdersRequest.prototype['autoOrders'] = undefined;
var _default = AutoOrdersRequest;
exports["default"] = _default;