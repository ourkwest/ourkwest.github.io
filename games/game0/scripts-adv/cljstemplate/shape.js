// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.shape');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.shape.log = cljstemplate.logging.logger(cljs.core.constant$keyword$70);
cljstemplate.shape.debug = false;
cljstemplate.shape.index_of = (function index_of(s,v){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_(items)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(items))){
return idx;
} else {
var G__75279 = (idx + (1));
var G__75280 = cljs.core.rest(items);
idx = G__75279;
items = G__75280;
continue;

}
}
break;
}
});
cljstemplate.shape.not_rotating_QMARK_ = (function not_rotating_QMARK_(shape){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$79], null));
});
cljstemplate.shape.rotating_QMARK_ = cljs.core.complement(cljstemplate.shape.not_rotating_QMARK_);
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__75281){
var vec__75283 = p__75281;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75283,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75283,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75283,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75283,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,cljs.core.constant$keyword$89], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$75,(function (p1__75284_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_channel_connections,p1__75284_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,(function (p1__75285_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_shape_connections,p1__75285_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,channel_id,wire_id,(2),direction_id], null),cljs.core.constant$keyword$90);
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__75286,index){
var vec__75289 = p__75286;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75289,(0),null);
var onto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75289,(1),null);
var vec__75290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75289,(2),null);
var backward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75290,(0),null);
var forward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75290,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(forward,cljs.core.constant$keyword$89))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(1)], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(onto,target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(backward,cljs.core.constant$keyword$89))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(0)], null);
} else {
return null;

}
}
});
cljstemplate.shape.find_wires = (function find_wires(target,wires){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.wire_index_select,target),wires,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljstemplate.shape.seeds_from = (function seeds_from(shapes,shape_id,from_shape_id,channel_id){
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,shape_id);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_(shape))){
var neighbour_index = cljstemplate.shape.index_of(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(shape),from_shape_id);
var channel_wires = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(shape),channel_id);
var n = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape);
var r = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape));
var rotated_neighbour_index = cljs.core.mod(((neighbour_index + n) + (- r)),n);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape){
return (function (p1__75291_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__75291_SHARP_);
});})(neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape))
,cljstemplate.shape.find_wires(rotated_neighbour_index,channel_wires));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljstemplate.shape.more_seeds = (function more_seeds(shapes,shape_id,channel_id,wire_id,direction_id){
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,shape_id);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_(shape))){
var neighbours = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(shape);
var output = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,channel_id,wire_id,direction_id], null));
var position = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$79], null));
var sides = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(shape);
var neighbour_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neighbours,cljs.core.mod((output + position),sides));
if(cljs.core.truth_((function (){var and__3799__auto__ = neighbour_id;
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(output,(9));
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.seeds_from(shapes,neighbour_id,shape_id,channel_id);
} else {
return null;
}
} else {
return null;
}
});
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__75293){
while(true){
var vec__75296 = p__75293;
var vec__75297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75296,(0),null);
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75297,(0),null);
var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75297,(1),null);
var wire_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75297,(2),null);
var direction_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75297,(3),null);
var seeds = cljs.core.nthnext(vec__75296,(1));
var new_shapes = cljs.core.update.cljs$core$IFn$_invoke$arity$3(shapes,shape_id,((function (shapes,p__75293,vec__75296,vec__75297,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__75292_SHARP_){
return cljstemplate.shape.switch_on(p1__75292_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__75293,vec__75296,vec__75297,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(seeds,cljstemplate.shape.more_seeds(new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq(new_seeds)){
var G__75298 = new_shapes;
var G__75299 = new_seeds;
shapes = G__75298;
p__75293 = G__75299;
continue;
} else {
return new_shapes;
}
break;
}
});
cljstemplate.shape.seed_lights = (function seed_lights(level,shape_id,channel_id){
var shapes = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(level);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,shape_id);
var wiring = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(shape);
var channel_wiring = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,channel_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (shapes,shape,wiring,channel_wiring){
return (function (p1__75300_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__75300_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (shapes,shape,wiring,channel_wiring){
return (function (p1__75301_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__75301_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.seed_lights,cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.cljs$core$IFn$_invoke$arity$0()], 0));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,(function (p1__75302_SHARP_){
return cljstemplate.shape.populate_shape_connections(p1__75302_SHARP_,cljstemplate.shape.seed_light(level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections(cljstemplate.shape.clear_connections(level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__75303,p__75304){
var vec__75307 = p__75303;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75307,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75307,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75307,(2),null);
var vec__75308 = p__75304;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75308,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75308,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__75309){
var map__75312 = p__75309;
var map__75312__$1 = ((cljs.core.seq_QMARK_(map__75312))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75312):map__75312);
var shape = map__75312__$1;
var map__75313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75312__$1,cljs.core.constant$keyword$78);
var map__75313__$1 = ((cljs.core.seq_QMARK_(map__75313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75313):map__75313);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75313__$1,cljs.core.constant$keyword$84);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75313__$1,cljs.core.constant$keyword$85);
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75313__$1,cljs.core.constant$keyword$91);
var end_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75313__$1,cljs.core.constant$keyword$92);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$79], null)))){
return shape;
} else {
if((end_time < timestamp)){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,end], null));
} else {
if((timestamp < start_time)){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$93], null),start);
} else {
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$93], null),cljstemplate.shape.proportionalise(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,timestamp,end_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)));

}
}
}
});
cljstemplate.shape.do_rotations = (function do_rotations(timestamp,level){
var r_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.rotated,timestamp);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,((function (r_fn){
return (function (p1__75314_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(r_fn,p1__75314_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__75315){
var vec__75317 = p__75315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75317,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75317,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75317,(2),null);
var timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75317,(3),null);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_(shape))){
var start = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape));
var end = start;
var start_time = timestamp;
var end_time = timestamp;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shape,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$84,start,cljs.core.constant$keyword$93,start,cljs.core.constant$keyword$85,end,cljs.core.constant$keyword$91,start_time,cljs.core.constant$keyword$92,end_time], null)], null)], 0));
} else {
var start = (function (){var or__3811__auto__ = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto____$1)){
return or__3811__auto____$1;
} else {
return cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape));
}
}
})();
var end = (cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape)) - (1));
var start_time = timestamp;
var end_time = (cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(shape)) + (250));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shape,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$84,start,cljs.core.constant$keyword$93,start,cljs.core.constant$keyword$85,end,cljs.core.constant$keyword$91,start_time,cljs.core.constant$keyword$92,end_time], null)], null)], 0));
}
});
cljstemplate.shape.rgb_str = (function rgb_str(p__75318){
var vec__75320 = p__75318;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75320,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75320,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75320,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__75321){
var vec__75323 = p__75321;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__75325 = temp__4124__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75325,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75325,(1),null);
var clicked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75325,(2),null);
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
return cljstemplate.shape.clicked(shape,click);
} else {
return shape;
}
});
cljstemplate.shape.vertices = (function vertices(p__75327,xs,ys,sf){
var map__75346 = p__75327;
var map__75346__$1 = ((cljs.core.seq_QMARK_(map__75346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75346):map__75346);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75346__$1,cljs.core.constant$keyword$73);
var vec__75347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75346__$1,cljs.core.constant$keyword$74);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75347,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75347,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75347,(2),null);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75346__$1,cljs.core.constant$keyword$78);
var alpha = (function (){var G__75348 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__75348) : cljstemplate.shape.alphas.call(null,G__75348));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__75349 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__75349) : cljstemplate.shape.radii.call(null,G__75349));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(((function (alpha,delta,radius,beta,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation){
return (function (p1__75326_SHARP_){
return (p1__75326_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation){
return (function iter__75350(s__75351){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation){
return (function (){
var s__75351__$1 = s__75351;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__75351__$1);
if(temp__4126__auto__){
var s__75351__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75351__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__75351__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__75353 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__75352 = (0);
while(true){
if((i__75352 < size__4566__auto__)){
var gamma = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__75352);
cljs.core.chunk_append(b__75353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__75360 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75360) : Math.sin.call(null,G__75360));
})())),(ys + (radius * (function (){var G__75361 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75361) : Math.cos.call(null,G__75361));
})()))], null));

var G__75364 = (i__75352 + (1));
i__75352 = G__75364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75353),iter__75350(cljs.core.chunk_rest(s__75351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75353),null);
}
} else {
var gamma = cljs.core.first(s__75351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__75362 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75362) : Math.sin.call(null,G__75362));
})())),(ys + (radius * (function (){var G__75363 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75363) : Math.cos.call(null,G__75363));
})()))], null),iter__75350(cljs.core.rest(s__75351__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__75346,map__75346__$1,n,vec__75347,x,y,r,rotation))
;
return iter__4567__auto__(gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__75365){
var vec__75374 = p__75365;
var vec__75375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75374,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75375,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75375,(1),null);
var rest = cljs.core.nthnext(vec__75374,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__75376_75382 = cljs.core.seq(rest);
var chunk__75377_75383 = null;
var count__75378_75384 = (0);
var i__75379_75385 = (0);
while(true){
if((i__75379_75385 < count__75378_75384)){
var vec__75380_75386 = chunk__75377_75383.cljs$core$IIndexed$_nth$arity$2(null,i__75379_75385);
var xr_75387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75380_75386,(0),null);
var yr_75388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75380_75386,(1),null);
context.lineTo(xr_75387,yr_75388);

var G__75389 = seq__75376_75382;
var G__75390 = chunk__75377_75383;
var G__75391 = count__75378_75384;
var G__75392 = (i__75379_75385 + (1));
seq__75376_75382 = G__75389;
chunk__75377_75383 = G__75390;
count__75378_75384 = G__75391;
i__75379_75385 = G__75392;
continue;
} else {
var temp__4126__auto___75393 = cljs.core.seq(seq__75376_75382);
if(temp__4126__auto___75393){
var seq__75376_75394__$1 = temp__4126__auto___75393;
if(cljs.core.chunked_seq_QMARK_(seq__75376_75394__$1)){
var c__4598__auto___75395 = cljs.core.chunk_first(seq__75376_75394__$1);
var G__75396 = cljs.core.chunk_rest(seq__75376_75394__$1);
var G__75397 = c__4598__auto___75395;
var G__75398 = cljs.core.count(c__4598__auto___75395);
var G__75399 = (0);
seq__75376_75382 = G__75396;
chunk__75377_75383 = G__75397;
count__75378_75384 = G__75398;
i__75379_75385 = G__75399;
continue;
} else {
var vec__75381_75400 = cljs.core.first(seq__75376_75394__$1);
var xr_75401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75381_75400,(0),null);
var yr_75402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75381_75400,(1),null);
context.lineTo(xr_75401,yr_75402);

var G__75403 = cljs.core.next(seq__75376_75394__$1);
var G__75404 = null;
var G__75405 = (0);
var G__75406 = (0);
seq__75376_75382 = G__75403;
chunk__75377_75383 = G__75404;
count__75378_75384 = G__75405;
i__75379_75385 = G__75406;
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
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__75409,p__75410,channels,p__75411,p__75412,id,timestamp){
var vec__75554 = p__75409;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75554,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75554,(1),null);
var vec__75555 = p__75410;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75555,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75555,(1),null);
var mouse = vec__75555;
var vec__75556 = p__75411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(2),null);
var map__75557 = p__75412;
var map__75557__$1 = ((cljs.core.seq_QMARK_(map__75557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75557):map__75557);
var shape = map__75557__$1;
var vec__75558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75557__$1,cljs.core.constant$keyword$74);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75558,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75558,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75558,(2),null);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75557__$1,cljs.core.constant$keyword$73);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75557__$1,cljs.core.constant$keyword$78);
var wiring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75557__$1,cljs.core.constant$keyword$75);
context.lineWidth = (1);

