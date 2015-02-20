// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.shape');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.shape.log = cljstemplate.logging.logger(cljs.core.constant$keyword$102);
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
var G__28513 = (idx + (1));
var G__28514 = cljs.core.rest(items);
idx = G__28513;
items = G__28514;
continue;

}
}
break;
}
});
cljstemplate.shape.not_rotating_QMARK_ = (function not_rotating_QMARK_(shape){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$111], null));
});
cljstemplate.shape.rotating_QMARK_ = cljs.core.complement(cljstemplate.shape.not_rotating_QMARK_);
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__28515){
var vec__28517 = p__28515;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,cljs.core.constant$keyword$120], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$107,(function (p1__28518_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_channel_connections,p1__28518_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,(function (p1__28519_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_shape_connections,p1__28519_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,channel_id,wire_id,(2),direction_id], null),cljs.core.constant$keyword$121);
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__28520,index){
var vec__28523 = p__28520;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(0),null);
var onto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(1),null);
var vec__28524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(2),null);
var backward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(0),null);
var forward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(forward,cljs.core.constant$keyword$120))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(1)], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(onto,target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(backward,cljs.core.constant$keyword$120))){
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
var neighbour_index = cljstemplate.shape.index_of(cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(shape),from_shape_id);
var channel_wires = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(shape),channel_id);
var n = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape);
var r = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape));
var rotated_neighbour_index = cljs.core.mod(((neighbour_index + n) + (- r)),n);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape){
return (function (p1__28525_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__28525_SHARP_);
});})(neighbour_index,channel_wires,n,r,rotated_neighbour_index,shape))
,cljstemplate.shape.find_wires(rotated_neighbour_index,channel_wires));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljstemplate.shape.more_seeds = (function more_seeds(shapes,shape_id,channel_id,wire_id,direction_id){
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,shape_id);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_(shape))){
var neighbours = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(shape);
var output = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,channel_id,wire_id,direction_id], null));
var position = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$111], null));
var sides = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(shape);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__28527){
while(true){
var vec__28530 = p__28527;
var vec__28531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28530,(0),null);
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);
var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(1),null);
var wire_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(2),null);
var direction_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(3),null);
var seeds = cljs.core.nthnext(vec__28530,(1));
var new_shapes = cljs.core.update.cljs$core$IFn$_invoke$arity$3(shapes,shape_id,((function (shapes,p__28527,vec__28530,vec__28531,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__28526_SHARP_){
return cljstemplate.shape.switch_on(p1__28526_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__28527,vec__28530,vec__28531,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(seeds,cljstemplate.shape.more_seeds(new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq(new_seeds)){
var G__28532 = new_shapes;
var G__28533 = new_seeds;
shapes = G__28532;
p__28527 = G__28533;
continue;
} else {
return new_shapes;
}
break;
}
});
cljstemplate.shape.seed_lights = (function seed_lights(level,shape_id,channel_id){
var shapes = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(level);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,shape_id);
var wiring = cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(shape);
var channel_wiring = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,channel_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (shapes,shape,wiring,channel_wiring){
return (function (p1__28534_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__28534_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (shapes,shape,wiring,channel_wiring){
return (function (p1__28535_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__28535_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.seed_lights,cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.cljs$core$IFn$_invoke$arity$0()], 0));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,(function (p1__28536_SHARP_){
return cljstemplate.shape.populate_shape_connections(p1__28536_SHARP_,cljstemplate.shape.seed_light(level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections(cljstemplate.shape.clear_connections(level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__28537,p__28538){
var vec__28541 = p__28537;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(2),null);
var vec__28542 = p__28538;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28542,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28542,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__28543){
var map__28546 = p__28543;
var map__28546__$1 = ((cljs.core.seq_QMARK_(map__28546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28546):map__28546);
var shape = map__28546__$1;
var map__28547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28546__$1,cljs.core.constant$keyword$110);
var map__28547__$1 = ((cljs.core.seq_QMARK_(map__28547))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28547):map__28547);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.constant$keyword$116);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.constant$keyword$117);
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.constant$keyword$122);
var end_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.constant$keyword$123);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$111], null)))){
return shape;
} else {
if((end_time < timestamp)){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$111,end], null));
} else {
if((timestamp < start_time)){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$124], null),start);
} else {
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$124], null),cljstemplate.shape.proportionalise(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,timestamp,end_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)));

}
}
}
});
cljstemplate.shape.do_rotations = (function do_rotations(timestamp,level){
var r_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.rotated,timestamp);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,((function (r_fn){
return (function (p1__28548_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(r_fn,p1__28548_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__28549){
var vec__28551 = p__28549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28551,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28551,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28551,(2),null);
var timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28551,(3),null);
if(cljs.core.truth_(cljstemplate.shape.not_rotating_QMARK_(shape))){
var start = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape));
var end = start;
var start_time = timestamp;
var end_time = timestamp;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shape,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$116,start,cljs.core.constant$keyword$124,start,cljs.core.constant$keyword$117,end,cljs.core.constant$keyword$122,start_time,cljs.core.constant$keyword$123,end_time], null)], null)], 0));
} else {
var start = (function (){var or__3811__auto__ = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
var or__3811__auto____$1 = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__3811__auto____$1)){
return or__3811__auto____$1;
} else {
return cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape));
}
}
})();
var end = (cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape)) - (1));
var start_time = timestamp;
var end_time = (cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(shape)) + (250));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shape,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$116,start,cljs.core.constant$keyword$124,start,cljs.core.constant$keyword$117,end,cljs.core.constant$keyword$122,start_time,cljs.core.constant$keyword$123,end_time], null)], null)], 0));
}
});
cljstemplate.shape.rgb_str = (function rgb_str(p__28552){
var vec__28554 = p__28552;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__28555){
var vec__28557 = p__28555;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28559 = temp__4124__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28559,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28559,(1),null);
var clicked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28559,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__28561,xs,ys,sf){
var map__28580 = p__28561;
var map__28580__$1 = ((cljs.core.seq_QMARK_(map__28580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28580):map__28580);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28580__$1,cljs.core.constant$keyword$105);
var vec__28581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28580__$1,cljs.core.constant$keyword$106);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(2),null);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28580__$1,cljs.core.constant$keyword$110);
var alpha = (function (){var G__28582 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__28582) : cljstemplate.shape.alphas.call(null,G__28582));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__28583 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__28583) : cljstemplate.shape.radii.call(null,G__28583));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(((function (alpha,delta,radius,beta,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation){
return (function (p1__28560_SHARP_){
return (p1__28560_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation){
return (function iter__28584(s__28585){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation){
return (function (){
var s__28585__$1 = s__28585;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28585__$1);
if(temp__4126__auto__){
var s__28585__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28585__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__28585__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__28587 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__28586 = (0);
while(true){
if((i__28586 < size__4566__auto__)){
var gamma = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__28586);
cljs.core.chunk_append(b__28587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__28594 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28594) : Math.sin.call(null,G__28594));
})())),(ys + (radius * (function (){var G__28595 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28595) : Math.cos.call(null,G__28595));
})()))], null));

var G__28598 = (i__28586 + (1));
i__28586 = G__28598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28587),iter__28584(cljs.core.chunk_rest(s__28585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28587),null);
}
} else {
var gamma = cljs.core.first(s__28585__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__28596 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28596) : Math.sin.call(null,G__28596));
})())),(ys + (radius * (function (){var G__28597 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28597) : Math.cos.call(null,G__28597));
})()))], null),iter__28584(cljs.core.rest(s__28585__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__28580,map__28580__$1,n,vec__28581,x,y,r,rotation))
;
return iter__4567__auto__(gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__28599){
var vec__28608 = p__28599;
var vec__28609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28609,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28609,(1),null);
var rest = cljs.core.nthnext(vec__28608,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__28610_28616 = cljs.core.seq(rest);
var chunk__28611_28617 = null;
var count__28612_28618 = (0);
var i__28613_28619 = (0);
while(true){
if((i__28613_28619 < count__28612_28618)){
var vec__28614_28620 = chunk__28611_28617.cljs$core$IIndexed$_nth$arity$2(null,i__28613_28619);
var xr_28621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28614_28620,(0),null);
var yr_28622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28614_28620,(1),null);
context.lineTo(xr_28621,yr_28622);

var G__28623 = seq__28610_28616;
var G__28624 = chunk__28611_28617;
var G__28625 = count__28612_28618;
var G__28626 = (i__28613_28619 + (1));
seq__28610_28616 = G__28623;
chunk__28611_28617 = G__28624;
count__28612_28618 = G__28625;
i__28613_28619 = G__28626;
continue;
} else {
var temp__4126__auto___28627 = cljs.core.seq(seq__28610_28616);
if(temp__4126__auto___28627){
var seq__28610_28628__$1 = temp__4126__auto___28627;
if(cljs.core.chunked_seq_QMARK_(seq__28610_28628__$1)){
var c__4598__auto___28629 = cljs.core.chunk_first(seq__28610_28628__$1);
var G__28630 = cljs.core.chunk_rest(seq__28610_28628__$1);
var G__28631 = c__4598__auto___28629;
var G__28632 = cljs.core.count(c__4598__auto___28629);
var G__28633 = (0);
seq__28610_28616 = G__28630;
chunk__28611_28617 = G__28631;
count__28612_28618 = G__28632;
i__28613_28619 = G__28633;
continue;
} else {
var vec__28615_28634 = cljs.core.first(seq__28610_28628__$1);
var xr_28635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28615_28634,(0),null);
var yr_28636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28615_28634,(1),null);
context.lineTo(xr_28635,yr_28636);

var G__28637 = cljs.core.next(seq__28610_28628__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28610_28616 = G__28637;
chunk__28611_28617 = G__28638;
count__28612_28618 = G__28639;
i__28613_28619 = G__28640;
continue;
}
} else {
}
}
break;
}

