// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.shape');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.shape.log = cljstemplate.logging.logger.call(null,new cljs.core.Keyword(null,"shape","shape",1190694006));
cljstemplate.shape.debug = false;
cljstemplate.shape.index_of = (function index_of(s,v){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return null;
} else {
if(cljs.core._EQ_.call(null,v,cljs.core.first.call(null,items))){
return idx;
} else {
var G__74439 = (idx + (1));
var G__74440 = cljs.core.rest.call(null,items);
idx = G__74439;
items = G__74440;
continue;

}
}
break;
}
});
cljstemplate.shape.not_rotating_QMARK_ = (function not_rotating_QMARK_(shape){
return cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
});
cljstemplate.shape.rotating_QMARK_ = cljs.core.complement.call(null,cljstemplate.shape.not_rotating_QMARK_);
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__74441){
var vec__74443 = p__74441;
var in$ = cljs.core.nth.call(null,vec__74443,(0),null);
var out = cljs.core.nth.call(null,vec__74443,(1),null);
var _ = cljs.core.nth.call(null,vec__74443,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__74443,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),(function (p1__74444_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_channel_connections,p1__74444_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__74445_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_shape_connections,p1__74445_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,(2),direction_id], null),new cljs.core.Keyword(null,"on","on",173873944));
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__74446,index){
var vec__74449 = p__74446;
var from = cljs.core.nth.call(null,vec__74449,(0),null);
var onto = cljs.core.nth.call(null,vec__74449,(1),null);
var vec__74450 = cljs.core.nth.call(null,vec__74449,(2),null);
var backward = cljs.core.nth.call(null,vec__74450,(0),null);
var forward = cljs.core.nth.call(null,vec__74450,(1),null);
if((cljs.core._EQ_.call(null,from,target)) && (cljs.core._EQ_.call(null,forward,new cljs.core.Keyword(null,"off","off",606440789)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(1)], null);
} else {
if((cljs.core._EQ_.call(null,onto,target)) && (cljs.core._EQ_.call(null,backward,new cljs.core.Keyword(null,"off","off",606440789)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(0)], null);
} else {
return null;

}
}
});
cljstemplate.shape.find_wires = (function find_wires(target,wires){
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.shape.wire_index_select,target),wires,cljs.core.range.call(null)));
});
cljstemplate.shape.seeds_from = (function seeds_from(shapes,shape_id,from_shape_id,channel_id){
var shape = cljs.core.nth.call(null,shapes,shape_id);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_.call(null,shape))){
var neighbour_index = cljstemplate.shape.index_of.call(null,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shape),from_shape_id);
var channel_wires = cljs.core.nth.call(null,new cljs.core.Keyword(null,"wiring","wiring",-1202756092).cljs$core$IFn$_invoke$arity$1(shape),channel_id);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape);
var r = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape));
var rotated_neighbour_index = cljs.core.mod.call(null,((neighbour_index + n) + (- r)),n);
return cljs.core.mapv.call(null,((function (neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape){
return (function (p1__74451_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__74451_SHARP_);
});})(neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape))
,cljstemplate.shape.find_wires.call(null,rotated_neighbour_index,channel_wires));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljstemplate.shape.more_seeds = (function more_seeds(shapes,shape_id,channel_id,wire_id,direction_id){
var shape = cljs.core.nth.call(null,shapes,shape_id);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_.call(null,shape))){
var neighbours = new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shape);
var output = cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,direction_id], null));
var position = cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var sides = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape);
var neighbour_id = cljs.core.nth.call(null,neighbours,cljs.core.mod.call(null,(output + position),sides));
if(cljs.core.truth_((function (){var and__3799__auto__ = neighbour_id;
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not_EQ_.call(null,output,(9));
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.seeds_from.call(null,shapes,neighbour_id,shape_id,channel_id);
} else {
return null;
}
} else {
return null;
}
});
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__74453){
while(true){
var vec__74456 = p__74453;
var vec__74457 = cljs.core.nth.call(null,vec__74456,(0),null);
var shape_id = cljs.core.nth.call(null,vec__74457,(0),null);
var channel_id = cljs.core.nth.call(null,vec__74457,(1),null);
var wire_id = cljs.core.nth.call(null,vec__74457,(2),null);
var direction_id = cljs.core.nth.call(null,vec__74457,(3),null);
var seeds = cljs.core.nthnext.call(null,vec__74456,(1));
var new_shapes = cljs.core.update.call(null,shapes,shape_id,((function (shapes,p__74453,vec__74456,vec__74457,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__74452_SHARP_){
return cljstemplate.shape.switch_on.call(null,p1__74452_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__74453,vec__74456,vec__74457,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.call(null,seeds,cljstemplate.shape.more_seeds.call(null,new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq.call(null,new_seeds)){
var G__74458 = new_shapes;
var G__74459 = new_seeds;
shapes = G__74458;
p__74453 = G__74459;
continue;
} else {
return new_shapes;
}
break;
}
});
cljstemplate.shape.seed_lights = (function seed_lights(level,shape_id,channel_id){
var shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(level);
var shape = cljs.core.nth.call(null,shapes,shape_id);
var wiring = new cljs.core.Keyword(null,"wiring","wiring",-1202756092).cljs$core$IFn$_invoke$arity$1(shape);
var channel_wiring = cljs.core.nth.call(null,wiring,channel_id);
return cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__74460_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__74460_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))),cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__74461_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__74461_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.call(null,cljstemplate.shape.seed_lights,cljs.core.repeat.call(null,level),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.call(null));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__74462_SHARP_){
return cljstemplate.shape.populate_shape_connections.call(null,p1__74462_SHARP_,cljstemplate.shape.seed_light.call(null,level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections.call(null,cljstemplate.shape.clear_connections.call(null,level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__74463,p__74464){
var vec__74467 = p__74463;
var a = cljs.core.nth.call(null,vec__74467,(0),null);
var b = cljs.core.nth.call(null,vec__74467,(1),null);
var c = cljs.core.nth.call(null,vec__74467,(2),null);
var vec__74468 = p__74464;
var d = cljs.core.nth.call(null,vec__74468,(0),null);
var f = cljs.core.nth.call(null,vec__74468,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__74469){
var map__74472 = p__74469;
var map__74472__$1 = ((cljs.core.seq_QMARK_.call(null,map__74472))?cljs.core.apply.call(null,cljs.core.hash_map,map__74472):map__74472);
var shape = map__74472__$1;
var map__74473 = cljs.core.get.call(null,map__74472__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__74473__$1 = ((cljs.core.seq_QMARK_.call(null,map__74473))?cljs.core.apply.call(null,cljs.core.hash_map,map__74473):map__74473);
var start = cljs.core.get.call(null,map__74473__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__74473__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start_time = cljs.core.get.call(null,map__74473__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var end_time = cljs.core.get.call(null,map__74473__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
if(cljs.core.truth_(cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"position","position",-2011731912)], null)))){
return shape;
} else {
if((end_time < timestamp)){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),end], null));
} else {
if((timestamp < start_time)){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"current","current",-1088038603)], null),start);
} else {
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"current","current",-1088038603)], null),cljstemplate.shape.proportionalise.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,timestamp,end_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)));

}
}
}
});
cljstemplate.shape.do_rotations = (function do_rotations(timestamp,level){
var r_fn = cljs.core.partial.call(null,cljstemplate.shape.rotated,timestamp);
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (r_fn){
return (function (p1__74474_SHARP_){
return cljs.core.map.call(null,r_fn,p1__74474_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__74475){
var vec__74477 = p__74475;
var _ = cljs.core.nth.call(null,vec__74477,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__74477,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__74477,(2),null);
var timestamp = cljs.core.nth.call(null,vec__74477,(3),null);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_.call(null,shape))){
var start = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape));
var end = start;
var start_time = timestamp;
var end_time = timestamp;
return cljs.core.merge.call(null,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"current","current",-1088038603),start,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),end_time], null)], null));
} else {
var start = (function (){var or__3811__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto____$1)){
return or__3811__auto____$1;
} else {
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape));
}
}
})();
var end = (new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)) - (1));
var start_time = timestamp;
var end_time = (new cljs.core.Keyword(null,"end-time","end-time",-1849817460).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)) + (250));
return cljs.core.merge.call(null,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"current","current",-1088038603),start,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),end_time], null)], null));
}
});
cljstemplate.shape.rgb_str = (function rgb_str(p__74478){
var vec__74480 = p__74478;
var r = cljs.core.nth.call(null,vec__74480,(0),null);
var g = cljs.core.nth.call(null,vec__74480,(1),null);
var b = cljs.core.nth.call(null,vec__74480,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__74481){
var vec__74483 = p__74481;
var r = cljs.core.nth.call(null,vec__74483,(0),null);
var g = cljs.core.nth.call(null,vec__74483,(1),null);
var b = cljs.core.nth.call(null,vec__74483,(2),null);
var a = cljs.core.nth.call(null,vec__74483,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__74485 = temp__4124__auto__;
var x = cljs.core.nth.call(null,vec__74485,(0),null);
var y = cljs.core.nth.call(null,vec__74485,(1),null);
var clicked = cljs.core.nth.call(null,vec__74485,(2),null);
var and__3799__auto__ = clicked;
if(cljs.core.truth_(and__3799__auto__)){
return context.isPointInPath(x,y);
} else {
return and__3799__auto__;
}
} else {
return null;
}
})())){
return cljstemplate.shape.clicked.call(null,shape,click);
} else {
return shape;
}
});
cljstemplate.shape.vertices = (function vertices(p__74487,xs,ys,sf){
var map__74494 = p__74487;
var map__74494__$1 = ((cljs.core.seq_QMARK_.call(null,map__74494))?cljs.core.apply.call(null,cljs.core.hash_map,map__74494):map__74494);
var n = cljs.core.get.call(null,map__74494__$1,new cljs.core.Keyword(null,"n","n",562130025));
var vec__74495 = cljs.core.get.call(null,map__74494__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__74495,(0),null);
var y = cljs.core.nth.call(null,vec__74495,(1),null);
var r = cljs.core.nth.call(null,vec__74495,(2),null);
var rotation = cljs.core.get.call(null,map__74494__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var alpha = cljstemplate.shape.alphas.call(null,n);
var delta = (alpha / (2));
var radius = (cljstemplate.shape.radii.call(null,n) * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (alpha,delta,radius,beta,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation){
return (function (p1__74486_SHARP_){
return (p1__74486_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation){
return (function iter__74496(s__74497){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation){
return (function (){
var s__74497__$1 = s__74497;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__74497__$1);
if(temp__4126__auto__){
var s__74497__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__74497__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__74497__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__74499 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__74498 = (0);
while(true){
if((i__74498 < size__4566__auto__)){
var gamma = cljs.core._nth.call(null,c__4565__auto__,i__74498);
cljs.core.chunk_append.call(null,b__74499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null));

var G__74500 = (i__74498 + (1));
i__74498 = G__74500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74499),iter__74496.call(null,cljs.core.chunk_rest.call(null,s__74497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74499),null);
}
} else {
var gamma = cljs.core.first.call(null,s__74497__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null),iter__74496.call(null,cljs.core.rest.call(null,s__74497__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__74494,map__74494__$1,n,vec__74495,x,y,r,rotation))
;
return iter__4567__auto__.call(null,gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__74501){
var vec__74510 = p__74501;
var vec__74511 = cljs.core.nth.call(null,vec__74510,(0),null);
var x1 = cljs.core.nth.call(null,vec__74511,(0),null);
var y1 = cljs.core.nth.call(null,vec__74511,(1),null);
var rest = cljs.core.nthnext.call(null,vec__74510,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__74512_74518 = cljs.core.seq.call(null,rest);
var chunk__74513_74519 = null;
var count__74514_74520 = (0);
var i__74515_74521 = (0);
while(true){
if((i__74515_74521 < count__74514_74520)){
var vec__74516_74522 = cljs.core._nth.call(null,chunk__74513_74519,i__74515_74521);
var xr_74523 = cljs.core.nth.call(null,vec__74516_74522,(0),null);
var yr_74524 = cljs.core.nth.call(null,vec__74516_74522,(1),null);
context.lineTo(xr_74523,yr_74524);

var G__74525 = seq__74512_74518;
var G__74526 = chunk__74513_74519;
var G__74527 = count__74514_74520;
var G__74528 = (i__74515_74521 + (1));
seq__74512_74518 = G__74525;
chunk__74513_74519 = G__74526;
count__74514_74520 = G__74527;
i__74515_74521 = G__74528;
continue;
} else {
var temp__4126__auto___74529 = cljs.core.seq.call(null,seq__74512_74518);
if(temp__4126__auto___74529){
var seq__74512_74530__$1 = temp__4126__auto___74529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74512_74530__$1)){
var c__4598__auto___74531 = cljs.core.chunk_first.call(null,seq__74512_74530__$1);
var G__74532 = cljs.core.chunk_rest.call(null,seq__74512_74530__$1);
var G__74533 = c__4598__auto___74531;
var G__74534 = cljs.core.count.call(null,c__4598__auto___74531);
var G__74535 = (0);
seq__74512_74518 = G__74532;
chunk__74513_74519 = G__74533;
count__74514_74520 = G__74534;
i__74515_74521 = G__74535;
continue;
} else {
var vec__74517_74536 = cljs.core.first.call(null,seq__74512_74530__$1);
var xr_74537 = cljs.core.nth.call(null,vec__74517_74536,(0),null);
var yr_74538 = cljs.core.nth.call(null,vec__74517_74536,(1),null);
context.lineTo(xr_74537,yr_74538);

var G__74539 = cljs.core.next.call(null,seq__74512_74530__$1);
var G__74540 = null;
var G__74541 = (0);
var G__74542 = (0);
seq__74512_74518 = G__74539;
chunk__74513_74519 = G__74540;
count__74514_74520 = G__74541;
i__74515_74521 = G__74542;
continue;
}
} else {
}
}
break;
}

return context.lineTo(x1,y1);
});
cljstemplate.shape.path_lengths = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)],[1.0,1.6,1.8,1.5,1.3,1.6,1.5,1.0,1.3,1.8]);
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__74545,p__74546,channels,p__74547,p__74548,id,timestamp){
var vec__74638 = p__74545;
var x_offset = cljs.core.nth.call(null,vec__74638,(0),null);
var y_offset = cljs.core.nth.call(null,vec__74638,(1),null);
var vec__74639 = p__74546;
var mx = cljs.core.nth.call(null,vec__74639,(0),null);
var my = cljs.core.nth.call(null,vec__74639,(1),null);
var mouse = vec__74639;
var vec__74640 = p__74547;
var _ = cljs.core.nth.call(null,vec__74640,(0),null);
var bdr = cljs.core.nth.call(null,vec__74640,(1),null);
var fg = cljs.core.nth.call(null,vec__74640,(2),null);
var map__74641 = p__74548;
var map__74641__$1 = ((cljs.core.seq_QMARK_.call(null,map__74641))?cljs.core.apply.call(null,cljs.core.hash_map,map__74641):map__74641);
var shape = map__74641__$1;
var vec__74642 = cljs.core.get.call(null,map__74641__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__74642,(0),null);
var y = cljs.core.nth.call(null,vec__74642,(1),null);
var r = cljs.core.nth.call(null,vec__74642,(2),null);
var n = cljs.core.get.call(null,map__74641__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotation = cljs.core.get.call(null,map__74641__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var wiring = cljs.core.get.call(null,map__74641__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
context.lineWidth = (1);

context.setLineDash([]);

var alpha = cljstemplate.shape.alphas.call(null,n);
var delta = (alpha / (2));
var radius = (cljstemplate.shape.radii.call(null,n) * sf);
var inner_radius = (cljstemplate.shape.inner_radii.call(null,n) * sf);
var pad = (cljstemplate.shape.pads.call(null,n) * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,vec__74638,x_offset,y_offset,vec__74639,mx,my,mouse,vec__74640,_,bdr,fg,map__74641,map__74641__$1,shape,vec__74642,x,y,r,n,rotation,wiring){
return (function (p1__74543_SHARP_){
return (p1__74543_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__74638,x_offset,y_offset,vec__74639,mx,my,mouse,vec__74640,_,bdr,fg,map__74641,map__74641__$1,shape,vec__74642,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__74638,x_offset,y_offset,vec__74639,mx,my,mouse,vec__74640,_,bdr,fg,map__74641,map__74641__$1,shape,vec__74642,x,y,r,n,rotation,wiring){
return (function (p1__74544_SHARP_){
return (p1__74544_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__74638,x_offset,y_offset,vec__74639,mx,my,mouse,vec__74640,_,bdr,fg,map__74641,map__74641__$1,shape,vec__74642,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__74643_74727 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__74644_74728 = null;
var count__74645_74729 = (0);
var i__74646_74730 = (0);
while(true){
if((i__74646_74730 < count__74645_74729)){
var gamma_74731 = cljs.core._nth.call(null,chunk__74644_74728,i__74646_74730);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_74731))),(ys + (radius * Math.cos.call(null,gamma_74731))));

var G__74732 = seq__74643_74727;
var G__74733 = chunk__74644_74728;
var G__74734 = count__74645_74729;
var G__74735 = (i__74646_74730 + (1));
seq__74643_74727 = G__74732;
chunk__74644_74728 = G__74733;
count__74645_74729 = G__74734;
i__74646_74730 = G__74735;
continue;
} else {
var temp__4126__auto___74736 = cljs.core.seq.call(null,seq__74643_74727);
if(temp__4126__auto___74736){
var seq__74643_74737__$1 = temp__4126__auto___74736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74643_74737__$1)){
var c__4598__auto___74738 = cljs.core.chunk_first.call(null,seq__74643_74737__$1);
var G__74739 = cljs.core.chunk_rest.call(null,seq__74643_74737__$1);
var G__74740 = c__4598__auto___74738;
var G__74741 = cljs.core.count.call(null,c__4598__auto___74738);
var G__74742 = (0);
seq__74643_74727 = G__74739;
chunk__74644_74728 = G__74740;
count__74645_74729 = G__74741;
i__74646_74730 = G__74742;
continue;
} else {
var gamma_74743 = cljs.core.first.call(null,seq__74643_74737__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_74743))),(ys + (radius * Math.cos.call(null,gamma_74743))));

var G__74744 = cljs.core.next.call(null,seq__74643_74737__$1);
var G__74745 = null;
var G__74746 = (0);
var G__74747 = (0);
seq__74643_74727 = G__74744;
chunk__74644_74728 = G__74745;
count__74645_74729 = G__74746;
i__74646_74730 = G__74747;
continue;
}
} else {
}
}
break;
}

context.closePath();

context.fillStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,fg,(cljs.core.truth_(context.isPointInPath(mx,my))?0.6:(1))));

context.fill();

context.save();

context.clip();

var result = cljstemplate.shape.click_result.call(null,shape,context,mouse);
var seq__74647_74748 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var chunk__74648_74749 = null;
var count__74649_74750 = (0);
var i__74650_74751 = (0);
while(true){
if((i__74650_74751 < count__74649_74750)){
var ch_74752 = cljs.core._nth.call(null,chunk__74648_74749,i__74650_74751);
var channel_74753 = cljs.core.nth.call(null,channels,ch_74752);
var channel_wiring_74754 = cljs.core.nth.call(null,wiring,ch_74752);
var ch_pos_74755 = ((ch_74752 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__74651_74756 = cljs.core.seq.call(null,channel_wiring_74754);
var chunk__74652_74757 = null;
var count__74653_74758 = (0);
var i__74654_74759 = (0);
while(true){
if((i__74654_74759 < count__74653_74758)){
var vec__74655_74760 = cljs.core._nth.call(null,chunk__74652_74757,i__74654_74759);
var from_74761 = cljs.core.nth.call(null,vec__74655_74760,(0),null);
var onto_74762 = cljs.core.nth.call(null,vec__74655_74760,(1),null);
var vec__74656_74763 = cljs.core.nth.call(null,vec__74655_74760,(2),null);
var fw_74764 = cljs.core.nth.call(null,vec__74656_74763,(0),null);
var bw_74765 = cljs.core.nth.call(null,vec__74656_74763,(1),null);
var switched_74766 = vec__74656_74763;
context.beginPath();

var vec__74657_74767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74761)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74761))], null);
var from_x_74768 = cljs.core.nth.call(null,vec__74657_74767,(0),null);
var from_y_74769 = cljs.core.nth.call(null,vec__74657_74767,(1),null);
var vec__74658_74770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74762)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74762))], null);
var onto_x_74771 = cljs.core.nth.call(null,vec__74658_74770,(0),null);
var onto_y_74772 = cljs.core.nth.call(null,vec__74658_74770,(1),null);
var vec__74659_74773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74761)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74761)))], null);
var from_x_p_74774 = cljs.core.nth.call(null,vec__74659_74773,(0),null);
var from_y_p_74775 = cljs.core.nth.call(null,vec__74659_74773,(1),null);
var vec__74660_74776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74762)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74762)))], null);
var onto_x_p_74777 = cljs.core.nth.call(null,vec__74660_74776,(0),null);
var onto_y_p_74778 = cljs.core.nth.call(null,vec__74660_74776,(1),null);
var vec__74661_74779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_74768)),(ys + (pad * from_y_74769))], null);
var xa_74780 = cljs.core.nth.call(null,vec__74661_74779,(0),null);
var ya_74781 = cljs.core.nth.call(null,vec__74661_74779,(1),null);
var vec__74662_74782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_74768)) + (ch_pos_74755 * from_x_p_74774)),((ys + ((0.5 * inner_radius) * from_y_74769)) + (ch_pos_74755 * from_y_p_74775))], null);
var xb_74783 = cljs.core.nth.call(null,vec__74662_74782,(0),null);
var yb_74784 = cljs.core.nth.call(null,vec__74662_74782,(1),null);
var vec__74663_74785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_74771)) + (ch_pos_74755 * onto_x_p_74777)),((ys + ((0.5 * inner_radius) * onto_y_74772)) + (ch_pos_74755 * onto_y_p_74778))], null);
var xc_74786 = cljs.core.nth.call(null,vec__74663_74785,(0),null);
var yc_74787 = cljs.core.nth.call(null,vec__74663_74785,(1),null);
var vec__74664_74788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_74771)),(ys + (pad * onto_y_74772))], null);
var xd_74789 = cljs.core.nth.call(null,vec__74664_74788,(0),null);
var yd_74790 = cljs.core.nth.call(null,vec__74664_74788,(1),null);
context.moveTo(xa_74780,ya_74781);

