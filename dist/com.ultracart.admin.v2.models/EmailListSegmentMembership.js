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
 * The EmailListSegmentMembership model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentMembership
 * @version 4.0.98-RC
 */
var EmailListSegmentMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailListSegmentMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListSegmentMembership
   */
  function EmailListSegmentMembership() {
    _classCallCheck(this, EmailListSegmentMembership);

    EmailListSegmentMembership.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailListSegmentMembership, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailListSegmentMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} The populated <code>EmailListSegmentMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailListSegmentMembership();

        if (data.hasOwnProperty('email_list_uuid')) {
          obj['email_list_uuid'] = _ApiClient["default"].convertToType(data['email_list_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_segment_uuid')) {
          obj['email_segment_uuid'] = _ApiClient["default"].convertToType(data['email_segment_uuid'], 'String');
        }

        if (data.hasOwnProperty('exclude')) {
          obj['exclude'] = _ApiClient["default"].convertToType(data['exclude'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailListSegmentMembership;
}();
/**
 * UUID identifying this email list or null if this is a segment
 * @member {String} email_list_uuid
 */


EmailListSegmentMembership.prototype['email_list_uuid'] = undefined;
/**
 * UUID identifying this email segment or null if this is a list
 * @member {String} email_segment_uuid
 */

EmailListSegmentMembership.prototype['email_segment_uuid'] = undefined;
/**
 * true if customers from this list/segment is excluded from membership
 * @member {Boolean} exclude
 */

EmailListSegmentMembership.prototype['exclude'] = undefined;
/**
 * Name of this email list or segment
 * @member {String} name
 */

EmailListSegmentMembership.prototype['name'] = undefined;
var _default = EmailListSegmentMembership;
exports["default"] = _default;