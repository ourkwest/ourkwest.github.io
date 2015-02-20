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
cljstemplate.core.log = cljstemplate.logging.logger(cljs.core.constant$keyword$101);
cljstemplate.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__38801_38804 = el;
var G__38802_38805 = type;
var G__38803_38806 = ((function (G__38801_38804,G__38802_38805,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__38801_38804,G__38802_38805,out))
;
goog.events.listen(G__38801_38804,G__38802_38805,G__38803_38806);

return out;
});
cljstemplate.core.handle_msg = (function handle_msg(msg){
return (function (){var G__38808 = "msgBus";
return goog.dom.getElement(G__38808);
})().innerHTML = msg;
});
cljstemplate.core.pointer_state = (function (){var G__38809 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38809) : cljs.core.atom.call(null,G__38809));
})();
cljstemplate.core.handle_click = (function handle_click(event){
var rect = (function (){var G__38813 = "theCanvas";
return goog.dom.getElement(G__38813);
})().getBoundingClientRect();
var G__38814 = cljstemplate.core.pointer_state;
var G__38815 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,(event.clientX - rect.left),cljs.core.constant$keyword$127,(event.clientY - rect.top),cljs.core.constant$keyword$128,true], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38814,G__38815) : cljs.core.reset_BANG_.call(null,G__38814,G__38815));
});
var clicks_38845 = cljstemplate.core.listen((function (){var G__38816 = "theCanvas";
return goog.dom.getElement(G__38816);
})(),"mousedown");
var c__6541__auto___38846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38846,clicks_38845){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38846,clicks_38845){
return (function (state_38829){
var state_val_38830 = (state_38829[(1)]);
if((state_val_38830 === (7))){
var inst_38820 = (state_38829[(2)]);
var inst_38821 = cljstemplate.core.handle_click(inst_38820);
var state_38829__$1 = (function (){var statearr_38831 = state_38829;
(statearr_38831[(7)] = inst_38821);

return statearr_38831;
})();
var statearr_38832_38847 = state_38829__$1;
(statearr_38832_38847[(2)] = null);

(statearr_38832_38847[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38830 === (6))){
var inst_38825 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38833_38848 = state_38829__$1;
(statearr_38833_38848[(2)] = inst_38825);

(statearr_38833_38848[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38830 === (5))){
var state_38829__$1 = state_38829;
var statearr_38834_38849 = state_38829__$1;
(statearr_38834_38849[(2)] = null);

(statearr_38834_38849[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38830 === (4))){
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38829__$1,(7),clicks_38845);
} else {
if((state_val_38830 === (3))){
var inst_38827 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38829__$1,inst_38827);
} else {
if((state_val_38830 === (2))){
var state_38829__$1 = state_38829;
var statearr_38835_38850 = state_38829__$1;
(statearr_38835_38850[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_38830 === (1))){
var state_38829__$1 = state_38829;
var statearr_38837_38851 = state_38829__$1;
(statearr_38837_38851[(2)] = null);

(statearr_38837_38851[(1)] = (2));


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
});})(c__6541__auto___38846,clicks_38845))
;
return ((function (switch__6476__auto__,c__6541__auto___38846,clicks_38845){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38841 = [null,null,null,null,null,null,null,null];
(statearr_38841[(0)] = state_machine__6477__auto__);

(statearr_38841[(1)] = (1));

return statearr_38841;
});
var state_machine__6477__auto____1 = (function (state_38829){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38829);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38842){if((e38842 instanceof Object)){
var ex__6480__auto__ = e38842;
var statearr_38843_38852 = state_38829;
(statearr_38843_38852[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38829);

return cljs.core.constant$keyword$87;
} else {
throw e38842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38853 = state_38829;
state_38829 = G__38853;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38829){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38846,clicks_38845))
})();
var state__6543__auto__ = (function (){var statearr_38844 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38846);

return statearr_38844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38846,clicks_38845))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = (function (){var G__38855 = "theCanvas";
return goog.dom.getElement(G__38855);
})().getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,(event.clientX - rect.left),cljs.core.constant$keyword$127,(event.clientY - rect.top)], null));
});
var moves_38885 = cljstemplate.core.listen((function (){var G__38856 = "theCanvas";
return goog.dom.getElement(G__38856);
})(),"mousemove");
var c__6541__auto___38886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38886,moves_38885){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38886,moves_38885){
return (function (state_38869){
var state_val_38870 = (state_38869[(1)]);
if((state_val_38870 === (7))){
var inst_38860 = (state_38869[(2)]);
var inst_38861 = cljstemplate.core.handle_moves(inst_38860);
var state_38869__$1 = (function (){var statearr_38871 = state_38869;
(statearr_38871[(7)] = inst_38861);

return statearr_38871;
})();
var statearr_38872_38887 = state_38869__$1;
(statearr_38872_38887[(2)] = null);

(statearr_38872_38887[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38870 === (6))){
var inst_38865 = (state_38869[(2)]);
var state_38869__$1 = state_38869;
var statearr_38873_38888 = state_38869__$1;
(statearr_38873_38888[(2)] = inst_38865);

(statearr_38873_38888[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38870 === (5))){
var state_38869__$1 = state_38869;
var statearr_38874_38889 = state_38869__$1;
(statearr_38874_38889[(2)] = null);

(statearr_38874_38889[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38870 === (4))){
var state_38869__$1 = state_38869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38869__$1,(7),moves_38885);
} else {
if((state_val_38870 === (3))){
var inst_38867 = (state_38869[(2)]);
var state_38869__$1 = state_38869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38869__$1,inst_38867);
} else {
if((state_val_38870 === (2))){
var state_38869__$1 = state_38869;
var statearr_38875_38890 = state_38869__$1;
(statearr_38875_38890[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_38870 === (1))){
var state_38869__$1 = state_38869;
var statearr_38877_38891 = state_38869__$1;
(statearr_38877_38891[(2)] = null);

(statearr_38877_38891[(1)] = (2));


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
});})(c__6541__auto___38886,moves_38885))
;
return ((function (switch__6476__auto__,c__6541__auto___38886,moves_38885){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38881 = [null,null,null,null,null,null,null,null];
(statearr_38881[(0)] = state_machine__6477__auto__);

(statearr_38881[(1)] = (1));

return statearr_38881;
});
var state_machine__6477__auto____1 = (function (state_38869){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38869);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38882){if((e38882 instanceof Object)){
var ex__6480__auto__ = e38882;
var statearr_38883_38892 = state_38869;
(statearr_38883_38892[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38869);

return cljs.core.constant$keyword$87;
} else {
throw e38882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38893 = state_38869;
state_38869 = G__38893;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38869){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38886,moves_38885))
})();
var state__6543__auto__ = (function (){var statearr_38884 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38886);

return statearr_38884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38886,moves_38885))
);

var clicks_38924 = cljstemplate.core.listen((function (){var G__38894 = "nextButton";
return goog.dom.getElement(G__38894);
})(),"click");
var c__6541__auto___38925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38925,clicks_38924){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38925,clicks_38924){
return (function (state_38907){
var state_val_38908 = (state_38907[(1)]);
if((state_val_38908 === (7))){
var inst_38898 = (state_38907[(2)]);
var inst_38899 = (function (){var G__38909 = cljs.core.inc;
return (cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__38909) : cljstemplate.core.level_up.call(null,G__38909));
})();
var state_38907__$1 = (function (){var statearr_38910 = state_38907;
(statearr_38910[(7)] = inst_38898);

(statearr_38910[(8)] = inst_38899);

return statearr_38910;
})();
var statearr_38911_38926 = state_38907__$1;
(statearr_38911_38926[(2)] = null);

(statearr_38911_38926[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38908 === (6))){
var inst_38903 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38912_38927 = state_38907__$1;
(statearr_38912_38927[(2)] = inst_38903);

(statearr_38912_38927[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38908 === (5))){
var state_38907__$1 = state_38907;
var statearr_38913_38928 = state_38907__$1;
(statearr_38913_38928[(2)] = null);

(statearr_38913_38928[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38908 === (4))){
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38907__$1,(7),clicks_38924);
} else {
if((state_val_38908 === (3))){
var inst_38905 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38907__$1,inst_38905);
} else {
if((state_val_38908 === (2))){
var state_38907__$1 = state_38907;
var statearr_38914_38929 = state_38907__$1;
(statearr_38914_38929[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_38908 === (1))){
var state_38907__$1 = state_38907;
var statearr_38916_38930 = state_38907__$1;
(statearr_38916_38930[(2)] = null);

(statearr_38916_38930[(1)] = (2));


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
});})(c__6541__auto___38925,clicks_38924))
;
return ((function (switch__6476__auto__,c__6541__auto___38925,clicks_38924){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38920 = [null,null,null,null,null,null,null,null,null];
(statearr_38920[(0)] = state_machine__6477__auto__);

(statearr_38920[(1)] = (1));

return statearr_38920;
});
var state_machine__6477__auto____1 = (function (state_38907){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38907);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38921){if((e38921 instanceof Object)){
var ex__6480__auto__ = e38921;
var statearr_38922_38931 = state_38907;
(statearr_38922_38931[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38907);

return cljs.core.constant$keyword$87;
} else {
throw e38921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38932 = state_38907;
state_38907 = G__38932;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38907){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38925,clicks_38924))
})();
var state__6543__auto__ = (function (){var statearr_38923 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38925);

return statearr_38923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38925,clicks_38924))
);

