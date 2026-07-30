//#region src/module/constants.ts
var e = "WFRP4E_ENHANCED_FEAR_TERROR", t = "wfrp4e-enhanced-fear-terror", n = "WFRP4e Enhanced Fear & Terror", r = "wfrp4e";
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function i(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var a = {}, o = [], s = () => {}, c = () => !1, l = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), u = (e) => e.startsWith("onUpdate:"), d = Object.assign, f = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, p = Object.prototype.hasOwnProperty, m = (e, t) => p.call(e, t), h = Array.isArray, g = (e) => ee(e) === "[object Map]", _ = (e) => ee(e) === "[object Set]", v = (e) => ee(e) === "[object Date]", y = (e) => typeof e == "function", b = (e) => typeof e == "string", x = (e) => typeof e == "symbol", S = (e) => typeof e == "object" && !!e, C = (e) => (S(e) || y(e)) && y(e.then) && y(e.catch), w = Object.prototype.toString, ee = (e) => w.call(e), te = (e) => ee(e).slice(8, -1), ne = (e) => ee(e) === "[object Object]", re = (e) => b(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ie = /* @__PURE__ */ i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, E = T((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, se = T((e) => e.replace(oe, "-$1").toLowerCase()), D = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = T((e) => e ? `on${D(e)}` : ""), O = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function me(e) {
	if (h(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = b(r) ? ve(r) : me(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (b(e) || S(e)) return e;
}
var he = /;(?![^(]*\))/g, ge = /:([^]+)/, _e = /\/\*[^]*?\*\//g;
function ve(e) {
	let t = {};
	return e.replace(_e, "").split(he).forEach((e) => {
		if (e) {
			let n = e.split(ge);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (b(e)) t = e;
	else if (h(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (S(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ye = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", be = /* @__PURE__ */ i(ye);
ye + "";
function xe(e) {
	return !!e || e === "";
}
function Se(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ce(e[r], t[r]);
	return n;
}
function Ce(e, t) {
	if (e === t) return !0;
	let n = v(e), r = v(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = x(e), r = x(t), n || r) return e === t;
	if (n = h(e), r = h(t), n || r) return n && r ? Se(e, t) : !1;
	if (n = S(e), r = S(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ce(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var we = (e) => !!(e && e.__v_isRef === !0), Te = (e) => b(e) ? e : e == null ? "" : h(e) || S(e) && (e.toString === w || !y(e.toString)) ? we(e) ? Te(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => we(t) ? Ee(e, t.value) : g(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : _(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : x(t) ? De(t) : S(t) && !h(t) && !ne(t) ? String(t) : t, De = (e, t = "") => x(e) ? `Symbol(${e.description ?? t})` : e, A, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function ke(e) {
	return new Oe(e);
}
function Ae() {
	return A;
}
function je(e, t = !1) {
	A && A.cleanups.push(e);
}
var j, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Me.has(this) && (Me.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ye(this), Be(this);
		let e = j, t = M;
		j = this, M = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), j = e, M = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Ye(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Me.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Pe = 0, Fe, Ie;
function Le(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ie, Ie = e;
		return;
	}
	e.next = Fe, Fe = e;
}
function Re() {
	Pe++;
}
function ze() {
	if (--Pe > 0) return;
	if (Ie) {
		let e = Ie;
		for (Ie = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Fe;) {
		let t = Fe;
		for (Fe = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xe) || (e.globalVersion = Xe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = M;
	j = e, M = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, M = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var M = !0, Ke = [];
function qe() {
	Ke.push(M), M = !1;
}
function Je() {
	let e = Ke.pop();
	M = e === void 0 ? !0 : e;
}
function Ye(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Xe = 0, Ze = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !M || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Ze(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, $e(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Xe++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function $e(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) $e(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (M && j) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function it(e, t, n, r, i, a) {
	let o = et.get(e);
	if (!o) {
		Xe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = h(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === rt || !x(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(rt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(tt)), g(e) && s(o.get(nt)));
				break;
			case "delete":
				i || (s(o.get(tt)), g(e) && s(o.get(nt)));
				break;
			case "set":
				g(e) && s(o.get(tt));
				break;
		}
	}
	ze();
}
function at(e, t) {
	let n = et.get(e);
	return n && n.get(t);
}
function ot(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (N(t, "iterate", rt), /* @__PURE__ */ I(e) ? t : t.map(R));
}
function st(e) {
	return N(e = /* @__PURE__ */ L(e), "iterate", rt), e;
}
function P(e, t) {
	return /* @__PURE__ */ Ht(e) ? Gt(/* @__PURE__ */ F(e) ? R(t) : t) : R(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => P(this, e));
	},
	concat(...e) {
		return ot(this).concat(...e.map((e) => h(e) ? ot(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = P(this, e[1]), e));
	},
	every(e, t) {
		return dt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return dt(this, "filter", e, t, (e) => e.map((e) => P(this, e)), arguments);
	},
	find(e, t) {
		return dt(this, "find", e, t, (e) => P(this, e), arguments);
	},
	findIndex(e, t) {
		return dt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return dt(this, "findLast", e, t, (e) => P(this, e), arguments);
	},
	findLastIndex(e, t) {
		return dt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return dt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return pt(this, "includes", e);
	},
	indexOf(...e) {
		return pt(this, "indexOf", e);
	},
	join(e) {
		return ot(this).join(e);
	},
	lastIndexOf(...e) {
		return pt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return dt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return mt(this, "pop");
	},
	push(...e) {
		return mt(this, "push", e);
	},
	reduce(e, ...t) {
		return ft(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ft(this, "reduceRight", e, t);
	},
	shift() {
		return mt(this, "shift");
	},
	some(e, t) {
		return dt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return mt(this, "splice", e);
	},
	toReversed() {
		return ot(this).toReversed();
	},
	toSorted(e) {
		return ot(this).toSorted(e);
	},
	toSpliced(...e) {
		return ot(this).toSpliced(...e);
	},
	unshift(...e) {
		return mt(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => P(this, e));
	}
};
function lt(e, t, n) {
	let r = st(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ I(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ut = Array.prototype;
function dt(e, t, n, r, i, a) {
	let o = st(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== ut[t]) {
		let t = c.apply(e, a);
		return s ? R(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, P(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ft(e, t, n, r) {
	let i = st(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = P(e, t)), n.call(this, t, P(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? P(e, c) : c;
}
function pt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	N(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ut(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	qe(), Re();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return ze(), Je(), r;
}
var ht = /* @__PURE__ */ i("__proto__,__v_isRef,__isVue"), gt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(x));
function _t(e) {
	x(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var vt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? It : Ft : i ? Pt : Nt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = h(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return _t;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ z(e) ? e : n);
		if ((x(t) ? gt.has(t) : ht(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ z(o)) {
			let e = a && re(t) ? o : o.value;
			return r && S(e) ? /* @__PURE__ */ Bt(e) : e;
		}
		return S(o) ? r ? /* @__PURE__ */ Bt(o) : /* @__PURE__ */ Rt(o) : o;
	}
}, yt = class extends vt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = h(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ht(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ Ht(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : m(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ z(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && (o ? O(n, i) && it(e, "set", t, n, i) : it(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = m(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && it(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!x(t) || !gt.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", h(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, bt = class extends vt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new yt(!0), wt = (e) => e, Tt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = g(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? wt : t ? Gt : R;
		return !t && N(a, "iterate", c ? nt : tt), d(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function Dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ot(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (O(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? Gt : R;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ L(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (O(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? wt : e ? Gt : R;
			return !e && N(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return d(n, e ? {
		add: Dt("add"),
		set: Dt("set"),
		delete: Dt("delete"),
		clear: Dt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = Tt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ Ht(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), it(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ I(n) && !/* @__PURE__ */ Ht(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && it(r, "set", e, n, s) : it(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = Tt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && it(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && it(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Et(r, e, t);
	}), n;
}
function kt(e, t) {
	let n = Ot(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(m(n, r) && r in t ? n : t, r, i);
}
var At = { get: /* @__PURE__ */ kt(!1, !1) }, jt = { get: /* @__PURE__ */ kt(!1, !0) }, Mt = { get: /* @__PURE__ */ kt(!0, !1) }, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
function Lt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return /* @__PURE__ */ Ht(e) ? e : Vt(e, !1, xt, At, Nt);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return Vt(e, !1, Ct, jt, Pt);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Vt(e, !0, St, Mt, Ft);
}
function Vt(e, t, n, r, i) {
	if (!S(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Lt(te(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ F(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function Wt(e) {
	return !m(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var R = (e) => S(e) ? /* @__PURE__ */ Rt(e) : e, Gt = (e) => S(e) ? /* @__PURE__ */ Bt(e) : e;
// @__NO_SIDE_EFFECTS__
function z(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !1);
}
function qt(e, t) {
	return /* @__PURE__ */ z(e) ? e : new Jt(e, t);
}
var Jt = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : R(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ Ht(e);
		e = n ? e : /* @__PURE__ */ L(e), O(e, t) && (this._rawValue = e, this._value = n ? e : R(e), this.dep.trigger());
	}
};
function B(e) {
	return /* @__PURE__ */ z(e) ? e.value : e;
}
var Yt = {
	get: (e, t, n) => t === "__v_raw" ? e : B(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Xt(e) {
	return /* @__PURE__ */ F(e) ? e : new Proxy(e, Yt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	let t = h(e) ? Array(e.length) : {};
	for (let n in e) t[n] = tn(e, n);
	return t;
}
var Qt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = x(t) ? t : String(t), this._raw = /* @__PURE__ */ L(e);
		let r = !0, i = e;
		if (!h(e) || x(this._key) || !re(this._key)) do
			r = !/* @__PURE__ */ Ut(i) || /* @__PURE__ */ I(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = B(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ z(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ z(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return at(this._raw, this._key);
	}
}, $t = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function en(e, t, n) {
	return /* @__PURE__ */ z(e) ? e : y(e) ? new $t(e) : S(e) && arguments.length > 1 ? tn(e, t, n) : /* @__PURE__ */ Kt(e);
}
function tn(e, t, n) {
	return new Qt(e, t, n);
}
var nn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function rn(e, t, n = !1) {
	let r, i;
	return y(e) ? r = e : (r = e.get, i = e.set), new nn(r, i, n);
}
var an = {}, on = /* @__PURE__ */ new WeakMap(), sn = void 0;
function cn(e, t = !1, n = sn) {
	if (n) {
		let t = on.get(n);
		t || on.set(n, t = []), t.push(e);
	}
}
function ln(e, t, n = a) {
	let { immediate: r, deep: i, once: o, scheduler: c, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ I(e) || i === !1 || i === 0 ? un(e, 1) : un(e), p, m, g, _, v = !1, b = !1;
	if (/* @__PURE__ */ z(e) ? (m = () => e.value, v = /* @__PURE__ */ I(e)) : /* @__PURE__ */ F(e) ? (m = () => d(e), v = !0) : h(e) ? (b = !0, v = e.some((e) => /* @__PURE__ */ F(e) || /* @__PURE__ */ I(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ z(e)) return e.value;
		if (/* @__PURE__ */ F(e)) return d(e);
		if (y(e)) return u ? u(e, 2) : e();
	})) : m = y(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (g) {
			qe();
			try {
				g();
			} finally {
				Je();
			}
		}
		let t = sn;
		sn = p;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			sn = t;
		}
	} : s, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => un(e(), t);
	}
	let x = Ae(), S = () => {
		p.stop(), x && x.active && f(x.effects, p);
	};
	if (o && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(an) : an, w = (e) => {
		if (!(!(p.flags & 1) || !p.dirty && !e)) if (t) {
			let n = p.run();
			if (e || i || v || (b ? n.some((e, t) => O(e, C[t])) : O(n, C))) {
				g && g();
				let e = sn;
				sn = p;
				try {
					let e = [
						n,
						C === an ? void 0 : b && C[0] === an ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					sn = e;
				}
			}
		} else p.run();
	};
	return l && l(w), p = new Ne(m), p.scheduler = c ? () => c(w, !1) : w, _ = (e) => cn(e, !1, p), g = p.onStop = () => {
		let e = on.get(p);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			on.delete(p);
		}
	}, t ? r ? w(!0) : C = p.run() : c ? c(w.bind(null, !0), !0) : p.run(), S.pause = p.pause.bind(p), S.resume = p.resume.bind(p), S.stop = S, S;
}
function un(e, t = Infinity, n) {
	if (t <= 0 || !S(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ z(e)) un(e.value, t, n);
	else if (h(e)) for (let r = 0; r < e.length; r++) un(e[r], t, n);
	else if (_(e) || g(e)) e.forEach((e) => {
		un(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) un(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && un(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function dn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		fn(e, t, n);
	}
}
function V(e, t, n, r) {
	if (y(e)) {
		let i = dn(e, t, n, r);
		return i && C(i) && i.catch((e) => {
			fn(e, t, n);
		}), i;
	}
	if (h(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(V(e[a], t, n, r));
		return i;
	}
}
function fn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || a;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			qe(), dn(o, null, 10, [
				e,
				i,
				a
			]), Je();
			return;
		}
	}
	pn(e, n, i, r, s);
}
function pn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var H = [], U = -1, mn = [], hn = null, gn = 0, _n = /* @__PURE__ */ Promise.resolve(), vn = null;
function yn(e) {
	let t = vn || _n;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function bn(e) {
	let t = U + 1, n = H.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = H[r], a = En(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function xn(e) {
	if (!(e.flags & 1)) {
		let t = En(e), n = H[H.length - 1];
		!n || !(e.flags & 2) && t >= En(n) ? H.push(e) : H.splice(bn(t), 0, e), e.flags |= 1, Sn();
	}
}
function Sn() {
	vn ||= _n.then(Dn);
}
function Cn(e) {
	h(e) ? mn.push(...e) : hn && e.id === -1 ? hn.splice(gn + 1, 0, e) : e.flags & 1 || (mn.push(e), e.flags |= 1), Sn();
}
function wn(e, t, n = U + 1) {
	for (; n < H.length; n++) {
		let t = H[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			H.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Tn(e) {
	if (mn.length) {
		let e = [...new Set(mn)].sort((e, t) => En(e) - En(t));
		if (mn.length = 0, hn) {
			hn.push(...e);
			return;
		}
		for (hn = e, gn = 0; gn < hn.length; gn++) {
			let e = hn[gn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		hn = null, gn = 0;
	}
}
var En = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Dn(e) {
	try {
		for (U = 0; U < H.length; U++) {
			let e = H[U];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), dn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; U < H.length; U++) {
			let e = H[U];
			e && (e.flags &= -2);
		}
		U = -1, H.length = 0, Tn(e), vn = null, (H.length || mn.length) && Dn(e);
	}
}
var W = null, On = null;
function kn(e) {
	let t = W;
	return W = e, On = e && e.type.__scopeId || null, t;
}
function An(e, t = W, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ii(-1);
		let i = kn(t), a;
		try {
			a = e(...n);
		} finally {
			kn(i), r._d && Ii(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function jn(e, t) {
	if (W === null) return e;
	let n = va(W), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, o, s, c = a] = t[e];
		i && (y(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && un(o), r.push({
			dir: i,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Mn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (qe(), V(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Je());
	}
}
function Nn(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function Pn(e, t, n = !1) {
	let r = ra();
	if (r || Br) {
		let i = Br ? Br._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && y(t) ? t.call(r && r.proxy) : t;
	}
}
function Fn() {
	return !!(ra() || Br);
}
var In = /* @__PURE__ */ Symbol.for("v-scx"), Ln = () => Pn(In);
function Rn(e, t, n) {
	return zn(e, t, n);
}
function zn(e, t, n = a) {
	let { immediate: r, deep: i, flush: o, once: c } = n, l = d({}, n), u = t && r || !t && o !== "post", f;
	if (la) {
		if (o === "sync") {
			let e = Ln();
			f = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = s, e.resume = s, e.pause = s, e;
		}
	}
	let p = $;
	l.call = (e, t, n) => V(e, p, t, n);
	let m = !1;
	o === "post" ? l.scheduler = (e) => {
		K(e, p && p.suspense);
	} : o !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : xn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = ln(e, t, l);
	return la && (f ? f.push(h) : u && h()), h;
}
function Bn(e, t, n) {
	let r = this.proxy, i = b(e) ? e.includes(".") ? Vn(r, e) : () => r[e] : e.bind(r, r), a;
	y(t) ? a = t : (a = t.handler, n = t);
	let o = oa(this), s = zn(i, a.bind(r), n);
	return o(), s;
}
function Vn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Hn = /* @__PURE__ */ Symbol("_vte"), Un = (e) => e.__isTeleport, Wn = /* @__PURE__ */ Symbol("_leaveCb");
function Gn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Gn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
	return y(e) ? /* @__PURE__ */ d({ name: e.name }, t, { setup: e }) : e;
}
function qn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Jn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Yn = /* @__PURE__ */ new WeakMap();
function Xn(e, t, n, r, i = !1) {
	if (h(e)) {
		e.forEach((e, a) => Xn(e, t && (h(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Qn(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Xn(e, t, n, r.component.subTree);
		return;
	}
	let o = r.shapeFlag & 4 ? va(r.component) : r.el, s = i ? null : o, { i: l, r: u } = e, d = t && t.r, p = l.refs === a ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ L(g), v = g === a ? c : (e) => Jn(p, e) ? !1 : m(_, e), x = (e, t) => !(t && Jn(p, t));
	if (d != null && d !== u) {
		if (Zn(t), b(d)) p[d] = null, v(d) && (g[d] = null);
		else if (/* @__PURE__ */ z(d)) {
			let e = t;
			x(d, e.k) && (d.value = null), e.k && (p[e.k] = null);
		}
	}
	if (y(u)) dn(u, l, 12, [s, p]);
	else {
		let t = b(u), r = /* @__PURE__ */ z(u);
		if (t || r) {
			let a = () => {
				if (e.f) {
					let n = t ? v(u) ? g[u] : p[u] : x(u) || !e.k ? u.value : p[e.k];
					if (i) h(n) && f(n, o);
					else if (h(n)) n.includes(o) || n.push(o);
					else if (t) p[u] = [o], v(u) && (g[u] = p[u]);
					else {
						let t = [o];
						x(u, e.k) && (u.value = t), e.k && (p[e.k] = t);
					}
				} else t ? (p[u] = s, v(u) && (g[u] = s)) : r && (x(u, e.k) && (u.value = s), e.k && (p[e.k] = s));
			};
			if (s) {
				let t = () => {
					a(), Yn.delete(e);
				};
				t.id = -1, Yn.set(e, t), K(t, n);
			} else Zn(e), a();
		}
	}
}
function Zn(e) {
	let t = Yn.get(e);
	t && (t.flags |= 8, Yn.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var Qn = (e) => !!e.type.__asyncLoader, $n = (e) => e.type.__isKeepAlive;
function er(e, t) {
	nr(e, "a", t);
}
function tr(e, t) {
	nr(e, "da", t);
}
function nr(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ir(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) $n(e.parent.vnode) && rr(r, t, n, e), e = e.parent;
	}
}
function rr(e, t, n, r) {
	let i = ir(t, e, r, !0);
	dr(() => {
		f(r[t], i);
	}, n);
}
function ir(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = oa(n), a = V(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var ar = (e) => (t, n = $) => {
	(!la || e === "sp") && ir(e, (...e) => t(...e), n);
}, or = ar("bm"), sr = ar("m"), cr = ar("bu"), lr = ar("u"), ur = ar("bum"), dr = ar("um"), fr = ar("sp"), pr = ar("rtg"), mr = ar("rtc");
function hr(e, t = $) {
	ir("ec", e, t);
}
var gr = /* @__PURE__ */ Symbol.for("v-ndc");
function _r(e, t, n, r) {
	let i, a = n && n[r], o = h(e);
	if (o || b(e)) {
		let n = o && /* @__PURE__ */ F(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ I(e), s = /* @__PURE__ */ Ht(e), e = st(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Gt(R(e[n])) : R(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (S(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var vr = (e) => e ? ca(e) ? va(e) : vr(e.parent) : null, yr = /* @__PURE__ */ d(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => vr(e.parent),
	$root: (e) => vr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Or(e),
	$forceUpdate: (e) => e.f ||= () => {
		xn(e.update);
	},
	$nextTick: (e) => e.n ||= yn.bind(e.proxy),
	$watch: (e) => Bn.bind(e)
}), br = (e, t) => e !== a && !e.__isScriptSetup && m(e, t), xr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (br(r, t)) return s[t] = 1, r[t];
			else if (i !== a && m(i, t)) return s[t] = 2, i[t];
			else if (m(o, t)) return s[t] = 3, o[t];
			else if (n !== a && m(n, t)) return s[t] = 4, n[t];
			else Cr && (s[t] = 0);
		}
		let u = yr[t], d, f;
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== a && m(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, m(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: o } = e;
		return br(i, t) ? (i[t] = n, !0) : r !== a && m(r, t) ? (r[t] = n, !0) : m(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== a && c[0] !== "$" && m(e, c) || br(t, c) || m(o, c) || m(r, c) || m(yr, c) || m(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? m(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Sr(e) {
	return h(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Cr = !0;
function wr(e) {
	let t = Or(e), n = e.proxy, r = e.ctx;
	Cr = !1, t.beforeCreate && Er(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: g, activated: _, deactivated: v, beforeDestroy: b, beforeUnmount: x, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: T, inheritAttrs: ae, components: E, directives: oe, filters: se } = t;
	if (u && Tr(u, r, null), o) for (let e in o) {
		let t = o[e];
		y(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		S(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Cr = !0, a) for (let e in a) {
		let t = a[e], i = ba({
			get: y(t) ? t.bind(n, n) : y(t.get) ? t.get.bind(n, n) : s,
			set: !y(t) && y(t.set) ? t.set.bind(n) : s
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Dr(c[e], r, n, e);
	if (l) {
		let e = y(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Nn(t, e[t]);
		});
	}
	d && Er(d, e, "c");
	function D(e, t) {
		h(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(or, f), D(sr, p), D(cr, m), D(lr, g), D(er, _), D(tr, v), D(hr, re), D(mr, te), D(pr, ne), D(ur, x), D(dr, w), D(fr, ie), h(T)) if (T.length) {
		let t = e.exposed ||= {};
		T.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === s && (e.render = ee), ae != null && (e.inheritAttrs = ae), E && (e.components = E), oe && (e.directives = oe), ie && qn(e);
}
function Tr(e, t, n = s) {
	h(e) && (e = Nr(e));
	for (let n in e) {
		let r = e[n], i;
		i = S(r) ? "default" in r ? Pn(r.from || n, r.default, !0) : Pn(r.from || n) : Pn(r), /* @__PURE__ */ z(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Er(e, t, n) {
	V(h(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Dr(e, t, n, r) {
	let i = r.includes(".") ? Vn(n, r) : () => n[r];
	if (b(e)) {
		let n = t[e];
		y(n) && Rn(i, n);
	} else if (y(e)) Rn(i, e.bind(n));
	else if (S(e)) if (h(e)) e.forEach((e) => Dr(e, t, n, r));
	else {
		let r = y(e.handler) ? e.handler.bind(n) : t[e.handler];
		y(r) && Rn(i, r, e);
	}
}
function Or(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => kr(c, e, o, !0)), kr(c, t, o)), S(t) && a.set(t, c), c;
}
function kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && kr(e, a, n, !0), i && i.forEach((t) => kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ar[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ar = {
	data: jr,
	props: Fr,
	emits: Fr,
	methods: Pr,
	computed: Pr,
	beforeCreate: G,
	created: G,
	beforeMount: G,
	mounted: G,
	beforeUpdate: G,
	updated: G,
	beforeDestroy: G,
	beforeUnmount: G,
	destroyed: G,
	unmounted: G,
	activated: G,
	deactivated: G,
	errorCaptured: G,
	serverPrefetch: G,
	components: Pr,
	directives: Pr,
	watch: Ir,
	provide: jr,
	inject: Mr
};
function jr(e, t) {
	return t ? e ? function() {
		return d(y(e) ? e.call(this, this) : e, y(t) ? t.call(this, this) : t);
	} : t : e;
}
function Mr(e, t) {
	return Pr(Nr(e), Nr(t));
}
function Nr(e) {
	if (h(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function G(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Pr(e, t) {
	return e ? d(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fr(e, t) {
	return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : d(/* @__PURE__ */ Object.create(null), Sr(e), Sr(t ?? {})) : t;
}
function Ir(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = d(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = G(e[r], t[r]);
	return n;
}
function Lr() {
	return {
		app: null,
		config: {
			isNativeTag: c,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Rr = 0;
function zr(e, t) {
	return function(n, r = null) {
		y(n) || (n = d({}, n)), r != null && !S(r) && (r = null);
		let i = Lr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Rr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: xa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && y(e.install) ? (a.add(e), e.install(c, ...t)) : y(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Ui(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, va(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (V(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Br;
				Br = c;
				try {
					return e();
				} finally {
					Br = t;
				}
			}
		};
		return c;
	};
}
var Br = null, Vr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${se(t)}Modifiers`];
function Hr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || a, i = n, o = t.startsWith("update:"), s = o && Vr(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => b(e) ? e.trim() : e)), s.number && (i = n.map(de)));
	let c, l = r[c = ce(t)] || r[c = ce(E(t))];
	!l && o && (l = r[c = ce(se(t))]), l && V(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, V(u, e, 6, i);
	}
}
var Ur = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
	let r = n ? Ur : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!y(e)) {
		let r = (e) => {
			let n = Wr(e, t, !0);
			n && (s = !0, d(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (S(e) && r.set(e, null), null) : (h(a) ? a.forEach((e) => o[e] = null) : d(o, a), S(e) && r.set(e, o), o);
}
function Gr(e, t) {
	return !e || !l(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), m(e, t[0].toLowerCase() + t.slice(1)) || m(e, se(t)) || m(e, t));
}
function Kr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = kn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Xi(l.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Xi(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : qr(s);
		}
	} catch (t) {
		Ni.length = 0, fn(t, e, 1), v = Ui(ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(u) && (y = Jr(y, a)), b = Ki(b, y, !1, !0));
	}
	return n.dirs && (b = Ki(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Gn(b, n.transition), v = b, kn(_), v;
}
var qr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || l(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Jr = (e, t) => {
	let n = {};
	for (let r in e) (!u(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Yr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Xr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Zr(o, r, n) && !Gr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Xr(r, o, l) : !0 : !!o;
	return !1;
}
function Xr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Zr(t, e, a) && !Gr(n, a)) return !0;
	}
	return !1;
}
function Zr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && S(r) && S(i) ? !Ce(r, i) : r !== i;
}
function Qr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var $r = {}, ei = () => Object.create($r), ti = (e) => Object.getPrototypeOf(e) === $r;
function ni(e, t, n, r = !1) {
	let i = {}, a = ei();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ii(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ zt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ri(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Gr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (m(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = ai(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ii(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !m(t, a) && ((r = se(a)) === a || !m(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !m(t, e)) && (delete a[e], l = !0);
	}
	l && it(e.attrs, "set", "");
}
function ii(e, t, n, r) {
	let [i, o] = e.propsOptions, s = !1, c;
	if (t) for (let a in t) {
		if (ie(a)) continue;
		let l = t[a], u;
		i && m(i, u = E(a)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Gr(e.emitsOptions, a) || (!(a in r) || l !== r[a]) && (r[a] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ L(n), r = c || a;
		for (let a = 0; a < o.length; a++) {
			let s = o[a];
			n[s] = ai(i, t, s, r[s], e, !m(r, s));
		}
	}
	return s;
}
function ai(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = m(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && y(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = oa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === se(n)) && (r = !0));
	}
	return r;
}
var oi = /* @__PURE__ */ new WeakMap();
function si(e, t, n = !1) {
	let r = n ? oi : t.propsCache, i = r.get(e);
	if (i) return i;
	let s = e.props, c = {}, l = [], u = !1;
	if (!y(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = si(e, t, !0);
			d(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !u) return S(e) && r.set(e, o), o;
	if (h(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		ci(t) && (c[t] = a);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (ci(t)) {
			let n = s[e], r = c[t] = h(n) || y(n) ? { type: n } : d({}, n), i = r.type, a = !1, o = !0;
			if (h(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = y(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = y(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || m(r, "default")) && l.push(t);
		}
	}
	let f = [c, l];
	return S(e) && r.set(e, f), f;
}
function ci(e) {
	return e[0] !== "$" && !ie(e);
}
var li = (e) => e === "_" || e === "_ctx" || e === "$stable", di = (e) => h(e) ? e.map(Xi) : [Xi(e)], fi = (e, t, n) => {
	if (t._n) return t;
	let r = An((...e) => di(t(...e)), n);
	return r._c = !1, r;
}, pi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (li(n)) continue;
		let i = e[n];
		if (y(i)) t[n] = fi(n, i, r);
		else if (i != null) {
			let e = di(i);
			t[n] = () => e;
		}
	}
}, mi = (e, t) => {
	let n = di(t);
	e.slots.default = () => n;
}, hi = (e, t, n) => {
	for (let r in t) (n || !li(r)) && (e[r] = t[r]);
}, gi = (e, t, n) => {
	let r = e.slots = ei();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (hi(r, t, n), n && ue(r, "_", e, !0)) : pi(t, r);
	} else t && mi(e, t);
}, _i = (e, t, n) => {
	let { vnode: r, slots: i } = e, o = !0, s = a;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : hi(i, t, n) : (o = !t.$stable, pi(t, i)), s = t;
	} else t && (mi(e, t), s = { default: 1 });
	if (o) for (let e in i) !li(e) && s[e] == null && delete i[e];
}, K = ki;
function vi(e) {
	return yi(e);
}
function yi(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = s, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Bi(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ai:
				y(e, t, n, r);
				break;
			case ji:
				b(e, t, n, r);
				break;
			case Mi:
				e ?? x(t, n, r, o);
				break;
			case q:
				E(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? Xn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Xn(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = u(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = d(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, i, a, o, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, o, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, a, bi(e, o), s, u), _ && Mn(e, null, i, "created"), te(d, e, e.scopeId, s, i), m) {
			for (let e in m) e !== "value" && !ie(e) && c(d, e, null, m[e], o, i);
			"value" in m && c(d, "value", null, m.value, o), (f = m.onVnodeBeforeMount) && Q(f, i, e);
		}
		_ && Mn(e, null, i, "beforeMount");
		let v = Si(a, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				f && Q(f, i, e), v && g.enter(d), _ && Mn(e, null, i, "mounted");
			} finally {}
		}, a);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Oi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Zi(e[l]) : Xi(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, r, i, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || a, h = t.props || a, g;
		if (n && xi(n, !1), (g = h.onVnodeBeforeUpdate) && Q(g, n, t, e), f && Mn(t, e, n, "beforeUpdate"), n && xi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, n, r, bi(t, i), o) : s || ue(e, t, l, null, n, r, bi(t, i), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, n, i);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, i), u & 4 && c(l, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], a = m[r], o = h[r];
					(o !== a || r === "value") && c(l, r, a, o, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ae(l, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && K(() => {
			g && Q(g, n, t, e), f && Mn(t, e, n, "updated");
		}, r);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === q || !Bi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ae = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== a) for (let a in t) !ie(a) && !(a in n) && c(e, a, t[a], null, i, r);
			for (let a in n) {
				if (ie(a)) continue;
				let o = n[a], s = t[a];
				o !== s && a !== "value" && c(e, a, s, o, i, r);
			}
			"value" in n && c(e, "value", t.value, n.value, i);
		}
	}, E = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Ci(e, t, !0)) : ue(e, t, n, f, a, o, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = na(e, r, i);
		if ($n(e) && (s.ctx.renderer = Se), ua(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Ui(ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Yr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			O(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ti(e);
					if (n) {
						t && (t.el = c.el, O(e, t, o)), n.asyncDep.then(() => {
							K(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				xi(e, !1), t ? (t.el = c.el, O(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Q(d, s, t, c), xi(e, !0);
				let f = Kr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && Qr(e, f.el), r && K(r, i), (d = t.props && t.props.onVnodeUpdated) && K(() => Q(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Qn(t);
				if (xi(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && Q(o, d, t), xi(e, !0), s && we) {
					let t = () => {
						e.subTree = Kr(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Kr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => Q(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Qn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => xn(u), xi(e, !0), l();
	}, O = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ri(e, t.props, r, n), _i(e, t.children, n), qe(), wn(e), Je();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && k(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : k(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, i, a, s, c, l) => {
		e ||= o, t ||= o;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			v(e[p], r, n, null, i, a, s, c, l);
		}
		u > d ? k(e, i, a, !0, !1, f) : ne(t, n, r, i, a, s, c, l, f);
	}, fe = (e, t, n, r, i, a, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], o = t[u] = l ? Zi(t[u]) : Xi(t[u]);
			if (Bi(r, o)) v(r, o, n, null, i, a, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], o = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			if (Bi(r, o)) v(r, o, n, null, i, a, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, o = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Zi(t[u]) : Xi(t[u]), n, o, i, a, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Zi(t[u]) : Xi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, i, a, !0);
					continue;
				}
				let o;
				if (r.key != null) o = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Bi(r, t[_])) {
					o = _;
					break;
				}
				o === void 0 ? he(r, i, a, !0) : (C[o - h] = u + 1, o >= S ? S = o : x = !0, v(r, t[o], n, null, i, a, s, c, l), y++);
			}
			let w = x ? wi(C) : o;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, o = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Di(f) : r;
				C[u] === 0 ? v(null, o, n, p, i, a, s, c, l) : x && (_ < 0 || u !== w[_] ? me(o, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === q) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Mi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[Wn] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), K(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[Wn];
				s._isLeaving && s[Wn](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (qe(), Xn(s, null, n, e, !0), Je()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Qn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Mn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? k(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && k(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && Q(_, t, e), h && Mn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === q) {
			_e(n, r);
			return;
		}
		if (t === Mi) {
			C(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ei(c), Ei(l), r && le(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && K(s, t), K(() => {
			e.isUnmounted = !0;
		}, t);
	}, k = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Hn];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, wn(r), Tn(), !1);
	}, Se = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: se,
		mc: ne,
		pc: ue,
		pbc: T,
		n: ye,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: zr(xe, Ce)
	};
}
function bi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Si(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ci(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (h(r) && h(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Zi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ci(t, a)), a.type === Ai && (a.patchFlag === -1 && (a = i[e] = Zi(a)), a.el = t.el), a.type === ji && !a.el && (a.el = t.el);
	}
}
function wi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ti(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ti(t);
}
function Ei(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Di(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Di(t.subTree) : null;
}
var Oi = (e) => e.__isSuspense;
function ki(e, t) {
	t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Cn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Ai = /* @__PURE__ */ Symbol.for("v-txt"), ji = /* @__PURE__ */ Symbol.for("v-cmt"), Mi = /* @__PURE__ */ Symbol.for("v-stc"), Ni = [], J = null;
function Y(e = !1) {
	Ni.push(J = e ? null : []);
}
function Pi() {
	Ni.pop(), J = Ni[Ni.length - 1] || null;
}
var Fi = 1;
function Ii(e, t = !1) {
	Fi += e, e < 0 && J && t && (J.hasOnce = !0);
}
function Li(e) {
	return e.dynamicChildren = Fi > 0 ? J || o : null, Pi(), Fi > 0 && J && J.push(e), e;
}
function X(e, t, n, r, i, a) {
	return Li(Z(e, t, n, r, i, a, !0));
}
function Ri(e, t, n, r, i) {
	return Li(Ui(e, t, n, r, i, !0));
}
function zi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Bi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Vi = ({ key: e }) => e ?? null, Hi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : b(e) || /* @__PURE__ */ z(e) || y(e) ? {
	i: W,
	r: e,
	k: t,
	f: !!n
} : e);
function Z(e, t = null, n = null, r = 0, i = null, a = e === q ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Vi(t),
		ref: t && Hi(t),
		scopeId: On,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: W
	};
	return s ? (Qi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= b(n) ? 8 : 16), Fi > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Ui = Wi;
function Wi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === gr) && (e = ji), zi(e)) {
		let r = Ki(e, t, !0);
		return n && Qi(r, n), Fi > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (ya(e) && (e = e.__vccOpts), t) {
		t = Gi(t);
		let { class: e, style: n } = t;
		e && !b(e) && (t.class = k(e)), S(n) && (/* @__PURE__ */ Ut(n) && !h(n) && (n = d({}, n)), t.style = me(n));
	}
	let o = b(e) ? 1 : Oi(e) ? 128 : Un(e) ? 64 : S(e) ? 4 : y(e) ? 2 : 0;
	return Z(e, t, n, r, i, o, a, !0);
}
function Gi(e) {
	return e ? /* @__PURE__ */ Ut(e) || ti(e) ? d({}, e) : e : null;
}
function Ki(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? $i(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Vi(l),
		ref: t && t.ref ? n && a ? h(a) ? a.concat(Hi(t)) : [a, Hi(t)] : Hi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ki(e.ssContent),
		ssFallback: e.ssFallback && Ki(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Gn(u, c.clone(u)), u;
}
function qi(e = " ", t = 0) {
	return Ui(Ai, null, e, t);
}
function Ji(e, t) {
	let n = Ui(Mi, null, e);
	return n.staticCount = t, n;
}
function Yi(e = "", t = !1) {
	return t ? (Y(), Ri(ji, null, e)) : Ui(ji, null, e);
}
function Xi(e) {
	return e == null || typeof e == "boolean" ? Ui(ji) : h(e) ? Ui(q, null, e.slice()) : zi(e) ? Zi(e) : Ui(Ai, null, String(e));
}
function Zi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ki(e);
}
function Qi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (h(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Qi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ti(t) ? t._ctx = W : r === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else y(t) ? (t = {
		default: t,
		_ctx: W
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function $i(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = me([t.style, r.style]);
		else if (l(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(h(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !u(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Q(e, t, n, r = null) {
	V(e, t, 7, [n, r]);
}
var ea = Lr(), ta = 0;
function na(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || ea, o = {
		uid: ta++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Oe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: si(r, i),
		emitsOptions: Wr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: a,
		inheritAttrs: r.inheritAttrs,
		ctx: a,
		data: a,
		props: a,
		attrs: a,
		slots: a,
		refs: a,
		setupState: a,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Hr.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, ra = () => $ || W, ia, aa;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ia = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), aa = t("__VUE_SSR_SETTERS__", (e) => la = e);
}
var oa = (e) => {
	let t = $;
	return ia(e), e.scope.on(), () => {
		e.scope.off(), ia(t);
	};
}, sa = () => {
	$ && $.scope.off(), ia(null);
};
function ca(e) {
	return e.vnode.shapeFlag & 4;
}
var la = !1;
function ua(e, t = !1, n = !1) {
	t && aa(t);
	let { props: r, children: i } = e.vnode, a = ca(e);
	ni(e, r, a, t), gi(e, i, n || t);
	let o = a ? da(e, t) : void 0;
	return t && aa(!1), o;
}
function da(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xr);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? _a(e) : null, i = oa(e), a = dn(r, e, 0, [e.props, n]), o = C(a);
		if (Je(), i(), (o || e.sp) && !Qn(e) && qn(e), o) {
			if (a.then(sa, sa), t) return a.then((n) => {
				fa(e, n, t);
			}).catch((t) => {
				fn(t, e, 0);
			});
			e.asyncDep = a;
		} else fa(e, a, t);
	} else ha(e, t);
}
function fa(e, t, n) {
	y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : S(t) && (e.setupState = Xt(t)), ha(e, n);
}
var pa, ma;
function ha(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && pa && !r.render) {
			let t = r.template || Or(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = pa(t, d(d({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || s, ma && ma(e);
	}
	{
		let t = oa(e);
		qe();
		try {
			wr(e);
		} finally {
			Je(), t();
		}
	}
}
var ga = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function _a(e) {
	return {
		attrs: new Proxy(e.attrs, ga),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function va(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Xt(Wt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in yr) return yr[n](e);
		},
		has(e, t) {
			return t in e || t in yr;
		}
	}) : e.proxy;
}
function ya(e) {
	return y(e) && "__vccOpts" in e;
}
var ba = (e, t) => /* @__PURE__ */ rn(e, t, la), xa = "3.5.38", Sa = void 0, Ca = typeof window < "u" && window.trustedTypes;
if (Ca) try {
	Sa = /* @__PURE__ */ Ca.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var wa = Sa ? (e) => Sa.createHTML(e) : (e) => e, Ta = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", Da = typeof document < "u" ? document : null, Oa = Da && /* @__PURE__ */ Da.createElement("template"), ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Da.createElementNS(Ta, e) : t === "mathml" ? Da.createElementNS(Ea, e) : n ? Da.createElement(e, { is: n }) : Da.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Da.createTextNode(e),
	createComment: (e) => Da.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Da.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Oa.innerHTML = wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Oa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Aa = /* @__PURE__ */ Symbol("_vtc");
function ja(e, t, n) {
	let r = e[Aa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ma = /* @__PURE__ */ Symbol("_vod"), Na = /* @__PURE__ */ Symbol("_vsh"), Pa = /* @__PURE__ */ Symbol(""), Fa = /(?:^|;)\s*display\s*:/;
function Ia(e, t, n) {
	let r = e.style, i = b(n), a = !1;
	if (n && !i) {
		if (t) if (b(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ra(r, t, "");
		}
		else for (let e in t) n[e] ?? Ra(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ra(r, i, "") : Ha(e, i, !b(t) && t ? t[i] : void 0, o) || Ra(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Pa];
			e && (n += ";" + e), r.cssText = n, a = Fa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ma in e && (e[Ma] = a ? r.display : "", e[Na] && (r.display = "none"));
}
var La = /\s*!important$/;
function Ra(e, t, n) {
	if (h(n)) n.forEach((n) => Ra(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Va(e, t);
		La.test(n) ? e.setProperty(se(r), n.replace(La, ""), "important") : e[r] = n;
	}
}
var za = [
	"Webkit",
	"Moz",
	"ms"
], Ba = {};
function Va(e, t) {
	let n = Ba[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Ba[t] = r;
	r = D(r);
	for (let n = 0; n < za.length; n++) {
		let i = za[n] + r;
		if (i in e) return Ba[t] = i;
	}
	return t;
}
function Ha(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && b(r) && n === r;
}
var Ua = "http://www.w3.org/1999/xlink";
function Wa(e, t, n, r, i, a = be(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || a && !xe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : x(n) ? String(n) : n);
}
function Ga(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? wa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = xe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ka(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function qa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ja = /* @__PURE__ */ Symbol("_vei");
function Ya(e, t, n, r, i = null) {
	let a = e[Ja] || (e[Ja] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Za(t);
		r ? Ka(e, n, a[t] = to(r, i), s) : o && (qa(e, n, o, s), a[t] = void 0);
	}
}
var Xa = /(?:Once|Passive|Capture)$/;
function Za(e) {
	let t;
	if (Xa.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Xa);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : se(e.slice(2)), t];
}
var Qa = 0, $a = /* @__PURE__ */ Promise.resolve(), eo = () => Qa ||= ($a.then(() => Qa = 0), Date.now());
function to(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (h(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && V(e, t, 5, a);
			}
		} else V(r, t, 5, [e]);
	};
	return n.value = e, n.attached = eo(), n;
}
var no = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ro = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? ja(e, r, o) : t === "style" ? Ia(e, n, r) : l(t) ? u(t) || Ya(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : io(e, t, r, o)) ? (Ga(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wa(e, t, r, o, a, t !== "value")) : e._isVueCE && (ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !b(r))) ? Ga(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Wa(e, t, r, o));
};
function io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && y(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return no(t) && b(n) ? !1 : t in e;
}
function ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return h(t) ? (e) => le(t, e) : t;
};
function so(e) {
	e.target.composing = !0;
}
function co(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var lo = /* @__PURE__ */ Symbol("_assign");
function uo(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var fo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[lo] = oo(i);
		let a = r || i.props && i.props.type === "number";
		Ka(e, t ? "change" : "input", (t) => {
			t.target.composing || e[lo](uo(e.value, n, a));
		}), (n || a) && Ka(e, "change", () => {
			e.value = uo(e.value, n, a);
		}), t || (Ka(e, "compositionstart", so), Ka(e, "compositionend", co), Ka(e, "change", co));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[lo] = oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = /* @__PURE__ */ d({ patchProp: ro }, ka), mo;
function ho() {
	return mo ||= vi(po);
}
var go = ((...e) => {
	let t = ho().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = vo(e);
		if (!r) return;
		let i = t._component;
		!y(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, _o(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function _o(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function vo(e) {
	return b(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var yo = typeof window < "u", bo, xo = (e) => bo = e, So = Symbol();
function Co(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var wo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(wo ||= {});
var To = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Eo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Do(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Mo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Oo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ko(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Ao = typeof navigator == "object" ? navigator : { userAgent: "" }, jo = /Macintosh/.test(Ao.userAgent) && /AppleWebKit/.test(Ao.userAgent) && !/Safari/.test(Ao.userAgent), Mo = yo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !jo ? No : "msSaveOrOpenBlob" in Ao ? Po : Fo : () => {};
function No(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ko(r) : Oo(r.href) ? Do(e, t, n) : (r.target = "_blank", ko(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ko(r);
	}, 0));
}
function Po(e, t = "download", n) {
	if (typeof e == "string") if (Oo(e)) Do(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			ko(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Eo(e, n), t);
}
function Fo(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Do(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(To.HTMLElement)) || "safari" in To, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || jo) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Io } = Object;
function Lo() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ Kt({})), n = [], r = [], i = Wt({
		install(e) {
			xo(i), i._a = e, e.provide(So, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Ro = () => {};
function zo(e, t, n, r = Ro) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Bo(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Vo = (e) => e(), Ho = Symbol(), Uo = Symbol();
function Wo(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Co(i) && Co(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ z(r) && !/* @__PURE__ */ F(r) ? e[n] = Wo(i, r) : e[n] = r;
	}
	return e;
}
var Go = Symbol();
function Ko(e) {
	return !Co(e) || !Object.prototype.hasOwnProperty.call(e, Go);
}
var { assign: qo } = Object;
function Jo(e) {
	return !!(/* @__PURE__ */ z(e) && e.effect);
}
function Yo(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), qo(/* @__PURE__ */ Zt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Wt(ba(() => {
			xo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Xo(e, l, t, n, r, !0), c;
}
function Xo(e, t, n = {}, r, i, a) {
	let o, s = qo({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: wo.patchFunction,
			storeId: e,
			events: void 0
		}) : (Wo(r.state.value[e], t), n = {
			type: wo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		yn().then(() => {
			m === i && (l = !0);
		}), u = !0, Bo(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			qo(e, t);
		});
	} : Ro;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Ho in t) return t[Uo] = n, t;
		let i = function() {
			xo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Bo(f, {
				args: n,
				name: i[Uo],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Bo(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Bo(a, e), e)).catch((e) => (Bo(o, e), Promise.reject(e))) : (Bo(a, l), l);
		};
		return i[Ho] = !0, i[Uo] = n, i;
	}, y = /* @__PURE__ */ Rt({
		_p: r,
		$id: e,
		$onAction: zo.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = zo(d, t, n.detached, () => a()), a = o.run(() => Rn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: wo.direct,
					events: void 0
				}, r);
			}, qo({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Vo)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ z(n) && !Jo(n) || /* @__PURE__ */ F(n) ? a || (p && Ko(n) && (/* @__PURE__ */ z(n) ? n.value = p[t] : Wo(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return qo(y, b), qo(/* @__PURE__ */ L(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				qo(t, e);
			});
		}
	}), r._p.forEach((e) => {
		qo(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Zo(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Fn();
		return n ||= o ? Pn(So, null) : null, n && xo(n), n = bo, n._s.has(e) || (i ? Xo(e, t, r, n) : Yo(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Qo(e) {
	let t = /* @__PURE__ */ L(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = ba({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ z(i) || /* @__PURE__ */ F(i)) && (n[r] = /* @__PURE__ */ en(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function $o(e) {
	let t = e.type === "fear" ? 0 : 1, n = Number(e.rating), r = Number.isFinite(n) ? Math.max(0, Math.trunc(n)) : t, i = e.source?.trim();
	return i ? {
		rating: r,
		source: i,
		type: e.type
	} : {
		rating: r,
		type: e.type
	};
}
function es(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function ts(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function ns(e, t) {
	let n = es(t.type), r = t.source ? `, ${t.source}` : "";
	return `<h2>${e}</h2>@${n}[${t.rating}${r}]`;
}
//#endregion
//#region src/state/apps/fear-terror-workbench/store.ts
var rs = Zo("fear-terror-workbench", () => {
	let e = /* @__PURE__ */ Kt("fear"), t = /* @__PURE__ */ Kt(1), n = /* @__PURE__ */ Kt(""), r = /* @__PURE__ */ Kt([]), i = /* @__PURE__ */ Kt(), a = /* @__PURE__ */ Kt(), o, s = ba(() => i.value !== void 0), c = ba(() => es(e.value)), l = ba(() => {
		let r = {
			rating: t.value,
			type: e.value
		}, i = n.value.trim();
		return i && (r.source = i), r;
	});
	function u(r) {
		o = r.actions, e.value = r.initialPayload?.type ?? "fear", t.value = r.initialPayload?.rating ?? 1, n.value = r.initialPayload?.source ?? "", d();
	}
	function d() {
		r.value = p().getActorChoices();
	}
	async function f(e) {
		if (!s.value) {
			i.value = e, a.value = void 0;
			try {
				let t = p();
				e === "post-card" ? await t.postPrompt(l.value) : e === "post-link" ? await t.postSummaryPrompt(l.value) : await t.applyToSelectedActors(l.value), d(), t.onActionComplete();
			} catch (e) {
				console.error("WFRP4e Enhanced Fear & Terror | Workbench action failed.", e), a.value = e instanceof Error ? e.message : "The Fear or Terror action could not be completed.";
			} finally {
				i.value = void 0;
			}
		}
	}
	function p() {
		if (!o) throw Error("The Fear and Terror workbench has not been initialized.");
		return o;
	}
	return {
		activeAction: i,
		actors: r,
		errorMessage: a,
		initialize: u,
		isWorking: s,
		rating: t,
		refreshActors: d,
		runAction: f,
		selectedType: e,
		selectedTypeLabel: c,
		source: n
	};
}), is = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200 tw:text-base-content" }, as = { class: "dui-navbar tw:items-start tw:border-b tw:border-base-300 tw:bg-base-100 tw:px-5 tw:py-4" }, os = { class: "dui-navbar-end tw:w-auto tw:shrink-0" }, ss = { class: "dui-badge dui-badge-outline" }, cs = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, ls = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, us = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, ds = {
	class: "dui-join tw:w-full",
	role: "group",
	"aria-label": "Effect type"
}, fs = ["aria-pressed"], ps = ["aria-pressed"], ms = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, hs = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, gs = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:bg-base-100",
	"aria-labelledby": "fear-terror-recipients"
}, _s = { class: "dui-card-body tw:gap-3 tw:p-4" }, vs = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, ys = { class: "tw:flex tw:items-center tw:gap-2" }, bs = { class: "dui-badge dui-badge-sm" }, xs = ["disabled"], Ss = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Cs = { class: "tw:min-w-0 tw:font-semibold" }, ws = { class: "dui-badge dui-badge-ghost tw:capitalize" }, Ts = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Es = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:grid tw:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] tw:gap-2 tw:border-t tw:border-base-300 tw:bg-base-100 tw:p-4",
	"aria-label": "Workbench actions"
}, Ds = ["disabled"], Os = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, ks = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, As = ["disabled"], js = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Ms = {
	key: 1,
	class: "fa-solid fa-link",
	"aria-hidden": "true"
}, Ns = ["disabled"], Ps = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Fs = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, Is = /* @__PURE__ */ Kn({
	__name: "FearTerrorWorkbenchApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = rs();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = Qo(n);
		return (e, t) => (Y(), X("main", is, [
			Z("header", as, [t[8] ||= Ji("<div class=\"dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start\"><div><div class=\"dui-breadcrumbs tw:mb-1 tw:text-xs tw:text-secondary\"><ul><li>WFRP4e</li><li>GM tools</li></ul></div><h1 class=\"tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight\"><i class=\"fa-solid fa-skull tw:mr-1 tw:text-secondary\" aria-hidden=\"true\"></i> Enhanced Fear &amp; Terror </h1><p class=\"tw:mt-1 tw:max-w-xl tw:text-sm tw:text-base-content/70\"> Post a card for players to answer, or apply the WFRP4e effect directly to targeted tokens. </p></div></div>", 1), Z("div", os, [Z("span", ss, Te(B(l)) + " " + Te(B(s)), 1)])]),
			B(a) ? (Y(), X("div", cs, [t[9] ||= Z("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), Z("span", null, Te(B(a)), 1)])) : Yi("", !0),
			Z("section", ls, [
				Z("fieldset", us, [
					t[10] ||= Z("legend", { class: "dui-fieldset-legend" }, "Effect", -1),
					Z("div", ds, [Z("button", {
						class: k(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": B(c) === "fear",
							"dui-btn-ghost": B(c) !== "fear"
						}]),
						type: "button",
						"aria-pressed": B(c) === "fear",
						onClick: t[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, fs), Z("button", {
						class: k(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": B(c) === "terror",
							"dui-btn-ghost": B(c) !== "terror"
						}]),
						type: "button",
						"aria-pressed": B(c) === "terror",
						onClick: t[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, ps)]),
					t[11] ||= Z("p", { class: "dui-label" }, "Choose the WFRP4e psychology test to prompt or apply.", -1)
				]),
				Z("fieldset", ms, [
					t[12] ||= Z("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1),
					t[13] ||= Z("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					jn(Z("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ z(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						fo,
						B(s),
						void 0,
						{ number: !0 }
					]]),
					t[14] ||= Z("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				Z("fieldset", hs, [
					t[15] ||= Ji("<legend class=\"dui-fieldset-legend\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					jn(Z("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ z(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[fo, B(u)]]),
					t[16] ||= Z("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			Z("section", gs, [Z("div", _s, [Z("div", vs, [Z("div", ys, [t[17] ||= Z("h2", {
				id: "fear-terror-recipients",
				class: "dui-card-title tw:text-base"
			}, "Recipients", -1), Z("span", bs, Te(B(i).length), 1)]), Z("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: B(o),
				type: "button",
				onClick: t[4] ||= (...e) => B(n).refreshActors && B(n).refreshActors(...e)
			}, [...t[18] ||= [Z("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), qi(" Refresh ", -1)]], 8, xs)]), B(i).length ? (Y(), X("ul", Ss, [(Y(!0), X(q, null, _r(B(i), (e) => (Y(), X("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200"
			}, [
				t[19] ||= Z("span", {
					class: "dui-status dui-status-primary",
					"aria-hidden": "true"
				}, null, -1),
				Z("span", Cs, Te(e.name), 1),
				Z("span", ws, Te(e.source), 1)
			]))), 128))])) : (Y(), X("div", Ts, [t[20] ||= Z("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), Z("span", null, " Target one or more tokens to apply " + Te(B(l)) + " directly. You can post a chat card without targets. ", 1)]))])]),
			Z("footer", Es, [
				Z("button", {
					class: "dui-btn dui-btn-primary",
					disabled: B(o),
					type: "button",
					onClick: t[5] ||= (e) => B(n).runAction("post-card")
				}, [B(r) === "post-card" ? (Y(), X("span", Os)) : (Y(), X("i", ks)), t[21] ||= qi(" Post Card ", -1)], 8, Ds),
				Z("button", {
					class: "dui-btn",
					disabled: B(o),
					type: "button",
					onClick: t[6] ||= (e) => B(n).runAction("post-link")
				}, [B(r) === "post-link" ? (Y(), X("span", js)) : (Y(), X("i", Ms)), t[22] ||= qi(" Post Link ", -1)], 8, As),
				Z("button", {
					class: "dui-btn",
					disabled: B(o),
					type: "button",
					onClick: t[7] ||= (e) => B(n).runAction("apply")
				}, [B(r) === "apply" ? (Y(), X("span", Ps)) : (Y(), X("i", Fs)), qi(" Apply " + Te(B(l)), 1)], 8, Ns)
			])
		]));
	}
});
//#endregion
//#region src/module/fear-terror/infer.ts
function Ls() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return Rs(e.actor);
	}
}
function Rs(e) {
	let t = Bs(e, "CHAT.Terror");
	if (t !== void 0) return zs("terror", t, e.name);
	let n = Bs(e, "CHAT.Fear");
	return n === void 0 ? zs("fear", 1, e.name) : zs("fear", n, e.name);
}
function zs(e, t, n) {
	return {
		rating: t,
		source: n,
		type: e
	};
}
function Bs(e, t) {
	if (typeof e.has != "function") throw Error(`WFRP4e actor "${e.name}" does not expose the required trait lookup method.`);
	let n = e.has(game.i18n.localize(t))?.specification?.value;
	if (typeof n == "number") return n;
	if (typeof n == "string") {
		let e = Number(n);
		if (Number.isFinite(e)) return e;
	}
}
//#endregion
//#region src/module/fear-terror/selection.ts
function Vs() {
	return Us().map(({ choice: e }) => e);
}
function Hs() {
	return Us().map(({ actor: e }) => e);
}
function Us() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) Ws(e, t.actor);
	return Array.from(e.values());
}
function Ws(e, t) {
	!t || e.has(t.id) || e.set(t.id, {
		actor: t,
		choice: {
			id: t.id,
			name: t.name,
			source: "targeted"
		}
	});
}
//#endregion
//#region src/module/fear-terror/service.ts
async function Gs(e) {
	let t = Hs();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = $o(e);
	await Promise.all(t.map((e) => Js(e, n)));
}
async function Ks(e) {
	let t = $o(e), n = Ys(t), r = ts(n, t), i = await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: r });
	await ChatMessage.create({
		content: i,
		speaker: { alias: n },
		system: {
			rating: t.rating,
			source: t.source,
			type: t.type
		},
		type: "psych"
	});
}
async function qs(e) {
	let t = $o(e), n = ns(Ys(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Fear & Terror" });
	await ChatMessage.create(r);
}
async function Js(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function Ys(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Xs = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = go(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Lo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Zs = class extends Xs {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-workbench`],
		id: `${t}-workbench`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: n
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return Is;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: Gs,
				getActorChoices: Vs,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear and Terror workbench.`, e), ui.notifications.error("Enhanced Fear & Terror completed the action but could not close its window.");
					});
				},
				postPrompt: Ks,
				postSummaryPrompt: qs
			},
			initialPayload: this.#e.initialPayload ?? Ls()
		};
	}
};
//#endregion
//#region src/module/apps/fear-terror-workbench/open.ts
async function Qs(e = {}) {
	let t = new Zs(e);
	return await t.render(!0), t;
}
function $s(e = {}) {
	Qs(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear and Terror workbench.`, e), ui.notifications.error("Enhanced Fear & Terror could not open. See the browser console for details.");
	});
}
//#endregion
//#region src/module/api/create-module-api.ts
function ec() {
	return {
		applyToSelectedActors: Gs,
		openWorkbench: Qs,
		postPrompt: Ks,
		postSummaryPrompt: qs
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function tc() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = ec();
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var nc = {
	actorSheet: "showActorSheetLauncher",
	moduleSettings: "showModuleSettingsLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function rc(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var ic = "openFearTerrorWorkbench", ac = "wfrp4e-enhanced-fear-terror-actor-header", oc = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], sc = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function cc() {
	if (rc(nc.actorSheet)) {
		for (let e of oc) Hooks.on(e, (e, t) => {
			lc(e, t);
		});
		for (let e of sc) Hooks.on(e, (e) => {
			uc(e);
		});
	}
}
function lc(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === ic) || (t.push({
		action: ic,
		icon: "fa-solid fa-skull",
		label: "Fear & Terror"
	}), e.options.actions ??= {}, e.options.actions[ic] = function() {
		dc(this.document);
	}));
}
function uc(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${ac}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(ac, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = ic, i.dataset.tooltip = "Fear & Terror", i.ariaLabel = "Open Enhanced Fear & Terror", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), dc(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function dc(e) {
	try {
		$s({ initialPayload: Rs(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Enhanced Fear & Terror could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var fc = "openFearTerrorWorkbench";
function pc() {
	rc(nc.tokenControls) && Hooks.on("getSceneControlButtons", (e) => {
		mc(e);
	});
}
function mc(t) {
	let n = t.tokens;
	n && (n.tools[fc] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: fc,
		onChange: () => {
			$s();
		},
		order: 99,
		title: "Fear & Terror",
		toolclip: { content: `${e}.SceneControls.OpenWorkbench` }
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function hc() {
	gc(nc.moduleSettings, "ModuleSettingsLauncher"), gc(nc.tokenControls, "TokenControlsLauncher"), gc(nc.actorSheet, "ActorSheetLauncher"), rc(nc.moduleSettings) && game.settings.registerMenu(t, "workbench", {
		hint: `${e}.Menu.Workbench.Hint`,
		icon: "fa-solid fa-skull",
		label: `${e}.Menu.Workbench.Label`,
		name: `${e}.Menu.Workbench.Name`,
		restricted: !0,
		type: Zs
	});
}
function gc(n, r) {
	game.settings.register(t, n, {
		config: !0,
		default: !0,
		hint: `${e}.Settings.${r}.Hint`,
		name: `${e}.Settings.${r}.Name`,
		requiresReload: !0,
		scope: "client",
		type: Boolean
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function _c() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), hc(), cc(), pc();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${r}; skipping module API registration.`);
			return;
		}
		tc(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
_c();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map