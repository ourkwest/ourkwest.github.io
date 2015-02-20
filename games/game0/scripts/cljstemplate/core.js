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
cljstemplate.core.log = cljstemplate.logging.logger.call(null,new cljs.core.Keyword(null,"core","core",-86019209));
cljstemplate.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
cljstemplate.core.handle_msg = (function handle_msg(msg){
goog.dom.getElement("msgBus").style.transition = "bottom 0s";

goog.dom.getElement("msgBus").style.bottom = "100%";

goog.dom.getElement("msgBus").innerHTML = msg;

return window.setTimeout((function (){
goog.dom.getElement("msgBus").style.transition = "bottom 0.5s";

goog.dom.getElement("msgBus").style.transitionTimingFunction = "ease-out";

return goog.dom.getElement("msgBus").style.bottom = "10px";
}),(10));
});
cljstemplate.core.pointer_state = cljs.core.atom.call(null,null);
cljstemplate.core.handle_click = (function handle_click(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.reset_BANG_.call(null,cljstemplate.core.pointer_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top),new cljs.core.Keyword(null,"clicked","clicked",114423720),true], null));
});
var clicks_87446 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousedown");
var c__5992__auto___87447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___87447,clicks_87446){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87447,clicks_87446){
return (function (state_87430){
var state_val_87431 = (state_87430[(1)]);
if((state_val_87431 === (7))){
var inst_87421 = (state_87430[(2)]);
var inst_87422 = cljstemplate.core.handle_click.call(null,inst_87421);
var state_87430__$1 = (function (){var statearr_87432 = state_87430;
(statearr_87432[(7)] = inst_87422);

return statearr_87432;
})();
var statearr_87433_87448 = state_87430__$1;
(statearr_87433_87448[(2)] = null);

(statearr_87433_87448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87431 === (6))){
var inst_87426 = (state_87430[(2)]);
var state_87430__$1 = state_87430;
var statearr_87434_87449 = state_87430__$1;
(statearr_87434_87449[(2)] = inst_87426);

(statearr_87434_87449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87431 === (5))){
var state_87430__$1 = state_87430;
var statearr_87435_87450 = state_87430__$1;
(statearr_87435_87450[(2)] = null);

(statearr_87435_87450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87431 === (4))){
var state_87430__$1 = state_87430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87430__$1,(7),clicks_87446);
} else {
if((state_val_87431 === (3))){
var inst_87428 = (state_87430[(2)]);
var state_87430__$1 = state_87430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87430__$1,inst_87428);
} else {
if((state_val_87431 === (2))){
var state_87430__$1 = state_87430;
var statearr_87436_87451 = state_87430__$1;
(statearr_87436_87451[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87431 === (1))){
var state_87430__$1 = state_87430;
var statearr_87438_87452 = state_87430__$1;
(statearr_87438_87452[(2)] = null);

(statearr_87438_87452[(1)] = (2));


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
});})(c__5992__auto___87447,clicks_87446))
;
return ((function (switch__5977__auto__,c__5992__auto___87447,clicks_87446){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87442 = [null,null,null,null,null,null,null,null];
(statearr_87442[(0)] = state_machine__5978__auto__);

(statearr_87442[(1)] = (1));

return statearr_87442;
});
var state_machine__5978__auto____1 = (function (state_87430){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_87430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87443){if((e87443 instanceof Object)){
var ex__5981__auto__ = e87443;
var statearr_87444_87453 = state_87430;
(statearr_87444_87453[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87454 = state_87430;
state_87430 = G__87454;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87430){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87447,clicks_87446))
})();
var state__5994__auto__ = (function (){var statearr_87445 = f__5993__auto__.call(null);
(statearr_87445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87447);

return statearr_87445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___87447,clicks_87446))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null));
});
var moves_87483 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousemove");
var c__5992__auto___87484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___87484,moves_87483){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87484,moves_87483){
return (function (state_87467){
var state_val_87468 = (state_87467[(1)]);
if((state_val_87468 === (7))){
var inst_87458 = (state_87467[(2)]);
var inst_87459 = cljstemplate.core.handle_moves.call(null,inst_87458);
var state_87467__$1 = (function (){var statearr_87469 = state_87467;
(statearr_87469[(7)] = inst_87459);

return statearr_87469;
})();
var statearr_87470_87485 = state_87467__$1;
(statearr_87470_87485[(2)] = null);

(statearr_87470_87485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87468 === (6))){
var inst_87463 = (state_87467[(2)]);
var state_87467__$1 = state_87467;
var statearr_87471_87486 = state_87467__$1;
(statearr_87471_87486[(2)] = inst_87463);

(statearr_87471_87486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87468 === (5))){
var state_87467__$1 = state_87467;
var statearr_87472_87487 = state_87467__$1;
(statearr_87472_87487[(2)] = null);

(statearr_87472_87487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87468 === (4))){
var state_87467__$1 = state_87467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87467__$1,(7),moves_87483);
} else {
if((state_val_87468 === (3))){
var inst_87465 = (state_87467[(2)]);
var state_87467__$1 = state_87467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87467__$1,inst_87465);
} else {
if((state_val_87468 === (2))){
var state_87467__$1 = state_87467;
var statearr_87473_87488 = state_87467__$1;
(statearr_87473_87488[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87468 === (1))){
var state_87467__$1 = state_87467;
var statearr_87475_87489 = state_87467__$1;
(statearr_87475_87489[(2)] = null);

(statearr_87475_87489[(1)] = (2));


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
});})(c__5992__auto___87484,moves_87483))
;
return ((function (switch__5977__auto__,c__5992__auto___87484,moves_87483){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87479 = [null,null,null,null,null,null,null,null];
(statearr_87479[(0)] = state_machine__5978__auto__);

(statearr_87479[(1)] = (1));

return statearr_87479;
});
var state_machine__5978__auto____1 = (function (state_87467){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_87467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87480){if((e87480 instanceof Object)){
var ex__5981__auto__ = e87480;
var statearr_87481_87490 = state_87467;
(statearr_87481_87490[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87491 = state_87467;
state_87467 = G__87491;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87467){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87484,moves_87483))
})();
var state__5994__auto__ = (function (){var statearr_87482 = f__5993__auto__.call(null);
(statearr_87482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87484);

return statearr_87482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___87484,moves_87483))
);

var clicks_87520 = cljstemplate.core.listen.call(null,goog.dom.getElement("nextButton"),"click");
var c__5992__auto___87521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___87521,clicks_87520){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87521,clicks_87520){
return (function (state_87504){
var state_val_87505 = (state_87504[(1)]);
if((state_val_87505 === (7))){
var inst_87495 = (state_87504[(2)]);
var inst_87496 = cljstemplate.core.level_up.call(null,cljs.core.inc);
var state_87504__$1 = (function (){var statearr_87506 = state_87504;
(statearr_87506[(7)] = inst_87495);

(statearr_87506[(8)] = inst_87496);

return statearr_87506;
})();
var statearr_87507_87522 = state_87504__$1;
(statearr_87507_87522[(2)] = null);

(statearr_87507_87522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87505 === (6))){
var inst_87500 = (state_87504[(2)]);
var state_87504__$1 = state_87504;
var statearr_87508_87523 = state_87504__$1;
(statearr_87508_87523[(2)] = inst_87500);

(statearr_87508_87523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87505 === (5))){
var state_87504__$1 = state_87504;
var statearr_87509_87524 = state_87504__$1;
(statearr_87509_87524[(2)] = null);

(statearr_87509_87524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87505 === (4))){
var state_87504__$1 = state_87504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87504__$1,(7),clicks_87520);
} else {
if((state_val_87505 === (3))){
var inst_87502 = (state_87504[(2)]);
var state_87504__$1 = state_87504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87504__$1,inst_87502);
} else {
if((state_val_87505 === (2))){
var state_87504__$1 = state_87504;
var statearr_87510_87525 = state_87504__$1;
(statearr_87510_87525[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87505 === (1))){
var state_87504__$1 = state_87504;
var statearr_87512_87526 = state_87504__$1;
(statearr_87512_87526[(2)] = null);

(statearr_87512_87526[(1)] = (2));


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
});})(c__5992__auto___87521,clicks_87520))
;
return ((function (switch__5977__auto__,c__5992__auto___87521,clicks_87520){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87516 = [null,null,null,null,null,null,null,null,null];
(statearr_87516[(0)] = state_machine__5978__auto__);

(statearr_87516[(1)] = (1));

return statearr_87516;
});
var state_machine__5978__auto____1 = (function (state_87504){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_87504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87517){if((e87517 instanceof Object)){
var ex__5981__auto__ = e87517;
var statearr_87518_87527 = state_87504;
(statearr_87518_87527[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87528 = state_87504;
state_87504 = G__87528;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87504){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87521,clicks_87520))
})();
var state__5994__auto__ = (function (){var statearr_87519 = f__5993__auto__.call(null);
(statearr_87519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87521);

return statearr_87519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___87521,clicks_87520))
);

cljstemplate.core.done_fn = (function done_fn(msg){
goog.dom.getElement("nextButton").style.visibility = "visible";

return cljstemplate.core.handle_msg.call(null,msg);
});
cljstemplate.core.this_level_id = cljs.core.atom.call(null,(0));
cljstemplate.core.this_level = cljs.core.atom.call(null,null);
cljstemplate.core.level_checked = cljs.core.atom.call(null,false);
cljstemplate.core.shuffles_so_far = cljs.core.atom.call(null,(0));
cljstemplate.core.done = cljs.core.atom.call(null,false);
cljstemplate.core.reset_canvas = (function reset_canvas(){
var width = window.innerWidth;
var height = window.innerHeight;
var c = goog.dom.getElement("theCanvas");
c.width = width;

c.height = height;

c.style.width = width;

c.style.height = height;

cljstemplate.core.canvas = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.getContext("2d"),width,height], null);
});
cljstemplate.core.reset_canvas.call(null);
var resizes_87557 = cljstemplate.core.listen.call(null,window,"resize");
var c__5992__auto___87558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___87558,resizes_87557){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___87558,resizes_87557){
return (function (state_87541){
var state_val_87542 = (state_87541[(1)]);
if((state_val_87542 === (7))){
var inst_87532 = (state_87541[(2)]);
var inst_87533 = cljstemplate.core.reset_canvas.call(null);
var state_87541__$1 = (function (){var statearr_87543 = state_87541;
(statearr_87543[(7)] = inst_87532);

(statearr_87543[(8)] = inst_87533);

return statearr_87543;
})();
var statearr_87544_87559 = state_87541__$1;
(statearr_87544_87559[(2)] = null);

(statearr_87544_87559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87542 === (6))){
var inst_87537 = (state_87541[(2)]);
var state_87541__$1 = state_87541;
var statearr_87545_87560 = state_87541__$1;
(statearr_87545_87560[(2)] = inst_87537);

(statearr_87545_87560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87542 === (5))){
var state_87541__$1 = state_87541;
var statearr_87546_87561 = state_87541__$1;
(statearr_87546_87561[(2)] = null);

(statearr_87546_87561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87542 === (4))){
var state_87541__$1 = state_87541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87541__$1,(7),resizes_87557);
} else {
if((state_val_87542 === (3))){
var inst_87539 = (state_87541[(2)]);
var state_87541__$1 = state_87541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87541__$1,inst_87539);
} else {
if((state_val_87542 === (2))){
var state_87541__$1 = state_87541;
var statearr_87547_87562 = state_87541__$1;
(statearr_87547_87562[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87542 === (1))){
var state_87541__$1 = state_87541;
var statearr_87549_87563 = state_87541__$1;
(statearr_87549_87563[(2)] = null);

(statearr_87549_87563[(1)] = (2));


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
});})(c__5992__auto___87558,resizes_87557))
;
return ((function (switch__5977__auto__,c__5992__auto___87558,resizes_87557){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_87553 = [null,null,null,null,null,null,null,null,null];
(statearr_87553[(0)] = state_machine__5978__auto__);

(statearr_87553[(1)] = (1));

return statearr_87553;
});
var state_machine__5978__auto____1 = (function (state_87541){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_87541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e87554){if((e87554 instanceof Object)){
var ex__5981__auto__ = e87554;
var statearr_87555_87564 = state_87541;
(statearr_87555_87564[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87565 = state_87541;
state_87541 = G__87565;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_87541){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_87541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___87558,resizes_87557))
})();
var state__5994__auto__ = (function (){var statearr_87556 = f__5993__auto__.call(null);
(statearr_87556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___87558);

return statearr_87556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___87558,resizes_87557))
);

cljstemplate.core.fill_rect = (function fill_rect(p__87566,p__87567,p__87568){
var vec__87572 = p__87566;
var surface = cljs.core.nth.call(null,vec__87572,(0),null);
var vec__87573 = p__87567;
var x = cljs.core.nth.call(null,vec__87573,(0),null);
var y = cljs.core.nth.call(null,vec__87573,(1),null);
var width = cljs.core.nth.call(null,vec__87573,(2),null);
var height = cljs.core.nth.call(null,vec__87573,(3),null);
var vec__87574 = p__87568;
var r = cljs.core.nth.call(null,vec__87574,(0),null);
var g = cljs.core.nth.call(null,vec__87574,(1),null);
var b = cljs.core.nth.call(null,vec__87574,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__87575,color){
var vec__87577 = p__87575;
var surface = cljs.core.nth.call(null,vec__87577,(0),null);
var w = cljs.core.nth.call(null,vec__87577,(1),null);
var h = cljs.core.nth.call(null,vec__87577,(2),null);
return cljstemplate.core.fill_rect.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear.call(null,cljstemplate.core.canvas,cljs.core.first.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level))));

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljs.core.partial.call(null,cljstemplate.shape.do_rotations,timestamp));

