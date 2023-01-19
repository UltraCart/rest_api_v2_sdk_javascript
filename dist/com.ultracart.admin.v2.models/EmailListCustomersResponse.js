"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailListCustomer = _interopRequireDefault(require("./EmailListCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailListCustomersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailListCustomersResponse
 * @version 4.0.119-RC
 */
var EmailListCustomersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailListCustomersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListCustomersResponse
   */
  function EmailListCustomersResponse() {
    _classCallCheck(this, EmailListCustomersResponse);

    EmailListCustomersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailListCustomersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailListCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} The populated <code>EmailListCustomersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailListCustomersResponse();

        if (data.hasOwnProperty('customers')) {
          obj['customers'] = _ApiClient["default"].convertToType(data['customers'], [_EmailListCustomer["default"]]);
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

  return EmailListCustomersResponse;
}();
/**
 * Customers on the page
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailListCustomer>} customers
 */


EmailListCustomersResponse.prototype['customers'] = undefined;
/**
 * Page number (one based offset)
 * @member {Number} page_number
 */

EmailListCustomersResponse.prototype['page_number'] = undefined;
/**
 * Number of records per page
 * @member {Number} page_size
 */

EmailListCustomersResponse.prototype['page_size'] = undefined;
/**
 * Total customers
 * @member {Number} total_customers
 */

EmailListCustomersResponse.prototype['total_customers'] = undefined;
/**
 * Total number of pages
 * @member {Number} total_pages
 */

EmailListCustomersResponse.prototype['total_pages'] = undefined;
var _default = EmailListCustomersResponse;
exports["default"] = _default;