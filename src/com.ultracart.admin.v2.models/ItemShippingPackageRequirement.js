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
 * The ItemShippingPackageRequirement model module.
 * @module com.ultracart.admin.v2.models/ItemShippingPackageRequirement
 * @version 4.0.53-RC
 */
class ItemShippingPackageRequirement {
    /**
     * Constructs a new <code>ItemShippingPackageRequirement</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement
     */
    constructor() { 
        
        ItemShippingPackageRequirement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemShippingPackageRequirement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} The populated <code>ItemShippingPackageRequirement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemShippingPackageRequirement();

            if (data.hasOwnProperty('package_name')) {
                obj['package_name'] = ApiClient.convertToType(data['package_name'], 'String');
            }
            if (data.hasOwnProperty('package_oid')) {
                obj['package_oid'] = ApiClient.convertToType(data['package_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Package name
 * @member {String} package_name
 */
ItemShippingPackageRequirement.prototype['package_name'] = undefined;

/**
 * Package object identifier
 * @member {Number} package_oid
 */
ItemShippingPackageRequirement.prototype['package_oid'] = undefined;






export default ItemShippingPackageRequirement;