context.bezierCurveTo(xb_74783,yb_74784,xc_74786,yc_74787,xd_74789,yd_74790);

var length_est_74791 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_74761 - onto_74762))], null),(2)));
var offset_74792 = cljs.core.mod.call(null,((timestamp / (2000)) * (length_est_74791 + (1))),(length_est_74791 + (1)));
var lineDash_74793 = [(1),(length_est_74791 / (2))];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_74766))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_74753,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__74665_74794 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_74764,offset_74792], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_74765,(- offset_74792)], null)], null));
var chunk__74666_74795 = null;
var count__74667_74796 = (0);
var i__74668_74797 = (0);
while(true){
if((i__74668_74797 < count__74667_74796)){
var vec__74669_74798 = cljs.core._nth.call(null,chunk__74666_74795,i__74668_74797);
var direction_74799 = cljs.core.nth.call(null,vec__74669_74798,(0),null);
var os_74800 = cljs.core.nth.call(null,vec__74669_74798,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74799)){
context.setLineDash(lineDash_74793);

context.lineDashOffset = os_74800;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74801 = seq__74665_74794;
var G__74802 = chunk__74666_74795;
var G__74803 = count__74667_74796;
var G__74804 = (i__74668_74797 + (1));
seq__74665_74794 = G__74801;
chunk__74666_74795 = G__74802;
count__74667_74796 = G__74803;
i__74668_74797 = G__74804;
continue;
} else {
var temp__4126__auto___74805 = cljs.core.seq.call(null,seq__74665_74794);
if(temp__4126__auto___74805){
var seq__74665_74806__$1 = temp__4126__auto___74805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74665_74806__$1)){
var c__4598__auto___74807 = cljs.core.chunk_first.call(null,seq__74665_74806__$1);
var G__74808 = cljs.core.chunk_rest.call(null,seq__74665_74806__$1);
var G__74809 = c__4598__auto___74807;
var G__74810 = cljs.core.count.call(null,c__4598__auto___74807);
var G__74811 = (0);
seq__74665_74794 = G__74808;
chunk__74666_74795 = G__74809;
count__74667_74796 = G__74810;
i__74668_74797 = G__74811;
continue;
} else {
var vec__74670_74812 = cljs.core.first.call(null,seq__74665_74806__$1);
var direction_74813 = cljs.core.nth.call(null,vec__74670_74812,(0),null);
var os_74814 = cljs.core.nth.call(null,vec__74670_74812,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74813)){
context.setLineDash(lineDash_74793);

context.lineDashOffset = os_74814;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74815 = cljs.core.next.call(null,seq__74665_74806__$1);
var G__74816 = null;
var G__74817 = (0);
var G__74818 = (0);
seq__74665_74794 = G__74815;
chunk__74666_74795 = G__74816;
count__74667_74796 = G__74817;
i__74668_74797 = G__74818;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__74819 = seq__74651_74756;
var G__74820 = chunk__74652_74757;
var G__74821 = count__74653_74758;
var G__74822 = (i__74654_74759 + (1));
seq__74651_74756 = G__74819;
chunk__74652_74757 = G__74820;
count__74653_74758 = G__74821;
i__74654_74759 = G__74822;
continue;
} else {
var temp__4126__auto___74823 = cljs.core.seq.call(null,seq__74651_74756);
if(temp__4126__auto___74823){
var seq__74651_74824__$1 = temp__4126__auto___74823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74651_74824__$1)){
var c__4598__auto___74825 = cljs.core.chunk_first.call(null,seq__74651_74824__$1);
var G__74826 = cljs.core.chunk_rest.call(null,seq__74651_74824__$1);
var G__74827 = c__4598__auto___74825;
var G__74828 = cljs.core.count.call(null,c__4598__auto___74825);
var G__74829 = (0);
seq__74651_74756 = G__74826;
chunk__74652_74757 = G__74827;
count__74653_74758 = G__74828;
i__74654_74759 = G__74829;
continue;
} else {
var vec__74671_74830 = cljs.core.first.call(null,seq__74651_74824__$1);
var from_74831 = cljs.core.nth.call(null,vec__74671_74830,(0),null);
var onto_74832 = cljs.core.nth.call(null,vec__74671_74830,(1),null);
var vec__74672_74833 = cljs.core.nth.call(null,vec__74671_74830,(2),null);
var fw_74834 = cljs.core.nth.call(null,vec__74672_74833,(0),null);
var bw_74835 = cljs.core.nth.call(null,vec__74672_74833,(1),null);
var switched_74836 = vec__74672_74833;
context.beginPath();

var vec__74673_74837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74831)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74831))], null);
var from_x_74838 = cljs.core.nth.call(null,vec__74673_74837,(0),null);
var from_y_74839 = cljs.core.nth.call(null,vec__74673_74837,(1),null);
var vec__74674_74840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74832)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74832))], null);
var onto_x_74841 = cljs.core.nth.call(null,vec__74674_74840,(0),null);
var onto_y_74842 = cljs.core.nth.call(null,vec__74674_74840,(1),null);
var vec__74675_74843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74831)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74831)))], null);
var from_x_p_74844 = cljs.core.nth.call(null,vec__74675_74843,(0),null);
var from_y_p_74845 = cljs.core.nth.call(null,vec__74675_74843,(1),null);
var vec__74676_74846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74832)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74832)))], null);
var onto_x_p_74847 = cljs.core.nth.call(null,vec__74676_74846,(0),null);
var onto_y_p_74848 = cljs.core.nth.call(null,vec__74676_74846,(1),null);
var vec__74677_74849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_74838)),(ys + (pad * from_y_74839))], null);
var xa_74850 = cljs.core.nth.call(null,vec__74677_74849,(0),null);
var ya_74851 = cljs.core.nth.call(null,vec__74677_74849,(1),null);
var vec__74678_74852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_74838)) + (ch_pos_74755 * from_x_p_74844)),((ys + ((0.5 * inner_radius) * from_y_74839)) + (ch_pos_74755 * from_y_p_74845))], null);
var xb_74853 = cljs.core.nth.call(null,vec__74678_74852,(0),null);
var yb_74854 = cljs.core.nth.call(null,vec__74678_74852,(1),null);
var vec__74679_74855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_74841)) + (ch_pos_74755 * onto_x_p_74847)),((ys + ((0.5 * inner_radius) * onto_y_74842)) + (ch_pos_74755 * onto_y_p_74848))], null);
var xc_74856 = cljs.core.nth.call(null,vec__74679_74855,(0),null);
var yc_74857 = cljs.core.nth.call(null,vec__74679_74855,(1),null);
var vec__74680_74858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_74841)),(ys + (pad * onto_y_74842))], null);
var xd_74859 = cljs.core.nth.call(null,vec__74680_74858,(0),null);
var yd_74860 = cljs.core.nth.call(null,vec__74680_74858,(1),null);
context.moveTo(xa_74850,ya_74851);

