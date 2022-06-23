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
 * The CustomerStoreCreditAddRequest model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
 * @version 4.0.6-RC
 */
var CustomerStoreCreditAddRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerStoreCreditAddRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
   */
  function CustomerStoreCreditAddRequest() {
    _classCallCheck(this, CustomerStoreCreditAddRequest);

    CustomerStoreCreditAddRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerStoreCreditAddRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerStoreCreditAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} The populated <code>CustomerStoreCreditAddRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerStoreCreditAddRequest();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('expiration_days')) {
          obj['expiration_days'] = _ApiClient["default"].convertToType(data['expiration_days'], 'Number');
        }

        if (data.hasOwnProperty('vesting_days')) {
          obj['vesting_days'] = _ApiClient["default"].convertToType(data['vesting_days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerStoreCreditAddRequest;
}();
/**
 * Amount of store credit
 * @member {Number} amount
 */


CustomerStoreCreditAddRequest.prototype['amount'] = undefined;
/**
 * Description or reason for the store credit
 * @member {String} description
 */

CustomerStoreCreditAddRequest.prototype['description'] = undefined;
/**
 * Optional days for store credit to expire or zero for no expiration
 * @member {Number} expiration_days
 */

CustomerStoreCreditAddRequest.prototype['expiration_days'] = undefined;
/**
 * Optional days for store credit to vesting or zero for immediately available
 * @member {Number} vesting_days
 */

CustomerStoreCreditAddRequest.prototype['vesting_days'] = undefined;
var _default = CustomerStoreCreditAddRequest;
exports["default"] = _default;