context.setLineDash([]);

var alpha = (function (){var G__75559 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__75559) : cljstemplate.shape.alphas.call(null,G__75559));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__75560 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__75560) : cljstemplate.shape.radii.call(null,G__75560));
})() * sf);
var inner_radius = ((function (){var G__75561 = n;
return (cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1(G__75561) : cljstemplate.shape.inner_radii.call(null,G__75561));
})() * sf);
var pad = ((function (){var G__75562 = n;
return (cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1(G__75562) : cljstemplate.shape.pads.call(null,G__75562));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,vec__75554,x_offset,y_offset,vec__75555,mx,my,mouse,vec__75556,_,bdr,fg,map__75557,map__75557__$1,shape,vec__75558,x,y,r,n,rotation,wiring){
return (function (p1__75407_SHARP_){
return (p1__75407_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__75554,x_offset,y_offset,vec__75555,mx,my,mouse,vec__75556,_,bdr,fg,map__75557,map__75557__$1,shape,vec__75558,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__75554,x_offset,y_offset,vec__75555,mx,my,mouse,vec__75556,_,bdr,fg,map__75557,map__75557__$1,shape,vec__75558,x,y,r,n,rotation,wiring){
return (function (p1__75408_SHARP_){
return (p1__75408_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__75554,x_offset,y_offset,vec__75555,mx,my,mouse,vec__75556,_,bdr,fg,map__75557,map__75557__$1,shape,vec__75558,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * (function (){var G__75563 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75563) : Math.sin.call(null,G__75563));
})())),(ys + (radius * (function (){var G__75564 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75564) : Math.cos.call(null,G__75564));
})())));

var seq__75565_75695 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__75566_75696 = null;
var count__75567_75697 = (0);
var i__75568_75698 = (0);
while(true){
if((i__75568_75698 < count__75567_75697)){
var gamma_75699 = chunk__75566_75696.cljs$core$IIndexed$_nth$arity$2(null,i__75568_75698);
context.lineTo((xs + (radius * (function (){var G__75569 = gamma_75699;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75569) : Math.sin.call(null,G__75569));
})())),(ys + (radius * (function (){var G__75570 = gamma_75699;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75570) : Math.cos.call(null,G__75570));
})())));

var G__75700 = seq__75565_75695;
var G__75701 = chunk__75566_75696;
var G__75702 = count__75567_75697;
var G__75703 = (i__75568_75698 + (1));
seq__75565_75695 = G__75700;
chunk__75566_75696 = G__75701;
count__75567_75697 = G__75702;
i__75568_75698 = G__75703;
continue;
} else {
var temp__4126__auto___75704 = cljs.core.seq(seq__75565_75695);
if(temp__4126__auto___75704){
var seq__75565_75705__$1 = temp__4126__auto___75704;
if(cljs.core.chunked_seq_QMARK_(seq__75565_75705__$1)){
var c__4598__auto___75706 = cljs.core.chunk_first(seq__75565_75705__$1);
var G__75707 = cljs.core.chunk_rest(seq__75565_75705__$1);
var G__75708 = c__4598__auto___75706;
var G__75709 = cljs.core.count(c__4598__auto___75706);
var G__75710 = (0);
seq__75565_75695 = G__75707;
chunk__75566_75696 = G__75708;
count__75567_75697 = G__75709;
i__75568_75698 = G__75710;
continue;
} else {
var gamma_75711 = cljs.core.first(seq__75565_75705__$1);
context.lineTo((xs + (radius * (function (){var G__75571 = gamma_75711;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75571) : Math.sin.call(null,G__75571));
})())),(ys + (radius * (function (){var G__75572 = gamma_75711;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75572) : Math.cos.call(null,G__75572));
})())));

var G__75712 = cljs.core.next(seq__75565_75705__$1);
var G__75713 = null;
var G__75714 = (0);
var G__75715 = (0);
seq__75565_75695 = G__75712;
chunk__75566_75696 = G__75713;
count__75567_75697 = G__75714;
i__75568_75698 = G__75715;
continue;
}
} else {
}
}
break;
}

context.closePath();

context.fillStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,(cljs.core.truth_(context.isPointInPath(mx,my))?0.6:(1))));

context.fill();

context.save();

context.clip();

var result = cljstemplate.shape.click_result(shape,context,mouse);
var seq__75573_75716 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channels)));
var chunk__75574_75717 = null;
var count__75575_75718 = (0);
var i__75576_75719 = (0);
while(true){
if((i__75576_75719 < count__75575_75718)){
var ch_75720 = chunk__75574_75717.cljs$core$IIndexed$_nth$arity$2(null,i__75576_75719);
var channel_75721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_75720);
var channel_wiring_75722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_75720);
var ch_pos_75723 = ((ch_75720 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__75577_75724 = cljs.core.seq(channel_wiring_75722);
var chunk__75578_75725 = null;
var count__75579_75726 = (0);
var i__75580_75727 = (0);
while(true){
if((i__75580_75727 < count__75579_75726)){
var vec__75581_75728 = chunk__75578_75725.cljs$core$IIndexed$_nth$arity$2(null,i__75580_75727);
var from_75729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75581_75728,(0),null);
var onto_75730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75581_75728,(1),null);
var vec__75582_75731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75581_75728,(2),null);
var fw_75732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75582_75731,(0),null);
var bw_75733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75582_75731,(1),null);
var switched_75734 = vec__75582_75731;
context.beginPath();