context.bezierCurveTo(xb_74853,yb_74854,xc_74856,yc_74857,xd_74859,yd_74860);

var length_est_74861 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_74831 - onto_74832))], null),(2)));
var offset_74862 = cljs.core.mod.call(null,((timestamp / (2000)) * (length_est_74861 + (1))),(length_est_74861 + (1)));
var lineDash_74863 = [(1),(length_est_74861 / (2))];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_74836))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_74753,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__74681_74864 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_74834,offset_74862], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_74835,(- offset_74862)], null)], null));
var chunk__74682_74865 = null;
var count__74683_74866 = (0);
var i__74684_74867 = (0);
while(true){
if((i__74684_74867 < count__74683_74866)){
var vec__74685_74868 = cljs.core._nth.call(null,chunk__74682_74865,i__74684_74867);
var direction_74869 = cljs.core.nth.call(null,vec__74685_74868,(0),null);
var os_74870 = cljs.core.nth.call(null,vec__74685_74868,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74869)){
context.setLineDash(lineDash_74863);

context.lineDashOffset = os_74870;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74871 = seq__74681_74864;
var G__74872 = chunk__74682_74865;
var G__74873 = count__74683_74866;
var G__74874 = (i__74684_74867 + (1));
seq__74681_74864 = G__74871;
chunk__74682_74865 = G__74872;
count__74683_74866 = G__74873;
i__74684_74867 = G__74874;
continue;
} else {
var temp__4126__auto___74875__$1 = cljs.core.seq.call(null,seq__74681_74864);
if(temp__4126__auto___74875__$1){
var seq__74681_74876__$1 = temp__4126__auto___74875__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74681_74876__$1)){
var c__4598__auto___74877 = cljs.core.chunk_first.call(null,seq__74681_74876__$1);
var G__74878 = cljs.core.chunk_rest.call(null,seq__74681_74876__$1);
var G__74879 = c__4598__auto___74877;
var G__74880 = cljs.core.count.call(null,c__4598__auto___74877);
var G__74881 = (0);
seq__74681_74864 = G__74878;
chunk__74682_74865 = G__74879;
count__74683_74866 = G__74880;
i__74684_74867 = G__74881;
continue;
} else {
var vec__74686_74882 = cljs.core.first.call(null,seq__74681_74876__$1);
var direction_74883 = cljs.core.nth.call(null,vec__74686_74882,(0),null);
var os_74884 = cljs.core.nth.call(null,vec__74686_74882,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74883)){
context.setLineDash(lineDash_74863);

context.lineDashOffset = os_74884;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74753);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74885 = cljs.core.next.call(null,seq__74681_74876__$1);
var G__74886 = null;
var G__74887 = (0);
var G__74888 = (0);
seq__74681_74864 = G__74885;
chunk__74682_74865 = G__74886;
count__74683_74866 = G__74887;
i__74684_74867 = G__74888;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__74889 = cljs.core.next.call(null,seq__74651_74824__$1);
var G__74890 = null;
var G__74891 = (0);
var G__74892 = (0);
seq__74651_74756 = G__74889;
chunk__74652_74757 = G__74890;
count__74653_74758 = G__74891;
i__74654_74759 = G__74892;
continue;
}
} else {
}
}
break;
}

