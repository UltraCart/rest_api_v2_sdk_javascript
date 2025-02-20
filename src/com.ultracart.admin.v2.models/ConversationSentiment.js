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
 * The ConversationSentiment model module.
 * @module com.ultracart.admin.v2.models/ConversationSentiment
 * @version 4.0.244
 */
class ConversationSentiment {
    /**
     * Constructs a new <code>ConversationSentiment</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationSentiment
     */
    constructor() { 
        
        ConversationSentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationSentiment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationSentiment} The populated <code>ConversationSentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationSentiment();

            if (data.hasOwnProperty('last_detect_sentiment')) {
                obj['last_detect_sentiment'] = ApiClient.convertToType(data['last_detect_sentiment'], 'String');
            }
            if (data.hasOwnProperty('mixed')) {
                obj['mixed'] = ApiClient.convertToType(data['mixed'], 'Number');
            }
            if (data.hasOwnProperty('negative')) {
                obj['negative'] = ApiClient.convertToType(data['negative'], 'Number');
            }
            if (data.hasOwnProperty('neutral')) {
                obj['neutral'] = ApiClient.convertToType(data['neutral'], 'Number');
            }
            if (data.hasOwnProperty('positive')) {
                obj['positive'] = ApiClient.convertToType(data['positive'], 'Number');
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = ApiClient.convertToType(data['sentiment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The last time the detect sentiment was run on this conversation
 * @member {String} last_detect_sentiment
 */
ConversationSentiment.prototype['last_detect_sentiment'] = undefined;

/**
 * The mixed score
 * @member {Number} mixed
 */
ConversationSentiment.prototype['mixed'] = undefined;

/**
 * The negative score
 * @member {Number} negative
 */
ConversationSentiment.prototype['negative'] = undefined;

/**
 * The neutral score
 * @member {Number} neutral
 */
ConversationSentiment.prototype['neutral'] = undefined;

/**
 * The positive score
 * @member {Number} positive
 */
ConversationSentiment.prototype['positive'] = undefined;

/**
 * The overall sentiment
 * @member {module:com.ultracart.admin.v2.models/ConversationSentiment.SentimentEnum} sentiment
 */
ConversationSentiment.prototype['sentiment'] = undefined;





/**
 * Allowed values for the <code>sentiment</code> property.
 * @enum {String}
 * @readonly
 */
ConversationSentiment['SentimentEnum'] = {

    /**
     * value: "POSITIVE"
     * @const
     */
    "POSITIVE": "POSITIVE",

    /**
     * value: "NEUTRAL"
     * @const
     */
    "NEUTRAL": "NEUTRAL",

    /**
     * value: "NEGATIVE"
     * @const
     */
    "NEGATIVE": "NEGATIVE",

    /**
     * value: "MIXED"
     * @const
     */
    "MIXED": "MIXED"
};



export default ConversationSentiment;

