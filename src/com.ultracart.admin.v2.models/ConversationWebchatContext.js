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
import AutoOrder from './AutoOrder';
import Cart from './Cart';
import HitPageView from './HitPageView';
import HitSessionStart from './HitSessionStart';
import HitSessionUtm from './HitSessionUtm';
import Order from './Order';

/**
 * The ConversationWebchatContext model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatContext
 * @version 4.0.190
 */
class ConversationWebchatContext {
    /**
     * Constructs a new <code>ConversationWebchatContext</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationWebchatContext
     */
    constructor() { 
        
        ConversationWebchatContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationWebchatContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatContext} The populated <code>ConversationWebchatContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationWebchatContext();

            if (data.hasOwnProperty('auto_orders')) {
                obj['auto_orders'] = ApiClient.convertToType(data['auto_orders'], [AutoOrder]);
            }
            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('current_url')) {
                obj['current_url'] = ApiClient.convertToType(data['current_url'], 'String');
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [Order]);
            }
            if (data.hasOwnProperty('page_view')) {
                obj['page_view'] = ApiClient.convertToType(data['page_view'], [HitPageView]);
            }
            if (data.hasOwnProperty('session_start')) {
                obj['session_start'] = HitSessionStart.constructFromObject(data['session_start']);
            }
            if (data.hasOwnProperty('session_start_dts')) {
                obj['session_start_dts'] = ApiClient.convertToType(data['session_start_dts'], 'String');
            }
            if (data.hasOwnProperty('session_utm')) {
                obj['session_utm'] = HitSessionUtm.constructFromObject(data['session_utm']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} auto_orders
 */
ConversationWebchatContext.prototype['auto_orders'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
ConversationWebchatContext.prototype['cart'] = undefined;

/**
 * @member {String} current_url
 */
ConversationWebchatContext.prototype['current_url'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Order>} orders
 */
ConversationWebchatContext.prototype['orders'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/HitPageView>} page_view
 */
ConversationWebchatContext.prototype['page_view'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionStart} session_start
 */
ConversationWebchatContext.prototype['session_start'] = undefined;

/**
 * Date/time that the session was started (if known)
 * @member {String} session_start_dts
 */
ConversationWebchatContext.prototype['session_start_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/HitSessionUtm} session_utm
 */
ConversationWebchatContext.prototype['session_utm'] = undefined;






export default ConversationWebchatContext;