cljstemplate.core.done_fn = (function done_fn(){
(function (){var G__38934 = "nextButton";
return goog.dom.getElement(G__38934);
})().style.visibility = "visible";

return cljstemplate.core.handle_msg("You did it!");
});
cljstemplate.core.this_level_id = (function (){var G__38935 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38935) : cljs.core.atom.call(null,G__38935));
})();
cljstemplate.core.this_level = (function (){var G__38936 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38936) : cljs.core.atom.call(null,G__38936));
})();
cljstemplate.core.level_checked = (function (){var G__38937 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38937) : cljs.core.atom.call(null,G__38937));
})();
cljstemplate.core.shuffles_so_far = (function (){var G__38938 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38938) : cljs.core.atom.call(null,G__38938));
})();
cljstemplate.core.done = (function (){var G__38939 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38939) : cljs.core.atom.call(null,G__38939));
})();
cljstemplate.core.reset_canvas = (function reset_canvas(){
var width = window.innerWidth;
var height = window.innerHeight;
var c = (function (){var G__38941 = "theCanvas";
return goog.dom.getElement(G__38941);
})();
c.width = width;

c.height = height;

c.style.width = width;

c.style.height = height;

cljstemplate.core.canvas = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.getContext("2d"),width,height], null);
});
cljstemplate.core.reset_canvas();
var resizes_38970 = cljstemplate.core.listen(window,"resize");
var c__6541__auto___38971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___38971,resizes_38970){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___38971,resizes_38970){
return (function (state_38954){
var state_val_38955 = (state_38954[(1)]);
if((state_val_38955 === (7))){
var inst_38945 = (state_38954[(2)]);
var inst_38946 = cljstemplate.core.reset_canvas();
var state_38954__$1 = (function (){var statearr_38956 = state_38954;
(statearr_38956[(7)] = inst_38945);

(statearr_38956[(8)] = inst_38946);

return statearr_38956;
})();
var statearr_38957_38972 = state_38954__$1;
(statearr_38957_38972[(2)] = null);

(statearr_38957_38972[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38955 === (6))){
var inst_38950 = (state_38954[(2)]);
var state_38954__$1 = state_38954;
var statearr_38958_38973 = state_38954__$1;
(statearr_38958_38973[(2)] = inst_38950);

(statearr_38958_38973[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38955 === (5))){
var state_38954__$1 = state_38954;
var statearr_38959_38974 = state_38954__$1;
(statearr_38959_38974[(2)] = null);

(statearr_38959_38974[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_38955 === (4))){
var state_38954__$1 = state_38954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38954__$1,(7),resizes_38970);
} else {
if((state_val_38955 === (3))){
var inst_38952 = (state_38954[(2)]);
var state_38954__$1 = state_38954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38954__$1,inst_38952);
} else {
if((state_val_38955 === (2))){
var state_38954__$1 = state_38954;
var statearr_38960_38975 = state_38954__$1;
(statearr_38960_38975[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_38955 === (1))){
var state_38954__$1 = state_38954;
var statearr_38962_38976 = state_38954__$1;
(statearr_38962_38976[(2)] = null);

(statearr_38962_38976[(1)] = (2));


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
});})(c__6541__auto___38971,resizes_38970))
;
return ((function (switch__6476__auto__,c__6541__auto___38971,resizes_38970){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_38966 = [null,null,null,null,null,null,null,null,null];
(statearr_38966[(0)] = state_machine__6477__auto__);

(statearr_38966[(1)] = (1));

return statearr_38966;
});
var state_machine__6477__auto____1 = (function (state_38954){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_38954);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e38967){if((e38967 instanceof Object)){
var ex__6480__auto__ = e38967;
var statearr_38968_38977 = state_38954;
(statearr_38968_38977[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38954);

return cljs.core.constant$keyword$87;
} else {
throw e38967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__38978 = state_38954;
state_38954 = G__38978;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_38954){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_38954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___38971,resizes_38970))
})();
var state__6543__auto__ = (function (){var statearr_38969 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_38969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___38971);

return statearr_38969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___38971,resizes_38970))
);

cljstemplate.core.fill_rect = (function fill_rect(p__38979,p__38980,p__38981){
var vec__38985 = p__38979;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38985,(0),null);
var vec__38986 = p__38980;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(3),null);
var vec__38987 = p__38981;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__38988,color){
var vec__38990 = p__38988;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(2),null);
return cljstemplate.core.fill_rect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear(cljstemplate.core.canvas,cljs.core.first(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1((function (){var G__39019 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39019) : cljs.core.deref.call(null,G__39019));
})())));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.do_rotations,timestamp));