var G__74893 = seq__74647_74748;
var G__74894 = chunk__74648_74749;
var G__74895 = count__74649_74750;
var G__74896 = (i__74650_74751 + (1));
seq__74647_74748 = G__74893;
chunk__74648_74749 = G__74894;
count__74649_74750 = G__74895;
i__74650_74751 = G__74896;
continue;
} else {
var temp__4126__auto___74897 = cljs.core.seq.call(null,seq__74647_74748);
if(temp__4126__auto___74897){
var seq__74647_74898__$1 = temp__4126__auto___74897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74647_74898__$1)){
var c__4598__auto___74899 = cljs.core.chunk_first.call(null,seq__74647_74898__$1);
var G__74900 = cljs.core.chunk_rest.call(null,seq__74647_74898__$1);
var G__74901 = c__4598__auto___74899;
var G__74902 = cljs.core.count.call(null,c__4598__auto___74899);
var G__74903 = (0);
seq__74647_74748 = G__74900;
chunk__74648_74749 = G__74901;
count__74649_74750 = G__74902;
i__74650_74751 = G__74903;
continue;
} else {
var ch_74904 = cljs.core.first.call(null,seq__74647_74898__$1);
var channel_74905 = cljs.core.nth.call(null,channels,ch_74904);
var channel_wiring_74906 = cljs.core.nth.call(null,wiring,ch_74904);
var ch_pos_74907 = ((ch_74904 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__74687_74908 = cljs.core.seq.call(null,channel_wiring_74906);
var chunk__74688_74909 = null;
var count__74689_74910 = (0);
var i__74690_74911 = (0);
while(true){
if((i__74690_74911 < count__74689_74910)){
var vec__74691_74912 = cljs.core._nth.call(null,chunk__74688_74909,i__74690_74911);
var from_74913 = cljs.core.nth.call(null,vec__74691_74912,(0),null);
var onto_74914 = cljs.core.nth.call(null,vec__74691_74912,(1),null);
var vec__74692_74915 = cljs.core.nth.call(null,vec__74691_74912,(2),null);
var fw_74916 = cljs.core.nth.call(null,vec__74692_74915,(0),null);
var bw_74917 = cljs.core.nth.call(null,vec__74692_74915,(1),null);
var switched_74918 = vec__74692_74915;
context.beginPath();

var vec__74693_74919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74913)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74913))], null);
var from_x_74920 = cljs.core.nth.call(null,vec__74693_74919,(0),null);
var from_y_74921 = cljs.core.nth.call(null,vec__74693_74919,(1),null);
var vec__74694_74922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74914)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74914))], null);
var onto_x_74923 = cljs.core.nth.call(null,vec__74694_74922,(0),null);
var onto_y_74924 = cljs.core.nth.call(null,vec__74694_74922,(1),null);
var vec__74695_74925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74913)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74913)))], null);
var from_x_p_74926 = cljs.core.nth.call(null,vec__74695_74925,(0),null);
var from_y_p_74927 = cljs.core.nth.call(null,vec__74695_74925,(1),null);
var vec__74696_74928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74914)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74914)))], null);
var onto_x_p_74929 = cljs.core.nth.call(null,vec__74696_74928,(0),null);
var onto_y_p_74930 = cljs.core.nth.call(null,vec__74696_74928,(1),null);
var vec__74697_74931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_74920)),(ys + (pad * from_y_74921))], null);
var xa_74932 = cljs.core.nth.call(null,vec__74697_74931,(0),null);
var ya_74933 = cljs.core.nth.call(null,vec__74697_74931,(1),null);
var vec__74698_74934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_74920)) + (ch_pos_74907 * from_x_p_74926)),((ys + ((0.5 * inner_radius) * from_y_74921)) + (ch_pos_74907 * from_y_p_74927))], null);
var xb_74935 = cljs.core.nth.call(null,vec__74698_74934,(0),null);
var yb_74936 = cljs.core.nth.call(null,vec__74698_74934,(1),null);
var vec__74699_74937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_74923)) + (ch_pos_74907 * onto_x_p_74929)),((ys + ((0.5 * inner_radius) * onto_y_74924)) + (ch_pos_74907 * onto_y_p_74930))], null);
var xc_74938 = cljs.core.nth.call(null,vec__74699_74937,(0),null);
var yc_74939 = cljs.core.nth.call(null,vec__74699_74937,(1),null);
var vec__74700_74940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_74923)),(ys + (pad * onto_y_74924))], null);
var xd_74941 = cljs.core.nth.call(null,vec__74700_74940,(0),null);
var yd_74942 = cljs.core.nth.call(null,vec__74700_74940,(1),null);
context.moveTo(xa_74932,ya_74933);

