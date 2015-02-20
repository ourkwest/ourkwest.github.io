// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t35655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35655 = (function (f,fn_handler,meta35656){
this.f = f;
this.fn_handler = fn_handler;
this.meta35656 = meta35656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35655.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35657){
var self__ = this;
var _35657__$1 = this;
return self__.meta35656;
});

cljs.core.async.t35655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35657,meta35656__$1){
var self__ = this;
var _35657__$1 = this;
return (new cljs.core.async.t35655(self__.f,self__.fn_handler,meta35656__$1));
});

cljs.core.async.t35655.cljs$lang$type = true;

cljs.core.async.t35655.cljs$lang$ctorStr = "cljs.core.async/t35655";

cljs.core.async.t35655.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35655");
});

cljs.core.async.__GT_t35655 = (function __GT_t35655(f__$1,fn_handler__$1,meta35656){
return (new cljs.core.async.t35655(f__$1,fn_handler__$1,meta35656));
});

}

return (new cljs.core.async.t35655(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,20,cljs.core.constant$keyword$73,15,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,12,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__35659 = buff;
if(G__35659){
var bit__4492__auto__ = null;
if(cljs.core.truth_((function (){var or__3811__auto__ = bit__4492__auto__;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return G__35659.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35659.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35659);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35659);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_35670 = (function (){var G__35667 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35667) : cljs.core.deref.call(null,G__35667));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__35668_35671 = val_35670;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__35668_35671) : fn1.call(null,G__35668_35671));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35670,ret){
return (function (){
var G__35669 = val_35670;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__35669) : fn1.call(null,G__35669));
});})(val_35670,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){
return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));
if(cljs.core.truth_((function (){var and__3799__auto__ = ret;
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else {
return and__3799__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else {
cljs.core.async.impl.dispatch.run(fn0);
}
} else {
}

return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4698__auto___35679 = n;
var x_35680 = (0);
while(true){
if((x_35680 < n__4698__auto___35679)){
(a[x_35680] = (0));

var G__35681 = (x_35680 + (1));
x_35680 = G__35681;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__35682 = (i + (1));
i = G__35682;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__35690 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35690) : cljs.core.atom.call(null,G__35690));
})();
if(typeof cljs.core.async.t35691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35691 = (function (flag,alt_flag,meta35692){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35692 = meta35692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35694 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35694) : cljs.core.deref.call(null,G__35694));
});})(flag))
;

cljs.core.async.t35691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35695_35697 = self__.flag;
var G__35696_35698 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35695_35697,G__35696_35698) : cljs.core.reset_BANG_.call(null,G__35695_35697,G__35696_35698));

return true;
});})(flag))
;

cljs.core.async.t35691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35693){
var self__ = this;
var _35693__$1 = this;
return self__.meta35692;
});})(flag))
;

cljs.core.async.t35691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35693,meta35692__$1){
var self__ = this;
var _35693__$1 = this;
return (new cljs.core.async.t35691(self__.flag,self__.alt_flag,meta35692__$1));
});})(flag))
;

cljs.core.async.t35691.cljs$lang$type = true;

cljs.core.async.t35691.cljs$lang$ctorStr = "cljs.core.async/t35691";

cljs.core.async.t35691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35691");
});})(flag))
;

cljs.core.async.__GT_t35691 = ((function (flag){
return (function __GT_t35691(flag__$1,alt_flag__$1,meta35692){
return (new cljs.core.async.t35691(flag__$1,alt_flag__$1,meta35692));
});})(flag))
;

}

return (new cljs.core.async.t35691(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,15,cljs.core.constant$keyword$73,128,cljs.core.constant$keyword$74,5,cljs.core.constant$keyword$75,123,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t35702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35702 = (function (cb,flag,alt_handler,meta35703){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35703 = meta35703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t35702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t35702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35704){
var self__ = this;
var _35704__$1 = this;
return self__.meta35703;
});

cljs.core.async.t35702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35704,meta35703__$1){
var self__ = this;
var _35704__$1 = this;
return (new cljs.core.async.t35702(self__.cb,self__.flag,self__.alt_handler,meta35703__$1));
});

cljs.core.async.t35702.cljs$lang$type = true;

cljs.core.async.t35702.cljs$lang$ctorStr = "cljs.core.async/t35702";

cljs.core.async.t35702.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35702");
});

cljs.core.async.__GT_t35702 = (function __GT_t35702(cb__$1,flag__$1,alt_handler__$1,meta35703){
return (new cljs.core.async.t35702(cb__$1,flag__$1,alt_handler__$1,meta35703));
});

}

return (new cljs.core.async.t35702(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,11,cljs.core.constant$keyword$73,136,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,131,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__35711 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__35711) : port.call(null,G__35711));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__35712 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__35712) : port.call(null,G__35712));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
var G__35713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35713) : fret.call(null,G__35713));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35705_SHARP_){
var G__35714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35705_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35714) : fret.call(null,G__35714));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35715 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35715) : cljs.core.deref.call(null,G__35715));
})(),(function (){var or__3811__auto__ = wport;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35716 = (i + (1));
i = G__35716;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3811__auto__ = ret;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$71)){
var temp__4126__auto__ = (function (){var and__3799__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3799__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3799__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$71], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__35717){
var map__35719 = p__35717;
var map__35719__$1 = ((cljs.core.seq_QMARK_(map__35719))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35719):map__35719);
var opts = map__35719__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__35717 = null;
if (arguments.length > 1) {
var G__35720__i = 0, G__35720__a = new Array(arguments.length -  1);
while (G__35720__i < G__35720__a.length) {G__35720__a[G__35720__i] = arguments[G__35720__i + 1]; ++G__35720__i;}
  p__35717 = new cljs.core.IndexedSeq(G__35720__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__35717);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35721){
var ports = cljs.core.first(arglist__35721);
var p__35717 = cljs.core.rest(arglist__35721);
return alts_BANG___delegate(ports,p__35717);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t35735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35735 = (function (ch,f,map_LT_,meta35736){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35736 = meta35736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});

cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t35738 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35738 = (function (fn1,_,meta35736,map_LT_,f,ch,meta35739){
this.fn1 = fn1;
this._ = _;
this.meta35736 = meta35736;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35739 = meta35739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t35738.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var G__35741 = self__.fn1;
return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__35741) : cljs.core.async.impl.protocols.lock_id.call(null,G__35741));
});})(___$1))
;

cljs.core.async.t35738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35722_SHARP_){
var G__35742 = (((p1__35722_SHARP_ == null))?null:(function (){var G__35743 = p1__35722_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35743) : self__.f.call(null,G__35743));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35742) : f1.call(null,G__35742));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35740){
var self__ = this;
var _35740__$1 = this;
return self__.meta35739;
});})(___$1))
;

cljs.core.async.t35738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35740,meta35739__$1){
var self__ = this;
var _35740__$1 = this;
return (new cljs.core.async.t35738(self__.fn1,self__._,self__.meta35736,self__.map_LT_,self__.f,self__.ch,meta35739__$1));
});})(___$1))
;

cljs.core.async.t35738.cljs$lang$type = true;

cljs.core.async.t35738.cljs$lang$ctorStr = "cljs.core.async/t35738";

cljs.core.async.t35738.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35738");
});})(___$1))
;

cljs.core.async.__GT_t35738 = ((function (___$1){
return (function __GT_t35738(fn1__$1,___$2,meta35736__$1,map_LT___$1,f__$1,ch__$1,meta35739){
return (new cljs.core.async.t35738(fn1__$1,___$2,meta35736__$1,map_LT___$1,f__$1,ch__$1,meta35739));
});})(___$1))
;

}

return (new cljs.core.async.t35738(fn1,___$1,self__.meta35736,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,46,cljs.core.constant$keyword$73,211,cljs.core.constant$keyword$74,10,cljs.core.constant$keyword$75,205,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3799__auto__ = ret;
if(cljs.core.truth_(and__3799__auto__)){
return !(((function (){var G__35744 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35744) : cljs.core.deref.call(null,G__35744));
})() == null));
} else {
return and__3799__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35745 = (function (){var G__35746 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35746) : cljs.core.deref.call(null,G__35746));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35745) : self__.f.call(null,G__35745));
})());
} else {
return ret;
}
});

cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35737){
var self__ = this;
var _35737__$1 = this;
return self__.meta35736;
});

cljs.core.async.t35735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35737,meta35736__$1){
var self__ = this;
var _35737__$1 = this;
return (new cljs.core.async.t35735(self__.ch,self__.f,self__.map_LT_,meta35736__$1));
});

cljs.core.async.t35735.cljs$lang$type = true;

cljs.core.async.t35735.cljs$lang$ctorStr = "cljs.core.async/t35735";

cljs.core.async.t35735.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35735");
});

cljs.core.async.__GT_t35735 = (function __GT_t35735(ch__$1,f__$1,map_LT___$1,meta35736){
return (new cljs.core.async.t35735(ch__$1,f__$1,map_LT___$1,meta35736));
});

}

return (new cljs.core.async.t35735(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,46,cljs.core.constant$keyword$73,217,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,197,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t35751 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35751 = (function (ch,f,map_GT_,meta35752){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35752 = meta35752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__35754 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35754) : self__.f.call(null,G__35754));
})(),fn0);
});

cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35753){
var self__ = this;
var _35753__$1 = this;
return self__.meta35752;
});

cljs.core.async.t35751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35753,meta35752__$1){
var self__ = this;
var _35753__$1 = this;
return (new cljs.core.async.t35751(self__.ch,self__.f,self__.map_GT_,meta35752__$1));
});

cljs.core.async.t35751.cljs$lang$type = true;

cljs.core.async.t35751.cljs$lang$ctorStr = "cljs.core.async/t35751";

cljs.core.async.t35751.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35751");
});

cljs.core.async.__GT_t35751 = (function __GT_t35751(ch__$1,f__$1,map_GT___$1,meta35752){
return (new cljs.core.async.t35751(ch__$1,f__$1,map_GT___$1,meta35752));
});

}

return (new cljs.core.async.t35751(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,34,cljs.core.constant$keyword$73,232,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,223,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t35759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35759 = (function (ch,p,filter_GT_,meta35760){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35760 = meta35760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__35762 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__35762) : self__.p.call(null,G__35762));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box(null);
}
});

cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t35759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35761){
var self__ = this;
var _35761__$1 = this;
return self__.meta35760;
});

cljs.core.async.t35759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35761,meta35760__$1){
var self__ = this;
var _35761__$1 = this;
return (new cljs.core.async.t35759(self__.ch,self__.p,self__.filter_GT_,meta35760__$1));
});

cljs.core.async.t35759.cljs$lang$type = true;

cljs.core.async.t35759.cljs$lang$ctorStr = "cljs.core.async/t35759";

cljs.core.async.t35759.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t35759");
});

cljs.core.async.__GT_t35759 = (function __GT_t35759(ch__$1,p__$1,filter_GT___$1,meta35760){
return (new cljs.core.async.t35759(ch__$1,p__$1,filter_GT___$1,meta35760));
});

}

