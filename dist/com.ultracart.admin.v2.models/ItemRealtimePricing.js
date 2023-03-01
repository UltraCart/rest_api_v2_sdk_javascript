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
 * The ItemRealtimePricing model module.
 * @module com.ultracart.admin.v2.models/ItemRealtimePricing
 * @version 4.0.137
 */
var ItemRealtimePricing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRealtimePricing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRealtimePricing
   */
  function ItemRealtimePricing() {
    _classCallCheck(this, ItemRealtimePricing);

    ItemRealtimePricing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRealtimePricing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRealtimePricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRealtimePricing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRealtimePricing} The populated <code>ItemRealtimePricing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRealtimePricing();

        if (data.hasOwnProperty('realtime_pricing_parameter')) {
          obj['realtime_pricing_parameter'] = _ApiClient["default"].convertToType(data['realtime_pricing_parameter'], 'String');
        }

        if (data.hasOwnProperty('realtime_pricing_provider')) {
          obj['realtime_pricing_provider'] = _ApiClient["default"].convertToType(data['realtime_pricing_provider'], 'String');
        }

        if (data.hasOwnProperty('realtime_pricing_provider_oid')) {
          obj['realtime_pricing_provider_oid'] = _ApiClient["default"].convertToType(data['realtime_pricing_provider_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemRealtimePricing;
}();
/**
 * Real-time pricing provider parameters
 * @member {String} realtime_pricing_parameter
 */


ItemRealtimePricing.prototype['realtime_pricing_parameter'] = undefined;
/**
 * Real-time pricing provider name
 * @member {String} realtime_pricing_provider
 */

ItemRealtimePricing.prototype['realtime_pricing_provider'] = undefined;
/**
 * Real-time pricing provide object identifier
 * @member {Number} realtime_pricing_provider_oid
 */

ItemRealtimePricing.prototype['realtime_pricing_provider_oid'] = undefined;
var _default = ItemRealtimePricing;
exports["default"] = _default;