context.bezierCurveTo(xb_74935,yb_74936,xc_74938,yc_74939,xd_74941,yd_74942);

var length_est_74943 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_74913 - onto_74914))], null),(2)));
var offset_74944 = cljs.core.mod.call(null,((timestamp / (2000)) * (length_est_74943 + (1))),(length_est_74943 + (1)));
var lineDash_74945 = [(1),(length_est_74943 / (2))];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_74918))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_74905,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__74701_74946 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_74916,offset_74944], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_74917,(- offset_74944)], null)], null));
var chunk__74702_74947 = null;
var count__74703_74948 = (0);
var i__74704_74949 = (0);
while(true){
if((i__74704_74949 < count__74703_74948)){
var vec__74705_74950 = cljs.core._nth.call(null,chunk__74702_74947,i__74704_74949);
var direction_74951 = cljs.core.nth.call(null,vec__74705_74950,(0),null);
var os_74952 = cljs.core.nth.call(null,vec__74705_74950,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74951)){
context.setLineDash(lineDash_74945);

context.lineDashOffset = os_74952;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74953 = seq__74701_74946;
var G__74954 = chunk__74702_74947;
var G__74955 = count__74703_74948;
var G__74956 = (i__74704_74949 + (1));
seq__74701_74946 = G__74953;
chunk__74702_74947 = G__74954;
count__74703_74948 = G__74955;
i__74704_74949 = G__74956;
continue;
} else {
var temp__4126__auto___74957__$1 = cljs.core.seq.call(null,seq__74701_74946);
if(temp__4126__auto___74957__$1){
var seq__74701_74958__$1 = temp__4126__auto___74957__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74701_74958__$1)){
var c__4598__auto___74959 = cljs.core.chunk_first.call(null,seq__74701_74958__$1);
var G__74960 = cljs.core.chunk_rest.call(null,seq__74701_74958__$1);
var G__74961 = c__4598__auto___74959;
var G__74962 = cljs.core.count.call(null,c__4598__auto___74959);
var G__74963 = (0);
seq__74701_74946 = G__74960;
chunk__74702_74947 = G__74961;
count__74703_74948 = G__74962;
i__74704_74949 = G__74963;
continue;
} else {
var vec__74706_74964 = cljs.core.first.call(null,seq__74701_74958__$1);
var direction_74965 = cljs.core.nth.call(null,vec__74706_74964,(0),null);
var os_74966 = cljs.core.nth.call(null,vec__74706_74964,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_74965)){
context.setLineDash(lineDash_74945);

context.lineDashOffset = os_74966;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__74967 = cljs.core.next.call(null,seq__74701_74958__$1);
var G__74968 = null;
var G__74969 = (0);
var G__74970 = (0);
seq__74701_74946 = G__74967;
chunk__74702_74947 = G__74968;
count__74703_74948 = G__74969;
i__74704_74949 = G__74970;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__74971 = seq__74687_74908;
var G__74972 = chunk__74688_74909;
var G__74973 = count__74689_74910;
var G__74974 = (i__74690_74911 + (1));
seq__74687_74908 = G__74971;
chunk__74688_74909 = G__74972;
count__74689_74910 = G__74973;
i__74690_74911 = G__74974;
continue;
} else {
var temp__4126__auto___74975__$1 = cljs.core.seq.call(null,seq__74687_74908);
if(temp__4126__auto___74975__$1){
var seq__74687_74976__$1 = temp__4126__auto___74975__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74687_74976__$1)){
var c__4598__auto___74977 = cljs.core.chunk_first.call(null,seq__74687_74976__$1);
var G__74978 = cljs.core.chunk_rest.call(null,seq__74687_74976__$1);
var G__74979 = c__4598__auto___74977;
var G__74980 = cljs.core.count.call(null,c__4598__auto___74977);
var G__74981 = (0);
seq__74687_74908 = G__74978;
chunk__74688_74909 = G__74979;
count__74689_74910 = G__74980;
i__74690_74911 = G__74981;
continue;
} else {
var vec__74707_74982 = cljs.core.first.call(null,seq__74687_74976__$1);
var from_74983 = cljs.core.nth.call(null,vec__74707_74982,(0),null);
var onto_74984 = cljs.core.nth.call(null,vec__74707_74982,(1),null);
var vec__74708_74985 = cljs.core.nth.call(null,vec__74707_74982,(2),null);
var fw_74986 = cljs.core.nth.call(null,vec__74708_74985,(0),null);
var bw_74987 = cljs.core.nth.call(null,vec__74708_74985,(1),null);
var switched_74988 = vec__74708_74985;
context.beginPath();

var vec__74709_74989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74983)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74983))], null);
var from_x_74990 = cljs.core.nth.call(null,vec__74709_74989,(0),null);
var from_y_74991 = cljs.core.nth.call(null,vec__74709_74989,(1),null);
var vec__74710_74992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74984)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74984))], null);
var onto_x_74993 = cljs.core.nth.call(null,vec__74710_74992,(0),null);
var onto_y_74994 = cljs.core.nth.call(null,vec__74710_74992,(1),null);
var vec__74711_74995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_74983)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_74983)))], null);
var from_x_p_74996 = cljs.core.nth.call(null,vec__74711_74995,(0),null);
var from_y_p_74997 = cljs.core.nth.call(null,vec__74711_74995,(1),null);
var vec__74712_74998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_74984)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_74984)))], null);
var onto_x_p_74999 = cljs.core.nth.call(null,vec__74712_74998,(0),null);
var onto_y_p_75000 = cljs.core.nth.call(null,vec__74712_74998,(1),null);
var vec__74713_75001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_74990)),(ys + (pad * from_y_74991))], null);
var xa_75002 = cljs.core.nth.call(null,vec__74713_75001,(0),null);
var ya_75003 = cljs.core.nth.call(null,vec__74713_75001,(1),null);
var vec__74714_75004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_74990)) + (ch_pos_74907 * from_x_p_74996)),((ys + ((0.5 * inner_radius) * from_y_74991)) + (ch_pos_74907 * from_y_p_74997))], null);
var xb_75005 = cljs.core.nth.call(null,vec__74714_75004,(0),null);
var yb_75006 = cljs.core.nth.call(null,vec__74714_75004,(1),null);
var vec__74715_75007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_74993)) + (ch_pos_74907 * onto_x_p_74999)),((ys + ((0.5 * inner_radius) * onto_y_74994)) + (ch_pos_74907 * onto_y_p_75000))], null);
var xc_75008 = cljs.core.nth.call(null,vec__74715_75007,(0),null);
var yc_75009 = cljs.core.nth.call(null,vec__74715_75007,(1),null);
var vec__74716_75010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_74993)),(ys + (pad * onto_y_74994))], null);
var xd_75011 = cljs.core.nth.call(null,vec__74716_75010,(0),null);
var yd_75012 = cljs.core.nth.call(null,vec__74716_75010,(1),null);
context.moveTo(xa_75002,ya_75003);

context.bezierCurveTo(xb_75005,yb_75006,xc_75008,yc_75009,xd_75011,yd_75012);

