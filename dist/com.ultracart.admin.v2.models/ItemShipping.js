"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Distance = _interopRequireDefault(require("./Distance"));

var _ItemShippingCase = _interopRequireDefault(require("./ItemShippingCase"));

var _ItemShippingDestinationMarkup = _interopRequireDefault(require("./ItemShippingDestinationMarkup"));

var _ItemShippingDestinationRestriction = _interopRequireDefault(require("./ItemShippingDestinationRestriction"));

var _ItemShippingDistributionCenter = _interopRequireDefault(require("./ItemShippingDistributionCenter"));

var _ItemShippingMethod = _interopRequireDefault(require("./ItemShippingMethod"));

var _ItemShippingPackageRequirement = _interopRequireDefault(require("./ItemShippingPackageRequirement"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemShipping model module.
 * @module com.ultracart.admin.v2.models/ItemShipping
 * @version 4.0.55-RC
 */
var ItemShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShipping
   */
  function ItemShipping() {
    _classCallCheck(this, ItemShipping);

    ItemShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShipping} The populated <code>ItemShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShipping();

        if (data.hasOwnProperty('allow_back_order')) {
          obj['allow_back_order'] = _ApiClient["default"].convertToType(data['allow_back_order'], 'Boolean');
        }

        if (data.hasOwnProperty('amazon_fba')) {
          obj['amazon_fba'] = _ApiClient["default"].convertToType(data['amazon_fba'], 'Boolean');
        }

        if (data.hasOwnProperty('case_inner_packs')) {
          obj['case_inner_packs'] = _ApiClient["default"].convertToType(data['case_inner_packs'], 'Number');
        }

        if (data.hasOwnProperty('case_units')) {
          obj['case_units'] = _ApiClient["default"].convertToType(data['case_units'], 'Number');
        }

        if (data.hasOwnProperty('cases')) {
          obj['cases'] = _ApiClient["default"].convertToType(data['cases'], [_ItemShippingCase["default"]]);
        }

        if (data.hasOwnProperty('collect_serial_numbers')) {
          obj['collect_serial_numbers'] = _ApiClient["default"].convertToType(data['collect_serial_numbers'], 'Boolean');
        }

        if (data.hasOwnProperty('country_code_of_origin')) {
          obj['country_code_of_origin'] = _ApiClient["default"].convertToType(data['country_code_of_origin'], 'String');
        }

        if (data.hasOwnProperty('customs_description')) {
          obj['customs_description'] = _ApiClient["default"].convertToType(data['customs_description'], 'String');
        }

        if (data.hasOwnProperty('customs_value')) {
          obj['customs_value'] = _ApiClient["default"].convertToType(data['customs_value'], 'Number');
        }

        if (data.hasOwnProperty('delivery_on_friday')) {
          obj['delivery_on_friday'] = _ApiClient["default"].convertToType(data['delivery_on_friday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_monday')) {
          obj['delivery_on_monday'] = _ApiClient["default"].convertToType(data['delivery_on_monday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_saturday')) {
          obj['delivery_on_saturday'] = _ApiClient["default"].convertToType(data['delivery_on_saturday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_sunday')) {
          obj['delivery_on_sunday'] = _ApiClient["default"].convertToType(data['delivery_on_sunday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_thursday')) {
          obj['delivery_on_thursday'] = _ApiClient["default"].convertToType(data['delivery_on_thursday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_tuesday')) {
          obj['delivery_on_tuesday'] = _ApiClient["default"].convertToType(data['delivery_on_tuesday'], 'Boolean');
        }

        if (data.hasOwnProperty('delivery_on_wednesday')) {
          obj['delivery_on_wednesday'] = _ApiClient["default"].convertToType(data['delivery_on_wednesday'], 'Boolean');
        }

        if (data.hasOwnProperty('destination_markups')) {
          obj['destination_markups'] = _ApiClient["default"].convertToType(data['destination_markups'], [_ItemShippingDestinationMarkup["default"]]);
        }

        if (data.hasOwnProperty('destination_restrictions')) {
          obj['destination_restrictions'] = _ApiClient["default"].convertToType(data['destination_restrictions'], [_ItemShippingDestinationRestriction["default"]]);
        }

        if (data.hasOwnProperty('distribution_centers')) {
          obj['distribution_centers'] = _ApiClient["default"].convertToType(data['distribution_centers'], [_ItemShippingDistributionCenter["default"]]);
        }

        if (data.hasOwnProperty('eta')) {
          obj['eta'] = _ApiClient["default"].convertToType(data['eta'], 'String');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('freight_class')) {
          obj['freight_class'] = _ApiClient["default"].convertToType(data['freight_class'], 'String');
        }

        if (data.hasOwnProperty('hazmat')) {
          obj['hazmat'] = _ApiClient["default"].convertToType(data['hazmat'], 'Boolean');
        }

        if (data.hasOwnProperty('made_to_order')) {
          obj['made_to_order'] = _ApiClient["default"].convertToType(data['made_to_order'], 'Boolean');
        }

        if (data.hasOwnProperty('made_to_order_lead_time')) {
          obj['made_to_order_lead_time'] = _ApiClient["default"].convertToType(data['made_to_order_lead_time'], 'Number');
        }

        if (data.hasOwnProperty('max_days_time_in_transit')) {
          obj['max_days_time_in_transit'] = _ApiClient["default"].convertToType(data['max_days_time_in_transit'], 'Number');
        }

        if (data.hasOwnProperty('methods')) {
          obj['methods'] = _ApiClient["default"].convertToType(data['methods'], [_ItemShippingMethod["default"]]);
        }

        if (data.hasOwnProperty('no_shipping_discount')) {
          obj['no_shipping_discount'] = _ApiClient["default"].convertToType(data['no_shipping_discount'], 'Boolean');
        }

        if (data.hasOwnProperty('package_requirements')) {
          obj['package_requirements'] = _ApiClient["default"].convertToType(data['package_requirements'], [_ItemShippingPackageRequirement["default"]]);
        }

        if (data.hasOwnProperty('perishable_class_name')) {
          obj['perishable_class_name'] = _ApiClient["default"].convertToType(data['perishable_class_name'], 'String');
        }

        if (data.hasOwnProperty('perishable_class_oid')) {
          obj['perishable_class_oid'] = _ApiClient["default"].convertToType(data['perishable_class_oid'], 'Number');
        }

        if (data.hasOwnProperty('preorder')) {
          obj['preorder'] = _ApiClient["default"].convertToType(data['preorder'], 'Boolean');
        }

        if (data.hasOwnProperty('require_delivery_date')) {
          obj['require_delivery_date'] = _ApiClient["default"].convertToType(data['require_delivery_date'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_friday')) {
          obj['restrict_shipment_on_friday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_friday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_monday')) {
          obj['restrict_shipment_on_monday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_monday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_saturday')) {
          obj['restrict_shipment_on_saturday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_saturday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_sunday')) {
          obj['restrict_shipment_on_sunday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_sunday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_thursday')) {
          obj['restrict_shipment_on_thursday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_thursday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_tuesday')) {
          obj['restrict_shipment_on_tuesday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_tuesday'], 'Boolean');
        }

        if (data.hasOwnProperty('restrict_shipment_on_wednesday')) {
          obj['restrict_shipment_on_wednesday'] = _ApiClient["default"].convertToType(data['restrict_shipment_on_wednesday'], 'Boolean');
        }

        if (data.hasOwnProperty('ship_separately')) {
          obj['ship_separately'] = _ApiClient["default"].convertToType(data['ship_separately'], 'Boolean');
        }

        if (data.hasOwnProperty('ship_separately_additional_weight')) {
          obj['ship_separately_additional_weight'] = _Weight["default"].constructFromObject(data['ship_separately_additional_weight']);
        }

        if (data.hasOwnProperty('ship_separately_height')) {
          obj['ship_separately_height'] = _Distance["default"].constructFromObject(data['ship_separately_height']);
        }

        if (data.hasOwnProperty('ship_separately_length')) {
          obj['ship_separately_length'] = _Distance["default"].constructFromObject(data['ship_separately_length']);
        }

        if (data.hasOwnProperty('ship_separately_package_special_type')) {
          obj['ship_separately_package_special_type'] = _ApiClient["default"].convertToType(data['ship_separately_package_special_type'], 'String');
        }

        if (data.hasOwnProperty('ship_separately_width')) {
          obj['ship_separately_width'] = _Distance["default"].constructFromObject(data['ship_separately_width']);
        }

        if (data.hasOwnProperty('special_product_type')) {
          obj['special_product_type'] = _ApiClient["default"].convertToType(data['special_product_type'], 'String');
        }

        if (data.hasOwnProperty('track_inventory')) {
          obj['track_inventory'] = _ApiClient["default"].convertToType(data['track_inventory'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ItemShipping;
}();
/**
 * Allow back order
 * @member {Boolean} allow_back_order
 */


ItemShipping.prototype['allow_back_order'] = undefined;
/**
 * Fulfillment by Amazon.com
 * @member {Boolean} amazon_fba
 */

ItemShipping.prototype['amazon_fba'] = undefined;
/**
 * Case inner packs
 * @member {Number} case_inner_packs
 */

ItemShipping.prototype['case_inner_packs'] = undefined;
/**
 * Case units
 * @member {Number} case_units
 */

ItemShipping.prototype['case_units'] = undefined;
/**
 * Cases
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingCase>} cases
 */

ItemShipping.prototype['cases'] = undefined;
/**
 * This item is on pre-order
 * @member {Boolean} collect_serial_numbers
 */

ItemShipping.prototype['collect_serial_numbers'] = undefined;
/**
 * Country code of origin for customs forms.  (ISO-3166 two letter code)
 * @member {String} country_code_of_origin
 */

ItemShipping.prototype['country_code_of_origin'] = undefined;
/**
 * Customs description
 * @member {String} customs_description
 */

ItemShipping.prototype['customs_description'] = undefined;
/**
 * Customs value
 * @member {Number} customs_value
 */

ItemShipping.prototype['customs_value'] = undefined;
/**
 * Delivery on Friday
 * @member {Boolean} delivery_on_friday
 */

ItemShipping.prototype['delivery_on_friday'] = undefined;
/**
 * Delivery on Monday
 * @member {Boolean} delivery_on_monday
 */

ItemShipping.prototype['delivery_on_monday'] = undefined;
/**
 * Delivery on Saturday
 * @member {Boolean} delivery_on_saturday
 */

ItemShipping.prototype['delivery_on_saturday'] = undefined;
/**
 * Delivery on Sunday
 * @member {Boolean} delivery_on_sunday
 */

ItemShipping.prototype['delivery_on_sunday'] = undefined;
/**
 * Delivery on Thursday
 * @member {Boolean} delivery_on_thursday
 */

ItemShipping.prototype['delivery_on_thursday'] = undefined;
/**
 * Delivery on Tuesday
 * @member {Boolean} delivery_on_tuesday
 */

ItemShipping.prototype['delivery_on_tuesday'] = undefined;
/**
 * Delivery on Wednesday
 * @member {Boolean} delivery_on_wednesday
 */

ItemShipping.prototype['delivery_on_wednesday'] = undefined;
/**
 * Destination markups
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup>} destination_markups
 */

ItemShipping.prototype['destination_markups'] = undefined;
/**
 * Destination restrictions
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction>} destination_restrictions
 */

ItemShipping.prototype['destination_restrictions'] = undefined;
/**
 * Distribution centers
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter>} distribution_centers
 */

ItemShipping.prototype['distribution_centers'] = undefined;
/**
 * Estimated time of arrival
 * @member {String} eta
 */

ItemShipping.prototype['eta'] = undefined;
/**
 * Qualifies for free shipping
 * @member {Boolean} free_shipping
 */

ItemShipping.prototype['free_shipping'] = undefined;
/**
 * Freight class
 * @member {String} freight_class
 */

ItemShipping.prototype['freight_class'] = undefined;
/**
 * Hazardous material
 * @member {Boolean} hazmat
 */

ItemShipping.prototype['hazmat'] = undefined;
/**
 * True if this item is made to order
 * @member {Boolean} made_to_order
 */

ItemShipping.prototype['made_to_order'] = undefined;
/**
 * Number of days lead time it takes to make the item before ite can ship
 * @member {Number} made_to_order_lead_time
 */

ItemShipping.prototype['made_to_order_lead_time'] = undefined;
/**
 * Maximum days allowed in transit
 * @member {Number} max_days_time_in_transit
 */

ItemShipping.prototype['max_days_time_in_transit'] = undefined;
/**
 * Methods
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingMethod>} methods
 */

ItemShipping.prototype['methods'] = undefined;
/**
 * No shipping discounts
 * @member {Boolean} no_shipping_discount
 */

ItemShipping.prototype['no_shipping_discount'] = undefined;
/**
 * Package requirements
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement>} package_requirements
 */

ItemShipping.prototype['package_requirements'] = undefined;
/**
 * Perishable class name
 * @member {String} perishable_class_name
 */

ItemShipping.prototype['perishable_class_name'] = undefined;
/**
 * Perishable class object identifier
 * @member {Number} perishable_class_oid
 */

ItemShipping.prototype['perishable_class_oid'] = undefined;
/**
 * This item is on pre-order
 * @member {Boolean} preorder
 */

ItemShipping.prototype['preorder'] = undefined;
/**
 * True to require customer to select a delivery date
 * @member {Boolean} require_delivery_date
 */

ItemShipping.prototype['require_delivery_date'] = undefined;
/**
 * Restrict shipment on Friday
 * @member {Boolean} restrict_shipment_on_friday
 */

ItemShipping.prototype['restrict_shipment_on_friday'] = undefined;
/**
 * Restrict shipment on Monday
 * @member {Boolean} restrict_shipment_on_monday
 */

ItemShipping.prototype['restrict_shipment_on_monday'] = undefined;
/**
 * Restrict shipment on Saturday
 * @member {Boolean} restrict_shipment_on_saturday
 */

ItemShipping.prototype['restrict_shipment_on_saturday'] = undefined;
/**
 * Restrict shipment on Sunday
 * @member {Boolean} restrict_shipment_on_sunday
 */

ItemShipping.prototype['restrict_shipment_on_sunday'] = undefined;
/**
 * Restrict shipment on Thursday
 * @member {Boolean} restrict_shipment_on_thursday
 */

ItemShipping.prototype['restrict_shipment_on_thursday'] = undefined;
/**
 * Restrict shipment on Tuesday
 * @member {Boolean} restrict_shipment_on_tuesday
 */

ItemShipping.prototype['restrict_shipment_on_tuesday'] = undefined;
/**
 * Restrict shipment on Wednesday
 * @member {Boolean} restrict_shipment_on_wednesday
 */

ItemShipping.prototype['restrict_shipment_on_wednesday'] = undefined;
/**
 * Ship this item in a separate box
 * @member {Boolean} ship_separately
 */

ItemShipping.prototype['ship_separately'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} ship_separately_additional_weight
 */

ItemShipping.prototype['ship_separately_additional_weight'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_height
 */

ItemShipping.prototype['ship_separately_height'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_length
 */

ItemShipping.prototype['ship_separately_length'] = undefined;
/**
 * Ship separately package special type
 * @member {String} ship_separately_package_special_type
 */

ItemShipping.prototype['ship_separately_package_special_type'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} ship_separately_width
 */

ItemShipping.prototype['ship_separately_width'] = undefined;
/**
 * Special product type (USPS Media Mail)
 * @member {String} special_product_type
 */

ItemShipping.prototype['special_product_type'] = undefined;
/**
 * Track inventory
 * @member {Boolean} track_inventory
 */

ItemShipping.prototype['track_inventory'] = undefined;
var _default = ItemShipping;
exports["default"] = _default;