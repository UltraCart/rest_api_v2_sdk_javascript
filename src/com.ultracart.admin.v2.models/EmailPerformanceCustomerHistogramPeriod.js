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
 * The EmailPerformanceCustomerHistogramPeriod model module.
 * @module com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
 * @version 4.0.70-RC
 */
class EmailPerformanceCustomerHistogramPeriod {
    /**
     * Constructs a new <code>EmailPerformanceCustomerHistogramPeriod</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
     */
    constructor() { 
        
        EmailPerformanceCustomerHistogramPeriod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPerformanceCustomerHistogramPeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} The populated <code>EmailPerformanceCustomerHistogramPeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPerformanceCustomerHistogramPeriod();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Number');
            }
            if (data.hasOwnProperty('inactive')) {
                obj['inactive'] = ApiClient.convertToType(data['inactive'], 'Number');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Active customers last active in this period
 * @member {Number} active
 */
EmailPerformanceCustomerHistogramPeriod.prototype['active'] = undefined;

/**
 * Inactive customers last active in this period
 * @member {Number} inactive
 */
EmailPerformanceCustomerHistogramPeriod.prototype['inactive'] = undefined;

/**
 * Month (1 = January)
 * @member {Number} month
 */
EmailPerformanceCustomerHistogramPeriod.prototype['month'] = undefined;

/**
 * Total customers last active in this period
 * @member {Number} total
 */
EmailPerformanceCustomerHistogramPeriod.prototype['total'] = undefined;

/**
 * Year (four digits)
 * @member {Number} year
 */
EmailPerformanceCustomerHistogramPeriod.prototype['year'] = undefined;






export default EmailPerformanceCustomerHistogramPeriod;