return (new cljs.core.async.t35759(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,28,cljs.core.constant$keyword$73,252,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,241,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___35850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___35850,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___35850,out){
return (function (state_35828){
var state_val_35829 = (state_35828[(1)]);
if((state_val_35829 === (7))){
var inst_35824 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35830_35851 = state_35828__$1;
(statearr_35830_35851[(2)] = inst_35824);

(statearr_35830_35851[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (1))){
var state_35828__$1 = state_35828;
var statearr_35831_35852 = state_35828__$1;
(statearr_35831_35852[(2)] = null);

(statearr_35831_35852[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (4))){
var inst_35810 = (state_35828[(7)]);
var inst_35810__$1 = (state_35828[(2)]);
var inst_35811 = (inst_35810__$1 == null);
var state_35828__$1 = (function (){var statearr_35832 = state_35828;
(statearr_35832[(7)] = inst_35810__$1);

return statearr_35832;
})();
if(cljs.core.truth_(inst_35811)){
var statearr_35833_35853 = state_35828__$1;
(statearr_35833_35853[(1)] = (5));

} else {
var statearr_35834_35854 = state_35828__$1;
(statearr_35834_35854[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (6))){
var inst_35810 = (state_35828[(7)]);
var inst_35815 = (function (){var G__35835 = inst_35810;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__35835) : p.call(null,G__35835));
})();
var state_35828__$1 = state_35828;
if(cljs.core.truth_(inst_35815)){
var statearr_35836_35855 = state_35828__$1;
(statearr_35836_35855[(1)] = (8));

} else {
var statearr_35837_35856 = state_35828__$1;
(statearr_35837_35856[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (3))){
var inst_35826 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35828__$1,inst_35826);
} else {
if((state_val_35829 === (2))){
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35828__$1,(4),ch);
} else {
if((state_val_35829 === (11))){
var inst_35818 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35838_35857 = state_35828__$1;
(statearr_35838_35857[(2)] = inst_35818);

(statearr_35838_35857[(1)] = (10));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (9))){
var state_35828__$1 = state_35828;
var statearr_35839_35858 = state_35828__$1;
(statearr_35839_35858[(2)] = null);

(statearr_35839_35858[(1)] = (10));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (5))){
var inst_35813 = cljs.core.async.close_BANG_(out);
var state_35828__$1 = state_35828;
var statearr_35840_35859 = state_35828__$1;
(statearr_35840_35859[(2)] = inst_35813);

(statearr_35840_35859[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (10))){
var inst_35821 = (state_35828[(2)]);
var state_35828__$1 = (function (){var statearr_35841 = state_35828;
(statearr_35841[(8)] = inst_35821);

return statearr_35841;
})();
var statearr_35842_35860 = state_35828__$1;
(statearr_35842_35860[(2)] = null);

(statearr_35842_35860[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_35829 === (8))){
var inst_35810 = (state_35828[(7)]);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35828__$1,(11),out,inst_35810);
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
});})(c__6541__auto___35850,out))
;
return ((function (switch__6476__auto__,c__6541__auto___35850,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_35846 = [null,null,null,null,null,null,null,null,null];
(statearr_35846[(0)] = state_machine__6477__auto__);

(statearr_35846[(1)] = (1));

return statearr_35846;
});
var state_machine__6477__auto____1 = (function (state_35828){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_35828);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e35847){if((e35847 instanceof Object)){
var ex__6480__auto__ = e35847;
var statearr_35848_35861 = state_35828;
(statearr_35848_35861[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35828);

return cljs.core.constant$keyword$87;
} else {
throw e35847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__35862 = state_35828;
state_35828 = G__35862;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_35828){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_35828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___35850,out))
})();
var state__6543__auto__ = (function (){var statearr_35849 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_35849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___35850);

return statearr_35849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___35850,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_36018){
var state_val_36019 = (state_36018[(1)]);
if((state_val_36019 === (7))){
var inst_36014 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36020_36058 = state_36018__$1;
(statearr_36020_36058[(2)] = inst_36014);

(statearr_36020_36058[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (20))){
var inst_35989 = (state_36018[(7)]);
var inst_36000 = (state_36018[(2)]);
var inst_36001 = cljs.core.next(inst_35989);
var inst_35975 = inst_36001;
var inst_35976 = null;
var inst_35977 = (0);
var inst_35978 = (0);
var state_36018__$1 = (function (){var statearr_36021 = state_36018;
(statearr_36021[(8)] = inst_35975);

(statearr_36021[(9)] = inst_35978);

(statearr_36021[(10)] = inst_35976);

(statearr_36021[(11)] = inst_36000);

(statearr_36021[(12)] = inst_35977);

return statearr_36021;
})();
var statearr_36022_36059 = state_36018__$1;
(statearr_36022_36059[(2)] = null);

(statearr_36022_36059[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (1))){
var state_36018__$1 = state_36018;
var statearr_36023_36060 = state_36018__$1;
(statearr_36023_36060[(2)] = null);

(statearr_36023_36060[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (4))){
var inst_35964 = (state_36018[(13)]);
var inst_35964__$1 = (state_36018[(2)]);
var inst_35965 = (inst_35964__$1 == null);
var state_36018__$1 = (function (){var statearr_36027 = state_36018;
(statearr_36027[(13)] = inst_35964__$1);

return statearr_36027;
})();
if(cljs.core.truth_(inst_35965)){
var statearr_36028_36061 = state_36018__$1;
(statearr_36028_36061[(1)] = (5));

} else {
var statearr_36029_36062 = state_36018__$1;
(statearr_36029_36062[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (15))){
var state_36018__$1 = state_36018;
var statearr_36030_36063 = state_36018__$1;
(statearr_36030_36063[(2)] = null);

(statearr_36030_36063[(1)] = (16));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (13))){
var inst_35975 = (state_36018[(8)]);
var inst_35978 = (state_36018[(9)]);
var inst_35976 = (state_36018[(10)]);
var inst_35977 = (state_36018[(12)]);
var inst_35985 = (state_36018[(2)]);
var inst_35986 = (inst_35978 + (1));
var tmp36024 = inst_35975;
var tmp36025 = inst_35976;
var tmp36026 = inst_35977;
var inst_35975__$1 = tmp36024;
var inst_35976__$1 = tmp36025;
var inst_35977__$1 = tmp36026;
var inst_35978__$1 = inst_35986;
var state_36018__$1 = (function (){var statearr_36031 = state_36018;
(statearr_36031[(8)] = inst_35975__$1);

(statearr_36031[(9)] = inst_35978__$1);

(statearr_36031[(10)] = inst_35976__$1);

(statearr_36031[(14)] = inst_35985);

(statearr_36031[(12)] = inst_35977__$1);

return statearr_36031;
})();
var statearr_36032_36064 = state_36018__$1;
(statearr_36032_36064[(2)] = null);

(statearr_36032_36064[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (6))){
var inst_35964 = (state_36018[(13)]);
var inst_35969 = (function (){var G__36033 = inst_35964;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36033) : f.call(null,G__36033));
})();
var inst_35974 = cljs.core.seq(inst_35969);
var inst_35975 = inst_35974;
var inst_35976 = null;
var inst_35977 = (0);
var inst_35978 = (0);
var state_36018__$1 = (function (){var statearr_36034 = state_36018;
(statearr_36034[(8)] = inst_35975);

(statearr_36034[(9)] = inst_35978);

(statearr_36034[(10)] = inst_35976);

(statearr_36034[(12)] = inst_35977);

return statearr_36034;
})();
var statearr_36035_36065 = state_36018__$1;
(statearr_36035_36065[(2)] = null);

(statearr_36035_36065[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (17))){
var inst_35989 = (state_36018[(7)]);
var inst_35993 = cljs.core.chunk_first(inst_35989);
var inst_35994 = cljs.core.chunk_rest(inst_35989);
var inst_35995 = cljs.core.count(inst_35993);
var inst_35975 = inst_35994;
var inst_35976 = inst_35993;
var inst_35977 = inst_35995;
var inst_35978 = (0);
var state_36018__$1 = (function (){var statearr_36036 = state_36018;
(statearr_36036[(8)] = inst_35975);

(statearr_36036[(9)] = inst_35978);

(statearr_36036[(10)] = inst_35976);

(statearr_36036[(12)] = inst_35977);

return statearr_36036;
})();
var statearr_36037_36066 = state_36018__$1;
(statearr_36037_36066[(2)] = null);

(statearr_36037_36066[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (3))){
var inst_36016 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36018__$1,inst_36016);
} else {
if((state_val_36019 === (12))){
var inst_36009 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36038_36067 = state_36018__$1;
(statearr_36038_36067[(2)] = inst_36009);

(statearr_36038_36067[(1)] = (9));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (2))){
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36018__$1,(4),in$);
} else {
if((state_val_36019 === (19))){
var inst_36004 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36039_36068 = state_36018__$1;
(statearr_36039_36068[(2)] = inst_36004);

(statearr_36039_36068[(1)] = (16));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (11))){
var inst_35975 = (state_36018[(8)]);
var inst_35989 = (state_36018[(7)]);
var inst_35989__$1 = cljs.core.seq(inst_35975);
var state_36018__$1 = (function (){var statearr_36040 = state_36018;
(statearr_36040[(7)] = inst_35989__$1);

return statearr_36040;
})();
if(inst_35989__$1){
var statearr_36041_36069 = state_36018__$1;
(statearr_36041_36069[(1)] = (14));

} else {
var statearr_36042_36070 = state_36018__$1;
(statearr_36042_36070[(1)] = (15));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (9))){
var inst_36011 = (state_36018[(2)]);
var state_36018__$1 = (function (){var statearr_36043 = state_36018;
(statearr_36043[(15)] = inst_36011);

return statearr_36043;
})();
var statearr_36044_36071 = state_36018__$1;
(statearr_36044_36071[(2)] = null);

(statearr_36044_36071[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (5))){
var inst_35967 = cljs.core.async.close_BANG_(out);
var state_36018__$1 = state_36018;
var statearr_36045_36072 = state_36018__$1;
(statearr_36045_36072[(2)] = inst_35967);

(statearr_36045_36072[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (14))){
var inst_35989 = (state_36018[(7)]);
var inst_35991 = cljs.core.chunked_seq_QMARK_(inst_35989);
var state_36018__$1 = state_36018;
if(inst_35991){
var statearr_36046_36073 = state_36018__$1;
(statearr_36046_36073[(1)] = (17));

} else {
var statearr_36047_36074 = state_36018__$1;
(statearr_36047_36074[(1)] = (18));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (16))){
var inst_36007 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36048_36075 = state_36018__$1;
(statearr_36048_36075[(2)] = inst_36007);

(statearr_36048_36075[(1)] = (12));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36019 === (10))){
var inst_35978 = (state_36018[(9)]);
var inst_35976 = (state_36018[(10)]);
var inst_35983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35976,inst_35978);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36018__$1,(13),out,inst_35983);
} else {
if((state_val_36019 === (18))){
var inst_35989 = (state_36018[(7)]);
var inst_35998 = cljs.core.first(inst_35989);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36018__$1,(20),out,inst_35998);
} else {
if((state_val_36019 === (8))){
var inst_35978 = (state_36018[(9)]);
var inst_35977 = (state_36018[(12)]);
var inst_35980 = (inst_35978 < inst_35977);
var inst_35981 = inst_35980;
var state_36018__$1 = state_36018;
if(cljs.core.truth_(inst_35981)){
var statearr_36049_36076 = state_36018__$1;
(statearr_36049_36076[(1)] = (10));

} else {
var statearr_36050_36077 = state_36018__$1;
(statearr_36050_36077[(1)] = (11));

}

return cljs.core.constant$keyword$87;
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
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36054[(0)] = state_machine__6477__auto__);

(statearr_36054[(1)] = (1));

return statearr_36054;
});
var state_machine__6477__auto____1 = (function (state_36018){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36018);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36055){if((e36055 instanceof Object)){
var ex__6480__auto__ = e36055;
var statearr_36056_36078 = state_36018;
(statearr_36056_36078[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36018);

return cljs.core.constant$keyword$87;
} else {
throw e36055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36079 = state_36018;
state_36018 = G__36079;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36018){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_36057 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_36057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto__))
);

return c__6541__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6541__auto___36169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___36169){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___36169){
return (function (state_36148){
var state_val_36149 = (state_36148[(1)]);
if((state_val_36149 === (7))){
var inst_36144 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
var statearr_36150_36170 = state_36148__$1;
(statearr_36150_36170[(2)] = inst_36144);

(statearr_36150_36170[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (1))){
var state_36148__$1 = state_36148;
var statearr_36151_36171 = state_36148__$1;
(statearr_36151_36171[(2)] = null);

(statearr_36151_36171[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (4))){
var inst_36131 = (state_36148[(7)]);
var inst_36131__$1 = (state_36148[(2)]);
var inst_36132 = (inst_36131__$1 == null);
var state_36148__$1 = (function (){var statearr_36152 = state_36148;
(statearr_36152[(7)] = inst_36131__$1);

return statearr_36152;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36153_36172 = state_36148__$1;
(statearr_36153_36172[(1)] = (5));

} else {
var statearr_36154_36173 = state_36148__$1;
(statearr_36154_36173[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (6))){
var inst_36131 = (state_36148[(7)]);
var state_36148__$1 = state_36148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36148__$1,(11),to,inst_36131);
} else {
if((state_val_36149 === (3))){
var inst_36146 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36148__$1,inst_36146);
} else {
if((state_val_36149 === (2))){
var state_36148__$1 = state_36148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36148__$1,(4),from);
} else {
if((state_val_36149 === (11))){
var inst_36141 = (state_36148[(2)]);
var state_36148__$1 = (function (){var statearr_36155 = state_36148;
(statearr_36155[(8)] = inst_36141);

return statearr_36155;
})();
var statearr_36156_36174 = state_36148__$1;
(statearr_36156_36174[(2)] = null);

(statearr_36156_36174[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (9))){
var state_36148__$1 = state_36148;
var statearr_36157_36175 = state_36148__$1;
(statearr_36157_36175[(2)] = null);

(statearr_36157_36175[(1)] = (10));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (5))){
var state_36148__$1 = state_36148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36158_36176 = state_36148__$1;
(statearr_36158_36176[(1)] = (8));

} else {
var statearr_36159_36177 = state_36148__$1;
(statearr_36159_36177[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (10))){
var inst_36138 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
var statearr_36160_36178 = state_36148__$1;
(statearr_36160_36178[(2)] = inst_36138);

(statearr_36160_36178[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36149 === (8))){
var inst_36135 = cljs.core.async.close_BANG_(to);
var state_36148__$1 = state_36148;
var statearr_36161_36179 = state_36148__$1;
(statearr_36161_36179[(2)] = inst_36135);

(statearr_36161_36179[(1)] = (10));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___36169))
;
return ((function (switch__6476__auto__,c__6541__auto___36169){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36165 = [null,null,null,null,null,null,null,null,null];
(statearr_36165[(0)] = state_machine__6477__auto__);

(statearr_36165[(1)] = (1));

return statearr_36165;
});
var state_machine__6477__auto____1 = (function (state_36148){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36148);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36166){if((e36166 instanceof Object)){
var ex__6480__auto__ = e36166;
var statearr_36167_36180 = state_36148;
(statearr_36167_36180[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36148);

return cljs.core.constant$keyword$87;
} else {
throw e36166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36181 = state_36148;
state_36148 = G__36181;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36148){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___36169))
})();
var state__6543__auto__ = (function (){var statearr_36168 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___36169);

return statearr_36168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___36169))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__6541__auto___36274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___36274,tc,fc){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___36274,tc,fc){
return (function (state_36251){
var state_val_36252 = (state_36251[(1)]);
if((state_val_36252 === (7))){
var inst_36247 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
var statearr_36253_36275 = state_36251__$1;
(statearr_36253_36275[(2)] = inst_36247);

(statearr_36253_36275[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (1))){
var state_36251__$1 = state_36251;
var statearr_36254_36276 = state_36251__$1;
(statearr_36254_36276[(2)] = null);

(statearr_36254_36276[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (4))){
var inst_36232 = (state_36251[(7)]);
var inst_36232__$1 = (state_36251[(2)]);
var inst_36233 = (inst_36232__$1 == null);
var state_36251__$1 = (function (){var statearr_36255 = state_36251;
(statearr_36255[(7)] = inst_36232__$1);

return statearr_36255;
})();
if(cljs.core.truth_(inst_36233)){
var statearr_36256_36277 = state_36251__$1;
(statearr_36256_36277[(1)] = (5));

} else {
var statearr_36257_36278 = state_36251__$1;
(statearr_36257_36278[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (6))){
var inst_36232 = (state_36251[(7)]);
var inst_36238 = (function (){var G__36258 = inst_36232;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__36258) : p.call(null,G__36258));
})();
var state_36251__$1 = state_36251;
if(cljs.core.truth_(inst_36238)){
var statearr_36259_36279 = state_36251__$1;
(statearr_36259_36279[(1)] = (9));

} else {
var statearr_36260_36280 = state_36251__$1;
(statearr_36260_36280[(1)] = (10));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (3))){
var inst_36249 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36251__$1,inst_36249);
} else {
if((state_val_36252 === (2))){
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36251__$1,(4),ch);
} else {
if((state_val_36252 === (11))){
var inst_36232 = (state_36251[(7)]);
var inst_36242 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36251__$1,(8),inst_36242,inst_36232);
} else {
if((state_val_36252 === (9))){
var state_36251__$1 = state_36251;
var statearr_36261_36281 = state_36251__$1;
(statearr_36261_36281[(2)] = tc);

(statearr_36261_36281[(1)] = (11));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (5))){
var inst_36235 = cljs.core.async.close_BANG_(tc);
var inst_36236 = cljs.core.async.close_BANG_(fc);
var state_36251__$1 = (function (){var statearr_36262 = state_36251;
(statearr_36262[(8)] = inst_36235);

return statearr_36262;
})();
var statearr_36263_36282 = state_36251__$1;
(statearr_36263_36282[(2)] = inst_36236);

(statearr_36263_36282[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (10))){
var state_36251__$1 = state_36251;
var statearr_36264_36283 = state_36251__$1;
(statearr_36264_36283[(2)] = fc);

(statearr_36264_36283[(1)] = (11));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36252 === (8))){
var inst_36244 = (state_36251[(2)]);
var state_36251__$1 = (function (){var statearr_36265 = state_36251;
(statearr_36265[(9)] = inst_36244);

return statearr_36265;
})();
var statearr_36266_36284 = state_36251__$1;
(statearr_36266_36284[(2)] = null);

(statearr_36266_36284[(1)] = (2));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___36274,tc,fc))
;
return ((function (switch__6476__auto__,c__6541__auto___36274,tc,fc){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36270[(0)] = state_machine__6477__auto__);

(statearr_36270[(1)] = (1));

return statearr_36270;
});
var state_machine__6477__auto____1 = (function (state_36251){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36251);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36271){if((e36271 instanceof Object)){
var ex__6480__auto__ = e36271;
var statearr_36272_36285 = state_36251;
(statearr_36272_36285[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36251);

return cljs.core.constant$keyword$87;
} else {
throw e36271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36286 = state_36251;
state_36251 = G__36286;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36251){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___36274,tc,fc))
})();
var state__6543__auto__ = (function (){var statearr_36273 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___36274);

return statearr_36273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___36274,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_36335){
var state_val_36336 = (state_36335[(1)]);
if((state_val_36336 === (7))){
var inst_36331 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36337_36355 = state_36335__$1;
(statearr_36337_36355[(2)] = inst_36331);

(statearr_36337_36355[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36336 === (6))){
var inst_36324 = (state_36335[(7)]);
var inst_36321 = (state_36335[(8)]);
var inst_36328 = (function (){var G__36338 = inst_36321;
var G__36339 = inst_36324;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36338,G__36339) : f.call(null,G__36338,G__36339));
})();
var inst_36321__$1 = inst_36328;
var state_36335__$1 = (function (){var statearr_36340 = state_36335;
(statearr_36340[(8)] = inst_36321__$1);

return statearr_36340;
})();
var statearr_36341_36356 = state_36335__$1;
(statearr_36341_36356[(2)] = null);

(statearr_36341_36356[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36336 === (5))){
var inst_36321 = (state_36335[(8)]);
var state_36335__$1 = state_36335;
var statearr_36342_36357 = state_36335__$1;
(statearr_36342_36357[(2)] = inst_36321);

(statearr_36342_36357[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36336 === (4))){
var inst_36324 = (state_36335[(7)]);
var inst_36324__$1 = (state_36335[(2)]);
var inst_36325 = (inst_36324__$1 == null);
var state_36335__$1 = (function (){var statearr_36343 = state_36335;
(statearr_36343[(7)] = inst_36324__$1);

return statearr_36343;
})();
if(cljs.core.truth_(inst_36325)){
var statearr_36344_36358 = state_36335__$1;
(statearr_36344_36358[(1)] = (5));

} else {
var statearr_36345_36359 = state_36335__$1;
(statearr_36345_36359[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36336 === (3))){
var inst_36333 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36335__$1,inst_36333);
} else {
if((state_val_36336 === (2))){
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36335__$1,(4),ch);
} else {
if((state_val_36336 === (1))){
var inst_36321 = init;
var state_36335__$1 = (function (){var statearr_36346 = state_36335;
(statearr_36346[(8)] = inst_36321);

return statearr_36346;
})();
var statearr_36347_36360 = state_36335__$1;
(statearr_36347_36360[(2)] = null);

(statearr_36347_36360[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
return null;
}
}
}
}
}
}
}
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36351 = [null,null,null,null,null,null,null,null,null];
(statearr_36351[(0)] = state_machine__6477__auto__);

(statearr_36351[(1)] = (1));

return statearr_36351;
});
var state_machine__6477__auto____1 = (function (state_36335){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36335);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36352){if((e36352 instanceof Object)){
var ex__6480__auto__ = e36352;
var statearr_36353_36361 = state_36335;
(statearr_36353_36361[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36335);

return cljs.core.constant$keyword$87;
} else {
throw e36352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36362 = state_36335;
state_36335 = G__36362;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36335){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_36354 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_36354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto__))
);

return c__6541__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_36427){
var state_val_36428 = (state_36427[(1)]);
if((state_val_36428 === (7))){
var inst_36408 = (state_36427[(7)]);
var inst_36413 = (state_36427[(2)]);
var inst_36414 = cljs.core.next(inst_36408);
var inst_36408__$1 = inst_36414;
var state_36427__$1 = (function (){var statearr_36429 = state_36427;
(statearr_36429[(8)] = inst_36413);

(statearr_36429[(7)] = inst_36408__$1);

return statearr_36429;
})();
var statearr_36430_36448 = state_36427__$1;
(statearr_36430_36448[(2)] = null);

(statearr_36430_36448[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (1))){
var inst_36407 = cljs.core.seq(coll);
var inst_36408 = inst_36407;
var state_36427__$1 = (function (){var statearr_36431 = state_36427;
(statearr_36431[(7)] = inst_36408);

return statearr_36431;
})();
var statearr_36432_36449 = state_36427__$1;
(statearr_36432_36449[(2)] = null);

(statearr_36432_36449[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (4))){
var inst_36408 = (state_36427[(7)]);
var inst_36411 = cljs.core.first(inst_36408);
var state_36427__$1 = state_36427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36427__$1,(7),ch,inst_36411);
} else {
if((state_val_36428 === (6))){
var inst_36423 = (state_36427[(2)]);
var state_36427__$1 = state_36427;
var statearr_36433_36450 = state_36427__$1;
(statearr_36433_36450[(2)] = inst_36423);

(statearr_36433_36450[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (3))){
var inst_36425 = (state_36427[(2)]);
var state_36427__$1 = state_36427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36427__$1,inst_36425);
} else {
if((state_val_36428 === (2))){
var inst_36408 = (state_36427[(7)]);
var state_36427__$1 = state_36427;
if(cljs.core.truth_(inst_36408)){
var statearr_36434_36451 = state_36427__$1;
(statearr_36434_36451[(1)] = (4));

} else {
var statearr_36435_36452 = state_36427__$1;
(statearr_36435_36452[(1)] = (5));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (9))){
var state_36427__$1 = state_36427;
var statearr_36436_36453 = state_36427__$1;
(statearr_36436_36453[(2)] = null);

(statearr_36436_36453[(1)] = (10));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (5))){
var state_36427__$1 = state_36427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36437_36454 = state_36427__$1;
(statearr_36437_36454[(1)] = (8));

} else {
var statearr_36438_36455 = state_36427__$1;
(statearr_36438_36455[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (10))){
var inst_36421 = (state_36427[(2)]);
var state_36427__$1 = state_36427;
var statearr_36439_36456 = state_36427__$1;
(statearr_36439_36456[(2)] = inst_36421);

(statearr_36439_36456[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36428 === (8))){
var inst_36418 = cljs.core.async.close_BANG_(ch);
var state_36427__$1 = state_36427;
var statearr_36440_36457 = state_36427__$1;
(statearr_36440_36457[(2)] = inst_36418);

(statearr_36440_36457[(1)] = (10));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36444 = [null,null,null,null,null,null,null,null,null];
(statearr_36444[(0)] = state_machine__6477__auto__);

(statearr_36444[(1)] = (1));

return statearr_36444;
});
var state_machine__6477__auto____1 = (function (state_36427){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36427);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36445){if((e36445 instanceof Object)){
var ex__6480__auto__ = e36445;
var statearr_36446_36458 = state_36427;
(statearr_36446_36458[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36427);

return cljs.core.constant$keyword$87;
} else {
throw e36445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36459 = state_36427;
state_36427 = G__36459;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36427){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_36447 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_36447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto__))
);

return c__6541__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj36461 = {};
return obj36461;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3799__auto__ = _;
if(and__3799__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3799__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4455__auto__ = (((_ == null))?null:_);
return (function (){var or__3811__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__36465 = x__4455__auto__;
return goog.typeOf(G__36465);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj36467 = {};
return obj36467;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__36471 = x__4455__auto__;
return goog.typeOf(G__36471);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__36475 = x__4455__auto__;
return goog.typeOf(G__36475);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__36479 = x__4455__auto__;
return goog.typeOf(G__36479);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__36702 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36702) : cljs.core.atom.call(null,G__36702));
})();
var m = (function (){
if(typeof cljs.core.async.t36703 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36703 = (function (cs,ch,mult,meta36704){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36704 = meta36704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36703.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36703.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36703.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36703.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__36706_36924 = self__.cs;
var G__36707_36925 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36706_36924,G__36707_36925) : cljs.core.reset_BANG_.call(null,G__36706_36924,G__36707_36925));

return null;
});})(cs))
;

cljs.core.async.t36703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36705){
var self__ = this;
var _36705__$1 = this;
return self__.meta36704;
});})(cs))
;

cljs.core.async.t36703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36705,meta36704__$1){
var self__ = this;
var _36705__$1 = this;
return (new cljs.core.async.t36703(self__.cs,self__.ch,self__.mult,meta36704__$1));
});})(cs))
;

cljs.core.async.t36703.cljs$lang$type = true;

cljs.core.async.t36703.cljs$lang$ctorStr = "cljs.core.async/t36703";

cljs.core.async.t36703.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t36703");
});})(cs))
;