return context.lineTo(x1,y1);
});
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__28643,p__28644,channels,p__28645,p__28646,id,timestamp){
var vec__28784 = p__28643;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28784,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28784,(1),null);
var vec__28785 = p__28644;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(1),null);
var mouse = vec__28785;
var vec__28786 = p__28645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28786,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28786,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28786,(2),null);
var map__28787 = p__28646;
var map__28787__$1 = ((cljs.core.seq_QMARK_(map__28787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28787):map__28787);
var shape = map__28787__$1;
var vec__28788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,cljs.core.constant$keyword$106);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(2),null);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,cljs.core.constant$keyword$105);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,cljs.core.constant$keyword$110);
var wiring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28787__$1,cljs.core.constant$keyword$107);
context.lineWidth = (1);

context.setLineDash([]);

var alpha = (function (){var G__28789 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__28789) : cljstemplate.shape.alphas.call(null,G__28789));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__28790 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__28790) : cljstemplate.shape.radii.call(null,G__28790));
})() * sf);
var inner_radius = ((function (){var G__28791 = n;
return (cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1(G__28791) : cljstemplate.shape.inner_radii.call(null,G__28791));
})() * sf);
var pad = ((function (){var G__28792 = n;
return (cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1(G__28792) : cljstemplate.shape.pads.call(null,G__28792));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,vec__28784,x_offset,y_offset,vec__28785,mx,my,mouse,vec__28786,_,bdr,fg,map__28787,map__28787__$1,shape,vec__28788,x,y,r,n,rotation,wiring){
return (function (p1__28641_SHARP_){
return (p1__28641_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__28784,x_offset,y_offset,vec__28785,mx,my,mouse,vec__28786,_,bdr,fg,map__28787,map__28787__$1,shape,vec__28788,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__28784,x_offset,y_offset,vec__28785,mx,my,mouse,vec__28786,_,bdr,fg,map__28787,map__28787__$1,shape,vec__28788,x,y,r,n,rotation,wiring){
return (function (p1__28642_SHARP_){
return (p1__28642_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__28784,x_offset,y_offset,vec__28785,mx,my,mouse,vec__28786,_,bdr,fg,map__28787,map__28787__$1,shape,vec__28788,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * (function (){var G__28793 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28793) : Math.sin.call(null,G__28793));
})())),(ys + (radius * (function (){var G__28794 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28794) : Math.cos.call(null,G__28794));
})())));

var seq__28795_28921 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__28796_28922 = null;
var count__28797_28923 = (0);
var i__28798_28924 = (0);
while(true){
if((i__28798_28924 < count__28797_28923)){
var gamma_28925 = chunk__28796_28922.cljs$core$IIndexed$_nth$arity$2(null,i__28798_28924);
context.lineTo((xs + (radius * (function (){var G__28799 = gamma_28925;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28799) : Math.sin.call(null,G__28799));
})())),(ys + (radius * (function (){var G__28800 = gamma_28925;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28800) : Math.cos.call(null,G__28800));
})())));

var G__28926 = seq__28795_28921;
var G__28927 = chunk__28796_28922;
var G__28928 = count__28797_28923;
var G__28929 = (i__28798_28924 + (1));
seq__28795_28921 = G__28926;
chunk__28796_28922 = G__28927;
count__28797_28923 = G__28928;
i__28798_28924 = G__28929;
continue;
} else {
var temp__4126__auto___28930 = cljs.core.seq(seq__28795_28921);
if(temp__4126__auto___28930){
var seq__28795_28931__$1 = temp__4126__auto___28930;
if(cljs.core.chunked_seq_QMARK_(seq__28795_28931__$1)){
var c__4598__auto___28932 = cljs.core.chunk_first(seq__28795_28931__$1);
var G__28933 = cljs.core.chunk_rest(seq__28795_28931__$1);
var G__28934 = c__4598__auto___28932;
var G__28935 = cljs.core.count(c__4598__auto___28932);
var G__28936 = (0);
seq__28795_28921 = G__28933;
chunk__28796_28922 = G__28934;
count__28797_28923 = G__28935;
i__28798_28924 = G__28936;
continue;
} else {
var gamma_28937 = cljs.core.first(seq__28795_28931__$1);
context.lineTo((xs + (radius * (function (){var G__28801 = gamma_28937;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28801) : Math.sin.call(null,G__28801));
})())),(ys + (radius * (function (){var G__28802 = gamma_28937;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28802) : Math.cos.call(null,G__28802));
})())));

var G__28938 = cljs.core.next(seq__28795_28931__$1);
var G__28939 = null;
var G__28940 = (0);
var G__28941 = (0);
seq__28795_28921 = G__28938;
chunk__28796_28922 = G__28939;
count__28797_28923 = G__28940;
i__28798_28924 = G__28941;
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
var seq__28803_28942 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channels)));
var chunk__28804_28943 = null;
var count__28805_28944 = (0);
var i__28806_28945 = (0);
while(true){
if((i__28806_28945 < count__28805_28944)){
var ch_28946 = chunk__28804_28943.cljs$core$IIndexed$_nth$arity$2(null,i__28806_28945);
var channel_28947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_28946);
var channel_wiring_28948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_28946);
var ch_pos_28949 = ((ch_28946 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__28807_28950 = cljs.core.seq(channel_wiring_28948);
var chunk__28808_28951 = null;
var count__28809_28952 = (0);
var i__28810_28953 = (0);
while(true){
if((i__28810_28953 < count__28809_28952)){
var vec__28811_28954 = chunk__28808_28951.cljs$core$IIndexed$_nth$arity$2(null,i__28810_28953);
var from_28955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811_28954,(0),null);
var onto_28956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811_28954,(1),null);
var vec__28812_28957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811_28954,(2),null);
var fw_28958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812_28957,(0),null);
var bw_28959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812_28957,(1),null);
var switched_28960 = vec__28812_28957;
context.beginPath();

