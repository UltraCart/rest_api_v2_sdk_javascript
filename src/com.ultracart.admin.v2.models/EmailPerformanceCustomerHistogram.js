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
import EmailPerformanceCustomerHistogramPeriod from './EmailPerformanceCustomerHistogramPeriod';

/**
 * The EmailPerformanceCustomerHistogram model module.
 * @module com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram
 * @version 4.0.34-RC
 */
class EmailPerformanceCustomerHistogram {
    /**
     * Constructs a new <code>EmailPerformanceCustomerHistogram</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram
     */
    constructor() { 
        
        EmailPerformanceCustomerHistogram.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPerformanceCustomerHistogram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram} The populated <code>EmailPerformanceCustomerHistogram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPerformanceCustomerHistogram();

            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [EmailPerformanceCustomerHistogramPeriod]);
            }
        }
        return obj;
    }


}

/**
 * Periods (newest to oldest)
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod>} periods
 */
EmailPerformanceCustomerHistogram.prototype['periods'] = undefined;






export default EmailPerformanceCustomerHistogram;

