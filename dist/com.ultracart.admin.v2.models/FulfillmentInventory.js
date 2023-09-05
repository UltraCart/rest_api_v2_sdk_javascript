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
 * The FulfillmentInventory model module.
 * @module com.ultracart.admin.v2.models/FulfillmentInventory
 * @version 4.0.173
 */
var FulfillmentInventory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FulfillmentInventory</code>.
   * @alias module:com.ultracart.admin.v2.models/FulfillmentInventory
   */
  function FulfillmentInventory() {
    _classCallCheck(this, FulfillmentInventory);

    FulfillmentInventory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FulfillmentInventory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FulfillmentInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FulfillmentInventory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FulfillmentInventory} The populated <code>FulfillmentInventory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FulfillmentInventory();

        if (data.hasOwnProperty('itemId')) {
          obj['itemId'] = _ApiClient["default"].convertToType(data['itemId'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FulfillmentInventory;
}();
/**
 * @member {String} itemId
 */


FulfillmentInventory.prototype['itemId'] = undefined;
/**
 * @member {Number} quantity
 */

FulfillmentInventory.prototype['quantity'] = undefined;
var _default = FulfillmentInventory;
exports["default"] = _default;