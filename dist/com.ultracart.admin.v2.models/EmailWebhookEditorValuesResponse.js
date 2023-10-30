"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailWebhookEditorValuesResponse model module.
 * @module com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse
 * @version 4.0.183
 */
var EmailWebhookEditorValuesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailWebhookEditorValuesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse
   */
  function EmailWebhookEditorValuesResponse() {
    _classCallCheck(this, EmailWebhookEditorValuesResponse);

    EmailWebhookEditorValuesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailWebhookEditorValuesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailWebhookEditorValuesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse} The populated <code>EmailWebhookEditorValuesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailWebhookEditorValuesResponse();

        if (data.hasOwnProperty('available_expansions')) {
          obj['available_expansions'] = _ApiClient["default"].convertToType(data['available_expansions'], ['String']);
        }

        if (data.hasOwnProperty('available_tokens')) {
          obj['available_tokens'] = _ApiClient["default"].convertToType(data['available_tokens'], ['String']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('rest_object_type')) {
          obj['rest_object_type'] = _ApiClient["default"].convertToType(data['rest_object_type'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return EmailWebhookEditorValuesResponse;
}();
/**
 * @member {Array.<String>} available_expansions
 */


EmailWebhookEditorValuesResponse.prototype['available_expansions'] = undefined;
/**
 * @member {Array.<String>} available_tokens
 */

EmailWebhookEditorValuesResponse.prototype['available_tokens'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

EmailWebhookEditorValuesResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

EmailWebhookEditorValuesResponse.prototype['metadata'] = undefined;
/**
 * @member {String} rest_object_type
 */

EmailWebhookEditorValuesResponse.prototype['rest_object_type'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

EmailWebhookEditorValuesResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

EmailWebhookEditorValuesResponse.prototype['warning'] = undefined;
var _default = EmailWebhookEditorValuesResponse;
exports["default"] = _default;