cljs.core.async.__GT_t36703 = ((function (cs){
return (function __GT_t36703(cs__$1,ch__$1,mult__$1,meta36704){
return (new cljs.core.async.t36703(cs__$1,ch__$1,mult__$1,meta36704));
});})(cs))
;

}

return (new cljs.core.async.t36703(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,48,cljs.core.constant$keyword$73,431,cljs.core.constant$keyword$74,11,cljs.core.constant$keyword$75,424,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__36708 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36708) : cljs.core.atom.call(null,G__36708));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6541__auto___36926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___36926,cs,m,dchan,dctr,done){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___36926,cs,m,dchan,dctr,done){
return (function (state_36838){
var state_val_36839 = (state_36838[(1)]);
if((state_val_36839 === (7))){
var inst_36834 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36840_36927 = state_36838__$1;
(statearr_36840_36927[(2)] = inst_36834);

(statearr_36840_36927[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (20))){
var inst_36740 = (state_36838[(7)]);
var inst_36750 = cljs.core.first(inst_36740);
var inst_36751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36750,(0),null);
var inst_36752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36750,(1),null);
var state_36838__$1 = (function (){var statearr_36841 = state_36838;
(statearr_36841[(8)] = inst_36751);

return statearr_36841;
})();
if(cljs.core.truth_(inst_36752)){
var statearr_36842_36928 = state_36838__$1;
(statearr_36842_36928[(1)] = (22));

} else {
var statearr_36843_36929 = state_36838__$1;
(statearr_36843_36929[(1)] = (23));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (27))){
var inst_36782 = (state_36838[(9)]);
var inst_36780 = (state_36838[(10)]);
var inst_36787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36780,inst_36782);
var state_36838__$1 = (function (){var statearr_36844 = state_36838;
(statearr_36844[(11)] = inst_36787);

return statearr_36844;
})();
var statearr_36845_36930 = state_36838__$1;
(statearr_36845_36930[(2)] = null);

(statearr_36845_36930[(1)] = (32));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (1))){
var state_36838__$1 = state_36838;
var statearr_36846_36931 = state_36838__$1;
(statearr_36846_36931[(2)] = null);

(statearr_36846_36931[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (24))){
var inst_36740 = (state_36838[(7)]);
var inst_36757 = (state_36838[(2)]);
var inst_36758 = cljs.core.next(inst_36740);
var inst_36720 = inst_36758;
var inst_36721 = null;
var inst_36722 = (0);
var inst_36723 = (0);
var state_36838__$1 = (function (){var statearr_36847 = state_36838;
(statearr_36847[(12)] = inst_36757);

(statearr_36847[(13)] = inst_36720);

(statearr_36847[(14)] = inst_36722);

(statearr_36847[(15)] = inst_36721);

(statearr_36847[(16)] = inst_36723);

return statearr_36847;
})();
var statearr_36848_36932 = state_36838__$1;
(statearr_36848_36932[(2)] = null);

(statearr_36848_36932[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (39))){
var inst_36800 = (state_36838[(17)]);
var inst_36818 = (state_36838[(2)]);
var inst_36819 = cljs.core.next(inst_36800);
var inst_36779 = inst_36819;
var inst_36780 = null;
var inst_36781 = (0);
var inst_36782 = (0);
var state_36838__$1 = (function (){var statearr_36852 = state_36838;
(statearr_36852[(9)] = inst_36782);

(statearr_36852[(18)] = inst_36779);

(statearr_36852[(10)] = inst_36780);

(statearr_36852[(19)] = inst_36818);

(statearr_36852[(20)] = inst_36781);

return statearr_36852;
})();
var statearr_36853_36933 = state_36838__$1;
(statearr_36853_36933[(2)] = null);

(statearr_36853_36933[(1)] = (25));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (4))){
var inst_36711 = (state_36838[(21)]);
var inst_36711__$1 = (state_36838[(2)]);
var inst_36712 = (inst_36711__$1 == null);
var state_36838__$1 = (function (){var statearr_36854 = state_36838;
(statearr_36854[(21)] = inst_36711__$1);

return statearr_36854;
})();
if(cljs.core.truth_(inst_36712)){
var statearr_36855_36934 = state_36838__$1;
(statearr_36855_36934[(1)] = (5));

} else {
var statearr_36856_36935 = state_36838__$1;
(statearr_36856_36935[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (15))){
var inst_36720 = (state_36838[(13)]);
var inst_36722 = (state_36838[(14)]);
var inst_36721 = (state_36838[(15)]);
var inst_36723 = (state_36838[(16)]);
var inst_36736 = (state_36838[(2)]);
var inst_36737 = (inst_36723 + (1));
var tmp36849 = inst_36720;
var tmp36850 = inst_36722;
var tmp36851 = inst_36721;
var inst_36720__$1 = tmp36849;
var inst_36721__$1 = tmp36851;
var inst_36722__$1 = tmp36850;
var inst_36723__$1 = inst_36737;
var state_36838__$1 = (function (){var statearr_36857 = state_36838;
(statearr_36857[(13)] = inst_36720__$1);

(statearr_36857[(22)] = inst_36736);

(statearr_36857[(14)] = inst_36722__$1);

(statearr_36857[(15)] = inst_36721__$1);

(statearr_36857[(16)] = inst_36723__$1);

return statearr_36857;
})();
var statearr_36858_36936 = state_36838__$1;
(statearr_36858_36936[(2)] = null);

(statearr_36858_36936[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (21))){
var inst_36761 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36859_36937 = state_36838__$1;
(statearr_36859_36937[(2)] = inst_36761);

(statearr_36859_36937[(1)] = (18));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (31))){
var inst_36787 = (state_36838[(11)]);
var inst_36788 = (state_36838[(2)]);
var inst_36789 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_36790 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36787);
var state_36838__$1 = (function (){var statearr_36860 = state_36838;
(statearr_36860[(23)] = inst_36789);

(statearr_36860[(24)] = inst_36788);

return statearr_36860;
})();
var statearr_36861_36938 = state_36838__$1;
(statearr_36861_36938[(2)] = inst_36790);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (32))){
var inst_36711 = (state_36838[(21)]);
var inst_36787 = (state_36838[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36838,(31),Object,null,(30));
var inst_36794 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36787,inst_36711,done);
var state_36838__$1 = state_36838;
var statearr_36862_36939 = state_36838__$1;
(statearr_36862_36939[(2)] = inst_36794);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (40))){
var inst_36809 = (state_36838[(25)]);
var inst_36810 = (state_36838[(2)]);
var inst_36811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_36812 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36809);
var state_36838__$1 = (function (){var statearr_36863 = state_36838;
(statearr_36863[(26)] = inst_36810);

(statearr_36863[(27)] = inst_36811);

return statearr_36863;
})();
var statearr_36864_36940 = state_36838__$1;
(statearr_36864_36940[(2)] = inst_36812);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (33))){
var inst_36800 = (state_36838[(17)]);
var inst_36802 = cljs.core.chunked_seq_QMARK_(inst_36800);
var state_36838__$1 = state_36838;
if(inst_36802){
var statearr_36865_36941 = state_36838__$1;
(statearr_36865_36941[(1)] = (36));

} else {
var statearr_36866_36942 = state_36838__$1;
(statearr_36866_36942[(1)] = (37));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (13))){
var inst_36730 = (state_36838[(28)]);
var inst_36733 = cljs.core.async.close_BANG_(inst_36730);
var state_36838__$1 = state_36838;
var statearr_36867_36943 = state_36838__$1;
(statearr_36867_36943[(2)] = inst_36733);

(statearr_36867_36943[(1)] = (15));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (22))){
var inst_36751 = (state_36838[(8)]);
var inst_36754 = cljs.core.async.close_BANG_(inst_36751);
var state_36838__$1 = state_36838;
var statearr_36868_36944 = state_36838__$1;
(statearr_36868_36944[(2)] = inst_36754);

(statearr_36868_36944[(1)] = (24));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (36))){
var inst_36800 = (state_36838[(17)]);
var inst_36804 = cljs.core.chunk_first(inst_36800);
var inst_36805 = cljs.core.chunk_rest(inst_36800);
var inst_36806 = cljs.core.count(inst_36804);
var inst_36779 = inst_36805;
var inst_36780 = inst_36804;
var inst_36781 = inst_36806;
var inst_36782 = (0);
var state_36838__$1 = (function (){var statearr_36869 = state_36838;
(statearr_36869[(9)] = inst_36782);

(statearr_36869[(18)] = inst_36779);

(statearr_36869[(10)] = inst_36780);

(statearr_36869[(20)] = inst_36781);

return statearr_36869;
})();
var statearr_36870_36945 = state_36838__$1;
(statearr_36870_36945[(2)] = null);

(statearr_36870_36945[(1)] = (25));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (41))){
var inst_36711 = (state_36838[(21)]);
var inst_36809 = (state_36838[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36838,(40),Object,null,(39));
var inst_36816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36809,inst_36711,done);
var state_36838__$1 = state_36838;
var statearr_36871_36946 = state_36838__$1;
(statearr_36871_36946[(2)] = inst_36816);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (29))){
var inst_36827 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36872_36947 = state_36838__$1;
(statearr_36872_36947[(2)] = inst_36827);

(statearr_36872_36947[(1)] = (26));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (6))){
var inst_36770 = (function (){var G__36873 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36873) : cljs.core.deref.call(null,G__36873));
})();
var inst_36771 = cljs.core.keys(inst_36770);
var inst_36772 = cljs.core.count(inst_36771);
var inst_36773 = (function (){var G__36874 = dctr;
var G__36875 = inst_36772;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36874,G__36875) : cljs.core.reset_BANG_.call(null,G__36874,G__36875));
})();
var inst_36778 = cljs.core.seq(inst_36771);
var inst_36779 = inst_36778;
var inst_36780 = null;
var inst_36781 = (0);
var inst_36782 = (0);
var state_36838__$1 = (function (){var statearr_36876 = state_36838;
(statearr_36876[(9)] = inst_36782);

(statearr_36876[(18)] = inst_36779);

(statearr_36876[(29)] = inst_36773);

(statearr_36876[(10)] = inst_36780);

(statearr_36876[(20)] = inst_36781);

return statearr_36876;
})();
var statearr_36877_36948 = state_36838__$1;
(statearr_36877_36948[(2)] = null);

