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
 * The ReportDataSetSchema model module.
 * @module com.ultracart.admin.v2.models/ReportDataSetSchema
 * @version 4.0.185
 */
class ReportDataSetSchema {
    /**
     * Constructs a new <code>ReportDataSetSchema</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportDataSetSchema
     */
    constructor() { 
        
        ReportDataSetSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDataSetSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetSchema} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportDataSetSchema} The populated <code>ReportDataSetSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDataSetSchema();

            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A JSON representation of the configuration for this visualization
 * @member {String} config
 */
ReportDataSetSchema.prototype['config'] = undefined;

/**
 * @member {String} name
 */
ReportDataSetSchema.prototype['name'] = undefined;

/**
 * Type of the column.
 * @member {module:com.ultracart.admin.v2.models/ReportDataSetSchema.TypeEnum} type
 */
ReportDataSetSchema.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ReportDataSetSchema['TypeEnum'] = {

    /**
     * value: "BIGNUMERIC"
     * @const
     */
    "BIGNUMERIC": "BIGNUMERIC",

    /**
     * value: "BOOL"
     * @const
     */
    "BOOL": "BOOL",

    /**
     * value: "DATE"
     * @const
     */
    "DATE": "DATE",

    /**
     * value: "DATETIME"
     * @const
     */
    "DATETIME": "DATETIME",

    /**
     * value: "FLOAT64"
     * @const
     */
    "FLOAT64": "FLOAT64",

    /**
     * value: "INT64"
     * @const
     */
    "INT64": "INT64",

    /**
     * value: "JSON"
     * @const
     */
    "JSON": "JSON",

    /**
     * value: "NUMERIC"
     * @const
     */
    "NUMERIC": "NUMERIC",

    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING",

    /**
     * value: "TIME"
     * @const
     */
    "TIME": "TIME",

    /**
     * value: "TIMESTAMP"
     * @const
     */
    "TIMESTAMP": "TIMESTAMP"
};



export default ReportDataSetSchema;