var vec__28813_28961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_28955);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28821) : Math.sin.call(null,G__28821));
})(),(function (){var G__28822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_28955);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28822) : Math.cos.call(null,G__28822));
})()], null);
var from_x_28962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28813_28961,(0),null);
var from_y_28963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28813_28961,(1),null);
var vec__28814_28964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_28956);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28823) : Math.sin.call(null,G__28823));
})(),(function (){var G__28824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_28956);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28824) : Math.cos.call(null,G__28824));
})()], null);
var onto_x_28965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28814_28964,(0),null);
var onto_y_28966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28814_28964,(1),null);
var vec__28815_28967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_28955);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28825) : Math.cos.call(null,G__28825));
})(),(- (function (){var G__28826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_28955);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28826) : Math.sin.call(null,G__28826));
})())], null);
var from_x_p_28968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815_28967,(0),null);
var from_y_p_28969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815_28967,(1),null);
var vec__28816_28970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_28956);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28827) : Math.cos.call(null,G__28827));
})(),(- (function (){var G__28828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_28956);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28828) : Math.sin.call(null,G__28828));
})())], null);
var onto_x_p_28971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28816_28970,(0),null);
var onto_y_p_28972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28816_28970,(1),null);
var vec__28817_28973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_28962)),(ys + (pad * from_y_28963))], null);
var xa_28974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28817_28973,(0),null);
var ya_28975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28817_28973,(1),null);
var vec__28818_28976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_28962)) + (ch_pos_28949 * from_x_p_28968)),((ys + ((0.5 * inner_radius) * from_y_28963)) + (ch_pos_28949 * from_y_p_28969))], null);
var xb_28977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818_28976,(0),null);
var yb_28978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818_28976,(1),null);
var vec__28819_28979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_28965)) + (ch_pos_28949 * onto_x_p_28971)),((ys + ((0.5 * inner_radius) * onto_y_28966)) + (ch_pos_28949 * onto_y_p_28972))], null);
var xc_28980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28819_28979,(0),null);
var yc_28981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28819_28979,(1),null);
var vec__28820_28982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_28965)),(ys + (pad * onto_y_28966))], null);
var xd_28983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820_28982,(0),null);
var yd_28984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820_28982,(1),null);
context.moveTo(xa_28974,ya_28975);

context.bezierCurveTo(xb_28977,yb_28978,xc_28980,yc_28981,xd_28983,yd_28984);

var offset_28985 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_28986 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_28960))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_28947,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__28829_28987 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_28958,offset_28985], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_28959,(- offset_28985)], null)], null));
var chunk__28830_28988 = null;
var count__28831_28989 = (0);
var i__28832_28990 = (0);
while(true){
if((i__28832_28990 < count__28831_28989)){
var vec__28833_28991 = chunk__28830_28988.cljs$core$IIndexed$_nth$arity$2(null,i__28832_28990);
var direction_28992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28833_28991,(0),null);
var os_28993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28833_28991,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_28992)){
context.setLineDash(lineDash_28986);

context.lineDashOffset = os_28993;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__28994 = seq__28829_28987;
var G__28995 = chunk__28830_28988;
var G__28996 = count__28831_28989;
var G__28997 = (i__28832_28990 + (1));
seq__28829_28987 = G__28994;
chunk__28830_28988 = G__28995;
count__28831_28989 = G__28996;
i__28832_28990 = G__28997;
continue;
} else {
var temp__4126__auto___28998 = cljs.core.seq(seq__28829_28987);
if(temp__4126__auto___28998){
var seq__28829_28999__$1 = temp__4126__auto___28998;
if(cljs.core.chunked_seq_QMARK_(seq__28829_28999__$1)){
var c__4598__auto___29000 = cljs.core.chunk_first(seq__28829_28999__$1);
var G__29001 = cljs.core.chunk_rest(seq__28829_28999__$1);
var G__29002 = c__4598__auto___29000;
var G__29003 = cljs.core.count(c__4598__auto___29000);
var G__29004 = (0);
seq__28829_28987 = G__29001;
chunk__28830_28988 = G__29002;
count__28831_28989 = G__29003;
i__28832_28990 = G__29004;
continue;
} else {
var vec__28834_29005 = cljs.core.first(seq__28829_28999__$1);
var direction_29006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28834_29005,(0),null);
var os_29007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28834_29005,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29006)){
context.setLineDash(lineDash_28986);

context.lineDashOffset = os_29007;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29008 = cljs.core.next(seq__28829_28999__$1);
var G__29009 = null;
var G__29010 = (0);
var G__29011 = (0);
seq__28829_28987 = G__29008;
chunk__28830_28988 = G__29009;
count__28831_28989 = G__29010;
i__28832_28990 = G__29011;
continue;
}
} else {
}
}
break;
}

var G__29012 = seq__28807_28950;
var G__29013 = chunk__28808_28951;
var G__29014 = count__28809_28952;
var G__29015 = (i__28810_28953 + (1));
seq__28807_28950 = G__29012;
chunk__28808_28951 = G__29013;
count__28809_28952 = G__29014;
i__28810_28953 = G__29015;
continue;
} else {
var temp__4126__auto___29016 = cljs.core.seq(seq__28807_28950);
if(temp__4126__auto___29016){
var seq__28807_29017__$1 = temp__4126__auto___29016;
if(cljs.core.chunked_seq_QMARK_(seq__28807_29017__$1)){
var c__4598__auto___29018 = cljs.core.chunk_first(seq__28807_29017__$1);
var G__29019 = cljs.core.chunk_rest(seq__28807_29017__$1);
var G__29020 = c__4598__auto___29018;
var G__29021 = cljs.core.count(c__4598__auto___29018);
var G__29022 = (0);
seq__28807_28950 = G__29019;
chunk__28808_28951 = G__29020;
count__28809_28952 = G__29021;
i__28810_28953 = G__29022;
continue;
} else {
var vec__28835_29023 = cljs.core.first(seq__28807_29017__$1);
var from_29024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835_29023,(0),null);
var onto_29025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835_29023,(1),null);
var vec__28836_29026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835_29023,(2),null);
var fw_29027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28836_29026,(0),null);
var bw_29028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28836_29026,(1),null);
var switched_29029 = vec__28836_29026;
context.beginPath();

var vec__28837_29030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29024);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28845) : Math.sin.call(null,G__28845));
})(),(function (){var G__28846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29024);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28846) : Math.cos.call(null,G__28846));
})()], null);
var from_x_29031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837_29030,(0),null);
var from_y_29032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837_29030,(1),null);
var vec__28838_29033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29025);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28847) : Math.sin.call(null,G__28847));
})(),(function (){var G__28848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29025);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28848) : Math.cos.call(null,G__28848));
})()], null);
var onto_x_29034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838_29033,(0),null);
var onto_y_29035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838_29033,(1),null);
var vec__28839_29036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29024);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28849) : Math.cos.call(null,G__28849));
})(),(- (function (){var G__28850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29024);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28850) : Math.sin.call(null,G__28850));
})())], null);
var from_x_p_29037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839_29036,(0),null);
var from_y_p_29038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839_29036,(1),null);
var vec__28840_29039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29025);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28851) : Math.cos.call(null,G__28851));
})(),(- (function (){var G__28852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29025);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28852) : Math.sin.call(null,G__28852));
})())], null);
var onto_x_p_29040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_29039,(0),null);
var onto_y_p_29041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840_29039,(1),null);
var vec__28841_29042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_29031)),(ys + (pad * from_y_29032))], null);
var xa_29043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841_29042,(0),null);
var ya_29044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841_29042,(1),null);
var vec__28842_29045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_29031)) + (ch_pos_28949 * from_x_p_29037)),((ys + ((0.5 * inner_radius) * from_y_29032)) + (ch_pos_28949 * from_y_p_29038))], null);
var xb_29046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29045,(0),null);
var yb_29047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29045,(1),null);
var vec__28843_29048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_29034)) + (ch_pos_28949 * onto_x_p_29040)),((ys + ((0.5 * inner_radius) * onto_y_29035)) + (ch_pos_28949 * onto_y_p_29041))], null);
var xc_29049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843_29048,(0),null);
var yc_29050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843_29048,(1),null);
var vec__28844_29051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_29034)),(ys + (pad * onto_y_29035))], null);
var xd_29052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28844_29051,(0),null);
var yd_29053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28844_29051,(1),null);
context.moveTo(xa_29043,ya_29044);

