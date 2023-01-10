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
 * The GiftCertificateCreateRequest model module.
 * @module com.ultracart.admin.v2.models/GiftCertificateCreateRequest
 * @version 4.0.109-RC
 */
var GiftCertificateCreateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GiftCertificateCreateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest
   */
  function GiftCertificateCreateRequest() {
    _classCallCheck(this, GiftCertificateCreateRequest);

    GiftCertificateCreateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GiftCertificateCreateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GiftCertificateCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} The populated <code>GiftCertificateCreateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GiftCertificateCreateRequest();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('initial_ledger_description')) {
          obj['initial_ledger_description'] = _ApiClient["default"].convertToType(data['initial_ledger_description'], 'String');
        }

        if (data.hasOwnProperty('merchant_note')) {
          obj['merchant_note'] = _ApiClient["default"].convertToType(data['merchant_note'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GiftCertificateCreateRequest;
}();
/**
 * Initial amount of this gift certificate.
 * @member {Number} amount
 */


GiftCertificateCreateRequest.prototype['amount'] = undefined;
/**
 * The email address (customer/owner) associated with this gift certificate.
 * @member {String} email
 */

GiftCertificateCreateRequest.prototype['email'] = undefined;
/**
 * Expiration date time.
 * @member {String} expiration_dts
 */

GiftCertificateCreateRequest.prototype['expiration_dts'] = undefined;
/**
 * A brief description of how and/or why this gift certificate was created.
 * @member {String} initial_ledger_description
 */

GiftCertificateCreateRequest.prototype['initial_ledger_description'] = undefined;
/**
 * Any internal details you wish to record about this gift certificate.
 * @member {String} merchant_note
 */

GiftCertificateCreateRequest.prototype['merchant_note'] = undefined;
var _default = GiftCertificateCreateRequest;
exports["default"] = _default;