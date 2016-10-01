// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec,x);
} else {
var m__24317__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec,y);
} else {
var m__24317__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec,path,via,in$,x);
} else {
var m__24317__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__24317__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec,gfn);
} else {
var m__24317__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__24316__auto__ = (((spec == null))?null:spec);
var m__24317__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,spec);
} else {
var m__24317__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__25981 = cljs.core.get.call(null,reg,spec);
spec = G__25981;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__23603__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__23591__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__23591__auto__){
return x;
} else {
return and__23591__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__23591__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__23591__auto__)){
return x;
} else {
return and__23591__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__23603__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var or__23603__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
var or__23603__auto____$2 = (function (){var and__23591__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__23591__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(or__23603__auto____$2)){
return or__23603__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__23603__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__23603__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__23591__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__23591__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__23591__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__23591__auto__ = (form instanceof cljs.core.Symbol);
if(and__23591__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__23591__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6369__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6369__auto__)){
var probs = temp__6369__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__24687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26032_26078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26033_26079 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26032_26078,_STAR_print_fn_STAR_26033_26079,sb__24687__auto__){
return (function (x__24688__auto__){
return sb__24687__auto__.append(x__24688__auto__);
});})(_STAR_print_newline_STAR_26032_26078,_STAR_print_fn_STAR_26033_26079,sb__24687__auto__))
;

try{var seq__26034_26080 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__26035_26081 = null;
var count__26036_26082 = (0);
var i__26037_26083 = (0);
while(true){
if((i__26037_26083 < count__26036_26082)){
var vec__26038_26084 = cljs.core._nth.call(null,chunk__26035_26081,i__26037_26083);
var path_26085 = cljs.core.nth.call(null,vec__26038_26084,(0),null);
var map__26041_26086 = cljs.core.nth.call(null,vec__26038_26084,(1),null);
var map__26041_26087__$1 = ((((!((map__26041_26086 == null)))?((((map__26041_26086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26041_26086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26041_26086):map__26041_26086);
var prob_26088 = map__26041_26087__$1;
var pred_26089 = cljs.core.get.call(null,map__26041_26087__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_26090 = cljs.core.get.call(null,map__26041_26087__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_26091 = cljs.core.get.call(null,map__26041_26087__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_26092 = cljs.core.get.call(null,map__26041_26087__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_26093 = cljs.core.get.call(null,map__26041_26087__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_26093)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_26093),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_26090);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_26092)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_26092)));
}

if(cljs.core.empty_QMARK_.call(null,path_26085)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_26085));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_26089);

if(cljs.core.truth_(reason_26091)){
cljs.core.print.call(null,", ",reason_26091);
} else {
}

var seq__26043_26094 = cljs.core.seq.call(null,prob_26088);
var chunk__26044_26095 = null;
var count__26045_26096 = (0);
var i__26046_26097 = (0);
while(true){
if((i__26046_26097 < count__26045_26096)){
var vec__26047_26098 = cljs.core._nth.call(null,chunk__26044_26095,i__26046_26097);
var k_26099 = cljs.core.nth.call(null,vec__26047_26098,(0),null);
var v_26100 = cljs.core.nth.call(null,vec__26047_26098,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26099))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26099)," ");

cljs.core.pr.call(null,v_26100);
}

var G__26101 = seq__26043_26094;
var G__26102 = chunk__26044_26095;
var G__26103 = count__26045_26096;
var G__26104 = (i__26046_26097 + (1));
seq__26043_26094 = G__26101;
chunk__26044_26095 = G__26102;
count__26045_26096 = G__26103;
i__26046_26097 = G__26104;
continue;
} else {
var temp__6369__auto___26105 = cljs.core.seq.call(null,seq__26043_26094);
if(temp__6369__auto___26105){
var seq__26043_26106__$1 = temp__6369__auto___26105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26043_26106__$1)){
var c__24506__auto___26107 = cljs.core.chunk_first.call(null,seq__26043_26106__$1);
var G__26108 = cljs.core.chunk_rest.call(null,seq__26043_26106__$1);
var G__26109 = c__24506__auto___26107;
var G__26110 = cljs.core.count.call(null,c__24506__auto___26107);
var G__26111 = (0);
seq__26043_26094 = G__26108;
chunk__26044_26095 = G__26109;
count__26045_26096 = G__26110;
i__26046_26097 = G__26111;
continue;
} else {
var vec__26050_26112 = cljs.core.first.call(null,seq__26043_26106__$1);
var k_26113 = cljs.core.nth.call(null,vec__26050_26112,(0),null);
var v_26114 = cljs.core.nth.call(null,vec__26050_26112,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26113))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26113)," ");

cljs.core.pr.call(null,v_26114);
}

var G__26115 = cljs.core.next.call(null,seq__26043_26106__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__26043_26094 = G__26115;
chunk__26044_26095 = G__26116;
count__26045_26096 = G__26117;
i__26046_26097 = G__26118;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__26119 = seq__26034_26080;
var G__26120 = chunk__26035_26081;
var G__26121 = count__26036_26082;
var G__26122 = (i__26037_26083 + (1));
seq__26034_26080 = G__26119;
chunk__26035_26081 = G__26120;
count__26036_26082 = G__26121;
i__26037_26083 = G__26122;
continue;
} else {
var temp__6369__auto___26123 = cljs.core.seq.call(null,seq__26034_26080);
if(temp__6369__auto___26123){
var seq__26034_26124__$1 = temp__6369__auto___26123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26034_26124__$1)){
var c__24506__auto___26125 = cljs.core.chunk_first.call(null,seq__26034_26124__$1);
var G__26126 = cljs.core.chunk_rest.call(null,seq__26034_26124__$1);
var G__26127 = c__24506__auto___26125;
var G__26128 = cljs.core.count.call(null,c__24506__auto___26125);
var G__26129 = (0);
seq__26034_26080 = G__26126;
chunk__26035_26081 = G__26127;
count__26036_26082 = G__26128;
i__26037_26083 = G__26129;
continue;
} else {
var vec__26053_26130 = cljs.core.first.call(null,seq__26034_26124__$1);
var path_26131 = cljs.core.nth.call(null,vec__26053_26130,(0),null);
var map__26056_26132 = cljs.core.nth.call(null,vec__26053_26130,(1),null);
var map__26056_26133__$1 = ((((!((map__26056_26132 == null)))?((((map__26056_26132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26056_26132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26056_26132):map__26056_26132);
var prob_26134 = map__26056_26133__$1;
var pred_26135 = cljs.core.get.call(null,map__26056_26133__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_26136 = cljs.core.get.call(null,map__26056_26133__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_26137 = cljs.core.get.call(null,map__26056_26133__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_26138 = cljs.core.get.call(null,map__26056_26133__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_26139 = cljs.core.get.call(null,map__26056_26133__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_26139)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_26139),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_26136);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_26138)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_26138)));
}

if(cljs.core.empty_QMARK_.call(null,path_26131)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_26131));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_26135);

if(cljs.core.truth_(reason_26137)){
cljs.core.print.call(null,", ",reason_26137);
} else {
}

var seq__26058_26140 = cljs.core.seq.call(null,prob_26134);
var chunk__26059_26141 = null;
var count__26060_26142 = (0);
var i__26061_26143 = (0);
while(true){
if((i__26061_26143 < count__26060_26142)){
var vec__26062_26144 = cljs.core._nth.call(null,chunk__26059_26141,i__26061_26143);
var k_26145 = cljs.core.nth.call(null,vec__26062_26144,(0),null);
var v_26146 = cljs.core.nth.call(null,vec__26062_26144,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26145))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26145)," ");

