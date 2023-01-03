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
import Error from './Error';
import LibraryItemAttribute from './LibraryItemAttribute';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ApplyLibraryItemResponse model module.
 * @module com.ultracart.admin.v2.models/ApplyLibraryItemResponse
 * @version 4.0.105-RC
 */
class ApplyLibraryItemResponse {
    /**
     * Constructs a new <code>ApplyLibraryItemResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse
     */
    constructor() { 
        
        ApplyLibraryItemResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplyLibraryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} The populated <code>ApplyLibraryItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplyLibraryItemResponse();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [LibraryItemAttribute]);
            }
            if (data.hasOwnProperty('cjson')) {
                obj['cjson'] = ApiClient.convertToType(data['cjson'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('email_template_vm_path')) {
                obj['email_template_vm_path'] = ApiClient.convertToType(data['email_template_vm_path'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

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






export default ApplyLibraryItemResponse;