var vec__75583_75735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75729);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75591) : Math.sin.call(null,G__75591));
})(),(function (){var G__75592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75729);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75592) : Math.cos.call(null,G__75592));
})()], null);
var from_x_75736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75583_75735,(0),null);
var from_y_75737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75583_75735,(1),null);
var vec__75584_75738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75730);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75593) : Math.sin.call(null,G__75593));
})(),(function (){var G__75594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75730);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75594) : Math.cos.call(null,G__75594));
})()], null);
var onto_x_75739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75584_75738,(0),null);
var onto_y_75740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75584_75738,(1),null);
var vec__75585_75741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75729);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75595) : Math.cos.call(null,G__75595));
})(),(- (function (){var G__75596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75729);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75596) : Math.sin.call(null,G__75596));
})())], null);
var from_x_p_75742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75585_75741,(0),null);
var from_y_p_75743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75585_75741,(1),null);
var vec__75586_75744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75730);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75597) : Math.cos.call(null,G__75597));
})(),(- (function (){var G__75598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75730);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75598) : Math.sin.call(null,G__75598));
})())], null);
var onto_x_p_75745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75586_75744,(0),null);
var onto_y_p_75746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75586_75744,(1),null);
var vec__75587_75747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_75736)),(ys + (pad * from_y_75737))], null);
var xa_75748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75587_75747,(0),null);
var ya_75749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75587_75747,(1),null);
var vec__75588_75750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_75736)) + (ch_pos_75723 * from_x_p_75742)),((ys + ((0.5 * inner_radius) * from_y_75737)) + (ch_pos_75723 * from_y_p_75743))], null);
var xb_75751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75588_75750,(0),null);
var yb_75752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75588_75750,(1),null);
var vec__75589_75753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_75739)) + (ch_pos_75723 * onto_x_p_75745)),((ys + ((0.5 * inner_radius) * onto_y_75740)) + (ch_pos_75723 * onto_y_p_75746))], null);
var xc_75754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75589_75753,(0),null);
var yc_75755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75589_75753,(1),null);
var vec__75590_75756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_75739)),(ys + (pad * onto_y_75740))], null);
var xd_75757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75590_75756,(0),null);
var yd_75758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75590_75756,(1),null);
context.moveTo(xa_75748,ya_75749);

context.bezierCurveTo(xb_75751,yb_75752,xc_75754,yc_75755,xd_75757,yd_75758);

var length_est_75759 = (inner_radius * cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(function (){var G__75599 = (from_75729 - onto_75730);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__75599) : Math.abs.call(null,G__75599));
})()], null),(2)));
var offset_75760 = cljs.core.mod(((timestamp / (2000)) * (length_est_75759 + (1))),(length_est_75759 + (1)));
var lineDash_75761 = [(1),(length_est_75759 / (2))];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),switched_75734))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_75721,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__75600_75762 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_75732,offset_75760], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_75733,(- offset_75760)], null)], null));
var chunk__75601_75763 = null;
var count__75602_75764 = (0);
var i__75603_75765 = (0);
while(true){
if((i__75603_75765 < count__75602_75764)){
var vec__75604_75766 = chunk__75601_75763.cljs$core$IIndexed$_nth$arity$2(null,i__75603_75765);
var direction_75767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75604_75766,(0),null);
var os_75768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75604_75766,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75767)){
context.setLineDash(lineDash_75761);

context.lineDashOffset = os_75768;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75769 = seq__75600_75762;
var G__75770 = chunk__75601_75763;
var G__75771 = count__75602_75764;
var G__75772 = (i__75603_75765 + (1));
seq__75600_75762 = G__75769;
chunk__75601_75763 = G__75770;
count__75602_75764 = G__75771;
i__75603_75765 = G__75772;
continue;
} else {
var temp__4126__auto___75773 = cljs.core.seq(seq__75600_75762);
if(temp__4126__auto___75773){
var seq__75600_75774__$1 = temp__4126__auto___75773;
if(cljs.core.chunked_seq_QMARK_(seq__75600_75774__$1)){
var c__4598__auto___75775 = cljs.core.chunk_first(seq__75600_75774__$1);
var G__75776 = cljs.core.chunk_rest(seq__75600_75774__$1);
var G__75777 = c__4598__auto___75775;
var G__75778 = cljs.core.count(c__4598__auto___75775);
var G__75779 = (0);
seq__75600_75762 = G__75776;
chunk__75601_75763 = G__75777;
count__75602_75764 = G__75778;
i__75603_75765 = G__75779;
continue;
} else {
var vec__75605_75780 = cljs.core.first(seq__75600_75774__$1);
var direction_75781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75605_75780,(0),null);
var os_75782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75605_75780,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75781)){
context.setLineDash(lineDash_75761);

context.lineDashOffset = os_75782;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75783 = cljs.core.next(seq__75600_75774__$1);
var G__75784 = null;
var G__75785 = (0);
var G__75786 = (0);
seq__75600_75762 = G__75783;
chunk__75601_75763 = G__75784;
count__75602_75764 = G__75785;
i__75603_75765 = G__75786;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__75787 = seq__75577_75724;
var G__75788 = chunk__75578_75725;
var G__75789 = count__75579_75726;
var G__75790 = (i__75580_75727 + (1));
seq__75577_75724 = G__75787;
chunk__75578_75725 = G__75788;
count__75579_75726 = G__75789;
i__75580_75727 = G__75790;
continue;
} else {
var temp__4126__auto___75791 = cljs.core.seq(seq__75577_75724);
if(temp__4126__auto___75791){
var seq__75577_75792__$1 = temp__4126__auto___75791;
if(cljs.core.chunked_seq_QMARK_(seq__75577_75792__$1)){
var c__4598__auto___75793 = cljs.core.chunk_first(seq__75577_75792__$1);
var G__75794 = cljs.core.chunk_rest(seq__75577_75792__$1);
var G__75795 = c__4598__auto___75793;
var G__75796 = cljs.core.count(c__4598__auto___75793);
var G__75797 = (0);
seq__75577_75724 = G__75794;
chunk__75578_75725 = G__75795;
count__75579_75726 = G__75796;
i__75580_75727 = G__75797;
continue;
} else {
var vec__75606_75798 = cljs.core.first(seq__75577_75792__$1);
var from_75799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75606_75798,(0),null);
var onto_75800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75606_75798,(1),null);
var vec__75607_75801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75606_75798,(2),null);
var fw_75802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75607_75801,(0),null);
var bw_75803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75607_75801,(1),null);
var switched_75804 = vec__75607_75801;
context.beginPath();

var vec__75608_75805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75799);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75616) : Math.sin.call(null,G__75616));
})(),(function (){var G__75617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75799);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75617) : Math.cos.call(null,G__75617));
})()], null);
var from_x_75806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75608_75805,(0),null);
var from_y_75807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75608_75805,(1),null);
var vec__75609_75808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75800);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75618) : Math.sin.call(null,G__75618));
})(),(function (){var G__75619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75800);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75619) : Math.cos.call(null,G__75619));
})()], null);
var onto_x_75809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75609_75808,(0),null);
var onto_y_75810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75609_75808,(1),null);
var vec__75610_75811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75799);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75620) : Math.cos.call(null,G__75620));
})(),(- (function (){var G__75621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75799);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75621) : Math.sin.call(null,G__75621));
})())], null);
var from_x_p_75812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75610_75811,(0),null);
var from_y_p_75813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75610_75811,(1),null);
var vec__75611_75814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75800);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75622) : Math.cos.call(null,G__75622));
})(),(- (function (){var G__75623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75800);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75623) : Math.sin.call(null,G__75623));
})())], null);
var onto_x_p_75815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75611_75814,(0),null);
var onto_y_p_75816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75611_75814,(1),null);
var vec__75612_75817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_75806)),(ys + (pad * from_y_75807))], null);
var xa_75818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75612_75817,(0),null);
var ya_75819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75612_75817,(1),null);
var vec__75613_75820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_75806)) + (ch_pos_75723 * from_x_p_75812)),((ys + ((0.5 * inner_radius) * from_y_75807)) + (ch_pos_75723 * from_y_p_75813))], null);
var xb_75821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75613_75820,(0),null);
var yb_75822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75613_75820,(1),null);
var vec__75614_75823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_75809)) + (ch_pos_75723 * onto_x_p_75815)),((ys + ((0.5 * inner_radius) * onto_y_75810)) + (ch_pos_75723 * onto_y_p_75816))], null);
var xc_75824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75614_75823,(0),null);
var yc_75825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75614_75823,(1),null);
var vec__75615_75826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_75809)),(ys + (pad * onto_y_75810))], null);
var xd_75827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75615_75826,(0),null);
var yd_75828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75615_75826,(1),null);
context.moveTo(xa_75818,ya_75819);

