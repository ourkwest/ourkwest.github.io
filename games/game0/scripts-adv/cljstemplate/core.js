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
var G__27868_27871 = el;
var G__27869_27872 = type;
var G__27870_27873 = ((function (G__27868_27871,G__27869_27872,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__27868_27871,G__27869_27872,out))
;
goog.events.listen(G__27868_27871,G__27869_27872,G__27870_27873);

return out;
});
cljstemplate.core.handle_msg = (function handle_msg(msg){
return (function (){var G__27875 = "msgBus";
return goog.dom.getElement(G__27875);
})().innerHTML = msg;
});
cljstemplate.core.pointer_state = (function (){var G__27876 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27876) : cljs.core.atom.call(null,G__27876));
})();
cljstemplate.core.handle_click = (function handle_click(event){
var rect = (function (){var G__27880 = "theCanvas";
return goog.dom.getElement(G__27880);
})().getBoundingClientRect();
var G__27881 = cljstemplate.core.pointer_state;
var G__27882 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,(event.clientX - rect.left),cljs.core.constant$keyword$127,(event.clientY - rect.top),cljs.core.constant$keyword$128,true], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27881,G__27882) : cljs.core.reset_BANG_.call(null,G__27881,G__27882));
});
var clicks_27912 = cljstemplate.core.listen((function (){var G__27883 = "theCanvas";
return goog.dom.getElement(G__27883);
})(),"mousedown");
var c__6541__auto___27913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___27913,clicks_27912){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___27913,clicks_27912){
return (function (state_27896){
var state_val_27897 = (state_27896[(1)]);
if((state_val_27897 === (7))){
var inst_27887 = (state_27896[(2)]);
var inst_27888 = cljstemplate.core.handle_click(inst_27887);
var state_27896__$1 = (function (){var statearr_27898 = state_27896;
(statearr_27898[(7)] = inst_27888);

return statearr_27898;
})();
var statearr_27899_27914 = state_27896__$1;
(statearr_27899_27914[(2)] = null);

(statearr_27899_27914[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27897 === (6))){
var inst_27892 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27900_27915 = state_27896__$1;
(statearr_27900_27915[(2)] = inst_27892);

(statearr_27900_27915[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27897 === (5))){
var state_27896__$1 = state_27896;
var statearr_27901_27916 = state_27896__$1;
(statearr_27901_27916[(2)] = null);

(statearr_27901_27916[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27897 === (4))){
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27896__$1,(7),clicks_27912);
} else {
if((state_val_27897 === (3))){
var inst_27894 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27896__$1,inst_27894);
} else {
if((state_val_27897 === (2))){
var state_27896__$1 = state_27896;
var statearr_27902_27917 = state_27896__$1;
(statearr_27902_27917[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_27897 === (1))){
var state_27896__$1 = state_27896;
var statearr_27904_27918 = state_27896__$1;
(statearr_27904_27918[(2)] = null);

(statearr_27904_27918[(1)] = (2));


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
});})(c__6541__auto___27913,clicks_27912))
;
return ((function (switch__6476__auto__,c__6541__auto___27913,clicks_27912){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_27908 = [null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = state_machine__6477__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var state_machine__6477__auto____1 = (function (state_27896){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_27896);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__6480__auto__ = e27909;
var statearr_27910_27919 = state_27896;
(statearr_27910_27919[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27896);

return cljs.core.constant$keyword$87;
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__27920 = state_27896;
state_27896 = G__27920;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_27896){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_27896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___27913,clicks_27912))
})();
var state__6543__auto__ = (function (){var statearr_27911 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___27913);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___27913,clicks_27912))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = (function (){var G__27922 = "theCanvas";
return goog.dom.getElement(G__27922);
})().getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,(event.clientX - rect.left),cljs.core.constant$keyword$127,(event.clientY - rect.top)], null));
});
var moves_27952 = cljstemplate.core.listen((function (){var G__27923 = "theCanvas";
return goog.dom.getElement(G__27923);
})(),"mousemove");
var c__6541__auto___27953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___27953,moves_27952){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___27953,moves_27952){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (7))){
var inst_27927 = (state_27936[(2)]);
var inst_27928 = cljstemplate.core.handle_moves(inst_27927);
var state_27936__$1 = (function (){var statearr_27938 = state_27936;
(statearr_27938[(7)] = inst_27928);

return statearr_27938;
})();
var statearr_27939_27954 = state_27936__$1;
(statearr_27939_27954[(2)] = null);

(statearr_27939_27954[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27937 === (6))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27940_27955 = state_27936__$1;
(statearr_27940_27955[(2)] = inst_27932);

(statearr_27940_27955[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27937 === (5))){
var state_27936__$1 = state_27936;
var statearr_27941_27956 = state_27936__$1;
(statearr_27941_27956[(2)] = null);

(statearr_27941_27956[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27937 === (4))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27936__$1,(7),moves_27952);
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
var statearr_27942_27957 = state_27936__$1;
(statearr_27942_27957[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_27937 === (1))){
var state_27936__$1 = state_27936;
var statearr_27944_27958 = state_27936__$1;
(statearr_27944_27958[(2)] = null);

(statearr_27944_27958[(1)] = (2));


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
});})(c__6541__auto___27953,moves_27952))
;
return ((function (switch__6476__auto__,c__6541__auto___27953,moves_27952){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_27948 = [null,null,null,null,null,null,null,null];
(statearr_27948[(0)] = state_machine__6477__auto__);

(statearr_27948[(1)] = (1));

return statearr_27948;
});
var state_machine__6477__auto____1 = (function (state_27936){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_27936);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e27949){if((e27949 instanceof Object)){
var ex__6480__auto__ = e27949;
var statearr_27950_27959 = state_27936;
(statearr_27950_27959[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27936);

return cljs.core.constant$keyword$87;
} else {
throw e27949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__27960 = state_27936;
state_27936 = G__27960;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___27953,moves_27952))
})();
var state__6543__auto__ = (function (){var statearr_27951 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_27951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___27953);

return statearr_27951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___27953,moves_27952))
);

