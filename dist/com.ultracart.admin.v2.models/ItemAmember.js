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
 * The ItemAmember model module.
 * @module com.ultracart.admin.v2.models/ItemAmember
 * @version 4.0.168
 */
var ItemAmember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemAmember</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAmember
   */
  function ItemAmember() {
    _classCallCheck(this, ItemAmember);

    ItemAmember.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemAmember, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemAmember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAmember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAmember} The populated <code>ItemAmember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemAmember();

        if (data.hasOwnProperty('amember_payment_duration_days')) {
          obj['amember_payment_duration_days'] = _ApiClient["default"].convertToType(data['amember_payment_duration_days'], 'Number');
        }

        if (data.hasOwnProperty('amember_product_id')) {
          obj['amember_product_id'] = _ApiClient["default"].convertToType(data['amember_product_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemAmember;
}();
/**
 * The number of days that the customer should be given access to the item
 * @member {Number} amember_payment_duration_days
 */


ItemAmember.prototype['amember_payment_duration_days'] = undefined;
/**
 * A-member product id give customer access to when they purchase this item
 * @member {String} amember_product_id
 */

ItemAmember.prototype['amember_product_id'] = undefined;
var _default = ItemAmember;
exports["default"] = _default;