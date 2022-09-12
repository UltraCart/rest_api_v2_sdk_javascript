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
 * The OrderPaymentInsurance model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentInsurance
 * @version 4.0.61-RC
 */
var OrderPaymentInsurance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentInsurance</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentInsurance
   */
  function OrderPaymentInsurance() {
    _classCallCheck(this, OrderPaymentInsurance);

    OrderPaymentInsurance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentInsurance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentInsurance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} The populated <code>OrderPaymentInsurance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentInsurance();

        if (data.hasOwnProperty('application_id')) {
          obj['application_id'] = _ApiClient["default"].convertToType(data['application_id'], 'String');
        }

        if (data.hasOwnProperty('claim_id')) {
          obj['claim_id'] = _ApiClient["default"].convertToType(data['claim_id'], 'String');
        }

        if (data.hasOwnProperty('insurance_type')) {
          obj['insurance_type'] = _ApiClient["default"].convertToType(data['insurance_type'], 'String');
        }

        if (data.hasOwnProperty('refund_claim_id')) {
          obj['refund_claim_id'] = _ApiClient["default"].convertToType(data['refund_claim_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentInsurance;
}();
/**
 * application id
 * @member {String} application_id
 */


OrderPaymentInsurance.prototype['application_id'] = undefined;
/**
 * claim id
 * @member {String} claim_id
 */

OrderPaymentInsurance.prototype['claim_id'] = undefined;
/**
 * insurance type
 * @member {String} insurance_type
 */

OrderPaymentInsurance.prototype['insurance_type'] = undefined;
/**
 * refund claim id
 * @member {String} refund_claim_id
 */

OrderPaymentInsurance.prototype['refund_claim_id'] = undefined;
var _default = OrderPaymentInsurance;
exports["default"] = _default;