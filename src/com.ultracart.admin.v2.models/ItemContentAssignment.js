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

/**
 * The ItemContentAssignment model module.
 * @module com.ultracart.admin.v2.models/ItemContentAssignment
 * @version 4.0.163
 */
class ItemContentAssignment {
    /**
     * Constructs a new <code>ItemContentAssignment</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemContentAssignment
     */
    constructor() { 
        
        ItemContentAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemContentAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentAssignment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentAssignment} The populated <code>ItemContentAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemContentAssignment();

            if (data.hasOwnProperty('default_assignment')) {
                obj['default_assignment'] = ApiClient.convertToType(data['default_assignment'], 'Boolean');
            }
            if (data.hasOwnProperty('group_oid')) {
                obj['group_oid'] = ApiClient.convertToType(data['group_oid'], 'Number');
            }
            if (data.hasOwnProperty('group_path')) {
                obj['group_path'] = ApiClient.convertToType(data['group_path'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('url_part')) {
                obj['url_part'] = ApiClient.convertToType(data['url_part'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if this group is the default assignment for this item
 * @member {Boolean} default_assignment
 */
ItemContentAssignment.prototype['default_assignment'] = undefined;

/**
 * Page (group) object identifier
 * @member {Number} group_oid
 */
ItemContentAssignment.prototype['group_oid'] = undefined;

/**
 * Page (group) path
 * @member {String} group_path
 */
ItemContentAssignment.prototype['group_path'] = undefined;

/**
 * StoreFront host name
 * @member {String} host
 */
ItemContentAssignment.prototype['host'] = undefined;

/**
 * Sort order (optional)
 * @member {Number} sort_order
 */
ItemContentAssignment.prototype['sort_order'] = undefined;

/**
 * URL part if the item id is not used
 * @member {String} url_part
 */
ItemContentAssignment.prototype['url_part'] = undefined;






export default ItemContentAssignment;

