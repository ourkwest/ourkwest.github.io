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
var G__39936 = (idx + (1));
var G__39937 = cljs.core.rest(items);
idx = G__39936;
items = G__39937;
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
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__39938){
var vec__39940 = p__39938;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,cljs.core.constant$keyword$120], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,cljs.core.constant$keyword$107,(function (p1__39941_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_channel_connections,p1__39941_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,(function (p1__39942_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljstemplate.shape.clear_shape_connections,p1__39942_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,channel_id,wire_id,(2),direction_id], null),cljs.core.constant$keyword$121);
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__39943,index){
var vec__39946 = p__39943;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(0),null);
var onto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(1),null);
var vec__39947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(2),null);
var backward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39947,(0),null);
var forward = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39947,(1),null);
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
return (function (p1__39948_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__39948_SHARP_);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__39950){
while(true){
var vec__39953 = p__39950;
var vec__39954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39953,(0),null);
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954,(0),null);
var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954,(1),null);
var wire_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954,(2),null);
var direction_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39954,(3),null);
var seeds = cljs.core.nthnext(vec__39953,(1));
var new_shapes = cljs.core.update.cljs$core$IFn$_invoke$arity$3(shapes,shape_id,((function (shapes,p__39950,vec__39953,vec__39954,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__39949_SHARP_){
return cljstemplate.shape.switch_on(p1__39949_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__39950,vec__39953,vec__39954,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(seeds,cljstemplate.shape.more_seeds(new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq(new_seeds)){
var G__39955 = new_shapes;
var G__39956 = new_seeds;
shapes = G__39955;
p__39950 = G__39956;
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
return (function (p1__39957_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__39957_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (shapes,shape,wiring,channel_wiring){
return (function (p1__39958_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__39958_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.seed_lights,cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.cljs$core$IFn$_invoke$arity$0()], 0));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,(function (p1__39959_SHARP_){
return cljstemplate.shape.populate_shape_connections(p1__39959_SHARP_,cljstemplate.shape.seed_light(level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections(cljstemplate.shape.clear_connections(level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__39960,p__39961){
var vec__39964 = p__39960;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(2),null);
var vec__39965 = p__39961;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__39966){
var map__39969 = p__39966;
var map__39969__$1 = ((cljs.core.seq_QMARK_(map__39969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39969):map__39969);
var shape = map__39969__$1;
var map__39970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39969__$1,cljs.core.constant$keyword$110);
var map__39970__$1 = ((cljs.core.seq_QMARK_(map__39970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39970):map__39970);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,cljs.core.constant$keyword$116);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,cljs.core.constant$keyword$117);
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,cljs.core.constant$keyword$122);
var end_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39970__$1,cljs.core.constant$keyword$123);
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
return (function (p1__39971_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(r_fn,p1__39971_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__39972){
var vec__39974 = p__39972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974,(2),null);
var timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974,(3),null);
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
cljstemplate.shape.rgb_str = (function rgb_str(p__39975){
var vec__39977 = p__39975;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39977,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39977,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39977,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__39978){
var vec__39980 = p__39978;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__39982 = temp__4124__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39982,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39982,(1),null);
var clicked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39982,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__39984,xs,ys,sf){
var map__40003 = p__39984;
var map__40003__$1 = ((cljs.core.seq_QMARK_(map__40003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40003):map__40003);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,cljs.core.constant$keyword$105);
var vec__40004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,cljs.core.constant$keyword$106);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40004,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40004,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40004,(2),null);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,cljs.core.constant$keyword$110);
var alpha = (function (){var G__40005 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__40005) : cljstemplate.shape.alphas.call(null,G__40005));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__40006 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__40006) : cljstemplate.shape.radii.call(null,G__40006));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(((function (alpha,delta,radius,beta,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation){
return (function (p1__39983_SHARP_){
return (p1__39983_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation){
return (function iter__40007(s__40008){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation){
return (function (){
var s__40008__$1 = s__40008;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__40008__$1);
if(temp__4126__auto__){
var s__40008__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40008__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__40008__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__40010 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__40009 = (0);
while(true){
if((i__40009 < size__4566__auto__)){
var gamma = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__40009);
cljs.core.chunk_append(b__40010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__40017 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40017) : Math.sin.call(null,G__40017));
})())),(ys + (radius * (function (){var G__40018 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40018) : Math.cos.call(null,G__40018));
})()))], null));

var G__40021 = (i__40009 + (1));
i__40009 = G__40021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40010),iter__40007(cljs.core.chunk_rest(s__40008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40010),null);
}
} else {
var gamma = cljs.core.first(s__40008__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * (function (){var G__40019 = gamma;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40019) : Math.sin.call(null,G__40019));
})())),(ys + (radius * (function (){var G__40020 = gamma;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40020) : Math.cos.call(null,G__40020));
})()))], null),iter__40007(cljs.core.rest(s__40008__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__40003,map__40003__$1,n,vec__40004,x,y,r,rotation))
;
return iter__4567__auto__(gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__40022){
var vec__40031 = p__40022;
var vec__40032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40031,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40032,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40032,(1),null);
var rest = cljs.core.nthnext(vec__40031,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__40033_40039 = cljs.core.seq(rest);
var chunk__40034_40040 = null;
var count__40035_40041 = (0);
var i__40036_40042 = (0);
while(true){
if((i__40036_40042 < count__40035_40041)){
var vec__40037_40043 = chunk__40034_40040.cljs$core$IIndexed$_nth$arity$2(null,i__40036_40042);
var xr_40044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037_40043,(0),null);
var yr_40045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037_40043,(1),null);
context.lineTo(xr_40044,yr_40045);

var G__40046 = seq__40033_40039;
var G__40047 = chunk__40034_40040;
var G__40048 = count__40035_40041;
var G__40049 = (i__40036_40042 + (1));
seq__40033_40039 = G__40046;
chunk__40034_40040 = G__40047;
count__40035_40041 = G__40048;
i__40036_40042 = G__40049;
continue;
} else {
var temp__4126__auto___40050 = cljs.core.seq(seq__40033_40039);
if(temp__4126__auto___40050){
var seq__40033_40051__$1 = temp__4126__auto___40050;
if(cljs.core.chunked_seq_QMARK_(seq__40033_40051__$1)){
var c__4598__auto___40052 = cljs.core.chunk_first(seq__40033_40051__$1);
var G__40053 = cljs.core.chunk_rest(seq__40033_40051__$1);
var G__40054 = c__4598__auto___40052;
var G__40055 = cljs.core.count(c__4598__auto___40052);
var G__40056 = (0);
seq__40033_40039 = G__40053;
chunk__40034_40040 = G__40054;
count__40035_40041 = G__40055;
i__40036_40042 = G__40056;
continue;
} else {
var vec__40038_40057 = cljs.core.first(seq__40033_40051__$1);
var xr_40058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038_40057,(0),null);
var yr_40059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40038_40057,(1),null);
context.lineTo(xr_40058,yr_40059);

var G__40060 = cljs.core.next(seq__40033_40051__$1);
var G__40061 = null;
var G__40062 = (0);
var G__40063 = (0);
seq__40033_40039 = G__40060;
chunk__40034_40040 = G__40061;
count__40035_40041 = G__40062;
i__40036_40042 = G__40063;
continue;
}
} else {
}
}
break;
}

return context.lineTo(x1,y1);
});
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__40066,p__40067,channels,p__40068,p__40069,id,timestamp){
var vec__40207 = p__40066;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40207,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40207,(1),null);
var vec__40208 = p__40067;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40208,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40208,(1),null);
var mouse = vec__40208;
var vec__40209 = p__40068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209,(2),null);
var map__40210 = p__40069;
var map__40210__$1 = ((cljs.core.seq_QMARK_(map__40210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40210):map__40210);
var shape = map__40210__$1;
var vec__40211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,cljs.core.constant$keyword$106);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40211,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40211,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40211,(2),null);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,cljs.core.constant$keyword$105);
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,cljs.core.constant$keyword$110);
var wiring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,cljs.core.constant$keyword$107);
context.lineWidth = (1);

