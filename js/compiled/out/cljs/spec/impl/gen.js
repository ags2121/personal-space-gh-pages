// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25507 = arguments.length;
var i__24787__auto___25508 = (0);
while(true){
if((i__24787__auto___25508 < len__24786__auto___25507)){
args__24793__auto__.push((arguments[i__24787__auto___25508]));

var G__25509 = (i__24787__auto___25508 + (1));
i__24787__auto___25508 = G__25509;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq25506){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25506));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25511 = arguments.length;
var i__24787__auto___25512 = (0);
while(true){
if((i__24787__auto___25512 < len__24786__auto___25511)){
args__24793__auto__.push((arguments[i__24787__auto___25512]));

var G__25513 = (i__24787__auto___25512 + (1));
i__24787__auto___25512 = G__25513;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq25510){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25510));
});

var g_QMARK__25514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_25515 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__25514){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__25514))
,null));
var mkg_25516 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__25514,g_25515){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__25514,g_25515))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__25514,g_25515,mkg_25516){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__25514).call(null,x);
});})(g_QMARK__25514,g_25515,mkg_25516))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__25514,g_25515,mkg_25516){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_25516).call(null,gfn);
});})(g_QMARK__25514,g_25515,mkg_25516))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__25514,g_25515,mkg_25516){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_25515).call(null,generator);
});})(g_QMARK__25514,g_25515,mkg_25516))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__25478__auto___25534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__25478__auto___25534){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25535 = arguments.length;
var i__24787__auto___25536 = (0);
while(true){
if((i__24787__auto___25536 < len__24786__auto___25535)){
args__24793__auto__.push((arguments[i__24787__auto___25536]));

var G__25537 = (i__24787__auto___25536 + (1));
i__24787__auto___25536 = G__25537;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25534))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25534),args);
});})(g__25478__auto___25534))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__25478__auto___25534){
return (function (seq25517){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25517));
});})(g__25478__auto___25534))
;


var g__25478__auto___25538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__25478__auto___25538){
return (function cljs$spec$impl$gen$list(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25539 = arguments.length;
var i__24787__auto___25540 = (0);
while(true){
if((i__24787__auto___25540 < len__24786__auto___25539)){
args__24793__auto__.push((arguments[i__24787__auto___25540]));

var G__25541 = (i__24787__auto___25540 + (1));
i__24787__auto___25540 = G__25541;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25538))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25538),args);
});})(g__25478__auto___25538))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__25478__auto___25538){
return (function (seq25518){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25518));
});})(g__25478__auto___25538))
;


var g__25478__auto___25542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__25478__auto___25542){
return (function cljs$spec$impl$gen$map(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25543 = arguments.length;
var i__24787__auto___25544 = (0);
while(true){
if((i__24787__auto___25544 < len__24786__auto___25543)){
args__24793__auto__.push((arguments[i__24787__auto___25544]));

var G__25545 = (i__24787__auto___25544 + (1));
i__24787__auto___25544 = G__25545;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25542))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25542),args);
});})(g__25478__auto___25542))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__25478__auto___25542){
return (function (seq25519){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25519));
});})(g__25478__auto___25542))
;


var g__25478__auto___25546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__25478__auto___25546){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25547 = arguments.length;
var i__24787__auto___25548 = (0);
while(true){
if((i__24787__auto___25548 < len__24786__auto___25547)){
args__24793__auto__.push((arguments[i__24787__auto___25548]));

var G__25549 = (i__24787__auto___25548 + (1));
i__24787__auto___25548 = G__25549;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25546))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25546),args);
});})(g__25478__auto___25546))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__25478__auto___25546){
return (function (seq25520){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25520));
});})(g__25478__auto___25546))
;


