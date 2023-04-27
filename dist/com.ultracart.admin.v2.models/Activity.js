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
 * The Activity model module.
 * @module com.ultracart.admin.v2.models/Activity
 * @version 4.0.151
 */
var Activity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Activity</code>.
   * @alias module:com.ultracart.admin.v2.models/Activity
   */
  function Activity() {
    _classCallCheck(this, Activity);

    Activity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Activity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Activity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Activity} The populated <code>Activity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Activity();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'String');
        }

        if (data.hasOwnProperty('metric')) {
          obj['metric'] = _ApiClient["default"].convertToType(data['metric'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('ts')) {
          obj['ts'] = _ApiClient["default"].convertToType(data['ts'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Activity;
}();
/**
 * @member {String} action
 */


Activity.prototype['action'] = undefined;
/**
 * @member {String} channel
 */

Activity.prototype['channel'] = undefined;
/**
 * @member {String} metric
 */

Activity.prototype['metric'] = undefined;
/**
 * @member {Number} storefront_oid
 */

Activity.prototype['storefront_oid'] = undefined;
/**
 * @member {String} subject
 */

Activity.prototype['subject'] = undefined;
/**
 * @member {Number} ts
 */

Activity.prototype['ts'] = undefined;
/**
 * @member {String} type
 */

Activity.prototype['type'] = undefined;
/**
 * @member {String} uuid
 */

Activity.prototype['uuid'] = undefined;
var _default = Activity;
exports["default"] = _default;