"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PointOfSaleLocation = _interopRequireDefault(require("./PointOfSaleLocation"));

var _PointOfSaleReader = _interopRequireDefault(require("./PointOfSaleReader"));

var _PointOfSaleRegister = _interopRequireDefault(require("./PointOfSaleRegister"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderPointOfSale model module.
 * @module com.ultracart.admin.v2.models/OrderPointOfSale
 * @version 4.0.123-RC
 */
var OrderPointOfSale = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPointOfSale</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPointOfSale
   */
  function OrderPointOfSale() {
    _classCallCheck(this, OrderPointOfSale);

    OrderPointOfSale.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPointOfSale, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPointOfSale</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPointOfSale} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPointOfSale} The populated <code>OrderPointOfSale</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPointOfSale();

        if (data.hasOwnProperty('location')) {
          obj['location'] = _PointOfSaleLocation["default"].constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('reader')) {
          obj['reader'] = _PointOfSaleReader["default"].constructFromObject(data['reader']);
        }

        if (data.hasOwnProperty('register')) {
          obj['register'] = _PointOfSaleRegister["default"].constructFromObject(data['register']);
        }
      }

      return obj;
    }
  }]);

  return OrderPointOfSale;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleLocation} location
 */


OrderPointOfSale.prototype['location'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader} reader
 */

OrderPointOfSale.prototype['reader'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleRegister} register
 */

OrderPointOfSale.prototype['register'] = undefined;
var _default = OrderPointOfSale;
exports["default"] = _default;