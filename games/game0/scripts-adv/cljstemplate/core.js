// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('cljstemplate.shapeconstance');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljstemplate.levels');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.shape');
goog.require('cljstemplate.logging');
cljstemplate.core.log = cljstemplate.logging.logger(cljs.core.constant$keyword$69);
cljstemplate.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__87593_87596 = el;
var G__87594_87597 = type;
var G__87595_87598 = ((function (G__87593_87596,G__87594_87597,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__87593_87596,G__87594_87597,out))
;
goog.events.listen(G__87593_87596,G__87594_87597,G__87595_87598);

return out;
});
cljstemplate.core.handle_msg = (function handle_msg(msg){
(function (){var G__87605 = "msgBus";
return goog.dom.getElement(G__87605);
})().style.transition = "bottom 0s";

(function (){var G__87606 = "msgBus";
return goog.dom.getElement(G__87606);
})().style.bottom = "100%";

(function (){var G__87607 = "msgBus";
return goog.dom.getElement(G__87607);
})().innerHTML = msg;

return window.setTimeout((function (){
(function (){var G__87608 = "msgBus";
return goog.dom.getElement(G__87608);
})().style.transition = "bottom 0.5s";

(function (){var G__87609 = "msgBus";
return goog.dom.getElement(G__87609);
})().style.transitionTimingFunction = "ease-out";

return (function (){var G__87610 = "msgBus";
return goog.dom.getElement(G__87610);
})().style.bottom = "10px";
}),(10));
});
cljstemplate.core.pointer_state = (function (){var G__87611 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87611) : cljs.core.atom.call(null,G__87611));
})();
cljstemplate.core.handle_click = (function handle_click(event){
var rect = (function (){var G__87615 = "theCanvas";
return goog.dom.getElement(G__87615);
})().getBoundingClientRect();
var G__87616 = cljstemplate.core.pointer_state;
var G__87617 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$95,(event.clientX - rect.left),cljs.core.constant$keyword$96,(event.clientY - rect.top),cljs.core.constant$keyword$97,true], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87616,G__87617) : cljs.core.reset_BANG_.call(null,G__87616,G__87617));
});
var clicks_87647 = cljstemplate.core.listen((function (){var G__87618 = "theCanvas";
return goog.dom.getElement(G__87618);
})(),"mousedown");
var c__5992__auto___87648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5992__auto___87648,clicks_87647){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87648,clicks_87647){
return (function (state_87631){
var state_val_87632 = (state_87631[(1)]);
if((state_val_87632 === (7))){
var inst_87622 = (state_87631[(2)]);
var inst_87623 = cljstemplate.core.handle_click(inst_87622);
var state_87631__$1 = (function (){var statearr_87633 = state_87631;
(statearr_87633[(7)] = inst_87623);

return statearr_87633;
})();
var statearr_87634_87649 = state_87631__$1;
(statearr_87634_87649[(2)] = null);

(statearr_87634_87649[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87632 === (6))){
var inst_87627 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
var statearr_87635_87650 = state_87631__$1;
(statearr_87635_87650[(2)] = inst_87627);

(statearr_87635_87650[(1)] = (3));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87632 === (5))){
var state_87631__$1 = state_87631;
var statearr_87636_87651 = state_87631__$1;
(statearr_87636_87651[(2)] = null);

(statearr_87636_87651[(1)] = (6));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87632 === (4))){
var state_87631__$1 = state_87631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87631__$1,(7),clicks_87647);
} else {
if((state_val_87632 === (3))){
var inst_87629 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87631__$1,inst_87629);
} else {
if((state_val_87632 === (2))){
var state_87631__$1 = state_87631;
var statearr_87637_87652 = state_87631__$1;
(statearr_87637_87652[(1)] = (4));



return cljs.core.constant$keyword$55;
} else {
if((state_val_87632 === (1))){
var state_87631__$1 = state_87631;
var statearr_87639_87653 = state_87631__$1;
(statearr_87639_87653[(2)] = null);

(statearr_87639_87653[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5992__auto___87648,clicks_87647))
;
return ((function (switch__5977__auto__,c__5992__auto___87648,clicks_87647){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87643 = [null,null,null,null,null,null,null,null];
(statearr_87643[(0)] = state_machine__5978__auto__);

(statearr_87643[(1)] = (1));

return statearr_87643;
});
var state_machine__5978__auto____1 = (function (state_87631){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__(state_87631);
if(cljs.core.keyword_identical_QMARK_(result__5980__auto__,cljs.core.constant$keyword$55)){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87644){if((e87644 instanceof Object)){
var ex__5981__auto__ = e87644;
var statearr_87645_87654 = state_87631;
(statearr_87645_87654[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87631);

return cljs.core.constant$keyword$55;
} else {
throw e87644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5979__auto__,cljs.core.constant$keyword$55)){
var G__87655 = state_87631;
state_87631 = G__87655;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87631){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87648,clicks_87647))
})();
var state__5994__auto__ = (function (){var statearr_87646 = (function (){return (f__5993__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5993__auto__.cljs$core$IFn$_invoke$arity$0() : f__5993__auto__.call(null));
})();
(statearr_87646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87648);

return statearr_87646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5994__auto__);
});})(c__5992__auto___87648,clicks_87647))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = (function (){var G__87657 = "theCanvas";
return goog.dom.getElement(G__87657);
})().getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$95,(event.clientX - rect.left),cljs.core.constant$keyword$96,(event.clientY - rect.top)], null));
});
var moves_87687 = cljstemplate.core.listen((function (){var G__87658 = "theCanvas";
return goog.dom.getElement(G__87658);
})(),"mousemove");
var c__5992__auto___87688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5992__auto___87688,moves_87687){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87688,moves_87687){
return (function (state_87671){
var state_val_87672 = (state_87671[(1)]);
if((state_val_87672 === (7))){
var inst_87662 = (state_87671[(2)]);
var inst_87663 = cljstemplate.core.handle_moves(inst_87662);
var state_87671__$1 = (function (){var statearr_87673 = state_87671;
(statearr_87673[(7)] = inst_87663);

return statearr_87673;
})();
var statearr_87674_87689 = state_87671__$1;
(statearr_87674_87689[(2)] = null);

(statearr_87674_87689[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87672 === (6))){
var inst_87667 = (state_87671[(2)]);
var state_87671__$1 = state_87671;
var statearr_87675_87690 = state_87671__$1;
(statearr_87675_87690[(2)] = inst_87667);

(statearr_87675_87690[(1)] = (3));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87672 === (5))){
var state_87671__$1 = state_87671;
var statearr_87676_87691 = state_87671__$1;
(statearr_87676_87691[(2)] = null);

(statearr_87676_87691[(1)] = (6));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87672 === (4))){
var state_87671__$1 = state_87671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87671__$1,(7),moves_87687);
} else {
if((state_val_87672 === (3))){
var inst_87669 = (state_87671[(2)]);
var state_87671__$1 = state_87671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87671__$1,inst_87669);
} else {
if((state_val_87672 === (2))){
var state_87671__$1 = state_87671;
var statearr_87677_87692 = state_87671__$1;
(statearr_87677_87692[(1)] = (4));



return cljs.core.constant$keyword$55;
} else {
if((state_val_87672 === (1))){
var state_87671__$1 = state_87671;
var statearr_87679_87693 = state_87671__$1;
(statearr_87679_87693[(2)] = null);

(statearr_87679_87693[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5992__auto___87688,moves_87687))
;
return ((function (switch__5977__auto__,c__5992__auto___87688,moves_87687){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87683 = [null,null,null,null,null,null,null,null];
(statearr_87683[(0)] = state_machine__5978__auto__);

(statearr_87683[(1)] = (1));

return statearr_87683;
});
var state_machine__5978__auto____1 = (function (state_87671){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__(state_87671);
if(cljs.core.keyword_identical_QMARK_(result__5980__auto__,cljs.core.constant$keyword$55)){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87684){if((e87684 instanceof Object)){
var ex__5981__auto__ = e87684;
var statearr_87685_87694 = state_87671;
(statearr_87685_87694[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87671);

return cljs.core.constant$keyword$55;
} else {
throw e87684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5979__auto__,cljs.core.constant$keyword$55)){
var G__87695 = state_87671;
state_87671 = G__87695;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87671){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87688,moves_87687))
})();
var state__5994__auto__ = (function (){var statearr_87686 = (function (){return (f__5993__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5993__auto__.cljs$core$IFn$_invoke$arity$0() : f__5993__auto__.call(null));
})();
(statearr_87686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87688);

return statearr_87686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5994__auto__);
});})(c__5992__auto___87688,moves_87687))
);

