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
if(typeof cljs.core.async.t16712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16712 = (function (f,fn_handler,meta16713){
this.f = f;
this.fn_handler = fn_handler;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){
var self__ = this;
var _16714__$1 = this;
return self__.meta16713;
});

cljs.core.async.t16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){
var self__ = this;
var _16714__$1 = this;
return (new cljs.core.async.t16712(self__.f,self__.fn_handler,meta16713__$1));
});

cljs.core.async.t16712.cljs$lang$type = true;

cljs.core.async.t16712.cljs$lang$ctorStr = "cljs.core.async/t16712";

cljs.core.async.t16712.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16712");
});

cljs.core.async.__GT_t16712 = (function __GT_t16712(f__$1,fn_handler__$1,meta16713){
return (new cljs.core.async.t16712(f__$1,fn_handler__$1,meta16713));
});

}

return (new cljs.core.async.t16712(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__16716 = buff;
if(G__16716){
var bit__4492__auto__ = null;
if(cljs.core.truth_((function (){var or__3811__auto__ = bit__4492__auto__;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return G__16716.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16716.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16716);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16716);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

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
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16717 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16717);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16717,ret){
return (function (){
return fn1.call(null,val_16717);
});})(val_16717,ret))
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

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
return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){
return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__3799__auto__ = ret;
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__3799__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4698__auto___16718 = n;
var x_16719 = (0);
while(true){
if((x_16719 < n__4698__auto___16718)){
(a[x_16719] = (0));

var G__16720 = (x_16719 + (1));
x_16719 = G__16720;
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

var G__16721 = (i + (1));
i = G__16721;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16725 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16725 = (function (flag,alt_flag,meta16726){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16726 = meta16726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16727){
var self__ = this;
var _16727__$1 = this;
return self__.meta16726;
});})(flag))
;

cljs.core.async.t16725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16727,meta16726__$1){
var self__ = this;
var _16727__$1 = this;
return (new cljs.core.async.t16725(self__.flag,self__.alt_flag,meta16726__$1));
});})(flag))
;

cljs.core.async.t16725.cljs$lang$type = true;

cljs.core.async.t16725.cljs$lang$ctorStr = "cljs.core.async/t16725";

cljs.core.async.t16725.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16725");
});})(flag))
;

cljs.core.async.__GT_t16725 = ((function (flag){
return (function __GT_t16725(flag__$1,alt_flag__$1,meta16726){
return (new cljs.core.async.t16725(flag__$1,alt_flag__$1,meta16726));
});})(flag))
;

}

return (new cljs.core.async.t16725(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),128,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),123,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16731 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16731 = (function (cb,flag,alt_handler,meta16732){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16732 = meta16732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16733){
var self__ = this;
var _16733__$1 = this;
return self__.meta16732;
});

cljs.core.async.t16731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16733,meta16732__$1){
var self__ = this;
var _16733__$1 = this;
return (new cljs.core.async.t16731(self__.cb,self__.flag,self__.alt_handler,meta16732__$1));
});

cljs.core.async.t16731.cljs$lang$type = true;

cljs.core.async.t16731.cljs$lang$ctorStr = "cljs.core.async/t16731";

cljs.core.async.t16731.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16731");
});

cljs.core.async.__GT_t16731 = (function __GT_t16731(cb__$1,flag__$1,alt_handler__$1,meta16732){
return (new cljs.core.async.t16731(cb__$1,flag__$1,alt_handler__$1,meta16732));
});

}

return (new cljs.core.async.t16731(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),136,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16734_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16734_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3811__auto__ = wport;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16735 = (i + (1));
i = G__16735;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3799__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3799__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
var alts_BANG___delegate = function (ports,p__16736){
var map__16738 = p__16736;
var map__16738__$1 = ((cljs.core.seq_QMARK_.call(null,map__16738))?cljs.core.apply.call(null,cljs.core.hash_map,map__16738):map__16738);
var opts = map__16738__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__16736 = null;
if (arguments.length > 1) {
var G__16739__i = 0, G__16739__a = new Array(arguments.length -  1);
while (G__16739__i < G__16739__a.length) {G__16739__a[G__16739__i] = arguments[G__16739__i + 1]; ++G__16739__i;}
  p__16736 = new cljs.core.IndexedSeq(G__16739__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16736);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16740){
var ports = cljs.core.first(arglist__16740);
var p__16736 = cljs.core.rest(arglist__16740);
return alts_BANG___delegate(ports,p__16736);
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
if(typeof cljs.core.async.t16748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16748 = (function (ch,f,map_LT_,meta16749){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16749 = meta16749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16751 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16751 = (function (fn1,_,meta16749,map_LT_,f,ch,meta16752){
this.fn1 = fn1;
this._ = _;
this.meta16749 = meta16749;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16752 = meta16752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16751.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16751.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16741_SHARP_){
return f1.call(null,(((p1__16741_SHARP_ == null))?null:self__.f.call(null,p1__16741_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16753){
var self__ = this;
var _16753__$1 = this;
return self__.meta16752;
});})(___$1))
;

cljs.core.async.t16751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16753,meta16752__$1){
var self__ = this;
var _16753__$1 = this;
return (new cljs.core.async.t16751(self__.fn1,self__._,self__.meta16749,self__.map_LT_,self__.f,self__.ch,meta16752__$1));
});})(___$1))
;

cljs.core.async.t16751.cljs$lang$type = true;

cljs.core.async.t16751.cljs$lang$ctorStr = "cljs.core.async/t16751";

cljs.core.async.t16751.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16751");
});})(___$1))
;

cljs.core.async.__GT_t16751 = ((function (___$1){
return (function __GT_t16751(fn1__$1,___$2,meta16749__$1,map_LT___$1,f__$1,ch__$1,meta16752){
return (new cljs.core.async.t16751(fn1__$1,___$2,meta16749__$1,map_LT___$1,f__$1,ch__$1,meta16752));
});})(___$1))
;

}

return (new cljs.core.async.t16751(fn1,___$1,self__.meta16749,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),211,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3799__auto__ = ret;
if(cljs.core.truth_(and__3799__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3799__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16750){
var self__ = this;
var _16750__$1 = this;
return self__.meta16749;
});

cljs.core.async.t16748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16750,meta16749__$1){
var self__ = this;
var _16750__$1 = this;
return (new cljs.core.async.t16748(self__.ch,self__.f,self__.map_LT_,meta16749__$1));
});

cljs.core.async.t16748.cljs$lang$type = true;

cljs.core.async.t16748.cljs$lang$ctorStr = "cljs.core.async/t16748";

cljs.core.async.t16748.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16748");
});

cljs.core.async.__GT_t16748 = (function __GT_t16748(ch__$1,f__$1,map_LT___$1,meta16749){
return (new cljs.core.async.t16748(ch__$1,f__$1,map_LT___$1,meta16749));
});

}

return (new cljs.core.async.t16748(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),217,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),197,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16757 = (function (ch,f,map_GT_,meta16758){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16758 = meta16758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16759){
var self__ = this;
var _16759__$1 = this;
return self__.meta16758;
});

cljs.core.async.t16757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16759,meta16758__$1){
var self__ = this;
var _16759__$1 = this;
return (new cljs.core.async.t16757(self__.ch,self__.f,self__.map_GT_,meta16758__$1));
});

cljs.core.async.t16757.cljs$lang$type = true;

cljs.core.async.t16757.cljs$lang$ctorStr = "cljs.core.async/t16757";

cljs.core.async.t16757.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16757");
});

cljs.core.async.__GT_t16757 = (function __GT_t16757(ch__$1,f__$1,map_GT___$1,meta16758){
return (new cljs.core.async.t16757(ch__$1,f__$1,map_GT___$1,meta16758));
});

}

return (new cljs.core.async.t16757(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),232,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),223,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16763 = (function (ch,p,filter_GT_,meta16764){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16764 = meta16764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16765){
var self__ = this;
var _16765__$1 = this;
return self__.meta16764;
});

cljs.core.async.t16763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16765,meta16764__$1){
var self__ = this;
var _16765__$1 = this;
return (new cljs.core.async.t16763(self__.ch,self__.p,self__.filter_GT_,meta16764__$1));
});

cljs.core.async.t16763.cljs$lang$type = true;

cljs.core.async.t16763.cljs$lang$ctorStr = "cljs.core.async/t16763";

cljs.core.async.t16763.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t16763");
});

cljs.core.async.__GT_t16763 = (function __GT_t16763(ch__$1,p__$1,filter_GT___$1,meta16764){
return (new cljs.core.async.t16763(ch__$1,p__$1,filter_GT___$1,meta16764));
});

}

