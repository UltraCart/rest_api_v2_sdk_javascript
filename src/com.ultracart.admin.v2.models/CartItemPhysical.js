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
 * The CartItemPhysical model module.
 * @module com.ultracart.admin.v2.models/CartItemPhysical
 * @version 4.0.123-RC
 */
class CartItemPhysical {
    /**
     * Constructs a new <code>CartItemPhysical</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItemPhysical
     */
    constructor() { 
        
        CartItemPhysical.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItemPhysical</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemPhysical} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemPhysical} The populated <code>CartItemPhysical</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItemPhysical();

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
CartItemPhysical.prototype['height'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */
CartItemPhysical.prototype['length'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */
CartItemPhysical.prototype['weight'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */
CartItemPhysical.prototype['width'] = undefined;






export default CartItemPhysical;