(statearr_36877_36948[(1)] = (25));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (28))){
var inst_36779 = (state_36838[(18)]);
var inst_36800 = (state_36838[(17)]);
var inst_36800__$1 = cljs.core.seq(inst_36779);
var state_36838__$1 = (function (){var statearr_36878 = state_36838;
(statearr_36878[(17)] = inst_36800__$1);

return statearr_36878;
})();
if(inst_36800__$1){
var statearr_36879_36949 = state_36838__$1;
(statearr_36879_36949[(1)] = (33));

} else {
var statearr_36880_36950 = state_36838__$1;
(statearr_36880_36950[(1)] = (34));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (25))){
var inst_36782 = (state_36838[(9)]);
var inst_36781 = (state_36838[(20)]);
var inst_36784 = (inst_36782 < inst_36781);
var inst_36785 = inst_36784;
var state_36838__$1 = state_36838;
if(cljs.core.truth_(inst_36785)){
var statearr_36881_36951 = state_36838__$1;
(statearr_36881_36951[(1)] = (27));

} else {
var statearr_36882_36952 = state_36838__$1;
(statearr_36882_36952[(1)] = (28));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (34))){
var state_36838__$1 = state_36838;
var statearr_36883_36953 = state_36838__$1;
(statearr_36883_36953[(2)] = null);

(statearr_36883_36953[(1)] = (35));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (17))){
var state_36838__$1 = state_36838;
var statearr_36884_36954 = state_36838__$1;
(statearr_36884_36954[(2)] = null);

(statearr_36884_36954[(1)] = (18));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (3))){
var inst_36836 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36838__$1,inst_36836);
} else {
if((state_val_36839 === (12))){
var inst_36766 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36885_36955 = state_36838__$1;
(statearr_36885_36955[(2)] = inst_36766);

(statearr_36885_36955[(1)] = (9));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (2))){
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36838__$1,(4),ch);
} else {
if((state_val_36839 === (23))){
var state_36838__$1 = state_36838;
var statearr_36886_36956 = state_36838__$1;
(statearr_36886_36956[(2)] = null);

(statearr_36886_36956[(1)] = (24));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (35))){
var inst_36825 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36887_36957 = state_36838__$1;
(statearr_36887_36957[(2)] = inst_36825);

(statearr_36887_36957[(1)] = (29));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (19))){
var inst_36740 = (state_36838[(7)]);
var inst_36744 = cljs.core.chunk_first(inst_36740);
var inst_36745 = cljs.core.chunk_rest(inst_36740);
var inst_36746 = cljs.core.count(inst_36744);
var inst_36720 = inst_36745;
var inst_36721 = inst_36744;
var inst_36722 = inst_36746;
var inst_36723 = (0);
var state_36838__$1 = (function (){var statearr_36888 = state_36838;
(statearr_36888[(13)] = inst_36720);

(statearr_36888[(14)] = inst_36722);

(statearr_36888[(15)] = inst_36721);

(statearr_36888[(16)] = inst_36723);

return statearr_36888;
})();
var statearr_36889_36958 = state_36838__$1;
(statearr_36889_36958[(2)] = null);

(statearr_36889_36958[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (11))){
var inst_36720 = (state_36838[(13)]);
var inst_36740 = (state_36838[(7)]);
var inst_36740__$1 = cljs.core.seq(inst_36720);
var state_36838__$1 = (function (){var statearr_36890 = state_36838;
(statearr_36890[(7)] = inst_36740__$1);

return statearr_36890;
})();
if(inst_36740__$1){
var statearr_36891_36959 = state_36838__$1;
(statearr_36891_36959[(1)] = (16));

} else {
var statearr_36892_36960 = state_36838__$1;
(statearr_36892_36960[(1)] = (17));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (9))){
var inst_36768 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36893_36961 = state_36838__$1;
(statearr_36893_36961[(2)] = inst_36768);

(statearr_36893_36961[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (5))){
var inst_36718 = (function (){var G__36894 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36894) : cljs.core.deref.call(null,G__36894));
})();
var inst_36719 = cljs.core.seq(inst_36718);
var inst_36720 = inst_36719;
var inst_36721 = null;
var inst_36722 = (0);
var inst_36723 = (0);
var state_36838__$1 = (function (){var statearr_36895 = state_36838;
(statearr_36895[(13)] = inst_36720);

(statearr_36895[(14)] = inst_36722);

(statearr_36895[(15)] = inst_36721);

(statearr_36895[(16)] = inst_36723);

return statearr_36895;
})();
var statearr_36896_36962 = state_36838__$1;
(statearr_36896_36962[(2)] = null);

(statearr_36896_36962[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (14))){
var state_36838__$1 = state_36838;
var statearr_36897_36963 = state_36838__$1;
(statearr_36897_36963[(2)] = null);

(statearr_36897_36963[(1)] = (15));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (26))){
var inst_36829 = (state_36838[(2)]);
var state_36838__$1 = (function (){var statearr_36898 = state_36838;
(statearr_36898[(30)] = inst_36829);

return statearr_36898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36838__$1,(42),dchan);
} else {
if((state_val_36839 === (16))){
var inst_36740 = (state_36838[(7)]);
var inst_36742 = cljs.core.chunked_seq_QMARK_(inst_36740);
var state_36838__$1 = state_36838;
if(inst_36742){
var statearr_36902_36964 = state_36838__$1;
(statearr_36902_36964[(1)] = (19));

} else {
var statearr_36903_36965 = state_36838__$1;
(statearr_36903_36965[(1)] = (20));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (38))){
var inst_36822 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36904_36966 = state_36838__$1;
(statearr_36904_36966[(2)] = inst_36822);

(statearr_36904_36966[(1)] = (35));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (30))){
var inst_36782 = (state_36838[(9)]);
var inst_36779 = (state_36838[(18)]);
var inst_36780 = (state_36838[(10)]);
var inst_36781 = (state_36838[(20)]);
var inst_36796 = (state_36838[(2)]);
var inst_36797 = (inst_36782 + (1));
var tmp36899 = inst_36779;
var tmp36900 = inst_36780;
var tmp36901 = inst_36781;
var inst_36779__$1 = tmp36899;
var inst_36780__$1 = tmp36900;
var inst_36781__$1 = tmp36901;
var inst_36782__$1 = inst_36797;
var state_36838__$1 = (function (){var statearr_36905 = state_36838;
(statearr_36905[(9)] = inst_36782__$1);

(statearr_36905[(31)] = inst_36796);

(statearr_36905[(18)] = inst_36779__$1);

(statearr_36905[(10)] = inst_36780__$1);

(statearr_36905[(20)] = inst_36781__$1);

return statearr_36905;
})();
var statearr_36906_36967 = state_36838__$1;
(statearr_36906_36967[(2)] = null);

(statearr_36906_36967[(1)] = (25));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (10))){
var inst_36721 = (state_36838[(15)]);
var inst_36723 = (state_36838[(16)]);
var inst_36729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36721,inst_36723);
var inst_36730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36729,(0),null);
var inst_36731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36729,(1),null);
var state_36838__$1 = (function (){var statearr_36907 = state_36838;
(statearr_36907[(28)] = inst_36730);

return statearr_36907;
})();
if(cljs.core.truth_(inst_36731)){
var statearr_36908_36968 = state_36838__$1;
(statearr_36908_36968[(1)] = (13));

} else {
var statearr_36909_36969 = state_36838__$1;
(statearr_36909_36969[(1)] = (14));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (18))){
var inst_36764 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36910_36970 = state_36838__$1;
(statearr_36910_36970[(2)] = inst_36764);

(statearr_36910_36970[(1)] = (12));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (42))){
var inst_36831 = (state_36838[(2)]);
var state_36838__$1 = (function (){var statearr_36911 = state_36838;
(statearr_36911[(32)] = inst_36831);

return statearr_36911;
})();
var statearr_36912_36971 = state_36838__$1;
(statearr_36912_36971[(2)] = null);

(statearr_36912_36971[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (37))){
var inst_36800 = (state_36838[(17)]);
var inst_36809 = cljs.core.first(inst_36800);
var state_36838__$1 = (function (){var statearr_36913 = state_36838;
(statearr_36913[(25)] = inst_36809);

return statearr_36913;
})();
var statearr_36914_36972 = state_36838__$1;
(statearr_36914_36972[(2)] = null);

(statearr_36914_36972[(1)] = (41));


return cljs.core.constant$keyword$87;
} else {
if((state_val_36839 === (8))){
var inst_36722 = (state_36838[(14)]);
var inst_36723 = (state_36838[(16)]);
var inst_36725 = (inst_36723 < inst_36722);
var inst_36726 = inst_36725;
var state_36838__$1 = state_36838;
if(cljs.core.truth_(inst_36726)){
var statearr_36915_36973 = state_36838__$1;
(statearr_36915_36973[(1)] = (10));

} else {
var statearr_36916_36974 = state_36838__$1;
(statearr_36916_36974[(1)] = (11));

}

return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___36926,cs,m,dchan,dctr,done))
;
return ((function (switch__6476__auto__,c__6541__auto___36926,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_36920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36920[(0)] = state_machine__6477__auto__);

(statearr_36920[(1)] = (1));

return statearr_36920;
});
var state_machine__6477__auto____1 = (function (state_36838){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_36838);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e36921){if((e36921 instanceof Object)){
var ex__6480__auto__ = e36921;
var statearr_36922_36975 = state_36838;
(statearr_36922_36975[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838);

return cljs.core.constant$keyword$87;
} else {
throw e36921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__36976 = state_36838;
state_36838 = G__36976;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_36838){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_36838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___36926,cs,m,dchan,dctr,done))
})();
var state__6543__auto__ = (function (){var statearr_36923 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_36923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___36926);

return statearr_36923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___36926,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj36981 = {};
return obj36981;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__36985 = x__4455__auto__;
return goog.typeOf(G__36985);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__36989 = x__4455__auto__;
return goog.typeOf(G__36989);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__36993 = x__4455__auto__;
return goog.typeOf(G__36993);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__36997 = x__4455__auto__;
return goog.typeOf(G__36997);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3799__auto__ = m;
if(and__3799__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4455__auto__ = (((m == null))?null:m);
return (function (){var or__3811__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__37001 = x__4455__auto__;
return goog.typeOf(G__37001);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__37125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37125) : cljs.core.atom.call(null,G__37125));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$94,null,cljs.core.constant$keyword$95,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$96);
var solo_mode = (function (){var G__37126 = cljs.core.constant$keyword$95;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37126) : cljs.core.atom.call(null,G__37126));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__37127 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__37127) : attr.call(null,G__37127));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__37128 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37128) : cljs.core.deref.call(null,G__37128));
})();
var mode = (function (){var G__37129 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37129) : cljs.core.deref.call(null,G__37129));
})();
var solos = pick(cljs.core.constant$keyword$96,chs);
var pauses = pick(cljs.core.constant$keyword$94,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$97,solos,cljs.core.constant$keyword$98,pick(cljs.core.constant$keyword$95,chs),cljs.core.constant$keyword$99,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$94)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t37130 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37130 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37131){
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
this.meta37131 = meta37131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37130.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__37133_37248 = self__.cs;
var G__37134_37249 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37133_37248,G__37134_37249) : cljs.core.reset_BANG_.call(null,G__37133_37248,G__37134_37249));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__37135 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__37135) : self__.solo_modes.call(null,G__37135));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__37136_37250 = self__.solo_mode;
var G__37137_37251 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37136_37250,G__37137_37251) : cljs.core.reset_BANG_.call(null,G__37136_37250,G__37137_37251));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37132){
var self__ = this;
var _37132__$1 = this;
return self__.meta37131;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37132,meta37131__$1){
var self__ = this;
var _37132__$1 = this;
return (new cljs.core.async.t37130(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37131__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37130.cljs$lang$type = true;

cljs.core.async.t37130.cljs$lang$ctorStr = "cljs.core.async/t37130";

cljs.core.async.t37130.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t37130");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37130 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37130(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37131){
return (new cljs.core.async.t37130(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37131));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37130(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,25,cljs.core.constant$keyword$73,534,cljs.core.constant$keyword$74,11,cljs.core.constant$keyword$75,523,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
})()
;
var c__6541__auto___37252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37204){
var state_val_37205 = (state_37204[(1)]);
if((state_val_37205 === (7))){
var inst_37151 = (state_37204[(7)]);
var inst_37156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37151);
var state_37204__$1 = state_37204;
var statearr_37206_37253 = state_37204__$1;
(statearr_37206_37253[(2)] = inst_37156);

(statearr_37206_37253[(1)] = (9));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (20))){
var inst_37166 = (state_37204[(8)]);
var state_37204__$1 = state_37204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37204__$1,(23),out,inst_37166);
} else {
if((state_val_37205 === (1))){
var inst_37141 = (state_37204[(9)]);
var inst_37141__$1 = calc_state();
var inst_37142 = cljs.core.seq_QMARK_(inst_37141__$1);
var state_37204__$1 = (function (){var statearr_37207 = state_37204;
(statearr_37207[(9)] = inst_37141__$1);

return statearr_37207;
})();
if(inst_37142){
var statearr_37208_37254 = state_37204__$1;
(statearr_37208_37254[(1)] = (2));

} else {
var statearr_37209_37255 = state_37204__$1;
(statearr_37209_37255[(1)] = (3));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (4))){
var inst_37141 = (state_37204[(9)]);
var inst_37147 = (state_37204[(2)]);
var inst_37148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37147,cljs.core.constant$keyword$99);
var inst_37149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37147,cljs.core.constant$keyword$98);
var inst_37150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37147,cljs.core.constant$keyword$97);
var inst_37151 = inst_37141;
var state_37204__$1 = (function (){var statearr_37210 = state_37204;
(statearr_37210[(10)] = inst_37148);

(statearr_37210[(7)] = inst_37151);

(statearr_37210[(11)] = inst_37150);

(statearr_37210[(12)] = inst_37149);

return statearr_37210;
})();
var statearr_37211_37256 = state_37204__$1;
(statearr_37211_37256[(2)] = null);