var g__25478__auto___25550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__25478__auto___25550){
return (function cljs$spec$impl$gen$set(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25551 = arguments.length;
var i__24787__auto___25552 = (0);
while(true){
if((i__24787__auto___25552 < len__24786__auto___25551)){
args__24793__auto__.push((arguments[i__24787__auto___25552]));

var G__25553 = (i__24787__auto___25552 + (1));
i__24787__auto___25552 = G__25553;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25550))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25550),args);
});})(g__25478__auto___25550))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__25478__auto___25550){
return (function (seq25521){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25521));
});})(g__25478__auto___25550))
;


var g__25478__auto___25554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__25478__auto___25554){
return (function cljs$spec$impl$gen$vector(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25555 = arguments.length;
var i__24787__auto___25556 = (0);
while(true){
if((i__24787__auto___25556 < len__24786__auto___25555)){
args__24793__auto__.push((arguments[i__24787__auto___25556]));

var G__25557 = (i__24787__auto___25556 + (1));
i__24787__auto___25556 = G__25557;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25554))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25554),args);
});})(g__25478__auto___25554))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__25478__auto___25554){
return (function (seq25522){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25522));
});})(g__25478__auto___25554))
;


var g__25478__auto___25558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__25478__auto___25558){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25559 = arguments.length;
var i__24787__auto___25560 = (0);
while(true){
if((i__24787__auto___25560 < len__24786__auto___25559)){
args__24793__auto__.push((arguments[i__24787__auto___25560]));

var G__25561 = (i__24787__auto___25560 + (1));
i__24787__auto___25560 = G__25561;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25558))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25558),args);
});})(g__25478__auto___25558))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__25478__auto___25558){
return (function (seq25523){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25523));
});})(g__25478__auto___25558))
;


var g__25478__auto___25562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__25478__auto___25562){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25563 = arguments.length;
var i__24787__auto___25564 = (0);
while(true){
if((i__24787__auto___25564 < len__24786__auto___25563)){
args__24793__auto__.push((arguments[i__24787__auto___25564]));

var G__25565 = (i__24787__auto___25564 + (1));
i__24787__auto___25564 = G__25565;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25562))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25562),args);
});})(g__25478__auto___25562))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__25478__auto___25562){
return (function (seq25524){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25524));
});})(g__25478__auto___25562))
;


var g__25478__auto___25566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__25478__auto___25566){
return (function cljs$spec$impl$gen$elements(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25567 = arguments.length;
var i__24787__auto___25568 = (0);
while(true){
if((i__24787__auto___25568 < len__24786__auto___25567)){
args__24793__auto__.push((arguments[i__24787__auto___25568]));

var G__25569 = (i__24787__auto___25568 + (1));
i__24787__auto___25568 = G__25569;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25566))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25566),args);
});})(g__25478__auto___25566))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__25478__auto___25566){
return (function (seq25525){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25525));
});})(g__25478__auto___25566))
;


var g__25478__auto___25570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__25478__auto___25570){
return (function cljs$spec$impl$gen$bind(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25571 = arguments.length;
var i__24787__auto___25572 = (0);
while(true){
if((i__24787__auto___25572 < len__24786__auto___25571)){
args__24793__auto__.push((arguments[i__24787__auto___25572]));

var G__25573 = (i__24787__auto___25572 + (1));
i__24787__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25570))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25570),args);
});})(g__25478__auto___25570))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__25478__auto___25570){
return (function (seq25526){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25526));
});})(g__25478__auto___25570))
;


var g__25478__auto___25574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__25478__auto___25574){
return (function cljs$spec$impl$gen$choose(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25575 = arguments.length;
var i__24787__auto___25576 = (0);
while(true){
if((i__24787__auto___25576 < len__24786__auto___25575)){
args__24793__auto__.push((arguments[i__24787__auto___25576]));

var G__25577 = (i__24787__auto___25576 + (1));
i__24787__auto___25576 = G__25577;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25574))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25574),args);
});})(g__25478__auto___25574))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__25478__auto___25574){
return (function (seq25527){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25527));
});})(g__25478__auto___25574))
;


