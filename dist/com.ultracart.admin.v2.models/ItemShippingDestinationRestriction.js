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
 * The ItemShippingDestinationRestriction model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDestinationRestriction
 * @version 4.0.132
 */
var ItemShippingDestinationRestriction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingDestinationRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction
   */
  function ItemShippingDestinationRestriction() {
    _classCallCheck(this, ItemShippingDestinationRestriction);

    ItemShippingDestinationRestriction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingDestinationRestriction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingDestinationRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction} The populated <code>ItemShippingDestinationRestriction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingDestinationRestriction();

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('validity')) {
          obj['validity'] = _ApiClient["default"].convertToType(data['validity'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingDestinationRestriction;
}();
/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */


ItemShippingDestinationRestriction.prototype['country_code'] = undefined;
/**
 * State
 * @member {String} state
 */

ItemShippingDestinationRestriction.prototype['state'] = undefined;
/**
 * Validity
 * @member {module:com.ultracart.admin.v2.models/ItemShippingDestinationRestriction.ValidityEnum} validity
 */

ItemShippingDestinationRestriction.prototype['validity'] = undefined;
/**
 * Allowed values for the <code>validity</code> property.
 * @enum {String}
 * @readonly
 */

ItemShippingDestinationRestriction['ValidityEnum'] = {
  /**
   * value: "valid only for"
   * @const
   */
  "valid only for": "valid only for",

  /**
   * value: "invalid for"
   * @const
   */
  "invalid for": "invalid for"
};
var _default = ItemShippingDestinationRestriction;
exports["default"] = _default;