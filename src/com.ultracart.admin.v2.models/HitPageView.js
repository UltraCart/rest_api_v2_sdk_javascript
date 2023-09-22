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
import HitPageViewMetaData from './HitPageViewMetaData';

/**
 * The HitPageView model module.
 * @module com.ultracart.admin.v2.models/HitPageView
 * @version 4.0.178
 */
class HitPageView {
    /**
     * Constructs a new <code>HitPageView</code>.
     * @alias module:com.ultracart.admin.v2.models/HitPageView
     */
    constructor() { 
        
        HitPageView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HitPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HitPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HitPageView} The populated <code>HitPageView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HitPageView();

            if (data.hasOwnProperty('bounce')) {
                obj['bounce'] = ApiClient.convertToType(data['bounce'], 'Boolean');
            }
            if (data.hasOwnProperty('meta_data')) {
                obj['meta_data'] = ApiClient.convertToType(data['meta_data'], [HitPageViewMetaData]);
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('prefetch')) {
                obj['prefetch'] = ApiClient.convertToType(data['prefetch'], 'Boolean');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('recording')) {
                obj['recording'] = ApiClient.convertToType(data['recording'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect')) {
                obj['redirect'] = ApiClient.convertToType(data['redirect'], 'Boolean');
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
            }
            if (data.hasOwnProperty('time_on_page')) {
                obj['time_on_page'] = ApiClient.convertToType(data['time_on_page'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} bounce
 */
HitPageView.prototype['bounce'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/HitPageViewMetaData>} meta_data
 */
HitPageView.prototype['meta_data'] = undefined;

/**
 * @member {String} method
 */
HitPageView.prototype['method'] = undefined;

/**
 * @member {Boolean} prefetch
 */
HitPageView.prototype['prefetch'] = undefined;

/**
 * @member {String} query
 */
HitPageView.prototype['query'] = undefined;

/**
 * @member {Boolean} recording
 */
HitPageView.prototype['recording'] = undefined;

/**
 * @member {Boolean} redirect
 */
HitPageView.prototype['redirect'] = undefined;

/**
 * @member {String} referrer
 */
HitPageView.prototype['referrer'] = undefined;

/**
 * @member {Number} time_on_page
 */
HitPageView.prototype['time_on_page'] = undefined;

/**
 * @member {String} title
 */
HitPageView.prototype['title'] = undefined;

/**
 * @member {String} url
 */
HitPageView.prototype['url'] = undefined;






export default HitPageView;

