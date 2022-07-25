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
 * The ItemChargebackAddendum model module.
 * @module com.ultracart.admin.v2.models/ItemChargebackAddendum
 * @version 4.0.39-RC
 */
var ItemChargebackAddendum = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemChargebackAddendum</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChargebackAddendum
   */
  function ItemChargebackAddendum() {
    _classCallCheck(this, ItemChargebackAddendum);

    ItemChargebackAddendum.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemChargebackAddendum, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemChargebackAddendum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} The populated <code>ItemChargebackAddendum</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemChargebackAddendum();

        if (data.hasOwnProperty('chargeback_addendum_oid')) {
          obj['chargeback_addendum_oid'] = _ApiClient["default"].convertToType(data['chargeback_addendum_oid'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemChargebackAddendum;
}();
/**
 * Chargeback addendum object identifier
 * @member {Number} chargeback_addendum_oid
 */


ItemChargebackAddendum.prototype['chargeback_addendum_oid'] = undefined;
/**
 * Description
 * @member {String} description
 */

ItemChargebackAddendum.prototype['description'] = undefined;
/**
 * Size of the file
 * @member {Number} file_size
 */

ItemChargebackAddendum.prototype['file_size'] = undefined;
/**
 * Number of pages
 * @member {Number} pages
 */

ItemChargebackAddendum.prototype['pages'] = undefined;
var _default = ItemChargebackAddendum;
exports["default"] = _default;