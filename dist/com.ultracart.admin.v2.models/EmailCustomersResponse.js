"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailCustomer = _interopRequireDefault(require("./EmailCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailCustomersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCustomersResponse
 * @version 4.0.23-RC
 */
var EmailCustomersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCustomersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCustomersResponse
   */
  function EmailCustomersResponse() {
    _classCallCheck(this, EmailCustomersResponse);

    EmailCustomersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCustomersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCustomersResponse} The populated <code>EmailCustomersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCustomersResponse();

        if (data.hasOwnProperty('customers')) {
          obj['customers'] = _ApiClient["default"].convertToType(data['customers'], [_EmailCustomer["default"]]);
        }

        if (data.hasOwnProperty('page_number')) {
          obj['page_number'] = _ApiClient["default"].convertToType(data['page_number'], 'Number');
        }

        if (data.hasOwnProperty('page_size')) {
          obj['page_size'] = _ApiClient["default"].convertToType(data['page_size'], 'Number');
        }

        if (data.hasOwnProperty('total_customers')) {
          obj['total_customers'] = _ApiClient["default"].convertToType(data['total_customers'], 'Number');
        }

        if (data.hasOwnProperty('total_pages')) {
          obj['total_pages'] = _ApiClient["default"].convertToType(data['total_pages'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailCustomersResponse;
}();
/**
 * Customers on the page
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCustomer>} customers
 */


EmailCustomersResponse.prototype['customers'] = undefined;
/**
 * Page number (one based offset)
 * @member {Number} page_number
 */

EmailCustomersResponse.prototype['page_number'] = undefined;
/**
 * Number of records per page
 * @member {Number} page_size
 */

EmailCustomersResponse.prototype['page_size'] = undefined;
/**
 * Total customers
 * @member {Number} total_customers
 */

EmailCustomersResponse.prototype['total_customers'] = undefined;
/**
 * Total number of pages
 * @member {Number} total_pages
 */

EmailCustomersResponse.prototype['total_pages'] = undefined;
var _default = EmailCustomersResponse;
exports["default"] = _default;