context.bezierCurveTo(xb_75821,yb_75822,xc_75824,yc_75825,xd_75827,yd_75828);

var length_est_75829 = (inner_radius * cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(function (){var G__75624 = (from_75799 - onto_75800);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__75624) : Math.abs.call(null,G__75624));
})()], null),(2)));
var offset_75830 = cljs.core.mod(((timestamp / (2000)) * (length_est_75829 + (1))),(length_est_75829 + (1)));
var lineDash_75831 = [(1),(length_est_75829 / (2))];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),switched_75804))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_75721,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__75625_75832 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_75802,offset_75830], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_75803,(- offset_75830)], null)], null));
var chunk__75626_75833 = null;
var count__75627_75834 = (0);
var i__75628_75835 = (0);
while(true){
if((i__75628_75835 < count__75627_75834)){
var vec__75629_75836 = chunk__75626_75833.cljs$core$IIndexed$_nth$arity$2(null,i__75628_75835);
var direction_75837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75629_75836,(0),null);
var os_75838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75629_75836,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75837)){
context.setLineDash(lineDash_75831);

context.lineDashOffset = os_75838;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75839 = seq__75625_75832;
var G__75840 = chunk__75626_75833;
var G__75841 = count__75627_75834;
var G__75842 = (i__75628_75835 + (1));
seq__75625_75832 = G__75839;
chunk__75626_75833 = G__75840;
count__75627_75834 = G__75841;
i__75628_75835 = G__75842;
continue;
} else {
var temp__4126__auto___75843__$1 = cljs.core.seq(seq__75625_75832);
if(temp__4126__auto___75843__$1){
var seq__75625_75844__$1 = temp__4126__auto___75843__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75625_75844__$1)){
var c__4598__auto___75845 = cljs.core.chunk_first(seq__75625_75844__$1);
var G__75846 = cljs.core.chunk_rest(seq__75625_75844__$1);
var G__75847 = c__4598__auto___75845;
var G__75848 = cljs.core.count(c__4598__auto___75845);
var G__75849 = (0);
seq__75625_75832 = G__75846;
chunk__75626_75833 = G__75847;
count__75627_75834 = G__75848;
i__75628_75835 = G__75849;
continue;
} else {
var vec__75630_75850 = cljs.core.first(seq__75625_75844__$1);
var direction_75851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75630_75850,(0),null);
var os_75852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75630_75850,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75851)){
context.setLineDash(lineDash_75831);

context.lineDashOffset = os_75852;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75721);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75853 = cljs.core.next(seq__75625_75844__$1);
var G__75854 = null;
var G__75855 = (0);
var G__75856 = (0);
seq__75625_75832 = G__75853;
chunk__75626_75833 = G__75854;
count__75627_75834 = G__75855;
i__75628_75835 = G__75856;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__75857 = cljs.core.next(seq__75577_75792__$1);
var G__75858 = null;
var G__75859 = (0);
var G__75860 = (0);
seq__75577_75724 = G__75857;
chunk__75578_75725 = G__75858;
count__75579_75726 = G__75859;
i__75580_75727 = G__75860;
continue;
}
} else {
}
}
break;
}

var G__75861 = seq__75573_75716;
var G__75862 = chunk__75574_75717;
var G__75863 = count__75575_75718;
var G__75864 = (i__75576_75719 + (1));
seq__75573_75716 = G__75861;
chunk__75574_75717 = G__75862;
count__75575_75718 = G__75863;
i__75576_75719 = G__75864;
continue;
} else {
var temp__4126__auto___75865 = cljs.core.seq(seq__75573_75716);
if(temp__4126__auto___75865){
var seq__75573_75866__$1 = temp__4126__auto___75865;
if(cljs.core.chunked_seq_QMARK_(seq__75573_75866__$1)){
var c__4598__auto___75867 = cljs.core.chunk_first(seq__75573_75866__$1);
var G__75868 = cljs.core.chunk_rest(seq__75573_75866__$1);
var G__75869 = c__4598__auto___75867;
var G__75870 = cljs.core.count(c__4598__auto___75867);
var G__75871 = (0);
seq__75573_75716 = G__75868;
chunk__75574_75717 = G__75869;
count__75575_75718 = G__75870;
i__75576_75719 = G__75871;
continue;
} else {
var ch_75872 = cljs.core.first(seq__75573_75866__$1);
var channel_75873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_75872);
var channel_wiring_75874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_75872);
var ch_pos_75875 = ((ch_75872 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__75631_75876 = cljs.core.seq(channel_wiring_75874);
var chunk__75632_75877 = null;
var count__75633_75878 = (0);
var i__75634_75879 = (0);
while(true){
if((i__75634_75879 < count__75633_75878)){
var vec__75635_75880 = chunk__75632_75877.cljs$core$IIndexed$_nth$arity$2(null,i__75634_75879);
var from_75881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75635_75880,(0),null);
var onto_75882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75635_75880,(1),null);
var vec__75636_75883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75635_75880,(2),null);
var fw_75884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75636_75883,(0),null);
var bw_75885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75636_75883,(1),null);
var switched_75886 = vec__75636_75883;
context.beginPath();

var vec__75637_75887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75881);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75645) : Math.sin.call(null,G__75645));
})(),(function (){var G__75646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75881);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75646) : Math.cos.call(null,G__75646));
})()], null);
var from_x_75888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75637_75887,(0),null);
var from_y_75889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75637_75887,(1),null);
var vec__75638_75890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75882);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75647) : Math.sin.call(null,G__75647));
})(),(function (){var G__75648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75882);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75648) : Math.cos.call(null,G__75648));
})()], null);
var onto_x_75891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75638_75890,(0),null);
var onto_y_75892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75638_75890,(1),null);
var vec__75639_75893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75881);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75649) : Math.cos.call(null,G__75649));
})(),(- (function (){var G__75650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75881);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75650) : Math.sin.call(null,G__75650));
})())], null);
var from_x_p_75894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75639_75893,(0),null);
var from_y_p_75895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75639_75893,(1),null);
var vec__75640_75896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75882);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75651) : Math.cos.call(null,G__75651));
})(),(- (function (){var G__75652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75882);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75652) : Math.sin.call(null,G__75652));
})())], null);
var onto_x_p_75897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75640_75896,(0),null);
var onto_y_p_75898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75640_75896,(1),null);
var vec__75641_75899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_75888)),(ys + (pad * from_y_75889))], null);
var xa_75900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75641_75899,(0),null);
var ya_75901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75641_75899,(1),null);
var vec__75642_75902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_75888)) + (ch_pos_75875 * from_x_p_75894)),((ys + ((0.5 * inner_radius) * from_y_75889)) + (ch_pos_75875 * from_y_p_75895))], null);
var xb_75903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75642_75902,(0),null);
var yb_75904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75642_75902,(1),null);
var vec__75643_75905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_75891)) + (ch_pos_75875 * onto_x_p_75897)),((ys + ((0.5 * inner_radius) * onto_y_75892)) + (ch_pos_75875 * onto_y_p_75898))], null);
var xc_75906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75643_75905,(0),null);
var yc_75907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75643_75905,(1),null);
var vec__75644_75908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_75891)),(ys + (pad * onto_y_75892))], null);
var xd_75909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75644_75908,(0),null);
var yd_75910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75644_75908,(1),null);
context.moveTo(xa_75900,ya_75901);

context.bezierCurveTo(xb_75903,yb_75904,xc_75906,yc_75907,xd_75909,yd_75910);

