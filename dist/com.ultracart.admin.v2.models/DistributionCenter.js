"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DistributionCenter model module.
 * @module com.ultracart.admin.v2.models/DistributionCenter
 * @version 4.0.156
 */
var DistributionCenter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DistributionCenter</code>.
   * @alias module:com.ultracart.admin.v2.models/DistributionCenter
   */
  function DistributionCenter() {
    _classCallCheck(this, DistributionCenter);

    DistributionCenter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DistributionCenter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DistributionCenter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/DistributionCenter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/DistributionCenter} The populated <code>DistributionCenter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DistributionCenter();

        if (data.hasOwnProperty('address1')) {
          obj['address1'] = _ApiClient["default"].convertToType(data['address1'], 'String');
        }

        if (data.hasOwnProperty('address2')) {
          obj['address2'] = _ApiClient["default"].convertToType(data['address2'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('default_center')) {
          obj['default_center'] = _ApiClient["default"].convertToType(data['default_center'], 'Boolean');
        }

        if (data.hasOwnProperty('default_handles_all_items')) {
          obj['default_handles_all_items'] = _ApiClient["default"].convertToType(data['default_handles_all_items'], 'Boolean');
        }

        if (data.hasOwnProperty('distribution_center_oid')) {
          obj['distribution_center_oid'] = _ApiClient["default"].convertToType(data['distribution_center_oid'], 'Number');
        }

        if (data.hasOwnProperty('duns')) {
          obj['duns'] = _ApiClient["default"].convertToType(data['duns'], 'String');
        }

        if (data.hasOwnProperty('estimate_from_distribution_center_oid')) {
          obj['estimate_from_distribution_center_oid'] = _ApiClient["default"].convertToType(data['estimate_from_distribution_center_oid'], 'Number');
        }

        if (data.hasOwnProperty('ftp_password')) {
          obj['ftp_password'] = _ApiClient["default"].convertToType(data['ftp_password'], 'String');
        }

        if (data.hasOwnProperty('hold_before_shipment_minutes')) {
          obj['hold_before_shipment_minutes'] = _ApiClient["default"].convertToType(data['hold_before_shipment_minutes'], 'Number');
        }

        if (data.hasOwnProperty('hold_before_transmission')) {
          obj['hold_before_transmission'] = _ApiClient["default"].convertToType(data['hold_before_transmission'], 'Boolean');
        }

        if (data.hasOwnProperty('holdAutoOrderBeforeShipmentMinutes')) {
          obj['holdAutoOrderBeforeShipmentMinutes'] = _ApiClient["default"].convertToType(data['holdAutoOrderBeforeShipmentMinutes'], 'Number');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('no_customer_direct_shipments')) {
          obj['no_customer_direct_shipments'] = _ApiClient["default"].convertToType(data['no_customer_direct_shipments'], 'Boolean');
        }

        if (data.hasOwnProperty('no_split_shipment')) {
          obj['no_split_shipment'] = _ApiClient["default"].convertToType(data['no_split_shipment'], 'Boolean');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('process_days')) {
          obj['process_days'] = _ApiClient["default"].convertToType(data['process_days'], 'Number');
        }

        if (data.hasOwnProperty('process_inventory_start_time')) {
          obj['process_inventory_start_time'] = _ApiClient["default"].convertToType(data['process_inventory_start_time'], 'String');
        }

        if (data.hasOwnProperty('process_inventory_stop_time')) {
          obj['process_inventory_stop_time'] = _ApiClient["default"].convertToType(data['process_inventory_stop_time'], 'String');
        }

        if (data.hasOwnProperty('require_asn')) {
          obj['require_asn'] = _ApiClient["default"].convertToType(data['require_asn'], 'Boolean');
        }

        if (data.hasOwnProperty('send_kit_instead_of_components')) {
          obj['send_kit_instead_of_components'] = _ApiClient["default"].convertToType(data['send_kit_instead_of_components'], 'Boolean');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_friday')) {
          obj['shipment_cutoff_time_friday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_friday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_monday')) {
          obj['shipment_cutoff_time_monday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_monday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_saturday')) {
          obj['shipment_cutoff_time_saturday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_saturday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_sunday')) {
          obj['shipment_cutoff_time_sunday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_sunday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_thursday')) {
          obj['shipment_cutoff_time_thursday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_thursday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_tuesday')) {
          obj['shipment_cutoff_time_tuesday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_tuesday'], 'String');
        }

        if (data.hasOwnProperty('shipment_cutoff_time_wednesday')) {
          obj['shipment_cutoff_time_wednesday'] = _ApiClient["default"].convertToType(data['shipment_cutoff_time_wednesday'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('transmit_blank_costs')) {
          obj['transmit_blank_costs'] = _ApiClient["default"].convertToType(data['transmit_blank_costs'], 'Boolean');
        }

        if (data.hasOwnProperty('transport')) {
          obj['transport'] = _ApiClient["default"].convertToType(data['transport'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DistributionCenter;
}();
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
var _default = DistributionCenter;
exports["default"] = _default;