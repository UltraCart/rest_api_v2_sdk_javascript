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
 * The DistributionCenter model module.
 * @module com.ultracart.admin.v2.models/DistributionCenter
 * @version 4.0.34-RC
 */
class DistributionCenter {
    /**
     * Constructs a new <code>DistributionCenter</code>.
     * @alias module:com.ultracart.admin.v2.models/DistributionCenter
     */
    constructor() { 
        
        DistributionCenter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DistributionCenter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/DistributionCenter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/DistributionCenter} The populated <code>DistributionCenter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DistributionCenter();

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('default_center')) {
                obj['default_center'] = ApiClient.convertToType(data['default_center'], 'Boolean');
            }
            if (data.hasOwnProperty('default_handles_all_items')) {
                obj['default_handles_all_items'] = ApiClient.convertToType(data['default_handles_all_items'], 'Boolean');
            }
            if (data.hasOwnProperty('distribution_center_oid')) {
                obj['distribution_center_oid'] = ApiClient.convertToType(data['distribution_center_oid'], 'Number');
            }
            if (data.hasOwnProperty('duns')) {
                obj['duns'] = ApiClient.convertToType(data['duns'], 'String');
            }
            if (data.hasOwnProperty('estimate_from_distribution_center_oid')) {
                obj['estimate_from_distribution_center_oid'] = ApiClient.convertToType(data['estimate_from_distribution_center_oid'], 'Number');
            }
            if (data.hasOwnProperty('ftp_password')) {
                obj['ftp_password'] = ApiClient.convertToType(data['ftp_password'], 'String');
            }
            if (data.hasOwnProperty('hold_before_shipment_minutes')) {
                obj['hold_before_shipment_minutes'] = ApiClient.convertToType(data['hold_before_shipment_minutes'], 'Number');
            }
            if (data.hasOwnProperty('hold_before_transmission')) {
                obj['hold_before_transmission'] = ApiClient.convertToType(data['hold_before_transmission'], 'Boolean');
            }
            if (data.hasOwnProperty('holdAutoOrderBeforeShipmentMinutes')) {
                obj['holdAutoOrderBeforeShipmentMinutes'] = ApiClient.convertToType(data['holdAutoOrderBeforeShipmentMinutes'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('no_customer_direct_shipments')) {
                obj['no_customer_direct_shipments'] = ApiClient.convertToType(data['no_customer_direct_shipments'], 'Boolean');
            }
            if (data.hasOwnProperty('no_split_shipment')) {
                obj['no_split_shipment'] = ApiClient.convertToType(data['no_split_shipment'], 'Boolean');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('process_days')) {
                obj['process_days'] = ApiClient.convertToType(data['process_days'], 'Number');
            }
            if (data.hasOwnProperty('process_inventory_start_time')) {
                obj['process_inventory_start_time'] = ApiClient.convertToType(data['process_inventory_start_time'], 'String');
            }
            if (data.hasOwnProperty('process_inventory_stop_time')) {
                obj['process_inventory_stop_time'] = ApiClient.convertToType(data['process_inventory_stop_time'], 'String');
            }
            if (data.hasOwnProperty('require_asn')) {
                obj['require_asn'] = ApiClient.convertToType(data['require_asn'], 'Boolean');
            }
            if (data.hasOwnProperty('send_kit_instead_of_components')) {
                obj['send_kit_instead_of_components'] = ApiClient.convertToType(data['send_kit_instead_of_components'], 'Boolean');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_friday')) {
                obj['shipment_cutoff_time_friday'] = ApiClient.convertToType(data['shipment_cutoff_time_friday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_monday')) {
                obj['shipment_cutoff_time_monday'] = ApiClient.convertToType(data['shipment_cutoff_time_monday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_saturday')) {
                obj['shipment_cutoff_time_saturday'] = ApiClient.convertToType(data['shipment_cutoff_time_saturday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_sunday')) {
                obj['shipment_cutoff_time_sunday'] = ApiClient.convertToType(data['shipment_cutoff_time_sunday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_thursday')) {
                obj['shipment_cutoff_time_thursday'] = ApiClient.convertToType(data['shipment_cutoff_time_thursday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_tuesday')) {
                obj['shipment_cutoff_time_tuesday'] = ApiClient.convertToType(data['shipment_cutoff_time_tuesday'], 'String');
            }
            if (data.hasOwnProperty('shipment_cutoff_time_wednesday')) {
                obj['shipment_cutoff_time_wednesday'] = ApiClient.convertToType(data['shipment_cutoff_time_wednesday'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('transmit_blank_costs')) {
                obj['transmit_blank_costs'] = ApiClient.convertToType(data['transmit_blank_costs'], 'Boolean');
            }
            if (data.hasOwnProperty('transport')) {
                obj['transport'] = ApiClient.convertToType(data['transport'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address line 1 of the distribution center
 * @member {String} address1
 */
DistributionCenter.prototype['address1'] = undefined;

/**
 * Address line 2 of the distribution center
 * @member {String} address2
 */
DistributionCenter.prototype['address2'] = undefined;

/**
 * City of the distribution center
 * @member {String} city
 */
DistributionCenter.prototype['city'] = undefined;

/**
 * Unique code for this distribution center
 * @member {String} code
 */
DistributionCenter.prototype['code'] = undefined;

/**
 * Country code of the distribution center
 * @member {String} country_code
 */
DistributionCenter.prototype['country_code'] = undefined;

/**
 * True if this is the default distribution center on the account
 * @member {Boolean} default_center
 */
DistributionCenter.prototype['default_center'] = undefined;

/**
 * True if this distribution center handles all new items by default
 * @member {Boolean} default_handles_all_items
 */
DistributionCenter.prototype['default_handles_all_items'] = undefined;

/**
 * Distribution center object identifier
 * @member {Number} distribution_center_oid
 */
DistributionCenter.prototype['distribution_center_oid'] = undefined;

/**
 * DUNS number assigned to this distribution center (EDI)
 * @member {String} duns
 */
DistributionCenter.prototype['duns'] = undefined;

/**
 * Estimate shipments for this distribution center as if they came from the other distribution center
 * @member {Number} estimate_from_distribution_center_oid
 */
DistributionCenter.prototype['estimate_from_distribution_center_oid'] = undefined;

/**
 * Password associated with the virtual FTP
 * @member {String} ftp_password
 */
DistributionCenter.prototype['ftp_password'] = undefined;

/**
 * The number of minutes to hold a shipment
 * @member {Number} hold_before_shipment_minutes
 */
DistributionCenter.prototype['hold_before_shipment_minutes'] = undefined;

/**
 * True if the shipment should be held before transmission and require a manual release
 * @member {Boolean} hold_before_transmission
 */
DistributionCenter.prototype['hold_before_transmission'] = undefined;

/**
 * @member {Number} holdAutoOrderBeforeShipmentMinutes
 */
DistributionCenter.prototype['holdAutoOrderBeforeShipmentMinutes'] = undefined;

/**
 * Latitude where the distribution center is located
 * @member {Number} latitude
 */
DistributionCenter.prototype['latitude'] = undefined;

/**
 * Longitude where the distribution center is located
 * @member {Number} longitude
 */
DistributionCenter.prototype['longitude'] = undefined;

/**
 * Name of this distribution center
 * @member {String} name
 */
DistributionCenter.prototype['name'] = undefined;

/**
 * True if this distribution center does not handle customer direct shipments
 * @member {Boolean} no_customer_direct_shipments
 */
DistributionCenter.prototype['no_customer_direct_shipments'] = undefined;

/**
 * True if this distribution center is not allowed to participate in a split shipment.
 * @member {Boolean} no_split_shipment
 */
DistributionCenter.prototype['no_split_shipment'] = undefined;

/**
 * Postal code of the distribution center
 * @member {String} postal_code
 */
DistributionCenter.prototype['postal_code'] = undefined;

/**
 * The number of processing days required before an order ships
 * @member {Number} process_days
 */
DistributionCenter.prototype['process_days'] = undefined;

/**
 * The time (EST) after which inventory updates will be processed
 * @member {String} process_inventory_start_time
 */
DistributionCenter.prototype['process_inventory_start_time'] = undefined;

/**
 * The time (EST) before which inventory updates will be processed
 * @member {String} process_inventory_stop_time
 */
DistributionCenter.prototype['process_inventory_stop_time'] = undefined;

/**
 * True if ASNs are required for this distribution center (EDI)
 * @member {Boolean} require_asn
 */
DistributionCenter.prototype['require_asn'] = undefined;

/**
 * True if we should send the kit instead of the components
 * @member {Boolean} send_kit_instead_of_components
 */
DistributionCenter.prototype['send_kit_instead_of_components'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Friday
 * @member {String} shipment_cutoff_time_friday
 */
DistributionCenter.prototype['shipment_cutoff_time_friday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Monday
 * @member {String} shipment_cutoff_time_monday
 */
DistributionCenter.prototype['shipment_cutoff_time_monday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Saturday
 * @member {String} shipment_cutoff_time_saturday
 */
DistributionCenter.prototype['shipment_cutoff_time_saturday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Sunday
 * @member {String} shipment_cutoff_time_sunday
 */
DistributionCenter.prototype['shipment_cutoff_time_sunday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Thursday
 * @member {String} shipment_cutoff_time_thursday
 */
DistributionCenter.prototype['shipment_cutoff_time_thursday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Tuesday
 * @member {String} shipment_cutoff_time_tuesday
 */
DistributionCenter.prototype['shipment_cutoff_time_tuesday'] = undefined;

/**
 * The time (EST) after which shipments will not be processed on Wednesday
 * @member {String} shipment_cutoff_time_wednesday
 */
DistributionCenter.prototype['shipment_cutoff_time_wednesday'] = undefined;

/**
 * State of the distribution center
 * @member {String} state
 */
DistributionCenter.prototype['state'] = undefined;

/**
 * True if monetary amounts should be zeroed before transmission
 * @member {Boolean} transmit_blank_costs
 */
DistributionCenter.prototype['transmit_blank_costs'] = undefined;

/**
 * Transport mechanism for this distribution center
 * @member {String} transport
 */
DistributionCenter.prototype['transport'] = undefined;






export default DistributionCenter;

