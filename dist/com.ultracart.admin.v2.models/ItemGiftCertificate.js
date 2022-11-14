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
 * The ItemGiftCertificate model module.
 * @module com.ultracart.admin.v2.models/ItemGiftCertificate
 * @version 4.0.79-RC
 */
var ItemGiftCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemGiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemGiftCertificate
   */
  function ItemGiftCertificate() {
    _classCallCheck(this, ItemGiftCertificate);

    ItemGiftCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemGiftCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemGiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemGiftCertificate} The populated <code>ItemGiftCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemGiftCertificate();

        if (data.hasOwnProperty('gift_certificate')) {
          obj['gift_certificate'] = _ApiClient["default"].convertToType(data['gift_certificate'], 'Boolean');
        }

        if (data.hasOwnProperty('gift_certificate_expiration_days')) {
          obj['gift_certificate_expiration_days'] = _ApiClient["default"].convertToType(data['gift_certificate_expiration_days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemGiftCertificate;
}();
/**
 * True if the purchase of this item generates a gift certificate
 * @member {Boolean} gift_certificate
 */


ItemGiftCertificate.prototype['gift_certificate'] = undefined;
/**
 * The number of days that the gift certificate is good for (optional)
 * @member {Number} gift_certificate_expiration_days
 */

ItemGiftCertificate.prototype['gift_certificate_expiration_days'] = undefined;
var _default = ItemGiftCertificate;
exports["default"] = _default;