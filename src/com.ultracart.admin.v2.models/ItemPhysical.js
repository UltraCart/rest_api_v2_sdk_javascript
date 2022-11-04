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
import Distance from './Distance';
import Weight from './Weight';

/**
 * The ItemPhysical model module.
 * @module com.ultracart.admin.v2.models/ItemPhysical
 * @version 4.0.78-RC
 */
class ItemPhysical {
    /**
     * Constructs a new <code>ItemPhysical</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPhysical
     */
    constructor() { 
        
        ItemPhysical.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPhysical} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPhysical} The populated <code>ItemPhysical</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPhysical();

            if (data.hasOwnProperty('height')) {
                obj['height'] = Distance.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = Distance.constructFromObject(data['length']);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = Weight.constructFromObject(data['weight']);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = Distance.constructFromObject(data['width']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */
ItemPhysical.prototype['height'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */
ItemPhysical.prototype['length'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */
ItemPhysical.prototype['weight'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */
ItemPhysical.prototype['width'] = undefined;






export default ItemPhysical;