cljs.core.pr.call(null,v_26146);
}

var G__26147 = seq__26058_26140;
var G__26148 = chunk__26059_26141;
var G__26149 = count__26060_26142;
var G__26150 = (i__26061_26143 + (1));
seq__26058_26140 = G__26147;
chunk__26059_26141 = G__26148;
count__26060_26142 = G__26149;
i__26061_26143 = G__26150;
continue;
} else {
var temp__6369__auto___26151__$1 = cljs.core.seq.call(null,seq__26058_26140);
if(temp__6369__auto___26151__$1){
var seq__26058_26152__$1 = temp__6369__auto___26151__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26058_26152__$1)){
var c__24506__auto___26153 = cljs.core.chunk_first.call(null,seq__26058_26152__$1);
var G__26154 = cljs.core.chunk_rest.call(null,seq__26058_26152__$1);
var G__26155 = c__24506__auto___26153;
var G__26156 = cljs.core.count.call(null,c__24506__auto___26153);
var G__26157 = (0);
seq__26058_26140 = G__26154;
chunk__26059_26141 = G__26155;
count__26060_26142 = G__26156;
i__26061_26143 = G__26157;
continue;
} else {
var vec__26065_26158 = cljs.core.first.call(null,seq__26058_26152__$1);
var k_26159 = cljs.core.nth.call(null,vec__26065_26158,(0),null);
var v_26160 = cljs.core.nth.call(null,vec__26065_26158,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_26159))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_26159)," ");

cljs.core.pr.call(null,v_26160);
}

var G__26161 = cljs.core.next.call(null,seq__26058_26152__$1);
var G__26162 = null;
var G__26163 = (0);
var G__26164 = (0);
seq__26058_26140 = G__26161;
chunk__26059_26141 = G__26162;
count__26060_26142 = G__26163;
i__26061_26143 = G__26164;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__26165 = cljs.core.next.call(null,seq__26034_26124__$1);
var G__26166 = null;
var G__26167 = (0);
var G__26168 = (0);
seq__26034_26080 = G__26165;
chunk__26035_26081 = G__26166;
count__26036_26082 = G__26167;
i__26037_26083 = G__26168;
continue;
}
} else {
}
}
break;
}

var seq__26068_26169 = cljs.core.seq.call(null,ed);
var chunk__26069_26170 = null;
var count__26070_26171 = (0);
var i__26071_26172 = (0);
while(true){
if((i__26071_26172 < count__26070_26171)){
var vec__26072_26173 = cljs.core._nth.call(null,chunk__26069_26170,i__26071_26172);
var k_26174 = cljs.core.nth.call(null,vec__26072_26173,(0),null);
var v_26175 = cljs.core.nth.call(null,vec__26072_26173,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_26174))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_26174)," ");

cljs.core.pr.call(null,v_26175);

cljs.core.newline.call(null);
}

var G__26176 = seq__26068_26169;
var G__26177 = chunk__26069_26170;
var G__26178 = count__26070_26171;
var G__26179 = (i__26071_26172 + (1));
seq__26068_26169 = G__26176;
chunk__26069_26170 = G__26177;
count__26070_26171 = G__26178;
i__26071_26172 = G__26179;
continue;
} else {
var temp__6369__auto___26180 = cljs.core.seq.call(null,seq__26068_26169);
if(temp__6369__auto___26180){
var seq__26068_26181__$1 = temp__6369__auto___26180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26068_26181__$1)){
var c__24506__auto___26182 = cljs.core.chunk_first.call(null,seq__26068_26181__$1);
var G__26183 = cljs.core.chunk_rest.call(null,seq__26068_26181__$1);
var G__26184 = c__24506__auto___26182;
var G__26185 = cljs.core.count.call(null,c__24506__auto___26182);
var G__26186 = (0);
seq__26068_26169 = G__26183;
chunk__26069_26170 = G__26184;
count__26070_26171 = G__26185;
i__26071_26172 = G__26186;
continue;
} else {
var vec__26075_26187 = cljs.core.first.call(null,seq__26068_26181__$1);
var k_26188 = cljs.core.nth.call(null,vec__26075_26187,(0),null);
var v_26189 = cljs.core.nth.call(null,vec__26075_26187,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_26188))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_26188)," ");

cljs.core.pr.call(null,v_26189);

cljs.core.newline.call(null);
}

