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
function O(e) {
	let t = "";
	if (x(e)) t = e;
	else if (g(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (C(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var xe = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Se = /* @__PURE__ */ a(xe);
xe + "";
function Ce(e) {
	return !!e || e === "";
}
function we(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Te(e[r], t[r]);
	return n;
}
function Te(e, t) {
	if (e === t) return !0;
	let n = y(e), r = y(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = S(e), r = S(t), n || r) return e === t;
	if (n = g(e), r = g(t), n || r) return n && r ? we(e, t) : !1;
	if (n = C(e), r = C(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Te(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Ee(e, t) {
	return e.findIndex((e) => Te(e, t));
}
var De = (e) => !!(e && e.__v_isRef === !0), k = (e) => x(e) ? e : e == null ? "" : g(e) || C(e) && (e.toString === ee || !b(e.toString)) ? De(e) ? k(e.value) : JSON.stringify(e, Oe, 2) : String(e), Oe = (e, t) => De(t) ? Oe(e, t.value) : _(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ke(t, r) + " =>"] = n, e), {}) } : v(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ke(e)) } : S(t) ? ke(t) : C(t) && !g(t) && !re(t) ? String(t) : t, ke = (e, t = "") => S(e) ? `Symbol(${e.description ?? t})` : e, A, Ae = class {
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
function je(e) {
	return new Ae(e);
}
function Me() {
	return A;
}
function Ne(e, t = !1) {
	A && A.cleanups.push(e);
}
var j, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Qe(this), He(this);
		let e = j, t = Je;
		j = this, Je = !0;
		try {
			return this.fn();
		} finally {
			Ue(this), j = e, Je = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ke(e);
			this.deps = this.depsTail = void 0, Qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		We(this) && this.run();
	}
	get dirty() {
		return We(this);
	}
}, Ie = 0, Le, Re;
function ze(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Re, Re = e;
		return;
	}
	e.next = Le, Le = e;
}
function Be() {
	Ie++;
}
function Ve() {
	if (--Ie > 0) return;
	if (Re) {
		let e = Re;
		for (Re = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Le;) {
		let t = Le;
		for (Le = void 0; t;) {
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
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ue(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ke(r), qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ge(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $e) || (e.globalVersion = $e, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = Je;
	j = e, Je = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Je = r, Ue(e), e.flags &= -3;
	}
}
function Ke(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ke(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Je = !0, Ye = [];
function Xe() {
	Ye.push(Je), Je = !1;
}
function Ze() {
	let e = Ye.pop();
	Je = e === void 0 ? !0 : e;
}
function Qe(e) {
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
var $e = 0, et = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !Je || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new et(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, nt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, $e++, this.notify(e);
	}
	notify(e) {
		Be();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ve();
		}
	}
};
function nt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) nt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol("");
function M(e, t, n) {
	if (Je && j) {
		let t = rt.get(e);
		t || rt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new tt()), r.map = t, r.key = n), r.track();
	}
}
function st(e, t, n, r, i, a) {
	let o = rt.get(e);
	if (!o) {
		$e++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Be(), t === "clear") o.forEach(s);
	else {
		let i = g(e), a = i && ie(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !S(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), _(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), _(e) && s(o.get(at)));
				break;
			case "set":
				_(e) && s(o.get(it));
				break;
		}
	}
	Ve();
}
function ct(e, t) {
	let n = rt.get(e);
	return n && n.get(t);
}
function lt(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e ? t : (M(t, "iterate", ot), /* @__PURE__ */ N(e) ? t : t.map(Xt));
}
function ut(e) {
	return M(e = /* @__PURE__ */ P(e), "iterate", ot), e;
}
function dt(e, t) {
	return /* @__PURE__ */ qt(e) ? Zt(/* @__PURE__ */ Kt(e) ? Xt(t) : t) : Xt(t);
}
var ft = {
	__proto__: null,
	[Symbol.iterator]() {
		return pt(this, Symbol.iterator, (e) => dt(this, e));
	},
	concat(...e) {
		return lt(this).concat(...e.map((e) => g(e) ? lt(e) : e));
	},
	entries() {
		return pt(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
	},
	every(e, t) {
		return ht(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ht(this, "filter", e, t, (e) => e.map((e) => dt(this, e)), arguments);
	},
	find(e, t) {
		return ht(this, "find", e, t, (e) => dt(this, e), arguments);
	},
	findIndex(e, t) {
		return ht(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ht(this, "findLast", e, t, (e) => dt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ht(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ht(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return _t(this, "includes", e);
	},
	indexOf(...e) {
		return _t(this, "indexOf", e);
	},
	join(e) {
		return lt(this).join(e);
	},
	lastIndexOf(...e) {
		return _t(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ht(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return vt(this, "pop");
	},
	push(...e) {
		return vt(this, "push", e);
	},
	reduce(e, ...t) {
		return gt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return gt(this, "reduceRight", e, t);
	},
	shift() {
		return vt(this, "shift");
	},
	some(e, t) {
		return ht(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return vt(this, "splice", e);
	},
	toReversed() {
		return lt(this).toReversed();
	},
	toSorted(e) {
		return lt(this).toSorted(e);
	},
	toSpliced(...e) {
		return lt(this).toSpliced(...e);
	},
	unshift(...e) {
		return vt(this, "unshift", e);
	},
	values() {
		return pt(this, "values", (e) => dt(this, e));
	}
};
function pt(e, t, n) {
	let r = ut(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ N(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var mt = Array.prototype;
function ht(e, t, n, r, i, a) {
	let o = ut(e), s = o !== e && !/* @__PURE__ */ N(e), c = o[t];
	if (c !== mt[t]) {
		let t = c.apply(e, a);
		return s ? Xt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, dt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function gt(e, t, n, r) {
	let i = ut(e), a = i !== e && !/* @__PURE__ */ N(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = dt(e, t)), n.call(this, t, dt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? dt(e, c) : c;
}
function _t(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	M(r, "iterate", ot);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Jt(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function vt(e, t, n = []) {
	Xe(), Be();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Ve(), Ze(), r;
}
var yt = /* @__PURE__ */ a("__proto__,__v_isRef,__isVue"), bt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(S));
function xt(e) {
	S(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return M(t, "has", e), t.hasOwnProperty(e);
}
var St = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Bt : zt : i ? Rt : Lt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = g(e);
		if (!r) {
			let e;
			if (a && (e = ft[t])) return e;
			if (t === "hasOwnProperty") return xt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((S(t) ? bt.has(t) : yt(t)) || (r || M(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && ie(t) ? o : o.value;
			return r && C(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return C(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ Ht(o) : o;
	}
}, Ct = class extends St {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = g(e) && ie(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ N(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : h(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && (o ? D(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = h(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && st(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!S(t) || !bt.has(t)) && M(e, "has", t), n;
	}
	ownKeys(e) {
		return M(e, "iterate", g(e) ? "length" : it), Reflect.ownKeys(e);
	}
}, wt = class extends St {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Ct(!0), Ot = (e) => e, kt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = _(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Ot : t ? Zt : Xt;
		return !t && M(a, "iterate", c ? at : it), f(Object.create(l), { next() {
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
function jt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Mt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (D(n, a) && M(i, "get", n), M(i, "get", a));
			let { has: o } = kt(i), s = t ? Ot : e ? Zt : Xt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && M(/* @__PURE__ */ P(t), "iterate", it), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (D(t, i) && M(r, "has", t), M(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? Ot : e ? Zt : Xt;
			return !e && M(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return f(n, e ? {
		add: jt("add"),
		set: jt("set"),
		delete: jt("delete"),
		clear: jt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = kt(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ N(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ N(n) && !/* @__PURE__ */ qt(n) && (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = kt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = kt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && st(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && st(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = At(r, e, t);
	}), n;
}
function Nt(e, t) {
	let n = Mt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(h(n, r) && r in t ? n : t, r, i);
}
var Pt = { get: /* @__PURE__ */ Nt(!1, !1) }, Ft = { get: /* @__PURE__ */ Nt(!1, !0) }, It = { get: /* @__PURE__ */ Nt(!0, !1) }, Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
function Vt(e) {
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
function Ht(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, Tt, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Gt(e, !1, Dt, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0, Et, It, zt);
}
function Gt(e, t, n, r, i) {
	if (!C(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Vt(ne(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Yt(e) {
	return !h(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var Xt = (e) => C(e) ? /* @__PURE__ */ Ht(e) : e, Zt = (e) => C(e) ? /* @__PURE__ */ Wt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return $t(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return $t(e, !0);
}
function $t(e, t) {
	return /* @__PURE__ */ F(e) ? e : new en(e, t);
}
var en = class {
	constructor(e, t) {
		this.dep = new tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : Xt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ N(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ P(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Xt(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function an(e) {
	return new rn(e);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	let t = g(e) ? Array(e.length) : {};
	for (let n in e) t[n] = un(e, n);
	return t;
}
var sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = S(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!g(e) || S(this._key) || !ie(this._key)) do
			r = !/* @__PURE__ */ Jt(i) || /* @__PURE__ */ N(i);
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
		return ct(this._raw, this._key);
	}
}, cn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function ln(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : b(e) ? new cn(e) : C(e) && arguments.length > 1 ? un(e, t, n) : /* @__PURE__ */ I(e);
}
function un(e, t, n) {
	return new sn(e, t, n);
}
var dn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return ze(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ge(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function fn(e, t, n = !1) {
	let r, i;
	return b(e) ? r = e : (r = e.get, i = e.set), new dn(r, i, n);
}
var pn = {}, mn = /* @__PURE__ */ new WeakMap(), hn = void 0;
function gn(e, t = !1, n = hn) {
	if (n) {
		let t = mn.get(n);
		t || mn.set(n, t = []), t.push(e);
	}
}
function _n(e, t, n = o) {
	let { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, d = (e) => i ? e : /* @__PURE__ */ N(e) || i === !1 || i === 0 ? vn(e, 1) : vn(e), f, m, h, _, v = !1, y = !1;
	if (/* @__PURE__ */ F(e) ? (m = () => e.value, v = /* @__PURE__ */ N(e)) : /* @__PURE__ */ Kt(e) ? (m = () => d(e), v = !0) : g(e) ? (y = !0, v = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ N(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return d(e);
		if (b(e)) return u ? u(e, 2) : e();
	})) : m = b(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (h) {
			Xe();
			try {
				h();
			} finally {
				Ze();
			}
		}
		let t = hn;
		hn = f;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			hn = t;
		}
	} : c, t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => vn(e(), t);
	}
	let x = Me(), S = () => {
		f.stop(), x && x.active && p(x.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(pn) : pn, w = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) if (t) {
			let n = f.run();
			if (e || i || v || (y ? n.some((e, t) => D(e, C[t])) : D(n, C))) {
				h && h();
				let e = hn;
				hn = f;
				try {
					let e = [
						n,
						C === pn ? void 0 : y && C[0] === pn ? [] : C,
						_
					];
					C = n, u ? u(t, 3, e) : t(...e);
				} finally {
					hn = e;
				}
			}
		} else f.run();
	};
	return l && l(w), f = new Fe(m), f.scheduler = s ? () => s(w, !1) : w, _ = (e) => gn(e, !1, f), h = f.onStop = () => {
		let e = mn.get(f);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			mn.delete(f);
		}
	}, t ? r ? w(!0) : C = f.run() : s ? s(w.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function vn(e, t = Infinity, n) {
	if (t <= 0 || !C(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) vn(e.value, t, n);
	else if (g(e)) for (let r = 0; r < e.length; r++) vn(e[r], t, n);
	else if (v(e) || _(e)) e.forEach((e) => {
		vn(e, t, n);
	});
	else if (re(e)) {
		for (let r in e) vn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && vn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function yn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		xn(e, t, n);
	}
}
function bn(e, t, n, r) {
	if (b(e)) {
		let i = yn(e, t, n, r);
		return i && w(i) && i.catch((e) => {
			xn(e, t, n);
		}), i;
	}
	if (g(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(bn(e[a], t, n, r));
		return i;
	}
}
function xn(e, t, n, r = !0) {
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
			Xe(), yn(a, null, 10, [
				e,
				i,
				o
			]), Ze();
			return;
		}
	}
	Sn(e, n, i, r, s);
}
function Sn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], Cn = -1, wn = [], Tn = null, En = 0, Dn = /* @__PURE__ */ Promise.resolve(), On = null;
function kn(e) {
	let t = On || Dn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function An(e) {
	let t = Cn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function jn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? R.push(e) : R.splice(An(t), 0, e), e.flags |= 1, Mn();
	}
}
function Mn() {
	On ||= Dn.then(Ln);
}
function Nn(e) {
	g(e) ? wn.push(...e) : Tn && e.id === -1 ? Tn.splice(En + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), Mn();
}
function Pn(e, t, n = Cn + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Fn(e) {
	if (wn.length) {
		let e = [...new Set(wn)].sort((e, t) => In(e) - In(t));
		if (wn.length = 0, Tn) {
			Tn.push(...e);
			return;
		}
		for (Tn = e, En = 0; En < Tn.length; En++) {
			let e = Tn[En];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Tn = null, En = 0;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (Cn = 0; Cn < R.length; Cn++) {
			let e = R[Cn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), yn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Cn < R.length; Cn++) {
			let e = R[Cn];
			e && (e.flags &= -2);
		}
		Cn = -1, R.length = 0, Fn(e), On = null, (R.length || wn.length) && Ln(e);
	}
}
var z = null, Rn = null;
function zn(e) {
	let t = z;
	return z = e, Rn = e && e.type.__scopeId || null, t;
}
function Bn(e, t = z, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Yi(-1);
		let i = zn(t), a;
		try {
			a = e(...n);
		} finally {
			zn(i), r._d && Yi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function B(e, t) {
	if (z === null) return e;
	let n = Aa(z), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, s, c = o] = t[e];
		i && (b(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && vn(a), r.push({
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
function Vn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Xe(), bn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ze());
	}
}
function Hn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = ha();
	if (r || Qr) {
		let i = Qr ? Qr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && b(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(ha() || Qr);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function qn(e, t) {
	return Yn(e, null, { flush: "sync" });
}
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, n = o) {
	let { immediate: r, deep: i, flush: a, once: s } = n, l = f({}, n), u = t && r || !t && a !== "post", d;
	if (xa) {
		if (a === "sync") {
			let e = Kn();
			d = e.__watcherHandles ||= [];
		} else if (!u) {
			let e = () => {};
			return e.stop = c, e.resume = c, e.pause = c, e;
		}
	}
	let p = Z;
	l.call = (e, t, n) => bn(e, p, t, n);
	let m = !1;
	a === "post" ? l.scheduler = (e) => {
		U(e, p && p.suspense);
	} : a !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : jn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = _n(e, t, l);
	return xa && (d ? d.push(h) : u && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = x(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	b(t) ? a = t : (a = t.handler, n = t);
	let o = va(this), s = Yn(i, a.bind(r), n);
	return o(), s;
}
function Zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb");
function tr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, tr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
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
	let a = r.shapeFlag & 4 ? Aa(r.component) : r.el, s = i ? null : a, { i: c, r: u } = e, d = t && t.r, f = c.refs === o ? c.refs = {} : c.refs, m = c.setupState, _ = /* @__PURE__ */ P(m), v = m === o ? l : (e) => rr(f, e) ? !1 : h(_, e), y = (e, t) => !(t && rr(f, t));
	if (d != null && d !== u) {
		if (or(t), x(d)) f[d] = null, v(d) && (m[d] = null);
		else if (/* @__PURE__ */ F(d)) {
			let e = t;
			y(d, e.k) && (d.value = null), e.k && (f[e.k] = null);
		}
	}
	if (b(u)) yn(u, c, 12, [s, f]);
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
				t.id = -1, ir.set(e, t), U(t, n);
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
function dr(e, t, n = Z) {
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
function pr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Xe();
			let i = va(n), a = bn(t, n, e, r);
			return i(), Ze(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var mr = (e) => (t, n = Z) => {
	(!xa || e === "sp") && pr(e, (...e) => t(...e), n);
}, hr = mr("bm"), gr = mr("m"), _r = mr("bu"), vr = mr("u"), yr = mr("bum"), br = mr("um"), xr = mr("sp"), Sr = mr("rtg"), Cr = mr("rtc");
function wr(e, t = Z) {
	pr("ec", e, t);
}
var Tr = /* @__PURE__ */ Symbol.for("v-ndc");
function Er(e, t, n, r) {
	let i, a = n && n[r], o = g(e);
	if (o || x(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ N(e), s = /* @__PURE__ */ qt(e), e = ut(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(Xt(e[n])) : Xt(e[n]) : e[n], n, void 0, a && a[n]);
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
function Dr(e, t, n = {}, r, i) {
	if (z.ce || z.parent && sr(z.parent) && z.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), Zi(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Or(a(n)), s = n.key || o && o.key, c = Zi(W, { key: (s && !S(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Or(e) {
	return e.some((e) => Qi(e) ? !(e.type === Wi || e.type === W && !Or(e.children)) : !0) ? e : null;
}
var kr = (e) => e ? ba(e) ? Aa(e) : kr(e.parent) : null, Ar = /* @__PURE__ */ f(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => kr(e.parent),
	$root: (e) => kr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Br(e),
	$forceUpdate: (e) => e.f ||= () => {
		jn(e.update);
	},
	$nextTick: (e) => e.n ||= kn.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), jr = (e, t) => e !== o && !e.__isScriptSetup && h(e, t), Mr = {
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
			else if (jr(r, t)) return s[t] = 1, r[t];
			else if (i !== o && h(i, t)) return s[t] = 2, i[t];
			else if (h(a, t)) return s[t] = 3, a[t];
			else if (n !== o && h(n, t)) return s[t] = 4, n[t];
			else Fr && (s[t] = 0);
		}
		let u = Ar[t], d, f;
		if (u) return t === "$attrs" && M(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== o && h(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, h(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return jr(i, t) ? (i[t] = n, !0) : r !== o && h(r, t) ? (r[t] = n, !0) : h(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s } }, c) {
		let l;
		return !!(n[c] || e !== o && c[0] !== "$" && h(e, c) || jr(t, c) || h(a, c) || h(r, c) || h(Ar, c) || h(i.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? h(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Nr(e) {
	return g(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Pr(e, t) {
	return !e || !t ? e || t : g(e) && g(t) ? e.concat(t) : f({}, Nr(e), Nr(t));
}
var Fr = !0;
function Ir(e) {
	let t = Br(e), n = e.proxy, r = e.ctx;
	Fr = !1, t.beforeCreate && Rr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: m, updated: h, activated: _, deactivated: v, beforeDestroy: y, beforeUnmount: x, destroyed: S, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: ae, inheritAttrs: oe, components: se, directives: T, filters: ce } = t;
	if (u && Lr(u, r, null), o) for (let e in o) {
		let t = o[e];
		b(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		C(t) && (e.data = /* @__PURE__ */ Ht(t));
	}
	if (Fr = !0, a) for (let e in a) {
		let t = a[e], i = Q({
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
	if (s) for (let e in s) zr(s[e], r, n, e);
	if (l) {
		let e = b(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	d && Rr(d, e, "c");
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
function Lr(e, t, n = c) {
	g(e) && (e = Gr(e));
	for (let n in e) {
		let r = e[n], i;
		i = C(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Rr(e, t, n) {
	bn(g(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function zr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (x(e)) {
		let n = t[e];
		b(n) && Jn(i, n);
	} else if (b(e)) Jn(i, e.bind(n));
	else if (C(e)) if (g(e)) e.forEach((e) => zr(e, t, n, r));
	else {
		let r = b(e.handler) ? e.handler.bind(n) : t[e.handler];
		b(r) && Jn(i, r, e);
	}
}
function Br(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Vr(c, e, o, !0)), Vr(c, t, o)), C(t) && a.set(t, c), c;
}
function Vr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Vr(e, a, n, !0), i && i.forEach((t) => Vr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Hr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Hr = {
	data: Ur,
	props: qr,
	emits: qr,
	methods: Kr,
	computed: Kr,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: Kr,
	directives: Kr,
	watch: Jr,
	provide: Ur,
	inject: Wr
};
function Ur(e, t) {
	return t ? e ? function() {
		return f(b(e) ? e.call(this, this) : e, b(t) ? t.call(this, this) : t);
	} : t : e;
}
function Wr(e, t) {
	return Kr(Gr(e), Gr(t));
}
function Gr(e) {
	if (g(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Kr(e, t) {
	return e ? f(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qr(e, t) {
	return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : f(/* @__PURE__ */ Object.create(null), Nr(e), Nr(t ?? {})) : t;
}
function Jr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = f(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Yr() {
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
var Xr = 0;
function Zr(e, t) {
	return function(n, r = null) {
		b(n) || (n = f({}, n)), r != null && !C(r) && (r = null);
		let i = Yr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Xr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ma,
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
					let u = c._ceVNode || Y(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Aa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (bn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Qr;
				Qr = c;
				try {
					return e();
				} finally {
					Qr = t;
				}
			}
		};
		return c;
	};
}
var Qr = null;
function $r(e, t, n = o) {
	let r = ha(), i = T(t), a = E(t), s = ei(e, i), c = an((s, c) => {
		let l, u = o, d;
		return qn(() => {
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
var ei = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function ti(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || o, i = n, a = t.startsWith("update:"), s = a && ei(r, t.slice(7));
	s && (s.trim && (i = n.map((e) => x(e) ? e.trim() : e)), s.number && (i = n.map(pe)));
	let c, l = r[c = ue(t)] || r[c = ue(T(t))];
	!l && a && (l = r[c = ue(E(t))]), l && bn(l, e, 6, i);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, bn(u, e, 6, i);
	}
}
var ni = /* @__PURE__ */ new WeakMap();
function ri(e, t, n = !1) {
	let r = n ? ni : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!b(e)) {
		let r = (e) => {
			let n = ri(e, t, !0);
			n && (s = !0, f(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (C(e) && r.set(e, null), null) : (g(a) ? a.forEach((e) => o[e] = null) : f(o, a), C(e) && r.set(e, o), o);
}
function ii(e, t) {
	return !e || !u(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), h(e, t[0].toLowerCase() + t.slice(1)) || h(e, E(t)) || h(e, t));
}
function ai(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = sa(l.call(t, e, u, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = sa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : oi(s);
		}
	} catch (t) {
		Ki.length = 0, xn(t, e, 1), v = Y(Wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(d) && (y = si(y, a)), b = ia(b, y, !1, !0));
	}
	return n.dirs && (b = ia(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && tr(b, n.transition), v = b, zn(_), v;
}
var oi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || u(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, si = (e, t) => {
	let n = {};
	for (let r in e) (!d(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ci(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? li(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (di(o, r, n) && !ii(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? li(r, o, l) : !0 : !!o;
	return !1;
}
function li(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (di(t, e, a) && !ii(n, a)) return !0;
	}
	return !1;
}
function di(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && C(r) && C(i) ? !Te(r, i) : r !== i;
}
function fi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var pi = {}, mi = () => Object.create(pi), hi = (e) => Object.getPrototypeOf(e) === pi;
function gi(e, t, n, r = !1) {
	let i = {}, a = mi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function _i(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ii(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (h(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = yi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		vi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !h(t, a) && ((r = E(a)) === a || !h(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = yi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !h(t, e)) && (delete a[e], l = !0);
	}
	l && st(e.attrs, "set", "");
}
function vi(e, t, n, r) {
	let [i, a] = e.propsOptions, s = !1, c;
	if (t) for (let o in t) {
		if (ae(o)) continue;
		let l = t[o], u;
		i && h(i, u = T(o)) ? !a || !a.includes(u) ? n[u] = l : (c ||= {})[u] = l : ii(e.emitsOptions, o) || (!(o in r) || l !== r[o]) && (r[o] = l, s = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ P(n), r = c || o;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = yi(i, t, s, r[s], e, !h(r, s));
		}
	}
	return s;
}
function yi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = h(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && b(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = va(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var bi = /* @__PURE__ */ new WeakMap();
function xi(e, t, n = !1) {
	let r = n ? bi : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, c = {}, l = [], u = !1;
	if (!b(e)) {
		let r = (e) => {
			u = !0;
			let [n, r] = xi(e, t, !0);
			f(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !u) return C(e) && r.set(e, s), s;
	if (g(a)) for (let e = 0; e < a.length; e++) {
		let t = T(a[e]);
		Si(t) && (c[t] = o);
	}
	else if (a) for (let e in a) {
		let t = T(e);
		if (Si(t)) {
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
function Si(e) {
	return e[0] !== "$" && !ae(e);
}
var Ci = (e) => e === "_" || e === "_ctx" || e === "$stable", wi = (e) => g(e) ? e.map(sa) : [sa(e)], Ti = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => wi(t(...e)), n);
	return r._c = !1, r;
}, Ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ci(n)) continue;
		let i = e[n];
		if (b(i)) t[n] = Ti(n, i, r);
		else if (i != null) {
			let e = wi(i);
			t[n] = () => e;
		}
	}
}, Di = (e, t) => {
	let n = wi(t);
	e.slots.default = () => n;
}, Oi = (e, t, n) => {
	for (let r in t) (n || !Ci(r)) && (e[r] = t[r]);
}, ki = (e, t, n) => {
	let r = e.slots = mi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Oi(r, t, n), n && fe(r, "_", e, !0)) : Ei(t, r);
	} else t && Di(e, t);
}, Ai = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, s = o;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : Oi(i, t, n) : (a = !t.$stable, Ei(t, i)), s = t;
	} else t && (Di(e, t), s = { default: 1 });
	if (a) for (let e in i) !Ci(e) && s[e] == null && delete i[e];
}, U = Hi;
function ji(e) {
	return Mi(e);
}
function Mi(e, t) {
	let n = he();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = c, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !$i(e, t) && (r = O(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ui:
				y(e, t, n, r);
				break;
			case Wi:
				b(e, t, n, r);
				break;
			case Gi:
				e ?? x(t, n, r, o);
				break;
			case W:
				se(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? T(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
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
		if (d = e.el = l(e.type, s, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, o, Ni(e, s), c, u), _ && Vn(e, null, i, "created"), te(d, e, e.scopeId, c, i), m) {
			for (let e in m) e !== "value" && !ae(e) && a(d, e, null, m[e], s, i);
			"value" in m && a(d, "value", null, m.value, s), (f = m.onVnodeBeforeMount) && da(f, i, e);
		}
		_ && Vn(e, null, i, "beforeMount");
		let v = Fi(o, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && da(f, i, e), v && g.enter(d), _ && Vn(e, null, i, "mounted");
			} finally {}
		}, o);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Vi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ca(e[l]) : sa(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, r, i, s, c) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || o, h = t.props || o, g;
		if (n && Pi(n, !1), (g = h.onVnodeBeforeUpdate) && da(g, n, t, e), f && Vn(t, e, n, "beforeUpdate"), n && Pi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, n, r, Ni(t, i), s) : c || D(e, t, l, null, n, r, Ni(t, i), s, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && da(g, n, t, e), f && Vn(t, e, n, "updated");
		}, r);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !$i(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && Ii(e, t, !0)) : D(e, t, n, f, a, o, s, c, l);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : E(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = ma(e, r, i);
		if (cr(e) && (s.ctx.renderer = Ce), Sa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = Y(Wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, E = (e, t, n) => {
		let r = t.component = e.component;
		if (ci(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ri(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							U(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Pi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && de(n), (d = t.props && t.props.onVnodeBeforeUpdate) && da(d, s, t, c), Pi(e, !0);
				let f = ai(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), O(p), e, i, a), t.el = f.el, u === null && fi(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = sr(t);
				if (Pi(e, !1), l && de(l), !m && (o = c && c.onVnodeBeforeMount) && da(o, d, t), Pi(e, !0), s && Te) {
					let t = () => {
						e.subTree = ai(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ai(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && sr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => jn(u), Pi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, _i(e, t.props, r, n), Ai(e, t.children, n), Xe(), Pn(e), Ze();
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
			let r = t[p] = l ? ca(t[p]) : sa(t[p]);
			v(e[p], r, n, null, i, a, o, c, l);
		}
		u > d ? be(e, i, a, !0, !1, f) : ne(t, n, r, i, a, o, c, l, f);
	}, pe = (e, t, n, r, i, a, o, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], s = t[u] = l ? ca(t[u]) : sa(t[u]);
			if ($i(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], s = t[p] = l ? ca(t[p]) : sa(t[p]);
			if ($i(r, s)) v(r, s, n, null, i, a, o, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, s = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ca(t[u]) : sa(t[u]), n, s, i, a, o, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], i, a, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ca(t[u]) : sa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && $i(r, t[_])) {
					s = _;
					break;
				}
				s === void 0 ? ge(r, i, a, !0) : (C[s - h] = u + 1, s >= S ? S = s : x = !0, v(r, t[s], n, null, i, a, o, c, l), y++);
			}
			let w = x ? Li(C) : s;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, s = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Bi(f) : r;
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
			c.move(e, t, n, Ce);
			return;
		}
		if (c === W) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Gi) {
			S(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.persisted && !s[er] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), U(() => l.enter(s), o));
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				let e = s._isLeaving || !!s[er];
				s._isLeaving && s[er](!0), l.persisted && !e ? u() : a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Xe(), ar(s, null, n, e, !0), Ze()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !sr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && da(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && da(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === W) {
			ve(n, r);
			return;
		}
		if (t === Gi) {
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
		zi(c), zi(l), r && de(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && U(s, t), U(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, O = (e) => {
		if (e.shapeFlag & 6) return O(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, Pn(r), Fn(), !1);
	}, Ce = {
		p: v,
		um: ge,
		m: me,
		r: _e,
		mt: ce,
		mc: ne,
		pc: D,
		pbc: ie,
		n: O,
		o: e
	}, we, Te;
	return t && ([we, Te] = t(Ce)), {
		render: Se,
		hydrate: we,
		createApp: Zr(Se, we)
	};
}
function Ni({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Pi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ii(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (g(r) && g(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ca(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ii(t, a)), a.type === Ui && (a.patchFlag === -1 && (a = i[e] = ca(a)), a.el = t.el), a.type === Wi && !a.el && (a.el = t.el);
	}
}
function Li(e) {
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
function Ri(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
function zi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Bi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Bi(t.subTree) : null;
}
var Vi = (e) => e.__isSuspense;
function Hi(e, t) {
	t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Nn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Ui = /* @__PURE__ */ Symbol.for("v-txt"), Wi = /* @__PURE__ */ Symbol.for("v-cmt"), Gi = /* @__PURE__ */ Symbol.for("v-stc"), Ki = [], G = null;
function K(e = !1) {
	Ki.push(G = e ? null : []);
}
function qi() {
	Ki.pop(), G = Ki[Ki.length - 1] || null;
}
var Ji = 1;
function Yi(e, t = !1) {
	Ji += e, e < 0 && G && t && (G.hasOnce = !0);
}
function Xi(e) {
	return e.dynamicChildren = Ji > 0 ? G || s : null, qi(), Ji > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return Xi(J(e, t, n, r, i, a, !0));
}
function Zi(e, t, n, r, i) {
	return Xi(Y(e, t, n, r, i, !0));
}
function Qi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function $i(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ea = ({ key: e }) => e ?? null, ta = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : x(e) || /* @__PURE__ */ F(e) || b(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ea(t),
		ref: t && ta(t),
		scopeId: Rn,
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
	return s ? (la(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= x(n) ? 8 : 16), Ji > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = na;
function na(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Tr) && (e = Wi), Qi(e)) {
		let r = ia(e, t, !0);
		return n && la(r, n), Ji > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (ja(e) && (e = e.__vccOpts), t) {
		t = ra(t);
		let { class: e, style: n } = t;
		e && !x(e) && (t.class = O(e)), C(n) && (/* @__PURE__ */ Jt(n) && !g(n) && (n = f({}, n)), t.style = ge(n));
	}
	let o = x(e) ? 1 : Vi(e) ? 128 : $n(e) ? 64 : C(e) ? 4 : b(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function ra(e) {
	return e ? /* @__PURE__ */ Jt(e) || hi(e) ? f({}, e) : e : null;
}
function ia(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ua(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ea(l),
		ref: t && t.ref ? n && a ? g(a) ? a.concat(ta(t)) : [a, ta(t)] : ta(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ia(e.ssContent),
		ssFallback: e.ssFallback && ia(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && tr(u, c.clone(u)), u;
}
function X(e = " ", t = 0) {
	return Y(Ui, null, e, t);
}
function aa(e, t) {
	let n = Y(Gi, null, e);
	return n.staticCount = t, n;
}
function oa(e = "", t = !1) {
	return t ? (K(), Zi(Wi, null, e)) : Y(Wi, null, e);
}
function sa(e) {
	return e == null || typeof e == "boolean" ? Y(Wi) : g(e) ? Y(W, null, e.slice()) : Qi(e) ? ca(e) : Y(Ui, null, String(e));
}
function ca(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ia(e);
}
function la(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (g(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), la(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !hi(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else b(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [X(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ua(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = ge([t.style, r.style]);
		else if (u(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(g(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !d(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function da(e, t, n, r = null) {
	bn(e, t, 7, [n, r]);
}
var fa = Yr(), pa = 0;
function ma(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || fa, a = {
		uid: pa++,
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
		scope: new Ae(!0),
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
		propsOptions: xi(r, i),
		emitsOptions: ri(r, i),
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ti.bind(null, a), e.ce && e.ce(a), a;
}
var Z = null, ha = () => Z || z, ga, _a;
{
	let e = he(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ga = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), _a = t("__VUE_SSR_SETTERS__", (e) => xa = e);
}
var va = (e) => {
	let t = Z;
	return ga(e), e.scope.on(), () => {
		e.scope.off(), ga(t);
	};
}, ya = () => {
	Z && Z.scope.off(), ga(null);
};
function ba(e) {
	return e.vnode.shapeFlag & 4;
}
var xa = !1;
function Sa(e, t = !1, n = !1) {
	t && _a(t);
	let { props: r, children: i } = e.vnode, a = ba(e);
	gi(e, r, a, t), ki(e, i, n || t);
	let o = a ? Ca(e, t) : void 0;
	return t && _a(!1), o;
}
function Ca(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mr);
	let { setup: r } = n;
	if (r) {
		Xe();
		let n = e.setupContext = r.length > 1 ? ka(e) : null, i = va(e), a = yn(r, e, 0, [e.props, n]), o = w(a);
		if (Ze(), i(), (o || e.sp) && !sr(e) && nr(e), o) {
			if (a.then(ya, ya), t) return a.then((n) => {
				wa(e, n, t);
			}).catch((t) => {
				xn(t, e, 0);
			});
			e.asyncDep = a;
		} else wa(e, a, t);
	} else Da(e, t);
}
function wa(e, t, n) {
	b(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : C(t) && (e.setupState = nn(t)), Da(e, n);
}
var Ta, Ea;
function Da(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ta && !r.render) {
			let t = r.template || Br(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ta(t, f(f({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || c, Ea && Ea(e);
	}
	{
		let t = va(e);
		Xe();
		try {
			Ir(e);
		} finally {
			Ze(), t();
		}
	}
}
var Oa = { get(e, t) {
	return M(e, "get", ""), e[t];
} };
function ka(e) {
	return {
		attrs: new Proxy(e.attrs, Oa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Aa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ar) return Ar[n](e);
		},
		has(e, t) {
			return t in e || t in Ar;
		}
	}) : e.proxy;
}
function ja(e) {
	return b(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ fn(e, t, xa), Ma = "3.5.38", Na = void 0, Pa = typeof window < "u" && window.trustedTypes;
if (Pa) try {
	Na = /* @__PURE__ */ Pa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Fa = Na ? (e) => Na.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", La = "http://www.w3.org/1998/Math/MathML", Ra = typeof document < "u" ? document : null, za = Ra && /* @__PURE__ */ Ra.createElement("template"), Ba = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ra.createElementNS(Ia, e) : t === "mathml" ? Ra.createElementNS(La, e) : n ? Ra.createElement(e, { is: n }) : Ra.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ra.createTextNode(e),
	createComment: (e) => Ra.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ra.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			za.innerHTML = Fa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = za.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Va = /* @__PURE__ */ Symbol("_vtc");
function Ha(e, t, n) {
	let r = e[Va];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ua = /* @__PURE__ */ Symbol("_vod"), Wa = /* @__PURE__ */ Symbol("_vsh"), Ga = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Ua] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ka(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Ka(e, !0), r.enter(e)) : r.leave(e, () => {
			Ka(e, !1);
		}) : Ka(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Ka(e, t);
	}
};
function Ka(e, t) {
	e.style.display = t ? e[Ua] : "none", e[Wa] = !t;
}
var qa = /* @__PURE__ */ Symbol(""), Ja = /(?:^|;)\s*display\s*:/;
function Ya(e, t, n) {
	let r = e.style, i = x(n), a = !1;
	if (n && !i) {
		if (t) if (x(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Za(r, t, "");
		}
		else for (let e in t) n[e] ?? Za(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Za(r, i, "") : to(e, i, !x(t) && t ? t[i] : void 0, o) || Za(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[qa];
			e && (n += ";" + e), r.cssText = n, a = Ja.test(n);
		}
	} else t && e.removeAttribute("style");
	Ua in e && (e[Ua] = a ? r.display : "", e[Wa] && (r.display = "none"));
}
var Xa = /\s*!important$/;
function Za(e, t, n) {
	if (g(n)) n.forEach((n) => Za(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = eo(e, t);
		Xa.test(n) ? e.setProperty(E(r), n.replace(Xa, ""), "important") : e[r] = n;
	}
}
var Qa = [
	"Webkit",
	"Moz",
	"ms"
], $a = {};
function eo(e, t) {
	let n = $a[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return $a[t] = r;
	r = le(r);
	for (let n = 0; n < Qa.length; n++) {
		let i = Qa[n] + r;
		if (i in e) return $a[t] = i;
	}
	return t;
}
function to(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && x(r) && n === r;
}
var no = "http://www.w3.org/1999/xlink";
function ro(e, t, n, r, i, a = Se(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(no, t.slice(6, t.length)) : e.setAttributeNS(no, t, n) : n == null || a && !Ce(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : S(n) ? String(n) : n);
}
function io(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Fa(n) : n);
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
		r === "boolean" ? n = Ce(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ao(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function oo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var so = /* @__PURE__ */ Symbol("_vei");
function co(e, t, n, r, i = null) {
	let a = e[so] || (e[so] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = uo(t);
		r ? ao(e, n, a[t] = ho(r, i), s) : o && (oo(e, n, o, s), a[t] = void 0);
	}
}
var lo = /(?:Once|Passive|Capture)$/;
function uo(e) {
	let t;
	if (lo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(lo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var fo = 0, po = /* @__PURE__ */ Promise.resolve(), mo = () => fo ||= (po.then(() => fo = 0), Date.now());
function ho(e, t) {
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
				e && bn(e, t, 5, a);
			}
		} else bn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = mo(), n;
}
var go = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _o = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ha(e, r, o) : t === "style" ? Ya(e, n, r) : u(t) ? d(t) || co(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vo(e, t, r, o)) ? (io(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ro(e, t, r, o, a, t !== "value")) : e._isVueCE && (yo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !x(r))) ? io(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ro(e, t, r, o));
};
function vo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && go(t) && b(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return go(t) && x(n) ? !1 : t in e;
}
function yo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var bo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return g(t) ? (e) => de(t, e) : t;
};
function xo(e) {
	e.target.composing = !0;
}
function So(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Co = /* @__PURE__ */ Symbol("_assign");
function wo(e, t, n) {
	return t && (e = e.trim()), n && (e = pe(e)), e;
}
var To = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Co] = bo(i);
		let a = r || i.props && i.props.type === "number";
		ao(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Co](wo(e.value, n, a));
		}), (n || a) && ao(e, "change", () => {
			e.value = wo(e.value, n, a);
		}), t || (ao(e, "compositionstart", xo), ao(e, "compositionend", So), ao(e, "change", So));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Co] = bo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? pe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Eo = {
	deep: !0,
	created(e, t, n) {
		e[Co] = bo(n), ao(e, "change", () => {
			let t = e._modelValue, n = Ao(e), r = e.checked, i = e[Co];
			if (g(t)) {
				let e = Ee(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (v(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(jo(e, r));
		});
	},
	mounted: Do,
	beforeUpdate(e, t, n) {
		e[Co] = bo(n), Do(e, t, n);
	}
};
function Do(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (g(t)) i = Ee(t, r.props.value) > -1;
	else if (v(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Te(t, jo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Oo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = v(t);
		ao(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? pe(Ao(e)) : Ao(e));
			e[Co](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, kn(() => {
				e._assigning = !1;
			});
		}), e[Co] = bo(r);
	},
	mounted(e, { value: t }) {
		ko(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Co] = bo(n);
	},
	updated(e, { value: t }) {
		e._assigning || ko(e, t);
	}
};
function ko(e, t) {
	let n = e.multiple, r = g(t);
	if (!(n && !r && !v(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Ao(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ee(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Te(Ao(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Ao(e) {
	return "_value" in e ? e._value : e.value;
}
function jo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Mo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], No = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Mo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Po = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = No[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Fo = /* @__PURE__ */ f({ patchProp: _o }, Ba), Io;
function Lo() {
	return Io ||= ji(Fo);
}
var Ro = ((...e) => {
	let t = Lo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Bo(e);
		if (!r) return;
		let i = t._component;
		!b(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, zo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function zo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Bo(e) {
	return x(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Vo = typeof window < "u", Ho, Uo = (e) => Ho = e, Wo = Symbol();
function Go(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ko;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ko ||= {});
var qo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Jo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Yo(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		es(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Xo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Zo(e) {
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
var Qo = typeof navigator == "object" ? navigator : { userAgent: "" }, $o = /Macintosh/.test(Qo.userAgent) && /AppleWebKit/.test(Qo.userAgent) && !/Safari/.test(Qo.userAgent), es = Vo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !$o ? ts : "msSaveOrOpenBlob" in Qo ? ns : rs : () => {};
function ts(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Zo(r) : Xo(r.href) ? Yo(e, t, n) : (r.target = "_blank", Zo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Zo(r);
	}, 0));
}
function ns(e, t = "download", n) {
	if (typeof e == "string") if (Xo(e)) Yo(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Zo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Jo(e, n), t);
}
function rs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Yo(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(qo.HTMLElement)) || "safari" in qo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || $o) && typeof FileReader < "u") {
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
var { assign: is } = Object;
function as() {
	let e = je(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = Yt({
		install(e) {
			Uo(i), i._a = e, e.provide(Wo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var os = () => {};
function ss(e, t, n, r = os) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Me() && Ne(i), i;
}
function cs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var ls = (e) => e(), us = Symbol(), ds = Symbol();
function fs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Go(i) && Go(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ Kt(r) ? e[n] = fs(i, r) : e[n] = r;
	}
	return e;
}
var ps = Symbol();
function ms(e) {
	return !Go(e) || !Object.prototype.hasOwnProperty.call(e, ps);
}
var { assign: hs } = Object;
function gs(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function _s(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), hs(/* @__PURE__ */ on(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(Q(() => {
			Uo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = vs(e, l, t, n, r, !0), c;
}
function vs(e, t, n = {}, r, i, a) {
	let o, s = hs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Ko.patchFunction,
			storeId: e,
			events: void 0
		}) : (fs(r.state.value[e], t), n = {
			type: Ko.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		kn().then(() => {
			m === i && (l = !0);
		}), u = !0, cs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			hs(e, t);
		});
	} : os;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (us in t) return t[ds] = n, t;
		let i = function() {
			Uo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			cs(f, {
				args: n,
				name: i[ds],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw cs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (cs(a, e), e)).catch((e) => (cs(o, e), Promise.reject(e))) : (cs(a, l), l);
		};
		return i[us] = !0, i[ds] = n, i;
	}, y = /* @__PURE__ */ Ht({
		_p: r,
		$id: e,
		$onAction: ss.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = ss(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Ko.direct,
					events: void 0
				}, r);
			}, hs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || ls)(() => r._e.run(() => (o = je()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ F(n) && !gs(n) || /* @__PURE__ */ Kt(n) ? a || (p && ms(n) && (/* @__PURE__ */ F(n) ? n.value = p[t] : fs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return hs(y, b), hs(/* @__PURE__ */ P(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				hs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		hs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function ys(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(Wo, null) : null, n && Uo(n), n = Ho, n._s.has(e) || (i ? vs(e, t, r, n) : _s(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function bs(e) {
	let t = /* @__PURE__ */ P(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ F(i) || /* @__PURE__ */ Kt(i)) && (n[r] = /* @__PURE__ */ ln(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/fear-terror/payload.ts
function xs(e) {
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
function Ss(e) {
	return e === "fear" ? "Fear" : "Terror";
}
function Cs(e, t) {
	let n = t.source ? ` - ${t.source}` : "";
	return `${e} ${t.rating}${n}`;
}
function ws(e, t) {
	let n = Ss(t.type), r = t.source ? `, ${t.source}` : "";
	return `<h2>${e}</h2>@${n}[${t.rating}${r}]`;
}
//#endregion
//#region src/state/apps/fear-console/store.ts
var Ts = ys("fear-console", () => {
	let e = /* @__PURE__ */ I("fear"), t = /* @__PURE__ */ I(1), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I([]), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o, s = Q(() => i.value !== void 0), c = Q(() => Ss(e.value)), l = Q(() => {
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
}), Es = { class: "tw:flex tw:min-h-full tw:flex-col tw:gap-4 tw:bg-base-200 tw:text-base-content" }, Ds = { class: "dui-navbar tw:items-start tw:border-b tw:border-base-300 tw:bg-base-100 tw:px-5 tw:py-4" }, Os = { class: "dui-navbar-end tw:w-auto tw:shrink-0" }, ks = { class: "dui-badge dui-badge-outline" }, As = {
	key: 0,
	class: "dui-alert dui-alert-error tw:mx-4",
	role: "alert"
}, js = {
	class: "tw:grid tw:min-w-0 tw:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] tw:gap-3 tw:px-4",
	"aria-label": "Fear and Terror setup"
}, Ms = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, Ns = {
	class: "dui-join tw:w-full",
	role: "group",
	"aria-label": "Effect type"
}, Ps = ["aria-pressed"], Fs = ["aria-pressed"], Is = { class: "dui-fieldset tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, Ls = { class: "dui-fieldset tw:col-span-full tw:min-w-0 tw:w-full tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:p-4" }, Rs = {
	class: "dui-card dui-card-border tw:mx-4 tw:min-h-40 tw:flex-1 tw:bg-base-100",
	"aria-labelledby": "fear-terror-recipients"
}, zs = { class: "dui-card-body tw:gap-3 tw:p-4" }, Bs = { class: "tw:flex tw:items-center tw:justify-between tw:gap-3" }, Vs = { class: "tw:flex tw:items-center tw:gap-2" }, Hs = { class: "dui-badge dui-badge-sm" }, Us = ["disabled"], Ws = {
	key: 0,
	class: "dui-list tw:gap-1",
	"aria-live": "polite"
}, Gs = { class: "tw:min-w-0 tw:font-semibold" }, Ks = { class: "dui-badge dui-badge-ghost tw:capitalize" }, qs = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Js = {
	class: "tw:sticky tw:bottom-0 tw:z-10 tw:grid tw:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] tw:gap-2 tw:border-t tw:border-base-300 tw:bg-base-100 tw:p-4",
	"aria-label": "Fear Console actions"
}, Ys = ["disabled"], Xs = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Zs = {
	key: 1,
	class: "fa-solid fa-message",
	"aria-hidden": "true"
}, Qs = ["disabled"], $s = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, ec = {
	key: 1,
	class: "fa-solid fa-link",
	"aria-hidden": "true"
}, tc = ["disabled"], nc = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, rc = {
	key: 1,
	class: "fa-solid fa-bolt",
	"aria-hidden": "true"
}, ic = /* @__PURE__ */ V({
	__name: "FearConsoleApp",
	props: {
		initialPayload: {},
		actions: {}
	},
	setup(e) {
		let t = e, n = Ts();
		t.initialPayload ? n.initialize({
			actions: t.actions,
			initialPayload: t.initialPayload
		}) : n.initialize({ actions: t.actions });
		let { activeAction: r, actors: i, errorMessage: a, isWorking: o, rating: s, selectedType: c, selectedTypeLabel: l, source: u } = bs(n);
		return (e, t) => (K(), q("main", Es, [
			J("header", Ds, [t[8] ||= aa("<div class=\"dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start\"><div><div class=\"dui-breadcrumbs tw:mb-1 tw:text-xs tw:text-secondary\"><ul><li>WFRP4e</li><li>Drowsy’s Toolkit</li></ul></div><h1 class=\"tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight\"><i class=\"fa-solid fa-skull tw:mr-1 tw:text-secondary\" aria-hidden=\"true\"></i> Fear Console </h1><p class=\"tw:mt-1 tw:max-w-xl tw:text-sm tw:text-base-content/70\"> Post a card for players to answer, or apply the WFRP4e effect directly to targeted tokens. </p></div></div>", 1), J("div", Os, [J("span", ks, k(L(l)) + " " + k(L(s)), 1)])]),
			L(a) ? (K(), q("div", As, [t[9] ||= J("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), J("span", null, k(L(a)), 1)])) : oa("", !0),
			J("section", js, [
				J("fieldset", Ms, [
					t[10] ||= J("legend", { class: "dui-fieldset-legend" }, "Effect", -1),
					J("div", Ns, [J("button", {
						class: O(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": L(c) === "fear",
							"dui-btn-ghost": L(c) !== "fear"
						}]),
						type: "button",
						"aria-pressed": L(c) === "fear",
						onClick: t[0] ||= (e) => c.value = "fear"
					}, " Fear ", 10, Ps), J("button", {
						class: O(["dui-btn dui-join-item tw:flex-1", {
							"dui-btn-primary": L(c) === "terror",
							"dui-btn-ghost": L(c) !== "terror"
						}]),
						type: "button",
						"aria-pressed": L(c) === "terror",
						onClick: t[1] ||= (e) => c.value = "terror"
					}, " Terror ", 10, Fs)]),
					t[11] ||= J("p", { class: "dui-label" }, "Choose the WFRP4e psychology test to prompt or apply.", -1)
				]),
				J("fieldset", Is, [
					t[12] ||= J("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1),
					t[13] ||= J("label", {
						class: "dui-label",
						for: "fear-terror-rating"
					}, "Rating", -1),
					B(J("input", {
						id: "fear-terror-rating",
						"onUpdate:modelValue": t[2] ||= (e) => /* @__PURE__ */ F(s) ? s.value = e : null,
						class: "dui-input dui-validator tw:w-full tw:tabular-nums",
						min: "0",
						required: "",
						step: "1",
						type: "number"
					}, null, 512), [[
						To,
						L(s),
						void 0,
						{ number: !0 }
					]]),
					t[14] ||= J("p", { class: "dui-validator-hint" }, "Enter a whole number of zero or greater.", -1)
				]),
				J("fieldset", Ls, [
					t[15] ||= aa("<legend class=\"dui-fieldset-legend\">Source</legend><div class=\"tw:flex tw:min-w-0 tw:max-w-full tw:items-center tw:gap-2\"><label class=\"dui-label\" for=\"fear-terror-source\">Source name</label><span class=\"dui-tooltip\" data-tip=\"WFRP4e matches Fear sources by name.\"><span aria-label=\"Fear source naming help\" class=\"tw:inline-flex tw:text-secondary\" tabindex=\"0\"><i class=\"fa-solid fa-circle-question\" aria-hidden=\"true\"></i></span></span></div>", 2),
					B(J("input", {
						id: "fear-terror-source",
						"onUpdate:modelValue": t[3] ||= (e) => /* @__PURE__ */ F(u) ? u.value = e : null,
						autocomplete: "off",
						class: "dui-input tw:min-w-0 tw:max-w-full tw:w-full",
						placeholder: "Actor, creature group, ability, or scene hazard",
						type: "text"
					}, null, 512), [[To, L(u)]]),
					t[16] ||= J("p", { class: "dui-label tw:min-w-0 tw:max-w-full tw:whitespace-normal" }, " Use a shared name such as “Ghouls” for one pack, or a unique name for one threat. ", -1)
				])
			]),
			J("section", Rs, [J("div", zs, [J("div", Bs, [J("div", Vs, [t[17] ||= J("h2", {
				id: "fear-terror-recipients",
				class: "dui-card-title tw:text-base"
			}, "Recipients", -1), J("span", Hs, k(L(i).length), 1)]), J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: L(o),
				type: "button",
				onClick: t[4] ||= (...e) => L(n).refreshActors && L(n).refreshActors(...e)
			}, [...t[18] ||= [J("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), X(" Refresh ", -1)]], 8, Us)]), L(i).length ? (K(), q("ul", Ws, [(K(!0), q(W, null, Er(L(i), (e) => (K(), q("li", {
				key: e.id,
				class: "dui-list-row tw:items-center tw:bg-base-200"
			}, [
				t[19] ||= J("span", {
					class: "dui-status dui-status-primary",
					"aria-hidden": "true"
				}, null, -1),
				J("span", Gs, k(e.name), 1),
				J("span", Ks, k(e.source), 1)
			]))), 128))])) : (K(), q("div", qs, [t[20] ||= J("i", {
				class: "fa-solid fa-users",
				"aria-hidden": "true"
			}, null, -1), J("span", null, " Target one or more tokens to apply " + k(L(l)) + " directly. You can post a chat card without targets. ", 1)]))])]),
			J("footer", Js, [
				J("button", {
					class: "dui-btn dui-btn-primary",
					disabled: L(o),
					type: "button",
					onClick: t[5] ||= (e) => L(n).runAction("post-card")
				}, [L(r) === "post-card" ? (K(), q("span", Xs)) : (K(), q("i", Zs)), t[21] ||= X(" Post Card ", -1)], 8, Ys),
				J("button", {
					class: "dui-btn",
					disabled: L(o),
					type: "button",
					onClick: t[6] ||= (e) => L(n).runAction("post-link")
				}, [L(r) === "post-link" ? (K(), q("span", $s)) : (K(), q("i", ec)), t[22] ||= X(" Post Link ", -1)], 8, Qs),
				J("button", {
					class: "dui-btn",
					disabled: L(o),
					type: "button",
					onClick: t[7] ||= (e) => L(n).runAction("apply")
				}, [L(r) === "apply" ? (K(), q("span", nc)) : (K(), q("i", rc)), X(" Apply " + k(L(l)), 1)], 8, tc)
			])
		]));
	}
});
//#endregion
//#region src/functions/fear-terror/suggestion.ts
function ac({ fearRating: e, source: t, terrorRating: n }) {
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
function oc() {
	if (!(typeof canvas > "u" || !canvas)) {
		for (let e of canvas.tokens?.controlled ?? []) if (e.actor) return sc(e.actor);
	}
}
function sc(e) {
	let t = cc(e, "CHAT.Terror");
	return ac({
		fearRating: t === void 0 ? cc(e, "CHAT.Fear") : void 0,
		source: e.name,
		terrorRating: t
	});
}
function cc(e, t) {
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
function lc() {
	return dc().map(({ choice: e }) => e);
}
function uc() {
	return dc().map(({ actor: e }) => e);
}
function dc() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) fc(e, t.actor);
	return Array.from(e.values());
}
function fc(e, t) {
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
async function pc(e) {
	let t = uc();
	if (t.length === 0) {
		ui.notifications.warn("Target one or more tokens before applying Fear or Terror.");
		return;
	}
	let n = xs(e);
	await Promise.all(t.map((e) => gc(e, n)));
}
async function mc(e) {
	let t = xs(e), n = _c(t), r = Cs(n, t), i = await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: r });
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
async function hc(e) {
	let t = xs(e), n = ws(_c(t), t), r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s Toolkit" });
	await ChatMessage.create(r);
}
async function gc(e, t) {
	if (t.type === "fear") {
		await e.applyFear(t.rating, t.source);
		return;
	}
	await e.applyTerror(t.rating, t.source);
}
function _c(e) {
	let t = e.type === "fear" ? "CHAT.Fear" : "CHAT.Terror";
	return game.i18n.localize(t);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var vc = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-enhanced-fear-terror-root", "tw:[&_*]:box-border", "tw:box-border", "tw:block", "tw:h-full", "tw:max-h-full", "tw:max-w-full", "tw:min-h-0", "tw:overflow-auto", "tw:w-full"), n.dataset.theme = "wfrp4e-enhanced-fear-terror", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-enhanced-fear-terror-app", "tw:box-border", "tw:min-h-0", "tw:overflow-hidden", "tw:p-0", "tw:relative"), t.replaceChildren(e), this.#e = Ro(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(as()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, yc = class extends vc {
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
		return ic;
	}
	getVueProps() {
		return {
			actions: {
				applyToSelectedActors: pc,
				getActorChoices: lc,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the Fear Console.`, e), ui.notifications.error("The Fear Console completed the action but could not close its window.");
					});
				},
				postPrompt: mc,
				postSummaryPrompt: hc
			},
			initialPayload: this.#e.initialPayload ?? oc()
		};
	}
};
//#endregion
//#region src/module/apps/fear-console/open.ts
async function bc(e = {}) {
	let t = new yc(e);
	return await t.render(!0), t;
}
function xc(e = {}) {
	bc(e).catch((e) => {
		console.error(`${t} | Failed to open the Fear Console.`, e), ui.notifications.error("Drowsy’s Toolkit could not open the Fear Console. See the browser console for details.");
	});
}
//#endregion
//#region src/functions/xp-curve/calculate.ts
var Sc = .01, Cc = 2 ** 53 - 1;
function wc(e) {
	return {
		companionMultiplier: Ac(e.companionMultiplier, 0, 1),
		curveExponent: Ac(e.curveExponent, .1, 5),
		gapForMaximumAward: Math.max(1, jc(e.gapForMaximumAward)),
		maximumAward: Math.max(0, jc(e.maximumAward)),
		scaleExponent: Ac(e.scaleExponent, 0, 2),
		scalePivot: Math.max(1, jc(e.scalePivot))
	};
}
function Tc(e, t) {
	let n = e.filter((e) => e.selected), r = wc(t), i = Math.max(0, ...n.map((e) => e.totalXp)), a = n.map((e) => {
		let t = jc(e.totalXp), n = Math.max(0, i - t), a = e.category === "companion" ? r.companionMultiplier : 1, o = Ec(n, r), s = Dc(t, r), c = Math.max(0, Math.round(o * s * a)), l = Math.min(r.maximumAward, c);
		return {
			actorId: e.id,
			actorName: e.name,
			afterXp: t + l,
			award: l,
			beforeXp: t,
			catchUpValue: o,
			category: e.category,
			decayMultiplier: s,
			gap: n,
			modifiedAward: c,
			recipientMultiplier: a
		};
	});
	return {
		awards: a,
		highestXp: i,
		totalAward: a.reduce((e, t) => e + t.award, 0)
	};
}
function Ec(e, t) {
	let n = wc(t), r = Math.max(0, Number.isFinite(e) ? e : 0) / n.gapForMaximumAward, i = n.maximumAward * r ** n.curveExponent;
	return Number.isFinite(i) ? Math.min(i, Cc) : Cc;
}
function Dc(e, t) {
	let n = wc(t), r = Math.max(0, Number.isFinite(e) ? e : 0);
	return Math.min(1, n.scalePivot / Math.max(r, n.scalePivot)) ** n.scaleExponent;
}
function Oc(e, t = e.gapForMaximumAward * 1.4, n = 24) {
	let r = wc(e), i = Math.max(2, jc(n)), a = Math.max(r.gapForMaximumAward * 1.4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			award: Ec(n, r),
			gap: n
		};
	});
}
function kc(e, t = e.scalePivot * 4, n = 32) {
	let r = wc(e), i = Math.max(2, jc(n)), a = Math.max(1e3, r.scalePivot * 4, Number.isFinite(t) ? t : 0);
	return Array.from({ length: i + 1 }, (e, t) => {
		let n = a * t / i;
		return {
			multiplier: Dc(n, r),
			recipientXp: n
		};
	});
}
function Ac(e, t, n) {
	let r = Number(e);
	return Math.min(n, Math.max(t, Number.isFinite(r) ? r : Sc));
}
function jc(e) {
	let t = Number(e);
	return Number.isFinite(t) ? Math.round(t) : 0;
}
//#endregion
//#region src/functions/xp-curve/reason.ts
function Mc(e, t) {
	return e.replaceAll("%session%", t.session).replaceAll("%date%", t.date).replace(/\s+\(\s*\)\s*/g, " ").replace(/\s{2,}/g, " ").trim();
}
function Nc(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
//#region src/types/xp-curve/XpCurve.ts
var Pc = {
	companionMultiplier: .5,
	curveExponent: .75,
	gapForMaximumAward: 1e3,
	maximumAward: 500,
	scaleExponent: .5,
	scalePivot: 5e3
}, Fc = ys("xp-curve-console", () => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I({ ...Pc }), n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I("party"), i = /* @__PURE__ */ I(!0), a = /* @__PURE__ */ I("default"), o = /* @__PURE__ */ I(), s = /* @__PURE__ */ I(), c = /* @__PURE__ */ I(!1), l = /* @__PURE__ */ I(!1), u, d = /* @__PURE__ */ new Set(), f, p = Q(() => e.value.filter((e) => e.selected)), m = Q(() => Tc(e.value, t.value)), h = Q(() => m.value.awards.filter((e) => e.award > 0).length), g = Q(() => p.value.length >= 2 && m.value.totalAward > 0 && !l.value), _ = Q(() => {
		let e = re();
		return Mc(n.value, {
			...e,
			session: i.value ? e.session : ""
		});
	}), v = Q(() => Math.max(0, ...m.value.awards.map((e) => e.gap))), y = Q(() => Oc(t.value, Math.max(v.value * 1.1, 1))), b = Q(() => kc(t.value, Math.max(m.value.highestXp * 1.1, 1)));
	function x(c, l) {
		u = l, f = c.reasonContext, e.value = c.actors.map((e) => ({ ...e })), t.value = { ...c.parameters }, n.value = c.defaultReason, r.value = c.defaultSelection, i.value = c.useGmToolkitDefaults, a.value = c.selectionSource, d = new Set(c.actors.filter((e) => e.selected).map((e) => e.id)), o.value = void 0, s.value = void 0;
	}
	function S(t, n) {
		let r = e.value.find((e) => e.id === t);
		r && (r.selected = n);
	}
	function C(t) {
		for (let n of e.value) n.selected = t;
	}
	function w() {
		for (let t of e.value) t.selected = d.has(t.id);
	}
	async function ee() {
		if (!(!g.value || l.value)) {
			l.value = !0, o.value = void 0, s.value = void 0;
			try {
				let e = {
					actorIds: p.value.map((e) => e.id),
					defaultReason: n.value,
					defaultSelection: r.value,
					parameters: t.value,
					useGmToolkitDefaults: i.value
				}, a = await ne().applyAwards(e);
				ne().onActionComplete(a);
			} catch (e) {
				console.error("WFRP4e | Drowsy’s Toolkit | XP curve award failed.", e), o.value = e instanceof Error ? e.message : "The XP awards could not be completed.";
			} finally {
				l.value = !1;
			}
		}
	}
	async function te() {
		if (!(c.value || l.value)) {
			c.value = !0, o.value = void 0, s.value = void 0;
			try {
				t.value = wc(t.value);
				let e = {
					defaultReason: n.value,
					defaultSelection: r.value,
					parameters: t.value,
					useGmToolkitDefaults: i.value
				};
				await ne().saveSettings(e), s.value = "Curve and recipient defaults saved.";
			} catch (e) {
				console.error("WFRP4e | Drowsy’s Toolkit | XP curve settings save failed.", e), o.value = e instanceof Error ? e.message : "The XP Curve Console defaults could not be saved.";
			} finally {
				c.value = !1;
			}
		}
	}
	function ne() {
		if (!u) throw Error("The XP Curve Console has not been initialized.");
		return u;
	}
	function re() {
		if (!f) throw Error("The XP Curve Console has not been initialized.");
		return f;
	}
	return {
		actors: e,
		applyAwards: ee,
		canApply: g,
		curveSamples: y,
		decaySamples: b,
		defaultReason: n,
		defaultSelection: r,
		errorMessage: o,
		initialize: x,
		isSavingSettings: c,
		isWorking: l,
		parameters: t,
		plan: m,
		positiveAwardCount: h,
		resetSelection: w,
		resolvedReason: _,
		saveDefaults: te,
		selectedActors: p,
		selectionSource: a,
		settingsStatusMessage: s,
		setActorSelected: S,
		setAllActorsSelected: C,
		useGmToolkitDefaults: i
	};
}), Ic = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "recipients-title"
}, Lc = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, Rc = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, zc = { class: "tw:flex tw:items-center tw:gap-2" }, Bc = { class: "dui-badge dui-badge-sm" }, Vc = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Hc = ["disabled"], Uc = ["disabled"], Wc = ["disabled"], Gc = {
	key: 0,
	class: "tw:max-w-full tw:min-w-0 tw:overflow-x-auto tw:rounded-box tw:border tw:border-base-300"
}, Kc = { class: "dui-table dui-table-sm tw:min-w-[52rem]" }, qc = { class: "tw:cursor-pointer" }, Jc = [
	"checked",
	"disabled",
	"onChange"
], Yc = { class: "tw:sr-only" }, Xc = {
	class: "tw:min-w-44",
	scope: "row"
}, Zc = { class: "tw:block tw:font-semibold" }, Qc = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-xs"
}, $c = { class: "tw:text-right tw:tabular-nums" }, el = { class: "tw:text-right tw:tabular-nums" }, tl = { class: "tw:text-right tw:tabular-nums" }, nl = { class: "tw:text-right tw:tabular-nums" }, rl = { class: "tw:text-right tw:font-bold tw:tabular-nums" }, il = { class: "tw:text-right tw:tabular-nums" }, al = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, ol = /* @__PURE__ */ V({
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
		return (t, n) => (K(), q("section", Ic, [J("div", Lc, [J("div", Rc, [J("div", null, [J("div", zc, [n[3] ||= J("h2", {
			id: "recipients-title",
			class: "dui-card-title tw:text-base"
		}, "Recipients", -1), J("span", Bc, k(e.plan.awards.length) + " selected", 1)]), n[4] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " The XP leader sets the gap only. Decay is calculated from each recipient’s own total. ", -1)]), J("div", Vc, [
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[0] ||= (e) => r("select-all", !0)
			}, " All ", 8, Hc),
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[1] ||= (e) => r("select-all", !1)
			}, " None ", 8, Uc),
			J("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: n[2] ||= (e) => r("reset")
			}, " Reset ", 8, Wc)
		])]), e.actors.length ? (K(), q("div", Gc, [J("table", Kc, [n[5] ||= J("thead", null, [J("tr", null, [
			J("th", { scope: "col" }, "Use"),
			J("th", { scope: "col" }, "Actor"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Total XP"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Leader gap"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Initial XP"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Decay"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "Final award"),
			J("th", {
				class: "tw:text-right",
				scope: "col"
			}, "New total")
		])], -1), J("tbody", null, [(K(!0), q(W, null, Er(e.actors, (t) => (K(), q("tr", {
			key: t.id,
			class: O({ "tw:bg-base-200": t.selected })
		}, [
			J("td", null, [J("label", qc, [J("input", {
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox",
				checked: t.selected,
				disabled: e.disabled,
				onChange: (e) => a(t.id, e)
			}, null, 40, Jc), J("span", Yc, "Include " + k(t.name) + " in the XP curve", 1)])]),
			J("th", Xc, [J("span", Zc, k(t.name), 1), t.category === "companion" ? (K(), q("span", Qc, " Companion rate ")) : oa("", !0)]),
			J("td", $c, k(t.totalXp), 1),
			J("td", el, k(i(t.id)?.gap ?? "—"), 1),
			J("td", tl, k(i(t.id) ? Math.round(i(t.id)?.catchUpValue ?? 0) : "—"), 1),
			J("td", nl, k(i(t.id) ? `${Math.round((i(t.id)?.decayMultiplier ?? 0) * 100)}%` : "—"), 1),
			J("td", rl, k(i(t.id) ? `+${i(t.id)?.award}` : "—"), 1),
			J("td", il, k(i(t.id)?.afterXp ?? "—"), 1)
		], 2))), 128))])])])) : (K(), q("div", al, [...n[6] ||= [J("i", {
			class: "fa-solid fa-user-slash",
			"aria-hidden": "true"
		}, null, -1), J("span", null, "No WFRP4e character actors are available in this world.", -1)]]))])]));
	}
}), sl = {
	key: 0,
	class: "dui-alert dui-alert-warning tw:mb-3",
	role: "status"
}, cl = { class: "tw:grid tw:min-w-0 tw:gap-3 tw:min-[68rem]:grid-cols-[1.25fr_1fr]" }, ll = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "award-message-title"
}, ul = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, dl = { class: "tw:min-w-0 tw:rounded-box tw:bg-base-200 tw:p-3 tw:text-sm" }, fl = { class: "tw:m-0 tw:break-words tw:font-semibold" }, pl = /* @__PURE__ */ V({
	__name: "XpAwardWorkspace",
	props: /*@__PURE__*/ Pr({
		actors: {},
		disabled: { type: Boolean },
		plan: {},
		resolvedReason: {},
		selectionSource: {}
	}, {
		defaultReason: { required: !0 },
		defaultReasonModifiers: {}
	}),
	emits: /*@__PURE__*/ Pr([
		"reset",
		"select-all",
		"update:selected"
	], ["update:defaultReason"]),
	setup(e, { emit: t }) {
		let n = $r(e, "defaultReason"), r = t;
		function i(e, t) {
			r("update:selected", e, t);
		}
		return (t, a) => (K(), q(W, null, [e.selectionSource === "targets" && e.plan.awards.length === 0 ? (K(), q("div", sl, [...a[3] ||= [J("i", {
			class: "fa-solid fa-bullseye",
			"aria-hidden": "true"
		}, null, -1), J("span", { class: "tw:min-w-0 tw:break-words" }, " The targeted tokens do not contain eligible WFRP4e character actors. ", -1)]])) : oa("", !0), J("div", cl, [Y(ol, {
			actors: e.actors,
			disabled: e.disabled,
			plan: e.plan,
			onReset: a[0] ||= (e) => r("reset"),
			onSelectAll: a[1] ||= (e) => r("select-all", e),
			"onUpdate:selected": i
		}, null, 8, [
			"actors",
			"disabled",
			"plan"
		]), J("section", ll, [J("div", ul, [
			a[5] ||= J("div", null, [J("h2", {
				id: "award-message-title",
				class: "dui-card-title tw:text-base"
			}, "Award message"), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " This reason is written to each recipient’s WFRP4e experience log. ")], -1),
			a[6] ||= J("label", {
				class: "dui-label tw:whitespace-normal",
				for: "xp-award-reason"
			}, " Experience log reason ", -1),
			B(J("input", {
				id: "xp-award-reason",
				"onUpdate:modelValue": a[2] ||= (e) => n.value = e,
				class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full",
				type: "text"
			}, null, 512), [[To, n.value]]),
			a[7] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, [
				X(" Supports GM Toolkit’s "),
				J("code", null, "%session%"),
				X(" and "),
				J("code", null, "%date%"),
				X(" tokens. ")
			], -1),
			J("div", dl, [a[4] ||= J("span", { class: "tw:text-xs tw:text-base-content/60" }, "This award will record", -1), J("p", fl, k(e.resolvedReason || "No reason"), 1)]),
			a[8] ||= J("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [J("i", {
				class: "fa-solid fa-circle-info",
				"aria-hidden": "true"
			}), J("span", { class: "tw:min-w-0 tw:break-words" }, " Change curves and recipient defaults in the Curves & defaults tab. All calculated awards update live. ")], -1)
		])])])], 64));
	}
});
function ml(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function hl(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: (t.clientX - n.left) / n.width * 560,
		y: (t.clientY - n.top) / n.height * 270
	};
}
function gl(e, t) {
	return Math.round(e / t) * t;
}
//#endregion
//#region src/view/apps/xp-curve-console/curve/graph/GraphCanvas.vue?vue&type=script&setup=true&lang.ts
var _l = ["viewBox", "aria-labelledby"], vl = ["id"], yl = ["id"], bl = [
	"x1",
	"x2",
	"y1",
	"y2"
], xl = [
	"x1",
	"x2",
	"y1",
	"y2"
], Sl = [
	"x1",
	"x2",
	"y1",
	"y2"
], Cl = ["points"], wl = ["cx", "cy"], Tl = ["x", "y"], El = ["x", "y"], Dl = ["x", "y"], Ol = ["x", "y"], kl = ["x", "y"], Al = ["x", "y"], jl = ["transform", "y"], Ml = /* @__PURE__ */ V({
	__name: "GraphCanvas",
	props: {
		description: {},
		descriptionId: {},
		markers: {},
		maximumXLabel: {},
		minimumYLabel: {},
		points: {},
		title: {},
		titleId: {},
		verticalGuideX: {},
		xAxisLabel: {},
		yAxisLabel: {},
		maximumYLabel: {}
	},
	emits: [
		"pointercancel",
		"pointermove",
		"pointerup"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (K(), q("svg", {
			class: "tw:block tw:h-auto tw:w-full tw:max-w-full tw:touch-none tw:[user-select:none]",
			viewBox: `0 0 ${L(560)} ${L(270)}`,
			role: "img",
			"aria-labelledby": `${e.titleId} ${e.descriptionId}`,
			onPointercancel: r[0] ||= (e) => n("pointercancel", e),
			onPointermove: r[1] ||= (e) => n("pointermove", e),
			onPointerup: r[2] ||= (e) => n("pointerup", e)
		}, [
			J("title", { id: e.titleId }, k(e.title), 9, vl),
			J("desc", { id: e.descriptionId }, k(e.description), 9, yl),
			J("line", {
				class: "tw:text-base-content/25",
				x1: L(68),
				x2: L(68),
				y1: L(24),
				y2: L(24) + L(192),
				stroke: "currentColor"
			}, null, 8, bl),
			J("line", {
				class: "tw:text-base-content/25",
				x1: L(68),
				x2: L(68) + L(472),
				y1: L(24) + L(192),
				y2: L(24) + L(192),
				stroke: "currentColor"
			}, null, 8, xl),
			J("line", {
				class: "tw:text-base-content/25",
				x1: e.verticalGuideX,
				x2: e.verticalGuideX,
				y1: L(24),
				y2: L(24) + L(192),
				stroke: "currentColor",
				"stroke-dasharray": "4 5"
			}, null, 8, Sl),
			Dr(t.$slots, "guides"),
			J("polyline", {
				class: "tw:text-secondary",
				fill: "none",
				points: e.points,
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "3"
			}, null, 8, Cl),
			(K(!0), q(W, null, Er(e.markers, (e) => (K(), q("g", {
				key: e.actorId,
				class: "tw:text-base-content",
				"aria-hidden": "true"
			}, [J("circle", {
				cx: e.x,
				cy: e.y,
				fill: "currentColor",
				r: "9"
			}, [J("title", null, k(e.label), 1)], 8, wl), J("text", {
				class: "tw:text-base-100",
				x: e.x,
				y: e.y + 3,
				fill: "currentColor",
				"font-size": "9",
				"font-weight": "700",
				"text-anchor": "middle"
			}, k(e.index), 9, Tl)]))), 128)),
			Dr(t.$slots, "handles"),
			J("text", {
				class: "tw:text-base-content/65",
				x: L(68),
				y: L(24) + L(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "middle"
			}, " 0 ", 8, El),
			J("text", {
				class: "tw:text-base-content/65",
				x: L(68) + L(472),
				y: L(24) + L(192) + 18,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.maximumXLabel), 9, Dl),
			J("text", {
				class: "tw:text-base-content/75",
				x: L(68) + L(472) / 2,
				y: L(270) - 8,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, k(e.xAxisLabel), 9, Ol),
			e.maximumYLabel ? (K(), q("text", {
				key: 0,
				class: "tw:text-base-content/65",
				x: L(68) - 10,
				y: L(24) + 4,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.maximumYLabel), 9, kl)) : oa("", !0),
			J("text", {
				class: "tw:text-base-content/65",
				x: L(68) - 10,
				y: L(24) + L(192) + 3,
				fill: "currentColor",
				"font-size": "11",
				"text-anchor": "end"
			}, k(e.minimumYLabel), 9, Al),
			J("text", {
				class: "tw:text-base-content/75",
				transform: `rotate(-90 16 ${L(24) + L(192) / 2})`,
				x: "16",
				y: L(24) + L(192) / 2,
				fill: "currentColor",
				"font-size": "12",
				"font-weight": "600",
				"text-anchor": "middle"
			}, k(e.yAxisLabel), 9, jl),
			Dr(t.$slots, "labels")
		], 40, _l));
	}
}), Nl = [
	"role",
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], Pl = ["x", "y"], Fl = ["x", "y"], Il = /* @__PURE__ */ V({
	__name: "DiamondHandle",
	props: {
		ariaLabel: {},
		x: {},
		y: {},
		ariaValueMax: {},
		ariaValueMin: {},
		ariaValueNow: {},
		ariaValueText: {},
		role: {}
	},
	emits: ["keydown", "pointerdown"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (K(), q("g", {
			class: "tw:cursor-grab tw:text-secondary",
			role: e.role ?? "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Po((e) => n("pointerdown", e), ["stop"])
		}, [J("rect", {
			x: e.x - 8,
			y: e.y - 8,
			fill: "currentColor",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18",
			width: "16"
		}, null, 8, Pl), J("rect", {
			class: "tw:text-base-100",
			x: e.x - 3,
			y: e.y - 3,
			fill: "currentColor",
			height: "6",
			rx: "1",
			width: "6"
		}, null, 8, Fl)], 40, Nl));
	}
}), Ll = {
	key: 0,
	class: "tw:mt-2"
}, Rl = { class: "tw:mt-1 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-x-3 tw:gap-y-1 tw:p-0 tw:text-xs tw:text-base-content/70 tw:min-[32rem]:grid-cols-2" }, zl = { class: "tw:font-bold tw:text-base-content" }, Bl = { class: "tw:break-words" }, Vl = /* @__PURE__ */ V({
	__name: "RecipientLegend",
	props: { items: {} },
	setup(e) {
		return (t, n) => e.items.length ? (K(), q("figcaption", Ll, [n[0] ||= J("span", { class: "tw:text-xs tw:font-semibold" }, "Selected recipients", -1), J("ol", Rl, [(K(!0), q(W, null, Er(e.items, (e) => (K(), q("li", {
			key: e.actorId,
			class: "tw:min-w-0"
		}, [J("span", zl, k(e.index) + ".", 1), J("span", Bl, k(e.text), 1)]))), 128))])])) : oa("", !0);
	}
}), Hl = [
	"aria-label",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext"
], Ul = ["cx", "cy"], Wl = ["cx", "cy"], Gl = /* @__PURE__ */ V({
	__name: "RoundHandle",
	props: {
		ariaLabel: {},
		ariaValueMax: {},
		ariaValueMin: {},
		ariaValueNow: {},
		ariaValueText: {},
		x: {},
		y: {}
	},
	emits: ["keydown", "pointerdown"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (K(), q("g", {
			class: "tw:cursor-grab tw:text-secondary",
			role: "slider",
			tabindex: "0",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.ariaValueMax,
			"aria-valuemin": e.ariaValueMin,
			"aria-valuenow": e.ariaValueNow,
			"aria-valuetext": e.ariaValueText,
			onKeydown: r[0] ||= (e) => n("keydown", e),
			onPointerdown: r[1] ||= Po((e) => n("pointerdown", e), ["stop"])
		}, [J("circle", {
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "8",
			stroke: "currentColor",
			"stroke-width": "8",
			"stroke-opacity": "0.18"
		}, null, 8, Ul), J("circle", {
			class: "tw:text-base-100",
			cx: e.x,
			cy: e.y,
			fill: "currentColor",
			r: "3"
		}, null, 8, Wl)], 40, Hl));
	}
});
//#endregion
//#region src/view/apps/xp-curve-console/curve/graph/drag.ts
function Kl(e, t) {
	let n = /* @__PURE__ */ Qt();
	function r(r, i) {
		let a = i.currentTarget.ownerSVGElement;
		if (!a) return;
		let o = {
			kind: r,
			pointerId: i.pointerId,
			snapshot: e(),
			svg: a
		};
		n.value = o, a.setPointerCapture(i.pointerId), t(o, i);
	}
	function i(e) {
		let r = n.value;
		r?.pointerId === e.pointerId && t(r, e);
	}
	function a(e) {
		let t = n.value;
		t?.pointerId === e.pointerId && (t.svg.hasPointerCapture(e.pointerId) && t.svg.releasePointerCapture(e.pointerId), n.value = void 0);
	}
	return {
		activeDrag: n,
		beginDrag: r,
		endDrag: a,
		updateDrag: i
	};
}
function ql(e) {
	if ([
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp"
	].includes(e.key)) return e.preventDefault(), e.key === "ArrowUp" || e.key === "ArrowRight" ? -1 : 1;
}
//#endregion
//#region src/view/apps/xp-curve-console/curve/useCatchUpGraph.ts
function Jl(e, t) {
	let n = Q(() => Math.max(1, e.gapForMaximumAward * 1.4, ...e.samples.map((e) => e.gap), ...e.awards.map((e) => e.gap * 1.05))), r = Q(() => Math.max(1, e.maximumAward * 1.25, ...e.samples.map((e) => e.award * 1.05), ...e.awards.map((e) => e.catchUpValue * 1.05))), { activeDrag: i, beginDrag: a, endDrag: o, updateDrag: s } = Kl(() => ({
		maximumGap: n.value,
		maximumValue: r.value
	}), _), c = Q(() => i.value?.snapshot.maximumGap ?? n.value), l = Q(() => i.value?.snapshot.maximumValue ?? r.value), u = Q(() => e.samples.map((e) => `${h(e.gap).toFixed(1)},${g(e.award).toFixed(1)}`).join(" ")), d = Q(() => ({
		x: h(e.gapForMaximumAward),
		y: g(e.maximumAward)
	})), f = Q(() => ({
		x: h(e.gapForMaximumAward / 2),
		y: g(e.maximumAward * .5 ** e.curveExponent)
	})), p = Q(() => e.awards.map((e, t) => ({
		actorId: e.actorId,
		index: t + 1,
		label: `${e.actorName}: ${Math.round(e.gap)} XP gap, ${Math.round(e.catchUpValue)} initial XP`,
		x: h(e.gap),
		y: g(e.catchUpValue)
	}))), m = Q(() => e.awards.map((e, t) => ({
		actorId: e.actorId,
		index: t + 1,
		text: `${e.actorName} — ${e.gap} XP gap — initial ${Math.round(e.catchUpValue)} XP`
	})));
	function h(e) {
		return 68 + Math.max(0, e) / c.value * 472;
	}
	function g(e) {
		return 24 + (1 - Math.max(0, e) / l.value) * 192;
	}
	function _(n, r) {
		let { x: i, y: a } = hl(n.svg, r);
		if (n.kind === "reference") {
			let e = ml((i - 68) / 472, .001, 1), r = 1 - ml((a - 24) / 192, 0, 1);
			t("update:gapForMaximumAward", Math.max(1, Math.round(e * n.snapshot.maximumGap))), t("update:maximumAward", Math.max(0, Math.round(r * n.snapshot.maximumValue)));
			return;
		}
		let o = ml((216 - a) / 192 * (n.snapshot.maximumValue / Math.max(1, e.maximumAward)), .03, .99);
		t("update:curveExponent", gl(ml(Math.log(o) / Math.log(.5), .1, 5), .05));
	}
	function v(n) {
		let r = Math.max(10, Math.round(e.gapForMaximumAward / 20)), i = Math.max(1, Math.round(Math.max(1, e.maximumAward) / 20));
		(n.key === "ArrowLeft" || n.key === "ArrowRight") && (n.preventDefault(), t("update:gapForMaximumAward", Math.max(1, e.gapForMaximumAward + (n.key === "ArrowLeft" ? -r : r)))), (n.key === "ArrowUp" || n.key === "ArrowDown") && (n.preventDefault(), t("update:maximumAward", Math.max(0, e.maximumAward + (n.key === "ArrowUp" ? i : -i))));
	}
	function y(n) {
		let r = ql(n);
		r !== void 0 && t("update:curveExponent", gl(ml(e.curveExponent + r * .05, .1, 5), .05));
	}
	return {
		beginDrag: a,
		endDrag: o,
		maximumGap: c,
		points: u,
		recipientLegend: m,
		recipientPoints: p,
		referencePoint: d,
		shapePoint: f,
		toGraphX: h,
		toGraphY: g,
		updateDrag: s,
		updateReferenceWithKeyboard: v,
		updateShapeWithKeyboard: y
	};
}
//#endregion
//#region src/view/apps/xp-curve-console/curve/XpCurveGraph.vue?vue&type=script&setup=true&lang.ts
var Yl = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-catch-up-graph-heading"
}, Xl = [
	"x1",
	"x2",
	"y1",
	"y2"
], Zl = ["x", "y"], Ql = /* @__PURE__ */ V({
	__name: "XpCurveGraph",
	props: {
		awards: {},
		curveExponent: {},
		gapForMaximumAward: {},
		maximumAward: {},
		samples: {}
	},
	emits: [
		"update:curveExponent",
		"update:gapForMaximumAward",
		"update:maximumAward"
	],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumGap: i, points: a, recipientLegend: o, recipientPoints: s, referencePoint: c, shapePoint: l, toGraphX: u, toGraphY: d, updateDrag: f, updateReferenceWithKeyboard: p, updateShapeWithKeyboard: m } = Jl(e, t);
		return (t, h) => (K(), q("figure", Yl, [
			h[2] ||= J("div", { class: "tw:mb-2" }, [J("h4", {
				id: "xp-catch-up-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Initial catch-up value by XP gap "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " Drag the diamond to set the reference gap and hard limit. Drag the round point to shape the curve. ")], -1),
			Y(Ml, {
				description: "The horizontal axis is the recipient's gap below the selected XP leader. The vertical axis is the initial catch-up value before recipient decay, companion rate, and the final hard limit. Numbered markers identify selected recipients.",
				"description-id": "xp-catch-up-graph-description",
				markers: L(s),
				"maximum-x-label": `${Math.round(L(i))} XP`,
				"minimum-y-label": "0",
				points: L(a),
				title: "Editable catch-up XP curve",
				"title-id": "xp-catch-up-graph-title",
				"vertical-guide-x": L(u)(e.gapForMaximumAward),
				"x-axis-label": "Gap below selected XP leader",
				"y-axis-label": "Initial catch-up XP",
				onPointercancel: L(r),
				onPointermove: L(f),
				onPointerup: L(r)
			}, {
				guides: Bn(() => [J("line", {
					class: "tw:text-warning",
					x1: L(68),
					x2: L(68) + L(472),
					y1: L(d)(e.maximumAward),
					y2: L(d)(e.maximumAward),
					stroke: "currentColor",
					"stroke-dasharray": "6 5"
				}, null, 8, Xl)]),
				handles: Bn(() => [Y(Gl, {
					"aria-label": "Catch-up curve shape",
					"aria-value-max": 5,
					"aria-value-min": .1,
					"aria-value-now": e.curveExponent,
					"aria-value-text": `Exponent ${e.curveExponent}`,
					x: L(l).x,
					y: L(l).y,
					onKeydown: L(m),
					onPointerdown: h[0] ||= (e) => L(n)("shape", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), Y(Il, {
					"aria-label": `Reference point: ${e.gapForMaximumAward} XP gap and ${e.maximumAward} XP hard limit. Use left and right arrows for the gap, up and down arrows for the hard limit.`,
					role: "button",
					x: L(c).x,
					y: L(c).y,
					onKeydown: L(p),
					onPointerdown: h[1] ||= (e) => L(n)("reference", e)
				}, null, 8, [
					"aria-label",
					"x",
					"y",
					"onKeydown"
				])]),
				labels: Bn(() => [J("text", {
					class: "tw:text-warning",
					x: L(68) + 7,
					y: Math.max(L(24) + 12, L(d)(e.maximumAward) - 7),
					fill: "currentColor",
					"font-size": "11",
					"font-weight": "600"
				}, " Hard limit " + k(e.maximumAward) + " XP ", 9, Zl)]),
				_: 1
			}, 8, [
				"markers",
				"maximum-x-label",
				"points",
				"vertical-guide-x",
				"onPointercancel",
				"onPointermove",
				"onPointerup"
			]),
			Y(Vl, { items: L(o) }, null, 8, ["items"])
		]));
	}
});
//#endregion
//#region src/view/apps/xp-curve-console/curve/useDecayGraph.ts
function $l(e, t) {
	let n = Q(() => Math.max(1e3, e.scalePivot * 4, ...e.samples.map((e) => e.recipientXp), ...e.awards.map((e) => e.beforeXp * 1.05))), { activeDrag: r, beginDrag: i, endDrag: a, updateDrag: o } = Kl(() => ({ maximumRecipientXp: n.value }), h), s = Q(() => r.value?.snapshot.maximumRecipientXp ?? n.value), c = Q(() => e.samples.map((e) => `${p(e.recipientXp).toFixed(1)},${m(e.multiplier).toFixed(1)}`).join(" ")), l = Q(() => ({
		x: p(e.scalePivot),
		y: m(1)
	})), u = Q(() => ({
		x: p(e.scalePivot * 2),
		y: m(.5 ** e.scaleExponent)
	})), d = Q(() => e.awards.map((e, t) => ({
		actorId: e.actorId,
		index: t + 1,
		label: `${e.actorName}: ${e.beforeXp} total XP, ${Math.round(e.decayMultiplier * 100)}% catch-up strength`,
		x: p(e.beforeXp),
		y: m(e.decayMultiplier)
	}))), f = Q(() => e.awards.map((e, t) => ({
		actorId: e.actorId,
		index: t + 1,
		text: `${e.actorName} — ${e.beforeXp} XP — ${Math.round(e.decayMultiplier * 100)}% multiplier`
	})));
	function p(e) {
		return 68 + Math.max(0, e) / s.value * 472;
	}
	function m(e) {
		return 24 + (1 - ml(e, 0, 1)) * 192;
	}
	function h(e, n) {
		let { x: r, y: i } = hl(e.svg, n);
		if (e.kind === "pivot") {
			let n = ml((r - 68) / 472, .001, 1);
			t("update:scalePivot", Math.max(1, Math.round(n * e.snapshot.maximumRecipientXp)));
			return;
		}
		let a = ml(1 - (i - 24) / 192, .25, .99);
		t("update:scaleExponent", gl(ml(Math.log(a) / Math.log(.5), 0, 2), .05));
	}
	function g(n) {
		if (n.key !== "ArrowLeft" && n.key !== "ArrowRight") return;
		n.preventDefault();
		let r = Math.max(100, Math.round(e.scalePivot / 20));
		t("update:scalePivot", Math.max(1, e.scalePivot + (n.key === "ArrowLeft" ? -r : r)));
	}
	function _(n) {
		let r = ql(n);
		r !== void 0 && t("update:scaleExponent", gl(ml(e.scaleExponent + r * .05, 0, 2), .05));
	}
	return {
		beginDrag: i,
		endDrag: a,
		maximumRecipientXp: s,
		pivotPoint: l,
		points: c,
		recipientLegend: f,
		recipientPoints: d,
		strengthPoint: u,
		toGraphX: p,
		updateDrag: o,
		updatePivotWithKeyboard: g,
		updateStrengthWithKeyboard: _
	};
}
//#endregion
//#region src/view/apps/xp-curve-console/curve/XpDecayGraph.vue?vue&type=script&setup=true&lang.ts
var eu = {
	class: "tw:m-0 tw:block tw:min-w-0",
	"aria-labelledby": "xp-decay-graph-heading"
}, tu = /* @__PURE__ */ V({
	__name: "XpDecayGraph",
	props: {
		awards: {},
		samples: {},
		scaleExponent: {},
		scalePivot: {}
	},
	emits: ["update:scaleExponent", "update:scalePivot"],
	setup(e, { emit: t }) {
		let { beginDrag: n, endDrag: r, maximumRecipientXp: i, pivotPoint: a, points: o, recipientLegend: s, recipientPoints: c, strengthPoint: l, toGraphX: u, updateDrag: d, updatePivotWithKeyboard: f, updateStrengthWithKeyboard: p } = $l(e, t);
		return (t, m) => (K(), q("figure", eu, [
			m[2] ||= J("div", { class: "tw:mb-2" }, [J("h4", {
				id: "xp-decay-graph-heading",
				class: "tw:m-0 tw:text-sm tw:font-semibold"
			}, " Catch-up strength by recipient total XP "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " Drag the diamond to choose where decay begins. Drag the round point to make decay gentler or stronger. ")], -1),
			Y(Ml, {
				description: "The horizontal axis is each recipient's own total XP. The vertical axis is the multiplier applied to that recipient's initial catch-up value. Numbered markers identify selected recipients.",
				"description-id": "xp-decay-graph-description",
				markers: L(c),
				"maximum-x-label": `${Math.round(L(i))} XP`,
				"maximum-y-label": "100%",
				"minimum-y-label": "0%",
				points: L(o),
				title: "Editable recipient XP decay curve",
				"title-id": "xp-decay-graph-title",
				"vertical-guide-x": L(u)(e.scalePivot),
				"x-axis-label": "Recipient total XP",
				"y-axis-label": "Decay multiplier",
				onPointercancel: L(r),
				onPointermove: L(d),
				onPointerup: L(r)
			}, {
				handles: Bn(() => [Y(Gl, {
					"aria-label": "Recipient decay strength",
					"aria-value-max": 2,
					"aria-value-min": 0,
					"aria-value-now": e.scaleExponent,
					"aria-value-text": `Decay exponent ${e.scaleExponent}`,
					x: L(l).x,
					y: L(l).y,
					onKeydown: L(p),
					onPointerdown: m[0] ||= (e) => L(n)("strength", e)
				}, null, 8, [
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				]), Y(Il, {
					"aria-label": "Recipient total XP where decay begins",
					"aria-value-max": Math.round(L(i)),
					"aria-value-min": 1,
					"aria-value-now": e.scalePivot,
					"aria-value-text": `${e.scalePivot} total XP`,
					x: L(a).x,
					y: L(a).y,
					onKeydown: L(f),
					onPointerdown: m[1] ||= (e) => L(n)("pivot", e)
				}, null, 8, [
					"aria-value-max",
					"aria-value-now",
					"aria-value-text",
					"x",
					"y",
					"onKeydown"
				])]),
				_: 1
			}, 8, [
				"markers",
				"maximum-x-label",
				"points",
				"vertical-guide-x",
				"onPointercancel",
				"onPointermove",
				"onPointerup"
			]),
			Y(Vl, { items: L(s) }, null, 8, ["items"])
		]));
	}
}), nu = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "curve-settings-title"
}, ru = { class: "dui-card-body tw:min-w-0 tw:gap-4 tw:p-4" }, iu = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[66rem]:grid-cols-2" }, au = { class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-200" }, ou = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, su = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, cu = { class: "dui-fieldset tw:min-w-0" }, lu = { class: "dui-fieldset tw:min-w-0" }, uu = { class: "dui-fieldset tw:min-w-0" }, du = { class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-200" }, fu = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-3" }, pu = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-2 tw:min-[34rem]:grid-cols-3" }, mu = { class: "dui-fieldset tw:min-w-0" }, hu = { class: "dui-fieldset tw:min-w-0" }, gu = { class: "dui-fieldset tw:min-w-0" }, _u = /* @__PURE__ */ V({
	__name: "XpCurveConfiguration",
	props: /*@__PURE__*/ Pr({
		awards: {},
		decaySamples: {},
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
		let t = $r(e, "companionMultiplier"), n = $r(e, "curveExponent"), r = $r(e, "gapForMaximumAward"), i = $r(e, "maximumAward"), a = $r(e, "scaleExponent"), o = $r(e, "scalePivot");
		return (s, c) => (K(), q("section", nu, [J("div", ru, [
			c[31] ||= aa("<div><h2 id=\"curve-settings-title\" class=\"dui-card-title tw:text-base\"> How awards are calculated </h2><p class=\"tw:m-0 tw:max-w-3xl tw:text-xs tw:text-base-content/65\"> The graphs and number fields are two controls for the same settings. Drag either curve and its fields update immediately. </p></div><ol class=\"tw:m-0 tw:grid tw:[list-style:none] tw:grid-cols-1 tw:gap-2 tw:p-0 tw:min-[46rem]:grid-cols-3\"><li class=\"tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-3\"><div class=\"tw:flex tw:items-start tw:gap-2\"><span class=\"dui-badge dui-badge-sm tw:shrink-0\">1</span><div class=\"tw:min-w-0\"><h3 class=\"tw:m-0 tw:text-sm tw:font-semibold\">Measure the leader gap</h3><p class=\"tw:m-0 tw:text-xs tw:text-base-content/65\"> The difference between the selected XP leader and this recipient produces an initial catch-up value. </p></div></div></li><li class=\"tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-3\"><div class=\"tw:flex tw:items-start tw:gap-2\"><span class=\"dui-badge dui-badge-sm tw:shrink-0\">2</span><div class=\"tw:min-w-0\"><h3 class=\"tw:m-0 tw:text-sm tw:font-semibold\">Apply recipient decay</h3><p class=\"tw:m-0 tw:text-xs tw:text-base-content/65\"> The multiplier uses only that recipient’s current total XP. The leader’s total is not used here. </p></div></div></li><li class=\"tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-200 tw:p-3\"><div class=\"tw:flex tw:items-start tw:gap-2\"><span class=\"dui-badge dui-badge-sm tw:shrink-0\">3</span><div class=\"tw:min-w-0\"><h3 class=\"tw:m-0 tw:text-sm tw:font-semibold\">Apply the hard limit</h3><p class=\"tw:m-0 tw:text-xs tw:text-base-content/65\"> Companion rate is applied, the result is rounded, and the final award cannot exceed the configured limit. </p></div></div></li></ol>", 2),
			J("div", iu, [J("article", au, [J("div", ou, [
				c[20] ||= J("div", null, [J("h3", { class: "dui-card-title tw:text-sm" }, "1. Catch-up curve"), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " This curve converts the XP gap below the selected leader into an initial XP value. ")], -1),
				J("div", su, [
					J("fieldset", cu, [
						c[11] ||= J("legend", { class: "dui-fieldset-legend" }, "Hard limit", -1),
						c[12] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-maximum-award"
						}, " Maximum final award ", -1),
						B(J("input", {
							id: "xp-maximum-award",
							"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							min: "0",
							step: "1",
							type: "number"
						}, null, 512), [[
							To,
							i.value,
							void 0,
							{ number: !0 }
						]]),
						c[13] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Applied last; no recipient can receive more. ", -1)
					]),
					J("fieldset", lu, [
						c[14] ||= J("legend", { class: "dui-fieldset-legend" }, "Reference gap", -1),
						c[15] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-gap-for-cap"
						}, " Gap equal to the hard limit ", -1),
						B(J("input", {
							id: "xp-gap-for-cap",
							"onUpdate:modelValue": c[1] ||= (e) => r.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							min: "1",
							step: "1",
							type: "number"
						}, null, 512), [[
							To,
							r.value,
							void 0,
							{ number: !0 }
						]]),
						c[16] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " At this gap, initial catch-up equals the limit before decay. ", -1)
					]),
					J("fieldset", uu, [
						c[17] ||= J("legend", { class: "dui-fieldset-legend" }, "Curve shape", -1),
						c[18] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-curve-exponent"
						}, " Catch-up exponent ", -1),
						B(J("input", {
							id: "xp-curve-exponent",
							"onUpdate:modelValue": c[2] ||= (e) => n.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							max: "5",
							min: "0.1",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							To,
							n.value,
							void 0,
							{ number: !0 }
						]]),
						c[19] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Below 1 helps small gaps sooner; above 1 favors large gaps. ", -1)
					])
				]),
				Y(Ql, {
					"curve-exponent": n.value,
					"onUpdate:curveExponent": c[3] ||= (e) => n.value = e,
					"gap-for-maximum-award": r.value,
					"onUpdate:gapForMaximumAward": c[4] ||= (e) => r.value = e,
					"maximum-award": i.value,
					"onUpdate:maximumAward": c[5] ||= (e) => i.value = e,
					awards: e.awards,
					samples: e.samples
				}, null, 8, [
					"curve-exponent",
					"gap-for-maximum-award",
					"maximum-award",
					"awards",
					"samples"
				])
			])]), J("article", du, [J("div", fu, [
				c[30] ||= J("div", null, [J("h3", { class: "dui-card-title tw:text-sm" }, "2. Recipient decay curve"), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " High-XP builds depend less on raw XP differences. This multiplier is evaluated separately for every recipient. ")], -1),
				J("div", pu, [
					J("fieldset", mu, [
						c[21] ||= J("legend", { class: "dui-fieldset-legend" }, "Decay start", -1),
						c[22] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-pivot"
						}, " Full-strength recipient XP ", -1),
						B(J("input", {
							id: "xp-scale-pivot",
							"onUpdate:modelValue": c[6] ||= (e) => o.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							min: "1",
							step: "100",
							type: "number"
						}, null, 512), [[
							To,
							o.value,
							void 0,
							{ number: !0 }
						]]),
						c[23] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Recipients at or below this total keep 100% strength. ", -1)
					]),
					J("fieldset", hu, [
						c[24] ||= J("legend", { class: "dui-fieldset-legend" }, "Decay strength", -1),
						c[25] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-scale-exponent"
						}, " Recipient decay exponent ", -1),
						B(J("input", {
							id: "xp-scale-exponent",
							"onUpdate:modelValue": c[7] ||= (e) => a.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							max: "2",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							To,
							a.value,
							void 0,
							{ number: !0 }
						]]),
						c[26] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Zero disables decay; higher values weaken catch-up faster. ", -1)
					]),
					J("fieldset", gu, [
						c[27] ||= J("legend", { class: "dui-fieldset-legend" }, "Companion rate", -1),
						c[28] ||= J("label", {
							class: "dui-label tw:whitespace-normal",
							for: "xp-companion-rate"
						}, " Companion multiplier ", -1),
						B(J("input", {
							id: "xp-companion-rate",
							"onUpdate:modelValue": c[8] ||= (e) => t.value = e,
							class: "dui-input dui-input-sm tw:w-full tw:min-w-0 tw:max-w-full tw:tabular-nums",
							max: "1",
							min: "0",
							step: "0.05",
							type: "number"
						}, null, 512), [[
							To,
							t.value,
							void 0,
							{ number: !0 }
						]]),
						c[29] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " 0.5 gives player-owned companions half the calculated XP. ", -1)
					])
				]),
				Y(tu, {
					"scale-exponent": a.value,
					"onUpdate:scaleExponent": c[9] ||= (e) => a.value = e,
					"scale-pivot": o.value,
					"onUpdate:scalePivot": c[10] ||= (e) => o.value = e,
					awards: e.awards,
					samples: e.decaySamples
				}, null, 8, [
					"scale-exponent",
					"scale-pivot",
					"awards",
					"samples"
				])
			])])]),
			c[32] ||= J("div", {
				class: "dui-alert tw:text-xs",
				role: "note"
			}, [J("i", {
				class: "fa-solid fa-calculator",
				"aria-hidden": "true"
			}), J("span", { class: "tw:min-w-0 tw:break-words" }, [
				X(" Initial catch-up = hard limit × (leader gap ÷ reference gap)"),
				J("sup", null, "shape"),
				X(". Final XP = min(hard limit, initial catch-up × recipient decay × companion rate). ")
			])], -1)
		])]));
	}
}), vu = {
	class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-100",
	"aria-labelledby": "recipient-defaults-title"
}, yu = { class: "dui-card-body tw:min-w-0 tw:gap-3 tw:p-4" }, bu = { class: "tw:grid tw:min-w-0 tw:grid-cols-1 tw:gap-3 tw:min-[42rem]:grid-cols-2" }, xu = { class: "dui-fieldset tw:min-w-0" }, Su = { class: "dui-fieldset tw:min-w-0" }, Cu = { class: "dui-label tw:cursor-pointer tw:items-start tw:justify-start tw:gap-2 tw:whitespace-normal" }, wu = { class: "tw:flex tw:min-w-0 tw:flex-col tw:items-stretch tw:gap-2 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, Tu = ["disabled"], Eu = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, Du = {
	key: 1,
	class: "fa-solid fa-floppy-disk",
	"aria-hidden": "true"
}, Ou = /* @__PURE__ */ V({
	__name: "XpRecipientDefaults",
	props: /*@__PURE__*/ Pr({
		disabled: { type: Boolean },
		isSaving: { type: Boolean }
	}, {
		defaultSelection: { required: !0 },
		defaultSelectionModifiers: {},
		useGmToolkitDefaults: {
			type: Boolean,
			required: !0
		},
		useGmToolkitDefaultsModifiers: {}
	}),
	emits: /*@__PURE__*/ Pr(["save"], ["update:defaultSelection", "update:useGmToolkitDefaults"]),
	setup(e, { emit: t }) {
		let n = $r(e, "defaultSelection"), r = $r(e, "useGmToolkitDefaults"), i = t;
		return (t, a) => (K(), q("section", vu, [J("div", yu, [
			a[12] ||= J("div", null, [J("h2", {
				id: "recipient-defaults-title",
				class: "dui-card-title tw:text-base"
			}, " Recipient and integration defaults "), J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " These values are used the next time the console opens and no tokens are targeted. They are also available in Foundry’s Module Settings. ")], -1),
			J("div", bu, [J("fieldset", xu, [
				a[4] ||= J("legend", { class: "dui-fieldset-legend" }, "Default recipients", -1),
				a[5] ||= J("label", {
					class: "dui-label tw:whitespace-normal",
					for: "xp-default-selection"
				}, " When no tokens are targeted ", -1),
				B(J("select", {
					id: "xp-default-selection",
					"onUpdate:modelValue": a[0] ||= (e) => n.value = e,
					class: "dui-select dui-select-sm tw:w-full tw:min-w-0 tw:max-w-full"
				}, [...a[3] ||= [
					J("option", { value: "party" }, "Party (assigned player characters)", -1),
					J("option", { value: "company" }, "Company (party plus companions)", -1),
					J("option", { value: "world" }, "World (every character actor)", -1)
				]], 512), [[Oo, n.value]]),
				a[6] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Explicit token targets always replace this default for that opening. ", -1)
			]), J("fieldset", Su, [
				a[8] ||= J("legend", { class: "dui-fieldset-legend" }, "GM Toolkit compatibility", -1),
				J("label", Cu, [B(J("input", {
					"onUpdate:modelValue": a[1] ||= (e) => r.value = e,
					class: "dui-toggle dui-toggle-sm tw:mt-0.5 tw:shrink-0",
					type: "checkbox"
				}, null, 512), [[Eo, r.value]]), a[7] ||= J("span", { class: "tw:min-w-0 tw:break-words" }, " Prefer compatible GM Toolkit session, reason, and recipient-group defaults ", -1)]),
				a[9] ||= J("p", { class: "dui-label tw:whitespace-normal" }, " Disable this to use the recipient choice and reason saved by Drowsy’s Toolkit. ", -1)
			])]),
			J("div", wu, [a[11] ||= J("p", { class: "tw:m-0 tw:text-xs tw:text-base-content/65" }, " Saving defaults does not award XP or close the console. ", -1), J("button", {
				class: "dui-btn dui-btn-sm tw:w-full tw:min-[32rem]:w-auto",
				disabled: e.disabled,
				type: "button",
				onClick: a[2] ||= (e) => i("save")
			}, [e.isSaving ? (K(), q("span", Eu)) : (K(), q("i", Du)), a[10] ||= X(" Save curve & recipient defaults ", -1)], 8, Tu)])
		])]));
	}
}), ku = { class: "dui-navbar tw:min-h-0 tw:min-w-0 tw:flex-wrap tw:items-start tw:gap-2 tw:border-b tw:border-base-300 tw:bg-base-100 tw:px-4 tw:py-3" }, Au = { class: "dui-navbar-end tw:w-auto tw:max-w-full tw:shrink tw:items-start" }, ju = ["title"], Mu = { class: "tw:grid tw:grid-cols-2 tw:gap-px tw:bg-base-300 tw:min-[38rem]:grid-cols-4" }, Nu = { class: "tw:contents" }, Pu = { class: "tw:min-w-0 tw:bg-base-100 tw:px-4 tw:py-2" }, Fu = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Iu = { class: "tw:min-w-0 tw:bg-base-100 tw:px-4 tw:py-2" }, Lu = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Ru = { class: "tw:min-w-0 tw:bg-base-100 tw:px-4 tw:py-2" }, zu = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Bu = { class: "tw:min-w-0 tw:bg-base-100 tw:px-4 tw:py-2" }, Vu = { class: "tw:m-0 tw:text-lg tw:font-bold tw:tabular-nums" }, Hu = ["aria-selected", "tabindex"], Uu = ["aria-selected", "tabindex"], Wu = /* @__PURE__ */ V({
	__name: "XpConsoleHeader",
	props: /*@__PURE__*/ Pr({
		highestXp: {},
		positiveAwardCount: {},
		selectedCount: {},
		selectionLabel: {},
		selectionSource: {},
		totalAward: {}
	}, {
		activeTab: { required: !0 },
		activeTabModifiers: {}
	}),
	emits: ["update:activeTab"],
	setup(e) {
		let t = $r(e, "activeTab");
		function n(e) {
			let n;
			e.key === "ArrowLeft" || e.key === "Home" ? n = "award" : (e.key === "ArrowRight" || e.key === "End") && (n = "curves"), n && (e.preventDefault(), t.value = n, kn(() => {
				document.querySelector(`#xp-console-${n}-tab`)?.focus();
			}));
		}
		return (r, i) => (K(), q(W, null, [
			J("header", ku, [i[3] ||= aa("<div class=\"dui-navbar-start tw:min-w-0 tw:flex-1 tw:items-start\"><div class=\"tw:min-w-0\"><div class=\"dui-breadcrumbs tw:mb-1 tw:max-w-full tw:text-xs tw:text-secondary\"><ul><li>WFRP4e</li><li>Drowsy’s Toolkit</li></ul></div><h1 class=\"tw:m-0 tw:font-serif tw:text-2xl tw:font-bold tw:leading-tight\"><i class=\"fa-solid fa-chart-line tw:mr-1 tw:text-secondary\" aria-hidden=\"true\"></i> XP Curve Console </h1><p class=\"tw:mt-1 tw:max-w-2xl tw:text-sm tw:text-base-content/70\"> Compare recipients, tune catch-up and decay, then preview every award before applying it. </p></div></div>", 1), J("div", Au, [J("span", {
				class: "dui-badge dui-badge-outline dui-badge-sm tw:h-auto tw:max-w-full tw:whitespace-normal tw:py-1 tw:text-center",
				title: e.selectionSource === "targets" ? "Eligible targeted character tokens were selected when the console opened." : "No tokens were targeted, so the configured recipient default was used."
			}, [i[2] ||= J("span", {
				class: "dui-status dui-status-secondary dui-status-sm tw:shrink-0",
				"aria-hidden": "true"
			}, null, -1), X(" " + k(e.selectionLabel), 1)], 8, ju)])]),
			J("div", Mu, [J("dl", Nu, [
				J("div", Pu, [i[4] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Selected recipients", -1), J("dd", Fu, k(e.selectedCount), 1)]),
				J("div", Iu, [i[5] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60" }, "XP leader total", -1), J("dd", Lu, k(e.highestXp), 1)]),
				J("div", Ru, [i[6] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Recipients gaining XP", -1), J("dd", zu, k(e.positiveAwardCount), 1)]),
				J("div", Bu, [i[7] ||= J("dt", { class: "tw:text-xs tw:text-base-content/60" }, "Total award", -1), J("dd", Vu, k(e.totalAward) + " XP", 1)])
			])]),
			J("nav", {
				class: "dui-tabs dui-tabs-border dui-tabs-sm tw:mx-4 tw:mt-3 tw:min-w-0",
				role: "tablist",
				"aria-label": "XP Curve Console views",
				onKeydown: n
			}, [J("button", {
				id: "xp-console-award-tab",
				class: O(["dui-tab tw:h-auto tw:min-h-10 tw:min-w-0 tw:flex-1 tw:whitespace-normal tw:bg-base-100 tw:px-3", { "dui-tab-active": t.value === "award" }]),
				role: "tab",
				"aria-selected": t.value === "award",
				"aria-controls": "xp-console-award-panel",
				tabindex: t.value === "award" ? 0 : -1,
				type: "button",
				onClick: i[0] ||= (e) => t.value = "award"
			}, [...i[8] ||= [J("i", {
				class: "fa-solid fa-users tw:mr-2",
				"aria-hidden": "true"
			}, null, -1), X(" Recipients & award ", -1)]], 10, Hu), J("button", {
				id: "xp-console-curves-tab",
				class: O(["dui-tab tw:h-auto tw:min-h-10 tw:min-w-0 tw:flex-1 tw:whitespace-normal tw:bg-base-100 tw:px-3", { "dui-tab-active": t.value === "curves" }]),
				role: "tab",
				"aria-selected": t.value === "curves",
				"aria-controls": "xp-console-curves-panel",
				tabindex: t.value === "curves" ? 0 : -1,
				type: "button",
				onClick: i[1] ||= (e) => t.value = "curves"
			}, [...i[9] ||= [J("i", {
				class: "fa-solid fa-chart-line tw:mr-2",
				"aria-hidden": "true"
			}, null, -1), X(" Curves & defaults ", -1)]], 10, Uu)], 32)
		], 64));
	}
}), Gu = { class: "tw:flex tw:h-full tw:max-h-full tw:min-h-0 tw:min-w-0 tw:flex-col tw:overflow-hidden tw:bg-base-200 tw:text-base-content" }, Ku = {
	key: 0,
	class: "dui-alert dui-alert-error tw:m-4 tw:mb-0",
	role: "alert"
}, qu = { class: "tw:min-w-0 tw:break-words" }, Ju = {
	key: 1,
	class: "dui-alert tw:m-4 tw:mb-0",
	role: "status",
	"aria-live": "polite"
}, Yu = { class: "tw:min-h-0 tw:min-w-0 tw:flex-1 tw:overflow-auto tw:p-4" }, Xu = {
	id: "xp-console-award-panel",
	class: "tw:min-w-0",
	role: "tabpanel",
	"aria-labelledby": "xp-console-award-tab"
}, Zu = {
	id: "xp-console-curves-panel",
	class: "tw:min-w-0",
	role: "tabpanel",
	"aria-labelledby": "xp-console-curves-tab"
}, Qu = { class: "tw:flex tw:min-w-0 tw:flex-col tw:gap-3" }, $u = { class: "tw:z-10 tw:flex tw:min-w-0 tw:shrink-0 tw:flex-col tw:items-stretch tw:gap-3 tw:border-t tw:border-base-300 tw:bg-base-100 tw:p-4 tw:min-[32rem]:flex-row tw:min-[32rem]:items-center tw:min-[32rem]:justify-between" }, ed = ["disabled"], td = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm",
	"aria-hidden": "true"
}, nd = {
	key: 1,
	class: "fa-solid fa-award",
	"aria-hidden": "true"
}, rd = /* @__PURE__ */ V({
	__name: "XpCurveConsoleApp",
	props: {
		actions: {},
		initialization: {}
	},
	setup(e) {
		let t = e, n = Fc();
		n.initialize(t.initialization, t.actions);
		let { actors: r, canApply: i, curveSamples: a, decaySamples: o, defaultReason: s, defaultSelection: c, errorMessage: l, isSavingSettings: u, isWorking: d, parameters: f, plan: p, positiveAwardCount: m, resolvedReason: h, selectedActors: g, selectionSource: _, settingsStatusMessage: v, useGmToolkitDefaults: y } = bs(n), b = /* @__PURE__ */ I("award"), x = Q(() => _.value === "targets" ? "Recipients: targeted tokens" : `Recipients: ${{
			company: "company default",
			party: "party default",
			world: "world default"
		}[c.value]}`);
		return (e, t) => (K(), q("main", Gu, [
			Y(Wu, {
				"active-tab": b.value,
				"onUpdate:activeTab": t[0] ||= (e) => b.value = e,
				"highest-xp": L(p).highestXp,
				"positive-award-count": L(m),
				"selected-count": L(g).length,
				"selection-label": x.value,
				"selection-source": L(_),
				"total-award": L(p).totalAward
			}, null, 8, [
				"active-tab",
				"highest-xp",
				"positive-award-count",
				"selected-count",
				"selection-label",
				"selection-source",
				"total-award"
			]),
			L(l) ? (K(), q("div", Ku, [t[11] ||= J("i", {
				class: "fa-solid fa-triangle-exclamation",
				"aria-hidden": "true"
			}, null, -1), J("span", qu, k(L(l)), 1)])) : oa("", !0),
			L(v) ? (K(), q("div", Ju, [t[12] ||= J("i", {
				class: "fa-solid fa-floppy-disk",
				"aria-hidden": "true"
			}, null, -1), J("span", null, k(L(v)), 1)])) : oa("", !0),
			J("div", Yu, [B(J("section", Xu, [Y(pl, {
				"default-reason": L(s),
				"onUpdate:defaultReason": t[1] ||= (e) => /* @__PURE__ */ F(s) ? s.value = e : null,
				actors: L(r),
				disabled: L(d) || L(u),
				plan: L(p),
				"resolved-reason": L(h),
				"selection-source": L(_),
				onReset: L(n).resetSelection,
				onSelectAll: L(n).setAllActorsSelected,
				"onUpdate:selected": L(n).setActorSelected
			}, null, 8, [
				"default-reason",
				"actors",
				"disabled",
				"plan",
				"resolved-reason",
				"selection-source",
				"onReset",
				"onSelectAll",
				"onUpdate:selected"
			])], 512), [[Ga, b.value === "award"]]), B(J("section", Zu, [J("div", Qu, [Y(_u, {
				"companion-multiplier": L(f).companionMultiplier,
				"onUpdate:companionMultiplier": t[2] ||= (e) => L(f).companionMultiplier = e,
				"curve-exponent": L(f).curveExponent,
				"onUpdate:curveExponent": t[3] ||= (e) => L(f).curveExponent = e,
				"gap-for-maximum-award": L(f).gapForMaximumAward,
				"onUpdate:gapForMaximumAward": t[4] ||= (e) => L(f).gapForMaximumAward = e,
				"maximum-award": L(f).maximumAward,
				"onUpdate:maximumAward": t[5] ||= (e) => L(f).maximumAward = e,
				"scale-exponent": L(f).scaleExponent,
				"onUpdate:scaleExponent": t[6] ||= (e) => L(f).scaleExponent = e,
				"scale-pivot": L(f).scalePivot,
				"onUpdate:scalePivot": t[7] ||= (e) => L(f).scalePivot = e,
				awards: L(p).awards,
				"decay-samples": L(o),
				samples: L(a)
			}, null, 8, [
				"companion-multiplier",
				"curve-exponent",
				"gap-for-maximum-award",
				"maximum-award",
				"scale-exponent",
				"scale-pivot",
				"awards",
				"decay-samples",
				"samples"
			]), Y(Ou, {
				"default-selection": L(c),
				"onUpdate:defaultSelection": t[8] ||= (e) => /* @__PURE__ */ F(c) ? c.value = e : null,
				"use-gm-toolkit-defaults": L(y),
				"onUpdate:useGmToolkitDefaults": t[9] ||= (e) => /* @__PURE__ */ F(y) ? y.value = e : null,
				disabled: L(u) || L(d),
				"is-saving": L(u),
				onSave: L(n).saveDefaults
			}, null, 8, [
				"default-selection",
				"use-gm-toolkit-defaults",
				"disabled",
				"is-saving",
				"onSave"
			])])], 512), [[Ga, b.value === "curves"]])]),
			J("footer", $u, [t[13] ||= J("p", { class: "tw:m-0 tw:min-w-0 tw:text-xs tw:text-base-content/65" }, " Awards use WFRP4e’s experience log and cannot be undone as one batch. ", -1), J("button", {
				class: "dui-btn dui-btn-primary tw:w-full tw:min-w-0 tw:min-[32rem]:w-auto tw:min-[32rem]:min-w-52",
				disabled: !L(i) || L(u),
				type: "button",
				onClick: t[10] ||= (...e) => L(n).applyAwards && L(n).applyAwards(...e)
			}, [L(d) ? (K(), q("span", td)) : (K(), q("i", nd)), X(" Award " + k(L(p).totalAward) + " XP ", 1)], 8, ed)])
		]));
	}
});
//#endregion
//#region src/functions/xp-curve/selection.ts
function id(e) {
	let { assignedActorIds: t, candidates: n, defaultSelection: r, targetedActorIds: i } = e;
	return n.map((e) => {
		let n = ad(e, t);
		return {
			category: n,
			id: e.id,
			name: e.name,
			selected: i?.has(e.id) ?? od(e.id, n, r, t),
			totalXp: e.totalXp
		};
	}).sort(sd);
}
function ad(e, t) {
	return e.hasPlayerOwner && !t.has(e.id) ? "companion" : "standard";
}
function od(e, t, n, r) {
	return n === "world" ? !0 : n === "company" ? r.has(e) || t === "companion" : r.has(e);
}
function sd(e, t) {
	return e.selected === t.selected ? e.name.localeCompare(t.name) : e.selected ? -1 : 1;
}
//#endregion
//#region src/module/xp-curve/actors.ts
function cd(e) {
	let t = pd(), n = md(), r = n === void 0 ? "default" : "targets";
	return {
		actors: id({
			assignedActorIds: t,
			candidates: Array.from(game.actors).filter((e) => e.type === "character").map(ud),
			defaultSelection: e,
			targetedActorIds: n
		}),
		selectionSource: r
	};
}
function ld(e) {
	let t = pd();
	return e.map((e) => {
		let n = game.actors.get(e);
		if (!n || n.type !== "character") throw Error(`XP recipient ${e} is no longer an available character actor.`);
		return dd(n, ad(n, t), !0);
	});
}
function ud(e) {
	let t = fd(e);
	return {
		hasPlayerOwner: e.hasPlayerOwner,
		id: e.id,
		name: e.name,
		totalXp: t.details.experience.total
	};
}
function dd(e, t, n) {
	let r = fd(e);
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
function fd(e) {
	if (!hd(e.system)) throw Error(`WFRP4e actor "${e.name}" does not expose readable system data.`);
	let t = e.system.details, n = e.system.awardExp;
	if (!hd(t) || typeof n != "function") throw Error(`WFRP4e actor "${e.name}" does not expose XP award operations.`);
	let r = t.experience;
	if (!hd(r) || !Number.isFinite(Number(r.total))) throw Error(`WFRP4e actor "${e.name}" does not expose a numeric total XP value.`);
	return {
		awardExp: n,
		details: { experience: { total: Math.max(0, Math.round(Number(r.total))) } }
	};
}
function pd() {
	return new Set(Array.from(game.users).map((e) => e.character?.id).filter((e) => typeof e == "string"));
}
function md() {
	if (!(!game.user.targets || game.user.targets.size === 0)) return new Set(Array.from(game.user.targets).map((e) => e.actor).filter((e) => e?.type === "character").map((e) => e.id));
}
function hd(e) {
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
}, gd = {
	defaultReason: "addXPDefaultReason",
	defaultSelection: "defaultPartySessionTurnover",
	session: "sessionID"
};
function _d() {
	let e = Sd($.useGmToolkitDefaults), t = {
		defaultReason: wd($.defaultReason),
		defaultSelection: Td($.defaultSelection),
		parameters: {
			companionMultiplier: Cd($.companionMultiplier),
			curveExponent: Cd($.curveExponent),
			gapForMaximumAward: Cd($.gapForMaximumAward),
			maximumAward: Cd($.maximumAward),
			scaleExponent: Cd($.scaleExponent),
			scalePivot: Cd($.scalePivot)
		},
		useGmToolkitDefaults: e
	};
	return !e || !xd() ? t : {
		...t,
		defaultReason: Ed(gd.defaultReason),
		defaultSelection: Dd()
	};
}
function vd(e) {
	return !e || !xd() ? "" : Ed(gd.session);
}
async function yd(e) {
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
function bd(e) {
	return Sd(e);
}
function xd() {
	return game.modules.get(r)?.active === !0;
}
function Sd(e) {
	return game.settings.get(t, e) === !0;
}
function Cd(e) {
	return Number(game.settings.get(t, e));
}
function wd(e) {
	let n = game.settings.get(t, e);
	return typeof n == "string" ? n : "";
}
function Td(e) {
	return Od(wd(e));
}
function Ed(e) {
	let t = game.settings.get(r, e);
	return typeof t == "string" && t !== "null" ? t : "";
}
function Dd() {
	return Od(Ed(gd.defaultSelection));
}
function Od(e) {
	return e === "company" || e === "world" ? e : "party";
}
//#endregion
//#region src/module/xp-curve/initialization.ts
function kd() {
	let e = _d(), t = cd(e.defaultSelection);
	return {
		...e,
		...t,
		reasonContext: Ad(!0)
	};
}
function Ad(e) {
	return {
		date: game.world.nextSession?.slice(0, 10) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		session: vd(e)
	};
}
//#endregion
//#region src/module/xp-curve/service.ts
async function jd(e) {
	if (!game.user.isGM) throw Error("Only a GM can award experience.");
	let t = ld(Array.from(new Set(e.actorIds))), n = wc(e.parameters), r = Tc(t.map((e) => e.choice), n);
	if (r.awards.length < 2) throw Error("Select at least two character actors to calculate catch-up XP.");
	if (r.totalAward < 1) throw Error("This curve produces no XP awards for the selected actors.");
	await yd({
		defaultReason: e.defaultReason,
		defaultSelection: e.defaultSelection,
		parameters: n,
		useGmToolkitDefaults: e.useGmToolkitDefaults
	});
	let i = Mc(e.defaultReason, Ad(e.useGmToolkitDefaults)), a = [];
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
	return await Nd(o), ui.notifications.info(`Awarded ${o.totalAward} total XP across ${a.length} actors.`), o;
}
async function Md(e) {
	if (!game.user.isGM) throw Error("Only a GM can change XP Curve Console defaults.");
	await yd({
		...e,
		parameters: wc(e.parameters)
	}), ui.notifications.info("XP Curve Console defaults saved.");
}
async function Nd(e) {
	let t = e.awards.filter((e) => e.award > 0).map((e) => `<li><strong>${Nc(e.actorName)}</strong>: +${e.award} XP (${e.beforeXp} → ${e.afterXp})</li>`).join(""), n = `<h2>XP Curve Award</h2><p>${Nc(e.reason)}</p><ul>${t}</ul><p><strong>${e.totalAward} XP awarded in total.</strong></p>`, r = game.wfrp4e.utility.chatDataSetup(n, "gmroll", !1, { alias: "Drowsy’s Toolkit" });
	await ChatMessage.create(r);
}
//#endregion
//#region src/module/apps/xp-curve-console/XpCurveConsoleApplication.ts
var Pd = class extends vc {
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
		return rd;
	}
	getVueProps() {
		return {
			actions: {
				applyAwards: jd,
				onActionComplete: () => {
					this.close().catch((e) => {
						console.error(`${t} | Failed to close the XP Curve Console.`, e), ui.notifications.error("XP awards completed, but Drowsy’s Toolkit could not close the console.");
					});
				},
				saveSettings: Md
			},
			initialization: kd()
		};
	}
};
//#endregion
//#region src/module/apps/xp-curve-console/open.ts
async function Fd() {
	let e = new Pd();
	return await e.render(!0), e;
}
function Id() {
	Fd().catch((e) => {
		console.error(`${t} | Failed to open the XP Curve Console.`, e), ui.notifications.error("Drowsy’s Toolkit could not open the XP Curve Console. See the browser console for details.");
	});
}
//#endregion
//#region src/module/api/create-module-api.ts
function Ld() {
	return {
		applyToSelectedActors: pc,
		awardXpCurve: jd,
		openFearConsole: bc,
		openXpCurveConsole: Fd,
		openWorkbench: bc,
		postPrompt: mc,
		postSummaryPrompt: hc
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Rd() {
	let e = game.modules.get(t);
	if (!e) throw Error(`Foundry module registry entry was not found for ${t}.`);
	e.api = Ld();
}
//#endregion
//#region src/module/fear-terror/settings/launchers.ts
var zd = {
	actorSheet: "showActorSheetLauncher",
	moduleSettings: "showModuleSettingsLauncher",
	tokenControls: "showTokenControlsLauncher"
};
function Bd(e) {
	return game.settings.get(t, e) === !0;
}
//#endregion
//#region src/module/fear-terror/actor-sheet/register.ts
var Vd = "openFearConsole", Hd = "wfrp4e-enhanced-fear-terror-actor-header", Ud = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], Wd = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function Gd() {
	if (Bd(zd.actorSheet)) {
		for (let e of Ud) Hooks.on(e, (e, t) => {
			Kd(e, t);
		});
		for (let e of Wd) Hooks.on(e, (e) => {
			qd(e);
		});
	}
}
function Kd(e, t) {
	e.document.documentName === "Actor" && (t.some((e) => e.action === Vd) || (t.push({
		action: Vd,
		icon: "fa-solid fa-skull",
		label: "Fear Console"
	}), e.options.actions ??= {}, e.options.actions[Vd] = function() {
		Jd(this.document);
	}));
}
function qd(e) {
	let t = e.document, n = e.element;
	if (t.documentName !== "Actor" || !(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${Hd}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(Hd, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = Vd, i.dataset.tooltip = "Fear Console", i.ariaLabel = "Open Drowsy’s Toolkit Fear Console", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), Jd(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function Jd(e) {
	try {
		xc({ initialPayload: sc(e) });
	} catch (e) {
		console.error("wfrp4e-enhanced-fear-terror | Could not infer Fear or Terror from the actor.", e), ui.notifications.error("Drowsy’s Toolkit could not read this actor. See the browser console for details.");
	}
}
//#endregion
//#region src/module/fear-terror/scene-controls/register.ts
var Yd = "openFearConsole";
function Xd() {
	Bd(zd.tokenControls) && Hooks.on("getSceneControlButtons", (e) => {
		Zd(e);
	});
}
function Zd(t) {
	let n = t.tokens;
	n && (n.tools[Yd] = {
		button: !0,
		icon: "fa-solid fa-skull",
		name: Yd,
		onChange: () => {
			xc();
		},
		order: 99,
		title: "Fear Console",
		toolclip: { content: `${e}.SceneControls.OpenFearConsole` }
	});
}
//#endregion
//#region src/module/settings/register.ts
function Qd(n, r) {
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
//#region src/module/fear-terror/settings/register.ts
function $d() {
	Qd(zd.moduleSettings, "ModuleSettingsLauncher"), Qd(zd.tokenControls, "TokenControlsLauncher"), Qd(zd.actorSheet, "ActorSheetLauncher"), Bd(zd.moduleSettings) && game.settings.registerMenu(t, "fearConsole", {
		hint: `${e}.Menu.FearConsole.Hint`,
		icon: "fa-solid fa-skull",
		label: `${e}.Menu.FearConsole.Label`,
		name: `${e}.Menu.FearConsole.Name`,
		restricted: !0,
		type: yc
	});
}
//#endregion
//#region src/module/xp-curve/scene-controls/register.ts
var ef = "openXpCurveConsole";
function tf() {
	bd($.showTokenControlsLauncher) && Hooks.on("getSceneControlButtons", (t) => {
		let n = t.tokens;
		n && (n.tools[ef] = {
			button: !0,
			icon: "fa-solid fa-chart-line",
			name: ef,
			onChange: Id,
			order: 98,
			title: "XP Curve Console",
			toolclip: { content: `${e}.SceneControls.OpenXpCurveConsole` }
		});
	});
}
//#endregion
//#region src/module/xp-curve/settings/register.ts
function nf() {
	Qd($.showModuleSettingsLauncher, "XpCurveModuleSettingsLauncher"), Qd($.showTokenControlsLauncher, "XpCurveTokenControlsLauncher"), rf($.maximumAward, 500, Number, "MaximumAward", { range: {
		max: 1e5,
		min: 0,
		step: 1
	} }), rf($.gapForMaximumAward, 1e3, Number, "GapForMaximumAward", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), rf($.curveExponent, .75, Number, "CurveExponent", { range: {
		max: 5,
		min: .1,
		step: .05
	} }), rf($.scalePivot, 5e3, Number, "ScalePivot", { range: {
		max: 1e6,
		min: 1,
		step: 100
	} }), rf($.scaleExponent, .5, Number, "ScaleExponent", { range: {
		max: 2,
		min: 0,
		step: .05
	} }), rf($.companionMultiplier, .5, Number, "CompanionMultiplier", { range: {
		max: 1,
		min: 0,
		step: .05
	} }), rf($.defaultReason, "XP curve catch-up (%date%)", String, "DefaultReason"), rf($.defaultSelection, "party", String, "DefaultSelection", { choices: {
		company: `${e}.Settings.XpCurve.DefaultSelection.Company`,
		party: `${e}.Settings.XpCurve.DefaultSelection.Party`,
		world: `${e}.Settings.XpCurve.DefaultSelection.World`
	} }), rf($.useGmToolkitDefaults, !0, Boolean, "UseGmToolkitDefaults"), bd($.showModuleSettingsLauncher) && game.settings.registerMenu(t, "xpCurveConsole", {
		hint: `${e}.Menu.XpCurveConsole.Hint`,
		icon: "fa-solid fa-chart-line",
		label: `${e}.Menu.XpCurveConsole.Label`,
		name: `${e}.Menu.XpCurveConsole.Name`,
		restricted: !0,
		type: Pd
	});
}
function rf(n, r, i, a, o = {}) {
	game.settings.register(t, n, {
		...o,
		config: !0,
		default: r,
		hint: `${e}.Settings.XpCurve.${a}.Hint`,
		name: `${e}.Settings.XpCurve.${a}.Name`,
		scope: "world",
		type: i
	});
}
//#endregion
//#region src/module/settings/sections.ts
var af = [{
	descriptionKey: `${e}.Settings.Sections.Fear.Description`,
	keys: [
		"fearConsole",
		zd.moduleSettings,
		zd.tokenControls,
		zd.actorSheet
	],
	titleKey: `${e}.Settings.Sections.Fear.Title`
}, {
	descriptionKey: `${e}.Settings.Sections.XpCurve.Description`,
	keys: [
		"xpCurveConsole",
		$.showModuleSettingsLauncher,
		$.showTokenControlsLauncher,
		$.defaultSelection,
		$.useGmToolkitDefaults,
		$.defaultReason,
		$.maximumAward,
		$.gapForMaximumAward,
		$.curveExponent,
		$.scalePivot,
		$.scaleExponent,
		$.companionMultiplier
	],
	titleKey: `${e}.Settings.Sections.XpCurve.Title`
}];
function of() {
	Hooks.on("renderSettingsConfig", (...e) => {
		let t = e.map(lf).find((e) => e !== void 0);
		t && sf(t);
	});
}
function sf(e) {
	let n = e.matches("[data-category=\"wfrp4e-enhanced-fear-terror\"]") || e.matches("[data-tab=\"wfrp4e-enhanced-fear-terror\"]") ? e : e.querySelector(`[data-category="${t}"], [data-tab="${t}"]`);
	if (!n) return;
	for (let e of n.querySelectorAll("[data-drowsys-settings-heading]")) e.remove();
	let r = Array.from(n.children).filter((e) => e instanceof HTMLElement && e.classList.contains("form-group")), i = /* @__PURE__ */ new Set();
	for (let e of af) {
		let t = e.keys.map((e) => cf(r, e)).filter((e) => e !== void 0);
		if (t.length === 0) continue;
		let a = document.createElement("h3");
		a.classList.add("divider"), a.dataset.drowsysSettingsHeading = "true", a.textContent = game.i18n.localize(e.titleKey);
		let o = document.createElement("p");
		o.classList.add("hint"), o.dataset.drowsysSettingsHeading = "true", o.textContent = game.i18n.localize(e.descriptionKey), n.append(a, o, ...t), t.forEach((e) => i.add(e));
	}
	for (let e of r) i.has(e) || n.append(e);
}
function cf(e, n) {
	let r = new Set([n, `${t}.${n}`]);
	return e.find((e) => Array.from(e.querySelectorAll("[data-key], [name]")).some((e) => {
		let t = e.dataset.key ?? e.getAttribute("name");
		return t ? r.has(t) : !1;
	}));
}
function lf(e) {
	if (e instanceof HTMLElement) return e;
	if (typeof e != "object" || !e || !("0" in e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function uf() {
	Hooks.once("init", () => {
		console.info(`${t} | Initializing`), $d(), nf(), of(), Gd(), Xd(), tf();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			console.warn(`${t} | Loaded outside ${i}; skipping module API registration.`);
			return;
		}
		Rd(), console.info(`${t} | Ready`);
	});
}
//#endregion
//#region src/main.ts
uf();
//#endregion

//# sourceMappingURL=wfrp4e-enhanced-fear-terror.mjs.map