context.setLineDash([]);

var alpha = (function (){var G__40212 = n;
return (cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.alphas.cljs$core$IFn$_invoke$arity$1(G__40212) : cljstemplate.shape.alphas.call(null,G__40212));
})();
var delta = (alpha / (2));
var radius = ((function (){var G__40213 = n;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__40213) : cljstemplate.shape.radii.call(null,G__40213));
})() * sf);
var inner_radius = ((function (){var G__40214 = n;
return (cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.inner_radii.cljs$core$IFn$_invoke$arity$1(G__40214) : cljstemplate.shape.inner_radii.call(null,G__40214));
})() * sf);
var pad = ((function (){var G__40215 = n;
return (cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.pads.cljs$core$IFn$_invoke$arity$1(G__40215) : cljstemplate.shape.pads.call(null,G__40215));
})() * sf);
var beta = ((r + delta) + ((function (){var or__3811__auto__ = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(rotation);
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(rotation);
}
})() * alpha));
var gammas = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,vec__40207,x_offset,y_offset,vec__40208,mx,my,mouse,vec__40209,_,bdr,fg,map__40210,map__40210__$1,shape,vec__40211,x,y,r,n,rotation,wiring){
return (function (p1__40064_SHARP_){
return (p1__40064_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__40207,x_offset,y_offset,vec__40208,mx,my,mouse,vec__40209,_,bdr,fg,map__40210,map__40210__$1,shape,vec__40211,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate(((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__40207,x_offset,y_offset,vec__40208,mx,my,mouse,vec__40209,_,bdr,fg,map__40210,map__40210__$1,shape,vec__40211,x,y,r,n,rotation,wiring){
return (function (p1__40065_SHARP_){
return (p1__40065_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__40207,x_offset,y_offset,vec__40208,mx,my,mouse,vec__40209,_,bdr,fg,map__40210,map__40210__$1,shape,vec__40211,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * (function (){var G__40216 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40216) : Math.sin.call(null,G__40216));
})())),(ys + (radius * (function (){var G__40217 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40217) : Math.cos.call(null,G__40217));
})())));

var seq__40218_40344 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__40219_40345 = null;
var count__40220_40346 = (0);
var i__40221_40347 = (0);
while(true){
if((i__40221_40347 < count__40220_40346)){
var gamma_40348 = chunk__40219_40345.cljs$core$IIndexed$_nth$arity$2(null,i__40221_40347);
context.lineTo((xs + (radius * (function (){var G__40222 = gamma_40348;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40222) : Math.sin.call(null,G__40222));
})())),(ys + (radius * (function (){var G__40223 = gamma_40348;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40223) : Math.cos.call(null,G__40223));
})())));

var G__40349 = seq__40218_40344;
var G__40350 = chunk__40219_40345;
var G__40351 = count__40220_40346;
var G__40352 = (i__40221_40347 + (1));
seq__40218_40344 = G__40349;
chunk__40219_40345 = G__40350;
count__40220_40346 = G__40351;
i__40221_40347 = G__40352;
continue;
} else {
var temp__4126__auto___40353 = cljs.core.seq(seq__40218_40344);
if(temp__4126__auto___40353){
var seq__40218_40354__$1 = temp__4126__auto___40353;
if(cljs.core.chunked_seq_QMARK_(seq__40218_40354__$1)){
var c__4598__auto___40355 = cljs.core.chunk_first(seq__40218_40354__$1);
var G__40356 = cljs.core.chunk_rest(seq__40218_40354__$1);
var G__40357 = c__4598__auto___40355;
var G__40358 = cljs.core.count(c__4598__auto___40355);
var G__40359 = (0);
seq__40218_40344 = G__40356;
chunk__40219_40345 = G__40357;
count__40220_40346 = G__40358;
i__40221_40347 = G__40359;
continue;
} else {
var gamma_40360 = cljs.core.first(seq__40218_40354__$1);
context.lineTo((xs + (radius * (function (){var G__40224 = gamma_40360;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40224) : Math.sin.call(null,G__40224));
})())),(ys + (radius * (function (){var G__40225 = gamma_40360;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40225) : Math.cos.call(null,G__40225));
})())));

var G__40361 = cljs.core.next(seq__40218_40354__$1);
var G__40362 = null;
var G__40363 = (0);
var G__40364 = (0);
seq__40218_40344 = G__40361;
chunk__40219_40345 = G__40362;
count__40220_40346 = G__40363;
i__40221_40347 = G__40364;
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
var seq__40226_40365 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(channels)));
var chunk__40227_40366 = null;
var count__40228_40367 = (0);
var i__40229_40368 = (0);
while(true){
if((i__40229_40368 < count__40228_40367)){
var ch_40369 = chunk__40227_40366.cljs$core$IIndexed$_nth$arity$2(null,i__40229_40368);
var channel_40370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_40369);
var channel_wiring_40371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_40369);
var ch_pos_40372 = ((ch_40369 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__40230_40373 = cljs.core.seq(channel_wiring_40371);
var chunk__40231_40374 = null;
var count__40232_40375 = (0);
var i__40233_40376 = (0);
while(true){
if((i__40233_40376 < count__40232_40375)){
var vec__40234_40377 = chunk__40231_40374.cljs$core$IIndexed$_nth$arity$2(null,i__40233_40376);
var from_40378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40234_40377,(0),null);
var onto_40379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40234_40377,(1),null);
var vec__40235_40380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40234_40377,(2),null);
var fw_40381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40235_40380,(0),null);
var bw_40382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40235_40380,(1),null);
var switched_40383 = vec__40235_40380;
context.beginPath();

var vec__40236_40384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40378);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40244) : Math.sin.call(null,G__40244));
})(),(function (){var G__40245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40378);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40245) : Math.cos.call(null,G__40245));
})()], null);
var from_x_40385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40236_40384,(0),null);
var from_y_40386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40236_40384,(1),null);
var vec__40237_40387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40379);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40246) : Math.sin.call(null,G__40246));
})(),(function (){var G__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40379);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40247) : Math.cos.call(null,G__40247));
})()], null);
var onto_x_40388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40237_40387,(0),null);
var onto_y_40389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40237_40387,(1),null);
var vec__40238_40390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40378);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40248) : Math.cos.call(null,G__40248));
})(),(- (function (){var G__40249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40378);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40249) : Math.sin.call(null,G__40249));
})())], null);
var from_x_p_40391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40238_40390,(0),null);
var from_y_p_40392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40238_40390,(1),null);
var vec__40239_40393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40379);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40250) : Math.cos.call(null,G__40250));
})(),(- (function (){var G__40251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40379);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40251) : Math.sin.call(null,G__40251));
})())], null);
var onto_x_p_40394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40239_40393,(0),null);
var onto_y_p_40395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40239_40393,(1),null);
var vec__40240_40396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_40385)),(ys + (pad * from_y_40386))], null);
var xa_40397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240_40396,(0),null);
var ya_40398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240_40396,(1),null);
var vec__40241_40399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_40385)) + (ch_pos_40372 * from_x_p_40391)),((ys + ((0.5 * inner_radius) * from_y_40386)) + (ch_pos_40372 * from_y_p_40392))], null);
var xb_40400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241_40399,(0),null);
var yb_40401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241_40399,(1),null);
var vec__40242_40402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_40388)) + (ch_pos_40372 * onto_x_p_40394)),((ys + ((0.5 * inner_radius) * onto_y_40389)) + (ch_pos_40372 * onto_y_p_40395))], null);
var xc_40403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40242_40402,(0),null);
var yc_40404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40242_40402,(1),null);
var vec__40243_40405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_40388)),(ys + (pad * onto_y_40389))], null);
var xd_40406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40243_40405,(0),null);
var yd_40407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40243_40405,(1),null);
context.moveTo(xa_40397,ya_40398);