var length_est_75013 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_74983 - onto_74984))], null),(2)));
var offset_75014 = cljs.core.mod.call(null,((timestamp / (2000)) * (length_est_75013 + (1))),(length_est_75013 + (1)));
var lineDash_75015 = [(1),(length_est_75013 / (2))];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_74988))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_74905,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__74717_75016 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_74986,offset_75014], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_74987,(- offset_75014)], null)], null));
var chunk__74718_75017 = null;
var count__74719_75018 = (0);
var i__74720_75019 = (0);
while(true){
if((i__74720_75019 < count__74719_75018)){
var vec__74721_75020 = cljs.core._nth.call(null,chunk__74718_75017,i__74720_75019);
var direction_75021 = cljs.core.nth.call(null,vec__74721_75020,(0),null);
var os_75022 = cljs.core.nth.call(null,vec__74721_75020,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_75021)){
context.setLineDash(lineDash_75015);

context.lineDashOffset = os_75022;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75023 = seq__74717_75016;
var G__75024 = chunk__74718_75017;
var G__75025 = count__74719_75018;
var G__75026 = (i__74720_75019 + (1));
seq__74717_75016 = G__75023;
chunk__74718_75017 = G__75024;
count__74719_75018 = G__75025;
i__74720_75019 = G__75026;
continue;
} else {
var temp__4126__auto___75027__$2 = cljs.core.seq.call(null,seq__74717_75016);
if(temp__4126__auto___75027__$2){
var seq__74717_75028__$1 = temp__4126__auto___75027__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74717_75028__$1)){
var c__4598__auto___75029 = cljs.core.chunk_first.call(null,seq__74717_75028__$1);
var G__75030 = cljs.core.chunk_rest.call(null,seq__74717_75028__$1);
var G__75031 = c__4598__auto___75029;
var G__75032 = cljs.core.count.call(null,c__4598__auto___75029);
var G__75033 = (0);
seq__74717_75016 = G__75030;
chunk__74718_75017 = G__75031;
count__74719_75018 = G__75032;
i__74720_75019 = G__75033;
continue;
} else {
var vec__74722_75034 = cljs.core.first.call(null,seq__74717_75028__$1);
var direction_75035 = cljs.core.nth.call(null,vec__74722_75034,(0),null);
var os_75036 = cljs.core.nth.call(null,vec__74722_75034,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_75035)){
context.setLineDash(lineDash_75015);

context.lineDashOffset = os_75036;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_74905);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75037 = cljs.core.next.call(null,seq__74717_75028__$1);
var G__75038 = null;
var G__75039 = (0);
var G__75040 = (0);
seq__74717_75016 = G__75037;
chunk__74718_75017 = G__75038;
count__74719_75018 = G__75039;
i__74720_75019 = G__75040;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__75041 = cljs.core.next.call(null,seq__74687_74976__$1);
var G__75042 = null;
var G__75043 = (0);
var G__75044 = (0);
seq__74687_74908 = G__75041;
chunk__74688_74909 = G__75042;
count__74689_74910 = G__75043;
i__74690_74911 = G__75044;
continue;
}
} else {
}
}
break;
}

var G__75045 = cljs.core.next.call(null,seq__74647_74898__$1);
var G__75046 = null;
var G__75047 = (0);
var G__75048 = (0);
seq__74647_74748 = G__75045;
chunk__74648_74749 = G__75046;
count__74649_74750 = G__75047;
i__74650_74751 = G__75048;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljstemplate.shape.debug)){
context.fillStyle = cljstemplate.shape.rgb_str.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null));

context.fillRect((xs - (5)),(ys - (10)),(15),(15));

context.fillStyle = cljstemplate.shape.rgb_str.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

context.fillText([cljs.core.str(id)].join(''),xs,ys);
} else {
}

context.restore();

context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__74723_75049 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__74724_75050 = null;
var count__74725_75051 = (0);
var i__74726_75052 = (0);
while(true){
if((i__74726_75052 < count__74725_75051)){
var gamma_75053 = cljs.core._nth.call(null,chunk__74724_75050,i__74726_75052);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_75053))),(ys + (radius * Math.cos.call(null,gamma_75053))));

var G__75054 = seq__74723_75049;
var G__75055 = chunk__74724_75050;
var G__75056 = count__74725_75051;
var G__75057 = (i__74726_75052 + (1));
seq__74723_75049 = G__75054;
chunk__74724_75050 = G__75055;
count__74725_75051 = G__75056;
i__74726_75052 = G__75057;
continue;
} else {
var temp__4126__auto___75058 = cljs.core.seq.call(null,seq__74723_75049);
if(temp__4126__auto___75058){
var seq__74723_75059__$1 = temp__4126__auto___75058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74723_75059__$1)){
var c__4598__auto___75060 = cljs.core.chunk_first.call(null,seq__74723_75059__$1);
var G__75061 = cljs.core.chunk_rest.call(null,seq__74723_75059__$1);
var G__75062 = c__4598__auto___75060;
var G__75063 = cljs.core.count.call(null,c__4598__auto___75060);
var G__75064 = (0);
seq__74723_75049 = G__75061;
chunk__74724_75050 = G__75062;
count__74725_75051 = G__75063;
i__74726_75052 = G__75064;
continue;
} else {
var gamma_75065 = cljs.core.first.call(null,seq__74723_75059__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_75065))),(ys + (radius * Math.cos.call(null,gamma_75065))));

var G__75066 = cljs.core.next.call(null,seq__74723_75059__$1);
var G__75067 = null;
var G__75068 = (0);
var G__75069 = (0);
seq__74723_75049 = G__75066;
chunk__74724_75050 = G__75067;
count__74725_75051 = G__75068;
i__74726_75052 = G__75069;
continue;
}
} else {
}
}
break;
}

context.closePath();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.stroke();

