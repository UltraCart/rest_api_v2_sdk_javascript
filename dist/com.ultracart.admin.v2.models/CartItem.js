"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItemAttribute = _interopRequireDefault(require("./CartItemAttribute"));

var _CartItemMultimedia = _interopRequireDefault(require("./CartItemMultimedia"));

var _CartItemOption = _interopRequireDefault(require("./CartItemOption"));

var _CartItemPhysical = _interopRequireDefault(require("./CartItemPhysical"));

var _CartItemVariationSelection = _interopRequireDefault(require("./CartItemVariationSelection"));

var _CartKitComponentOption = _interopRequireDefault(require("./CartKitComponentOption"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartItem model module.
 * @module com.ultracart.admin.v2.models/CartItem
 * @version 4.0.99-RC
 */
var CartItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItem</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItem
   */
  function CartItem() {
    _classCallCheck(this, CartItem);

    CartItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItem} The populated <code>CartItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItem();

        if (data.hasOwnProperty('arbitrary_unit_cost')) {
          obj['arbitrary_unit_cost'] = _Currency["default"].constructFromObject(data['arbitrary_unit_cost']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_CartItemAttribute["default"]]);
        }

        if (data.hasOwnProperty('auto_order_schedule')) {
          obj['auto_order_schedule'] = _ApiClient["default"].convertToType(data['auto_order_schedule'], 'String');
        }

        if (data.hasOwnProperty('default_image_url')) {
          obj['default_image_url'] = _ApiClient["default"].convertToType(data['default_image_url'], 'String');
        }

        if (data.hasOwnProperty('default_thumbnail_url')) {
          obj['default_thumbnail_url'] = _ApiClient["default"].convertToType(data['default_thumbnail_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _Currency["default"].constructFromObject(data['discount']);
        }

        if (data.hasOwnProperty('extended_description')) {
          obj['extended_description'] = _ApiClient["default"].convertToType(data['extended_description'], 'String');
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('item_oid')) {
          obj['item_oid'] = _ApiClient["default"].convertToType(data['item_oid'], 'Number');
        }

        if (data.hasOwnProperty('kit')) {
          obj['kit'] = _ApiClient["default"].convertToType(data['kit'], 'Boolean');
        }

        if (data.hasOwnProperty('kit_component_options')) {
          obj['kit_component_options'] = _ApiClient["default"].convertToType(data['kit_component_options'], [_CartKitComponentOption["default"]]);
        }

        if (data.hasOwnProperty('manufacturer_suggested_retail_price')) {
          obj['manufacturer_suggested_retail_price'] = _Currency["default"].constructFromObject(data['manufacturer_suggested_retail_price']);
        }

        if (data.hasOwnProperty('maximum_quantity')) {
          obj['maximum_quantity'] = _ApiClient["default"].convertToType(data['maximum_quantity'], 'Number');
        }

        if (data.hasOwnProperty('minimum_quantity')) {
          obj['minimum_quantity'] = _ApiClient["default"].convertToType(data['minimum_quantity'], 'Number');
        }

        if (data.hasOwnProperty('multimedia')) {
          obj['multimedia'] = _ApiClient["default"].convertToType(data['multimedia'], [_CartItemMultimedia["default"]]);
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_CartItemOption["default"]]);
        }

        if (data.hasOwnProperty('phsyical')) {
          obj['phsyical'] = _CartItemPhysical["default"].constructFromObject(data['phsyical']);
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('preorder')) {
          obj['preorder'] = _ApiClient["default"].convertToType(data['preorder'], 'Boolean');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('schedules')) {
          obj['schedules'] = _ApiClient["default"].convertToType(data['schedules'], ['String']);
        }

        if (data.hasOwnProperty('total_cost')) {
          obj['total_cost'] = _Currency["default"].constructFromObject(data['total_cost']);
        }

        if (data.hasOwnProperty('total_cost_with_discount')) {
          obj['total_cost_with_discount'] = _Currency["default"].constructFromObject(data['total_cost_with_discount']);
        }

        if (data.hasOwnProperty('unit_cost')) {
          obj['unit_cost'] = _Currency["default"].constructFromObject(data['unit_cost']);
        }

        if (data.hasOwnProperty('unit_cost_with_discount')) {
          obj['unit_cost_with_discount'] = _Currency["default"].constructFromObject(data['unit_cost_with_discount']);
        }

        if (data.hasOwnProperty('upsell')) {
          obj['upsell'] = _ApiClient["default"].convertToType(data['upsell'], 'Boolean');
        }

        if (data.hasOwnProperty('variations')) {
          obj['variations'] = _ApiClient["default"].convertToType(data['variations'], [_CartItemVariationSelection["default"]]);
        }

        if (data.hasOwnProperty('view_url')) {
          obj['view_url'] = _ApiClient["default"].convertToType(data['view_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItem;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_unit_cost
 */


CartItem.prototype['arbitrary_unit_cost'] = undefined;
/**
 * Attributes
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemAttribute>} attributes
 */

CartItem.prototype['attributes'] = undefined;
/**
 * Auto order schedule the customer selected
 * @member {String} auto_order_schedule
 */

CartItem.prototype['auto_order_schedule'] = undefined;
/**
 * URL to the default multimedia image
 * @member {String} default_image_url
 */

CartItem.prototype['default_image_url'] = undefined;
/**
 * URL to the default multimedia thumbnail
 * @member {String} default_thumbnail_url
 */

CartItem.prototype['default_thumbnail_url'] = undefined;
/**
 * Description of the item
 * @member {String} description
 */

CartItem.prototype['description'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} discount
 */

CartItem.prototype['discount'] = undefined;
/**
 * Extended description of the item
 * @member {String} extended_description
 */

CartItem.prototype['extended_description'] = undefined;
/**
 * Item ID
 * @member {String} item_id
 */

CartItem.prototype['item_id'] = undefined;
/**
 * Item object identifier
 * @member {Number} item_oid
 */

CartItem.prototype['item_oid'] = undefined;
/**
 * True if this item is a kit
 * @member {Boolean} kit
 */

CartItem.prototype['kit'] = undefined;
/**
 * Options associated with the kit components
 * @member {Array.<module:com.ultracart.admin.v2.models/CartKitComponentOption>} kit_component_options
 */

CartItem.prototype['kit_component_options'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} manufacturer_suggested_retail_price
 */

CartItem.prototype['manufacturer_suggested_retail_price'] = undefined;
/**
 * Maximum quantity the customer can purchase
 * @member {Number} maximum_quantity
 */

CartItem.prototype['maximum_quantity'] = undefined;
/**
 * Minimum quantity the customer can purchase
 * @member {Number} minimum_quantity
 */

CartItem.prototype['minimum_quantity'] = undefined;
/**
 * Multimedia
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemMultimedia>} multimedia
 */

CartItem.prototype['multimedia'] = undefined;
/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemOption>} options
 */

CartItem.prototype['options'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CartItemPhysical} phsyical
 */

CartItem.prototype['phsyical'] = undefined;
/**
 * Position of the item in the cart
 * @member {Number} position
 */

CartItem.prototype['position'] = undefined;
/**
 * True if this item is on pre-order
 * @member {Boolean} preorder
 */

CartItem.prototype['preorder'] = undefined;
/**
 * quantity
 * @member {Number} quantity
 */

CartItem.prototype['quantity'] = undefined;
/**
 * Customer selectable auto order schedules
 * @member {Array.<String>} schedules
 */

CartItem.prototype['schedules'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_cost
 */

CartItem.prototype['total_cost'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_cost_with_discount
 */

CartItem.prototype['total_cost_with_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost
 */

CartItem.prototype['unit_cost'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost_with_discount
 */

CartItem.prototype['unit_cost_with_discount'] = undefined;
/**
 * True if this item was added to the cart as part of an upsell
 * @member {Boolean} upsell
 */

CartItem.prototype['upsell'] = undefined;
/**
 * Variations
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemVariationSelection>} variations
 */

CartItem.prototype['variations'] = undefined;
/**
 * URL to view the product on the site
 * @member {String} view_url
 */

CartItem.prototype['view_url'] = undefined;
var _default = CartItem;
exports["default"] = _default;