var length_est_75911 = (inner_radius * cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(function (){var G__75653 = (from_75881 - onto_75882);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__75653) : Math.abs.call(null,G__75653));
})()], null),(2)));
var offset_75912 = cljs.core.mod(((timestamp / (2000)) * (length_est_75911 + (1))),(length_est_75911 + (1)));
var lineDash_75913 = [(1),(length_est_75911 / (2))];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),switched_75886))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_75873,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__75654_75914 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_75884,offset_75912], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_75885,(- offset_75912)], null)], null));
var chunk__75655_75915 = null;
var count__75656_75916 = (0);
var i__75657_75917 = (0);
while(true){
if((i__75657_75917 < count__75656_75916)){
var vec__75658_75918 = chunk__75655_75915.cljs$core$IIndexed$_nth$arity$2(null,i__75657_75917);
var direction_75919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75658_75918,(0),null);
var os_75920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75658_75918,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75919)){
context.setLineDash(lineDash_75913);

context.lineDashOffset = os_75920;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75921 = seq__75654_75914;
var G__75922 = chunk__75655_75915;
var G__75923 = count__75656_75916;
var G__75924 = (i__75657_75917 + (1));
seq__75654_75914 = G__75921;
chunk__75655_75915 = G__75922;
count__75656_75916 = G__75923;
i__75657_75917 = G__75924;
continue;
} else {
var temp__4126__auto___75925__$1 = cljs.core.seq(seq__75654_75914);
if(temp__4126__auto___75925__$1){
var seq__75654_75926__$1 = temp__4126__auto___75925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75654_75926__$1)){
var c__4598__auto___75927 = cljs.core.chunk_first(seq__75654_75926__$1);
var G__75928 = cljs.core.chunk_rest(seq__75654_75926__$1);
var G__75929 = c__4598__auto___75927;
var G__75930 = cljs.core.count(c__4598__auto___75927);
var G__75931 = (0);
seq__75654_75914 = G__75928;
chunk__75655_75915 = G__75929;
count__75656_75916 = G__75930;
i__75657_75917 = G__75931;
continue;
} else {
var vec__75659_75932 = cljs.core.first(seq__75654_75926__$1);
var direction_75933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75659_75932,(0),null);
var os_75934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75659_75932,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75933)){
context.setLineDash(lineDash_75913);

context.lineDashOffset = os_75934;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75935 = cljs.core.next(seq__75654_75926__$1);
var G__75936 = null;
var G__75937 = (0);
var G__75938 = (0);
seq__75654_75914 = G__75935;
chunk__75655_75915 = G__75936;
count__75656_75916 = G__75937;
i__75657_75917 = G__75938;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__75939 = seq__75631_75876;
var G__75940 = chunk__75632_75877;
var G__75941 = count__75633_75878;
var G__75942 = (i__75634_75879 + (1));
seq__75631_75876 = G__75939;
chunk__75632_75877 = G__75940;
count__75633_75878 = G__75941;
i__75634_75879 = G__75942;
continue;
} else {
var temp__4126__auto___75943__$1 = cljs.core.seq(seq__75631_75876);
if(temp__4126__auto___75943__$1){
var seq__75631_75944__$1 = temp__4126__auto___75943__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75631_75944__$1)){
var c__4598__auto___75945 = cljs.core.chunk_first(seq__75631_75944__$1);
var G__75946 = cljs.core.chunk_rest(seq__75631_75944__$1);
var G__75947 = c__4598__auto___75945;
var G__75948 = cljs.core.count(c__4598__auto___75945);
var G__75949 = (0);
seq__75631_75876 = G__75946;
chunk__75632_75877 = G__75947;
count__75633_75878 = G__75948;
i__75634_75879 = G__75949;
continue;
} else {
var vec__75660_75950 = cljs.core.first(seq__75631_75944__$1);
var from_75951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75660_75950,(0),null);
var onto_75952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75660_75950,(1),null);
var vec__75661_75953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75660_75950,(2),null);
var fw_75954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661_75953,(0),null);
var bw_75955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661_75953,(1),null);
var switched_75956 = vec__75661_75953;
context.beginPath();

var vec__75662_75957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75951);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75670) : Math.sin.call(null,G__75670));
})(),(function (){var G__75671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75951);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75671) : Math.cos.call(null,G__75671));
})()], null);
var from_x_75958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662_75957,(0),null);
var from_y_75959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662_75957,(1),null);
var vec__75663_75960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75952);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75672) : Math.sin.call(null,G__75672));
})(),(function (){var G__75673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75952);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75673) : Math.cos.call(null,G__75673));
})()], null);
var onto_x_75961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75663_75960,(0),null);
var onto_y_75962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75663_75960,(1),null);
var vec__75664_75963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75951);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75674) : Math.cos.call(null,G__75674));
})(),(- (function (){var G__75675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_75951);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75675) : Math.sin.call(null,G__75675));
})())], null);
var from_x_p_75964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75664_75963,(0),null);
var from_y_p_75965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75664_75963,(1),null);
var vec__75665_75966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75952);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75676) : Math.cos.call(null,G__75676));
})(),(- (function (){var G__75677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_75952);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75677) : Math.sin.call(null,G__75677));
})())], null);
var onto_x_p_75967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75665_75966,(0),null);
var onto_y_p_75968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75665_75966,(1),null);
var vec__75666_75969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_75958)),(ys + (pad * from_y_75959))], null);
var xa_75970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75666_75969,(0),null);
var ya_75971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75666_75969,(1),null);
var vec__75667_75972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_75958)) + (ch_pos_75875 * from_x_p_75964)),((ys + ((0.5 * inner_radius) * from_y_75959)) + (ch_pos_75875 * from_y_p_75965))], null);
var xb_75973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75667_75972,(0),null);
var yb_75974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75667_75972,(1),null);
var vec__75668_75975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_75961)) + (ch_pos_75875 * onto_x_p_75967)),((ys + ((0.5 * inner_radius) * onto_y_75962)) + (ch_pos_75875 * onto_y_p_75968))], null);
var xc_75976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75668_75975,(0),null);
var yc_75977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75668_75975,(1),null);
var vec__75669_75978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_75961)),(ys + (pad * onto_y_75962))], null);
var xd_75979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75669_75978,(0),null);
var yd_75980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75669_75978,(1),null);
context.moveTo(xa_75970,ya_75971);

context.bezierCurveTo(xb_75973,yb_75974,xc_75976,yc_75977,xd_75979,yd_75980);

var length_est_75981 = (inner_radius * cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(function (){var G__75678 = (from_75951 - onto_75952);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__75678) : Math.abs.call(null,G__75678));
})()], null),(2)));
var offset_75982 = cljs.core.mod(((timestamp / (2000)) * (length_est_75981 + (1))),(length_est_75981 + (1)));
var lineDash_75983 = [(1),(length_est_75981 / (2))];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),switched_75956))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_75873,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__75679_75984 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_75954,offset_75982], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_75955,(- offset_75982)], null)], null));
var chunk__75680_75985 = null;
var count__75681_75986 = (0);
var i__75682_75987 = (0);
while(true){
if((i__75682_75987 < count__75681_75986)){
var vec__75683_75988 = chunk__75680_75985.cljs$core$IIndexed$_nth$arity$2(null,i__75682_75987);
var direction_75989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75683_75988,(0),null);
var os_75990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75683_75988,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_75989)){
context.setLineDash(lineDash_75983);

context.lineDashOffset = os_75990;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__75991 = seq__75679_75984;
var G__75992 = chunk__75680_75985;
var G__75993 = count__75681_75986;
var G__75994 = (i__75682_75987 + (1));
seq__75679_75984 = G__75991;
chunk__75680_75985 = G__75992;
count__75681_75986 = G__75993;
i__75682_75987 = G__75994;
continue;
} else {
var temp__4126__auto___75995__$2 = cljs.core.seq(seq__75679_75984);
if(temp__4126__auto___75995__$2){
var seq__75679_75996__$1 = temp__4126__auto___75995__$2;
if(cljs.core.chunked_seq_QMARK_(seq__75679_75996__$1)){
var c__4598__auto___75997 = cljs.core.chunk_first(seq__75679_75996__$1);
var G__75998 = cljs.core.chunk_rest(seq__75679_75996__$1);
var G__75999 = c__4598__auto___75997;
var G__76000 = cljs.core.count(c__4598__auto___75997);
var G__76001 = (0);
seq__75679_75984 = G__75998;
chunk__75680_75985 = G__75999;
count__75681_75986 = G__76000;
i__75682_75987 = G__76001;
continue;
} else {
var vec__75684_76002 = cljs.core.first(seq__75679_75996__$1);
var direction_76003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75684_76002,(0),null);
var os_76004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75684_76002,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,direction_76003)){
context.setLineDash(lineDash_75983);

context.lineDashOffset = os_76004;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_75873);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__76005 = cljs.core.next(seq__75679_75996__$1);
var G__76006 = null;
var G__76007 = (0);
var G__76008 = (0);
seq__75679_75984 = G__76005;
chunk__75680_75985 = G__76006;
count__75681_75986 = G__76007;
i__75682_75987 = G__76008;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__76009 = cljs.core.next(seq__75631_75944__$1);
var G__76010 = null;
var G__76011 = (0);
var G__76012 = (0);
seq__75631_75876 = G__76009;
chunk__75632_75877 = G__76010;
count__75633_75878 = G__76011;
i__75634_75879 = G__76012;
continue;
}
} else {
}
}
break;
}

