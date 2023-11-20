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
 * The CouponRestriction model module.
 * @module com.ultracart.admin.v2.models/CouponRestriction
 * @version 4.0.190
 */
var CouponRestriction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponRestriction
   */
  function CouponRestriction() {
    _classCallCheck(this, CouponRestriction);

    CouponRestriction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponRestriction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponRestriction} The populated <code>CouponRestriction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponRestriction();

        if (data.hasOwnProperty('invalidForThis')) {
          obj['invalidForThis'] = _ApiClient["default"].convertToType(data['invalidForThis'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('validForThis')) {
          obj['validForThis'] = _ApiClient["default"].convertToType(data['validForThis'], 'Boolean');
        }

        if (data.hasOwnProperty('validOnlyForThis')) {
          obj['validOnlyForThis'] = _ApiClient["default"].convertToType(data['validOnlyForThis'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CouponRestriction;
}();
/**
 * @member {Boolean} invalidForThis
 */


CouponRestriction.prototype['invalidForThis'] = undefined;
/**
 * @member {String} name
 */

CouponRestriction.prototype['name'] = undefined;
/**
 * @member {Boolean} validForThis
 */

CouponRestriction.prototype['validForThis'] = undefined;
/**
 * @member {Boolean} validOnlyForThis
 */

CouponRestriction.prototype['validOnlyForThis'] = undefined;
var _default = CouponRestriction;
exports["default"] = _default;