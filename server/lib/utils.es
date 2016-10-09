'use strict';

import * as _base from './base';
import * as _dataFetch from './dataFetch';
import * as _cache from './cache';
import * as _lodash from 'lodash';

export var ral = {
	hostUrl: _dataFetch.hostUrl,
	rootUrl: _dataFetch.rootUrl,
	fullUrl: _dataFetch.fullUrl,
	fetch: _dataFetch.onRal
}

export var base = Object.assign(_base, _base.config);

export var cache = _cache;

export var lodash = _lodash;