var G__76013 = cljs.core.next(seq__75573_75866__$1);
var G__76014 = null;
var G__76015 = (0);
var G__76016 = (0);
seq__75573_75716 = G__76013;
chunk__75574_75717 = G__76014;
count__75575_75718 = G__76015;
i__75576_75719 = G__76016;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljstemplate.shape.debug)){
context.fillStyle = cljstemplate.shape.rgb_str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null));

context.fillRect((xs - (5)),(ys - (10)),(15),(15));

context.fillStyle = cljstemplate.shape.rgb_str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

context.fillText([cljs.core.str(id)].join(''),xs,ys);
} else {
}

context.restore();

context.beginPath();

context.moveTo((xs + (radius * (function (){var G__75685 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75685) : Math.sin.call(null,G__75685));
})())),(ys + (radius * (function (){var G__75686 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75686) : Math.cos.call(null,G__75686));
})())));

var seq__75687_76017 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__75688_76018 = null;
var count__75689_76019 = (0);
var i__75690_76020 = (0);
while(true){
if((i__75690_76020 < count__75689_76019)){
var gamma_76021 = chunk__75688_76018.cljs$core$IIndexed$_nth$arity$2(null,i__75690_76020);
context.lineTo((xs + (radius * (function (){var G__75691 = gamma_76021;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75691) : Math.sin.call(null,G__75691));
})())),(ys + (radius * (function (){var G__75692 = gamma_76021;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75692) : Math.cos.call(null,G__75692));
})())));

var G__76022 = seq__75687_76017;
var G__76023 = chunk__75688_76018;
var G__76024 = count__75689_76019;
var G__76025 = (i__75690_76020 + (1));
seq__75687_76017 = G__76022;
chunk__75688_76018 = G__76023;
count__75689_76019 = G__76024;
i__75690_76020 = G__76025;
continue;
} else {
var temp__4126__auto___76026 = cljs.core.seq(seq__75687_76017);
if(temp__4126__auto___76026){
var seq__75687_76027__$1 = temp__4126__auto___76026;
if(cljs.core.chunked_seq_QMARK_(seq__75687_76027__$1)){
var c__4598__auto___76028 = cljs.core.chunk_first(seq__75687_76027__$1);
var G__76029 = cljs.core.chunk_rest(seq__75687_76027__$1);
var G__76030 = c__4598__auto___76028;
var G__76031 = cljs.core.count(c__4598__auto___76028);
var G__76032 = (0);
seq__75687_76017 = G__76029;
chunk__75688_76018 = G__76030;
count__75689_76019 = G__76031;
i__75690_76020 = G__76032;
continue;
} else {
var gamma_76033 = cljs.core.first(seq__75687_76027__$1);
context.lineTo((xs + (radius * (function (){var G__75693 = gamma_76033;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__75693) : Math.sin.call(null,G__75693));
})())),(ys + (radius * (function (){var G__75694 = gamma_76033;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__75694) : Math.cos.call(null,G__75694));
})())));

var G__76034 = cljs.core.next(seq__75687_76027__$1);
var G__76035 = null;
var G__76036 = (0);
var G__76037 = (0);
seq__75687_76017 = G__76034;
chunk__75688_76018 = G__76035;
count__75689_76019 = G__76036;
i__75690_76020 = G__76037;
continue;
}
} else {
}
}
break;
}

context.closePath();

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.stroke();

return result;
});
cljstemplate.shape.scale_factor = (function scale_factor(w,h,max_w,max_h){
var x__4135__auto__ = (max_w / w);
var y__4136__auto__ = (max_h / h);
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
});
cljstemplate.shape.render_at_rest = (function render_at_rest(context,sf,offset,mouse,channels,colours,ends,timestamp,shape,id){
if(cljs.core.truth_((function (){var and__3799__auto__ = cljstemplate.shape.not_rotating_QMARK_(shape);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not((function (){var G__76039 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__76039) : ends.call(null,G__76039));
})());
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.render_shape(context,sf,offset,mouse,channels,colours,shape,id,timestamp);
} else {
return shape;
}
});
cljstemplate.shape.render_in_motion = (function render_in_motion(context,sf,offset,mouse,channels,colours,ends,timestamp,shape,id){
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__76044 = shape;
return (cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1(G__76044) : cljstemplate.shape.rotating_QMARK_.call(null,G__76044));
})();
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not((function (){var G__76045 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__76045) : ends.call(null,G__76045));
})());
} else {
return and__3799__auto__;
}
})())){
return cljstemplate.shape.render_shape(context,sf,offset,mouse,channels,colours,shape,id,timestamp);
} else {
return shape;
}
});
cljstemplate.shape.fill_circle = (function fill_circle(surface,coords,colour){
var vec__76047 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76047,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76047,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76047,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__76049 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76049,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76049,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76049,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__76050,context,timestamp,p__76051,sf,p__76052){
var map__76064 = p__76050;
var map__76064__$1 = ((cljs.core.seq_QMARK_(map__76064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76064):map__76064);
var level = map__76064__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76064__$1,cljs.core.constant$keyword$77);
var vec__76065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76064__$1,cljs.core.constant$keyword$84);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76065,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76065,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76065,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76064__$1,cljs.core.constant$keyword$82);
var vec__76066 = p__76051;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76066,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76066,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76066,(2),null);
var vec__76067 = p__76052;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76067,(1),null);
var shape_76075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,start);
var map__76068_76076 = shape_76075;
var map__76068_76077__$1 = ((cljs.core.seq_QMARK_(map__76068_76076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76068_76076):map__76068_76076);
var vec__76069_76078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76068_76077__$1,cljs.core.constant$keyword$74);
var x_76079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76069_76078,(0),null);
var y_76080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76069_76078,(1),null);
var __76081__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76069_76078,(2),null);
var n_76082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76068_76077__$1,cljs.core.constant$keyword$73);
var xs_76083 = ((x_76079 * sf) + x_offset);
var ys_76084 = ((y_76080 * sf) + y_offset);
var vtxs_76085 = cljstemplate.shape.vertices(shape_76075,xs_76083,ys_76084,sf);
var radius_76086 = ((function (){var G__76070 = n_76082;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__76070) : cljstemplate.shape.radii.call(null,G__76070));
})() * sf);
var many_channels_76087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) - cljs.core.count(channels)),channels));
var channel_count_76088 = cljs.core.count(many_channels_76087);
context.save();

cljstemplate.shape.trace_path(context,vtxs_76085);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76083,ys_76084,radius_76086], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__76071_76089 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_76088));
var chunk__76072_76090 = null;
var count__76073_76091 = (0);
var i__76074_76092 = (0);
while(true){
if((i__76074_76092 < count__76073_76091)){
var i_76093 = chunk__76072_76090.cljs$core$IIndexed$_nth$arity$2(null,i__76074_76092);
var f_76094 = cljs.core.mod(((timestamp / (50)) + (i_76093 * (radius_76086 / channel_count_76088))),radius_76086);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76083,ys_76084,f_76094], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_76087,i_76093),((1) - (f_76094 / radius_76086))));

var G__76095 = seq__76071_76089;
var G__76096 = chunk__76072_76090;
var G__76097 = count__76073_76091;
var G__76098 = (i__76074_76092 + (1));
seq__76071_76089 = G__76095;
chunk__76072_76090 = G__76096;
count__76073_76091 = G__76097;
i__76074_76092 = G__76098;
continue;
} else {
var temp__4126__auto___76099 = cljs.core.seq(seq__76071_76089);
if(temp__4126__auto___76099){
var seq__76071_76100__$1 = temp__4126__auto___76099;
if(cljs.core.chunked_seq_QMARK_(seq__76071_76100__$1)){
var c__4598__auto___76101 = cljs.core.chunk_first(seq__76071_76100__$1);
var G__76102 = cljs.core.chunk_rest(seq__76071_76100__$1);
var G__76103 = c__4598__auto___76101;
var G__76104 = cljs.core.count(c__4598__auto___76101);
var G__76105 = (0);
seq__76071_76089 = G__76102;
chunk__76072_76090 = G__76103;
count__76073_76091 = G__76104;
i__76074_76092 = G__76105;
continue;
} else {
var i_76106 = cljs.core.first(seq__76071_76100__$1);
var f_76107 = cljs.core.mod(((timestamp / (50)) + (i_76106 * (radius_76086 / channel_count_76088))),radius_76086);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76083,ys_76084,f_76107], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_76087,i_76106),((1) - (f_76107 / radius_76086))));