context.bezierCurveTo(xb_29046,yb_29047,xc_29049,yc_29050,xd_29052,yd_29053);

var offset_29054 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_29055 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_29029))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_28947,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__28853_29056 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_29027,offset_29054], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_29028,(- offset_29054)], null)], null));
var chunk__28854_29057 = null;
var count__28855_29058 = (0);
var i__28856_29059 = (0);
while(true){
if((i__28856_29059 < count__28855_29058)){
var vec__28857_29060 = chunk__28854_29057.cljs$core$IIndexed$_nth$arity$2(null,i__28856_29059);
var direction_29061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857_29060,(0),null);
var os_29062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857_29060,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29061)){
context.setLineDash(lineDash_29055);

context.lineDashOffset = os_29062;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29063 = seq__28853_29056;
var G__29064 = chunk__28854_29057;
var G__29065 = count__28855_29058;
var G__29066 = (i__28856_29059 + (1));
seq__28853_29056 = G__29063;
chunk__28854_29057 = G__29064;
count__28855_29058 = G__29065;
i__28856_29059 = G__29066;
continue;
} else {
var temp__4126__auto___29067__$1 = cljs.core.seq(seq__28853_29056);
if(temp__4126__auto___29067__$1){
var seq__28853_29068__$1 = temp__4126__auto___29067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28853_29068__$1)){
var c__4598__auto___29069 = cljs.core.chunk_first(seq__28853_29068__$1);
var G__29070 = cljs.core.chunk_rest(seq__28853_29068__$1);
var G__29071 = c__4598__auto___29069;
var G__29072 = cljs.core.count(c__4598__auto___29069);
var G__29073 = (0);
seq__28853_29056 = G__29070;
chunk__28854_29057 = G__29071;
count__28855_29058 = G__29072;
i__28856_29059 = G__29073;
continue;
} else {
var vec__28858_29074 = cljs.core.first(seq__28853_29068__$1);
var direction_29075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858_29074,(0),null);
var os_29076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858_29074,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29075)){
context.setLineDash(lineDash_29055);

context.lineDashOffset = os_29076;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_28947);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29077 = cljs.core.next(seq__28853_29068__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__28853_29056 = G__29077;
chunk__28854_29057 = G__29078;
count__28855_29058 = G__29079;
i__28856_29059 = G__29080;
continue;
}
} else {
}
}
break;
}

var G__29081 = cljs.core.next(seq__28807_29017__$1);
var G__29082 = null;
var G__29083 = (0);
var G__29084 = (0);
seq__28807_28950 = G__29081;
chunk__28808_28951 = G__29082;
count__28809_28952 = G__29083;
i__28810_28953 = G__29084;
continue;
}
} else {
}
}
break;
}

var G__29085 = seq__28803_28942;
var G__29086 = chunk__28804_28943;
var G__29087 = count__28805_28944;
var G__29088 = (i__28806_28945 + (1));
seq__28803_28942 = G__29085;
chunk__28804_28943 = G__29086;
count__28805_28944 = G__29087;
i__28806_28945 = G__29088;
continue;
} else {
var temp__4126__auto___29089 = cljs.core.seq(seq__28803_28942);
if(temp__4126__auto___29089){
var seq__28803_29090__$1 = temp__4126__auto___29089;
if(cljs.core.chunked_seq_QMARK_(seq__28803_29090__$1)){
var c__4598__auto___29091 = cljs.core.chunk_first(seq__28803_29090__$1);
var G__29092 = cljs.core.chunk_rest(seq__28803_29090__$1);
var G__29093 = c__4598__auto___29091;
var G__29094 = cljs.core.count(c__4598__auto___29091);
var G__29095 = (0);
seq__28803_28942 = G__29092;
chunk__28804_28943 = G__29093;
count__28805_28944 = G__29094;
i__28806_28945 = G__29095;
continue;
} else {
var ch_29096 = cljs.core.first(seq__28803_29090__$1);
var channel_29097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_29096);
var channel_wiring_29098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_29096);
var ch_pos_29099 = ((ch_29096 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__28859_29100 = cljs.core.seq(channel_wiring_29098);
var chunk__28860_29101 = null;
var count__28861_29102 = (0);
var i__28862_29103 = (0);
while(true){
if((i__28862_29103 < count__28861_29102)){
var vec__28863_29104 = chunk__28860_29101.cljs$core$IIndexed$_nth$arity$2(null,i__28862_29103);
var from_29105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863_29104,(0),null);
var onto_29106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863_29104,(1),null);
var vec__28864_29107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863_29104,(2),null);
var fw_29108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864_29107,(0),null);
var bw_29109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864_29107,(1),null);
var switched_29110 = vec__28864_29107;
context.beginPath();

var vec__28865_29111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29105);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28873) : Math.sin.call(null,G__28873));
})(),(function (){var G__28874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29105);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28874) : Math.cos.call(null,G__28874));
})()], null);
var from_x_29112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865_29111,(0),null);
var from_y_29113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865_29111,(1),null);
var vec__28866_29114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29106);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28875) : Math.sin.call(null,G__28875));
})(),(function (){var G__28876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29106);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28876) : Math.cos.call(null,G__28876));
})()], null);
var onto_x_29115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866_29114,(0),null);
var onto_y_29116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866_29114,(1),null);
var vec__28867_29117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29105);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28877) : Math.cos.call(null,G__28877));
})(),(- (function (){var G__28878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29105);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28878) : Math.sin.call(null,G__28878));
})())], null);
var from_x_p_29118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867_29117,(0),null);
var from_y_p_29119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867_29117,(1),null);
var vec__28868_29120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29106);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28879) : Math.cos.call(null,G__28879));
})(),(- (function (){var G__28880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29106);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28880) : Math.sin.call(null,G__28880));
})())], null);
var onto_x_p_29121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28868_29120,(0),null);
var onto_y_p_29122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28868_29120,(1),null);
var vec__28869_29123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_29112)),(ys + (pad * from_y_29113))], null);
var xa_29124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28869_29123,(0),null);
var ya_29125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28869_29123,(1),null);
var vec__28870_29126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_29112)) + (ch_pos_29099 * from_x_p_29118)),((ys + ((0.5 * inner_radius) * from_y_29113)) + (ch_pos_29099 * from_y_p_29119))], null);
var xb_29127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870_29126,(0),null);
var yb_29128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870_29126,(1),null);
var vec__28871_29129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_29115)) + (ch_pos_29099 * onto_x_p_29121)),((ys + ((0.5 * inner_radius) * onto_y_29116)) + (ch_pos_29099 * onto_y_p_29122))], null);
var xc_29130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28871_29129,(0),null);
var yc_29131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28871_29129,(1),null);
var vec__28872_29132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_29115)),(ys + (pad * onto_y_29116))], null);
var xd_29133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872_29132,(0),null);
var yd_29134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872_29132,(1),null);
context.moveTo(xa_29124,ya_29125);

context.bezierCurveTo(xb_29127,yb_29128,xc_29130,yc_29131,xd_29133,yd_29134);

