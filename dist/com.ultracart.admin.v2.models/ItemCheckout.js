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
 * The ItemCheckout model module.
 * @module com.ultracart.admin.v2.models/ItemCheckout
 * @version 4.0.110-RC
 */
var ItemCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemCheckout
   */
  function ItemCheckout() {
    _classCallCheck(this, ItemCheckout);

    ItemCheckout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemCheckout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemCheckout} The populated <code>ItemCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemCheckout();

        if (data.hasOwnProperty('suppress_buysafe')) {
          obj['suppress_buysafe'] = _ApiClient["default"].convertToType(data['suppress_buysafe'], 'Boolean');
        }

        if (data.hasOwnProperty('terms')) {
          obj['terms'] = _ApiClient["default"].convertToType(data['terms'], 'String');
        }

        if (data.hasOwnProperty('terms_if_auto_order')) {
          obj['terms_if_auto_order'] = _ApiClient["default"].convertToType(data['terms_if_auto_order'], 'Boolean');
        }

        if (data.hasOwnProperty('terms_translated_text_instance_oid')) {
          obj['terms_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['terms_translated_text_instance_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemCheckout;
}();
/**
 * True to suppress buySAFE (deprecated)
 * @member {Boolean} suppress_buysafe
 */


ItemCheckout.prototype['suppress_buysafe'] = undefined;
/**
 * Terms for purchasing this item
 * @member {String} terms
 */

ItemCheckout.prototype['terms'] = undefined;
/**
 * Terms only apply if the item is on auto order
 * @member {Boolean} terms_if_auto_order
 */

ItemCheckout.prototype['terms_if_auto_order'] = undefined;
/**
 * Terms translated text instance identifier
 * @member {Number} terms_translated_text_instance_oid
 */

ItemCheckout.prototype['terms_translated_text_instance_oid'] = undefined;
var _default = ItemCheckout;
exports["default"] = _default;