var g__25478__auto___25578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__25478__auto___25578){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25579 = arguments.length;
var i__24787__auto___25580 = (0);
while(true){
if((i__24787__auto___25580 < len__24786__auto___25579)){
args__24793__auto__.push((arguments[i__24787__auto___25580]));

var G__25581 = (i__24787__auto___25580 + (1));
i__24787__auto___25580 = G__25581;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25578))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25578),args);
});})(g__25478__auto___25578))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__25478__auto___25578){
return (function (seq25528){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25528));
});})(g__25478__auto___25578))
;


var g__25478__auto___25582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__25478__auto___25582){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25583 = arguments.length;
var i__24787__auto___25584 = (0);
while(true){
if((i__24787__auto___25584 < len__24786__auto___25583)){
args__24793__auto__.push((arguments[i__24787__auto___25584]));

var G__25585 = (i__24787__auto___25584 + (1));
i__24787__auto___25584 = G__25585;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25582))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25582),args);
});})(g__25478__auto___25582))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__25478__auto___25582){
return (function (seq25529){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25529));
});})(g__25478__auto___25582))
;


var g__25478__auto___25586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__25478__auto___25586){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25587 = arguments.length;
var i__24787__auto___25588 = (0);
while(true){
if((i__24787__auto___25588 < len__24786__auto___25587)){
args__24793__auto__.push((arguments[i__24787__auto___25588]));

var G__25589 = (i__24787__auto___25588 + (1));
i__24787__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25586))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25586),args);
});})(g__25478__auto___25586))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__25478__auto___25586){
return (function (seq25530){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25530));
});})(g__25478__auto___25586))
;


var g__25478__auto___25590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__25478__auto___25590){
return (function cljs$spec$impl$gen$sample(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25591 = arguments.length;
var i__24787__auto___25592 = (0);
while(true){
if((i__24787__auto___25592 < len__24786__auto___25591)){
args__24793__auto__.push((arguments[i__24787__auto___25592]));

var G__25593 = (i__24787__auto___25592 + (1));
i__24787__auto___25592 = G__25593;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25590))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25590),args);
});})(g__25478__auto___25590))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__25478__auto___25590){
return (function (seq25531){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25531));
});})(g__25478__auto___25590))
;


var g__25478__auto___25594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__25478__auto___25594){
return (function cljs$spec$impl$gen$return(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25595 = arguments.length;
var i__24787__auto___25596 = (0);
while(true){
if((i__24787__auto___25596 < len__24786__auto___25595)){
args__24793__auto__.push((arguments[i__24787__auto___25596]));

var G__25597 = (i__24787__auto___25596 + (1));
i__24787__auto___25596 = G__25597;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25594))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25594),args);
});})(g__25478__auto___25594))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__25478__auto___25594){
return (function (seq25532){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25532));
});})(g__25478__auto___25594))
;


var g__25478__auto___25598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__25478__auto___25598){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25599 = arguments.length;
var i__24787__auto___25600 = (0);
while(true){
if((i__24787__auto___25600 < len__24786__auto___25599)){
args__24793__auto__.push((arguments[i__24787__auto___25600]));

var G__25601 = (i__24787__auto___25600 + (1));
i__24787__auto___25600 = G__25601;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25478__auto___25598))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25478__auto___25598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__25478__auto___25598),args);
});})(g__25478__auto___25598))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__25478__auto___25598){
return (function (seq25533){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25533));
});})(g__25478__auto___25598))
;

var g__25491__auto___25623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__25491__auto___25623){
return (function cljs$spec$impl$gen$any(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25624 = arguments.length;
var i__24787__auto___25625 = (0);
while(true){
if((i__24787__auto___25625 < len__24786__auto___25624)){
args__24793__auto__.push((arguments[i__24787__auto___25625]));

var G__25626 = (i__24787__auto___25625 + (1));
i__24787__auto___25625 = G__25626;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25623))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25623){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25623);
});})(g__25491__auto___25623))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__25491__auto___25623){
return (function (seq25602){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25602));
});})(g__25491__auto___25623))
;


