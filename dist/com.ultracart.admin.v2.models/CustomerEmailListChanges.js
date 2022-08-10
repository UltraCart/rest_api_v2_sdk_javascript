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
 * The CustomerEmailListChanges model module.
 * @module com.ultracart.admin.v2.models/CustomerEmailListChanges
 * @version 4.0.52-RC
 */
var CustomerEmailListChanges = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerEmailListChanges</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEmailListChanges
   */
  function CustomerEmailListChanges() {
    _classCallCheck(this, CustomerEmailListChanges);

    CustomerEmailListChanges.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerEmailListChanges, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerEmailListChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} The populated <code>CustomerEmailListChanges</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerEmailListChanges();

        if (data.hasOwnProperty('add_to_lists')) {
          obj['add_to_lists'] = _ApiClient["default"].convertToType(data['add_to_lists'], ['String']);
        }

        if (data.hasOwnProperty('remove_from_lists')) {
          obj['remove_from_lists'] = _ApiClient["default"].convertToType(data['remove_from_lists'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CustomerEmailListChanges;
}();
/**
 * Add this customer to these email lists
 * @member {Array.<String>} add_to_lists
 */


CustomerEmailListChanges.prototype['add_to_lists'] = undefined;
/**
 * Remove this customer from these email lists
 * @member {Array.<String>} remove_from_lists
 */

CustomerEmailListChanges.prototype['remove_from_lists'] = undefined;
var _default = CustomerEmailListChanges;
exports["default"] = _default;