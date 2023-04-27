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
 * The ItemEbayMarketListing model module.
 * @module com.ultracart.admin.v2.models/ItemEbayMarketListing
 * @version 4.0.151
 */
var ItemEbayMarketListing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemEbayMarketListing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketListing
   */
  function ItemEbayMarketListing() {
    _classCallCheck(this, ItemEbayMarketListing);

    ItemEbayMarketListing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemEbayMarketListing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemEbayMarketListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} The populated <code>ItemEbayMarketListing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemEbayMarketListing();

        if (data.hasOwnProperty('auction_id')) {
          obj['auction_id'] = _ApiClient["default"].convertToType(data['auction_id'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'String');
        }

        if (data.hasOwnProperty('shipping')) {
          obj['shipping'] = _ApiClient["default"].convertToType(data['shipping'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemEbayMarketListing;
}();
/**
 * Auction ID
 * @member {String} auction_id
 */


ItemEbayMarketListing.prototype['auction_id'] = undefined;
/**
 * Price
 * @member {Number} price
 */

ItemEbayMarketListing.prototype['price'] = undefined;
/**
 * Seller
 * @member {String} seller
 */

ItemEbayMarketListing.prototype['seller'] = undefined;
/**
 * Shipping
 * @member {Number} shipping
 */

ItemEbayMarketListing.prototype['shipping'] = undefined;
/**
 * Total
 * @member {Number} total
 */

ItemEbayMarketListing.prototype['total'] = undefined;
var _default = ItemEbayMarketListing;
exports["default"] = _default;