var map__87580_87581 = cljs.core.deref.call(null,cljstemplate.core.pointer_state);
var map__87580_87582__$1 = ((cljs.core.seq_QMARK_.call(null,map__87580_87581))?cljs.core.apply.call(null,cljs.core.hash_map,map__87580_87581):map__87580_87581);
var x_87583 = cljs.core.get.call(null,map__87580_87582__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_87584 = cljs.core.get.call(null,map__87580_87582__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_87585 = cljs.core.get.call(null,map__87580_87582__$1,new cljs.core.Keyword(null,"clicked","clicked",114423720));
var was_done_87586 = cljs.core.deref.call(null,cljstemplate.core.done);
var canvas_87587 = (cljs.core.truth_(cljs.core.deref.call(null,cljstemplate.core.level_checked))?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,((function (map__87580_87581,map__87580_87582__$1,x_87583,y_87584,clicked_87585,was_done_87586,canvas_87587){
return (function (p1__87578_SHARP_){
return cljstemplate.shape.render.call(null,canvas_87587,p1__87578_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_87583,y_87584,clicked_87585,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__87580_87581,map__87580_87582__$1,x_87583,y_87584,clicked_87585,was_done_87586,canvas_87587))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_87586;
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return cljs.core.not.call(null,was_done_87586);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
cljstemplate.core.done_fn.call(null,new cljs.core.Keyword(null,"end-msg","end-msg",-2016422505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level)));
} else {
if((cljs.core.not.call(null,cljs.core.deref.call(null,cljstemplate.core.level_checked))) && (cljs.core.not.call(null,cljs.core.deref.call(null,cljstemplate.core.done)))){
cljs.core.reset_BANG_.call(null,cljstemplate.core.level_checked,true);
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,cljstemplate.core.level_checked));
if(and__3799__auto__){
return cljs.core.deref.call(null,cljstemplate.core.done);
} else {
return and__3799__auto__;
}
})())){
if(((3) < cljs.core.swap_BANG_.call(null,cljstemplate.core.shuffles_so_far,cljs.core.inc))){
cljstemplate.core.level_up.call(null,cljs.core.identity);
} else {
cljstemplate.core.log.call(null,"Shuffling");

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.levels.shuffle_shapes);

cljs.core.reset_BANG_.call(null,cljstemplate.core.done,false);
}
} else {

}
}
}
}

