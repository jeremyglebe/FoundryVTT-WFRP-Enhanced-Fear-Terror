//#region src/module/constants.ts
var e = "wfrp4e-enhanced-fear-terror", t = "wfrp4e";
//#endregion
//#region src/module/fear-terror/fear-terror-service.ts
function n() {
	return f() ? l().map((e) => ({
		id: e.id,
		name: e.name,
		source: e.__eftSelectionSource ?? "targeted"
	})) : [];
}
async function r(e) {
	if (!f()) {
		console.warn("Foundry runtime is not available.");
		return;
	}
	let t = l();
	if (!t.length) {
		ui.notifications?.warn?.("Target or control one or more tokens before applying Fear or Terror.");
		return;
	}
	await Promise.all(t.map((t) => o(t, e)));
}
async function i(e) {
	if (!f()) {
		console.warn("Foundry runtime is not available.");
		return;
	}
	let t = c(e), n = e.source?.trim(), r = s(e.type, t, n), i = e.type === "fear" ? p("CHAT.Fear") : p("CHAT.Terror"), a = await foundry.applications.handlebars.renderTemplate("systems/wfrp4e/templates/chat/fear.hbs", { title: r });
	await ChatMessage.create({
		content: a,
		speaker: { alias: i },
		system: {
			rating: t,
			source: n,
			type: e.type
		},
		type: "psych"
	});
}
async function a(e) {
	if (!f()) {
		console.warn("Foundry runtime is not available.");
		return;
	}
	let t = c(e), n = e.source?.trim(), r = e.type === "fear" ? "Fear" : "Terror", i = `<h2>${e.type === "fear" ? p("CHAT.Fear") : p("CHAT.Terror")}</h2>@${r}[${t}${n ? `, ${n}` : ""}]`;
	await ChatMessage.create(game.wfrp4e.utility.chatDataSetup(i, "gmroll", !1, { alias: "Fear & Terror" }));
}
async function o(e, t) {
	let n = c(t), r = t.source?.trim() || void 0;
	t.type === "fear" ? await e.applyFear(n, r) : await e.applyTerror(n, r);
}
function s(e, t, n) {
	return `${p(e === "fear" ? "CHAT.Fear" : "CHAT.Terror")} ${t}${n ? ` - ${n}` : ""}`;
}
function c(e) {
	let t = e.type === "fear" ? 0 : 1, n = Number(e.rating);
	return Number.isFinite(n) ? Math.max(0, Math.trunc(n)) : t;
}
function l() {
	let e = /* @__PURE__ */ new Map();
	for (let t of game.user.targets ?? []) u(e, t.actor, "targeted");
	for (let t of d()) u(e, t.actor, "controlled");
	return !e.size && game.user.character && u(e, game.user.character, "character"), Array.from(e.values());
}
function u(e, t, n) {
	!t || e.has(t.id) || (t.__eftSelectionSource = n, e.set(t.id, t));
}
function d() {
	return typeof canvas > "u" ? [] : canvas.tokens?.controlled ?? [];
}
function f() {
	return typeof game < "u";
}
function p(e) {
	return f() ? game.i18n.localize(e) : e;
}
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function m(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var h = {}, g = [], _ = () => {}, v = () => !1, y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), b = (e) => e.startsWith("onUpdate:"), x = Object.assign, ee = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, te = Object.prototype.hasOwnProperty, S = (e, t) => te.call(e, t), C = Array.isArray, ne = (e) => O(e) === "[object Map]", re = (e) => O(e) === "[object Set]", ie = (e) => O(e) === "[object Date]", w = (e) => typeof e == "function", T = (e) => typeof e == "string", E = (e) => typeof e == "symbol", D = (e) => typeof e == "object" && !!e, ae = (e) => (D(e) || w(e)) && w(e.then) && w(e.catch), oe = Object.prototype.toString, O = (e) => oe.call(e), se = (e) => O(e).slice(8, -1), ce = (e) => O(e) === "[object Object]", le = (e) => T(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ue = /* @__PURE__ */ m(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), de = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, fe = /-\w/g, k = de((e) => e.replace(fe, (e) => e.slice(1).toUpperCase())), pe = /\B([A-Z])/g, me = de((e) => e.replace(pe, "-$1").toLowerCase()), he = de((e) => e.charAt(0).toUpperCase() + e.slice(1)), ge = de((e) => e ? `on${he(e)}` : ""), A = (e, t) => !Object.is(e, t), _e = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ve = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ye = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, be, xe = () => be ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function Se(e) {
	if (C(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = T(r) ? Ee(r) : Se(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (T(e) || D(e)) return e;
}
var Ce = /;(?![^(]*\))/g, we = /:([^]+)/, Te = /\/\*[^]*?\*\//g;
function Ee(e) {
	let t = {};
	return e.replace(Te, "").split(Ce).forEach((e) => {
		if (e) {
			let n = e.split(we);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function De(e) {
	let t = "";
	if (T(e)) t = e;
	else if (C(e)) for (let n = 0; n < e.length; n++) {
		let r = De(e[n]);
		r && (t += r + " ");
	}
	else if (D(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Oe = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ke = /* @__PURE__ */ m(Oe);
Oe + "";
function Ae(e) {
	return !!e || e === "";
}
function je(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Me(e[r], t[r]);
	return n;
}
function Me(e, t) {
	if (e === t) return !0;
	let n = ie(e), r = ie(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = E(e), r = E(t), n || r) return e === t;
	if (n = C(e), r = C(t), n || r) return n && r ? je(e, t) : !1;
	if (n = D(e), r = D(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Me(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var Ne = (e) => !!(e && e.__v_isRef === !0), Pe = (e) => T(e) ? e : e == null ? "" : C(e) || D(e) && (e.toString === oe || !w(e.toString)) ? Ne(e) ? Pe(e.value) : JSON.stringify(e, Fe, 2) : String(e), Fe = (e, t) => Ne(t) ? Fe(e, t.value) : ne(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ie(t, r) + " =>"] = n, e), {}) } : re(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ie(e)) } : E(t) ? Ie(t) : D(t) && !C(t) && !ce(t) ? String(t) : t, Ie = (e, t = "") => E(e) ? `Symbol(${e.description ?? t})` : e, j, Le = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
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
function Re() {
	return j;
}
var M, ze = /* @__PURE__ */ new WeakSet(), Be = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ze.has(this) && (ze.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || We(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, nt(this), qe(this);
		let e = M, t = N;
		M = this, N = !0;
		try {
			return this.fn();
		} finally {
			Je(this), M = e, N = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ze(e);
			this.deps = this.depsTail = void 0, nt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ze.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ye(this) && this.run();
	}
	get dirty() {
		return Ye(this);
	}
}, Ve = 0, He, Ue;
function We(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ue, Ue = e;
		return;
	}
	e.next = He, He = e;
}
function Ge() {
	Ve++;
}
function Ke() {
	if (--Ve > 0) return;
	if (Ue) {
		let e = Ue;
		for (Ue = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; He;) {
		let t = He;
		for (He = void 0; t;) {
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
function qe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Je(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ze(r), Qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ye(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Xe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Xe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rt) || (e.globalVersion = rt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ye(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = N;
	M = e, N = !0;
	try {
		qe(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, N = r, Je(e), e.flags &= -3;
	}
}
function Ze(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ze(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var N = !0, $e = [];
function et() {
	$e.push(N), N = !1;
}
function tt() {
	let e = $e.pop();
	N = e === void 0 ? !0 : e;
}
function nt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var rt = 0, it = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, at = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !N || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new it(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, ot(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, rt++, this.notify(e);
	}
	notify(e) {
		Ge();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ke();
		}
	}
};
function ot(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ot(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var st = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(""), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (N && M) {
		let t = st.get(e);
		t || st.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new at()), r.map = t, r.key = n), r.track();
	}
}
function F(e, t, n, r, i, a) {
	let o = st.get(e);
	if (!o) {
		rt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ge(), t === "clear") o.forEach(s);
	else {
		let i = C(e), a = i && le(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ut || !E(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ut)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ct)), ne(e) && s(o.get(lt)));
				break;
			case "delete":
				i || (s(o.get(ct)), ne(e) && s(o.get(lt)));
				break;
			case "set":
				ne(e) && s(o.get(ct));
				break;
		}
	}
	Ke();
}
function dt(e) {
	let t = /* @__PURE__ */ z(e);
	return t === e ? t : (P(t, "iterate", ut), /* @__PURE__ */ R(e) ? t : t.map(B));
}
function ft(e) {
	return P(e = /* @__PURE__ */ z(e), "iterate", ut), e;
}
function I(e, t) {
	return /* @__PURE__ */ L(e) ? Zt(/* @__PURE__ */ Jt(e) ? B(t) : t) : B(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => I(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => C(e) ? dt(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = I(this, e[1]), e));
	},
	every(e, t) {
		return gt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return gt(this, "filter", e, t, (e) => e.map((e) => I(this, e)), arguments);
	},
	find(e, t) {
		return gt(this, "find", e, t, (e) => I(this, e), arguments);
	},
	findIndex(e, t) {
		return gt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return gt(this, "findLast", e, t, (e) => I(this, e), arguments);
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
		return dt(this).join(e);
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
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return yt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => I(this, e));
	}
};
function mt(e, t, n) {
	let r = ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ R(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ R(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? B(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, I(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function _t(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ R(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = I(e, t)), n.call(this, t, I(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? I(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ z(e);
	P(r, "iterate", ut);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ z(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	et(), Ge();
	let r = (/* @__PURE__ */ z(e))[t].apply(e, n);
	return Ke(), tt(), r;
}
var bt = /* @__PURE__ */ m("__proto__,__v_isRef,__isVue"), xt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(E));
function St(e) {
	E(e) || (e = String(e));
	let t = /* @__PURE__ */ z(this);
	return P(t, "has", e), t.hasOwnProperty(e);
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
		let a = C(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return St;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((E(t) ? xt.has(t) : bt(t)) || (r || P(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && le(t) ? o : o.value;
			return r && D(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return D(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = C(e) && le(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ L(i);
			if (!/* @__PURE__ */ R(n) && !/* @__PURE__ */ L(n) && (i = /* @__PURE__ */ z(i), n = /* @__PURE__ */ z(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : S(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ z(r) && (o ? A(n, i) && F(e, "set", t, n, i) : F(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = S(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && F(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!E(t) || !xt.has(t)) && P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", C(e) ? "length" : ct), Reflect.ownKeys(e);
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
		let i = this.__v_raw, a = /* @__PURE__ */ z(i), o = ne(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? kt : t ? Zt : B;
		return !t && P(a, "iterate", c ? lt : ct), x(Object.create(l), { next() {
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
			let r = this.__v_raw, i = /* @__PURE__ */ z(r), a = /* @__PURE__ */ z(n);
			e || (A(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? Zt : B;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ z(t), "iterate", ct), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ z(n), i = /* @__PURE__ */ z(t);
			return e || (A(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ z(a), s = t ? kt : e ? Zt : B;
			return !e && P(o, "iterate", ct), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return x(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ z(this), r = At(n), i = /* @__PURE__ */ z(e), a = !t && !/* @__PURE__ */ R(e) && !/* @__PURE__ */ L(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), F(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ R(n) && !/* @__PURE__ */ L(n) && (n = /* @__PURE__ */ z(n));
			let r = /* @__PURE__ */ z(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ z(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && F(r, "set", e, n, s) : F(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ z(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ z(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && F(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ z(this), t = e.size !== 0, n = e.clear();
			return t && F(e, "clear", void 0, void 0, void 0), n;
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
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(S(n, r) && r in t ? n : t, r, i);
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
function Ut(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Ht(se(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return /* @__PURE__ */ L(e) ? e : qt(e, !1, Et, Ft, Rt);
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return qt(e, !1, Ot, It, zt);
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return qt(e, !0, Dt, Lt, Bt);
}
function qt(e, t, n, r, i) {
	if (!D(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Ut(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Jt(e) {
	return /* @__PURE__ */ L(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function R(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function z(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ z(t) : e;
}
function Xt(e) {
	return !S(e, "__v_skip") && Object.isExtensible(e) && ve(e, "__v_skip", !0), e;
}
var B = (e) => D(e) ? /* @__PURE__ */ Wt(e) : e, Zt = (e) => D(e) ? /* @__PURE__ */ Kt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function Qt(e) {
	return $t(e, !1);
}
function $t(e, t) {
	return /* @__PURE__ */ V(e) ? e : new en(e, t);
}
var en = class {
	constructor(e, t) {
		this.dep = new at(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ z(e), this._value = t ? e : B(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ R(e) || /* @__PURE__ */ L(e);
		e = n ? e : /* @__PURE__ */ z(e), A(e, t) && (this._rawValue = e, this._value = n ? e : B(e), this.dep.trigger());
	}
};
function tn(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var nn = {
	get: (e, t, n) => t === "__v_raw" ? e : tn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function rn(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, nn);
}
var an = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new at(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return We(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Xe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function on(e, t, n = !1) {
	let r, i;
	return w(e) ? r = e : (r = e.get, i = e.set), new an(r, i, n);
}
var sn = {}, cn = /* @__PURE__ */ new WeakMap(), ln = void 0;
function un(e, t = !1, n = ln) {
	if (n) {
		let t = cn.get(n);
		t || cn.set(n, t = []), t.push(e);
	}
}
function dn(e, t, n = h) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ R(e) || i === !1 || i === 0 ? fn(e, 1) : fn(e), u, d, f, p, m = !1, g = !1;
	if (/* @__PURE__ */ V(e) ? (d = () => e.value, m = /* @__PURE__ */ R(e)) : /* @__PURE__ */ Jt(e) ? (d = () => l(e), m = !0) : C(e) ? (g = !0, m = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ R(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return l(e);
		if (w(e)) return c ? c(e, 2) : e();
	})) : d = w(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			et();
			try {
				f();
			} finally {
				tt();
			}
		}
		let t = ln;
		ln = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			ln = t;
		}
	} : _, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => fn(e(), t);
	}
	let v = Re(), y = () => {
		u.stop(), v && v.active && ee(v.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			e(...t), y();
		};
	}
	let b = g ? Array(e.length).fill(sn) : sn, x = (e) => {
		if (!(!(u.flags & 1) || !u.dirty && !e)) if (t) {
			let e = u.run();
			if (i || m || (g ? e.some((e, t) => A(e, b[t])) : A(e, b))) {
				f && f();
				let n = ln;
				ln = u;
				try {
					let n = [
						e,
						b === sn ? void 0 : g && b[0] === sn ? [] : b,
						p
					];
					b = e, c ? c(t, 3, n) : t(...n);
				} finally {
					ln = n;
				}
			}
		} else u.run();
	};
	return s && s(x), u = new Be(d), u.scheduler = o ? () => o(x, !1) : x, p = (e) => un(e, !1, u), f = u.onStop = () => {
		let e = cn.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			cn.delete(u);
		}
	}, t ? r ? x(!0) : b = u.run() : o ? o(x.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y;
}
function fn(e, t = Infinity, n) {
	if (t <= 0 || !D(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) fn(e.value, t, n);
	else if (C(e)) for (let r = 0; r < e.length; r++) fn(e[r], t, n);
	else if (re(e) || ne(e)) e.forEach((e) => {
		fn(e, t, n);
	});
	else if (ce(e)) {
		for (let r in e) fn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && fn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function pn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		mn(e, t, n);
	}
}
function H(e, t, n, r) {
	if (w(e)) {
		let i = pn(e, t, n, r);
		return i && ae(i) && i.catch((e) => {
			mn(e, t, n);
		}), i;
	}
	if (C(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(H(e[a], t, n, r));
		return i;
	}
}
function mn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || h;
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
			et(), pn(a, null, 10, [
				e,
				i,
				o
			]), tt();
			return;
		}
	}
	hn(e, n, i, r, o);
}
function hn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], W = -1, gn = [], _n = null, vn = 0, yn = /* @__PURE__ */ Promise.resolve(), bn = null;
function xn(e) {
	let t = bn || yn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sn(e) {
	let t = W + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = On(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Cn(e) {
	if (!(e.flags & 1)) {
		let t = On(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= On(n) ? U.push(e) : U.splice(Sn(t), 0, e), e.flags |= 1, wn();
	}
}
function wn() {
	bn ||= yn.then(kn);
}
function Tn(e) {
	C(e) ? gn.push(...e) : _n && e.id === -1 ? _n.splice(vn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1), wn();
}
function En(e, t, n = W + 1) {
	for (; n < U.length; n++) {
		let t = U[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			U.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Dn(e) {
	if (gn.length) {
		let e = [...new Set(gn)].sort((e, t) => On(e) - On(t));
		if (gn.length = 0, _n) {
			_n.push(...e);
			return;
		}
		for (_n = e, vn = 0; vn < _n.length; vn++) {
			let e = _n[vn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		_n = null, vn = 0;
	}
}
var On = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function kn(e) {
	try {
		for (W = 0; W < U.length; W++) {
			let e = U[W];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), pn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; W < U.length; W++) {
			let e = U[W];
			e && (e.flags &= -2);
		}
		W = -1, U.length = 0, Dn(e), bn = null, (U.length || gn.length) && kn(e);
	}
}
var G = null, An = null;
function jn(e) {
	let t = G;
	return G = e, An = e && e.type.__scopeId || null, t;
}
function Mn(e, t = G, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ri(-1);
		let i = jn(t), a;
		try {
			a = e(...n);
		} finally {
			jn(i), r._d && Ri(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nn(e, t) {
	if (G === null) return e;
	let n = _a(G), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = h] = t[e];
		i && (w(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && fn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function Pn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (et(), H(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), tt());
	}
}
function Fn(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function In(e, t, n = !1) {
	let r = na();
	if (r || Vr) {
		let i = Vr ? Vr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && w(t) ? t.call(r && r.proxy) : t;
	}
}
var Ln = /* @__PURE__ */ Symbol.for("v-scx"), Rn = () => In(Ln);
function zn(e, t, n) {
	return Bn(e, t, n);
}
function Bn(e, t, n = h) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = x({}, n), c = t && r || !t && a !== "post", l;
	if (ca) {
		if (a === "sync") {
			let e = Rn();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = _, e.resume = _, e.pause = _, e;
		}
	}
	let u = $;
	s.call = (e, t, n) => H(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		q(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Cn(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = dn(e, t, s);
	return ca && (l ? l.push(f) : c && f()), f;
}
function Vn(e, t, n) {
	let r = this.proxy, i = T(e) ? e.includes(".") ? Hn(r, e) : () => r[e] : e.bind(r, r), a;
	w(t) ? a = t : (a = t.handler, n = t);
	let o = aa(this), s = Bn(i, a.bind(r), n);
	return o(), s;
}
function Hn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Un = /* @__PURE__ */ Symbol("_vte"), Wn = (e) => e.__isTeleport, Gn = /* @__PURE__ */ Symbol("_leaveCb");
function Kn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e, t) {
	return w(e) ? /* @__PURE__ */ x({ name: e.name }, t, { setup: e }) : e;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, t, n, r, i = !1) {
	if (C(e)) {
		e.forEach((e, a) => Zn(e, t && (C(t) ? t[a] : t), n, r, i));
		return;
	}
	if ($n(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Zn(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? _a(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === h ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ z(d), p = d === h ? v : (e) => Yn(u, e) ? !1 : S(f, e), m = (e, t) => !(t && Yn(u, t));
	if (l != null && l !== c) {
		if (Qn(t), T(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ V(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (w(c)) pn(c, s, 12, [o, u]);
	else {
		let t = T(c), r = /* @__PURE__ */ V(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) C(n) && ee(n, a);
					else if (C(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), q(t, n);
			} else Qn(e), s();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
xe().requestIdleCallback, xe().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0);
	fr(() => {
		ee(r[t], i);
	}, n);
}
function ar(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			et();
			let i = aa(n), a = H(t, n, e, r);
			return i(), tt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = $) => {
	(!ca || e === "sp") && ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = $) {
	ar("ec", e, t);
}
var _r = /* @__PURE__ */ Symbol.for("v-ndc");
function vr(e, t, n, r) {
	let i, a = n && n[r], o = C(e);
	if (o || T(e)) {
		let n = o && /* @__PURE__ */ Jt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ R(e), s = /* @__PURE__ */ L(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(B(e[n])) : B(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (D(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
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
var yr = (e) => e ? sa(e) ? _a(e) : yr(e.parent) : null, br = /* @__PURE__ */ x(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => yr(e.parent),
	$root: (e) => yr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => kr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Cn(e.update);
	},
	$nextTick: (e) => e.n ||= xn.bind(e.proxy),
	$watch: (e) => Vn.bind(e)
}), xr = (e, t) => e !== h && !e.__isScriptSetup && S(e, t), Sr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (xr(r, t)) return o[t] = 1, r[t];
			else if (i !== h && S(i, t)) return o[t] = 2, i[t];
			else if (S(a, t)) return o[t] = 3, a[t];
			else if (n !== h && S(n, t)) return o[t] = 4, n[t];
			else wr && (o[t] = 0);
		}
		let l = br[t], u, d;
		if (l) return t === "$attrs" && P(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== h && S(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, S(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return xr(i, t) ? (i[t] = n, !0) : r !== h && S(r, t) ? (r[t] = n, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== h && s[0] !== "$" && S(e, s) || xr(t, s) || S(a, s) || S(r, s) || S(br, s) || S(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? S(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Cr(e) {
	return C(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var wr = !0;
function Tr(e) {
	let t = kr(e), n = e.proxy, r = e.ctx;
	wr = !1, t.beforeCreate && Dr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: x, render: ee, renderTracked: te, renderTriggered: S, errorCaptured: ne, serverPrefetch: re, expose: ie, inheritAttrs: T, components: E, directives: ae, filters: oe } = t;
	if (l && Er(l, r, null), o) for (let e in o) {
		let t = o[e];
		w(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		D(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (wr = !0, a) for (let e in a) {
		let t = a[e], i = ya({
			get: w(t) ? t.bind(n, n) : w(t.get) ? t.get.bind(n, n) : _,
			set: !w(t) && w(t.set) ? t.set.bind(n) : _
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (s) for (let e in s) Or(s[e], r, n, e);
	if (c) {
		let e = w(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Fn(t, e[t]);
		});
	}
	u && Dr(u, e, "c");
	function O(e, t) {
		C(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(sr, d), O(cr, f), O(lr, p), O(ur, m), O(tr, h), O(nr, g), O(gr, ne), O(hr, te), O(mr, S), O(dr, y), O(fr, x), O(pr, re), C(ie)) if (ie.length) {
		let t = e.exposed ||= {};
		ie.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === _ && (e.render = ee), T != null && (e.inheritAttrs = T), E && (e.components = E), ae && (e.directives = ae), re && Jn(e);
}
function Er(e, t, n = _) {
	C(e) && (e = Pr(e));
	for (let n in e) {
		let r = e[n], i;
		i = D(r) ? "default" in r ? In(r.from || n, r.default, !0) : In(r.from || n) : In(r), /* @__PURE__ */ V(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Dr(e, t, n) {
	H(C(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Or(e, t, n, r) {
	let i = r.includes(".") ? Hn(n, r) : () => n[r];
	if (T(e)) {
		let n = t[e];
		w(n) && zn(i, n);
	} else if (w(e)) zn(i, e.bind(n));
	else if (D(e)) if (C(e)) e.forEach((e) => Or(e, t, n, r));
	else {
		let r = w(e.handler) ? e.handler.bind(n) : t[e.handler];
		w(r) && zn(i, r, e);
	}
}
function kr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ar(c, e, o, !0)), Ar(c, t, o)), D(t) && a.set(t, c), c;
}
function Ar(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ar(e, a, n, !0), i && i.forEach((t) => Ar(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = jr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var jr = {
	data: Mr,
	props: Ir,
	emits: Ir,
	methods: Fr,
	computed: Fr,
	beforeCreate: K,
	created: K,
	beforeMount: K,
	mounted: K,
	beforeUpdate: K,
	updated: K,
	beforeDestroy: K,
	beforeUnmount: K,
	destroyed: K,
	unmounted: K,
	activated: K,
	deactivated: K,
	errorCaptured: K,
	serverPrefetch: K,
	components: Fr,
	directives: Fr,
	watch: Lr,
	provide: Mr,
	inject: Nr
};
function Mr(e, t) {
	return t ? e ? function() {
		return x(w(e) ? e.call(this, this) : e, w(t) ? t.call(this, this) : t);
	} : t : e;
}
function Nr(e, t) {
	return Fr(Pr(e), Pr(t));
}
function Pr(e) {
	if (C(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function K(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Fr(e, t) {
	return e ? x(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ir(e, t) {
	return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : x(/* @__PURE__ */ Object.create(null), Cr(e), Cr(t ?? {})) : t;
}
function Lr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = x(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = K(e[r], t[r]);
	return n;
}
function Rr() {
	return {
		app: null,
		config: {
			isNativeTag: v,
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
var zr = 0;
function Br(e, t) {
	return function(n, r = null) {
		w(n) || (n = x({}, n)), r != null && !D(r) && (r = null);
		let i = Rr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: zr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ba,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && w(e.install) ? (a.add(e), e.install(c, ...t)) : w(e) && (a.add(e), e(c, ...t))), c;
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
					let u = c._ceVNode || Gi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, _a(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (H(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Vr;
				Vr = c;
				try {
					return e();
				} finally {
					Vr = t;
				}
			}
		};
		return c;
	};
}
var Vr = null, Hr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${me(t)}Modifiers`];
function Ur(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || h, i = n, a = t.startsWith("update:"), o = a && Hr(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => T(e) ? e.trim() : e)), o.number && (i = n.map(ye)));
	let s, c = r[s = ge(t)] || r[s = ge(k(t))];
	!c && a && (c = r[s = ge(me(t))]), c && H(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, H(l, e, 6, i);
	}
}
var Wr = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n = !1) {
	let r = n ? Wr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!w(e)) {
		let r = (e) => {
			let n = Gr(e, t, !0);
			n && (s = !0, x(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (D(e) && r.set(e, null), null) : (C(a) ? a.forEach((e) => o[e] = null) : x(o, a), D(e) && r.set(e, o), o);
}
function Kr(e, t) {
	return !e || !y(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, me(t)) || S(e, t));
}
function qr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = jn(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = Z(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = Z(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Jr(s);
		}
	} catch (t) {
		Pi.length = 0, mn(t, e, 1), _ = Gi(Mi);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(b) && (v = Yr(v, a)), y = Ji(y, v, !1, !0));
	}
	return n.dirs && (y = Ji(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(y, n.transition), _ = y, jn(g), _;
}
var Jr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || y(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Yr = (e, t) => {
	let n = {};
	for (let r in e) (!b(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Xr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Zr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Qr(o, r, n) && !Kr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Zr(r, o, l) : !0 : !!o;
	return !1;
}
function Zr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Qr(t, e, a) && !Kr(n, a)) return !0;
	}
	return !1;
}
function Qr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && D(r) && D(i) ? !Me(r, i) : r !== i;
}
function $r({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ei = {}, ti = () => Object.create(ei), ni = (e) => Object.getPrototypeOf(e) === ei;
function ri(e, t, n, r = !1) {
	let i = {}, a = ti();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ii(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ z(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Kr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (S(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = k(o);
					i[t] = oi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ai(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !S(t, a) && ((r = me(a)) === a || !S(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = oi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !S(t, e)) && (delete a[e], l = !0);
	}
	l && F(e.attrs, "set", "");
}
function ai(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (ue(c)) continue;
		let l = t[c], u;
		i && S(i, u = k(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Kr(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ z(n), r = s || h;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = oi(i, t, s, r[s], e, !S(r, s));
		}
	}
	return o;
}
function oi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = S(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && w(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = aa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === me(n)) && (r = !0));
	}
	return r;
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
	let r = n ? si : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!w(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = ci(e, t, !0);
			x(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return D(e) && r.set(e, g), g;
	if (C(a)) for (let e = 0; e < a.length; e++) {
		let t = k(a[e]);
		li(t) && (o[t] = h);
	}
	else if (a) for (let e in a) {
		let t = k(e);
		if (li(t)) {
			let n = a[e], r = o[t] = C(n) || w(n) ? { type: n } : x({}, n), i = r.type, c = !1, l = !0;
			if (C(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = w(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				} else n === "String" && (l = !1);
			}
			else c = w(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || S(r, "default")) && s.push(t);
		}
	}
	let l = [o, s];
	return D(e) && r.set(e, l), l;
}
function li(e) {
	return e[0] !== "$" && !ue(e);
}
var di = (e) => e === "_" || e === "_ctx" || e === "$stable", fi = (e) => C(e) ? e.map(Z) : [Z(e)], pi = (e, t, n) => {
	if (t._n) return t;
	let r = Mn((...e) => fi(t(...e)), n);
	return r._c = !1, r;
}, mi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (di(n)) continue;
		let i = e[n];
		if (w(i)) t[n] = pi(n, i, r);
		else if (i != null) {
			let e = fi(i);
			t[n] = () => e;
		}
	}
}, hi = (e, t) => {
	let n = fi(t);
	e.slots.default = () => n;
}, gi = (e, t, n) => {
	for (let r in t) (n || !di(r)) && (e[r] = t[r]);
}, _i = (e, t, n) => {
	let r = e.slots = ti();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (gi(r, t, n), n && ve(r, "_", e, !0)) : mi(t, r);
	} else t && hi(e, t);
}, vi = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = h;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : gi(i, t, n) : (a = !t.$stable, mi(t, i)), o = t;
	} else t && (hi(e, t), o = { default: 1 });
	if (a) for (let e in i) !di(e) && o[e] == null && delete i[e];
}, q = Ai;
function yi(e) {
	return bi(e);
}
function bi(e, t) {
	let n = xe();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = _, insertStaticContent: m } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Hi(e, t) && (r = A(e), k(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ji:
				y(e, t, n, r);
				break;
			case Mi:
				b(e, t, n, r);
				break;
			case Ni:
				e ?? x(t, n, r, o);
				break;
			case J:
				E(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? S(e, t, n, r, i, a, o, s, c) : d & 6 ? D(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be);
		}
		u != null && i ? Zn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Zn(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = f(e), r(e, n, i), e = a;
		r(t, n, i);
	}, te = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, S = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) C(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, C = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && re(e.children, f, null, i, s, xi(e, c), l, d), _ && Pn(e, null, i, "created"), ne(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !ue(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && Q(p, i, e);
		}
		_ && Pn(e, null, i, "beforeMount");
		let v = Ci(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && q(() => {
			try {
				p && Q(p, i, e), v && g.enter(f), _ && Pn(e, null, i, "mounted");
			} finally {}
		}, s);
	}, ne = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ki(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Xi(e[l]) : Z(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || h, m = t.props || h, g;
		if (n && Si(n, !1), (g = m.onVnodeBeforeUpdate) && Q(g, n, t, e), f && Pn(t, e, n, "beforeUpdate"), n && Si(n, !0), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? w(e.dynamicChildren, d, c, n, r, xi(t, i), o) : s || ce(e, t, c, null, n, r, xi(t, i), o, !1), l > 0) {
			if (l & 16) T(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && T(c, p, m, n, i);
		((g = m.onVnodeUpdated) || f) && q(() => {
			g && Q(g, n, t, e), f && Pn(t, e, n, "updated");
		}, r);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === J || !Hi(c, l) || c.shapeFlag & 198) ? d(c.el) : n, null, r, i, a, o, !0);
		}
	}, T = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== h) for (let o in t) !ue(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (ue(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, E = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), re(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && wi(e, t, !0)) : ce(e, t, n, f, a, o, c, l, u);
	}, D = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : oe(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = ta(e, r, i);
		if (er(e) && (s.ctx.renderer = be), la(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, O, o), !e.el) {
				let r = s.subTree = Gi(Mi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else O(s, e, t, n, i, a, o);
	}, oe = (e, t, n) => {
		let r = t.component = e.component;
		if (Xr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			se(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, O = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ei(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							q(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				Si(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && _e(n), (f = t.props && t.props.onVnodeBeforeUpdate) && Q(f, s, t, c), Si(e, !0);
				let p = qr(e), m = e.subTree;
				e.subTree = p, v(m, p, d(m.el), A(m), e, i, a), t.el = p.el, u === null && $r(e, p.el), r && q(r, i), (f = t.props && t.props.onVnodeUpdated) && q(() => Q(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (Si(e, !1), l && _e(l), !m && (o = c && c.onVnodeBeforeMount) && Q(o, d, t), Si(e, !0), s && Ce) {
					let t = () => {
						e.subTree = qr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = qr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && q(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					q(() => Q(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && q(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Be(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Cn(u), Si(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ii(e, t.props, r, n), vi(e, t.children, n), et(), En(e), tt();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				de(l, f, n, r, i, a, o, s, c);
				return;
			} else if (p & 256) {
				le(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ge(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? de(l, f, n, r, i, a, o, s, c) : ge(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && re(f, n, r, i, a, o, s, c));
	}, le = (e, t, n, r, i, a, o, s, c) => {
		e ||= g, t ||= g;
		let l = e.length, u = t.length, d = Math.min(l, u), f;
		for (f = 0; f < d; f++) {
			let r = t[f] = c ? Xi(t[f]) : Z(t[f]);
			v(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ge(e, i, a, !0, !1, d) : re(t, n, r, i, a, o, s, c, d);
	}, de = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? Xi(t[l]) : Z(t[l]);
			if (Hi(r, u)) v(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? Xi(t[f]) : Z(t[f]);
			if (Hi(r, l)) v(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) v(null, t[l] = c ? Xi(t[l]) : Z(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) k(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, h = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? Xi(t[l]) : Z(t[l]);
				e.key != null && h.set(e.key, l);
			}
			let _, y = 0, b = f - m + 1, x = !1, ee = 0, te = Array(b);
			for (l = 0; l < b; l++) te[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (y >= b) {
					k(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = h.get(r.key);
				else for (_ = m; _ <= f; _++) if (te[_ - m] === 0 && Hi(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? k(r, i, a, !0) : (te[u - m] = l + 1, u >= ee ? ee = u : x = !0, v(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let S = x ? Ti(te) : g;
			for (_ = S.length - 1, l = b - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || Oi(f) : r;
				te[l] === 0 ? v(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== S[_] ? fe(d, n, p, 2) : _--);
			}
		}
	}, fe = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			fe(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, be);
			return;
		}
		if (c === J) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Ni) {
			ee(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) if (a === 0) l.beforeEnter(s), r(s, t, n), q(() => l.enter(s), o);
		else {
			let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? i(s) : r(s, t, n);
			}, d = () => {
				s._isLeaving && s[Gn](!0), a(s, () => {
					u(), c && c();
				});
			};
			o ? o(s, u, d) : d();
		}
		else r(s, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (et(), Zn(s, null, n, e, !0), tt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) he(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Pn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== J || d > 0 && d & 64) ? ge(l, t, n, !1, !0) : (a === J && d & 384 || !i && u & 16) && ge(c, t, n), r && pe(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && q(() => {
			_ && Q(_, t, e), h && Pn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, pe = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === J) {
			me(n, r);
			return;
		}
		if (t === Ni) {
			te(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, me = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, he = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Di(c), Di(l), r && _e(r), i.stop(), a && (a.flags |= 8, k(o, e, t, n)), s && q(s, t), q(() => {
			e.isUnmounted = !0;
		}, t);
	}, ge = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, A = (e) => {
		if (e.shapeFlag & 6) return A(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[Un];
		return n ? f(n) : t;
	}, ve = !1, ye = (e, t, n) => {
		let r;
		e == null ? t._vnode && (k(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ve ||= (ve = !0, En(r), Dn(), !1);
	}, be = {
		p: v,
		um: k,
		m: fe,
		r: pe,
		mt: ae,
		mc: re,
		pc: ce,
		pbc: w,
		n: A,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(be)), {
		render: ye,
		hydrate: Se,
		createApp: Br(ye, Se)
	};
}
function xi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Si({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ci(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (C(r) && C(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Xi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && wi(t, a)), a.type === ji && (a.patchFlag === -1 && (a = i[e] = Xi(a)), a.el = t.el), a.type === Mi && !a.el && (a.el = t.el);
	}
}
function Ti(e) {
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
function Ei(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
function Di(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Oi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Oi(t.subTree) : null;
}
var ki = (e) => e.__isSuspense;
function Ai(e, t) {
	t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Tn(e);
}
var J = /* @__PURE__ */ Symbol.for("v-fgt"), ji = /* @__PURE__ */ Symbol.for("v-txt"), Mi = /* @__PURE__ */ Symbol.for("v-cmt"), Ni = /* @__PURE__ */ Symbol.for("v-stc"), Pi = [], Y = null;
function Fi(e = !1) {
	Pi.push(Y = e ? null : []);
}
function Ii() {
	Pi.pop(), Y = Pi[Pi.length - 1] || null;
}
var Li = 1;
function Ri(e, t = !1) {
	Li += e, e < 0 && Y && t && (Y.hasOnce = !0);
}
function zi(e) {
	return e.dynamicChildren = Li > 0 ? Y || g : null, Ii(), Li > 0 && Y && Y.push(e), e;
}
function Bi(e, t, n, r, i, a) {
	return zi(X(e, t, n, r, i, a, !0));
}
function Vi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Hi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ui = ({ key: e }) => e ?? null, Wi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : T(e) || /* @__PURE__ */ V(e) || w(e) ? {
	i: G,
	r: e,
	k: t,
	f: !!n
} : e);
function X(e, t = null, n = null, r = 0, i = null, a = e === J ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ui(t),
		ref: t && Wi(t),
		scopeId: An,
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
		ctx: G
	};
	return s ? (Zi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= T(n) ? 8 : 16), Li > 0 && !o && Y && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Y.push(c), c;
}
var Gi = Ki;
function Ki(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === _r) && (e = Mi), Vi(e)) {
		let r = Ji(e, t, !0);
		return n && Zi(r, n), Li > 0 && !a && Y && (r.shapeFlag & 6 ? Y[Y.indexOf(e)] = r : Y.push(r)), r.patchFlag = -2, r;
	}
	if (va(e) && (e = e.__vccOpts), t) {
		t = qi(t);
		let { class: e, style: n } = t;
		e && !T(e) && (t.class = De(e)), D(n) && (/* @__PURE__ */ Yt(n) && !C(n) && (n = x({}, n)), t.style = Se(n));
	}
	let o = T(e) ? 1 : ki(e) ? 128 : Wn(e) ? 64 : D(e) ? 4 : w(e) ? 2 : 0;
	return X(e, t, n, r, i, o, a, !0);
}
function qi(e) {
	return e ? /* @__PURE__ */ Yt(e) || ni(e) ? x({}, e) : e : null;
}
function Ji(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Qi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ui(l),
		ref: t && t.ref ? n && a ? C(a) ? a.concat(Wi(t)) : [a, Wi(t)] : Wi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== J ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ji(e.ssContent),
		ssFallback: e.ssFallback && Ji(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Kn(u, c.clone(u)), u;
}
function Yi(e = " ", t = 0) {
	return Gi(ji, null, e, t);
}
function Z(e) {
	return e == null || typeof e == "boolean" ? Gi(Mi) : C(e) ? Gi(J, null, e.slice()) : Vi(e) ? Xi(e) : Gi(ji, null, String(e));
}
function Xi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Zi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (C(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Zi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ni(t) ? t._ctx = G : r === 3 && G && (G.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else w(t) ? (t = {
		default: t,
		_ctx: G
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Yi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Qi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = De([t.class, r.class]));
		else if (e === "style") t.style = Se([t.style, r.style]);
		else if (y(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(C(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !b(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Q(e, t, n, r = null) {
	H(e, t, 7, [n, r]);
}
var $i = Rr(), ea = 0;
function ta(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || $i, a = {
		uid: ea++,
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
		scope: new Le(!0),
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
		propsOptions: ci(r, i),
		emitsOptions: Gr(r, i),
		emit: null,
		emitted: null,
		propsDefaults: h,
		inheritAttrs: r.inheritAttrs,
		ctx: h,
		data: h,
		props: h,
		attrs: h,
		slots: h,
		refs: h,
		setupState: h,
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
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Ur.bind(null, a), e.ce && e.ce(a), a;
}
var $ = null, na = () => $ || G, ra, ia;
{
	let e = xe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ra = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), ia = t("__VUE_SSR_SETTERS__", (e) => ca = e);
}
var aa = (e) => {
	let t = $;
	return ra(e), e.scope.on(), () => {
		e.scope.off(), ra(t);
	};
}, oa = () => {
	$ && $.scope.off(), ra(null);
};
function sa(e) {
	return e.vnode.shapeFlag & 4;
}
var ca = !1;
function la(e, t = !1, n = !1) {
	t && ia(t);
	let { props: r, children: i } = e.vnode, a = sa(e);
	ri(e, r, a, t), _i(e, i, n || t);
	let o = a ? ua(e, t) : void 0;
	return t && ia(!1), o;
}
function ua(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sr);
	let { setup: r } = n;
	if (r) {
		et();
		let n = e.setupContext = r.length > 1 ? ga(e) : null, i = aa(e), a = pn(r, e, 0, [e.props, n]), o = ae(a);
		if (tt(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(oa, oa), t) return a.then((n) => {
				da(e, n, t);
			}).catch((t) => {
				mn(t, e, 0);
			});
			e.asyncDep = a;
		} else da(e, a, t);
	} else ma(e, t);
}
function da(e, t, n) {
	w(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : D(t) && (e.setupState = rn(t)), ma(e, n);
}
var fa, pa;
function ma(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && fa && !r.render) {
			let t = r.template || kr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = fa(t, x(x({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || _, pa && pa(e);
	}
	{
		let t = aa(e);
		et();
		try {
			Tr(e);
		} finally {
			tt(), t();
		}
	}
}
var ha = { get(e, t) {
	return P(e, "get", ""), e[t];
} };
function ga(e) {
	return {
		attrs: new Proxy(e.attrs, ha),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function _a(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(rn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in br) return br[n](e);
		},
		has(e, t) {
			return t in e || t in br;
		}
	}) : e.proxy;
}
function va(e) {
	return w(e) && "__vccOpts" in e;
}
var ya = (e, t) => /* @__PURE__ */ on(e, t, ca), ba = "3.5.34", xa = void 0, Sa = typeof window < "u" && window.trustedTypes;
if (Sa) try {
	xa = /* @__PURE__ */ Sa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ca = xa ? (e) => xa.createHTML(e) : (e) => e, wa = "http://www.w3.org/2000/svg", Ta = "http://www.w3.org/1998/Math/MathML", Ea = typeof document < "u" ? document : null, Da = Ea && /* @__PURE__ */ Ea.createElement("template"), Oa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ea.createElementNS(wa, e) : t === "mathml" ? Ea.createElementNS(Ta, e) : n ? Ea.createElement(e, { is: n }) : Ea.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ea.createTextNode(e),
	createComment: (e) => Ea.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ea.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Da.innerHTML = Ca(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Da.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ka = /* @__PURE__ */ Symbol("_vtc");
function Aa(e, t, n) {
	let r = e[ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ja = /* @__PURE__ */ Symbol("_vod"), Ma = /* @__PURE__ */ Symbol("_vsh"), Na = /* @__PURE__ */ Symbol(""), Pa = /(?:^|;)\s*display\s*:/;
function Fa(e, t, n) {
	let r = e.style, i = T(n), a = !1;
	if (n && !i) {
		if (t) if (T(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? La(r, t, "");
		}
		else for (let e in t) n[e] ?? La(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? La(r, i, "") : Va(e, i, !T(t) && t ? t[i] : void 0, o) || La(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Na];
			e && (n += ";" + e), r.cssText = n, a = Pa.test(n);
		}
	} else t && e.removeAttribute("style");
	ja in e && (e[ja] = a ? r.display : "", e[Ma] && (r.display = "none"));
}
var Ia = /\s*!important$/;
function La(e, t, n) {
	if (C(n)) n.forEach((n) => La(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ba(e, t);
		Ia.test(n) ? e.setProperty(me(r), n.replace(Ia, ""), "important") : e[r] = n;
	}
}
var Ra = [
	"Webkit",
	"Moz",
	"ms"
], za = {};
function Ba(e, t) {
	let n = za[t];
	if (n) return n;
	let r = k(t);
	if (r !== "filter" && r in e) return za[t] = r;
	r = he(r);
	for (let n = 0; n < Ra.length; n++) {
		let i = Ra[n] + r;
		if (i in e) return za[t] = i;
	}
	return t;
}
function Va(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && T(r) && n === r;
}
var Ha = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, r, i, a = ke(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ha, t.slice(6, t.length)) : e.setAttributeNS(Ha, t, n) : n == null || a && !Ae(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : E(n) ? String(n) : n);
}
function Wa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ca(n) : n);
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
		r === "boolean" ? n = Ae(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ga(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ka(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var qa = /* @__PURE__ */ Symbol("_vei");
function Ja(e, t, n, r, i = null) {
	let a = e[qa] || (e[qa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Xa(t);
		r ? Ga(e, n, a[t] = eo(r, i), s) : o && (Ka(e, n, o, s), a[t] = void 0);
	}
}
var Ya = /(?:Once|Passive|Capture)$/;
function Xa(e) {
	let t;
	if (Ya.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ya);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : me(e.slice(2)), t];
}
var Za = 0, Qa = /* @__PURE__ */ Promise.resolve(), $a = () => Za ||= (Qa.then(() => Za = 0), Date.now());
function eo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		H(to(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = $a(), n;
}
function to(e, t) {
	if (C(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var no = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ro = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Aa(e, r, o) : t === "style" ? Fa(e, n, r) : y(t) ? b(t) || Ja(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : io(e, t, r, o)) ? (Wa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, r, o, a, t !== "value")) : e._isVueCE && (ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !T(r))) ? Wa(e, k(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ua(e, t, r, o));
};
function io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && w(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return no(t) && T(n) ? !1 : t in e;
}
function ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = k(t);
	return Array.isArray(n) ? n.some((e) => k(e) === r) : Object.keys(n).some((e) => k(e) === r);
}
var oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return C(t) ? (e) => _e(t, e) : t;
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
	return t && (e = e.trim()), n && (e = ye(e)), e;
}
var fo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[lo] = oo(i);
		let a = r || i.props && i.props.type === "number";
		Ga(e, t ? "change" : "input", (t) => {
			t.target.composing || e[lo](uo(e.value, n, a));
		}), (n || a) && Ga(e, "change", () => {
			e.value = uo(e.value, n, a);
		}), t || (Ga(e, "compositionstart", so), Ga(e, "compositionend", co), Ga(e, "change", co));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[lo] = oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ye(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = /* @__PURE__ */ x({ patchProp: ro }, Oa), mo;
function ho() {
	return mo ||= yi(po);
}
var go = ((...e) => {
	let t = ho().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = vo(e);
		if (!r) return;
		let i = t._component;
		!w(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, _o(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function _o(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function vo(e) {
	return T(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/apps/fear-terror-workbench/FearTerrorWorkbenchApp.vue?vue&type=script&setup=true&lang.ts
var yo = { class: "eft-workbench" }, bo = {
	class: "eft-workbench__controls",
	"aria-label": "Fear and Terror setup"
}, xo = { class: "eft-field" }, So = {
	class: "eft-segmented",
	role: "group",
	"aria-label": "Effect type"
}, Co = { class: "eft-field" }, wo = { class: "eft-field eft-field--wide" }, To = {
	class: "eft-workbench__targets",
	"aria-label": "Selected actors"
}, Eo = {
	key: 0,
	class: "eft-target-list"
}, Do = {
	key: 1,
	class: "eft-empty"
}, Oo = { class: "eft-workbench__actions" }, ko = ["disabled"], Ao = ["disabled"], jo = ["disabled"], Mo = /* @__PURE__ */ qn({
	__name: "FearTerrorWorkbenchApp",
	props: {
		initialPayload: {},
		onActionComplete: { type: Function }
	},
	setup(e) {
		let t = e, o = /* @__PURE__ */ Qt(t.initialPayload?.type ?? "fear"), s = /* @__PURE__ */ Qt(t.initialPayload?.rating ?? 1), c = /* @__PURE__ */ Qt(t.initialPayload?.source ?? ""), l = /* @__PURE__ */ Qt(n()), u = /* @__PURE__ */ Qt(!1), d = ya(() => ({
			rating: s.value,
			source: c.value,
			type: o.value
		})), f = ya(() => o.value === "fear" ? "Fear" : "Terror");
		function p() {
			l.value = n();
		}
		async function m(e) {
			u.value = !0;
			try {
				await e(), p(), t.onActionComplete?.();
			} finally {
				u.value = !1;
			}
		}
		return (e, t) => (Fi(), Bi("main", yo, [
			t[15] ||= X("header", { class: "eft-workbench__header" }, [X("p", null, "WFRP4e"), X("h1", null, "Enhanced Fear & Terror")], -1),
			X("section", bo, [
				X("div", xo, [t[7] ||= X("label", null, "Effect", -1), X("div", So, [X("button", {
					class: De({ "is-active": o.value === "fear" }),
					type: "button",
					onClick: t[0] ||= (e) => o.value = "fear"
				}, " Fear ", 2), X("button", {
					class: De({ "is-active": o.value === "terror" }),
					type: "button",
					onClick: t[1] ||= (e) => o.value = "terror"
				}, " Terror ", 2)])]),
				X("label", Co, [t[8] ||= X("span", null, "Rating", -1), Nn(X("input", {
					"onUpdate:modelValue": t[2] ||= (e) => s.value = e,
					min: "0",
					step: "1",
					type: "number"
				}, null, 512), [[
					fo,
					s.value,
					void 0,
					{ number: !0 }
				]])]),
				X("label", wo, [t[9] ||= X("span", { class: "eft-label-with-help" }, [X("span", null, "Source"), X("i", {
					"aria-label": "Fear source naming note",
					class: "fa-solid fa-circle-question eft-help-icon",
					"data-tooltip": "Fear source matching is name-based. Use a shared name like Ghouls for a pack, or a unique name when only one creature should count.",
					tabindex: "0"
				})], -1), Nn(X("input", {
					"onUpdate:modelValue": t[3] ||= (e) => c.value = e,
					autocomplete: "off",
					placeholder: "Actor, ability, scene hazard",
					type: "text"
				}, null, 512), [[fo, c.value]])])
			]),
			X("section", To, [X("div", { class: "eft-section-title" }, [t[11] ||= X("h2", null, "Recipients", -1), X("button", {
				type: "button",
				onClick: p
			}, [...t[10] ||= [X("i", {
				class: "fa-solid fa-rotate-right",
				"aria-hidden": "true"
			}, null, -1), X("span", null, "Refresh", -1)]])]), l.value.length ? (Fi(), Bi("ul", Eo, [(Fi(!0), Bi(J, null, vr(l.value, (e) => (Fi(), Bi("li", { key: e.id }, [X("span", null, Pe(e.name), 1), X("small", null, Pe(e.source), 1)]))), 128))])) : (Fi(), Bi("p", Do, " Target or control tokens to apply " + Pe(f.value) + " directly. ", 1))]),
			X("footer", Oo, [
				X("button", {
					type: "button",
					disabled: u.value,
					onClick: t[4] ||= (e) => m(() => tn(i)(d.value))
				}, [...t[12] ||= [X("i", {
					class: "fa-solid fa-message",
					"aria-hidden": "true"
				}, null, -1), X("span", null, "Post Card", -1)]], 8, ko),
				X("button", {
					type: "button",
					disabled: u.value,
					onClick: t[5] ||= (e) => m(() => tn(a)(d.value))
				}, [...t[13] ||= [X("i", {
					class: "fa-solid fa-list-check",
					"aria-hidden": "true"
				}, null, -1), X("span", null, "Post Link", -1)]], 8, Ao),
				X("button", {
					class: "eft-primary",
					type: "button",
					disabled: u.value,
					onClick: t[6] ||= (e) => m(() => tn(r)(d.value))
				}, [...t[14] ||= [X("i", {
					class: "fa-solid fa-bolt",
					"aria-hidden": "true"
				}, null, -1), X("span", null, "Apply", -1)]], 8, jo)
			])
		]));
	}
}), No = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-eft-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-eft-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = go(this.getVueComponent(), r), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Po = class extends No {
	#e;
	constructor(e = {}) {
		super(), this.#e = e;
	}
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${e}-workbench`,
		classes: [e, "wfrp4e-eft-workbench"],
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-skull",
			title: "WFRP4e Enhanced Fear & Terror"
		}
	};
	getVueComponent() {
		return Mo;
	}
	getVueProps() {
		return {
			initialPayload: this.#e.initialPayload,
			onActionComplete: () => {
				this.close();
			}
		};
	}
};
//#endregion
//#region src/module/create-module-api.ts
function Fo() {
	return {
		applyToSelectedActors: r,
		openWorkbench: Io,
		postPrompt: i
	};
}
async function Io(e = {}) {
	let t = new Po(e);
	return await t.render(!0), t;
}
//#endregion
//#region src/module/fear-terror/infer-actor-psychology.ts
function Lo(e) {
	let t = zo(e, "CHAT.Terror");
	if (t !== void 0) return Ro("terror", t, e.name);
	let n = zo(e, "CHAT.Fear");
	return n === void 0 ? Ro("fear", 1, e.name) : Ro("fear", n, e.name);
}
function Ro(e, t, n) {
	return {
		rating: t,
		source: n,
		type: e
	};
}
function zo(e, t) {
	let n = (e.has?.(game.i18n.localize(t)))?.specification?.value;
	if (typeof n == "number") return n;
	if (typeof n == "string") {
		let e = Number(n);
		if (Number.isFinite(e)) return e;
	}
}
//#endregion
//#region src/module/register-actor-sheet-header.ts
var Bo = "openFearTerrorWorkbench", Vo = "wfrp4e-enhanced-fear-terror-actor-header", Ho = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], Uo = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
];
function Wo() {
	for (let e of Ho) Hooks.on(e, (e, t) => {
		Go(e, t);
	});
	for (let e of Uo) Hooks.on(e, (e) => {
		Ko(e);
	});
}
function Go(e, t) {
	let n = e.document;
	!n || n.documentName !== "Actor" || t.some((e) => e.action === Bo) || (t.push({
		action: Bo,
		icon: "fa-solid fa-skull",
		label: "Fear & Terror"
	}), e.options.actions ??= {}, e.options.actions[Bo] = function() {
		qo(this.document);
	});
}
function Ko(e) {
	let t = e.document;
	if (!t || t.documentName !== "Actor") return;
	let n = e.element;
	if (!(n instanceof HTMLElement)) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${Vo}`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(Vo, "header-control", "icon", "fa-solid", "fa-skull"), i.dataset.action = Bo, i.dataset.tooltip = "Fear & Terror", i.ariaLabel = "Fear & Terror", i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), qo(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function qo(e) {
	new Po({ initialPayload: Lo(e) }).render(!0);
}
//#endregion
//#region src/module/register-module-menus.ts
function Jo() {
	game.settings.registerMenu(e, "workbench", {
		hint: "WFRP4E_EFT.Menu.Workbench.Hint",
		icon: "fa-solid fa-skull",
		label: "WFRP4E_EFT.Menu.Workbench.Label",
		name: "WFRP4E_EFT.Menu.Workbench.Name",
		restricted: !0,
		type: Po
	});
}
//#endregion
//#region src/module/register-scene-controls.ts
var Yo = "openFearTerrorWorkbench";
function Xo() {
	Hooks.on("getSceneControlButtons", (e) => {
		Zo(e);
	});
}
function Zo(t) {
	let n = t.tokens;
	n && (n.tools[Yo] = {
		icon: "fa-solid fa-skull",
		name: Yo,
		onChange: () => {
			new Po().render(!0);
		},
		title: "Fear & Terror"
	}, n.tools[Yo].button = !0, n.tools[Yo].order = 99, n.tools[Yo].toolclip = { content: `${e}.scene-controls.open-workbench` });
}
Hooks.once("init", () => {
	console.info(`${e} | Initializing`), Jo(), Wo(), Xo();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		console.warn(`${e} | Loaded outside ${t}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get(e);
	if (!n) {
		console.warn(`${e} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = Fo(), console.info(`${e} | Ready`);
});
//#endregion