var g__25491__auto___25627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__25491__auto___25627){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25628 = arguments.length;
var i__24787__auto___25629 = (0);
while(true){
if((i__24787__auto___25629 < len__24786__auto___25628)){
args__24793__auto__.push((arguments[i__24787__auto___25629]));

var G__25630 = (i__24787__auto___25629 + (1));
i__24787__auto___25629 = G__25630;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25627))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25627){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25627);
});})(g__25491__auto___25627))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__25491__auto___25627){
return (function (seq25603){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25603));
});})(g__25491__auto___25627))
;


var g__25491__auto___25631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__25491__auto___25631){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25632 = arguments.length;
var i__24787__auto___25633 = (0);
while(true){
if((i__24787__auto___25633 < len__24786__auto___25632)){
args__24793__auto__.push((arguments[i__24787__auto___25633]));

var G__25634 = (i__24787__auto___25633 + (1));
i__24787__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25631))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25631){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25631);
});})(g__25491__auto___25631))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__25491__auto___25631){
return (function (seq25604){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25604));
});})(g__25491__auto___25631))
;


var g__25491__auto___25635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__25491__auto___25635){
return (function cljs$spec$impl$gen$char(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25636 = arguments.length;
var i__24787__auto___25637 = (0);
while(true){
if((i__24787__auto___25637 < len__24786__auto___25636)){
args__24793__auto__.push((arguments[i__24787__auto___25637]));

var G__25638 = (i__24787__auto___25637 + (1));
i__24787__auto___25637 = G__25638;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25635))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25635){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25635);
});})(g__25491__auto___25635))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__25491__auto___25635){
return (function (seq25605){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25605));
});})(g__25491__auto___25635))
;


var g__25491__auto___25639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__25491__auto___25639){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25640 = arguments.length;
var i__24787__auto___25641 = (0);
while(true){
if((i__24787__auto___25641 < len__24786__auto___25640)){
args__24793__auto__.push((arguments[i__24787__auto___25641]));

var G__25642 = (i__24787__auto___25641 + (1));
i__24787__auto___25641 = G__25642;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25639))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25639){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25639);
});})(g__25491__auto___25639))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__25491__auto___25639){
return (function (seq25606){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25606));
});})(g__25491__auto___25639))
;


var g__25491__auto___25643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__25491__auto___25643){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25644 = arguments.length;
var i__24787__auto___25645 = (0);
while(true){
if((i__24787__auto___25645 < len__24786__auto___25644)){
args__24793__auto__.push((arguments[i__24787__auto___25645]));

var G__25646 = (i__24787__auto___25645 + (1));
i__24787__auto___25645 = G__25646;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25643))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25643){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25643);
});})(g__25491__auto___25643))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__25491__auto___25643){
return (function (seq25607){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25607));
});})(g__25491__auto___25643))
;


var g__25491__auto___25647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__25491__auto___25647){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25648 = arguments.length;
var i__24787__auto___25649 = (0);
while(true){
if((i__24787__auto___25649 < len__24786__auto___25648)){
args__24793__auto__.push((arguments[i__24787__auto___25649]));

var G__25650 = (i__24787__auto___25649 + (1));
i__24787__auto___25649 = G__25650;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25647))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25647){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25647);
});})(g__25491__auto___25647))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__25491__auto___25647){
return (function (seq25608){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25608));
});})(g__25491__auto___25647))
;


var g__25491__auto___25651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__25491__auto___25651){
return (function cljs$spec$impl$gen$double(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25652 = arguments.length;
var i__24787__auto___25653 = (0);
while(true){
if((i__24787__auto___25653 < len__24786__auto___25652)){
args__24793__auto__.push((arguments[i__24787__auto___25653]));

var G__25654 = (i__24787__auto___25653 + (1));
i__24787__auto___25653 = G__25654;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25651))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25651){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25651);
});})(g__25491__auto___25651))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__25491__auto___25651){
return (function (seq25609){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25609));
});})(g__25491__auto___25651))
;


