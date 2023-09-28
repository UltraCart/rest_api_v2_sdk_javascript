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
 * The EmailSegmentDownloadPrepareResponse model module.
 * @module com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
 * @version 4.0.178
 */
var EmailSegmentDownloadPrepareResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSegmentDownloadPrepareResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse
   */
  function EmailSegmentDownloadPrepareResponse() {
    _classCallCheck(this, EmailSegmentDownloadPrepareResponse);

    EmailSegmentDownloadPrepareResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailSegmentDownloadPrepareResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailSegmentDownloadPrepareResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} The populated <code>EmailSegmentDownloadPrepareResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSegmentDownloadPrepareResponse();

        if (data.hasOwnProperty('email_segment_rebuild_uuid')) {
          obj['email_segment_rebuild_uuid'] = _ApiClient["default"].convertToType(data['email_segment_rebuild_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_segment_uuid')) {
          obj['email_segment_uuid'] = _ApiClient["default"].convertToType(data['email_segment_uuid'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('percentage_complete')) {
          obj['percentage_complete'] = _ApiClient["default"].convertToType(data['percentage_complete'], 'Number');
        }

        if (data.hasOwnProperty('proceed')) {
          obj['proceed'] = _ApiClient["default"].convertToType(data['proceed'], 'Boolean');
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

  return EmailSegmentDownloadPrepareResponse;
}();
/**
 * @member {String} email_segment_rebuild_uuid
 */


EmailSegmentDownloadPrepareResponse.prototype['email_segment_rebuild_uuid'] = undefined;
/**
 * @member {String} email_segment_uuid
 */

EmailSegmentDownloadPrepareResponse.prototype['email_segment_uuid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

EmailSegmentDownloadPrepareResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

EmailSegmentDownloadPrepareResponse.prototype['metadata'] = undefined;
/**
 * @member {Number} percentage_complete
 */

EmailSegmentDownloadPrepareResponse.prototype['percentage_complete'] = undefined;
/**
 * @member {Boolean} proceed
 */

EmailSegmentDownloadPrepareResponse.prototype['proceed'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

EmailSegmentDownloadPrepareResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

EmailSegmentDownloadPrepareResponse.prototype['warning'] = undefined;
var _default = EmailSegmentDownloadPrepareResponse;
exports["default"] = _default;