var map__39020_39046 = (function (){var G__39021 = cljstemplate.core.pointer_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39021) : cljs.core.deref.call(null,G__39021));
})();
var map__39020_39047__$1 = ((cljs.core.seq_QMARK_(map__39020_39046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39020_39046):map__39020_39046);
var x_39048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39047__$1,cljs.core.constant$keyword$126);
var y_39049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39047__$1,cljs.core.constant$keyword$127);
var clicked_39050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020_39047__$1,cljs.core.constant$keyword$128);
var was_done_39051 = (function (){var G__39022 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39022) : cljs.core.deref.call(null,G__39022));
})();
var canvas_39052 = (cljs.core.truth_((function (){var G__39023 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39023) : cljs.core.deref.call(null,G__39023));
})())?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,((function (map__39020_39046,map__39020_39047__$1,x_39048,y_39049,clicked_39050,was_done_39051,canvas_39052){
return (function (p1__38991_SHARP_){
return cljstemplate.shape.render(canvas_39052,p1__38991_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_39048,y_39049,clicked_39050,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__39020_39046,map__39020_39047__$1,x_39048,y_39049,clicked_39050,was_done_39051,canvas_39052))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__39025 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39025) : cljs.core.deref.call(null,G__39025));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__39027 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39027) : cljs.core.deref.call(null,G__39027));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_39051;
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__39029 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39029) : cljs.core.deref.call(null,G__39029));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__39031 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39031) : cljs.core.deref.call(null,G__39031));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return cljs.core.not(was_done_39051);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
cljstemplate.core.done_fn();
} else {
if((cljs.core.not((function (){var G__39034 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39034) : cljs.core.deref.call(null,G__39034));
})())) && (cljs.core.not((function (){var G__39035 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39035) : cljs.core.deref.call(null,G__39035));
})()))){
var G__39036_39053 = cljstemplate.core.level_checked;
var G__39037_39054 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39036_39053,G__39037_39054) : cljs.core.reset_BANG_.call(null,G__39036_39053,G__39037_39054));
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.not((function (){var G__39040 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39040) : cljs.core.deref.call(null,G__39040));
})());
if(and__3799__auto__){
var G__39041 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39041) : cljs.core.deref.call(null,G__39041));
} else {
return and__3799__auto__;
}
})())){
if(((3) < cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.shuffles_so_far,cljs.core.inc))){
var G__39042_39055 = cljs.core.identity;
(cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__39042_39055) : cljstemplate.core.level_up.call(null,G__39042_39055));
} else {
var G__39043_39056 = "Shuffling";
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__39043_39056) : cljstemplate.core.log.call(null,G__39043_39056));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.levels.shuffle_shapes);

