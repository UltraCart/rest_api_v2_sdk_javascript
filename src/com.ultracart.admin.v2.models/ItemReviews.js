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
 * The ItemReviews model module.
 * @module com.ultracart.admin.v2.models/ItemReviews
 * @version 4.0.47-RC
 */
class ItemReviews {
    /**
     * Constructs a new <code>ItemReviews</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemReviews
     */
    constructor() { 
        
        ItemReviews.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemReviews</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemReviews} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemReviews} The populated <code>ItemReviews</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemReviews();

            if (data.hasOwnProperty('has_approved_review')) {
                obj['has_approved_review'] = ApiClient.convertToType(data['has_approved_review'], 'Boolean');
            }
            if (data.hasOwnProperty('has_review')) {
                obj['has_review'] = ApiClient.convertToType(data['has_review'], 'Boolean');
            }
            if (data.hasOwnProperty('review_count')) {
                obj['review_count'] = ApiClient.convertToType(data['review_count'], 'Number');
            }
            if (data.hasOwnProperty('review_overall')) {
                obj['review_overall'] = ApiClient.convertToType(data['review_overall'], 'Number');
            }
            if (data.hasOwnProperty('review_template_name')) {
                obj['review_template_name'] = ApiClient.convertToType(data['review_template_name'], 'String');
            }
            if (data.hasOwnProperty('review_template_oid')) {
                obj['review_template_oid'] = ApiClient.convertToType(data['review_template_oid'], 'Number');
            }
            if (data.hasOwnProperty('reviewable')) {
                obj['reviewable'] = ApiClient.convertToType(data['reviewable'], 'Boolean');
            }
            if (data.hasOwnProperty('share_reviews_with_merchant_item_id')) {
                obj['share_reviews_with_merchant_item_id'] = ApiClient.convertToType(data['share_reviews_with_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('share_reviews_with_merchant_item_oid')) {
                obj['share_reviews_with_merchant_item_oid'] = ApiClient.convertToType(data['share_reviews_with_merchant_item_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if the item has an approved review
 * @member {Boolean} has_approved_review
 */
ItemReviews.prototype['has_approved_review'] = undefined;

/**
 * True if the item has a review
 * @member {Boolean} has_review
 */
ItemReviews.prototype['has_review'] = undefined;

/**
 * Number of approved reviews
 * @member {Number} review_count
 */
ItemReviews.prototype['review_count'] = undefined;

/**
 * Overall score of reviews
 * @member {Number} review_overall
 */
ItemReviews.prototype['review_overall'] = undefined;

/**
 * Review template name
 * @member {String} review_template_name
 */
ItemReviews.prototype['review_template_name'] = undefined;

/**
 * Review template object identifier
 * @member {Number} review_template_oid
 */
ItemReviews.prototype['review_template_oid'] = undefined;

/**
 * True if the item is reviewable
 * @member {Boolean} reviewable
 */
ItemReviews.prototype['reviewable'] = undefined;

/**
 * Share reviews with item id.  To set, use the share_reviews_with_merchant_item_oid field.
 * @member {String} share_reviews_with_merchant_item_id
 */
ItemReviews.prototype['share_reviews_with_merchant_item_id'] = undefined;

/**
 * Share reviews with item oid.  To null out this field, set teh value to zero.
 * @member {Number} share_reviews_with_merchant_item_oid
 */
ItemReviews.prototype['share_reviews_with_merchant_item_oid'] = undefined;






export default ItemReviews;

