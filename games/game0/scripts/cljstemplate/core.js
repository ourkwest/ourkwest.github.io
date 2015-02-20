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
var clicks_9388 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousedown");
var c__6541__auto___9389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___9389,clicks_9388){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___9389,clicks_9388){
return (function (state_9372){
var state_val_9373 = (state_9372[(1)]);
if((state_val_9373 === (7))){
var inst_9363 = (state_9372[(2)]);
var inst_9364 = cljstemplate.core.handle_click.call(null,inst_9363);
var state_9372__$1 = (function (){var statearr_9374 = state_9372;
(statearr_9374[(7)] = inst_9364);

return statearr_9374;
})();
var statearr_9375_9390 = state_9372__$1;
(statearr_9375_9390[(2)] = null);

(statearr_9375_9390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9373 === (6))){
var inst_9368 = (state_9372[(2)]);
var state_9372__$1 = state_9372;
var statearr_9376_9391 = state_9372__$1;
(statearr_9376_9391[(2)] = inst_9368);

(statearr_9376_9391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9373 === (5))){
var state_9372__$1 = state_9372;
var statearr_9377_9392 = state_9372__$1;
(statearr_9377_9392[(2)] = null);

(statearr_9377_9392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9373 === (4))){
var state_9372__$1 = state_9372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9372__$1,(7),clicks_9388);
} else {
if((state_val_9373 === (3))){
var inst_9370 = (state_9372[(2)]);
var state_9372__$1 = state_9372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9372__$1,inst_9370);
} else {
if((state_val_9373 === (2))){
var state_9372__$1 = state_9372;
var statearr_9378_9393 = state_9372__$1;
(statearr_9378_9393[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9373 === (1))){
var state_9372__$1 = state_9372;
var statearr_9380_9394 = state_9372__$1;
(statearr_9380_9394[(2)] = null);

(statearr_9380_9394[(1)] = (2));


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
});})(c__6541__auto___9389,clicks_9388))
;
return ((function (switch__6476__auto__,c__6541__auto___9389,clicks_9388){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_9384 = [null,null,null,null,null,null,null,null];
(statearr_9384[(0)] = state_machine__6477__auto__);

(statearr_9384[(1)] = (1));

return statearr_9384;
});
var state_machine__6477__auto____1 = (function (state_9372){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_9372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e9385){if((e9385 instanceof Object)){
var ex__6480__auto__ = e9385;
var statearr_9386_9395 = state_9372;
(statearr_9386_9395[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9396 = state_9372;
state_9372 = G__9396;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_9372){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_9372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___9389,clicks_9388))
})();
var state__6543__auto__ = (function (){var statearr_9387 = f__6542__auto__.call(null);
(statearr_9387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___9389);

return statearr_9387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___9389,clicks_9388))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null));
});
var moves_9425 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousemove");
var c__6541__auto___9426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___9426,moves_9425){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___9426,moves_9425){
return (function (state_9409){
var state_val_9410 = (state_9409[(1)]);
if((state_val_9410 === (7))){
var inst_9400 = (state_9409[(2)]);
var inst_9401 = cljstemplate.core.handle_moves.call(null,inst_9400);
var state_9409__$1 = (function (){var statearr_9411 = state_9409;
(statearr_9411[(7)] = inst_9401);

return statearr_9411;
})();
var statearr_9412_9427 = state_9409__$1;
(statearr_9412_9427[(2)] = null);

(statearr_9412_9427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9410 === (6))){
var inst_9405 = (state_9409[(2)]);
var state_9409__$1 = state_9409;
var statearr_9413_9428 = state_9409__$1;
(statearr_9413_9428[(2)] = inst_9405);

(statearr_9413_9428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9410 === (5))){
var state_9409__$1 = state_9409;
var statearr_9414_9429 = state_9409__$1;
(statearr_9414_9429[(2)] = null);

(statearr_9414_9429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9410 === (4))){
var state_9409__$1 = state_9409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9409__$1,(7),moves_9425);
} else {
if((state_val_9410 === (3))){
var inst_9407 = (state_9409[(2)]);
var state_9409__$1 = state_9409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9409__$1,inst_9407);
} else {
if((state_val_9410 === (2))){
var state_9409__$1 = state_9409;
var statearr_9415_9430 = state_9409__$1;
(statearr_9415_9430[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9410 === (1))){
var state_9409__$1 = state_9409;
var statearr_9417_9431 = state_9409__$1;
(statearr_9417_9431[(2)] = null);

(statearr_9417_9431[(1)] = (2));


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
});})(c__6541__auto___9426,moves_9425))
;
return ((function (switch__6476__auto__,c__6541__auto___9426,moves_9425){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_9421 = [null,null,null,null,null,null,null,null];
(statearr_9421[(0)] = state_machine__6477__auto__);

(statearr_9421[(1)] = (1));

return statearr_9421;
});
var state_machine__6477__auto____1 = (function (state_9409){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_9409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e9422){if((e9422 instanceof Object)){
var ex__6480__auto__ = e9422;
var statearr_9423_9432 = state_9409;
(statearr_9423_9432[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9433 = state_9409;
state_9409 = G__9433;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_9409){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_9409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___9426,moves_9425))
})();
var state__6543__auto__ = (function (){var statearr_9424 = f__6542__auto__.call(null);
(statearr_9424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___9426);

return statearr_9424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___9426,moves_9425))
);

var clicks_9462 = cljstemplate.core.listen.call(null,goog.dom.getElement("nextButton"),"click");
var c__6541__auto___9463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___9463,clicks_9462){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___9463,clicks_9462){
return (function (state_9446){
var state_val_9447 = (state_9446[(1)]);
if((state_val_9447 === (7))){
var inst_9437 = (state_9446[(2)]);
var inst_9438 = cljstemplate.core.level_up.call(null,cljs.core.inc);
var state_9446__$1 = (function (){var statearr_9448 = state_9446;
(statearr_9448[(7)] = inst_9438);

(statearr_9448[(8)] = inst_9437);

return statearr_9448;
})();
var statearr_9449_9464 = state_9446__$1;
(statearr_9449_9464[(2)] = null);

(statearr_9449_9464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9447 === (6))){
var inst_9442 = (state_9446[(2)]);
var state_9446__$1 = state_9446;
var statearr_9450_9465 = state_9446__$1;
(statearr_9450_9465[(2)] = inst_9442);

(statearr_9450_9465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9447 === (5))){
var state_9446__$1 = state_9446;
var statearr_9451_9466 = state_9446__$1;
(statearr_9451_9466[(2)] = null);

(statearr_9451_9466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9447 === (4))){
var state_9446__$1 = state_9446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9446__$1,(7),clicks_9462);
} else {
if((state_val_9447 === (3))){
var inst_9444 = (state_9446[(2)]);
var state_9446__$1 = state_9446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9446__$1,inst_9444);
} else {
if((state_val_9447 === (2))){
var state_9446__$1 = state_9446;
var statearr_9452_9467 = state_9446__$1;
(statearr_9452_9467[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9447 === (1))){
var state_9446__$1 = state_9446;
var statearr_9454_9468 = state_9446__$1;
(statearr_9454_9468[(2)] = null);

(statearr_9454_9468[(1)] = (2));


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
});})(c__6541__auto___9463,clicks_9462))
;
return ((function (switch__6476__auto__,c__6541__auto___9463,clicks_9462){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_9458 = [null,null,null,null,null,null,null,null,null];
(statearr_9458[(0)] = state_machine__6477__auto__);

(statearr_9458[(1)] = (1));

return statearr_9458;
});
var state_machine__6477__auto____1 = (function (state_9446){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_9446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e9459){if((e9459 instanceof Object)){
var ex__6480__auto__ = e9459;
var statearr_9460_9469 = state_9446;
(statearr_9460_9469[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9470 = state_9446;
state_9446 = G__9470;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_9446){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_9446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___9463,clicks_9462))
})();
var state__6543__auto__ = (function (){var statearr_9461 = f__6542__auto__.call(null);
(statearr_9461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___9463);

return statearr_9461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___9463,clicks_9462))
);

cljstemplate.core.done_fn = (function done_fn(){
return goog.dom.getElement("nextButton").style.visibility = "visible";
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
var resizes_9499 = cljstemplate.core.listen.call(null,window,"resize");
var c__6541__auto___9500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6541__auto___9500,resizes_9499){
return (function (){
var f__6542__auto__ = (function (){var switch__6476__auto__ = ((function (c__6541__auto___9500,resizes_9499){
return (function (state_9483){
var state_val_9484 = (state_9483[(1)]);
if((state_val_9484 === (7))){
var inst_9474 = (state_9483[(2)]);
var inst_9475 = cljstemplate.core.reset_canvas.call(null);
var state_9483__$1 = (function (){var statearr_9485 = state_9483;
(statearr_9485[(7)] = inst_9475);

(statearr_9485[(8)] = inst_9474);

return statearr_9485;
})();
var statearr_9486_9501 = state_9483__$1;
(statearr_9486_9501[(2)] = null);

(statearr_9486_9501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9484 === (6))){
var inst_9479 = (state_9483[(2)]);
var state_9483__$1 = state_9483;
var statearr_9487_9502 = state_9483__$1;
(statearr_9487_9502[(2)] = inst_9479);

(statearr_9487_9502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9484 === (5))){
var state_9483__$1 = state_9483;
var statearr_9488_9503 = state_9483__$1;
(statearr_9488_9503[(2)] = null);

(statearr_9488_9503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9484 === (4))){
var state_9483__$1 = state_9483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9483__$1,(7),resizes_9499);
} else {
if((state_val_9484 === (3))){
var inst_9481 = (state_9483[(2)]);
var state_9483__$1 = state_9483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9483__$1,inst_9481);
} else {
if((state_val_9484 === (2))){
var state_9483__$1 = state_9483;
var statearr_9489_9504 = state_9483__$1;
(statearr_9489_9504[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9484 === (1))){
var state_9483__$1 = state_9483;
var statearr_9491_9505 = state_9483__$1;
(statearr_9491_9505[(2)] = null);

(statearr_9491_9505[(1)] = (2));


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
});})(c__6541__auto___9500,resizes_9499))
;
return ((function (switch__6476__auto__,c__6541__auto___9500,resizes_9499){
return (function() {
var state_machine__6477__auto__ = null;
var state_machine__6477__auto____0 = (function (){
var statearr_9495 = [null,null,null,null,null,null,null,null,null];
(statearr_9495[(0)] = state_machine__6477__auto__);

(statearr_9495[(1)] = (1));

return statearr_9495;
});
var state_machine__6477__auto____1 = (function (state_9483){
while(true){
var ret_value__6478__auto__ = (function (){try{while(true){
var result__6479__auto__ = switch__6476__auto__.call(null,state_9483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6479__auto__;
}
break;
}
}catch (e9496){if((e9496 instanceof Object)){
var ex__6480__auto__ = e9496;
var statearr_9497_9506 = state_9483;
(statearr_9497_9506[(5)] = ex__6480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9507 = state_9483;
state_9483 = G__9507;
continue;
} else {
return ret_value__6478__auto__;
}
break;
}
});
state_machine__6477__auto__ = function(state_9483){
switch(arguments.length){
case 0:
return state_machine__6477__auto____0.call(this);
case 1:
return state_machine__6477__auto____1.call(this,state_9483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6477__auto____0;
state_machine__6477__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6477__auto____1;
return state_machine__6477__auto__;
})()
;})(switch__6476__auto__,c__6541__auto___9500,resizes_9499))
})();
var state__6543__auto__ = (function (){var statearr_9498 = f__6542__auto__.call(null);
(statearr_9498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6541__auto___9500);

return statearr_9498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6543__auto__);
});})(c__6541__auto___9500,resizes_9499))
);

cljstemplate.core.fill_rect = (function fill_rect(p__9508,p__9509,p__9510){
var vec__9514 = p__9508;
var surface = cljs.core.nth.call(null,vec__9514,(0),null);
var vec__9515 = p__9509;
var x = cljs.core.nth.call(null,vec__9515,(0),null);
var y = cljs.core.nth.call(null,vec__9515,(1),null);
var width = cljs.core.nth.call(null,vec__9515,(2),null);
var height = cljs.core.nth.call(null,vec__9515,(3),null);
var vec__9516 = p__9510;
var r = cljs.core.nth.call(null,vec__9516,(0),null);
var g = cljs.core.nth.call(null,vec__9516,(1),null);
var b = cljs.core.nth.call(null,vec__9516,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__9517,color){
var vec__9519 = p__9517;
var surface = cljs.core.nth.call(null,vec__9519,(0),null);
var w = cljs.core.nth.call(null,vec__9519,(1),null);
var h = cljs.core.nth.call(null,vec__9519,(2),null);
return cljstemplate.core.fill_rect.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear.call(null,cljstemplate.core.canvas,cljs.core.first.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level))));

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljs.core.partial.call(null,cljstemplate.shape.do_rotations,timestamp));

var map__9522_9523 = cljs.core.deref.call(null,cljstemplate.core.pointer_state);
var map__9522_9524__$1 = ((cljs.core.seq_QMARK_.call(null,map__9522_9523))?cljs.core.apply.call(null,cljs.core.hash_map,map__9522_9523):map__9522_9523);
var x_9525 = cljs.core.get.call(null,map__9522_9524__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_9526 = cljs.core.get.call(null,map__9522_9524__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_9527 = cljs.core.get.call(null,map__9522_9524__$1,new cljs.core.Keyword(null,"clicked","clicked",114423720));
var was_done_9528 = cljs.core.deref.call(null,cljstemplate.core.done);
var canvas_9529 = (cljs.core.truth_(cljs.core.deref.call(null,cljstemplate.core.level_checked))?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,((function (map__9522_9523,map__9522_9524__$1,x_9525,y_9526,clicked_9527,was_done_9528,canvas_9529){
return (function (p1__9520_SHARP_){
return cljstemplate.shape.render.call(null,canvas_9529,p1__9520_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_9525,y_9526,clicked_9527,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__9522_9523,map__9522_9524__$1,x_9525,y_9526,clicked_9527,was_done_9528,canvas_9529))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_9528;
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
return cljs.core.not.call(null,was_done_9528);
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