var g__25491__auto___25655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__25491__auto___25655){
return (function cljs$spec$impl$gen$int(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25656 = arguments.length;
var i__24787__auto___25657 = (0);
while(true){
if((i__24787__auto___25657 < len__24786__auto___25656)){
args__24793__auto__.push((arguments[i__24787__auto___25657]));

var G__25658 = (i__24787__auto___25657 + (1));
i__24787__auto___25657 = G__25658;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25655))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25655){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25655);
});})(g__25491__auto___25655))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__25491__auto___25655){
return (function (seq25610){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25610));
});})(g__25491__auto___25655))
;


var g__25491__auto___25659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__25491__auto___25659){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25660 = arguments.length;
var i__24787__auto___25661 = (0);
while(true){
if((i__24787__auto___25661 < len__24786__auto___25660)){
args__24793__auto__.push((arguments[i__24787__auto___25661]));

var G__25662 = (i__24787__auto___25661 + (1));
i__24787__auto___25661 = G__25662;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25659))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25659){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25659);
});})(g__25491__auto___25659))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__25491__auto___25659){
return (function (seq25611){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25611));
});})(g__25491__auto___25659))
;


var g__25491__auto___25663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__25491__auto___25663){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25664 = arguments.length;
var i__24787__auto___25665 = (0);
while(true){
if((i__24787__auto___25665 < len__24786__auto___25664)){
args__24793__auto__.push((arguments[i__24787__auto___25665]));

var G__25666 = (i__24787__auto___25665 + (1));
i__24787__auto___25665 = G__25666;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25663))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25663){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25663);
});})(g__25491__auto___25663))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__25491__auto___25663){
return (function (seq25612){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25612));
});})(g__25491__auto___25663))
;


var g__25491__auto___25667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__25491__auto___25667){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25668 = arguments.length;
var i__24787__auto___25669 = (0);
while(true){
if((i__24787__auto___25669 < len__24786__auto___25668)){
args__24793__auto__.push((arguments[i__24787__auto___25669]));

var G__25670 = (i__24787__auto___25669 + (1));
i__24787__auto___25669 = G__25670;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25667))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25667){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25667);
});})(g__25491__auto___25667))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__25491__auto___25667){
return (function (seq25613){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25613));
});})(g__25491__auto___25667))
;


var g__25491__auto___25671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__25491__auto___25671){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25672 = arguments.length;
var i__24787__auto___25673 = (0);
while(true){
if((i__24787__auto___25673 < len__24786__auto___25672)){
args__24793__auto__.push((arguments[i__24787__auto___25673]));

var G__25674 = (i__24787__auto___25673 + (1));
i__24787__auto___25673 = G__25674;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25671))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25671){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25671);
});})(g__25491__auto___25671))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__25491__auto___25671){
return (function (seq25614){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25614));
});})(g__25491__auto___25671))
;


var g__25491__auto___25675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__25491__auto___25675){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25676 = arguments.length;
var i__24787__auto___25677 = (0);
while(true){
if((i__24787__auto___25677 < len__24786__auto___25676)){
args__24793__auto__.push((arguments[i__24787__auto___25677]));

var G__25678 = (i__24787__auto___25677 + (1));
i__24787__auto___25677 = G__25678;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25675))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25675){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25675);
});})(g__25491__auto___25675))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__25491__auto___25675){
return (function (seq25615){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25615));
});})(g__25491__auto___25675))
;


var g__25491__auto___25679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__25491__auto___25679){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25680 = arguments.length;
var i__24787__auto___25681 = (0);
while(true){
if((i__24787__auto___25681 < len__24786__auto___25680)){
args__24793__auto__.push((arguments[i__24787__auto___25681]));

var G__25682 = (i__24787__auto___25681 + (1));
i__24787__auto___25681 = G__25682;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25679))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25679){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25679);
});})(g__25491__auto___25679))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__25491__auto___25679){
return (function (seq25616){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25616));
});})(g__25491__auto___25679))
;


