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
 * The CustomerAffiliate model module.
 * @module com.ultracart.admin.v2.models/CustomerAffiliate
 * @version 4.0.55-RC
 */
var CustomerAffiliate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerAffiliate</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerAffiliate
   */
  function CustomerAffiliate() {
    _classCallCheck(this, CustomerAffiliate);

    CustomerAffiliate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerAffiliate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerAffiliate} The populated <code>CustomerAffiliate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerAffiliate();

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerAffiliate;
}();
/**
 * Affiliate object identifier
 * @member {Number} affiliate_oid
 */


CustomerAffiliate.prototype['affiliate_oid'] = undefined;
/**
 * email
 * @member {String} email
 */

CustomerAffiliate.prototype['email'] = undefined;
/**
 * First name
 * @member {String} first_name
 */

CustomerAffiliate.prototype['first_name'] = undefined;
/**
 * Last name
 * @member {String} last_name
 */

CustomerAffiliate.prototype['last_name'] = undefined;
var _default = CustomerAffiliate;
exports["default"] = _default;