(statearr_37211_37256[(1)] = (5));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (15))){
var state_37204__$1 = state_37204;
var statearr_37212_37257 = state_37204__$1;
(statearr_37212_37257[(2)] = null);

(statearr_37212_37257[(1)] = (16));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (21))){
var state_37204__$1 = state_37204;
var statearr_37213_37258 = state_37204__$1;
(statearr_37213_37258[(2)] = null);

(statearr_37213_37258[(1)] = (22));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (13))){
var inst_37200 = (state_37204[(2)]);
var state_37204__$1 = state_37204;
var statearr_37214_37259 = state_37204__$1;
(statearr_37214_37259[(2)] = inst_37200);

(statearr_37214_37259[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (22))){
var inst_37159 = (state_37204[(13)]);
var inst_37197 = (state_37204[(2)]);
var inst_37151 = inst_37159;
var state_37204__$1 = (function (){var statearr_37215 = state_37204;
(statearr_37215[(7)] = inst_37151);

(statearr_37215[(14)] = inst_37197);

return statearr_37215;
})();
var statearr_37216_37260 = state_37204__$1;
(statearr_37216_37260[(2)] = null);

(statearr_37216_37260[(1)] = (5));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (6))){
var inst_37202 = (state_37204[(2)]);
var state_37204__$1 = state_37204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37204__$1,inst_37202);
} else {
if((state_val_37205 === (17))){
var inst_37182 = (state_37204[(15)]);
var state_37204__$1 = state_37204;
var statearr_37217_37261 = state_37204__$1;
(statearr_37217_37261[(2)] = inst_37182);

(statearr_37217_37261[(1)] = (19));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (3))){
var inst_37141 = (state_37204[(9)]);
var state_37204__$1 = state_37204;
var statearr_37218_37262 = state_37204__$1;
(statearr_37218_37262[(2)] = inst_37141);

(statearr_37218_37262[(1)] = (4));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (12))){
var inst_37182 = (state_37204[(15)]);
var inst_37162 = (state_37204[(16)]);
var inst_37167 = (state_37204[(17)]);
var inst_37182__$1 = (function (){var G__37219 = inst_37167;
return (inst_37162.cljs$core$IFn$_invoke$arity$1 ? inst_37162.cljs$core$IFn$_invoke$arity$1(G__37219) : inst_37162.call(null,G__37219));
})();
var state_37204__$1 = (function (){var statearr_37220 = state_37204;
(statearr_37220[(15)] = inst_37182__$1);

return statearr_37220;
})();
if(cljs.core.truth_(inst_37182__$1)){
var statearr_37221_37263 = state_37204__$1;
(statearr_37221_37263[(1)] = (17));

} else {
var statearr_37222_37264 = state_37204__$1;
(statearr_37222_37264[(1)] = (18));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (2))){
var inst_37141 = (state_37204[(9)]);
var inst_37144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37141);
var state_37204__$1 = state_37204;
var statearr_37223_37265 = state_37204__$1;
(statearr_37223_37265[(2)] = inst_37144);

(statearr_37223_37265[(1)] = (4));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (23))){
var inst_37194 = (state_37204[(2)]);
var state_37204__$1 = state_37204;
var statearr_37224_37266 = state_37204__$1;
(statearr_37224_37266[(2)] = inst_37194);

(statearr_37224_37266[(1)] = (22));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (19))){
var inst_37191 = (state_37204[(2)]);
var state_37204__$1 = state_37204;
if(cljs.core.truth_(inst_37191)){
var statearr_37225_37267 = state_37204__$1;
(statearr_37225_37267[(1)] = (20));

} else {
var statearr_37226_37268 = state_37204__$1;
(statearr_37226_37268[(1)] = (21));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (11))){
var inst_37166 = (state_37204[(8)]);
var inst_37172 = (inst_37166 == null);
var state_37204__$1 = state_37204;
if(cljs.core.truth_(inst_37172)){
var statearr_37227_37269 = state_37204__$1;
(statearr_37227_37269[(1)] = (14));

} else {
var statearr_37228_37270 = state_37204__$1;
(statearr_37228_37270[(1)] = (15));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (9))){
var inst_37159 = (state_37204[(13)]);
var inst_37159__$1 = (state_37204[(2)]);
var inst_37160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37159__$1,cljs.core.constant$keyword$99);
var inst_37161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37159__$1,cljs.core.constant$keyword$98);
var inst_37162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37159__$1,cljs.core.constant$keyword$97);
var state_37204__$1 = (function (){var statearr_37229 = state_37204;
(statearr_37229[(13)] = inst_37159__$1);

(statearr_37229[(16)] = inst_37162);

(statearr_37229[(18)] = inst_37161);

return statearr_37229;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37204__$1,(10),inst_37160);
} else {
if((state_val_37205 === (5))){
var inst_37151 = (state_37204[(7)]);
var inst_37154 = cljs.core.seq_QMARK_(inst_37151);
var state_37204__$1 = state_37204;
if(inst_37154){
var statearr_37230_37271 = state_37204__$1;
(statearr_37230_37271[(1)] = (7));

} else {
var statearr_37231_37272 = state_37204__$1;
(statearr_37231_37272[(1)] = (8));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (14))){
var inst_37167 = (state_37204[(17)]);
var inst_37174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37167);
var state_37204__$1 = state_37204;
var statearr_37232_37273 = state_37204__$1;
(statearr_37232_37273[(2)] = inst_37174);

(statearr_37232_37273[(1)] = (16));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (16))){
var inst_37177 = (state_37204[(2)]);
var inst_37178 = calc_state();
var inst_37151 = inst_37178;
var state_37204__$1 = (function (){var statearr_37233 = state_37204;
(statearr_37233[(7)] = inst_37151);

(statearr_37233[(19)] = inst_37177);

return statearr_37233;
})();
var statearr_37234_37274 = state_37204__$1;
(statearr_37234_37274[(2)] = null);

(statearr_37234_37274[(1)] = (5));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (10))){
var inst_37166 = (state_37204[(8)]);
var inst_37167 = (state_37204[(17)]);
var inst_37165 = (state_37204[(2)]);
var inst_37166__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37165,(0),null);
var inst_37167__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37165,(1),null);
var inst_37168 = (inst_37166__$1 == null);
var inst_37169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37167__$1,change);
var inst_37170 = (inst_37168) || (inst_37169);
var state_37204__$1 = (function (){var statearr_37235 = state_37204;
(statearr_37235[(8)] = inst_37166__$1);

(statearr_37235[(17)] = inst_37167__$1);

return statearr_37235;
})();
if(cljs.core.truth_(inst_37170)){
var statearr_37236_37275 = state_37204__$1;
(statearr_37236_37275[(1)] = (11));

} else {
var statearr_37237_37276 = state_37204__$1;
(statearr_37237_37276[(1)] = (12));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (18))){
var inst_37162 = (state_37204[(16)]);
var inst_37161 = (state_37204[(18)]);
var inst_37167 = (state_37204[(17)]);
var inst_37186 = cljs.core.empty_QMARK_(inst_37162);
var inst_37187 = (function (){var G__37238 = inst_37167;
return (inst_37161.cljs$core$IFn$_invoke$arity$1 ? inst_37161.cljs$core$IFn$_invoke$arity$1(G__37238) : inst_37161.call(null,G__37238));
})();
var inst_37188 = cljs.core.not(inst_37187);
var inst_37189 = (inst_37186) && (inst_37188);
var state_37204__$1 = state_37204;
var statearr_37239_37277 = state_37204__$1;
(statearr_37239_37277[(2)] = inst_37189);

(statearr_37239_37277[(1)] = (19));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37205 === (8))){
var inst_37151 = (state_37204[(7)]);
var state_37204__$1 = state_37204;
var statearr_37240_37278 = state_37204__$1;
(statearr_37240_37278[(2)] = inst_37151);

(statearr_37240_37278[(1)] = (9));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6476__auto__,c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_37244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37244[(0)] = state_machine__6477__auto__);

(statearr_37244[(1)] = (1));

return statearr_37244;
});
var state_machine__6477__auto____1 = (function (state_37204){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_37204);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e37245){if((e37245 instanceof Object)){
var ex__6480__auto__ = e37245;
var statearr_37246_37279 = state_37204;
(statearr_37246_37279[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37204);

return cljs.core.constant$keyword$87;
} else {
throw e37245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__37280 = state_37204;
state_37204 = G__37280;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_37204){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_37204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6543__auto__ = (function (){var statearr_37247 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_37247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___37252);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___37252,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj37282 = {};
return obj37282;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3799__auto__ = p;
if(and__3799__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3799__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4455__auto__ = (((p == null))?null:p);
return (function (){var or__3811__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__37286 = x__4455__auto__;
return goog.typeOf(G__37286);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3799__auto__ = p;
if(and__3799__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3799__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4455__auto__ = (((p == null))?null:p);
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__37290 = x__4455__auto__;
return goog.typeOf(G__37290);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3799__auto__ = p;
if(and__3799__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3799__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4455__auto__ = (((p == null))?null:p);
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__37296 = x__4455__auto__;
return goog.typeOf(G__37296);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3799__auto__ = p;
if(and__3799__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3799__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4455__auto__ = (((p == null))?null:p);
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__37298 = x__4455__auto__;
return goog.typeOf(G__37298);
})()]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__37439 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37439) : cljs.core.atom.call(null,G__37439));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__37441 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37441) : cljs.core.deref.call(null,G__37441));
})(),topic);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3811__auto__,mults){
return (function (p1__37299_SHARP_){
if(cljs.core.truth_((function (){var G__37442 = topic;
return (p1__37299_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37299_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37442) : p1__37299_SHARP_.call(null,G__37442));
})())){
return p1__37299_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37299_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__37443 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__37443) : buf_fn.call(null,G__37443));
})())));
}
});})(or__3811__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37444 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37444 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37445){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37445 = meta37445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37444.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37444.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__37447 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__37447) : self__.ensure_mult.call(null,G__37447));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__37448 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37448) : cljs.core.deref.call(null,G__37448));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__37449 = self__.mults;
var G__37450 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37449,G__37450) : cljs.core.reset_BANG_.call(null,G__37449,G__37450));
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37446){
var self__ = this;
var _37446__$1 = this;
return self__.meta37445;
});})(mults,ensure_mult))
;

