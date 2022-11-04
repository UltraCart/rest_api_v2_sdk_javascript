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
 * The Permission model module.
 * @module com.ultracart.admin.v2.models/Permission
 * @version 4.0.78-RC
 */
class Permission {
    /**
     * Constructs a new <code>Permission</code>.
     * @alias module:com.ultracart.admin.v2.models/Permission
     */
    constructor() { 
        
        Permission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Permission} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Permission} The populated <code>Permission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Permission();

            if (data.hasOwnProperty('permission_group')) {
                obj['permission_group'] = ApiClient.convertToType(data['permission_group'], 'String');
            }
            if (data.hasOwnProperty('permission_Name')) {
                obj['permission_Name'] = ApiClient.convertToType(data['permission_Name'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A group for this permission.  This name is only used for visual grouping within interfaces.
 * @member {String} permission_group
 */
Permission.prototype['permission_group'] = undefined;

/**
 * The name of this permission.
 * @member {String} permission_Name
 */
Permission.prototype['permission_Name'] = undefined;

/**
 * True if this user has this permission.
 * @member {Boolean} selected
 */
Permission.prototype['selected'] = undefined;






export default Permission;