var G__39044_39057 = cljstemplate.core.done;
var G__39045_39058 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39044_39057,G__39045_39058) : cljs.core.reset_BANG_.call(null,G__39044_39057,G__39045_39058));
}
} else {

}
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljstemplate.core.pointer_state,cljs.core.dissoc,cljs.core.constant$keyword$128);
});
cljstemplate.core.animate = (function animate(timestamp){
cljstemplate.core.per_frame_processing(timestamp);

return window.requestAnimationFrame(animate);
});
cljstemplate.core.level_up = (function level_up(level_fn){
(function (){var G__39074 = "nextButton";
return goog.dom.getElement(G__39074);
})().style.visibility = "hidden";

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level_id,level_fn);

var G__39075_39089 = [cljs.core.str("Loading level "),cljs.core.str((function (){var G__39076 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39076) : cljs.core.deref.call(null,G__39076));
})())].join('');
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__39075_39089) : cljstemplate.core.log.call(null,G__39075_39089));

var G__39077_39090 = cljstemplate.core.this_level;
var G__39078_39091 = cljstemplate.levels.get_level((function (){var G__39079 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39079) : cljs.core.deref.call(null,G__39079));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39077_39090,G__39078_39091) : cljs.core.reset_BANG_.call(null,G__39077_39090,G__39078_39091));