var clicks_27991 = cljstemplate.core.listen((function (){var G__27961 = "nextButton";
return goog.dom.getElement(G__27961);
})(),"click");
var c__6541__auto___27992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___27992,clicks_27991){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___27992,clicks_27991){
return (function (state_27974){
var state_val_27975 = (state_27974[(1)]);
if((state_val_27975 === (7))){
var inst_27965 = (state_27974[(2)]);
var inst_27966 = (function (){var G__27976 = cljs.core.inc;
return (cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__27976) : cljstemplate.core.level_up.call(null,G__27976));
})();
var state_27974__$1 = (function (){var statearr_27977 = state_27974;
(statearr_27977[(7)] = inst_27966);

(statearr_27977[(8)] = inst_27965);

return statearr_27977;
})();
var statearr_27978_27993 = state_27974__$1;
(statearr_27978_27993[(2)] = null);

(statearr_27978_27993[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27975 === (6))){
var inst_27970 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27979_27994 = state_27974__$1;
(statearr_27979_27994[(2)] = inst_27970);

(statearr_27979_27994[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27975 === (5))){
var state_27974__$1 = state_27974;
var statearr_27980_27995 = state_27974__$1;
(statearr_27980_27995[(2)] = null);

(statearr_27980_27995[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_27975 === (4))){
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27974__$1,(7),clicks_27991);
} else {
if((state_val_27975 === (3))){
var inst_27972 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27974__$1,inst_27972);
} else {
if((state_val_27975 === (2))){
var state_27974__$1 = state_27974;
var statearr_27981_27996 = state_27974__$1;
(statearr_27981_27996[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_27975 === (1))){
var state_27974__$1 = state_27974;
var statearr_27983_27997 = state_27974__$1;
(statearr_27983_27997[(2)] = null);

(statearr_27983_27997[(1)] = (2));


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
});})(c__6541__auto___27992,clicks_27991))
;
return ((function (switch__6476__auto__,c__6541__auto___27992,clicks_27991){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_27987 = [null,null,null,null,null,null,null,null,null];
(statearr_27987[(0)] = state_machine__6477__auto__);

(statearr_27987[(1)] = (1));

return statearr_27987;
});
var state_machine__6477__auto____1 = (function (state_27974){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_27974);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object)){
var ex__6480__auto__ = e27988;
var statearr_27989_27998 = state_27974;
(statearr_27989_27998[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27974);

return cljs.core.constant$keyword$87;
} else {
throw e27988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__27999 = state_27974;
state_27974 = G__27999;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_27974){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_27974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___27992,clicks_27991))
})();
var state__6543__auto__ = (function (){var statearr_27990 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_27990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___27992);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___27992,clicks_27991))
);

