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
import ItemKitComponent from './ItemKitComponent';

/**
 * The ItemKitDefinition model module.
 * @module com.ultracart.admin.v2.models/ItemKitDefinition
 * @version 4.0.39-RC
 */
class ItemKitDefinition {
    /**
     * Constructs a new <code>ItemKitDefinition</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemKitDefinition
     */
    constructor() { 
        
        ItemKitDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemKitDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemKitDefinition} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemKitDefinition} The populated <code>ItemKitDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemKitDefinition();

            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [ItemKitComponent]);
            }
        }
        return obj;
    }


}

/**
 * Components
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemKitComponent>} components
 */
ItemKitDefinition.prototype['components'] = undefined;






export default ItemKitDefinition;

