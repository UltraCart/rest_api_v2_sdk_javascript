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
import ChannelPartner from './ChannelPartner';
import Country from './Country';
import CustomerAffiliate from './CustomerAffiliate';

/**
 * The CustomerEditorValues model module.
 * @module com.ultracart.admin.v2.models/CustomerEditorValues
 * @version 4.0.126-RC
 */
class CustomerEditorValues {
    /**
     * Constructs a new <code>CustomerEditorValues</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerEditorValues
     */
    constructor() { 
        
        CustomerEditorValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEditorValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEditorValues} The populated <code>CustomerEditorValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerEditorValues();

            if (data.hasOwnProperty('affiliates')) {
                obj['affiliates'] = ApiClient.convertToType(data['affiliates'], [CustomerAffiliate]);
            }
            if (data.hasOwnProperty('card_exp_months')) {
                obj['card_exp_months'] = ApiClient.convertToType(data['card_exp_months'], ['String']);
            }
            if (data.hasOwnProperty('card_exp_years')) {
                obj['card_exp_years'] = ApiClient.convertToType(data['card_exp_years'], ['String']);
            }
            if (data.hasOwnProperty('card_types')) {
                obj['card_types'] = ApiClient.convertToType(data['card_types'], ['String']);
            }
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
            }
            if (data.hasOwnProperty('edi_channel_partners')) {
                obj['edi_channel_partners'] = ApiClient.convertToType(data['edi_channel_partners'], [ChannelPartner]);
            }
            if (data.hasOwnProperty('loyalty_ledger_descriptions')) {
                obj['loyalty_ledger_descriptions'] = ApiClient.convertToType(data['loyalty_ledger_descriptions'], ['String']);
            }
            if (data.hasOwnProperty('loyalty_program_type')) {
                obj['loyalty_program_type'] = ApiClient.convertToType(data['loyalty_program_type'], 'String');
            }
            if (data.hasOwnProperty('qb_classes')) {
                obj['qb_classes'] = ApiClient.convertToType(data['qb_classes'], ['String']);
            }
            if (data.hasOwnProperty('sales_rep_codes')) {
                obj['sales_rep_codes'] = ApiClient.convertToType(data['sales_rep_codes'], ['String']);
            }
            if (data.hasOwnProperty('state_optional_countries')) {
                obj['state_optional_countries'] = ApiClient.convertToType(data['state_optional_countries'], [Country]);
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * affiliates
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerAffiliate>} affiliates
 */
CustomerEditorValues.prototype['affiliates'] = undefined;

/**
 * card_exp_months
 * @member {Array.<String>} card_exp_months
 */
CustomerEditorValues.prototype['card_exp_months'] = undefined;

/**
 * card_exp_years
 * @member {Array.<String>} card_exp_years
 */
CustomerEditorValues.prototype['card_exp_years'] = undefined;

/**
 * card_types
 * @member {Array.<String>} card_types
 */
CustomerEditorValues.prototype['card_types'] = undefined;

/**
 * countries
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
 */
CustomerEditorValues.prototype['countries'] = undefined;

/**
 * EDI channel partners
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartner>} edi_channel_partners
 */
CustomerEditorValues.prototype['edi_channel_partners'] = undefined;

/**
 * loyalty_ledger_descriptions
 * @member {Array.<String>} loyalty_ledger_descriptions
 */
CustomerEditorValues.prototype['loyalty_ledger_descriptions'] = undefined;

/**
 * loyalty_program_type
 * @member {String} loyalty_program_type
 */
CustomerEditorValues.prototype['loyalty_program_type'] = undefined;

/**
 * qb_classes
 * @member {Array.<String>} qb_classes
 */
CustomerEditorValues.prototype['qb_classes'] = undefined;

/**
 * sales_rep_codes
 * @member {Array.<String>} sales_rep_codes
 */
CustomerEditorValues.prototype['sales_rep_codes'] = undefined;

/**
 * state_optional_countries
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} state_optional_countries
 */
CustomerEditorValues.prototype['state_optional_countries'] = undefined;

/**
 * terms
 * @member {Array.<String>} terms
 */
CustomerEditorValues.prototype['terms'] = undefined;






export default CustomerEditorValues;

