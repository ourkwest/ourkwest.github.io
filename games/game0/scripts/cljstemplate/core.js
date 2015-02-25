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
var clicks_6596 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousedown");
var c__5992__auto___6597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___6597,clicks_6596){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___6597,clicks_6596){
return (function (state_6580){
var state_val_6581 = (state_6580[(1)]);
if((state_val_6581 === (7))){
var inst_6571 = (state_6580[(2)]);
var inst_6572 = cljstemplate.core.handle_click.call(null,inst_6571);
var state_6580__$1 = (function (){var statearr_6582 = state_6580;
(statearr_6582[(7)] = inst_6572);

return statearr_6582;
})();
var statearr_6583_6598 = state_6580__$1;
(statearr_6583_6598[(2)] = null);

(statearr_6583_6598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6581 === (6))){
var inst_6576 = (state_6580[(2)]);
var state_6580__$1 = state_6580;
var statearr_6584_6599 = state_6580__$1;
(statearr_6584_6599[(2)] = inst_6576);

(statearr_6584_6599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6581 === (5))){
var state_6580__$1 = state_6580;
var statearr_6585_6600 = state_6580__$1;
(statearr_6585_6600[(2)] = null);

(statearr_6585_6600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6581 === (4))){
var state_6580__$1 = state_6580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6580__$1,(7),clicks_6596);
} else {
if((state_val_6581 === (3))){
var inst_6578 = (state_6580[(2)]);
var state_6580__$1 = state_6580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6580__$1,inst_6578);
} else {
if((state_val_6581 === (2))){
var state_6580__$1 = state_6580;
var statearr_6586_6601 = state_6580__$1;
(statearr_6586_6601[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6581 === (1))){
var state_6580__$1 = state_6580;
var statearr_6588_6602 = state_6580__$1;
(statearr_6588_6602[(2)] = null);

(statearr_6588_6602[(1)] = (2));


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
});})(c__5992__auto___6597,clicks_6596))
;
return ((function (switch__5977__auto__,c__5992__auto___6597,clicks_6596){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_6592 = [null,null,null,null,null,null,null,null];
(statearr_6592[(0)] = state_machine__5978__auto__);

(statearr_6592[(1)] = (1));

return statearr_6592;
});
var state_machine__5978__auto____1 = (function (state_6580){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_6580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e6593){if((e6593 instanceof Object)){
var ex__5981__auto__ = e6593;
var statearr_6594_6603 = state_6580;
(statearr_6594_6603[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6604 = state_6580;
state_6580 = G__6604;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_6580){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_6580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___6597,clicks_6596))
})();
var state__5994__auto__ = (function (){var statearr_6595 = f__5993__auto__.call(null);
(statearr_6595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___6597);

return statearr_6595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___6597,clicks_6596))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null));
});
var moves_6633 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousemove");
var c__5992__auto___6634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___6634,moves_6633){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___6634,moves_6633){
return (function (state_6617){
var state_val_6618 = (state_6617[(1)]);
if((state_val_6618 === (7))){
var inst_6608 = (state_6617[(2)]);
var inst_6609 = cljstemplate.core.handle_moves.call(null,inst_6608);
var state_6617__$1 = (function (){var statearr_6619 = state_6617;
(statearr_6619[(7)] = inst_6609);

return statearr_6619;
})();
var statearr_6620_6635 = state_6617__$1;
(statearr_6620_6635[(2)] = null);

(statearr_6620_6635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6618 === (6))){
var inst_6613 = (state_6617[(2)]);
var state_6617__$1 = state_6617;
var statearr_6621_6636 = state_6617__$1;
(statearr_6621_6636[(2)] = inst_6613);

(statearr_6621_6636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6618 === (5))){
var state_6617__$1 = state_6617;
var statearr_6622_6637 = state_6617__$1;
(statearr_6622_6637[(2)] = null);

(statearr_6622_6637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6618 === (4))){
var state_6617__$1 = state_6617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6617__$1,(7),moves_6633);
} else {
if((state_val_6618 === (3))){
var inst_6615 = (state_6617[(2)]);
var state_6617__$1 = state_6617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6617__$1,inst_6615);
} else {
if((state_val_6618 === (2))){
var state_6617__$1 = state_6617;
var statearr_6623_6638 = state_6617__$1;
(statearr_6623_6638[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6618 === (1))){
var state_6617__$1 = state_6617;
var statearr_6625_6639 = state_6617__$1;
(statearr_6625_6639[(2)] = null);

(statearr_6625_6639[(1)] = (2));


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
});})(c__5992__auto___6634,moves_6633))
;
return ((function (switch__5977__auto__,c__5992__auto___6634,moves_6633){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_6629 = [null,null,null,null,null,null,null,null];
(statearr_6629[(0)] = state_machine__5978__auto__);

(statearr_6629[(1)] = (1));

return statearr_6629;
});
var state_machine__5978__auto____1 = (function (state_6617){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_6617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e6630){if((e6630 instanceof Object)){
var ex__5981__auto__ = e6630;
var statearr_6631_6640 = state_6617;
(statearr_6631_6640[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6641 = state_6617;
state_6617 = G__6641;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_6617){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_6617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___6634,moves_6633))
})();
var state__5994__auto__ = (function (){var statearr_6632 = f__5993__auto__.call(null);
(statearr_6632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___6634);

return statearr_6632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___6634,moves_6633))
);

var clicks_6670 = cljstemplate.core.listen.call(null,goog.dom.getElement("nextButton"),"click");
var c__5992__auto___6671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___6671,clicks_6670){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___6671,clicks_6670){
return (function (state_6654){
var state_val_6655 = (state_6654[(1)]);
if((state_val_6655 === (7))){
var inst_6645 = (state_6654[(2)]);
var inst_6646 = cljstemplate.core.level_up.call(null,cljs.core.inc);
var state_6654__$1 = (function (){var statearr_6656 = state_6654;
(statearr_6656[(7)] = inst_6646);

(statearr_6656[(8)] = inst_6645);

return statearr_6656;
})();
var statearr_6657_6672 = state_6654__$1;
(statearr_6657_6672[(2)] = null);

(statearr_6657_6672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6655 === (6))){
var inst_6650 = (state_6654[(2)]);
var state_6654__$1 = state_6654;
var statearr_6658_6673 = state_6654__$1;
(statearr_6658_6673[(2)] = inst_6650);

(statearr_6658_6673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6655 === (5))){
var state_6654__$1 = state_6654;
var statearr_6659_6674 = state_6654__$1;
(statearr_6659_6674[(2)] = null);

(statearr_6659_6674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6655 === (4))){
var state_6654__$1 = state_6654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6654__$1,(7),clicks_6670);
} else {
if((state_val_6655 === (3))){
var inst_6652 = (state_6654[(2)]);
var state_6654__$1 = state_6654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6654__$1,inst_6652);
} else {
if((state_val_6655 === (2))){
var state_6654__$1 = state_6654;
var statearr_6660_6675 = state_6654__$1;
(statearr_6660_6675[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6655 === (1))){
var state_6654__$1 = state_6654;
var statearr_6662_6676 = state_6654__$1;
(statearr_6662_6676[(2)] = null);

(statearr_6662_6676[(1)] = (2));


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
});})(c__5992__auto___6671,clicks_6670))
;
return ((function (switch__5977__auto__,c__5992__auto___6671,clicks_6670){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_6666 = [null,null,null,null,null,null,null,null,null];
(statearr_6666[(0)] = state_machine__5978__auto__);

(statearr_6666[(1)] = (1));

return statearr_6666;
});
var state_machine__5978__auto____1 = (function (state_6654){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_6654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e6667){if((e6667 instanceof Object)){
var ex__5981__auto__ = e6667;
var statearr_6668_6677 = state_6654;
(statearr_6668_6677[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6678 = state_6654;
state_6654 = G__6678;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_6654){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_6654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___6671,clicks_6670))
})();
var state__5994__auto__ = (function (){var statearr_6669 = f__5993__auto__.call(null);
(statearr_6669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___6671);

return statearr_6669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___6671,clicks_6670))
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
var resizes_6707 = cljstemplate.core.listen.call(null,window,"resize");
var c__5992__auto___6708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___6708,resizes_6707){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___6708,resizes_6707){
return (function (state_6691){
var state_val_6692 = (state_6691[(1)]);
if((state_val_6692 === (7))){
var inst_6682 = (state_6691[(2)]);
var inst_6683 = cljstemplate.core.reset_canvas.call(null);
var state_6691__$1 = (function (){var statearr_6693 = state_6691;
(statearr_6693[(7)] = inst_6682);

(statearr_6693[(8)] = inst_6683);

return statearr_6693;
})();
var statearr_6694_6709 = state_6691__$1;
(statearr_6694_6709[(2)] = null);

(statearr_6694_6709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6692 === (6))){
var inst_6687 = (state_6691[(2)]);
var state_6691__$1 = state_6691;
var statearr_6695_6710 = state_6691__$1;
(statearr_6695_6710[(2)] = inst_6687);

(statearr_6695_6710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6692 === (5))){
var state_6691__$1 = state_6691;
var statearr_6696_6711 = state_6691__$1;
(statearr_6696_6711[(2)] = null);

(statearr_6696_6711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6692 === (4))){
var state_6691__$1 = state_6691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6691__$1,(7),resizes_6707);
} else {
if((state_val_6692 === (3))){
var inst_6689 = (state_6691[(2)]);
var state_6691__$1 = state_6691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6691__$1,inst_6689);
} else {
if((state_val_6692 === (2))){
var state_6691__$1 = state_6691;
var statearr_6697_6712 = state_6691__$1;
(statearr_6697_6712[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6692 === (1))){
var state_6691__$1 = state_6691;
var statearr_6699_6713 = state_6691__$1;
(statearr_6699_6713[(2)] = null);

(statearr_6699_6713[(1)] = (2));


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
});})(c__5992__auto___6708,resizes_6707))
;
return ((function (switch__5977__auto__,c__5992__auto___6708,resizes_6707){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_6703 = [null,null,null,null,null,null,null,null,null];
(statearr_6703[(0)] = state_machine__5978__auto__);

(statearr_6703[(1)] = (1));

return statearr_6703;
});
var state_machine__5978__auto____1 = (function (state_6691){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_6691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e6704){if((e6704 instanceof Object)){
var ex__5981__auto__ = e6704;
var statearr_6705_6714 = state_6691;
(statearr_6705_6714[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6715 = state_6691;
state_6691 = G__6715;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_6691){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_6691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___6708,resizes_6707))
})();
var state__5994__auto__ = (function (){var statearr_6706 = f__5993__auto__.call(null);
(statearr_6706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___6708);

return statearr_6706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___6708,resizes_6707))
);

cljstemplate.core.fill_rect = (function fill_rect(p__6716,p__6717,p__6718){
var vec__6722 = p__6716;
var surface = cljs.core.nth.call(null,vec__6722,(0),null);
var vec__6723 = p__6717;
var x = cljs.core.nth.call(null,vec__6723,(0),null);
var y = cljs.core.nth.call(null,vec__6723,(1),null);
var width = cljs.core.nth.call(null,vec__6723,(2),null);
var height = cljs.core.nth.call(null,vec__6723,(3),null);
var vec__6724 = p__6718;
var r = cljs.core.nth.call(null,vec__6724,(0),null);
var g = cljs.core.nth.call(null,vec__6724,(1),null);
var b = cljs.core.nth.call(null,vec__6724,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__6725,color){
var vec__6727 = p__6725;
var surface = cljs.core.nth.call(null,vec__6727,(0),null);
var w = cljs.core.nth.call(null,vec__6727,(1),null);
var h = cljs.core.nth.call(null,vec__6727,(2),null);
return cljstemplate.core.fill_rect.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear.call(null,cljstemplate.core.canvas,cljs.core.first.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level))));

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljs.core.partial.call(null,cljstemplate.shape.do_rotations,timestamp));

var map__6730_6731 = cljs.core.deref.call(null,cljstemplate.core.pointer_state);
var map__6730_6732__$1 = ((cljs.core.seq_QMARK_.call(null,map__6730_6731))?cljs.core.apply.call(null,cljs.core.hash_map,map__6730_6731):map__6730_6731);
var x_6733 = cljs.core.get.call(null,map__6730_6732__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_6734 = cljs.core.get.call(null,map__6730_6732__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_6735 = cljs.core.get.call(null,map__6730_6732__$1,new cljs.core.Keyword(null,"clicked","clicked",114423720));
var was_done_6736 = cljs.core.deref.call(null,cljstemplate.core.done);
var canvas_6737 = (cljs.core.truth_(cljs.core.deref.call(null,cljstemplate.core.level_checked))?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,((function (map__6730_6731,map__6730_6732__$1,x_6733,y_6734,clicked_6735,was_done_6736,canvas_6737){
return (function (p1__6728_SHARP_){
return cljstemplate.shape.render.call(null,canvas_6737,p1__6728_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6733,y_6734,clicked_6735,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__6730_6731,map__6730_6732__$1,x_6733,y_6734,clicked_6735,was_done_6736,canvas_6737))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_6736;
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
return cljs.core.not.call(null,was_done_6736);
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