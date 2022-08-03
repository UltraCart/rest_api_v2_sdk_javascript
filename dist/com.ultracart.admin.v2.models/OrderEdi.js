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
 * The OrderEdi model module.
 * @module com.ultracart.admin.v2.models/OrderEdi
 * @version 4.0.48-RC
 */
var OrderEdi = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderEdi</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderEdi
   */
  function OrderEdi() {
    _classCallCheck(this, OrderEdi);

    OrderEdi.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderEdi, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderEdi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderEdi} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderEdi} The populated <code>OrderEdi</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderEdi();

        if (data.hasOwnProperty('bill_to_edi_code')) {
          obj['bill_to_edi_code'] = _ApiClient["default"].convertToType(data['bill_to_edi_code'], 'String');
        }

        if (data.hasOwnProperty('edi_department')) {
          obj['edi_department'] = _ApiClient["default"].convertToType(data['edi_department'], 'String');
        }

        if (data.hasOwnProperty('edi_internal_vendor_number')) {
          obj['edi_internal_vendor_number'] = _ApiClient["default"].convertToType(data['edi_internal_vendor_number'], 'String');
        }

        if (data.hasOwnProperty('ship_to_edi_code')) {
          obj['ship_to_edi_code'] = _ApiClient["default"].convertToType(data['ship_to_edi_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderEdi;
}();
/**
 * Billing address identification code from the EDI order.  Typically DUNS or DUNS+4
 * @member {String} bill_to_edi_code
 */


OrderEdi.prototype['bill_to_edi_code'] = undefined;
/**
 * Department number associated with this EDI order
 * @member {String} edi_department
 */

OrderEdi.prototype['edi_department'] = undefined;
/**
 * Internal vendor number associated with this EDI order
 * @member {String} edi_internal_vendor_number
 */

OrderEdi.prototype['edi_internal_vendor_number'] = undefined;
/**
 * Shipping address identification code from the EDI order.  Typically DUNS or DUNS+4
 * @member {String} ship_to_edi_code
 */

OrderEdi.prototype['ship_to_edi_code'] = undefined;
var _default = OrderEdi;
exports["default"] = _default;