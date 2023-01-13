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
 * The AdjustInternalCertificateRequest model module.
 * @module com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
 * @version 4.0.111-RC
 */
var AdjustInternalCertificateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdjustInternalCertificateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
   */
  function AdjustInternalCertificateRequest() {
    _classCallCheck(this, AdjustInternalCertificateRequest);

    AdjustInternalCertificateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AdjustInternalCertificateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AdjustInternalCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} The populated <code>AdjustInternalCertificateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdjustInternalCertificateRequest();

        if (data.hasOwnProperty('adjustment_amount')) {
          obj['adjustment_amount'] = _ApiClient["default"].convertToType(data['adjustment_amount'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('entry_dts')) {
          obj['entry_dts'] = _ApiClient["default"].convertToType(data['entry_dts'], 'String');
        }

        if (data.hasOwnProperty('expiration_days')) {
          obj['expiration_days'] = _ApiClient["default"].convertToType(data['expiration_days'], 'Number');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('vesting_days')) {
          obj['vesting_days'] = _ApiClient["default"].convertToType(data['vesting_days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AdjustInternalCertificateRequest;
}();
/**
 * The adjustment amount
 * @member {Number} adjustment_amount
 */


AdjustInternalCertificateRequest.prototype['adjustment_amount'] = undefined;
/**
 * Description of this adjustment, 50 characters max
 * @member {String} description
 */

AdjustInternalCertificateRequest.prototype['description'] = undefined;
/**
 * Optional timestamp for the adjustment, defaults to current time
 * @member {String} entry_dts
 */

AdjustInternalCertificateRequest.prototype['entry_dts'] = undefined;
/**
 * Optional expiration days from the entry_dts when these adjustment becomes worthless
 * @member {Number} expiration_days
 */

AdjustInternalCertificateRequest.prototype['expiration_days'] = undefined;
/**
 * Optional order id if this adjustment is related to a particular order
 * @member {String} order_id
 */

AdjustInternalCertificateRequest.prototype['order_id'] = undefined;
/**
 * Optional days required for this adjustment to vest
 * @member {Number} vesting_days
 */

AdjustInternalCertificateRequest.prototype['vesting_days'] = undefined;
var _default = AdjustInternalCertificateRequest;
exports["default"] = _default;