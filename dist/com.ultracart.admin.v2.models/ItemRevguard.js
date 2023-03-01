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
 * The ItemRevguard model module.
 * @module com.ultracart.admin.v2.models/ItemRevguard
 * @version 4.0.137
 */
var ItemRevguard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemRevguard</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRevguard
   */
  function ItemRevguard() {
    _classCallCheck(this, ItemRevguard);

    ItemRevguard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemRevguard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemRevguard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRevguard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRevguard} The populated <code>ItemRevguard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemRevguard();

        if (data.hasOwnProperty('revguard_canceled_csr_prompt_group')) {
          obj['revguard_canceled_csr_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_canceled_csr_prompt_group'], 'Number');
        }

        if (data.hasOwnProperty('revguard_canceled_ivr_prompt_group')) {
          obj['revguard_canceled_ivr_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_canceled_ivr_prompt_group'], 'Number');
        }

        if (data.hasOwnProperty('revguard_canceled_web_prompt_group')) {
          obj['revguard_canceled_web_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_canceled_web_prompt_group'], 'Number');
        }

        if (data.hasOwnProperty('revguard_client_brand')) {
          obj['revguard_client_brand'] = _ApiClient["default"].convertToType(data['revguard_client_brand'], 'Number');
        }

        if (data.hasOwnProperty('revguard_csr_prompt_group')) {
          obj['revguard_csr_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_csr_prompt_group'], 'Number');
        }

        if (data.hasOwnProperty('revguard_ivr_prompt_group')) {
          obj['revguard_ivr_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_ivr_prompt_group'], 'Number');
        }

        if (data.hasOwnProperty('revguard_web_prompt_group')) {
          obj['revguard_web_prompt_group'] = _ApiClient["default"].convertToType(data['revguard_web_prompt_group'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemRevguard;
}();
/**
 * Canceled CSR prompt group
 * @member {Number} revguard_canceled_csr_prompt_group
 */


ItemRevguard.prototype['revguard_canceled_csr_prompt_group'] = undefined;
/**
 * IVR prompt group
 * @member {Number} revguard_canceled_ivr_prompt_group
 */

ItemRevguard.prototype['revguard_canceled_ivr_prompt_group'] = undefined;
/**
 * Canceled web prompt group
 * @member {Number} revguard_canceled_web_prompt_group
 */

ItemRevguard.prototype['revguard_canceled_web_prompt_group'] = undefined;
/**
 * Client brand
 * @member {Number} revguard_client_brand
 */

ItemRevguard.prototype['revguard_client_brand'] = undefined;
/**
 * CSR prompt group
 * @member {Number} revguard_csr_prompt_group
 */

ItemRevguard.prototype['revguard_csr_prompt_group'] = undefined;
/**
 * IVR prompt group
 * @member {Number} revguard_ivr_prompt_group
 */

ItemRevguard.prototype['revguard_ivr_prompt_group'] = undefined;
/**
 * Web prompt group
 * @member {Number} revguard_web_prompt_group
 */

ItemRevguard.prototype['revguard_web_prompt_group'] = undefined;
var _default = ItemRevguard;
exports["default"] = _default;