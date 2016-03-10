webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactTapEventPlugin = __webpack_require__(159);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _app = __webpack_require__(236);

	var _app2 = _interopRequireDefault(_app);

	var _autoFont = __webpack_require__(168);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	var _addScript = __webpack_require__(180);

	var _addScript2 = _interopRequireDefault(_addScript);

	var _head = __webpack_require__(167);

	var _head2 = _interopRequireDefault(_head);

	var _storage = __webpack_require__(173);

	var _storage2 = _interopRequireDefault(_storage);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _nav = __webpack_require__(205);

	var _nav2 = _interopRequireDefault(_nav);

	var _userMsg = __webpack_require__(181);

	var _userMsg2 = _interopRequireDefault(_userMsg);

	var _tab = __webpack_require__(184);

	var _tab2 = _interopRequireDefault(_tab);

	var _follow = __webpack_require__(240);

	var _follow2 = _interopRequireDefault(_follow);

	var _group = __webpack_require__(243);

	var _group2 = _interopRequireDefault(_group);

	var _activity = __webpack_require__(196);

	var _activity2 = _interopRequireDefault(_activity);

	var _msg = __webpack_require__(246);

	var _msg2 = _interopRequireDefault(_msg);

	var _newest = __webpack_require__(209);

	var _newest2 = _interopRequireDefault(_newest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(249);

	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();
	_head2.default.init({
	    tit: '我司-用户个人页',
	    shareName: '我司-用户个人页',
	    shareUrl: '',
	    shareImg: '',
	    shareDesc: '',
	    keywords: '',
	    desc: '',
	    admins: '',
	    favicon: ''
	});

	var Main = (function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	        _this.state = {
	            vars: new _config().vars(),
	            tab: [{
	                name: '动态',
	                codeName: 'user-dynamic',
	                active: 'active'
	            }, {
	                name: '个人',
	                codeName: 'user-personage',
	                active: ''
	            }],
	            noteList: []
	        };
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var userData = _storage2.default.get('ws');
	            this.state.userData = userData;

	            this.getUserMsg(userData);
	        }
	    }, {
	        key: 'tapMemu',
	        value: function tapMemu(e) {
	            var node = _reactDom2.default.findDOMNode(e.target);
	            if (node.className.indexOf('userMsg-Menu') !== -1 || node.parentNode.className.indexOf('userMsg-Menu') !== -1) {
	                document.querySelector('#nav').classList.add('active');
	                document.querySelector('.base-body').classList.add('active');
	            }
	        }
	    }, {
	        key: 'tapTab',
	        value: function tapTab(e) {
	            var node = _reactDom2.default.findDOMNode(e.target);
	            var tab = this.state.tab;
	            var ix = Number(node.getAttribute('data-ix'));
	            for (var i = 0, l = tab.length; i < l; i++) {
	                if (i === ix) {
	                    tab[i].active = 'active';
	                } else {
	                    tab[i].active = '';
	                }
	            }
	            this.setState({ tab: tab });
	        }
	    }, {
	        key: 'getUserMsg',
	        value: function getUserMsg(userData) {
	            var mid = userData['mid'],
	                requester = userData['ofusername'];
	            console.log(mid, requester);
	            _app2.default.ajax.user.show(mid, requester, function (data) {
	                console.log('su');
	                console.log(data);
	            }, function (data) {
	                console.log('er');
	                console.log(data);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var url = _formatAjax2.default.get(_vars2.default.api('get_my_notes'), {
	                mid: _vars2.default.storageValue('user', 'mid'),
	                offset: 0,
	                count: 10
	            });
	            _superagent2.default.get(url).end(function (err, res) {
	                if (res.status === 200) {
	                    var data = JSON.parse(res.text);
	                    if (data.status.code === '0') {
	                        var list = _this2.state.noteList,
	                            num = data.sum;
	                        data = data.data;

	                        var _loop = function _loop(o) {
	                            if (data.hasOwnProperty(o)) {
	                                var tlist = data[o];
	                                tlist = tlist.map(function (v, i) {
	                                    // console.log(v);
	                                    v.time = o;
	                                    return v;
	                                });
	                                list.push.apply(list, tlist);
	                            }
	                        };

	                        for (var o in data) {
	                            _loop(o);
	                        }
	                        _this2.setState({
	                            noteList: list
	                        });
	                    } else {
	                        alert(data.status.msg);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'base-nav' },
	                    _react2.default.createElement(_nav2.default, { vars: this.state.vars })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'base-body' },
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-head', onTouchTap: function onTouchTap(e) {
	                                _this3.tapMemu(e);
	                            } },
	                        _react2.default.createElement(_userMsg2.default, { vars: this.state.vars, data: this.state.userData })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-tab', onTouchTap: function onTouchTap(e) {
	                                _this3.tapTab(e);
	                            } },
	                        _react2.default.createElement(_tab2.default, { vars: this.state.vars, data: this.state.tab })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-dynamic', className: 'user-md ' + this.state.tab[0].active },
	                        _react2.default.createElement(_newest2.default, { vars: this.state.vars, data: this.state.noteList })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-personage', className: 'user-md ' + this.state.tab[1].active },
	                        _react2.default.createElement(
	                            'section',
	                            { className: 'gap' },
	                            _react2.default.createElement(_follow2.default, { vars: this.state.vars })
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: 'gap' },
	                            _react2.default.createElement(_group2.default, { vars: this.state.vars })
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: 'gap' },
	                            _react2.default.createElement(_activity2.default, { vars: this.state.vars })
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: 'gap' },
	                            _react2.default.createElement(_msg2.default, { vars: this.state.vars })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Main;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, { name: 'Nate' }), document.getElementById('user-content'));

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(164);
	var reduce = __webpack_require__(165);

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */

	Request.prototype.parse = function(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename || file.name);
	  return this;
	};

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;


/***/ },

/***/ 164:
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 165:
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },

