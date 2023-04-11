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
import ReportPageVisualization from './ReportPageVisualization';

/**
 * The ReportPage model module.
 * @module com.ultracart.admin.v2.models/ReportPage
 * @version 4.0.146
 */
class ReportPage {
    /**
     * Constructs a new <code>ReportPage</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportPage
     */
    constructor() { 
        
        ReportPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPage} The populated <code>ReportPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportPage();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('visualizations')) {
                obj['visualizations'] = ApiClient.convertToType(data['visualizations'], [ReportPageVisualization]);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Height of the report page in inches
 * @member {Number} height
 */
ReportPage.prototype['height'] = undefined;

/**
 * @member {String} title
 */
ReportPage.prototype['title'] = undefined;

/**
 * Visualizations on the report page.
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualization>} visualizations
 */
ReportPage.prototype['visualizations'] = undefined;

/**
 * Width of the report page in inches
 * @member {Number} width
 */
ReportPage.prototype['width'] = undefined;






export default ReportPage;

