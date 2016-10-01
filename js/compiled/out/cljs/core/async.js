// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27253 = [];
var len__24786__auto___27259 = arguments.length;
var i__24787__auto___27260 = (0);
while(true){
if((i__24787__auto___27260 < len__24786__auto___27259)){
args27253.push((arguments[i__24787__auto___27260]));

var G__27261 = (i__24787__auto___27260 + (1));
i__24787__auto___27260 = G__27261;
continue;
} else {
}
break;
}

var G__27255 = args27253.length;
switch (G__27255) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27253.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27256 = (function (f,blockable,meta27257){
this.f = f;
this.blockable = blockable;
this.meta27257 = meta27257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27258,meta27257__$1){
var self__ = this;
var _27258__$1 = this;
return (new cljs.core.async.t_cljs$core$async27256(self__.f,self__.blockable,meta27257__$1));
});

cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27258){
var self__ = this;
var _27258__$1 = this;
return self__.meta27257;
});

cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27257","meta27257",-331032076,null)], null);
});

cljs.core.async.t_cljs$core$async27256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27256";

cljs.core.async.t_cljs$core$async27256.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async27256");
});

cljs.core.async.__GT_t_cljs$core$async27256 = (function cljs$core$async$__GT_t_cljs$core$async27256(f__$1,blockable__$1,meta27257){
return (new cljs.core.async.t_cljs$core$async27256(f__$1,blockable__$1,meta27257));
});

}

return (new cljs.core.async.t_cljs$core$async27256(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27265 = [];
var len__24786__auto___27268 = arguments.length;
var i__24787__auto___27269 = (0);
while(true){
if((i__24787__auto___27269 < len__24786__auto___27268)){
args27265.push((arguments[i__24787__auto___27269]));

var G__27270 = (i__24787__auto___27269 + (1));
i__24787__auto___27269 = G__27270;
continue;
} else {
}
break;
}

var G__27267 = args27265.length;
switch (G__27267) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27265.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27272 = [];
var len__24786__auto___27275 = arguments.length;
var i__24787__auto___27276 = (0);
while(true){
if((i__24787__auto___27276 < len__24786__auto___27275)){
args27272.push((arguments[i__24787__auto___27276]));

var G__27277 = (i__24787__auto___27276 + (1));
i__24787__auto___27276 = G__27277;
continue;
} else {
}
break;
}

var G__27274 = args27272.length;
switch (G__27274) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27272.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27279 = [];
var len__24786__auto___27282 = arguments.length;
var i__24787__auto___27283 = (0);
while(true){
if((i__24787__auto___27283 < len__24786__auto___27282)){
args27279.push((arguments[i__24787__auto___27283]));

var G__27284 = (i__24787__auto___27283 + (1));
i__24787__auto___27283 = G__27284;
continue;
} else {
}
break;
}

var G__27281 = args27279.length;
switch (G__27281) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27279.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27286 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27286);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27286,ret){
return (function (){
return fn1.call(null,val_27286);
});})(val_27286,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27287 = [];
var len__24786__auto___27290 = arguments.length;
var i__24787__auto___27291 = (0);
while(true){
if((i__24787__auto___27291 < len__24786__auto___27290)){
args27287.push((arguments[i__24787__auto___27291]));

var G__27292 = (i__24787__auto___27291 + (1));
i__24787__auto___27291 = G__27292;
continue;
} else {
}
break;
}

var G__27289 = args27287.length;
switch (G__27289) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27287.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6367__auto__)){
var ret = temp__6367__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6367__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6367__auto__)){
var retb = temp__6367__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6367__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6367__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__24616__auto___27294 = n;
var x_27295 = (0);
while(true){
if((x_27295 < n__24616__auto___27294)){
(a[x_27295] = (0));

var G__27296 = (x_27295 + (1));
x_27295 = G__27296;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27297 = (i + (1));
i = G__27297;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27301 = (function (alt_flag,flag,meta27302){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27302 = meta27302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27303,meta27302__$1){
var self__ = this;
var _27303__$1 = this;
return (new cljs.core.async.t_cljs$core$async27301(self__.alt_flag,self__.flag,meta27302__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27303){
var self__ = this;
var _27303__$1 = this;
return self__.meta27302;
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27302","meta27302",-9928124,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27301";

cljs.core.async.t_cljs$core$async27301.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async27301");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27301 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27301(alt_flag__$1,flag__$1,meta27302){
return (new cljs.core.async.t_cljs$core$async27301(alt_flag__$1,flag__$1,meta27302));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27301(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27307 = (function (alt_handler,flag,cb,meta27308){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27308 = meta27308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27309,meta27308__$1){
var self__ = this;
var _27309__$1 = this;
return (new cljs.core.async.t_cljs$core$async27307(self__.alt_handler,self__.flag,self__.cb,meta27308__$1));
});

cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27309){
var self__ = this;
var _27309__$1 = this;
return self__.meta27308;
});

cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27308","meta27308",460025624,null)], null);
});

cljs.core.async.t_cljs$core$async27307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27307";

cljs.core.async.t_cljs$core$async27307.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async27307");
});

cljs.core.async.__GT_t_cljs$core$async27307 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27307(alt_handler__$1,flag__$1,cb__$1,meta27308){
return (new cljs.core.async.t_cljs$core$async27307(alt_handler__$1,flag__$1,cb__$1,meta27308));
});

}