/***/ 167:
/***/ function(module, exports) {

	'use strict';

	/*
	var headData = {
	  //页面title
	  tit: '',
	  //分享出去的title
	  shareName: '',
	  //分享出去的url
	  shareUrl: '',
	  //分享出去的图片
	  shareImg: '',
	  //分享出去的描述
	  shareDesc: '',
	  //SEO关键字
	  keywords: '',
	  //SEO描述
	  desc: '',
	  //第二代微信配置
	  admins: '',
	  //页面ico
	  favicon: '',
	  //自己的扩展配置，支持List，String
	  // extend: ''
	}
	*/
	var Head = function Head() {};

	Head.init = function (data) {
	    var head = '',
	        i,
	        l,
	        extend;
	    extend = data.extend;
	    head += '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />';
	    head += '<meta name="format-detection" content="telephone=no" />';
	    head += '<meta name="og:url" property="og:url" content="' + data.shareUrl + '" />';
	    head += '<meta name="og:site_name" property="og:site_name" content="' + (data.shareName || data.tit) + '" />';
	    head += '<meta name="og:title" property="og:title" content="' + (data.shareName || data.tit) + '" />';
	    head += '<meta name="og:image" property="og:image" content="' + (data.shareImg || data.defaultImg) + '" />';
	    head += '<meta name="og:desc" property="og:desc" content="' + data.shareDesc + '" />';
	    head += '<meta name="keywords" property="keywords" content="' + data.keywords + '" />';
	    head += '<meta name="description" property="description" content="' + data.desc + '" />';
	    head += '<meta property="qc:admins" content="' + data.admins + '"/>';
	    head += '<title>' + data.tit + '</title>';
	    head += '<link rel="shortcut icon" type="image/x-icon" href="' + data.favicon + '"/>';
	    // head += '<link type="text/css" rel="stylesheet" href="../font/css/font-awesome.min.css">';
	    if (!!extend) {
	        if (Object.prototype.toString.call(extend) === '[object Array]') {
	            data.extend.map(function (v, i) {
	                head += v;
	            });
	        } else if (Object.prototype.toString.call(extend) === '[object String]') {
	            head += extend;
	        }
	    }
	    document.head.innerHTML = document.head.innerHTML + head;
	    document.title = data.tit;
	};

	module.exports = Head;

/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';

	var formatAjax = function formatAjax() {};

	formatAjax.get = function (url, obj) {
		var str = '?';
		if (arguments.length !== 1) {
			for (var o in obj) {
				if (obj.hasOwnProperty(o)) {
					str += o + '=' + obj[o] + '&';
				}
			}
			return url + str.substr(0, str.length - 1);
		}
		return url;
	};

	formatAjax.post = function (url, obj) {};

	module.exports = formatAjax;

/***/ },

