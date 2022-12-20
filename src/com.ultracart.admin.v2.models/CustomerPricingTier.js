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
 * The CustomerPricingTier model module.
 * @module com.ultracart.admin.v2.models/CustomerPricingTier
 * @version 4.0.101-RC
 */
class CustomerPricingTier {
    /**
     * Constructs a new <code>CustomerPricingTier</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerPricingTier
     */
    constructor() { 
        
        CustomerPricingTier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerPricingTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerPricingTier} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerPricingTier} The populated <code>CustomerPricingTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPricingTier();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pricing_tier_oid')) {
                obj['pricing_tier_oid'] = ApiClient.convertToType(data['pricing_tier_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} name
 */
CustomerPricingTier.prototype['name'] = undefined;

/**
 * Pricing Tier Oid
 * @member {Number} pricing_tier_oid
 */
CustomerPricingTier.prototype['pricing_tier_oid'] = undefined;






export default CustomerPricingTier;