cljs.core.async.t37444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37446,meta37445__$1){
var self__ = this;
var _37446__$1 = this;
return (new cljs.core.async.t37444(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37445__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37444.cljs$lang$type = true;

cljs.core.async.t37444.cljs$lang$ctorStr = "cljs.core.async/t37444";

cljs.core.async.t37444.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async/t37444");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37444 = ((function (mults,ensure_mult){
return (function __GT_t37444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37445){
return (new cljs.core.async.t37444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37445));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37444(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,65,cljs.core.constant$keyword$73,624,cljs.core.constant$keyword$74,14,cljs.core.constant$keyword$75,612,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async.cljs"], null)));
})()
;
var c__6541__auto___37575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___37575,mults,ensure_mult,p){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___37575,mults,ensure_mult,p){
return (function (state_37524){
var state_val_37525 = (state_37524[(1)]);
if((state_val_37525 === (7))){
var inst_37520 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37526_37576 = state_37524__$1;
(statearr_37526_37576[(2)] = inst_37520);

(statearr_37526_37576[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (20))){
var state_37524__$1 = state_37524;
var statearr_37527_37577 = state_37524__$1;
(statearr_37527_37577[(2)] = null);

(statearr_37527_37577[(1)] = (21));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (1))){
var state_37524__$1 = state_37524;
var statearr_37528_37578 = state_37524__$1;
(statearr_37528_37578[(2)] = null);

(statearr_37528_37578[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (24))){
var inst_37453 = (state_37524[(7)]);
var inst_37503 = (state_37524[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37524,(23),Object,null,(22));
var inst_37510 = cljs.core.async.muxch_STAR_(inst_37503);
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37524__$1,(25),inst_37510,inst_37453);
} else {
if((state_val_37525 === (4))){
var inst_37453 = (state_37524[(7)]);
var inst_37453__$1 = (state_37524[(2)]);
var inst_37454 = (inst_37453__$1 == null);
var state_37524__$1 = (function (){var statearr_37529 = state_37524;
(statearr_37529[(7)] = inst_37453__$1);

return statearr_37529;
})();
if(cljs.core.truth_(inst_37454)){
var statearr_37530_37579 = state_37524__$1;
(statearr_37530_37579[(1)] = (5));

} else {
var statearr_37531_37580 = state_37524__$1;
(statearr_37531_37580[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (15))){
var inst_37495 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37532_37581 = state_37524__$1;
(statearr_37532_37581[(2)] = inst_37495);

(statearr_37532_37581[(1)] = (12));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (21))){
var inst_37517 = (state_37524[(2)]);
var state_37524__$1 = (function (){var statearr_37533 = state_37524;
(statearr_37533[(9)] = inst_37517);

return statearr_37533;
})();
var statearr_37534_37582 = state_37524__$1;
(statearr_37534_37582[(2)] = null);

(statearr_37534_37582[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (13))){
var inst_37477 = (state_37524[(10)]);
var inst_37479 = cljs.core.chunked_seq_QMARK_(inst_37477);
var state_37524__$1 = state_37524;
if(inst_37479){
var statearr_37535_37583 = state_37524__$1;
(statearr_37535_37583[(1)] = (16));

} else {
var statearr_37536_37584 = state_37524__$1;
(statearr_37536_37584[(1)] = (17));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (22))){
var inst_37514 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37537_37585 = state_37524__$1;
(statearr_37537_37585[(2)] = inst_37514);

(statearr_37537_37585[(1)] = (21));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (6))){
var inst_37453 = (state_37524[(7)]);
var inst_37501 = (state_37524[(11)]);
var inst_37503 = (state_37524[(8)]);
var inst_37501__$1 = (function (){var G__37538 = inst_37453;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__37538) : topic_fn.call(null,G__37538));
})();
var inst_37502 = (function (){var G__37539 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37539) : cljs.core.deref.call(null,G__37539));
})();
var inst_37503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37502,inst_37501__$1);
var state_37524__$1 = (function (){var statearr_37540 = state_37524;
(statearr_37540[(11)] = inst_37501__$1);

(statearr_37540[(8)] = inst_37503__$1);

return statearr_37540;
})();
if(cljs.core.truth_(inst_37503__$1)){
var statearr_37541_37586 = state_37524__$1;
(statearr_37541_37586[(1)] = (19));

} else {
var statearr_37542_37587 = state_37524__$1;
(statearr_37542_37587[(1)] = (20));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (25))){
var inst_37512 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37543_37588 = state_37524__$1;
(statearr_37543_37588[(2)] = inst_37512);


cljs.core.async.impl.ioc_helpers.process_exception(state_37524__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (17))){
var inst_37477 = (state_37524[(10)]);
var inst_37486 = cljs.core.first(inst_37477);
var inst_37487 = cljs.core.async.muxch_STAR_(inst_37486);
var inst_37488 = cljs.core.async.close_BANG_(inst_37487);
var inst_37489 = cljs.core.next(inst_37477);
var inst_37463 = inst_37489;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37524__$1 = (function (){var statearr_37544 = state_37524;
(statearr_37544[(12)] = inst_37463);

(statearr_37544[(13)] = inst_37488);

(statearr_37544[(14)] = inst_37465);

(statearr_37544[(15)] = inst_37466);

(statearr_37544[(16)] = inst_37464);

return statearr_37544;
})();
var statearr_37545_37589 = state_37524__$1;
(statearr_37545_37589[(2)] = null);

(statearr_37545_37589[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (3))){
var inst_37522 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37524__$1,inst_37522);
} else {
if((state_val_37525 === (12))){
var inst_37497 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37546_37590 = state_37524__$1;
(statearr_37546_37590[(2)] = inst_37497);

(statearr_37546_37590[(1)] = (9));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (2))){
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37524__$1,(4),ch);
} else {
if((state_val_37525 === (23))){
var inst_37501 = (state_37524[(11)]);
var inst_37505 = (state_37524[(2)]);
var inst_37506 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37501);
var state_37524__$1 = (function (){var statearr_37547 = state_37524;
(statearr_37547[(17)] = inst_37505);

return statearr_37547;
})();
var statearr_37548_37591 = state_37524__$1;
(statearr_37548_37591[(2)] = inst_37506);


cljs.core.async.impl.ioc_helpers.process_exception(state_37524__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (19))){
var state_37524__$1 = state_37524;
var statearr_37549_37592 = state_37524__$1;
(statearr_37549_37592[(2)] = null);

(statearr_37549_37592[(1)] = (24));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (11))){
var inst_37463 = (state_37524[(12)]);
var inst_37477 = (state_37524[(10)]);
var inst_37477__$1 = cljs.core.seq(inst_37463);
var state_37524__$1 = (function (){var statearr_37550 = state_37524;
(statearr_37550[(10)] = inst_37477__$1);

return statearr_37550;
})();
if(inst_37477__$1){
var statearr_37551_37593 = state_37524__$1;
(statearr_37551_37593[(1)] = (13));

} else {
var statearr_37552_37594 = state_37524__$1;
(statearr_37552_37594[(1)] = (14));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (9))){
var inst_37499 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37553_37595 = state_37524__$1;
(statearr_37553_37595[(2)] = inst_37499);

(statearr_37553_37595[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (5))){
var inst_37460 = (function (){var G__37554 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37554) : cljs.core.deref.call(null,G__37554));
})();
var inst_37461 = cljs.core.vals(inst_37460);
var inst_37462 = cljs.core.seq(inst_37461);
var inst_37463 = inst_37462;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37524__$1 = (function (){var statearr_37555 = state_37524;
(statearr_37555[(12)] = inst_37463);

(statearr_37555[(14)] = inst_37465);

(statearr_37555[(15)] = inst_37466);

(statearr_37555[(16)] = inst_37464);

return statearr_37555;
})();
var statearr_37556_37596 = state_37524__$1;
(statearr_37556_37596[(2)] = null);

(statearr_37556_37596[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (14))){
var state_37524__$1 = state_37524;
var statearr_37560_37597 = state_37524__$1;
(statearr_37560_37597[(2)] = null);

(statearr_37560_37597[(1)] = (15));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (16))){
var inst_37477 = (state_37524[(10)]);
var inst_37481 = cljs.core.chunk_first(inst_37477);
var inst_37482 = cljs.core.chunk_rest(inst_37477);
var inst_37483 = cljs.core.count(inst_37481);
var inst_37463 = inst_37482;
var inst_37464 = inst_37481;
var inst_37465 = inst_37483;
var inst_37466 = (0);
var state_37524__$1 = (function (){var statearr_37561 = state_37524;
(statearr_37561[(12)] = inst_37463);

(statearr_37561[(14)] = inst_37465);

(statearr_37561[(15)] = inst_37466);

(statearr_37561[(16)] = inst_37464);

return statearr_37561;
})();
var statearr_37562_37598 = state_37524__$1;
(statearr_37562_37598[(2)] = null);

(statearr_37562_37598[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (10))){
var inst_37463 = (state_37524[(12)]);
var inst_37465 = (state_37524[(14)]);
var inst_37466 = (state_37524[(15)]);
var inst_37464 = (state_37524[(16)]);
var inst_37471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37464,inst_37466);
var inst_37472 = cljs.core.async.muxch_STAR_(inst_37471);
var inst_37473 = cljs.core.async.close_BANG_(inst_37472);
var inst_37474 = (inst_37466 + (1));
var tmp37557 = inst_37463;
var tmp37558 = inst_37465;
var tmp37559 = inst_37464;
var inst_37463__$1 = tmp37557;
var inst_37464__$1 = tmp37559;
var inst_37465__$1 = tmp37558;
var inst_37466__$1 = inst_37474;
var state_37524__$1 = (function (){var statearr_37563 = state_37524;
(statearr_37563[(18)] = inst_37473);

(statearr_37563[(12)] = inst_37463__$1);

(statearr_37563[(14)] = inst_37465__$1);

(statearr_37563[(15)] = inst_37466__$1);

(statearr_37563[(16)] = inst_37464__$1);

return statearr_37563;
})();
var statearr_37564_37599 = state_37524__$1;
(statearr_37564_37599[(2)] = null);

(statearr_37564_37599[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (18))){
var inst_37492 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
var statearr_37565_37600 = state_37524__$1;
(statearr_37565_37600[(2)] = inst_37492);

(statearr_37565_37600[(1)] = (15));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37525 === (8))){
var inst_37465 = (state_37524[(14)]);
var inst_37466 = (state_37524[(15)]);
var inst_37468 = (inst_37466 < inst_37465);
var inst_37469 = inst_37468;
var state_37524__$1 = state_37524;
if(cljs.core.truth_(inst_37469)){
var statearr_37566_37601 = state_37524__$1;
(statearr_37566_37601[(1)] = (10));

} else {
var statearr_37567_37602 = state_37524__$1;
(statearr_37567_37602[(1)] = (11));

}

return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___37575,mults,ensure_mult,p))
;
return ((function (switch__6476__auto__,c__6541__auto___37575,mults,ensure_mult,p){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_37571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37571[(0)] = state_machine__6477__auto__);

(statearr_37571[(1)] = (1));

return statearr_37571;
});
var state_machine__6477__auto____1 = (function (state_37524){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_37524);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e37572){if((e37572 instanceof Object)){
var ex__6480__auto__ = e37572;
var statearr_37573_37603 = state_37524;
(statearr_37573_37603[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37524);

return cljs.core.constant$keyword$87;
} else {
throw e37572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__37604 = state_37524;
state_37524 = G__37604;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_37524){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_37524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___37575,mults,ensure_mult,p))
})();
var state__6543__auto__ = (function (){var statearr_37574 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_37574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___37575);

return statearr_37574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___37575,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__37685 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37685) : cljs.core.atom.call(null,G__37685));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__6541__auto___37758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37724){
var state_val_37725 = (state_37724[(1)]);
if((state_val_37725 === (7))){
var state_37724__$1 = state_37724;
var statearr_37726_37759 = state_37724__$1;
(statearr_37726_37759[(2)] = null);

(statearr_37726_37759[(1)] = (8));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (1))){
var state_37724__$1 = state_37724;
var statearr_37727_37760 = state_37724__$1;
(statearr_37727_37760[(2)] = null);

(statearr_37727_37760[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (4))){
var inst_37688 = (state_37724[(7)]);
var inst_37690 = (inst_37688 < cnt);
var state_37724__$1 = state_37724;
if(cljs.core.truth_(inst_37690)){
var statearr_37728_37761 = state_37724__$1;
(statearr_37728_37761[(1)] = (6));

} else {
var statearr_37729_37762 = state_37724__$1;
(statearr_37729_37762[(1)] = (7));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (15))){
var inst_37720 = (state_37724[(2)]);
var state_37724__$1 = state_37724;
var statearr_37730_37763 = state_37724__$1;
(statearr_37730_37763[(2)] = inst_37720);

(statearr_37730_37763[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (13))){
var inst_37713 = cljs.core.async.close_BANG_(out);
var state_37724__$1 = state_37724;
var statearr_37731_37764 = state_37724__$1;
(statearr_37731_37764[(2)] = inst_37713);

(statearr_37731_37764[(1)] = (15));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (6))){
var state_37724__$1 = state_37724;
var statearr_37732_37765 = state_37724__$1;
(statearr_37732_37765[(2)] = null);

(statearr_37732_37765[(1)] = (11));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (3))){
var inst_37722 = (state_37724[(2)]);
var state_37724__$1 = state_37724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37724__$1,inst_37722);
} else {
if((state_val_37725 === (12))){
var inst_37710 = (state_37724[(8)]);
var inst_37710__$1 = (state_37724[(2)]);
var inst_37711 = cljs.core.some(cljs.core.nil_QMARK_,inst_37710__$1);
var state_37724__$1 = (function (){var statearr_37733 = state_37724;
(statearr_37733[(8)] = inst_37710__$1);

return statearr_37733;
})();
if(cljs.core.truth_(inst_37711)){
var statearr_37734_37766 = state_37724__$1;
(statearr_37734_37766[(1)] = (13));

} else {
var statearr_37735_37767 = state_37724__$1;
(statearr_37735_37767[(1)] = (14));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (2))){
var inst_37687 = (function (){var G__37736 = dctr;
var G__37737 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37736,G__37737) : cljs.core.reset_BANG_.call(null,G__37736,G__37737));
})();
var inst_37688 = (0);
var state_37724__$1 = (function (){var statearr_37738 = state_37724;
(statearr_37738[(9)] = inst_37687);

(statearr_37738[(7)] = inst_37688);

return statearr_37738;
})();
var statearr_37739_37768 = state_37724__$1;
(statearr_37739_37768[(2)] = null);

(statearr_37739_37768[(1)] = (4));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (11))){
var inst_37688 = (state_37724[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37724,(10),Object,null,(9));
var inst_37697 = (function (){var G__37740 = inst_37688;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__37740) : chs__$1.call(null,G__37740));
})();
var inst_37698 = (function (){var G__37741 = inst_37688;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37741) : done.call(null,G__37741));
})();
var inst_37699 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37697,inst_37698);
var state_37724__$1 = state_37724;
var statearr_37742_37769 = state_37724__$1;
(statearr_37742_37769[(2)] = inst_37699);