return (new cljs.core.async.t_cljs$core$async27307(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27310_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27310_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27311_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27311_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23603__auto__ = wport;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27312 = (i + (1));
i = G__27312;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23603__auto__ = ret;
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6369__auto__ = (function (){var and__23591__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23591__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23591__auto__;
}
})();
if(cljs.core.truth_(temp__6369__auto__)){
var got = temp__6369__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__24793__auto__ = [];
var len__24786__auto___27318 = arguments.length;
var i__24787__auto___27319 = (0);
while(true){
if((i__24787__auto___27319 < len__24786__auto___27318)){
args__24793__auto__.push((arguments[i__24787__auto___27319]));

var G__27320 = (i__24787__auto___27319 + (1));
i__24787__auto___27319 = G__27320;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((1) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24794__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27315){
var map__27316 = p__27315;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var opts = map__27316__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27313){
var G__27314 = cljs.core.first.call(null,seq27313);
var seq27313__$1 = cljs.core.next.call(null,seq27313);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27314,seq27313__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27321 = [];
var len__24786__auto___27371 = arguments.length;
var i__24787__auto___27372 = (0);
while(true){
if((i__24787__auto___27372 < len__24786__auto___27371)){
args27321.push((arguments[i__24787__auto___27372]));

var G__27373 = (i__24787__auto___27372 + (1));
i__24787__auto___27372 = G__27373;
continue;
} else {
}
break;
}

var G__27323 = args27321.length;
switch (G__27323) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27321.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26206__auto___27375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___27375){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___27375){
return (function (state_27347){
var state_val_27348 = (state_27347[(1)]);
if((state_val_27348 === (7))){
var inst_27343 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27349_27376 = state_27347__$1;
(statearr_27349_27376[(2)] = inst_27343);

(statearr_27349_27376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (1))){
var state_27347__$1 = state_27347;
var statearr_27350_27377 = state_27347__$1;
(statearr_27350_27377[(2)] = null);

(statearr_27350_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (4))){
var inst_27326 = (state_27347[(7)]);
var inst_27326__$1 = (state_27347[(2)]);
var inst_27327 = (inst_27326__$1 == null);
var state_27347__$1 = (function (){var statearr_27351 = state_27347;
(statearr_27351[(7)] = inst_27326__$1);

return statearr_27351;
})();
if(cljs.core.truth_(inst_27327)){
var statearr_27352_27378 = state_27347__$1;
(statearr_27352_27378[(1)] = (5));

} else {
var statearr_27353_27379 = state_27347__$1;
(statearr_27353_27379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (13))){
var state_27347__$1 = state_27347;
var statearr_27354_27380 = state_27347__$1;
(statearr_27354_27380[(2)] = null);

(statearr_27354_27380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (6))){
var inst_27326 = (state_27347[(7)]);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27347__$1,(11),to,inst_27326);
} else {
if((state_val_27348 === (3))){
var inst_27345 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27347__$1,inst_27345);
} else {
if((state_val_27348 === (12))){
var state_27347__$1 = state_27347;
var statearr_27355_27381 = state_27347__$1;
(statearr_27355_27381[(2)] = null);

(statearr_27355_27381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (2))){
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27347__$1,(4),from);
} else {
if((state_val_27348 === (11))){
var inst_27336 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
if(cljs.core.truth_(inst_27336)){
var statearr_27356_27382 = state_27347__$1;
(statearr_27356_27382[(1)] = (12));

} else {
var statearr_27357_27383 = state_27347__$1;
(statearr_27357_27383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (9))){
var state_27347__$1 = state_27347;
var statearr_27358_27384 = state_27347__$1;
(statearr_27358_27384[(2)] = null);

(statearr_27358_27384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (5))){
var state_27347__$1 = state_27347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27359_27385 = state_27347__$1;
(statearr_27359_27385[(1)] = (8));

} else {
var statearr_27360_27386 = state_27347__$1;
(statearr_27360_27386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (14))){
var inst_27341 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27361_27387 = state_27347__$1;
(statearr_27361_27387[(2)] = inst_27341);

(statearr_27361_27387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (10))){
var inst_27333 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27362_27388 = state_27347__$1;
(statearr_27362_27388[(2)] = inst_27333);

(statearr_27362_27388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (8))){
var inst_27330 = cljs.core.async.close_BANG_.call(null,to);
var state_27347__$1 = state_27347;
var statearr_27363_27389 = state_27347__$1;
(statearr_27363_27389[(2)] = inst_27330);

(statearr_27363_27389[(1)] = (10));


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
});})(c__26206__auto___27375))
;
return ((function (switch__26183__auto__,c__26206__auto___27375){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_27367 = [null,null,null,null,null,null,null,null];
(statearr_27367[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_27367[(1)] = (1));

return statearr_27367;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_27347){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27368){if((e27368 instanceof Object)){
var ex__26187__auto__ = e27368;
var statearr_27369_27390 = state_27347;
(statearr_27369_27390[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27391 = state_27347;
state_27347 = G__27391;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_27347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_27347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___27375))
})();
var state__26208__auto__ = (function (){var statearr_27370 = f__26207__auto__.call(null);
(statearr_27370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27375);

return statearr_27370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___27375))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27579){
var vec__27580 = p__27579;
var v = cljs.core.nth.call(null,vec__27580,(0),null);
var p = cljs.core.nth.call(null,vec__27580,(1),null);
var job = vec__27580;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26206__auto___27766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results){
return (function (state_27587){
var state_val_27588 = (state_27587[(1)]);
if((state_val_27588 === (1))){
var state_27587__$1 = state_27587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27587__$1,(2),res,v);
} else {
if((state_val_27588 === (2))){
var inst_27584 = (state_27587[(2)]);
var inst_27585 = cljs.core.async.close_BANG_.call(null,res);
var state_27587__$1 = (function (){var statearr_27589 = state_27587;
(statearr_27589[(7)] = inst_27584);

return statearr_27589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27587__$1,inst_27585);
} else {
return null;
}
}
});})(c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results))
;
return ((function (switch__26183__auto__,c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_27593 = [null,null,null,null,null,null,null,null];
(statearr_27593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__);

(statearr_27593[(1)] = (1));

return statearr_27593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1 = (function (state_27587){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object)){
var ex__26187__auto__ = e27594;
var statearr_27595_27767 = state_27587;
(statearr_27595_27767[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27768 = state_27587;
state_27587 = G__27768;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = function(state_27587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1.call(this,state_27587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results))
})();
var state__26208__auto__ = (function (){var statearr_27596 = f__26207__auto__.call(null);
(statearr_27596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27766);

return statearr_27596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___27766,res,vec__27580,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27597){
var vec__27598 = p__27597;
var v = cljs.core.nth.call(null,vec__27598,(0),null);
var p = cljs.core.nth.call(null,vec__27598,(1),null);
var job = vec__27598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__24616__auto___27769 = n;
var __27770 = (0);
while(true){
if((__27770 < n__24616__auto___27769)){
var G__27601_27771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27601_27771) {
case "compute":
var c__26206__auto___27773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27770,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (__27770,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (1))){
var state_27614__$1 = state_27614;
var statearr_27616_27774 = state_27614__$1;
(statearr_27616_27774[(2)] = null);

(statearr_27616_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (2))){
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(4),jobs);
} else {
if((state_val_27615 === (3))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
if((state_val_27615 === (4))){
var inst_27604 = (state_27614[(2)]);
var inst_27605 = process.call(null,inst_27604);
var state_27614__$1 = state_27614;
if(cljs.core.truth_(inst_27605)){
var statearr_27617_27775 = state_27614__$1;
(statearr_27617_27775[(1)] = (5));

} else {
var statearr_27618_27776 = state_27614__$1;
(statearr_27618_27776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var state_27614__$1 = state_27614;
var statearr_27619_27777 = state_27614__$1;
(statearr_27619_27777[(2)] = null);

(statearr_27619_27777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (6))){
var state_27614__$1 = state_27614;
var statearr_27620_27778 = state_27614__$1;
(statearr_27620_27778[(2)] = null);

(statearr_27620_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (7))){
var inst_27610 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27621_27779 = state_27614__$1;
(statearr_27621_27779[(2)] = inst_27610);

(statearr_27621_27779[(1)] = (3));


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
});})(__27770,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
;
return ((function (__27770,switch__26183__auto__,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_27625 = [null,null,null,null,null,null,null];
(statearr_27625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__);

(statearr_27625[(1)] = (1));

return statearr_27625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1 = (function (state_27614){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27626){if((e27626 instanceof Object)){
var ex__26187__auto__ = e27626;
var statearr_27627_27780 = state_27614;
(statearr_27627_27780[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27781 = state_27614;
state_27614 = G__27781;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__;
})()
;})(__27770,switch__26183__auto__,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
})();
var state__26208__auto__ = (function (){var statearr_27628 = f__26207__auto__.call(null);
(statearr_27628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27773);

return statearr_27628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(__27770,c__26206__auto___27773,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
);


break;
case "async":
var c__26206__auto___27782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27770,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (__27770,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function (state_27641){
var state_val_27642 = (state_27641[(1)]);
if((state_val_27642 === (1))){
var state_27641__$1 = state_27641;
var statearr_27643_27783 = state_27641__$1;
(statearr_27643_27783[(2)] = null);

(statearr_27643_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (2))){
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27641__$1,(4),jobs);
} else {
if((state_val_27642 === (3))){
var inst_27639 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27641__$1,inst_27639);
} else {
if((state_val_27642 === (4))){
var inst_27631 = (state_27641[(2)]);
var inst_27632 = async.call(null,inst_27631);
var state_27641__$1 = state_27641;
if(cljs.core.truth_(inst_27632)){
var statearr_27644_27784 = state_27641__$1;
(statearr_27644_27784[(1)] = (5));

} else {
var statearr_27645_27785 = state_27641__$1;
(statearr_27645_27785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (5))){
var state_27641__$1 = state_27641;
var statearr_27646_27786 = state_27641__$1;
(statearr_27646_27786[(2)] = null);

(statearr_27646_27786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (6))){
var state_27641__$1 = state_27641;
var statearr_27647_27787 = state_27641__$1;
(statearr_27647_27787[(2)] = null);

(statearr_27647_27787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (7))){
var inst_27637 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27648_27788 = state_27641__$1;
(statearr_27648_27788[(2)] = inst_27637);

(statearr_27648_27788[(1)] = (3));


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
});})(__27770,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
;
return ((function (__27770,switch__26183__auto__,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_27652 = [null,null,null,null,null,null,null];
(statearr_27652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__);

(statearr_27652[(1)] = (1));

return statearr_27652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1 = (function (state_27641){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27653){if((e27653 instanceof Object)){
var ex__26187__auto__ = e27653;
var statearr_27654_27789 = state_27641;
(statearr_27654_27789[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27790 = state_27641;
state_27641 = G__27790;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = function(state_27641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1.call(this,state_27641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__;
})()
;})(__27770,switch__26183__auto__,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
})();
var state__26208__auto__ = (function (){var statearr_27655 = f__26207__auto__.call(null);
(statearr_27655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27782);

return statearr_27655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(__27770,c__26206__auto___27782,G__27601_27771,n__24616__auto___27769,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27791 = (__27770 + (1));
__27770 = G__27791;
continue;
} else {
}
break;
}

var c__26206__auto___27792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___27792,jobs,results,process,async){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___27792,jobs,results,process,async){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (1))){
var state_27677__$1 = state_27677;
var statearr_27679_27793 = state_27677__$1;
(statearr_27679_27793[(2)] = null);

(statearr_27679_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (2))){
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(4),from);
} else {
if((state_val_27678 === (3))){
var inst_27675 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27677__$1,inst_27675);
} else {
if((state_val_27678 === (4))){
var inst_27658 = (state_27677[(7)]);
var inst_27658__$1 = (state_27677[(2)]);
var inst_27659 = (inst_27658__$1 == null);
var state_27677__$1 = (function (){var statearr_27680 = state_27677;
(statearr_27680[(7)] = inst_27658__$1);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27659)){
var statearr_27681_27794 = state_27677__$1;
(statearr_27681_27794[(1)] = (5));

} else {
var statearr_27682_27795 = state_27677__$1;
(statearr_27682_27795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (5))){
var inst_27661 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27677__$1 = state_27677;
var statearr_27683_27796 = state_27677__$1;
(statearr_27683_27796[(2)] = inst_27661);

(statearr_27683_27796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (6))){
var inst_27658 = (state_27677[(7)]);
var inst_27663 = (state_27677[(8)]);
var inst_27663__$1 = cljs.core.async.chan.call(null,(1));
var inst_27664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27665 = [inst_27658,inst_27663__$1];
var inst_27666 = (new cljs.core.PersistentVector(null,2,(5),inst_27664,inst_27665,null));
var state_27677__$1 = (function (){var statearr_27684 = state_27677;
(statearr_27684[(8)] = inst_27663__$1);

return statearr_27684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27677__$1,(8),jobs,inst_27666);
} else {
if((state_val_27678 === (7))){
var inst_27673 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27685_27797 = state_27677__$1;
(statearr_27685_27797[(2)] = inst_27673);

(statearr_27685_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (8))){
var inst_27663 = (state_27677[(8)]);
var inst_27668 = (state_27677[(2)]);
var state_27677__$1 = (function (){var statearr_27686 = state_27677;
(statearr_27686[(9)] = inst_27668);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27677__$1,(9),results,inst_27663);
} else {
if((state_val_27678 === (9))){
var inst_27670 = (state_27677[(2)]);
var state_27677__$1 = (function (){var statearr_27687 = state_27677;
(statearr_27687[(10)] = inst_27670);

return statearr_27687;
})();
var statearr_27688_27798 = state_27677__$1;
(statearr_27688_27798[(2)] = null);

(statearr_27688_27798[(1)] = (2));


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
});})(c__26206__auto___27792,jobs,results,process,async))
;
return ((function (switch__26183__auto__,c__26206__auto___27792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_27692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__);

(statearr_27692[(1)] = (1));

return statearr_27692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1 = (function (state_27677){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27693){if((e27693 instanceof Object)){
var ex__26187__auto__ = e27693;
var statearr_27694_27799 = state_27677;
(statearr_27694_27799[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27800 = state_27677;
state_27677 = G__27800;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___27792,jobs,results,process,async))
})();
var state__26208__auto__ = (function (){var statearr_27695 = f__26207__auto__.call(null);
(statearr_27695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27792);

return statearr_27695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___27792,jobs,results,process,async))
);


var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__,jobs,results,process,async){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__,jobs,results,process,async){
return (function (state_27733){
var state_val_27734 = (state_27733[(1)]);
if((state_val_27734 === (7))){
var inst_27729 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
var statearr_27735_27801 = state_27733__$1;
(statearr_27735_27801[(2)] = inst_27729);

(statearr_27735_27801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (20))){
var state_27733__$1 = state_27733;
var statearr_27736_27802 = state_27733__$1;
(statearr_27736_27802[(2)] = null);

(statearr_27736_27802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (1))){
var state_27733__$1 = state_27733;
var statearr_27737_27803 = state_27733__$1;
(statearr_27737_27803[(2)] = null);

(statearr_27737_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (4))){
var inst_27698 = (state_27733[(7)]);
var inst_27698__$1 = (state_27733[(2)]);
var inst_27699 = (inst_27698__$1 == null);
var state_27733__$1 = (function (){var statearr_27738 = state_27733;
(statearr_27738[(7)] = inst_27698__$1);

return statearr_27738;
})();
if(cljs.core.truth_(inst_27699)){
var statearr_27739_27804 = state_27733__$1;
(statearr_27739_27804[(1)] = (5));

} else {
var statearr_27740_27805 = state_27733__$1;
(statearr_27740_27805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (15))){
var inst_27711 = (state_27733[(8)]);
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27733__$1,(18),to,inst_27711);
} else {
if((state_val_27734 === (21))){
var inst_27724 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
var statearr_27741_27806 = state_27733__$1;
(statearr_27741_27806[(2)] = inst_27724);

(statearr_27741_27806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (13))){
var inst_27726 = (state_27733[(2)]);
var state_27733__$1 = (function (){var statearr_27742 = state_27733;
(statearr_27742[(9)] = inst_27726);

return statearr_27742;
})();
var statearr_27743_27807 = state_27733__$1;
(statearr_27743_27807[(2)] = null);

(statearr_27743_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (6))){
var inst_27698 = (state_27733[(7)]);
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27733__$1,(11),inst_27698);
} else {
if((state_val_27734 === (17))){
var inst_27719 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
if(cljs.core.truth_(inst_27719)){
var statearr_27744_27808 = state_27733__$1;
(statearr_27744_27808[(1)] = (19));

} else {
var statearr_27745_27809 = state_27733__$1;
(statearr_27745_27809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (3))){
var inst_27731 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27733__$1,inst_27731);
} else {
if((state_val_27734 === (12))){
var inst_27708 = (state_27733[(10)]);
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27733__$1,(14),inst_27708);
} else {
if((state_val_27734 === (2))){
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27733__$1,(4),results);
} else {
if((state_val_27734 === (19))){
var state_27733__$1 = state_27733;
var statearr_27746_27810 = state_27733__$1;
(statearr_27746_27810[(2)] = null);

(statearr_27746_27810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (11))){
var inst_27708 = (state_27733[(2)]);
var state_27733__$1 = (function (){var statearr_27747 = state_27733;
(statearr_27747[(10)] = inst_27708);

return statearr_27747;
})();
var statearr_27748_27811 = state_27733__$1;
(statearr_27748_27811[(2)] = null);

(statearr_27748_27811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (9))){
var state_27733__$1 = state_27733;
var statearr_27749_27812 = state_27733__$1;
(statearr_27749_27812[(2)] = null);

(statearr_27749_27812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (5))){
var state_27733__$1 = state_27733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27750_27813 = state_27733__$1;
(statearr_27750_27813[(1)] = (8));

} else {
var statearr_27751_27814 = state_27733__$1;
(statearr_27751_27814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (14))){
var inst_27713 = (state_27733[(11)]);
var inst_27711 = (state_27733[(8)]);
var inst_27711__$1 = (state_27733[(2)]);
var inst_27712 = (inst_27711__$1 == null);
var inst_27713__$1 = cljs.core.not.call(null,inst_27712);
var state_27733__$1 = (function (){var statearr_27752 = state_27733;
(statearr_27752[(11)] = inst_27713__$1);

(statearr_27752[(8)] = inst_27711__$1);

return statearr_27752;
})();
if(inst_27713__$1){
var statearr_27753_27815 = state_27733__$1;
(statearr_27753_27815[(1)] = (15));

} else {
var statearr_27754_27816 = state_27733__$1;
(statearr_27754_27816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (16))){
var inst_27713 = (state_27733[(11)]);
var state_27733__$1 = state_27733;
var statearr_27755_27817 = state_27733__$1;
(statearr_27755_27817[(2)] = inst_27713);

(statearr_27755_27817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (10))){
var inst_27705 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
var statearr_27756_27818 = state_27733__$1;
(statearr_27756_27818[(2)] = inst_27705);

(statearr_27756_27818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (18))){
var inst_27716 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
var statearr_27757_27819 = state_27733__$1;
(statearr_27757_27819[(2)] = inst_27716);

(statearr_27757_27819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (8))){
var inst_27702 = cljs.core.async.close_BANG_.call(null,to);
var state_27733__$1 = state_27733;
var statearr_27758_27820 = state_27733__$1;
(statearr_27758_27820[(2)] = inst_27702);

(statearr_27758_27820[(1)] = (10));


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
}
}
}
}
});})(c__26206__auto__,jobs,results,process,async))
;
return ((function (switch__26183__auto__,c__26206__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_27762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__);

(statearr_27762[(1)] = (1));

return statearr_27762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1 = (function (state_27733){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27763){if((e27763 instanceof Object)){
var ex__26187__auto__ = e27763;
var statearr_27764_27821 = state_27733;
(statearr_27764_27821[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27822 = state_27733;
state_27733 = G__27822;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__ = function(state_27733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1.call(this,state_27733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__,jobs,results,process,async))
})();
var state__26208__auto__ = (function (){var statearr_27765 = f__26207__auto__.call(null);
(statearr_27765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__,jobs,results,process,async))
);

return c__26206__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27823 = [];
var len__24786__auto___27826 = arguments.length;
var i__24787__auto___27827 = (0);
while(true){
if((i__24787__auto___27827 < len__24786__auto___27826)){
args27823.push((arguments[i__24787__auto___27827]));

var G__27828 = (i__24787__auto___27827 + (1));
i__24787__auto___27827 = G__27828;
continue;
} else {
}
break;
}

var G__27825 = args27823.length;
switch (G__27825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27823.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27830 = [];
var len__24786__auto___27833 = arguments.length;
var i__24787__auto___27834 = (0);
while(true){
if((i__24787__auto___27834 < len__24786__auto___27833)){
args27830.push((arguments[i__24787__auto___27834]));

var G__27835 = (i__24787__auto___27834 + (1));
i__24787__auto___27834 = G__27835;
continue;
} else {
}
break;
}

var G__27832 = args27830.length;
switch (G__27832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27830.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27837 = [];
var len__24786__auto___27890 = arguments.length;
var i__24787__auto___27891 = (0);
while(true){
if((i__24787__auto___27891 < len__24786__auto___27890)){
args27837.push((arguments[i__24787__auto___27891]));

var G__27892 = (i__24787__auto___27891 + (1));
i__24787__auto___27891 = G__27892;
continue;
} else {
}
break;
}

var G__27839 = args27837.length;
switch (G__27839) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27837.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26206__auto___27894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___27894,tc,fc){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___27894,tc,fc){
return (function (state_27865){
var state_val_27866 = (state_27865[(1)]);
if((state_val_27866 === (7))){
var inst_27861 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27867_27895 = state_27865__$1;
(statearr_27867_27895[(2)] = inst_27861);

(statearr_27867_27895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (1))){
var state_27865__$1 = state_27865;
var statearr_27868_27896 = state_27865__$1;
(statearr_27868_27896[(2)] = null);

(statearr_27868_27896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (4))){
var inst_27842 = (state_27865[(7)]);
var inst_27842__$1 = (state_27865[(2)]);
var inst_27843 = (inst_27842__$1 == null);
var state_27865__$1 = (function (){var statearr_27869 = state_27865;
(statearr_27869[(7)] = inst_27842__$1);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27870_27897 = state_27865__$1;
(statearr_27870_27897[(1)] = (5));

} else {
var statearr_27871_27898 = state_27865__$1;
(statearr_27871_27898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (13))){
var state_27865__$1 = state_27865;
var statearr_27872_27899 = state_27865__$1;
(statearr_27872_27899[(2)] = null);

(statearr_27872_27899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (6))){
var inst_27842 = (state_27865[(7)]);
var inst_27848 = p.call(null,inst_27842);
var state_27865__$1 = state_27865;
if(cljs.core.truth_(inst_27848)){
var statearr_27873_27900 = state_27865__$1;
(statearr_27873_27900[(1)] = (9));

} else {
var statearr_27874_27901 = state_27865__$1;
(statearr_27874_27901[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (3))){
var inst_27863 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27865__$1,inst_27863);
} else {
if((state_val_27866 === (12))){
var state_27865__$1 = state_27865;
var statearr_27875_27902 = state_27865__$1;
(statearr_27875_27902[(2)] = null);

(statearr_27875_27902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (2))){
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(4),ch);
} else {
if((state_val_27866 === (11))){
var inst_27842 = (state_27865[(7)]);
var inst_27852 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27865__$1,(8),inst_27852,inst_27842);
} else {
if((state_val_27866 === (9))){
var state_27865__$1 = state_27865;
var statearr_27876_27903 = state_27865__$1;
(statearr_27876_27903[(2)] = tc);

(statearr_27876_27903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (5))){
var inst_27845 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27846 = cljs.core.async.close_BANG_.call(null,fc);
var state_27865__$1 = (function (){var statearr_27877 = state_27865;
(statearr_27877[(8)] = inst_27845);

return statearr_27877;
})();
var statearr_27878_27904 = state_27865__$1;
(statearr_27878_27904[(2)] = inst_27846);

(statearr_27878_27904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (14))){
var inst_27859 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27879_27905 = state_27865__$1;
(statearr_27879_27905[(2)] = inst_27859);

(statearr_27879_27905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (10))){
var state_27865__$1 = state_27865;
var statearr_27880_27906 = state_27865__$1;
(statearr_27880_27906[(2)] = fc);

(statearr_27880_27906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (8))){
var inst_27854 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
if(cljs.core.truth_(inst_27854)){
var statearr_27881_27907 = state_27865__$1;
(statearr_27881_27907[(1)] = (12));

} else {
var statearr_27882_27908 = state_27865__$1;
(statearr_27882_27908[(1)] = (13));

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
});})(c__26206__auto___27894,tc,fc))
;
return ((function (switch__26183__auto__,c__26206__auto___27894,tc,fc){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_27886 = [null,null,null,null,null,null,null,null,null];
(statearr_27886[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_27886[(1)] = (1));

return statearr_27886;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_27865){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27887){if((e27887 instanceof Object)){
var ex__26187__auto__ = e27887;
var statearr_27888_27909 = state_27865;
(statearr_27888_27909[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27910 = state_27865;
state_27865 = G__27910;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_27865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_27865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___27894,tc,fc))
})();
var state__26208__auto__ = (function (){var statearr_27889 = f__26207__auto__.call(null);
(statearr_27889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___27894);

return statearr_27889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___27894,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__){
return (function (state_27974){
var state_val_27975 = (state_27974[(1)]);
if((state_val_27975 === (7))){
var inst_27970 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27976_27997 = state_27974__$1;
(statearr_27976_27997[(2)] = inst_27970);

(statearr_27976_27997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (1))){
var inst_27954 = init;
var state_27974__$1 = (function (){var statearr_27977 = state_27974;
(statearr_27977[(7)] = inst_27954);

return statearr_27977;
})();
var statearr_27978_27998 = state_27974__$1;
(statearr_27978_27998[(2)] = null);

(statearr_27978_27998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (4))){
var inst_27957 = (state_27974[(8)]);
var inst_27957__$1 = (state_27974[(2)]);
var inst_27958 = (inst_27957__$1 == null);
var state_27974__$1 = (function (){var statearr_27979 = state_27974;
(statearr_27979[(8)] = inst_27957__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27958)){
var statearr_27980_27999 = state_27974__$1;
(statearr_27980_27999[(1)] = (5));

} else {
var statearr_27981_28000 = state_27974__$1;
(statearr_27981_28000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (6))){
var inst_27957 = (state_27974[(8)]);
var inst_27961 = (state_27974[(9)]);
var inst_27954 = (state_27974[(7)]);
var inst_27961__$1 = f.call(null,inst_27954,inst_27957);
var inst_27962 = cljs.core.reduced_QMARK_.call(null,inst_27961__$1);
var state_27974__$1 = (function (){var statearr_27982 = state_27974;
(statearr_27982[(9)] = inst_27961__$1);

return statearr_27982;
})();
if(inst_27962){
var statearr_27983_28001 = state_27974__$1;
(statearr_27983_28001[(1)] = (8));

} else {
var statearr_27984_28002 = state_27974__$1;
(statearr_27984_28002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (3))){
var inst_27972 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27974__$1,inst_27972);
} else {
if((state_val_27975 === (2))){
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27974__$1,(4),ch);
} else {
if((state_val_27975 === (9))){
var inst_27961 = (state_27974[(9)]);
var inst_27954 = inst_27961;
var state_27974__$1 = (function (){var statearr_27985 = state_27974;
(statearr_27985[(7)] = inst_27954);

return statearr_27985;
})();
var statearr_27986_28003 = state_27974__$1;
(statearr_27986_28003[(2)] = null);

(statearr_27986_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (5))){
var inst_27954 = (state_27974[(7)]);
var state_27974__$1 = state_27974;
var statearr_27987_28004 = state_27974__$1;
(statearr_27987_28004[(2)] = inst_27954);

(statearr_27987_28004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (10))){
var inst_27968 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27988_28005 = state_27974__$1;
(statearr_27988_28005[(2)] = inst_27968);

(statearr_27988_28005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (8))){
var inst_27961 = (state_27974[(9)]);
var inst_27964 = cljs.core.deref.call(null,inst_27961);
var state_27974__$1 = state_27974;
var statearr_27989_28006 = state_27974__$1;
(statearr_27989_28006[(2)] = inst_27964);

(statearr_27989_28006[(1)] = (10));


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
});})(c__26206__auto__))
;
return ((function (switch__26183__auto__,c__26206__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26184__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26184__auto____0 = (function (){
var statearr_27993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27993[(0)] = cljs$core$async$reduce_$_state_machine__26184__auto__);

(statearr_27993[(1)] = (1));

return statearr_27993;
});
var cljs$core$async$reduce_$_state_machine__26184__auto____1 = (function (state_27974){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_27974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e27994){if((e27994 instanceof Object)){
var ex__26187__auto__ = e27994;
var statearr_27995_28007 = state_27974;
(statearr_27995_28007[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28008 = state_27974;
state_27974 = G__28008;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26184__auto__ = function(state_27974){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26184__auto____1.call(this,state_27974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26184__auto____0;
cljs$core$async$reduce_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26184__auto____1;
return cljs$core$async$reduce_$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__))
})();
var state__26208__auto__ = (function (){var statearr_27996 = f__26207__auto__.call(null);
(statearr_27996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_27996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__))
);

return c__26206__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28009 = [];
var len__24786__auto___28061 = arguments.length;
var i__24787__auto___28062 = (0);
while(true){
if((i__24787__auto___28062 < len__24786__auto___28061)){
args28009.push((arguments[i__24787__auto___28062]));

var G__28063 = (i__24787__auto___28062 + (1));
i__24787__auto___28062 = G__28063;
continue;
} else {
}
break;
}

var G__28011 = args28009.length;
switch (G__28011) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28009.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (7))){
var inst_28018 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28038_28065 = state_28036__$1;
(statearr_28038_28065[(2)] = inst_28018);

(statearr_28038_28065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (1))){
var inst_28012 = cljs.core.seq.call(null,coll);
var inst_28013 = inst_28012;
var state_28036__$1 = (function (){var statearr_28039 = state_28036;
(statearr_28039[(7)] = inst_28013);

return statearr_28039;
})();
var statearr_28040_28066 = state_28036__$1;
(statearr_28040_28066[(2)] = null);

(statearr_28040_28066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_28013 = (state_28036[(7)]);
var inst_28016 = cljs.core.first.call(null,inst_28013);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28036__$1,(7),ch,inst_28016);
} else {
if((state_val_28037 === (13))){
var inst_28030 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28041_28067 = state_28036__$1;
(statearr_28041_28067[(2)] = inst_28030);

(statearr_28041_28067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var inst_28021 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28021)){
var statearr_28042_28068 = state_28036__$1;
(statearr_28042_28068[(1)] = (8));

} else {
var statearr_28043_28069 = state_28036__$1;
(statearr_28043_28069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (12))){
var state_28036__$1 = state_28036;
var statearr_28044_28070 = state_28036__$1;
(statearr_28044_28070[(2)] = null);

(statearr_28044_28070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var inst_28013 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28013)){
var statearr_28045_28071 = state_28036__$1;
(statearr_28045_28071[(1)] = (4));

} else {
var statearr_28046_28072 = state_28036__$1;
(statearr_28046_28072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (11))){
var inst_28027 = cljs.core.async.close_BANG_.call(null,ch);
var state_28036__$1 = state_28036;
var statearr_28047_28073 = state_28036__$1;
(statearr_28047_28073[(2)] = inst_28027);

(statearr_28047_28073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (9))){
var state_28036__$1 = state_28036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28048_28074 = state_28036__$1;
(statearr_28048_28074[(1)] = (11));

} else {
var statearr_28049_28075 = state_28036__$1;
(statearr_28049_28075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_28013 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28050_28076 = state_28036__$1;
(statearr_28050_28076[(2)] = inst_28013);

(statearr_28050_28076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var inst_28032 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28051_28077 = state_28036__$1;
(statearr_28051_28077[(2)] = inst_28032);

(statearr_28051_28077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_28013 = (state_28036[(7)]);
var inst_28023 = cljs.core.next.call(null,inst_28013);
var inst_28013__$1 = inst_28023;
var state_28036__$1 = (function (){var statearr_28052 = state_28036;
(statearr_28052[(7)] = inst_28013__$1);

return statearr_28052;
})();
var statearr_28053_28078 = state_28036__$1;
(statearr_28053_28078[(2)] = null);

(statearr_28053_28078[(1)] = (2));


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
});})(c__26206__auto__))
;
return ((function (switch__26183__auto__,c__26206__auto__){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_28057 = [null,null,null,null,null,null,null,null];
(statearr_28057[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_28057[(1)] = (1));

return statearr_28057;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_28036){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e28058){if((e28058 instanceof Object)){
var ex__26187__auto__ = e28058;
var statearr_28059_28079 = state_28036;
(statearr_28059_28079[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28080 = state_28036;
state_28036 = G__28080;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__))
})();
var state__26208__auto__ = (function (){var statearr_28060 = f__26207__auto__.call(null);
(statearr_28060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_28060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__))
);

return c__26206__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24316__auto__ = (((_ == null))?null:_);
var m__24317__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,_);
} else {
var m__24317__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24317__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,ch);
} else {
var m__24317__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m);
} else {
var m__24317__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28306 = (function (mult,ch,cs,meta28307){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28307 = meta28307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28308,meta28307__$1){
var self__ = this;
var _28308__$1 = this;
return (new cljs.core.async.t_cljs$core$async28306(self__.mult,self__.ch,self__.cs,meta28307__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28308){
var self__ = this;
var _28308__$1 = this;
return self__.meta28307;
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28307","meta28307",394526401,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28306";

cljs.core.async.t_cljs$core$async28306.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async28306");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28306 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28306(mult__$1,ch__$1,cs__$1,meta28307){
return (new cljs.core.async.t_cljs$core$async28306(mult__$1,ch__$1,cs__$1,meta28307));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28306(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26206__auto___28531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___28531,cs,m,dchan,dctr,done){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___28531,cs,m,dchan,dctr,done){
return (function (state_28443){
var state_val_28444 = (state_28443[(1)]);
if((state_val_28444 === (7))){
var inst_28439 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28445_28532 = state_28443__$1;
(statearr_28445_28532[(2)] = inst_28439);

(statearr_28445_28532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (20))){
var inst_28342 = (state_28443[(7)]);
var inst_28354 = cljs.core.first.call(null,inst_28342);
var inst_28355 = cljs.core.nth.call(null,inst_28354,(0),null);
var inst_28356 = cljs.core.nth.call(null,inst_28354,(1),null);
var state_28443__$1 = (function (){var statearr_28446 = state_28443;
(statearr_28446[(8)] = inst_28355);

return statearr_28446;
})();
if(cljs.core.truth_(inst_28356)){
var statearr_28447_28533 = state_28443__$1;
(statearr_28447_28533[(1)] = (22));

} else {
var statearr_28448_28534 = state_28443__$1;
(statearr_28448_28534[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (27))){
var inst_28384 = (state_28443[(9)]);
var inst_28391 = (state_28443[(10)]);
var inst_28386 = (state_28443[(11)]);
var inst_28311 = (state_28443[(12)]);
var inst_28391__$1 = cljs.core._nth.call(null,inst_28384,inst_28386);
var inst_28392 = cljs.core.async.put_BANG_.call(null,inst_28391__$1,inst_28311,done);
var state_28443__$1 = (function (){var statearr_28449 = state_28443;
(statearr_28449[(10)] = inst_28391__$1);

return statearr_28449;
})();
if(cljs.core.truth_(inst_28392)){
var statearr_28450_28535 = state_28443__$1;
(statearr_28450_28535[(1)] = (30));

} else {
var statearr_28451_28536 = state_28443__$1;
(statearr_28451_28536[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (1))){
var state_28443__$1 = state_28443;
var statearr_28452_28537 = state_28443__$1;
(statearr_28452_28537[(2)] = null);

(statearr_28452_28537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (24))){
var inst_28342 = (state_28443[(7)]);
var inst_28361 = (state_28443[(2)]);
var inst_28362 = cljs.core.next.call(null,inst_28342);
var inst_28320 = inst_28362;
var inst_28321 = null;
var inst_28322 = (0);
var inst_28323 = (0);
var state_28443__$1 = (function (){var statearr_28453 = state_28443;
(statearr_28453[(13)] = inst_28323);

(statearr_28453[(14)] = inst_28361);

(statearr_28453[(15)] = inst_28321);

(statearr_28453[(16)] = inst_28322);

(statearr_28453[(17)] = inst_28320);

return statearr_28453;
})();
var statearr_28454_28538 = state_28443__$1;
(statearr_28454_28538[(2)] = null);

(statearr_28454_28538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (39))){
var state_28443__$1 = state_28443;
var statearr_28458_28539 = state_28443__$1;
(statearr_28458_28539[(2)] = null);

(statearr_28458_28539[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (4))){
var inst_28311 = (state_28443[(12)]);
var inst_28311__$1 = (state_28443[(2)]);
var inst_28312 = (inst_28311__$1 == null);
var state_28443__$1 = (function (){var statearr_28459 = state_28443;
(statearr_28459[(12)] = inst_28311__$1);

return statearr_28459;
})();
if(cljs.core.truth_(inst_28312)){
var statearr_28460_28540 = state_28443__$1;
(statearr_28460_28540[(1)] = (5));

} else {
var statearr_28461_28541 = state_28443__$1;
(statearr_28461_28541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (15))){
var inst_28323 = (state_28443[(13)]);
var inst_28321 = (state_28443[(15)]);
var inst_28322 = (state_28443[(16)]);
var inst_28320 = (state_28443[(17)]);
var inst_28338 = (state_28443[(2)]);
var inst_28339 = (inst_28323 + (1));
var tmp28455 = inst_28321;
var tmp28456 = inst_28322;
var tmp28457 = inst_28320;
var inst_28320__$1 = tmp28457;
var inst_28321__$1 = tmp28455;
var inst_28322__$1 = tmp28456;
var inst_28323__$1 = inst_28339;
var state_28443__$1 = (function (){var statearr_28462 = state_28443;
(statearr_28462[(13)] = inst_28323__$1);

(statearr_28462[(15)] = inst_28321__$1);

(statearr_28462[(16)] = inst_28322__$1);

(statearr_28462[(18)] = inst_28338);

(statearr_28462[(17)] = inst_28320__$1);

return statearr_28462;
})();
var statearr_28463_28542 = state_28443__$1;
(statearr_28463_28542[(2)] = null);

(statearr_28463_28542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (21))){
var inst_28365 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28467_28543 = state_28443__$1;
(statearr_28467_28543[(2)] = inst_28365);

(statearr_28467_28543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (31))){
var inst_28391 = (state_28443[(10)]);
var inst_28395 = done.call(null,null);
var inst_28396 = cljs.core.async.untap_STAR_.call(null,m,inst_28391);
var state_28443__$1 = (function (){var statearr_28468 = state_28443;
(statearr_28468[(19)] = inst_28395);

return statearr_28468;
})();
var statearr_28469_28544 = state_28443__$1;
(statearr_28469_28544[(2)] = inst_28396);

(statearr_28469_28544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (32))){
var inst_28385 = (state_28443[(20)]);
var inst_28384 = (state_28443[(9)]);
var inst_28386 = (state_28443[(11)]);
var inst_28383 = (state_28443[(21)]);
var inst_28398 = (state_28443[(2)]);
var inst_28399 = (inst_28386 + (1));
var tmp28464 = inst_28385;
var tmp28465 = inst_28384;
var tmp28466 = inst_28383;
var inst_28383__$1 = tmp28466;
var inst_28384__$1 = tmp28465;
var inst_28385__$1 = tmp28464;
var inst_28386__$1 = inst_28399;
var state_28443__$1 = (function (){var statearr_28470 = state_28443;
(statearr_28470[(20)] = inst_28385__$1);

(statearr_28470[(9)] = inst_28384__$1);

(statearr_28470[(22)] = inst_28398);

(statearr_28470[(11)] = inst_28386__$1);

(statearr_28470[(21)] = inst_28383__$1);

return statearr_28470;
})();
var statearr_28471_28545 = state_28443__$1;
(statearr_28471_28545[(2)] = null);

(statearr_28471_28545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (40))){
var inst_28411 = (state_28443[(23)]);
var inst_28415 = done.call(null,null);
var inst_28416 = cljs.core.async.untap_STAR_.call(null,m,inst_28411);
var state_28443__$1 = (function (){var statearr_28472 = state_28443;
(statearr_28472[(24)] = inst_28415);

return statearr_28472;
})();
var statearr_28473_28546 = state_28443__$1;
(statearr_28473_28546[(2)] = inst_28416);

(statearr_28473_28546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (33))){
var inst_28402 = (state_28443[(25)]);
var inst_28404 = cljs.core.chunked_seq_QMARK_.call(null,inst_28402);
var state_28443__$1 = state_28443;
if(inst_28404){
var statearr_28474_28547 = state_28443__$1;
(statearr_28474_28547[(1)] = (36));

} else {
var statearr_28475_28548 = state_28443__$1;
(statearr_28475_28548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (13))){
var inst_28332 = (state_28443[(26)]);
var inst_28335 = cljs.core.async.close_BANG_.call(null,inst_28332);
var state_28443__$1 = state_28443;
var statearr_28476_28549 = state_28443__$1;
(statearr_28476_28549[(2)] = inst_28335);

(statearr_28476_28549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (22))){
var inst_28355 = (state_28443[(8)]);
var inst_28358 = cljs.core.async.close_BANG_.call(null,inst_28355);
var state_28443__$1 = state_28443;
var statearr_28477_28550 = state_28443__$1;
(statearr_28477_28550[(2)] = inst_28358);

(statearr_28477_28550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (36))){
var inst_28402 = (state_28443[(25)]);
var inst_28406 = cljs.core.chunk_first.call(null,inst_28402);
var inst_28407 = cljs.core.chunk_rest.call(null,inst_28402);
var inst_28408 = cljs.core.count.call(null,inst_28406);
var inst_28383 = inst_28407;
var inst_28384 = inst_28406;
var inst_28385 = inst_28408;
var inst_28386 = (0);
var state_28443__$1 = (function (){var statearr_28478 = state_28443;
(statearr_28478[(20)] = inst_28385);

(statearr_28478[(9)] = inst_28384);

(statearr_28478[(11)] = inst_28386);

(statearr_28478[(21)] = inst_28383);

return statearr_28478;
})();
var statearr_28479_28551 = state_28443__$1;
(statearr_28479_28551[(2)] = null);

(statearr_28479_28551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (41))){
var inst_28402 = (state_28443[(25)]);
var inst_28418 = (state_28443[(2)]);
var inst_28419 = cljs.core.next.call(null,inst_28402);
var inst_28383 = inst_28419;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28443__$1 = (function (){var statearr_28480 = state_28443;
(statearr_28480[(20)] = inst_28385);

(statearr_28480[(9)] = inst_28384);

(statearr_28480[(27)] = inst_28418);

(statearr_28480[(11)] = inst_28386);

(statearr_28480[(21)] = inst_28383);

return statearr_28480;
})();
var statearr_28481_28552 = state_28443__$1;
(statearr_28481_28552[(2)] = null);

(statearr_28481_28552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (43))){
var state_28443__$1 = state_28443;
var statearr_28482_28553 = state_28443__$1;
(statearr_28482_28553[(2)] = null);

(statearr_28482_28553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (29))){
var inst_28427 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28483_28554 = state_28443__$1;
(statearr_28483_28554[(2)] = inst_28427);

(statearr_28483_28554[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (44))){
var inst_28436 = (state_28443[(2)]);
var state_28443__$1 = (function (){var statearr_28484 = state_28443;
(statearr_28484[(28)] = inst_28436);

return statearr_28484;
})();
var statearr_28485_28555 = state_28443__$1;
(statearr_28485_28555[(2)] = null);

(statearr_28485_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (6))){
var inst_28375 = (state_28443[(29)]);
var inst_28374 = cljs.core.deref.call(null,cs);
var inst_28375__$1 = cljs.core.keys.call(null,inst_28374);
var inst_28376 = cljs.core.count.call(null,inst_28375__$1);
var inst_28377 = cljs.core.reset_BANG_.call(null,dctr,inst_28376);
var inst_28382 = cljs.core.seq.call(null,inst_28375__$1);
var inst_28383 = inst_28382;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28443__$1 = (function (){var statearr_28486 = state_28443;
(statearr_28486[(20)] = inst_28385);

(statearr_28486[(9)] = inst_28384);

(statearr_28486[(29)] = inst_28375__$1);

(statearr_28486[(11)] = inst_28386);

(statearr_28486[(21)] = inst_28383);

(statearr_28486[(30)] = inst_28377);

return statearr_28486;
})();
var statearr_28487_28556 = state_28443__$1;
(statearr_28487_28556[(2)] = null);

(statearr_28487_28556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (28))){
var inst_28402 = (state_28443[(25)]);
var inst_28383 = (state_28443[(21)]);
var inst_28402__$1 = cljs.core.seq.call(null,inst_28383);
var state_28443__$1 = (function (){var statearr_28488 = state_28443;
(statearr_28488[(25)] = inst_28402__$1);

return statearr_28488;
})();
if(inst_28402__$1){
var statearr_28489_28557 = state_28443__$1;
(statearr_28489_28557[(1)] = (33));

} else {
var statearr_28490_28558 = state_28443__$1;
(statearr_28490_28558[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (25))){
var inst_28385 = (state_28443[(20)]);
var inst_28386 = (state_28443[(11)]);
var inst_28388 = (inst_28386 < inst_28385);
var inst_28389 = inst_28388;
var state_28443__$1 = state_28443;
if(cljs.core.truth_(inst_28389)){
var statearr_28491_28559 = state_28443__$1;
(statearr_28491_28559[(1)] = (27));

} else {
var statearr_28492_28560 = state_28443__$1;
(statearr_28492_28560[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (34))){
var state_28443__$1 = state_28443;
var statearr_28493_28561 = state_28443__$1;
(statearr_28493_28561[(2)] = null);

(statearr_28493_28561[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (17))){
var state_28443__$1 = state_28443;
var statearr_28494_28562 = state_28443__$1;
(statearr_28494_28562[(2)] = null);

(statearr_28494_28562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (3))){
var inst_28441 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28443__$1,inst_28441);
} else {
if((state_val_28444 === (12))){
var inst_28370 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28495_28563 = state_28443__$1;
(statearr_28495_28563[(2)] = inst_28370);

(statearr_28495_28563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (2))){
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(4),ch);
} else {
if((state_val_28444 === (23))){
var state_28443__$1 = state_28443;
var statearr_28496_28564 = state_28443__$1;
(statearr_28496_28564[(2)] = null);

(statearr_28496_28564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (35))){
var inst_28425 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28497_28565 = state_28443__$1;
(statearr_28497_28565[(2)] = inst_28425);

(statearr_28497_28565[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (19))){
var inst_28342 = (state_28443[(7)]);
var inst_28346 = cljs.core.chunk_first.call(null,inst_28342);
var inst_28347 = cljs.core.chunk_rest.call(null,inst_28342);
var inst_28348 = cljs.core.count.call(null,inst_28346);
var inst_28320 = inst_28347;
var inst_28321 = inst_28346;
var inst_28322 = inst_28348;
var inst_28323 = (0);
var state_28443__$1 = (function (){var statearr_28498 = state_28443;
(statearr_28498[(13)] = inst_28323);

(statearr_28498[(15)] = inst_28321);

(statearr_28498[(16)] = inst_28322);

(statearr_28498[(17)] = inst_28320);

return statearr_28498;
})();
var statearr_28499_28566 = state_28443__$1;
(statearr_28499_28566[(2)] = null);

(statearr_28499_28566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (11))){
var inst_28342 = (state_28443[(7)]);
var inst_28320 = (state_28443[(17)]);
var inst_28342__$1 = cljs.core.seq.call(null,inst_28320);
var state_28443__$1 = (function (){var statearr_28500 = state_28443;
(statearr_28500[(7)] = inst_28342__$1);

return statearr_28500;
})();
if(inst_28342__$1){
var statearr_28501_28567 = state_28443__$1;
(statearr_28501_28567[(1)] = (16));

} else {
var statearr_28502_28568 = state_28443__$1;
(statearr_28502_28568[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (9))){
var inst_28372 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28503_28569 = state_28443__$1;
(statearr_28503_28569[(2)] = inst_28372);

(statearr_28503_28569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (5))){
var inst_28318 = cljs.core.deref.call(null,cs);
var inst_28319 = cljs.core.seq.call(null,inst_28318);
var inst_28320 = inst_28319;
var inst_28321 = null;
var inst_28322 = (0);
var inst_28323 = (0);
var state_28443__$1 = (function (){var statearr_28504 = state_28443;
(statearr_28504[(13)] = inst_28323);

(statearr_28504[(15)] = inst_28321);

(statearr_28504[(16)] = inst_28322);

(statearr_28504[(17)] = inst_28320);

return statearr_28504;
})();
var statearr_28505_28570 = state_28443__$1;
(statearr_28505_28570[(2)] = null);

(statearr_28505_28570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (14))){
var state_28443__$1 = state_28443;
var statearr_28506_28571 = state_28443__$1;
(statearr_28506_28571[(2)] = null);

(statearr_28506_28571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (45))){
var inst_28433 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28507_28572 = state_28443__$1;
(statearr_28507_28572[(2)] = inst_28433);

(statearr_28507_28572[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (26))){
var inst_28375 = (state_28443[(29)]);
var inst_28429 = (state_28443[(2)]);
var inst_28430 = cljs.core.seq.call(null,inst_28375);
var state_28443__$1 = (function (){var statearr_28508 = state_28443;
(statearr_28508[(31)] = inst_28429);

return statearr_28508;
})();
if(inst_28430){
var statearr_28509_28573 = state_28443__$1;
(statearr_28509_28573[(1)] = (42));

} else {
var statearr_28510_28574 = state_28443__$1;
(statearr_28510_28574[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (16))){
var inst_28342 = (state_28443[(7)]);
var inst_28344 = cljs.core.chunked_seq_QMARK_.call(null,inst_28342);
var state_28443__$1 = state_28443;
if(inst_28344){
var statearr_28511_28575 = state_28443__$1;
(statearr_28511_28575[(1)] = (19));

} else {
var statearr_28512_28576 = state_28443__$1;
(statearr_28512_28576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (38))){
var inst_28422 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28513_28577 = state_28443__$1;
(statearr_28513_28577[(2)] = inst_28422);

(statearr_28513_28577[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (30))){
var state_28443__$1 = state_28443;
var statearr_28514_28578 = state_28443__$1;
(statearr_28514_28578[(2)] = null);

(statearr_28514_28578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (10))){
var inst_28323 = (state_28443[(13)]);
var inst_28321 = (state_28443[(15)]);
var inst_28331 = cljs.core._nth.call(null,inst_28321,inst_28323);
var inst_28332 = cljs.core.nth.call(null,inst_28331,(0),null);
var inst_28333 = cljs.core.nth.call(null,inst_28331,(1),null);
var state_28443__$1 = (function (){var statearr_28515 = state_28443;
(statearr_28515[(26)] = inst_28332);

return statearr_28515;
})();
if(cljs.core.truth_(inst_28333)){
var statearr_28516_28579 = state_28443__$1;
(statearr_28516_28579[(1)] = (13));

} else {
var statearr_28517_28580 = state_28443__$1;
(statearr_28517_28580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (18))){
var inst_28368 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28518_28581 = state_28443__$1;
(statearr_28518_28581[(2)] = inst_28368);

(statearr_28518_28581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (42))){
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(45),dchan);
} else {
if((state_val_28444 === (37))){
var inst_28402 = (state_28443[(25)]);
var inst_28411 = (state_28443[(23)]);
var inst_28311 = (state_28443[(12)]);
var inst_28411__$1 = cljs.core.first.call(null,inst_28402);
var inst_28412 = cljs.core.async.put_BANG_.call(null,inst_28411__$1,inst_28311,done);
var state_28443__$1 = (function (){var statearr_28519 = state_28443;
(statearr_28519[(23)] = inst_28411__$1);

return statearr_28519;
})();
if(cljs.core.truth_(inst_28412)){
var statearr_28520_28582 = state_28443__$1;
(statearr_28520_28582[(1)] = (39));

} else {
var statearr_28521_28583 = state_28443__$1;
(statearr_28521_28583[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (8))){
var inst_28323 = (state_28443[(13)]);
var inst_28322 = (state_28443[(16)]);
var inst_28325 = (inst_28323 < inst_28322);
var inst_28326 = inst_28325;
var state_28443__$1 = state_28443;
if(cljs.core.truth_(inst_28326)){
var statearr_28522_28584 = state_28443__$1;
(statearr_28522_28584[(1)] = (10));

} else {
var statearr_28523_28585 = state_28443__$1;
(statearr_28523_28585[(1)] = (11));

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
});})(c__26206__auto___28531,cs,m,dchan,dctr,done))
;
return ((function (switch__26183__auto__,c__26206__auto___28531,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26184__auto__ = null;
var cljs$core$async$mult_$_state_machine__26184__auto____0 = (function (){
var statearr_28527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28527[(0)] = cljs$core$async$mult_$_state_machine__26184__auto__);

(statearr_28527[(1)] = (1));

return statearr_28527;
});
var cljs$core$async$mult_$_state_machine__26184__auto____1 = (function (state_28443){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_28443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e28528){if((e28528 instanceof Object)){
var ex__26187__auto__ = e28528;
var statearr_28529_28586 = state_28443;
(statearr_28529_28586[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28587 = state_28443;
state_28443 = G__28587;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26184__auto__ = function(state_28443){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26184__auto____1.call(this,state_28443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26184__auto____0;
cljs$core$async$mult_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26184__auto____1;
return cljs$core$async$mult_$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___28531,cs,m,dchan,dctr,done))
})();
var state__26208__auto__ = (function (){var statearr_28530 = f__26207__auto__.call(null);
(statearr_28530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___28531);

return statearr_28530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___28531,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28588 = [];
var len__24786__auto___28591 = arguments.length;
var i__24787__auto___28592 = (0);
while(true){
if((i__24787__auto___28592 < len__24786__auto___28591)){
args28588.push((arguments[i__24787__auto___28592]));

var G__28593 = (i__24787__auto___28592 + (1));
i__24787__auto___28592 = G__28593;
continue;
} else {
}
break;
}

var G__28590 = args28588.length;
switch (G__28590) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28588.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,ch);
} else {
var m__24317__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,ch);
} else {
var m__24317__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m);
} else {
var m__24317__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,state_map);
} else {
var m__24317__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24316__auto__ = (((m == null))?null:m);
var m__24317__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,m,mode);
} else {
var m__24317__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__24793__auto__ = [];
var len__24786__auto___28605 = arguments.length;
var i__24787__auto___28606 = (0);
while(true){
if((i__24787__auto___28606 < len__24786__auto___28605)){
args__24793__auto__.push((arguments[i__24787__auto___28606]));

var G__28607 = (i__24787__auto___28606 + (1));
i__24787__auto___28606 = G__28607;
continue;
} else {
}
break;
}

var argseq__24794__auto__ = ((((3) < args__24793__auto__.length))?(new cljs.core.IndexedSeq(args__24793__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24794__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28599){
var map__28600 = p__28599;
var map__28600__$1 = ((((!((map__28600 == null)))?((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);
var opts = map__28600__$1;
var statearr_28602_28608 = state;
(statearr_28602_28608[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6369__auto__ = cljs.core.async.do_alts.call(null,((function (map__28600,map__28600__$1,opts){
return (function (val){
var statearr_28603_28609 = state;
(statearr_28603_28609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28600,map__28600__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6369__auto__)){
var cb = temp__6369__auto__;
var statearr_28604_28610 = state;
(statearr_28604_28610[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28595){
var G__28596 = cljs.core.first.call(null,seq28595);
var seq28595__$1 = cljs.core.next.call(null,seq28595);
var G__28597 = cljs.core.first.call(null,seq28595__$1);
var seq28595__$2 = cljs.core.next.call(null,seq28595__$1);
var G__28598 = cljs.core.first.call(null,seq28595__$2);
var seq28595__$3 = cljs.core.next.call(null,seq28595__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28596,G__28597,G__28598,seq28595__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28776 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28777){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28777 = meta28777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28778,meta28777__$1){
var self__ = this;
var _28778__$1 = this;
return (new cljs.core.async.t_cljs$core$async28776(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28777__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28778){
var self__ = this;
var _28778__$1 = this;
return self__.meta28777;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28777","meta28777",496420228,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28776";

cljs.core.async.t_cljs$core$async28776.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async28776");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28776 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28776(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28777){
return (new cljs.core.async.t_cljs$core$async28776(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28777));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28776(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26206__auto___28941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28878){
var state_val_28879 = (state_28878[(1)]);
if((state_val_28879 === (7))){
var inst_28794 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28880_28942 = state_28878__$1;
(statearr_28880_28942[(2)] = inst_28794);

(statearr_28880_28942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (20))){
var inst_28806 = (state_28878[(7)]);
var state_28878__$1 = state_28878;
var statearr_28881_28943 = state_28878__$1;
(statearr_28881_28943[(2)] = inst_28806);

(statearr_28881_28943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (27))){
var state_28878__$1 = state_28878;
var statearr_28882_28944 = state_28878__$1;
(statearr_28882_28944[(2)] = null);

(statearr_28882_28944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (1))){
var inst_28782 = (state_28878[(8)]);
var inst_28782__$1 = calc_state.call(null);
var inst_28784 = (inst_28782__$1 == null);
var inst_28785 = cljs.core.not.call(null,inst_28784);
var state_28878__$1 = (function (){var statearr_28883 = state_28878;
(statearr_28883[(8)] = inst_28782__$1);

return statearr_28883;
})();
if(inst_28785){
var statearr_28884_28945 = state_28878__$1;
(statearr_28884_28945[(1)] = (2));

} else {
var statearr_28885_28946 = state_28878__$1;
(statearr_28885_28946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (24))){
var inst_28852 = (state_28878[(9)]);
var inst_28838 = (state_28878[(10)]);
var inst_28829 = (state_28878[(11)]);
var inst_28852__$1 = inst_28829.call(null,inst_28838);
var state_28878__$1 = (function (){var statearr_28886 = state_28878;
(statearr_28886[(9)] = inst_28852__$1);

return statearr_28886;
})();
if(cljs.core.truth_(inst_28852__$1)){
var statearr_28887_28947 = state_28878__$1;
(statearr_28887_28947[(1)] = (29));

} else {
var statearr_28888_28948 = state_28878__$1;
(statearr_28888_28948[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (4))){
var inst_28797 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28797)){
var statearr_28889_28949 = state_28878__$1;
(statearr_28889_28949[(1)] = (8));

} else {
var statearr_28890_28950 = state_28878__$1;
(statearr_28890_28950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (15))){
var inst_28823 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28823)){
var statearr_28891_28951 = state_28878__$1;
(statearr_28891_28951[(1)] = (19));

} else {
var statearr_28892_28952 = state_28878__$1;
(statearr_28892_28952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (21))){
var inst_28828 = (state_28878[(12)]);
var inst_28828__$1 = (state_28878[(2)]);
var inst_28829 = cljs.core.get.call(null,inst_28828__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28830 = cljs.core.get.call(null,inst_28828__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28831 = cljs.core.get.call(null,inst_28828__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28878__$1 = (function (){var statearr_28893 = state_28878;
(statearr_28893[(11)] = inst_28829);

(statearr_28893[(12)] = inst_28828__$1);

(statearr_28893[(13)] = inst_28830);

return statearr_28893;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28878__$1,(22),inst_28831);
} else {
if((state_val_28879 === (31))){
var inst_28860 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28860)){
var statearr_28894_28953 = state_28878__$1;
(statearr_28894_28953[(1)] = (32));

} else {
var statearr_28895_28954 = state_28878__$1;
(statearr_28895_28954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (32))){
var inst_28837 = (state_28878[(14)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28878__$1,(35),out,inst_28837);
} else {
if((state_val_28879 === (33))){
var inst_28828 = (state_28878[(12)]);
var inst_28806 = inst_28828;
var state_28878__$1 = (function (){var statearr_28896 = state_28878;
(statearr_28896[(7)] = inst_28806);

return statearr_28896;
})();
var statearr_28897_28955 = state_28878__$1;
(statearr_28897_28955[(2)] = null);

(statearr_28897_28955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (13))){
var inst_28806 = (state_28878[(7)]);
var inst_28813 = inst_28806.cljs$lang$protocol_mask$partition0$;
var inst_28814 = (inst_28813 & (64));
var inst_28815 = inst_28806.cljs$core$ISeq$;
var inst_28816 = (inst_28814) || (inst_28815);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28816)){
var statearr_28898_28956 = state_28878__$1;
(statearr_28898_28956[(1)] = (16));

} else {
var statearr_28899_28957 = state_28878__$1;
(statearr_28899_28957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (22))){
var inst_28837 = (state_28878[(14)]);
var inst_28838 = (state_28878[(10)]);
var inst_28836 = (state_28878[(2)]);
var inst_28837__$1 = cljs.core.nth.call(null,inst_28836,(0),null);
var inst_28838__$1 = cljs.core.nth.call(null,inst_28836,(1),null);
var inst_28839 = (inst_28837__$1 == null);
var inst_28840 = cljs.core._EQ_.call(null,inst_28838__$1,change);
var inst_28841 = (inst_28839) || (inst_28840);
var state_28878__$1 = (function (){var statearr_28900 = state_28878;
(statearr_28900[(14)] = inst_28837__$1);

(statearr_28900[(10)] = inst_28838__$1);

return statearr_28900;
})();
if(cljs.core.truth_(inst_28841)){
var statearr_28901_28958 = state_28878__$1;
(statearr_28901_28958[(1)] = (23));

} else {
var statearr_28902_28959 = state_28878__$1;
(statearr_28902_28959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (36))){
var inst_28828 = (state_28878[(12)]);
var inst_28806 = inst_28828;
var state_28878__$1 = (function (){var statearr_28903 = state_28878;
(statearr_28903[(7)] = inst_28806);

return statearr_28903;
})();
var statearr_28904_28960 = state_28878__$1;
(statearr_28904_28960[(2)] = null);

(statearr_28904_28960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (29))){
var inst_28852 = (state_28878[(9)]);
var state_28878__$1 = state_28878;
var statearr_28905_28961 = state_28878__$1;
(statearr_28905_28961[(2)] = inst_28852);

(statearr_28905_28961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (6))){
var state_28878__$1 = state_28878;
var statearr_28906_28962 = state_28878__$1;
(statearr_28906_28962[(2)] = false);

(statearr_28906_28962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (28))){
var inst_28848 = (state_28878[(2)]);
var inst_28849 = calc_state.call(null);
var inst_28806 = inst_28849;
var state_28878__$1 = (function (){var statearr_28907 = state_28878;
(statearr_28907[(15)] = inst_28848);

(statearr_28907[(7)] = inst_28806);

return statearr_28907;
})();
var statearr_28908_28963 = state_28878__$1;
(statearr_28908_28963[(2)] = null);

(statearr_28908_28963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (25))){
var inst_28874 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28909_28964 = state_28878__$1;
(statearr_28909_28964[(2)] = inst_28874);

(statearr_28909_28964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (34))){
var inst_28872 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28910_28965 = state_28878__$1;
(statearr_28910_28965[(2)] = inst_28872);

(statearr_28910_28965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (17))){
var state_28878__$1 = state_28878;
var statearr_28911_28966 = state_28878__$1;
(statearr_28911_28966[(2)] = false);

(statearr_28911_28966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (3))){
var state_28878__$1 = state_28878;
var statearr_28912_28967 = state_28878__$1;
(statearr_28912_28967[(2)] = false);

(statearr_28912_28967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (12))){
var inst_28876 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28878__$1,inst_28876);
} else {
if((state_val_28879 === (2))){
var inst_28782 = (state_28878[(8)]);
var inst_28787 = inst_28782.cljs$lang$protocol_mask$partition0$;
var inst_28788 = (inst_28787 & (64));
var inst_28789 = inst_28782.cljs$core$ISeq$;
var inst_28790 = (inst_28788) || (inst_28789);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28790)){
var statearr_28913_28968 = state_28878__$1;
(statearr_28913_28968[(1)] = (5));

} else {
var statearr_28914_28969 = state_28878__$1;
(statearr_28914_28969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (23))){
var inst_28837 = (state_28878[(14)]);
var inst_28843 = (inst_28837 == null);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28843)){
var statearr_28915_28970 = state_28878__$1;
(statearr_28915_28970[(1)] = (26));

} else {
var statearr_28916_28971 = state_28878__$1;
(statearr_28916_28971[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (35))){
var inst_28863 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28863)){
var statearr_28917_28972 = state_28878__$1;
(statearr_28917_28972[(1)] = (36));

} else {
var statearr_28918_28973 = state_28878__$1;
(statearr_28918_28973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (19))){
var inst_28806 = (state_28878[(7)]);
var inst_28825 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28806);
var state_28878__$1 = state_28878;
var statearr_28919_28974 = state_28878__$1;
(statearr_28919_28974[(2)] = inst_28825);

(statearr_28919_28974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (11))){
var inst_28806 = (state_28878[(7)]);
var inst_28810 = (inst_28806 == null);
var inst_28811 = cljs.core.not.call(null,inst_28810);
var state_28878__$1 = state_28878;
if(inst_28811){
var statearr_28920_28975 = state_28878__$1;
(statearr_28920_28975[(1)] = (13));

} else {
var statearr_28921_28976 = state_28878__$1;
(statearr_28921_28976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (9))){
var inst_28782 = (state_28878[(8)]);
var state_28878__$1 = state_28878;
var statearr_28922_28977 = state_28878__$1;
(statearr_28922_28977[(2)] = inst_28782);

(statearr_28922_28977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (5))){
var state_28878__$1 = state_28878;
var statearr_28923_28978 = state_28878__$1;
(statearr_28923_28978[(2)] = true);

(statearr_28923_28978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (14))){
var state_28878__$1 = state_28878;
var statearr_28924_28979 = state_28878__$1;
(statearr_28924_28979[(2)] = false);

(statearr_28924_28979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (26))){
var inst_28838 = (state_28878[(10)]);
var inst_28845 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28838);
var state_28878__$1 = state_28878;
var statearr_28925_28980 = state_28878__$1;
(statearr_28925_28980[(2)] = inst_28845);

(statearr_28925_28980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (16))){
var state_28878__$1 = state_28878;
var statearr_28926_28981 = state_28878__$1;
(statearr_28926_28981[(2)] = true);

(statearr_28926_28981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (38))){
var inst_28868 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28927_28982 = state_28878__$1;
(statearr_28927_28982[(2)] = inst_28868);

(statearr_28927_28982[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (30))){
var inst_28838 = (state_28878[(10)]);
var inst_28829 = (state_28878[(11)]);
var inst_28830 = (state_28878[(13)]);
var inst_28855 = cljs.core.empty_QMARK_.call(null,inst_28829);
var inst_28856 = inst_28830.call(null,inst_28838);
var inst_28857 = cljs.core.not.call(null,inst_28856);
var inst_28858 = (inst_28855) && (inst_28857);
var state_28878__$1 = state_28878;
var statearr_28928_28983 = state_28878__$1;
(statearr_28928_28983[(2)] = inst_28858);

(statearr_28928_28983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (10))){
var inst_28782 = (state_28878[(8)]);
var inst_28802 = (state_28878[(2)]);
var inst_28803 = cljs.core.get.call(null,inst_28802,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28804 = cljs.core.get.call(null,inst_28802,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28805 = cljs.core.get.call(null,inst_28802,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28806 = inst_28782;
var state_28878__$1 = (function (){var statearr_28929 = state_28878;
(statearr_28929[(16)] = inst_28804);

(statearr_28929[(17)] = inst_28805);

(statearr_28929[(18)] = inst_28803);

(statearr_28929[(7)] = inst_28806);

return statearr_28929;
})();
var statearr_28930_28984 = state_28878__$1;
(statearr_28930_28984[(2)] = null);

(statearr_28930_28984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (18))){
var inst_28820 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28931_28985 = state_28878__$1;
(statearr_28931_28985[(2)] = inst_28820);

(statearr_28931_28985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (37))){
var state_28878__$1 = state_28878;
var statearr_28932_28986 = state_28878__$1;
(statearr_28932_28986[(2)] = null);

(statearr_28932_28986[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (8))){
var inst_28782 = (state_28878[(8)]);
var inst_28799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28782);
var state_28878__$1 = state_28878;
var statearr_28933_28987 = state_28878__$1;
(statearr_28933_28987[(2)] = inst_28799);

(statearr_28933_28987[(1)] = (10));


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
});})(c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26183__auto__,c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26184__auto__ = null;
var cljs$core$async$mix_$_state_machine__26184__auto____0 = (function (){
var statearr_28937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28937[(0)] = cljs$core$async$mix_$_state_machine__26184__auto__);

(statearr_28937[(1)] = (1));

return statearr_28937;
});
var cljs$core$async$mix_$_state_machine__26184__auto____1 = (function (state_28878){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_28878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e28938){if((e28938 instanceof Object)){
var ex__26187__auto__ = e28938;
var statearr_28939_28988 = state_28878;
(statearr_28939_28988[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28989 = state_28878;
state_28878 = G__28989;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26184__auto__ = function(state_28878){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26184__auto____1.call(this,state_28878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26184__auto____0;
cljs$core$async$mix_$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26184__auto____1;
return cljs$core$async$mix_$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26208__auto__ = (function (){var statearr_28940 = f__26207__auto__.call(null);
(statearr_28940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___28941);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___28941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24316__auto__ = (((p == null))?null:p);
var m__24317__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24317__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24316__auto__ = (((p == null))?null:p);
var m__24317__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,p,v,ch);
} else {
var m__24317__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28990 = [];
var len__24786__auto___28993 = arguments.length;
var i__24787__auto___28994 = (0);
while(true){
if((i__24787__auto___28994 < len__24786__auto___28993)){
args28990.push((arguments[i__24787__auto___28994]));

var G__28995 = (i__24787__auto___28994 + (1));
i__24787__auto___28994 = G__28995;
continue;
} else {
}
break;
}

var G__28992 = args28990.length;
switch (G__28992) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28990.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24316__auto__ = (((p == null))?null:p);
var m__24317__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,p);
} else {
var m__24317__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24316__auto__ = (((p == null))?null:p);
var m__24317__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24316__auto__)]);
if(!((m__24317__auto__ == null))){
return m__24317__auto__.call(null,p,v);
} else {
var m__24317__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24317__auto____$1 == null))){
return m__24317__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28998 = [];
var len__24786__auto___29123 = arguments.length;
var i__24787__auto___29124 = (0);
while(true){
if((i__24787__auto___29124 < len__24786__auto___29123)){
args28998.push((arguments[i__24787__auto___29124]));

var G__29125 = (i__24787__auto___29124 + (1));
i__24787__auto___29124 = G__29125;
continue;
} else {
}
break;
}

var G__29000 = args28998.length;
switch (G__29000) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28998.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__23603__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23603__auto__)){
return or__23603__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23603__auto__,mults){
return (function (p1__28997_SHARP_){
if(cljs.core.truth_(p1__28997_SHARP_.call(null,topic))){
return p1__28997_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28997_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23603__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29001 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29002){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29002 = meta29002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29003,meta29002__$1){
var self__ = this;
var _29003__$1 = this;
return (new cljs.core.async.t_cljs$core$async29001(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29002__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29003){
var self__ = this;
var _29003__$1 = this;
return self__.meta29002;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6369__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6369__auto__)){
var m = temp__6369__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29002","meta29002",-1530393133,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29001";

cljs.core.async.t_cljs$core$async29001.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async29001");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29001 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29001(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29002){
return (new cljs.core.async.t_cljs$core$async29001(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29002));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29001(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26206__auto___29127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29127,mults,ensure_mult,p){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29127,mults,ensure_mult,p){
return (function (state_29075){
var state_val_29076 = (state_29075[(1)]);
if((state_val_29076 === (7))){
var inst_29071 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29077_29128 = state_29075__$1;
(statearr_29077_29128[(2)] = inst_29071);

(statearr_29077_29128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (20))){
var state_29075__$1 = state_29075;
var statearr_29078_29129 = state_29075__$1;
(statearr_29078_29129[(2)] = null);

(statearr_29078_29129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (1))){
var state_29075__$1 = state_29075;
var statearr_29079_29130 = state_29075__$1;
(statearr_29079_29130[(2)] = null);

(statearr_29079_29130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (24))){
var inst_29054 = (state_29075[(7)]);
var inst_29063 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29054);
var state_29075__$1 = state_29075;
var statearr_29080_29131 = state_29075__$1;
(statearr_29080_29131[(2)] = inst_29063);

(statearr_29080_29131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (4))){
var inst_29006 = (state_29075[(8)]);
var inst_29006__$1 = (state_29075[(2)]);
var inst_29007 = (inst_29006__$1 == null);
var state_29075__$1 = (function (){var statearr_29081 = state_29075;
(statearr_29081[(8)] = inst_29006__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29082_29132 = state_29075__$1;
(statearr_29082_29132[(1)] = (5));

} else {
var statearr_29083_29133 = state_29075__$1;
(statearr_29083_29133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (15))){
var inst_29048 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29084_29134 = state_29075__$1;
(statearr_29084_29134[(2)] = inst_29048);

(statearr_29084_29134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (21))){
var inst_29068 = (state_29075[(2)]);
var state_29075__$1 = (function (){var statearr_29085 = state_29075;
(statearr_29085[(9)] = inst_29068);

return statearr_29085;
})();
var statearr_29086_29135 = state_29075__$1;
(statearr_29086_29135[(2)] = null);

(statearr_29086_29135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (13))){
var inst_29030 = (state_29075[(10)]);
var inst_29032 = cljs.core.chunked_seq_QMARK_.call(null,inst_29030);
var state_29075__$1 = state_29075;
if(inst_29032){
var statearr_29087_29136 = state_29075__$1;
(statearr_29087_29136[(1)] = (16));

} else {
var statearr_29088_29137 = state_29075__$1;
(statearr_29088_29137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (22))){
var inst_29060 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
if(cljs.core.truth_(inst_29060)){
var statearr_29089_29138 = state_29075__$1;
(statearr_29089_29138[(1)] = (23));

} else {
var statearr_29090_29139 = state_29075__$1;
(statearr_29090_29139[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (6))){
var inst_29056 = (state_29075[(11)]);
var inst_29054 = (state_29075[(7)]);
var inst_29006 = (state_29075[(8)]);
var inst_29054__$1 = topic_fn.call(null,inst_29006);
var inst_29055 = cljs.core.deref.call(null,mults);
var inst_29056__$1 = cljs.core.get.call(null,inst_29055,inst_29054__$1);
var state_29075__$1 = (function (){var statearr_29091 = state_29075;
(statearr_29091[(11)] = inst_29056__$1);

(statearr_29091[(7)] = inst_29054__$1);

return statearr_29091;
})();
if(cljs.core.truth_(inst_29056__$1)){
var statearr_29092_29140 = state_29075__$1;
(statearr_29092_29140[(1)] = (19));

} else {
var statearr_29093_29141 = state_29075__$1;
(statearr_29093_29141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (25))){
var inst_29065 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29094_29142 = state_29075__$1;
(statearr_29094_29142[(2)] = inst_29065);

(statearr_29094_29142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (17))){
var inst_29030 = (state_29075[(10)]);
var inst_29039 = cljs.core.first.call(null,inst_29030);
var inst_29040 = cljs.core.async.muxch_STAR_.call(null,inst_29039);
var inst_29041 = cljs.core.async.close_BANG_.call(null,inst_29040);
var inst_29042 = cljs.core.next.call(null,inst_29030);
var inst_29016 = inst_29042;
var inst_29017 = null;
var inst_29018 = (0);
var inst_29019 = (0);
var state_29075__$1 = (function (){var statearr_29095 = state_29075;
(statearr_29095[(12)] = inst_29018);

(statearr_29095[(13)] = inst_29019);

(statearr_29095[(14)] = inst_29041);

(statearr_29095[(15)] = inst_29016);

(statearr_29095[(16)] = inst_29017);

return statearr_29095;
})();
var statearr_29096_29143 = state_29075__$1;
(statearr_29096_29143[(2)] = null);

(statearr_29096_29143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (3))){
var inst_29073 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29075__$1,inst_29073);
} else {
if((state_val_29076 === (12))){
var inst_29050 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29097_29144 = state_29075__$1;
(statearr_29097_29144[(2)] = inst_29050);

(statearr_29097_29144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (2))){
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29075__$1,(4),ch);
} else {
if((state_val_29076 === (23))){
var state_29075__$1 = state_29075;
var statearr_29098_29145 = state_29075__$1;
(statearr_29098_29145[(2)] = null);

(statearr_29098_29145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (19))){
var inst_29056 = (state_29075[(11)]);
var inst_29006 = (state_29075[(8)]);
var inst_29058 = cljs.core.async.muxch_STAR_.call(null,inst_29056);
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29075__$1,(22),inst_29058,inst_29006);
} else {
if((state_val_29076 === (11))){
var inst_29030 = (state_29075[(10)]);
var inst_29016 = (state_29075[(15)]);
var inst_29030__$1 = cljs.core.seq.call(null,inst_29016);
var state_29075__$1 = (function (){var statearr_29099 = state_29075;
(statearr_29099[(10)] = inst_29030__$1);

return statearr_29099;
})();
if(inst_29030__$1){
var statearr_29100_29146 = state_29075__$1;
(statearr_29100_29146[(1)] = (13));

} else {
var statearr_29101_29147 = state_29075__$1;
(statearr_29101_29147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (9))){
var inst_29052 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29102_29148 = state_29075__$1;
(statearr_29102_29148[(2)] = inst_29052);

(statearr_29102_29148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (5))){
var inst_29013 = cljs.core.deref.call(null,mults);
var inst_29014 = cljs.core.vals.call(null,inst_29013);
var inst_29015 = cljs.core.seq.call(null,inst_29014);
var inst_29016 = inst_29015;
var inst_29017 = null;
var inst_29018 = (0);
var inst_29019 = (0);
var state_29075__$1 = (function (){var statearr_29103 = state_29075;
(statearr_29103[(12)] = inst_29018);

(statearr_29103[(13)] = inst_29019);

(statearr_29103[(15)] = inst_29016);

(statearr_29103[(16)] = inst_29017);

return statearr_29103;
})();
var statearr_29104_29149 = state_29075__$1;
(statearr_29104_29149[(2)] = null);

(statearr_29104_29149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (14))){
var state_29075__$1 = state_29075;
var statearr_29108_29150 = state_29075__$1;
(statearr_29108_29150[(2)] = null);

(statearr_29108_29150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (16))){
var inst_29030 = (state_29075[(10)]);
var inst_29034 = cljs.core.chunk_first.call(null,inst_29030);
var inst_29035 = cljs.core.chunk_rest.call(null,inst_29030);
var inst_29036 = cljs.core.count.call(null,inst_29034);
var inst_29016 = inst_29035;
var inst_29017 = inst_29034;
var inst_29018 = inst_29036;
var inst_29019 = (0);
var state_29075__$1 = (function (){var statearr_29109 = state_29075;
(statearr_29109[(12)] = inst_29018);

(statearr_29109[(13)] = inst_29019);

(statearr_29109[(15)] = inst_29016);

(statearr_29109[(16)] = inst_29017);

return statearr_29109;
})();
var statearr_29110_29151 = state_29075__$1;
(statearr_29110_29151[(2)] = null);

(statearr_29110_29151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (10))){
var inst_29018 = (state_29075[(12)]);
var inst_29019 = (state_29075[(13)]);
var inst_29016 = (state_29075[(15)]);
var inst_29017 = (state_29075[(16)]);
var inst_29024 = cljs.core._nth.call(null,inst_29017,inst_29019);
var inst_29025 = cljs.core.async.muxch_STAR_.call(null,inst_29024);
var inst_29026 = cljs.core.async.close_BANG_.call(null,inst_29025);
var inst_29027 = (inst_29019 + (1));
var tmp29105 = inst_29018;
var tmp29106 = inst_29016;
var tmp29107 = inst_29017;
var inst_29016__$1 = tmp29106;
var inst_29017__$1 = tmp29107;
var inst_29018__$1 = tmp29105;
var inst_29019__$1 = inst_29027;
var state_29075__$1 = (function (){var statearr_29111 = state_29075;
(statearr_29111[(12)] = inst_29018__$1);

(statearr_29111[(13)] = inst_29019__$1);

(statearr_29111[(17)] = inst_29026);

(statearr_29111[(15)] = inst_29016__$1);

(statearr_29111[(16)] = inst_29017__$1);

return statearr_29111;
})();
var statearr_29112_29152 = state_29075__$1;
(statearr_29112_29152[(2)] = null);

(statearr_29112_29152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (18))){
var inst_29045 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29113_29153 = state_29075__$1;
(statearr_29113_29153[(2)] = inst_29045);

(statearr_29113_29153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (8))){
var inst_29018 = (state_29075[(12)]);
var inst_29019 = (state_29075[(13)]);
var inst_29021 = (inst_29019 < inst_29018);
var inst_29022 = inst_29021;
var state_29075__$1 = state_29075;
if(cljs.core.truth_(inst_29022)){
var statearr_29114_29154 = state_29075__$1;
(statearr_29114_29154[(1)] = (10));

} else {
var statearr_29115_29155 = state_29075__$1;
(statearr_29115_29155[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__26206__auto___29127,mults,ensure_mult,p))
;
return ((function (switch__26183__auto__,c__26206__auto___29127,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29119[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29119[(1)] = (1));

return statearr_29119;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29075){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29120){if((e29120 instanceof Object)){
var ex__26187__auto__ = e29120;
var statearr_29121_29156 = state_29075;
(statearr_29121_29156[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29157 = state_29075;
state_29075 = G__29157;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29127,mults,ensure_mult,p))
})();
var state__26208__auto__ = (function (){var statearr_29122 = f__26207__auto__.call(null);
(statearr_29122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29127);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29127,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29158 = [];
var len__24786__auto___29161 = arguments.length;
var i__24787__auto___29162 = (0);
while(true){
if((i__24787__auto___29162 < len__24786__auto___29161)){
args29158.push((arguments[i__24787__auto___29162]));

var G__29163 = (i__24787__auto___29162 + (1));
i__24787__auto___29162 = G__29163;
continue;
} else {
}
break;
}

var G__29160 = args29158.length;
switch (G__29160) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29158.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29165 = [];
var len__24786__auto___29168 = arguments.length;
var i__24787__auto___29169 = (0);
while(true){
if((i__24787__auto___29169 < len__24786__auto___29168)){
args29165.push((arguments[i__24787__auto___29169]));

var G__29170 = (i__24787__auto___29169 + (1));
i__24787__auto___29169 = G__29170;
continue;
} else {
}
break;
}

var G__29167 = args29165.length;
switch (G__29167) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29165.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29172 = [];
var len__24786__auto___29243 = arguments.length;
var i__24787__auto___29244 = (0);
while(true){
if((i__24787__auto___29244 < len__24786__auto___29243)){
args29172.push((arguments[i__24787__auto___29244]));

var G__29245 = (i__24787__auto___29244 + (1));
i__24787__auto___29244 = G__29245;
continue;
} else {
}
break;
}

var G__29174 = args29172.length;
switch (G__29174) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29172.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26206__auto___29247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (7))){
var state_29213__$1 = state_29213;
var statearr_29215_29248 = state_29213__$1;
(statearr_29215_29248[(2)] = null);

(statearr_29215_29248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (1))){
var state_29213__$1 = state_29213;
var statearr_29216_29249 = state_29213__$1;
(statearr_29216_29249[(2)] = null);

(statearr_29216_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (4))){
var inst_29177 = (state_29213[(7)]);
var inst_29179 = (inst_29177 < cnt);
var state_29213__$1 = state_29213;
if(cljs.core.truth_(inst_29179)){
var statearr_29217_29250 = state_29213__$1;
(statearr_29217_29250[(1)] = (6));

} else {
var statearr_29218_29251 = state_29213__$1;
(statearr_29218_29251[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (15))){
var inst_29209 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29219_29252 = state_29213__$1;
(statearr_29219_29252[(2)] = inst_29209);

(statearr_29219_29252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (13))){
var inst_29202 = cljs.core.async.close_BANG_.call(null,out);
var state_29213__$1 = state_29213;
var statearr_29220_29253 = state_29213__$1;
(statearr_29220_29253[(2)] = inst_29202);

(statearr_29220_29253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (6))){
var state_29213__$1 = state_29213;
var statearr_29221_29254 = state_29213__$1;
(statearr_29221_29254[(2)] = null);

(statearr_29221_29254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (3))){
var inst_29211 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
if((state_val_29214 === (12))){
var inst_29199 = (state_29213[(8)]);
var inst_29199__$1 = (state_29213[(2)]);
var inst_29200 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29199__$1);
var state_29213__$1 = (function (){var statearr_29222 = state_29213;
(statearr_29222[(8)] = inst_29199__$1);

return statearr_29222;
})();
if(cljs.core.truth_(inst_29200)){
var statearr_29223_29255 = state_29213__$1;
(statearr_29223_29255[(1)] = (13));

} else {
var statearr_29224_29256 = state_29213__$1;
(statearr_29224_29256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (2))){
var inst_29176 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29177 = (0);
var state_29213__$1 = (function (){var statearr_29225 = state_29213;
(statearr_29225[(7)] = inst_29177);

(statearr_29225[(9)] = inst_29176);

return statearr_29225;
})();
var statearr_29226_29257 = state_29213__$1;
(statearr_29226_29257[(2)] = null);

(statearr_29226_29257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (11))){
var inst_29177 = (state_29213[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29213,(10),Object,null,(9));
var inst_29186 = chs__$1.call(null,inst_29177);
var inst_29187 = done.call(null,inst_29177);
var inst_29188 = cljs.core.async.take_BANG_.call(null,inst_29186,inst_29187);
var state_29213__$1 = state_29213;
var statearr_29227_29258 = state_29213__$1;
(statearr_29227_29258[(2)] = inst_29188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (9))){
var inst_29177 = (state_29213[(7)]);
var inst_29190 = (state_29213[(2)]);
var inst_29191 = (inst_29177 + (1));
var inst_29177__$1 = inst_29191;
var state_29213__$1 = (function (){var statearr_29228 = state_29213;
(statearr_29228[(7)] = inst_29177__$1);

(statearr_29228[(10)] = inst_29190);

return statearr_29228;
})();
var statearr_29229_29259 = state_29213__$1;
(statearr_29229_29259[(2)] = null);

(statearr_29229_29259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (5))){
var inst_29197 = (state_29213[(2)]);
var state_29213__$1 = (function (){var statearr_29230 = state_29213;
(statearr_29230[(11)] = inst_29197);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(12),dchan);
} else {
if((state_val_29214 === (14))){
var inst_29199 = (state_29213[(8)]);
var inst_29204 = cljs.core.apply.call(null,f,inst_29199);
var state_29213__$1 = state_29213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29213__$1,(16),out,inst_29204);
} else {
if((state_val_29214 === (16))){
var inst_29206 = (state_29213[(2)]);
var state_29213__$1 = (function (){var statearr_29231 = state_29213;
(statearr_29231[(12)] = inst_29206);

return statearr_29231;
})();
var statearr_29232_29260 = state_29213__$1;
(statearr_29232_29260[(2)] = null);

(statearr_29232_29260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (10))){
var inst_29181 = (state_29213[(2)]);
var inst_29182 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29213__$1 = (function (){var statearr_29233 = state_29213;
(statearr_29233[(13)] = inst_29181);

return statearr_29233;
})();
var statearr_29234_29261 = state_29213__$1;
(statearr_29234_29261[(2)] = inst_29182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29214 === (8))){
var inst_29195 = (state_29213[(2)]);
var state_29213__$1 = state_29213;
var statearr_29235_29262 = state_29213__$1;
(statearr_29235_29262[(2)] = inst_29195);

(statearr_29235_29262[(1)] = (5));


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
});})(c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26183__auto__,c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29239[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29239[(1)] = (1));

return statearr_29239;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29213){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29240){if((e29240 instanceof Object)){
var ex__26187__auto__ = e29240;
var statearr_29241_29263 = state_29213;
(statearr_29241_29263[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29264 = state_29213;
state_29213 = G__29264;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26208__auto__ = (function (){var statearr_29242 = f__26207__auto__.call(null);
(statearr_29242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29247);

return statearr_29242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29247,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29266 = [];
var len__24786__auto___29324 = arguments.length;
var i__24787__auto___29325 = (0);
while(true){
if((i__24787__auto___29325 < len__24786__auto___29324)){
args29266.push((arguments[i__24787__auto___29325]));

var G__29326 = (i__24787__auto___29325 + (1));
i__24787__auto___29325 = G__29326;
continue;
} else {
}
break;
}

var G__29268 = args29266.length;
switch (G__29268) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29266.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29328,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29328,out){
return (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (7))){
var inst_29279 = (state_29300[(7)]);
var inst_29280 = (state_29300[(8)]);
var inst_29279__$1 = (state_29300[(2)]);
var inst_29280__$1 = cljs.core.nth.call(null,inst_29279__$1,(0),null);
var inst_29281 = cljs.core.nth.call(null,inst_29279__$1,(1),null);
var inst_29282 = (inst_29280__$1 == null);
var state_29300__$1 = (function (){var statearr_29302 = state_29300;
(statearr_29302[(9)] = inst_29281);

(statearr_29302[(7)] = inst_29279__$1);

(statearr_29302[(8)] = inst_29280__$1);

return statearr_29302;
})();
if(cljs.core.truth_(inst_29282)){
var statearr_29303_29329 = state_29300__$1;
(statearr_29303_29329[(1)] = (8));

} else {
var statearr_29304_29330 = state_29300__$1;
(statearr_29304_29330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (1))){
var inst_29269 = cljs.core.vec.call(null,chs);
var inst_29270 = inst_29269;
var state_29300__$1 = (function (){var statearr_29305 = state_29300;
(statearr_29305[(10)] = inst_29270);

return statearr_29305;
})();
var statearr_29306_29331 = state_29300__$1;
(statearr_29306_29331[(2)] = null);

(statearr_29306_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (4))){
var inst_29270 = (state_29300[(10)]);
var state_29300__$1 = state_29300;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29300__$1,(7),inst_29270);
} else {
if((state_val_29301 === (6))){
var inst_29296 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29307_29332 = state_29300__$1;
(statearr_29307_29332[(2)] = inst_29296);

(statearr_29307_29332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (3))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (2))){
var inst_29270 = (state_29300[(10)]);
var inst_29272 = cljs.core.count.call(null,inst_29270);
var inst_29273 = (inst_29272 > (0));
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29273)){
var statearr_29309_29333 = state_29300__$1;
(statearr_29309_29333[(1)] = (4));

} else {
var statearr_29310_29334 = state_29300__$1;
(statearr_29310_29334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (11))){
var inst_29270 = (state_29300[(10)]);
var inst_29289 = (state_29300[(2)]);
var tmp29308 = inst_29270;
var inst_29270__$1 = tmp29308;
var state_29300__$1 = (function (){var statearr_29311 = state_29300;
(statearr_29311[(11)] = inst_29289);

(statearr_29311[(10)] = inst_29270__$1);

return statearr_29311;
})();
var statearr_29312_29335 = state_29300__$1;
(statearr_29312_29335[(2)] = null);

(statearr_29312_29335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (9))){
var inst_29280 = (state_29300[(8)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29300__$1,(11),out,inst_29280);
} else {
if((state_val_29301 === (5))){
var inst_29294 = cljs.core.async.close_BANG_.call(null,out);
var state_29300__$1 = state_29300;
var statearr_29313_29336 = state_29300__$1;
(statearr_29313_29336[(2)] = inst_29294);

(statearr_29313_29336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (10))){
var inst_29292 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29314_29337 = state_29300__$1;
(statearr_29314_29337[(2)] = inst_29292);

(statearr_29314_29337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29281 = (state_29300[(9)]);
var inst_29279 = (state_29300[(7)]);
var inst_29280 = (state_29300[(8)]);
var inst_29270 = (state_29300[(10)]);
var inst_29284 = (function (){var cs = inst_29270;
var vec__29275 = inst_29279;
var v = inst_29280;
var c = inst_29281;
return ((function (cs,vec__29275,v,c,inst_29281,inst_29279,inst_29280,inst_29270,state_val_29301,c__26206__auto___29328,out){
return (function (p1__29265_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29265_SHARP_);
});
;})(cs,vec__29275,v,c,inst_29281,inst_29279,inst_29280,inst_29270,state_val_29301,c__26206__auto___29328,out))
})();
var inst_29285 = cljs.core.filterv.call(null,inst_29284,inst_29270);
var inst_29270__$1 = inst_29285;
var state_29300__$1 = (function (){var statearr_29315 = state_29300;
(statearr_29315[(10)] = inst_29270__$1);

return statearr_29315;
})();
var statearr_29316_29338 = state_29300__$1;
(statearr_29316_29338[(2)] = null);

(statearr_29316_29338[(1)] = (2));


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
});})(c__26206__auto___29328,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29328,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29320[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29320[(1)] = (1));

return statearr_29320;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29300){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29321){if((e29321 instanceof Object)){
var ex__26187__auto__ = e29321;
var statearr_29322_29339 = state_29300;
(statearr_29322_29339[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29340 = state_29300;
state_29300 = G__29340;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29328,out))
})();
var state__26208__auto__ = (function (){var statearr_29323 = f__26207__auto__.call(null);
(statearr_29323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29328);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29328,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29341 = [];
var len__24786__auto___29390 = arguments.length;
var i__24787__auto___29391 = (0);
while(true){
if((i__24787__auto___29391 < len__24786__auto___29390)){
args29341.push((arguments[i__24787__auto___29391]));

var G__29392 = (i__24787__auto___29391 + (1));
i__24787__auto___29391 = G__29392;
continue;
} else {
}
break;
}

var G__29343 = args29341.length;
switch (G__29343) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29341.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29394,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29394,out){
return (function (state_29367){
var state_val_29368 = (state_29367[(1)]);
if((state_val_29368 === (7))){
var inst_29349 = (state_29367[(7)]);
var inst_29349__$1 = (state_29367[(2)]);
var inst_29350 = (inst_29349__$1 == null);
var inst_29351 = cljs.core.not.call(null,inst_29350);
var state_29367__$1 = (function (){var statearr_29369 = state_29367;
(statearr_29369[(7)] = inst_29349__$1);

return statearr_29369;
})();
if(inst_29351){
var statearr_29370_29395 = state_29367__$1;
(statearr_29370_29395[(1)] = (8));

} else {
var statearr_29371_29396 = state_29367__$1;
(statearr_29371_29396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (1))){
var inst_29344 = (0);
var state_29367__$1 = (function (){var statearr_29372 = state_29367;
(statearr_29372[(8)] = inst_29344);

return statearr_29372;
})();
var statearr_29373_29397 = state_29367__$1;
(statearr_29373_29397[(2)] = null);

(statearr_29373_29397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (4))){
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29367__$1,(7),ch);
} else {
if((state_val_29368 === (6))){
var inst_29362 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29374_29398 = state_29367__$1;
(statearr_29374_29398[(2)] = inst_29362);

(statearr_29374_29398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (3))){
var inst_29364 = (state_29367[(2)]);
var inst_29365 = cljs.core.async.close_BANG_.call(null,out);
var state_29367__$1 = (function (){var statearr_29375 = state_29367;
(statearr_29375[(9)] = inst_29364);

return statearr_29375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29367__$1,inst_29365);
} else {
if((state_val_29368 === (2))){
var inst_29344 = (state_29367[(8)]);
var inst_29346 = (inst_29344 < n);
var state_29367__$1 = state_29367;
if(cljs.core.truth_(inst_29346)){
var statearr_29376_29399 = state_29367__$1;
(statearr_29376_29399[(1)] = (4));

} else {
var statearr_29377_29400 = state_29367__$1;
(statearr_29377_29400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (11))){
var inst_29344 = (state_29367[(8)]);
var inst_29354 = (state_29367[(2)]);
var inst_29355 = (inst_29344 + (1));
var inst_29344__$1 = inst_29355;
var state_29367__$1 = (function (){var statearr_29378 = state_29367;
(statearr_29378[(10)] = inst_29354);

(statearr_29378[(8)] = inst_29344__$1);

return statearr_29378;
})();
var statearr_29379_29401 = state_29367__$1;
(statearr_29379_29401[(2)] = null);

(statearr_29379_29401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (9))){
var state_29367__$1 = state_29367;
var statearr_29380_29402 = state_29367__$1;
(statearr_29380_29402[(2)] = null);

(statearr_29380_29402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (5))){
var state_29367__$1 = state_29367;
var statearr_29381_29403 = state_29367__$1;
(statearr_29381_29403[(2)] = null);

(statearr_29381_29403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (10))){
var inst_29359 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29382_29404 = state_29367__$1;
(statearr_29382_29404[(2)] = inst_29359);

(statearr_29382_29404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (8))){
var inst_29349 = (state_29367[(7)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29367__$1,(11),out,inst_29349);
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
});})(c__26206__auto___29394,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29394,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29386[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29386[(1)] = (1));

return statearr_29386;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29367){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29387){if((e29387 instanceof Object)){
var ex__26187__auto__ = e29387;
var statearr_29388_29405 = state_29367;
(statearr_29388_29405[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29406 = state_29367;
state_29367 = G__29406;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29394,out))
})();
var state__26208__auto__ = (function (){var statearr_29389 = f__26207__auto__.call(null);
(statearr_29389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29394);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29394,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29414 = (function (map_LT_,f,ch,meta29415){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29415 = meta29415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29416,meta29415__$1){
var self__ = this;
var _29416__$1 = this;
return (new cljs.core.async.t_cljs$core$async29414(self__.map_LT_,self__.f,self__.ch,meta29415__$1));
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29416){
var self__ = this;
var _29416__$1 = this;
return self__.meta29415;
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29417 = (function (map_LT_,f,ch,meta29415,_,fn1,meta29418){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29415 = meta29415;
this._ = _;
this.fn1 = fn1;
this.meta29418 = meta29418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29419,meta29418__$1){
var self__ = this;
var _29419__$1 = this;
return (new cljs.core.async.t_cljs$core$async29417(self__.map_LT_,self__.f,self__.ch,self__.meta29415,self__._,self__.fn1,meta29418__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29419){
var self__ = this;
var _29419__$1 = this;
return self__.meta29418;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29407_SHARP_){
return f1.call(null,(((p1__29407_SHARP_ == null))?null:self__.f.call(null,p1__29407_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29415","meta29415",1040241905,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29414","cljs.core.async/t_cljs$core$async29414",744425678,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29418","meta29418",1724864198,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29417";

cljs.core.async.t_cljs$core$async29417.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async29417");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29417 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29417(map_LT___$1,f__$1,ch__$1,meta29415__$1,___$2,fn1__$1,meta29418){
return (new cljs.core.async.t_cljs$core$async29417(map_LT___$1,f__$1,ch__$1,meta29415__$1,___$2,fn1__$1,meta29418));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29417(self__.map_LT_,self__.f,self__.ch,self__.meta29415,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23591__auto__ = ret;
if(cljs.core.truth_(and__23591__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23591__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29415","meta29415",1040241905,null)], null);
});

cljs.core.async.t_cljs$core$async29414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29414";

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async29414");
});

cljs.core.async.__GT_t_cljs$core$async29414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29414(map_LT___$1,f__$1,ch__$1,meta29415){
return (new cljs.core.async.t_cljs$core$async29414(map_LT___$1,f__$1,ch__$1,meta29415));
});

}

return (new cljs.core.async.t_cljs$core$async29414(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29423 = (function (map_GT_,f,ch,meta29424){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29424 = meta29424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29425,meta29424__$1){
var self__ = this;
var _29425__$1 = this;
return (new cljs.core.async.t_cljs$core$async29423(self__.map_GT_,self__.f,self__.ch,meta29424__$1));
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29425){
var self__ = this;
var _29425__$1 = this;
return self__.meta29424;
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29424","meta29424",748890662,null)], null);
});

cljs.core.async.t_cljs$core$async29423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29423";

cljs.core.async.t_cljs$core$async29423.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async29423");
});

cljs.core.async.__GT_t_cljs$core$async29423 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29423(map_GT___$1,f__$1,ch__$1,meta29424){
return (new cljs.core.async.t_cljs$core$async29423(map_GT___$1,f__$1,ch__$1,meta29424));
});

}

return (new cljs.core.async.t_cljs$core$async29423(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29429 = (function (filter_GT_,p,ch,meta29430){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29430 = meta29430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29431,meta29430__$1){
var self__ = this;
var _29431__$1 = this;
return (new cljs.core.async.t_cljs$core$async29429(self__.filter_GT_,self__.p,self__.ch,meta29430__$1));
});

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29431){
var self__ = this;
var _29431__$1 = this;
return self__.meta29430;
});

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29430","meta29430",-481701148,null)], null);
});

cljs.core.async.t_cljs$core$async29429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29429";

cljs.core.async.t_cljs$core$async29429.cljs$lang$ctorPrWriter = (function (this__24255__auto__,writer__24256__auto__,opt__24257__auto__){
return cljs.core._write.call(null,writer__24256__auto__,"cljs.core.async/t_cljs$core$async29429");
});

cljs.core.async.__GT_t_cljs$core$async29429 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29429(filter_GT___$1,p__$1,ch__$1,meta29430){
return (new cljs.core.async.t_cljs$core$async29429(filter_GT___$1,p__$1,ch__$1,meta29430));
});

}

return (new cljs.core.async.t_cljs$core$async29429(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29432 = [];
var len__24786__auto___29476 = arguments.length;
var i__24787__auto___29477 = (0);
while(true){
if((i__24787__auto___29477 < len__24786__auto___29476)){
args29432.push((arguments[i__24787__auto___29477]));

var G__29478 = (i__24787__auto___29477 + (1));
i__24787__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var G__29434 = args29432.length;
switch (G__29434) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29432.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29480,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29480,out){
return (function (state_29455){
var state_val_29456 = (state_29455[(1)]);
if((state_val_29456 === (7))){
var inst_29451 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29457_29481 = state_29455__$1;
(statearr_29457_29481[(2)] = inst_29451);

(statearr_29457_29481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (1))){
var state_29455__$1 = state_29455;
var statearr_29458_29482 = state_29455__$1;
(statearr_29458_29482[(2)] = null);

(statearr_29458_29482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (4))){
var inst_29437 = (state_29455[(7)]);
var inst_29437__$1 = (state_29455[(2)]);
var inst_29438 = (inst_29437__$1 == null);
var state_29455__$1 = (function (){var statearr_29459 = state_29455;
(statearr_29459[(7)] = inst_29437__$1);

return statearr_29459;
})();
if(cljs.core.truth_(inst_29438)){
var statearr_29460_29483 = state_29455__$1;
(statearr_29460_29483[(1)] = (5));

} else {
var statearr_29461_29484 = state_29455__$1;
(statearr_29461_29484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (6))){
var inst_29437 = (state_29455[(7)]);
var inst_29442 = p.call(null,inst_29437);
var state_29455__$1 = state_29455;
if(cljs.core.truth_(inst_29442)){
var statearr_29462_29485 = state_29455__$1;
(statearr_29462_29485[(1)] = (8));

} else {
var statearr_29463_29486 = state_29455__$1;
(statearr_29463_29486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (3))){
var inst_29453 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29455__$1,inst_29453);
} else {
if((state_val_29456 === (2))){
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(4),ch);
} else {
if((state_val_29456 === (11))){
var inst_29445 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29464_29487 = state_29455__$1;
(statearr_29464_29487[(2)] = inst_29445);

(statearr_29464_29487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (9))){
var state_29455__$1 = state_29455;
var statearr_29465_29488 = state_29455__$1;
(statearr_29465_29488[(2)] = null);

(statearr_29465_29488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (5))){
var inst_29440 = cljs.core.async.close_BANG_.call(null,out);
var state_29455__$1 = state_29455;
var statearr_29466_29489 = state_29455__$1;
(statearr_29466_29489[(2)] = inst_29440);

(statearr_29466_29489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (10))){
var inst_29448 = (state_29455[(2)]);
var state_29455__$1 = (function (){var statearr_29467 = state_29455;
(statearr_29467[(8)] = inst_29448);

return statearr_29467;
})();
var statearr_29468_29490 = state_29455__$1;
(statearr_29468_29490[(2)] = null);

(statearr_29468_29490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (8))){
var inst_29437 = (state_29455[(7)]);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29455__$1,(11),out,inst_29437);
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
});})(c__26206__auto___29480,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29480,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29472 = [null,null,null,null,null,null,null,null,null];
(statearr_29472[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29472[(1)] = (1));

return statearr_29472;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29455){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29473){if((e29473 instanceof Object)){
var ex__26187__auto__ = e29473;
var statearr_29474_29491 = state_29455;
(statearr_29474_29491[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29492 = state_29455;
state_29455 = G__29492;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29480,out))
})();
var state__26208__auto__ = (function (){var statearr_29475 = f__26207__auto__.call(null);
(statearr_29475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29480);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29480,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29493 = [];
var len__24786__auto___29496 = arguments.length;
var i__24787__auto___29497 = (0);
while(true){
if((i__24787__auto___29497 < len__24786__auto___29496)){
args29493.push((arguments[i__24787__auto___29497]));

var G__29498 = (i__24787__auto___29497 + (1));
i__24787__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29493.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26206__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto__){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto__){
return (function (state_29665){
var state_val_29666 = (state_29665[(1)]);
if((state_val_29666 === (7))){
var inst_29661 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29667_29708 = state_29665__$1;
(statearr_29667_29708[(2)] = inst_29661);

(statearr_29667_29708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (20))){
var inst_29631 = (state_29665[(7)]);
var inst_29642 = (state_29665[(2)]);
var inst_29643 = cljs.core.next.call(null,inst_29631);
var inst_29617 = inst_29643;
var inst_29618 = null;
var inst_29619 = (0);
var inst_29620 = (0);
var state_29665__$1 = (function (){var statearr_29668 = state_29665;
(statearr_29668[(8)] = inst_29642);

(statearr_29668[(9)] = inst_29617);

(statearr_29668[(10)] = inst_29618);

(statearr_29668[(11)] = inst_29620);

(statearr_29668[(12)] = inst_29619);

return statearr_29668;
})();
var statearr_29669_29709 = state_29665__$1;
(statearr_29669_29709[(2)] = null);

(statearr_29669_29709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (1))){
var state_29665__$1 = state_29665;
var statearr_29670_29710 = state_29665__$1;
(statearr_29670_29710[(2)] = null);

(statearr_29670_29710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (4))){
var inst_29606 = (state_29665[(13)]);
var inst_29606__$1 = (state_29665[(2)]);
var inst_29607 = (inst_29606__$1 == null);
var state_29665__$1 = (function (){var statearr_29671 = state_29665;
(statearr_29671[(13)] = inst_29606__$1);

return statearr_29671;
})();
if(cljs.core.truth_(inst_29607)){
var statearr_29672_29711 = state_29665__$1;
(statearr_29672_29711[(1)] = (5));

} else {
var statearr_29673_29712 = state_29665__$1;
(statearr_29673_29712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (15))){
var state_29665__$1 = state_29665;
var statearr_29677_29713 = state_29665__$1;
(statearr_29677_29713[(2)] = null);

(statearr_29677_29713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (21))){
var state_29665__$1 = state_29665;
var statearr_29678_29714 = state_29665__$1;
(statearr_29678_29714[(2)] = null);

(statearr_29678_29714[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (13))){
var inst_29617 = (state_29665[(9)]);
var inst_29618 = (state_29665[(10)]);
var inst_29620 = (state_29665[(11)]);
var inst_29619 = (state_29665[(12)]);
var inst_29627 = (state_29665[(2)]);
var inst_29628 = (inst_29620 + (1));
var tmp29674 = inst_29617;
var tmp29675 = inst_29618;
var tmp29676 = inst_29619;
var inst_29617__$1 = tmp29674;
var inst_29618__$1 = tmp29675;
var inst_29619__$1 = tmp29676;
var inst_29620__$1 = inst_29628;
var state_29665__$1 = (function (){var statearr_29679 = state_29665;
(statearr_29679[(9)] = inst_29617__$1);

(statearr_29679[(10)] = inst_29618__$1);

(statearr_29679[(14)] = inst_29627);

(statearr_29679[(11)] = inst_29620__$1);

(statearr_29679[(12)] = inst_29619__$1);

return statearr_29679;
})();
var statearr_29680_29715 = state_29665__$1;
(statearr_29680_29715[(2)] = null);

(statearr_29680_29715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (22))){
var state_29665__$1 = state_29665;
var statearr_29681_29716 = state_29665__$1;
(statearr_29681_29716[(2)] = null);

(statearr_29681_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (6))){
var inst_29606 = (state_29665[(13)]);
var inst_29615 = f.call(null,inst_29606);
var inst_29616 = cljs.core.seq.call(null,inst_29615);
var inst_29617 = inst_29616;
var inst_29618 = null;
var inst_29619 = (0);
var inst_29620 = (0);
var state_29665__$1 = (function (){var statearr_29682 = state_29665;
(statearr_29682[(9)] = inst_29617);

(statearr_29682[(10)] = inst_29618);

(statearr_29682[(11)] = inst_29620);

(statearr_29682[(12)] = inst_29619);

return statearr_29682;
})();
var statearr_29683_29717 = state_29665__$1;
(statearr_29683_29717[(2)] = null);

(statearr_29683_29717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (17))){
var inst_29631 = (state_29665[(7)]);
var inst_29635 = cljs.core.chunk_first.call(null,inst_29631);
var inst_29636 = cljs.core.chunk_rest.call(null,inst_29631);
var inst_29637 = cljs.core.count.call(null,inst_29635);
var inst_29617 = inst_29636;
var inst_29618 = inst_29635;
var inst_29619 = inst_29637;
var inst_29620 = (0);
var state_29665__$1 = (function (){var statearr_29684 = state_29665;
(statearr_29684[(9)] = inst_29617);

(statearr_29684[(10)] = inst_29618);

(statearr_29684[(11)] = inst_29620);

(statearr_29684[(12)] = inst_29619);

return statearr_29684;
})();
var statearr_29685_29718 = state_29665__$1;
(statearr_29685_29718[(2)] = null);

(statearr_29685_29718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (3))){
var inst_29663 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29665__$1,inst_29663);
} else {
if((state_val_29666 === (12))){
var inst_29651 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29686_29719 = state_29665__$1;
(statearr_29686_29719[(2)] = inst_29651);

(statearr_29686_29719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (2))){
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29665__$1,(4),in$);
} else {
if((state_val_29666 === (23))){
var inst_29659 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29687_29720 = state_29665__$1;
(statearr_29687_29720[(2)] = inst_29659);

(statearr_29687_29720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (19))){
var inst_29646 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29688_29721 = state_29665__$1;
(statearr_29688_29721[(2)] = inst_29646);

(statearr_29688_29721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (11))){
var inst_29617 = (state_29665[(9)]);
var inst_29631 = (state_29665[(7)]);
var inst_29631__$1 = cljs.core.seq.call(null,inst_29617);
var state_29665__$1 = (function (){var statearr_29689 = state_29665;
(statearr_29689[(7)] = inst_29631__$1);

return statearr_29689;
})();
if(inst_29631__$1){
var statearr_29690_29722 = state_29665__$1;
(statearr_29690_29722[(1)] = (14));

} else {
var statearr_29691_29723 = state_29665__$1;
(statearr_29691_29723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (9))){
var inst_29653 = (state_29665[(2)]);
var inst_29654 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29665__$1 = (function (){var statearr_29692 = state_29665;
(statearr_29692[(15)] = inst_29653);

return statearr_29692;
})();
if(cljs.core.truth_(inst_29654)){
var statearr_29693_29724 = state_29665__$1;
(statearr_29693_29724[(1)] = (21));

} else {
var statearr_29694_29725 = state_29665__$1;
(statearr_29694_29725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (5))){
var inst_29609 = cljs.core.async.close_BANG_.call(null,out);
var state_29665__$1 = state_29665;
var statearr_29695_29726 = state_29665__$1;
(statearr_29695_29726[(2)] = inst_29609);

(statearr_29695_29726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (14))){
var inst_29631 = (state_29665[(7)]);
var inst_29633 = cljs.core.chunked_seq_QMARK_.call(null,inst_29631);
var state_29665__$1 = state_29665;
if(inst_29633){
var statearr_29696_29727 = state_29665__$1;
(statearr_29696_29727[(1)] = (17));

} else {
var statearr_29697_29728 = state_29665__$1;
(statearr_29697_29728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (16))){
var inst_29649 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29698_29729 = state_29665__$1;
(statearr_29698_29729[(2)] = inst_29649);

(statearr_29698_29729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (10))){
var inst_29618 = (state_29665[(10)]);
var inst_29620 = (state_29665[(11)]);
var inst_29625 = cljs.core._nth.call(null,inst_29618,inst_29620);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29665__$1,(13),out,inst_29625);
} else {
if((state_val_29666 === (18))){
var inst_29631 = (state_29665[(7)]);
var inst_29640 = cljs.core.first.call(null,inst_29631);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29665__$1,(20),out,inst_29640);
} else {
if((state_val_29666 === (8))){
var inst_29620 = (state_29665[(11)]);
var inst_29619 = (state_29665[(12)]);
var inst_29622 = (inst_29620 < inst_29619);
var inst_29623 = inst_29622;
var state_29665__$1 = state_29665;
if(cljs.core.truth_(inst_29623)){
var statearr_29699_29730 = state_29665__$1;
(statearr_29699_29730[(1)] = (10));

} else {
var statearr_29700_29731 = state_29665__$1;
(statearr_29700_29731[(1)] = (11));

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
}
}
}
}
}
}
});})(c__26206__auto__))
;
return ((function (switch__26183__auto__,c__26206__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____0 = (function (){
var statearr_29704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__);

(statearr_29704[(1)] = (1));

return statearr_29704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____1 = (function (state_29665){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29705){if((e29705 instanceof Object)){
var ex__26187__auto__ = e29705;
var statearr_29706_29732 = state_29665;
(statearr_29706_29732[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29733 = state_29665;
state_29665 = G__29733;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__ = function(state_29665){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____1.call(this,state_29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26184__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto__))
})();
var state__26208__auto__ = (function (){var statearr_29707 = f__26207__auto__.call(null);
(statearr_29707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto__);

return statearr_29707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto__))
);

return c__26206__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29734 = [];
var len__24786__auto___29737 = arguments.length;
var i__24787__auto___29738 = (0);
while(true){
if((i__24787__auto___29738 < len__24786__auto___29737)){
args29734.push((arguments[i__24787__auto___29738]));

var G__29739 = (i__24787__auto___29738 + (1));
i__24787__auto___29738 = G__29739;
continue;
} else {
}
break;
}

var G__29736 = args29734.length;
switch (G__29736) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29734.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29741 = [];
var len__24786__auto___29744 = arguments.length;
var i__24787__auto___29745 = (0);
while(true){
if((i__24787__auto___29745 < len__24786__auto___29744)){
args29741.push((arguments[i__24787__auto___29745]));

var G__29746 = (i__24787__auto___29745 + (1));
i__24787__auto___29745 = G__29746;
continue;
} else {
}
break;
}

var G__29743 = args29741.length;
switch (G__29743) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29741.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29748 = [];
var len__24786__auto___29799 = arguments.length;
var i__24787__auto___29800 = (0);
while(true){
if((i__24787__auto___29800 < len__24786__auto___29799)){
args29748.push((arguments[i__24787__auto___29800]));

var G__29801 = (i__24787__auto___29800 + (1));
i__24787__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var G__29750 = args29748.length;
switch (G__29750) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29748.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29803,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29803,out){
return (function (state_29774){
var state_val_29775 = (state_29774[(1)]);
if((state_val_29775 === (7))){
var inst_29769 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29776_29804 = state_29774__$1;
(statearr_29776_29804[(2)] = inst_29769);

(statearr_29776_29804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (1))){
var inst_29751 = null;
var state_29774__$1 = (function (){var statearr_29777 = state_29774;
(statearr_29777[(7)] = inst_29751);

return statearr_29777;
})();
var statearr_29778_29805 = state_29774__$1;
(statearr_29778_29805[(2)] = null);

(statearr_29778_29805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (4))){
var inst_29754 = (state_29774[(8)]);
var inst_29754__$1 = (state_29774[(2)]);
var inst_29755 = (inst_29754__$1 == null);
var inst_29756 = cljs.core.not.call(null,inst_29755);
var state_29774__$1 = (function (){var statearr_29779 = state_29774;
(statearr_29779[(8)] = inst_29754__$1);

return statearr_29779;
})();
if(inst_29756){
var statearr_29780_29806 = state_29774__$1;
(statearr_29780_29806[(1)] = (5));

} else {
var statearr_29781_29807 = state_29774__$1;
(statearr_29781_29807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (6))){
var state_29774__$1 = state_29774;
var statearr_29782_29808 = state_29774__$1;
(statearr_29782_29808[(2)] = null);

(statearr_29782_29808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (3))){
var inst_29771 = (state_29774[(2)]);
var inst_29772 = cljs.core.async.close_BANG_.call(null,out);
var state_29774__$1 = (function (){var statearr_29783 = state_29774;
(statearr_29783[(9)] = inst_29771);

return statearr_29783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else {
if((state_val_29775 === (2))){
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(4),ch);
} else {
if((state_val_29775 === (11))){
var inst_29754 = (state_29774[(8)]);
var inst_29763 = (state_29774[(2)]);
var inst_29751 = inst_29754;
var state_29774__$1 = (function (){var statearr_29784 = state_29774;
(statearr_29784[(10)] = inst_29763);

(statearr_29784[(7)] = inst_29751);

return statearr_29784;
})();
var statearr_29785_29809 = state_29774__$1;
(statearr_29785_29809[(2)] = null);

(statearr_29785_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (9))){
var inst_29754 = (state_29774[(8)]);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29774__$1,(11),out,inst_29754);
} else {
if((state_val_29775 === (5))){
var inst_29751 = (state_29774[(7)]);
var inst_29754 = (state_29774[(8)]);
var inst_29758 = cljs.core._EQ_.call(null,inst_29754,inst_29751);
var state_29774__$1 = state_29774;
if(inst_29758){
var statearr_29787_29810 = state_29774__$1;
(statearr_29787_29810[(1)] = (8));

} else {
var statearr_29788_29811 = state_29774__$1;
(statearr_29788_29811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (10))){
var inst_29766 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29789_29812 = state_29774__$1;
(statearr_29789_29812[(2)] = inst_29766);

(statearr_29789_29812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (8))){
var inst_29751 = (state_29774[(7)]);
var tmp29786 = inst_29751;
var inst_29751__$1 = tmp29786;
var state_29774__$1 = (function (){var statearr_29790 = state_29774;
(statearr_29790[(7)] = inst_29751__$1);

return statearr_29790;
})();
var statearr_29791_29813 = state_29774__$1;
(statearr_29791_29813[(2)] = null);

(statearr_29791_29813[(1)] = (2));


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
});})(c__26206__auto___29803,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29803,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29795[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29795[(1)] = (1));

return statearr_29795;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29774){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29796){if((e29796 instanceof Object)){
var ex__26187__auto__ = e29796;
var statearr_29797_29814 = state_29774;
(statearr_29797_29814[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29815 = state_29774;
state_29774 = G__29815;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29803,out))
})();
var state__26208__auto__ = (function (){var statearr_29798 = f__26207__auto__.call(null);
(statearr_29798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29803);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29803,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29816 = [];
var len__24786__auto___29886 = arguments.length;
var i__24787__auto___29887 = (0);
while(true){
if((i__24787__auto___29887 < len__24786__auto___29886)){
args29816.push((arguments[i__24787__auto___29887]));

var G__29888 = (i__24787__auto___29887 + (1));
i__24787__auto___29887 = G__29888;
continue;
} else {
}
break;
}

var G__29818 = args29816.length;
switch (G__29818) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29816.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29890,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29890,out){
return (function (state_29856){
var state_val_29857 = (state_29856[(1)]);
if((state_val_29857 === (7))){
var inst_29852 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29858_29891 = state_29856__$1;
(statearr_29858_29891[(2)] = inst_29852);

(statearr_29858_29891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (1))){
var inst_29819 = (new Array(n));
var inst_29820 = inst_29819;
var inst_29821 = (0);
var state_29856__$1 = (function (){var statearr_29859 = state_29856;
(statearr_29859[(7)] = inst_29821);

(statearr_29859[(8)] = inst_29820);

return statearr_29859;
})();
var statearr_29860_29892 = state_29856__$1;
(statearr_29860_29892[(2)] = null);

(statearr_29860_29892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (4))){
var inst_29824 = (state_29856[(9)]);
var inst_29824__$1 = (state_29856[(2)]);
var inst_29825 = (inst_29824__$1 == null);
var inst_29826 = cljs.core.not.call(null,inst_29825);
var state_29856__$1 = (function (){var statearr_29861 = state_29856;
(statearr_29861[(9)] = inst_29824__$1);

return statearr_29861;
})();
if(inst_29826){
var statearr_29862_29893 = state_29856__$1;
(statearr_29862_29893[(1)] = (5));

} else {
var statearr_29863_29894 = state_29856__$1;
(statearr_29863_29894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (15))){
var inst_29846 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29864_29895 = state_29856__$1;
(statearr_29864_29895[(2)] = inst_29846);

(statearr_29864_29895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (13))){
var state_29856__$1 = state_29856;
var statearr_29865_29896 = state_29856__$1;
(statearr_29865_29896[(2)] = null);

(statearr_29865_29896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (6))){
var inst_29821 = (state_29856[(7)]);
var inst_29842 = (inst_29821 > (0));
var state_29856__$1 = state_29856;
if(cljs.core.truth_(inst_29842)){
var statearr_29866_29897 = state_29856__$1;
(statearr_29866_29897[(1)] = (12));

} else {
var statearr_29867_29898 = state_29856__$1;
(statearr_29867_29898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (3))){
var inst_29854 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29856__$1,inst_29854);
} else {
if((state_val_29857 === (12))){
var inst_29820 = (state_29856[(8)]);
var inst_29844 = cljs.core.vec.call(null,inst_29820);
var state_29856__$1 = state_29856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29856__$1,(15),out,inst_29844);
} else {
if((state_val_29857 === (2))){
var state_29856__$1 = state_29856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29856__$1,(4),ch);
} else {
if((state_val_29857 === (11))){
var inst_29836 = (state_29856[(2)]);
var inst_29837 = (new Array(n));
var inst_29820 = inst_29837;
var inst_29821 = (0);
var state_29856__$1 = (function (){var statearr_29868 = state_29856;
(statearr_29868[(7)] = inst_29821);

(statearr_29868[(8)] = inst_29820);

(statearr_29868[(10)] = inst_29836);

return statearr_29868;
})();
var statearr_29869_29899 = state_29856__$1;
(statearr_29869_29899[(2)] = null);

(statearr_29869_29899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (9))){
var inst_29820 = (state_29856[(8)]);
var inst_29834 = cljs.core.vec.call(null,inst_29820);
var state_29856__$1 = state_29856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29856__$1,(11),out,inst_29834);
} else {
if((state_val_29857 === (5))){
var inst_29821 = (state_29856[(7)]);
var inst_29820 = (state_29856[(8)]);
var inst_29829 = (state_29856[(11)]);
var inst_29824 = (state_29856[(9)]);
var inst_29828 = (inst_29820[inst_29821] = inst_29824);
var inst_29829__$1 = (inst_29821 + (1));
var inst_29830 = (inst_29829__$1 < n);
var state_29856__$1 = (function (){var statearr_29870 = state_29856;
(statearr_29870[(11)] = inst_29829__$1);

(statearr_29870[(12)] = inst_29828);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29830)){
var statearr_29871_29900 = state_29856__$1;
(statearr_29871_29900[(1)] = (8));

} else {
var statearr_29872_29901 = state_29856__$1;
(statearr_29872_29901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (14))){
var inst_29849 = (state_29856[(2)]);
var inst_29850 = cljs.core.async.close_BANG_.call(null,out);
var state_29856__$1 = (function (){var statearr_29874 = state_29856;
(statearr_29874[(13)] = inst_29849);

return statearr_29874;
})();
var statearr_29875_29902 = state_29856__$1;
(statearr_29875_29902[(2)] = inst_29850);

(statearr_29875_29902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (10))){
var inst_29840 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29876_29903 = state_29856__$1;
(statearr_29876_29903[(2)] = inst_29840);

(statearr_29876_29903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (8))){
var inst_29820 = (state_29856[(8)]);
var inst_29829 = (state_29856[(11)]);
var tmp29873 = inst_29820;
var inst_29820__$1 = tmp29873;
var inst_29821 = inst_29829;
var state_29856__$1 = (function (){var statearr_29877 = state_29856;
(statearr_29877[(7)] = inst_29821);

(statearr_29877[(8)] = inst_29820__$1);

return statearr_29877;
})();
var statearr_29878_29904 = state_29856__$1;
(statearr_29878_29904[(2)] = null);

(statearr_29878_29904[(1)] = (2));


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
});})(c__26206__auto___29890,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29890,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29882[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29882[(1)] = (1));

return statearr_29882;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29856){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29883){if((e29883 instanceof Object)){
var ex__26187__auto__ = e29883;
var statearr_29884_29905 = state_29856;
(statearr_29884_29905[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29906 = state_29856;
state_29856 = G__29906;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29890,out))
})();
var state__26208__auto__ = (function (){var statearr_29885 = f__26207__auto__.call(null);
(statearr_29885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29890);

return statearr_29885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29890,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29907 = [];
var len__24786__auto___29981 = arguments.length;
var i__24787__auto___29982 = (0);
while(true){
if((i__24787__auto___29982 < len__24786__auto___29981)){
args29907.push((arguments[i__24787__auto___29982]));

var G__29983 = (i__24787__auto___29982 + (1));
i__24787__auto___29982 = G__29983;
continue;
} else {
}
break;
}

var G__29909 = args29907.length;
switch (G__29909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29907.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26206__auto___29985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26206__auto___29985,out){
return (function (){
var f__26207__auto__ = (function (){var switch__26183__auto__ = ((function (c__26206__auto___29985,out){
return (function (state_29951){
var state_val_29952 = (state_29951[(1)]);
if((state_val_29952 === (7))){
var inst_29947 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29953_29986 = state_29951__$1;
(statearr_29953_29986[(2)] = inst_29947);

(statearr_29953_29986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (1))){
var inst_29910 = [];
var inst_29911 = inst_29910;
var inst_29912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29951__$1 = (function (){var statearr_29954 = state_29951;
(statearr_29954[(7)] = inst_29912);

(statearr_29954[(8)] = inst_29911);

return statearr_29954;
})();
var statearr_29955_29987 = state_29951__$1;
(statearr_29955_29987[(2)] = null);

(statearr_29955_29987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (4))){
var inst_29915 = (state_29951[(9)]);
var inst_29915__$1 = (state_29951[(2)]);
var inst_29916 = (inst_29915__$1 == null);
var inst_29917 = cljs.core.not.call(null,inst_29916);
var state_29951__$1 = (function (){var statearr_29956 = state_29951;
(statearr_29956[(9)] = inst_29915__$1);

return statearr_29956;
})();
if(inst_29917){
var statearr_29957_29988 = state_29951__$1;
(statearr_29957_29988[(1)] = (5));

} else {
var statearr_29958_29989 = state_29951__$1;
(statearr_29958_29989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (15))){
var inst_29941 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29959_29990 = state_29951__$1;
(statearr_29959_29990[(2)] = inst_29941);

(statearr_29959_29990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (13))){
var state_29951__$1 = state_29951;
var statearr_29960_29991 = state_29951__$1;
(statearr_29960_29991[(2)] = null);

(statearr_29960_29991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (6))){
var inst_29911 = (state_29951[(8)]);
var inst_29936 = inst_29911.length;
var inst_29937 = (inst_29936 > (0));
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29937)){
var statearr_29961_29992 = state_29951__$1;
(statearr_29961_29992[(1)] = (12));

} else {
var statearr_29962_29993 = state_29951__$1;
(statearr_29962_29993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (3))){
var inst_29949 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29951__$1,inst_29949);
} else {
if((state_val_29952 === (12))){
var inst_29911 = (state_29951[(8)]);
var inst_29939 = cljs.core.vec.call(null,inst_29911);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29951__$1,(15),out,inst_29939);
} else {
if((state_val_29952 === (2))){
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29951__$1,(4),ch);
} else {
if((state_val_29952 === (11))){
var inst_29919 = (state_29951[(10)]);
var inst_29915 = (state_29951[(9)]);
var inst_29929 = (state_29951[(2)]);
var inst_29930 = [];
var inst_29931 = inst_29930.push(inst_29915);
var inst_29911 = inst_29930;
var inst_29912 = inst_29919;
var state_29951__$1 = (function (){var statearr_29963 = state_29951;
(statearr_29963[(7)] = inst_29912);

(statearr_29963[(11)] = inst_29929);

(statearr_29963[(8)] = inst_29911);

(statearr_29963[(12)] = inst_29931);

return statearr_29963;
})();
var statearr_29964_29994 = state_29951__$1;
(statearr_29964_29994[(2)] = null);

(statearr_29964_29994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (9))){
var inst_29911 = (state_29951[(8)]);
var inst_29927 = cljs.core.vec.call(null,inst_29911);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29951__$1,(11),out,inst_29927);
} else {
if((state_val_29952 === (5))){
var inst_29912 = (state_29951[(7)]);
var inst_29919 = (state_29951[(10)]);
var inst_29915 = (state_29951[(9)]);
var inst_29919__$1 = f.call(null,inst_29915);
var inst_29920 = cljs.core._EQ_.call(null,inst_29919__$1,inst_29912);
var inst_29921 = cljs.core.keyword_identical_QMARK_.call(null,inst_29912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29922 = (inst_29920) || (inst_29921);
var state_29951__$1 = (function (){var statearr_29965 = state_29951;
(statearr_29965[(10)] = inst_29919__$1);

return statearr_29965;
})();
if(cljs.core.truth_(inst_29922)){
var statearr_29966_29995 = state_29951__$1;
(statearr_29966_29995[(1)] = (8));

} else {
var statearr_29967_29996 = state_29951__$1;
(statearr_29967_29996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (14))){
var inst_29944 = (state_29951[(2)]);
var inst_29945 = cljs.core.async.close_BANG_.call(null,out);
var state_29951__$1 = (function (){var statearr_29969 = state_29951;
(statearr_29969[(13)] = inst_29944);

return statearr_29969;
})();
var statearr_29970_29997 = state_29951__$1;
(statearr_29970_29997[(2)] = inst_29945);

(statearr_29970_29997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (10))){
var inst_29934 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29971_29998 = state_29951__$1;
(statearr_29971_29998[(2)] = inst_29934);

(statearr_29971_29998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (8))){
var inst_29919 = (state_29951[(10)]);
var inst_29915 = (state_29951[(9)]);
var inst_29911 = (state_29951[(8)]);
var inst_29924 = inst_29911.push(inst_29915);
var tmp29968 = inst_29911;
var inst_29911__$1 = tmp29968;
var inst_29912 = inst_29919;
var state_29951__$1 = (function (){var statearr_29972 = state_29951;
(statearr_29972[(7)] = inst_29912);

(statearr_29972[(8)] = inst_29911__$1);

(statearr_29972[(14)] = inst_29924);

return statearr_29972;
})();
var statearr_29973_29999 = state_29951__$1;
(statearr_29973_29999[(2)] = null);

(statearr_29973_29999[(1)] = (2));


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
});})(c__26206__auto___29985,out))
;
return ((function (switch__26183__auto__,c__26206__auto___29985,out){
return (function() {
var cljs$core$async$state_machine__26184__auto__ = null;
var cljs$core$async$state_machine__26184__auto____0 = (function (){
var statearr_29977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29977[(0)] = cljs$core$async$state_machine__26184__auto__);

(statearr_29977[(1)] = (1));

return statearr_29977;
});
var cljs$core$async$state_machine__26184__auto____1 = (function (state_29951){
while(true){
var ret_value__26185__auto__ = (function (){try{while(true){
var result__26186__auto__ = switch__26183__auto__.call(null,state_29951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26186__auto__;
}
break;
}
}catch (e29978){if((e29978 instanceof Object)){
var ex__26187__auto__ = e29978;
var statearr_29979_30000 = state_29951;
(statearr_29979_30000[(5)] = ex__26187__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30001 = state_29951;
state_29951 = G__30001;
continue;
} else {
return ret_value__26185__auto__;
}
break;
}
});
cljs$core$async$state_machine__26184__auto__ = function(state_29951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26184__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26184__auto____1.call(this,state_29951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26184__auto____0;
cljs$core$async$state_machine__26184__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26184__auto____1;
return cljs$core$async$state_machine__26184__auto__;
})()
;})(switch__26183__auto__,c__26206__auto___29985,out))
})();
var state__26208__auto__ = (function (){var statearr_29980 = f__26207__auto__.call(null);
(statearr_29980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26206__auto___29985);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26208__auto__);
});})(c__26206__auto___29985,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1467727671451