/***/ 171:
/***/ function(module, exports) {

	"use strict";

	/*
		Unicode编码转换
	*/
	var unicode = function unicode() {};

	// 加码
	unicode.toDec = function (str) {
		if (str) {
			var res = [];
			for (var i = 0; i < str.length; i++) {
				res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
			}return "\\u" + res.join("\\u");
		}
		return '';
	};

	// 解码
	unicode.toHex = function (str) {
		if (str) {
			str = str.replace(/\\/g, '%');
			return unescape(str).replace(/%/g, '');
		}
		return '';
	};

	module.exports = unicode;

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _storage = __webpack_require__(173);

	var _storage2 = _interopRequireDefault(_storage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cf = new _config();
	var vars = function vars(key) {
	    var obj = {
	        userStorage: 'ws',
	        user: 'ws'
	    };
	    return obj[key];
	};

	vars.storage = function (key) {
	    var obj = {
	        userStorage: 'ws',
	        user: 'ws'
	    };
	    return obj[key];
	};

	vars.storageValue = function (key1, key2) {
	    var sobj = _storage2.default.get(vars.storage(key1));
	    // console.log(sobj);
	    return key2 ? sobj[key2] : sobj;
	};

	// 系统参数
	vars.sys = function (key) {
	    var obj = {
	        cid: 17,
	        sharekey: 'X-v]4hcK$C'
	    },
	        sobj = _storage2.default.get(vars.storage('userStorage'));
	    for (var o in sobj) {
	        if (sobj.hasOwnProperty(o)) {
	            obj[o] = sobj[o];
	        }
	    }
	    return obj[key];
	};

	// 基本地址
	vars.path = function (key) {
	    var staticPath = undefined,
	        port = undefined,
	        obj = undefined;
	    port = location.port,
	    // host = 'http://10.2.144.38:8080/';
	    staticPath = 'http://127.0.0.1:8080/';
	    if (port === '8080') {
	        staticPath = '../';
	    } else {
	        staticPath += 'github/open-wb/app/';
	    }
	    obj = {
	        href: './',
	        apiPath: '/v1/',
	        staticPath: staticPath
	    };
	    return obj[key];
	};

	// 错误信息
	vars.err = function (key) {
	    var obj = {
	        nickName: '请填写1-18个字符，中文占两个字符，英文占一个字符',
	        gender: '请选择性别',
	        city: '请选择城市'
	    };
	    return obj[key];
	};

	// 跳转地址
	vars.href = function (key) {
	    var path = vars.path('href'),
	        obj = {
	        login: path + 'login.html',
	        baseData: path + 'baseData.html',
	        user: path + 'user.html?nav=me',
	        hotGroup: path + 'hotGroup.html',
	        fansGroup: path + 'fansGroup.html',
	        guide: path + 'guide.html'
	    };
	    return obj[key];
	};

	// 接口地址
	vars.api = function (key) {
	    var path = vars.path('apiPath'),
	        obj = {
	        fileUpload: 'file/post.json',
	        userInfo: 'users/userinfo.json',
	        city: 'zuji/city.json',
	        hotTagList: 'biaoqian/list.json',
	        hotList: 'biaoqian/search.json',
	        userShow: 'users/show.json', //获取某个用户的个人信息
	        follow_list: 'users/following/list.json', //获取用户关注的人的列表
	        tag_list: 'users/tag/list.json', //获取用户加入的群组(标签)
	        event_list: 'users/event/list.json', //获取用户活动列表
	        get_my_notes: 'notes/get_my_notes.json', //用户的动态
	        user_show: 'users/show.json' };
	    //获取用户信息
	    return path + obj[key];
	};

	module.exports = vars;

	// {"mid":76350,"username":"18810373055","nickname":"eqwe","pinyin":"eqwe","avatar":"http://image.useastore.com/user/avatar/ADCAC15A-677B-4DC5-BBA2-9ED1FD4516BE1456735556333.jpg","vip":0,"gender":"m","age":1,"constellation":"\\u53cc\\u9c7c\\u5ea7","address":"\\u6fb3\\u95e8\\u5e02","sign":"\\u6211\\u662f\\u5c0f\\u6d4b","xingming":"","background":null,"leagues":null,"groups":null,"height":0,"mobile":"18810373055","extension":"{\"school\":\"& #40;null& #41;\",\"position\":\"\\u5348\\u591c\\u5de5\\u4f5c\\u8005\",\"Mylabel\":\"& #40;null& #41;\",\"company\":\"& #40;null& #41;\",\"experience\":\"& #40;null& #41;\",\"project\":\"& #40;null& #41;\",\"industry\":\"& #40;null& #41;\",\"interest\":\"\\u5c0f\\u9017\\u9752\\u5e74\"}","isRegister":0,"ofpassword":"b942077d406d5d069a3c71ae3d332811","ngroups":null,"ofusername":"7f3304db83383f8624b5eb5a41ea2758"}

/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';

	var storage = function storage() {
	    if ('localStorage' in window && window['localStorage'] != null) {
	        return true;
	    }
	    return false;
	};

	storage.set = function (name, key) {
	    if (storage()) {
	        key = JSON.stringify(key);
	        localStorage.setItem(name, key);
	    }
	};

	storage.get = function (name) {
	    if (storage()) {
	        return JSON.parse(localStorage.getItem(name));
	    }
	};

	storage.clear = function () {
	    localStorage.clear();
	};

	module.exports = storage;

/***/ },

/***/ 180:
/***/ function(module, exports) {

	'use strict';

	/*
	    动态添加scrit
	    addScript.init('http://t.m.tv.sohu.com/mb/dist/js/baseLib.min.js?v=1.0.1')
	*/
	var addScript = function addScript() {};

	addScript.init = function (data) {
	    var head = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.src = data;
	    script.type = 'text/javascript';
	    document.body.appendChild(script);
	};

	// var addScript = {
	//     init: function(data) {
	//         var head = document.getElementsByTagName('head')[0];
	//         var script = document.createElement('script');
	//         script.src = data;
	//         script.type = 'text/javascript';
	//         document.body.appendChild(script);
	//     }
	// }
	module.exports = addScript;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(182);

	var UserMsg = (function (_React$Component) {
	    _inherits(UserMsg, _React$Component);

	    function UserMsg(props) {
	        _classCallCheck(this, UserMsg);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserMsg).call(this, props));

	        _this.state = {
	            staticPath: _vars2.default.path('staticPath')
	        };
	        // console.log(props);
	        return _this;
	    }

	    _createClass(UserMsg, [{
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            $('#header-rsBox').addClass('active');
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            $('#header-rsBox').removeClass('active');
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            $('#zh-top-search-input').focus();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'userMsg' },
	                _react2.default.createElement('img', { id: 'userMsg-kbImg', className: 'blur', src: this.state.staticPath + 'img/bk.png' }),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'userMsg-head-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-head' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-left', className: 'userMsg-Menu userMsg-ease' },
	                            _react2.default.createElement('img', { src: this.state.staticPath + 'img/menu@3x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-right', className: 'userMsg-ease' },
	                            _react2.default.createElement('img', { src: this.state.staticPath + 'img/share@1x.png' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-headImg' },
	                        _react2.default.createElement('img', { src: this.state.staticPath + 'img/headImg@1x.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-name' },
	                        _unicode2.default.toHex(_vars2.default.storageValue('userStorage', 'nickname'))
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-info' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-peaple', className: 'userMsg-info-group' },
	                            '123人'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-focus', className: 'userMsg-info-group' },
	                            '+ 加入'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-des' },
	                        _unicode2.default.toHex(_vars2.default.storageValue('userStorage', 'sign')) || '还没有填写哦！'
	                    )
	                )
	            );
	        }
	    }]);

	    return UserMsg;
	})(_react2.default.Component);

	exports.default = UserMsg;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./userMsg.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./userMsg.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#userMsg {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 5rem;\n  color: #FFFFFF;\n  overflow: hidden; }\n  #userMsg #userMsg-kbImg {\n    position: absolute;\n    top: -6%;\n    left: -3%;\n    width: 106%;\n    height: 112%; }\n  #userMsg #userMsg-head-group {\n    position: relative; }\n    #userMsg #userMsg-head-group #userMsg-head {\n      height: .7rem;\n      overflow: hidden; }\n      #userMsg #userMsg-head-group #userMsg-head .userMsg-ease {\n        width: 1rem;\n        line-height: .6rem;\n        text-align: center;\n        height: 100%; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-left {\n        float: left; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-left img {\n          width: 0.55rem; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-right {\n        float: right; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-right img {\n          width: 0.5rem; }\n    #userMsg #userMsg-head-group #userMsg-headImg {\n      margin: 0 auto 0.2rem;\n      width: 1.5rem;\n      height: 1.5rem;\n      border: .05rem solid #FFFFFF;\n      -webkit-border-radius: 100%;\n      border-radius: 100%; }\n      #userMsg #userMsg-head-group #userMsg-headImg img {\n        width: 100%;\n        height: 100%;\n        -webkit-border-radius: 100%;\n        border-radius: 100%; }\n    #userMsg #userMsg-head-group #userMsg-name {\n      margin-bottom: 0.15rem;\n      text-align: center;\n      font-size: .4rem; }\n    #userMsg #userMsg-head-group #userMsg-info {\n      width: 2.8rem;\n      height: .6rem;\n      line-height: .6rem;\n      -webkit-border-radius: 2rem;\n      border-radius: 2rem;\n      margin: 0 auto 0.3rem;\n      font-size: .3rem;\n      border: .03rem solid #FFFFFF;\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row; }\n      #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group {\n        flex: 1;\n        text-align: center; }\n        #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group:first-child {\n          border-right: 1px solid #FFFFFF; }\n    #userMsg #userMsg-head-group #userMsg-des {\n      width: 90%;\n      text-align: center;\n      margin: auto;\n      font-size: .27rem;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n", ""]);

	// exports


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(185);

	var Tab = (function (_React$Component) {
	    _inherits(Tab, _React$Component);

	    function Tab(props) {
	        _classCallCheck(this, Tab);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

	        _this.state = props;
	        return _this;
	    }

	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            var tab = this.state.data;
	            var tabNode = tab.map(function (_tab, ix) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'tab-tx ' + _tab.active, role: _tab.codeName, key: _tab.codeName, 'data-ix': ix },
	                    _tab.name
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { id: 'tab', className: 'gap' },
	                _react2.default.createElement('div', { id: 'tab-left' }),
	                _react2.default.createElement('div', { id: 'tab-right' }),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'tab-center' },
	                    tabNode
	                )
	            );
	        }
	    }]);

	    return Tab;
	})(_react2.default.Component);

	exports.default = Tab;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#tab {\n  line-height: 1rem;\n  background-color: #FFFFFF;\n  font-size: .35rem; }\n  #tab #tab-left {\n    width: 15%;\n    height: 1rem;\n    float: left;\n    border-bottom: .05rem solid #eaeaea; }\n  #tab #tab-right {\n    float: right;\n    width: 15%;\n    height: 1rem;\n    border-bottom: .05rem solid #eaeaea; }\n  #tab #tab-center {\n    width: 70%;\n    margin: auto;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-flow: row; }\n    #tab #tab-center .tab-tx {\n      text-align: center;\n      flex: 1;\n      color: #999999;\n      height: 1rem;\n      border-bottom: .05rem solid #eaeaea; }\n      #tab #tab-center .tab-tx.active {\n        color: #474747;\n        border-bottom: .05rem solid #2fa4f6; }\n\n.tab-md {\n  display: none; }\n  .tab-md.active {\n    display: block; }\n", ""]);

	// exports


