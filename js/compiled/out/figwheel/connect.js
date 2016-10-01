// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('personal_space_site.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27016__delegate = function (x){
if(cljs.core.truth_(personal_space_site.core.on_js_reload)){
return cljs.core.apply.call(null,personal_space_site.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'personal-space-site.core/on-js-reload' is missing");
}
};
var G__27016 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27017__i = 0, G__27017__a = new Array(arguments.length -  0);
while (G__27017__i < G__27017__a.length) {G__27017__a[G__27017__i] = arguments[G__27017__i + 0]; ++G__27017__i;}
  x = new cljs.core.IndexedSeq(G__27017__a,0);
} 
return G__27016__delegate.call(this,x);};
G__27016.cljs$lang$maxFixedArity = 0;
G__27016.cljs$lang$applyTo = (function (arglist__27018){
var x = cljs.core.seq(arglist__27018);
return G__27016__delegate(x);
});
G__27016.cljs$core$IFn$_invoke$arity$variadic = G__27016__delegate;
return G__27016;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1474916450118