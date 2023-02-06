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
 * The CustomerMergeRequest model module.
 * @module com.ultracart.admin.v2.models/CustomerMergeRequest
 * @version 4.0.129
 */
var CustomerMergeRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerMergeRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerMergeRequest
   */
  function CustomerMergeRequest() {
    _classCallCheck(this, CustomerMergeRequest);

    CustomerMergeRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerMergeRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerMergeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerMergeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerMergeRequest} The populated <code>CustomerMergeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerMergeRequest();

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerMergeRequest;
}();
/**
 * Customer profile oid to merge
 * @member {Number} customer_profile_oid
 */


CustomerMergeRequest.prototype['customer_profile_oid'] = undefined;
/**
 * Email of the customer profile to merge
 * @member {String} email
 */

CustomerMergeRequest.prototype['email'] = undefined;
var _default = CustomerMergeRequest;
exports["default"] = _default;