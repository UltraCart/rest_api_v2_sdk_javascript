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
import ConversationPbxTimeBasedMapping from './ConversationPbxTimeBasedMapping';

/**
 * The ConversationPbxTimeBasedMappingConfig model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig
 * @version 4.1.16
 */
class ConversationPbxTimeBasedMappingConfig {
    /**
     * Constructs a new <code>ConversationPbxTimeBasedMappingConfig</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig
     */
    constructor() { 
        
        ConversationPbxTimeBasedMappingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPbxTimeBasedMappingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig} The populated <code>ConversationPbxTimeBasedMappingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPbxTimeBasedMappingConfig();

            if (data.hasOwnProperty('default_mapping')) {
                obj['default_mapping'] = ConversationPbxTimeBasedMapping.constructFromObject(data['default_mapping']);
            }
            if (data.hasOwnProperty('mappings')) {
                obj['mappings'] = ApiClient.convertToType(data['mappings'], [ConversationPbxTimeBasedMapping]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping} default_mapping
 */
ConversationPbxTimeBasedMappingConfig.prototype['default_mapping'] = undefined;

/**
 * Mappings
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping>} mappings
 */
ConversationPbxTimeBasedMappingConfig.prototype['mappings'] = undefined;






export default ConversationPbxTimeBasedMappingConfig;

