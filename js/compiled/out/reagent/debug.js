// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__13118__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13119__i = 0, G__13119__a = new Array(arguments.length -  0);
while (G__13119__i < G__13119__a.length) {G__13119__a[G__13119__i] = arguments[G__13119__i + 0]; ++G__13119__i;}
  args = new cljs.core.IndexedSeq(G__13119__a,0);
} 
return G__13118__delegate.call(this,args);};
G__13118.cljs$lang$maxFixedArity = 0;
G__13118.cljs$lang$applyTo = (function (arglist__13120){
var args = cljs.core.seq(arglist__13120);
return G__13118__delegate(args);
});
G__13118.cljs$core$IFn$_invoke$arity$variadic = G__13118__delegate;
return G__13118;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13121__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13122__i = 0, G__13122__a = new Array(arguments.length -  0);
while (G__13122__i < G__13122__a.length) {G__13122__a[G__13122__i] = arguments[G__13122__i + 0]; ++G__13122__i;}
  args = new cljs.core.IndexedSeq(G__13122__a,0);
} 
return G__13121__delegate.call(this,args);};
G__13121.cljs$lang$maxFixedArity = 0;
G__13121.cljs$lang$applyTo = (function (arglist__13123){
var args = cljs.core.seq(arglist__13123);
return G__13121__delegate(args);
});
G__13121.cljs$core$IFn$_invoke$arity$variadic = G__13121__delegate;
return G__13121;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1467727628718