context.bezierCurveTo(xb_40400,yb_40401,xc_40403,yc_40404,xd_40406,yd_40407);

var offset_40408 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_40409 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_40383))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_40370,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__40252_40410 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_40381,offset_40408], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_40382,(- offset_40408)], null)], null));
var chunk__40253_40411 = null;
var count__40254_40412 = (0);
var i__40255_40413 = (0);
while(true){
if((i__40255_40413 < count__40254_40412)){
var vec__40256_40414 = chunk__40253_40411.cljs$core$IIndexed$_nth$arity$2(null,i__40255_40413);
var direction_40415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40256_40414,(0),null);
var os_40416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40256_40414,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40415)){
context.setLineDash(lineDash_40409);

context.lineDashOffset = os_40416;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40417 = seq__40252_40410;
var G__40418 = chunk__40253_40411;
var G__40419 = count__40254_40412;
var G__40420 = (i__40255_40413 + (1));
seq__40252_40410 = G__40417;
chunk__40253_40411 = G__40418;
count__40254_40412 = G__40419;
i__40255_40413 = G__40420;
continue;
} else {
var temp__4126__auto___40421 = cljs.core.seq(seq__40252_40410);
if(temp__4126__auto___40421){
var seq__40252_40422__$1 = temp__4126__auto___40421;
if(cljs.core.chunked_seq_QMARK_(seq__40252_40422__$1)){
var c__4598__auto___40423 = cljs.core.chunk_first(seq__40252_40422__$1);
var G__40424 = cljs.core.chunk_rest(seq__40252_40422__$1);
var G__40425 = c__4598__auto___40423;
var G__40426 = cljs.core.count(c__4598__auto___40423);
var G__40427 = (0);
seq__40252_40410 = G__40424;
chunk__40253_40411 = G__40425;
count__40254_40412 = G__40426;
i__40255_40413 = G__40427;
continue;
} else {
var vec__40257_40428 = cljs.core.first(seq__40252_40422__$1);
var direction_40429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40428,(0),null);
var os_40430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40428,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40429)){
context.setLineDash(lineDash_40409);

context.lineDashOffset = os_40430;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40431 = cljs.core.next(seq__40252_40422__$1);
var G__40432 = null;
var G__40433 = (0);
var G__40434 = (0);
seq__40252_40410 = G__40431;
chunk__40253_40411 = G__40432;
count__40254_40412 = G__40433;
i__40255_40413 = G__40434;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__40435 = seq__40230_40373;
var G__40436 = chunk__40231_40374;
var G__40437 = count__40232_40375;
var G__40438 = (i__40233_40376 + (1));
seq__40230_40373 = G__40435;
chunk__40231_40374 = G__40436;
count__40232_40375 = G__40437;
i__40233_40376 = G__40438;
continue;
} else {
var temp__4126__auto___40439 = cljs.core.seq(seq__40230_40373);
if(temp__4126__auto___40439){
var seq__40230_40440__$1 = temp__4126__auto___40439;
if(cljs.core.chunked_seq_QMARK_(seq__40230_40440__$1)){
var c__4598__auto___40441 = cljs.core.chunk_first(seq__40230_40440__$1);
var G__40442 = cljs.core.chunk_rest(seq__40230_40440__$1);
var G__40443 = c__4598__auto___40441;
var G__40444 = cljs.core.count(c__4598__auto___40441);
var G__40445 = (0);
seq__40230_40373 = G__40442;
chunk__40231_40374 = G__40443;
count__40232_40375 = G__40444;
i__40233_40376 = G__40445;
continue;
} else {
var vec__40258_40446 = cljs.core.first(seq__40230_40440__$1);
var from_40447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40258_40446,(0),null);
var onto_40448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40258_40446,(1),null);
var vec__40259_40449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40258_40446,(2),null);
var fw_40450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259_40449,(0),null);
var bw_40451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259_40449,(1),null);
var switched_40452 = vec__40259_40449;
context.beginPath();

var vec__40260_40453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40447);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40268) : Math.sin.call(null,G__40268));
})(),(function (){var G__40269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40447);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40269) : Math.cos.call(null,G__40269));
})()], null);
var from_x_40454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260_40453,(0),null);
var from_y_40455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260_40453,(1),null);
var vec__40261_40456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40448);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40270) : Math.sin.call(null,G__40270));
})(),(function (){var G__40271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40448);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40271) : Math.cos.call(null,G__40271));
})()], null);
var onto_x_40457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40261_40456,(0),null);
var onto_y_40458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40261_40456,(1),null);
var vec__40262_40459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40447);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40272) : Math.cos.call(null,G__40272));
})(),(- (function (){var G__40273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40447);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40273) : Math.sin.call(null,G__40273));
})())], null);
var from_x_p_40460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262_40459,(0),null);
var from_y_p_40461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262_40459,(1),null);
var vec__40263_40462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40448);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40274) : Math.cos.call(null,G__40274));
})(),(- (function (){var G__40275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40448);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40275) : Math.sin.call(null,G__40275));
})())], null);
var onto_x_p_40463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263_40462,(0),null);
var onto_y_p_40464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263_40462,(1),null);
var vec__40264_40465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_40454)),(ys + (pad * from_y_40455))], null);
var xa_40466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264_40465,(0),null);
var ya_40467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40264_40465,(1),null);
var vec__40265_40468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_40454)) + (ch_pos_40372 * from_x_p_40460)),((ys + ((0.5 * inner_radius) * from_y_40455)) + (ch_pos_40372 * from_y_p_40461))], null);
var xb_40469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40265_40468,(0),null);
var yb_40470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40265_40468,(1),null);
var vec__40266_40471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_40457)) + (ch_pos_40372 * onto_x_p_40463)),((ys + ((0.5 * inner_radius) * onto_y_40458)) + (ch_pos_40372 * onto_y_p_40464))], null);
var xc_40472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266_40471,(0),null);
var yc_40473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266_40471,(1),null);
var vec__40267_40474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_40457)),(ys + (pad * onto_y_40458))], null);
var xd_40475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267_40474,(0),null);
var yd_40476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267_40474,(1),null);
context.moveTo(xa_40466,ya_40467);

context.bezierCurveTo(xb_40469,yb_40470,xc_40472,yc_40473,xd_40475,yd_40476);

var offset_40477 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_40478 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_40452))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_40370,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__40276_40479 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_40450,offset_40477], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_40451,(- offset_40477)], null)], null));
var chunk__40277_40480 = null;
var count__40278_40481 = (0);
var i__40279_40482 = (0);
while(true){
if((i__40279_40482 < count__40278_40481)){
var vec__40280_40483 = chunk__40277_40480.cljs$core$IIndexed$_nth$arity$2(null,i__40279_40482);
var direction_40484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40483,(0),null);
var os_40485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40483,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40484)){
context.setLineDash(lineDash_40478);

context.lineDashOffset = os_40485;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40486 = seq__40276_40479;
var G__40487 = chunk__40277_40480;
var G__40488 = count__40278_40481;
var G__40489 = (i__40279_40482 + (1));
seq__40276_40479 = G__40486;
chunk__40277_40480 = G__40487;
count__40278_40481 = G__40488;
i__40279_40482 = G__40489;
continue;
} else {
var temp__4126__auto___40490__$1 = cljs.core.seq(seq__40276_40479);
if(temp__4126__auto___40490__$1){
var seq__40276_40491__$1 = temp__4126__auto___40490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40276_40491__$1)){
var c__4598__auto___40492 = cljs.core.chunk_first(seq__40276_40491__$1);
var G__40493 = cljs.core.chunk_rest(seq__40276_40491__$1);
var G__40494 = c__4598__auto___40492;
var G__40495 = cljs.core.count(c__4598__auto___40492);
var G__40496 = (0);
seq__40276_40479 = G__40493;
chunk__40277_40480 = G__40494;
count__40278_40481 = G__40495;
i__40279_40482 = G__40496;
continue;
} else {
var vec__40281_40497 = cljs.core.first(seq__40276_40491__$1);
var direction_40498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40281_40497,(0),null);
var os_40499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40281_40497,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40498)){
context.setLineDash(lineDash_40478);

context.lineDashOffset = os_40499;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40370);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40500 = cljs.core.next(seq__40276_40491__$1);
var G__40501 = null;
var G__40502 = (0);
var G__40503 = (0);
seq__40276_40479 = G__40500;
chunk__40277_40480 = G__40501;
count__40278_40481 = G__40502;
i__40279_40482 = G__40503;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__40504 = cljs.core.next(seq__40230_40440__$1);
var G__40505 = null;
var G__40506 = (0);
var G__40507 = (0);
seq__40230_40373 = G__40504;
chunk__40231_40374 = G__40505;
count__40232_40375 = G__40506;
i__40233_40376 = G__40507;
continue;
}
} else {
}
}
break;
}