return result;
});
cljstemplate.shape.scale_factor = (function scale_factor(w,h,max_w,max_h){
var x__4135__auto__ = (max_w / w);
var y__4136__auto__ = (max_h / h);
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
});
cljstemplate.shape.render_at_rest = (function render_at_rest(context,sf,offset,mouse,channels,colours,ends,timestamp,shape,id){
if(cljs.core.truth_((function (){var and__3799__auto__ = cljstemplate.shape.not_rotating_QMARK_.call(null,shape);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not.call(null,ends.call(null,id));
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.render_shape.call(null,context,sf,offset,mouse,channels,colours,shape,id,timestamp);
} else {
return shape;
}
});
cljstemplate.shape.render_in_motion = (function render_in_motion(context,sf,offset,mouse,channels,colours,ends,timestamp,shape,id){
if(cljs.core.truth_((function (){var and__3799__auto__ = cljstemplate.shape.rotating_QMARK_.call(null,shape);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not.call(null,ends.call(null,id));
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.render_shape.call(null,context,sf,offset,mouse,channels,colours,shape,id,timestamp);
} else {
return shape;
}
});
cljstemplate.shape.fill_circle = (function fill_circle(surface,coords,colour){
var vec__75071 = coords;
var x = cljs.core.nth.call(null,vec__75071,(0),null);
var y = cljs.core.nth.call(null,vec__75071,(1),null);
var d = cljs.core.nth.call(null,vec__75071,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__75073 = coords;
var x = cljs.core.nth.call(null,vec__75073,(0),null);
var y = cljs.core.nth.call(null,vec__75073,(1),null);
var d = cljs.core.nth.call(null,vec__75073,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__75074,context,timestamp,p__75075,sf,p__75076){
var map__75087 = p__75074;
var map__75087__$1 = ((cljs.core.seq_QMARK_.call(null,map__75087))?cljs.core.apply.call(null,cljs.core.hash_map,map__75087):map__75087);
var level = map__75087__$1;
var shapes = cljs.core.get.call(null,map__75087__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__75088 = cljs.core.get.call(null,map__75087__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__75088,(0),null);
var _ = cljs.core.nth.call(null,vec__75088,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__75088,(2),null);
var channels = cljs.core.get.call(null,map__75087__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__75089 = p__75075;
var ___$2 = cljs.core.nth.call(null,vec__75089,(0),null);
var bdr = cljs.core.nth.call(null,vec__75089,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__75089,(2),null);
var vec__75090 = p__75076;
var x_offset = cljs.core.nth.call(null,vec__75090,(0),null);
var y_offset = cljs.core.nth.call(null,vec__75090,(1),null);
var shape_75097 = cljs.core.nth.call(null,shapes,start);
var map__75091_75098 = shape_75097;
var map__75091_75099__$1 = ((cljs.core.seq_QMARK_.call(null,map__75091_75098))?cljs.core.apply.call(null,cljs.core.hash_map,map__75091_75098):map__75091_75098);
var vec__75092_75100 = cljs.core.get.call(null,map__75091_75099__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_75101 = cljs.core.nth.call(null,vec__75092_75100,(0),null);
var y_75102 = cljs.core.nth.call(null,vec__75092_75100,(1),null);
var __75103__$4 = cljs.core.nth.call(null,vec__75092_75100,(2),null);
var n_75104 = cljs.core.get.call(null,map__75091_75099__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs_75105 = ((x_75101 * sf) + x_offset);
var ys_75106 = ((y_75102 * sf) + y_offset);
var vtxs_75107 = cljstemplate.shape.vertices.call(null,shape_75097,xs_75105,ys_75106,sf);
var radius_75108 = (cljstemplate.shape.radii.call(null,n_75104) * sf);
var many_channels_75109 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,((4) - cljs.core.count.call(null,channels)),channels));
var channel_count_75110 = cljs.core.count.call(null,many_channels_75109);
context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_75107);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75105,ys_75106,radius_75108], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__75093_75111 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_75110));
var chunk__75094_75112 = null;
var count__75095_75113 = (0);
var i__75096_75114 = (0);
while(true){
if((i__75096_75114 < count__75095_75113)){
var i_75115 = cljs.core._nth.call(null,chunk__75094_75112,i__75096_75114);
var f_75116 = cljs.core.mod.call(null,((timestamp / (50)) + (i_75115 * (radius_75108 / channel_count_75110))),radius_75108);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75105,ys_75106,f_75116], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_75109,i_75115),((1) - (f_75116 / radius_75108))));

var G__75117 = seq__75093_75111;
var G__75118 = chunk__75094_75112;
var G__75119 = count__75095_75113;
var G__75120 = (i__75096_75114 + (1));
seq__75093_75111 = G__75117;
chunk__75094_75112 = G__75118;
count__75095_75113 = G__75119;
i__75096_75114 = G__75120;
continue;
} else {
var temp__4126__auto___75121 = cljs.core.seq.call(null,seq__75093_75111);
if(temp__4126__auto___75121){
var seq__75093_75122__$1 = temp__4126__auto___75121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75093_75122__$1)){
var c__4598__auto___75123 = cljs.core.chunk_first.call(null,seq__75093_75122__$1);
var G__75124 = cljs.core.chunk_rest.call(null,seq__75093_75122__$1);
var G__75125 = c__4598__auto___75123;
var G__75126 = cljs.core.count.call(null,c__4598__auto___75123);
var G__75127 = (0);
seq__75093_75111 = G__75124;
chunk__75094_75112 = G__75125;
count__75095_75113 = G__75126;
i__75096_75114 = G__75127;
continue;
} else {
var i_75128 = cljs.core.first.call(null,seq__75093_75122__$1);
var f_75129 = cljs.core.mod.call(null,((timestamp / (50)) + (i_75128 * (radius_75108 / channel_count_75110))),radius_75108);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75105,ys_75106,f_75129], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_75109,i_75128),((1) - (f_75129 / radius_75108))));

var G__75130 = cljs.core.next.call(null,seq__75093_75122__$1);
var G__75131 = null;
var G__75132 = (0);
var G__75133 = (0);
seq__75093_75111 = G__75130;
chunk__75094_75112 = G__75131;
count__75095_75113 = G__75132;
i__75096_75114 = G__75133;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_75107);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__75134,context,timestamp,p__75135,sf,p__75136,done){
var map__75155 = p__75134;
var map__75155__$1 = ((cljs.core.seq_QMARK_.call(null,map__75155))?cljs.core.apply.call(null,cljs.core.hash_map,map__75155):map__75155);
var level = map__75155__$1;
var shapes = cljs.core.get.call(null,map__75155__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__75156 = cljs.core.get.call(null,map__75155__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__75156,(0),null);
var _ = cljs.core.nth.call(null,vec__75156,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__75156,(2),null);
var channels = cljs.core.get.call(null,map__75155__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__75157 = p__75135;
var ___$2 = cljs.core.nth.call(null,vec__75157,(0),null);
var bdr = cljs.core.nth.call(null,vec__75157,(1),null);
var fg = cljs.core.nth.call(null,vec__75157,(2),null);
var vec__75158 = p__75136;
var x_offset = cljs.core.nth.call(null,vec__75158,(0),null);
var y_offset = cljs.core.nth.call(null,vec__75158,(1),null);
var shape_75173 = cljs.core.nth.call(null,shapes,end);
var map__75159_75174 = shape_75173;
var map__75159_75175__$1 = ((cljs.core.seq_QMARK_.call(null,map__75159_75174))?cljs.core.apply.call(null,cljs.core.hash_map,map__75159_75174):map__75159_75174);
var vec__75160_75176 = cljs.core.get.call(null,map__75159_75175__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_75177 = cljs.core.nth.call(null,vec__75160_75176,(0),null);
var y_75178 = cljs.core.nth.call(null,vec__75160_75176,(1),null);
var __75179__$3 = cljs.core.nth.call(null,vec__75160_75176,(2),null);
var n_75180 = cljs.core.get.call(null,map__75159_75175__$1,new cljs.core.Keyword(null,"n","n",562130025));
var wiring_75181 = cljs.core.get.call(null,map__75159_75175__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var xs_75182 = ((x_75177 * sf) + x_offset);
var ys_75183 = ((y_75178 * sf) + y_offset);
var vtxs_75184 = cljstemplate.shape.vertices.call(null,shape_75173,xs_75182,ys_75183,sf);
var radius_75185 = (cljstemplate.shape.radii.call(null,n_75180) * sf);
var radius_3rd_75186 = (radius_75185 / (3));
var radius_5th_75187 = (radius_75185 / (5));
var radius_15th_75188 = (radius_75185 / (15));
var radius_20th_75189 = (radius_75185 / (30));
var channel_count_75190 = cljs.core.count.call(null,channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_75184);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75182,ys_75183,radius_75185], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_75173,map__75159_75174,map__75159_75175__$1,vec__75160_75176,x_75177,y_75178,__75179__$3,n_75180,wiring_75181,xs_75182,ys_75183,vtxs_75184,radius_75185,radius_3rd_75186,radius_5th_75187,radius_15th_75188,radius_20th_75189,channel_count_75190,map__75155,map__75155__$1,level,shapes,vec__75156,end,_,___$1,channels,vec__75157,___$2,bdr,fg,vec__75158,x_offset,y_offset){
return (function iter__75161(s__75162){
return (new cljs.core.LazySeq(null,((function (shape_75173,map__75159_75174,map__75159_75175__$1,vec__75160_75176,x_75177,y_75178,__75179__$3,n_75180,wiring_75181,xs_75182,ys_75183,vtxs_75184,radius_75185,radius_3rd_75186,radius_5th_75187,radius_15th_75188,radius_20th_75189,channel_count_75190,map__75155,map__75155__$1,level,shapes,vec__75156,end,_,___$1,channels,vec__75157,___$2,bdr,fg,vec__75158,x_offset,y_offset){
return (function (){
var s__75162__$1 = s__75162;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__75162__$1);
if(temp__4126__auto__){
var s__75162__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75162__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__75162__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__75164 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__75163 = (0);
while(true){
if((i__75163 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.call(null,c__4565__auto__,i__75163);
cljs.core.chunk_append.call(null,b__75164,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)));

var G__75191 = (i__75163 + (1));
i__75163 = G__75191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75164),iter__75161.call(null,cljs.core.chunk_rest.call(null,s__75162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75164),null);
}
} else {
var channel_wiring = cljs.core.first.call(null,s__75162__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)),iter__75161.call(null,cljs.core.rest.call(null,s__75162__$2)));
}
} else {
return null;
}
break;
}
});})(shape_75173,map__75159_75174,map__75159_75175__$1,vec__75160_75176,x_75177,y_75178,__75179__$3,n_75180,wiring_75181,xs_75182,ys_75183,vtxs_75184,radius_75185,radius_3rd_75186,radius_5th_75187,radius_15th_75188,radius_20th_75189,channel_count_75190,map__75155,map__75155__$1,level,shapes,vec__75156,end,_,___$1,channels,vec__75157,___$2,bdr,fg,vec__75158,x_offset,y_offset))
,null,null));
});})(shape_75173,map__75159_75174,map__75159_75175__$1,vec__75160_75176,x_75177,y_75178,__75179__$3,n_75180,wiring_75181,xs_75182,ys_75183,vtxs_75184,radius_75185,radius_3rd_75186,radius_5th_75187,radius_15th_75188,radius_20th_75189,channel_count_75190,map__75155,map__75155__$1,level,shapes,vec__75156,end,_,___$1,channels,vec__75157,___$2,bdr,fg,vec__75158,x_offset,y_offset))
;
return iter__4567__auto__.call(null,wiring_75181);
})())){
var seq__75165_75192 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(5)));
var chunk__75166_75193 = null;
var count__75167_75194 = (0);
var i__75168_75195 = (0);
while(true){
if((i__75168_75195 < count__75167_75194)){
var i_75196 = cljs.core._nth.call(null,chunk__75166_75193,i__75168_75195);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75182,ys_75183,(radius_75185 / ((5) - i_75196))], null),cljs.core.conj.call(null,fg,((1) / i_75196)));

var G__75197 = seq__75165_75192;
var G__75198 = chunk__75166_75193;
var G__75199 = count__75167_75194;
var G__75200 = (i__75168_75195 + (1));
seq__75165_75192 = G__75197;
chunk__75166_75193 = G__75198;
count__75167_75194 = G__75199;
i__75168_75195 = G__75200;
continue;
} else {
var temp__4126__auto___75201 = cljs.core.seq.call(null,seq__75165_75192);
if(temp__4126__auto___75201){
var seq__75165_75202__$1 = temp__4126__auto___75201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75165_75202__$1)){
var c__4598__auto___75203 = cljs.core.chunk_first.call(null,seq__75165_75202__$1);
var G__75204 = cljs.core.chunk_rest.call(null,seq__75165_75202__$1);
var G__75205 = c__4598__auto___75203;
var G__75206 = cljs.core.count.call(null,c__4598__auto___75203);
var G__75207 = (0);
seq__75165_75192 = G__75204;
chunk__75166_75193 = G__75205;
count__75167_75194 = G__75206;
i__75168_75195 = G__75207;
continue;
} else {
var i_75208 = cljs.core.first.call(null,seq__75165_75202__$1);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_75182,ys_75183,(radius_75185 / ((5) - i_75208))], null),cljs.core.conj.call(null,fg,((1) / i_75208)));