var offset_29135 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_29136 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_29110))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_29097,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__28881_29137 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_29108,offset_29135], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_29109,(- offset_29135)], null)], null));
var chunk__28882_29138 = null;
var count__28883_29139 = (0);
var i__28884_29140 = (0);
while(true){
if((i__28884_29140 < count__28883_29139)){
var vec__28885_29141 = chunk__28882_29138.cljs$core$IIndexed$_nth$arity$2(null,i__28884_29140);
var direction_29142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28885_29141,(0),null);
var os_29143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28885_29141,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29142)){
context.setLineDash(lineDash_29136);

context.lineDashOffset = os_29143;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29144 = seq__28881_29137;
var G__29145 = chunk__28882_29138;
var G__29146 = count__28883_29139;
var G__29147 = (i__28884_29140 + (1));
seq__28881_29137 = G__29144;
chunk__28882_29138 = G__29145;
count__28883_29139 = G__29146;
i__28884_29140 = G__29147;
continue;
} else {
var temp__4126__auto___29148__$1 = cljs.core.seq(seq__28881_29137);
if(temp__4126__auto___29148__$1){
var seq__28881_29149__$1 = temp__4126__auto___29148__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28881_29149__$1)){
var c__4598__auto___29150 = cljs.core.chunk_first(seq__28881_29149__$1);
var G__29151 = cljs.core.chunk_rest(seq__28881_29149__$1);
var G__29152 = c__4598__auto___29150;
var G__29153 = cljs.core.count(c__4598__auto___29150);
var G__29154 = (0);
seq__28881_29137 = G__29151;
chunk__28882_29138 = G__29152;
count__28883_29139 = G__29153;
i__28884_29140 = G__29154;
continue;
} else {
var vec__28886_29155 = cljs.core.first(seq__28881_29149__$1);
var direction_29156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886_29155,(0),null);
var os_29157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886_29155,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29156)){
context.setLineDash(lineDash_29136);

context.lineDashOffset = os_29157;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29158 = cljs.core.next(seq__28881_29149__$1);
var G__29159 = null;
var G__29160 = (0);
var G__29161 = (0);
seq__28881_29137 = G__29158;
chunk__28882_29138 = G__29159;
count__28883_29139 = G__29160;
i__28884_29140 = G__29161;
continue;
}
} else {
}
}
break;
}

var G__29162 = seq__28859_29100;
var G__29163 = chunk__28860_29101;
var G__29164 = count__28861_29102;
var G__29165 = (i__28862_29103 + (1));
seq__28859_29100 = G__29162;
chunk__28860_29101 = G__29163;
count__28861_29102 = G__29164;
i__28862_29103 = G__29165;
continue;
} else {
var temp__4126__auto___29166__$1 = cljs.core.seq(seq__28859_29100);
if(temp__4126__auto___29166__$1){
var seq__28859_29167__$1 = temp__4126__auto___29166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28859_29167__$1)){
var c__4598__auto___29168 = cljs.core.chunk_first(seq__28859_29167__$1);
var G__29169 = cljs.core.chunk_rest(seq__28859_29167__$1);
var G__29170 = c__4598__auto___29168;
var G__29171 = cljs.core.count(c__4598__auto___29168);
var G__29172 = (0);
seq__28859_29100 = G__29169;
chunk__28860_29101 = G__29170;
count__28861_29102 = G__29171;
i__28862_29103 = G__29172;
continue;
} else {
var vec__28887_29173 = cljs.core.first(seq__28859_29167__$1);
var from_29174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_29173,(0),null);
var onto_29175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_29173,(1),null);
var vec__28888_29176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_29173,(2),null);
var fw_29177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888_29176,(0),null);
var bw_29178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888_29176,(1),null);
var switched_29179 = vec__28888_29176;
context.beginPath();

var vec__28889_29180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29174);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28897) : Math.sin.call(null,G__28897));
})(),(function (){var G__28898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29174);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28898) : Math.cos.call(null,G__28898));
})()], null);
var from_x_29181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28889_29180,(0),null);
var from_y_29182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28889_29180,(1),null);
var vec__28890_29183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29175);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28899) : Math.sin.call(null,G__28899));
})(),(function (){var G__28900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29175);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28900) : Math.cos.call(null,G__28900));
})()], null);
var onto_x_29184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_29183,(0),null);
var onto_y_29185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_29183,(1),null);
var vec__28891_29186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29174);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28901) : Math.cos.call(null,G__28901));
})(),(- (function (){var G__28902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_29174);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28902) : Math.sin.call(null,G__28902));
})())], null);
var from_x_p_29187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28891_29186,(0),null);
var from_y_p_29188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28891_29186,(1),null);
var vec__28892_29189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29175);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28903) : Math.cos.call(null,G__28903));
})(),(- (function (){var G__28904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_29175);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28904) : Math.sin.call(null,G__28904));
})())], null);
var onto_x_p_29190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892_29189,(0),null);
var onto_y_p_29191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892_29189,(1),null);
var vec__28893_29192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_29181)),(ys + (pad * from_y_29182))], null);
var xa_29193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893_29192,(0),null);
var ya_29194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893_29192,(1),null);
var vec__28894_29195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_29181)) + (ch_pos_29099 * from_x_p_29187)),((ys + ((0.5 * inner_radius) * from_y_29182)) + (ch_pos_29099 * from_y_p_29188))], null);
var xb_29196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894_29195,(0),null);
var yb_29197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894_29195,(1),null);
var vec__28895_29198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_29184)) + (ch_pos_29099 * onto_x_p_29190)),((ys + ((0.5 * inner_radius) * onto_y_29185)) + (ch_pos_29099 * onto_y_p_29191))], null);
var xc_29199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895_29198,(0),null);
var yc_29200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28895_29198,(1),null);
var vec__28896_29201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_29184)),(ys + (pad * onto_y_29185))], null);
var xd_29202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896_29201,(0),null);
var yd_29203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896_29201,(1),null);
context.moveTo(xa_29193,ya_29194);

context.bezierCurveTo(xb_29196,yb_29197,xc_29199,yc_29200,xd_29202,yd_29203);

var offset_29204 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_29205 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_29179))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_29097,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__28905_29206 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_29177,offset_29204], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_29178,(- offset_29204)], null)], null));
var chunk__28906_29207 = null;
var count__28907_29208 = (0);
var i__28908_29209 = (0);
while(true){
if((i__28908_29209 < count__28907_29208)){
var vec__28909_29210 = chunk__28906_29207.cljs$core$IIndexed$_nth$arity$2(null,i__28908_29209);
var direction_29211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909_29210,(0),null);
var os_29212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909_29210,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29211)){
context.setLineDash(lineDash_29205);

context.lineDashOffset = os_29212;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29213 = seq__28905_29206;
var G__29214 = chunk__28906_29207;
var G__29215 = count__28907_29208;
var G__29216 = (i__28908_29209 + (1));
seq__28905_29206 = G__29213;
chunk__28906_29207 = G__29214;
count__28907_29208 = G__29215;
i__28908_29209 = G__29216;
continue;
} else {
var temp__4126__auto___29217__$2 = cljs.core.seq(seq__28905_29206);
if(temp__4126__auto___29217__$2){
var seq__28905_29218__$1 = temp__4126__auto___29217__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28905_29218__$1)){
var c__4598__auto___29219 = cljs.core.chunk_first(seq__28905_29218__$1);
var G__29220 = cljs.core.chunk_rest(seq__28905_29218__$1);
var G__29221 = c__4598__auto___29219;
var G__29222 = cljs.core.count(c__4598__auto___29219);
var G__29223 = (0);
seq__28905_29206 = G__29220;
chunk__28906_29207 = G__29221;
count__28907_29208 = G__29222;
i__28908_29209 = G__29223;
continue;
} else {
var vec__28910_29224 = cljs.core.first(seq__28905_29218__$1);
var direction_29225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910_29224,(0),null);
var os_29226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910_29224,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_29225)){
context.setLineDash(lineDash_29205);

context.lineDashOffset = os_29226;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_29097);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__29227 = cljs.core.next(seq__28905_29218__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__28905_29206 = G__29227;
chunk__28906_29207 = G__29228;
count__28907_29208 = G__29229;
i__28908_29209 = G__29230;
continue;
}
} else {
}
}
break;
}

