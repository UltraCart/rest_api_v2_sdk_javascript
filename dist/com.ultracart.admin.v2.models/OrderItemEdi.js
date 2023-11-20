"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderItemEdiIdentification = _interopRequireDefault(require("./OrderItemEdiIdentification"));

var _OrderItemEdiLot = _interopRequireDefault(require("./OrderItemEdiLot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderItemEdi model module.
 * @module com.ultracart.admin.v2.models/OrderItemEdi
 * @version 4.0.190
 */
var OrderItemEdi = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderItemEdi</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemEdi
   */
  function OrderItemEdi() {
    _classCallCheck(this, OrderItemEdi);

    OrderItemEdi.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderItemEdi, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderItemEdi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemEdi} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemEdi} The populated <code>OrderItemEdi</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderItemEdi();

        if (data.hasOwnProperty('identifications')) {
          obj['identifications'] = _ApiClient["default"].convertToType(data['identifications'], [_OrderItemEdiIdentification["default"]]);
        }

        if (data.hasOwnProperty('lots')) {
          obj['lots'] = _ApiClient["default"].convertToType(data['lots'], [_OrderItemEdiLot["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrderItemEdi;
}();
/**
 * Identification information receives on the EDI purchase order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemEdiIdentification>} identifications
 */


OrderItemEdi.prototype['identifications'] = undefined;
/**
 * Lot information
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemEdiLot>} lots
 */

OrderItemEdi.prototype['lots'] = undefined;
var _default = OrderItemEdi;
exports["default"] = _default;