var clicks_87726 = cljstemplate.core.listen((function (){var G__87696 = "nextButton";
return goog.dom.getElement(G__87696);
})(),"click");
var c__5992__auto___87727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5992__auto___87727,clicks_87726){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87727,clicks_87726){
return (function (state_87709){
var state_val_87710 = (state_87709[(1)]);
if((state_val_87710 === (7))){
var inst_87700 = (state_87709[(2)]);
var inst_87701 = (function (){var G__87711 = cljs.core.inc;
return (cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__87711) : cljstemplate.core.level_up.call(null,G__87711));
})();
var state_87709__$1 = (function (){var statearr_87712 = state_87709;
(statearr_87712[(7)] = inst_87700);

(statearr_87712[(8)] = inst_87701);

return statearr_87712;
})();
var statearr_87713_87728 = state_87709__$1;
(statearr_87713_87728[(2)] = null);

(statearr_87713_87728[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87710 === (6))){
var inst_87705 = (state_87709[(2)]);
var state_87709__$1 = state_87709;
var statearr_87714_87729 = state_87709__$1;
(statearr_87714_87729[(2)] = inst_87705);

(statearr_87714_87729[(1)] = (3));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87710 === (5))){
var state_87709__$1 = state_87709;
var statearr_87715_87730 = state_87709__$1;
(statearr_87715_87730[(2)] = null);

(statearr_87715_87730[(1)] = (6));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87710 === (4))){
var state_87709__$1 = state_87709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87709__$1,(7),clicks_87726);
} else {
if((state_val_87710 === (3))){
var inst_87707 = (state_87709[(2)]);
var state_87709__$1 = state_87709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87709__$1,inst_87707);
} else {
if((state_val_87710 === (2))){
var state_87709__$1 = state_87709;
var statearr_87716_87731 = state_87709__$1;
(statearr_87716_87731[(1)] = (4));



return cljs.core.constant$keyword$55;
} else {
if((state_val_87710 === (1))){
var state_87709__$1 = state_87709;
var statearr_87718_87732 = state_87709__$1;
(statearr_87718_87732[(2)] = null);

(statearr_87718_87732[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5992__auto___87727,clicks_87726))
;
return ((function (switch__5977__auto__,c__5992__auto___87727,clicks_87726){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87722 = [null,null,null,null,null,null,null,null,null];
(statearr_87722[(0)] = state_machine__5978__auto__);

(statearr_87722[(1)] = (1));

return statearr_87722;
});
var state_machine__5978__auto____1 = (function (state_87709){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__(state_87709);
if(cljs.core.keyword_identical_QMARK_(result__5980__auto__,cljs.core.constant$keyword$55)){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87723){if((e87723 instanceof Object)){
var ex__5981__auto__ = e87723;
var statearr_87724_87733 = state_87709;
(statearr_87724_87733[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87709);

return cljs.core.constant$keyword$55;
} else {
throw e87723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5979__auto__,cljs.core.constant$keyword$55)){
var G__87734 = state_87709;
state_87709 = G__87734;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87709){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87727,clicks_87726))
})();
var state__5994__auto__ = (function (){var statearr_87725 = (function (){return (f__5993__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5993__auto__.cljs$core$IFn$_invoke$arity$0() : f__5993__auto__.call(null));
})();
(statearr_87725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87727);

return statearr_87725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5994__auto__);
});})(c__5992__auto___87727,clicks_87726))
);

