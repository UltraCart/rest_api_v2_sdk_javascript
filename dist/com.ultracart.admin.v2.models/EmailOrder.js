"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailOrder model module.
 * @module com.ultracart.admin.v2.models/EmailOrder
 * @version 4.0.64-RC
 */
var EmailOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailOrder
   */
  function EmailOrder() {
    _classCallCheck(this, EmailOrder);

    EmailOrder.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailOrder, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailOrder} The populated <code>EmailOrder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailOrder();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('order_dts')) {
          obj['order_dts'] = _ApiClient["default"].convertToType(data['order_dts'], 'String');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _Currency["default"].constructFromObject(data['total']);
        }
      }

      return obj;
    }
  }]);

  return EmailOrder;
}();
/**
 * email
 * @member {String} email
 */


EmailOrder.prototype['email'] = undefined;
/**
 * order_dts
 * @member {String} order_dts
 */

EmailOrder.prototype['order_dts'] = undefined;
/**
 * order_id
 * @member {String} order_id
 */

EmailOrder.prototype['order_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */

EmailOrder.prototype['total'] = undefined;
var _default = EmailOrder;
exports["default"] = _default;