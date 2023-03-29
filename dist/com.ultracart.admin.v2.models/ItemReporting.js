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
 * The ItemReporting model module.
 * @module com.ultracart.admin.v2.models/ItemReporting
 * @version 4.0.143
 */
var ItemReporting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemReporting</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReporting
   */
  function ItemReporting() {
    _classCallCheck(this, ItemReporting);

    ItemReporting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemReporting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemReporting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemReporting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemReporting} The populated <code>ItemReporting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemReporting();

        if (data.hasOwnProperty('report_as_upsell')) {
          obj['report_as_upsell'] = _ApiClient["default"].convertToType(data['report_as_upsell'], 'Boolean');
        }

        if (data.hasOwnProperty('report_pickable_quantities')) {
          obj['report_pickable_quantities'] = _ApiClient["default"].convertToType(data['report_pickable_quantities'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ItemReporting;
}();
/**
 * Report as an upsell
 * @member {Boolean} report_as_upsell
 */


ItemReporting.prototype['report_as_upsell'] = undefined;
/**
 * Report pickable quantities
 * @member {Array.<Number>} report_pickable_quantities
 */

ItemReporting.prototype['report_pickable_quantities'] = undefined;
var _default = ItemReporting;
exports["default"] = _default;