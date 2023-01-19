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
 * The CouponType model module.
 * @module com.ultracart.admin.v2.models/CouponType
 * @version 4.0.118-RC
 */
var CouponType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponType</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponType
   */
  function CouponType() {
    _classCallCheck(this, CouponType);

    CouponType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponType} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponType} The populated <code>CouponType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponType();

        if (data.hasOwnProperty('localized')) {
          obj['localized'] = _ApiClient["default"].convertToType(data['localized'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponType;
}();
/**
 * A friendly display of the coupon type suitable for human reading
 * @member {String} localized
 */


CouponType.prototype['localized'] = undefined;
/**
 * The name of the coupon type
 * @member {String} name
 */

CouponType.prototype['name'] = undefined;
var _default = CouponType;
exports["default"] = _default;