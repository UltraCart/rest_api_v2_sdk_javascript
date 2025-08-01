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
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The OrderInvoiceResponse model module.
 * @module com.ultracart.admin.v2.models/OrderInvoiceResponse
 * @version 4.1.16
 */
class OrderInvoiceResponse {
    /**
     * Constructs a new <code>OrderInvoiceResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderInvoiceResponse
     */
    constructor() { 
        
        OrderInvoiceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderInvoiceResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderInvoiceResponse} The populated <code>OrderInvoiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderInvoiceResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('pdfBase64')) {
                obj['pdfBase64'] = ApiClient.convertToType(data['pdfBase64'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
OrderInvoiceResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
OrderInvoiceResponse.prototype['metadata'] = undefined;

/**
 * pdf_base64
 * @member {String} pdfBase64
 */
OrderInvoiceResponse.prototype['pdfBase64'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
OrderInvoiceResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
OrderInvoiceResponse.prototype['warning'] = undefined;






export default OrderInvoiceResponse;

