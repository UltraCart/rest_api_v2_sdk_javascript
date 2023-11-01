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
 * The WorkflowAttachment model module.
 * @module com.ultracart.admin.v2.models/WorkflowAttachment
 * @version 4.0.184
 */
var WorkflowAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowAttachment
   */
  function WorkflowAttachment() {
    _classCallCheck(this, WorkflowAttachment);

    WorkflowAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowAttachment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowAttachment} The populated <code>WorkflowAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowAttachment();

        if (data.hasOwnProperty('download_key')) {
          obj['download_key'] = _ApiClient["default"].convertToType(data['download_key'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('file_uuid')) {
          obj['file_uuid'] = _ApiClient["default"].convertToType(data['file_uuid'], 'String');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('upload_key')) {
          obj['upload_key'] = _ApiClient["default"].convertToType(data['upload_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowAttachment;
}();
/**
 * Temporary download URL
 * @member {String} download_key
 */


WorkflowAttachment.prototype['download_key'] = undefined;
/**
 * File name
 * @member {String} file_name
 */

WorkflowAttachment.prototype['file_name'] = undefined;
/**
 * File UUID
 * @member {String} file_uuid
 */

WorkflowAttachment.prototype['file_uuid'] = undefined;
/**
 * Mime Type
 * @member {String} mime_type
 */

WorkflowAttachment.prototype['mime_type'] = undefined;
/**
 * Temporary upload key
 * @member {String} upload_key
 */

WorkflowAttachment.prototype['upload_key'] = undefined;
var _default = WorkflowAttachment;
exports["default"] = _default;