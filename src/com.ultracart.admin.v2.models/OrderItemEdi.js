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
import OrderItemEdiIdentification from './OrderItemEdiIdentification';
import OrderItemEdiLot from './OrderItemEdiLot';

/**
 * The OrderItemEdi model module.
 * @module com.ultracart.admin.v2.models/OrderItemEdi
 * @version 4.0.82-RC
 */
class OrderItemEdi {
    /**
     * Constructs a new <code>OrderItemEdi</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemEdi
     */
    constructor() { 
        
        OrderItemEdi.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemEdi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemEdi} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemEdi} The populated <code>OrderItemEdi</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemEdi();

            if (data.hasOwnProperty('identifications')) {
                obj['identifications'] = ApiClient.convertToType(data['identifications'], [OrderItemEdiIdentification]);
            }
            if (data.hasOwnProperty('lots')) {
                obj['lots'] = ApiClient.convertToType(data['lots'], [OrderItemEdiLot]);
            }
        }
        return obj;
    }


}

/**
 * Identification information receives on the EDI purchase order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemEdiIdentification>} identifications
 */
OrderItemEdi.prototype['identifications'] = undefined;

/**
 * Lot information
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderItemEdiLot>} lots
 */
OrderItemEdi.prototype['lots'] = undefined;






export default OrderItemEdi;

