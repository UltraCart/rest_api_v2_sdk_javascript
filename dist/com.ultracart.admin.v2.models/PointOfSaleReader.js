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
 * The PointOfSaleReader model module.
 * @module com.ultracart.admin.v2.models/PointOfSaleReader
 * @version 4.0.105-RC
 */
var PointOfSaleReader = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointOfSaleReader</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleReader
   */
  function PointOfSaleReader() {
    _classCallCheck(this, PointOfSaleReader);

    PointOfSaleReader.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointOfSaleReader, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PointOfSaleReader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PointOfSaleReader} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PointOfSaleReader} The populated <code>PointOfSaleReader</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointOfSaleReader();

        if (data.hasOwnProperty('device_type')) {
          obj['device_type'] = _ApiClient["default"].convertToType(data['device_type'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('payment_provider')) {
          obj['payment_provider'] = _ApiClient["default"].convertToType(data['payment_provider'], 'String');
        }

        if (data.hasOwnProperty('pos_reader_id')) {
          obj['pos_reader_id'] = _ApiClient["default"].convertToType(data['pos_reader_id'], 'Number');
        }

        if (data.hasOwnProperty('pos_register_oid')) {
          obj['pos_register_oid'] = _ApiClient["default"].convertToType(data['pos_register_oid'], 'Number');
        }

        if (data.hasOwnProperty('serial_number')) {
          obj['serial_number'] = _ApiClient["default"].convertToType(data['serial_number'], 'String');
        }

        if (data.hasOwnProperty('stripe_account_id')) {
          obj['stripe_account_id'] = _ApiClient["default"].convertToType(data['stripe_account_id'], 'String');
        }

        if (data.hasOwnProperty('stripe_reader_id')) {
          obj['stripe_reader_id'] = _ApiClient["default"].convertToType(data['stripe_reader_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PointOfSaleReader;
}();
/**
 * The device type of the reader.
 * @member {String} device_type
 */


PointOfSaleReader.prototype['device_type'] = undefined;
/**
 * The label of the reader.
 * @member {String} label
 */

PointOfSaleReader.prototype['label'] = undefined;
/**
 * The merchant id that owns this point of sale reader.
 * @member {String} merchant_id
 */

PointOfSaleReader.prototype['merchant_id'] = undefined;
/**
 * The payment provider for the card reader.
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader.PaymentProviderEnum} payment_provider
 */

PointOfSaleReader.prototype['payment_provider'] = undefined;
/**
 * Object identifier of the point of sale reader.
 * @member {Number} pos_reader_id
 */

PointOfSaleReader.prototype['pos_reader_id'] = undefined;
/**
 * Object identifier of the point of sale register this reader is assigned to.
 * @member {Number} pos_register_oid
 */

PointOfSaleReader.prototype['pos_register_oid'] = undefined;
/**
 * The serial number of the reader.
 * @member {String} serial_number
 */

PointOfSaleReader.prototype['serial_number'] = undefined;
/**
 * If the payment provider is Stripe, this is the Stripe account id
 * @member {String} stripe_account_id
 */

PointOfSaleReader.prototype['stripe_account_id'] = undefined;
/**
 * If the payment provide is Stripe, this is the Stripe terminal reader id
 * @member {String} stripe_reader_id
 */

PointOfSaleReader.prototype['stripe_reader_id'] = undefined;
/**
 * Allowed values for the <code>payment_provider</code> property.
 * @enum {String}
 * @readonly
 */

PointOfSaleReader['PaymentProviderEnum'] = {
  /**
   * value: "stripe"
   * @const
   */
  "stripe": "stripe"
};
var _default = PointOfSaleReader;
exports["default"] = _default;