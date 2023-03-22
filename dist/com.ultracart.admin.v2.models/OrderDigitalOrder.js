"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderDigitalItem = _interopRequireDefault(require("./OrderDigitalItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderDigitalOrder model module.
 * @module com.ultracart.admin.v2.models/OrderDigitalOrder
 * @version 4.0.141
 */
var OrderDigitalOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDigitalOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderDigitalOrder
   */
  function OrderDigitalOrder() {
    _classCallCheck(this, OrderDigitalOrder);

    OrderDigitalOrder.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderDigitalOrder, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderDigitalOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderDigitalOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderDigitalOrder} The populated <code>OrderDigitalOrder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDigitalOrder();

        if (data.hasOwnProperty('creation_dts')) {
          obj['creation_dts'] = _ApiClient["default"].convertToType(data['creation_dts'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_OrderDigitalItem["default"]]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('url_id')) {
          obj['url_id'] = _ApiClient["default"].convertToType(data['url_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderDigitalOrder;
}();
/**
 * Date/time that the digital order was created
 * @member {String} creation_dts
 */


OrderDigitalOrder.prototype['creation_dts'] = undefined;
/**
 * Expiration date/time of the digital order
 * @member {String} expiration_dts
 */

OrderDigitalOrder.prototype['expiration_dts'] = undefined;
/**
 * Digital items associated with the digital order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderDigitalItem>} items
 */

OrderDigitalOrder.prototype['items'] = undefined;
/**
 * URL where the customer can go to and download their digital order content
 * @member {String} url
 */

OrderDigitalOrder.prototype['url'] = undefined;
/**
 * URL ID is a unique code that is part of the URLs
 * @member {String} url_id
 */

OrderDigitalOrder.prototype['url_id'] = undefined;
var _default = OrderDigitalOrder;
exports["default"] = _default;