var G__40508 = seq__40226_40365;
var G__40509 = chunk__40227_40366;
var G__40510 = count__40228_40367;
var G__40511 = (i__40229_40368 + (1));
seq__40226_40365 = G__40508;
chunk__40227_40366 = G__40509;
count__40228_40367 = G__40510;
i__40229_40368 = G__40511;
continue;
} else {
var temp__4126__auto___40512 = cljs.core.seq(seq__40226_40365);
if(temp__4126__auto___40512){
var seq__40226_40513__$1 = temp__4126__auto___40512;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40513__$1)){
var c__4598__auto___40514 = cljs.core.chunk_first(seq__40226_40513__$1);
var G__40515 = cljs.core.chunk_rest(seq__40226_40513__$1);
var G__40516 = c__4598__auto___40514;
var G__40517 = cljs.core.count(c__4598__auto___40514);
var G__40518 = (0);
seq__40226_40365 = G__40515;
chunk__40227_40366 = G__40516;
count__40228_40367 = G__40517;
i__40229_40368 = G__40518;
continue;
} else {
var ch_40519 = cljs.core.first(seq__40226_40513__$1);
var channel_40520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,ch_40519);
var channel_wiring_40521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring,ch_40519);
var ch_pos_40522 = ((ch_40519 - ((cljs.core.count(channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__40282_40523 = cljs.core.seq(channel_wiring_40521);
var chunk__40283_40524 = null;
var count__40284_40525 = (0);
var i__40285_40526 = (0);
while(true){
if((i__40285_40526 < count__40284_40525)){
var vec__40286_40527 = chunk__40283_40524.cljs$core$IIndexed$_nth$arity$2(null,i__40285_40526);
var from_40528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286_40527,(0),null);
var onto_40529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286_40527,(1),null);
var vec__40287_40530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286_40527,(2),null);
var fw_40531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287_40530,(0),null);
var bw_40532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287_40530,(1),null);
var switched_40533 = vec__40287_40530;
context.beginPath();

var vec__40288_40534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40528);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40296) : Math.sin.call(null,G__40296));
})(),(function (){var G__40297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40528);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40297) : Math.cos.call(null,G__40297));
})()], null);
var from_x_40535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40534,(0),null);
var from_y_40536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40288_40534,(1),null);
var vec__40289_40537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40529);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40298) : Math.sin.call(null,G__40298));
})(),(function (){var G__40299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40529);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40299) : Math.cos.call(null,G__40299));
})()], null);
var onto_x_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_40537,(0),null);
var onto_y_40539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289_40537,(1),null);
var vec__40290_40540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40528);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40300) : Math.cos.call(null,G__40300));
})(),(- (function (){var G__40301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40528);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40301) : Math.sin.call(null,G__40301));
})())], null);
var from_x_p_40541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290_40540,(0),null);
var from_y_p_40542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290_40540,(1),null);
var vec__40291_40543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40529);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40302) : Math.cos.call(null,G__40302));
})(),(- (function (){var G__40303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40529);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40303) : Math.sin.call(null,G__40303));
})())], null);
var onto_x_p_40544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40543,(0),null);
var onto_y_p_40545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40543,(1),null);
var vec__40292_40546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_40535)),(ys + (pad * from_y_40536))], null);
var xa_40547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292_40546,(0),null);
var ya_40548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292_40546,(1),null);
var vec__40293_40549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_40535)) + (ch_pos_40522 * from_x_p_40541)),((ys + ((0.5 * inner_radius) * from_y_40536)) + (ch_pos_40522 * from_y_p_40542))], null);
var xb_40550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40293_40549,(0),null);
var yb_40551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40293_40549,(1),null);
var vec__40294_40552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_40538)) + (ch_pos_40522 * onto_x_p_40544)),((ys + ((0.5 * inner_radius) * onto_y_40539)) + (ch_pos_40522 * onto_y_p_40545))], null);
var xc_40553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294_40552,(0),null);
var yc_40554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294_40552,(1),null);
var vec__40295_40555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_40538)),(ys + (pad * onto_y_40539))], null);
var xd_40556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40295_40555,(0),null);
var yd_40557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40295_40555,(1),null);
context.moveTo(xa_40547,ya_40548);

context.bezierCurveTo(xb_40550,yb_40551,xc_40553,yc_40554,xd_40556,yd_40557);

var offset_40558 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_40559 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_40533))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_40520,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__40304_40560 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_40531,offset_40558], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_40532,(- offset_40558)], null)], null));
var chunk__40305_40561 = null;
var count__40306_40562 = (0);
var i__40307_40563 = (0);
while(true){
if((i__40307_40563 < count__40306_40562)){
var vec__40308_40564 = chunk__40305_40561.cljs$core$IIndexed$_nth$arity$2(null,i__40307_40563);
var direction_40565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40308_40564,(0),null);
var os_40566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40308_40564,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40565)){
context.setLineDash(lineDash_40559);

context.lineDashOffset = os_40566;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40567 = seq__40304_40560;
var G__40568 = chunk__40305_40561;
var G__40569 = count__40306_40562;
var G__40570 = (i__40307_40563 + (1));
seq__40304_40560 = G__40567;
chunk__40305_40561 = G__40568;
count__40306_40562 = G__40569;
i__40307_40563 = G__40570;
continue;
} else {
var temp__4126__auto___40571__$1 = cljs.core.seq(seq__40304_40560);
if(temp__4126__auto___40571__$1){
var seq__40304_40572__$1 = temp__4126__auto___40571__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40304_40572__$1)){
var c__4598__auto___40573 = cljs.core.chunk_first(seq__40304_40572__$1);
var G__40574 = cljs.core.chunk_rest(seq__40304_40572__$1);
var G__40575 = c__4598__auto___40573;
var G__40576 = cljs.core.count(c__4598__auto___40573);
var G__40577 = (0);
seq__40304_40560 = G__40574;
chunk__40305_40561 = G__40575;
count__40306_40562 = G__40576;
i__40307_40563 = G__40577;
continue;
} else {
var vec__40309_40578 = cljs.core.first(seq__40304_40572__$1);
var direction_40579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40309_40578,(0),null);
var os_40580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40309_40578,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40579)){
context.setLineDash(lineDash_40559);

context.lineDashOffset = os_40580;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40581 = cljs.core.next(seq__40304_40572__$1);
var G__40582 = null;
var G__40583 = (0);
var G__40584 = (0);
seq__40304_40560 = G__40581;
chunk__40305_40561 = G__40582;
count__40306_40562 = G__40583;
i__40307_40563 = G__40584;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__40585 = seq__40282_40523;
var G__40586 = chunk__40283_40524;
var G__40587 = count__40284_40525;
var G__40588 = (i__40285_40526 + (1));
seq__40282_40523 = G__40585;
chunk__40283_40524 = G__40586;
count__40284_40525 = G__40587;
i__40285_40526 = G__40588;
continue;
} else {
var temp__4126__auto___40589__$1 = cljs.core.seq(seq__40282_40523);
if(temp__4126__auto___40589__$1){
var seq__40282_40590__$1 = temp__4126__auto___40589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40282_40590__$1)){
var c__4598__auto___40591 = cljs.core.chunk_first(seq__40282_40590__$1);
var G__40592 = cljs.core.chunk_rest(seq__40282_40590__$1);
var G__40593 = c__4598__auto___40591;
var G__40594 = cljs.core.count(c__4598__auto___40591);
var G__40595 = (0);
seq__40282_40523 = G__40592;
chunk__40283_40524 = G__40593;
count__40284_40525 = G__40594;
i__40285_40526 = G__40595;
continue;
} else {
var vec__40310_40596 = cljs.core.first(seq__40282_40590__$1);
var from_40597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40310_40596,(0),null);
var onto_40598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40310_40596,(1),null);
var vec__40311_40599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40310_40596,(2),null);
var fw_40600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40311_40599,(0),null);
var bw_40601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40311_40599,(1),null);
var switched_40602 = vec__40311_40599;
context.beginPath();

