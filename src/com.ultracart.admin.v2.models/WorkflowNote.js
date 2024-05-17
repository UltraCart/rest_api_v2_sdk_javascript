/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/WorkflowAttachment', 'com.ultracart.admin.v2.models/WorkflowUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowAttachment'), require('./WorkflowUser'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WorkflowNote = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.WorkflowAttachment, root.UltraCartRestApiV2.WorkflowUser);
  }
}(this, function(ApiClient, WorkflowAttachment, WorkflowUser) {
  'use strict';

  /**
   * The WorkflowNote model module.
   * @module com.ultracart.admin.v2.models/WorkflowNote
   * @version 3.10.205
   */

  /**
   * Constructs a new <code>WorkflowNote</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowNote
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowNote} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowNote} The populated <code>WorkflowNote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [WorkflowAttachment]);
      if (data.hasOwnProperty('edit_dts'))
        obj.edit_dts = ApiClient.convertToType(data['edit_dts'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('note_dts'))
        obj.note_dts = ApiClient.convertToType(data['note_dts'], 'String');
      if (data.hasOwnProperty('original_note'))
        obj.original_note = ApiClient.convertToType(data['original_note'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = WorkflowUser.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * Attachments to the Workflow Task
   * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowAttachment>} attachments
   */
  exports.prototype.attachments = undefined;

  /**
   * Date/time that the note was edited
   * @member {String} edit_dts
   */
  exports.prototype.edit_dts = undefined;

  /**
   * Note
   * @member {String} note
   */
  exports.prototype.note = undefined;

  /**
   * Date/time that the note was written
   * @member {String} note_dts
   */
  exports.prototype.note_dts = undefined;

  /**
   * Note originally written before any edits
   * @member {String} original_note
   */
  exports.prototype.original_note = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/WorkflowUser} user
   */
  exports.prototype.user = undefined;

  return exports;

}));
