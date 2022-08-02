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
 * The ItemShippingPackageRequirement model module.
 * @module com.ultracart.admin.v2.models/ItemShippingPackageRequirement
 * @version 4.0.47-RC
 */
var ItemShippingPackageRequirement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemShippingPackageRequirement</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement
   */
  function ItemShippingPackageRequirement() {
    _classCallCheck(this, ItemShippingPackageRequirement);

    ItemShippingPackageRequirement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemShippingPackageRequirement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemShippingPackageRequirement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} The populated <code>ItemShippingPackageRequirement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemShippingPackageRequirement();

        if (data.hasOwnProperty('package_name')) {
          obj['package_name'] = _ApiClient["default"].convertToType(data['package_name'], 'String');
        }

        if (data.hasOwnProperty('package_oid')) {
          obj['package_oid'] = _ApiClient["default"].convertToType(data['package_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemShippingPackageRequirement;
}();
/**
 * Package name
 * @member {String} package_name
 */


ItemShippingPackageRequirement.prototype['package_name'] = undefined;
/**
 * Package object identifier
 * @member {Number} package_oid
 */

ItemShippingPackageRequirement.prototype['package_oid'] = undefined;
var _default = ItemShippingPackageRequirement;
exports["default"] = _default;