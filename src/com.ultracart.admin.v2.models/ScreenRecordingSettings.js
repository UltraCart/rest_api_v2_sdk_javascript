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
 * The ScreenRecordingSettings model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingSettings
 * @version 4.0.126-RC
 */
class ScreenRecordingSettings {
    /**
     * Constructs a new <code>ScreenRecordingSettings</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSettings
     */
    constructor() { 
        
        ScreenRecordingSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} The populated <code>ScreenRecordingSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingSettings();

            if (data.hasOwnProperty('cost_per_thousand')) {
                obj['cost_per_thousand'] = ApiClient.convertToType(data['cost_per_thousand'], 'Number');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('retention_interval')) {
                obj['retention_interval'] = ApiClient.convertToType(data['retention_interval'], 'String');
            }
            if (data.hasOwnProperty('sessions_current_billing_period')) {
                obj['sessions_current_billing_period'] = ApiClient.convertToType(data['sessions_current_billing_period'], 'Number');
            }
            if (data.hasOwnProperty('sessions_last_billing_period')) {
                obj['sessions_last_billing_period'] = ApiClient.convertToType(data['sessions_last_billing_period'], 'Number');
            }
            if (data.hasOwnProperty('sessions_trial_billing_period')) {
                obj['sessions_trial_billing_period'] = ApiClient.convertToType(data['sessions_trial_billing_period'], 'Number');
            }
            if (data.hasOwnProperty('trial_expiration')) {
                obj['trial_expiration'] = ApiClient.convertToType(data['trial_expiration'], 'String');
            }
            if (data.hasOwnProperty('trial_expired')) {
                obj['trial_expired'] = ApiClient.convertToType(data['trial_expired'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Cost per one thousand sessions
 * @member {Number} cost_per_thousand
 */
ScreenRecordingSettings.prototype['cost_per_thousand'] = undefined;

/**
 * @member {Boolean} enabled
 */
ScreenRecordingSettings.prototype['enabled'] = undefined;

/**
 * How long screen recording data is retained
 * @member {String} retention_interval
 */
ScreenRecordingSettings.prototype['retention_interval'] = undefined;

/**
 * @member {Number} sessions_current_billing_period
 */
ScreenRecordingSettings.prototype['sessions_current_billing_period'] = undefined;

/**
 * @member {Number} sessions_last_billing_period
 */
ScreenRecordingSettings.prototype['sessions_last_billing_period'] = undefined;

/**
 * @member {Number} sessions_trial_billing_period
 */
ScreenRecordingSettings.prototype['sessions_trial_billing_period'] = undefined;

/**
 * @member {String} trial_expiration
 */
ScreenRecordingSettings.prototype['trial_expiration'] = undefined;

/**
 * @member {Boolean} trial_expired
 */
ScreenRecordingSettings.prototype['trial_expired'] = undefined;






export default ScreenRecordingSettings;

