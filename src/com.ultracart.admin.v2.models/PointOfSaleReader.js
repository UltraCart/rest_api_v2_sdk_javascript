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
 * The PointOfSaleReader model module.
 * @module com.ultracart.admin.v2.models/PointOfSaleReader
 * @version 4.0.165
 */
class PointOfSaleReader {
    /**
     * Constructs a new <code>PointOfSaleReader</code>.
     * @alias module:com.ultracart.admin.v2.models/PointOfSaleReader
     */
    constructor() { 
        
        PointOfSaleReader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PointOfSaleReader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PointOfSaleReader} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PointOfSaleReader} The populated <code>PointOfSaleReader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PointOfSaleReader();

            if (data.hasOwnProperty('device_type')) {
                obj['device_type'] = ApiClient.convertToType(data['device_type'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('payment_provider')) {
                obj['payment_provider'] = ApiClient.convertToType(data['payment_provider'], 'String');
            }
            if (data.hasOwnProperty('pos_reader_id')) {
                obj['pos_reader_id'] = ApiClient.convertToType(data['pos_reader_id'], 'Number');
            }
            if (data.hasOwnProperty('pos_register_oid')) {
                obj['pos_register_oid'] = ApiClient.convertToType(data['pos_register_oid'], 'Number');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('stripe_account_id')) {
                obj['stripe_account_id'] = ApiClient.convertToType(data['stripe_account_id'], 'String');
            }
            if (data.hasOwnProperty('stripe_reader_id')) {
                obj['stripe_reader_id'] = ApiClient.convertToType(data['stripe_reader_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The device type of the reader.
 * @member {String} device_type
 */
PointOfSaleReader.prototype['device_type'] = undefined;

/**
 * The label of the reader.
 * @member {String} label
 */
PointOfSaleReader.prototype['label'] = undefined;

/**
 * The merchant id that owns this point of sale reader.
 * @member {String} merchant_id
 */
PointOfSaleReader.prototype['merchant_id'] = undefined;

/**
 * The payment provider for the card reader.
 * @member {module:com.ultracart.admin.v2.models/PointOfSaleReader.PaymentProviderEnum} payment_provider
 */
PointOfSaleReader.prototype['payment_provider'] = undefined;

/**
 * Object identifier of the point of sale reader.
 * @member {Number} pos_reader_id
 */
PointOfSaleReader.prototype['pos_reader_id'] = undefined;

/**
 * Object identifier of the point of sale register this reader is assigned to.
 * @member {Number} pos_register_oid
 */
PointOfSaleReader.prototype['pos_register_oid'] = undefined;

/**
 * The serial number of the reader.
 * @member {String} serial_number
 */
PointOfSaleReader.prototype['serial_number'] = undefined;

/**
 * If the payment provider is Stripe, this is the Stripe account id
 * @member {String} stripe_account_id
 */
PointOfSaleReader.prototype['stripe_account_id'] = undefined;

/**
 * If the payment provide is Stripe, this is the Stripe terminal reader id
 * @member {String} stripe_reader_id
 */
PointOfSaleReader.prototype['stripe_reader_id'] = undefined;





/**
 * Allowed values for the <code>payment_provider</code> property.
 * @enum {String}
 * @readonly
 */
PointOfSaleReader['PaymentProviderEnum'] = {

    /**
     * value: "stripe"
     * @const
     */
    "stripe": "stripe"
};



export default PointOfSaleReader;

