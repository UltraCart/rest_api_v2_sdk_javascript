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
 * The CouponPercentMoreLoyaltyCashback model module.
 * @module com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback
 * @version 4.0.171
 */
var CouponPercentMoreLoyaltyCashback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentMoreLoyaltyCashback</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback
   */
  function CouponPercentMoreLoyaltyCashback() {
    _classCallCheck(this, CouponPercentMoreLoyaltyCashback);

    CouponPercentMoreLoyaltyCashback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentMoreLoyaltyCashback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentMoreLoyaltyCashback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback} The populated <code>CouponPercentMoreLoyaltyCashback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentMoreLoyaltyCashback();

        if (data.hasOwnProperty('percent_more_loyalty_cashback')) {
          obj['percent_more_loyalty_cashback'] = _ApiClient["default"].convertToType(data['percent_more_loyalty_cashback'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentMoreLoyaltyCashback;
}();
/**
 * The percentage of additional loyalty cashback
 * @member {Number} percent_more_loyalty_cashback
 */


CouponPercentMoreLoyaltyCashback.prototype['percent_more_loyalty_cashback'] = undefined;
var _default = CouponPercentMoreLoyaltyCashback;
exports["default"] = _default;