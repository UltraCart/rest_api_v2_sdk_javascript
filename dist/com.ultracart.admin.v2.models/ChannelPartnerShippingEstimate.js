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
 * The ChannelPartnerShippingEstimate model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
 * @version 4.0.126-RC
 */
var ChannelPartnerShippingEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerShippingEstimate</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
   */
  function ChannelPartnerShippingEstimate() {
    _classCallCheck(this, ChannelPartnerShippingEstimate);

    ChannelPartnerShippingEstimate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerShippingEstimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} The populated <code>ChannelPartnerShippingEstimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerShippingEstimate();

        if (data.hasOwnProperty('shipping_handling_total')) {
          obj['shipping_handling_total'] = _ApiClient["default"].convertToType(data['shipping_handling_total'], 'Number');
        }

        if (data.hasOwnProperty('shipping_method')) {
          obj['shipping_method'] = _ApiClient["default"].convertToType(data['shipping_method'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartnerShippingEstimate;
}();
/**
 * The total estimate for this shipping method based on the provided order.
 * @member {Number} shipping_handling_total
 */


ChannelPartnerShippingEstimate.prototype['shipping_handling_total'] = undefined;
/**
 * The name of the shipping method
 * @member {String} shipping_method
 */

ChannelPartnerShippingEstimate.prototype['shipping_method'] = undefined;
var _default = ChannelPartnerShippingEstimate;
exports["default"] = _default;