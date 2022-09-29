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
 * The EmailListSegmentUsedBy model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentUsedBy
 * @version 4.0.67-RC
 */
var EmailListSegmentUsedBy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailListSegmentUsedBy</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy
   */
  function EmailListSegmentUsedBy() {
    _classCallCheck(this, EmailListSegmentUsedBy);

    EmailListSegmentUsedBy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailListSegmentUsedBy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailListSegmentUsedBy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} The populated <code>EmailListSegmentUsedBy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailListSegmentUsedBy();

        if (data.hasOwnProperty('email_campaign_uuid')) {
          obj['email_campaign_uuid'] = _ApiClient["default"].convertToType(data['email_campaign_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_flow_uuid')) {
          obj['email_flow_uuid'] = _ApiClient["default"].convertToType(data['email_flow_uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailListSegmentUsedBy;
}();
/**
 * Email campaign UUID
 * @member {String} email_campaign_uuid
 */


EmailListSegmentUsedBy.prototype['email_campaign_uuid'] = undefined;
/**
 * Email flow UUID
 * @member {String} email_flow_uuid
 */

EmailListSegmentUsedBy.prototype['email_flow_uuid'] = undefined;
/**
 * Name of the list or segment.
 * @member {String} name
 */

EmailListSegmentUsedBy.prototype['name'] = undefined;
var _default = EmailListSegmentUsedBy;
exports["default"] = _default;