var G__76108 = cljs.core.next(seq__76071_76100__$1);
var G__76109 = null;
var G__76110 = (0);
var G__76111 = (0);
seq__76071_76089 = G__76108;
chunk__76072_76090 = G__76109;
count__76073_76091 = G__76110;
i__76074_76092 = G__76111;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_76085);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__76112,context,timestamp,p__76113,sf,p__76114,done){
var map__76148 = p__76112;
var map__76148__$1 = ((cljs.core.seq_QMARK_(map__76148))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76148):map__76148);
var level = map__76148__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76148__$1,cljs.core.constant$keyword$77);
var vec__76149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76148__$1,cljs.core.constant$keyword$85);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76149,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76149,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76149,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76148__$1,cljs.core.constant$keyword$82);
var vec__76150 = p__76113;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76150,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76150,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76150,(2),null);
var vec__76151 = p__76114;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76151,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76151,(1),null);
var shape_76181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,end);
var map__76152_76182 = shape_76181;
var map__76152_76183__$1 = ((cljs.core.seq_QMARK_(map__76152_76182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76152_76182):map__76152_76182);
var vec__76153_76184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152_76183__$1,cljs.core.constant$keyword$74);
var x_76185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76153_76184,(0),null);
var y_76186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76153_76184,(1),null);
var __76187__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76153_76184,(2),null);
var n_76188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152_76183__$1,cljs.core.constant$keyword$73);
var wiring_76189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152_76183__$1,cljs.core.constant$keyword$75);
var xs_76190 = ((x_76185 * sf) + x_offset);
var ys_76191 = ((y_76186 * sf) + y_offset);
var vtxs_76192 = cljstemplate.shape.vertices(shape_76181,xs_76190,ys_76191,sf);
var radius_76193 = ((function (){var G__76154 = n_76188;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__76154) : cljstemplate.shape.radii.call(null,G__76154));
})() * sf);
var radius_3rd_76194 = (radius_76193 / (3));
var radius_5th_76195 = (radius_76193 / (5));
var radius_15th_76196 = (radius_76193 / (15));
var radius_20th_76197 = (radius_76193 / (30));
var channel_count_76198 = cljs.core.count(channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path(context,vtxs_76192);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76190,ys_76191,radius_76193], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_(cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_76181,map__76152_76182,map__76152_76183__$1,vec__76153_76184,x_76185,y_76186,__76187__$3,n_76188,wiring_76189,xs_76190,ys_76191,vtxs_76192,radius_76193,radius_3rd_76194,radius_5th_76195,radius_15th_76196,radius_20th_76197,channel_count_76198,map__76148,map__76148__$1,level,shapes,vec__76149,end,_,___$1,channels,vec__76150,___$2,bdr,fg,vec__76151,x_offset,y_offset){
return (function iter__76155(s__76156){
return (new cljs.core.LazySeq(null,((function (shape_76181,map__76152_76182,map__76152_76183__$1,vec__76153_76184,x_76185,y_76186,__76187__$3,n_76188,wiring_76189,xs_76190,ys_76191,vtxs_76192,radius_76193,radius_3rd_76194,radius_5th_76195,radius_15th_76196,radius_20th_76197,channel_count_76198,map__76148,map__76148__$1,level,shapes,vec__76149,end,_,___$1,channels,vec__76150,___$2,bdr,fg,vec__76151,x_offset,y_offset){
return (function (){
var s__76156__$1 = s__76156;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__76156__$1);
if(temp__4126__auto__){
var s__76156__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76156__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__76156__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__76158 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__76157 = (0);
while(true){
if((i__76157 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__76157);
cljs.core.chunk_append(b__76158,cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),cljs.core.flatten(channel_wiring)));

var G__76199 = (i__76157 + (1));
i__76157 = G__76199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76158),iter__76155(cljs.core.chunk_rest(s__76156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76158),null);
}
} else {
var channel_wiring = cljs.core.first(s__76156__$2);
return cljs.core.cons(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),cljs.core.flatten(channel_wiring)),iter__76155(cljs.core.rest(s__76156__$2)));
}
} else {
return null;
}
break;
}
});})(shape_76181,map__76152_76182,map__76152_76183__$1,vec__76153_76184,x_76185,y_76186,__76187__$3,n_76188,wiring_76189,xs_76190,ys_76191,vtxs_76192,radius_76193,radius_3rd_76194,radius_5th_76195,radius_15th_76196,radius_20th_76197,channel_count_76198,map__76148,map__76148__$1,level,shapes,vec__76149,end,_,___$1,channels,vec__76150,___$2,bdr,fg,vec__76151,x_offset,y_offset))
,null,null));
});})(shape_76181,map__76152_76182,map__76152_76183__$1,vec__76153_76184,x_76185,y_76186,__76187__$3,n_76188,wiring_76189,xs_76190,ys_76191,vtxs_76192,radius_76193,radius_3rd_76194,radius_5th_76195,radius_15th_76196,radius_20th_76197,channel_count_76198,map__76148,map__76148__$1,level,shapes,vec__76149,end,_,___$1,channels,vec__76150,___$2,bdr,fg,vec__76151,x_offset,y_offset))
;
return iter__4567__auto__(wiring_76189);
})())){
var seq__76161_76200 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
var chunk__76162_76201 = null;
var count__76163_76202 = (0);
var i__76164_76203 = (0);
while(true){
if((i__76164_76203 < count__76163_76202)){
var i_76204 = chunk__76162_76201.cljs$core$IIndexed$_nth$arity$2(null,i__76164_76203);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76190,ys_76191,(radius_76193 / ((5) - i_76204))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_76204)));

var G__76205 = seq__76161_76200;
var G__76206 = chunk__76162_76201;
var G__76207 = count__76163_76202;
var G__76208 = (i__76164_76203 + (1));
seq__76161_76200 = G__76205;
chunk__76162_76201 = G__76206;
count__76163_76202 = G__76207;
i__76164_76203 = G__76208;
continue;
} else {
var temp__4126__auto___76209 = cljs.core.seq(seq__76161_76200);
if(temp__4126__auto___76209){
var seq__76161_76210__$1 = temp__4126__auto___76209;
if(cljs.core.chunked_seq_QMARK_(seq__76161_76210__$1)){
var c__4598__auto___76211 = cljs.core.chunk_first(seq__76161_76210__$1);
var G__76212 = cljs.core.chunk_rest(seq__76161_76210__$1);
var G__76213 = c__4598__auto___76211;
var G__76214 = cljs.core.count(c__4598__auto___76211);
var G__76215 = (0);
seq__76161_76200 = G__76212;
chunk__76162_76201 = G__76213;
count__76163_76202 = G__76214;
i__76164_76203 = G__76215;
continue;
} else {
var i_76216 = cljs.core.first(seq__76161_76210__$1);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_76190,ys_76191,(radius_76193 / ((5) - i_76216))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_76216)));

var G__76217 = cljs.core.next(seq__76161_76210__$1);
var G__76218 = null;
var G__76219 = (0);
var G__76220 = (0);
seq__76161_76200 = G__76217;
chunk__76162_76201 = G__76218;
count__76163_76202 = G__76219;
i__76164_76203 = G__76220;
continue;
}
} else {
}
}
break;
}

var G__76165_76221 = done;
var G__76166_76222 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__76165_76221,G__76166_76222) : cljs.core.reset_BANG_.call(null,G__76165_76221,G__76166_76222));

var G__76167_76223 = cljs.core.constant$keyword$85;
var G__76168_76224 = context;
var G__76169_76225 = xs_76190;
var G__76170_76226 = ys_76191;
var G__76171_76227 = radius_76193;
var G__76172_76228 = timestamp;
(cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6 ? cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6(G__76167_76223,G__76168_76224,G__76169_76225,G__76170_76226,G__76171_76227,G__76172_76228) : cljstemplate.shape.render_attention.call(null,G__76167_76223,G__76168_76224,G__76169_76225,G__76170_76226,G__76171_76227,G__76172_76228));
} else {
}