cljstemplate.core.done_fn = (function done_fn(){
return (function (){var G__28001 = "nextButton";
return goog.dom.getElement(G__28001);
})().style.visibility = "visible";
});
cljstemplate.core.this_level_id = (function (){var G__28002 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28002) : cljs.core.atom.call(null,G__28002));
})();
cljstemplate.core.this_level = (function (){var G__28003 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28003) : cljs.core.atom.call(null,G__28003));
})();
cljstemplate.core.level_checked = (function (){var G__28004 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28004) : cljs.core.atom.call(null,G__28004));
})();
cljstemplate.core.shuffles_so_far = (function (){var G__28005 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28005) : cljs.core.atom.call(null,G__28005));
})();
cljstemplate.core.done = (function (){var G__28006 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28006) : cljs.core.atom.call(null,G__28006));
})();
cljstemplate.core.reset_canvas = (function reset_canvas(){
var width = window.innerWidth;
var height = window.innerHeight;
var c = (function (){var G__28008 = "theCanvas";
return goog.dom.getElement(G__28008);
})();
c.width = width;

c.height = height;

c.style.width = width;

c.style.height = height;

cljstemplate.core.canvas = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.getContext("2d"),width,height], null);
});
cljstemplate.core.reset_canvas();
var resizes_28037 = cljstemplate.core.listen(window,"resize");
var c__6541__auto___28038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6541__auto___28038,resizes_28037){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___28038,resizes_28037){
return (function (state_28021){
var state_val_28022 = (state_28021[(1)]);
if((state_val_28022 === (7))){
var inst_28012 = (state_28021[(2)]);
var inst_28013 = cljstemplate.core.reset_canvas();
var state_28021__$1 = (function (){var statearr_28023 = state_28021;
(statearr_28023[(7)] = inst_28013);

(statearr_28023[(8)] = inst_28012);

return statearr_28023;
})();
var statearr_28024_28039 = state_28021__$1;
(statearr_28024_28039[(2)] = null);

(statearr_28024_28039[(1)] = (2));


return cljs.core.constant$keyword$87;
} else {
if((state_val_28022 === (6))){
var inst_28017 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28025_28040 = state_28021__$1;
(statearr_28025_28040[(2)] = inst_28017);

(statearr_28025_28040[(1)] = (3));


return cljs.core.constant$keyword$87;
} else {
if((state_val_28022 === (5))){
var state_28021__$1 = state_28021;
var statearr_28026_28041 = state_28021__$1;
(statearr_28026_28041[(2)] = null);

(statearr_28026_28041[(1)] = (6));


return cljs.core.constant$keyword$87;
} else {
if((state_val_28022 === (4))){
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28021__$1,(7),resizes_28037);
} else {
if((state_val_28022 === (3))){
var inst_28019 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28021__$1,inst_28019);
} else {
if((state_val_28022 === (2))){
var state_28021__$1 = state_28021;
var statearr_28027_28042 = state_28021__$1;
(statearr_28027_28042[(1)] = (4));



return cljs.core.constant$keyword$87;
} else {
if((state_val_28022 === (1))){
var state_28021__$1 = state_28021;
var statearr_28029_28043 = state_28021__$1;
(statearr_28029_28043[(2)] = null);

(statearr_28029_28043[(1)] = (2));


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
});})(c__6541__auto___28038,resizes_28037))
;
return ((function (switch__6476__auto__,c__6541__auto___28038,resizes_28037){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_28033 = [null,null,null,null,null,null,null,null,null];
(statearr_28033[(0)] = state_machine__6477__auto__);

(statearr_28033[(1)] = (1));

return statearr_28033;
});
var state_machine__6477__auto____1 = (function (state_28021){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__(state_28021);
if(cljs.core.keyword_identical_QMARK_(result__6479__auto__,cljs.core.constant$keyword$87)){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e28034){if((e28034 instanceof Object)){
var ex__6480__auto__ = e28034;
var statearr_28035_28044 = state_28021;
(statearr_28035_28044[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28021);

return cljs.core.constant$keyword$87;
} else {
throw e28034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6478__auto__,cljs.core.constant$keyword$87)){
var G__28045 = state_28021;
state_28021 = G__28045;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_28021){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_28021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___28038,resizes_28037))
})();
var state__6543__auto__ = (function (){var statearr_28036 = (function (){return (f__6542__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6542__auto__.cljs$core$IFn$_invoke$arity$0() : f__6542__auto__.call(null));
})();
(statearr_28036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___28038);

return statearr_28036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6543__auto__);
});})(c__6541__auto___28038,resizes_28037))
);

cljstemplate.core.fill_rect = (function fill_rect(p__28046,p__28047,p__28048){
var vec__28052 = p__28046;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28052,(0),null);
var vec__28053 = p__28047;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(3),null);
var vec__28054 = p__28048;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28054,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28054,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28054,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__28055,color){
var vec__28057 = p__28055;
var surface = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(2),null);
return cljstemplate.core.fill_rect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear(cljstemplate.core.canvas,cljs.core.first(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1((function (){var G__28086 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28086) : cljs.core.deref.call(null,G__28086));
})())));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.do_rotations,timestamp));

