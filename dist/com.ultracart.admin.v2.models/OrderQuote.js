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
 * The OrderQuote model module.
 * @module com.ultracart.admin.v2.models/OrderQuote
 * @version 4.0.184
 */
var OrderQuote = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderQuote</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderQuote
   */
  function OrderQuote() {
    _classCallCheck(this, OrderQuote);

    OrderQuote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderQuote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderQuote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderQuote} The populated <code>OrderQuote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderQuote();

        if (data.hasOwnProperty('quote_expiration_dts')) {
          obj['quote_expiration_dts'] = _ApiClient["default"].convertToType(data['quote_expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('quoted_by')) {
          obj['quoted_by'] = _ApiClient["default"].convertToType(data['quoted_by'], 'String');
        }

        if (data.hasOwnProperty('quoted_dts')) {
          obj['quoted_dts'] = _ApiClient["default"].convertToType(data['quoted_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderQuote;
}();
/**
 * Expiration of quote at date/time
 * @member {String} quote_expiration_dts
 */


OrderQuote.prototype['quote_expiration_dts'] = undefined;
/**
 * Quoted by user
 * @member {String} quoted_by
 */

OrderQuote.prototype['quoted_by'] = undefined;
/**
 * Quoted on date/time
 * @member {String} quoted_dts
 */

OrderQuote.prototype['quoted_dts'] = undefined;
var _default = OrderQuote;
exports["default"] = _default;