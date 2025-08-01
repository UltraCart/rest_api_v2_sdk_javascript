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
 * The PointOfSaleRegister model module.
 * @module com.ultracart.admin.v2.models/PointOfSaleRegister
 * @version 4.1.16
 */
class PointOfSaleRegister {
    /**
     * Constructs a new <code>PointOfSaleRegister</code>.
     * @alias module:com.ultracart.admin.v2.models/PointOfSaleRegister
     */
    constructor() { 
        
        PointOfSaleRegister.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PointOfSaleRegister</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PointOfSaleRegister} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PointOfSaleRegister} The populated <code>PointOfSaleRegister</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PointOfSaleRegister();

            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pos_location_oid')) {
                obj['pos_location_oid'] = ApiClient.convertToType(data['pos_location_oid'], 'Number');
            }
            if (data.hasOwnProperty('pos_register_oid')) {
                obj['pos_register_oid'] = ApiClient.convertToType(data['pos_register_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The merchant id that owns this point of sale register.
 * @member {String} merchant_id
 */
PointOfSaleRegister.prototype['merchant_id'] = undefined;

/**
 * Name of the register.
 * @member {String} name
 */
PointOfSaleRegister.prototype['name'] = undefined;

/**
 * Object identifier of the point of sale location where this register is located.
 * @member {Number} pos_location_oid
 */
PointOfSaleRegister.prototype['pos_location_oid'] = undefined;

/**
 * Object identifier of the point of sale register.
 * @member {Number} pos_register_oid
 */
PointOfSaleRegister.prototype['pos_register_oid'] = undefined;






export default PointOfSaleRegister;