var map__28087_28113 = (function (){var G__28088 = cljstemplate.core.pointer_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28088) : cljs.core.deref.call(null,G__28088));
})();
var map__28087_28114__$1 = ((cljs.core.seq_QMARK_(map__28087_28113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28087_28113):map__28087_28113);
var x_28115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28087_28114__$1,cljs.core.constant$keyword$126);
var y_28116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28087_28114__$1,cljs.core.constant$keyword$127);
var clicked_28117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28087_28114__$1,cljs.core.constant$keyword$128);
var was_done_28118 = (function (){var G__28089 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28089) : cljs.core.deref.call(null,G__28089));
})();
var canvas_28119 = (cljs.core.truth_((function (){var G__28090 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28090) : cljs.core.deref.call(null,G__28090));
})())?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,((function (map__28087_28113,map__28087_28114__$1,x_28115,y_28116,clicked_28117,was_done_28118,canvas_28119){
return (function (p1__28058_SHARP_){
return cljstemplate.shape.render(canvas_28119,p1__28058_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_28115,y_28116,clicked_28117,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__28087_28113,map__28087_28114__$1,x_28115,y_28116,clicked_28117,was_done_28118,canvas_28119))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__28092 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28092) : cljs.core.deref.call(null,G__28092));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__28094 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28094) : cljs.core.deref.call(null,G__28094));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_28118;
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__28096 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28096) : cljs.core.deref.call(null,G__28096));
})();
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = (function (){var G__28098 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28098) : cljs.core.deref.call(null,G__28098));
})();
if(cljs.core.truth_(and__3799__auto____$1)){
return cljs.core.not(was_done_28118);
} else {
return and__3799__auto____$1;
}
} else {
return and__3799__auto__;
}
})())){
cljstemplate.core.done_fn();
} else {
if((cljs.core.not((function (){var G__28101 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28101) : cljs.core.deref.call(null,G__28101));
})())) && (cljs.core.not((function (){var G__28102 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28102) : cljs.core.deref.call(null,G__28102));
})()))){
var G__28103_28120 = cljstemplate.core.level_checked;
var G__28104_28121 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28103_28120,G__28104_28121) : cljs.core.reset_BANG_.call(null,G__28103_28120,G__28104_28121));
} else {
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.not((function (){var G__28107 = cljstemplate.core.level_checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28107) : cljs.core.deref.call(null,G__28107));
})());
if(and__3799__auto__){
var G__28108 = cljstemplate.core.done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28108) : cljs.core.deref.call(null,G__28108));
} else {
return and__3799__auto__;
}
})())){
if(((3) < cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.shuffles_so_far,cljs.core.inc))){
var G__28109_28122 = cljs.core.identity;
(cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.level_up.cljs$core$IFn$_invoke$arity$1(G__28109_28122) : cljstemplate.core.level_up.call(null,G__28109_28122));
} else {
var G__28110_28123 = "Shuffling";
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__28110_28123) : cljstemplate.core.log.call(null,G__28110_28123));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level,cljstemplate.levels.shuffle_shapes);

var G__28111_28124 = cljstemplate.core.done;
var G__28112_28125 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28111_28124,G__28112_28125) : cljs.core.reset_BANG_.call(null,G__28111_28124,G__28112_28125));
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
(function (){var G__28141 = "nextButton";
return goog.dom.getElement(G__28141);
})().style.visibility = "hidden";

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljstemplate.core.this_level_id,level_fn);

var G__28142_28156 = [cljs.core.str("Loading level "),cljs.core.str((function (){var G__28143 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28143) : cljs.core.deref.call(null,G__28143));
})())].join('');
(cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.core.log.cljs$core$IFn$_invoke$arity$1(G__28142_28156) : cljstemplate.core.log.call(null,G__28142_28156));

var G__28144_28157 = cljstemplate.core.this_level;
var G__28145_28158 = cljstemplate.levels.get_level((function (){var G__28146 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28146) : cljs.core.deref.call(null,G__28146));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28144_28157,G__28145_28158) : cljs.core.reset_BANG_.call(null,G__28144_28157,G__28145_28158));

var G__28147_28159 = cljstemplate.core.level_checked;
var G__28148_28160 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28147_28159,G__28148_28160) : cljs.core.reset_BANG_.call(null,G__28147_28159,G__28148_28160));

var G__28149_28161 = cljstemplate.core.done;
var G__28150_28162 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28149_28161,G__28150_28162) : cljs.core.reset_BANG_.call(null,G__28149_28161,G__28150_28162));

var G__28151_28163 = cljstemplate.core.shuffles_so_far;
var G__28152_28164 = (0);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28151_28163,G__28152_28164) : cljs.core.reset_BANG_.call(null,G__28151_28163,G__28152_28164));

(function (){var G__28153 = "levelCounter";
return goog.dom.getElement(G__28153);
})().innerHTML = [cljs.core.str(((function (){var G__28154 = cljstemplate.core.this_level_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28154) : cljs.core.deref.call(null,G__28154));
})() + (1)))].join('');

var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1((function (){var G__28155 = cljstemplate.core.this_level;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28155) : cljs.core.deref.call(null,G__28155));
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