var vec__40312_40603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40597);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40320) : Math.sin.call(null,G__40320));
})(),(function (){var G__40321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40597);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40321) : Math.cos.call(null,G__40321));
})()], null);
var from_x_40604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40312_40603,(0),null);
var from_y_40605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40312_40603,(1),null);
var vec__40313_40606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40598);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40322) : Math.sin.call(null,G__40322));
})(),(function (){var G__40323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40598);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40323) : Math.cos.call(null,G__40323));
})()], null);
var onto_x_40607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40313_40606,(0),null);
var onto_y_40608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40313_40606,(1),null);
var vec__40314_40609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40597);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40324) : Math.cos.call(null,G__40324));
})(),(- (function (){var G__40325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,from_40597);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40325) : Math.sin.call(null,G__40325));
})())], null);
var from_x_p_40610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314_40609,(0),null);
var from_y_p_40611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314_40609,(1),null);
var vec__40315_40612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40598);
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40326) : Math.cos.call(null,G__40326));
})(),(- (function (){var G__40327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epsilons,onto_40598);
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40327) : Math.sin.call(null,G__40327));
})())], null);
var onto_x_p_40613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315_40612,(0),null);
var onto_y_p_40614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315_40612,(1),null);
var vec__40316_40615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_40604)),(ys + (pad * from_y_40605))], null);
var xa_40616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316_40615,(0),null);
var ya_40617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316_40615,(1),null);
var vec__40317_40618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_40604)) + (ch_pos_40522 * from_x_p_40610)),((ys + ((0.5 * inner_radius) * from_y_40605)) + (ch_pos_40522 * from_y_p_40611))], null);
var xb_40619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317_40618,(0),null);
var yb_40620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317_40618,(1),null);
var vec__40318_40621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_40607)) + (ch_pos_40522 * onto_x_p_40613)),((ys + ((0.5 * inner_radius) * onto_y_40608)) + (ch_pos_40522 * onto_y_p_40614))], null);
var xc_40622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40318_40621,(0),null);
var yc_40623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40318_40621,(1),null);
var vec__40319_40624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_40607)),(ys + (pad * onto_y_40608))], null);
var xd_40625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40319_40624,(0),null);
var yd_40626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40319_40624,(1),null);
context.moveTo(xa_40616,ya_40617);

context.bezierCurveTo(xb_40619,yb_40620,xc_40622,yc_40623,xd_40625,yd_40626);

var offset_40627 = cljs.core.mod(((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_40628 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),switched_40602))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(channel_40520,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__40328_40629 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_40600,offset_40627], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_40601,(- offset_40627)], null)], null));
var chunk__40329_40630 = null;
var count__40330_40631 = (0);
var i__40331_40632 = (0);
while(true){
if((i__40331_40632 < count__40330_40631)){
var vec__40332_40633 = chunk__40329_40630.cljs$core$IIndexed$_nth$arity$2(null,i__40331_40632);
var direction_40634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40332_40633,(0),null);
var os_40635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40332_40633,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40634)){
context.setLineDash(lineDash_40628);

context.lineDashOffset = os_40635;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40636 = seq__40328_40629;
var G__40637 = chunk__40329_40630;
var G__40638 = count__40330_40631;
var G__40639 = (i__40331_40632 + (1));
seq__40328_40629 = G__40636;
chunk__40329_40630 = G__40637;
count__40330_40631 = G__40638;
i__40331_40632 = G__40639;
continue;
} else {
var temp__4126__auto___40640__$2 = cljs.core.seq(seq__40328_40629);
if(temp__4126__auto___40640__$2){
var seq__40328_40641__$1 = temp__4126__auto___40640__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40328_40641__$1)){
var c__4598__auto___40642 = cljs.core.chunk_first(seq__40328_40641__$1);
var G__40643 = cljs.core.chunk_rest(seq__40328_40641__$1);
var G__40644 = c__4598__auto___40642;
var G__40645 = cljs.core.count(c__4598__auto___40642);
var G__40646 = (0);
seq__40328_40629 = G__40643;
chunk__40329_40630 = G__40644;
count__40330_40631 = G__40645;
i__40331_40632 = G__40646;
continue;
} else {
var vec__40333_40647 = cljs.core.first(seq__40328_40641__$1);
var direction_40648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40333_40647,(0),null);
var os_40649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40333_40647,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,direction_40648)){
context.setLineDash(lineDash_40628);

context.lineDashOffset = os_40649;

context.strokeStyle = cljstemplate.shape.rgb_str(channel_40520);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__40650 = cljs.core.next(seq__40328_40641__$1);
var G__40651 = null;
var G__40652 = (0);
var G__40653 = (0);
seq__40328_40629 = G__40650;
chunk__40329_40630 = G__40651;
count__40330_40631 = G__40652;
i__40331_40632 = G__40653;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__40654 = cljs.core.next(seq__40282_40590__$1);
var G__40655 = null;
var G__40656 = (0);
var G__40657 = (0);
seq__40282_40523 = G__40654;
chunk__40283_40524 = G__40655;
count__40284_40525 = G__40656;
i__40285_40526 = G__40657;
continue;
}
} else {
}
}
break;
}

var G__40658 = cljs.core.next(seq__40226_40513__$1);
var G__40659 = null;
var G__40660 = (0);
var G__40661 = (0);
seq__40226_40365 = G__40658;
chunk__40227_40366 = G__40659;
count__40228_40367 = G__40660;
i__40229_40368 = G__40661;
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

context.moveTo((xs + (radius * (function (){var G__40334 = beta;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40334) : Math.sin.call(null,G__40334));
})())),(ys + (radius * (function (){var G__40335 = beta;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40335) : Math.cos.call(null,G__40335));
})())));

var seq__40336_40662 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),gammas)));
var chunk__40337_40663 = null;
var count__40338_40664 = (0);
var i__40339_40665 = (0);
while(true){
if((i__40339_40665 < count__40338_40664)){
var gamma_40666 = chunk__40337_40663.cljs$core$IIndexed$_nth$arity$2(null,i__40339_40665);
context.lineTo((xs + (radius * (function (){var G__40340 = gamma_40666;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40340) : Math.sin.call(null,G__40340));
})())),(ys + (radius * (function (){var G__40341 = gamma_40666;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40341) : Math.cos.call(null,G__40341));
})())));

