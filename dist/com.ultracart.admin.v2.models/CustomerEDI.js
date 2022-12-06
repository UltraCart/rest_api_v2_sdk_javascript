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
 * The CustomerEDI model module.
 * @module com.ultracart.admin.v2.models/CustomerEDI
 * @version 4.0.92-RC
 */
var CustomerEDI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerEDI</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEDI
   */
  function CustomerEDI() {
    _classCallCheck(this, CustomerEDI);

    CustomerEDI.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerEDI, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerEDI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEDI} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEDI} The populated <code>CustomerEDI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerEDI();

        if (data.hasOwnProperty('channel_partner_oid')) {
          obj['channel_partner_oid'] = _ApiClient["default"].convertToType(data['channel_partner_oid'], 'Number');
        }

        if (data.hasOwnProperty('distribution_center_number')) {
          obj['distribution_center_number'] = _ApiClient["default"].convertToType(data['distribution_center_number'], 'String');
        }

        if (data.hasOwnProperty('store_number')) {
          obj['store_number'] = _ApiClient["default"].convertToType(data['store_number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerEDI;
}();
/**
 * EDI channel partner this customer profile is associated with
 * @member {Number} channel_partner_oid
 */


CustomerEDI.prototype['channel_partner_oid'] = undefined;
/**
 * The EDI distribution center number associated with this customer profile.
 * @member {String} distribution_center_number
 */

CustomerEDI.prototype['distribution_center_number'] = undefined;
/**
 * The EDI store number associated with this customer profile.
 * @member {String} store_number
 */

CustomerEDI.prototype['store_number'] = undefined;
var _default = CustomerEDI;
exports["default"] = _default;