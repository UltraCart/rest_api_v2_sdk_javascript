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
 * The Notification model module.
 * @module com.ultracart.admin.v2.models/Notification
 * @version 4.0.153
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:com.ultracart.admin.v2.models/Notification
   */
  function Notification() {
    _classCallCheck(this, Notification);

    Notification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Notification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('can_filter_by_distribution_centers')) {
          obj['can_filter_by_distribution_centers'] = _ApiClient["default"].convertToType(data['can_filter_by_distribution_centers'], 'Boolean');
        }

        if (data.hasOwnProperty('can_include_affiliate')) {
          obj['can_include_affiliate'] = _ApiClient["default"].convertToType(data['can_include_affiliate'], 'Boolean');
        }

        if (data.hasOwnProperty('can_include_order')) {
          obj['can_include_order'] = _ApiClient["default"].convertToType(data['can_include_order'], 'Boolean');
        }

        if (data.hasOwnProperty('can_include_order_plain_text')) {
          obj['can_include_order_plain_text'] = _ApiClient["default"].convertToType(data['can_include_order_plain_text'], 'Boolean');
        }

        if (data.hasOwnProperty('distribution_center_filters')) {
          obj['distribution_center_filters'] = _ApiClient["default"].convertToType(data['distribution_center_filters'], ['String']);
        }

        if (data.hasOwnProperty('include_affiliate')) {
          obj['include_affiliate'] = _ApiClient["default"].convertToType(data['include_affiliate'], 'Boolean');
        }

        if (data.hasOwnProperty('include_order')) {
          obj['include_order'] = _ApiClient["default"].convertToType(data['include_order'], 'Boolean');
        }

        if (data.hasOwnProperty('include_order_plain_text')) {
          obj['include_order_plain_text'] = _ApiClient["default"].convertToType(data['include_order_plain_text'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notification_group')) {
          obj['notification_group'] = _ApiClient["default"].convertToType(data['notification_group'], 'String');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * True if this notification can be filtered to only send for one or more distribution centers.
 * @member {Boolean} can_filter_by_distribution_centers
 */


Notification.prototype['can_filter_by_distribution_centers'] = undefined;
/**
 * True if this notification can include an affiliate information.
 * @member {Boolean} can_include_affiliate
 */

Notification.prototype['can_include_affiliate'] = undefined;
/**
 * True if this notification can include an order attachment.
 * @member {Boolean} can_include_order
 */

Notification.prototype['can_include_order'] = undefined;
/**
 * True if this notification can include a plain text rendering of an order directly within an email.  Some desire this over an attachment
 * @member {Boolean} can_include_order_plain_text
 */

Notification.prototype['can_include_order_plain_text'] = undefined;
/**
 * If this notification supports it, this list of distribution center CODES will filter the notification to just those distribution centers.
 * @member {Array.<String>} distribution_center_filters
 */

Notification.prototype['distribution_center_filters'] = undefined;
/**
 * If true, and this notification supports it, affiliate information will be attached to all notifications of this type
 * @member {Boolean} include_affiliate
 */

Notification.prototype['include_affiliate'] = undefined;
/**
 * If true, and this notification supports it, the order will be attached to all notifications of this type
 * @member {Boolean} include_order
 */

Notification.prototype['include_order'] = undefined;
/**
 * If true, and this notification supports it, a plain text order will be directly inserted into all notifications of this type
 * @member {Boolean} include_order_plain_text
 */

Notification.prototype['include_order_plain_text'] = undefined;
/**
 * The name of this notification.
 * @member {String} name
 */

Notification.prototype['name'] = undefined;
/**
 * A group for this notification.  This name is only used for visual grouping within interfaces.
 * @member {String} notification_group
 */

Notification.prototype['notification_group'] = undefined;
/**
 * True if this user wishes to receive this email notification.
 * @member {Boolean} selected
 */

Notification.prototype['selected'] = undefined;
var _default = Notification;
exports["default"] = _default;