var G__40667 = seq__40336_40662;
var G__40668 = chunk__40337_40663;
var G__40669 = count__40338_40664;
var G__40670 = (i__40339_40665 + (1));
seq__40336_40662 = G__40667;
chunk__40337_40663 = G__40668;
count__40338_40664 = G__40669;
i__40339_40665 = G__40670;
continue;
} else {
var temp__4126__auto___40671 = cljs.core.seq(seq__40336_40662);
if(temp__4126__auto___40671){
var seq__40336_40672__$1 = temp__4126__auto___40671;
if(cljs.core.chunked_seq_QMARK_(seq__40336_40672__$1)){
var c__4598__auto___40673 = cljs.core.chunk_first(seq__40336_40672__$1);
var G__40674 = cljs.core.chunk_rest(seq__40336_40672__$1);
var G__40675 = c__4598__auto___40673;
var G__40676 = cljs.core.count(c__4598__auto___40673);
var G__40677 = (0);
seq__40336_40662 = G__40674;
chunk__40337_40663 = G__40675;
count__40338_40664 = G__40676;
i__40339_40665 = G__40677;
continue;
} else {
var gamma_40678 = cljs.core.first(seq__40336_40672__$1);
context.lineTo((xs + (radius * (function (){var G__40342 = gamma_40678;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40342) : Math.sin.call(null,G__40342));
})())),(ys + (radius * (function (){var G__40343 = gamma_40678;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40343) : Math.cos.call(null,G__40343));
})())));

var G__40679 = cljs.core.next(seq__40336_40672__$1);
var G__40680 = null;
var G__40681 = (0);
var G__40682 = (0);
seq__40336_40662 = G__40679;
chunk__40337_40663 = G__40680;
count__40338_40664 = G__40681;
i__40339_40665 = G__40682;
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
return cljs.core.not((function (){var G__40684 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__40684) : ends.call(null,G__40684));
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
if(cljs.core.truth_((function (){var and__3799__auto__ = (function (){var G__40689 = shape;
return (cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.rotating_QMARK_.cljs$core$IFn$_invoke$arity$1(G__40689) : cljstemplate.shape.rotating_QMARK_.call(null,G__40689));
})();
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core.not((function (){var G__40690 = id;
return (ends.cljs$core$IFn$_invoke$arity$1 ? ends.cljs$core$IFn$_invoke$arity$1(G__40690) : ends.call(null,G__40690));
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
var vec__40692 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__40694 = coords;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40694,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40694,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40694,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str(colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__40695,context,timestamp,p__40696,sf,p__40697){
var map__40709 = p__40695;
var map__40709__$1 = ((cljs.core.seq_QMARK_(map__40709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40709):map__40709);
var level = map__40709__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,cljs.core.constant$keyword$109);
var vec__40710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,cljs.core.constant$keyword$116);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40710,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40710,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40710,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709__$1,cljs.core.constant$keyword$114);
var vec__40711 = p__40696;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40711,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40711,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40711,(2),null);
var vec__40712 = p__40697;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712,(1),null);
var shape_40720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,start);
var map__40713_40721 = shape_40720;
var map__40713_40722__$1 = ((cljs.core.seq_QMARK_(map__40713_40721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40713_40721):map__40713_40721);
var vec__40714_40723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713_40722__$1,cljs.core.constant$keyword$106);
var x_40724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40714_40723,(0),null);
var y_40725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40714_40723,(1),null);
var __40726__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40714_40723,(2),null);
var n_40727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713_40722__$1,cljs.core.constant$keyword$105);
var xs_40728 = ((x_40724 * sf) + x_offset);
var ys_40729 = ((y_40725 * sf) + y_offset);
var vtxs_40730 = cljstemplate.shape.vertices(shape_40720,xs_40728,ys_40729,sf);
var radius_40731 = ((function (){var G__40715 = n_40727;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__40715) : cljstemplate.shape.radii.call(null,G__40715));
})() * sf);
var many_channels_40732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) - cljs.core.count(channels)),channels));
var channel_count_40733 = cljs.core.count(many_channels_40732);
context.save();

cljstemplate.shape.trace_path(context,vtxs_40730);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40728,ys_40729,radius_40731], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__40716_40734 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_40733));
var chunk__40717_40735 = null;
var count__40718_40736 = (0);
var i__40719_40737 = (0);
while(true){
if((i__40719_40737 < count__40718_40736)){
var i_40738 = chunk__40717_40735.cljs$core$IIndexed$_nth$arity$2(null,i__40719_40737);
var f_40739 = cljs.core.mod(((timestamp / (100)) + (i_40738 * (radius_40731 / channel_count_40733))),radius_40731);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40728,ys_40729,f_40739], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_40732,i_40738),((1) - (f_40739 / radius_40731))));

var G__40740 = seq__40716_40734;
var G__40741 = chunk__40717_40735;
var G__40742 = count__40718_40736;
var G__40743 = (i__40719_40737 + (1));
seq__40716_40734 = G__40740;
chunk__40717_40735 = G__40741;
count__40718_40736 = G__40742;
i__40719_40737 = G__40743;
continue;
} else {
var temp__4126__auto___40744 = cljs.core.seq(seq__40716_40734);
if(temp__4126__auto___40744){
var seq__40716_40745__$1 = temp__4126__auto___40744;
if(cljs.core.chunked_seq_QMARK_(seq__40716_40745__$1)){
var c__4598__auto___40746 = cljs.core.chunk_first(seq__40716_40745__$1);
var G__40747 = cljs.core.chunk_rest(seq__40716_40745__$1);
var G__40748 = c__4598__auto___40746;
var G__40749 = cljs.core.count(c__4598__auto___40746);
var G__40750 = (0);
seq__40716_40734 = G__40747;
chunk__40717_40735 = G__40748;
count__40718_40736 = G__40749;
i__40719_40737 = G__40750;
continue;
} else {
var i_40751 = cljs.core.first(seq__40716_40745__$1);
var f_40752 = cljs.core.mod(((timestamp / (100)) + (i_40751 * (radius_40731 / channel_count_40733))),radius_40731);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40728,ys_40729,f_40752], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(many_channels_40732,i_40751),((1) - (f_40752 / radius_40731))));

