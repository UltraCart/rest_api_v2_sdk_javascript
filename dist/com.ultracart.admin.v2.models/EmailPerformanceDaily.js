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
 * The EmailPerformanceDaily model module.
 * @module com.ultracart.admin.v2.models/EmailPerformanceDaily
 * @version 4.0.112-RC
 */
var EmailPerformanceDaily = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailPerformanceDaily</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformanceDaily
   */
  function EmailPerformanceDaily() {
    _classCallCheck(this, EmailPerformanceDaily);

    EmailPerformanceDaily.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailPerformanceDaily, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailPerformanceDaily</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} The populated <code>EmailPerformanceDaily</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailPerformanceDaily();

        if (data.hasOwnProperty('bounce_count')) {
          obj['bounce_count'] = _ApiClient["default"].convertToType(data['bounce_count'], 'Number');
        }

        if (data.hasOwnProperty('delivered_count')) {
          obj['delivered_count'] = _ApiClient["default"].convertToType(data['delivered_count'], 'Number');
        }

        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }

        if (data.hasOwnProperty('sequence_send_count')) {
          obj['sequence_send_count'] = _ApiClient["default"].convertToType(data['sequence_send_count'], 'Number');
        }

        if (data.hasOwnProperty('spam_count')) {
          obj['spam_count'] = _ApiClient["default"].convertToType(data['spam_count'], 'Number');
        }

        if (data.hasOwnProperty('stat_dts')) {
          obj['stat_dts'] = _ApiClient["default"].convertToType(data['stat_dts'], 'String');
        }

        if (data.hasOwnProperty('transactional_send_count')) {
          obj['transactional_send_count'] = _ApiClient["default"].convertToType(data['transactional_send_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailPerformanceDaily;
}();
/**
 * Bounce count
 * @member {Number} bounce_count
 */


EmailPerformanceDaily.prototype['bounce_count'] = undefined;
/**
 * Delivered count
 * @member {Number} delivered_count
 */

EmailPerformanceDaily.prototype['delivered_count'] = undefined;
/**
 * Revenue
 * @member {Number} revenue
 */

EmailPerformanceDaily.prototype['revenue'] = undefined;
/**
 * Total sequence (campaign/flow) emails sent
 * @member {Number} sequence_send_count
 */

EmailPerformanceDaily.prototype['sequence_send_count'] = undefined;
/**
 * Spam complaints
 * @member {Number} spam_count
 */

EmailPerformanceDaily.prototype['spam_count'] = undefined;
/**
 * The date that these statistcs are for
 * @member {String} stat_dts
 */

EmailPerformanceDaily.prototype['stat_dts'] = undefined;
/**
 * Total transactions emails sent
 * @member {Number} transactional_send_count
 */

EmailPerformanceDaily.prototype['transactional_send_count'] = undefined;
var _default = EmailPerformanceDaily;
exports["default"] = _default;