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
 * The ReportPageVisualizationMetric model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualizationMetric
 * @version 4.0.187
 */
class ReportPageVisualizationMetric {
    /**
     * Constructs a new <code>ReportPageVisualizationMetric</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric
     */
    constructor() { 
        
        ReportPageVisualizationMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportPageVisualizationMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} The populated <code>ReportPageVisualizationMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportPageVisualizationMetric();

            if (data.hasOwnProperty('aggregation')) {
                obj['aggregation'] = ApiClient.convertToType(data['aggregation'], 'String');
            }
            if (data.hasOwnProperty('as')) {
                obj['as'] = ApiClient.convertToType(data['as'], 'String');
            }
            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], 'String');
            }
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Aggregation to perform
 * @member {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric.AggregationEnum} aggregation
 */
ReportPageVisualizationMetric.prototype['aggregation'] = undefined;

/**
 * Return the column as a different name
 * @member {String} as
 */
ReportPageVisualizationMetric.prototype['as'] = undefined;

/**
 * @member {String} column
 */
ReportPageVisualizationMetric.prototype['column'] = undefined;

/**
 * Number of places after the decimal point to round the number to.
 * @member {Number} round
 */
ReportPageVisualizationMetric.prototype['round'] = undefined;





/**
 * Allowed values for the <code>aggregation</code> property.
 * @enum {String}
 * @readonly
 */
ReportPageVisualizationMetric['AggregationEnum'] = {

    /**
     * value: "sum"
     * @const
     */
    "sum": "sum",

    /**
     * value: "count"
     * @const
     */
    "count": "count",

    /**
     * value: "min"
     * @const
     */
    "min": "min",

    /**
     * value: "max"
     * @const
     */
    "max": "max",

    /**
     * value: "avg"
     * @const
     */
    "avg": "avg",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};



export default ReportPageVisualizationMetric;