var G__29231 = cljs.core.next(seq__28859_29167__$1);
var G__29232 = null;
var G__29233 = (0);
var G__29234 = (0);
seq__28859_29100 = G__29231;
chunk__28860_29101 = G__29232;
count__28861_29102 = G__29233;
i__28862_29103 = G__29234;
continue;
}
} else {
}
}
break;
}

var G__29235 = cljs.core.next(seq__28803_29090__$1);
var G__29236 = null;
var G__29237 = (0);
var G__29238 = (0);
seq__28803_28942 = G__29235;
chunk__28804_28943 = G__29236;
count__28805_28944 = G__29237;
i__28806_28945 = G__29238;
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

context.moveTo((xs + (radius * (function (){var G__28911 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28911) : Math.sin.call(null,G__28911));
})())),(ys + (radius * (function (){var G__28912 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28912) : Math.cos.call(null,G__28912));
})())));

var seq__28913_29239 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__28914_29240 = null;
var count__28915_29241 = (0);
var i__28916_29242 = (0);
while(true){
if((i__28916_29242 < count__28915_29241)){
var gamma_29243 = chunk__28914_29240.cljs$core$IIndexed$_nth$arity$2(null,i__28916_29242);
context.lineTo((xs + (radius * (function (){var G__28917 = gamma_29243;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28917) : Math.sin.call(null,G__28917));
})())),(ys + (radius * (function (){var G__28918 = gamma_29243;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28918) : Math.cos.call(null,G__28918));
})())));

var G__29244 = seq__28913_29239;
var G__29245 = chunk__28914_29240;
var G__29246 = count__28915_29241;
var G__29247 = (i__28916_29242 + (1));
seq__28913_29239 = G__29244;
chunk__28914_29240 = G__29245;
count__28915_29241 = G__29246;
i__28916_29242 = G__29247;
continue;
} else {
var temp__4126__auto___29248 = cljs.core.seq(seq__28913_29239);
if(temp__4126__auto___29248){
var seq__28913_29249__$1 = temp__4126__auto___29248;
if(cljs.core.chunked_seq_QMARK_(seq__28913_29249__$1)){
var c__4598__auto___29250 = cljs.core.chunk_first(seq__28913_29249__$1);
var G__29251 = cljs.core.chunk_rest(seq__28913_29249__$1);
var G__29252 = c__4598__auto___29250;
var G__29253 = cljs.core.count(c__4598__auto___29250);
var G__29254 = (0);
seq__28913_29239 = G__29251;
chunk__28914_29240 = G__29252;
count__28915_29241 = G__29253;
i__28916_29242 = G__29254;
continue;
} else {
var gamma_29255 = cljs.core.first(seq__28913_29249__$1);
context.lineTo((xs + (radius * (function (){var G__28919 = gamma_29255;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__28919) : Math.sin.call(null,G__28919));
})())),(ys + (radius * (function (){var G__28920 = gamma_29255;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__28920) : Math.cos.call(null,G__28920));
})())));

var G__29256 = cljs.core.next(seq__28913_29249__$1);
var G__29257 = null;
var G__29258 = (0);
var G__29259 = (0);
seq__28913_29239 = G__29256;
chunk__28914_29240 = G__29257;
count__28915_29241 = G__29258;
i__28916_29242 = G__29259;
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
return cljs.core.not((function (){var G__29261 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__29261) : ends.call(null,G__29261));
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
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__29266 = shape;
return (cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29266) : cljstemplate.shape.rotating_QMARK_.call(null,G__29266));
})();
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not((function (){var G__29267 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__29267) : ends.call(null,G__29267));
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
var vec__29269 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__29271 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29271,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29271,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29271,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__29272,context,timestamp,p__29273,sf,p__29274){
var map__29286 = p__29272;
var map__29286__$1 = ((cljs.core.seq_QMARK_(map__29286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29286):map__29286);
var level = map__29286__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,cljs.core.constant$keyword$109);
var vec__29287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,cljs.core.constant$keyword$116);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,cljs.core.constant$keyword$114);
var vec__29288 = p__29273;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29288,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29288,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29288,(2),null);
var vec__29289 = p__29274;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29289,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29289,(1),null);
var shape_29297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,start);
var map__29290_29298 = shape_29297;
var map__29290_29299__$1 = ((cljs.core.seq_QMARK_(map__29290_29298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29290_29298):map__29290_29298);
var vec__29291_29300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290_29299__$1,cljs.core.constant$keyword$106);
var x_29301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291_29300,(0),null);
var y_29302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291_29300,(1),null);
var __29303__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291_29300,(2),null);
var n_29304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290_29299__$1,cljs.core.constant$keyword$105);
var xs_29305 = ((x_29301 * sf) + x_offset);
var ys_29306 = ((y_29302 * sf) + y_offset);
var vtxs_29307 = cljstemplate.shape.vertices(shape_29297,xs_29305,ys_29306,sf);
var radius_29308 = ((function (){var G__29292 = n_29304;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__29292) : cljstemplate.shape.radii.call(null,G__29292));
})() * sf);
var many_channels_29309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) - cljs.core.count(channels)),channels));
var channel_count_29310 = cljs.core.count(many_channels_29309);
context.save();

cljstemplate.shape.trace_path(context,vtxs_29307);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29305,ys_29306,radius_29308], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__29293_29311 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_29310));
var chunk__29294_29312 = null;
var count__29295_29313 = (0);
var i__29296_29314 = (0);
while(true){
if((i__29296_29314 < count__29295_29313)){
var i_29315 = chunk__29294_29312.cljs$core$IIndexed$_nth$arity$2(null,i__29296_29314);
var f_29316 = cljs.core.mod(((timestamp / (100)) + (i_29315 * (radius_29308 / channel_count_29310))),radius_29308);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29305,ys_29306,f_29316], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_29309,i_29315),((1) - (f_29316 / radius_29308))));

var G__29317 = seq__29293_29311;
var G__29318 = chunk__29294_29312;
var G__29319 = count__29295_29313;
var G__29320 = (i__29296_29314 + (1));
seq__29293_29311 = G__29317;
chunk__29294_29312 = G__29318;
count__29295_29313 = G__29319;
i__29296_29314 = G__29320;
continue;
} else {
var temp__4126__auto___29321 = cljs.core.seq(seq__29293_29311);
if(temp__4126__auto___29321){
var seq__29293_29322__$1 = temp__4126__auto___29321;
if(cljs.core.chunked_seq_QMARK_(seq__29293_29322__$1)){
var c__4598__auto___29323 = cljs.core.chunk_first(seq__29293_29322__$1);
var G__29324 = cljs.core.chunk_rest(seq__29293_29322__$1);
var G__29325 = c__4598__auto___29323;
var G__29326 = cljs.core.count(c__4598__auto___29323);
var G__29327 = (0);
seq__29293_29311 = G__29324;
chunk__29294_29312 = G__29325;
count__29295_29313 = G__29326;
i__29296_29314 = G__29327;
continue;
} else {
var i_29328 = cljs.core.first(seq__29293_29322__$1);
var f_29329 = cljs.core.mod(((timestamp / (100)) + (i_29328 * (radius_29308 / channel_count_29310))),radius_29308);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29305,ys_29306,f_29329], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_29309,i_29328),((1) - (f_29329 / radius_29308))));