/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(197);

	var Tag = (function (_React$Component) {
	    _inherits(Tag, _React$Component);

	    function Tag(props) {
	        _classCallCheck(this, Tag);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this));

	        _this.state = {
	            list: [],
	            num: 0,
	            staticPath: _vars2.default.path('staticPath')
	        };
	        return _this;
	    }

	    _createClass(Tag, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var url = _formatAjax2.default.get(_vars2.default.api('event_list'), {
	                mid: _vars2.default.storageValue('user', 'mid'),
	                offset: 0,
	                count: 4
	            });
	            _superagent2.default.get(url).end(function (err, res) {
	                if (res.status === 200) {
	                    var data = JSON.parse(res.text);
	                    if (data.status.code === '0') {
	                        var list = _this2.state.list,
	                            num = data.sum;

	                        data = data.data;
	                        list.push.apply(list, data);
	                        _this2.setState({
	                            list: list,
	                            num: num
	                        });
	                    } else {
	                        alert(data.status.msg);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var List = this.state.list.map(function (v, i) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'activity-2-label', key: v.eid },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        _unicode2.default.toHex(v.title)
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { id: 'activity' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'activity-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'activity-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'activity-1-name' },
	                            '近期活动'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'activity-1-num' },
	                            this.state.num
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'activity-2' },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            List
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'activity-more' },
	                            _react2.default.createElement('img', { src: this.state.staticPath + "img/right@1.png" })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Tag;
	})(_react2.default.Component);

	exports.default = Tag;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./activity.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./activity.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#activity {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  font-size: .28rem; }\n  #activity #activity-group {\n    overflow: hidden; }\n    #activity #activity-group #activity-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      padding-top: .2rem;\n      float: left; }\n      #activity #activity-group #activity-1 #activity-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #activity #activity-group #activity-1 #activity-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #activity #activity-group #activity-2 {\n      float: left;\n      width: calc(100% - 1.3rem);\n      padding-top: .7rem; }\n      #activity #activity-group #activity-2 .activity-2-label span {\n        display: inline-block;\n        font-size: .25rem;\n        color: #2fa4f6;\n        background-color: #f6f6f8;\n        border-radius: .5rem;\n        padding: .1rem .2rem;\n        margin-bottom: .3rem; }\n      #activity #activity-group #activity-2 .activity-more {\n        text-align: right;\n        padding-right: .1rem; }\n        #activity #activity-group #activity-2 .activity-more img {\n          height: .4rem;\n          transform: rotate(90DEG); }\n", ""]);

	// exports


