//#region src/module/constants.ts
var e = "WFRP4E_DROWSYS_TOOLKIT", t = "wfrp4e-enhanced-fear-terror", n = "WFRP4e | Drowsy’s Toolkit", r = "wfrp4e-gm-toolkit", i = "wfrp4e";
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function a(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var o = {}, s = [], c = () => {}, l = () => !1, u = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), d = (e) => e.startsWith("onUpdate:"), f = Object.assign, p = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, m = Object.prototype.hasOwnProperty, h = (e, t) => m.call(e, t), g = Array.isArray, _ = (e) => te(e) === "[object Map]", v = (e) => te(e) === "[object Set]", y = (e) => te(e) === "[object Date]", b = (e) => typeof e == "function", x = (e) => typeof e == "string", S = (e) => typeof e == "symbol", C = (e) => typeof e == "object" && !!e, w = (e) => (C(e) || b(e)) && b(e.then) && b(e.catch), ee = Object.prototype.toString, te = (e) => ee.call(e), ne = (e) => te(e).slice(8, -1), re = (e) => te(e) === "[object Object]", ie = (e) => x(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ae = /* @__PURE__ */ a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), oe = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, se = /-\w/g, T = oe((e) => e.replace(se, (e) => e.slice(1).toUpperCase())), ce = /\B([A-Z])/g, E = oe((e) => e.replace(ce, "-$1").toLowerCase()), le = oe((e) => e.charAt(0).toUpperCase() + e.slice(1)), ue = oe((e) => e ? `on${le(e)}` : ""), D = (e, t) => !Object.is(e, t), de = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, fe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, pe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, me, he = () => me ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ge(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = x(r) ? be(r) : ge(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (x(e) || C(e)) return e;
}
var _e = /;(?![^(]*\))/g, ve = /:([^]+)/, ye = /\/\*[^]*?\*\//g;
function be(e) {
	let t = {};
	return e.replace(ye, "").split(_e).forEach((e) => {
		if (e) {
			let n = e.split(ve);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function xe(e) {
	let t = "";
	if (x(e)) t = e;
	else if (g(e)) for (let n = 0; n < e.length; n++) {
		let r = xe(e[n]);
		r && (t += r + " ");
	}
	else if (C(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Se = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ce = /* @__PURE__ */ a(Se);
Se + "";
function we(e) {
	return !!e || e === "";
}
function Te(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ee(e[r], t[r]);
	return n;
}
function Ee(e, t) {
	if (e === t) return !0;
	let n = y(e), r = y(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = S(e), r = S(t), n || r) return e === t;
	if (n = g(e), r = g(t), n || r) return n && r ? Te(e, t) : !1;
	if (n = C(e), r = C(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ee(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function De(e, t) {
	return e.findIndex((e) => Ee(e, t));
}
var Oe = (e) => !!(e && e.__v_isRef === !0), O = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === ee || !b(e.toString)) ? Oe(e) ? O(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => Oe(t) ? ke(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ae(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ae(e)) } : S(t) ? Ae(t) : C(t) && !g(t) && !re(t) ? String(t) : t, Ae = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, k, je = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && k && (k.active ? (this.parent = k, this.index = (k.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = k;
			try {
				return k = this, e();
			} finally {
				k = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = k, k = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (k === this) k = this.prevScope;
			else {
				let e = k;
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
function Me(e) {
	return new je(e);
}
function Ne() {
	return k;
}
function Pe(e, t = !1) {
	k && k.cleanups.push(e);
}
var A, Fe = /* @__PURE__ */ new WeakSet(), Ie = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Be(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, $e(this), Ue(this);
		let e = A, t = Ye;
		A = this, Ye = !0;
		try {
			return this.fn();
		} finally {
			We(this), A = e, Ye = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) qe(e);
			this.deps = this.depsTail = void 0, $e(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ge(this) && this.run();
	}
	get dirty() {
		return Ge(this);
	}
}, Le = 0, Re, ze;
function Be(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = ze, ze = e;
		return;
	}
	e.next = Re, Re = e;
}
function Ve() {
	Le++;
}
function He() {
	if (--Le > 0) return;
	if (ze) {
		let e = ze;
		for (ze = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Re;) {
		let t = Re;
		for (Re = void 0; t;) {
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
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function We(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), qe(r), Je(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ke(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ke(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ge(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = Ye;
	A = e, Ye = !0;
	try {
		Ue(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Ye = r, We(e), e.flags &= -3;
	}
}
function qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Je(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ye = !0, Xe = [];
function Ze() {
	Xe.push(Ye), Ye = !1;
}
function Qe() {
	let e = Xe.pop();
	Ye = e === void 0 ? !0 : e;
}
function $e(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var et = 0, tt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, nt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !Ye || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new tt(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, rt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, et++, this.notify(e);
	}
	notify(e) {
		Ve();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			He();
		}
	}
};
function rt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) rt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol("");
function j(e, t, n) {
	if (Ye && A) {
		let t = it.get(e);
		t || it.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new nt()), r.map = t, r.key = n), r.track();
	}
}
function ct(e, t, n, r, i, a) {
	let o = it.get(e);
	if (!o) {
		et++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ve(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ie(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === st || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(at)), _(e) && s(o.get(ot)));
				break;
			case "delete":
				i || (s(o.get(at)), _(e) && s(o.get(ot)));
				break;
			case "set":
				_(e) && s(o.get(at));
				break;
		}
	}
	He();
}
function lt(e, t) {
	let n = it.get(e);
	return n && n.get(t);
}
function ut(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e ? t : (j(t, "iterate", st), /* @__PURE__ */ M(e) ? t : t.map(P));
}
function dt(e) {
	return j(e = /* @__PURE__ */ N(e), "iterate", st), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Jt(e) ? Zt(/* @__PURE__ */ qt(e) ? P(t) : t) : P(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => g(e) ? ut(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
	},
	every(e, t) {
		return gt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return gt(this, "filter", e, t, (e) => e.map((e) => ft(this, e)), arguments);
	},
	find(e, t) {
		return gt(this, "find", e, t, (e) => ft(this, e), arguments);
	},
	findIndex(e, t) {
		return gt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return gt(this, "findLast", e, t, (e) => ft(this, e), arguments);
	},
	findLastIndex(e, t) {
		return gt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return gt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return vt(this, "includes", e);
	},
	indexOf(...e) {
		return vt(this, "indexOf", e);
	},
	join(e) {
		return ut(this).join(e);
	},
	lastIndexOf(...e) {
		return vt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return gt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return yt(this, "pop");
	},
	push(...e) {
		return yt(this, "push", e);
	},
	reduce(e, ...t) {
		return _t(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return _t(this, "reduceRight", e, t);
	},
	shift() {
		return yt(this, "shift");
	},
	some(e, t) {
		return gt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return yt(this, "splice", e);
	},
	toReversed() {
		return ut(this).toReversed();
	},
	toSorted(e) {
		return ut(this).toSorted(e);
	},
	toSpliced(...e) {
		return ut(this).toSpliced(...e);
	},
	unshift(...e) {
		return yt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => ft(this, e));
	}
};
function mt(e, t, n) {
	let r = dt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ M(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ M(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? P(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ft(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function _t(e, t, n, r) {
	let i = dt(e), a = i !== e && !/* @__PURE__ */ M(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	j(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var bt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), xt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function St(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return j(t, "has", e), t.hasOwnProperty(e);
}
var Ct = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Vt : Bt : i ? zt : Rt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return St;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((S(t) ? xt.has(t) : bt(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && ie(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ Gt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ Gt(o) : /* @__PURE__ */ Ut(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ie(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Jt(i);
			if (!/* @__PURE__ */ M(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && (o ? D(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !xt.has(t)) && j(e, "has", t), n;
	}
	ownKeys(e) {
		return j(e, "iterate", g(e) ? "length" : at), Reflect.ownKeys(e);
	}
}, Tt = class extends Ct {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new wt(!0), kt = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? kt : t ? Zt : P;
		return !t && j(a, "iterate", c ? ot : at), f(Object.create(l), { next() {
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
function Mt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Nt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (D(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? Zt : P;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ N(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (D(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? kt : e ? Zt : P;
			return !e && j(o, "iterate", at), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = At(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ M(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ M(n) && !/* @__PURE__ */ Jt(n) && (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && ct(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = jt(r, e, t);
	}), n;
}
function Pt(e, t) {
	let n = Nt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var Ft = { get: /* @__PURE__ */ Pt(!1, !1) }, It = { get: /* @__PURE__ */ Pt(!1, !0) }, Lt = { get: /* @__PURE__ */ Pt(!0, !1) }, Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function Ht(e) {
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
function Ut(e) {
	return /* @__PURE__ */ Jt(e) ? e : Kt(e, !1, Et, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Kt(e, !1, Ot, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Kt(e, !0, Dt, Lt, Bt);
}
function Kt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ht(ne(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Xt(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var P = (e) => C(e) ? /* @__PURE__ */ Ut(e) : e, Zt = (e) => C(e) ? /* @__PURE__ */ Gt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return Qt(e, !1);
}
function Qt(e, t) {
	return /* @__PURE__ */ F(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : P(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ M(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ N(e), D(e, t) && (this._rawValue = e, this._value = n ? e : P(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, en);
}
var nn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new nt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function rn(e) {
	return new nn(e);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = ln(e, n);
	return t;
}
var on = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ie(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ M(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
}, sn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function cn(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : b(e) ? new sn(e) : C(e) && arguments.length > 1 ? ln(e, t, n) : /* @__PURE__ */ I(e);
}
function ln(e, t, n) {
	return new on(e, t, n);
}
var un = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Be(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ke(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new un(r, i, n);
}
var fn = {}, pn = /* @__PURE__ */ new WeakMap(), mn = void 0;
function hn(e, t = !1, n = mn) {
	if (n) {
		let t = pn.get(n);
		t || pn.set(n, t = []), t.push(e);
	}
}
function gn(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ M(e) || i === !1 || i === 0 ? _n(e, 1) : _n(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ F(e) ? (m = () => e.value, v = /* @__PURE__ */ M(e)) : /* @__PURE__ */ qt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ M(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ qt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			Ze();
			try {
				h();
			} finally {
				Qe();
			}
		}
		let t = mn;
		mn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			mn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => _n(e(), t);
	}
	let x = Ne(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(fn) : fn, w = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => D(e, C[t])) : D(n, C))) {
				h && h();
				let e = mn;
				mn = f;
				try {
					let e = [
						n,
						C === fn ? void 0 : y && C[0] === fn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					mn = e;
				}
			}
		} else f.run();
	};
	return l && l(w), f = new Ie(m), f.scheduler = s ? () => s(w, !1) : w, _ = (e) => hn(e, !1, f), h = f.onStop = () => {
		let e = pn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			pn.delete(f);
		}
	}, t ? r ? w(!0) : C = f.run() : s ? s(w.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function _n(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) _n(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) _n(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		_n(e, t, n);
	});
	else if (re(e)) {
		for (let r in e) _n(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && _n(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function vn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		bn(e, t, n);
	}
}
function yn(e, t, n, r) {
	if (b(e)) {
		let i = vn(e, t, n, r);
		return i && w(i) && i.catch((e) => {
			bn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(yn(e[a], t, n, r));
		return i;
	}
}
function bn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: s } = t && t.appContext.config || o;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			Ze(), vn(a, null, 10, [
				e,
				i,
				o
			]), Qe();
			return;
		}
	}
	xn(e, n, i, r, s);
}
function xn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], Sn = -1, Cn = [], wn = null, Tn = 0, En = /* @__PURE__ */ Promise.resolve(), Dn = null;
function On(e) {
	let t = Dn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
	let t = Sn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = Fn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function An(e) {
	if (!(e.flags & 1)) {
		let t = Fn(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= Fn(n) ? R.push(e) : R.splice(kn(t), 0, e), e.flags |= 1, jn();
	}
}
function jn() {
	Dn ||= En.then(In);
}
function Mn(e) {
	g(e) ? Cn.push(...e) : wn && e.id === -1 ? wn.splice(Tn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1), jn();
}
function Nn(e, t, n = Sn + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Pn(e) {
	if (Cn.length) {
		let e = [...new Set(Cn)].sort((e, t) => Fn(e) - Fn(t));
		if (Cn.length = 0, wn) {
			wn.push(...e);
			return;
		}
		for (wn = e, Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		wn = null, Tn = 0;
	}
}
var Fn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function In(e) {
	try {
		for (Sn = 0; Sn < R.length; Sn++) {
			let e = R[Sn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), vn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Sn < R.length; Sn++) {
			let e = R[Sn];
			e && (e.flags &= -2);
		}
		Sn = -1, R.length = 0, Pn(e), Dn = null, (R.length || Cn.length) && In(e);
	}
}
var z = null, Ln = null;
function Rn(e) {
	let t = z;
	return z = e, Ln = e && e.type.__scopeId || null, t;
}
function zn(e, t = z, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && qi(-1);
		let i = Rn(t), a;
		try {
			a = e(...n);
		} finally {
			Rn(i), r._d && qi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function B(e, t) {
	if (z === null) return e;
	let n = Oa(z), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && _n(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Bn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ze(), yn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Qe());
	}
}
function Vn(e, t) {
	if (X) {
		let n = X.provides, r = X.parent && X.parent.provides;
		r === n && (n = X.provides = Object.create(r)), n[e] = t;
	}
}
function Hn(e, t, n = !1) {
	let r = pa();
	if (r || Xr) {
		let i = Xr ? Xr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Un() {
	return !!(pa() || Xr);
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Hn(Wn);
function Kn(e, t) {
	return Jn(e, null, { flush: "sync" });
}
function qn(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (ya) {
		if (a === "sync") {
			let e = Gn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = X;
	l.call = (e, t, n) => yn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		H(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : An(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = gn(e, t, l);
	return ya && (d ? d.push(h) : u && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = ga(this), s = Jn(i, a.bind(r), n);
	return o(), s;
}
function Xn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = /* @__PURE__ */ Symbol("_leaveCb");
function er(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, er(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function tr(e, t) {
	return b(e) ? /* @__PURE__ */ f({ name: e.name }, t, { setup: e }) : e;
}
function nr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function rr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var ir = /* @__PURE__ */ new WeakMap();
function ar(e, t, n, r, i = !1) {
	if (g(e)) {
		e.forEach((e, a) => ar(e, t && (g(t) ? t[a] : t), n, r, i));
		return;
	}
	if (sr(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ar(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Oa(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ N(m), v = m === o ? l : (e) => rr(f, e) ? !1 : h(_, e), y = (e, t) => !(t && rr(f, t));
	if (d != null && d !== u) {
		if (or(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ F(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) vn(u, c, 12, [s, f]);
	else {
		let t = x(u), r = /* @__PURE__ */ F(u);
		if (t || r) {
			let o = () => {
				if (e.f) {
					let n = t ? v(u) ? m[u] : f[u] : y(u) || !e.k ? u.value : f[e.k];
					if (i) g(n) && p(n, a);
					else if (g(n)) n.includes(a) || n.push(a);
					else if (t) f[u] = [a], v(u) && (m[u] = f[u]);
					else {
						let t = [a];
						y(u, e.k) && (u.value = t), e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = s, v(u) && (m[u] = s)) : r && (y(u, e.k) && (u.value = s), e.k && (f[e.k] = s));
			};
			if (s) {
				let t = () => {
					o(), ir.delete(e);
				};
				t.id = -1, ir.set(e, t), H(t, n);
			} else or(e), o();
		}
	}
}
function or(e) {
	let t = ir.get(e);
	t && (t.flags |= 8, ir.delete(e));
}
he().requestIdleCallback, he().cancelIdleCallback;
var sr = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function lr(e, t) {
	dr(e, "a", t);
}
function ur(e, t) {
	dr(e, "da", t);
}
function dr(e, t, n = X) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (pr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) cr(e.parent.vnode) && fr(r, t, n, e), e = e.parent;
	}
}
function fr(e, t, n, r) {
	let i = pr(t, e, r, !0);
	br(() => {
		p(r[t], i);
	}, n);
}
function pr(e, t, n = X, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = ga(n), a = yn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var mr = (e) => (t, n = X) => {
	(!ya || e === "sp") && pr(e, (...e) => t(...e), n);
}, hr = mr("bm"), gr = mr("m"), _r = mr("bu"), vr = mr("u"), yr = mr("bum"), br = mr("um"), xr = mr("sp"), Sr = mr("rtg"), Cr = mr("rtc");
function wr(e, t = X) {
	pr("ec", e, t);
}
var Tr = /* @__PURE__ */ Symbol.for("v-ndc");
function Er(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ M(e), s = /* @__PURE__ */ Jt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(P(e[n])) : P(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (C(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
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
var Dr = (e) => e ? va(e) ? Oa(e) : Dr(e.parent) : null, Or = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Dr(e.parent),
	$root: (e) => Dr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Rr(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), kr = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Ar = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (kr(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Nr && (s[t] = 0);
		}
		let u = Or[t], d, f;
		if (u) return t === "$attrs" && j(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return kr(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || kr(t, c) || h(a, c) || h(r, c) || h(Or, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function jr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Mr(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, jr(e), jr(t));
}
var Nr = !0;
function Pr(e) {
	let t = Rr(e), n = e.proxy, r = e.ctx;
	Nr = !1, t.beforeCreate && Ir(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: ae, inheritAttrs: oe, components: se, directives: T, filters: ce } = t;
	if (u && Fr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Ut(t));
	}
	if (Nr = !0, a) for (let e in a) {
		let t = a[e], i = Z({
			get: b(t) ? t.bind(n, n) : b(t.get) ? t.get.bind(n, n) : c,
			set: !b(t) && b(t.set) ? t.set.bind(n) : c
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) Lr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Vn(t, e[t]);
		});
	}
	d && Ir(d, e, "c");
	function E(e, t) {
		g(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (E(hr, f), E(gr, p), E(_r, m), E(vr, h), E(lr, _), E(ur, v), E(wr, re), E(Cr, te), E(Sr, ne), E(yr, x), E(br, w), E(xr, ie), g(ae)) if (ae.length) {
		let t = e.exposed ||= {};
		ae.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === c && (e.render = ee), oe != null && (e.inheritAttrs = oe), se && (e.components = se), T && (e.directives = T), ie && nr(e);
}
function Fr(e, t, n = c) {
	g(e) && (e = Ur(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Hn(r.from || n, r.default, !0) : Hn(r.from || n) : Hn(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ir(e, t, n) {
	yn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Lr(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && qn(i, n);
	} else if (b(e)) qn(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => Lr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && qn(i, r, e);
	}
}
function Rr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => zr(c, e, o, !0)), zr(c, t, o)), C(t) && a.set(t, c), c;
}
function zr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && zr(e, a, n, !0), i && i.forEach((t) => zr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Br[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Br = {
	data: Vr,
	props: Gr,
	emits: Gr,
	methods: Wr,
	computed: Wr,
	beforeCreate: V,
	created: V,
	beforeMount: V,
	mounted: V,
	beforeUpdate: V,
	updated: V,
	beforeDestroy: V,
	beforeUnmount: V,
	destroyed: V,
	unmounted: V,
	activated: V,
	deactivated: V,
	errorCaptured: V,
	serverPrefetch: V,
	components: Wr,
	directives: Wr,
	watch: Kr,
	provide: Vr,
	inject: Hr
};
function Vr(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Hr(e, t) {
	return Wr(Ur(e), Ur(t));
}
function Ur(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function V(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), jr(e), jr(t ?? {})) : t;
}
function Kr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = V(e[r], t[r]);
	return n;
}
function qr() {
	return {
		app: null,
		config: {
			isNativeTag: l,
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
var Jr = 0;
function Yr(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = qr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Jr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Aa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && b(e.install) ? (a.add(e), e.install(c, ...t)) : b(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || J(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Oa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (yn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Xr;
				Xr = c;
				try {
					return e();
				} finally {
					Xr = t;
				}
			}
		};
		return c;
	};
}
var Xr = null;
function Zr(e, t, n = o) {
	let r = pa(), i = T(t), a = E(t), s = Qr(e, i), c = rn((s, c) => {
		let l, u = o, d;
		return Kn(() => {
			let t = e[i];
			D(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!D(s, l) && !(u !== o && D(e, u))) return;
				let f = r.vnode.props, p = !!(f && (t in f || i in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${i}` in f || `onUpdate:${a}` in f));
				p || (l = e, c()), r.emit(`update:${t}`, s), D(e, u) && (D(e, s) && !D(s, d) || p && u !== o && !D(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || o : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var Qr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function $r(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && Qr(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(pe)));
	let c, l = r[c = ue(t)] || r[c = ue(T(t))];
	!l && a && (l = r[c = ue(E(t))]), l && yn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, yn(u, e, 6, i);
	}
}
var ei = /* @__PURE__ */ new WeakMap();
function ti(e, t, n = !1) {
	let r = n ? ei : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = ti(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function ni(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, E(t)) || h(e, t));
}
function ri(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = aa(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = aa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : ii(s);
		}
	} catch (t) {
		Wi.length = 0, bn(t, e, 1), v = J(Hi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = ai(y, a)), b = na(b, y, !1, !0));
	}
	return n.dirs && (b = na(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && er(b, n.transition), v = b, Rn(_), v;
}
var ii = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ai = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function oi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? si(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ci(o, r, n) && !ni(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? si(r, o, l) : !0 : !!o;
	return !1;
}
function si(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ci(t, e, a) && !ni(n, a)) return !0;
	}
	return !1;
}
function ci(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Ee(r, i) : r !== i;
}
function li({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var di = {}, fi = () => Object.create(di), pi = (e) => Object.getPrototypeOf(e) === di;
function mi(e, t, n, r = !1) {
	let i = {}, a = fi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), gi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Wt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function hi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ni(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = _i(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		gi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = E(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = _i(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function gi(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (ae(o)) continue;
		let l = t[o], u;
		i && h(i, u = T(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : ni(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ N(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = _i(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function _i(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ga(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var vi = /* @__PURE__ */ new WeakMap();
function yi(e, t, n = !1) {
	let r = n ? vi : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = yi(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = T(a[e]);
		bi(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = T(e);
		if (bi(t)) {
			let n = a[e], r = c[t] = g(n) || b(n) ? { type: n } : f({}, n), i = r.type, o = !1, s = !0;
			if (g(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = b(t) && t.name;
				if (n === "Boolean") {
					o = !0;
					break;
				} else n === "String" && (s = !1);
			}
			else o = b(i) && i.name === "Boolean";
			r[0] = o, r[1] = s, (o || h(r, "default")) && l.push(t);
		}
	}
	let d = [c, l];
	return C(e) && r.set(e, d), d;
}
function bi(e) {
	return e[0] !== "$" && !ae(e);
}
var xi = (e) => e === "_" || e === "_ctx" || e === "$stable", Si = (e) => g(e) ? e.map(aa) : [aa(e)], Ci = (e, t, n) => {
	if (t._n) return t;
	let r = zn((...e) => Si(t(...e)), n);
	return r._c = !1, r;
}, wi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (xi(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Ci(n, i, r);
		else if (i != null) {
			let e = Si(i);
			t[n] = () => e;
		}
	}
}, Ti = (e, t) => {
	let n = Si(t);
	e.slots.default = () => n;
}, Ei = (e, t, n) => {
	for (let r in t) (n || !xi(r)) && (e[r] = t[r]);
}, Di = (e, t, n) => {
	let r = e.slots = fi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ei(r, t, n), n && fe(r, "_", e, !0)) : wi(t, r);
	} else t && Ti(e, t);
}, Oi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Ei(i, t, n) : (a = !t.$stable, wi(t, i)), s = t;
	} else t && (Ti(e, t), s = { default: 1 });
	if (a) for (let e in i) !xi(e) && s[e] == null && delete i[e];
}, H = Bi;
function ki(e) {
	return Ai(e);
}
function Ai(e, t) {
	let n = he();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Zi(e, t) && (r = xe(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Vi:
				y(e, t, n, r);
				break;
			case Hi:
				b(e, t, n, r);
				break;
			case Ui:
				e ?? x(t, n, r, o);
				break;
			case U:
				se(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? T(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, we);
		}
		u != null && i ? ar(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ar(e.ref, null, a, e, !0);
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
	}, ee = (e, t, n, i, o, s, c, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, o, ji(e, s), c, u), _ && Bn(e, null, i, "created"), te(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !ae(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && la(f, i, e);
		}
		_ && Bn(e, null, i, "beforeMount");
		let v = Ni(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && H(() => {
			try {
				f && la(f, i, e), v && g.enter(d), _ && Bn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || zi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? oa(e[l]) : aa(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Mi(n, !1), (g = h.onVnodeBeforeUpdate) && la(g, n, t, e), f && Bn(t, e, n, "beforeUpdate"), n && Mi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, n, r, ji(t, i), s) : c || D(e, t, l, null, n, r, ji(t, i), s, !1), u > 0) {
			if (u & 16) oe(l, m, h, n, i);
			else if (u & 2 && m.class !== h.class && a(l, "class", null, h.class, i), u & 4 && a(l, "style", m.style, h.style, i), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(l, r, o, s, i, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !c && d == null && oe(l, m, h, n, i);
		((g = h.onVnodeUpdated) || f) && H(() => {
			g && la(g, n, t, e), f && Bn(t, e, n, "updated");
		}, r);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === U || !Zi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, oe = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== o) for (let o in t) !ae(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ae(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, se = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Pi(e, t, !0)) : D(e, t, n, f, a, o, s, c, l);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : E(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = fa(e, r, i);
		if (cr(e) && (s.ctx.renderer = we), ba(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = J(Hi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, E = (e, t, n) => {
		let r = t.component = e.component;
		if (oi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ii(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							H(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Mi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && de(n), (d = t.props && t.props.onVnodeBeforeUpdate) && la(d, s, t, c), Mi(e, !0);
				let f = ri(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), xe(p), e, i, a), t.el = f.el, u === null && li(e, f.el), r && H(r, i), (d = t.props && t.props.onVnodeUpdated) && H(() => la(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = sr(t);
				if (Mi(e, !1), l && de(l), !m && (o = c && c.onVnodeBeforeMount) && la(o, d, t), Mi(e, !0), s && Ee) {
					let t = () => {
						e.subTree = ri(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ri(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && H(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					H(() => la(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && sr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && H(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Mi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, hi(e, t.props, r, n), Oi(e, t.children, n), Ze(), Nn(e), Qe();
	}, D = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, fe = (e, t, n, r, i, a, o, c, l) => {
		e ||= s, t ||= s;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? oa(t[p]) : aa(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? be(e, i, a, !0, !1, f) : ne(t, n, r, i, a, o, c, l, f);
	}, pe = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? oa(t[u]) : aa(t[u]);
			if (Zi(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? oa(t[p]) : aa(t[p]);
			if (Zi(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? oa(t[u]) : aa(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? oa(t[u]) : aa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ge(r, i, a, !0);
					continue;
				}
				let s;
				if (r.key != null) s = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Zi(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? ge(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let w = x ? Fi(C) : s;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ri(f) : r;
				C[u] === 0 ? v(null, s, n, p, i, a, o, c, l) : x && (_ < 0 || u !== w[_] ? me(s, n, p, 2) : _--);
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
			c.move(e, t, n, we);
			return;
		}
		if (c === U) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Ui) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[$n] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), H(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[$n];
				s._isLeaving && s[$n](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ze(), ar(s, null, n, e, !0), Qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !sr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && la(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Bn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && H(() => {
			_ && la(_, t, e), h && Bn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === U) {
			ve(n, r);
			return;
		}
		if (t === Ui) {
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
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Li(c), Li(l), r && de(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && H(s, t), H(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, Nn(r), Pn(), !1);
	}, we = {
		p: v,
		um: ge,
		m: me,
		r: _e,
		mt: ce,
		mc: ne,
		pc: D,
		pbc: ie,
		n: xe,
		o: e
	}, Te, Ee;
	return t && ([Te, Ee] = t(we)), {
		render: Ce,
		hydrate: Te,
		createApp: Yr(Ce, Te)
	};
}
function ji({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Mi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ni(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = oa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Pi(t, a)), a.type === Vi && (a.patchFlag === -1 && (a = i[e] = oa(a)), a.el = t.el), a.type === Hi && !a.el && (a.el = t.el);
	}
}
function Fi(e) {
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
function Ii(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ii(t);
}
function Li(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ri(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ri(t.subTree) : null;
}
var zi = (e) => e.__isSuspense;
function Bi(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var U = /* @__PURE__ */ Symbol.for("v-fgt"), Vi = /* @__PURE__ */ Symbol.for("v-txt"), Hi = /* @__PURE__ */ Symbol.for("v-cmt"), Ui = /* @__PURE__ */ Symbol.for("v-stc"), Wi = [], W = null;
function G(e = !1) {
	Wi.push(W = e ? null : []);
}
function Gi() {
	Wi.pop(), W = Wi[Wi.length - 1] || null;
}
var Ki = 1;
function qi(e, t = !1) {
	Ki += e, e < 0 && W && t && (W.hasOnce = !0);
}
function Ji(e) {
	return e.dynamicChildren = Ki > 0 ? W || s : null, Gi(), Ki > 0 && W && W.push(e), e;
}
function K(e, t, n, r, i, a) {
	return Ji(q(e, t, n, r, i, a, !0));
}
function Yi(e, t, n, r, i) {
	return Ji(J(e, t, n, r, i, !0));
}
function Xi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Zi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Qi = ({ key: e }) => e ?? null, $i = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ F(e) || b(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function q(e, t = null, n = null, r = 0, i = null, a = e === U ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Qi(t),
		ref: t && $i(t),
		scopeId: Ln,
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
		ctx: z
	};
	return s ? (sa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), Ki > 0 && !o && W && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && W.push(c), c;
}
var J = ea;
function ea(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Tr) && (e = Hi), Xi(e)) {
		let r = na(e, t, !0);
		return n && sa(r, n), Ki > 0 && !a && W && (r.shapeFlag & 6 ? W[W.indexOf(e)] = r : W.push(r)), r.patchFlag = -2, r;
	}
	if (ka(e) && (e = e.__vccOpts), t) {
		t = ta(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = xe(e)), C(n) && (/* @__PURE__ */ Yt(n) && !g(n) && (n = f({}, n)), t.style = ge(n));
	}
	let o = x(e) ? 1 : zi(e) ? 128 : Qn(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return q(e, t, n, r, i, o, a, !0);
}
function ta(e) {
	return e ? /* @__PURE__ */ Yt(e) || pi(e) ? f({}, e) : e : null;
}
function na(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ca(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Qi(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat($i(t)) : [a, $i(t)] : $i(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== U ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && na(e.ssContent),
		ssFallback: e.ssFallback && na(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && er(u, c.clone(u)), u;
}
function Y(e = " ", t = 0) {
	return J(Vi, null, e, t);
}
function ra(e, t) {
	let n = J(Ui, null, e);
	return n.staticCount = t, n;
}
function ia(e = "", t = !1) {
	return t ? (G(), Yi(Hi, null, e)) : J(Hi, null, e);
}
function aa(e) {
	return e == null || typeof e == "boolean" ? J(Hi) : g(e) ? J(U, null, e.slice()) : Xi(e) ? oa(e) : J(Vi, null, String(e));
}
function oa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : na(e);
}
function sa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), sa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !pi(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Y(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ca(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = xe([t.class, r.class]));
		else if (e === "style") t.style = ge([t.style, r.style]);
		else if (u(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(g(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !d(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function la(e, t, n, r = null) {
	yn(e, t, 7, [n, r]);
}
var ua = qr(), da = 0;
function fa(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || ua, a = {
		uid: da++,
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
		scope: new je(!0),
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
		propsOptions: yi(r, i),
		emitsOptions: ti(r, i),
		emit: null,
		emitted: null,
		propsDefaults: o,
		inheritAttrs: r.inheritAttrs,
		ctx: o,
		data: o,
		props: o,
		attrs: o,
		slots: o,
		refs: o,
		setupState: o,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = $r.bind(null, a), e.ce && e.ce(a), a;
}
var X = null, pa = () => X || z, ma, ha;
{
	let e = he(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ma = t("__VUE_INSTANCE_SETTERS__", (e) => X = e), ha = t("__VUE_SSR_SETTERS__", (e) => ya = e);
}
var ga = (e) => {
	let t = X;
	return ma(e), e.scope.on(), () => {
		e.scope.off(), ma(t);
	};
}, _a = () => {
	X && X.scope.off(), ma(null);
};
function va(e) {
	return e.vnode.shapeFlag & 4;
}
var ya = !1;
function ba(e, t = !1, n = !1) {
	t && ha(t);
	let { props: r, children: i } = e.vnode, a = va(e);
	mi(e, r, a, t), Di(e, i, n || t);
	let o = a ? xa(e, t) : void 0;
	return t && ha(!1), o;
}
function xa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ar);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? Da(e) : null, i = ga(e), a = vn(r, e, 0, [e.props, n]), o = w(a);
		if (Qe(), i(), (o || e.sp) && !sr(e) && nr(e), o) {
			if (a.then(_a, _a), t) return a.then((n) => {
				Sa(e, n, t);
			}).catch((t) => {
				bn(t, e, 0);
			});
			e.asyncDep = a;
		} else Sa(e, a, t);
	} else Ta(e, t);
}
function Sa(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = tn(t)), Ta(e, n);
}
var Ca, wa;
function Ta(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ca && !r.render) {
			let t = r.template || Rr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ca(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, wa && wa(e);
	}
	{
		let t = ga(e);
		Ze();
		try {
			Pr(e);
		} finally {
			Qe(), t();
		}
	}
}
var Ea = { get(e, t) {
	return j(e, "get", ""), e[t];
} };
function Da(e) {
	return {
		attrs: new Proxy(e.attrs, Ea),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Oa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Or) return Or[n](e);
		},
		has(e, t) {
			return t in e || t in Or;
		}
	}) : e.proxy;
}
function ka(e) {
	return b(e) && "__vccOpts" in e;
}
var Z = (e, t) => /* @__PURE__ */ dn(e, t, ya), Aa = "3.5.38", ja = void 0, Ma = typeof window < "u" && window.trustedTypes;
if (Ma) try {
	ja = /* @__PURE__ */ Ma.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Na = ja ? (e) => ja.createHTML(e) : (e) => e, Pa = "http://www.w3.org/2000/svg", Fa = "http://www.w3.org/1998/Math/MathML", Ia = typeof document < "u" ? document : null, La = Ia && /* @__PURE__ */ Ia.createElement("template"), Ra = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ia.createElementNS(Pa, e) : t === "mathml" ? Ia.createElementNS(Fa, e) : n ? Ia.createElement(e, { is: n }) : Ia.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ia.createTextNode(e),
	createComment: (e) => Ia.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ia.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			La.innerHTML = Na(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = La.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, za = /* @__PURE__ */ Symbol("_vtc");
function Ba(e, t, n) {
	let r = e[za];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Va = /* @__PURE__ */ Symbol("_vod"), Ha = /* @__PURE__ */ Symbol("_vsh"), Ua = /* @__PURE__ */ Symbol(""), Wa = /(?:^|;)\s*display\s*:/;
function Ga(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? qa(r, t, "");
		}
		else for (let e in t) n[e] ?? qa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? qa(r, i, "") : Za(e, i, !x(t) && t ? t[i] : void 0, o) || qa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ua];
			e && (n += ";" + e), r.cssText = n, a = Wa.test(n);
		}
	} else t && e.removeAttribute("style");
	Va in e && (e[Va] = a ? r.display : "", e[Ha] && (r.display = "none"));
}
var Ka = /\s*!important$/;
function qa(e, t, n) {
	if (g(n)) n.forEach((n) => qa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Xa(e, t);
		Ka.test(n) ? e.setProperty(E(r), n.replace(Ka, ""), "important") : e[r] = n;
	}
}
var Ja = [
	"Webkit",
	"Moz",
	"ms"
], Ya = {};
function Xa(e, t) {
	let n = Ya[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Ya[t] = r;
	r = le(r);
	for (let n = 0; n < Ja.length; n++) {
		let i = Ja[n] + r;
		if (i in e) return Ya[t] = i;
	}
	return t;
}
function Za(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var Qa = "http://www.w3.org/1999/xlink";
function $a(e, t, n, r, i, a = Ce(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qa, t.slice(6, t.length)) : e.setAttributeNS(Qa, t, n) : n == null || a && !we(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function eo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Na(n) : n);
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
		r === "boolean" ? n = we(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function to(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function no(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ro = /* @__PURE__ */ Symbol("_vei");
function io(e, t, n, r, i = null) {
	let a = e[ro] || (e[ro] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = oo(t);
		r ? to(e, n, a[t] = uo(r, i), s) : o && (no(e, n, o, s), a[t] = void 0);
	}
}
var ao = /(?:Once|Passive|Capture)$/;
function oo(e) {
	let t;
	if (ao.test(e)) {
		t = {};
		let n;
		for (; n = e.match(ao);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var so = 0, co = /* @__PURE__ */ Promise.resolve(), lo = () => so ||= (co.then(() => so = 0), Date.now());
function uo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (g(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && yn(e, t, 5, a);
			}
		} else yn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = lo(), n;
}
var fo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, po = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ba(e, r, o) : t === "style" ? Ga(e, n, r) : u(t) ? d(t) || io(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mo(e, t, r, o)) ? (eo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $a(e, t, r, o, a, t !== "value")) : e._isVueCE && (ho(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? eo(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $a(e, t, r, o));
};
function mo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && fo(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return fo(t) && x(n) ? !1 : t in e;
}
function ho(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var go = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => de(t, e) : t;
};
function _o(e) {
	e.target.composing = !0;
}
function vo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var yo = /* @__PURE__ */ Symbol("_assign");
function bo(e, t, n) {
	return t && (e = e.trim()), n && (e = pe(e)), e;
}
var xo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[yo] = go(i);
		let a = r || i.props && i.props.type === "number";
		to(e, t ? "change" : "input", (t) => {
			t.target.composing || e[yo](bo(e.value, n, a));
		}), (n || a) && to(e, "change", () => {
			e.value = bo(e.value, n, a);
		}), t || (to(e, "compositionstart", _o), to(e, "compositionend", vo), to(e, "change", vo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[yo] = go(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? pe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, So = {
	deep: !0,
	created(e, t, n) {
		e[yo] = go(n), to(e, "change", () => {
			let t = e._modelValue, n = Eo(e), r = e.checked, i = e[yo];
			if (g(t)) {
				let e = De(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (v(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Do(e, r));
		});
	},
	mounted: Co,
	beforeUpdate(e, t, n) {
		e[yo] = go(n), Co(e, t, n);
	}
};
function Co(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = De(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ee(t, Do(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var wo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		to(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? pe(Eo(e)) : Eo(e));
			e[yo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, On(() => {
				e._assigning = !1;
			});
		}), e[yo] = go(r);
	},
	mounted(e, { value: t }) {
		To(e, t);
	},
	beforeUpdate(e, t, n) {
		e[yo] = go(n);
	},
	updated(e, { value: t }) {
		e._assigning || To(e, t);
	}
};
function To(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Eo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = De(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ee(Eo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Eo(e) {
	return "_value" in e ? e._value : e.value;
}
function Do(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Oo = /* @__PURE__ */ f({ patchProp: po }, Ra), ko;
function Ao() {
	return ko ||= ki(Oo);
}
var jo = ((...e) => {
	let t = Ao().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = No(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Mo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Mo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function No(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Po = typeof window < "u", Fo, Io = (e) => Fo = e, Lo = Symbol();
function Ro(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var zo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(zo ||= {});
var Bo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Vo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ho(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		qo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Uo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Wo(e) {
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
var Go = typeof navigator == "object" ? navigator : { userAgent: "" }, Ko = /Macintosh/.test(Go.userAgent) && /AppleWebKit/.test(Go.userAgent) && !/Safari/.test(Go.userAgent), qo = Po ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Ko ? Jo : "msSaveOrOpenBlob" in Go ? Yo : Xo : () => {};
function Jo(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Wo(r) : Uo(r.href) ? Ho(e, t, n) : (r.target = "_blank", Wo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Wo(r);
	}, 0));
}
function Yo(e, t = "download", n) {
	if (typeof e == "string") if (Uo(e)) Ho(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Wo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Vo(e, n), t);
}
function Xo(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ho(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Bo.HTMLElement)) || "safari" in Bo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Ko) && typeof FileReader < "u") {
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
var { assign: Zo } = Object;
function Qo() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = Xt({
		install(e) {
			Io(i), i._a = e, e.provide(Lo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var $o = () => {};
function es(e, t, n, r = $o) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ne() && Pe(i), i;
}
function ts(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ns = (e) => e(), rs = Symbol(), is = Symbol();
function as(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Ro(i) && Ro(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ qt(r) ? e[n] = as(i, r) : e[n] = r;
	}
	return e;
}
var os = Symbol();
function ss(e) {
	return !Ro(e) || !Object.prototype.hasOwnProperty.call(e, os);
}
var { assign: cs } = Object;
function ls(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function us(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), cs(/* @__PURE__ */ an(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(Z(() => {
			Io(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ds(e, l, t, n, r, !0), c;
}
function ds(e, t, n = {}, r, i, a) {
	let o, s = cs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: zo.patchFunction,
			storeId: e,
			events: void 0
		}) : (as(r.state.value[e], t), n = {
			type: zo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		On().then(() => {
			m === i && (l = !0);
		}), u = !0, ts(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			cs(e, t);
		});
	} : $o;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (rs in t) return t[is] = n, t;
		let i = function() {
			Io(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			ts(f, {
				args: n,
				name: i[is],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw ts(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (ts(a, e), e)).catch((e) => (ts(o, e), Promise.reject(e))) : (ts(a, l), l);
		};
		return i[rs] = !0, i[is] = n, i;
	}, y = /* @__PURE__ */ Ut({
		_p: r,
		$id: e,
		$onAction: es.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = es(d, t, n.detached, () => a()), a = o.run(() => qn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: zo.direct,
					events: void 0
				}, r);
			}, cs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || ns)(() => r._e.run(() => (o = Me()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ F(n) && !ls(n) || /* @__PURE__ */ qt(n) ? a || (p && ss(n) && (/* @__PURE__ */ F(n) ? n.value = p[t] : as(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return cs(y, b), cs(/* @__PURE__ */ N(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				cs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		cs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function fs(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Un();
		return n ||= o ? Hn(Lo, null) : null, n && Io(n), n = Fo, n._s.has(e) || (i ? ds(e, t, r, n) : us(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function ps(e) {
	let t = /* @__PURE__ */ N(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Z({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ F(i) || /* @__PURE__ */ qt(i)) && (n[r] = /* @__PURE__ */ cn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function ms(e) {
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
function hs(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function gs(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function _s(e, t) {
	let n = hs(t.type), r = t.source ? `, ${t.source}` : "";
	return `<h2>${e}</h2>@${n}[${t.rating}${r}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var vs = fs("fear-console", () => {
	let e = /* @__PURE__ */ I("fear"), t = /* @__PURE__ */ I(1), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I([]), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o, s = Z(() => i.value !== void 0), c = Z(() => hs(e.value)), l = Z(() => {
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
				console.error("WFRP4e | Drowsy’s Toolkit | Fear Console action failed.", e), a.value = e instanceof Error ? e.message : "The Fear or Terror action could not be completed.";
			} finally {
				i.value = void 0;
			}
		}
	}
	function p() {
		if (!o) throw Error("The Fear Console has not been initialized.");
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
}), ys = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200 tw:text-base-content" }, bs = { class: "dui-navbar tw:items-start tw:border-b tw:border-base-300 tw:bg-base-100 tw:px-5 tw:py-4" }, xs = { class: "dui-navbar-end tw:w-auto tw:shrink-0" }, Ss = { class: "dui-badge dui-badge-outline" }, Cs = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, ws = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Ts = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, Es = {
	class: "dui-join tw:w-full",
	role: "group",
	"aria-label": "Effect type"
}, Ds = ["aria-pressed"], Os = ["aria-pressed"], ks = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, As = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, js = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:bg-base-100",
	"aria-labelledby": "fear-terror-recipients"
}, Ms = { class: "dui-card-body tw:gap-3 tw:p-4" }, Ns = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, Ps = { class: "tw:flex tw:items-center tw:gap-2" }, Fs = { class: "dui-badge dui-badge-sm" }, Is = ["disabled"], Ls = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Rs = { class: "tw:min-w-0 tw:font-semibold" }, zs = { class: "dui-badge dui-badge-ghost tw:capitalize" }, Bs = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Vs = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:grid tw:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] tw:gap-2 tw:border-t tw:border-base-300 tw:bg-base-100 tw:p-4",
	"aria-label": "Fear Console actions"
}, Hs = ["disabled"], Us = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Ws = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, Gs = ["disabled"], Ks = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, qs = {
	key: 1,
	class: "fa-solid fa-link",
	"aria-hidden": "true"
}, Js = ["disabled"], Ys = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Xs = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, Zs = /* @__PURE__ */ tr({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = vs();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = ps(n);
		return (e, t) => (G(), K("main", ys, [
			q("header", bs, [t[8] ||= ra("<div class=\"dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start\"><div><div class=\"dui-breadcrumbs tw:mb-1 tw:text-xs tw:text-secondary\"><ul><li>WFRP4e</li><li>Drowsy’s Toolkit</li></ul></div><h1 class=\"tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight\"><i class=\"fa-solid fa-skull tw:mr-1 tw:text-secondary\" aria-hidden=\"true\"></i> Fear Console </h1><p class=\"tw:mt-1 tw:max-w-xl tw:text-sm tw:text-base-content/70\"> Post a card for players to answer, or apply the WFRP4e effect directly to targeted tokens. </p></div></div>", 1), q("div", xs, [q("span", Ss, O(L(l)) + " " + O(L(s)), 1)])]),
			L(a) ? (G(), K("div", Cs, [t[9] ||= q("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), q("span", null, O(L(a)), 1)])) : ia("", !0),
			q("section", ws, [
				q("fieldset", Ts, [
					t[10] ||= q("legend", { class: "dui-fieldset-legend" }, "Effect", -1),
					q("div", Es, [q("button", {
						class: xe(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": L(c) === "fear",
							"dui-btn-ghost": L(c) !== "fear"
						}]),
						type: "button",
						"aria-pressed": L(c) === "fear",
						onClick: t[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Ds), q("button", {
						class: xe(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": L(c) === "terror",
							"dui-btn-ghost": L(c) !== "terror"
						}]),
						type: "button",
						"aria-pressed": L(c) === "terror",
						onClick: t[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Os)]),
					t[11] ||= q("p", { class: "dui-label" }, "Choose the WFRP4e psychology test to prompt or apply.", -1)
				]),
				q("fieldset", ks, [
					t[12] ||= q("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1),
					t[13] ||= q("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					B(q("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ F(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						xo,
						L(s),
						void 0,
						{ number: !0 }
					]]),
					t[14] ||= q("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				q("fieldset", As, [
					t[15] ||= ra("<legend class=\"dui-fieldset-legend\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					B(q("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ F(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[xo, L(u)]]),
					t[16] ||= q("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			q("section", js, [q("div", Ms, [q("div", Ns, [q("div", Ps, [t[17] ||= q("h2", {
				id: "fear-terror-recipients",
				class: "dui-card-title tw:text-base"
			}, "Recipients", -1), q("span", Fs, O(L(i).length), 1)]), q("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: L(o),
				type: "button",
				onClick: t[4] ||= (...e) => L(n).refreshActors && L(n).refreshActors(...e)
			}, [...t[18] ||= [q("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), Y(" Refresh ", -1)]], 8, Is)]), L(i).length ? (G(), K("ul", Ls, [(G(!0), K(U, null, Er(L(i), (e) => (G(), K("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200"
			}, [
				t[19] ||= q("span", {
					class: "dui-status dui-status-primary",
					"aria-hidden": "true"
				}, null, -1),
				q("span", Rs, O(e.name), 1),
				q("span", zs, O(e.source), 1)
			]))), 128))])) : (G(), K("div", Bs, [t[20] ||= q("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), q("span", null, " Target one or more tokens to apply " + O(L(l)) + " directly. You can post a chat card without targets. ", 1)]))])]),
			q("footer", Vs, [
				q("button", {
					class: "dui-btn dui-btn-primary",
					disabled: L(o),
					type: "button",
					onClick: t[5] ||= (e) => L(n).runAction("post-card")
				}, [L(r) === "post-card" ? (G(), K("span", Us)) : (G(), K("i", Ws)), t[21] ||= Y(" Post Card ", -1)], 8, Hs),
				q("button", {
					class: "dui-btn",
					disabled: L(o),
					type: "button",
					onClick: t[6] ||= (e) => L(n).runAction("post-link")
				}, [L(r) === "post-link" ? (G(), K("span", Ks)) : (G(), K("i", qs)), t[22] ||= Y(" Post Link ", -1)], 8, Gs),
				q("button", {
					class: "dui-btn",
					disabled: L(o),
					type: "button",
					onClick: t[7] ||= (e) => L(n).runAction("apply")
				}, [L(r) === "apply" ? (G(), K("span", Ys)) : (G(), K("i", Xs)), Y(" Apply " + O(L(l)), 1)], 8, Js)
			])
		]));
	}
});
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function Qs({ fearRating: e, source: t, terrorRating: n }) {
	return n === void 0 ? e === void 0 ? {
		rating: 1,
		source: t,
		type: "fear"
	} : {
		rating: e,
		source: t,
		type: "fear"
	} : {
		rating: n,
		source: t,
		type: "terror"
	};
}
//#endregion
//#region src/module/fear-terror/infer.ts
function $s() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return ec(e.actor);
	}
}
function ec(e) {
	let t = tc(e, "CHAT.Terror");
	return Qs({
		fearRating: t === void 0 ? tc(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function tc(e, t) {
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
function nc() {
	return ic().map(({ choice: e }) => e);
}
function rc() {
	return ic().map(({ actor: e }) => e);
}
function ic() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) ac(e, t.actor);
	return Array.from(e.values());
}
function ac(e, t) {
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
async function oc(e) {
	let t = rc();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = ms(e);
	await Promise.all(t.map((e) => lc(e, n)));
}
async function sc(e) {
	let t = ms(e), n = uc(t), r = gs(n, t), i = await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: r });
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
async function cc(e) {
	let t = ms(e), n = _s(uc(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s Toolkit" });
	await ChatMessage.create(r);
}
async function lc(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function uc(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var dc = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = jo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Qo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, fc = class extends dc {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-fear-console`],
		id: `${t}-fear-console`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			resizable: !0,
			title: `${n} — Fear Console`
		}
	};
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	getVueComponent() {
		return Zs;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: oc,
				getActorChoices: nc,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				postPrompt: sc,
				postSummaryPrompt: cc
			},
			initialPayload: this.#e.initialPayload ?? $s()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function pc(e = {}) {
	let t = new fc(e);
	return await t.render(!0), t;
}
function mc(e = {}) {
	pc(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var hc = .01;
function gc(e) {
	return {
		companionMultiplier: xc(e.companionMultiplier, 0, 1),
		curveExponent: xc(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, Sc(e.gapForMaximumAward)),
		maximumAward: Math.max(0, Sc(e.maximumAward)),
		scaleExponent: xc(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, Sc(e.scalePivot))
	};
}
function _c(e, t) {
	let n = e.filter((e) => e.selected), r = gc(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = yc(i, r), o = n.map((e) => {
		let t = Sc(e.totalXp), n = Math.max(0, i - t), a = vc(n, i, r, e.category === "companion" ? r.companionMultiplier : 1);
		return {
			actorId: e.id,
			actorName: e.name,
			afterXp: t + a,
			award: a,
			beforeXp: t,
			category: e.category,
			gap: n
		};
	});
	return {
		attenuation: a,
		awards: o,
		highestXp: i,
		totalAward: o.reduce((e, t) => e + t.award, 0)
	};
}
function vc(e, t, n, r = 1) {
	let i = gc(n), a = Math.min(1, Math.max(0, Number.isFinite(e) ? e : 0) / i.gapForMaximumAward) ** i.curveExponent, o = yc(t, i), s = xc(r, 0, 1), c = i.maximumAward * a * o * s;
	return Math.min(i.maximumAward, Math.max(0, Math.round(c)));
}
function yc(e, t) {
	let n = gc(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function bc(e, t, n = 24) {
	let r = gc(t), i = Math.max(2, Sc(n)), a = r.gapForMaximumAward * 1.2;
	return Array.from({ length: i + 1 }, (t, n) => {
		let o = a * n / i;
		return {
			award: vc(o, e, r),
			gap: o
		};
	});
}
function xc(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : hc));
}
function Sc(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function Cc(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function wc(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Tc = {
	companionMultiplier: .5,
	curveExponent: .75,
	gapForMaximumAward: 1e3,
	maximumAward: 500,
	scaleExponent: .5,
	scalePivot: 5e3
}, Ec = fs("xp-curve-console", () => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I({ ...Tc }), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I("party"), i = /* @__PURE__ */ I(!0), a = /* @__PURE__ */ I("default"), o = /* @__PURE__ */ I(), s = /* @__PURE__ */ I(!1), c, l = /* @__PURE__ */ new Set(), u, d = Z(() => e.value.filter((e) => e.selected)), f = Z(() => _c(e.value, t.value)), p = Z(() => f.value.awards.filter((e) => e.award > 0).length), m = Z(() => d.value.length >= 2 && f.value.totalAward > 0 && !s.value), h = Z(() => {
		let e = C();
		return Cc(n.value, {
			...e,
			session: i.value ? e.session : ""
		});
	}), g = Z(() => bc(f.value.highestXp, t.value));
	function _(s, d) {
		c = d, u = s.reasonContext, e.value = s.actors.map((e) => ({ ...e })), t.value = { ...s.parameters }, n.value = s.defaultReason, r.value = s.defaultSelection, i.value = s.useGmToolkitDefaults, a.value = s.selectionSource, l = new Set(s.actors.filter((e) => e.selected).map((e) => e.id)), o.value = void 0;
	}
	function v(t, n) {
		let r = e.value.find((e) => e.id === t);
		r && (r.selected = n);
	}
	function y(t) {
		for (let n of e.value) n.selected = t;
	}
	function b() {
		for (let t of e.value) t.selected = l.has(t.id);
	}
	async function x() {
		if (!(!m.value || s.value)) {
			s.value = !0, o.value = void 0;
			try {
				let e = {
					actorIds: d.value.map((e) => e.id),
					defaultReason: n.value,
					defaultSelection: r.value,
					parameters: t.value,
					useGmToolkitDefaults: i.value
				}, a = await S().applyAwards(e);
				S().onActionComplete(a);
			} catch (e) {
				console.error("WFRP4e | Drowsy’s Toolkit | XP curve award failed.", e), o.value = e instanceof Error ? e.message : "The XP awards could not be completed.";
			} finally {
				s.value = !1;
			}
		}
	}
	function S() {
		if (!c) throw Error("The XP Curve Console has not been initialized.");
		return c;
	}
	function C() {
		if (!u) throw Error("The XP Curve Console has not been initialized.");
		return u;
	}
	return {
		actors: e,
		applyAwards: x,
		canApply: m,
		curveSamples: g,
		defaultReason: n,
		defaultSelection: r,
		errorMessage: o,
		initialize: _,
		isWorking: s,
		parameters: t,
		plan: f,
		positiveAwardCount: p,
		resetSelection: b,
		resolvedReason: h,
		selectedActors: d,
		selectionSource: a,
		setActorSelected: v,
		setAllActorsSelected: y,
		useGmToolkitDefaults: i
	};
}), Dc = { class: "tw:m-0 tw:min-w-0" }, Oc = ["viewBox"], kc = ["y2"], Ac = [
	"x2",
	"y1",
	"y2"
], jc = ["x2"], Mc = ["points"], Nc = 360, Pc = 132, Q = 14, Fc = /* @__PURE__ */ tr({
	__name: "XpCurveGraph",
	props: {
		maximumAward: {},
		samples: {}
	},
	setup(e) {
		let t = e, n = Z(() => {
			let e = Math.max(1, ...t.samples.map((e) => e.gap)), n = Math.max(1, t.maximumAward);
			return t.samples.map((t) => {
				let r = Q + t.gap / e * (Nc - Q * 2), i = Pc - Q - t.award / n * (Pc - Q * 2);
				return `${r.toFixed(1)},${i.toFixed(1)}`;
			}).join(" ");
		});
		return (e, t) => (G(), K("figure", Dc, [(G(), K("svg", {
			class: "tw:block tw:h-auto tw:max-w-full tw:w-full tw:text-secondary",
			viewBox: `0 0 ${Nc} ${Pc}`,
			role: "img",
			"aria-labelledby": "xp-curve-graph-title xp-curve-graph-description"
		}, [
			t[0] ||= q("title", { id: "xp-curve-graph-title" }, "Current XP catch-up curve", -1),
			t[1] ||= q("desc", { id: "xp-curve-graph-description" }, " The horizontal axis is the gap below the highest XP actor. The vertical axis is XP awarded. ", -1),
			q("line", {
				class: "tw:text-base-content/30",
				x1: Q,
				x2: Q,
				y1: Q,
				y2: Pc - Q,
				stroke: "currentColor"
			}, null, 8, kc),
			q("line", {
				class: "tw:text-base-content/30",
				x1: Q,
				x2: Nc - Q,
				y1: Pc - Q,
				y2: Pc - Q,
				stroke: "currentColor"
			}, null, 8, Ac),
			q("line", {
				class: "tw:text-base-content/20",
				stroke: "currentColor",
				"stroke-dasharray": "4 4",
				x1: Q,
				x2: Nc - Q,
				y1: Q,
				y2: Q
			}, null, 8, jc),
			q("polyline", {
				fill: "none",
				points: n.value,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, Mc)
		], 8, Oc)), t[2] ||= q("figcaption", { class: "tw:flex tw:justify-between tw:gap-3 tw:text-xs tw:text-base-content/60" }, [q("span", null, "0 XP gap"), q("span", null, "Gap below leader →")], -1)]));
	}
}), Ic = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "curve-title"
}, Lc = { class: "dui-card-body tw:gap-3 tw:p-4" }, Rc = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, zc = { class: "dui-badge dui-badge-sm" }, Bc = { class: "tw:grid tw:grid-cols-1 tw:gap-3 tw:min-[34rem]:grid-cols-2" }, Vc = { class: "dui-fieldset tw:min-w-0" }, Hc = { class: "dui-fieldset tw:min-w-0" }, Uc = { class: "dui-collapse dui-collapse-arrow tw:border tw:border-base-300 tw:bg-base-200" }, Wc = { class: "dui-collapse-content" }, Gc = { class: "tw:grid tw:grid-cols-1 tw:gap-3 tw:min-[34rem]:grid-cols-2" }, Kc = { class: "dui-fieldset tw:min-w-0" }, qc = { class: "dui-fieldset tw:min-w-0" }, Jc = { class: "dui-fieldset tw:min-w-0" }, Yc = { class: "dui-fieldset tw:min-w-0" }, Xc = {
	class: "dui-alert tw:mt-3 tw:text-xs",
	role: "note"
}, Zc = /* @__PURE__ */ tr({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Mr({
		attenuation: {},
		highestXp: {},
		samples: {}
	}, {
		companionMultiplier: { required: !0 },
		companionMultiplierModifiers: {},
		curveExponent: { required: !0 },
		curveExponentModifiers: {},
		gapForMaximumAward: { required: !0 },
		gapForMaximumAwardModifiers: {},
		maximumAward: { required: !0 },
		maximumAwardModifiers: {},
		scaleExponent: { required: !0 },
		scaleExponentModifiers: {},
		scalePivot: { required: !0 },
		scalePivotModifiers: {}
	}),
	emits: [
		"update:companionMultiplier",
		"update:curveExponent",
		"update:gapForMaximumAward",
		"update:maximumAward",
		"update:scaleExponent",
		"update:scalePivot"
	],
	setup(e) {
		let t = Zr(e, "companionMultiplier"), n = Zr(e, "curveExponent"), r = Zr(e, "gapForMaximumAward"), i = Zr(e, "maximumAward"), a = Zr(e, "scaleExponent"), o = Zr(e, "scalePivot");
		return (s, c) => (G(), K("section", Ic, [q("div", Lc, [
			q("div", Rc, [c[6] ||= q("div", null, [q("h2", {
				id: "curve-title",
				class: "dui-card-title tw:text-base"
			}, "Catch-up curve"), q("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " Gap determines the base award; campaign scale weakens it at high total XP. ")], -1), q("span", zc, O(Math.round(e.attenuation * 100)) + "% scale ", 1)]),
			q("div", Bc, [q("fieldset", Vc, [
				c[7] ||= q("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
				c[8] ||= q("label", {
					class: "dui-label",
					for: "xp-maximum-award"
				}, "Maximum award", -1),
				B(q("input", {
					id: "xp-maximum-award",
					"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
					class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
					min: "0",
					step: "1",
					type: "number"
				}, null, 512), [[
					xo,
					i.value,
					void 0,
					{ number: !0 }
				]]),
				c[9] ||= q("p", { class: "dui-label" }, "No standard actor can receive more than this amount.", -1)
			]), q("fieldset", Hc, [
				c[10] ||= q("legend", { class: "dui-fieldset-legend" }, "Curve span", -1),
				c[11] ||= q("label", {
					class: "dui-label",
					for: "xp-gap-for-cap"
				}, "Gap for maximum award", -1),
				B(q("input", {
					id: "xp-gap-for-cap",
					"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
					class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
					min: "1",
					step: "1",
					type: "number"
				}, null, 512), [[
					xo,
					r.value,
					void 0,
					{ number: !0 }
				]]),
				c[12] ||= q("p", { class: "dui-label" }, "The XP deficit where the curve reaches its cap.", -1)
			])]),
			J(Fc, {
				"maximum-award": i.value,
				samples: e.samples
			}, null, 8, ["maximum-award", "samples"]),
			q("details", Uc, [c[30] ||= q("summary", { class: "dui-collapse-title tw:min-h-0 tw:py-3 tw:text-sm tw:font-semibold" }, " Advanced curve and scale ", -1), q("div", Wc, [q("div", Gc, [
				q("fieldset", Kc, [
					c[13] ||= q("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
					c[14] ||= q("label", {
						class: "dui-label",
						for: "xp-curve-exponent"
					}, "Exponent", -1),
					B(q("input", {
						id: "xp-curve-exponent",
						"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
						class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
						max: "5",
						min: "0.1",
						step: "0.05",
						type: "number"
					}, null, 512), [[
						xo,
						n.value,
						void 0,
						{ number: !0 }
					]]),
					c[15] ||= q("p", { class: "dui-label" }, " Below 1 helps small gaps sooner; above 1 reserves more XP for large gaps. ", -1)
				]),
				q("fieldset", qc, [
					c[16] ||= q("legend", { class: "dui-fieldset-legend" }, "Scale pivot", -1),
					c[17] ||= q("label", {
						class: "dui-label",
						for: "xp-scale-pivot"
					}, "Full-strength XP level", -1),
					B(q("input", {
						id: "xp-scale-pivot",
						"onUpdate:modelValue": c[3] ||= (e) => o.value = e,
						class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
						min: "1",
						step: "100",
						type: "number"
					}, null, 512), [[
						xo,
						o.value,
						void 0,
						{ number: !0 }
					]]),
					c[18] ||= q("p", { class: "dui-label" }, " The curve stays at full strength until the group leader reaches this total. ", -1)
				]),
				q("fieldset", Jc, [
					c[19] ||= q("legend", { class: "dui-fieldset-legend" }, "Scale weakening", -1),
					c[20] ||= q("label", {
						class: "dui-label",
						for: "xp-scale-exponent"
					}, "Decay exponent", -1),
					B(q("input", {
						id: "xp-scale-exponent",
						"onUpdate:modelValue": c[4] ||= (e) => a.value = e,
						class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
						max: "2",
						min: "0",
						step: "0.05",
						type: "number"
					}, null, 512), [[
						xo,
						a.value,
						void 0,
						{ number: !0 }
					]]),
					c[21] ||= q("p", { class: "dui-label" }, "Zero disables weakening. Higher values weaken it faster.", -1)
				]),
				q("fieldset", Yc, [
					c[22] ||= q("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
					c[23] ||= q("label", {
						class: "dui-label",
						for: "xp-companion-rate"
					}, "Award multiplier", -1),
					B(q("input", {
						id: "xp-companion-rate",
						"onUpdate:modelValue": c[5] ||= (e) => t.value = e,
						class: "dui-input dui-input-sm tw:w-full tw:tabular-nums",
						max: "1",
						min: "0",
						step: "0.05",
						type: "number"
					}, null, 512), [[
						xo,
						t.value,
						void 0,
						{ number: !0 }
					]]),
					c[24] ||= q("p", { class: "dui-label" }, "0.5 gives hirelings, minions, and companions half XP.", -1)
				])
			]), q("div", Xc, [c[29] ||= q("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}, null, -1), q("span", null, [
				c[25] ||= Y(" Award = cap × (gap ÷ span)", -1),
				c[26] ||= q("sup", null, "shape", -1),
				Y(" × min(1, pivot ÷ " + O(e.highestXp || "highest XP") + ")", 1),
				c[27] ||= q("sup", null, "decay", -1),
				c[28] ||= Y(" × recipient rate. ", -1)
			])])])])
		])]));
	}
}), Qc = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "recipients-title"
}, $c = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, el = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, tl = { class: "tw:flex tw:items-center tw:gap-2" }, nl = { class: "dui-badge dui-badge-sm" }, rl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, il = ["disabled"], al = ["disabled"], ol = ["disabled"], sl = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-300"
}, cl = { class: "dui-table dui-table-sm tw:min-w-[42rem]" }, ll = { class: "tw:cursor-pointer" }, ul = [
	"checked",
	"disabled",
	"onChange"
], dl = { class: "tw:sr-only" }, fl = {
	class: "tw:min-w-44",
	scope: "row"
}, pl = { class: "tw:block tw:font-semibold" }, ml = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, hl = { class: "tw:text-right tw:tabular-nums" }, gl = { class: "tw:text-right tw:tabular-nums" }, _l = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, vl = { class: "tw:text-right tw:tabular-nums" }, yl = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, bl = /* @__PURE__ */ tr({
	__name: "XpRecipientTable",
	props: {
		actors: {},
		disabled: { type: Boolean },
		plan: {}
	},
	emits: [
		"reset",
		"select-all",
		"update:selected"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return n.plan.awards.find((t) => t.actorId === e);
		}
		function a(e, t) {
			let n = t.currentTarget;
			n instanceof HTMLInputElement && r("update:selected", e, n.checked);
		}
		return (t, n) => (G(), K("section", Qc, [q("div", $c, [q("div", el, [q("div", null, [q("div", tl, [n[3] ||= q("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:text-base"
		}, "Recipients", -1), q("span", nl, O(e.plan.awards.length) + " selected", 1)]), n[4] ||= q("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " The highest selected total is the comparison point and receives no catch-up XP. ", -1)]), q("div", rl, [
			q("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, il),
			q("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, al),
			q("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, ol)
		])]), e.actors.length ? (G(), K("div", sl, [q("table", cl, [n[5] ||= q("thead", null, [q("tr", null, [
			q("th", { scope: "col" }, "Use"),
			q("th", { scope: "col" }, "Actor"),
			q("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			q("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Gap"),
			q("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Award"),
			q("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), q("tbody", null, [(G(!0), K(U, null, Er(e.actors, (t) => (G(), K("tr", {
			key: t.id,
			class: xe({ "tw:bg-base-200": t.selected })
		}, [
			q("td", null, [q("label", ll, [q("input", {
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox",
				checked: t.selected,
				disabled: e.disabled,
				onChange: (e) => a(t.id, e)
			}, null, 40, ul), q("span", dl, "Include " + O(t.name) + " in the XP curve", 1)])]),
			q("th", fl, [q("span", pl, O(t.name), 1), t.category === "companion" ? (G(), K("span", ml, " Companion rate ")) : ia("", !0)]),
			q("td", hl, O(t.totalXp), 1),
			q("td", gl, O(i(t.id)?.gap ?? "—"), 1),
			q("td", _l, O(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			q("td", vl, O(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (G(), K("div", yl, [...n[6] ||= [q("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), q("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), xl = { class: "tw:flex tw:min-h-full tw:flex-col tw:bg-base-200 tw:text-base-content" }, Sl = { class: "dui-navbar tw:items-start tw:border-b tw:border-base-300 tw:bg-base-100 tw:px-4 tw:py-3" }, Cl = { class: "dui-navbar-end tw:w-auto tw:shrink-0 tw:items-start" }, wl = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Tl = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:bg-base-300 tw:min-[38rem]:grid-cols-4" }, El = { class: "tw:contents" }, Dl = { class: "tw:bg-base-100 tw:px-4 tw:py-2" }, Ol = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, kl = { class: "tw:bg-base-100 tw:px-4 tw:py-2" }, Al = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, jl = { class: "tw:bg-base-100 tw:px-4 tw:py-2" }, Ml = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Nl = { class: "tw:bg-base-100 tw:px-4 tw:py-2" }, Pl = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Fl = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, Il = {
	key: 1,
	class: "dui-alert dui-alert-warning tw:m-4 tw:mb-0",
	role: "status"
}, Ll = { class: "tw:grid tw:min-w-0 tw:flex-1 tw:gap-3 tw:p-4 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, Rl = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-3" }, zl = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "award-message-title"
}, Bl = { class: "dui-card-body tw:gap-3 tw:p-4" }, Vl = { class: "tw:rounded-box tw:bg-base-200 tw:p-3 tw:text-sm" }, Hl = { class: "tw:m-0 tw:font-semibold" }, Ul = { class: "dui-fieldset" }, Wl = { class: "dui-label tw:mt-2 tw:cursor-pointer tw:justify-start tw:gap-2" }, Gl = { class: "tw:sticky tw:bottom-0 tw:z-10 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:border-t tw:border-base-300 tw:bg-base-100 tw:p-4" }, Kl = ["disabled"], ql = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Jl = {
	key: 1,
	class: "fa-solid fa-award",
	"aria-hidden": "true"
}, Yl = /* @__PURE__ */ tr({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Ec();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, curveSamples: a, defaultReason: o, defaultSelection: s, errorMessage: c, isWorking: l, parameters: u, plan: d, positiveAwardCount: f, resolvedReason: p, selectedActors: m, selectionSource: h, useGmToolkitDefaults: g } = ps(n);
		return (e, t) => (G(), K("main", xl, [
			q("header", Sl, [t[11] ||= ra("<div class=\"dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start\"><div class=\"tw:min-w-0\"><div class=\"dui-breadcrumbs tw:mb-1 tw:text-xs tw:text-secondary\"><ul><li>WFRP4e</li><li>Drowsy’s Toolkit</li></ul></div><h1 class=\"tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight\"><i class=\"fa-solid fa-chart-line tw:mr-1 tw:text-secondary\" aria-hidden=\"true\"></i> XP Curve Console </h1><p class=\"tw:mt-1 tw:max-w-2xl tw:text-sm tw:text-base-content/70\"> Review capped catch-up awards before changing WFRP4e actor experience. </p></div></div>", 1), q("div", Cl, [q("span", wl, [t[10] ||= q("span", {
				class: "dui-status dui-status-secondary dui-status-sm",
				"aria-hidden": "true"
			}, null, -1), Y(" " + O(L(h) === "targets" ? "Targeted seed" : "Default seed"), 1)])])]),
			q("div", Tl, [q("dl", El, [
				q("div", Dl, [t[12] ||= q("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Selected", -1), q("dd", Ol, O(L(m).length), 1)]),
				q("div", kl, [t[13] ||= q("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Highest XP", -1), q("dd", Al, O(L(d).highestXp), 1)]),
				q("div", jl, [t[14] ||= q("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Actors gaining XP", -1), q("dd", Ml, O(L(f)), 1)]),
				q("div", Nl, [t[15] ||= q("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Total award", -1), q("dd", Pl, O(L(d).totalAward) + " XP", 1)])
			])]),
			L(c) ? (G(), K("div", Fl, [t[16] ||= q("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), q("span", null, O(L(c)), 1)])) : ia("", !0),
			L(h) === "targets" && L(m).length === 0 ? (G(), K("div", Il, [...t[17] ||= [q("i", {
				class: "fa-solid fa-bullseye",
				"aria-hidden": "true"
			}, null, -1), q("span", null, "The targeted tokens do not contain eligible WFRP4e character actors.", -1)]])) : ia("", !0),
			q("div", Ll, [J(bl, {
				actors: L(r),
				disabled: L(l),
				plan: L(d),
				onReset: L(n).resetSelection,
				onSelectAll: L(n).setAllActorsSelected,
				"onUpdate:selected": L(n).setActorSelected
			}, null, 8, [
				"actors",
				"disabled",
				"plan",
				"onReset",
				"onSelectAll",
				"onUpdate:selected"
			]), q("div", Rl, [J(Zc, {
				"companion-multiplier": L(u).companionMultiplier,
				"onUpdate:companionMultiplier": t[0] ||= (e) => L(u).companionMultiplier = e,
				"curve-exponent": L(u).curveExponent,
				"onUpdate:curveExponent": t[1] ||= (e) => L(u).curveExponent = e,
				"gap-for-maximum-award": L(u).gapForMaximumAward,
				"onUpdate:gapForMaximumAward": t[2] ||= (e) => L(u).gapForMaximumAward = e,
				"maximum-award": L(u).maximumAward,
				"onUpdate:maximumAward": t[3] ||= (e) => L(u).maximumAward = e,
				"scale-exponent": L(u).scaleExponent,
				"onUpdate:scaleExponent": t[4] ||= (e) => L(u).scaleExponent = e,
				"scale-pivot": L(u).scalePivot,
				"onUpdate:scalePivot": t[5] ||= (e) => L(u).scalePivot = e,
				attenuation: L(d).attenuation,
				"highest-xp": L(d).highestXp,
				samples: L(a)
			}, null, 8, [
				"companion-multiplier",
				"curve-exponent",
				"gap-for-maximum-award",
				"maximum-award",
				"scale-exponent",
				"scale-pivot",
				"attenuation",
				"highest-xp",
				"samples"
			]), q("section", zl, [q("div", Bl, [
				t[23] ||= q("h2", {
					id: "award-message-title",
					class: "dui-card-title tw:text-base"
				}, "Award message", -1),
				t[24] ||= q("label", {
					class: "dui-label",
					for: "xp-award-reason"
				}, "Experience log reason", -1),
				B(q("input", {
					id: "xp-award-reason",
					"onUpdate:modelValue": t[6] ||= (e) => /* @__PURE__ */ F(o) ? o.value = e : null,
					class: "dui-input dui-input-sm tw:w-full",
					type: "text"
				}, null, 512), [[xo, L(o)]]),
				t[25] ||= q("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, [
					Y(" Supports GM Toolkit’s "),
					q("code", null, "%session%"),
					Y(" and "),
					q("code", null, "%date%"),
					Y(" tokens. ")
				], -1),
				q("div", Vl, [t[18] ||= q("span", { class: "tw:text-xs tw:text-base-content/60" }, "This award will record", -1), q("p", Hl, O(L(p) || "No reason"), 1)]),
				q("fieldset", Ul, [
					t[21] ||= q("legend", { class: "dui-fieldset-legend" }, "Defaults", -1),
					t[22] ||= q("label", {
						class: "dui-label",
						for: "xp-default-selection"
					}, " When no tokens are targeted ", -1),
					B(q("select", {
						id: "xp-default-selection",
						"onUpdate:modelValue": t[7] ||= (e) => /* @__PURE__ */ F(s) ? s.value = e : null,
						class: "dui-select dui-select-sm tw:w-full"
					}, [...t[19] ||= [
						q("option", { value: "party" }, "Party — assigned player characters", -1),
						q("option", { value: "company" }, "Company — party plus player-owned companions", -1),
						q("option", { value: "world" }, "World — every character actor", -1)
					]], 512), [[wo, L(s)]]),
					q("label", Wl, [B(q("input", {
						"onUpdate:modelValue": t[8] ||= (e) => /* @__PURE__ */ F(g) ? g.value = e : null,
						class: "dui-checkbox dui-checkbox-sm",
						type: "checkbox"
					}, null, 512), [[So, L(g)]]), t[20] ||= q("span", null, "Prefer compatible GM Toolkit session, reason, and group defaults", -1)])
				])
			])])])]),
			q("footer", Gl, [t[26] ||= q("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " Awards use WFRP4e’s experience log and cannot be undone as one batch. ", -1), q("button", {
				class: "dui-btn dui-btn-primary tw:min-w-52",
				disabled: !L(i),
				type: "button",
				onClick: t[9] ||= (...e) => L(n).applyAwards && L(n).applyAwards(...e)
			}, [L(l) ? (G(), K("span", ql)) : (G(), K("i", Jl)), Y(" Award " + O(L(d).totalAward) + " XP ", 1)], 8, Kl)])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function Xl(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = Zl(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? Ql(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort($l);
}
function Zl(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function Ql(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function $l(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function eu(e) {
	let t = au(), n = ou(), r = n === void 0 ? "default" : "targets";
	return {
		actors: Xl({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(nu),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function tu(e) {
	let t = au();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return ru(n, Zl(n, t), !0);
	});
}
function nu(e) {
	let t = iu(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.details.experience.total
	};
}
function ru(e, t, n) {
	let r = iu(e);
	return {
		awardExperience: async (e, t) => {
			await r.awardExp.call(r, e, t, null, !0);
		},
		choice: {
			category: t,
			id: e.id,
			name: e.name,
			selected: n,
			totalXp: r.details.experience.total
		}
	};
}
function iu(e) {
	if (!su(e.system)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let t = e.system.details, n = e.system.awardExp;
	if (!su(t) || typeof n != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let r = t.experience;
	if (!su(r) || !Number.isFinite(Number(r.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExp: n,
		details: { experience: { total: Math.max(0, Math.round(Number(r.total))) } }
	};
}
function au() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function ou() {
	if (!(!game.user.targets || game.user.targets.size === 0)) return new Set(Array.from(game.user.targets).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function su(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/xp-curve/settings/keys.ts
var $ = {
	companionMultiplier: "xpCurveCompanionMultiplier",
	curveExponent: "xpCurveExponent",
	defaultReason: "xpCurveDefaultReason",
	defaultSelection: "xpCurveDefaultSelection",
	gapForMaximumAward: "xpCurveGapForMaximumAward",
	maximumAward: "xpCurveMaximumAward",
	scaleExponent: "xpCurveScaleExponent",
	scalePivot: "xpCurveScalePivot",
	showModuleSettingsLauncher: "showXpCurveModuleSettingsLauncher",
	showTokenControlsLauncher: "showXpCurveTokenControlsLauncher",
	useGmToolkitDefaults: "xpCurveUseGmToolkitDefaults"
}, cu = {
	defaultReason: "addXPDefaultReason",
	defaultSelection: "defaultPartySessionTurnover",
	session: "sessionID"
};
function lu() {
	let e = mu($.useGmToolkitDefaults), t = {
		defaultReason: gu($.defaultReason),
		defaultSelection: _u($.defaultSelection),
		parameters: {
			companionMultiplier: hu($.companionMultiplier),
			curveExponent: hu($.curveExponent),
			gapForMaximumAward: hu($.gapForMaximumAward),
			maximumAward: hu($.maximumAward),
			scaleExponent: hu($.scaleExponent),
			scalePivot: hu($.scalePivot)
		},
		useGmToolkitDefaults: e
	};
	return !e || !pu() ? t : {
		...t,
		defaultReason: vu(cu.defaultReason),
		defaultSelection: yu()
	};
}
function uu(e) {
	return !e || !pu() ? "" : vu(cu.session);
}
async function du(e) {
	let n = [
		[$.companionMultiplier, e.parameters.companionMultiplier],
		[$.curveExponent, e.parameters.curveExponent],
		[$.defaultReason, e.defaultReason],
		[$.defaultSelection, e.defaultSelection],
		[$.gapForMaximumAward, e.parameters.gapForMaximumAward],
		[$.maximumAward, e.parameters.maximumAward],
		[$.scaleExponent, e.parameters.scaleExponent],
		[$.scalePivot, e.parameters.scalePivot],
		[$.useGmToolkitDefaults, e.useGmToolkitDefaults]
	];
	for (let [e, r] of n) await game.settings.set(t, e, r);
}
function fu(e) {
	return mu(e);
}
function pu() {
	return game.modules.get(r)?.active === !0;
}
function mu(e) {
	return game.settings.get(t, e) === !0;
}
function hu(e) {
	return Number(game.settings.get(t, e));
}
function gu(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function _u(e) {
	return bu(gu(e));
}
function vu(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" && t !== "null" ? t : "";
}
function yu() {
	return bu(vu(cu.defaultSelection));
}
function bu(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function xu() {
	let e = lu(), t = eu(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: Su(!0)
	};
}
function Su(e) {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: uu(e)
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function Cu(e) {
	if (!game.user.isGM) throw Error("Only a GM can award experience.");
	let t = tu(Array.from(new Set(e.actorIds))), n = gc(e.parameters), r = _c(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await du({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n,
		useGmToolkitDefaults: e.useGmToolkitDefaults
	});
	let i = Cc(e.defaultReason, Su(e.useGmToolkitDefaults)), a = [];
	for (let [e, n] of t.entries()) {
		let t = r.awards[e];
		if (t.award !== 0) try {
			await n.awardExperience(t.award, i), a.push(t.actorName);
		} catch (e) {
			let n = a.length > 0 ? ` XP was already applied to ${a.join(", ")}.` : "", r = e instanceof Error ? ` ${e.message}` : "";
			throw Error(`Could not award XP to ${t.actorName}.${n}${r}`, { cause: e });
		}
	}
	let o = {
		...r,
		reason: i
	};
	return await wu(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function wu(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${wc(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${wc(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var Tu = class extends dc {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [t, `${t}-xp-curve-console`],
		id: `${t}-xp-curve-console`,
		position: {
			height: 720,
			width: 820
		},
		window: {
			icon: "fa-solid fa-chart-line",
			resizable: !0,
			title: `${n} — XP Curve Console`
		}
	};
	getVueComponent() {
		return Yl;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: Cu,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s Toolkit could not close the console.");
					});
				}
			},
			initialization: xu()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function Eu() {
	let e = new Tu();
	return await e.render(!0), e;
}
function Du() {
	Eu().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/api/create-module-api.ts
function Ou() {
	return {
		applyToSelectedActors: oc,
		awardXpCurve: Cu,
		openFearConsole: pc,
		openXpCurveConsole: Eu,
		openWorkbench: pc,
		postPrompt: sc,
		postSummaryPrompt: cc
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function ku() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = Ou();
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var Au = {
	actorSheet: "showActorSheetLauncher",
	moduleSettings: "showModuleSettingsLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function ju(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var Mu = "openFearConsole", Nu = "wfrp4e-enhanced-fear-terror-actor-header", Pu = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], Fu = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function Iu() {
	if (ju(Au.actorSheet)) {
		for (let e of Pu) Hooks.on(e, (e, t) => {
			Lu(e, t);
		});
		for (let e of Fu) Hooks.on(e, (e) => {
			Ru(e);
		});
	}
}
function Lu(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === Mu) || (t.push({
		action: Mu,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[Mu] = function() {
		zu(this.document);
	}));
}
function Ru(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${Nu}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(Nu, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = Mu, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), zu(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function zu(e) {
	try {
		mc({ initialPayload: ec(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var Bu = "openFearConsole";
function Vu() {
	ju(Au.tokenControls) && Hooks.on("getSceneControlButtons", (e) => {
		Hu(e);
	});
}
function Hu(t) {
	let n = t.tokens;
	n && (n.tools[Bu] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: Bu,
		onChange: () => {
			mc();
		},
		order: 99,
		title: "Fear Console",
		toolclip: { content: `${e}.SceneControls.OpenFearConsole` }
	});
}
//#endregion
//#region src/module/fear-terror/settings/register.ts
function Uu() {
	Wu(Au.moduleSettings, "ModuleSettingsLauncher"), Wu(Au.tokenControls, "TokenControlsLauncher"), Wu(Au.actorSheet, "ActorSheetLauncher"), ju(Au.moduleSettings) && game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsole.Hint`,
		icon: "fa-solid fa-skull",
		label: `${e}.Menu.FearConsole.Label`,
		name: `${e}.Menu.FearConsole.Name`,
		restricted: !0,
		type: fc
	});
}
function Wu(n, r) {
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
//#region src/module/xp-curve/scene-controls/register.ts
var Gu = "openXpCurveConsole";
function Ku() {
	fu($.showTokenControlsLauncher) && Hooks.on("getSceneControlButtons", (t) => {
		let n = t.tokens;
		n && (n.tools[Gu] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: Gu,
			onChange: Du,
			order: 98,
			title: "XP Curve Console",
			toolclip: { content: `${e}.SceneControls.OpenXpCurveConsole` }
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function qu() {
	Ju($.showModuleSettingsLauncher, "XpCurveModuleSettingsLauncher"), Ju($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), Yu($.maximumAward, 500, Number), Yu($.gapForMaximumAward, 1e3, Number), Yu($.curveExponent, .75, Number), Yu($.scalePivot, 5e3, Number), Yu($.scaleExponent, .5, Number), Yu($.companionMultiplier, .5, Number), Yu($.defaultReason, "XP curve catch-up (%date%)", String), Yu($.defaultSelection, "party", String), Yu($.useGmToolkitDefaults, !0, Boolean), fu($.showModuleSettingsLauncher) && game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConsole.Hint`,
		icon: "fa-solid fa-chart-line",
		label: `${e}.Menu.XpCurveConsole.Label`,
		name: `${e}.Menu.XpCurveConsole.Name`,
		restricted: !0,
		type: Tu
	});
}
function Ju(n, r) {
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
function Yu(e, n, r) {
	game.settings.register(t, e, {
		config: !1,
		default: n,
		hint: "",
		name: e,
		scope: "world",
		type: r
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Xu() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), Uu(), qu(), Iu(), Vu(), Ku();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		ku(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
Xu();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map