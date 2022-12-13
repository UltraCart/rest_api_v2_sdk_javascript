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
 * The EmailPerformanceCustomerHistogramPeriod model module.
 * @module com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
 * @version 4.0.96-RC
 */
var EmailPerformanceCustomerHistogramPeriod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailPerformanceCustomerHistogramPeriod</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
   */
  function EmailPerformanceCustomerHistogramPeriod() {
    _classCallCheck(this, EmailPerformanceCustomerHistogramPeriod);

    EmailPerformanceCustomerHistogramPeriod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailPerformanceCustomerHistogramPeriod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailPerformanceCustomerHistogramPeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} The populated <code>EmailPerformanceCustomerHistogramPeriod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailPerformanceCustomerHistogramPeriod();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Number');
        }

        if (data.hasOwnProperty('inactive')) {
          obj['inactive'] = _ApiClient["default"].convertToType(data['inactive'], 'Number');
        }

        if (data.hasOwnProperty('month')) {
          obj['month'] = _ApiClient["default"].convertToType(data['month'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailPerformanceCustomerHistogramPeriod;
}();
/**
 * Active customers last active in this period
 * @member {Number} active
 */


EmailPerformanceCustomerHistogramPeriod.prototype['active'] = undefined;
/**
 * Inactive customers last active in this period
 * @member {Number} inactive
 */

EmailPerformanceCustomerHistogramPeriod.prototype['inactive'] = undefined;
/**
 * Month (1 = January)
 * @member {Number} month
 */

EmailPerformanceCustomerHistogramPeriod.prototype['month'] = undefined;
/**
 * Total customers last active in this period
 * @member {Number} total
 */

EmailPerformanceCustomerHistogramPeriod.prototype['total'] = undefined;
/**
 * Year (four digits)
 * @member {Number} year
 */

EmailPerformanceCustomerHistogramPeriod.prototype['year'] = undefined;
var _default = EmailPerformanceCustomerHistogramPeriod;
exports["default"] = _default;