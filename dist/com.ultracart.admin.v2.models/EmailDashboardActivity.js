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
 * The EmailDashboardActivity model module.
 * @module com.ultracart.admin.v2.models/EmailDashboardActivity
 * @version 4.0.44-RC
 */
var EmailDashboardActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailDashboardActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailDashboardActivity
   */
  function EmailDashboardActivity() {
    _classCallCheck(this, EmailDashboardActivity);

    EmailDashboardActivity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailDashboardActivity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailDashboardActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailDashboardActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailDashboardActivity} The populated <code>EmailDashboardActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailDashboardActivity();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('activity_dts')) {
          obj['activity_dts'] = _ApiClient["default"].convertToType(data['activity_dts'], 'String');
        }

        if (data.hasOwnProperty('destination_name')) {
          obj['destination_name'] = _ApiClient["default"].convertToType(data['destination_name'], 'String');
        }

        if (data.hasOwnProperty('destination_uuid')) {
          obj['destination_uuid'] = _ApiClient["default"].convertToType(data['destination_uuid'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('is_list')) {
          obj['is_list'] = _ApiClient["default"].convertToType(data['is_list'], 'Boolean');
        }

        if (data.hasOwnProperty('is_segment')) {
          obj['is_segment'] = _ApiClient["default"].convertToType(data['is_segment'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailDashboardActivity;
}();
/**
 * Type of action such as add, remove, subscribe, unsubscribe
 * @member {String} action
 */


EmailDashboardActivity.prototype['action'] = undefined;
/**
 * Date/time of the activity
 * @member {String} activity_dts
 */

EmailDashboardActivity.prototype['activity_dts'] = undefined;
/**
 * List or segment name
 * @member {String} destination_name
 */

EmailDashboardActivity.prototype['destination_name'] = undefined;
/**
 * List or segment uuid
 * @member {String} destination_uuid
 */

EmailDashboardActivity.prototype['destination_uuid'] = undefined;
/**
 * Email address
 * @member {String} email
 */

EmailDashboardActivity.prototype['email'] = undefined;
/**
 * true if activity is related to list
 * @member {Boolean} is_list
 */

EmailDashboardActivity.prototype['is_list'] = undefined;
/**
 * true if activity is related to segment
 * @member {Boolean} is_segment
 */

EmailDashboardActivity.prototype['is_segment'] = undefined;
var _default = EmailDashboardActivity;
exports["default"] = _default;