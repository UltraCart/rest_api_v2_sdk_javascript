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
 * The HitSessionStart model module.
 * @module com.ultracart.admin.v2.models/HitSessionStart
 * @version 4.0.159
 */
class HitSessionStart {
    /**
     * Constructs a new <code>HitSessionStart</code>.
     * @alias module:com.ultracart.admin.v2.models/HitSessionStart
     */
    constructor() { 
        
        HitSessionStart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HitSessionStart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HitSessionStart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HitSessionStart} The populated <code>HitSessionStart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HitSessionStart();

            if (data.hasOwnProperty('bot')) {
                obj['bot'] = ApiClient.convertToType(data['bot'], 'Boolean');
            }
            if (data.hasOwnProperty('bounce')) {
                obj['bounce'] = ApiClient.convertToType(data['bounce'], 'Boolean');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('device_switch_detected')) {
                obj['device_switch_detected'] = ApiClient.convertToType(data['device_switch_detected'], 'Boolean');
            }
            if (data.hasOwnProperty('fake_bot')) {
                obj['fake_bot'] = ApiClient.convertToType(data['fake_bot'], 'Boolean');
            }
            if (data.hasOwnProperty('geolocation_country')) {
                obj['geolocation_country'] = ApiClient.convertToType(data['geolocation_country'], 'String');
            }
            if (data.hasOwnProperty('geolocation_latitude')) {
                obj['geolocation_latitude'] = ApiClient.convertToType(data['geolocation_latitude'], 'Number');
            }
            if (data.hasOwnProperty('geolocation_longitude')) {
                obj['geolocation_longitude'] = ApiClient.convertToType(data['geolocation_longitude'], 'Number');
            }
            if (data.hasOwnProperty('geolocation_province')) {
                obj['geolocation_province'] = ApiClient.convertToType(data['geolocation_province'], 'String');
            }
            if (data.hasOwnProperty('no_cookie_support')) {
                obj['no_cookie_support'] = ApiClient.convertToType(data['no_cookie_support'], 'Boolean');
            }
            if (data.hasOwnProperty('prefetch')) {
                obj['prefetch'] = ApiClient.convertToType(data['prefetch'], 'Boolean');
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
            }
            if (data.hasOwnProperty('screen_height')) {
                obj['screen_height'] = ApiClient.convertToType(data['screen_height'], 'Number');
            }
            if (data.hasOwnProperty('screen_width')) {
                obj['screen_width'] = ApiClient.convertToType(data['screen_width'], 'Number');
            }
            if (data.hasOwnProperty('time_on_Site')) {
                obj['time_on_Site'] = ApiClient.convertToType(data['time_on_Site'], 'Number');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('user_ip')) {
                obj['user_ip'] = ApiClient.convertToType(data['user_ip'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} bot
 */
HitSessionStart.prototype['bot'] = undefined;

/**
 * @member {Boolean} bounce
 */
HitSessionStart.prototype['bounce'] = undefined;

/**
 * @member {String} channel
 */
HitSessionStart.prototype['channel'] = undefined;

/**
 * @member {Boolean} device_switch_detected
 */
HitSessionStart.prototype['device_switch_detected'] = undefined;

/**
 * @member {Boolean} fake_bot
 */
HitSessionStart.prototype['fake_bot'] = undefined;

/**
 * @member {String} geolocation_country
 */
HitSessionStart.prototype['geolocation_country'] = undefined;

/**
 * @member {Number} geolocation_latitude
 */
HitSessionStart.prototype['geolocation_latitude'] = undefined;

/**
 * @member {Number} geolocation_longitude
 */
HitSessionStart.prototype['geolocation_longitude'] = undefined;

/**
 * @member {String} geolocation_province
 */
HitSessionStart.prototype['geolocation_province'] = undefined;

/**
 * @member {Boolean} no_cookie_support
 */
HitSessionStart.prototype['no_cookie_support'] = undefined;

/**
 * @member {Boolean} prefetch
 */
HitSessionStart.prototype['prefetch'] = undefined;

/**
 * @member {String} referrer
 */
HitSessionStart.prototype['referrer'] = undefined;

/**
 * @member {Number} screen_height
 */
HitSessionStart.prototype['screen_height'] = undefined;

/**
 * @member {Number} screen_width
 */
HitSessionStart.prototype['screen_width'] = undefined;

/**
 * @member {Number} time_on_Site
 */
HitSessionStart.prototype['time_on_Site'] = undefined;

/**
 * @member {String} user_agent
 */
HitSessionStart.prototype['user_agent'] = undefined;

/**
 * @member {String} user_ip
 */
HitSessionStart.prototype['user_ip'] = undefined;






export default HitSessionStart;

