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
return goog.dom.getElement("msgBus").innerHTML = msg;
});
cljstemplate.core.pointer_state = cljs.core.atom.call(null,null);
cljstemplate.core.handle_click = (function handle_click(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.reset_BANG_.call(null,cljstemplate.core.pointer_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top),new cljs.core.Keyword(null,"clicked","clicked",114423720),true], null));
});
var clicks_38654 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousedown");
var c__6541__auto___38655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___38655,clicks_38654){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38655,clicks_38654){
return (function (state_38638){
var state_val_38639 = (state_38638[(1)]);
if((state_val_38639 === (7))){
var inst_38629 = (state_38638[(2)]);
var inst_38630 = cljstemplate.core.handle_click.call(null,inst_38629);
var state_38638__$1 = (function (){var statearr_38640 = state_38638;
(statearr_38640[(7)] = inst_38630);

return statearr_38640;
})();
var statearr_38641_38656 = state_38638__$1;
(statearr_38641_38656[(2)] = null);

(statearr_38641_38656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (6))){
var inst_38634 = (state_38638[(2)]);
var state_38638__$1 = state_38638;
var statearr_38642_38657 = state_38638__$1;
(statearr_38642_38657[(2)] = inst_38634);

(statearr_38642_38657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (5))){
var state_38638__$1 = state_38638;
var statearr_38643_38658 = state_38638__$1;
(statearr_38643_38658[(2)] = null);

(statearr_38643_38658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (4))){
var state_38638__$1 = state_38638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38638__$1,(7),clicks_38654);
} else {
if((state_val_38639 === (3))){
var inst_38636 = (state_38638[(2)]);
var state_38638__$1 = state_38638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38638__$1,inst_38636);
} else {
if((state_val_38639 === (2))){
var state_38638__$1 = state_38638;
var statearr_38644_38659 = state_38638__$1;
(statearr_38644_38659[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (1))){
var state_38638__$1 = state_38638;
var statearr_38646_38660 = state_38638__$1;
(statearr_38646_38660[(2)] = null);

(statearr_38646_38660[(1)] = (2));


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
});})(c__6541__auto___38655,clicks_38654))
;
return ((function (switch__6476__auto__,c__6541__auto___38655,clicks_38654){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38650 = [null,null,null,null,null,null,null,null];
(statearr_38650[(0)] = state_machine__6477__auto__);

(statearr_38650[(1)] = (1));

return statearr_38650;
});
var state_machine__6477__auto____1 = (function (state_38638){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_38638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38651){if((e38651 instanceof Object)){
var ex__6480__auto__ = e38651;
var statearr_38652_38661 = state_38638;
(statearr_38652_38661[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38662 = state_38638;
state_38638 = G__38662;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38638){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38655,clicks_38654))
})();
var state__6543__auto__ = (function (){var statearr_38653 = f__6542__auto__.call(null);
(statearr_38653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38655);

return statearr_38653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___38655,clicks_38654))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null));
});
var moves_38691 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousemove");
var c__6541__auto___38692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___38692,moves_38691){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38692,moves_38691){
return (function (state_38675){
var state_val_38676 = (state_38675[(1)]);
if((state_val_38676 === (7))){
var inst_38666 = (state_38675[(2)]);
var inst_38667 = cljstemplate.core.handle_moves.call(null,inst_38666);
var state_38675__$1 = (function (){var statearr_38677 = state_38675;
(statearr_38677[(7)] = inst_38667);

return statearr_38677;
})();
var statearr_38678_38693 = state_38675__$1;
(statearr_38678_38693[(2)] = null);

(statearr_38678_38693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (6))){
var inst_38671 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38679_38694 = state_38675__$1;
(statearr_38679_38694[(2)] = inst_38671);

(statearr_38679_38694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (5))){
var state_38675__$1 = state_38675;
var statearr_38680_38695 = state_38675__$1;
(statearr_38680_38695[(2)] = null);

(statearr_38680_38695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (4))){
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38675__$1,(7),moves_38691);
} else {
if((state_val_38676 === (3))){
var inst_38673 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38675__$1,inst_38673);
} else {
if((state_val_38676 === (2))){
var state_38675__$1 = state_38675;
var statearr_38681_38696 = state_38675__$1;
(statearr_38681_38696[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (1))){
var state_38675__$1 = state_38675;
var statearr_38683_38697 = state_38675__$1;
(statearr_38683_38697[(2)] = null);

(statearr_38683_38697[(1)] = (2));


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
});})(c__6541__auto___38692,moves_38691))
;
return ((function (switch__6476__auto__,c__6541__auto___38692,moves_38691){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38687 = [null,null,null,null,null,null,null,null];
(statearr_38687[(0)] = state_machine__6477__auto__);

(statearr_38687[(1)] = (1));

return statearr_38687;
});
var state_machine__6477__auto____1 = (function (state_38675){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_38675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38688){if((e38688 instanceof Object)){
var ex__6480__auto__ = e38688;
var statearr_38689_38698 = state_38675;
(statearr_38689_38698[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38699 = state_38675;
state_38675 = G__38699;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38675){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38692,moves_38691))
})();
var state__6543__auto__ = (function (){var statearr_38690 = f__6542__auto__.call(null);
(statearr_38690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38692);

return statearr_38690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___38692,moves_38691))
);

var clicks_38728 = cljstemplate.core.listen.call(null,goog.dom.getElement("nextButton"),"click");
var c__6541__auto___38729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___38729,clicks_38728){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38729,clicks_38728){
return (function (state_38712){
var state_val_38713 = (state_38712[(1)]);
if((state_val_38713 === (7))){
var inst_38703 = (state_38712[(2)]);
var inst_38704 = cljstemplate.core.level_up.call(null,cljs.core.inc);
var state_38712__$1 = (function (){var statearr_38714 = state_38712;
(statearr_38714[(7)] = inst_38703);

(statearr_38714[(8)] = inst_38704);

return statearr_38714;
})();
var statearr_38715_38730 = state_38712__$1;
(statearr_38715_38730[(2)] = null);

(statearr_38715_38730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (6))){
var inst_38708 = (state_38712[(2)]);
var state_38712__$1 = state_38712;
var statearr_38716_38731 = state_38712__$1;
(statearr_38716_38731[(2)] = inst_38708);

(statearr_38716_38731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (5))){
var state_38712__$1 = state_38712;
var statearr_38717_38732 = state_38712__$1;
(statearr_38717_38732[(2)] = null);

(statearr_38717_38732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (4))){
var state_38712__$1 = state_38712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38712__$1,(7),clicks_38728);
} else {
if((state_val_38713 === (3))){
var inst_38710 = (state_38712[(2)]);
var state_38712__$1 = state_38712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38712__$1,inst_38710);
} else {
if((state_val_38713 === (2))){
var state_38712__$1 = state_38712;
var statearr_38718_38733 = state_38712__$1;
(statearr_38718_38733[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (1))){
var state_38712__$1 = state_38712;
var statearr_38720_38734 = state_38712__$1;
(statearr_38720_38734[(2)] = null);

(statearr_38720_38734[(1)] = (2));


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
});})(c__6541__auto___38729,clicks_38728))
;
return ((function (switch__6476__auto__,c__6541__auto___38729,clicks_38728){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38724 = [null,null,null,null,null,null,null,null,null];
(statearr_38724[(0)] = state_machine__6477__auto__);

(statearr_38724[(1)] = (1));

return statearr_38724;
});
var state_machine__6477__auto____1 = (function (state_38712){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_38712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38725){if((e38725 instanceof Object)){
var ex__6480__auto__ = e38725;
var statearr_38726_38735 = state_38712;
(statearr_38726_38735[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38736 = state_38712;
state_38712 = G__38736;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38712){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38729,clicks_38728))
})();
var state__6543__auto__ = (function (){var statearr_38727 = f__6542__auto__.call(null);
(statearr_38727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38729);

return statearr_38727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___38729,clicks_38728))
);

cljstemplate.core.done_fn = (function done_fn(){
goog.dom.getElement("nextButton").style.visibility = "visible";

return cljstemplate.core.handle_msg.call(null,"You did it!");
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
var resizes_38765 = cljstemplate.core.listen.call(null,window,"resize");
var c__6541__auto___38766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___38766,resizes_38765){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38766,resizes_38765){
return (function (state_38749){
var state_val_38750 = (state_38749[(1)]);
if((state_val_38750 === (7))){
var inst_38740 = (state_38749[(2)]);
var inst_38741 = cljstemplate.core.reset_canvas.call(null);
var state_38749__$1 = (function (){var statearr_38751 = state_38749;
(statearr_38751[(7)] = inst_38741);

(statearr_38751[(8)] = inst_38740);

return statearr_38751;
})();
var statearr_38752_38767 = state_38749__$1;
(statearr_38752_38767[(2)] = null);

(statearr_38752_38767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (6))){
var inst_38745 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38753_38768 = state_38749__$1;
(statearr_38753_38768[(2)] = inst_38745);

(statearr_38753_38768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (5))){
var state_38749__$1 = state_38749;
var statearr_38754_38769 = state_38749__$1;
(statearr_38754_38769[(2)] = null);

(statearr_38754_38769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (4))){
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38749__$1,(7),resizes_38765);
} else {
if((state_val_38750 === (3))){
var inst_38747 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38749__$1,inst_38747);
} else {
if((state_val_38750 === (2))){
var state_38749__$1 = state_38749;
var statearr_38755_38770 = state_38749__$1;
(statearr_38755_38770[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (1))){
var state_38749__$1 = state_38749;
var statearr_38757_38771 = state_38749__$1;
(statearr_38757_38771[(2)] = null);

(statearr_38757_38771[(1)] = (2));


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
});})(c__6541__auto___38766,resizes_38765))
;
return ((function (switch__6476__auto__,c__6541__auto___38766,resizes_38765){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38761 = [null,null,null,null,null,null,null,null,null];
(statearr_38761[(0)] = state_machine__6477__auto__);

(statearr_38761[(1)] = (1));

return statearr_38761;
});
var state_machine__6477__auto____1 = (function (state_38749){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_38749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38762){if((e38762 instanceof Object)){
var ex__6480__auto__ = e38762;
var statearr_38763_38772 = state_38749;
(statearr_38763_38772[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38773 = state_38749;
state_38749 = G__38773;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38749){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38766,resizes_38765))
})();
var state__6543__auto__ = (function (){var statearr_38764 = f__6542__auto__.call(null);
(statearr_38764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38766);

return statearr_38764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___38766,resizes_38765))
);

cljstemplate.core.fill_rect = (function fill_rect(p__38774,p__38775,p__38776){
var vec__38780 = p__38774;
var surface = cljs.core.nth.call(null,vec__38780,(0),null);
var vec__38781 = p__38775;
var x = cljs.core.nth.call(null,vec__38781,(0),null);
var y = cljs.core.nth.call(null,vec__38781,(1),null);
var width = cljs.core.nth.call(null,vec__38781,(2),null);
var height = cljs.core.nth.call(null,vec__38781,(3),null);
var vec__38782 = p__38776;
var r = cljs.core.nth.call(null,vec__38782,(0),null);
var g = cljs.core.nth.call(null,vec__38782,(1),null);
var b = cljs.core.nth.call(null,vec__38782,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__38783,color){
var vec__38785 = p__38783;
var surface = cljs.core.nth.call(null,vec__38785,(0),null);
var w = cljs.core.nth.call(null,vec__38785,(1),null);
var h = cljs.core.nth.call(null,vec__38785,(2),null);
return cljstemplate.core.fill_rect.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear.call(null,cljstemplate.core.canvas,cljs.core.first.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level))));

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljs.core.partial.call(null,cljstemplate.shape.do_rotations,timestamp));

var map__38788_38789 = cljs.core.deref.call(null,cljstemplate.core.pointer_state);
var map__38788_38790__$1 = ((cljs.core.seq_QMARK_.call(null,map__38788_38789))?cljs.core.apply.call(null,cljs.core.hash_map,map__38788_38789):map__38788_38789);
var x_38791 = cljs.core.get.call(null,map__38788_38790__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_38792 = cljs.core.get.call(null,map__38788_38790__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_38793 = cljs.core.get.call(null,map__38788_38790__$1,new cljs.core.Keyword(null,"clicked","clicked",114423720));
var was_done_38794 = cljs.core.deref.call(null,cljstemplate.core.done);
var canvas_38795 = (cljs.core.truth_(cljs.core.deref.call(null,cljstemplate.core.level_checked))?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,((function (map__38788_38789,map__38788_38790__$1,x_38791,y_38792,clicked_38793,was_done_38794,canvas_38795){
return (function (p1__38786_SHARP_){
return cljstemplate.shape.render.call(null,canvas_38795,p1__38786_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_38791,y_38792,clicked_38793,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__38788_38789,map__38788_38790__$1,x_38791,y_38792,clicked_38793,was_done_38794,canvas_38795))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_38794;
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
return cljs.core.not.call(null,was_done_38794);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
cljstemplate.core.done_fn.call(null);
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

var temp__4124__auto__ = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level));
if(cljs.core.truth_(temp__4124__auto__)){
var msg = temp__4124__auto__;
return cljstemplate.core.handle_msg.call(null,msg);
} else {
return null;
}
});
cljstemplate.core.begin = (function begin(){
cljstemplate.core.level_up.call(null,(function (x){
return (0);
}));

return window.requestAnimationFrame(cljstemplate.core.animate);
});
cljstemplate.core.begin.call(null);

//# sourceMappingURL=core.js.map