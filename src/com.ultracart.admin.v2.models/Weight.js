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
 * The Weight model module.
 * @module com.ultracart.admin.v2.models/Weight
 * @version 4.0.101-RC
 */
class Weight {
    /**
     * Constructs a new <code>Weight</code>.
     * @alias module:com.ultracart.admin.v2.models/Weight
     */
    constructor() { 
        
        Weight.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Weight} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Weight} The populated <code>Weight</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Weight();

            if (data.hasOwnProperty('uom')) {
                obj['uom'] = ApiClient.convertToType(data['uom'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unit of measure
 * @member {module:com.ultracart.admin.v2.models/Weight.UomEnum} uom
 */
Weight.prototype['uom'] = undefined;

/**
 * Weight
 * @member {Number} value
 */
Weight.prototype['value'] = undefined;





/**
 * Allowed values for the <code>uom</code> property.
 * @enum {String}
 * @readonly
 */
Weight['UomEnum'] = {

    /**
     * value: "KG"
     * @const
     */
    "KG": "KG",

    /**
     * value: "G"
     * @const
     */
    "G": "G",

    /**
     * value: "LB"
     * @const
     */
    "LB": "LB",

    /**
     * value: "OZ"
     * @const
     */
    "OZ": "OZ"
};



export default Weight;

