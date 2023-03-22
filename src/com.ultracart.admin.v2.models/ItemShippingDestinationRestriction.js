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
 * The ItemShippingDestinationRestriction model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDestinationRestriction
 * @version 4.0.141
 */
class ItemShippingDestinationRestriction {
    /**
     * Constructs a new <code>ItemShippingDestinationRestriction</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction
     */
    constructor() { 
        
        ItemShippingDestinationRestriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemShippingDestinationRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction} The populated <code>ItemShippingDestinationRestriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemShippingDestinationRestriction();

            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = ApiClient.convertToType(data['validity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */
ItemShippingDestinationRestriction.prototype['country_code'] = undefined;

/**
 * State
 * @member {String} state
 */
ItemShippingDestinationRestriction.prototype['state'] = undefined;

/**
 * Validity
 * @member {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction.ValidityEnum} validity
 */
ItemShippingDestinationRestriction.prototype['validity'] = undefined;





/**
 * Allowed values for the <code>validity</code> property.
 * @enum {String}
 * @readonly
 */
ItemShippingDestinationRestriction['ValidityEnum'] = {

    /**
     * value: "valid only for"
     * @const
     */
    "valid only for": "valid only for",

    /**
     * value: "invalid for"
     * @const
     */
    "invalid for": "invalid for"
};



export default ItemShippingDestinationRestriction;

