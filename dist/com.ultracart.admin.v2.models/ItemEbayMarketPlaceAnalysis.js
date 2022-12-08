"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemEbayMarketListing = _interopRequireDefault(require("./ItemEbayMarketListing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemEbayMarketPlaceAnalysis model module.
 * @module com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
 * @version 4.0.94-RC
 */
var ItemEbayMarketPlaceAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemEbayMarketPlaceAnalysis</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
   */
  function ItemEbayMarketPlaceAnalysis() {
    _classCallCheck(this, ItemEbayMarketPlaceAnalysis);

    ItemEbayMarketPlaceAnalysis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemEbayMarketPlaceAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemEbayMarketPlaceAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} The populated <code>ItemEbayMarketPlaceAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemEbayMarketPlaceAnalysis();

        if (data.hasOwnProperty('adjusted_price')) {
          obj['adjusted_price'] = _ApiClient["default"].convertToType(data['adjusted_price'], 'Number');
        }

        if (data.hasOwnProperty('adjusted_shipping')) {
          obj['adjusted_shipping'] = _ApiClient["default"].convertToType(data['adjusted_shipping'], 'Number');
        }

        if (data.hasOwnProperty('adjusted_total')) {
          obj['adjusted_total'] = _ApiClient["default"].convertToType(data['adjusted_total'], 'Number');
        }

        if (data.hasOwnProperty('cogs')) {
          obj['cogs'] = _ApiClient["default"].convertToType(data['cogs'], 'Number');
        }

        if (data.hasOwnProperty('final_value_fee')) {
          obj['final_value_fee'] = _ApiClient["default"].convertToType(data['final_value_fee'], 'Number');
        }

        if (data.hasOwnProperty('minimum_advertised_price')) {
          obj['minimum_advertised_price'] = _ApiClient["default"].convertToType(data['minimum_advertised_price'], 'Number');
        }

        if (data.hasOwnProperty('other_listings')) {
          obj['other_listings'] = _ApiClient["default"].convertToType(data['other_listings'], [_ItemEbayMarketListing["default"]]);
        }

        if (data.hasOwnProperty('our_listing')) {
          obj['our_listing'] = _ItemEbayMarketListing["default"].constructFromObject(data['our_listing']);
        }

        if (data.hasOwnProperty('overhead')) {
          obj['overhead'] = _ApiClient["default"].convertToType(data['overhead'], 'Number');
        }

        if (data.hasOwnProperty('profit_potential')) {
          obj['profit_potential'] = _ApiClient["default"].convertToType(data['profit_potential'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemEbayMarketPlaceAnalysis;
}();
/**
 * Adjusted price
 * @member {Number} adjusted_price
 */


ItemEbayMarketPlaceAnalysis.prototype['adjusted_price'] = undefined;
/**
 * Adjusted shipping
 * @member {Number} adjusted_shipping
 */

ItemEbayMarketPlaceAnalysis.prototype['adjusted_shipping'] = undefined;
/**
 * Adjusted total
 * @member {Number} adjusted_total
 */

ItemEbayMarketPlaceAnalysis.prototype['adjusted_total'] = undefined;
/**
 * Cost of goods sold
 * @member {Number} cogs
 */

ItemEbayMarketPlaceAnalysis.prototype['cogs'] = undefined;
/**
 * Final value fee
 * @member {Number} final_value_fee
 */

ItemEbayMarketPlaceAnalysis.prototype['final_value_fee'] = undefined;
/**
 * Minimum advertised price
 * @member {Number} minimum_advertised_price
 */

ItemEbayMarketPlaceAnalysis.prototype['minimum_advertised_price'] = undefined;
/**
 * Other listings
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemEbayMarketListing>} other_listings
 */

ItemEbayMarketPlaceAnalysis.prototype['other_listings'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} our_listing
 */

ItemEbayMarketPlaceAnalysis.prototype['our_listing'] = undefined;
/**
 * Overhead
 * @member {Number} overhead
 */

ItemEbayMarketPlaceAnalysis.prototype['overhead'] = undefined;
/**
 * Profit potential
 * @member {Number} profit_potential
 */

ItemEbayMarketPlaceAnalysis.prototype['profit_potential'] = undefined;
var _default = ItemEbayMarketPlaceAnalysis;
exports["default"] = _default;