/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactTapEventPlugin = __webpack_require__(159);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _url = __webpack_require__(206);

	var _url2 = _interopRequireDefault(_url);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	    AT:
	        ABEL

	    EQ:
	        在URL中nav参数作为标识

	    DT:
	        2016-1-20

	*/

	__webpack_require__(207);

	(0, _reactTapEventPlugin2.default)();

	var nav = (function (_React$Component) {
	    _inherits(nav, _React$Component);

	    function nav(props) {
	        _classCallCheck(this, nav);

	        // console.log(props);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(nav).call(this, props));

	        _this.state = {
	            vars: props.vars,
	            nav: [{
	                name: '热门推荐',
	                active: 'active',
	                img: 'heart',
	                href: '?nav=heart'
	            }, {
	                name: '热门群组',
	                active: '',
	                img: 'hot',
	                href: _vars2.default.href('hotGroup')
	            }, {
	                name: '话题',
	                active: '',
	                img: 'talk',
	                href: '?nav=talk'
	            }, {
	                name: '活动',
	                active: '',
	                img: 'activity',
	                href: '?nav=activity'
	            }, {
	                name: '我的主页',
	                active: '',
	                img: 'me',
	                href: _vars2.default.href('user')
	            }, {
	                name: '关于我们',
	                active: '',
	                img: 'about',
	                href: '?nav=about'
	            }]
	        };
	        return _this;
	    }

	    _createClass(nav, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var flag = true; // 是否带有相关参数
	            var navList = this.state.nav;
	            var tag = _url2.default.getParams('nav');
	            for (var i = 0, l = navList.length; i < l; i++) {
	                if (navList[i].img === tag) {
	                    flag = false;
	                    navList[i].active = 'active';
	                    navList[i].img += '_active';
	                } else {
	                    navList[i].active = '';
	                }
	            }
	            if (flag) {
	                navList[0].active = 'active';
	                navList[0].img += '_active';
	            }
	        }
	    }, {
	        key: 'tapHide',
	        value: function tapHide(e) {
	            document.querySelector('#nav').classList.remove('active');
	            document.querySelector('.base-body').classList.remove('active');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var navList = this.state.nav.map(function (v) {
	                return _react2.default.createElement(
	                    'a',
	                    { className: 'nav-unit ' + v.active, key: v.img, href: v.href },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nav-img' },
	                        _react2.default.createElement('img', { src: _this2.state.vars.path + 'img/icon_nav/' + v.img + '.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nav-name' },
	                        v.name
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { id: 'nav', className: 'nav' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'nav-group' },
	                    navList
	                ),
	                _react2.default.createElement('div', { id: 'nav-hide', onTouchTap: function onTouchTap(e) {
	                        _this2.tapHide(e);
	                    } })
	            );
	        }
	    }]);

	    return nav;
	})(_react2.default.Component);

	exports.default = nav;

/***/ },

