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
 * The AutoOrderQueryBatch model module.
 * @module com.ultracart.admin.v2.models/AutoOrderQueryBatch
 * @version 4.0.85-RC
 */
var AutoOrderQueryBatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoOrderQueryBatch</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderQueryBatch
   */
  function AutoOrderQueryBatch() {
    _classCallCheck(this, AutoOrderQueryBatch);

    AutoOrderQueryBatch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoOrderQueryBatch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoOrderQueryBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} The populated <code>AutoOrderQueryBatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoOrderQueryBatch();

        if (data.hasOwnProperty('auto_order_oids')) {
          obj['auto_order_oids'] = _ApiClient["default"].convertToType(data['auto_order_oids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return AutoOrderQueryBatch;
}();
/**
 * Auto order oids
 * @member {Array.<Number>} auto_order_oids
 */


AutoOrderQueryBatch.prototype['auto_order_oids'] = undefined;
var _default = AutoOrderQueryBatch;
exports["default"] = _default;