var G__39080_39092 = cljstemplate.core.level_checked;
var G__39081_39093 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39080_39092,G__39081_39093) : cljs.core.reset_BANG_.call(null,G__39080_39092,G__39081_39093));

var G__39082_39094 = cljstemplate.core.done;
var G__39083_39095 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39082_39094,G__39083_39095) : cljs.core.reset_BANG_.call(null,G__39082_39094,G__39083_39095));

var G__39084_39096 = cljstemplate.core.shuffles_so_far;
var G__39085_39097 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__39084_39096,G__39085_39097) : cljs.core.reset_BANG_.call(null,G__39084_39096,G__39085_39097));

(function (){var G__39086 = "levelCounter";
return goog.dom.getElement(G__39086);
})().innerHTML = [cljs.core.str(((function (){var G__39087 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39087) : cljs.core.deref.call(null,G__39087));
})() + (1)))].join('');

var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1((function (){var G__39088 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__39088) : cljs.core.deref.call(null,G__39088));
})());
if(cljs.core.truth_(temp__4124__auto__)){
var msg = temp__4124__auto__;
return cljstemplate.core.handle_msg(msg);
} else {
return null;
}
});
cljstemplate.core.begin = (function begin(){
cljstemplate.core.level_up((function (x){
return (0);
}));

return window.requestAnimationFrame(cljstemplate.core.animate);
});
cljstemplate.core.begin();
