"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailThirdPartyList = _interopRequireDefault(require("./EmailThirdPartyList"));

var _EmailThirdPartyTag = _interopRequireDefault(require("./EmailThirdPartyTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailThirdPartyProvider model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyProvider
 * @version 4.0.159
 */
var EmailThirdPartyProvider = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailThirdPartyProvider</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyProvider
   */
  function EmailThirdPartyProvider() {
    _classCallCheck(this, EmailThirdPartyProvider);

    EmailThirdPartyProvider.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailThirdPartyProvider, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailThirdPartyProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyProvider} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyProvider} The populated <code>EmailThirdPartyProvider</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailThirdPartyProvider();

        if (data.hasOwnProperty('connect_url')) {
          obj['connect_url'] = _ApiClient["default"].convertToType(data['connect_url'], 'String');
        }

        if (data.hasOwnProperty('list_count')) {
          obj['list_count'] = _ApiClient["default"].convertToType(data['list_count'], 'Number');
        }

        if (data.hasOwnProperty('lists')) {
          obj['lists'] = _ApiClient["default"].convertToType(data['lists'], [_EmailThirdPartyList["default"]]);
        }

        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('supports_add_tags')) {
          obj['supports_add_tags'] = _ApiClient["default"].convertToType(data['supports_add_tags'], 'Boolean');
        }

        if (data.hasOwnProperty('supports_list_subscribe')) {
          obj['supports_list_subscribe'] = _ApiClient["default"].convertToType(data['supports_list_subscribe'], 'Boolean');
        }

        if (data.hasOwnProperty('supports_list_unsubscribe')) {
          obj['supports_list_unsubscribe'] = _ApiClient["default"].convertToType(data['supports_list_unsubscribe'], 'Boolean');
        }

        if (data.hasOwnProperty('supports_remove_tags')) {
          obj['supports_remove_tags'] = _ApiClient["default"].convertToType(data['supports_remove_tags'], 'Boolean');
        }

        if (data.hasOwnProperty('tag_count')) {
          obj['tag_count'] = _ApiClient["default"].convertToType(data['tag_count'], 'Number');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_EmailThirdPartyTag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EmailThirdPartyProvider;
}();
/**
 * URL to the settings screen to connect.  Null if the provider is already connected.
 * @member {String} connect_url
 */


EmailThirdPartyProvider.prototype['connect_url'] = undefined;
/**
 * list_count
 * @member {Number} list_count
 */

EmailThirdPartyProvider.prototype['list_count'] = undefined;
/**
 * lists
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyList>} lists
 */

EmailThirdPartyProvider.prototype['lists'] = undefined;
/**
 * logo_url
 * @member {String} logo_url
 */

EmailThirdPartyProvider.prototype['logo_url'] = undefined;
/**
 * name
 * @member {String} name
 */

EmailThirdPartyProvider.prototype['name'] = undefined;
/**
 * True if this provider can support adding tags
 * @member {Boolean} supports_add_tags
 */

EmailThirdPartyProvider.prototype['supports_add_tags'] = undefined;
/**
 * True if this provider can support list subscribe
 * @member {Boolean} supports_list_subscribe
 */

EmailThirdPartyProvider.prototype['supports_list_subscribe'] = undefined;
/**
 * True if this provider can support list unsubscribe
 * @member {Boolean} supports_list_unsubscribe
 */

EmailThirdPartyProvider.prototype['supports_list_unsubscribe'] = undefined;
/**
 * True if this provider can support remove tags
 * @member {Boolean} supports_remove_tags
 */

EmailThirdPartyProvider.prototype['supports_remove_tags'] = undefined;
/**
 * tag_count
 * @member {Number} tag_count
 */

EmailThirdPartyProvider.prototype['tag_count'] = undefined;
/**
 * tags
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyTag>} tags
 */

EmailThirdPartyProvider.prototype['tags'] = undefined;
var _default = EmailThirdPartyProvider;
exports["default"] = _default;