cljstemplate.core.done_fn = (function done_fn(msg){
(function (){var G__87736 = "nextButton";
return goog.dom.getElement(G__87736);
})().style.visibility = "visible";

return cljstemplate.core.handle_msg(msg);
});
cljstemplate.core.this_level_id = (function (){var G__87737 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87737) : cljs.core.atom.call(null,G__87737));
})();
cljstemplate.core.this_level = (function (){var G__87738 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87738) : cljs.core.atom.call(null,G__87738));
})();
cljstemplate.core.level_checked = (function (){var G__87739 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87739) : cljs.core.atom.call(null,G__87739));
})();
cljstemplate.core.shuffles_so_far = (function (){var G__87740 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87740) : cljs.core.atom.call(null,G__87740));
})();
cljstemplate.core.done = (function (){var G__87741 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__87741) : cljs.core.atom.call(null,G__87741));
})();
cljstemplate.core.reset_canvas = (function reset_canvas(){
var width = window.innerWidth;
var height = window.innerHeight;
var c = (function (){var G__87743 = "theCanvas";
return goog.dom.getElement(G__87743);
})();
c.width = width;

c.height = height;

c.style.width = width;

c.style.height = height;

cljstemplate.core.canvas = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.getContext("2d"),width,height], null);
});
cljstemplate.core.reset_canvas();
var resizes_87772 = cljstemplate.core.listen(window,"resize");
var c__5992__auto___87773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5992__auto___87773,resizes_87772){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87773,resizes_87772){
return (function (state_87756){
var state_val_87757 = (state_87756[(1)]);
if((state_val_87757 === (7))){
var inst_87747 = (state_87756[(2)]);
var inst_87748 = cljstemplate.core.reset_canvas();
var state_87756__$1 = (function (){var statearr_87758 = state_87756;
(statearr_87758[(7)] = inst_87748);

(statearr_87758[(8)] = inst_87747);

return statearr_87758;
})();
var statearr_87759_87774 = state_87756__$1;
(statearr_87759_87774[(2)] = null);

(statearr_87759_87774[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87757 === (6))){
var inst_87752 = (state_87756[(2)]);
var state_87756__$1 = state_87756;
var statearr_87760_87775 = state_87756__$1;
(statearr_87760_87775[(2)] = inst_87752);

(statearr_87760_87775[(1)] = (3));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87757 === (5))){
var state_87756__$1 = state_87756;
var statearr_87761_87776 = state_87756__$1;
(statearr_87761_87776[(2)] = null);

(statearr_87761_87776[(1)] = (6));


return cljs.core.constant$keyword$55;
} else {
if((state_val_87757 === (4))){
var state_87756__$1 = state_87756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87756__$1,(7),resizes_87772);
} else {
if((state_val_87757 === (3))){
var inst_87754 = (state_87756[(2)]);
var state_87756__$1 = state_87756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87756__$1,inst_87754);
} else {
if((state_val_87757 === (2))){
var state_87756__$1 = state_87756;
var statearr_87762_87777 = state_87756__$1;
(statearr_87762_87777[(1)] = (4));



return cljs.core.constant$keyword$55;
} else {
if((state_val_87757 === (1))){
var state_87756__$1 = state_87756;
var statearr_87764_87778 = state_87756__$1;
(statearr_87764_87778[(2)] = null);

(statearr_87764_87778[(1)] = (2));


return cljs.core.constant$keyword$55;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5992__auto___87773,resizes_87772))
;
return ((function (switch__5977__auto__,c__5992__auto___87773,resizes_87772){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87768 = [null,null,null,null,null,null,null,null,null];
(statearr_87768[(0)] = state_machine__5978__auto__);

(statearr_87768[(1)] = (1));

return statearr_87768;
});
var state_machine__5978__auto____1 = (function (state_87756){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__(state_87756);
if(cljs.core.keyword_identical_QMARK_(result__5980__auto__,cljs.core.constant$keyword$55)){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87769){if((e87769 instanceof Object)){
var ex__5981__auto__ = e87769;
var statearr_87770_87779 = state_87756;
(statearr_87770_87779[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87756);

return cljs.core.constant$keyword$55;
} else {
throw e87769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5979__auto__,cljs.core.constant$keyword$55)){
var G__87780 = state_87756;
state_87756 = G__87780;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87756){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87773,resizes_87772))
})();
var state__5994__auto__ = (function (){var statearr_87771 = (function (){return (f__5993__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5993__auto__.cljs$core$IFn$_invoke$arity$0() : f__5993__auto__.call(null));
})();
(statearr_87771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87773);

return statearr_87771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5994__auto__);
});})(c__5992__auto___87773,resizes_87772))
);

