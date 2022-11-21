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
 * The ChannelPartnerImportResponse model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerImportResponse
 * @version 4.0.84-RC
 */
var ChannelPartnerImportResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerImportResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse
   */
  function ChannelPartnerImportResponse() {
    _classCallCheck(this, ChannelPartnerImportResponse);

    ChannelPartnerImportResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerImportResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerImportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse} The populated <code>ChannelPartnerImportResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerImportResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('import_errors')) {
          obj['import_errors'] = _ApiClient["default"].convertToType(data['import_errors'], ['String']);
        }

        if (data.hasOwnProperty('import_warnings')) {
          obj['import_warnings'] = _ApiClient["default"].convertToType(data['import_warnings'], ['String']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
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

  return ChannelPartnerImportResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


ChannelPartnerImportResponse.prototype['error'] = undefined;
/**
 * Array of errors if errors occurred
 * @member {Array.<String>} import_errors
 */

ChannelPartnerImportResponse.prototype['import_errors'] = undefined;
/**
 * Array of warnings if warnings occurred
 * @member {Array.<String>} import_warnings
 */

ChannelPartnerImportResponse.prototype['import_warnings'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ChannelPartnerImportResponse.prototype['metadata'] = undefined;
/**
 * The order id of the newly imported order if successful
 * @member {String} order_id
 */

ChannelPartnerImportResponse.prototype['order_id'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ChannelPartnerImportResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ChannelPartnerImportResponse.prototype['warning'] = undefined;
var _default = ChannelPartnerImportResponse;
exports["default"] = _default;