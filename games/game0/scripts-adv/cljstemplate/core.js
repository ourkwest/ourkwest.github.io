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
var clicks_11169 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousedown");
var c__5992__auto___11170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___11170,clicks_11169){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___11170,clicks_11169){
return (function (state_11153){
var state_val_11154 = (state_11153[(1)]);
if((state_val_11154 === (7))){
var inst_11144 = (state_11153[(2)]);
var inst_11145 = cljstemplate.core.handle_click.call(null,inst_11144);
var state_11153__$1 = (function (){var statearr_11155 = state_11153;
(statearr_11155[(7)] = inst_11145);

return statearr_11155;
})();
var statearr_11156_11171 = state_11153__$1;
(statearr_11156_11171[(2)] = null);

(statearr_11156_11171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (6))){
var inst_11149 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
var statearr_11157_11172 = state_11153__$1;
(statearr_11157_11172[(2)] = inst_11149);

(statearr_11157_11172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (5))){
var state_11153__$1 = state_11153;
var statearr_11158_11173 = state_11153__$1;
(statearr_11158_11173[(2)] = null);

(statearr_11158_11173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (4))){
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11153__$1,(7),clicks_11169);
} else {
if((state_val_11154 === (3))){
var inst_11151 = (state_11153[(2)]);
var state_11153__$1 = state_11153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11153__$1,inst_11151);
} else {
if((state_val_11154 === (2))){
var state_11153__$1 = state_11153;
var statearr_11159_11174 = state_11153__$1;
(statearr_11159_11174[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11154 === (1))){
var state_11153__$1 = state_11153;
var statearr_11161_11175 = state_11153__$1;
(statearr_11161_11175[(2)] = null);

(statearr_11161_11175[(1)] = (2));


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
});})(c__5992__auto___11170,clicks_11169))
;
return ((function (switch__5977__auto__,c__5992__auto___11170,clicks_11169){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_11165 = [null,null,null,null,null,null,null,null];
(statearr_11165[(0)] = state_machine__5978__auto__);

(statearr_11165[(1)] = (1));

return statearr_11165;
});
var state_machine__5978__auto____1 = (function (state_11153){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_11153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e11166){if((e11166 instanceof Object)){
var ex__5981__auto__ = e11166;
var statearr_11167_11176 = state_11153;
(statearr_11167_11176[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11177 = state_11153;
state_11153 = G__11177;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___11170,clicks_11169))
})();
var state__5994__auto__ = (function (){var statearr_11168 = f__5993__auto__.call(null);
(statearr_11168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___11170);

return statearr_11168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___11170,clicks_11169))
);

cljstemplate.core.handle_moves = (function handle_moves(event){
var rect = goog.dom.getElement("theCanvas").getBoundingClientRect();
return cljs.core.swap_BANG_.call(null,cljstemplate.core.pointer_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.clientX - rect.left),new cljs.core.Keyword(null,"y","y",-1757859776),(event.clientY - rect.top)], null));
});
var moves_11206 = cljstemplate.core.listen.call(null,goog.dom.getElement("theCanvas"),"mousemove");
var c__5992__auto___11207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___11207,moves_11206){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___11207,moves_11206){
return (function (state_11190){
var state_val_11191 = (state_11190[(1)]);
if((state_val_11191 === (7))){
var inst_11181 = (state_11190[(2)]);
var inst_11182 = cljstemplate.core.handle_moves.call(null,inst_11181);
var state_11190__$1 = (function (){var statearr_11192 = state_11190;
(statearr_11192[(7)] = inst_11182);

return statearr_11192;
})();
var statearr_11193_11208 = state_11190__$1;
(statearr_11193_11208[(2)] = null);

(statearr_11193_11208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (6))){
var inst_11186 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
var statearr_11194_11209 = state_11190__$1;
(statearr_11194_11209[(2)] = inst_11186);

(statearr_11194_11209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (5))){
var state_11190__$1 = state_11190;
var statearr_11195_11210 = state_11190__$1;
(statearr_11195_11210[(2)] = null);

(statearr_11195_11210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (4))){
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11190__$1,(7),moves_11206);
} else {
if((state_val_11191 === (3))){
var inst_11188 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else {
if((state_val_11191 === (2))){
var state_11190__$1 = state_11190;
var statearr_11196_11211 = state_11190__$1;
(statearr_11196_11211[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (1))){
var state_11190__$1 = state_11190;
var statearr_11198_11212 = state_11190__$1;
(statearr_11198_11212[(2)] = null);

(statearr_11198_11212[(1)] = (2));


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
});})(c__5992__auto___11207,moves_11206))
;
return ((function (switch__5977__auto__,c__5992__auto___11207,moves_11206){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_11202 = [null,null,null,null,null,null,null,null];
(statearr_11202[(0)] = state_machine__5978__auto__);

(statearr_11202[(1)] = (1));

return statearr_11202;
});
var state_machine__5978__auto____1 = (function (state_11190){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_11190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e11203){if((e11203 instanceof Object)){
var ex__5981__auto__ = e11203;
var statearr_11204_11213 = state_11190;
(statearr_11204_11213[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11214 = state_11190;
state_11190 = G__11214;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___11207,moves_11206))
})();
var state__5994__auto__ = (function (){var statearr_11205 = f__5993__auto__.call(null);
(statearr_11205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___11207);

return statearr_11205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___11207,moves_11206))
);

var clicks_11243 = cljstemplate.core.listen.call(null,goog.dom.getElement("nextButton"),"click");
var c__5992__auto___11244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___11244,clicks_11243){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___11244,clicks_11243){
return (function (state_11227){
var state_val_11228 = (state_11227[(1)]);
if((state_val_11228 === (7))){
var inst_11218 = (state_11227[(2)]);
var inst_11219 = cljstemplate.core.level_up.call(null,cljs.core.inc);
var state_11227__$1 = (function (){var statearr_11229 = state_11227;
(statearr_11229[(7)] = inst_11219);

(statearr_11229[(8)] = inst_11218);

return statearr_11229;
})();
var statearr_11230_11245 = state_11227__$1;
(statearr_11230_11245[(2)] = null);

(statearr_11230_11245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (6))){
var inst_11223 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
var statearr_11231_11246 = state_11227__$1;
(statearr_11231_11246[(2)] = inst_11223);

(statearr_11231_11246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (5))){
var state_11227__$1 = state_11227;
var statearr_11232_11247 = state_11227__$1;
(statearr_11232_11247[(2)] = null);

(statearr_11232_11247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (4))){
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11227__$1,(7),clicks_11243);
} else {
if((state_val_11228 === (3))){
var inst_11225 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11227__$1,inst_11225);
} else {
if((state_val_11228 === (2))){
var state_11227__$1 = state_11227;
var statearr_11233_11248 = state_11227__$1;
(statearr_11233_11248[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (1))){
var state_11227__$1 = state_11227;
var statearr_11235_11249 = state_11227__$1;
(statearr_11235_11249[(2)] = null);

(statearr_11235_11249[(1)] = (2));


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
});})(c__5992__auto___11244,clicks_11243))
;
return ((function (switch__5977__auto__,c__5992__auto___11244,clicks_11243){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_11239 = [null,null,null,null,null,null,null,null,null];
(statearr_11239[(0)] = state_machine__5978__auto__);

(statearr_11239[(1)] = (1));

return statearr_11239;
});
var state_machine__5978__auto____1 = (function (state_11227){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_11227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e11240){if((e11240 instanceof Object)){
var ex__5981__auto__ = e11240;
var statearr_11241_11250 = state_11227;
(statearr_11241_11250[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11251 = state_11227;
state_11227 = G__11251;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_11227){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_11227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___11244,clicks_11243))
})();
var state__5994__auto__ = (function (){var statearr_11242 = f__5993__auto__.call(null);
(statearr_11242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___11244);

return statearr_11242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___11244,clicks_11243))
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
var resizes_11280 = cljstemplate.core.listen.call(null,window,"resize");
var c__5992__auto___11281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5992__auto___11281,resizes_11280){
return (function (){
var f__5993__auto__ = (function (){var switch__5977__auto__ = ((function (c__5992__auto___11281,resizes_11280){
return (function (state_11264){
var state_val_11265 = (state_11264[(1)]);
if((state_val_11265 === (7))){
var inst_11255 = (state_11264[(2)]);
var inst_11256 = cljstemplate.core.reset_canvas.call(null);
var state_11264__$1 = (function (){var statearr_11266 = state_11264;
(statearr_11266[(7)] = inst_11255);

(statearr_11266[(8)] = inst_11256);

return statearr_11266;
})();
var statearr_11267_11282 = state_11264__$1;
(statearr_11267_11282[(2)] = null);

(statearr_11267_11282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (6))){
var inst_11260 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
var statearr_11268_11283 = state_11264__$1;
(statearr_11268_11283[(2)] = inst_11260);

(statearr_11268_11283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (5))){
var state_11264__$1 = state_11264;
var statearr_11269_11284 = state_11264__$1;
(statearr_11269_11284[(2)] = null);

(statearr_11269_11284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (4))){
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11264__$1,(7),resizes_11280);
} else {
if((state_val_11265 === (3))){
var inst_11262 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11264__$1,inst_11262);
} else {
if((state_val_11265 === (2))){
var state_11264__$1 = state_11264;
var statearr_11270_11285 = state_11264__$1;
(statearr_11270_11285[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11265 === (1))){
var state_11264__$1 = state_11264;
var statearr_11272_11286 = state_11264__$1;
(statearr_11272_11286[(2)] = null);

(statearr_11272_11286[(1)] = (2));


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
});})(c__5992__auto___11281,resizes_11280))
;
return ((function (switch__5977__auto__,c__5992__auto___11281,resizes_11280){
return (function() {
var state_machine__5978__auto__ = null;
var state_machine__5978__auto____0 = (function (){
var statearr_11276 = [null,null,null,null,null,null,null,null,null];
(statearr_11276[(0)] = state_machine__5978__auto__);

(statearr_11276[(1)] = (1));

return statearr_11276;
});
var state_machine__5978__auto____1 = (function (state_11264){
while(true){
var ret_value__5979__auto__ = (function (){try{while(true){
var result__5980__auto__ = switch__5977__auto__.call(null,state_11264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5980__auto__;
}
break;
}
}catch (e11277){if((e11277 instanceof Object)){
var ex__5981__auto__ = e11277;
var statearr_11278_11287 = state_11264;
(statearr_11278_11287[(5)] = ex__5981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11288 = state_11264;
state_11264 = G__11288;
continue;
} else {
return ret_value__5979__auto__;
}
break;
}
});
state_machine__5978__auto__ = function(state_11264){
switch(arguments.length){
case 0:
return state_machine__5978__auto____0.call(this);
case 1:
return state_machine__5978__auto____1.call(this,state_11264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5978__auto____0;
state_machine__5978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5978__auto____1;
return state_machine__5978__auto__;
})()
;})(switch__5977__auto__,c__5992__auto___11281,resizes_11280))
})();
var state__5994__auto__ = (function (){var statearr_11279 = f__5993__auto__.call(null);
(statearr_11279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5992__auto___11281);

return statearr_11279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5994__auto__);
});})(c__5992__auto___11281,resizes_11280))
);

cljstemplate.core.fill_rect = (function fill_rect(p__11289,p__11290,p__11291){
var vec__11295 = p__11289;
var surface = cljs.core.nth.call(null,vec__11295,(0),null);
var vec__11296 = p__11290;
var x = cljs.core.nth.call(null,vec__11296,(0),null);
var y = cljs.core.nth.call(null,vec__11296,(1),null);
var width = cljs.core.nth.call(null,vec__11296,(2),null);
var height = cljs.core.nth.call(null,vec__11296,(3),null);
var vec__11297 = p__11291;
var r = cljs.core.nth.call(null,vec__11297,(0),null);
var g = cljs.core.nth.call(null,vec__11297,(1),null);
var b = cljs.core.nth.call(null,vec__11297,(2),null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');

return surface.fillRect(x,y,width,height);
});
cljstemplate.core.clear = (function clear(p__11298,color){
var vec__11300 = p__11298;
var surface = cljs.core.nth.call(null,vec__11300,(0),null);
var w = cljs.core.nth.call(null,vec__11300,(1),null);
var h = cljs.core.nth.call(null,vec__11300,(2),null);
return cljstemplate.core.fill_rect.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [surface,w,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),w,h], null),color);
});
cljstemplate.core.per_frame_processing = (function per_frame_processing(timestamp){
cljstemplate.core.clear.call(null,cljstemplate.core.canvas,cljs.core.first.call(null,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljstemplate.core.this_level))));

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljstemplate.shape.check_connections);

cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,cljs.core.partial.call(null,cljstemplate.shape.do_rotations,timestamp));

var map__11303_11304 = cljs.core.deref.call(null,cljstemplate.core.pointer_state);
var map__11303_11305__$1 = ((cljs.core.seq_QMARK_.call(null,map__11303_11304))?cljs.core.apply.call(null,cljs.core.hash_map,map__11303_11304):map__11303_11304);
var x_11306 = cljs.core.get.call(null,map__11303_11305__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_11307 = cljs.core.get.call(null,map__11303_11305__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_11308 = cljs.core.get.call(null,map__11303_11305__$1,new cljs.core.Keyword(null,"clicked","clicked",114423720));
var was_done_11309 = cljs.core.deref.call(null,cljstemplate.core.done);
var canvas_11310 = (cljs.core.truth_(cljs.core.deref.call(null,cljstemplate.core.level_checked))?cljstemplate.core.canvas:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljstemplate.core.canvas),(1),(1)], null));
cljs.core.swap_BANG_.call(null,cljstemplate.core.this_level,((function (map__11303_11304,map__11303_11305__$1,x_11306,y_11307,clicked_11308,was_done_11309,canvas_11310){
return (function (p1__11301_SHARP_){
return cljstemplate.shape.render.call(null,canvas_11310,p1__11301_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_11306,y_11307,clicked_11308,timestamp], null),timestamp,cljstemplate.core.done);
});})(map__11303_11304,map__11303_11305__$1,x_11306,y_11307,clicked_11308,was_done_11309,canvas_11310))
);

if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.deref.call(null,cljstemplate.core.level_checked);
if(cljs.core.truth_(and__3799__auto__)){
var and__3799__auto____$1 = cljs.core.deref.call(null,cljstemplate.core.done);
if(cljs.core.truth_(and__3799__auto____$1)){
return was_done_11309;
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
return cljs.core.not.call(null,was_done_11309);
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