var seq__76173_76229 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_76198));
var chunk__76174_76230 = null;
var count__76175_76231 = (0);
var i__76176_76232 = (0);
while(true){
if((i__76176_76232 < count__76175_76231)){
var i_76233 = chunk__76174_76230.cljs$core$IIndexed$_nth$arity$2(null,i__76176_76232);
var angle_76234 = ((i_76233 * (cljstemplate.constance.TAU / channel_count_76198)) - (timestamp / (3000)));
var xi_76235 = (xs_76190 + (radius_3rd_76194 * (function (){var G__76177 = angle_76234;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__76177) : Math.sin.call(null,G__76177));
})()));
var yi_76236 = (ys_76191 + (radius_3rd_76194 * (function (){var G__76178 = angle_76234;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__76178) : Math.cos.call(null,G__76178));
})()));
var on_76237 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_76189,i_76233)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_76235,yi_76236,radius_5th_76195], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_76233),(cljs.core.truth_(on_76237)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_76235,yi_76236,radius_5th_76195], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_76233),(cljs.core.truth_(on_76237)?0.75:0.25)));

if(cljs.core.truth_(on_76237)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_76235 - radius_15th_76196),(yi_76236 - radius_15th_76196),radius_15th_76196], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_76235 - radius_15th_76196),(yi_76236 - radius_15th_76196),radius_20th_76197], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__76238 = seq__76173_76229;
var G__76239 = chunk__76174_76230;
var G__76240 = count__76175_76231;
var G__76241 = (i__76176_76232 + (1));
seq__76173_76229 = G__76238;
chunk__76174_76230 = G__76239;
count__76175_76231 = G__76240;
i__76176_76232 = G__76241;
continue;
} else {
var temp__4126__auto___76242 = cljs.core.seq(seq__76173_76229);
if(temp__4126__auto___76242){
var seq__76173_76243__$1 = temp__4126__auto___76242;
if(cljs.core.chunked_seq_QMARK_(seq__76173_76243__$1)){
var c__4598__auto___76244 = cljs.core.chunk_first(seq__76173_76243__$1);
var G__76245 = cljs.core.chunk_rest(seq__76173_76243__$1);
var G__76246 = c__4598__auto___76244;
var G__76247 = cljs.core.count(c__4598__auto___76244);
var G__76248 = (0);
seq__76173_76229 = G__76245;
chunk__76174_76230 = G__76246;
count__76175_76231 = G__76247;
i__76176_76232 = G__76248;
continue;
} else {
var i_76249 = cljs.core.first(seq__76173_76243__$1);
var angle_76250 = ((i_76249 * (cljstemplate.constance.TAU / channel_count_76198)) - (timestamp / (3000)));
var xi_76251 = (xs_76190 + (radius_3rd_76194 * (function (){var G__76179 = angle_76250;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__76179) : Math.sin.call(null,G__76179));
})()));
var yi_76252 = (ys_76191 + (radius_3rd_76194 * (function (){var G__76180 = angle_76250;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__76180) : Math.cos.call(null,G__76180));
})()));
var on_76253 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_76189,i_76249)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_76251,yi_76252,radius_5th_76195], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_76249),(cljs.core.truth_(on_76253)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_76251,yi_76252,radius_5th_76195], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_76249),(cljs.core.truth_(on_76253)?0.75:0.25)));

if(cljs.core.truth_(on_76253)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_76251 - radius_15th_76196),(yi_76252 - radius_15th_76196),radius_15th_76196], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_76251 - radius_15th_76196),(yi_76252 - radius_15th_76196),radius_20th_76197], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__76254 = cljs.core.next(seq__76173_76243__$1);
var G__76255 = null;
var G__76256 = (0);
var G__76257 = (0);
seq__76173_76229 = G__76254;
chunk__76174_76230 = G__76255;
count__76175_76231 = G__76256;
i__76176_76232 = G__76257;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_76192);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.gradients = (function (){var G__76258 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__76258) : cljs.core.atom.call(null,G__76258));
})();
cljstemplate.shape.mk_gradient = (function mk_gradient(key,context,x,y,radius){
var grd = context.createRadialGradient(x,y,(1),x,y,radius);
grd.addColorStop((0),"rgba(250, 250, 250, 1.0)");

grd.addColorStop((1),"rgba(250, 250, 250, 0.0)");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstemplate.shape.gradients,cljs.core.assoc,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null),grd], null));

return grd;
});
cljstemplate.shape.attention_gradient = (function attention_gradient(key,context,x,y,radius){
var temp__4124__auto__ = (function (){var G__76263 = cljstemplate.shape.gradients;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__76263) : cljs.core.deref.call(null,G__76263));
})().call(null,key);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__76264 = temp__4124__auto__;
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76264,(0),null);
var cached_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76264,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null))){
return cached_value;
} else {
var G__76265_76267 = "CACHE: Args differ";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__76265_76267) : cljstemplate.shape.log.call(null,G__76265_76267));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
} else {
var G__76266_76268 = "CACHE: Cache empty";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__76266_76268) : cljstemplate.shape.log.call(null,G__76266_76268));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
});
cljstemplate.shape.render_attention = (function render_attention(key,context,x,y,radius,timestamp){
var gradient = cljstemplate.shape.attention_gradient(key,context,x,y,radius);
context.fillStyle = gradient;

var seq__76273 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
var chunk__76274 = null;
var count__76275 = (0);
var i__76276 = (0);
while(true){
if((i__76276 < count__76275)){
var i = chunk__76274.cljs$core$IIndexed$_nth$arity$2(null,i__76276);
var start_76277 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_76278 = (start_76277 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_76277,end_76278,true);

context.closePath();

context.fill();

var G__76279 = seq__76273;
var G__76280 = chunk__76274;
var G__76281 = count__76275;
var G__76282 = (i__76276 + (1));
seq__76273 = G__76279;
chunk__76274 = G__76280;
count__76275 = G__76281;
i__76276 = G__76282;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__76273);
if(temp__4126__auto__){
var seq__76273__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76273__$1)){
var c__4598__auto__ = cljs.core.chunk_first(seq__76273__$1);
var G__76283 = cljs.core.chunk_rest(seq__76273__$1);
var G__76284 = c__4598__auto__;
var G__76285 = cljs.core.count(c__4598__auto__);
var G__76286 = (0);
seq__76273 = G__76283;
chunk__76274 = G__76284;
count__76275 = G__76285;
i__76276 = G__76286;
continue;
} else {
var i = cljs.core.first(seq__76273__$1);
var start_76287 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_76288 = (start_76287 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_76287,end_76288,true);

context.closePath();

context.fill();

var G__76289 = cljs.core.next(seq__76273__$1);
var G__76290 = null;
var G__76291 = (0);
var G__76292 = (0);
seq__76273 = G__76289;
chunk__76274 = G__76290;
count__76275 = G__76291;
i__76276 = G__76292;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__76295,level,mouse,timestamp,done){
var vec__76300 = p__76295;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76300,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76300,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76300,(2),null);
var sf = cljstemplate.shape.scale_factor(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(level);
var colours = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(level);
var vec__76301 = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76301,(0),null);
var vec__76302 = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76302,(0),null);
var ends = cljs.core.PersistentHashSet.fromArray([end,start], true);
context.lineJoin = "round";

context.lineCap = "round";

if(cljs.core.truth_((function (){var G__76303 = done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__76303) : cljs.core.deref.call(null,G__76303));
})())){
cljstemplate.shape.render_attention(cljs.core.constant$keyword$94,context,width,height,((function (){var x__4135__auto__ = width;
var y__4136__auto__ = height;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})() / (2)),timestamp);
} else {
}

return cljstemplate.shape.render_end(cljstemplate.shape.render_start(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$77,((function (sf,offset,channels,colours,vec__76301,start,vec__76302,end,ends,vec__76300,context,width,height){
return (function (p1__76293_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_at_rest,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__76293_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__76301,start,vec__76302,end,ends,vec__76300,context,width,height))
),cljs.core.constant$keyword$77,((function (sf,offset,channels,colours,vec__76301,start,vec__76302,end,ends,vec__76300,context,width,height){
return (function (p1__76294_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_in_motion,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__76294_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__76301,start,vec__76302,end,ends,vec__76300,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});
