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
 * The CustomerReviewer model module.
 * @module com.ultracart.admin.v2.models/CustomerReviewer
 * @version 4.0.94-RC
 */
class CustomerReviewer {
    /**
     * Constructs a new <code>CustomerReviewer</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerReviewer
     */
    constructor() { 
        
        CustomerReviewer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerReviewer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerReviewer} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerReviewer} The populated <code>CustomerReviewer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerReviewer();

            if (data.hasOwnProperty('auto_approve')) {
                obj['auto_approve'] = ApiClient.convertToType(data['auto_approve'], 'Boolean');
            }
            if (data.hasOwnProperty('average_overall_rating')) {
                obj['average_overall_rating'] = ApiClient.convertToType(data['average_overall_rating'], 'Number');
            }
            if (data.hasOwnProperty('expert')) {
                obj['expert'] = ApiClient.convertToType(data['expert'], 'Boolean');
            }
            if (data.hasOwnProperty('first_review')) {
                obj['first_review'] = ApiClient.convertToType(data['first_review'], 'String');
            }
            if (data.hasOwnProperty('last_review')) {
                obj['last_review'] = ApiClient.convertToType(data['last_review'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('number_helpful_review_votes')) {
                obj['number_helpful_review_votes'] = ApiClient.convertToType(data['number_helpful_review_votes'], 'Number');
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('reviews_contributed')) {
                obj['reviews_contributed'] = ApiClient.convertToType(data['reviews_contributed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if reviewes from this customer profile should automatically be approved
 * @member {Boolean} auto_approve
 */
CustomerReviewer.prototype['auto_approve'] = undefined;

/**
 * Average overall rating of items reviewed
 * @member {Number} average_overall_rating
 */
CustomerReviewer.prototype['average_overall_rating'] = undefined;

/**
 * True if the customer is an expert
 * @member {Boolean} expert
 */
CustomerReviewer.prototype['expert'] = undefined;

/**
 * First review
 * @member {String} first_review
 */
CustomerReviewer.prototype['first_review'] = undefined;

/**
 * Last review
 * @member {String} last_review
 */
CustomerReviewer.prototype['last_review'] = undefined;

/**
 * Location of the reviewer
 * @member {String} location
 */
CustomerReviewer.prototype['location'] = undefined;

/**
 * Nickname of the reviewer
 * @member {String} nickname
 */
CustomerReviewer.prototype['nickname'] = undefined;

/**
 * Number of helpful review votes
 * @member {Number} number_helpful_review_votes
 */
CustomerReviewer.prototype['number_helpful_review_votes'] = undefined;

/**
 * Rank of this reviewer
 * @member {Number} rank
 */
CustomerReviewer.prototype['rank'] = undefined;

/**
 * Number of reviews contributed
 * @member {Number} reviews_contributed
 */
CustomerReviewer.prototype['reviews_contributed'] = undefined;






export default CustomerReviewer;