var G__75209 = cljs.core.next.call(null,seq__75165_75202__$1);
var G__75210 = null;
var G__75211 = (0);
var G__75212 = (0);
seq__75165_75192 = G__75209;
chunk__75166_75193 = G__75210;
count__75167_75194 = G__75211;
i__75168_75195 = G__75212;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,done,true);

cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"end","end",-268185958),context,xs_75182,ys_75183,radius_75185,timestamp);
} else {
}

var seq__75169_75213 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_75190));
var chunk__75170_75214 = null;
var count__75171_75215 = (0);
var i__75172_75216 = (0);
while(true){
if((i__75172_75216 < count__75171_75215)){
var i_75217 = cljs.core._nth.call(null,chunk__75170_75214,i__75172_75216);
var angle_75218 = ((i_75217 * (cljstemplate.constance.TAU / channel_count_75190)) - (timestamp / (3000)));
var xi_75219 = (xs_75182 + (radius_3rd_75186 * Math.sin.call(null,angle_75218)));
var yi_75220 = (ys_75183 + (radius_3rd_75186 * Math.cos.call(null,angle_75218)));
var on_75221 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_75181,i_75217)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_75219,yi_75220,radius_5th_75187], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_75217),(cljs.core.truth_(on_75221)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_75219,yi_75220,radius_5th_75187], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_75217),(cljs.core.truth_(on_75221)?0.75:0.25)));

if(cljs.core.truth_(on_75221)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_75219 - radius_15th_75188),(yi_75220 - radius_15th_75188),radius_15th_75188], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_75219 - radius_15th_75188),(yi_75220 - radius_15th_75188),radius_20th_75189], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__75222 = seq__75169_75213;
var G__75223 = chunk__75170_75214;
var G__75224 = count__75171_75215;
var G__75225 = (i__75172_75216 + (1));
seq__75169_75213 = G__75222;
chunk__75170_75214 = G__75223;
count__75171_75215 = G__75224;
i__75172_75216 = G__75225;
continue;
} else {
var temp__4126__auto___75226 = cljs.core.seq.call(null,seq__75169_75213);
if(temp__4126__auto___75226){
var seq__75169_75227__$1 = temp__4126__auto___75226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75169_75227__$1)){
var c__4598__auto___75228 = cljs.core.chunk_first.call(null,seq__75169_75227__$1);
var G__75229 = cljs.core.chunk_rest.call(null,seq__75169_75227__$1);
var G__75230 = c__4598__auto___75228;
var G__75231 = cljs.core.count.call(null,c__4598__auto___75228);
var G__75232 = (0);
seq__75169_75213 = G__75229;
chunk__75170_75214 = G__75230;
count__75171_75215 = G__75231;
i__75172_75216 = G__75232;
continue;
} else {
var i_75233 = cljs.core.first.call(null,seq__75169_75227__$1);
var angle_75234 = ((i_75233 * (cljstemplate.constance.TAU / channel_count_75190)) - (timestamp / (3000)));
var xi_75235 = (xs_75182 + (radius_3rd_75186 * Math.sin.call(null,angle_75234)));
var yi_75236 = (ys_75183 + (radius_3rd_75186 * Math.cos.call(null,angle_75234)));
var on_75237 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_75181,i_75233)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_75235,yi_75236,radius_5th_75187], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_75233),(cljs.core.truth_(on_75237)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_75235,yi_75236,radius_5th_75187], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_75233),(cljs.core.truth_(on_75237)?0.75:0.25)));

if(cljs.core.truth_(on_75237)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_75235 - radius_15th_75188),(yi_75236 - radius_15th_75188),radius_15th_75188], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_75235 - radius_15th_75188),(yi_75236 - radius_15th_75188),radius_20th_75189], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__75238 = cljs.core.next.call(null,seq__75169_75227__$1);
var G__75239 = null;
var G__75240 = (0);
var G__75241 = (0);
seq__75169_75213 = G__75238;
chunk__75170_75214 = G__75239;
count__75171_75215 = G__75240;
i__75172_75216 = G__75241;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_75184);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.gradients = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljstemplate.shape.mk_gradient = (function mk_gradient(key,context,x,y,radius){
var grd = context.createRadialGradient(x,y,(1),x,y,radius);
grd.addColorStop((0),"rgba(250, 250, 250, 1.0)");

grd.addColorStop((1),"rgba(250, 250, 250, 0.0)");

cljs.core.swap_BANG_.call(null,cljstemplate.shape.gradients,cljs.core.assoc,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null),grd], null));

return grd;
});
cljstemplate.shape.attention_gradient = (function attention_gradient(key,context,x,y,radius){
var temp__4124__auto__ = cljs.core.deref.call(null,cljstemplate.shape.gradients).call(null,key);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__75243 = temp__4124__auto__;
var args = cljs.core.nth.call(null,vec__75243,(0),null);
var cached_value = cljs.core.nth.call(null,vec__75243,(1),null);
if(cljs.core._EQ_.call(null,args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null))){
return cached_value;
} else {
cljstemplate.shape.log.call(null,"CACHE: Args differ");

return cljstemplate.shape.mk_gradient.call(null,key,context,x,y,radius);
}
} else {
cljstemplate.shape.log.call(null,"CACHE: Cache empty");

return cljstemplate.shape.mk_gradient.call(null,key,context,x,y,radius);
}
});
cljstemplate.shape.render_attention = (function render_attention(key,context,x,y,radius,timestamp){
var gradient = cljstemplate.shape.attention_gradient.call(null,key,context,x,y,radius);
context.fillStyle = gradient;

var seq__75248 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__75249 = null;
var count__75250 = (0);
var i__75251 = (0);
while(true){
if((i__75251 < count__75250)){
var i = cljs.core._nth.call(null,chunk__75249,i__75251);
var start_75252 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_75253 = (start_75252 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_75252,end_75253,true);

context.closePath();

context.fill();

var G__75254 = seq__75248;
var G__75255 = chunk__75249;
var G__75256 = count__75250;
var G__75257 = (i__75251 + (1));
seq__75248 = G__75254;
chunk__75249 = G__75255;
count__75250 = G__75256;
i__75251 = G__75257;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75248);
if(temp__4126__auto__){
var seq__75248__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75248__$1)){
var c__4598__auto__ = cljs.core.chunk_first.call(null,seq__75248__$1);
var G__75258 = cljs.core.chunk_rest.call(null,seq__75248__$1);
var G__75259 = c__4598__auto__;
var G__75260 = cljs.core.count.call(null,c__4598__auto__);
var G__75261 = (0);
seq__75248 = G__75258;
chunk__75249 = G__75259;
count__75250 = G__75260;
i__75251 = G__75261;
continue;
} else {
var i = cljs.core.first.call(null,seq__75248__$1);
var start_75262 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_75263 = (start_75262 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_75262,end_75263,true);

context.closePath();

context.fill();

var G__75264 = cljs.core.next.call(null,seq__75248__$1);
var G__75265 = null;
var G__75266 = (0);
var G__75267 = (0);
seq__75248 = G__75264;
chunk__75249 = G__75265;
count__75250 = G__75266;
i__75251 = G__75267;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__75270,level,mouse,timestamp,done){
var vec__75274 = p__75270;
var context = cljs.core.nth.call(null,vec__75274,(0),null);
var width = cljs.core.nth.call(null,vec__75274,(1),null);
var height = cljs.core.nth.call(null,vec__75274,(2),null);
var sf = cljstemplate.shape.scale_factor.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(level);
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(level);
var vec__75275 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.call(null,vec__75275,(0),null);
var vec__75276 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.call(null,vec__75276,(0),null);
var ends = cljs.core.PersistentHashSet.fromArray([end,start], true);
context.lineJoin = "round";

context.lineCap = "round";

if(cljs.core.truth_(cljs.core.deref.call(null,done))){
cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"next","next",-117701485),context,width,height,((function (){var x__4135__auto__ = width;
var y__4136__auto__ = height;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})() / (2)),timestamp);
} else {
}

return cljstemplate.shape.render_end.call(null,cljstemplate.shape.render_start.call(null,cljs.core.update.call(null,cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__75275,start,vec__75276,end,ends,vec__75274,context,width,height){
return (function (p1__75268_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_at_rest,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__75268_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__75275,start,vec__75276,end,ends,vec__75274,context,width,height))
),new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__75275,start,vec__75276,end,ends,vec__75274,context,width,height){
return (function (p1__75269_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_in_motion,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__75269_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__75275,start,vec__75276,end,ends,vec__75274,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});

//# sourceMappingURL=shape.js.map