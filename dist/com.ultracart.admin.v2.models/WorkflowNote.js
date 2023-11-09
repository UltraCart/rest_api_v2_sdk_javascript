"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowAttachment = _interopRequireDefault(require("./WorkflowAttachment"));

var _WorkflowUser = _interopRequireDefault(require("./WorkflowUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WorkflowNote model module.
 * @module com.ultracart.admin.v2.models/WorkflowNote
 * @version 4.0.186
 */
var WorkflowNote = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowNote</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowNote
   */
  function WorkflowNote() {
    _classCallCheck(this, WorkflowNote);

    WorkflowNote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowNote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowNote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowNote} The populated <code>WorkflowNote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowNote();

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], [_WorkflowAttachment["default"]]);
        }

        if (data.hasOwnProperty('edit_dts')) {
          obj['edit_dts'] = _ApiClient["default"].convertToType(data['edit_dts'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('note_dts')) {
          obj['note_dts'] = _ApiClient["default"].convertToType(data['note_dts'], 'String');
        }

        if (data.hasOwnProperty('original_note')) {
          obj['original_note'] = _ApiClient["default"].convertToType(data['original_note'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _WorkflowUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowNote;
}();
/**
 * Attachments to the Workflow Task
 * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowAttachment>} attachments
 */


WorkflowNote.prototype['attachments'] = undefined;
/**
 * Date/time that the note was edited
 * @member {String} edit_dts
 */

WorkflowNote.prototype['edit_dts'] = undefined;
/**
 * Note
 * @member {String} note
 */

WorkflowNote.prototype['note'] = undefined;
/**
 * Date/time that the note was written
 * @member {String} note_dts
 */

WorkflowNote.prototype['note_dts'] = undefined;
/**
 * Note originally written before any edits
 * @member {String} original_note
 */

WorkflowNote.prototype['original_note'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/WorkflowUser} user
 */

WorkflowNote.prototype['user'] = undefined;
var _default = WorkflowNote;
exports["default"] = _default;