return (new cljs.core.async.t16763(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),28,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),241,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___16848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___16848,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___16848,out){
return (function (state_16827){
var state_val_16828 = (state_16827[(1)]);
if((state_val_16828 === (7))){
var inst_16823 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16829_16849 = state_16827__$1;
(statearr_16829_16849[(2)] = inst_16823);

(statearr_16829_16849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (1))){
var state_16827__$1 = state_16827;
var statearr_16830_16850 = state_16827__$1;
(statearr_16830_16850[(2)] = null);

(statearr_16830_16850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (4))){
var inst_16809 = (state_16827[(7)]);
var inst_16809__$1 = (state_16827[(2)]);
var inst_16810 = (inst_16809__$1 == null);
var state_16827__$1 = (function (){var statearr_16831 = state_16827;
(statearr_16831[(7)] = inst_16809__$1);

return statearr_16831;
})();
if(cljs.core.truth_(inst_16810)){
var statearr_16832_16851 = state_16827__$1;
(statearr_16832_16851[(1)] = (5));

} else {
var statearr_16833_16852 = state_16827__$1;
(statearr_16833_16852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (6))){
var inst_16809 = (state_16827[(7)]);
var inst_16814 = p.call(null,inst_16809);
var state_16827__$1 = state_16827;
if(cljs.core.truth_(inst_16814)){
var statearr_16834_16853 = state_16827__$1;
(statearr_16834_16853[(1)] = (8));

} else {
var statearr_16835_16854 = state_16827__$1;
(statearr_16835_16854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (3))){
var inst_16825 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16827__$1,inst_16825);
} else {
if((state_val_16828 === (2))){
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16827__$1,(4),ch);
} else {
if((state_val_16828 === (11))){
var inst_16817 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16836_16855 = state_16827__$1;
(statearr_16836_16855[(2)] = inst_16817);

(statearr_16836_16855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (9))){
var state_16827__$1 = state_16827;
var statearr_16837_16856 = state_16827__$1;
(statearr_16837_16856[(2)] = null);

(statearr_16837_16856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (5))){
var inst_16812 = cljs.core.async.close_BANG_.call(null,out);
var state_16827__$1 = state_16827;
var statearr_16838_16857 = state_16827__$1;
(statearr_16838_16857[(2)] = inst_16812);

(statearr_16838_16857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (10))){
var inst_16820 = (state_16827[(2)]);
var state_16827__$1 = (function (){var statearr_16839 = state_16827;
(statearr_16839[(8)] = inst_16820);

return statearr_16839;
})();
var statearr_16840_16858 = state_16827__$1;
(statearr_16840_16858[(2)] = null);

(statearr_16840_16858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (8))){
var inst_16809 = (state_16827[(7)]);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16827__$1,(11),out,inst_16809);
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
});})(c__6541__auto___16848,out))
;
return ((function (switch__6476__auto__,c__6541__auto___16848,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_16844 = [null,null,null,null,null,null,null,null,null];
(statearr_16844[(0)] = state_machine__6477__auto__);

(statearr_16844[(1)] = (1));

return statearr_16844;
});
var state_machine__6477__auto____1 = (function (state_16827){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_16827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e16845){if((e16845 instanceof Object)){
var ex__6480__auto__ = e16845;
var statearr_16846_16859 = state_16827;
(statearr_16846_16859[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16860 = state_16827;
state_16827 = G__16860;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_16827){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_16827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___16848,out))
})();
var state__6543__auto__ = (function (){var statearr_16847 = f__6542__auto__.call(null);
(statearr_16847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___16848);

return statearr_16847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___16848,out))
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
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
var c__6541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_17012){
var state_val_17013 = (state_17012[(1)]);
if((state_val_17013 === (7))){
var inst_17008 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17014_17051 = state_17012__$1;
(statearr_17014_17051[(2)] = inst_17008);

(statearr_17014_17051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (20))){
var inst_16983 = (state_17012[(7)]);
var inst_16994 = (state_17012[(2)]);
var inst_16995 = cljs.core.next.call(null,inst_16983);
var inst_16969 = inst_16995;
var inst_16970 = null;
var inst_16971 = (0);
var inst_16972 = (0);
var state_17012__$1 = (function (){var statearr_17015 = state_17012;
(statearr_17015[(8)] = inst_16969);

(statearr_17015[(9)] = inst_16970);

(statearr_17015[(10)] = inst_16971);

(statearr_17015[(11)] = inst_16994);

(statearr_17015[(12)] = inst_16972);

return statearr_17015;
})();
var statearr_17016_17052 = state_17012__$1;
(statearr_17016_17052[(2)] = null);

(statearr_17016_17052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (1))){
var state_17012__$1 = state_17012;
var statearr_17017_17053 = state_17012__$1;
(statearr_17017_17053[(2)] = null);

(statearr_17017_17053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (4))){
var inst_16958 = (state_17012[(13)]);
var inst_16958__$1 = (state_17012[(2)]);
var inst_16959 = (inst_16958__$1 == null);
var state_17012__$1 = (function (){var statearr_17021 = state_17012;
(statearr_17021[(13)] = inst_16958__$1);

return statearr_17021;
})();
if(cljs.core.truth_(inst_16959)){
var statearr_17022_17054 = state_17012__$1;
(statearr_17022_17054[(1)] = (5));

} else {
var statearr_17023_17055 = state_17012__$1;
(statearr_17023_17055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (15))){
var state_17012__$1 = state_17012;
var statearr_17024_17056 = state_17012__$1;
(statearr_17024_17056[(2)] = null);

(statearr_17024_17056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (13))){
var inst_16969 = (state_17012[(8)]);
var inst_16970 = (state_17012[(9)]);
var inst_16971 = (state_17012[(10)]);
var inst_16972 = (state_17012[(12)]);
var inst_16979 = (state_17012[(2)]);
var inst_16980 = (inst_16972 + (1));
var tmp17018 = inst_16969;
var tmp17019 = inst_16970;
var tmp17020 = inst_16971;
var inst_16969__$1 = tmp17018;
var inst_16970__$1 = tmp17019;
var inst_16971__$1 = tmp17020;
var inst_16972__$1 = inst_16980;
var state_17012__$1 = (function (){var statearr_17025 = state_17012;
(statearr_17025[(8)] = inst_16969__$1);

(statearr_17025[(9)] = inst_16970__$1);

(statearr_17025[(10)] = inst_16971__$1);

(statearr_17025[(12)] = inst_16972__$1);

(statearr_17025[(14)] = inst_16979);

return statearr_17025;
})();
var statearr_17026_17057 = state_17012__$1;
(statearr_17026_17057[(2)] = null);

(statearr_17026_17057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (6))){
var inst_16958 = (state_17012[(13)]);
var inst_16963 = f.call(null,inst_16958);
var inst_16968 = cljs.core.seq.call(null,inst_16963);
var inst_16969 = inst_16968;
var inst_16970 = null;
var inst_16971 = (0);
var inst_16972 = (0);
var state_17012__$1 = (function (){var statearr_17027 = state_17012;
(statearr_17027[(8)] = inst_16969);

(statearr_17027[(9)] = inst_16970);

(statearr_17027[(10)] = inst_16971);

(statearr_17027[(12)] = inst_16972);

return statearr_17027;
})();
var statearr_17028_17058 = state_17012__$1;
(statearr_17028_17058[(2)] = null);

(statearr_17028_17058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (17))){
var inst_16983 = (state_17012[(7)]);
var inst_16987 = cljs.core.chunk_first.call(null,inst_16983);
var inst_16988 = cljs.core.chunk_rest.call(null,inst_16983);
var inst_16989 = cljs.core.count.call(null,inst_16987);
var inst_16969 = inst_16988;
var inst_16970 = inst_16987;
var inst_16971 = inst_16989;
var inst_16972 = (0);
var state_17012__$1 = (function (){var statearr_17029 = state_17012;
(statearr_17029[(8)] = inst_16969);

(statearr_17029[(9)] = inst_16970);

(statearr_17029[(10)] = inst_16971);

(statearr_17029[(12)] = inst_16972);

return statearr_17029;
})();
var statearr_17030_17059 = state_17012__$1;
(statearr_17030_17059[(2)] = null);

(statearr_17030_17059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (3))){
var inst_17010 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else {
if((state_val_17013 === (12))){
var inst_17003 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17031_17060 = state_17012__$1;
(statearr_17031_17060[(2)] = inst_17003);

(statearr_17031_17060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (2))){
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17012__$1,(4),in$);
} else {
if((state_val_17013 === (19))){
var inst_16998 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17032_17061 = state_17012__$1;
(statearr_17032_17061[(2)] = inst_16998);

(statearr_17032_17061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (11))){
var inst_16969 = (state_17012[(8)]);
var inst_16983 = (state_17012[(7)]);
var inst_16983__$1 = cljs.core.seq.call(null,inst_16969);
var state_17012__$1 = (function (){var statearr_17033 = state_17012;
(statearr_17033[(7)] = inst_16983__$1);

return statearr_17033;
})();
if(inst_16983__$1){
var statearr_17034_17062 = state_17012__$1;
(statearr_17034_17062[(1)] = (14));

} else {
var statearr_17035_17063 = state_17012__$1;
(statearr_17035_17063[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (9))){
var inst_17005 = (state_17012[(2)]);
var state_17012__$1 = (function (){var statearr_17036 = state_17012;
(statearr_17036[(15)] = inst_17005);

return statearr_17036;
})();
var statearr_17037_17064 = state_17012__$1;
(statearr_17037_17064[(2)] = null);

(statearr_17037_17064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (5))){
var inst_16961 = cljs.core.async.close_BANG_.call(null,out);
var state_17012__$1 = state_17012;
var statearr_17038_17065 = state_17012__$1;
(statearr_17038_17065[(2)] = inst_16961);

(statearr_17038_17065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (14))){
var inst_16983 = (state_17012[(7)]);
var inst_16985 = cljs.core.chunked_seq_QMARK_.call(null,inst_16983);
var state_17012__$1 = state_17012;
if(inst_16985){
var statearr_17039_17066 = state_17012__$1;
(statearr_17039_17066[(1)] = (17));

} else {
var statearr_17040_17067 = state_17012__$1;
(statearr_17040_17067[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (16))){
var inst_17001 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17041_17068 = state_17012__$1;
(statearr_17041_17068[(2)] = inst_17001);

(statearr_17041_17068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (10))){
var inst_16970 = (state_17012[(9)]);
var inst_16972 = (state_17012[(12)]);
var inst_16977 = cljs.core._nth.call(null,inst_16970,inst_16972);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(13),out,inst_16977);
} else {
if((state_val_17013 === (18))){
var inst_16983 = (state_17012[(7)]);
var inst_16992 = cljs.core.first.call(null,inst_16983);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(20),out,inst_16992);
} else {
if((state_val_17013 === (8))){
var inst_16971 = (state_17012[(10)]);
var inst_16972 = (state_17012[(12)]);
var inst_16974 = (inst_16972 < inst_16971);
var inst_16975 = inst_16974;
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16975)){
var statearr_17042_17069 = state_17012__$1;
(statearr_17042_17069[(1)] = (10));

} else {
var statearr_17043_17070 = state_17012__$1;
(statearr_17043_17070[(1)] = (11));

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
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17047[(0)] = state_machine__6477__auto__);

(statearr_17047[(1)] = (1));

return statearr_17047;
});
var state_machine__6477__auto____1 = (function (state_17012){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17048){if((e17048 instanceof Object)){
var ex__6480__auto__ = e17048;
var statearr_17049_17071 = state_17012;
(statearr_17049_17071[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17072 = state_17012;
state_17012 = G__17072;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_17050 = f__6542__auto__.call(null);
(statearr_17050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_17050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
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
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6541__auto___17153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___17153){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___17153){
return (function (state_17132){
var state_val_17133 = (state_17132[(1)]);
if((state_val_17133 === (7))){
var inst_17128 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17134_17154 = state_17132__$1;
(statearr_17134_17154[(2)] = inst_17128);

(statearr_17134_17154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (1))){
var state_17132__$1 = state_17132;
var statearr_17135_17155 = state_17132__$1;
(statearr_17135_17155[(2)] = null);

(statearr_17135_17155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (4))){
var inst_17115 = (state_17132[(7)]);
var inst_17115__$1 = (state_17132[(2)]);
var inst_17116 = (inst_17115__$1 == null);
var state_17132__$1 = (function (){var statearr_17136 = state_17132;
(statearr_17136[(7)] = inst_17115__$1);

return statearr_17136;
})();
if(cljs.core.truth_(inst_17116)){
var statearr_17137_17156 = state_17132__$1;
(statearr_17137_17156[(1)] = (5));

} else {
var statearr_17138_17157 = state_17132__$1;
(statearr_17138_17157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (6))){
var inst_17115 = (state_17132[(7)]);
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17132__$1,(11),to,inst_17115);
} else {
if((state_val_17133 === (3))){
var inst_17130 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17132__$1,inst_17130);
} else {
if((state_val_17133 === (2))){
var state_17132__$1 = state_17132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17132__$1,(4),from);
} else {
if((state_val_17133 === (11))){
var inst_17125 = (state_17132[(2)]);
var state_17132__$1 = (function (){var statearr_17139 = state_17132;
(statearr_17139[(8)] = inst_17125);

return statearr_17139;
})();
var statearr_17140_17158 = state_17132__$1;
(statearr_17140_17158[(2)] = null);

(statearr_17140_17158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (9))){
var state_17132__$1 = state_17132;
var statearr_17141_17159 = state_17132__$1;
(statearr_17141_17159[(2)] = null);

(statearr_17141_17159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (5))){
var state_17132__$1 = state_17132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17142_17160 = state_17132__$1;
(statearr_17142_17160[(1)] = (8));

} else {
var statearr_17143_17161 = state_17132__$1;
(statearr_17143_17161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (10))){
var inst_17122 = (state_17132[(2)]);
var state_17132__$1 = state_17132;
var statearr_17144_17162 = state_17132__$1;
(statearr_17144_17162[(2)] = inst_17122);

(statearr_17144_17162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17133 === (8))){
var inst_17119 = cljs.core.async.close_BANG_.call(null,to);
var state_17132__$1 = state_17132;
var statearr_17145_17163 = state_17132__$1;
(statearr_17145_17163[(2)] = inst_17119);

(statearr_17145_17163[(1)] = (10));


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
});})(c__6541__auto___17153))
;
return ((function (switch__6476__auto__,c__6541__auto___17153){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17149 = [null,null,null,null,null,null,null,null,null];
(statearr_17149[(0)] = state_machine__6477__auto__);

(statearr_17149[(1)] = (1));

return statearr_17149;
});
var state_machine__6477__auto____1 = (function (state_17132){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17150){if((e17150 instanceof Object)){
var ex__6480__auto__ = e17150;
var statearr_17151_17164 = state_17132;
(statearr_17151_17164[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17165 = state_17132;
state_17132 = G__17165;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17132){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___17153))
})();
var state__6543__auto__ = (function (){var statearr_17152 = f__6542__auto__.call(null);
(statearr_17152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___17153);

return statearr_17152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___17153))
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
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6541__auto___17252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___17252,tc,fc){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___17252,tc,fc){
return (function (state_17230){
var state_val_17231 = (state_17230[(1)]);
if((state_val_17231 === (7))){
var inst_17226 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17232_17253 = state_17230__$1;
(statearr_17232_17253[(2)] = inst_17226);

(statearr_17232_17253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (1))){
var state_17230__$1 = state_17230;
var statearr_17233_17254 = state_17230__$1;
(statearr_17233_17254[(2)] = null);

(statearr_17233_17254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (4))){
var inst_17211 = (state_17230[(7)]);
var inst_17211__$1 = (state_17230[(2)]);
var inst_17212 = (inst_17211__$1 == null);
var state_17230__$1 = (function (){var statearr_17234 = state_17230;
(statearr_17234[(7)] = inst_17211__$1);

return statearr_17234;
})();
if(cljs.core.truth_(inst_17212)){
var statearr_17235_17255 = state_17230__$1;
(statearr_17235_17255[(1)] = (5));

} else {
var statearr_17236_17256 = state_17230__$1;
(statearr_17236_17256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (6))){
var inst_17211 = (state_17230[(7)]);
var inst_17217 = p.call(null,inst_17211);
var state_17230__$1 = state_17230;
if(cljs.core.truth_(inst_17217)){
var statearr_17237_17257 = state_17230__$1;
(statearr_17237_17257[(1)] = (9));

} else {
var statearr_17238_17258 = state_17230__$1;
(statearr_17238_17258[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (3))){
var inst_17228 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17230__$1,inst_17228);
} else {
if((state_val_17231 === (2))){
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17230__$1,(4),ch);
} else {
if((state_val_17231 === (11))){
var inst_17211 = (state_17230[(7)]);
var inst_17221 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17230__$1,(8),inst_17221,inst_17211);
} else {
if((state_val_17231 === (9))){
var state_17230__$1 = state_17230;
var statearr_17239_17259 = state_17230__$1;
(statearr_17239_17259[(2)] = tc);

(statearr_17239_17259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (5))){
var inst_17214 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17215 = cljs.core.async.close_BANG_.call(null,fc);
var state_17230__$1 = (function (){var statearr_17240 = state_17230;
(statearr_17240[(8)] = inst_17214);

return statearr_17240;
})();
var statearr_17241_17260 = state_17230__$1;
(statearr_17241_17260[(2)] = inst_17215);

(statearr_17241_17260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (10))){
var state_17230__$1 = state_17230;
var statearr_17242_17261 = state_17230__$1;
(statearr_17242_17261[(2)] = fc);

(statearr_17242_17261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (8))){
var inst_17223 = (state_17230[(2)]);
var state_17230__$1 = (function (){var statearr_17243 = state_17230;
(statearr_17243[(9)] = inst_17223);

return statearr_17243;
})();
var statearr_17244_17262 = state_17230__$1;
(statearr_17244_17262[(2)] = null);

(statearr_17244_17262[(1)] = (2));


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
});})(c__6541__auto___17252,tc,fc))
;
return ((function (switch__6476__auto__,c__6541__auto___17252,tc,fc){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17248 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17248[(0)] = state_machine__6477__auto__);

(statearr_17248[(1)] = (1));

return statearr_17248;
});
var state_machine__6477__auto____1 = (function (state_17230){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17249){if((e17249 instanceof Object)){
var ex__6480__auto__ = e17249;
var statearr_17250_17263 = state_17230;
(statearr_17250_17263[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17264 = state_17230;
state_17230 = G__17264;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17230){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___17252,tc,fc))
})();
var state__6543__auto__ = (function (){var statearr_17251 = f__6542__auto__.call(null);
(statearr_17251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___17252);

return statearr_17251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___17252,tc,fc))
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
var c__6541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_17311){
var state_val_17312 = (state_17311[(1)]);
if((state_val_17312 === (7))){
var inst_17307 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17313_17329 = state_17311__$1;
(statearr_17313_17329[(2)] = inst_17307);

(statearr_17313_17329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (6))){
var inst_17300 = (state_17311[(7)]);
var inst_17297 = (state_17311[(8)]);
var inst_17304 = f.call(null,inst_17297,inst_17300);
var inst_17297__$1 = inst_17304;
var state_17311__$1 = (function (){var statearr_17314 = state_17311;
(statearr_17314[(8)] = inst_17297__$1);

return statearr_17314;
})();
var statearr_17315_17330 = state_17311__$1;
(statearr_17315_17330[(2)] = null);

(statearr_17315_17330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (5))){
var inst_17297 = (state_17311[(8)]);
var state_17311__$1 = state_17311;
var statearr_17316_17331 = state_17311__$1;
(statearr_17316_17331[(2)] = inst_17297);

(statearr_17316_17331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (4))){
var inst_17300 = (state_17311[(7)]);
var inst_17300__$1 = (state_17311[(2)]);
var inst_17301 = (inst_17300__$1 == null);
var state_17311__$1 = (function (){var statearr_17317 = state_17311;
(statearr_17317[(7)] = inst_17300__$1);

return statearr_17317;
})();
if(cljs.core.truth_(inst_17301)){
var statearr_17318_17332 = state_17311__$1;
(statearr_17318_17332[(1)] = (5));

} else {
var statearr_17319_17333 = state_17311__$1;
(statearr_17319_17333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (3))){
var inst_17309 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17311__$1,inst_17309);
} else {
if((state_val_17312 === (2))){
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17311__$1,(4),ch);
} else {
if((state_val_17312 === (1))){
var inst_17297 = init;
var state_17311__$1 = (function (){var statearr_17320 = state_17311;
(statearr_17320[(8)] = inst_17297);

return statearr_17320;
})();
var statearr_17321_17334 = state_17311__$1;
(statearr_17321_17334[(2)] = null);

(statearr_17321_17334[(1)] = (2));


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
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17325 = [null,null,null,null,null,null,null,null,null];
(statearr_17325[(0)] = state_machine__6477__auto__);

(statearr_17325[(1)] = (1));

return statearr_17325;
});
var state_machine__6477__auto____1 = (function (state_17311){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17326){if((e17326 instanceof Object)){
var ex__6480__auto__ = e17326;
var statearr_17327_17335 = state_17311;
(statearr_17327_17335[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17336 = state_17311;
state_17311 = G__17336;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17311){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_17328 = f__6542__auto__.call(null);
(statearr_17328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_17328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
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
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto__){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto__){
return (function (state_17398){
var state_val_17399 = (state_17398[(1)]);
if((state_val_17399 === (7))){
var inst_17379 = (state_17398[(7)]);
var inst_17384 = (state_17398[(2)]);
var inst_17385 = cljs.core.next.call(null,inst_17379);
var inst_17379__$1 = inst_17385;
var state_17398__$1 = (function (){var statearr_17400 = state_17398;
(statearr_17400[(8)] = inst_17384);

(statearr_17400[(7)] = inst_17379__$1);

return statearr_17400;
})();
var statearr_17401_17419 = state_17398__$1;
(statearr_17401_17419[(2)] = null);

(statearr_17401_17419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (1))){
var inst_17378 = cljs.core.seq.call(null,coll);
var inst_17379 = inst_17378;
var state_17398__$1 = (function (){var statearr_17402 = state_17398;
(statearr_17402[(7)] = inst_17379);

return statearr_17402;
})();
var statearr_17403_17420 = state_17398__$1;
(statearr_17403_17420[(2)] = null);

(statearr_17403_17420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (4))){
var inst_17379 = (state_17398[(7)]);
var inst_17382 = cljs.core.first.call(null,inst_17379);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17398__$1,(7),ch,inst_17382);
} else {
if((state_val_17399 === (6))){
var inst_17394 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17404_17421 = state_17398__$1;
(statearr_17404_17421[(2)] = inst_17394);

(statearr_17404_17421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (3))){
var inst_17396 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17398__$1,inst_17396);
} else {
if((state_val_17399 === (2))){
var inst_17379 = (state_17398[(7)]);
var state_17398__$1 = state_17398;
if(cljs.core.truth_(inst_17379)){
var statearr_17405_17422 = state_17398__$1;
(statearr_17405_17422[(1)] = (4));

} else {
var statearr_17406_17423 = state_17398__$1;
(statearr_17406_17423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (9))){
var state_17398__$1 = state_17398;
var statearr_17407_17424 = state_17398__$1;
(statearr_17407_17424[(2)] = null);

(statearr_17407_17424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (5))){
var state_17398__$1 = state_17398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17408_17425 = state_17398__$1;
(statearr_17408_17425[(1)] = (8));

} else {
var statearr_17409_17426 = state_17398__$1;
(statearr_17409_17426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (10))){
var inst_17392 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17410_17427 = state_17398__$1;
(statearr_17410_17427[(2)] = inst_17392);

(statearr_17410_17427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (8))){
var inst_17389 = cljs.core.async.close_BANG_.call(null,ch);
var state_17398__$1 = state_17398;
var statearr_17411_17428 = state_17398__$1;
(statearr_17411_17428[(2)] = inst_17389);

(statearr_17411_17428[(1)] = (10));


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
});})(c__6541__auto__))
;
return ((function (switch__6476__auto__,c__6541__auto__){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17415 = [null,null,null,null,null,null,null,null,null];
(statearr_17415[(0)] = state_machine__6477__auto__);

(statearr_17415[(1)] = (1));

return statearr_17415;
});
var state_machine__6477__auto____1 = (function (state_17398){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17416){if((e17416 instanceof Object)){
var ex__6480__auto__ = e17416;
var statearr_17417_17429 = state_17398;
(statearr_17417_17429[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17430 = state_17398;
state_17398 = G__17430;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17398){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto__))
})();
var state__6543__auto__ = (function (){var statearr_17418 = f__6542__auto__.call(null);
(statearr_17418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto__);

return statearr_17418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
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
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj17432 = {};
return obj17432;
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
return (function (){var or__3811__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17434 = {};
return obj17434;
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
return (function (){var or__3811__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t17649 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17649 = (function (cs,ch,mult,meta17650){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17650 = meta17650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17649.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17649.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17649.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17649.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17651){
var self__ = this;
var _17651__$1 = this;
return self__.meta17650;
});})(cs))
;

cljs.core.async.t17649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17651,meta17650__$1){
var self__ = this;
var _17651__$1 = this;
return (new cljs.core.async.t17649(self__.cs,self__.ch,self__.mult,meta17650__$1));
});})(cs))
;

cljs.core.async.t17649.cljs$lang$type = true;

cljs.core.async.t17649.cljs$lang$ctorStr = "cljs.core.async/t17649";

cljs.core.async.t17649.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t17649");
});})(cs))
;

cljs.core.async.__GT_t17649 = ((function (cs){
return (function __GT_t17649(cs__$1,ch__$1,mult__$1,meta17650){
return (new cljs.core.async.t17649(cs__$1,ch__$1,mult__$1,meta17650));
});})(cs))
;

}

return (new cljs.core.async.t17649(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),431,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),424,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6541__auto___17863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___17863,cs,m,dchan,dctr,done){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___17863,cs,m,dchan,dctr,done){
return (function (state_17781){
var state_val_17782 = (state_17781[(1)]);
if((state_val_17782 === (7))){
var inst_17777 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17783_17864 = state_17781__$1;
(statearr_17783_17864[(2)] = inst_17777);

(statearr_17783_17864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (20))){
var inst_17683 = (state_17781[(7)]);
var inst_17693 = cljs.core.first.call(null,inst_17683);
var inst_17694 = cljs.core.nth.call(null,inst_17693,(0),null);
var inst_17695 = cljs.core.nth.call(null,inst_17693,(1),null);
var state_17781__$1 = (function (){var statearr_17784 = state_17781;
(statearr_17784[(8)] = inst_17694);

return statearr_17784;
})();
if(cljs.core.truth_(inst_17695)){
var statearr_17785_17865 = state_17781__$1;
(statearr_17785_17865[(1)] = (22));

} else {
var statearr_17786_17866 = state_17781__$1;
(statearr_17786_17866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (27))){
var inst_17725 = (state_17781[(9)]);
var inst_17723 = (state_17781[(10)]);
var inst_17730 = cljs.core._nth.call(null,inst_17723,inst_17725);
var state_17781__$1 = (function (){var statearr_17787 = state_17781;
(statearr_17787[(11)] = inst_17730);

return statearr_17787;
})();
var statearr_17788_17867 = state_17781__$1;
(statearr_17788_17867[(2)] = null);

(statearr_17788_17867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (1))){
var state_17781__$1 = state_17781;
var statearr_17789_17868 = state_17781__$1;
(statearr_17789_17868[(2)] = null);

(statearr_17789_17868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (24))){
var inst_17683 = (state_17781[(7)]);
var inst_17700 = (state_17781[(2)]);
var inst_17701 = cljs.core.next.call(null,inst_17683);
var inst_17663 = inst_17701;
var inst_17664 = null;
var inst_17665 = (0);
var inst_17666 = (0);
var state_17781__$1 = (function (){var statearr_17790 = state_17781;
(statearr_17790[(12)] = inst_17700);

(statearr_17790[(13)] = inst_17666);

(statearr_17790[(14)] = inst_17665);

(statearr_17790[(15)] = inst_17664);

(statearr_17790[(16)] = inst_17663);

return statearr_17790;
})();
var statearr_17791_17869 = state_17781__$1;
(statearr_17791_17869[(2)] = null);

(statearr_17791_17869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (39))){
var inst_17743 = (state_17781[(17)]);
var inst_17761 = (state_17781[(2)]);
var inst_17762 = cljs.core.next.call(null,inst_17743);
var inst_17722 = inst_17762;
var inst_17723 = null;
var inst_17724 = (0);
var inst_17725 = (0);
var state_17781__$1 = (function (){var statearr_17795 = state_17781;
(statearr_17795[(18)] = inst_17761);

(statearr_17795[(19)] = inst_17722);

(statearr_17795[(9)] = inst_17725);

(statearr_17795[(20)] = inst_17724);

(statearr_17795[(10)] = inst_17723);

return statearr_17795;
})();
var statearr_17796_17870 = state_17781__$1;
(statearr_17796_17870[(2)] = null);

(statearr_17796_17870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (4))){
var inst_17654 = (state_17781[(21)]);
var inst_17654__$1 = (state_17781[(2)]);
var inst_17655 = (inst_17654__$1 == null);
var state_17781__$1 = (function (){var statearr_17797 = state_17781;
(statearr_17797[(21)] = inst_17654__$1);

return statearr_17797;
})();
if(cljs.core.truth_(inst_17655)){
var statearr_17798_17871 = state_17781__$1;
(statearr_17798_17871[(1)] = (5));

} else {
var statearr_17799_17872 = state_17781__$1;
(statearr_17799_17872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (15))){
var inst_17666 = (state_17781[(13)]);
var inst_17665 = (state_17781[(14)]);
var inst_17664 = (state_17781[(15)]);
var inst_17663 = (state_17781[(16)]);
var inst_17679 = (state_17781[(2)]);
var inst_17680 = (inst_17666 + (1));
var tmp17792 = inst_17665;
var tmp17793 = inst_17664;
var tmp17794 = inst_17663;
var inst_17663__$1 = tmp17794;
var inst_17664__$1 = tmp17793;
var inst_17665__$1 = tmp17792;
var inst_17666__$1 = inst_17680;
var state_17781__$1 = (function (){var statearr_17800 = state_17781;
(statearr_17800[(13)] = inst_17666__$1);

(statearr_17800[(14)] = inst_17665__$1);

(statearr_17800[(15)] = inst_17664__$1);

(statearr_17800[(16)] = inst_17663__$1);

(statearr_17800[(22)] = inst_17679);

return statearr_17800;
})();
var statearr_17801_17873 = state_17781__$1;
(statearr_17801_17873[(2)] = null);

(statearr_17801_17873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (21))){
var inst_17704 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17802_17874 = state_17781__$1;
(statearr_17802_17874[(2)] = inst_17704);

(statearr_17802_17874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (31))){
var inst_17730 = (state_17781[(11)]);
var inst_17731 = (state_17781[(2)]);
var inst_17732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17733 = cljs.core.async.untap_STAR_.call(null,m,inst_17730);
var state_17781__$1 = (function (){var statearr_17803 = state_17781;
(statearr_17803[(23)] = inst_17732);

(statearr_17803[(24)] = inst_17731);

return statearr_17803;
})();
var statearr_17804_17875 = state_17781__$1;
(statearr_17804_17875[(2)] = inst_17733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (32))){
var inst_17730 = (state_17781[(11)]);
var inst_17654 = (state_17781[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17781,(31),Object,null,(30));
var inst_17737 = cljs.core.async.put_BANG_.call(null,inst_17730,inst_17654,done);
var state_17781__$1 = state_17781;
var statearr_17805_17876 = state_17781__$1;
(statearr_17805_17876[(2)] = inst_17737);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (40))){
var inst_17752 = (state_17781[(25)]);
var inst_17753 = (state_17781[(2)]);
var inst_17754 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17755 = cljs.core.async.untap_STAR_.call(null,m,inst_17752);
var state_17781__$1 = (function (){var statearr_17806 = state_17781;
(statearr_17806[(26)] = inst_17754);

(statearr_17806[(27)] = inst_17753);

return statearr_17806;
})();
var statearr_17807_17877 = state_17781__$1;
(statearr_17807_17877[(2)] = inst_17755);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (33))){
var inst_17743 = (state_17781[(17)]);
var inst_17745 = cljs.core.chunked_seq_QMARK_.call(null,inst_17743);
var state_17781__$1 = state_17781;
if(inst_17745){
var statearr_17808_17878 = state_17781__$1;
(statearr_17808_17878[(1)] = (36));

} else {
var statearr_17809_17879 = state_17781__$1;
(statearr_17809_17879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (13))){
var inst_17673 = (state_17781[(28)]);
var inst_17676 = cljs.core.async.close_BANG_.call(null,inst_17673);
var state_17781__$1 = state_17781;
var statearr_17810_17880 = state_17781__$1;
(statearr_17810_17880[(2)] = inst_17676);

(statearr_17810_17880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (22))){
var inst_17694 = (state_17781[(8)]);
var inst_17697 = cljs.core.async.close_BANG_.call(null,inst_17694);
var state_17781__$1 = state_17781;
var statearr_17811_17881 = state_17781__$1;
(statearr_17811_17881[(2)] = inst_17697);

(statearr_17811_17881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (36))){
var inst_17743 = (state_17781[(17)]);
var inst_17747 = cljs.core.chunk_first.call(null,inst_17743);
var inst_17748 = cljs.core.chunk_rest.call(null,inst_17743);
var inst_17749 = cljs.core.count.call(null,inst_17747);
var inst_17722 = inst_17748;
var inst_17723 = inst_17747;
var inst_17724 = inst_17749;
var inst_17725 = (0);
var state_17781__$1 = (function (){var statearr_17812 = state_17781;
(statearr_17812[(19)] = inst_17722);

(statearr_17812[(9)] = inst_17725);

(statearr_17812[(20)] = inst_17724);

(statearr_17812[(10)] = inst_17723);

return statearr_17812;
})();
var statearr_17813_17882 = state_17781__$1;
(statearr_17813_17882[(2)] = null);

(statearr_17813_17882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (41))){
var inst_17752 = (state_17781[(25)]);
var inst_17654 = (state_17781[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17781,(40),Object,null,(39));
var inst_17759 = cljs.core.async.put_BANG_.call(null,inst_17752,inst_17654,done);
var state_17781__$1 = state_17781;
var statearr_17814_17883 = state_17781__$1;
(statearr_17814_17883[(2)] = inst_17759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (29))){
var inst_17770 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17815_17884 = state_17781__$1;
(statearr_17815_17884[(2)] = inst_17770);

(statearr_17815_17884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (6))){
var inst_17713 = cljs.core.deref.call(null,cs);
var inst_17714 = cljs.core.keys.call(null,inst_17713);
var inst_17715 = cljs.core.count.call(null,inst_17714);
var inst_17716 = cljs.core.reset_BANG_.call(null,dctr,inst_17715);
var inst_17721 = cljs.core.seq.call(null,inst_17714);
var inst_17722 = inst_17721;
var inst_17723 = null;
var inst_17724 = (0);
var inst_17725 = (0);
var state_17781__$1 = (function (){var statearr_17816 = state_17781;
(statearr_17816[(29)] = inst_17716);

(statearr_17816[(19)] = inst_17722);

(statearr_17816[(9)] = inst_17725);

(statearr_17816[(20)] = inst_17724);

(statearr_17816[(10)] = inst_17723);

return statearr_17816;
})();
var statearr_17817_17885 = state_17781__$1;
(statearr_17817_17885[(2)] = null);

(statearr_17817_17885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (28))){
var inst_17743 = (state_17781[(17)]);
var inst_17722 = (state_17781[(19)]);
var inst_17743__$1 = cljs.core.seq.call(null,inst_17722);
var state_17781__$1 = (function (){var statearr_17818 = state_17781;
(statearr_17818[(17)] = inst_17743__$1);

return statearr_17818;
})();
if(inst_17743__$1){
var statearr_17819_17886 = state_17781__$1;
(statearr_17819_17886[(1)] = (33));

} else {
var statearr_17820_17887 = state_17781__$1;
(statearr_17820_17887[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (25))){
var inst_17725 = (state_17781[(9)]);
var inst_17724 = (state_17781[(20)]);
var inst_17727 = (inst_17725 < inst_17724);
var inst_17728 = inst_17727;
var state_17781__$1 = state_17781;
if(cljs.core.truth_(inst_17728)){
var statearr_17821_17888 = state_17781__$1;
(statearr_17821_17888[(1)] = (27));

} else {
var statearr_17822_17889 = state_17781__$1;
(statearr_17822_17889[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (34))){
var state_17781__$1 = state_17781;
var statearr_17823_17890 = state_17781__$1;
(statearr_17823_17890[(2)] = null);

(statearr_17823_17890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (17))){
var state_17781__$1 = state_17781;
var statearr_17824_17891 = state_17781__$1;
(statearr_17824_17891[(2)] = null);

(statearr_17824_17891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (3))){
var inst_17779 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17781__$1,inst_17779);
} else {
if((state_val_17782 === (12))){
var inst_17709 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17825_17892 = state_17781__$1;
(statearr_17825_17892[(2)] = inst_17709);

(statearr_17825_17892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (2))){
var state_17781__$1 = state_17781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17781__$1,(4),ch);
} else {
if((state_val_17782 === (23))){
var state_17781__$1 = state_17781;
var statearr_17826_17893 = state_17781__$1;
(statearr_17826_17893[(2)] = null);

(statearr_17826_17893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (35))){
var inst_17768 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17827_17894 = state_17781__$1;
(statearr_17827_17894[(2)] = inst_17768);

(statearr_17827_17894[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (19))){
var inst_17683 = (state_17781[(7)]);
var inst_17687 = cljs.core.chunk_first.call(null,inst_17683);
var inst_17688 = cljs.core.chunk_rest.call(null,inst_17683);
var inst_17689 = cljs.core.count.call(null,inst_17687);
var inst_17663 = inst_17688;
var inst_17664 = inst_17687;
var inst_17665 = inst_17689;
var inst_17666 = (0);
var state_17781__$1 = (function (){var statearr_17828 = state_17781;
(statearr_17828[(13)] = inst_17666);

(statearr_17828[(14)] = inst_17665);

(statearr_17828[(15)] = inst_17664);

(statearr_17828[(16)] = inst_17663);

return statearr_17828;
})();
var statearr_17829_17895 = state_17781__$1;
(statearr_17829_17895[(2)] = null);

(statearr_17829_17895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (11))){
var inst_17683 = (state_17781[(7)]);
var inst_17663 = (state_17781[(16)]);
var inst_17683__$1 = cljs.core.seq.call(null,inst_17663);
var state_17781__$1 = (function (){var statearr_17830 = state_17781;
(statearr_17830[(7)] = inst_17683__$1);

return statearr_17830;
})();
if(inst_17683__$1){
var statearr_17831_17896 = state_17781__$1;
(statearr_17831_17896[(1)] = (16));

} else {
var statearr_17832_17897 = state_17781__$1;
(statearr_17832_17897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (9))){
var inst_17711 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17833_17898 = state_17781__$1;
(statearr_17833_17898[(2)] = inst_17711);

(statearr_17833_17898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (5))){
var inst_17661 = cljs.core.deref.call(null,cs);
var inst_17662 = cljs.core.seq.call(null,inst_17661);
var inst_17663 = inst_17662;
var inst_17664 = null;
var inst_17665 = (0);
var inst_17666 = (0);
var state_17781__$1 = (function (){var statearr_17834 = state_17781;
(statearr_17834[(13)] = inst_17666);

(statearr_17834[(14)] = inst_17665);

(statearr_17834[(15)] = inst_17664);

(statearr_17834[(16)] = inst_17663);

return statearr_17834;
})();
var statearr_17835_17899 = state_17781__$1;
(statearr_17835_17899[(2)] = null);

(statearr_17835_17899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (14))){
var state_17781__$1 = state_17781;
var statearr_17836_17900 = state_17781__$1;
(statearr_17836_17900[(2)] = null);

(statearr_17836_17900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (26))){
var inst_17772 = (state_17781[(2)]);
var state_17781__$1 = (function (){var statearr_17837 = state_17781;
(statearr_17837[(30)] = inst_17772);

return statearr_17837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17781__$1,(42),dchan);
} else {
if((state_val_17782 === (16))){
var inst_17683 = (state_17781[(7)]);
var inst_17685 = cljs.core.chunked_seq_QMARK_.call(null,inst_17683);
var state_17781__$1 = state_17781;
if(inst_17685){
var statearr_17841_17901 = state_17781__$1;
(statearr_17841_17901[(1)] = (19));

} else {
var statearr_17842_17902 = state_17781__$1;
(statearr_17842_17902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (38))){
var inst_17765 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17843_17903 = state_17781__$1;
(statearr_17843_17903[(2)] = inst_17765);

(statearr_17843_17903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (30))){
var inst_17722 = (state_17781[(19)]);
var inst_17725 = (state_17781[(9)]);
var inst_17724 = (state_17781[(20)]);
var inst_17723 = (state_17781[(10)]);
var inst_17739 = (state_17781[(2)]);
var inst_17740 = (inst_17725 + (1));
var tmp17838 = inst_17722;
var tmp17839 = inst_17724;
var tmp17840 = inst_17723;
var inst_17722__$1 = tmp17838;
var inst_17723__$1 = tmp17840;
var inst_17724__$1 = tmp17839;
var inst_17725__$1 = inst_17740;
var state_17781__$1 = (function (){var statearr_17844 = state_17781;
(statearr_17844[(31)] = inst_17739);

(statearr_17844[(19)] = inst_17722__$1);

(statearr_17844[(9)] = inst_17725__$1);

(statearr_17844[(20)] = inst_17724__$1);

(statearr_17844[(10)] = inst_17723__$1);

return statearr_17844;
})();
var statearr_17845_17904 = state_17781__$1;
(statearr_17845_17904[(2)] = null);

(statearr_17845_17904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (10))){
var inst_17666 = (state_17781[(13)]);
var inst_17664 = (state_17781[(15)]);
var inst_17672 = cljs.core._nth.call(null,inst_17664,inst_17666);
var inst_17673 = cljs.core.nth.call(null,inst_17672,(0),null);
var inst_17674 = cljs.core.nth.call(null,inst_17672,(1),null);
var state_17781__$1 = (function (){var statearr_17846 = state_17781;
(statearr_17846[(28)] = inst_17673);

return statearr_17846;
})();
if(cljs.core.truth_(inst_17674)){
var statearr_17847_17905 = state_17781__$1;
(statearr_17847_17905[(1)] = (13));

} else {
var statearr_17848_17906 = state_17781__$1;
(statearr_17848_17906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (18))){
var inst_17707 = (state_17781[(2)]);
var state_17781__$1 = state_17781;
var statearr_17849_17907 = state_17781__$1;
(statearr_17849_17907[(2)] = inst_17707);

(statearr_17849_17907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (42))){
var inst_17774 = (state_17781[(2)]);
var state_17781__$1 = (function (){var statearr_17850 = state_17781;
(statearr_17850[(32)] = inst_17774);

return statearr_17850;
})();
var statearr_17851_17908 = state_17781__$1;
(statearr_17851_17908[(2)] = null);

(statearr_17851_17908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (37))){
var inst_17743 = (state_17781[(17)]);
var inst_17752 = cljs.core.first.call(null,inst_17743);
var state_17781__$1 = (function (){var statearr_17852 = state_17781;
(statearr_17852[(25)] = inst_17752);

return statearr_17852;
})();
var statearr_17853_17909 = state_17781__$1;
(statearr_17853_17909[(2)] = null);

(statearr_17853_17909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17782 === (8))){
var inst_17666 = (state_17781[(13)]);
var inst_17665 = (state_17781[(14)]);
var inst_17668 = (inst_17666 < inst_17665);
var inst_17669 = inst_17668;
var state_17781__$1 = state_17781;
if(cljs.core.truth_(inst_17669)){
var statearr_17854_17910 = state_17781__$1;
(statearr_17854_17910[(1)] = (10));

} else {
var statearr_17855_17911 = state_17781__$1;
(statearr_17855_17911[(1)] = (11));

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
});})(c__6541__auto___17863,cs,m,dchan,dctr,done))
;
return ((function (switch__6476__auto__,c__6541__auto___17863,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_17859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17859[(0)] = state_machine__6477__auto__);

(statearr_17859[(1)] = (1));

return statearr_17859;
});
var state_machine__6477__auto____1 = (function (state_17781){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_17781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e17860){if((e17860 instanceof Object)){
var ex__6480__auto__ = e17860;
var statearr_17861_17912 = state_17781;
(statearr_17861_17912[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17913 = state_17781;
state_17781 = G__17913;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_17781){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_17781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___17863,cs,m,dchan,dctr,done))
})();
var state__6543__auto__ = (function (){var statearr_17862 = f__6542__auto__.call(null);
(statearr_17862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___17863);

return statearr_17862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___17863,cs,m,dchan,dctr,done))
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
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj17915 = {};
return obj17915;
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
return (function (){var or__3811__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return (function (){var or__3811__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
if(typeof cljs.core.async.t18025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18025 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18026){
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
this.meta18026 = meta18026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18025.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18025.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18027){
var self__ = this;
var _18027__$1 = this;
return self__.meta18026;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18027,meta18026__$1){
var self__ = this;
var _18027__$1 = this;
return (new cljs.core.async.t18025(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18026__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18025.cljs$lang$type = true;

cljs.core.async.t18025.cljs$lang$ctorStr = "cljs.core.async/t18025";

cljs.core.async.t18025.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t18025");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18025 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18025(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18026){
return (new cljs.core.async.t18025(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18026));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18025(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),534,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),523,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
})()
;
var c__6541__auto___18134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18092){
var state_val_18093 = (state_18092[(1)]);
if((state_val_18093 === (7))){
var inst_18041 = (state_18092[(7)]);
var inst_18046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18041);
var state_18092__$1 = state_18092;
var statearr_18094_18135 = state_18092__$1;
(statearr_18094_18135[(2)] = inst_18046);

(statearr_18094_18135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (20))){
var inst_18056 = (state_18092[(8)]);
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18092__$1,(23),out,inst_18056);
} else {
if((state_val_18093 === (1))){
var inst_18031 = (state_18092[(9)]);
var inst_18031__$1 = calc_state.call(null);
var inst_18032 = cljs.core.seq_QMARK_.call(null,inst_18031__$1);
var state_18092__$1 = (function (){var statearr_18095 = state_18092;
(statearr_18095[(9)] = inst_18031__$1);

return statearr_18095;
})();
if(inst_18032){
var statearr_18096_18136 = state_18092__$1;
(statearr_18096_18136[(1)] = (2));

} else {
var statearr_18097_18137 = state_18092__$1;
(statearr_18097_18137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (4))){
var inst_18031 = (state_18092[(9)]);
var inst_18037 = (state_18092[(2)]);
var inst_18038 = cljs.core.get.call(null,inst_18037,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18039 = cljs.core.get.call(null,inst_18037,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18040 = cljs.core.get.call(null,inst_18037,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18041 = inst_18031;
var state_18092__$1 = (function (){var statearr_18098 = state_18092;
(statearr_18098[(10)] = inst_18040);

(statearr_18098[(11)] = inst_18039);

(statearr_18098[(12)] = inst_18038);

(statearr_18098[(7)] = inst_18041);

return statearr_18098;
})();
var statearr_18099_18138 = state_18092__$1;
(statearr_18099_18138[(2)] = null);

(statearr_18099_18138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (15))){
var state_18092__$1 = state_18092;
var statearr_18100_18139 = state_18092__$1;
(statearr_18100_18139[(2)] = null);

(statearr_18100_18139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (21))){
var state_18092__$1 = state_18092;
var statearr_18101_18140 = state_18092__$1;
(statearr_18101_18140[(2)] = null);

(statearr_18101_18140[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (13))){
var inst_18088 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
var statearr_18102_18141 = state_18092__$1;
(statearr_18102_18141[(2)] = inst_18088);

(statearr_18102_18141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (22))){
var inst_18049 = (state_18092[(13)]);
var inst_18085 = (state_18092[(2)]);
var inst_18041 = inst_18049;
var state_18092__$1 = (function (){var statearr_18103 = state_18092;
(statearr_18103[(14)] = inst_18085);

(statearr_18103[(7)] = inst_18041);

return statearr_18103;
})();
var statearr_18104_18142 = state_18092__$1;
(statearr_18104_18142[(2)] = null);

(statearr_18104_18142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (6))){
var inst_18090 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18092__$1,inst_18090);
} else {
if((state_val_18093 === (17))){
var inst_18071 = (state_18092[(15)]);
var state_18092__$1 = state_18092;
var statearr_18105_18143 = state_18092__$1;
(statearr_18105_18143[(2)] = inst_18071);

(statearr_18105_18143[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (3))){
var inst_18031 = (state_18092[(9)]);
var state_18092__$1 = state_18092;
var statearr_18106_18144 = state_18092__$1;
(statearr_18106_18144[(2)] = inst_18031);

(statearr_18106_18144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (12))){
var inst_18057 = (state_18092[(16)]);
var inst_18052 = (state_18092[(17)]);
var inst_18071 = (state_18092[(15)]);
var inst_18071__$1 = inst_18052.call(null,inst_18057);
var state_18092__$1 = (function (){var statearr_18107 = state_18092;
(statearr_18107[(15)] = inst_18071__$1);

return statearr_18107;
})();
if(cljs.core.truth_(inst_18071__$1)){
var statearr_18108_18145 = state_18092__$1;
(statearr_18108_18145[(1)] = (17));

} else {
var statearr_18109_18146 = state_18092__$1;
(statearr_18109_18146[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (2))){
var inst_18031 = (state_18092[(9)]);
var inst_18034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18031);
var state_18092__$1 = state_18092;
var statearr_18110_18147 = state_18092__$1;
(statearr_18110_18147[(2)] = inst_18034);

(statearr_18110_18147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (23))){
var inst_18082 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
var statearr_18111_18148 = state_18092__$1;
(statearr_18111_18148[(2)] = inst_18082);

(statearr_18111_18148[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (19))){
var inst_18079 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
if(cljs.core.truth_(inst_18079)){
var statearr_18112_18149 = state_18092__$1;
(statearr_18112_18149[(1)] = (20));

} else {
var statearr_18113_18150 = state_18092__$1;
(statearr_18113_18150[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (11))){
var inst_18056 = (state_18092[(8)]);
var inst_18062 = (inst_18056 == null);
var state_18092__$1 = state_18092;
if(cljs.core.truth_(inst_18062)){
var statearr_18114_18151 = state_18092__$1;
(statearr_18114_18151[(1)] = (14));

} else {
var statearr_18115_18152 = state_18092__$1;
(statearr_18115_18152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (9))){
var inst_18049 = (state_18092[(13)]);
var inst_18049__$1 = (state_18092[(2)]);
var inst_18050 = cljs.core.get.call(null,inst_18049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18051 = cljs.core.get.call(null,inst_18049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18052 = cljs.core.get.call(null,inst_18049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18092__$1 = (function (){var statearr_18116 = state_18092;
(statearr_18116[(18)] = inst_18051);

(statearr_18116[(17)] = inst_18052);

(statearr_18116[(13)] = inst_18049__$1);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18092__$1,(10),inst_18050);
} else {
if((state_val_18093 === (5))){
var inst_18041 = (state_18092[(7)]);
var inst_18044 = cljs.core.seq_QMARK_.call(null,inst_18041);
var state_18092__$1 = state_18092;
if(inst_18044){
var statearr_18117_18153 = state_18092__$1;
(statearr_18117_18153[(1)] = (7));

} else {
var statearr_18118_18154 = state_18092__$1;
(statearr_18118_18154[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (14))){
var inst_18057 = (state_18092[(16)]);
var inst_18064 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18057);
var state_18092__$1 = state_18092;
var statearr_18119_18155 = state_18092__$1;
(statearr_18119_18155[(2)] = inst_18064);

(statearr_18119_18155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (16))){
var inst_18067 = (state_18092[(2)]);
var inst_18068 = calc_state.call(null);
var inst_18041 = inst_18068;
var state_18092__$1 = (function (){var statearr_18120 = state_18092;
(statearr_18120[(19)] = inst_18067);

(statearr_18120[(7)] = inst_18041);

return statearr_18120;
})();
var statearr_18121_18156 = state_18092__$1;
(statearr_18121_18156[(2)] = null);

(statearr_18121_18156[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (10))){
var inst_18057 = (state_18092[(16)]);
var inst_18056 = (state_18092[(8)]);
var inst_18055 = (state_18092[(2)]);
var inst_18056__$1 = cljs.core.nth.call(null,inst_18055,(0),null);
var inst_18057__$1 = cljs.core.nth.call(null,inst_18055,(1),null);
var inst_18058 = (inst_18056__$1 == null);
var inst_18059 = cljs.core._EQ_.call(null,inst_18057__$1,change);
var inst_18060 = (inst_18058) || (inst_18059);
var state_18092__$1 = (function (){var statearr_18122 = state_18092;
(statearr_18122[(16)] = inst_18057__$1);

(statearr_18122[(8)] = inst_18056__$1);

return statearr_18122;
})();
if(cljs.core.truth_(inst_18060)){
var statearr_18123_18157 = state_18092__$1;
(statearr_18123_18157[(1)] = (11));

} else {
var statearr_18124_18158 = state_18092__$1;
(statearr_18124_18158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (18))){
var inst_18057 = (state_18092[(16)]);
var inst_18051 = (state_18092[(18)]);
var inst_18052 = (state_18092[(17)]);
var inst_18074 = cljs.core.empty_QMARK_.call(null,inst_18052);
var inst_18075 = inst_18051.call(null,inst_18057);
var inst_18076 = cljs.core.not.call(null,inst_18075);
var inst_18077 = (inst_18074) && (inst_18076);
var state_18092__$1 = state_18092;
var statearr_18125_18159 = state_18092__$1;
(statearr_18125_18159[(2)] = inst_18077);

(statearr_18125_18159[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (8))){
var inst_18041 = (state_18092[(7)]);
var state_18092__$1 = state_18092;
var statearr_18126_18160 = state_18092__$1;
(statearr_18126_18160[(2)] = inst_18041);

(statearr_18126_18160[(1)] = (9));


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
});})(c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6476__auto__,c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18130[(0)] = state_machine__6477__auto__);

(statearr_18130[(1)] = (1));

return statearr_18130;
});
var state_machine__6477__auto____1 = (function (state_18092){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18131){if((e18131 instanceof Object)){
var ex__6480__auto__ = e18131;
var statearr_18132_18161 = state_18092;
(statearr_18132_18161[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18162 = state_18092;
state_18092 = G__18162;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18092){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6543__auto__ = (function (){var statearr_18133 = f__6542__auto__.call(null);
(statearr_18133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18134);

return statearr_18133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj18164 = {};
return obj18164;
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
return (function (){var or__3811__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (){var or__3811__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4455__auto__)]);
if(or__3811__auto__){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3811__auto____$1){
return or__3811__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3811__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3811__auto__,mults){
return (function (p1__18165_SHARP_){
if(cljs.core.truth_(p1__18165_SHARP_.call(null,topic))){
return p1__18165_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18165_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3811__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18290 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18291){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18291 = meta18291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18290.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18292){
var self__ = this;
var _18292__$1 = this;
return self__.meta18291;
});})(mults,ensure_mult))
;

cljs.core.async.t18290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18292,meta18291__$1){
var self__ = this;
var _18292__$1 = this;
return (new cljs.core.async.t18290(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18291__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18290.cljs$lang$type = true;

cljs.core.async.t18290.cljs$lang$ctorStr = "cljs.core.async/t18290";

cljs.core.async.t18290.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write.call(null,writer__4399__auto__,"cljs.core.async/t18290");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18290 = ((function (mults,ensure_mult){
return (function __GT_t18290(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18291){
return (new cljs.core.async.t18290(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18291));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18290(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),624,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),612,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/peter/personal/cljstemplate/release/scripts/cljs/core/async.cljs"], null)));
})()
;
var c__6541__auto___18414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18414,mults,ensure_mult,p){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18414,mults,ensure_mult,p){
return (function (state_18366){
var state_val_18367 = (state_18366[(1)]);
if((state_val_18367 === (7))){
var inst_18362 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18368_18415 = state_18366__$1;
(statearr_18368_18415[(2)] = inst_18362);

(statearr_18368_18415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (20))){
var state_18366__$1 = state_18366;
var statearr_18369_18416 = state_18366__$1;
(statearr_18369_18416[(2)] = null);

(statearr_18369_18416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (1))){
var state_18366__$1 = state_18366;
var statearr_18370_18417 = state_18366__$1;
(statearr_18370_18417[(2)] = null);

(statearr_18370_18417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (24))){
var inst_18295 = (state_18366[(7)]);
var inst_18345 = (state_18366[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18366,(23),Object,null,(22));
var inst_18352 = cljs.core.async.muxch_STAR_.call(null,inst_18345);
var state_18366__$1 = state_18366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18366__$1,(25),inst_18352,inst_18295);
} else {
if((state_val_18367 === (4))){
var inst_18295 = (state_18366[(7)]);
var inst_18295__$1 = (state_18366[(2)]);
var inst_18296 = (inst_18295__$1 == null);
var state_18366__$1 = (function (){var statearr_18371 = state_18366;
(statearr_18371[(7)] = inst_18295__$1);

return statearr_18371;
})();
if(cljs.core.truth_(inst_18296)){
var statearr_18372_18418 = state_18366__$1;
(statearr_18372_18418[(1)] = (5));

} else {
var statearr_18373_18419 = state_18366__$1;
(statearr_18373_18419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (15))){
var inst_18337 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18374_18420 = state_18366__$1;
(statearr_18374_18420[(2)] = inst_18337);

(statearr_18374_18420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (21))){
var inst_18359 = (state_18366[(2)]);
var state_18366__$1 = (function (){var statearr_18375 = state_18366;
(statearr_18375[(9)] = inst_18359);

return statearr_18375;
})();
var statearr_18376_18421 = state_18366__$1;
(statearr_18376_18421[(2)] = null);

(statearr_18376_18421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (13))){
var inst_18319 = (state_18366[(10)]);
var inst_18321 = cljs.core.chunked_seq_QMARK_.call(null,inst_18319);
var state_18366__$1 = state_18366;
if(inst_18321){
var statearr_18377_18422 = state_18366__$1;
(statearr_18377_18422[(1)] = (16));

} else {
var statearr_18378_18423 = state_18366__$1;
(statearr_18378_18423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (22))){
var inst_18356 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18379_18424 = state_18366__$1;
(statearr_18379_18424[(2)] = inst_18356);

(statearr_18379_18424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (6))){
var inst_18343 = (state_18366[(11)]);
var inst_18295 = (state_18366[(7)]);
var inst_18345 = (state_18366[(8)]);
var inst_18343__$1 = topic_fn.call(null,inst_18295);
var inst_18344 = cljs.core.deref.call(null,mults);
var inst_18345__$1 = cljs.core.get.call(null,inst_18344,inst_18343__$1);
var state_18366__$1 = (function (){var statearr_18380 = state_18366;
(statearr_18380[(11)] = inst_18343__$1);

(statearr_18380[(8)] = inst_18345__$1);

return statearr_18380;
})();
if(cljs.core.truth_(inst_18345__$1)){
var statearr_18381_18425 = state_18366__$1;
(statearr_18381_18425[(1)] = (19));

} else {
var statearr_18382_18426 = state_18366__$1;
(statearr_18382_18426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (25))){
var inst_18354 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18383_18427 = state_18366__$1;
(statearr_18383_18427[(2)] = inst_18354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (17))){
var inst_18319 = (state_18366[(10)]);
var inst_18328 = cljs.core.first.call(null,inst_18319);
var inst_18329 = cljs.core.async.muxch_STAR_.call(null,inst_18328);
var inst_18330 = cljs.core.async.close_BANG_.call(null,inst_18329);
var inst_18331 = cljs.core.next.call(null,inst_18319);
var inst_18305 = inst_18331;
var inst_18306 = null;
var inst_18307 = (0);
var inst_18308 = (0);
var state_18366__$1 = (function (){var statearr_18384 = state_18366;
(statearr_18384[(12)] = inst_18306);

(statearr_18384[(13)] = inst_18305);

(statearr_18384[(14)] = inst_18308);

(statearr_18384[(15)] = inst_18330);

(statearr_18384[(16)] = inst_18307);

return statearr_18384;
})();
var statearr_18385_18428 = state_18366__$1;
(statearr_18385_18428[(2)] = null);

(statearr_18385_18428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (3))){
var inst_18364 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18366__$1,inst_18364);
} else {
if((state_val_18367 === (12))){
var inst_18339 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18386_18429 = state_18366__$1;
(statearr_18386_18429[(2)] = inst_18339);

(statearr_18386_18429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (2))){
var state_18366__$1 = state_18366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18366__$1,(4),ch);
} else {
if((state_val_18367 === (23))){
var inst_18343 = (state_18366[(11)]);
var inst_18347 = (state_18366[(2)]);
var inst_18348 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18343);
var state_18366__$1 = (function (){var statearr_18387 = state_18366;
(statearr_18387[(17)] = inst_18347);

return statearr_18387;
})();
var statearr_18388_18430 = state_18366__$1;
(statearr_18388_18430[(2)] = inst_18348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (19))){
var state_18366__$1 = state_18366;
var statearr_18389_18431 = state_18366__$1;
(statearr_18389_18431[(2)] = null);

(statearr_18389_18431[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (11))){
var inst_18305 = (state_18366[(13)]);
var inst_18319 = (state_18366[(10)]);
var inst_18319__$1 = cljs.core.seq.call(null,inst_18305);
var state_18366__$1 = (function (){var statearr_18390 = state_18366;
(statearr_18390[(10)] = inst_18319__$1);

return statearr_18390;
})();
if(inst_18319__$1){
var statearr_18391_18432 = state_18366__$1;
(statearr_18391_18432[(1)] = (13));

} else {
var statearr_18392_18433 = state_18366__$1;
(statearr_18392_18433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (9))){
var inst_18341 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18393_18434 = state_18366__$1;
(statearr_18393_18434[(2)] = inst_18341);

(statearr_18393_18434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (5))){
var inst_18302 = cljs.core.deref.call(null,mults);
var inst_18303 = cljs.core.vals.call(null,inst_18302);
var inst_18304 = cljs.core.seq.call(null,inst_18303);
var inst_18305 = inst_18304;
var inst_18306 = null;
var inst_18307 = (0);
var inst_18308 = (0);
var state_18366__$1 = (function (){var statearr_18394 = state_18366;
(statearr_18394[(12)] = inst_18306);

(statearr_18394[(13)] = inst_18305);

(statearr_18394[(14)] = inst_18308);

(statearr_18394[(16)] = inst_18307);

return statearr_18394;
})();
var statearr_18395_18435 = state_18366__$1;
(statearr_18395_18435[(2)] = null);

(statearr_18395_18435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (14))){
var state_18366__$1 = state_18366;
var statearr_18399_18436 = state_18366__$1;
(statearr_18399_18436[(2)] = null);

(statearr_18399_18436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (16))){
var inst_18319 = (state_18366[(10)]);
var inst_18323 = cljs.core.chunk_first.call(null,inst_18319);
var inst_18324 = cljs.core.chunk_rest.call(null,inst_18319);
var inst_18325 = cljs.core.count.call(null,inst_18323);
var inst_18305 = inst_18324;
var inst_18306 = inst_18323;
var inst_18307 = inst_18325;
var inst_18308 = (0);
var state_18366__$1 = (function (){var statearr_18400 = state_18366;
(statearr_18400[(12)] = inst_18306);

(statearr_18400[(13)] = inst_18305);

(statearr_18400[(14)] = inst_18308);

(statearr_18400[(16)] = inst_18307);

return statearr_18400;
})();
var statearr_18401_18437 = state_18366__$1;
(statearr_18401_18437[(2)] = null);

(statearr_18401_18437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (10))){
var inst_18306 = (state_18366[(12)]);
var inst_18305 = (state_18366[(13)]);
var inst_18308 = (state_18366[(14)]);
var inst_18307 = (state_18366[(16)]);
var inst_18313 = cljs.core._nth.call(null,inst_18306,inst_18308);
var inst_18314 = cljs.core.async.muxch_STAR_.call(null,inst_18313);
var inst_18315 = cljs.core.async.close_BANG_.call(null,inst_18314);
var inst_18316 = (inst_18308 + (1));
var tmp18396 = inst_18306;
var tmp18397 = inst_18305;
var tmp18398 = inst_18307;
var inst_18305__$1 = tmp18397;
var inst_18306__$1 = tmp18396;
var inst_18307__$1 = tmp18398;
var inst_18308__$1 = inst_18316;
var state_18366__$1 = (function (){var statearr_18402 = state_18366;
(statearr_18402[(12)] = inst_18306__$1);

(statearr_18402[(18)] = inst_18315);

(statearr_18402[(13)] = inst_18305__$1);

(statearr_18402[(14)] = inst_18308__$1);

(statearr_18402[(16)] = inst_18307__$1);

return statearr_18402;
})();
var statearr_18403_18438 = state_18366__$1;
(statearr_18403_18438[(2)] = null);

(statearr_18403_18438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (18))){
var inst_18334 = (state_18366[(2)]);
var state_18366__$1 = state_18366;
var statearr_18404_18439 = state_18366__$1;
(statearr_18404_18439[(2)] = inst_18334);

(statearr_18404_18439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18367 === (8))){
var inst_18308 = (state_18366[(14)]);
var inst_18307 = (state_18366[(16)]);
var inst_18310 = (inst_18308 < inst_18307);
var inst_18311 = inst_18310;
var state_18366__$1 = state_18366;
if(cljs.core.truth_(inst_18311)){
var statearr_18405_18440 = state_18366__$1;
(statearr_18405_18440[(1)] = (10));

} else {
var statearr_18406_18441 = state_18366__$1;
(statearr_18406_18441[(1)] = (11));

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
});})(c__6541__auto___18414,mults,ensure_mult,p))
;
return ((function (switch__6476__auto__,c__6541__auto___18414,mults,ensure_mult,p){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18410[(0)] = state_machine__6477__auto__);

(statearr_18410[(1)] = (1));

return statearr_18410;
});
var state_machine__6477__auto____1 = (function (state_18366){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18411){if((e18411 instanceof Object)){
var ex__6480__auto__ = e18411;
var statearr_18412_18442 = state_18366;
(statearr_18412_18442[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18443 = state_18366;
state_18366 = G__18443;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18366){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18414,mults,ensure_mult,p))
})();
var state__6543__auto__ = (function (){var statearr_18413 = f__6542__auto__.call(null);
(statearr_18413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18414);

return statearr_18413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18414,mults,ensure_mult,p))
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
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__6541__auto___18580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18550){
var state_val_18551 = (state_18550[(1)]);
if((state_val_18551 === (7))){
var state_18550__$1 = state_18550;
var statearr_18552_18581 = state_18550__$1;
(statearr_18552_18581[(2)] = null);

(statearr_18552_18581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (1))){
var state_18550__$1 = state_18550;
var statearr_18553_18582 = state_18550__$1;
(statearr_18553_18582[(2)] = null);

(statearr_18553_18582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (4))){
var inst_18514 = (state_18550[(7)]);
var inst_18516 = (inst_18514 < cnt);
var state_18550__$1 = state_18550;
if(cljs.core.truth_(inst_18516)){
var statearr_18554_18583 = state_18550__$1;
(statearr_18554_18583[(1)] = (6));

} else {
var statearr_18555_18584 = state_18550__$1;
(statearr_18555_18584[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (15))){
var inst_18546 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
var statearr_18556_18585 = state_18550__$1;
(statearr_18556_18585[(2)] = inst_18546);

(statearr_18556_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (13))){
var inst_18539 = cljs.core.async.close_BANG_.call(null,out);
var state_18550__$1 = state_18550;
var statearr_18557_18586 = state_18550__$1;
(statearr_18557_18586[(2)] = inst_18539);

(statearr_18557_18586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (6))){
var state_18550__$1 = state_18550;
var statearr_18558_18587 = state_18550__$1;
(statearr_18558_18587[(2)] = null);

(statearr_18558_18587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (3))){
var inst_18548 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18550__$1,inst_18548);
} else {
if((state_val_18551 === (12))){
var inst_18536 = (state_18550[(8)]);
var inst_18536__$1 = (state_18550[(2)]);
var inst_18537 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18536__$1);
var state_18550__$1 = (function (){var statearr_18559 = state_18550;
(statearr_18559[(8)] = inst_18536__$1);

return statearr_18559;
})();
if(cljs.core.truth_(inst_18537)){
var statearr_18560_18588 = state_18550__$1;
(statearr_18560_18588[(1)] = (13));

} else {
var statearr_18561_18589 = state_18550__$1;
(statearr_18561_18589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (2))){
var inst_18513 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18514 = (0);
var state_18550__$1 = (function (){var statearr_18562 = state_18550;
(statearr_18562[(7)] = inst_18514);

(statearr_18562[(9)] = inst_18513);

return statearr_18562;
})();
var statearr_18563_18590 = state_18550__$1;
(statearr_18563_18590[(2)] = null);

(statearr_18563_18590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (11))){
var inst_18514 = (state_18550[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18550,(10),Object,null,(9));
var inst_18523 = chs__$1.call(null,inst_18514);
var inst_18524 = done.call(null,inst_18514);
var inst_18525 = cljs.core.async.take_BANG_.call(null,inst_18523,inst_18524);
var state_18550__$1 = state_18550;
var statearr_18564_18591 = state_18550__$1;
(statearr_18564_18591[(2)] = inst_18525);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (9))){
var inst_18514 = (state_18550[(7)]);
var inst_18527 = (state_18550[(2)]);
var inst_18528 = (inst_18514 + (1));
var inst_18514__$1 = inst_18528;
var state_18550__$1 = (function (){var statearr_18565 = state_18550;
(statearr_18565[(7)] = inst_18514__$1);

(statearr_18565[(10)] = inst_18527);

return statearr_18565;
})();
var statearr_18566_18592 = state_18550__$1;
(statearr_18566_18592[(2)] = null);

(statearr_18566_18592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (5))){
var inst_18534 = (state_18550[(2)]);
var state_18550__$1 = (function (){var statearr_18567 = state_18550;
(statearr_18567[(11)] = inst_18534);

return statearr_18567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18550__$1,(12),dchan);
} else {
if((state_val_18551 === (14))){
var inst_18536 = (state_18550[(8)]);
var inst_18541 = cljs.core.apply.call(null,f,inst_18536);
var state_18550__$1 = state_18550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18550__$1,(16),out,inst_18541);
} else {
if((state_val_18551 === (16))){
var inst_18543 = (state_18550[(2)]);
var state_18550__$1 = (function (){var statearr_18568 = state_18550;
(statearr_18568[(12)] = inst_18543);

return statearr_18568;
})();
var statearr_18569_18593 = state_18550__$1;
(statearr_18569_18593[(2)] = null);

(statearr_18569_18593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (10))){
var inst_18518 = (state_18550[(2)]);
var inst_18519 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18550__$1 = (function (){var statearr_18570 = state_18550;
(statearr_18570[(13)] = inst_18518);

return statearr_18570;
})();
var statearr_18571_18594 = state_18550__$1;
(statearr_18571_18594[(2)] = inst_18519);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (8))){
var inst_18532 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
var statearr_18572_18595 = state_18550__$1;
(statearr_18572_18595[(2)] = inst_18532);

(statearr_18572_18595[(1)] = (5));


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
});})(c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6476__auto__,c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18576[(0)] = state_machine__6477__auto__);

(statearr_18576[(1)] = (1));

return statearr_18576;
});
var state_machine__6477__auto____1 = (function (state_18550){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18577){if((e18577 instanceof Object)){
var ex__6480__auto__ = e18577;
var statearr_18578_18596 = state_18550;
(statearr_18578_18596[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18597 = state_18550;
state_18550 = G__18597;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18550){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6543__auto__ = (function (){var statearr_18579 = f__6542__auto__.call(null);
(statearr_18579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18580);

return statearr_18579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18580,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___18705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18705,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18705,out){
return (function (state_18681){
var state_val_18682 = (state_18681[(1)]);
if((state_val_18682 === (7))){
var inst_18660 = (state_18681[(7)]);
var inst_18661 = (state_18681[(8)]);
var inst_18660__$1 = (state_18681[(2)]);
var inst_18661__$1 = cljs.core.nth.call(null,inst_18660__$1,(0),null);
var inst_18662 = cljs.core.nth.call(null,inst_18660__$1,(1),null);
var inst_18663 = (inst_18661__$1 == null);
var state_18681__$1 = (function (){var statearr_18683 = state_18681;
(statearr_18683[(9)] = inst_18662);

(statearr_18683[(7)] = inst_18660__$1);

(statearr_18683[(8)] = inst_18661__$1);

return statearr_18683;
})();
if(cljs.core.truth_(inst_18663)){
var statearr_18684_18706 = state_18681__$1;
(statearr_18684_18706[(1)] = (8));

} else {
var statearr_18685_18707 = state_18681__$1;
(statearr_18685_18707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (1))){
var inst_18652 = cljs.core.vec.call(null,chs);
var inst_18653 = inst_18652;
var state_18681__$1 = (function (){var statearr_18686 = state_18681;
(statearr_18686[(10)] = inst_18653);

return statearr_18686;
})();
var statearr_18687_18708 = state_18681__$1;
(statearr_18687_18708[(2)] = null);

(statearr_18687_18708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (4))){
var inst_18653 = (state_18681[(10)]);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18681__$1,(7),inst_18653);
} else {
if((state_val_18682 === (6))){
var inst_18677 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18688_18709 = state_18681__$1;
(statearr_18688_18709[(2)] = inst_18677);

(statearr_18688_18709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (3))){
var inst_18679 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18681__$1,inst_18679);
} else {
if((state_val_18682 === (2))){
var inst_18653 = (state_18681[(10)]);
var inst_18655 = cljs.core.count.call(null,inst_18653);
var inst_18656 = (inst_18655 > (0));
var state_18681__$1 = state_18681;
if(cljs.core.truth_(inst_18656)){
var statearr_18690_18710 = state_18681__$1;
(statearr_18690_18710[(1)] = (4));

} else {
var statearr_18691_18711 = state_18681__$1;
(statearr_18691_18711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (11))){
var inst_18653 = (state_18681[(10)]);
var inst_18670 = (state_18681[(2)]);
var tmp18689 = inst_18653;
var inst_18653__$1 = tmp18689;
var state_18681__$1 = (function (){var statearr_18692 = state_18681;
(statearr_18692[(11)] = inst_18670);

(statearr_18692[(10)] = inst_18653__$1);

return statearr_18692;
})();
var statearr_18693_18712 = state_18681__$1;
(statearr_18693_18712[(2)] = null);

(statearr_18693_18712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (9))){
var inst_18661 = (state_18681[(8)]);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18681__$1,(11),out,inst_18661);
} else {
if((state_val_18682 === (5))){
var inst_18675 = cljs.core.async.close_BANG_.call(null,out);
var state_18681__$1 = state_18681;
var statearr_18694_18713 = state_18681__$1;
(statearr_18694_18713[(2)] = inst_18675);

(statearr_18694_18713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (10))){
var inst_18673 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18695_18714 = state_18681__$1;
(statearr_18695_18714[(2)] = inst_18673);

(statearr_18695_18714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18682 === (8))){
var inst_18662 = (state_18681[(9)]);
var inst_18660 = (state_18681[(7)]);
var inst_18661 = (state_18681[(8)]);
var inst_18653 = (state_18681[(10)]);
var inst_18665 = (function (){var c = inst_18662;
var v = inst_18661;
var vec__18658 = inst_18660;
var cs = inst_18653;
return ((function (c,v,vec__18658,cs,inst_18662,inst_18660,inst_18661,inst_18653,state_val_18682,c__6541__auto___18705,out){
return (function (p1__18598_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18598_SHARP_);
});
;})(c,v,vec__18658,cs,inst_18662,inst_18660,inst_18661,inst_18653,state_val_18682,c__6541__auto___18705,out))
})();
var inst_18666 = cljs.core.filterv.call(null,inst_18665,inst_18653);
var inst_18653__$1 = inst_18666;
var state_18681__$1 = (function (){var statearr_18696 = state_18681;
(statearr_18696[(10)] = inst_18653__$1);

return statearr_18696;
})();
var statearr_18697_18715 = state_18681__$1;
(statearr_18697_18715[(2)] = null);

(statearr_18697_18715[(1)] = (2));


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
});})(c__6541__auto___18705,out))
;
return ((function (switch__6476__auto__,c__6541__auto___18705,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18701[(0)] = state_machine__6477__auto__);

(statearr_18701[(1)] = (1));

return statearr_18701;
});
var state_machine__6477__auto____1 = (function (state_18681){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18702){if((e18702 instanceof Object)){
var ex__6480__auto__ = e18702;
var statearr_18703_18716 = state_18681;
(statearr_18703_18716[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18717 = state_18681;
state_18681 = G__18717;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18681){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18705,out))
})();
var state__6543__auto__ = (function (){var statearr_18704 = f__6542__auto__.call(null);
(statearr_18704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18705);

return statearr_18704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18705,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
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
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___18810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18810,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18810,out){
return (function (state_18787){
var state_val_18788 = (state_18787[(1)]);
if((state_val_18788 === (7))){
var inst_18769 = (state_18787[(7)]);
var inst_18769__$1 = (state_18787[(2)]);
var inst_18770 = (inst_18769__$1 == null);
var inst_18771 = cljs.core.not.call(null,inst_18770);
var state_18787__$1 = (function (){var statearr_18789 = state_18787;
(statearr_18789[(7)] = inst_18769__$1);

return statearr_18789;
})();
if(inst_18771){
var statearr_18790_18811 = state_18787__$1;
(statearr_18790_18811[(1)] = (8));

} else {
var statearr_18791_18812 = state_18787__$1;
(statearr_18791_18812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (1))){
var inst_18764 = (0);
var state_18787__$1 = (function (){var statearr_18792 = state_18787;
(statearr_18792[(8)] = inst_18764);

return statearr_18792;
})();
var statearr_18793_18813 = state_18787__$1;
(statearr_18793_18813[(2)] = null);

(statearr_18793_18813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (4))){
var state_18787__$1 = state_18787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18787__$1,(7),ch);
} else {
if((state_val_18788 === (6))){
var inst_18782 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18794_18814 = state_18787__$1;
(statearr_18794_18814[(2)] = inst_18782);

(statearr_18794_18814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (3))){
var inst_18784 = (state_18787[(2)]);
var inst_18785 = cljs.core.async.close_BANG_.call(null,out);
var state_18787__$1 = (function (){var statearr_18795 = state_18787;
(statearr_18795[(9)] = inst_18784);

return statearr_18795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18787__$1,inst_18785);
} else {
if((state_val_18788 === (2))){
var inst_18764 = (state_18787[(8)]);
var inst_18766 = (inst_18764 < n);
var state_18787__$1 = state_18787;
if(cljs.core.truth_(inst_18766)){
var statearr_18796_18815 = state_18787__$1;
(statearr_18796_18815[(1)] = (4));

} else {
var statearr_18797_18816 = state_18787__$1;
(statearr_18797_18816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (11))){
var inst_18764 = (state_18787[(8)]);
var inst_18774 = (state_18787[(2)]);
var inst_18775 = (inst_18764 + (1));
var inst_18764__$1 = inst_18775;
var state_18787__$1 = (function (){var statearr_18798 = state_18787;
(statearr_18798[(10)] = inst_18774);

(statearr_18798[(8)] = inst_18764__$1);

return statearr_18798;
})();
var statearr_18799_18817 = state_18787__$1;
(statearr_18799_18817[(2)] = null);

(statearr_18799_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (9))){
var state_18787__$1 = state_18787;
var statearr_18800_18818 = state_18787__$1;
(statearr_18800_18818[(2)] = null);

(statearr_18800_18818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (5))){
var state_18787__$1 = state_18787;
var statearr_18801_18819 = state_18787__$1;
(statearr_18801_18819[(2)] = null);

(statearr_18801_18819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (10))){
var inst_18779 = (state_18787[(2)]);
var state_18787__$1 = state_18787;
var statearr_18802_18820 = state_18787__$1;
(statearr_18802_18820[(2)] = inst_18779);

(statearr_18802_18820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18788 === (8))){
var inst_18769 = (state_18787[(7)]);
var state_18787__$1 = state_18787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18787__$1,(11),out,inst_18769);
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
});})(c__6541__auto___18810,out))
;
return ((function (switch__6476__auto__,c__6541__auto___18810,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18806[(0)] = state_machine__6477__auto__);

(statearr_18806[(1)] = (1));

return statearr_18806;
});
var state_machine__6477__auto____1 = (function (state_18787){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18807){if((e18807 instanceof Object)){
var ex__6480__auto__ = e18807;
var statearr_18808_18821 = state_18787;
(statearr_18808_18821[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18822 = state_18787;
state_18787 = G__18822;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18787){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18810,out))
})();
var state__6543__auto__ = (function (){var statearr_18809 = f__6542__auto__.call(null);
(statearr_18809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18810);

return statearr_18809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18810,out))
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
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___18919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___18919,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___18919,out){
return (function (state_18894){
var state_val_18895 = (state_18894[(1)]);
if((state_val_18895 === (7))){
var inst_18889 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18896_18920 = state_18894__$1;
(statearr_18896_18920[(2)] = inst_18889);

(statearr_18896_18920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (1))){
var inst_18871 = null;
var state_18894__$1 = (function (){var statearr_18897 = state_18894;
(statearr_18897[(7)] = inst_18871);

return statearr_18897;
})();
var statearr_18898_18921 = state_18894__$1;
(statearr_18898_18921[(2)] = null);

(statearr_18898_18921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (4))){
var inst_18874 = (state_18894[(8)]);
var inst_18874__$1 = (state_18894[(2)]);
var inst_18875 = (inst_18874__$1 == null);
var inst_18876 = cljs.core.not.call(null,inst_18875);
var state_18894__$1 = (function (){var statearr_18899 = state_18894;
(statearr_18899[(8)] = inst_18874__$1);

return statearr_18899;
})();
if(inst_18876){
var statearr_18900_18922 = state_18894__$1;
(statearr_18900_18922[(1)] = (5));

} else {
var statearr_18901_18923 = state_18894__$1;
(statearr_18901_18923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (6))){
var state_18894__$1 = state_18894;
var statearr_18902_18924 = state_18894__$1;
(statearr_18902_18924[(2)] = null);

(statearr_18902_18924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (3))){
var inst_18891 = (state_18894[(2)]);
var inst_18892 = cljs.core.async.close_BANG_.call(null,out);
var state_18894__$1 = (function (){var statearr_18903 = state_18894;
(statearr_18903[(9)] = inst_18891);

return statearr_18903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18894__$1,inst_18892);
} else {
if((state_val_18895 === (2))){
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18894__$1,(4),ch);
} else {
if((state_val_18895 === (11))){
var inst_18874 = (state_18894[(8)]);
var inst_18883 = (state_18894[(2)]);
var inst_18871 = inst_18874;
var state_18894__$1 = (function (){var statearr_18904 = state_18894;
(statearr_18904[(10)] = inst_18883);

(statearr_18904[(7)] = inst_18871);

return statearr_18904;
})();
var statearr_18905_18925 = state_18894__$1;
(statearr_18905_18925[(2)] = null);

(statearr_18905_18925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (9))){
var inst_18874 = (state_18894[(8)]);
var state_18894__$1 = state_18894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18894__$1,(11),out,inst_18874);
} else {
if((state_val_18895 === (5))){
var inst_18874 = (state_18894[(8)]);
var inst_18871 = (state_18894[(7)]);
var inst_18878 = cljs.core._EQ_.call(null,inst_18874,inst_18871);
var state_18894__$1 = state_18894;
if(inst_18878){
var statearr_18907_18926 = state_18894__$1;
(statearr_18907_18926[(1)] = (8));

} else {
var statearr_18908_18927 = state_18894__$1;
(statearr_18908_18927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (10))){
var inst_18886 = (state_18894[(2)]);
var state_18894__$1 = state_18894;
var statearr_18909_18928 = state_18894__$1;
(statearr_18909_18928[(2)] = inst_18886);

(statearr_18909_18928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18895 === (8))){
var inst_18871 = (state_18894[(7)]);
var tmp18906 = inst_18871;
var inst_18871__$1 = tmp18906;
var state_18894__$1 = (function (){var statearr_18910 = state_18894;
(statearr_18910[(7)] = inst_18871__$1);

return statearr_18910;
})();
var statearr_18911_18929 = state_18894__$1;
(statearr_18911_18929[(2)] = null);

(statearr_18911_18929[(1)] = (2));


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
});})(c__6541__auto___18919,out))
;
return ((function (switch__6476__auto__,c__6541__auto___18919,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_18915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18915[(0)] = state_machine__6477__auto__);

(statearr_18915[(1)] = (1));

return statearr_18915;
});
var state_machine__6477__auto____1 = (function (state_18894){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_18894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e18916){if((e18916 instanceof Object)){
var ex__6480__auto__ = e18916;
var statearr_18917_18930 = state_18894;
(statearr_18917_18930[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18931 = state_18894;
state_18894 = G__18931;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_18894){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_18894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___18919,out))
})();
var state__6543__auto__ = (function (){var statearr_18918 = f__6542__auto__.call(null);
(statearr_18918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___18919);

return statearr_18918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___18919,out))
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
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___19066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___19066,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___19066,out){
return (function (state_19036){
var state_val_19037 = (state_19036[(1)]);
if((state_val_19037 === (7))){
var inst_19032 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19038_19067 = state_19036__$1;
(statearr_19038_19067[(2)] = inst_19032);

(statearr_19038_19067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (1))){
var inst_18999 = (new Array(n));
var inst_19000 = inst_18999;
var inst_19001 = (0);
var state_19036__$1 = (function (){var statearr_19039 = state_19036;
(statearr_19039[(7)] = inst_19000);

(statearr_19039[(8)] = inst_19001);

return statearr_19039;
})();
var statearr_19040_19068 = state_19036__$1;
(statearr_19040_19068[(2)] = null);

(statearr_19040_19068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (4))){
var inst_19004 = (state_19036[(9)]);
var inst_19004__$1 = (state_19036[(2)]);
var inst_19005 = (inst_19004__$1 == null);
var inst_19006 = cljs.core.not.call(null,inst_19005);
var state_19036__$1 = (function (){var statearr_19041 = state_19036;
(statearr_19041[(9)] = inst_19004__$1);

return statearr_19041;
})();
if(inst_19006){
var statearr_19042_19069 = state_19036__$1;
(statearr_19042_19069[(1)] = (5));

} else {
var statearr_19043_19070 = state_19036__$1;
(statearr_19043_19070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (15))){
var inst_19026 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19044_19071 = state_19036__$1;
(statearr_19044_19071[(2)] = inst_19026);

(statearr_19044_19071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (13))){
var state_19036__$1 = state_19036;
var statearr_19045_19072 = state_19036__$1;
(statearr_19045_19072[(2)] = null);

(statearr_19045_19072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (6))){
var inst_19001 = (state_19036[(8)]);
var inst_19022 = (inst_19001 > (0));
var state_19036__$1 = state_19036;
if(cljs.core.truth_(inst_19022)){
var statearr_19046_19073 = state_19036__$1;
(statearr_19046_19073[(1)] = (12));

} else {
var statearr_19047_19074 = state_19036__$1;
(statearr_19047_19074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (3))){
var inst_19034 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19036__$1,inst_19034);
} else {
if((state_val_19037 === (12))){
var inst_19000 = (state_19036[(7)]);
var inst_19024 = cljs.core.vec.call(null,inst_19000);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19036__$1,(15),out,inst_19024);
} else {
if((state_val_19037 === (2))){
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19036__$1,(4),ch);
} else {
if((state_val_19037 === (11))){
var inst_19016 = (state_19036[(2)]);
var inst_19017 = (new Array(n));
var inst_19000 = inst_19017;
var inst_19001 = (0);
var state_19036__$1 = (function (){var statearr_19048 = state_19036;
(statearr_19048[(7)] = inst_19000);

(statearr_19048[(10)] = inst_19016);

(statearr_19048[(8)] = inst_19001);

return statearr_19048;
})();
var statearr_19049_19075 = state_19036__$1;
(statearr_19049_19075[(2)] = null);

(statearr_19049_19075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (9))){
var inst_19000 = (state_19036[(7)]);
var inst_19014 = cljs.core.vec.call(null,inst_19000);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19036__$1,(11),out,inst_19014);
} else {
if((state_val_19037 === (5))){
var inst_19000 = (state_19036[(7)]);
var inst_19004 = (state_19036[(9)]);
var inst_19001 = (state_19036[(8)]);
var inst_19009 = (state_19036[(11)]);
var inst_19008 = (inst_19000[inst_19001] = inst_19004);
var inst_19009__$1 = (inst_19001 + (1));
var inst_19010 = (inst_19009__$1 < n);
var state_19036__$1 = (function (){var statearr_19050 = state_19036;
(statearr_19050[(12)] = inst_19008);

(statearr_19050[(11)] = inst_19009__$1);

return statearr_19050;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19051_19076 = state_19036__$1;
(statearr_19051_19076[(1)] = (8));

} else {
var statearr_19052_19077 = state_19036__$1;
(statearr_19052_19077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (14))){
var inst_19029 = (state_19036[(2)]);
var inst_19030 = cljs.core.async.close_BANG_.call(null,out);
var state_19036__$1 = (function (){var statearr_19054 = state_19036;
(statearr_19054[(13)] = inst_19029);

return statearr_19054;
})();
var statearr_19055_19078 = state_19036__$1;
(statearr_19055_19078[(2)] = inst_19030);

(statearr_19055_19078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (10))){
var inst_19020 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19056_19079 = state_19036__$1;
(statearr_19056_19079[(2)] = inst_19020);

(statearr_19056_19079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (8))){
var inst_19000 = (state_19036[(7)]);
var inst_19009 = (state_19036[(11)]);
var tmp19053 = inst_19000;
var inst_19000__$1 = tmp19053;
var inst_19001 = inst_19009;
var state_19036__$1 = (function (){var statearr_19057 = state_19036;
(statearr_19057[(7)] = inst_19000__$1);

(statearr_19057[(8)] = inst_19001);

return statearr_19057;
})();
var statearr_19058_19080 = state_19036__$1;
(statearr_19058_19080[(2)] = null);

(statearr_19058_19080[(1)] = (2));


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
});})(c__6541__auto___19066,out))
;
return ((function (switch__6476__auto__,c__6541__auto___19066,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_19062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19062[(0)] = state_machine__6477__auto__);

(statearr_19062[(1)] = (1));

return statearr_19062;
});
var state_machine__6477__auto____1 = (function (state_19036){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_19036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e19063){if((e19063 instanceof Object)){
var ex__6480__auto__ = e19063;
var statearr_19064_19081 = state_19036;
(statearr_19064_19081[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19082 = state_19036;
state_19036 = G__19082;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_19036){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_19036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___19066,out))
})();
var state__6543__auto__ = (function (){var statearr_19065 = f__6542__auto__.call(null);
(statearr_19065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___19066);

return statearr_19065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___19066,out))
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
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6541__auto___19225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___19225,out){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___19225,out){
return (function (state_19195){
var state_val_19196 = (state_19195[(1)]);
if((state_val_19196 === (7))){
var inst_19191 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
var statearr_19197_19226 = state_19195__$1;
(statearr_19197_19226[(2)] = inst_19191);

(statearr_19197_19226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (1))){
var inst_19154 = [];
var inst_19155 = inst_19154;
var inst_19156 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19195__$1 = (function (){var statearr_19198 = state_19195;
(statearr_19198[(7)] = inst_19155);

(statearr_19198[(8)] = inst_19156);

return statearr_19198;
})();
var statearr_19199_19227 = state_19195__$1;
(statearr_19199_19227[(2)] = null);

(statearr_19199_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (4))){
var inst_19159 = (state_19195[(9)]);
var inst_19159__$1 = (state_19195[(2)]);
var inst_19160 = (inst_19159__$1 == null);
var inst_19161 = cljs.core.not.call(null,inst_19160);
var state_19195__$1 = (function (){var statearr_19200 = state_19195;
(statearr_19200[(9)] = inst_19159__$1);

return statearr_19200;
})();
if(inst_19161){
var statearr_19201_19228 = state_19195__$1;
(statearr_19201_19228[(1)] = (5));

} else {
var statearr_19202_19229 = state_19195__$1;
(statearr_19202_19229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (15))){
var inst_19185 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
var statearr_19203_19230 = state_19195__$1;
(statearr_19203_19230[(2)] = inst_19185);

(statearr_19203_19230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (13))){
var state_19195__$1 = state_19195;
var statearr_19204_19231 = state_19195__$1;
(statearr_19204_19231[(2)] = null);

(statearr_19204_19231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (6))){
var inst_19155 = (state_19195[(7)]);
var inst_19180 = inst_19155.length;
var inst_19181 = (inst_19180 > (0));
var state_19195__$1 = state_19195;
if(cljs.core.truth_(inst_19181)){
var statearr_19205_19232 = state_19195__$1;
(statearr_19205_19232[(1)] = (12));

} else {
var statearr_19206_19233 = state_19195__$1;
(statearr_19206_19233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (3))){
var inst_19193 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19195__$1,inst_19193);
} else {
if((state_val_19196 === (12))){
var inst_19155 = (state_19195[(7)]);
var inst_19183 = cljs.core.vec.call(null,inst_19155);
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,(15),out,inst_19183);
} else {
if((state_val_19196 === (2))){
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,(4),ch);
} else {
if((state_val_19196 === (11))){
var inst_19159 = (state_19195[(9)]);
var inst_19163 = (state_19195[(10)]);
var inst_19173 = (state_19195[(2)]);
var inst_19174 = [];
var inst_19175 = inst_19174.push(inst_19159);
var inst_19155 = inst_19174;
var inst_19156 = inst_19163;
var state_19195__$1 = (function (){var statearr_19207 = state_19195;
(statearr_19207[(11)] = inst_19175);

(statearr_19207[(7)] = inst_19155);

(statearr_19207[(12)] = inst_19173);

(statearr_19207[(8)] = inst_19156);

return statearr_19207;
})();
var statearr_19208_19234 = state_19195__$1;
(statearr_19208_19234[(2)] = null);

(statearr_19208_19234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (9))){
var inst_19155 = (state_19195[(7)]);
var inst_19171 = cljs.core.vec.call(null,inst_19155);
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,(11),out,inst_19171);
} else {
if((state_val_19196 === (5))){
var inst_19159 = (state_19195[(9)]);
var inst_19163 = (state_19195[(10)]);
var inst_19156 = (state_19195[(8)]);
var inst_19163__$1 = f.call(null,inst_19159);
var inst_19164 = cljs.core._EQ_.call(null,inst_19163__$1,inst_19156);
var inst_19165 = cljs.core.keyword_identical_QMARK_.call(null,inst_19156,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19166 = (inst_19164) || (inst_19165);
var state_19195__$1 = (function (){var statearr_19209 = state_19195;
(statearr_19209[(10)] = inst_19163__$1);

return statearr_19209;
})();
if(cljs.core.truth_(inst_19166)){
var statearr_19210_19235 = state_19195__$1;
(statearr_19210_19235[(1)] = (8));

} else {
var statearr_19211_19236 = state_19195__$1;
(statearr_19211_19236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (14))){
var inst_19188 = (state_19195[(2)]);
var inst_19189 = cljs.core.async.close_BANG_.call(null,out);
var state_19195__$1 = (function (){var statearr_19213 = state_19195;
(statearr_19213[(13)] = inst_19188);

return statearr_19213;
})();
var statearr_19214_19237 = state_19195__$1;
(statearr_19214_19237[(2)] = inst_19189);

(statearr_19214_19237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (10))){
var inst_19178 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
var statearr_19215_19238 = state_19195__$1;
(statearr_19215_19238[(2)] = inst_19178);

(statearr_19215_19238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (8))){
var inst_19159 = (state_19195[(9)]);
var inst_19155 = (state_19195[(7)]);
var inst_19163 = (state_19195[(10)]);
var inst_19168 = inst_19155.push(inst_19159);
var tmp19212 = inst_19155;
var inst_19155__$1 = tmp19212;
var inst_19156 = inst_19163;
var state_19195__$1 = (function (){var statearr_19216 = state_19195;
(statearr_19216[(14)] = inst_19168);

(statearr_19216[(7)] = inst_19155__$1);

(statearr_19216[(8)] = inst_19156);

return statearr_19216;
})();
var statearr_19217_19239 = state_19195__$1;
(statearr_19217_19239[(2)] = null);

(statearr_19217_19239[(1)] = (2));


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
});})(c__6541__auto___19225,out))
;
return ((function (switch__6476__auto__,c__6541__auto___19225,out){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_19221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19221[(0)] = state_machine__6477__auto__);

(statearr_19221[(1)] = (1));

return statearr_19221;
});
var state_machine__6477__auto____1 = (function (state_19195){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_19195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e19222){if((e19222 instanceof Object)){
var ex__6480__auto__ = e19222;
var statearr_19223_19240 = state_19195;
(statearr_19223_19240[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19241 = state_19195;
state_19195 = G__19241;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_19195){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_19195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___19225,out))
})();
var state__6543__auto__ = (function (){var statearr_19224 = f__6542__auto__.call(null);
(statearr_19224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___19225);

return statearr_19224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___19225,out))
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

//# sourceMappingURL=async.js.map