var G__40753 = cljs.core.next(seq__40716_40745__$1);
var G__40754 = null;
var G__40755 = (0);
var G__40756 = (0);
seq__40716_40734 = G__40753;
chunk__40717_40735 = G__40754;
count__40718_40736 = G__40755;
i__40719_40737 = G__40756;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_40730);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__40757,context,timestamp,p__40758,sf,p__40759,done){
var map__40793 = p__40757;
var map__40793__$1 = ((cljs.core.seq_QMARK_(map__40793))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40793):map__40793);
var level = map__40793__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793__$1,cljs.core.constant$keyword$109);
var vec__40794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793__$1,cljs.core.constant$keyword$117);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40794,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40794,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40794,(2),null);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793__$1,cljs.core.constant$keyword$114);
var vec__40795 = p__40758;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40795,(0),null);
var bdr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40795,(1),null);
var fg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40795,(2),null);
var vec__40796 = p__40759;
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40796,(0),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40796,(1),null);
var shape_40826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,end);
var map__40797_40827 = shape_40826;
var map__40797_40828__$1 = ((cljs.core.seq_QMARK_(map__40797_40827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40797_40827):map__40797_40827);
var vec__40798_40829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40828__$1,cljs.core.constant$keyword$106);
var x_40830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40798_40829,(0),null);
var y_40831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40798_40829,(1),null);
var __40832__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40798_40829,(2),null);
var n_40833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40828__$1,cljs.core.constant$keyword$105);
var wiring_40834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40828__$1,cljs.core.constant$keyword$107);
var xs_40835 = ((x_40830 * sf) + x_offset);
var ys_40836 = ((y_40831 * sf) + y_offset);
var vtxs_40837 = cljstemplate.shape.vertices(shape_40826,xs_40835,ys_40836,sf);
var radius_40838 = ((function (){var G__40799 = n_40833;
return (cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.radii.cljs$core$IFn$_invoke$arity$1(G__40799) : cljstemplate.shape.radii.call(null,G__40799));
})() * sf);
var radius_3rd_40839 = (radius_40838 / (3));
var radius_5th_40840 = (radius_40838 / (5));
var radius_15th_40841 = (radius_40838 / (15));
var radius_20th_40842 = (radius_40838 / (30));
var channel_count_40843 = cljs.core.count(channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path(context,vtxs_40837);

context.clip();

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40835,ys_40836,radius_40838], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_(cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_40826,map__40797_40827,map__40797_40828__$1,vec__40798_40829,x_40830,y_40831,__40832__$3,n_40833,wiring_40834,xs_40835,ys_40836,vtxs_40837,radius_40838,radius_3rd_40839,radius_5th_40840,radius_15th_40841,radius_20th_40842,channel_count_40843,map__40793,map__40793__$1,level,shapes,vec__40794,end,_,___$1,channels,vec__40795,___$2,bdr,fg,vec__40796,x_offset,y_offset){
return (function iter__40800(s__40801){
return (new cljs.core.LazySeq(null,((function (shape_40826,map__40797_40827,map__40797_40828__$1,vec__40798_40829,x_40830,y_40831,__40832__$3,n_40833,wiring_40834,xs_40835,ys_40836,vtxs_40837,radius_40838,radius_3rd_40839,radius_5th_40840,radius_15th_40841,radius_20th_40842,channel_count_40843,map__40793,map__40793__$1,level,shapes,vec__40794,end,_,___$1,channels,vec__40795,___$2,bdr,fg,vec__40796,x_offset,y_offset){
return (function (){
var s__40801__$1 = s__40801;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__40801__$1);
if(temp__4126__auto__){
var s__40801__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40801__$2)){
var c__4565__auto__ = cljs.core.chunk_first(s__40801__$2);
var size__4566__auto__ = cljs.core.count(c__4565__auto__);
var b__40803 = cljs.core.chunk_buffer(size__4566__auto__);
if((function (){var i__40802 = (0);
while(true){
if((i__40802 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4565__auto__,i__40802);
cljs.core.chunk_append(b__40803,cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(channel_wiring)));

var G__40844 = (i__40802 + (1));
i__40802 = G__40844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40803),iter__40800(cljs.core.chunk_rest(s__40801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40803),null);
}
} else {
var channel_wiring = cljs.core.first(s__40801__$2);
return cljs.core.cons(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(channel_wiring)),iter__40800(cljs.core.rest(s__40801__$2)));
}
} else {
return null;
}
break;
}
});})(shape_40826,map__40797_40827,map__40797_40828__$1,vec__40798_40829,x_40830,y_40831,__40832__$3,n_40833,wiring_40834,xs_40835,ys_40836,vtxs_40837,radius_40838,radius_3rd_40839,radius_5th_40840,radius_15th_40841,radius_20th_40842,channel_count_40843,map__40793,map__40793__$1,level,shapes,vec__40794,end,_,___$1,channels,vec__40795,___$2,bdr,fg,vec__40796,x_offset,y_offset))
,null,null));
});})(shape_40826,map__40797_40827,map__40797_40828__$1,vec__40798_40829,x_40830,y_40831,__40832__$3,n_40833,wiring_40834,xs_40835,ys_40836,vtxs_40837,radius_40838,radius_3rd_40839,radius_5th_40840,radius_15th_40841,radius_20th_40842,channel_count_40843,map__40793,map__40793__$1,level,shapes,vec__40794,end,_,___$1,channels,vec__40795,___$2,bdr,fg,vec__40796,x_offset,y_offset))
;
return iter__4567__auto__(wiring_40834);
})())){
var seq__40806_40845 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
var chunk__40807_40846 = null;
var count__40808_40847 = (0);
var i__40809_40848 = (0);
while(true){
if((i__40809_40848 < count__40808_40847)){
var i_40849 = chunk__40807_40846.cljs$core$IIndexed$_nth$arity$2(null,i__40809_40848);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40835,ys_40836,(radius_40838 / ((5) - i_40849))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_40849)));

var G__40850 = seq__40806_40845;
var G__40851 = chunk__40807_40846;
var G__40852 = count__40808_40847;
var G__40853 = (i__40809_40848 + (1));
seq__40806_40845 = G__40850;
chunk__40807_40846 = G__40851;
count__40808_40847 = G__40852;
i__40809_40848 = G__40853;
continue;
} else {
var temp__4126__auto___40854 = cljs.core.seq(seq__40806_40845);
if(temp__4126__auto___40854){
var seq__40806_40855__$1 = temp__4126__auto___40854;
if(cljs.core.chunked_seq_QMARK_(seq__40806_40855__$1)){
var c__4598__auto___40856 = cljs.core.chunk_first(seq__40806_40855__$1);
var G__40857 = cljs.core.chunk_rest(seq__40806_40855__$1);
var G__40858 = c__4598__auto___40856;
var G__40859 = cljs.core.count(c__4598__auto___40856);
var G__40860 = (0);
seq__40806_40845 = G__40857;
chunk__40807_40846 = G__40858;
count__40808_40847 = G__40859;
i__40809_40848 = G__40860;
continue;
} else {
var i_40861 = cljs.core.first(seq__40806_40855__$1);
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_40835,ys_40836,(radius_40838 / ((5) - i_40861))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fg,((1) / i_40861)));

var G__40862 = cljs.core.next(seq__40806_40855__$1);
var G__40863 = null;
var G__40864 = (0);
var G__40865 = (0);
seq__40806_40845 = G__40862;
chunk__40807_40846 = G__40863;
count__40808_40847 = G__40864;
i__40809_40848 = G__40865;
continue;
}
} else {
}
}
break;
}

var G__40810_40866 = done;
var G__40811_40867 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40810_40866,G__40811_40867) : cljs.core.reset_BANG_.call(null,G__40810_40866,G__40811_40867));

var G__40812_40868 = cljs.core.constant$keyword$117;
var G__40813_40869 = context;
var G__40814_40870 = xs_40835;
var G__40815_40871 = ys_40836;
var G__40816_40872 = radius_40838;
var G__40817_40873 = timestamp;
(cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6 ? cljstemplate.shape.render_attention.cljs$core$IFn$_invoke$arity$6(G__40812_40868,G__40813_40869,G__40814_40870,G__40815_40871,G__40816_40872,G__40817_40873) : cljstemplate.shape.render_attention.call(null,G__40812_40868,G__40813_40869,G__40814_40870,G__40815_40871,G__40816_40872,G__40817_40873));
} else {
}

var seq__40818_40874 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(channel_count_40843));
var chunk__40819_40875 = null;
var count__40820_40876 = (0);
var i__40821_40877 = (0);
while(true){
if((i__40821_40877 < count__40820_40876)){
var i_40878 = chunk__40819_40875.cljs$core$IIndexed$_nth$arity$2(null,i__40821_40877);
var angle_40879 = ((i_40878 * (cljstemplate.constance.TAU / channel_count_40843)) - (timestamp / (3000)));
var xi_40880 = (xs_40835 + (radius_3rd_40839 * (function (){var G__40822 = angle_40879;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40822) : Math.sin.call(null,G__40822));
})()));
var yi_40881 = (ys_40836 + (radius_3rd_40839 * (function (){var G__40823 = angle_40879;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40823) : Math.cos.call(null,G__40823));
})()));
var on_40882 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_40834,i_40878)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_40880,yi_40881,radius_5th_40840], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_40878),(cljs.core.truth_(on_40882)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_40880,yi_40881,radius_5th_40840], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_40878),(cljs.core.truth_(on_40882)?0.75:0.25)));

