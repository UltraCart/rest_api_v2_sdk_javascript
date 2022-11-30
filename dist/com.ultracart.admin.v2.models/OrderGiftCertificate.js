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
 * The OrderGiftCertificate model module.
 * @module com.ultracart.admin.v2.models/OrderGiftCertificate
 * @version 4.0.89-RC
 */
var OrderGiftCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderGiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderGiftCertificate
   */
  function OrderGiftCertificate() {
    _classCallCheck(this, OrderGiftCertificate);

    OrderGiftCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderGiftCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderGiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderGiftCertificate} The populated <code>OrderGiftCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderGiftCertificate();

        if (data.hasOwnProperty('gift_certificate_amount')) {
          obj['gift_certificate_amount'] = _Currency["default"].constructFromObject(data['gift_certificate_amount']);
        }

        if (data.hasOwnProperty('gift_certificate_code')) {
          obj['gift_certificate_code'] = _ApiClient["default"].convertToType(data['gift_certificate_code'], 'String');
        }

        if (data.hasOwnProperty('gift_certificate_oid')) {
          obj['gift_certificate_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrderGiftCertificate;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_amount
 */


OrderGiftCertificate.prototype['gift_certificate_amount'] = undefined;
/**
 * Gift certificate code used on the order
 * @member {String} gift_certificate_code
 */

OrderGiftCertificate.prototype['gift_certificate_code'] = undefined;
/**
 * Gift certificate object identifier
 * @member {Number} gift_certificate_oid
 */

OrderGiftCertificate.prototype['gift_certificate_oid'] = undefined;
var _default = OrderGiftCertificate;
exports["default"] = _default;