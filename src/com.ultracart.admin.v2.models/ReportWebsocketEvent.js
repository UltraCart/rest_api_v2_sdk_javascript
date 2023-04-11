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
import ReportDataSet from './ReportDataSet';

/**
 * The ReportWebsocketEvent model module.
 * @module com.ultracart.admin.v2.models/ReportWebsocketEvent
 * @version 4.0.146
 */
class ReportWebsocketEvent {
    /**
     * Constructs a new <code>ReportWebsocketEvent</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportWebsocketEvent
     */
    constructor() { 
        
        ReportWebsocketEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportWebsocketEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportWebsocketEvent} The populated <code>ReportWebsocketEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportWebsocketEvent();

            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('query_completion')) {
                obj['query_completion'] = ReportDataSet.constructFromObject(data['query_completion']);
            }
        }
        return obj;
    }


}

/**
 * Event type
 * @member {module:com.ultracart.admin.v2.models/ReportWebsocketEvent.EventTypeEnum} event_type
 */
ReportWebsocketEvent.prototype['event_type'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ReportDataSet} query_completion
 */
ReportWebsocketEvent.prototype['query_completion'] = undefined;





/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */
ReportWebsocketEvent['EventTypeEnum'] = {

    /**
     * value: "ping"
     * @const
     */
    "ping": "ping",

    /**
     * value: "query completion"
     * @const
     */
    "query completion": "query completion"
};



export default ReportWebsocketEvent;

