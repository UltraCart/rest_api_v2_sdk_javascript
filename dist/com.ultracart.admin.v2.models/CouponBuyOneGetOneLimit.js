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
 * The CouponBuyOneGetOneLimit model module.
 * @module com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit
 * @version 4.0.59-RC
 */
var CouponBuyOneGetOneLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponBuyOneGetOneLimit</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit
   */
  function CouponBuyOneGetOneLimit() {
    _classCallCheck(this, CouponBuyOneGetOneLimit);

    CouponBuyOneGetOneLimit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponBuyOneGetOneLimit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponBuyOneGetOneLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} The populated <code>CouponBuyOneGetOneLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponBuyOneGetOneLimit();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponBuyOneGetOneLimit;
}();
/**
 * An optional list of items of which one must be purchased to receive free quantity of the same item.
 * @member {Array.<String>} items
 */


CouponBuyOneGetOneLimit.prototype['items'] = undefined;
/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */

CouponBuyOneGetOneLimit.prototype['limit'] = undefined;
var _default = CouponBuyOneGetOneLimit;
exports["default"] = _default;