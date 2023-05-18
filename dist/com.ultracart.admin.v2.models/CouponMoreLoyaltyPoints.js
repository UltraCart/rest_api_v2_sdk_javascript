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
 * The CouponMoreLoyaltyPoints model module.
 * @module com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints
 * @version 4.0.154
 */
var CouponMoreLoyaltyPoints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponMoreLoyaltyPoints</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints
   */
  function CouponMoreLoyaltyPoints() {
    _classCallCheck(this, CouponMoreLoyaltyPoints);

    CouponMoreLoyaltyPoints.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponMoreLoyaltyPoints, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponMoreLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints} The populated <code>CouponMoreLoyaltyPoints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponMoreLoyaltyPoints();

        if (data.hasOwnProperty('loyalty_points')) {
          obj['loyalty_points'] = _ApiClient["default"].convertToType(data['loyalty_points'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponMoreLoyaltyPoints;
}();
/**
 * The additional loyalty points
 * @member {Number} loyalty_points
 */


CouponMoreLoyaltyPoints.prototype['loyalty_points'] = undefined;
var _default = CouponMoreLoyaltyPoints;
exports["default"] = _default;