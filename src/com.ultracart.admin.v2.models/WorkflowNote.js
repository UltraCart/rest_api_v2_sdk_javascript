/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkflowAttachment from './WorkflowAttachment';
import WorkflowUser from './WorkflowUser';

/**
 * The WorkflowNote model module.
 * @module com.ultracart.admin.v2.models/WorkflowNote
 * @version 4.1.16
 */
class WorkflowNote {
    /**
     * Constructs a new <code>WorkflowNote</code>.
     * @alias module:com.ultracart.admin.v2.models/WorkflowNote
     */
    constructor() { 
        
        WorkflowNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowNote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowNote} The populated <code>WorkflowNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowNote();

            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [WorkflowAttachment]);
            }
            if (data.hasOwnProperty('edit_dts')) {
                obj['edit_dts'] = ApiClient.convertToType(data['edit_dts'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('note_dts')) {
                obj['note_dts'] = ApiClient.convertToType(data['note_dts'], 'String');
            }
            if (data.hasOwnProperty('original_note')) {
                obj['original_note'] = ApiClient.convertToType(data['original_note'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = WorkflowUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

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






export default WorkflowNote;

