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
 * The CustomerQuotesSummary model module.
 * @module com.ultracart.admin.v2.models/CustomerQuotesSummary
 * @version 4.0.36-RC
 */
var CustomerQuotesSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerQuotesSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerQuotesSummary
   */
  function CustomerQuotesSummary() {
    _classCallCheck(this, CustomerQuotesSummary);

    CustomerQuotesSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerQuotesSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerQuotesSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} The populated <code>CustomerQuotesSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerQuotesSummary();

        if (data.hasOwnProperty('first_quote_dts')) {
          obj['first_quote_dts'] = _ApiClient["default"].convertToType(data['first_quote_dts'], 'String');
        }

        if (data.hasOwnProperty('last_quote_dts')) {
          obj['last_quote_dts'] = _ApiClient["default"].convertToType(data['last_quote_dts'], 'String');
        }

        if (data.hasOwnProperty('quote_count')) {
          obj['quote_count'] = _ApiClient["default"].convertToType(data['quote_count'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerQuotesSummary;
}();
/**
 * First quote date
 * @member {String} first_quote_dts
 */


CustomerQuotesSummary.prototype['first_quote_dts'] = undefined;
/**
 * Last quote date
 * @member {String} last_quote_dts
 */

CustomerQuotesSummary.prototype['last_quote_dts'] = undefined;
/**
 * Total number of quote
 * @member {Number} quote_count
 */

CustomerQuotesSummary.prototype['quote_count'] = undefined;
/**
 * Total amount associated with the quotes
 * @member {Number} total
 */

CustomerQuotesSummary.prototype['total'] = undefined;
var _default = CustomerQuotesSummary;
exports["default"] = _default;