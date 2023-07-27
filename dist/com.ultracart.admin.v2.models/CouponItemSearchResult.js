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
 * The CouponItemSearchResult model module.
 * @module com.ultracart.admin.v2.models/CouponItemSearchResult
 * @version 4.0.168
 */
var CouponItemSearchResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponItemSearchResult</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponItemSearchResult
   */
  function CouponItemSearchResult() {
    _classCallCheck(this, CouponItemSearchResult);

    CouponItemSearchResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponItemSearchResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponItemSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponItemSearchResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponItemSearchResult} The populated <code>CouponItemSearchResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponItemSearchResult();

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('manufacturer_name')) {
          obj['manufacturer_name'] = _ApiClient["default"].convertToType(data['manufacturer_name'], 'String');
        }

        if (data.hasOwnProperty('manufacturer_sku')) {
          obj['manufacturer_sku'] = _ApiClient["default"].convertToType(data['manufacturer_sku'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_id')) {
          obj['merchant_item_id'] = _ApiClient["default"].convertToType(data['merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_oid')) {
          obj['merchant_item_oid'] = _ApiClient["default"].convertToType(data['merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'String');
        }

        if (data.hasOwnProperty('thumbnail_url')) {
          obj['thumbnail_url'] = _ApiClient["default"].convertToType(data['thumbnail_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponItemSearchResult;
}();
/**
 * The cost of this item.
 * @member {String} cost
 */


CouponItemSearchResult.prototype['cost'] = undefined;
/**
 * A human readable description of this item.
 * @member {String} description
 */

CouponItemSearchResult.prototype['description'] = undefined;
/**
 * The manufacturer of this item.
 * @member {String} manufacturer_name
 */

CouponItemSearchResult.prototype['manufacturer_name'] = undefined;
/**
 * The manufacturer sku of this item.
 * @member {String} manufacturer_sku
 */

CouponItemSearchResult.prototype['manufacturer_sku'] = undefined;
/**
 * The merchant item identifier, which is unique for this merchant, but not across all of UltraCart.
 * @member {String} merchant_item_id
 */

CouponItemSearchResult.prototype['merchant_item_id'] = undefined;
/**
 * The unique internal identifier used by UltraCart to manage this item.
 * @member {Number} merchant_item_oid
 */

CouponItemSearchResult.prototype['merchant_item_oid'] = undefined;
/**
 * The search score of this item.  Larger scores mean more accurate matches against the search term.
 * @member {String} score
 */

CouponItemSearchResult.prototype['score'] = undefined;
/**
 * A url for displaying a thumbnail of this item
 * @member {String} thumbnail_url
 */

CouponItemSearchResult.prototype['thumbnail_url'] = undefined;
var _default = CouponItemSearchResult;
exports["default"] = _default;