var G__29330 = cljs.core.next(seq__29293_29322__$1);
var G__29331 = null;
var G__29332 = (0);
var G__29333 = (0);
seq__29293_29311 = G__29330;
chunk__29294_29312 = G__29331;
count__29295_29313 = G__29332;
i__29296_29314 = G__29333;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_29307);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__29334,context,timestamp,p__29335,sf,p__29336,done){
var map__29370 = p__29334;
var map__29370__$1 = ((cljs.core.seq_QMARK_(map__29370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29370):map__29370);
var level = map__29370__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29370__$1,cljs.core.constant$keyword$109);
var vec__29371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29370__$1,cljs.core.constant$keyword$117);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29370__$1,cljs.core.constant$keyword$114);
var vec__29372 = p__29335;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(2),null);
var vec__29373 = p__29336;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29373,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29373,(1),null);
var shape_29403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,end);
var map__29374_29404 = shape_29403;
var map__29374_29405__$1 = ((cljs.core.seq_QMARK_(map__29374_29404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29374_29404):map__29374_29404);
var vec__29375_29406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29405__$1,cljs.core.constant$keyword$106);
var x_29407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29406,(0),null);
var y_29408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29406,(1),null);
var __29409__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29406,(2),null);
var n_29410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29405__$1,cljs.core.constant$keyword$105);
var wiring_29411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374_29405__$1,cljs.core.constant$keyword$107);
var xs_29412 = ((x_29407 * sf) + x_offset);
var ys_29413 = ((y_29408 * sf) + y_offset);
var vtxs_29414 = cljstemplate.shape.vertices(shape_29403,xs_29412,ys_29413,sf);
var radius_29415 = ((function (){var G__29376 = n_29410;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__29376) : cljstemplate.shape.radii.call(null,G__29376));
})() * sf);
var radius_3rd_29416 = (radius_29415 / (3));
var radius_5th_29417 = (radius_29415 / (5));
var radius_15th_29418 = (radius_29415 / (15));
var radius_20th_29419 = (radius_29415 / (30));
var channel_count_29420 = cljs.core.count(channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path(context,vtxs_29414);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29412,ys_29413,radius_29415], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_(cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_29403,map__29374_29404,map__29374_29405__$1,vec__29375_29406,x_29407,y_29408,__29409__$3,n_29410,wiring_29411,xs_29412,ys_29413,vtxs_29414,radius_29415,radius_3rd_29416,radius_5th_29417,radius_15th_29418,radius_20th_29419,channel_count_29420,map__29370,map__29370__$1,level,shapes,vec__29371,end,_,___$1,channels,vec__29372,___$2,bdr,fg,vec__29373,x_offset,y_offset){
return (function iter__29377(s__29378){
return (new cljs.core.LazySeq(null,((function (shape_29403,map__29374_29404,map__29374_29405__$1,vec__29375_29406,x_29407,y_29408,__29409__$3,n_29410,wiring_29411,xs_29412,ys_29413,vtxs_29414,radius_29415,radius_3rd_29416,radius_5th_29417,radius_15th_29418,radius_20th_29419,channel_count_29420,map__29370,map__29370__$1,level,shapes,vec__29371,end,_,___$1,channels,vec__29372,___$2,bdr,fg,vec__29373,x_offset,y_offset){
return (function (){
var s__29378__$1 = s__29378;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__29378__$1);
if(temp__4126__auto__){
var s__29378__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29378__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__29378__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__29380 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__29379 = (0);
while(true){
if((i__29379 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__29379);
cljs.core.chunk_append(b__29380,cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(channel_wiring)));

var G__29421 = (i__29379 + (1));
i__29379 = G__29421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29380),iter__29377(cljs.core.chunk_rest(s__29378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29380),null);
}
} else {
var channel_wiring = cljs.core.first(s__29378__$2);
return cljs.core.cons(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(channel_wiring)),iter__29377(cljs.core.rest(s__29378__$2)));
}
} else {
return null;
}
break;
}
});})(shape_29403,map__29374_29404,map__29374_29405__$1,vec__29375_29406,x_29407,y_29408,__29409__$3,n_29410,wiring_29411,xs_29412,ys_29413,vtxs_29414,radius_29415,radius_3rd_29416,radius_5th_29417,radius_15th_29418,radius_20th_29419,channel_count_29420,map__29370,map__29370__$1,level,shapes,vec__29371,end,_,___$1,channels,vec__29372,___$2,bdr,fg,vec__29373,x_offset,y_offset))
,null,null));
});})(shape_29403,map__29374_29404,map__29374_29405__$1,vec__29375_29406,x_29407,y_29408,__29409__$3,n_29410,wiring_29411,xs_29412,ys_29413,vtxs_29414,radius_29415,radius_3rd_29416,radius_5th_29417,radius_15th_29418,radius_20th_29419,channel_count_29420,map__29370,map__29370__$1,level,shapes,vec__29371,end,_,___$1,channels,vec__29372,___$2,bdr,fg,vec__29373,x_offset,y_offset))
;
return iter__4567__auto__(wiring_29411);
})())){
var seq__29383_29422 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
var chunk__29384_29423 = null;
var count__29385_29424 = (0);
var i__29386_29425 = (0);
while(true){
if((i__29386_29425 < count__29385_29424)){
var i_29426 = chunk__29384_29423.cljs$core$IIndexed$_nth$arity$2(null,i__29386_29425);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29412,ys_29413,(radius_29415 / ((5) - i_29426))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_29426)));

var G__29427 = seq__29383_29422;
var G__29428 = chunk__29384_29423;
var G__29429 = count__29385_29424;
var G__29430 = (i__29386_29425 + (1));
seq__29383_29422 = G__29427;
chunk__29384_29423 = G__29428;
count__29385_29424 = G__29429;
i__29386_29425 = G__29430;
continue;
} else {
var temp__4126__auto___29431 = cljs.core.seq(seq__29383_29422);
if(temp__4126__auto___29431){
var seq__29383_29432__$1 = temp__4126__auto___29431;
if(cljs.core.chunked_seq_QMARK_(seq__29383_29432__$1)){
var c__4598__auto___29433 = cljs.core.chunk_first(seq__29383_29432__$1);
var G__29434 = cljs.core.chunk_rest(seq__29383_29432__$1);
var G__29435 = c__4598__auto___29433;
var G__29436 = cljs.core.count(c__4598__auto___29433);
var G__29437 = (0);
seq__29383_29422 = G__29434;
chunk__29384_29423 = G__29435;
count__29385_29424 = G__29436;
i__29386_29425 = G__29437;
continue;
} else {
var i_29438 = cljs.core.first(seq__29383_29432__$1);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_29412,ys_29413,(radius_29415 / ((5) - i_29438))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_29438)));

var G__29439 = cljs.core.next(seq__29383_29432__$1);
var G__29440 = null;
var G__29441 = (0);
var G__29442 = (0);
seq__29383_29422 = G__29439;
chunk__29384_29423 = G__29440;
count__29385_29424 = G__29441;
i__29386_29425 = G__29442;
continue;
}
} else {
}
}
break;
}

var G__29387_29443 = done;
var G__29388_29444 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29387_29443,G__29388_29444) : cljs.core.reset_BANG_.call(null,G__29387_29443,G__29388_29444));

var G__29389_29445 = cljs.core.constant$keyword$117;
var G__29390_29446 = context;
var G__29391_29447 = xs_29412;
var G__29392_29448 = ys_29413;
var G__29393_29449 = radius_29415;
var G__29394_29450 = timestamp;
(cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6 ? cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6(G__29389_29445,G__29390_29446,G__29391_29447,G__29392_29448,G__29393_29449,G__29394_29450) : cljstemplate.shape.render_attention.call(null,G__29389_29445,G__29390_29446,G__29391_29447,G__29392_29448,G__29393_29449,G__29394_29450));
} else {
}

