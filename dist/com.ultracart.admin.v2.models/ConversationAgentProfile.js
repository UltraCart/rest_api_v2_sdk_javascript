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
 * The ConversationAgentProfile model module.
 * @module com.ultracart.admin.v2.models/ConversationAgentProfile
 * @version 4.0.192
 */
var ConversationAgentProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationAgentProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationAgentProfile
   */
  function ConversationAgentProfile() {
    _classCallCheck(this, ConversationAgentProfile);

    ConversationAgentProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationAgentProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationAgentProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAgentProfile} The populated <code>ConversationAgentProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationAgentProfile();

        if (data.hasOwnProperty('chat_limit')) {
          obj['chat_limit'] = _ApiClient["default"].convertToType(data['chat_limit'], 'Number');
        }

        if (data.hasOwnProperty('default_language_iso_code')) {
          obj['default_language_iso_code'] = _ApiClient["default"].convertToType(data['default_language_iso_code'], 'String');
        }

        if (data.hasOwnProperty('default_status')) {
          obj['default_status'] = _ApiClient["default"].convertToType(data['default_status'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('profile_image_upload_key')) {
          obj['profile_image_upload_key'] = _ApiClient["default"].convertToType(data['profile_image_upload_key'], 'String');
        }

        if (data.hasOwnProperty('profile_image_url')) {
          obj['profile_image_url'] = _ApiClient["default"].convertToType(data['profile_image_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationAgentProfile;
}();
/**
 * The number of engagement chats that can be pushed on them at any given time.
 * @member {Number} chat_limit
 */


ConversationAgentProfile.prototype['chat_limit'] = undefined;
/**
 * The default language the agent is chatting in
 * @member {String} default_language_iso_code
 */

ConversationAgentProfile.prototype['default_language_iso_code'] = undefined;
/**
 * Default status when the agent loads conversations app.
 * @member {module:com.ultracart.admin.v2.models/ConversationAgentProfile.DefaultStatusEnum} default_status
 */

ConversationAgentProfile.prototype['default_status'] = undefined;
/**
 * An alternate name that the agent wants to use in chat.
 * @member {String} display_name
 */

ConversationAgentProfile.prototype['display_name'] = undefined;
/**
 * Their actual user name for profile settings display as placeholder test
 * @member {String} name
 */

ConversationAgentProfile.prototype['name'] = undefined;
/**
 * An upload key used to update the profile image.
 * @member {String} profile_image_upload_key
 */

ConversationAgentProfile.prototype['profile_image_upload_key'] = undefined;
/**
 * Their current profile image URL
 * @member {String} profile_image_url
 */

ConversationAgentProfile.prototype['profile_image_url'] = undefined;
/**
 * Allowed values for the <code>default_status</code> property.
 * @enum {String}
 * @readonly
 */

ConversationAgentProfile['DefaultStatusEnum'] = {
  /**
   * value: "available"
   * @const
   */
  "available": "available",

  /**
   * value: "busy"
   * @const
   */
  "busy": "busy",

  /**
   * value: "unavailable"
   * @const
   */
  "unavailable": "unavailable"
};
var _default = ConversationAgentProfile;
exports["default"] = _default;