/***/ 206:
/***/ function(module, exports) {

	'use strict';

	var url = function url() {};

	url.getParams = function (key) {
		var search = location.search;
		if (search.indexOf('?') != -1) {
			var str = search.substr(1).split('&');
			for (var i = 0, l = str.length; i < l; i++) {
				if (str[i].indexOf(key) !== -1) {
					return str[i].split('=')[1];
				}
			}
		}
	};

	module.exports = url;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(208);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./nav.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "#nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  font-size: .35rem; }\n  #nav #nav-group {\n    float: left;\n    width: 4rem;\n    height: 100%;\n    background-color: #1c2229;\n    padding: 2rem 0; }\n    #nav #nav-group .nav-unit {\n      display: block;\n      padding: 0 .5rem;\n      line-height: 1.2rem;\n      margin-bottom: .2rem;\n      color: #ffffff; }\n      #nav #nav-group .nav-unit .nav-img {\n        display: inline-block;\n        position: relative;\n        top: .08rem;\n        width: .5rem; }\n        #nav #nav-group .nav-unit .nav-img img {\n          width: 100%;\n          height: 100%; }\n      #nav #nav-group .nav-unit .nav-name {\n        display: inline-block;\n        margin-left: .2rem; }\n      #nav #nav-group .nav-unit.active {\n        background-color: rgba(216, 239, 255, 0.12);\n        color: #3cafff; }\n  #nav #nav-hide {\n    float: left;\n    width: 3.5rem;\n    height: 100%;\n    display: inline-block; }\n\n.nav {\n  transition: transform .5s;\n  transform: translate3D(-100%, 0, 0); }\n  .nav.active {\n    transition: transform .5s;\n    transform: translate3D(0, 0, 0); }\n", ""]);

	// exports


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(210);

	var Newest_head = (function (_React$Component) {
	    _inherits(Newest_head, _React$Component);

	    function Newest_head(props) {
	        _classCallCheck(this, Newest_head);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_head).call(this, props));

	        _this.state = {
	            vars: props.vars
	        };
	        return _this;
	    }

	    _createClass(Newest_head, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-head' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-imgUser' },
	                    _react2.default.createElement('img', { src: this.props.data.avatar })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-msg' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-msg-pp' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-name' },
	                            this.props.data.nickName
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'newest-tag' },
	                            _unicode2.default.toHex(this.props.data.sign)
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-msg-dt' },
	                        this.props.data.time
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-source' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-source-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-source-1-1' },
	                            '来自'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-source-1-2' },
	                            _unicode2.default.toHex(this.props.data.groupCollection.gname)
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-source-2' },
	                        _react2.default.createElement('img', { src: this.props.data.groupCollection.icon })
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_head;
	})(_react2.default.Component);

	var Newest_body_1 = (function (_React$Component2) {
	    _inherits(Newest_body_1, _React$Component2);

	    function Newest_body_1(props) {
	        _classCallCheck(this, Newest_body_1);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_body_1).call(this, props));

	        _this2.state = {
	            imgUrl: [props.vars.path + 'img/bk.png']
	        };
	        return _this2;
	    }

	    _createClass(Newest_body_1, [{
	        key: 'render',
	        value: function render() {
	            var imgList = this.props.data.picList;
	            if (imgList.length !== 0) {
	                imgList = _react2.default.createElement(
	                    'div',
	                    { className: 'newest-model1' },
	                    _react2.default.createElement('img', { src: this.props.data.picList[0] })
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tx' },
	                    _unicode2.default.toHex(this.props.data.content)
	                ),
	                imgList
	            );
	        }
	    }]);

	    return Newest_body_1;
	})(_react2.default.Component);

	var Newest_body_2 = (function (_React$Component3) {
	    _inherits(Newest_body_2, _React$Component3);

	    function Newest_body_2(props) {
	        _classCallCheck(this, Newest_body_2);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_body_2).call(this, props));
	    }

	    _createClass(Newest_body_2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tx' },
	                    _unicode2.default.toHex(this.props.data.content)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-model2' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: this.props.data.picList[0] })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: this.props.data.picList[1] })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: this.props.data.picList[2] })
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_body_2;
	})(_react2.default.Component);

	var Newest_foot = (function (_React$Component4) {
	    _inherits(Newest_foot, _React$Component4);

	    function Newest_foot(props) {
	        _classCallCheck(this, Newest_foot);

	        // console.log(props);

	        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_foot).call(this, props));

	        _this4.state = {
	            favorite: {
	                imgUrl: props.vars.path + 'img/collect.png',
	                imgActiveUrl: props.vars.path + 'img/collect-ed.png',
	                num: _this4.props.data.favoriteNum + ' +'
	            },
	            praise: {
	                imgUrl: props.vars.path + 'img/good.png',
	                imgActiveUrl: props.vars.path + 'img/good-ed.png',
	                num: _this4.props.data.praiseCount + ' +'
	            },
	            review: {
	                imgUrl: props.vars.path + 'img/review.png',
	                imgActiveUrl: props.vars.path + 'img/review-ed.png',
	                num: _this4.props.data.reviewCount + ' +'
	            },
	            imgAddrUrl: props.vars.path + 'img/map@3x.png'
	        };
	        return _this4;
	    }

	    _createClass(Newest_foot, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var favorite = this.state.favorite,
	                praise = this.state.praise,
	                review = this.state.review;
	            // console.log(this.state);
	            if (this.props.data.isFavorite) {
	                favorite.imgUrl = favorite.imgActiveUrl;
	                favorite.num = this.props.data.favoriteNum;
	            }
	            if (this.props.data.isFaved) {
	                praise.imgUrl = praise.imgActiveUrl;
	                praise.num = this.props.data.praiseCount;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var address = '';
	            if (this.props.data.location) {
	                address = _react2.default.createElement(
	                    'div',
	                    { className: 'newest-place' },
	                    _react2.default.createElement('img', { src: this.state.imgAddrUrl }),
	                    _unicode2.default.toHex(this.props.data.location)
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-foot' },
	                address,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tfoot' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-tfoot-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: this.state.favorite.imgUrl }),
	                            this.state.favorite.num
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: this.state.review.imgUrl }),
	                            this.state.review.num
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: this.state.praise.imgUrl }),
	                            this.state.praise.num
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_foot;
	})(_react2.default.Component);

	var Newest = (function (_React$Component5) {
	    _inherits(Newest, _React$Component5);

	    function Newest(props) {
	        _classCallCheck(this, Newest);

	        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Newest).call(this, props));

	        _this5.state = {
	            list: []
	        };
	        return _this5;
	    }

	    _createClass(Newest, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var list = this.props.data.map(function (v, ix) {
	                var newest = '';
	                if (v.picList.length <= 1) {
	                    newest = _react2.default.createElement(Newest_body_1, { data: v, vars: _this6.props.vars });
	                } else if (v.picList.length > 1) {
	                    newest = _react2.default.createElement(Newest_body_2, { data: v, vars: _this6.props.vars });
	                }
	                return _react2.default.createElement(
	                    'div',
	                    { key: v.id, className: 'newest-unit gap' },
	                    _react2.default.createElement(Newest_head, { data: v, vars: _this6.props.vars }),
	                    newest,
	                    _react2.default.createElement(Newest_foot, { data: v, vars: _this6.props.vars })
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { id: 'newest' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'newest-group' },
	                    list
	                )
	            );
	        }
	    }]);

	    return Newest;
	})(_react2.default.Component);

	exports.default = Newest;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./newest.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./newest.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    文字省略\n*/\n/*\n    弹性布局\n*/\n#newest #newest-group .newest-unit {\n  font-size: .4rem;\n  color: #999999;\n  padding-top: .2rem;\n  border-bottom: 2px solid #f6f6f8;\n  margin-top: 0.2rem;\n  background-color: #FFFFFF; }\n  #newest #newest-group .newest-unit:last-child {\n    border-bottom: none; }\n  #newest #newest-group .newest-unit .newest-head {\n    height: 1.2rem;\n    padding: 0 .2rem;\n    overflow: hidden; }\n    #newest #newest-group .newest-unit .newest-head .newest-imgUser {\n      float: left;\n      width: 13%; }\n      #newest #newest-group .newest-unit .newest-head .newest-imgUser img {\n        width: .8rem;\n        height: .8rem;\n        border-radius: 100%; }\n    #newest #newest-group .newest-unit .newest-head .newest-msg {\n      float: left;\n      width: 57%; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp {\n        padding-top: .1rem;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-name {\n          float: left;\n          margin-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag {\n          font-size: 60%;\n          margin-right: .1rem;\n          padding-right: .1rem;\n          border-right: 1px solid #999999; }\n          #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag:last-child {\n            border: none; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-dt {\n        padding-top: .1rem;\n        font-size: 60%; }\n    #newest #newest-group .newest-unit .newest-head .newest-source {\n      float: left;\n      width: 30%;\n      font-size: 60%;\n      padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 {\n        float: left;\n        text-align: right;\n        width: 75%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-1 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-2 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #2fa4f6;\n          padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 {\n        float: left;\n        text-align: right;\n        width: 25%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 img {\n          width: .4rem;\n          border-radius: 100%; }\n  #newest #newest-group .newest-unit .newest-body {\n    padding: 0 .2rem; }\n    #newest #newest-group .newest-unit .newest-body .newest-tx {\n      font-size: 90%;\n      color: #474747;\n      line-height: 1.7;\n      display: -webkit-box;\n      text-overflow: -o-ellipsis-lastline;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical; }\n    #newest #newest-group .newest-unit .newest-body .newest-model1 {\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model1 img {\n        width: 100%; }\n    #newest #newest-group .newest-unit .newest-body .newest-model2 {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img {\n        flex: 1;\n        padding-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img:last-child {\n          padding: 0; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img img {\n          width: 100%; }\n  #newest #newest-group .newest-unit .newest-foot .newest-place {\n    padding: 0 .2rem;\n    margin: .2rem 0;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-place img {\n      width: .21rem;\n      margin-right: .1rem; }\n  #newest #newest-group .newest-unit .newest-foot .newest-tfoot {\n    border-top: 1px solid #f6f6f8;\n    border-bottom: 1px solid #f6f6f8;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      padding: .25rem 0; }\n      #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 {\n        flex: 1;\n        text-align: center;\n        border-right: 1px solid #f6f6f8; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1:last-child {\n          border-right: none; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 img {\n          width: .3rem;\n          margin-right: .1rem; }\n", ""]);

	// exports