if(cljs.core.truth_(on_40882)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_40880 - radius_15th_40841),(yi_40881 - radius_15th_40841),radius_15th_40841], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_40880 - radius_15th_40841),(yi_40881 - radius_15th_40841),radius_20th_40842], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__40883 = seq__40818_40874;
var G__40884 = chunk__40819_40875;
var G__40885 = count__40820_40876;
var G__40886 = (i__40821_40877 + (1));
seq__40818_40874 = G__40883;
chunk__40819_40875 = G__40884;
count__40820_40876 = G__40885;
i__40821_40877 = G__40886;
continue;
} else {
var temp__4126__auto___40887 = cljs.core.seq(seq__40818_40874);
if(temp__4126__auto___40887){
var seq__40818_40888__$1 = temp__4126__auto___40887;
if(cljs.core.chunked_seq_QMARK_(seq__40818_40888__$1)){
var c__4598__auto___40889 = cljs.core.chunk_first(seq__40818_40888__$1);
var G__40890 = cljs.core.chunk_rest(seq__40818_40888__$1);
var G__40891 = c__4598__auto___40889;
var G__40892 = cljs.core.count(c__4598__auto___40889);
var G__40893 = (0);
seq__40818_40874 = G__40890;
chunk__40819_40875 = G__40891;
count__40820_40876 = G__40892;
i__40821_40877 = G__40893;
continue;
} else {
var i_40894 = cljs.core.first(seq__40818_40888__$1);
var angle_40895 = ((i_40894 * (cljstemplate.constance.TAU / channel_count_40843)) - (timestamp / (3000)));
var xi_40896 = (xs_40835 + (radius_3rd_40839 * (function (){var G__40824 = angle_40895;
return (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(G__40824) : Math.sin.call(null,G__40824));
})()));
var yi_40897 = (ys_40836 + (radius_3rd_40839 * (function (){var G__40825 = angle_40895;
return (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(G__40825) : Math.cos.call(null,G__40825));
})()));
var on_40898 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,null], null), null),cljs.core.flatten(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wiring_40834,i_40894)));
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_40896,yi_40897,radius_5th_40840], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_40894),(cljs.core.truth_(on_40898)?(1):0.25)));

cljstemplate.shape.stroke_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_40896,yi_40897,radius_5th_40840], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(channels,i_40894),(cljs.core.truth_(on_40898)?0.75:0.25)));

if(cljs.core.truth_(on_40898)){
cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_40896 - radius_15th_40841),(yi_40897 - radius_15th_40841),radius_15th_40841], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_40896 - radius_15th_40841),(yi_40897 - radius_15th_40841),radius_20th_40842], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__40899 = cljs.core.next(seq__40818_40888__$1);
var G__40900 = null;
var G__40901 = (0);
var G__40902 = (0);
seq__40818_40874 = G__40899;
chunk__40819_40875 = G__40900;
count__40820_40876 = G__40901;
i__40821_40877 = G__40902;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path(context,vtxs_40837);

context.strokeStyle = cljstemplate.shape.rgb_str(bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.gradients = (function (){var G__40903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40903) : cljs.core.atom.call(null,G__40903));
})();
cljstemplate.shape.mk_gradient = (function mk_gradient(key,context,x,y,radius){
var grd = context.createRadialGradient(x,y,(1),x,y,radius);
grd.addColorStop((0),"rgba(250, 250, 250, 1.0)");

grd.addColorStop((1),"rgba(250, 250, 250, 0.0)");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstemplate.shape.gradients,cljs.core.assoc,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null),grd], null));

return grd;
});
cljstemplate.shape.attention_gradient = (function attention_gradient(key,context,x,y,radius){
var temp__4124__auto__ = (function (){var G__40908 = cljstemplate.shape.gradients;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40908) : cljs.core.deref.call(null,G__40908));
})().call(null,key);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__40909 = temp__4124__auto__;
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40909,(0),null);
var cached_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40909,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null))){
return cached_value;
} else {
var G__40910_40912 = "CACHE: Args differ";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__40910_40912) : cljstemplate.shape.log.call(null,G__40910_40912));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
} else {
var G__40911_40913 = "CACHE: Cache empty";
(cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1 ? cljstemplate.shape.log.cljs$core$IFn$_invoke$arity$1(G__40911_40913) : cljstemplate.shape.log.call(null,G__40911_40913));

return cljstemplate.shape.mk_gradient(key,context,x,y,radius);
}
});
cljstemplate.shape.render_attention = (function render_attention(key,context,x,y,radius,timestamp){
var gradient = cljstemplate.shape.attention_gradient(key,context,x,y,radius);
context.fillStyle = gradient;

var seq__40918 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
var chunk__40919 = null;
var count__40920 = (0);
var i__40921 = (0);
while(true){
if((i__40921 < count__40920)){
var i = chunk__40919.cljs$core$IIndexed$_nth$arity$2(null,i__40921);
var start_40922 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_40923 = (start_40922 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_40922,end_40923,true);

context.closePath();

context.fill();

var G__40924 = seq__40918;
var G__40925 = chunk__40919;
var G__40926 = count__40920;
var G__40927 = (i__40921 + (1));
seq__40918 = G__40924;
chunk__40919 = G__40925;
count__40920 = G__40926;
i__40921 = G__40927;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__40918);
if(temp__4126__auto__){
var seq__40918__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40918__$1)){
var c__4598__auto__ = cljs.core.chunk_first(seq__40918__$1);
var G__40928 = cljs.core.chunk_rest(seq__40918__$1);
var G__40929 = c__4598__auto__;
var G__40930 = cljs.core.count(c__4598__auto__);
var G__40931 = (0);
seq__40918 = G__40928;
chunk__40919 = G__40929;
count__40920 = G__40930;
i__40921 = G__40931;
continue;
} else {
var i = cljs.core.first(seq__40918__$1);
var start_40932 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_40933 = (start_40932 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_40932,end_40933,true);

context.closePath();

context.fill();

var G__40934 = cljs.core.next(seq__40918__$1);
var G__40935 = null;
var G__40936 = (0);
var G__40937 = (0);
seq__40918 = G__40934;
chunk__40919 = G__40935;
count__40920 = G__40936;
i__40921 = G__40937;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__40940,level,mouse,timestamp,done){
var vec__40945 = p__40940;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945,(2),null);
var sf = cljstemplate.shape.scale_factor(cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(level),cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(level);
var colours = cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(level);
var vec__40946 = cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40946,(0),null);
var vec__40947 = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40947,(0),null);
var ends = cljs.core.PersistentHashSet.fromArray([end,start], true);
context.lineJoin = "round";

context.lineCap = "round";

if(cljs.core.truth_((function (){var G__40948 = done;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40948) : cljs.core.deref.call(null,G__40948));
})())){
cljstemplate.shape.render_attention(cljs.core.constant$keyword$125,context,width,height,((function (){var x__4135__auto__ = width;
var y__4136__auto__ = height;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})() / (2)),timestamp);
} else {
}

return cljstemplate.shape.render_end(cljstemplate.shape.render_start(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(level,cljs.core.constant$keyword$109,((function (sf,offset,channels,colours,vec__40946,start,vec__40947,end,ends,vec__40945,context,width,height){
return (function (p1__40938_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_at_rest,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__40938_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__40946,start,vec__40947,end,ends,vec__40945,context,width,height))
),cljs.core.constant$keyword$109,((function (sf,offset,channels,colours,vec__40946,start,vec__40947,end,ends,vec__40945,context,width,height){
return (function (p1__40939_SHARP_){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljstemplate.shape.render_in_motion,context,sf,offset,cljs.core.array_seq([mouse,channels,colours,ends,timestamp], 0)),p1__40939_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});})(sf,offset,channels,colours,vec__40946,start,vec__40947,end,ends,vec__40945,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});
