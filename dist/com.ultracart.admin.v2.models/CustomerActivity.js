"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Activity = _interopRequireDefault(require("./Activity"));

var _ListSegmentMembership = _interopRequireDefault(require("./ListSegmentMembership"));

var _Metric = _interopRequireDefault(require("./Metric"));

var _Property = _interopRequireDefault(require("./Property"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerActivity model module.
 * @module com.ultracart.admin.v2.models/CustomerActivity
 * @version 4.0.183
 */
var CustomerActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerActivity
   */
  function CustomerActivity() {
    _classCallCheck(this, CustomerActivity);

    CustomerActivity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerActivity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerActivity} The populated <code>CustomerActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerActivity();

        if (data.hasOwnProperty('activities')) {
          obj['activities'] = _ApiClient["default"].convertToType(data['activities'], [_Activity["default"]]);
        }

        if (data.hasOwnProperty('global_unsubscribed')) {
          obj['global_unsubscribed'] = _ApiClient["default"].convertToType(data['global_unsubscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('global_unsubscribed_dts')) {
          obj['global_unsubscribed_dts'] = _ApiClient["default"].convertToType(data['global_unsubscribed_dts'], 'String');
        }

        if (data.hasOwnProperty('memberships')) {
          obj['memberships'] = _ApiClient["default"].convertToType(data['memberships'], [_ListSegmentMembership["default"]]);
        }

        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _ApiClient["default"].convertToType(data['metrics'], [_Metric["default"]]);
        }

        if (data.hasOwnProperty('properties_list')) {
          obj['properties_list'] = _ApiClient["default"].convertToType(data['properties_list'], [_Property["default"]]);
        }

        if (data.hasOwnProperty('spam_complaint')) {
          obj['spam_complaint'] = _ApiClient["default"].convertToType(data['spam_complaint'], 'Boolean');
        }

        if (data.hasOwnProperty('spam_complaint_dts')) {
          obj['spam_complaint_dts'] = _ApiClient["default"].convertToType(data['spam_complaint_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerActivity;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Activity>} activities
 */


CustomerActivity.prototype['activities'] = undefined;
/**
 * @member {Boolean} global_unsubscribed
 */

CustomerActivity.prototype['global_unsubscribed'] = undefined;
/**
 * @member {String} global_unsubscribed_dts
 */

CustomerActivity.prototype['global_unsubscribed_dts'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ListSegmentMembership>} memberships
 */

CustomerActivity.prototype['memberships'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Metric>} metrics
 */

CustomerActivity.prototype['metrics'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Property>} properties_list
 */

CustomerActivity.prototype['properties_list'] = undefined;
/**
 * @member {Boolean} spam_complaint
 */

CustomerActivity.prototype['spam_complaint'] = undefined;
/**
 * @member {String} spam_complaint_dts
 */

CustomerActivity.prototype['spam_complaint_dts'] = undefined;
var _default = CustomerActivity;
exports["default"] = _default;