cljs.core.async.impl.ioc_helpers.process_exception(state_37724__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (9))){
var inst_37688 = (state_37724[(7)]);
var inst_37701 = (state_37724[(2)]);
var inst_37702 = (inst_37688 + (1));
var inst_37688__$1 = inst_37702;
var state_37724__$1 = (function (){var statearr_37743 = state_37724;
(statearr_37743[(7)] = inst_37688__$1);

(statearr_37743[(10)] = inst_37701);

return statearr_37743;
})();
var statearr_37744_37770 = state_37724__$1;
(statearr_37744_37770[(2)] = null);

(statearr_37744_37770[(1)] = (4));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (5))){
var inst_37708 = (state_37724[(2)]);
var state_37724__$1 = (function (){var statearr_37745 = state_37724;
(statearr_37745[(11)] = inst_37708);

return statearr_37745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37724__$1,(12),dchan);
} else {
if((state_val_37725 === (14))){
var inst_37710 = (state_37724[(8)]);
var inst_37715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37710);
var state_37724__$1 = state_37724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37724__$1,(16),out,inst_37715);
} else {
if((state_val_37725 === (16))){
var inst_37717 = (state_37724[(2)]);
var state_37724__$1 = (function (){var statearr_37746 = state_37724;
(statearr_37746[(12)] = inst_37717);

return statearr_37746;
})();
var statearr_37747_37771 = state_37724__$1;
(statearr_37747_37771[(2)] = null);

(statearr_37747_37771[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (10))){
var inst_37692 = (state_37724[(2)]);
var inst_37693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37724__$1 = (function (){var statearr_37748 = state_37724;
(statearr_37748[(13)] = inst_37692);

return statearr_37748;
})();
var statearr_37749_37772 = state_37724__$1;
(statearr_37749_37772[(2)] = inst_37693);


cljs.core.async.impl.ioc_helpers.process_exception(state_37724__$1);

return cljs.core.constant$keyword$87;
} else {
if((state_val_37725 === (8))){
var inst_37706 = (state_37724[(2)]);
var state_37724__$1 = state_37724;
var statearr_37750_37773 = state_37724__$1;
(statearr_37750_37773[(2)] = inst_37706);

(statearr_37750_37773[(1)] = (5));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6476__auto__,c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_37754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37754[(0)] = state_machine__6477__auto__);

(statearr_37754[(1)] = (1));

return statearr_37754;
});
var state_machine__6477__auto____1 = (function (state_37724){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_37724);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e37755){if((e37755 instanceof Object)){
var ex__6480__auto__ = e37755;
var statearr_37756_37774 = state_37724;
(statearr_37756_37774[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37724);

return cljs.core.constant$keyword$87;
} else {
throw e37755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__37775 = state_37724;
state_37724 = G__37775;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_37724){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_37724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6543__auto__ = (function (){var statearr_37757 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_37757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___37758);

return statearr_37757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___37758,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___37885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___37885,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___37885,out){
return (function (state_37861){
var state_val_37862 = (state_37861[(1)]);
if((state_val_37862 === (7))){
var inst_37841 = (state_37861[(7)]);
var inst_37840 = (state_37861[(8)]);
var inst_37840__$1 = (state_37861[(2)]);
var inst_37841__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37840__$1,(0),null);
var inst_37842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37840__$1,(1),null);
var inst_37843 = (inst_37841__$1 == null);
var state_37861__$1 = (function (){var statearr_37863 = state_37861;
(statearr_37863[(7)] = inst_37841__$1);

(statearr_37863[(9)] = inst_37842);

(statearr_37863[(8)] = inst_37840__$1);

return statearr_37863;
})();
if(cljs.core.truth_(inst_37843)){
var statearr_37864_37886 = state_37861__$1;
(statearr_37864_37886[(1)] = (8));

} else {
var statearr_37865_37887 = state_37861__$1;
(statearr_37865_37887[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (1))){
var inst_37832 = cljs.core.vec(chs);
var inst_37833 = inst_37832;
var state_37861__$1 = (function (){var statearr_37866 = state_37861;
(statearr_37866[(10)] = inst_37833);

return statearr_37866;
})();
var statearr_37867_37888 = state_37861__$1;
(statearr_37867_37888[(2)] = null);

(statearr_37867_37888[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (4))){
var inst_37833 = (state_37861[(10)]);
var state_37861__$1 = state_37861;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37861__$1,(7),inst_37833);
} else {
if((state_val_37862 === (6))){
var inst_37857 = (state_37861[(2)]);
var state_37861__$1 = state_37861;
var statearr_37868_37889 = state_37861__$1;
(statearr_37868_37889[(2)] = inst_37857);

(statearr_37868_37889[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (3))){
var inst_37859 = (state_37861[(2)]);
var state_37861__$1 = state_37861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37861__$1,inst_37859);
} else {
if((state_val_37862 === (2))){
var inst_37833 = (state_37861[(10)]);
var inst_37835 = cljs.core.count(inst_37833);
var inst_37836 = (inst_37835 > (0));
var state_37861__$1 = state_37861;
if(cljs.core.truth_(inst_37836)){
var statearr_37870_37890 = state_37861__$1;
(statearr_37870_37890[(1)] = (4));

} else {
var statearr_37871_37891 = state_37861__$1;
(statearr_37871_37891[(1)] = (5));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (11))){
var inst_37833 = (state_37861[(10)]);
var inst_37850 = (state_37861[(2)]);
var tmp37869 = inst_37833;
var inst_37833__$1 = tmp37869;
var state_37861__$1 = (function (){var statearr_37872 = state_37861;
(statearr_37872[(10)] = inst_37833__$1);

(statearr_37872[(11)] = inst_37850);

return statearr_37872;
})();
var statearr_37873_37892 = state_37861__$1;
(statearr_37873_37892[(2)] = null);

(statearr_37873_37892[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (9))){
var inst_37841 = (state_37861[(7)]);
var state_37861__$1 = state_37861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37861__$1,(11),out,inst_37841);
} else {
if((state_val_37862 === (5))){
var inst_37855 = cljs.core.async.close_BANG_(out);
var state_37861__$1 = state_37861;
var statearr_37874_37893 = state_37861__$1;
(statearr_37874_37893[(2)] = inst_37855);

(statearr_37874_37893[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (10))){
var inst_37853 = (state_37861[(2)]);
var state_37861__$1 = state_37861;
var statearr_37875_37894 = state_37861__$1;
(statearr_37875_37894[(2)] = inst_37853);

(statearr_37875_37894[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37862 === (8))){
var inst_37841 = (state_37861[(7)]);
var inst_37833 = (state_37861[(10)]);
var inst_37842 = (state_37861[(9)]);
var inst_37840 = (state_37861[(8)]);
var inst_37845 = (function (){var c = inst_37842;
var v = inst_37841;
var vec__37838 = inst_37840;
var cs = inst_37833;
return ((function (c,v,vec__37838,cs,inst_37841,inst_37833,inst_37842,inst_37840,state_val_37862,c__6541__auto___37885,out){
return (function (p1__37776_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37776_SHARP_);
});
;})(c,v,vec__37838,cs,inst_37841,inst_37833,inst_37842,inst_37840,state_val_37862,c__6541__auto___37885,out))
})();
var inst_37846 = cljs.core.filterv(inst_37845,inst_37833);
var inst_37833__$1 = inst_37846;
var state_37861__$1 = (function (){var statearr_37876 = state_37861;
(statearr_37876[(10)] = inst_37833__$1);

return statearr_37876;
})();
var statearr_37877_37895 = state_37861__$1;
(statearr_37877_37895[(2)] = null);

(statearr_37877_37895[(1)] = (2));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___37885,out))
;
return ((function (switch__6476__auto__,c__6541__auto___37885,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_37881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37881[(0)] = state_machine__6477__auto__);

(statearr_37881[(1)] = (1));

return statearr_37881;
});
var state_machine__6477__auto____1 = (function (state_37861){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_37861);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e37882){if((e37882 instanceof Object)){
var ex__6480__auto__ = e37882;
var statearr_37883_37896 = state_37861;
(statearr_37883_37896[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37861);

return cljs.core.constant$keyword$87;
} else {
throw e37882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__37897 = state_37861;
state_37861 = G__37897;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_37861){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_37861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___37885,out))
})();
var state__6543__auto__ = (function (){var statearr_37884 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_37884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___37885);

return statearr_37884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___37885,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___37993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___37993,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___37993,out){
return (function (state_37970){
var state_val_37971 = (state_37970[(1)]);
if((state_val_37971 === (7))){
var inst_37952 = (state_37970[(7)]);
var inst_37952__$1 = (state_37970[(2)]);
var inst_37953 = (inst_37952__$1 == null);
var inst_37954 = cljs.core.not(inst_37953);
var state_37970__$1 = (function (){var statearr_37972 = state_37970;
(statearr_37972[(7)] = inst_37952__$1);

return statearr_37972;
})();
if(inst_37954){
var statearr_37973_37994 = state_37970__$1;
(statearr_37973_37994[(1)] = (8));

} else {
var statearr_37974_37995 = state_37970__$1;
(statearr_37974_37995[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (1))){
var inst_37947 = (0);
var state_37970__$1 = (function (){var statearr_37975 = state_37970;
(statearr_37975[(8)] = inst_37947);

return statearr_37975;
})();
var statearr_37976_37996 = state_37970__$1;
(statearr_37976_37996[(2)] = null);

(statearr_37976_37996[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (4))){
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37970__$1,(7),ch);
} else {
if((state_val_37971 === (6))){
var inst_37965 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37977_37997 = state_37970__$1;
(statearr_37977_37997[(2)] = inst_37965);

(statearr_37977_37997[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (3))){
var inst_37967 = (state_37970[(2)]);
var inst_37968 = cljs.core.async.close_BANG_(out);
var state_37970__$1 = (function (){var statearr_37978 = state_37970;
(statearr_37978[(9)] = inst_37967);

return statearr_37978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37970__$1,inst_37968);
} else {
if((state_val_37971 === (2))){
var inst_37947 = (state_37970[(8)]);
var inst_37949 = (inst_37947 < n);
var state_37970__$1 = state_37970;
if(cljs.core.truth_(inst_37949)){
var statearr_37979_37998 = state_37970__$1;
(statearr_37979_37998[(1)] = (4));

} else {
var statearr_37980_37999 = state_37970__$1;
(statearr_37980_37999[(1)] = (5));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (11))){
var inst_37947 = (state_37970[(8)]);
var inst_37957 = (state_37970[(2)]);
var inst_37958 = (inst_37947 + (1));
var inst_37947__$1 = inst_37958;
var state_37970__$1 = (function (){var statearr_37981 = state_37970;
(statearr_37981[(8)] = inst_37947__$1);

(statearr_37981[(10)] = inst_37957);

return statearr_37981;
})();
var statearr_37982_38000 = state_37970__$1;
(statearr_37982_38000[(2)] = null);

(statearr_37982_38000[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (9))){
var state_37970__$1 = state_37970;
var statearr_37983_38001 = state_37970__$1;
(statearr_37983_38001[(2)] = null);

(statearr_37983_38001[(1)] = (10));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (5))){
var state_37970__$1 = state_37970;
var statearr_37984_38002 = state_37970__$1;
(statearr_37984_38002[(2)] = null);

(statearr_37984_38002[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (10))){
var inst_37962 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37985_38003 = state_37970__$1;
(statearr_37985_38003[(2)] = inst_37962);

(statearr_37985_38003[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_37971 === (8))){
var inst_37952 = (state_37970[(7)]);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37970__$1,(11),out,inst_37952);
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
});})(c__6541__auto___37993,out))
;
return ((function (switch__6476__auto__,c__6541__auto___37993,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_37989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37989[(0)] = state_machine__6477__auto__);

(statearr_37989[(1)] = (1));

return statearr_37989;
});
var state_machine__6477__auto____1 = (function (state_37970){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_37970);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e37990){if((e37990 instanceof Object)){
var ex__6480__auto__ = e37990;
var statearr_37991_38004 = state_37970;
(statearr_37991_38004[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37970);

return cljs.core.constant$keyword$87;
} else {
throw e37990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38005 = state_37970;
state_37970 = G__38005;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_37970){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_37970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___37993,out))
})();
var state__6543__auto__ = (function (){var statearr_37992 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_37992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___37993);

return statearr_37992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___37993,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___38104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38104,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38104,out){
return (function (state_38079){
var state_val_38080 = (state_38079[(1)]);
if((state_val_38080 === (7))){
var inst_38074 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38081_38105 = state_38079__$1;
(statearr_38081_38105[(2)] = inst_38074);

(statearr_38081_38105[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (1))){
var inst_38056 = null;
var state_38079__$1 = (function (){var statearr_38082 = state_38079;
(statearr_38082[(7)] = inst_38056);

return statearr_38082;
})();
var statearr_38083_38106 = state_38079__$1;
(statearr_38083_38106[(2)] = null);

(statearr_38083_38106[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (4))){
var inst_38059 = (state_38079[(8)]);
var inst_38059__$1 = (state_38079[(2)]);
var inst_38060 = (inst_38059__$1 == null);
var inst_38061 = cljs.core.not(inst_38060);
var state_38079__$1 = (function (){var statearr_38084 = state_38079;
(statearr_38084[(8)] = inst_38059__$1);

return statearr_38084;
})();
if(inst_38061){
var statearr_38085_38107 = state_38079__$1;
(statearr_38085_38107[(1)] = (5));

} else {
var statearr_38086_38108 = state_38079__$1;
(statearr_38086_38108[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (6))){
var state_38079__$1 = state_38079;
var statearr_38087_38109 = state_38079__$1;
(statearr_38087_38109[(2)] = null);

(statearr_38087_38109[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (3))){
var inst_38076 = (state_38079[(2)]);
var inst_38077 = cljs.core.async.close_BANG_(out);
var state_38079__$1 = (function (){var statearr_38088 = state_38079;
(statearr_38088[(9)] = inst_38076);

return statearr_38088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38079__$1,inst_38077);
} else {
if((state_val_38080 === (2))){
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38079__$1,(4),ch);
} else {
if((state_val_38080 === (11))){
var inst_38059 = (state_38079[(8)]);
var inst_38068 = (state_38079[(2)]);
var inst_38056 = inst_38059;
var state_38079__$1 = (function (){var statearr_38089 = state_38079;
(statearr_38089[(10)] = inst_38068);

(statearr_38089[(7)] = inst_38056);

return statearr_38089;
})();
var statearr_38090_38110 = state_38079__$1;
(statearr_38090_38110[(2)] = null);

(statearr_38090_38110[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (9))){
var inst_38059 = (state_38079[(8)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38079__$1,(11),out,inst_38059);
} else {
if((state_val_38080 === (5))){
var inst_38059 = (state_38079[(8)]);
var inst_38056 = (state_38079[(7)]);
var inst_38063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38059,inst_38056);
var state_38079__$1 = state_38079;
if(inst_38063){
var statearr_38092_38111 = state_38079__$1;
(statearr_38092_38111[(1)] = (8));

} else {
var statearr_38093_38112 = state_38079__$1;
(statearr_38093_38112[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (10))){
var inst_38071 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38094_38113 = state_38079__$1;
(statearr_38094_38113[(2)] = inst_38071);

(statearr_38094_38113[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38080 === (8))){
var inst_38056 = (state_38079[(7)]);
var tmp38091 = inst_38056;
var inst_38056__$1 = tmp38091;
var state_38079__$1 = (function (){var statearr_38095 = state_38079;
(statearr_38095[(7)] = inst_38056__$1);

return statearr_38095;
})();
var statearr_38096_38114 = state_38079__$1;
(statearr_38096_38114[(2)] = null);

(statearr_38096_38114[(1)] = (2));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___38104,out))
;
return ((function (switch__6476__auto__,c__6541__auto___38104,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38100[(0)] = state_machine__6477__auto__);

(statearr_38100[(1)] = (1));

return statearr_38100;
});
var state_machine__6477__auto____1 = (function (state_38079){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38079);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38101){if((e38101 instanceof Object)){
var ex__6480__auto__ = e38101;
var statearr_38102_38115 = state_38079;
(statearr_38102_38115[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38079);

return cljs.core.constant$keyword$87;
} else {
throw e38101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38116 = state_38079;
state_38079 = G__38116;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38079){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38104,out))
})();
var state__6543__auto__ = (function (){var statearr_38103 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38104);

return statearr_38103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38104,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___38254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38254,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38254,out){
return (function (state_38224){
var state_val_38225 = (state_38224[(1)]);
if((state_val_38225 === (7))){
var inst_38220 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38226_38255 = state_38224__$1;
(statearr_38226_38255[(2)] = inst_38220);

(statearr_38226_38255[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (1))){
var inst_38187 = (new Array(n));
var inst_38188 = inst_38187;
var inst_38189 = (0);
var state_38224__$1 = (function (){var statearr_38227 = state_38224;
(statearr_38227[(7)] = inst_38188);

(statearr_38227[(8)] = inst_38189);

return statearr_38227;
})();
var statearr_38228_38256 = state_38224__$1;
(statearr_38228_38256[(2)] = null);

(statearr_38228_38256[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (4))){
var inst_38192 = (state_38224[(9)]);
var inst_38192__$1 = (state_38224[(2)]);
var inst_38193 = (inst_38192__$1 == null);
var inst_38194 = cljs.core.not(inst_38193);
var state_38224__$1 = (function (){var statearr_38229 = state_38224;
(statearr_38229[(9)] = inst_38192__$1);

return statearr_38229;
})();
if(inst_38194){
var statearr_38230_38257 = state_38224__$1;
(statearr_38230_38257[(1)] = (5));

} else {
var statearr_38231_38258 = state_38224__$1;
(statearr_38231_38258[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (15))){
var inst_38214 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38232_38259 = state_38224__$1;
(statearr_38232_38259[(2)] = inst_38214);

(statearr_38232_38259[(1)] = (14));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (13))){
var state_38224__$1 = state_38224;
var statearr_38233_38260 = state_38224__$1;
(statearr_38233_38260[(2)] = null);

(statearr_38233_38260[(1)] = (14));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (6))){
var inst_38189 = (state_38224[(8)]);
var inst_38210 = (inst_38189 > (0));
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38210)){
var statearr_38234_38261 = state_38224__$1;
(statearr_38234_38261[(1)] = (12));

} else {
var statearr_38235_38262 = state_38224__$1;
(statearr_38235_38262[(1)] = (13));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (3))){
var inst_38222 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38224__$1,inst_38222);
} else {
if((state_val_38225 === (12))){
var inst_38188 = (state_38224[(7)]);
var inst_38212 = cljs.core.vec(inst_38188);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38224__$1,(15),out,inst_38212);
} else {
if((state_val_38225 === (2))){
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38224__$1,(4),ch);
} else {
if((state_val_38225 === (11))){
var inst_38204 = (state_38224[(2)]);
var inst_38205 = (new Array(n));
var inst_38188 = inst_38205;
var inst_38189 = (0);
var state_38224__$1 = (function (){var statearr_38236 = state_38224;
(statearr_38236[(7)] = inst_38188);

(statearr_38236[(8)] = inst_38189);

(statearr_38236[(10)] = inst_38204);

return statearr_38236;
})();
var statearr_38237_38263 = state_38224__$1;
(statearr_38237_38263[(2)] = null);

(statearr_38237_38263[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (9))){
var inst_38188 = (state_38224[(7)]);
var inst_38202 = cljs.core.vec(inst_38188);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38224__$1,(11),out,inst_38202);
} else {
if((state_val_38225 === (5))){
var inst_38197 = (state_38224[(11)]);
var inst_38188 = (state_38224[(7)]);
var inst_38189 = (state_38224[(8)]);
var inst_38192 = (state_38224[(9)]);
var inst_38196 = (inst_38188[inst_38189] = inst_38192);
var inst_38197__$1 = (inst_38189 + (1));
var inst_38198 = (inst_38197__$1 < n);
var state_38224__$1 = (function (){var statearr_38238 = state_38224;
(statearr_38238[(11)] = inst_38197__$1);

(statearr_38238[(12)] = inst_38196);

return statearr_38238;
})();
if(cljs.core.truth_(inst_38198)){
var statearr_38239_38264 = state_38224__$1;
(statearr_38239_38264[(1)] = (8));

} else {
var statearr_38240_38265 = state_38224__$1;
(statearr_38240_38265[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (14))){
var inst_38217 = (state_38224[(2)]);
var inst_38218 = cljs.core.async.close_BANG_(out);
var state_38224__$1 = (function (){var statearr_38242 = state_38224;
(statearr_38242[(13)] = inst_38217);

return statearr_38242;
})();
var statearr_38243_38266 = state_38224__$1;
(statearr_38243_38266[(2)] = inst_38218);

(statearr_38243_38266[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (10))){
var inst_38208 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38244_38267 = state_38224__$1;
(statearr_38244_38267[(2)] = inst_38208);

(statearr_38244_38267[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38225 === (8))){
var inst_38197 = (state_38224[(11)]);
var inst_38188 = (state_38224[(7)]);
var tmp38241 = inst_38188;
var inst_38188__$1 = tmp38241;
var inst_38189 = inst_38197;
var state_38224__$1 = (function (){var statearr_38245 = state_38224;
(statearr_38245[(7)] = inst_38188__$1);

(statearr_38245[(8)] = inst_38189);

return statearr_38245;
})();
var statearr_38246_38268 = state_38224__$1;
(statearr_38246_38268[(2)] = null);

(statearr_38246_38268[(1)] = (2));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___38254,out))
;
return ((function (switch__6476__auto__,c__6541__auto___38254,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38250[(0)] = state_machine__6477__auto__);

(statearr_38250[(1)] = (1));

return statearr_38250;
});
var state_machine__6477__auto____1 = (function (state_38224){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38224);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38251){if((e38251 instanceof Object)){
var ex__6480__auto__ = e38251;
var statearr_38252_38269 = state_38224;
(statearr_38252_38269[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38224);

return cljs.core.constant$keyword$87;
} else {
throw e38251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38270 = state_38224;
state_38224 = G__38270;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38224){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38254,out))
})();
var state__6543__auto__ = (function (){var statearr_38253 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38254);

return statearr_38253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38254,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6541__auto___38418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38418,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38418,out){
return (function (state_38387){
var state_val_38388 = (state_38387[(1)]);
if((state_val_38388 === (7))){
var inst_38383 = (state_38387[(2)]);
var state_38387__$1 = state_38387;
var statearr_38389_38419 = state_38387__$1;
(statearr_38389_38419[(2)] = inst_38383);

(statearr_38389_38419[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (1))){
var inst_38346 = [];
var inst_38347 = inst_38346;
var inst_38348 = cljs.core.constant$keyword$100;
var state_38387__$1 = (function (){var statearr_38390 = state_38387;
(statearr_38390[(7)] = inst_38347);

(statearr_38390[(8)] = inst_38348);

return statearr_38390;
})();
var statearr_38391_38420 = state_38387__$1;
(statearr_38391_38420[(2)] = null);

(statearr_38391_38420[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (4))){
var inst_38351 = (state_38387[(9)]);
var inst_38351__$1 = (state_38387[(2)]);
var inst_38352 = (inst_38351__$1 == null);
var inst_38353 = cljs.core.not(inst_38352);
var state_38387__$1 = (function (){var statearr_38392 = state_38387;
(statearr_38392[(9)] = inst_38351__$1);

return statearr_38392;
})();
if(inst_38353){
var statearr_38393_38421 = state_38387__$1;
(statearr_38393_38421[(1)] = (5));

} else {
var statearr_38394_38422 = state_38387__$1;
(statearr_38394_38422[(1)] = (6));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (15))){
var inst_38377 = (state_38387[(2)]);
var state_38387__$1 = state_38387;
var statearr_38395_38423 = state_38387__$1;
(statearr_38395_38423[(2)] = inst_38377);

(statearr_38395_38423[(1)] = (14));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (13))){
var state_38387__$1 = state_38387;
var statearr_38396_38424 = state_38387__$1;
(statearr_38396_38424[(2)] = null);

(statearr_38396_38424[(1)] = (14));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (6))){
var inst_38347 = (state_38387[(7)]);
var inst_38372 = inst_38347.length;
var inst_38373 = (inst_38372 > (0));
var state_38387__$1 = state_38387;
if(cljs.core.truth_(inst_38373)){
var statearr_38397_38425 = state_38387__$1;
(statearr_38397_38425[(1)] = (12));

} else {
var statearr_38398_38426 = state_38387__$1;
(statearr_38398_38426[(1)] = (13));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (3))){
var inst_38385 = (state_38387[(2)]);
var state_38387__$1 = state_38387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38387__$1,inst_38385);
} else {
if((state_val_38388 === (12))){
var inst_38347 = (state_38387[(7)]);
var inst_38375 = cljs.core.vec(inst_38347);
var state_38387__$1 = state_38387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38387__$1,(15),out,inst_38375);
} else {
if((state_val_38388 === (2))){
var state_38387__$1 = state_38387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38387__$1,(4),ch);
} else {
if((state_val_38388 === (11))){
var inst_38355 = (state_38387[(10)]);
var inst_38351 = (state_38387[(9)]);
var inst_38365 = (state_38387[(2)]);
var inst_38366 = [];
var inst_38367 = inst_38366.push(inst_38351);
var inst_38347 = inst_38366;
var inst_38348 = inst_38355;
var state_38387__$1 = (function (){var statearr_38399 = state_38387;
(statearr_38399[(7)] = inst_38347);

(statearr_38399[(8)] = inst_38348);

(statearr_38399[(11)] = inst_38365);

(statearr_38399[(12)] = inst_38367);

return statearr_38399;
})();
var statearr_38400_38427 = state_38387__$1;
(statearr_38400_38427[(2)] = null);

(statearr_38400_38427[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (9))){
var inst_38347 = (state_38387[(7)]);
var inst_38363 = cljs.core.vec(inst_38347);
var state_38387__$1 = state_38387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38387__$1,(11),out,inst_38363);
} else {
if((state_val_38388 === (5))){
var inst_38348 = (state_38387[(8)]);
var inst_38355 = (state_38387[(10)]);
var inst_38351 = (state_38387[(9)]);
var inst_38355__$1 = (function (){var G__38401 = inst_38351;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38401) : f.call(null,G__38401));
})();
var inst_38356 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38355__$1,inst_38348);
var inst_38357 = cljs.core.keyword_identical_QMARK_(inst_38348,cljs.core.constant$keyword$100);
var inst_38358 = (inst_38356) || (inst_38357);
var state_38387__$1 = (function (){var statearr_38402 = state_38387;
(statearr_38402[(10)] = inst_38355__$1);

return statearr_38402;
})();
if(cljs.core.truth_(inst_38358)){
var statearr_38403_38428 = state_38387__$1;
(statearr_38403_38428[(1)] = (8));

} else {
var statearr_38404_38429 = state_38387__$1;
(statearr_38404_38429[(1)] = (9));

}

return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (14))){
var inst_38380 = (state_38387[(2)]);
var inst_38381 = cljs.core.async.close_BANG_(out);
var state_38387__$1 = (function (){var statearr_38406 = state_38387;
(statearr_38406[(13)] = inst_38380);

return statearr_38406;
})();
var statearr_38407_38430 = state_38387__$1;
(statearr_38407_38430[(2)] = inst_38381);

(statearr_38407_38430[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (10))){
var inst_38370 = (state_38387[(2)]);
var state_38387__$1 = state_38387;
var statearr_38408_38431 = state_38387__$1;
(statearr_38408_38431[(2)] = inst_38370);

(statearr_38408_38431[(1)] = (7));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38388 === (8))){
var inst_38347 = (state_38387[(7)]);
var inst_38355 = (state_38387[(10)]);
var inst_38351 = (state_38387[(9)]);
var inst_38360 = inst_38347.push(inst_38351);
var tmp38405 = inst_38347;
var inst_38347__$1 = tmp38405;
var inst_38348 = inst_38355;
var state_38387__$1 = (function (){var statearr_38409 = state_38387;
(statearr_38409[(7)] = inst_38347__$1);

(statearr_38409[(8)] = inst_38348);

(statearr_38409[(14)] = inst_38360);

return statearr_38409;
})();
var statearr_38410_38432 = state_38387__$1;
(statearr_38410_38432[(2)] = null);

(statearr_38410_38432[(1)] = (2));


return cljs.core.constant$keyword$87;
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
});})(c__6541__auto___38418,out))
;
return ((function (switch__6476__auto__,c__6541__auto___38418,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38414[(0)] = state_machine__6477__auto__);

(statearr_38414[(1)] = (1));

return statearr_38414;
});
var state_machine__6477__auto____1 = (function (state_38387){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38387);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38415){if((e38415 instanceof Object)){
var ex__6480__auto__ = e38415;
var statearr_38416_38433 = state_38387;
(statearr_38416_38433[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38387);

return cljs.core.constant$keyword$87;
} else {
throw e38415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38434 = state_38387;
state_38387 = G__38434;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38387){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38418,out))
})();
var state__6543__auto__ = (function (){var statearr_38417 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38418);

return statearr_38417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38418,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