cljstemplate.core.fill_rect = (function fill_rect(p__87781,p__87782,p__87783){
var vec__87787 = p__87781;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87787,(0),null);
var vec__87788 = p__87782;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87788,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87788,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87788,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87788,(3),null);
var vec__87789 = p__87783;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87789,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87789,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87789,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__87790,color){
var vec__87792 = p__87790;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87792,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87792,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87792,(2),null);
return cljstemplate.core.fill_rect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear(cljstemplate.core.canvas,cljs.core.first(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((function (){var G__87822 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87822) : cljs.core.deref.call(null,G__87822));
})())));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.do_rotations,timestamp));

var map__87823_87850 = (function (){var G__87824 = cljstemplate.core.pointer_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87824) : cljs.core.deref.call(null,G__87824));
})();
var map__87823_87851__$1 = ((cljs.core.seq_QMARK_(map__87823_87850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87823_87850):map__87823_87850);
var x_87852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87823_87851__$1,cljs.core.constant$keyword$95);
var y_87853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87823_87851__$1,cljs.core.constant$keyword$96);
var clicked_87854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87823_87851__$1,cljs.core.constant$keyword$97);
var was_done_87855 = (function (){var G__87825 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87825) : cljs.core.deref.call(null,G__87825));
})();
var canvas_87856 = (cljs.core.truth_((function (){var G__87826 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87826) : cljs.core.deref.call(null,G__87826));
})())?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,((function (map__87823_87850,map__87823_87851__$1,x_87852,y_87853,clicked_87854,was_done_87855,canvas_87856){
return (function (p1__87793_SHARP_){
return cljstemplate.shape.render(canvas_87856,p1__87793_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_87852,y_87853,clicked_87854,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__87823_87850,map__87823_87851__$1,x_87852,y_87853,clicked_87854,was_done_87855,canvas_87856))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__87828 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87828) : cljs.core.deref.call(null,G__87828));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__87830 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87830) : cljs.core.deref.call(null,G__87830));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_87855;
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__87832 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87832) : cljs.core.deref.call(null,G__87832));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__87834 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87834) : cljs.core.deref.call(null,G__87834));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return cljs.core.not(was_done_87855);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
cljstemplate.core.done_fn(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1((function (){var G__87835 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87835) : cljs.core.deref.call(null,G__87835));
})()));
} else {
if((cljs.core.not((function (){var G__87838 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87838) : cljs.core.deref.call(null,G__87838));
})())) && (cljs.core.not((function (){var G__87839 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87839) : cljs.core.deref.call(null,G__87839));
})()))){
var G__87840_87857 = cljstemplate.core.level_checked;
var G__87841_87858 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87840_87857,G__87841_87858) : cljs.core.reset_BANG_.call(null,G__87840_87857,G__87841_87858));
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.not((function (){var G__87844 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87844) : cljs.core.deref.call(null,G__87844));
})());
if(and__3799__auto__){
var G__87845 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87845) : cljs.core.deref.call(null,G__87845));
} else {
return and__3799__auto__;
}
})())){
if(((3) < cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.shuffles_so_far,cljs.core.inc))){
var G__87846_87859 = cljs.core.identity;
(cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__87846_87859) : cljstemplate.core.level_up.call(null,G__87846_87859));
} else {
var G__87847_87860 = "Shuffling";
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__87847_87860) : cljstemplate.core.log.call(null,G__87847_87860));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.levels.shuffle_shapes);

