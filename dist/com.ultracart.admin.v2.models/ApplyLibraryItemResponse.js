"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _LibraryItemAttribute = _interopRequireDefault(require("./LibraryItemAttribute"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ApplyLibraryItemResponse model module.
 * @module com.ultracart.admin.v2.models/ApplyLibraryItemResponse
 * @version 4.0.94-RC
 */
var ApplyLibraryItemResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplyLibraryItemResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse
   */
  function ApplyLibraryItemResponse() {
    _classCallCheck(this, ApplyLibraryItemResponse);

    ApplyLibraryItemResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplyLibraryItemResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplyLibraryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} The populated <code>ApplyLibraryItemResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplyLibraryItemResponse();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_LibraryItemAttribute["default"]]);
        }

        if (data.hasOwnProperty('cjson')) {
          obj['cjson'] = _ApiClient["default"].convertToType(data['cjson'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('email_template_vm_path')) {
          obj['email_template_vm_path'] = _ApiClient["default"].convertToType(data['email_template_vm_path'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return ApplyLibraryItemResponse;
}();
/**
 * Attributes from the library item
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAttribute>} attributes
 */


ApplyLibraryItemResponse.prototype['attributes'] = undefined;
/**
 * Cjson from library item, only populated if this library item was a cjson snippet or marketing email (not transactional)
 * @member {String} cjson
 */

ApplyLibraryItemResponse.prototype['cjson'] = undefined;
/**
 * flow, campaign, cjson, upsell, postcard, transactional_email or email
 * @member {String} content_type
 */

ApplyLibraryItemResponse.prototype['content_type'] = undefined;
/**
 * If a marketing email was applied, this is the path to the template encapsulating the cjson.  This is needed for the UltraCart UI.
 * @member {String} email_template_vm_path
 */

ApplyLibraryItemResponse.prototype['email_template_vm_path'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

ApplyLibraryItemResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ApplyLibraryItemResponse.prototype['metadata'] = undefined;
/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */

ApplyLibraryItemResponse.prototype['storefront_oid'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ApplyLibraryItemResponse.prototype['success'] = undefined;
/**
 * title of library item, usually the name of the flow or campaign, or description of cjson
 * @member {String} title
 */

ApplyLibraryItemResponse.prototype['title'] = undefined;
/**
 * UUID of marketing email or communication flow/campaign if this library item was an email, campaign or flow
 * @member {String} uuid
 */

ApplyLibraryItemResponse.prototype['uuid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ApplyLibraryItemResponse.prototype['warning'] = undefined;
var _default = ApplyLibraryItemResponse;
exports["default"] = _default;