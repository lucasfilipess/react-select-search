"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useSelect2 = _interopRequireDefault(require("./useSelect"));

var _types = require("./types");

var _Value = _interopRequireDefault(require("./Components/Value"));

var _Options = _interopRequireDefault(require("./Components/Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectSearch = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var defaultValue = _ref.value,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      multiple = _ref.multiple,
      search = _ref.search,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      defaultOptions = _ref.options,
      id = _ref.id,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      printOptions = _ref.printOptions,
      closeOnSelect = _ref.closeOnSelect,
      className = _ref.className,
      renderValue = _ref.renderValue,
      renderOption = _ref.renderOption,
      renderGroupHeader = _ref.renderGroupHeader,
      getOptions = _ref.getOptions,
      filterOptions = _ref.filterOptions,
      debounce = _ref.debounce,
      fuse = _ref.fuse,
      emptyMessage = _ref.emptyMessage;

  var _useSelect = (0, _useSelect2["default"])({
    options: defaultOptions,
    value: defaultValue === null && (placeholder || multiple) ? '' : defaultValue,
    multiple: multiple,
    disabled: disabled,
    search: search,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    closeOnSelect: closeOnSelect,
    closable: !multiple || printOptions === 'on-focus',
    getOptions: getOptions,
    filterOptions: filterOptions,
    fuse: fuse,
    debounce: debounce
  }),
      snapshot = _useSelect[0],
      valueProps = _useSelect[1],
      optionProps = _useSelect[2];

  var focus = snapshot.focus,
      options = snapshot.options,
      fetching = snapshot.fetching;
  var cls = (0, _react.useCallback)(function (key) {
    if (typeof className === 'function') {
      return className(key);
    }

    if (key.indexOf('container') === 0) {
      return key.replace('container', className);
    }

    if (key.indexOf('is-') === 0 || key.indexOf('has-') === 0) {
      return key;
    }

    return className.split(' ')[0] + "__" + key;
  }, [className]);
  var wrapperClass = [cls('container'), disabled ? cls('is-disabled') : false, fetching ? cls('is-loading') : false, focus ? cls('has-focus') : false].filter(function (single) {
    return !!single;
  }).join(' ');
  var shouldRenderOptions;

  switch (printOptions) {
    case 'never':
      shouldRenderOptions = false;
      break;

    case 'always':
      shouldRenderOptions = true;
      break;

    case 'on-focus':
      shouldRenderOptions = focus;
      break;

    default:
      shouldRenderOptions = !disabled && (focus || multiple);
      break;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    className: wrapperClass,
    id: id,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Value["default"], {
      valueProps: valueProps,
      placeholder: placeholder,
      multiple: multiple,
      search: search,
      autoComplete: autoComplete,
      autoFocus: autoFocus,
      snapshot: snapshot,
      cls: cls,
      renderValue: renderValue
    }), shouldRenderOptions && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Options["default"], {
      options: options,
      emptyMessage: emptyMessage,
      optionProps: optionProps,
      renderOption: renderOption,
      renderGroupHeader: renderGroupHeader,
      cls: cls,
      snapshot: snapshot
    })]
  });
});
SelectSearch.defaultProps = {
  // Data
  getOptions: null,
  filterOptions: null,
  value: null,
  // Interaction
  multiple: false,
  search: false,
  disabled: false,
  printOptions: 'auto',
  closeOnSelect: true,
  debounce: 0,
  fuse: {
    keys: ['name', 'groupName'],
    threshold: 0.3
  },
  // Attributes
  placeholder: null,
  id: null,
  autoFocus: false,
  autoComplete: 'on',
  // Design
  className: 'select-search',
  // Renderers
  renderOption: undefined,
  renderGroupHeader: undefined,
  renderValue: undefined,
  emptyMessage: null,
  // Events
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
};
SelectSearch.propTypes = process.env.NODE_ENV !== "production" ? {
  // Data
  options: _propTypes["default"].arrayOf(_types.optionType).isRequired,
  getOptions: _propTypes["default"].func,
  filterOptions: _propTypes["default"].func,
  value: _types.valueType,
  // Interaction
  multiple: _propTypes["default"].bool,
  search: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  printOptions: _propTypes["default"].oneOf(['auto', 'always', 'never', 'on-focus']),
  closeOnSelect: _propTypes["default"].bool,
  debounce: _propTypes["default"].number,
  fuse: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].shape({
    keys: _propTypes["default"].arrayOf(_propTypes["default"].string),
    threshold: _propTypes["default"].number
  })]),
  // Attributes
  placeholder: _propTypes["default"].string,
  id: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  // Design
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  // Renderers
  renderOption: _propTypes["default"].func,
  renderGroupHeader: _propTypes["default"].func,
  renderValue: _propTypes["default"].func,
  emptyMessage: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  // Events
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
} : {};

var _default = /*#__PURE__*/(0, _react.memo)(SelectSearch);

exports["default"] = _default;