var seq__29395_29451 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_29420));
var chunk__29396_29452 = null;
var count__29397_29453 = (0);
var i__29398_29454 = (0);
while(true){
if((i__29398_29454 < count__29397_29453)){
var i_29455 = chunk__29396_29452.cljs$core$IIndexed$_nth$arity$2(null,i__29398_29454);
var angle_29456 = ((i_29455 * (cljstemplate.constance.TAU / channel_count_29420)) - (timestamp / (3000)));
var xi_29457 = (xs_29412 + (radius_3rd_29416 * (function (){var G__29399 = angle_29456;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__29399) : Math.sin.call(null,G__29399));
})()));
var yi_29458 = (ys_29413 + (radius_3rd_29416 * (function (){var G__29400 = angle_29456;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__29400) : Math.cos.call(null,G__29400));
})()));
var on_29459 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_29411,i_29455)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_29457,yi_29458,radius_5th_29417], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_29455),(cljs.core.truth_(on_29459)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_29457,yi_29458,radius_5th_29417], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_29455),(cljs.core.truth_(on_29459)?0.75:0.25)));

if(cljs.core.truth_(on_29459)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_29457 - radius_15th_29418),(yi_29458 - radius_15th_29418),radius_15th_29418], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_29457 - radius_15th_29418),(yi_29458 - radius_15th_29418),radius_20th_29419], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__29460 = seq__29395_29451;
var G__29461 = chunk__29396_29452;
var G__29462 = count__29397_29453;
var G__29463 = (i__29398_29454 + (1));
seq__29395_29451 = G__29460;
chunk__29396_29452 = G__29461;
count__29397_29453 = G__29462;
i__29398_29454 = G__29463;
continue;
} else {
var temp__4126__auto___29464 = cljs.core.seq(seq__29395_29451);
if(temp__4126__auto___29464){
var seq__29395_29465__$1 = temp__4126__auto___29464;
if(cljs.core.chunked_seq_QMARK_(seq__29395_29465__$1)){
var c__4598__auto___29466 = cljs.core.chunk_first(seq__29395_29465__$1);
var G__29467 = cljs.core.chunk_rest(seq__29395_29465__$1);
var G__29468 = c__4598__auto___29466;
var G__29469 = cljs.core.count(c__4598__auto___29466);
var G__29470 = (0);
seq__29395_29451 = G__29467;
chunk__29396_29452 = G__29468;
count__29397_29453 = G__29469;
i__29398_29454 = G__29470;
continue;
} else {
var i_29471 = cljs.core.first(seq__29395_29465__$1);
var angle_29472 = ((i_29471 * (cljstemplate.constance.TAU / channel_count_29420)) - (timestamp / (3000)));
var xi_29473 = (xs_29412 + (radius_3rd_29416 * (function (){var G__29401 = angle_29472;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__29401) : Math.sin.call(null,G__29401));
})()));
var yi_29474 = (ys_29413 + (radius_3rd_29416 * (function (){var G__29402 = angle_29472;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__29402) : Math.cos.call(null,G__29402));
})()));
var on_29475 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_29411,i_29471)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_29473,yi_29474,radius_5th_29417], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_29471),(cljs.core.truth_(on_29475)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_29473,yi_29474,radius_5th_29417], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_29471),(cljs.core.truth_(on_29475)?0.75:0.25)));

if(cljs.core.truth_(on_29475)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_29473 - radius_15th_29418),(yi_29474 - radius_15th_29418),radius_15th_29418], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_29473 - radius_15th_29418),(yi_29474 - radius_15th_29418),radius_20th_29419], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__29476 = cljs.core.next(seq__29395_29465__$1);
var G__29477 = null;
var G__29478 = (0);
var G__29479 = (0);
seq__29395_29451 = G__29476;
chunk__29396_29452 = G__29477;
count__29397_29453 = G__29478;
i__29398_29454 = G__29479;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_29414);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.gradients = (function (){var G__29480 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29480) : cljs.core.atom.call(null,G__29480));
})();
cljstemplate.shape.mk_gradient = (function mk_gradient(key,context,x,y,radius){
var grd = context.createRadialGradient(x,y,(1),x,y,radius);
grd.addColorStop((0),"rgba(250, 250, 250, 1.0)");

grd.addColorStop((1),"rgba(250, 250, 250, 0.0)");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstemplate.shape.gradients,cljs.core.assoc,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null),grd], null));

return grd;
});
cljstemplate.shape.attention_gradient = (function attention_gradient(key,context,x,y,radius){
var temp__4124__auto__ = (function (){var G__29485 = cljstemplate.shape.gradients;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29485) : cljs.core.deref.call(null,G__29485));
})().call(null,key);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29486 = temp__4124__auto__;
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(0),null);
var cached_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null))){
return cached_value;
} else {
var G__29487_29489 = "CACHE: Args differ";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__29487_29489) : cljstemplate.shape.log.call(null,G__29487_29489));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
} else {
var G__29488_29490 = "CACHE: Cache empty";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__29488_29490) : cljstemplate.shape.log.call(null,G__29488_29490));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
});
cljstemplate.shape.render_attention = (function render_attention(key,context,x,y,radius,timestamp){
var gradient = cljstemplate.shape.attention_gradient(key,context,x,y,radius);
context.fillStyle = gradient;

var seq__29495 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
var chunk__29496 = null;
var count__29497 = (0);
var i__29498 = (0);
while(true){
if((i__29498 < count__29497)){
var i = chunk__29496.cljs$core$IIndexed$_nth$arity$2(null,i__29498);
var start_29499 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_29500 = (start_29499 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_29499,end_29500,true);

context.closePath();

context.fill();

var G__29501 = seq__29495;
var G__29502 = chunk__29496;
var G__29503 = count__29497;
var G__29504 = (i__29498 + (1));
seq__29495 = G__29501;
chunk__29496 = G__29502;
count__29497 = G__29503;
i__29498 = G__29504;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29495);
if(temp__4126__auto__){
var seq__29495__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29495__$1)){
var c__4598__auto__ = cljs.core.chunk_first(seq__29495__$1);
var G__29505 = cljs.core.chunk_rest(seq__29495__$1);
var G__29506 = c__4598__auto__;
var G__29507 = cljs.core.count(c__4598__auto__);
var G__29508 = (0);
seq__29495 = G__29505;
chunk__29496 = G__29506;
count__29497 = G__29507;
i__29498 = G__29508;
continue;
} else {
var i = cljs.core.first(seq__29495__$1);
var start_29509 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_29510 = (start_29509 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_29509,end_29510,true);

context.closePath();

context.fill();

var G__29511 = cljs.core.next(seq__29495__$1);
var G__29512 = null;
var G__29513 = (0);
var G__29514 = (0);
seq__29495 = G__29511;
chunk__29496 = G__29512;
count__29497 = G__29513;
i__29498 = G__29514;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__29517,level,mouse,timestamp,done){
var vec__29522 = p__29517;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29522,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29522,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29522,(2),null);
var sf = cljstemplate.shape.scale_factor(cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(level);
var colours = cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(level);
var vec__29523 = cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(0),null);
var vec__29524 = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29524,(0),null);
var ends = cljs.core.PersistentHashSet.fromArray([end,start], true);
context.lineJoin = "round";

context.lineCap = "round";

if(cljs.core.truth_((function (){var G__29525 = done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29525) : cljs.core.deref.call(null,G__29525));
})())){
cljstemplate.shape.render_attention(cljs.core.constant$keyword$125,context,width,height,((function (){var x__4135__auto__ = width;
var y__4136__auto__ = height;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})() / (2)),timestamp);
} else {
}

return cljstemplate.shape.render_end(cljstemplate.shape.render_start(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,((function (sf,offset,channels,colours,vec__29523,start,vec__29524,end,ends,vec__29522,context,width,height){
return (function (p1__29515_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_at_rest,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__29515_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__29523,start,vec__29524,end,ends,vec__29522,context,width,height))
),cljs.core.constant$keyword$109,((function (sf,offset,channels,colours,vec__29523,start,vec__29524,end,ends,vec__29522,context,width,height){
return (function (p1__29516_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_in_motion,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__29516_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__29523,start,vec__29524,end,ends,vec__29522,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});
