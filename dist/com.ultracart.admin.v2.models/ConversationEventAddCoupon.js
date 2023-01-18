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
 * The ConversationEventAddCoupon model module.
 * @module com.ultracart.admin.v2.models/ConversationEventAddCoupon
 * @version 4.0.116-RC
 */
var ConversationEventAddCoupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventAddCoupon</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventAddCoupon
   */
  function ConversationEventAddCoupon() {
    _classCallCheck(this, ConversationEventAddCoupon);

    ConversationEventAddCoupon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventAddCoupon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventAddCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventAddCoupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventAddCoupon} The populated <code>ConversationEventAddCoupon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventAddCoupon();

        if (data.hasOwnProperty('agent_arn')) {
          obj['agent_arn'] = _ApiClient["default"].convertToType(data['agent_arn'], 'String');
        }

        if (data.hasOwnProperty('agent_name')) {
          obj['agent_name'] = _ApiClient["default"].convertToType(data['agent_name'], 'String');
        }

        if (data.hasOwnProperty('coupon_code')) {
          obj['coupon_code'] = _ApiClient["default"].convertToType(data['coupon_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventAddCoupon;
}();
/**
 * @member {String} agent_arn
 */


ConversationEventAddCoupon.prototype['agent_arn'] = undefined;
/**
 * @member {String} agent_name
 */

ConversationEventAddCoupon.prototype['agent_name'] = undefined;
/**
 * @member {String} coupon_code
 */

ConversationEventAddCoupon.prototype['coupon_code'] = undefined;
var _default = ConversationEventAddCoupon;
exports["default"] = _default;