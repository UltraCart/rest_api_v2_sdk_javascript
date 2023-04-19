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
 * The CouponPercentMoreLoyaltyPoints model module.
 * @module com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints
 * @version 4.0.148
 */
var CouponPercentMoreLoyaltyPoints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentMoreLoyaltyPoints</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints
   */
  function CouponPercentMoreLoyaltyPoints() {
    _classCallCheck(this, CouponPercentMoreLoyaltyPoints);

    CouponPercentMoreLoyaltyPoints.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentMoreLoyaltyPoints, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentMoreLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints} The populated <code>CouponPercentMoreLoyaltyPoints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentMoreLoyaltyPoints();

        if (data.hasOwnProperty('percent_more_loyalty_points')) {
          obj['percent_more_loyalty_points'] = _ApiClient["default"].convertToType(data['percent_more_loyalty_points'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentMoreLoyaltyPoints;
}();
/**
 * The percentage of additional loyalty points
 * @member {Number} percent_more_loyalty_points
 */


CouponPercentMoreLoyaltyPoints.prototype['percent_more_loyalty_points'] = undefined;
var _default = CouponPercentMoreLoyaltyPoints;
exports["default"] = _default;