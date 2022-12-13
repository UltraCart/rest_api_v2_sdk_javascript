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
 * The GiftCertificateQuery model module.
 * @module com.ultracart.admin.v2.models/GiftCertificateQuery
 * @version 4.0.96-RC
 */
var GiftCertificateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GiftCertificateQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificateQuery
   */
  function GiftCertificateQuery() {
    _classCallCheck(this, GiftCertificateQuery);

    GiftCertificateQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GiftCertificateQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GiftCertificateQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificateQuery} The populated <code>GiftCertificateQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GiftCertificateQuery();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts_end')) {
          obj['expiration_dts_end'] = _ApiClient["default"].convertToType(data['expiration_dts_end'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts_start')) {
          obj['expiration_dts_start'] = _ApiClient["default"].convertToType(data['expiration_dts_start'], 'String');
        }

        if (data.hasOwnProperty('original_balance_end')) {
          obj['original_balance_end'] = _ApiClient["default"].convertToType(data['original_balance_end'], 'Number');
        }

        if (data.hasOwnProperty('original_balance_start')) {
          obj['original_balance_start'] = _ApiClient["default"].convertToType(data['original_balance_start'], 'Number');
        }

        if (data.hasOwnProperty('reference_order_id')) {
          obj['reference_order_id'] = _ApiClient["default"].convertToType(data['reference_order_id'], 'String');
        }

        if (data.hasOwnProperty('remaining_balance_end')) {
          obj['remaining_balance_end'] = _ApiClient["default"].convertToType(data['remaining_balance_end'], 'Number');
        }

        if (data.hasOwnProperty('remaining_balance_start')) {
          obj['remaining_balance_start'] = _ApiClient["default"].convertToType(data['remaining_balance_start'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GiftCertificateQuery;
}();
/**
 * Gift certificate code
 * @member {String} code
 */


GiftCertificateQuery.prototype['code'] = undefined;
/**
 * Email address of this gift certificate
 * @member {String} email
 */

GiftCertificateQuery.prototype['email'] = undefined;
/**
 * Expiration date end
 * @member {String} expiration_dts_end
 */

GiftCertificateQuery.prototype['expiration_dts_end'] = undefined;
/**
 * Expiration date start
 * @member {String} expiration_dts_start
 */

GiftCertificateQuery.prototype['expiration_dts_start'] = undefined;
/**
 * Original balance end
 * @member {Number} original_balance_end
 */

GiftCertificateQuery.prototype['original_balance_end'] = undefined;
/**
 * Original balance start
 * @member {Number} original_balance_start
 */

GiftCertificateQuery.prototype['original_balance_start'] = undefined;
/**
 * Gift certificate reference order id
 * @member {String} reference_order_id
 */

GiftCertificateQuery.prototype['reference_order_id'] = undefined;
/**
 * Remaining balance end
 * @member {Number} remaining_balance_end
 */

GiftCertificateQuery.prototype['remaining_balance_end'] = undefined;
/**
 * Remaining balance start
 * @member {Number} remaining_balance_start
 */

GiftCertificateQuery.prototype['remaining_balance_start'] = undefined;
var _default = GiftCertificateQuery;
exports["default"] = _default;