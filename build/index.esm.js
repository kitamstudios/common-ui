import React, { useState, useEffect, useRef } from 'react';
import { Snackbar, Button, IconButton, makeStyles, Table, TableHead, TableRow, TableCell, TableSortLabel, TableBody, TableFooter } from '@material-ui/core';
import { Close } from '@material-ui/icons';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test-component {\n  background-color: #e0e0e0;\n  border: 1px solid #131111;\n  padding: 16px;\n  width: 360px;\n  text-align: center; }\n  .test-component .heading {\n    font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n    font-size: 40px;\n    font-weight: bold; }\n  .test-component.test-component-secondary {\n    background-color: #131111;\n    color: #e0e0e0; }\n";
styleInject(css_248z);

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React.createElement("h1", { className: "heading" }, "I amm the test component"),
        React.createElement("h2", null, "Made with love by Harvey - the manx?")));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function useAddToHomescreenPrompt() {
    var _a = __read(useState(null), 2), prompt = _a[0], setState = _a[1];
    var promptToInstall = function () {
        if (prompt) {
            return prompt.prompt();
        }
        return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
    };
    useEffect(function () {
        var ready = function (e) {
            e.preventDefault();
            setState(e);
        };
        window.addEventListener('beforeinstallprompt', ready);
        return function () {
            window.removeEventListener('beforeinstallprompt', ready);
        };
    }, []);
    return [prompt, promptToInstall];
}

// NOTE: From https://overreacted.io/making-setinterval-declarative-with-react-hooks/.
var useInterval = function (callback, delay) {
    var savedCallback = useRef();
    // Remember the latest callback.
    useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(function () {
        var tick = function () {
            var current = savedCallback.current;
            current();
        };
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return function () { };
    }, [delay]);
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useAddToHomescreenPrompt: useAddToHomescreenPrompt,
  useInterval: useInterval
});

var AlertHeadingText = {
    en: 'An update is available',
    id: 'Pembaruan tersedia',
};
var UpdateButtonText = {
    en: 'Update',
    id: 'Memperbarui',
};
var UpdateAppAlert = function (_a) {
    var langId = _a.langId;
    var _b = __read(useState(false), 2), isUpdateAvailable = _b[0], setUpdateAvailable = _b[1];
    useInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
        var version, updateAvailable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(process.env.REACT_APP_RELATIVE_ROOT + "/app.ver")
                        .then(function (r) { return r.text(); })
                        .then(function (t) { return t.trim(); })];
                case 1:
                    version = _a.sent();
                    updateAvailable = version !== process.env.REACT_APP_VERSION;
                    console.log('Current version', "\"" + process.env.REACT_APP_VERSION + "\"", 'New version', "\"" + version + "\"", 'Should update?', updateAvailable);
                    setUpdateAvailable(updateAvailable);
                    return [2 /*return*/];
            }
        });
    }); }, 31000);
    var handleClose = function () { return setUpdateAvailable(false); };
    var handleUpdate = function () {
        handleClose();
        window.location.reload(true);
    };
    return (React.createElement(Snackbar, { anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, open: isUpdateAvailable, autoHideDuration: 30000, onClose: handleClose, message: AlertHeadingText[langId], action: React.createElement(React.Fragment, null,
            React.createElement(Button, { color: "secondary", size: "small", onClick: handleUpdate }, UpdateButtonText[langId].toLocaleUpperCase()),
            React.createElement(IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: handleClose },
                React.createElement(Close, { fontSize: "small" }))) }));
};

var AlertHeadingText$1 = {
    en: 'Install for offline use?',
    id: 'Instal untuk penggunaan offline?',
};
var InstallButtonText = {
    en: 'Install',
    id: 'Instal',
};
var InstallAppAlert = function (_a) {
    var langId = _a.langId, prompt = _a.prompt, promptToInstall = _a.promptToInstall;
    var _b = __read(useState(false), 2), isVisible = _b[0], setVisible = _b[1];
    useEffect(function () {
        if (prompt) {
            setVisible(true);
        }
    }, [prompt]);
    var handleClose = function () { return setVisible(false); };
    var handleInstall = function () {
        handleClose();
        promptToInstall();
    };
    return (React.createElement(Snackbar, { anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, open: isVisible, autoHideDuration: 30000, onClose: handleClose, message: AlertHeadingText$1[langId], action: React.createElement(React.Fragment, null,
            React.createElement(Button, { color: "secondary", size: "small", onClick: handleInstall }, InstallButtonText[langId].toLocaleUpperCase()),
            React.createElement(IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: handleClose },
                React.createElement(Close, { fontSize: "small" }))) }));
};

var useStyles = makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        overflowY: 'auto',
    },
    table: {
        tableLayout: 'fixed',
    },
    tableRow: {
        '& td, & th': {
            padding: '0.3rem',
            lineHeight: '1.1rem',
            fontFamily: 'monospace',
            fontSize: 'large',
            overflowWrap: 'break-word',
        },
        '& td:not(:last-child), & th:not(:last-child)': {
            borderRight: 'solid 1px',
            borderRightColor: theme.palette.secondary.light,
        },
    },
}); });
var KsTable = function (props) {
    var sortBy = props.sortBy, sortOrder = props.sortOrder, requestSort = props.requestSort, rows = props.rows, columnDefinitions = props.columnDefinitions;
    var handleClick = function (colName) { return function () { return requestSort && requestSort(colName); }; };
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Table, { className: classes.table },
            React.createElement("colgroup", null, columnDefinitions.map(function (colDef) { return (React.createElement("col", { key: colDef.id, style: { width: colDef.width } })); })),
            React.createElement(TableHead, null,
                React.createElement(TableRow, { className: classes.tableRow }, columnDefinitions.map(function (colDef) { return (React.createElement(TableCell, { key: colDef.id, align: colDef.align }, colDef.sortable ? (React.createElement(TableSortLabel, { active: sortBy === colDef.field, direction: sortOrder, onClick: handleClick(colDef.field) }, colDef.displayName)) : (colDef.displayName))); }))),
            React.createElement(TableBody, null, rows.map(function (item) { return (React.createElement(TableRow, { hover: true, key: item.id, className: classes.tableRow }, columnDefinitions.map(function (colDef) { return (React.createElement(TableCell, { key: colDef.id, align: colDef.align }, item[colDef.field])); }))); })),
            React.createElement(TableFooter, null))));
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  UpdateAppAlert: UpdateAppAlert,
  InstallAppAlert: InstallAppAlert,
  KsTable: KsTable
});

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null
});

export { index$1 as C, index as H, index$2 as L, TestComponent };
//# sourceMappingURL=index.esm.js.map