var g__25491__auto___25683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__25491__auto___25683){
return (function cljs$spec$impl$gen$string(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25684 = arguments.length;
var i__24787__auto___25685 = (0);
while(true){
if((i__24787__auto___25685 < len__24786__auto___25684)){
args__24793__auto__.push((arguments[i__24787__auto___25685]));

var G__25686 = (i__24787__auto___25685 + (1));
i__24787__auto___25685 = G__25686;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25683))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25683){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25683);
});})(g__25491__auto___25683))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__25491__auto___25683){
return (function (seq25617){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25617));
});})(g__25491__auto___25683))
;


var g__25491__auto___25687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__25491__auto___25687){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25688 = arguments.length;
var i__24787__auto___25689 = (0);
while(true){
if((i__24787__auto___25689 < len__24786__auto___25688)){
args__24793__auto__.push((arguments[i__24787__auto___25689]));

var G__25690 = (i__24787__auto___25689 + (1));
i__24787__auto___25689 = G__25690;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25687))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25687){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25687);
});})(g__25491__auto___25687))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__25491__auto___25687){
return (function (seq25618){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25618));
});})(g__25491__auto___25687))
;


var g__25491__auto___25691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__25491__auto___25691){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25692 = arguments.length;
var i__24787__auto___25693 = (0);
while(true){
if((i__24787__auto___25693 < len__24786__auto___25692)){
args__24793__auto__.push((arguments[i__24787__auto___25693]));

var G__25694 = (i__24787__auto___25693 + (1));
i__24787__auto___25693 = G__25694;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25691))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25691){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25691);
});})(g__25491__auto___25691))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__25491__auto___25691){
return (function (seq25619){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25619));
});})(g__25491__auto___25691))
;


var g__25491__auto___25695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__25491__auto___25695){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25696 = arguments.length;
var i__24787__auto___25697 = (0);
while(true){
if((i__24787__auto___25697 < len__24786__auto___25696)){
args__24793__auto__.push((arguments[i__24787__auto___25697]));

var G__25698 = (i__24787__auto___25697 + (1));
i__24787__auto___25697 = G__25698;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25695))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25695){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25695);
});})(g__25491__auto___25695))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__25491__auto___25695){
return (function (seq25620){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25620));
});})(g__25491__auto___25695))
;


var g__25491__auto___25699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__25491__auto___25699){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25700 = arguments.length;
var i__24787__auto___25701 = (0);
while(true){
if((i__24787__auto___25701 < len__24786__auto___25700)){
args__24793__auto__.push((arguments[i__24787__auto___25701]));

var G__25702 = (i__24787__auto___25701 + (1));
i__24787__auto___25701 = G__25702;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25699))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25699){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25699);
});})(g__25491__auto___25699))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__25491__auto___25699){
return (function (seq25621){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25621));
});})(g__25491__auto___25699))
;


var g__25491__auto___25703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__25491__auto___25703){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25704 = arguments.length;
var i__24787__auto___25705 = (0);
while(true){
if((i__24787__auto___25705 < len__24786__auto___25704)){
args__24793__auto__.push((arguments[i__24787__auto___25705]));

var G__25706 = (i__24787__auto___25705 + (1));
i__24787__auto___25705 = G__25706;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});})(g__25491__auto___25703))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__25491__auto___25703){
return (function (args){
return cljs.core.deref.call(null,g__25491__auto___25703);
});})(g__25491__auto___25703))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__25491__auto___25703){
return (function (seq25622){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25622));
});})(g__25491__auto___25703))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__24793__auto__ = [];
var len__24786__auto___25709 = arguments.length;
var i__24787__auto___25710 = (0);
while(true){
if((i__24787__auto___25710 < len__24786__auto___25709)){
args__24793__auto__.push((arguments[i__24787__auto___25710]));

var G__25711 = (i__24787__auto___25710 + (1));
i__24787__auto___25710 = G__25711;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__25707_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__25707_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq25708){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25708));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__25712_SHARP_){
return (new Date(p1__25712_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1467728145321