var G__26190 = cljs.core.next.call(null,seq__26068_26181__$1);
var G__26191 = null;
var G__26192 = (0);
var G__26193 = (0);
seq__26068_26169 = G__26190;
chunk__26069_26170 = G__26191;
count__26070_26171 = G__26192;
i__26071_26172 = G__26193;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26033_26079;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26032_26078;
}
return [cljs.core.str(sb__24687__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__24687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26196_26198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26197_26199 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26196_26198,_STAR_print_fn_STAR_26197_26199,sb__24687__auto__){
return (function (x__24688__auto__){
return sb__24687__auto__.append(x__24688__auto__);
});})(_STAR_print_newline_STAR_26196_26198,_STAR_print_fn_STAR_26197_26199,sb__24687__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26197_26199;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26196_26198;
}
return [cljs.core.str(sb__24687__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__23603__auto__ = cljs.core.get.call(null,overrides,spec);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize.call(null,spec__$1);
var temp__6367__auto__ = (function (){var or__23603__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6367__auto__)){
var g = temp__6367__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6367__auto__,spec__$1,spec__$2){
return (function (p1__26200_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$2,p1__26200_SHARP_);
});})(g,temp__6367__auto__,spec__$1,spec__$2))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args26201 = [];
var len__24786__auto___26204 = arguments.length;
var i__24787__auto___26205 = (0);
while(true){
if((i__24787__auto___26205 < len__24786__auto___26204)){
args26201.push((arguments[i__24787__auto___26205]));

var G__26206 = (i__24787__auto___26205 + (1));
i__24787__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__23591__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__23591__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__23603__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var or__23603__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__23603__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__24687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26214_26220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26215_26221 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26214_26220,_STAR_print_fn_STAR_26215_26221,sb__24687__auto__,ed,conformed){
return (function (x__24688__auto__){
return sb__24687__auto__.append(x__24688__auto__);
});})(_STAR_print_newline_STAR_26214_26220,_STAR_print_fn_STAR_26215_26221,sb__24687__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26215_26221;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26214_26220;
}
return [cljs.core.str(sb__24687__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__26216 = ((function (conform_BANG_){
return (function() { 
var G__26222__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_26217 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_26218 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_26218;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_26217;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__26222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26223__i = 0, G__26223__a = new Array(arguments.length -  0);
while (G__26223__i < G__26223__a.length) {G__26223__a[G__26223__i] = arguments[G__26223__i + 0]; ++G__26223__i;}
  args = new cljs.core.IndexedSeq(G__26223__a,0);
} 
return G__26222__delegate.call(this,args);};
G__26222.cljs$lang$maxFixedArity = 0;
G__26222.cljs$lang$applyTo = (function (arglist__26224){
var args = cljs.core.seq(arglist__26224);
return G__26222__delegate(args);
});
G__26222.cljs$core$IFn$_invoke$arity$variadic = G__26222__delegate;
return G__26222;
})()
;})(conform_BANG_))
;
if(!((f instanceof cljs.core.MultiFn))){
var G__26219 = G__26216;
goog.object.extend(G__26219,f);

return G__26219;
} else {
return G__26216;
}
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6369__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6369__auto__)){
var arg_spec = temp__6369__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__24687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26227_26229 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26228_26230 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26227_26229,_STAR_print_fn_STAR_26228_26230,sb__24687__auto__,ed,arg_spec,temp__6369__auto__,specs){
return (function (x__24688__auto__){
return sb__24687__auto__.append(x__24688__auto__);
});})(_STAR_print_newline_STAR_26227_26229,_STAR_print_fn_STAR_26228_26230,sb__24687__auto__,ed,arg_spec,temp__6369__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26228_26230;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26227_26229;
}
return [cljs.core.str(sb__24687__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__26233 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__26233__$1 = ((((!((map__26233 == null)))?((((map__26233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26233):map__26233);
var raw = cljs.core.get.call(null,map__26233__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__26233__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__6369__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__6369__auto__)){
var map__26237 = temp__6369__auto__;
var map__26237__$1 = ((((!((map__26237 == null)))?((((map__26237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26237):map__26237);
var raw = cljs.core.get.call(null,map__26237__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__26237__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__23603__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args26239 = [];
var len__24786__auto___26242 = arguments.length;
var i__24787__auto___26243 = (0);
while(true){
if((i__24787__auto___26243 < len__24786__auto___26242)){
args26239.push((arguments[i__24787__auto___26243]));

var G__26244 = (i__24787__auto___26243 + (1));
i__24787__auto___26243 = G__26244;
continue;
} else {
}
break;
}

var G__26241 = args26239.length;
switch (G__26241) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26239.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6367__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6367__auto__)){
var spec = temp__6367__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args26246 = [];
var len__24786__auto___26249 = arguments.length;
var i__24787__auto___26250 = (0);
while(true){
if((i__24787__auto___26250 < len__24786__auto___26249)){
args26246.push((arguments[i__24787__auto___26250]));

var G__26251 = (i__24787__auto___26250 + (1));
i__24787__auto___26250 = G__26251;
continue;
} else {
}
break;
}

var G__26248 = args26246.length;
switch (G__26248) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26246.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__26255){
var map__26286 = p__26255;
var map__26286__$1 = ((((!((map__26286 == null)))?((((map__26286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26286):map__26286);
var argm = map__26286__$1;
var opt = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__26253_SHARP_){
var or__23603__auto__ = k__GT_s.call(null,p1__26253_SHARP_);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return p1__26253_SHARP_;
}
});})(keys_pred,k__GT_s,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec26288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26288 = (function (p__26255,opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,map__26286,req_keys,opt_specs,k__GT_s,pred_forms,meta26289){
this.p__26255 = p__26255;
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.map__26286 = map__26286;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta26289 = meta26289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_26290,meta26289__$1){
var self__ = this;
var _26290__$1 = this;
return (new cljs.spec.t_cljs$spec26288(self__.p__26255,self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.map__26286,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta26289__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_26290){
var self__ = this;
var _26290__$1 = this;
return self__.meta26289;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__26294 = cljs.core.keys.call(null,m);
var vec__26295 = G__26294;
var seq__26296 = cljs.core.seq.call(null,vec__26295);
var first__26297 = cljs.core.first.call(null,seq__26296);
var seq__26296__$1 = cljs.core.next.call(null,seq__26296);
var k = first__26297;
var ks = seq__26296__$1;
var keys = vec__26295;
var ret__$1 = ret;
var G__26294__$1 = G__26294;
while(true){
var ret__$2 = ret__$1;
var vec__26298 = G__26294__$1;
var seq__26299 = cljs.core.seq.call(null,vec__26298);
var first__26300 = cljs.core.first.call(null,seq__26299);
var seq__26299__$1 = cljs.core.next.call(null,seq__26299);
var k__$1 = first__26300;
var ks__$1 = seq__26299__$1;
var keys__$1 = vec__26298;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26316 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__26317 = ks__$1;
ret__$1 = G__26316;
G__26294__$1 = G__26317;
continue;
}
} else {
var G__26318 = ret__$2;
var G__26319 = ks__$1;
ret__$1 = G__26318;
G__26294__$1 = G__26319;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__26304 = cljs.core.keys.call(null,m);
var vec__26305 = G__26304;
var seq__26306 = cljs.core.seq.call(null,vec__26305);
var first__26307 = cljs.core.first.call(null,seq__26306);
var seq__26306__$1 = cljs.core.next.call(null,seq__26306);
var k = first__26307;
var ks = seq__26306__$1;
var keys = vec__26305;
var ret__$1 = ret;
var G__26304__$1 = G__26304;
while(true){
var ret__$2 = ret__$1;
var vec__26308 = G__26304__$1;
var seq__26309 = cljs.core.seq.call(null,vec__26308);
var first__26310 = cljs.core.first.call(null,seq__26309);
var seq__26309__$1 = cljs.core.next.call(null,seq__26309);
var k__$1 = first__26310;
var ks__$1 = seq__26309__$1;
var keys__$1 = vec__26308;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__26320 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__26321 = ks__$1;
ret__$1 = G__26320;
G__26304__$1 = G__26321;
continue;
} else {
var G__26322 = ret__$2;
var G__26323 = ks__$1;
ret__$1 = G__26322;
G__26304__$1 = G__26323;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__6369__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6369__auto__){
var probs = temp__6369__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__26311){
var vec__26312 = p__26311;
var k = cljs.core.nth.call(null,vec__26312,(0),null);
var v = cljs.core.nth.call(null,vec__26312,(1),null);
if(cljs.core.truth_((function (){var or__23603__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__26254_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__26254_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__26315 = cljs.core.PersistentVector.EMPTY;
var G__26315__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__26315,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__26315);
var G__26315__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__26315__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__26315__$1);
var G__26315__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__26315__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__26315__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__26315__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__26315__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__26255","p__26255",920146053,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"map__26286","map__26286",1771386107,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta26289","meta26289",-65132561,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec26288.cljs$lang$type = true;

cljs.spec.t_cljs$spec26288.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26288";

cljs.spec.t_cljs$spec26288.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26288");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec26288 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec26288(p__26255__$1,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,map__26286__$2,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta26289){
return (new cljs.spec.t_cljs$spec26288(p__26255__$1,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,map__26286__$2,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta26289));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__26286,map__26286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec26288(p__26255,opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,map__26286__$1,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args26324 = [];
var len__24786__auto___26332 = arguments.length;
var i__24787__auto___26333 = (0);
while(true){
if((i__24787__auto___26333 < len__24786__auto___26332)){
args26324.push((arguments[i__24787__auto___26333]));

var G__26334 = (i__24787__auto___26333 + (1));
i__24787__auto___26333 = G__26334;
continue;
} else {
}
break;
}

var G__26326 = args26324.length;
switch (G__26326) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26324.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__26327 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__26327,gfn);
} else {
return G__26327;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__26328 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__26328,gfn);
} else {
return G__26328;
}
} else {
if(typeof cljs.spec.t_cljs$spec26329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26329 = (function (form,pred,gfn,cpred_QMARK_,unc,meta26330){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta26330 = meta26330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26331,meta26330__$1){
var self__ = this;
var _26331__$1 = this;
return (new cljs.spec.t_cljs$spec26329(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta26330__$1));
});

cljs.spec.t_cljs$spec26329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26331){
var self__ = this;
var _26331__$1 = this;
return self__.meta26330;
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec26329.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec26329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta26330","meta26330",1429548789,null)], null);
});

cljs.spec.t_cljs$spec26329.cljs$lang$type = true;

cljs.spec.t_cljs$spec26329.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26329";

cljs.spec.t_cljs$spec26329.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26329");
});

cljs.spec.__GT_t_cljs$spec26329 = (function cljs$spec$__GT_t_cljs$spec26329(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta26330){
return (new cljs.spec.t_cljs$spec26329(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta26330));
});

}

return (new cljs.spec.t_cljs$spec26329(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args26341 = [];
var len__24786__auto___26355 = arguments.length;
var i__24787__auto___26356 = (0);
while(true){
if((i__24787__auto___26356 < len__24786__auto___26355)){
args26341.push((arguments[i__24787__auto___26356]));

var G__26357 = (i__24787__auto___26356 + (1));
i__24787__auto___26356 = G__26357;
continue;
} else {
}
break;
}

var G__26343 = args26341.length;
switch (G__26343) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26341.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__26336_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__23591__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__26336_SHARP_));
if(and__23591__auto__){
return mm.call(null,p1__26336_SHARP_);
} else {
return and__23591__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__26337_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__26337_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__26338_SHARP_,p2__26339_SHARP_){
return cljs.core.assoc.call(null,p1__26338_SHARP_,retag,p2__26339_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec26344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26344 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta26345){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta26345 = meta26345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_26346,meta26345__$1){
var self__ = this;
var _26346__$1 = this;
return (new cljs.spec.t_cljs$spec26344(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta26345__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_26346){
var self__ = this;
var _26346__$1 = this;
return self__.meta26345;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__26347){
var vec__26348 = p__26347;
var k = cljs.core.nth.call(null,vec__26348,(0),null);
var f = cljs.core.nth.call(null,vec__26348,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__26348,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__26348,k,f,___$1,id,predx,dval,tag){
return (function (p1__26340_SHARP_){
return self__.tag.call(null,p1__26340_SHARP_,k);
});})(rmap__$1,p,vec__26348,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__24529__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__24529__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto____$1);
})(),x__24529__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__26348,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__26351){
var vec__26352 = p__26351;
var k = cljs.core.nth.call(null,vec__26352,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__24529__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta26345","meta26345",1256183770,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec26344.cljs$lang$type = true;

cljs.spec.t_cljs$spec26344.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26344";

cljs.spec.t_cljs$spec26344.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26344");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec26344 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec26344(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta26345){
return (new cljs.spec.t_cljs$spec26344(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta26345));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec26344(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args26359 = [];
var len__24786__auto___26365 = arguments.length;
var i__24787__auto___26366 = (0);
while(true){
if((i__24787__auto___26366 < len__24786__auto___26365)){
args26359.push((arguments[i__24787__auto___26366]));

var G__26367 = (i__24787__auto___26366 + (1));
i__24787__auto___26366 = G__26367;
continue;
} else {
}
break;
}

var G__26361 = args26359.length;
switch (G__26361) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26359.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec26362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26362 = (function (forms,preds,gfn,meta26363){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta26363 = meta26363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26364,meta26363__$1){
var self__ = this;
var _26364__$1 = this;
return (new cljs.spec.t_cljs$spec26362(self__.forms,self__.preds,self__.gfn,meta26363__$1));
});

cljs.spec.t_cljs$spec26362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26364){
var self__ = this;
var _26364__$1 = this;
return self__.meta26363;
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26369 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__26370 = (i + (1));
ret = G__26369;
i = G__26370;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__26371 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__26372 = (i + (1));
ret = G__26371;
i = G__26372;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__24529__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),(function (){var x__24529__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec26362.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec26362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26363","meta26363",-1949798934,null)], null);
});

cljs.spec.t_cljs$spec26362.cljs$lang$type = true;

cljs.spec.t_cljs$spec26362.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26362";

cljs.spec.t_cljs$spec26362.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26362");
});

cljs.spec.__GT_t_cljs$spec26362 = (function cljs$spec$__GT_t_cljs$spec26362(forms__$1,preds__$1,gfn__$1,meta26363){
return (new cljs.spec.t_cljs$spec26362(forms__$1,preds__$1,gfn__$1,meta26363));
});

}

return (new cljs.spec.t_cljs$spec26362(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x26374 = v;
x26374.cljs$core$IMapEntry$ = true;

x26374.cljs$core$IMapEntry$_key$arity$1 = ((function (x26374){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x26374))
;

x26374.cljs$core$IMapEntry$_val$arity$1 = ((function (x26374){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x26374))
;

return x26374;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__26389 = (i + (1));
i = G__26389;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec26382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26382 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta26383){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta26383 = meta26383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_26384,meta26383__$1){
var self__ = this;
var _26384__$1 = this;
return (new cljs.spec.t_cljs$spec26382(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta26383__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_26384){
var self__ = this;
var _26384__$1 = this;
return self__.meta26383;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__26385){
var self__ = this;
var vec__26386 = p__26385;
var k = cljs.core.nth.call(null,vec__26386,(0),null);
var x = cljs.core.nth.call(null,vec__26386,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta26383","meta26383",-98815617,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec26382.cljs$lang$type = true;

cljs.spec.t_cljs$spec26382.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26382";

cljs.spec.t_cljs$spec26382.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26382");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec26382 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec26382(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta26383){
return (new cljs.spec.t_cljs$spec26382(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta26383));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec26382(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__26416 = preds;
var vec__26418 = G__26416;
var seq__26419 = cljs.core.seq.call(null,vec__26418);
var first__26420 = cljs.core.first.call(null,seq__26419);
var seq__26419__$1 = cljs.core.next.call(null,seq__26419);
var pred = first__26420;
var preds__$1 = seq__26419__$1;
var G__26417 = forms;
var vec__26421 = G__26417;
var seq__26422 = cljs.core.seq.call(null,vec__26421);
var first__26423 = cljs.core.first.call(null,seq__26422);
var seq__26422__$1 = cljs.core.next.call(null,seq__26422);
var form = first__26423;
var forms__$1 = seq__26422__$1;
var ret__$1 = ret;
var G__26416__$1 = G__26416;
var G__26417__$1 = G__26417;
while(true){
var ret__$2 = ret__$1;
var vec__26424 = G__26416__$1;
var seq__26425 = cljs.core.seq.call(null,vec__26424);
var first__26426 = cljs.core.first.call(null,seq__26425);
var seq__26425__$1 = cljs.core.next.call(null,seq__26425);
var pred__$1 = first__26426;
var preds__$2 = seq__26425__$1;
var vec__26427 = G__26417__$1;
var seq__26428 = cljs.core.seq.call(null,vec__26427);
var first__26429 = cljs.core.first.call(null,seq__26428);
var seq__26428__$1 = cljs.core.next.call(null,seq__26428);
var form__$1 = first__26429;
var forms__$2 = seq__26428__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__26430 = nret;
var G__26431 = preds__$2;
var G__26432 = forms__$2;
ret__$1 = G__26430;
G__26416__$1 = G__26431;
G__26417__$1 = G__26432;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__26459 = forms;
var vec__26461 = G__26459;
var seq__26462 = cljs.core.seq.call(null,vec__26461);
var first__26463 = cljs.core.first.call(null,seq__26462);
var seq__26462__$1 = cljs.core.next.call(null,seq__26462);
var form = first__26463;
var forms__$1 = seq__26462__$1;
var G__26460 = preds;
var vec__26464 = G__26460;
var seq__26465 = cljs.core.seq.call(null,vec__26464);
var first__26466 = cljs.core.first.call(null,seq__26465);
var seq__26465__$1 = cljs.core.next.call(null,seq__26465);
var pred = first__26466;
var preds__$1 = seq__26465__$1;
var ret__$1 = ret;
var G__26459__$1 = G__26459;
var G__26460__$1 = G__26460;
while(true){
var ret__$2 = ret__$1;
var vec__26467 = G__26459__$1;
var seq__26468 = cljs.core.seq.call(null,vec__26467);
var first__26469 = cljs.core.first.call(null,seq__26468);
var seq__26468__$1 = cljs.core.next.call(null,seq__26468);
var form__$1 = first__26469;
var forms__$2 = seq__26468__$1;
var vec__26470 = G__26460__$1;
var seq__26471 = cljs.core.seq.call(null,vec__26470);
var first__26472 = cljs.core.first.call(null,seq__26471);
var seq__26471__$1 = cljs.core.next.call(null,seq__26471);
var pred__$1 = first__26472;
var preds__$2 = seq__26471__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__26473 = nret;
var G__26474 = forms__$2;
var G__26475 = preds__$2;
ret__$1 = G__26473;
G__26459__$1 = G__26474;
G__26460__$1 = G__26475;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec26481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26481 = (function (and_spec_impl,forms,preds,gfn,meta26482){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta26482 = meta26482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26483,meta26482__$1){
var self__ = this;
var _26483__$1 = this;
return (new cljs.spec.t_cljs$spec26481(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta26482__$1));
});

cljs.spec.t_cljs$spec26481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26483){
var self__ = this;
var _26483__$1 = this;
return self__.meta26482;
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__26477_SHARP_,p2__26476_SHARP_){
return cljs.spec.unform.call(null,p2__26476_SHARP_,p1__26477_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec26481.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec26481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26482","meta26482",-844745187,null)], null);
});

cljs.spec.t_cljs$spec26481.cljs$lang$type = true;

cljs.spec.t_cljs$spec26481.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26481";

cljs.spec.t_cljs$spec26481.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26481");
});

cljs.spec.__GT_t_cljs$spec26481 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec26481(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta26482){
return (new cljs.spec.t_cljs$spec26481(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta26482));
});

}

return (new cljs.spec.t_cljs$spec26481(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args26486 = [];
var len__24786__auto___26495 = arguments.length;
var i__24787__auto___26496 = (0);
while(true){
if((i__24787__auto___26496 < len__24786__auto___26495)){
args26486.push((arguments[i__24787__auto___26496]));

var G__26497 = (i__24787__auto___26496 + (1));
i__24787__auto___26496 = G__26497;
continue;
} else {
}
break;
}

var G__26488 = args26486.length;
switch (G__26488) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26486.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__26489,gfn){
var map__26490 = p__26489;
var map__26490__$1 = ((((!((map__26490 == null)))?((((map__26490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26490):map__26490);
var opts = map__26490__$1;
var count = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var max_count = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var min_count = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var distinct = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_max = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var gen_into = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542),cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.call(null,map__26490__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var check_QMARK_ = ((function (map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__26484_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__26484_SHARP_);
});})(map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__23603__auto__ = kfn;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return ((function (or__23603__auto__,check_QMARK_,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__23603__auto__,check_QMARK_,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec26492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26492 = (function (form,max_count,p__26489,check_QMARK_,gfn,gen_max,pred,distinct,kfn,gen_into,map__26490,count,min_count,opts,meta26493){
this.form = form;
this.max_count = max_count;
this.p__26489 = p__26489;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.distinct = distinct;
this.kfn = kfn;
this.gen_into = gen_into;
this.map__26490 = map__26490;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.meta26493 = meta26493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_26494,meta26493__$1){
var self__ = this;
var _26494__$1 = this;
return (new cljs.spec.t_cljs$spec26492(self__.form,self__.max_count,self__.p__26489,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.distinct,self__.kfn,self__.gen_into,self__.map__26490,self__.count,self__.min_count,self__.opts,meta26493__$1));
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_26494){
var self__ = this;
var _26494__$1 = this;
return self__.meta26493;
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__23603__auto__ = !(cljs.core.seqable_QMARK_.call(null,x));
if(or__23603__auto__){
return or__23603__auto__;
} else {
var or__23603__auto____$1 = (function (){var and__23591__auto__ = self__.distinct;
if(cljs.core.truth_(and__23591__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
var or__23603__auto____$2 = (function (){var and__23591__auto__ = self__.count;
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,(self__.count + (1)),x));
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(or__23603__auto____$2)){
return or__23603__auto____$2;
} else {
var and__23591__auto__ = (function (){var or__23603__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__23603__auto____$3)){
return or__23603__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__23591__auto__)){
return !((((function (){var or__23603__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__23603__auto____$3)){
return or__23603__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__23603__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__23603__auto____$3)){
return or__23603__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__23591__auto__;
}
}
}
}
})())){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__23936__auto__ = (1);
var y__23937__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__23936__auto__ > y__23937__auto__) ? x__23936__auto__ : y__23937__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__26499 = (i + step);
i = G__26499;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__23603__auto__ = (function (){var and__23591__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__23591__auto__){
return x;
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__23591__auto__ = self__.distinct;
if(cljs.core.truth_(and__23591__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__23591__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__23591__auto__ = self__.count;
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,self__.count,x));
} else {
return and__23591__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__24529__auto__ = self__.count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),(function (){var x__24529__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__23591__auto__ = (function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__23591__auto__)){
return !((((function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__23603__auto__ = self__.max_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__23591__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__24529__auto__ = (function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),(function (){var x__24529__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),(function (){var x__24529__auto__ = (function (){var or__23603__auto__ = self__.max_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.take.call(null,cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (___$1,check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.call(null),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var init = cljs.core.empty.call(null,self__.gen_into);
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.call(null,((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__26485_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__26485_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__26485_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__23603__auto__ = self__.max_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var x__23936__auto__ = self__.gen_max;
var y__23937__auto__ = ((2) * (function (){var or__23603__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
return (0);
}
})());
return ((x__23936__auto__ > y__23937__auto__) ? x__23936__auto__ : y__23937__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__23603__auto__ = self__.min_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return (0);
}
})(),(function (){var or__23603__auto__ = self__.max_count;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var x__23936__auto__ = self__.gen_max;
var y__23937__auto__ = ((2) * (function (){var or__23603__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
return (0);
}
})());
return ((x__23936__auto__ > y__23937__auto__) ? x__23936__auto__ : y__23937__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
}
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__24529__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.getBasis = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"p__26489","p__26489",1836346145,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"map__26490","map__26490",1821181851,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta26493","meta26493",-495163382,null)], null);
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec26492.cljs$lang$type = true;

cljs.spec.t_cljs$spec26492.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26492";

cljs.spec.t_cljs$spec26492.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26492");
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec26492 = ((function (check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec26492(form__$1,max_count__$1,p__26489__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,map__26490__$2,count__$1,min_count__$1,opts__$1,meta26493){
return (new cljs.spec.t_cljs$spec26492(form__$1,max_count__$1,p__26489__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,map__26490__$2,count__$1,min_count__$1,opts__$1,meta26493));
});})(check_QMARK_,kfn__$1,map__26490,map__26490__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec26492(form,max_count,p__26489,check_QMARK_,gfn,gen_max,pred,distinct,kfn__$1,gen_into,map__26490__$1,count,min_count,opts,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__26500){
var map__26503 = p__26500;
var map__26503__$1 = ((((!((map__26503 == null)))?((((map__26503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26503):map__26503);
var op = cljs.core.get.call(null,map__26503__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__26505){
var map__26517 = p__26505;
var map__26517__$1 = ((((!((map__26517 == null)))?((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var vec__26518 = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__26519 = cljs.core.seq.call(null,vec__26518);
var first__26520 = cljs.core.first.call(null,seq__26519);
var seq__26519__$1 = cljs.core.next.call(null,seq__26519);
var p1 = first__26520;
var pr = seq__26519__$1;
var ps = vec__26518;
var vec__26521 = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__26522 = cljs.core.seq.call(null,vec__26521);
var first__26523 = cljs.core.first.call(null,seq__26522);
var seq__26522__$1 = cljs.core.next.call(null,seq__26522);
var k1 = first__26523;
var kr = seq__26522__$1;
var ks = vec__26521;
var vec__26524 = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__26525 = cljs.core.seq.call(null,vec__26524);
var first__26526 = cljs.core.first.call(null,seq__26525);
var seq__26525__$1 = cljs.core.next.call(null,seq__26525);
var f1 = first__26526;
var fr = seq__26525__$1;
var forms = vec__26524;
var ret = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__24793__auto__ = [];
var len__24786__auto___26529 = arguments.length;
var i__24787__auto___26530 = (0);
while(true){
if((i__24787__auto___26530 < len__24786__auto___26529)){
args__24793__auto__.push((arguments[i__24787__auto___26530]));

var G__26531 = (i__24787__auto___26530 + (1));
i__24787__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq26528){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26528));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__24529__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),(function (){var x__24529__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__24529__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__23603__auto__ = ks;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__26532_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__26532_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__23603__auto__ = cljs.core.seq.call(null,ks);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__23603__auto__ = cljs.core.seq.call(null,forms);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__26533_SHARP_){
return cljs.core.nth.call(null,p1__26533_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__26543 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__26546 = cljs.core.nth.call(null,vec__26543,(0),null);
var seq__26547 = cljs.core.seq.call(null,vec__26546);
var first__26548 = cljs.core.first.call(null,seq__26547);
var seq__26547__$1 = cljs.core.next.call(null,seq__26547);
var p1 = first__26548;
var pr = seq__26547__$1;
var ps__$1 = vec__26546;
var vec__26549 = cljs.core.nth.call(null,vec__26543,(1),null);
var k1 = cljs.core.nth.call(null,vec__26549,(0),null);
var ks__$1 = vec__26549;
var forms__$1 = cljs.core.nth.call(null,vec__26543,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__24793__auto__ = [];
var len__24786__auto___26553 = arguments.length;
var i__24787__auto___26554 = (0);
while(true){
if((i__24787__auto___26554 < len__24786__auto___26553)){
args__24793__auto__.push((arguments[i__24787__auto___26554]));

var G__26555 = (i__24787__auto___26554 + (1));
i__24787__auto___26554 = G__26555;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq26552){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26552));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__23591__auto__ = p1;
if(cljs.core.truth_(and__23591__auto__)){
return p2;
} else {
return and__23591__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__23603__auto__ = p1;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__23603__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__23603__auto__){
return or__23603__auto__;
} else {
var or__23603__auto____$1 = (function (){var and__23591__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(or__23603__auto____$1)){
return or__23603__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__26559 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26559__$1 = ((((!((map__26559 == null)))?((((map__26559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26559):map__26559);
var p__$1 = map__26559__$1;
var op = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__26561 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26561)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__26561)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26561)){
var and__23591__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__23591__auto__)){
var or__23603__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__23591__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26561)){
var or__23603__auto__ = (p1 === p2);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26561)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26561)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__26580 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26580__$1 = ((((!((map__26580 == null)))?((((map__26580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580):map__26580);
var p__$1 = map__26580__$1;
var vec__26581 = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__26582 = cljs.core.seq.call(null,vec__26581);
var first__26583 = cljs.core.first.call(null,seq__26582);
var seq__26582__$1 = cljs.core.next.call(null,seq__26582);
var p0 = first__26583;
var pr = seq__26582__$1;
var ps = vec__26581;
var vec__26584 = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__26584,(0),null);
var ks = vec__26584;
var op = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__26588 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26588)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__26588)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26588)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26588)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26588)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26588)){
var vec__26589 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__26592 = cljs.core.nth.call(null,vec__26589,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__26592,(0),null);
var vec__26595 = cljs.core.nth.call(null,vec__26589,(1),null);
var k0 = cljs.core.nth.call(null,vec__26595,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__26614 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26614__$1 = ((((!((map__26614 == null)))?((((map__26614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26614):map__26614);
var p__$1 = map__26614__$1;
var vec__26615 = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__26616 = cljs.core.seq.call(null,vec__26615);
var first__26617 = cljs.core.first.call(null,seq__26616);
var seq__26616__$1 = cljs.core.next.call(null,seq__26616);
var p0 = first__26617;
var pr = seq__26616__$1;
var ps = vec__26615;
var vec__26618 = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__26618,(0),null);
var ks = vec__26618;
var op = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__26622 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26622)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__26622)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26622)){
var px = cljs.core.reduce.call(null,((function (G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__26599_SHARP_,p2__26598_SHARP_){
return cljs.spec.unform.call(null,p2__26598_SHARP_,p1__26599_SHARP_);
});})(G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26622)){
return cljs.core.mapcat.call(null,((function (G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__26600_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__26600_SHARP_);
});})(G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26622)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__26601_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__26601_SHARP_);
});})(G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__26622,map__26614,map__26614__$1,p__$1,vec__26615,seq__26616,first__26617,seq__26616__$1,p0,pr,ps,vec__26618,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26622)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__26623 = x;
var k__$1 = cljs.core.nth.call(null,vec__26623,(0),null);
var v = cljs.core.nth.call(null,vec__26623,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__26629 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26629__$1 = ((((!((map__26629 == null)))?((((map__26629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26629):map__26629);
var p__$1 = map__26629__$1;
var op = cljs.core.get.call(null,map__26629__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__26629__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__26629__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__26629,map__26629__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__26629,map__26629__$1,p__$1,op,ps,splice))
;
var G__26631 = op;
if(cljs.core._EQ_.call(null,null,G__26631)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26631)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26631)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26631)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26631)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26631)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__26642 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26642__$1 = ((((!((map__26642 == null)))?((((map__26642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642):map__26642);
var p__$1 = map__26642__$1;
var vec__26643 = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__26644 = cljs.core.seq.call(null,vec__26643);
var first__26645 = cljs.core.first.call(null,seq__26644);
var seq__26644__$1 = cljs.core.next.call(null,seq__26644);
var p0 = first__26645;
var pr = seq__26644__$1;
var ps = vec__26643;
var vec__26646 = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__26647 = cljs.core.seq.call(null,vec__26646);
var first__26648 = cljs.core.first.call(null,seq__26647);
var seq__26647__$1 = cljs.core.next.call(null,seq__26647);
var k0 = first__26648;
var kr = seq__26647__$1;
var ks = vec__26646;
var op = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__26650 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26650)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__26650)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26650)){
var temp__6369__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6369__auto__)){
var p1__$1 = temp__6369__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26650)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26650)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__26650,map__26642,map__26642__$1,p__$1,vec__26643,seq__26644,first__26645,seq__26644__$1,p0,pr,ps,vec__26646,seq__26647,first__26648,seq__26647__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__26632_SHARP_){
return cljs$spec$deriv.call(null,p1__26632_SHARP_,x);
});})(G__26650,map__26642,map__26642__$1,p__$1,vec__26643,seq__26644,first__26645,seq__26644__$1,p0,pr,ps,vec__26646,seq__26647,first__26648,seq__26647__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26650)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__26654 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26654__$1 = ((((!((map__26654 == null)))?((((map__26654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26654):map__26654);
var p__$1 = map__26654__$1;
var op = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__26654__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__26656 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26656)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__26656)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26656)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26656)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__24529__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__23603__auto__ = cljs.core.seq.call(null,ks);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__23603__auto__ = cljs.core.seq.call(null,forms);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26656)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__24529__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26656)){
var x__24529__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__24529__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto____$1);
})(),x__24529__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__26670 = input;
var x = cljs.core.nth.call(null,vec__26670,(0),null);
var input__$1 = vec__26670;
var map__26673 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26673__$1 = ((((!((map__26673 == null)))?((((map__26673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);
var p__$1 = map__26673__$1;
var op = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__26675 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26675)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__26675)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26675)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6367__auto__)){
var p1__$1 = temp__6367__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26675)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__23603__auto__ = cljs.core.seq.call(null,ks);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__23603__auto__ = cljs.core.seq.call(null,forms);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__26676 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__26675,vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__26679){
var vec__26680 = p__26679;
var p__$2 = cljs.core.nth.call(null,vec__26680,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__26675,vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__26676,(0),null);
var k = cljs.core.nth.call(null,vec__26676,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__26676,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__23603__auto__ = form__$1;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26675)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__26675,vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__23603__auto__ = form__$1;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__26675,vec__26670,x,input__$1,map__26673,map__26673__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__23603__auto__ = cljs.core.seq.call(null,ks);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__23603__auto__ = cljs.core.seq.call(null,forms);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26675)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__26689 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__26689__$1 = ((((!((map__26689 == null)))?((((map__26689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26689):map__26689);
var p__$1 = map__26689__$1;
var op = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__23591__auto__ = rmap__$1;
if(cljs.core.truth_(and__23591__auto__)){
var and__23591__auto____$1 = id;
if(cljs.core.truth_(and__23591__auto____$1)){
var and__23591__auto____$2 = k;
if(cljs.core.truth_(and__23591__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__23591__auto____$2;
}
} else {
return and__23591__auto____$1;
}
} else {
return and__23591__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__23603__auto__ = f__$1;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return p__$2;
}
})());
});})(map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__23603__auto__ = f__$1;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__23603__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__23603__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__23603__auto__){
return or__23603__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__23603__auto__ = (function (){var temp__6369__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
var G__26692 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__26692)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__26692)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__26693 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__26693)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__26693)){
var temp__6369__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__26693)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__26693)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__26693)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__26693)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6369__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6369__auto__,G__26693,or__23603__auto__,map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__26683_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26683_SHARP_);
});})(g,temp__6369__auto__,G__26693,or__23603__auto__,map__26689,map__26689__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__26694){
while(true){
var vec__26698 = p__26694;
var seq__26699 = cljs.core.seq.call(null,vec__26698);
var first__26700 = cljs.core.first.call(null,seq__26699);
var seq__26699__$1 = cljs.core.next.call(null,seq__26699);
var x = first__26700;
var xs = seq__26699__$1;
var data = vec__26698;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6367__auto__)){
var dp = temp__6367__auto__;
var G__26701 = dp;
var G__26702 = xs;
p = G__26701;
p__26694 = G__26702;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__26716 = input;
var vec__26717 = G__26716;
var seq__26718 = cljs.core.seq.call(null,vec__26717);
var first__26719 = cljs.core.first.call(null,seq__26718);
var seq__26718__$1 = cljs.core.next.call(null,seq__26718);
var x = first__26719;
var xs = seq__26718__$1;
var data = vec__26717;
var i = (0);
var p__$1 = p;
var G__26716__$1 = G__26716;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__26720 = G__26716__$1;
var seq__26721 = cljs.core.seq.call(null,vec__26720);
var first__26722 = cljs.core.first.call(null,seq__26721);
var seq__26721__$1 = cljs.core.next.call(null,seq__26721);
var x__$1 = first__26722;
var xs__$1 = seq__26721__$1;
var data__$1 = vec__26720;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var dp = temp__6367__auto__;
var G__26723 = dp;
var G__26724 = xs__$1;
var G__26725 = (i__$2 + (1));
p__$1 = G__26723;
G__26716__$1 = G__26724;
i__$1 = G__26725;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__23603__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec26729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec26729 = (function (regex_spec_impl,re,gfn,meta26730){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta26730 = meta26730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26731,meta26730__$1){
var self__ = this;
var _26731__$1 = this;
return (new cljs.spec.t_cljs$spec26729(self__.regex_spec_impl,self__.re,self__.gfn,meta26730__$1));
});

cljs.spec.t_cljs$spec26729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26731){
var self__ = this;
var _26731__$1 = this;
return self__.meta26730;
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec26729.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec26729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta26730","meta26730",-1139773603,null)], null);
});

cljs.spec.t_cljs$spec26729.cljs$lang$type = true;

cljs.spec.t_cljs$spec26729.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26729";

cljs.spec.t_cljs$spec26729.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26729");
});

cljs.spec.__GT_t_cljs$spec26729 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec26729(regex_spec_impl__$1,re__$1,gfn__$1,meta26730){
return (new cljs.spec.t_cljs$spec26729(regex_spec_impl__$1,re__$1,gfn__$1,meta26730));
});

}

return (new cljs.spec.t_cljs$spec26729(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__23591__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__23591__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__23591__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__26732_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__26732_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6367__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6367__auto__)){
var vec__26736 = temp__6367__auto__;
var smallest = cljs.core.nth.call(null,vec__26736,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec26745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec26745 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta26746){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta26746 = meta26746;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec26745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_26747,meta26746__$1){
var self__ = this;
var _26747__$1 = this;
return (new cljs.spec.t_cljs$spec26745(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta26746__$1));
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_26747){
var self__ = this;
var _26747__$1 = this;
return self__.meta26746;
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e26748){if((e26748 instanceof Error)){
var t = e26748;
return t;
} else {
throw e26748;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__26751__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__24687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26749_26752 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26750_26753 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26749_26752,_STAR_print_fn_STAR_26750_26753,sb__24687__auto__,___$4,specs){
return (function (x__24688__auto__){
return sb__24687__auto__.append(x__24688__auto__);
});})(_STAR_print_newline_STAR_26749_26752,_STAR_print_fn_STAR_26750_26753,sb__24687__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26750_26753;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26749_26752;
}
return [cljs.core.str(sb__24687__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__26751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26754__i = 0, G__26754__a = new Array(arguments.length -  0);
while (G__26754__i < G__26754__a.length) {G__26754__a[G__26754__i] = arguments[G__26754__i + 0]; ++G__26754__i;}
  args = new cljs.core.IndexedSeq(G__26754__a,0);
} 
return G__26751__delegate.call(this,args);};
G__26751.cljs$lang$maxFixedArity = 0;
G__26751.cljs$lang$applyTo = (function (arglist__26755){
var args = cljs.core.seq(arglist__26755);
return G__26751__delegate(args);
});
G__26751.cljs$core$IFn$_invoke$arity$variadic = G__26751__delegate;
return G__26751;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec26745.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__24529__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__24529__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__24529__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24529__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec26745.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta26746","meta26746",-692339976,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec26745.cljs$lang$type = true;

cljs.spec.t_cljs$spec26745.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec26745";

cljs.spec.t_cljs$spec26745.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec/t_cljs$spec26745");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec26745 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec26745(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta26746){
return (new cljs.spec.t_cljs$spec26745(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta26746));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec26745(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26757#","p1__26757#",-1656551089,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__26757#","p1__26757#",-1656551089,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__26756#","p1__26756#",1569305922,null)))),(function (p1__26756_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__26756_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__26756_SHARP_));
}),null,true,(function (p1__26757_SHARP_){
return cljs.core.map.call(null,(function (p__26758){
var vec__26759 = p__26758;
var k = cljs.core.nth.call(null,vec__26759,(0),null);
var v = cljs.core.nth.call(null,vec__26759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__26757_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args26763 = [];
var len__24786__auto___26766 = arguments.length;
var i__24787__auto___26767 = (0);
while(true){
if((i__24787__auto___26767 < len__24786__auto___26766)){
args26763.push((arguments[i__24787__auto___26767]));

var G__26768 = (i__24787__auto___26767 + (1));
i__24787__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var G__26765 = args26763.length;
switch (G__26765) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26763.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__26762_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__26762_SHARP_,cljs.spec.conform.call(null,spec,p1__26762_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__26770_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__26770_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__26771_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__26771_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__26771_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__23591__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__23591__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__23591__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__23591__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__23591__auto__)){
return val.lessThan(end);
} else {
return and__23591__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__23591__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__23591__auto__)){
return val.lessThan(end);
} else {
return and__23591__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map?rel=1467728148899