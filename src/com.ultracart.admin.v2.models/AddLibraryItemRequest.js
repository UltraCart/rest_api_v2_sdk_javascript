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
import LibraryItemAttribute from './LibraryItemAttribute';
import LibraryItemScreenshot from './LibraryItemScreenshot';

/**
 * The AddLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/AddLibraryItemRequest
 * @version 4.0.126-RC
 */
class AddLibraryItemRequest {
    /**
     * Constructs a new <code>AddLibraryItemRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/AddLibraryItemRequest
     */
    constructor() { 
        
        AddLibraryItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} The populated <code>AddLibraryItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddLibraryItemRequest();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [LibraryItemAttribute]);
            }
            if (data.hasOwnProperty('cjson')) {
                obj['cjson'] = ApiClient.convertToType(data['cjson'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email_name')) {
                obj['email_name'] = ApiClient.convertToType(data['email_name'], 'String');
            }
            if (data.hasOwnProperty('email_path')) {
                obj['email_path'] = ApiClient.convertToType(data['email_path'], 'String');
            }
            if (data.hasOwnProperty('screenshots')) {
                obj['screenshots'] = ApiClient.convertToType(data['screenshots'], [LibraryItemScreenshot]);
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('upsell_offer_oid')) {
                obj['upsell_offer_oid'] = ApiClient.convertToType(data['upsell_offer_oid'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Attributes associated with the library item to contain additional configuration.
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAttribute>} attributes
 */
AddLibraryItemRequest.prototype['attributes'] = undefined;

/**
 * Cjson to be added to library
 * @member {String} cjson
 */
AddLibraryItemRequest.prototype['cjson'] = undefined;

/**
 * flow, campaign, cjson, email, transactional_email, postcard or upsell
 * @member {String} content_type
 */
AddLibraryItemRequest.prototype['content_type'] = undefined;

/**
 * description of library item
 * @member {String} description
 */
AddLibraryItemRequest.prototype['description'] = undefined;

/**
 * Required if content_type is transactional_email. This is the name of the email template (html, not text).  This name should have a .vm file extension.  An example is auto_order_cancel_html.vm
 * @member {String} email_name
 */
AddLibraryItemRequest.prototype['email_name'] = undefined;

/**
 * Required if content_type is transactional_email. This is the full path to the email template stored in the file system.  This defines which StoreFront contains the desired email template.  An example is /themes/Elements/core/emails/auto_order_cancel_html.vm
 * @member {String} email_path
 */
AddLibraryItemRequest.prototype['email_path'] = undefined;

/**
 * Screenshot urls for display
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemScreenshot>} screenshots
 */
AddLibraryItemRequest.prototype['screenshots'] = undefined;

/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */
AddLibraryItemRequest.prototype['storefront_oid'] = undefined;

/**
 * title of library item, usually the name of the flow or campaign, or description of cjson
 * @member {String} title
 */
AddLibraryItemRequest.prototype['title'] = undefined;

/**
 * Required if content_type is upsell. This is object identifier of a StoreFront Upsell Offer.
 * @member {Number} upsell_offer_oid
 */
AddLibraryItemRequest.prototype['upsell_offer_oid'] = undefined;

/**
 * UUID of communication flow, campaign, email, postcard, or null if this item is something else. transactional_email do not have a uuid because they are singleton objects within a storefront and easily identifiable by name
 * @member {String} uuid
 */
AddLibraryItemRequest.prototype['uuid'] = undefined;






export default AddLibraryItemRequest;

