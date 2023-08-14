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
import ItemRelatedItem from './ItemRelatedItem';

/**
 * The ItemRelated model module.
 * @module com.ultracart.admin.v2.models/ItemRelated
 * @version 4.0.170
 */
class ItemRelated {
    /**
     * Constructs a new <code>ItemRelated</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRelated
     */
    constructor() { 
        
        ItemRelated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRelated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRelated} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRelated} The populated <code>ItemRelated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRelated();

            if (data.hasOwnProperty('no_system_calculated_related_items')) {
                obj['no_system_calculated_related_items'] = ApiClient.convertToType(data['no_system_calculated_related_items'], 'Boolean');
            }
            if (data.hasOwnProperty('not_relatable')) {
                obj['not_relatable'] = ApiClient.convertToType(data['not_relatable'], 'Boolean');
            }
            if (data.hasOwnProperty('related_items')) {
                obj['related_items'] = ApiClient.convertToType(data['related_items'], [ItemRelatedItem]);
            }
        }
        return obj;
    }


}

/**
 * True to suppress system calculated relationships
 * @member {Boolean} no_system_calculated_related_items
 */
ItemRelated.prototype['no_system_calculated_related_items'] = undefined;

/**
 * Not relatable
 * @member {Boolean} not_relatable
 */
ItemRelated.prototype['not_relatable'] = undefined;

/**
 * Related items
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemRelatedItem>} related_items
 */
ItemRelated.prototype['related_items'] = undefined;






export default ItemRelated;