/***/ },

/***/ 233:
/***/ function(module, exports) {

	'use strict';

	var errs = function errs() {};

	/*
		@author
			abel
		@des
			前缀术语：
				un: 未放置，空参数
				unfully: 不完全，不完整，没有传递所有参数
				format: 格式不正确
	 */

	errs.err = function () {
		var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

		var obj = {
			format: '格式不正确! ' + name,
			un: '没有找到! ' + name,
			unMethod: '未提供该方法支持! ' + name,
			unFully: '未提供完善数据！' + name
		};
		if (key) {
			return obj[key];
		}
		console.err(obj['un'] + 'key');
	};

	errs.warn = function (key, name) {};

	errs.log = function (key, name) {};

	module.exports = errs;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(237);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var core = {};
	core.ajax = _app2.default;

	module.exports = core;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _user = __webpack_require__(238);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ajax = {};
	ajax.user = _user2.default;

	module.exports = ajax;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _roots = __webpack_require__(239);

	var _roots2 = _interopRequireDefault(_roots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var user = function user() {};
	/*
		@author
			abel
		@to
			abel || abel
		@des
			1. 处理关于user接口
		@api 
			show
				* mid: int 用户ID=原始用户ID+md5(原始用户ID+sharekey)
				* requester: string 发起请求用户的Openfire ID
		@version
			2016-03-09
	 */

	user.show = function (mid, requester, success, err) {
		if (mid && requester) {
			var url = _roots2.default.ajax.get('user_show', {
				mid: mid,
				requester: requester
			}, success, err);
		} else {
			console.err(_roots2.default.errs.err('unFully'), 'mid && requester');
		}
	};

	module.exports = user;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ajax = __webpack_require__(251);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var roots = function roots() {};
	roots.ajax = _ajax2.default;

	module.exports = roots;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(241);

	var Follow = (function (_React$Component) {
	    _inherits(Follow, _React$Component);

	    function Follow(props) {
	        _classCallCheck(this, Follow);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Follow).call(this, props));

	        _this.state = {
	            list: [],
	            num: 0
	        };
	        return _this;
	    }

	    _createClass(Follow, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var url = _formatAjax2.default.get(_vars2.default.api('follow_list'), {
	                ofid: _vars2.default.storageValue('user', 'ofusername'),
	                offset: 0,
	                count: 6
	            });
	            _superagent2.default.get(url).end(function (err, res) {
	                if (res.status === 200) {
	                    var data = JSON.parse(res.text);
	                    if (data.status.code === '0') {
	                        var list = _this2.state.list,
	                            num = data.sum;

	                        data = data.data;
	                        list.push.apply(list, data);
	                        _this2.setState({
	                            list: list,
	                            num: num
	                        });
	                    } else {
	                        alert(data.status.msg);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var List = this.state.list.map(function (v, i) {
	                return _react2.default.createElement('img', { className: 'follow-2-img', src: v.avatar, key: v.mid });
	            });
	            return _react2.default.createElement(
	                'div',
	                { id: 'follow' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'follow-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-1-name' },
	                            '他的关注'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-1-num' },
	                            this.state.num
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-2' },
	                        List
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-3-img' },
	                            _react2.default.createElement('img', { src: _vars2.default.path('staticPath') + "img/right@1.png" })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Follow;
	})(_react2.default.Component);

	exports.default = Follow;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./follow.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./follow.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#follow {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #follow #follow-group {\n    height: 1.3rem;\n    overflow: hidden; }\n    #follow #follow-group #follow-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #follow #follow-group #follow-1 #follow-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #follow #follow-group #follow-1 #follow-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #follow #follow-group #follow-2 {\n      width: 5.5rem;\n      height: 1.3rem;\n      float: left;\n      white-space: nowrap; }\n      #follow #follow-group #follow-2 .follow-2-img {\n        line-height: 1.3rem;\n        height: 0.78rem;\n        width: 0.78rem;\n        margin: .25rem .06rem;\n        border-radius: 100%; }\n    #follow #follow-group #follow-3 {\n      float: right; }\n      #follow #follow-group #follow-3 #follow-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #follow #follow-group #follow-3 #follow-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(244);

	var Group = (function (_React$Component) {
	    _inherits(Group, _React$Component);

	    function Group(props) {
	        _classCallCheck(this, Group);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this, props));

	        _this.state = {
	            list: [],
	            num: 0
	        };
	        return _this;
	    }

	    _createClass(Group, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var url = _formatAjax2.default.get(_vars2.default.api('tag_list'), {
	                mid: _vars2.default.storageValue('user', 'mid'),
	                offset: 0,
	                count: 4
	            });
	            _superagent2.default.get(url).end(function (err, res) {
	                if (res.status === 200) {
	                    var data = JSON.parse(res.text);
	                    if (data.status.code === '0') {
	                        var list = _this2.state.list,
	                            num = data.sum;

	                        data = data.data;
	                        list.push.apply(list, data);
	                        _this2.setState({
	                            list: list,
	                            num: num
	                        });
	                    } else {
	                        alert(data.status.msg);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var List = this.state.list.map(function (v, i) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'group-2-unit', key: v.tid },
	                    _react2.default.createElement('img', { className: 'group-2-img', src: v.icon }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'group-2-name' },
	                        _unicode2.default.toHex(v.name)
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { id: 'group' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'group-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-1-name' },
	                            '他的群组'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-1-num' },
	                            this.state.num
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-2' },
	                        List
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-3-img' },
	                            _react2.default.createElement('img', { src: _vars2.default.path('staticPath') + "img/right@1.png" })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Group;
	})(_react2.default.Component);

	exports.default = Group;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(245);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./group.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#group {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #group #group-group {\n    overflow: hidden;\n    padding-bottom: .4rem; }\n    #group #group-group #group-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #group #group-group #group-1 #group-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #group #group-group #group-1 #group-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #group #group-group #group-2 {\n      width: 5.5rem;\n      float: left;\n      padding-top: .25rem; }\n      #group #group-group #group-2 .group-2-unit {\n        float: left;\n        width: 1.35rem;\n        text-align: center; }\n        #group #group-group #group-2 .group-2-unit .group-2-img {\n          width: 1.1rem;\n          line-height: 1.04rem;\n          border-radius: 100%;\n          width: 80%; }\n        #group #group-group #group-2 .group-2-unit .group-2-name {\n          font-size: .15rem;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          padding: 0 .1rem; }\n    #group #group-group #group-3 {\n      float: right; }\n      #group #group-group #group-3 #group-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #group #group-group #group-3 #group-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(247);

	var Msg = (function (_React$Component) {
	    _inherits(Msg, _React$Component);

	    function Msg(props) {
	        _classCallCheck(this, Msg);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Msg).call(this, props));

	        _this.state = {
	            msg: _vars2.default.storageValue('user')
	        };
	        console.log(_this.state.msg);
	        return _this;
	    }

	    _createClass(Msg, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var msg = _vars2.default.storageValue('user');
	            if (msg) {
	                msg.gender = this.initSex(msg.gender);
	                msg.extension = JSON.parse(msg.extension);
	            }
	            this.state = {
	                msg: msg
	            };
	        }

	        /*
	            转换成可看的性别代号
	         */

	    }, {
	        key: 'initSex',
	        value: function initSex(sex) {
	            // if(sex === 'm') {
	            //     return '男'
	            // } else if(sex === 'f') {
	            //     return '女'
	            // } else {
	            //     return '未知'
	            // }
	            switch (sex) {
	                case 'm':
	                    return '男';
	                    break;
	                case 'f':
	                    return '女';
	                    break;
	                default:
	                    return '未知';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'msg', className: 'gap' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'msg-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'msg-label-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '昵称'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '性别'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '年龄'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '地区'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '职业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '个性签名'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '兴趣好爱'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'msg-tx-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            _unicode2.default.toHex(this.state.msg.nickname)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            this.state.msg.gender
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            this.state.msg.age
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            _unicode2.default.toHex(this.state.msg.address)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            _unicode2.default.toHex(this.state.msg.extension.position)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            _unicode2.default.toHex(this.state.msg.sign)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            _unicode2.default.toHex(this.state.msg.extension.interest)
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Msg;
	})(_react2.default.Component);

	exports.default = Msg;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./msg.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./msg.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#msg {\n  padding: 0 .2rem;\n  background-color: #FFFFFF; }\n  #msg #msg-group {\n    font-size: .3rem;\n    line-height: 1rem;\n    overflow: hidden; }\n    #msg #msg-group #msg-label-group {\n      float: left;\n      width: 20%;\n      text-align: left; }\n      #msg #msg-group #msg-label-group .msg-label {\n        font-size: 110%;\n        color: #999999; }\n    #msg #msg-group #msg-tx-group {\n      float: right;\n      width: 80%;\n      text-align: right; }\n      #msg #msg-group #msg-tx-group .msg-tx {\n        border-bottom: 1px solid #f6f6f8;\n        color: #474747;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        #msg #msg-group #msg-tx-group .msg-tx:last-child {\n          border: none; }\n", ""]);

	// exports


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(250);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./user.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./user.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\n#user-content {\n  background-color: #f6f6f8; }\n  #user-content .user-md {\n    display: none; }\n    #user-content .user-md.active {\n      display: block; }\n", ""]);

	// exports


/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _errs = __webpack_require__(233);

	var _errs2 = _interopRequireDefault(_errs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
		@structure
			
			底层  - 中间层
				 / ajax_common 公共部分：请求结束后的执行结构
				/
			ajax - get 对外提供get方法
				 - post 对外提供post方法

		@author
			abel
		@des
			1. 代理请求
			2. 处理请求中间过程
		@api
			ajax || post || get
			ajax:
				* method: String 请求方法
				* name: String 接口名称
				* params: Object 接口需要参数
				* success: Function 成功方法
				* error: Function 失败方法
			post:
				* name
				* params
				* success
				* error
			get: 
				* name
				* params
				* success
				* error
		@version
			2016-03-10
	 */

	var ajax = function ajax() {};
	ajax.ajax = function () {
		var method = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
		var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
		var success = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];
		var error = arguments.length <= 4 || arguments[4] === undefined ? function (data) {
			alert(data.status.msg);
		} : arguments[4];

		var url = _vars2.default.api(name);
		if (url) {
			if (method === 'get' || method === undefined) {
				url = _formatAjax2.default.get(_vars2.default.api(name), params);
				_superagent2.default.get(url).end(function (err, res) {
					roots.ajax_common(res, success, error);
				});
			} else if (method === 'post') {
				_superagent2.default.post(url).send(params).end(function (err, res) {
					roots.ajax_common(res, success, error);
				});
			} else {
				console.err(_errs2.default.err('unMethod', method));
			}
		} else {
			console.err(_errs2.default.err('un', name));
		}
	};

	ajax.ajax_common = function (res, success, error) {
		if (res.status === 200) {
			var data = JSON.parse(res.text);
			if (data.status.code === '0') {
				success(data);
			} else {
				error(data);
			}
		}
	};

	ajax.get = function (name, params, success, error) {
		roots.ajax('get', name, params, success, error);
	};

	ajax.post = function (name, params, success, error) {
		roots.ajax('post', name, params, success, error);
	};

	module.exports = ajax;

/***/ }

});