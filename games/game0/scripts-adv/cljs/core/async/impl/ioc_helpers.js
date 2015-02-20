// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$86);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t38476 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t38476 = (function (f,fn_handler,meta38477){
this.f = f;
this.fn_handler = fn_handler;
this.meta38477 = meta38477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t38476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t38476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t38476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t38476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38478){
var self__ = this;
var _38478__$1 = this;
return self__.meta38477;
});

cljs.core.async.impl.ioc_helpers.t38476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38478,meta38477__$1){
var self__ = this;
var _38478__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t38476(self__.f,self__.fn_handler,meta38477__$1));
});

cljs.core.async.impl.ioc_helpers.t38476.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t38476.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t38476";

cljs.core.async.impl.ioc_helpers.t38476.cljs$lang$ctorPrWriter = (function (this__4398__auto__,writer__4399__auto__,opt__4400__auto__){
return cljs.core._write(writer__4399__auto__,"cljs.core.async.impl.ioc-helpers/t38476");
});

cljs.core.async.impl.ioc_helpers.__GT_t38476 = (function __GT_t38476(f__$1,fn_handler__$1,meta38477){
return (new cljs.core.async.impl.ioc_helpers.t38476(f__$1,fn_handler__$1,meta38477));
});

}

return (new cljs.core.async.impl.ioc_helpers.t38476(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$72,19,cljs.core.constant$keyword$73,30,cljs.core.constant$keyword$74,3,cljs.core.constant$keyword$75,27,cljs.core.constant$keyword$76,"/Users/peter/personal/cljstemplate/release/scripts-adv/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e38480){if((e38480 instanceof Object)){
var ex = e38480;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e38480;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_38484_38487 = state;
(statearr_38484_38487[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_38484_38487[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_38485_38488 = state;
(statearr_38485_38488[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__38486 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38486) : cljs.core.deref.call(null,G__38486));
})());

(statearr_38485_38488[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$87;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){
var statearr_38492_38495 = state;
(statearr_38492_38495[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);

(statearr_38492_38495[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_38493_38496 = state;
(statearr_38493_38496[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__38494 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38494) : cljs.core.deref.call(null,G__38494));
})());

(statearr_38493_38496[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$87;
} else {
return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__38497){
var map__38503 = p__38497;
var map__38503__$1 = ((cljs.core.seq_QMARK_(map__38503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38503):map__38503);
var opts = map__38503__$1;
var statearr_38504_38508 = state;
(statearr_38504_38508[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__38503,map__38503__$1,opts){
return (function (val){
var statearr_38505_38509 = state;
(statearr_38505_38509[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__38503,map__38503__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_38506_38510 = state;
(statearr_38506_38510[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__38507 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38507) : cljs.core.deref.call(null,G__38507));
})());


return cljs.core.constant$keyword$87;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__38497 = null;
if (arguments.length > 3) {
var G__38511__i = 0, G__38511__a = new Array(arguments.length -  3);
while (G__38511__i < G__38511__a.length) {G__38511__a[G__38511__i] = arguments[G__38511__i + 3]; ++G__38511__i;}
  p__38497 = new cljs.core.IndexedSeq(G__38511__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__38497);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__38512){
var state = cljs.core.first(arglist__38512);
arglist__38512 = cljs.core.next(arglist__38512);
var cont_block = cljs.core.first(arglist__38512);
arglist__38512 = cljs.core.next(arglist__38512);
var ports = cljs.core.first(arglist__38512);
var p__38497 = cljs.core.rest(arglist__38512);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__38497);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4414__auto__,k__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4414__auto____$1,k__4415__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4416__auto__,k38514,else__4417__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
var G__38516 = (((k38514 instanceof cljs.core.Keyword))?k38514.fqn:null);
switch (G__38516) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38514,else__4417__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4428__auto__,writer__4429__auto__,opts__4430__auto__){
var self__ = this;
var this__4428__auto____$1 = this;
var pr_pair__4431__auto__ = ((function (this__4428__auto____$1){
return (function (keyval__4432__auto__){
return cljs.core.pr_sequential_writer(writer__4429__auto__,cljs.core.pr_writer,""," ","",opts__4430__auto__,keyval__4432__auto__);
});})(this__4428__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4429__auto__,pr_pair__4431__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4430__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4408__auto__){
var self__ = this;
var this__4408__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4418__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4409__auto__){
var self__ = this;
var this__4409__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if(!((h__4232__auto__ == null))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = cljs.core.hash_imap(this__4409__auto____$1);
self__.__hash = h__4232__auto____$1;

return h__4232__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4410__auto__,other__4411__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3799__auto__ = other__4411__auto__;
if(cljs.core.truth_(and__3799__auto__)){
return ((this__4410__auto____$1.constructor === other__4411__auto__.constructor)) && (cljs.core.equiv_map(this__4410__auto____$1,other__4411__auto__));
} else {
return and__3799__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4423__auto__,k__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null,cljs.core.constant$keyword$92,null,cljs.core.constant$keyword$91,null], null), null),k__4424__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4423__auto____$1),self__.__meta),k__4424__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4424__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4421__auto__,k__4422__auto__,G__38513){
var self__ = this;
var this__4421__auto____$1 = this;
var pred__38517 = cljs.core.keyword_identical_QMARK_;
var expr__38518 = k__4422__auto__;
if(cljs.core.truth_((function (){var G__38520 = cljs.core.constant$keyword$88;
var G__38521 = expr__38518;
return (pred__38517.cljs$core$IFn$_invoke$arity$2 ? pred__38517.cljs$core$IFn$_invoke$arity$2(G__38520,G__38521) : pred__38517.call(null,G__38520,G__38521));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__38513,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38522 = cljs.core.constant$keyword$89;
var G__38523 = expr__38518;
return (pred__38517.cljs$core$IFn$_invoke$arity$2 ? pred__38517.cljs$core$IFn$_invoke$arity$2(G__38522,G__38523) : pred__38517.call(null,G__38522,G__38523));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__38513,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38524 = cljs.core.constant$keyword$90;
var G__38525 = expr__38518;
return (pred__38517.cljs$core$IFn$_invoke$arity$2 ? pred__38517.cljs$core$IFn$_invoke$arity$2(G__38524,G__38525) : pred__38517.call(null,G__38524,G__38525));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__38513,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38526 = cljs.core.constant$keyword$91;
var G__38527 = expr__38518;
return (pred__38517.cljs$core$IFn$_invoke$arity$2 ? pred__38517.cljs$core$IFn$_invoke$arity$2(G__38526,G__38527) : pred__38517.call(null,G__38526,G__38527));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__38513,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38528 = cljs.core.constant$keyword$92;
var G__38529 = expr__38518;
return (pred__38517.cljs$core$IFn$_invoke$arity$2 ? pred__38517.cljs$core$IFn$_invoke$arity$2(G__38528,G__38529) : pred__38517.call(null,G__38528,G__38529));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__38513,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4422__auto__,G__38513),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4426__auto__){
var self__ = this;
var this__4426__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4413__auto__,G__38513){
var self__ = this;
var this__4413__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__38513,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4419__auto__,entry__4420__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4420__auto__)){
return cljs.core._assoc(this__4419__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4420__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4420__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4419__auto____$1,entry__4420__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4448__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4448__auto__,writer__4449__auto__){
return cljs.core._write(writer__4449__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__38515){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__38515),cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__38515),cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__38515),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__38515),cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__38515),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38515,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_38532 = state;
(statearr_38532[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_38532;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3799__auto__ = exception;
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3799__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = exception;
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = catch_block;
if(cljs.core.truth_(and__3799__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
var statearr_38538 = state;
(statearr_38538[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_38538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_38538[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_38538[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$88,null,cljs.core.array_seq([cljs.core.constant$keyword$89,null], 0)));

return statearr_38538;
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = exception;
if(cljs.core.truth_(and__3799__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3799__auto__;
}
})())){
var statearr_38539_38543 = state;
(statearr_38539_38543[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__38544 = state;
state = G__38544;
continue;
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = exception;
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.not(catch_block);
if(and__3799__auto____$1){
return cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
var statearr_38540 = state;
(statearr_38540[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_38540[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$90,null));

return statearr_38540;
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.not(exception);
if(and__3799__auto__){
return cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3799__auto__;
}
})())){
var statearr_38541 = state;
(statearr_38541[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_38541[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$90,null));

return statearr_38541;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_38542 = state;
(statearr_38542[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_38542[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_38542;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


}
}
}
}
}
}
break;
}
});