return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.dissoc,new cljs.core.Keyword(null,"clicked","clicked",114423720));
});
cljstemplate.core.animate = (function animate(timestamp){
cljstemplate.core.per_frame_processing.call(null,timestamp);

return window.requestAnimationFrame(animate);
});
cljstemplate.core.level_up = (function level_up(level_fn){
goog.dom.getElement("nextButton").style.visibility = "hidden";

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level_id,level_fn);

cljstemplate.core.log.call(null,[cljs.core.str("Loading level "),cljs.core.str(cljs.core.deref.call(null,cljstemplate.core.this_level_id))].join(''));

cljs.core.reset_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.levels.get_level.call(null,cljs.core.deref.call(null,cljstemplate.core.this_level_id)));

cljs.core.reset_BANG_.call(null,cljstemplate.core.level_checked,false);

cljs.core.reset_BANG_.call(null,cljstemplate.core.done,false);

cljs.core.reset_BANG_.call(null,cljstemplate.core.shuffles_so_far,(0));

goog.dom.getElement("levelCounter").innerHTML = [cljs.core.str((cljs.core.deref.call(null,cljstemplate.core.this_level_id) + (1)))].join('');

return cljstemplate.core.handle_msg.call(null,new cljs.core.Keyword(null,"start-msg","start-msg",-815546523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level)));
});
cljstemplate.core.begin = (function begin(){
cljstemplate.core.level_up.call(null,(function (x){
return (0);
}));

return window.requestAnimationFrame(cljstemplate.core.animate);
});
cljstemplate.core.begin.call(null);

//# sourceMappingURL=core.js.map