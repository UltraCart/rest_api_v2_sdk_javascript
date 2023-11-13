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
import PointOfSaleLocation from './PointOfSaleLocation';
import PointOfSaleReader from './PointOfSaleReader';
import PointOfSaleRegister from './PointOfSaleRegister';

/**
 * The OrderPointOfSale model module.
 * @module com.ultracart.admin.v2.models/OrderPointOfSale
 * @version 4.0.188
 */
class OrderPointOfSale {
    /**
     * Constructs a new <code>OrderPointOfSale</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPointOfSale
     */
    constructor() { 
        
        OrderPointOfSale.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPointOfSale</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPointOfSale} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPointOfSale} The populated <code>OrderPointOfSale</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPointOfSale();

            if (data.hasOwnProperty('location')) {
                obj['location'] = PointOfSaleLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('reader')) {
                obj['reader'] = PointOfSaleReader.constructFromObject(data['reader']);
            }
            if (data.hasOwnProperty('register')) {
                obj['register'] = PointOfSaleRegister.constructFromObject(data['register']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleLocation} location
 */
OrderPointOfSale.prototype['location'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader} reader
 */
OrderPointOfSale.prototype['reader'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleRegister} register
 */
OrderPointOfSale.prototype['register'] = undefined;






export default OrderPointOfSale;

