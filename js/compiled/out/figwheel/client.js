// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30222 = [];
var len__24786__auto___30225 = arguments.length;
var i__24787__auto___30226 = (0);
while(true){
if((i__24787__auto___30226 < len__24786__auto___30225)){
args30222.push((arguments[i__24787__auto___30226]));

var G__30227 = (i__24787__auto___30226 + (1));
i__24787__auto___30226 = G__30227;
continue;
} else {
}
break;
}

var G__30224 = args30222.length;
switch (G__30224) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30222.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__24793__auto__ = [];
var len__24786__auto___30230 = arguments.length;
var i__24787__auto___30231 = (0);
while(true){
if((i__24787__auto___30231 < len__24786__auto___30230)){
args__24793__auto__.push((arguments[i__24787__auto___30231]));

var G__30232 = (i__24787__auto___30231 + (1));
i__24787__auto___30231 = G__30232;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30229){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30229));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__24793__auto__ = [];
var len__24786__auto___30234 = arguments.length;
var i__24787__auto___30235 = (0);
while(true){
if((i__24787__auto___30235 < len__24786__auto___30234)){
args__24793__auto__.push((arguments[i__24787__auto___30235]));

var G__30236 = (i__24787__auto___30235 + (1));
i__24787__auto___30235 = G__30236;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30233){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30233));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30237 = cljs.core._EQ_;
var expr__30238 = (function (){var or__23603__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30241){if((e30241 instanceof Error)){
var e = e30241;
return false;
} else {
throw e30241;

}
}})();
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30237.call(null,"true",expr__30238))){
return true;
} else {
if(cljs.core.truth_(pred__30237.call(null,"false",expr__30238))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30238)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30243){if((e30243 instanceof Error)){
var e = e30243;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30243;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30244){
var map__30247 = p__30244;
var map__30247__$1 = ((((!((map__30247 == null)))?((((map__30247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30247):map__30247);
var message = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__23603__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__23591__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__23591__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__23591__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29827__auto___30409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29827__auto___30409,ch){
return (function (){
var f__29828__auto__ = (function (){var switch__29804__auto__ = ((function (c__29827__auto___30409,ch){
return (function (state_30378){
var state_val_30379 = (state_30378[(1)]);
if((state_val_30379 === (7))){
var inst_30374 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30380_30410 = state_30378__$1;
(statearr_30380_30410[(2)] = inst_30374);

(statearr_30380_30410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (1))){
var state_30378__$1 = state_30378;
var statearr_30381_30411 = state_30378__$1;
(statearr_30381_30411[(2)] = null);

(statearr_30381_30411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (4))){
var inst_30331 = (state_30378[(7)]);
var inst_30331__$1 = (state_30378[(2)]);
var state_30378__$1 = (function (){var statearr_30382 = state_30378;
(statearr_30382[(7)] = inst_30331__$1);

return statearr_30382;
})();
if(cljs.core.truth_(inst_30331__$1)){
var statearr_30383_30412 = state_30378__$1;
(statearr_30383_30412[(1)] = (5));

} else {
var statearr_30384_30413 = state_30378__$1;
(statearr_30384_30413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (15))){
var inst_30338 = (state_30378[(8)]);
var inst_30353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30338);
var inst_30354 = cljs.core.first.call(null,inst_30353);
var inst_30355 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30354);
var inst_30356 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30355)].join('');
var inst_30357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30356);
var state_30378__$1 = state_30378;
var statearr_30385_30414 = state_30378__$1;
(statearr_30385_30414[(2)] = inst_30357);

(statearr_30385_30414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (13))){
var inst_30362 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30386_30415 = state_30378__$1;
(statearr_30386_30415[(2)] = inst_30362);

(statearr_30386_30415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (6))){
var state_30378__$1 = state_30378;
var statearr_30387_30416 = state_30378__$1;
(statearr_30387_30416[(2)] = null);

(statearr_30387_30416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (17))){
var inst_30360 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30388_30417 = state_30378__$1;
(statearr_30388_30417[(2)] = inst_30360);

(statearr_30388_30417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (3))){
var inst_30376 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30378__$1,inst_30376);
} else {
if((state_val_30379 === (12))){
var inst_30337 = (state_30378[(9)]);
var inst_30351 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30337,opts);
var state_30378__$1 = state_30378;
if(cljs.core.truth_(inst_30351)){
var statearr_30389_30418 = state_30378__$1;
(statearr_30389_30418[(1)] = (15));

} else {
var statearr_30390_30419 = state_30378__$1;
(statearr_30390_30419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (2))){
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30378__$1,(4),ch);
} else {
if((state_val_30379 === (11))){
var inst_30338 = (state_30378[(8)]);
var inst_30343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30344 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30338);
var inst_30345 = cljs.core.async.timeout.call(null,(1000));
var inst_30346 = [inst_30344,inst_30345];
var inst_30347 = (new cljs.core.PersistentVector(null,2,(5),inst_30343,inst_30346,null));
var state_30378__$1 = state_30378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30378__$1,(14),inst_30347);
} else {
if((state_val_30379 === (9))){
var inst_30338 = (state_30378[(8)]);
var inst_30364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30365 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30338);
var inst_30366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30365);
var inst_30367 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30366)].join('');
var inst_30368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30367);
var state_30378__$1 = (function (){var statearr_30391 = state_30378;
(statearr_30391[(10)] = inst_30364);

return statearr_30391;
})();
var statearr_30392_30420 = state_30378__$1;
(statearr_30392_30420[(2)] = inst_30368);

(statearr_30392_30420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (5))){
var inst_30331 = (state_30378[(7)]);
var inst_30333 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30334 = (new cljs.core.PersistentArrayMap(null,2,inst_30333,null));
var inst_30335 = (new cljs.core.PersistentHashSet(null,inst_30334,null));
var inst_30336 = figwheel.client.focus_msgs.call(null,inst_30335,inst_30331);
var inst_30337 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30336);
var inst_30338 = cljs.core.first.call(null,inst_30336);
var inst_30339 = figwheel.client.autoload_QMARK_.call(null);
var state_30378__$1 = (function (){var statearr_30393 = state_30378;
(statearr_30393[(9)] = inst_30337);

(statearr_30393[(8)] = inst_30338);

return statearr_30393;
})();
if(cljs.core.truth_(inst_30339)){
var statearr_30394_30421 = state_30378__$1;
(statearr_30394_30421[(1)] = (8));

} else {
var statearr_30395_30422 = state_30378__$1;
(statearr_30395_30422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (14))){
var inst_30349 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30396_30423 = state_30378__$1;
(statearr_30396_30423[(2)] = inst_30349);

(statearr_30396_30423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (16))){
var state_30378__$1 = state_30378;
var statearr_30397_30424 = state_30378__$1;
(statearr_30397_30424[(2)] = null);

(statearr_30397_30424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (10))){
var inst_30370 = (state_30378[(2)]);
var state_30378__$1 = (function (){var statearr_30398 = state_30378;
(statearr_30398[(11)] = inst_30370);

return statearr_30398;
})();
var statearr_30399_30425 = state_30378__$1;
(statearr_30399_30425[(2)] = null);

(statearr_30399_30425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (8))){
var inst_30337 = (state_30378[(9)]);
var inst_30341 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30337,opts);
var state_30378__$1 = state_30378;
if(cljs.core.truth_(inst_30341)){
var statearr_30400_30426 = state_30378__$1;
(statearr_30400_30426[(1)] = (11));

} else {
var statearr_30401_30427 = state_30378__$1;
(statearr_30401_30427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29827__auto___30409,ch))
;
return ((function (switch__29804__auto__,c__29827__auto___30409,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____0 = (function (){
var statearr_30405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30405[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__);

(statearr_30405[(1)] = (1));

return statearr_30405;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____1 = (function (state_30378){
while(true){
var ret_value__29806__auto__ = (function (){try{while(true){
var result__29807__auto__ = switch__29804__auto__.call(null,state_30378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29807__auto__;
}
break;
}
}catch (e30406){if((e30406 instanceof Object)){
var ex__29808__auto__ = e30406;
var statearr_30407_30428 = state_30378;
(statearr_30407_30428[(5)] = ex__29808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30429 = state_30378;
state_30378 = G__30429;
continue;
} else {
return ret_value__29806__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__ = function(state_30378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____1.call(this,state_30378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29805__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29805__auto__;
})()
;})(switch__29804__auto__,c__29827__auto___30409,ch))
})();
var state__29829__auto__ = (function (){var statearr_30408 = f__29828__auto__.call(null);
(statearr_30408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29827__auto___30409);

return statearr_30408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29829__auto__);
});})(c__29827__auto___30409,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30430_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30430_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30433 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30433){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30432){if((e30432 instanceof Error)){
var e = e30432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30433], null));
} else {
var e = e30432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30433))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30434){
var map__30443 = p__30434;
var map__30443__$1 = ((((!((map__30443 == null)))?((((map__30443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30443):map__30443);
var opts = map__30443__$1;
var build_id = cljs.core.get.call(null,map__30443__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30443,map__30443__$1,opts,build_id){
return (function (p__30445){
var vec__30446 = p__30445;
var seq__30447 = cljs.core.seq.call(null,vec__30446);
var first__30448 = cljs.core.first.call(null,seq__30447);
var seq__30447__$1 = cljs.core.next.call(null,seq__30447);
var map__30449 = first__30448;
var map__30449__$1 = ((((!((map__30449 == null)))?((((map__30449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30449):map__30449);
var msg = map__30449__$1;
var msg_name = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30447__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30446,seq__30447,first__30448,seq__30447__$1,map__30449,map__30449__$1,msg,msg_name,_,map__30443,map__30443__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30446,seq__30447,first__30448,seq__30447__$1,map__30449,map__30449__$1,msg,msg_name,_,map__30443,map__30443__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30443,map__30443__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30457){
var vec__30458 = p__30457;
var seq__30459 = cljs.core.seq.call(null,vec__30458);
var first__30460 = cljs.core.first.call(null,seq__30459);
var seq__30459__$1 = cljs.core.next.call(null,seq__30459);
var map__30461 = first__30460;
var map__30461__$1 = ((((!((map__30461 == null)))?((((map__30461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30461):map__30461);
var msg = map__30461__$1;
var msg_name = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30459__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30463){
var map__30475 = p__30463;
var map__30475__$1 = ((((!((map__30475 == null)))?((((map__30475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30475):map__30475);
var on_compile_warning = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30475,map__30475__$1,on_compile_warning,on_compile_fail){
return (function (p__30477){
var vec__30478 = p__30477;
var seq__30479 = cljs.core.seq.call(null,vec__30478);
var first__30480 = cljs.core.first.call(null,seq__30479);
var seq__30479__$1 = cljs.core.next.call(null,seq__30479);
var map__30481 = first__30480;
var map__30481__$1 = ((((!((map__30481 == null)))?((((map__30481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30481):map__30481);
var msg = map__30481__$1;
var msg_name = cljs.core.get.call(null,map__30481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30479__$1;
var pred__30483 = cljs.core._EQ_;
var expr__30484 = msg_name;
if(cljs.core.truth_(pred__30483.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30484))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30483.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30484))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30475,map__30475__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29827__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29828__auto__ = (function (){var switch__29804__auto__ = ((function (c__29827__auto__,msg_hist,msg_names,msg){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30620 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30620)){
var statearr_30694_30740 = state_30692__$1;
(statearr_30694_30740[(1)] = (8));

} else {
var statearr_30695_30741 = state_30692__$1;
(statearr_30695_30741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (20))){
var inst_30686 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30696_30742 = state_30692__$1;
(statearr_30696_30742[(2)] = inst_30686);

(statearr_30696_30742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (27))){
var inst_30682 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30697_30743 = state_30692__$1;
(statearr_30697_30743[(2)] = inst_30682);

(statearr_30697_30743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var inst_30613 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30613)){
var statearr_30698_30744 = state_30692__$1;
(statearr_30698_30744[(1)] = (2));

} else {
var statearr_30699_30745 = state_30692__$1;
(statearr_30699_30745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (24))){
var inst_30684 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30700_30746 = state_30692__$1;
(statearr_30700_30746[(2)] = inst_30684);

(statearr_30700_30746[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (15))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30701_30747 = state_30692__$1;
(statearr_30701_30747[(2)] = inst_30688);

(statearr_30701_30747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (21))){
var inst_30647 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30702_30748 = state_30692__$1;
(statearr_30702_30748[(2)] = inst_30647);

(statearr_30702_30748[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (31))){
var inst_30671 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30671)){
var statearr_30703_30749 = state_30692__$1;
(statearr_30703_30749[(1)] = (34));

} else {
var statearr_30704_30750 = state_30692__$1;
(statearr_30704_30750[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (32))){
var inst_30680 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30705_30751 = state_30692__$1;
(statearr_30705_30751[(2)] = inst_30680);

(statearr_30705_30751[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (33))){
var inst_30669 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30706_30752 = state_30692__$1;
(statearr_30706_30752[(2)] = inst_30669);

(statearr_30706_30752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var inst_30634 = figwheel.client.heads_up.clear.call(null);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(16),inst_30634);
} else {
if((state_val_30693 === (22))){
var inst_30651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30652 = figwheel.client.heads_up.append_warning_message.call(null,inst_30651);
var state_30692__$1 = state_30692;
var statearr_30707_30753 = state_30692__$1;
(statearr_30707_30753[(2)] = inst_30652);

(statearr_30707_30753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (36))){
var inst_30678 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30708_30754 = state_30692__$1;
(statearr_30708_30754[(2)] = inst_30678);

(statearr_30708_30754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (29))){
var inst_30662 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30709_30755 = state_30692__$1;
(statearr_30709_30755[(2)] = inst_30662);

(statearr_30709_30755[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30615 = (state_30692[(7)]);
var state_30692__$1 = state_30692;
var statearr_30710_30756 = state_30692__$1;
(statearr_30710_30756[(2)] = inst_30615);

(statearr_30710_30756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (28))){
var inst_30658 = (state_30692[(2)]);
var inst_30659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30660 = figwheel.client.heads_up.display_warning.call(null,inst_30659);
var state_30692__$1 = (function (){var statearr_30711 = state_30692;
(statearr_30711[(8)] = inst_30658);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(29),inst_30660);
} else {
if((state_val_30693 === (25))){
var inst_30656 = figwheel.client.heads_up.clear.call(null);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(28),inst_30656);
} else {
if((state_val_30693 === (34))){
var inst_30673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(37),inst_30673);
} else {
if((state_val_30693 === (17))){
var inst_30640 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30712_30757 = state_30692__$1;
(statearr_30712_30757[(2)] = inst_30640);

(statearr_30712_30757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30632 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30632)){
var statearr_30713_30758 = state_30692__$1;
(statearr_30713_30758[(1)] = (13));

} else {
var statearr_30714_30759 = state_30692__$1;
(statearr_30714_30759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (12))){
var inst_30628 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30715_30760 = state_30692__$1;
(statearr_30715_30760[(2)] = inst_30628);

(statearr_30715_30760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (2))){
var inst_30615 = (state_30692[(7)]);
var inst_30615__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30692__$1 = (function (){var statearr_30716 = state_30692;
(statearr_30716[(7)] = inst_30615__$1);

return statearr_30716;
})();
if(cljs.core.truth_(inst_30615__$1)){
var statearr_30717_30761 = state_30692__$1;
(statearr_30717_30761[(1)] = (5));

} else {
var statearr_30718_30762 = state_30692__$1;
(statearr_30718_30762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (23))){
var inst_30654 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30654)){
var statearr_30719_30763 = state_30692__$1;
(statearr_30719_30763[(1)] = (25));

} else {
var statearr_30720_30764 = state_30692__$1;
(statearr_30720_30764[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (35))){
var state_30692__$1 = state_30692;
var statearr_30721_30765 = state_30692__$1;
(statearr_30721_30765[(2)] = null);

(statearr_30721_30765[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (19))){
var inst_30649 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30649)){
var statearr_30722_30766 = state_30692__$1;
(statearr_30722_30766[(1)] = (22));

} else {
var statearr_30723_30767 = state_30692__$1;
(statearr_30723_30767[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (11))){
var inst_30624 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30724_30768 = state_30692__$1;
(statearr_30724_30768[(2)] = inst_30624);

(statearr_30724_30768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var inst_30626 = figwheel.client.heads_up.clear.call(null);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(12),inst_30626);
} else {
if((state_val_30693 === (5))){
var inst_30617 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30692__$1 = state_30692;
var statearr_30725_30769 = state_30692__$1;
(statearr_30725_30769[(2)] = inst_30617);

(statearr_30725_30769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30642 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30642)){
var statearr_30726_30770 = state_30692__$1;
(statearr_30726_30770[(1)] = (18));

} else {
var statearr_30727_30771 = state_30692__$1;
(statearr_30727_30771[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (26))){
var inst_30664 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30664)){
var statearr_30728_30772 = state_30692__$1;
(statearr_30728_30772[(1)] = (30));

} else {
var statearr_30729_30773 = state_30692__$1;
(statearr_30729_30773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (16))){
var inst_30636 = (state_30692[(2)]);
var inst_30637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30638 = figwheel.client.heads_up.display_exception.call(null,inst_30637);
var state_30692__$1 = (function (){var statearr_30730 = state_30692;
(statearr_30730[(9)] = inst_30636);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(17),inst_30638);
} else {
if((state_val_30693 === (30))){
var inst_30666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30667 = figwheel.client.heads_up.display_warning.call(null,inst_30666);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(33),inst_30667);
} else {
if((state_val_30693 === (10))){
var inst_30630 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30731_30774 = state_30692__$1;
(statearr_30731_30774[(2)] = inst_30630);

(statearr_30731_30774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (18))){
var inst_30644 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30645 = figwheel.client.heads_up.display_exception.call(null,inst_30644);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(21),inst_30645);
} else {
if((state_val_30693 === (37))){
var inst_30675 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30732_30775 = state_30692__$1;
(statearr_30732_30775[(2)] = inst_30675);

(statearr_30732_30775[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30622 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(11),inst_30622);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29827__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29804__auto__,c__29827__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____0 = (function (){
var statearr_30736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30736[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__);

(statearr_30736[(1)] = (1));

return statearr_30736;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____1 = (function (state_30692){
while(true){
var ret_value__29806__auto__ = (function (){try{while(true){
var result__29807__auto__ = switch__29804__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29807__auto__;
}
break;
}
}catch (e30737){if((e30737 instanceof Object)){
var ex__29808__auto__ = e30737;
var statearr_30738_30776 = state_30692;
(statearr_30738_30776[(5)] = ex__29808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30777 = state_30692;
state_30692 = G__30777;
continue;
} else {
return ret_value__29806__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29805__auto__;
})()
;})(switch__29804__auto__,c__29827__auto__,msg_hist,msg_names,msg))
})();
var state__29829__auto__ = (function (){var statearr_30739 = f__29828__auto__.call(null);
(statearr_30739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29827__auto__);

return statearr_30739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29829__auto__);
});})(c__29827__auto__,msg_hist,msg_names,msg))
);

return c__29827__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29827__auto___30840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29827__auto___30840,ch){
return (function (){
var f__29828__auto__ = (function (){var switch__29804__auto__ = ((function (c__29827__auto___30840,ch){
return (function (state_30823){
var state_val_30824 = (state_30823[(1)]);
if((state_val_30824 === (1))){
var state_30823__$1 = state_30823;
var statearr_30825_30841 = state_30823__$1;
(statearr_30825_30841[(2)] = null);

(statearr_30825_30841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30824 === (2))){
var state_30823__$1 = state_30823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30823__$1,(4),ch);
} else {
if((state_val_30824 === (3))){
var inst_30821 = (state_30823[(2)]);
var state_30823__$1 = state_30823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30823__$1,inst_30821);
} else {
if((state_val_30824 === (4))){
var inst_30811 = (state_30823[(7)]);
var inst_30811__$1 = (state_30823[(2)]);
var state_30823__$1 = (function (){var statearr_30826 = state_30823;
(statearr_30826[(7)] = inst_30811__$1);

return statearr_30826;
})();
if(cljs.core.truth_(inst_30811__$1)){
var statearr_30827_30842 = state_30823__$1;
(statearr_30827_30842[(1)] = (5));

} else {
var statearr_30828_30843 = state_30823__$1;
(statearr_30828_30843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30824 === (5))){
var inst_30811 = (state_30823[(7)]);
var inst_30813 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30811);
var state_30823__$1 = state_30823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30823__$1,(8),inst_30813);
} else {
if((state_val_30824 === (6))){
var state_30823__$1 = state_30823;
var statearr_30829_30844 = state_30823__$1;
(statearr_30829_30844[(2)] = null);

(statearr_30829_30844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30824 === (7))){
var inst_30819 = (state_30823[(2)]);
var state_30823__$1 = state_30823;
var statearr_30830_30845 = state_30823__$1;
(statearr_30830_30845[(2)] = inst_30819);

(statearr_30830_30845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30824 === (8))){
var inst_30815 = (state_30823[(2)]);
var state_30823__$1 = (function (){var statearr_30831 = state_30823;
(statearr_30831[(8)] = inst_30815);

return statearr_30831;
})();
var statearr_30832_30846 = state_30823__$1;
(statearr_30832_30846[(2)] = null);

(statearr_30832_30846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29827__auto___30840,ch))
;
return ((function (switch__29804__auto__,c__29827__auto___30840,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29805__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29805__auto____0 = (function (){
var statearr_30836 = [null,null,null,null,null,null,null,null,null];
(statearr_30836[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29805__auto__);

(statearr_30836[(1)] = (1));

return statearr_30836;
});
var figwheel$client$heads_up_plugin_$_state_machine__29805__auto____1 = (function (state_30823){
while(true){
var ret_value__29806__auto__ = (function (){try{while(true){
var result__29807__auto__ = switch__29804__auto__.call(null,state_30823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29807__auto__;
}
break;
}
}catch (e30837){if((e30837 instanceof Object)){
var ex__29808__auto__ = e30837;
var statearr_30838_30847 = state_30823;
(statearr_30838_30847[(5)] = ex__29808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30848 = state_30823;
state_30823 = G__30848;
continue;
} else {
return ret_value__29806__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29805__auto__ = function(state_30823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29805__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29805__auto____1.call(this,state_30823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29805__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29805__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29805__auto__;
})()
;})(switch__29804__auto__,c__29827__auto___30840,ch))
})();
var state__29829__auto__ = (function (){var statearr_30839 = f__29828__auto__.call(null);
(statearr_30839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29827__auto___30840);

return statearr_30839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29829__auto__);
});})(c__29827__auto___30840,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29827__auto__){
return (function (){
var f__29828__auto__ = (function (){var switch__29804__auto__ = ((function (c__29827__auto__){
return (function (state_30869){
var state_val_30870 = (state_30869[(1)]);
if((state_val_30870 === (1))){
var inst_30864 = cljs.core.async.timeout.call(null,(3000));
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30869__$1,(2),inst_30864);
} else {
if((state_val_30870 === (2))){
var inst_30866 = (state_30869[(2)]);
var inst_30867 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30869__$1 = (function (){var statearr_30871 = state_30869;
(statearr_30871[(7)] = inst_30866);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30869__$1,inst_30867);
} else {
return null;
}
}
});})(c__29827__auto__))
;
return ((function (switch__29804__auto__,c__29827__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____0 = (function (){
var statearr_30875 = [null,null,null,null,null,null,null,null];
(statearr_30875[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__);

(statearr_30875[(1)] = (1));

return statearr_30875;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____1 = (function (state_30869){
while(true){
var ret_value__29806__auto__ = (function (){try{while(true){
var result__29807__auto__ = switch__29804__auto__.call(null,state_30869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29807__auto__;
}
break;
}
}catch (e30876){if((e30876 instanceof Object)){
var ex__29808__auto__ = e30876;
var statearr_30877_30879 = state_30869;
(statearr_30877_30879[(5)] = ex__29808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30880 = state_30869;
state_30869 = G__30880;
continue;
} else {
return ret_value__29806__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__ = function(state_30869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____1.call(this,state_30869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29805__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29805__auto__;
})()
;})(switch__29804__auto__,c__29827__auto__))
})();
var state__29829__auto__ = (function (){var statearr_30878 = f__29828__auto__.call(null);
(statearr_30878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29827__auto__);

return statearr_30878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29829__auto__);
});})(c__29827__auto__))
);

return c__29827__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6369__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6369__auto__)){
var figwheel_version = temp__6369__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29827__auto__,figwheel_version,temp__6369__auto__){
return (function (){
var f__29828__auto__ = (function (){var switch__29804__auto__ = ((function (c__29827__auto__,figwheel_version,temp__6369__auto__){
return (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (1))){
var inst_30897 = cljs.core.async.timeout.call(null,(2000));
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30903__$1,(2),inst_30897);
} else {
if((state_val_30904 === (2))){
var inst_30899 = (state_30903[(2)]);
var inst_30900 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30901 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30900);
var state_30903__$1 = (function (){var statearr_30905 = state_30903;
(statearr_30905[(7)] = inst_30899);

return statearr_30905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30903__$1,inst_30901);
} else {
return null;
}
}
});})(c__29827__auto__,figwheel_version,temp__6369__auto__))
;
return ((function (switch__29804__auto__,c__29827__auto__,figwheel_version,temp__6369__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____1 = (function (state_30903){
while(true){
var ret_value__29806__auto__ = (function (){try{while(true){
var result__29807__auto__ = switch__29804__auto__.call(null,state_30903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29807__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__29808__auto__ = e30910;
var statearr_30911_30913 = state_30903;
(statearr_30911_30913[(5)] = ex__29808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30914 = state_30903;
state_30903 = G__30914;
continue;
} else {
return ret_value__29806__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29805__auto__;
})()
;})(switch__29804__auto__,c__29827__auto__,figwheel_version,temp__6369__auto__))
})();
var state__29829__auto__ = (function (){var statearr_30912 = f__29828__auto__.call(null);
(statearr_30912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29827__auto__);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29829__auto__);
});})(c__29827__auto__,figwheel_version,temp__6369__auto__))
);

return c__29827__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30915){
var map__30919 = p__30915;
var map__30919__$1 = ((((!((map__30919 == null)))?((((map__30919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30919):map__30919);
var file = cljs.core.get.call(null,map__30919__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30919__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30919__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30921 = "";
var G__30921__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30921),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30921);
var G__30921__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30921__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30921__$1);
if(cljs.core.truth_((function (){var and__23591__auto__ = line;
if(cljs.core.truth_(and__23591__auto__)){
return column;
} else {
return and__23591__auto__;
}
})())){
return [cljs.core.str(G__30921__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30921__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30922){
var map__30929 = p__30922;
var map__30929__$1 = ((((!((map__30929 == null)))?((((map__30929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30929):map__30929);
var ed = map__30929__$1;
var formatted_exception = cljs.core.get.call(null,map__30929__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30929__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30929__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30931_30935 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30932_30936 = null;
var count__30933_30937 = (0);
var i__30934_30938 = (0);
while(true){
if((i__30934_30938 < count__30933_30937)){
var msg_30939 = cljs.core._nth.call(null,chunk__30932_30936,i__30934_30938);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30939);

var G__30940 = seq__30931_30935;
var G__30941 = chunk__30932_30936;
var G__30942 = count__30933_30937;
var G__30943 = (i__30934_30938 + (1));
seq__30931_30935 = G__30940;
chunk__30932_30936 = G__30941;
count__30933_30937 = G__30942;
i__30934_30938 = G__30943;
continue;
} else {
var temp__6369__auto___30944 = cljs.core.seq.call(null,seq__30931_30935);
if(temp__6369__auto___30944){
var seq__30931_30945__$1 = temp__6369__auto___30944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30931_30945__$1)){
var c__24506__auto___30946 = cljs.core.chunk_first.call(null,seq__30931_30945__$1);
var G__30947 = cljs.core.chunk_rest.call(null,seq__30931_30945__$1);
var G__30948 = c__24506__auto___30946;
var G__30949 = cljs.core.count.call(null,c__24506__auto___30946);
var G__30950 = (0);
seq__30931_30935 = G__30947;
chunk__30932_30936 = G__30948;
count__30933_30937 = G__30949;
i__30934_30938 = G__30950;
continue;
} else {
var msg_30951 = cljs.core.first.call(null,seq__30931_30945__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30951);

var G__30952 = cljs.core.next.call(null,seq__30931_30945__$1);
var G__30953 = null;
var G__30954 = (0);
var G__30955 = (0);
seq__30931_30935 = G__30952;
chunk__30932_30936 = G__30953;
count__30933_30937 = G__30954;
i__30934_30938 = G__30955;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30956){
var map__30959 = p__30956;
var map__30959__$1 = ((((!((map__30959 == null)))?((((map__30959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30959):map__30959);
var w = map__30959__$1;
var message = cljs.core.get.call(null,map__30959__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__23591__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__23591__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__23591__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30971 = cljs.core.seq.call(null,plugins);
var chunk__30972 = null;
var count__30973 = (0);
var i__30974 = (0);
while(true){
if((i__30974 < count__30973)){
var vec__30975 = cljs.core._nth.call(null,chunk__30972,i__30974);
var k = cljs.core.nth.call(null,vec__30975,(0),null);
var plugin = cljs.core.nth.call(null,vec__30975,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30981 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30971,chunk__30972,count__30973,i__30974,pl_30981,vec__30975,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30981.call(null,msg_hist);
});})(seq__30971,chunk__30972,count__30973,i__30974,pl_30981,vec__30975,k,plugin))
);
} else {
}

var G__30982 = seq__30971;
var G__30983 = chunk__30972;
var G__30984 = count__30973;
var G__30985 = (i__30974 + (1));
seq__30971 = G__30982;
chunk__30972 = G__30983;
count__30973 = G__30984;
i__30974 = G__30985;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__30971);
if(temp__6369__auto__){
var seq__30971__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30971__$1)){
var c__24506__auto__ = cljs.core.chunk_first.call(null,seq__30971__$1);
var G__30986 = cljs.core.chunk_rest.call(null,seq__30971__$1);
var G__30987 = c__24506__auto__;
var G__30988 = cljs.core.count.call(null,c__24506__auto__);
var G__30989 = (0);
seq__30971 = G__30986;
chunk__30972 = G__30987;
count__30973 = G__30988;
i__30974 = G__30989;
continue;
} else {
var vec__30978 = cljs.core.first.call(null,seq__30971__$1);
var k = cljs.core.nth.call(null,vec__30978,(0),null);
var plugin = cljs.core.nth.call(null,vec__30978,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30990 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30971,chunk__30972,count__30973,i__30974,pl_30990,vec__30978,k,plugin,seq__30971__$1,temp__6369__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30990.call(null,msg_hist);
});})(seq__30971,chunk__30972,count__30973,i__30974,pl_30990,vec__30978,k,plugin,seq__30971__$1,temp__6369__auto__))
);
} else {
}

var G__30991 = cljs.core.next.call(null,seq__30971__$1);
var G__30992 = null;
var G__30993 = (0);
var G__30994 = (0);
seq__30971 = G__30991;
chunk__30972 = G__30992;
count__30973 = G__30993;
i__30974 = G__30994;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30995 = [];
var len__24786__auto___31002 = arguments.length;
var i__24787__auto___31003 = (0);
while(true){
if((i__24787__auto___31003 < len__24786__auto___31002)){
args30995.push((arguments[i__24787__auto___31003]));

var G__31004 = (i__24787__auto___31003 + (1));
i__24787__auto___31003 = G__31004;
continue;
} else {
}
break;
}

var G__30997 = args30995.length;
switch (G__30997) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30995.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30998_31006 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30999_31007 = null;
var count__31000_31008 = (0);
var i__31001_31009 = (0);
while(true){
if((i__31001_31009 < count__31000_31008)){
var msg_31010 = cljs.core._nth.call(null,chunk__30999_31007,i__31001_31009);
figwheel.client.socket.handle_incoming_message.call(null,msg_31010);

var G__31011 = seq__30998_31006;
var G__31012 = chunk__30999_31007;
var G__31013 = count__31000_31008;
var G__31014 = (i__31001_31009 + (1));
seq__30998_31006 = G__31011;
chunk__30999_31007 = G__31012;
count__31000_31008 = G__31013;
i__31001_31009 = G__31014;
continue;
} else {
var temp__6369__auto___31015 = cljs.core.seq.call(null,seq__30998_31006);
if(temp__6369__auto___31015){
var seq__30998_31016__$1 = temp__6369__auto___31015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30998_31016__$1)){
var c__24506__auto___31017 = cljs.core.chunk_first.call(null,seq__30998_31016__$1);
var G__31018 = cljs.core.chunk_rest.call(null,seq__30998_31016__$1);
var G__31019 = c__24506__auto___31017;
var G__31020 = cljs.core.count.call(null,c__24506__auto___31017);
var G__31021 = (0);
seq__30998_31006 = G__31018;
chunk__30999_31007 = G__31019;
count__31000_31008 = G__31020;
i__31001_31009 = G__31021;
continue;
} else {
var msg_31022 = cljs.core.first.call(null,seq__30998_31016__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31022);

var G__31023 = cljs.core.next.call(null,seq__30998_31016__$1);
var G__31024 = null;
var G__31025 = (0);
var G__31026 = (0);
seq__30998_31006 = G__31023;
chunk__30999_31007 = G__31024;
count__31000_31008 = G__31025;
i__31001_31009 = G__31026;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__24793__auto__ = [];
var len__24786__auto___31031 = arguments.length;
var i__24787__auto___31032 = (0);
while(true){
if((i__24787__auto___31032 < len__24786__auto___31031)){
args__24793__auto__.push((arguments[i__24787__auto___31032]));

var G__31033 = (i__24787__auto___31032 + (1));
i__24787__auto___31032 = G__31033;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((0) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__24794__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31028){
var map__31029 = p__31028;
var map__31029__$1 = ((((!((map__31029 == null)))?((((map__31029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31029):map__31029);
var opts = map__31029__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31027){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31027));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31035){if((e31035 instanceof Error)){
var e = e31035;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31035;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31039){
var map__31040 = p__31039;
var map__31040__$1 = ((((!((map__31040 == null)))?((((map__31040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);
var msg_name = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467728156941