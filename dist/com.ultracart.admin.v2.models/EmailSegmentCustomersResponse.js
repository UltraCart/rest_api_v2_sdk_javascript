"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailSegmentCustomer = _interopRequireDefault(require("./EmailSegmentCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailSegmentCustomersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailSegmentCustomersResponse
 * @version 4.0.187
 */
var EmailSegmentCustomersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSegmentCustomersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse
   */
  function EmailSegmentCustomersResponse() {
    _classCallCheck(this, EmailSegmentCustomersResponse);

    EmailSegmentCustomersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailSegmentCustomersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailSegmentCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse} The populated <code>EmailSegmentCustomersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSegmentCustomersResponse();

        if (data.hasOwnProperty('customers')) {
          obj['customers'] = _ApiClient["default"].convertToType(data['customers'], [_EmailSegmentCustomer["default"]]);
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

  return EmailSegmentCustomersResponse;
}();
/**
 * Customers on the page
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailSegmentCustomer>} customers
 */


EmailSegmentCustomersResponse.prototype['customers'] = undefined;
/**
 * Page number (one based offset)
 * @member {Number} page_number
 */

EmailSegmentCustomersResponse.prototype['page_number'] = undefined;
/**
 * Number of records per page
 * @member {Number} page_size
 */

EmailSegmentCustomersResponse.prototype['page_size'] = undefined;
/**
 * Total customers
 * @member {Number} total_customers
 */

EmailSegmentCustomersResponse.prototype['total_customers'] = undefined;
/**
 * Total number of pages
 * @member {Number} total_pages
 */

EmailSegmentCustomersResponse.prototype['total_pages'] = undefined;
var _default = EmailSegmentCustomersResponse;
exports["default"] = _default;