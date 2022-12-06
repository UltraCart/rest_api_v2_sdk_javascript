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
import ExperimentVariation from './ExperimentVariation';

/**
 * The Experiment model module.
 * @module com.ultracart.admin.v2.models/Experiment
 * @version 4.0.92-RC
 */
class Experiment {
    /**
     * Constructs a new <code>Experiment</code>.
     * @alias module:com.ultracart.admin.v2.models/Experiment
     */
    constructor() { 
        
        Experiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Experiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Experiment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Experiment} The populated <code>Experiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Experiment();

            if (data.hasOwnProperty('container_id')) {
                obj['container_id'] = ApiClient.convertToType(data['container_id'], 'String');
            }
            if (data.hasOwnProperty('duration_days')) {
                obj['duration_days'] = ApiClient.convertToType(data['duration_days'], 'Number');
            }
            if (data.hasOwnProperty('end_dts')) {
                obj['end_dts'] = ApiClient.convertToType(data['end_dts'], 'String');
            }
            if (data.hasOwnProperty('equal_weighting')) {
                obj['equal_weighting'] = ApiClient.convertToType(data['equal_weighting'], 'Boolean');
            }
            if (data.hasOwnProperty('experiment_type')) {
                obj['experiment_type'] = ApiClient.convertToType(data['experiment_type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('objective')) {
                obj['objective'] = ApiClient.convertToType(data['objective'], 'String');
            }
            if (data.hasOwnProperty('objective_parameter')) {
                obj['objective_parameter'] = ApiClient.convertToType(data['objective_parameter'], 'String');
            }
            if (data.hasOwnProperty('optimization_type')) {
                obj['optimization_type'] = ApiClient.convertToType(data['optimization_type'], 'String');
            }
            if (data.hasOwnProperty('session_count')) {
                obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
            }
            if (data.hasOwnProperty('start_dts')) {
                obj['start_dts'] = ApiClient.convertToType(data['start_dts'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('storefront_experiment_oid')) {
                obj['storefront_experiment_oid'] = ApiClient.convertToType(data['storefront_experiment_oid'], 'Number');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('variations')) {
                obj['variations'] = ApiClient.convertToType(data['variations'], [ExperimentVariation]);
            }
        }
        return obj;
    }


}

/**
 * Contained ID where the experiment element was located
 * @member {String} container_id
 */
Experiment.prototype['container_id'] = undefined;

/**
 * Duration in days
 * @member {Number} duration_days
 */
Experiment.prototype['duration_days'] = undefined;

/**
 * End date/time
 * @member {String} end_dts
 */
Experiment.prototype['end_dts'] = undefined;

/**
 * Whether or not traffic is equally weighted or shifts over time during the experiment
 * @member {Boolean} equal_weighting
 */
Experiment.prototype['equal_weighting'] = undefined;

/**
 * The type of experiment
 * @member {String} experiment_type
 */
Experiment.prototype['experiment_type'] = undefined;

/**
 * Experiment id
 * @member {String} id
 */
Experiment.prototype['id'] = undefined;

/**
 * Experiment name
 * @member {String} name
 */
Experiment.prototype['name'] = undefined;

/**
 * Notes about the experiment
 * @member {String} notes
 */
Experiment.prototype['notes'] = undefined;

/**
 * Objective that is being optimized
 * @member {String} objective
 */
Experiment.prototype['objective'] = undefined;

/**
 * Objective parameter (such as event name) that is being optimized
 * @member {String} objective_parameter
 */
Experiment.prototype['objective_parameter'] = undefined;

/**
 * Type of optimization
 * @member {String} optimization_type
 */
Experiment.prototype['optimization_type'] = undefined;

/**
 * Total number of sessions in the experiment
 * @member {Number} session_count
 */
Experiment.prototype['session_count'] = undefined;

/**
 * Start date/time
 * @member {String} start_dts
 */
Experiment.prototype['start_dts'] = undefined;

/**
 * Status of the experiment
 * @member {module:com.ultracart.admin.v2.models/Experiment.StatusEnum} status
 */
Experiment.prototype['status'] = undefined;

/**
 * Storefront Experiment Oid
 * @member {Number} storefront_experiment_oid
 */
Experiment.prototype['storefront_experiment_oid'] = undefined;

/**
 * Storefront oid
 * @member {Number} storefront_oid
 */
Experiment.prototype['storefront_oid'] = undefined;

/**
 * URI the experiment was started on
 * @member {String} uri
 */
Experiment.prototype['uri'] = undefined;

/**
 * Variations being tested in the experiment
 * @member {Array.<module:com.ultracart.admin.v2.models/ExperimentVariation>} variations
 */
Experiment.prototype['variations'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Experiment['StatusEnum'] = {

    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",

    /**
     * value: "Ended"
     * @const
     */
    "Ended": "Ended",

    /**
     * value: "Deleted"
     * @const
     */
    "Deleted": "Deleted"
};



export default Experiment;