var G__87848_87861 = cljstemplate.core.done;
var G__87849_87862 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87848_87861,G__87849_87862) : cljs.core.reset_BANG_.call(null,G__87848_87861,G__87849_87862));
}
} else {

}
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljstemplate.core.pointer_state,cljs.core.dissoc,cljs.core.constant$keyword$97);
});
cljstemplate.core.animate = (function animate(timestamp){
cljstemplate.core.per_frame_processing(timestamp);

return window.requestAnimationFrame(animate);
});
cljstemplate.core.level_up = (function level_up(level_fn){
(function (){var G__87878 = "nextButton";
return goog.dom.getElement(G__87878);
})().style.visibility = "hidden";

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level_id,level_fn);

var G__87879_87893 = [cljs.core.str("Loading level "),cljs.core.str((function (){var G__87880 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87880) : cljs.core.deref.call(null,G__87880));
})())].join('');
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__87879_87893) : cljstemplate.core.log.call(null,G__87879_87893));

var G__87881_87894 = cljstemplate.core.this_level;
var G__87882_87895 = cljstemplate.levels.get_level((function (){var G__87883 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87883) : cljs.core.deref.call(null,G__87883));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87881_87894,G__87882_87895) : cljs.core.reset_BANG_.call(null,G__87881_87894,G__87882_87895));

var G__87884_87896 = cljstemplate.core.level_checked;
var G__87885_87897 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87884_87896,G__87885_87897) : cljs.core.reset_BANG_.call(null,G__87884_87896,G__87885_87897));

var G__87886_87898 = cljstemplate.core.done;
var G__87887_87899 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87886_87898,G__87887_87899) : cljs.core.reset_BANG_.call(null,G__87886_87898,G__87887_87899));

var G__87888_87900 = cljstemplate.core.shuffles_so_far;
var G__87889_87901 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__87888_87900,G__87889_87901) : cljs.core.reset_BANG_.call(null,G__87888_87900,G__87889_87901));

(function (){var G__87890 = "levelCounter";
return goog.dom.getElement(G__87890);
})().innerHTML = [cljs.core.str(((function (){var G__87891 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87891) : cljs.core.deref.call(null,G__87891));
})() + (1)))].join('');

return cljstemplate.core.handle_msg(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1((function (){var G__87892 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__87892) : cljs.core.deref.call(null,G__87892));
})()));
});
cljstemplate.core.begin = (function begin(){
cljstemplate.core.level_up((function (x){
return (0);
}));

return window.requestAnimationFrame(cljstemplate.core.animate);
});
cljstemplate.core.begin();
