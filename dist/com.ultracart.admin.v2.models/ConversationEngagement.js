"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationEngagementEquation = _interopRequireDefault(require("./ConversationEngagementEquation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationEngagement model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagement
 * @version 4.0.135
 */
var ConversationEngagement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEngagement</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagement
   */
  function ConversationEngagement() {
    _classCallCheck(this, ConversationEngagement);

    ConversationEngagement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEngagement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEngagement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagement} The populated <code>ConversationEngagement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEngagement();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('conversation_engagement_oid')) {
          obj['conversation_engagement_oid'] = _ApiClient["default"].convertToType(data['conversation_engagement_oid'], 'Number');
        }

        if (data.hasOwnProperty('customer_greeting')) {
          obj['customer_greeting'] = _ApiClient["default"].convertToType(data['customer_greeting'], 'String');
        }

        if (data.hasOwnProperty('department_oids')) {
          obj['department_oids'] = _ApiClient["default"].convertToType(data['department_oids'], ['Number']);
        }

        if (data.hasOwnProperty('engagement_name')) {
          obj['engagement_name'] = _ApiClient["default"].convertToType(data['engagement_name'], 'String');
        }

        if (data.hasOwnProperty('equation')) {
          obj['equation'] = _ConversationEngagementEquation["default"].constructFromObject(data['equation']);
        }

        if (data.hasOwnProperty('time_on_page')) {
          obj['time_on_page'] = _ApiClient["default"].convertToType(data['time_on_page'], 'Number');
        }

        if (data.hasOwnProperty('visitor_type')) {
          obj['visitor_type'] = _ApiClient["default"].convertToType(data['visitor_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEngagement;
}();
/**
 * @member {Boolean} active
 */


ConversationEngagement.prototype['active'] = undefined;
/**
 * @member {Number} conversation_engagement_oid
 */

ConversationEngagement.prototype['conversation_engagement_oid'] = undefined;
/**
 * @member {String} customer_greeting
 */

ConversationEngagement.prototype['customer_greeting'] = undefined;
/**
 * @member {Array.<Number>} department_oids
 */

ConversationEngagement.prototype['department_oids'] = undefined;
/**
 * @member {String} engagement_name
 */

ConversationEngagement.prototype['engagement_name'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquation} equation
 */

ConversationEngagement.prototype['equation'] = undefined;
/**
 * @member {Number} time_on_page
 */

ConversationEngagement.prototype['time_on_page'] = undefined;
/**
 * The type of visitor
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagement.VisitorTypeEnum} visitor_type
 */

ConversationEngagement.prototype['visitor_type'] = undefined;
/**
 * Allowed values for the <code>visitor_type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagement['VisitorTypeEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",

  /**
   * value: "first time"
   * @const
   */
  "first time": "first time",

  /**
   * value: "returning"
   * @const
   */
  "returning": "returning"
};
var _default = ConversationEngagement;
exports["default"] = _default;