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
import ReportPageVisualizationDimension from './ReportPageVisualizationDimension';
import ReportPageVisualizationMetric from './ReportPageVisualizationMetric';

/**
 * The ReportPageVisualization model module.
 * @module com.ultracart.admin.v2.models/ReportPageVisualization
 * @version 4.0.159
 */
class ReportPageVisualization {
    /**
     * Constructs a new <code>ReportPageVisualization</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportPageVisualization
     */
    constructor() { 
        
        ReportPageVisualization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportPageVisualization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageVisualization} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageVisualization} The populated <code>ReportPageVisualization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportPageVisualization();

            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], 'String');
            }
            if (data.hasOwnProperty('data_source_name')) {
                obj['data_source_name'] = ApiClient.convertToType(data['data_source_name'], 'String');
            }
            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = ApiClient.convertToType(data['dimensions'], [ReportPageVisualizationDimension]);
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], [ReportPageVisualizationMetric]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('show_comparison')) {
                obj['show_comparison'] = ApiClient.convertToType(data['show_comparison'], 'Boolean');
            }
            if (data.hasOwnProperty('styles')) {
                obj['styles'] = ApiClient.convertToType(data['styles'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('visualization_uuid')) {
                obj['visualization_uuid'] = ApiClient.convertToType(data['visualization_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A JSON representation of the configuration for this visualization
 * @member {String} config
 */
ReportPageVisualization.prototype['config'] = undefined;

/**
 * @member {String} data_source_name
 */
ReportPageVisualization.prototype['data_source_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension>} dimensions
 */
ReportPageVisualization.prototype['dimensions'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric>} metrics
 */
ReportPageVisualization.prototype['metrics'] = undefined;

/**
 * @member {String} name
 */
ReportPageVisualization.prototype['name'] = undefined;

/**
 * True if the visualization should show a comparison based upon the date range
 * @member {Boolean} show_comparison
 */
ReportPageVisualization.prototype['show_comparison'] = undefined;

/**
 * A JSON representation of the style configuration for this visualization
 * @member {String} styles
 */
ReportPageVisualization.prototype['styles'] = undefined;

/**
 * Type of visualization
 * @member {module:com.ultracart.admin.v2.models/ReportPageVisualization.TypeEnum} type
 */
ReportPageVisualization.prototype['type'] = undefined;

/**
 * A UUID for the visualization
 * @member {String} visualization_uuid
 */
ReportPageVisualization.prototype['visualization_uuid'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ReportPageVisualization['TypeEnum'] = {

    /**
     * value: "score card"
     * @const
     */
    "score card": "score card",

    /**
     * value: "line chart"
     * @const
     */
    "line chart": "line chart",

    /**
     * value: "bar chart"
     * @const
     */
    "bar chart": "bar chart",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "table"
     * @const
     */
    "table": "table"
};



export default ReportPageVisualization;

