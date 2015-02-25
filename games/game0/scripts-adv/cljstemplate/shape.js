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
var G__18381 = (idx + (1));
var G__18382 = cljs.core.rest.call(null,items);
idx = G__18381;
items = G__18382;
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
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__18383){
var vec__18385 = p__18383;
var in$ = cljs.core.nth.call(null,vec__18385,(0),null);
var out = cljs.core.nth.call(null,vec__18385,(1),null);
var _ = cljs.core.nth.call(null,vec__18385,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__18385,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),(function (p1__18386_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_channel_connections,p1__18386_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__18387_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_shape_connections,p1__18387_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,(2),direction_id], null),new cljs.core.Keyword(null,"on","on",173873944));
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__18388,index){
var vec__18391 = p__18388;
var from = cljs.core.nth.call(null,vec__18391,(0),null);
var onto = cljs.core.nth.call(null,vec__18391,(1),null);
var vec__18392 = cljs.core.nth.call(null,vec__18391,(2),null);
var backward = cljs.core.nth.call(null,vec__18392,(0),null);
var forward = cljs.core.nth.call(null,vec__18392,(1),null);
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
return (function (p1__18393_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__18393_SHARP_);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__18395){
while(true){
var vec__18398 = p__18395;
var vec__18399 = cljs.core.nth.call(null,vec__18398,(0),null);
var shape_id = cljs.core.nth.call(null,vec__18399,(0),null);
var channel_id = cljs.core.nth.call(null,vec__18399,(1),null);
var wire_id = cljs.core.nth.call(null,vec__18399,(2),null);
var direction_id = cljs.core.nth.call(null,vec__18399,(3),null);
var seeds = cljs.core.nthnext.call(null,vec__18398,(1));
var new_shapes = cljs.core.update.call(null,shapes,shape_id,((function (shapes,p__18395,vec__18398,vec__18399,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__18394_SHARP_){
return cljstemplate.shape.switch_on.call(null,p1__18394_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__18395,vec__18398,vec__18399,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.call(null,seeds,cljstemplate.shape.more_seeds.call(null,new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq.call(null,new_seeds)){
var G__18400 = new_shapes;
var G__18401 = new_seeds;
shapes = G__18400;
p__18395 = G__18401;
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
return (function (p1__18402_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__18402_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))),cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__18403_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__18403_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.call(null,cljstemplate.shape.seed_lights,cljs.core.repeat.call(null,level),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.call(null));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__18404_SHARP_){
return cljstemplate.shape.populate_shape_connections.call(null,p1__18404_SHARP_,cljstemplate.shape.seed_light.call(null,level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections.call(null,cljstemplate.shape.clear_connections.call(null,level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__18405,p__18406){
var vec__18409 = p__18405;
var a = cljs.core.nth.call(null,vec__18409,(0),null);
var b = cljs.core.nth.call(null,vec__18409,(1),null);
var c = cljs.core.nth.call(null,vec__18409,(2),null);
var vec__18410 = p__18406;
var d = cljs.core.nth.call(null,vec__18410,(0),null);
var f = cljs.core.nth.call(null,vec__18410,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__18411){
var map__18414 = p__18411;
var map__18414__$1 = ((cljs.core.seq_QMARK_.call(null,map__18414))?cljs.core.apply.call(null,cljs.core.hash_map,map__18414):map__18414);
var shape = map__18414__$1;
var map__18415 = cljs.core.get.call(null,map__18414__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__18415__$1 = ((cljs.core.seq_QMARK_.call(null,map__18415))?cljs.core.apply.call(null,cljs.core.hash_map,map__18415):map__18415);
var start = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start_time = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var end_time = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
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
return (function (p1__18416_SHARP_){
return cljs.core.map.call(null,r_fn,p1__18416_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__18417){
var vec__18419 = p__18417;
var _ = cljs.core.nth.call(null,vec__18419,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18419,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__18419,(2),null);
var timestamp = cljs.core.nth.call(null,vec__18419,(3),null);
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
cljstemplate.shape.rgb_str = (function rgb_str(p__18420){
var vec__18422 = p__18420;
var r = cljs.core.nth.call(null,vec__18422,(0),null);
var g = cljs.core.nth.call(null,vec__18422,(1),null);
var b = cljs.core.nth.call(null,vec__18422,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__18423){
var vec__18425 = p__18423;
var r = cljs.core.nth.call(null,vec__18425,(0),null);
var g = cljs.core.nth.call(null,vec__18425,(1),null);
var b = cljs.core.nth.call(null,vec__18425,(2),null);
var a = cljs.core.nth.call(null,vec__18425,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__18427 = temp__4124__auto__;
var x = cljs.core.nth.call(null,vec__18427,(0),null);
var y = cljs.core.nth.call(null,vec__18427,(1),null);
var clicked = cljs.core.nth.call(null,vec__18427,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__18429,xs,ys,sf){
var map__18436 = p__18429;
var map__18436__$1 = ((cljs.core.seq_QMARK_.call(null,map__18436))?cljs.core.apply.call(null,cljs.core.hash_map,map__18436):map__18436);
var n = cljs.core.get.call(null,map__18436__$1,new cljs.core.Keyword(null,"n","n",562130025));
var vec__18437 = cljs.core.get.call(null,map__18436__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__18437,(0),null);
var y = cljs.core.nth.call(null,vec__18437,(1),null);
var r = cljs.core.nth.call(null,vec__18437,(2),null);
var rotation = cljs.core.get.call(null,map__18436__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
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
var gammas = cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (alpha,delta,radius,beta,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation){
return (function (p1__18428_SHARP_){
return (p1__18428_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation){
return (function iter__18438(s__18439){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation){
return (function (){
var s__18439__$1 = s__18439;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18439__$1);
if(temp__4126__auto__){
var s__18439__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18439__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__18439__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__18441 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__18440 = (0);
while(true){
if((i__18440 < size__4566__auto__)){
var gamma = cljs.core._nth.call(null,c__4565__auto__,i__18440);
cljs.core.chunk_append.call(null,b__18441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null));

var G__18442 = (i__18440 + (1));
i__18440 = G__18442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18441),iter__18438.call(null,cljs.core.chunk_rest.call(null,s__18439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18441),null);
}
} else {
var gamma = cljs.core.first.call(null,s__18439__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null),iter__18438.call(null,cljs.core.rest.call(null,s__18439__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__18436,map__18436__$1,n,vec__18437,x,y,r,rotation))
;
return iter__4567__auto__.call(null,gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__18443){
var vec__18452 = p__18443;
var vec__18453 = cljs.core.nth.call(null,vec__18452,(0),null);
var x1 = cljs.core.nth.call(null,vec__18453,(0),null);
var y1 = cljs.core.nth.call(null,vec__18453,(1),null);
var rest = cljs.core.nthnext.call(null,vec__18452,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__18454_18460 = cljs.core.seq.call(null,rest);
var chunk__18455_18461 = null;
var count__18456_18462 = (0);
var i__18457_18463 = (0);
while(true){
if((i__18457_18463 < count__18456_18462)){
var vec__18458_18464 = cljs.core._nth.call(null,chunk__18455_18461,i__18457_18463);
var xr_18465 = cljs.core.nth.call(null,vec__18458_18464,(0),null);
var yr_18466 = cljs.core.nth.call(null,vec__18458_18464,(1),null);
context.lineTo(xr_18465,yr_18466);

var G__18467 = seq__18454_18460;
var G__18468 = chunk__18455_18461;
var G__18469 = count__18456_18462;
var G__18470 = (i__18457_18463 + (1));
seq__18454_18460 = G__18467;
chunk__18455_18461 = G__18468;
count__18456_18462 = G__18469;
i__18457_18463 = G__18470;
continue;
} else {
var temp__4126__auto___18471 = cljs.core.seq.call(null,seq__18454_18460);
if(temp__4126__auto___18471){
var seq__18454_18472__$1 = temp__4126__auto___18471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18454_18472__$1)){
var c__4598__auto___18473 = cljs.core.chunk_first.call(null,seq__18454_18472__$1);
var G__18474 = cljs.core.chunk_rest.call(null,seq__18454_18472__$1);
var G__18475 = c__4598__auto___18473;
var G__18476 = cljs.core.count.call(null,c__4598__auto___18473);
var G__18477 = (0);
seq__18454_18460 = G__18474;
chunk__18455_18461 = G__18475;
count__18456_18462 = G__18476;
i__18457_18463 = G__18477;
continue;
} else {
var vec__18459_18478 = cljs.core.first.call(null,seq__18454_18472__$1);
var xr_18479 = cljs.core.nth.call(null,vec__18459_18478,(0),null);
var yr_18480 = cljs.core.nth.call(null,vec__18459_18478,(1),null);
context.lineTo(xr_18479,yr_18480);

var G__18481 = cljs.core.next.call(null,seq__18454_18472__$1);
var G__18482 = null;
var G__18483 = (0);
var G__18484 = (0);
seq__18454_18460 = G__18481;
chunk__18455_18461 = G__18482;
count__18456_18462 = G__18483;
i__18457_18463 = G__18484;
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
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__18487,p__18488,channels,p__18489,p__18490,id,timestamp){
var vec__18580 = p__18487;
var x_offset = cljs.core.nth.call(null,vec__18580,(0),null);
var y_offset = cljs.core.nth.call(null,vec__18580,(1),null);
var vec__18581 = p__18488;
var mx = cljs.core.nth.call(null,vec__18581,(0),null);
var my = cljs.core.nth.call(null,vec__18581,(1),null);
var mouse = vec__18581;
var vec__18582 = p__18489;
var _ = cljs.core.nth.call(null,vec__18582,(0),null);
var bdr = cljs.core.nth.call(null,vec__18582,(1),null);
var fg = cljs.core.nth.call(null,vec__18582,(2),null);
var map__18583 = p__18490;
var map__18583__$1 = ((cljs.core.seq_QMARK_.call(null,map__18583))?cljs.core.apply.call(null,cljs.core.hash_map,map__18583):map__18583);
var shape = map__18583__$1;
var vec__18584 = cljs.core.get.call(null,map__18583__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__18584,(0),null);
var y = cljs.core.nth.call(null,vec__18584,(1),null);
var r = cljs.core.nth.call(null,vec__18584,(2),null);
var n = cljs.core.get.call(null,map__18583__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotation = cljs.core.get.call(null,map__18583__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var wiring = cljs.core.get.call(null,map__18583__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
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
var gammas = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,vec__18580,x_offset,y_offset,vec__18581,mx,my,mouse,vec__18582,_,bdr,fg,map__18583,map__18583__$1,shape,vec__18584,x,y,r,n,rotation,wiring){
return (function (p1__18485_SHARP_){
return (p1__18485_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__18580,x_offset,y_offset,vec__18581,mx,my,mouse,vec__18582,_,bdr,fg,map__18583,map__18583__$1,shape,vec__18584,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__18580,x_offset,y_offset,vec__18581,mx,my,mouse,vec__18582,_,bdr,fg,map__18583,map__18583__$1,shape,vec__18584,x,y,r,n,rotation,wiring){
return (function (p1__18486_SHARP_){
return (p1__18486_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__18580,x_offset,y_offset,vec__18581,mx,my,mouse,vec__18582,_,bdr,fg,map__18583,map__18583__$1,shape,vec__18584,x,y,r,n,rotation,wiring))
,(beta - delta));
var side_length = (cljstemplate.shapeconstance.shape_side_length * sf);
var channel_width = (side_length * 0.07);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.lineWidth = (1);

context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__18585_18669 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__18586_18670 = null;
var count__18587_18671 = (0);
var i__18588_18672 = (0);
while(true){
if((i__18588_18672 < count__18587_18671)){
var gamma_18673 = cljs.core._nth.call(null,chunk__18586_18670,i__18588_18672);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_18673))),(ys + (radius * Math.cos.call(null,gamma_18673))));

var G__18674 = seq__18585_18669;
var G__18675 = chunk__18586_18670;
var G__18676 = count__18587_18671;
var G__18677 = (i__18588_18672 + (1));
seq__18585_18669 = G__18674;
chunk__18586_18670 = G__18675;
count__18587_18671 = G__18676;
i__18588_18672 = G__18677;
continue;
} else {
var temp__4126__auto___18678 = cljs.core.seq.call(null,seq__18585_18669);
if(temp__4126__auto___18678){
var seq__18585_18679__$1 = temp__4126__auto___18678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18585_18679__$1)){
var c__4598__auto___18680 = cljs.core.chunk_first.call(null,seq__18585_18679__$1);
var G__18681 = cljs.core.chunk_rest.call(null,seq__18585_18679__$1);
var G__18682 = c__4598__auto___18680;
var G__18683 = cljs.core.count.call(null,c__4598__auto___18680);
var G__18684 = (0);
seq__18585_18669 = G__18681;
chunk__18586_18670 = G__18682;
count__18587_18671 = G__18683;
i__18588_18672 = G__18684;
continue;
} else {
var gamma_18685 = cljs.core.first.call(null,seq__18585_18679__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_18685))),(ys + (radius * Math.cos.call(null,gamma_18685))));

var G__18686 = cljs.core.next.call(null,seq__18585_18679__$1);
var G__18687 = null;
var G__18688 = (0);
var G__18689 = (0);
seq__18585_18669 = G__18686;
chunk__18586_18670 = G__18687;
count__18587_18671 = G__18688;
i__18588_18672 = G__18689;
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
var seq__18589_18690 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var chunk__18590_18691 = null;
var count__18591_18692 = (0);
var i__18592_18693 = (0);
while(true){
if((i__18592_18693 < count__18591_18692)){
var ch_18694 = cljs.core._nth.call(null,chunk__18590_18691,i__18592_18693);
var channel_18695 = cljs.core.nth.call(null,channels,ch_18694);
var channel_wiring_18696 = cljs.core.nth.call(null,wiring,ch_18694);
var ch_pos_18697 = (((ch_18694 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / n)) * 2.5);
var seq__18593_18698 = cljs.core.seq.call(null,channel_wiring_18696);
var chunk__18594_18699 = null;
var count__18595_18700 = (0);
var i__18596_18701 = (0);
while(true){
if((i__18596_18701 < count__18595_18700)){
var vec__18597_18702 = cljs.core._nth.call(null,chunk__18594_18699,i__18596_18701);
var from_18703 = cljs.core.nth.call(null,vec__18597_18702,(0),null);
var onto_18704 = cljs.core.nth.call(null,vec__18597_18702,(1),null);
var vec__18598_18705 = cljs.core.nth.call(null,vec__18597_18702,(2),null);
var fw_18706 = cljs.core.nth.call(null,vec__18598_18705,(0),null);
var bw_18707 = cljs.core.nth.call(null,vec__18598_18705,(1),null);
var switched_18708 = vec__18598_18705;
context.beginPath();

var vec__18599_18709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18703)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18703))], null);
var from_x_18710 = cljs.core.nth.call(null,vec__18599_18709,(0),null);
var from_y_18711 = cljs.core.nth.call(null,vec__18599_18709,(1),null);
var vec__18600_18712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18704)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18704))], null);
var onto_x_18713 = cljs.core.nth.call(null,vec__18600_18712,(0),null);
var onto_y_18714 = cljs.core.nth.call(null,vec__18600_18712,(1),null);
var vec__18601_18715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18703)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18703)))], null);
var from_x_p_18716 = cljs.core.nth.call(null,vec__18601_18715,(0),null);
var from_y_p_18717 = cljs.core.nth.call(null,vec__18601_18715,(1),null);
var vec__18602_18718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18704)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18704)))], null);
var onto_x_p_18719 = cljs.core.nth.call(null,vec__18602_18718,(0),null);
var onto_y_p_18720 = cljs.core.nth.call(null,vec__18602_18718,(1),null);
var vec__18603_18721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18710)),(ys + (pad * from_y_18711))], null);
var xa_18722 = cljs.core.nth.call(null,vec__18603_18721,(0),null);
var ya_18723 = cljs.core.nth.call(null,vec__18603_18721,(1),null);
var vec__18604_18724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18710)) + (ch_pos_18697 * from_x_p_18716)),((ys + ((0.5 * inner_radius) * from_y_18711)) + (ch_pos_18697 * from_y_p_18717))], null);
var xb_18725 = cljs.core.nth.call(null,vec__18604_18724,(0),null);
var yb_18726 = cljs.core.nth.call(null,vec__18604_18724,(1),null);
var vec__18605_18727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18713)) + (ch_pos_18697 * onto_x_p_18719)),((ys + ((0.5 * inner_radius) * onto_y_18714)) + (ch_pos_18697 * onto_y_p_18720))], null);
var xc_18728 = cljs.core.nth.call(null,vec__18605_18727,(0),null);
var yc_18729 = cljs.core.nth.call(null,vec__18605_18727,(1),null);
var vec__18606_18730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18713)),(ys + (pad * onto_y_18714))], null);
var xd_18731 = cljs.core.nth.call(null,vec__18606_18730,(0),null);
var yd_18732 = cljs.core.nth.call(null,vec__18606_18730,(1),null);
context.moveTo(xa_18722,ya_18723);

context.bezierCurveTo(xb_18725,yb_18726,xc_18728,yc_18729,xd_18731,yd_18732);

var length_est_18733 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18703 - onto_18704))], null),(2)));
var length_bit_18734 = (length_est_18733 / ((length_est_18733 / (sf * (10))) | (0)));
var bit_1_18735 = (channel_width / (3));
var bit_2_18736 = (length_bit_18734 * ((2) / (3)));
var bits_18737 = (bit_1_18735 + bit_2_18736);
var offset_18738 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18737),bits_18737);
var lineDash_18739 = [bit_1_18735,bit_2_18736];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18708))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18695);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18695);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__18607_18740 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18706,offset_18738], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18707,(- offset_18738)], null)], null));
var chunk__18608_18741 = null;
var count__18609_18742 = (0);
var i__18610_18743 = (0);
while(true){
if((i__18610_18743 < count__18609_18742)){
var vec__18611_18744 = cljs.core._nth.call(null,chunk__18608_18741,i__18610_18743);
var direction_18745 = cljs.core.nth.call(null,vec__18611_18744,(0),null);
var os_18746 = cljs.core.nth.call(null,vec__18611_18744,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18745)){
context.setLineDash(lineDash_18739);

context.lineDashOffset = os_18746;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18747 = seq__18607_18740;
var G__18748 = chunk__18608_18741;
var G__18749 = count__18609_18742;
var G__18750 = (i__18610_18743 + (1));
seq__18607_18740 = G__18747;
chunk__18608_18741 = G__18748;
count__18609_18742 = G__18749;
i__18610_18743 = G__18750;
continue;
} else {
var temp__4126__auto___18751 = cljs.core.seq.call(null,seq__18607_18740);
if(temp__4126__auto___18751){
var seq__18607_18752__$1 = temp__4126__auto___18751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18607_18752__$1)){
var c__4598__auto___18753 = cljs.core.chunk_first.call(null,seq__18607_18752__$1);
var G__18754 = cljs.core.chunk_rest.call(null,seq__18607_18752__$1);
var G__18755 = c__4598__auto___18753;
var G__18756 = cljs.core.count.call(null,c__4598__auto___18753);
var G__18757 = (0);
seq__18607_18740 = G__18754;
chunk__18608_18741 = G__18755;
count__18609_18742 = G__18756;
i__18610_18743 = G__18757;
continue;
} else {
var vec__18612_18758 = cljs.core.first.call(null,seq__18607_18752__$1);
var direction_18759 = cljs.core.nth.call(null,vec__18612_18758,(0),null);
var os_18760 = cljs.core.nth.call(null,vec__18612_18758,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18759)){
context.setLineDash(lineDash_18739);

context.lineDashOffset = os_18760;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18761 = cljs.core.next.call(null,seq__18607_18752__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__18607_18740 = G__18761;
chunk__18608_18741 = G__18762;
count__18609_18742 = G__18763;
i__18610_18743 = G__18764;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18765 = seq__18593_18698;
var G__18766 = chunk__18594_18699;
var G__18767 = count__18595_18700;
var G__18768 = (i__18596_18701 + (1));
seq__18593_18698 = G__18765;
chunk__18594_18699 = G__18766;
count__18595_18700 = G__18767;
i__18596_18701 = G__18768;
continue;
} else {
var temp__4126__auto___18769 = cljs.core.seq.call(null,seq__18593_18698);
if(temp__4126__auto___18769){
var seq__18593_18770__$1 = temp__4126__auto___18769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18593_18770__$1)){
var c__4598__auto___18771 = cljs.core.chunk_first.call(null,seq__18593_18770__$1);
var G__18772 = cljs.core.chunk_rest.call(null,seq__18593_18770__$1);
var G__18773 = c__4598__auto___18771;
var G__18774 = cljs.core.count.call(null,c__4598__auto___18771);
var G__18775 = (0);
seq__18593_18698 = G__18772;
chunk__18594_18699 = G__18773;
count__18595_18700 = G__18774;
i__18596_18701 = G__18775;
continue;
} else {
var vec__18613_18776 = cljs.core.first.call(null,seq__18593_18770__$1);
var from_18777 = cljs.core.nth.call(null,vec__18613_18776,(0),null);
var onto_18778 = cljs.core.nth.call(null,vec__18613_18776,(1),null);
var vec__18614_18779 = cljs.core.nth.call(null,vec__18613_18776,(2),null);
var fw_18780 = cljs.core.nth.call(null,vec__18614_18779,(0),null);
var bw_18781 = cljs.core.nth.call(null,vec__18614_18779,(1),null);
var switched_18782 = vec__18614_18779;
context.beginPath();

var vec__18615_18783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18777)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18777))], null);
var from_x_18784 = cljs.core.nth.call(null,vec__18615_18783,(0),null);
var from_y_18785 = cljs.core.nth.call(null,vec__18615_18783,(1),null);
var vec__18616_18786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18778)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18778))], null);
var onto_x_18787 = cljs.core.nth.call(null,vec__18616_18786,(0),null);
var onto_y_18788 = cljs.core.nth.call(null,vec__18616_18786,(1),null);
var vec__18617_18789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18777)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18777)))], null);
var from_x_p_18790 = cljs.core.nth.call(null,vec__18617_18789,(0),null);
var from_y_p_18791 = cljs.core.nth.call(null,vec__18617_18789,(1),null);
var vec__18618_18792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18778)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18778)))], null);
var onto_x_p_18793 = cljs.core.nth.call(null,vec__18618_18792,(0),null);
var onto_y_p_18794 = cljs.core.nth.call(null,vec__18618_18792,(1),null);
var vec__18619_18795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18784)),(ys + (pad * from_y_18785))], null);
var xa_18796 = cljs.core.nth.call(null,vec__18619_18795,(0),null);
var ya_18797 = cljs.core.nth.call(null,vec__18619_18795,(1),null);
var vec__18620_18798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18784)) + (ch_pos_18697 * from_x_p_18790)),((ys + ((0.5 * inner_radius) * from_y_18785)) + (ch_pos_18697 * from_y_p_18791))], null);
var xb_18799 = cljs.core.nth.call(null,vec__18620_18798,(0),null);
var yb_18800 = cljs.core.nth.call(null,vec__18620_18798,(1),null);
var vec__18621_18801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18787)) + (ch_pos_18697 * onto_x_p_18793)),((ys + ((0.5 * inner_radius) * onto_y_18788)) + (ch_pos_18697 * onto_y_p_18794))], null);
var xc_18802 = cljs.core.nth.call(null,vec__18621_18801,(0),null);
var yc_18803 = cljs.core.nth.call(null,vec__18621_18801,(1),null);
var vec__18622_18804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18787)),(ys + (pad * onto_y_18788))], null);
var xd_18805 = cljs.core.nth.call(null,vec__18622_18804,(0),null);
var yd_18806 = cljs.core.nth.call(null,vec__18622_18804,(1),null);
context.moveTo(xa_18796,ya_18797);

context.bezierCurveTo(xb_18799,yb_18800,xc_18802,yc_18803,xd_18805,yd_18806);

var length_est_18807 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18777 - onto_18778))], null),(2)));
var length_bit_18808 = (length_est_18807 / ((length_est_18807 / (sf * (10))) | (0)));
var bit_1_18809 = (channel_width / (3));
var bit_2_18810 = (length_bit_18808 * ((2) / (3)));
var bits_18811 = (bit_1_18809 + bit_2_18810);
var offset_18812 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18811),bits_18811);
var lineDash_18813 = [bit_1_18809,bit_2_18810];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18782))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18695);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18695);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__18623_18814 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18780,offset_18812], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18781,(- offset_18812)], null)], null));
var chunk__18624_18815 = null;
var count__18625_18816 = (0);
var i__18626_18817 = (0);
while(true){
if((i__18626_18817 < count__18625_18816)){
var vec__18627_18818 = cljs.core._nth.call(null,chunk__18624_18815,i__18626_18817);
var direction_18819 = cljs.core.nth.call(null,vec__18627_18818,(0),null);
var os_18820 = cljs.core.nth.call(null,vec__18627_18818,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18819)){
context.setLineDash(lineDash_18813);

context.lineDashOffset = os_18820;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18821 = seq__18623_18814;
var G__18822 = chunk__18624_18815;
var G__18823 = count__18625_18816;
var G__18824 = (i__18626_18817 + (1));
seq__18623_18814 = G__18821;
chunk__18624_18815 = G__18822;
count__18625_18816 = G__18823;
i__18626_18817 = G__18824;
continue;
} else {
var temp__4126__auto___18825__$1 = cljs.core.seq.call(null,seq__18623_18814);
if(temp__4126__auto___18825__$1){
var seq__18623_18826__$1 = temp__4126__auto___18825__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18623_18826__$1)){
var c__4598__auto___18827 = cljs.core.chunk_first.call(null,seq__18623_18826__$1);
var G__18828 = cljs.core.chunk_rest.call(null,seq__18623_18826__$1);
var G__18829 = c__4598__auto___18827;
var G__18830 = cljs.core.count.call(null,c__4598__auto___18827);
var G__18831 = (0);
seq__18623_18814 = G__18828;
chunk__18624_18815 = G__18829;
count__18625_18816 = G__18830;
i__18626_18817 = G__18831;
continue;
} else {
var vec__18628_18832 = cljs.core.first.call(null,seq__18623_18826__$1);
var direction_18833 = cljs.core.nth.call(null,vec__18628_18832,(0),null);
var os_18834 = cljs.core.nth.call(null,vec__18628_18832,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18833)){
context.setLineDash(lineDash_18813);

context.lineDashOffset = os_18834;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18835 = cljs.core.next.call(null,seq__18623_18826__$1);
var G__18836 = null;
var G__18837 = (0);
var G__18838 = (0);
seq__18623_18814 = G__18835;
chunk__18624_18815 = G__18836;
count__18625_18816 = G__18837;
i__18626_18817 = G__18838;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18839 = cljs.core.next.call(null,seq__18593_18770__$1);
var G__18840 = null;
var G__18841 = (0);
var G__18842 = (0);
seq__18593_18698 = G__18839;
chunk__18594_18699 = G__18840;
count__18595_18700 = G__18841;
i__18596_18701 = G__18842;
continue;
}
} else {
}
}
break;
}

var G__18843 = seq__18589_18690;
var G__18844 = chunk__18590_18691;
var G__18845 = count__18591_18692;
var G__18846 = (i__18592_18693 + (1));
seq__18589_18690 = G__18843;
chunk__18590_18691 = G__18844;
count__18591_18692 = G__18845;
i__18592_18693 = G__18846;
continue;
} else {
var temp__4126__auto___18847 = cljs.core.seq.call(null,seq__18589_18690);
if(temp__4126__auto___18847){
var seq__18589_18848__$1 = temp__4126__auto___18847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18589_18848__$1)){
var c__4598__auto___18849 = cljs.core.chunk_first.call(null,seq__18589_18848__$1);
var G__18850 = cljs.core.chunk_rest.call(null,seq__18589_18848__$1);
var G__18851 = c__4598__auto___18849;
var G__18852 = cljs.core.count.call(null,c__4598__auto___18849);
var G__18853 = (0);
seq__18589_18690 = G__18850;
chunk__18590_18691 = G__18851;
count__18591_18692 = G__18852;
i__18592_18693 = G__18853;
continue;
} else {
var ch_18854 = cljs.core.first.call(null,seq__18589_18848__$1);
var channel_18855 = cljs.core.nth.call(null,channels,ch_18854);
var channel_wiring_18856 = cljs.core.nth.call(null,wiring,ch_18854);
var ch_pos_18857 = (((ch_18854 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / n)) * 2.5);
var seq__18629_18858 = cljs.core.seq.call(null,channel_wiring_18856);
var chunk__18630_18859 = null;
var count__18631_18860 = (0);
var i__18632_18861 = (0);
while(true){
if((i__18632_18861 < count__18631_18860)){
var vec__18633_18862 = cljs.core._nth.call(null,chunk__18630_18859,i__18632_18861);
var from_18863 = cljs.core.nth.call(null,vec__18633_18862,(0),null);
var onto_18864 = cljs.core.nth.call(null,vec__18633_18862,(1),null);
var vec__18634_18865 = cljs.core.nth.call(null,vec__18633_18862,(2),null);
var fw_18866 = cljs.core.nth.call(null,vec__18634_18865,(0),null);
var bw_18867 = cljs.core.nth.call(null,vec__18634_18865,(1),null);
var switched_18868 = vec__18634_18865;
context.beginPath();

var vec__18635_18869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18863)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18863))], null);
var from_x_18870 = cljs.core.nth.call(null,vec__18635_18869,(0),null);
var from_y_18871 = cljs.core.nth.call(null,vec__18635_18869,(1),null);
var vec__18636_18872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18864)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18864))], null);
var onto_x_18873 = cljs.core.nth.call(null,vec__18636_18872,(0),null);
var onto_y_18874 = cljs.core.nth.call(null,vec__18636_18872,(1),null);
var vec__18637_18875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18863)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18863)))], null);
var from_x_p_18876 = cljs.core.nth.call(null,vec__18637_18875,(0),null);
var from_y_p_18877 = cljs.core.nth.call(null,vec__18637_18875,(1),null);
var vec__18638_18878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18864)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18864)))], null);
var onto_x_p_18879 = cljs.core.nth.call(null,vec__18638_18878,(0),null);
var onto_y_p_18880 = cljs.core.nth.call(null,vec__18638_18878,(1),null);
var vec__18639_18881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18870)),(ys + (pad * from_y_18871))], null);
var xa_18882 = cljs.core.nth.call(null,vec__18639_18881,(0),null);
var ya_18883 = cljs.core.nth.call(null,vec__18639_18881,(1),null);
var vec__18640_18884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18870)) + (ch_pos_18857 * from_x_p_18876)),((ys + ((0.5 * inner_radius) * from_y_18871)) + (ch_pos_18857 * from_y_p_18877))], null);
var xb_18885 = cljs.core.nth.call(null,vec__18640_18884,(0),null);
var yb_18886 = cljs.core.nth.call(null,vec__18640_18884,(1),null);
var vec__18641_18887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18873)) + (ch_pos_18857 * onto_x_p_18879)),((ys + ((0.5 * inner_radius) * onto_y_18874)) + (ch_pos_18857 * onto_y_p_18880))], null);
var xc_18888 = cljs.core.nth.call(null,vec__18641_18887,(0),null);
var yc_18889 = cljs.core.nth.call(null,vec__18641_18887,(1),null);
var vec__18642_18890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18873)),(ys + (pad * onto_y_18874))], null);
var xd_18891 = cljs.core.nth.call(null,vec__18642_18890,(0),null);
var yd_18892 = cljs.core.nth.call(null,vec__18642_18890,(1),null);
context.moveTo(xa_18882,ya_18883);

context.bezierCurveTo(xb_18885,yb_18886,xc_18888,yc_18889,xd_18891,yd_18892);

var length_est_18893 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18863 - onto_18864))], null),(2)));
var length_bit_18894 = (length_est_18893 / ((length_est_18893 / (sf * (10))) | (0)));
var bit_1_18895 = (channel_width / (3));
var bit_2_18896 = (length_bit_18894 * ((2) / (3)));
var bits_18897 = (bit_1_18895 + bit_2_18896);
var offset_18898 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18897),bits_18897);
var lineDash_18899 = [bit_1_18895,bit_2_18896];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18868))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18855);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18855);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__18643_18900 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18866,offset_18898], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18867,(- offset_18898)], null)], null));
var chunk__18644_18901 = null;
var count__18645_18902 = (0);
var i__18646_18903 = (0);
while(true){
if((i__18646_18903 < count__18645_18902)){
var vec__18647_18904 = cljs.core._nth.call(null,chunk__18644_18901,i__18646_18903);
var direction_18905 = cljs.core.nth.call(null,vec__18647_18904,(0),null);
var os_18906 = cljs.core.nth.call(null,vec__18647_18904,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18905)){
context.setLineDash(lineDash_18899);

context.lineDashOffset = os_18906;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18907 = seq__18643_18900;
var G__18908 = chunk__18644_18901;
var G__18909 = count__18645_18902;
var G__18910 = (i__18646_18903 + (1));
seq__18643_18900 = G__18907;
chunk__18644_18901 = G__18908;
count__18645_18902 = G__18909;
i__18646_18903 = G__18910;
continue;
} else {
var temp__4126__auto___18911__$1 = cljs.core.seq.call(null,seq__18643_18900);
if(temp__4126__auto___18911__$1){
var seq__18643_18912__$1 = temp__4126__auto___18911__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18643_18912__$1)){
var c__4598__auto___18913 = cljs.core.chunk_first.call(null,seq__18643_18912__$1);
var G__18914 = cljs.core.chunk_rest.call(null,seq__18643_18912__$1);
var G__18915 = c__4598__auto___18913;
var G__18916 = cljs.core.count.call(null,c__4598__auto___18913);
var G__18917 = (0);
seq__18643_18900 = G__18914;
chunk__18644_18901 = G__18915;
count__18645_18902 = G__18916;
i__18646_18903 = G__18917;
continue;
} else {
var vec__18648_18918 = cljs.core.first.call(null,seq__18643_18912__$1);
var direction_18919 = cljs.core.nth.call(null,vec__18648_18918,(0),null);
var os_18920 = cljs.core.nth.call(null,vec__18648_18918,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18919)){
context.setLineDash(lineDash_18899);

context.lineDashOffset = os_18920;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18921 = cljs.core.next.call(null,seq__18643_18912__$1);
var G__18922 = null;
var G__18923 = (0);
var G__18924 = (0);
seq__18643_18900 = G__18921;
chunk__18644_18901 = G__18922;
count__18645_18902 = G__18923;
i__18646_18903 = G__18924;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18925 = seq__18629_18858;
var G__18926 = chunk__18630_18859;
var G__18927 = count__18631_18860;
var G__18928 = (i__18632_18861 + (1));
seq__18629_18858 = G__18925;
chunk__18630_18859 = G__18926;
count__18631_18860 = G__18927;
i__18632_18861 = G__18928;
continue;
} else {
var temp__4126__auto___18929__$1 = cljs.core.seq.call(null,seq__18629_18858);
if(temp__4126__auto___18929__$1){
var seq__18629_18930__$1 = temp__4126__auto___18929__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18629_18930__$1)){
var c__4598__auto___18931 = cljs.core.chunk_first.call(null,seq__18629_18930__$1);
var G__18932 = cljs.core.chunk_rest.call(null,seq__18629_18930__$1);
var G__18933 = c__4598__auto___18931;
var G__18934 = cljs.core.count.call(null,c__4598__auto___18931);
var G__18935 = (0);
seq__18629_18858 = G__18932;
chunk__18630_18859 = G__18933;
count__18631_18860 = G__18934;
i__18632_18861 = G__18935;
continue;
} else {
var vec__18649_18936 = cljs.core.first.call(null,seq__18629_18930__$1);
var from_18937 = cljs.core.nth.call(null,vec__18649_18936,(0),null);
var onto_18938 = cljs.core.nth.call(null,vec__18649_18936,(1),null);
var vec__18650_18939 = cljs.core.nth.call(null,vec__18649_18936,(2),null);
var fw_18940 = cljs.core.nth.call(null,vec__18650_18939,(0),null);
var bw_18941 = cljs.core.nth.call(null,vec__18650_18939,(1),null);
var switched_18942 = vec__18650_18939;
context.beginPath();

var vec__18651_18943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18937)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18937))], null);
var from_x_18944 = cljs.core.nth.call(null,vec__18651_18943,(0),null);
var from_y_18945 = cljs.core.nth.call(null,vec__18651_18943,(1),null);
var vec__18652_18946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18938)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18938))], null);
var onto_x_18947 = cljs.core.nth.call(null,vec__18652_18946,(0),null);
var onto_y_18948 = cljs.core.nth.call(null,vec__18652_18946,(1),null);
var vec__18653_18949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18937)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18937)))], null);
var from_x_p_18950 = cljs.core.nth.call(null,vec__18653_18949,(0),null);
var from_y_p_18951 = cljs.core.nth.call(null,vec__18653_18949,(1),null);
var vec__18654_18952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18938)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18938)))], null);
var onto_x_p_18953 = cljs.core.nth.call(null,vec__18654_18952,(0),null);
var onto_y_p_18954 = cljs.core.nth.call(null,vec__18654_18952,(1),null);
var vec__18655_18955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18944)),(ys + (pad * from_y_18945))], null);
var xa_18956 = cljs.core.nth.call(null,vec__18655_18955,(0),null);
var ya_18957 = cljs.core.nth.call(null,vec__18655_18955,(1),null);
var vec__18656_18958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18944)) + (ch_pos_18857 * from_x_p_18950)),((ys + ((0.5 * inner_radius) * from_y_18945)) + (ch_pos_18857 * from_y_p_18951))], null);
var xb_18959 = cljs.core.nth.call(null,vec__18656_18958,(0),null);
var yb_18960 = cljs.core.nth.call(null,vec__18656_18958,(1),null);
var vec__18657_18961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18947)) + (ch_pos_18857 * onto_x_p_18953)),((ys + ((0.5 * inner_radius) * onto_y_18948)) + (ch_pos_18857 * onto_y_p_18954))], null);
var xc_18962 = cljs.core.nth.call(null,vec__18657_18961,(0),null);
var yc_18963 = cljs.core.nth.call(null,vec__18657_18961,(1),null);
var vec__18658_18964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18947)),(ys + (pad * onto_y_18948))], null);
var xd_18965 = cljs.core.nth.call(null,vec__18658_18964,(0),null);
var yd_18966 = cljs.core.nth.call(null,vec__18658_18964,(1),null);
context.moveTo(xa_18956,ya_18957);

context.bezierCurveTo(xb_18959,yb_18960,xc_18962,yc_18963,xd_18965,yd_18966);

var length_est_18967 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18937 - onto_18938))], null),(2)));
var length_bit_18968 = (length_est_18967 / ((length_est_18967 / (sf * (10))) | (0)));
var bit_1_18969 = (channel_width / (3));
var bit_2_18970 = (length_bit_18968 * ((2) / (3)));
var bits_18971 = (bit_1_18969 + bit_2_18970);
var offset_18972 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18971),bits_18971);
var lineDash_18973 = [bit_1_18969,bit_2_18970];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18942))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18855);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_18855);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__18659_18974 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18940,offset_18972], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18941,(- offset_18972)], null)], null));
var chunk__18660_18975 = null;
var count__18661_18976 = (0);
var i__18662_18977 = (0);
while(true){
if((i__18662_18977 < count__18661_18976)){
var vec__18663_18978 = cljs.core._nth.call(null,chunk__18660_18975,i__18662_18977);
var direction_18979 = cljs.core.nth.call(null,vec__18663_18978,(0),null);
var os_18980 = cljs.core.nth.call(null,vec__18663_18978,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18979)){
context.setLineDash(lineDash_18973);

context.lineDashOffset = os_18980;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18981 = seq__18659_18974;
var G__18982 = chunk__18660_18975;
var G__18983 = count__18661_18976;
var G__18984 = (i__18662_18977 + (1));
seq__18659_18974 = G__18981;
chunk__18660_18975 = G__18982;
count__18661_18976 = G__18983;
i__18662_18977 = G__18984;
continue;
} else {
var temp__4126__auto___18985__$2 = cljs.core.seq.call(null,seq__18659_18974);
if(temp__4126__auto___18985__$2){
var seq__18659_18986__$1 = temp__4126__auto___18985__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18659_18986__$1)){
var c__4598__auto___18987 = cljs.core.chunk_first.call(null,seq__18659_18986__$1);
var G__18988 = cljs.core.chunk_rest.call(null,seq__18659_18986__$1);
var G__18989 = c__4598__auto___18987;
var G__18990 = cljs.core.count.call(null,c__4598__auto___18987);
var G__18991 = (0);
seq__18659_18974 = G__18988;
chunk__18660_18975 = G__18989;
count__18661_18976 = G__18990;
i__18662_18977 = G__18991;
continue;
} else {
var vec__18664_18992 = cljs.core.first.call(null,seq__18659_18986__$1);
var direction_18993 = cljs.core.nth.call(null,vec__18664_18992,(0),null);
var os_18994 = cljs.core.nth.call(null,vec__18664_18992,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18993)){
context.setLineDash(lineDash_18973);

context.lineDashOffset = os_18994;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18995 = cljs.core.next.call(null,seq__18659_18986__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18659_18974 = G__18995;
chunk__18660_18975 = G__18996;
count__18661_18976 = G__18997;
i__18662_18977 = G__18998;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18999 = cljs.core.next.call(null,seq__18629_18930__$1);
var G__19000 = null;
var G__19001 = (0);
var G__19002 = (0);
seq__18629_18858 = G__18999;
chunk__18630_18859 = G__19000;
count__18631_18860 = G__19001;
i__18632_18861 = G__19002;
continue;
}
} else {
}
}
break;
}

var G__19003 = cljs.core.next.call(null,seq__18589_18848__$1);
var G__19004 = null;
var G__19005 = (0);
var G__19006 = (0);
seq__18589_18690 = G__19003;
chunk__18590_18691 = G__19004;
count__18591_18692 = G__19005;
i__18592_18693 = G__19006;
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

var seq__18665_19007 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__18666_19008 = null;
var count__18667_19009 = (0);
var i__18668_19010 = (0);
while(true){
if((i__18668_19010 < count__18667_19009)){
var gamma_19011 = cljs.core._nth.call(null,chunk__18666_19008,i__18668_19010);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_19011))),(ys + (radius * Math.cos.call(null,gamma_19011))));

var G__19012 = seq__18665_19007;
var G__19013 = chunk__18666_19008;
var G__19014 = count__18667_19009;
var G__19015 = (i__18668_19010 + (1));
seq__18665_19007 = G__19012;
chunk__18666_19008 = G__19013;
count__18667_19009 = G__19014;
i__18668_19010 = G__19015;
continue;
} else {
var temp__4126__auto___19016 = cljs.core.seq.call(null,seq__18665_19007);
if(temp__4126__auto___19016){
var seq__18665_19017__$1 = temp__4126__auto___19016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18665_19017__$1)){
var c__4598__auto___19018 = cljs.core.chunk_first.call(null,seq__18665_19017__$1);
var G__19019 = cljs.core.chunk_rest.call(null,seq__18665_19017__$1);
var G__19020 = c__4598__auto___19018;
var G__19021 = cljs.core.count.call(null,c__4598__auto___19018);
var G__19022 = (0);
seq__18665_19007 = G__19019;
chunk__18666_19008 = G__19020;
count__18667_19009 = G__19021;
i__18668_19010 = G__19022;
continue;
} else {
var gamma_19023 = cljs.core.first.call(null,seq__18665_19017__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_19023))),(ys + (radius * Math.cos.call(null,gamma_19023))));

var G__19024 = cljs.core.next.call(null,seq__18665_19017__$1);
var G__19025 = null;
var G__19026 = (0);
var G__19027 = (0);
seq__18665_19007 = G__19024;
chunk__18666_19008 = G__19025;
count__18667_19009 = G__19026;
i__18668_19010 = G__19027;
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
var vec__19029 = coords;
var x = cljs.core.nth.call(null,vec__19029,(0),null);
var y = cljs.core.nth.call(null,vec__19029,(1),null);
var d = cljs.core.nth.call(null,vec__19029,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__19031 = coords;
var x = cljs.core.nth.call(null,vec__19031,(0),null);
var y = cljs.core.nth.call(null,vec__19031,(1),null);
var d = cljs.core.nth.call(null,vec__19031,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__19032,context,timestamp,p__19033,sf,p__19034){
var map__19045 = p__19032;
var map__19045__$1 = ((cljs.core.seq_QMARK_.call(null,map__19045))?cljs.core.apply.call(null,cljs.core.hash_map,map__19045):map__19045);
var level = map__19045__$1;
var shapes = cljs.core.get.call(null,map__19045__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__19046 = cljs.core.get.call(null,map__19045__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__19046,(0),null);
var _ = cljs.core.nth.call(null,vec__19046,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__19046,(2),null);
var channels = cljs.core.get.call(null,map__19045__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__19047 = p__19033;
var ___$2 = cljs.core.nth.call(null,vec__19047,(0),null);
var bdr = cljs.core.nth.call(null,vec__19047,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__19047,(2),null);
var vec__19048 = p__19034;
var x_offset = cljs.core.nth.call(null,vec__19048,(0),null);
var y_offset = cljs.core.nth.call(null,vec__19048,(1),null);
var shape_19055 = cljs.core.nth.call(null,shapes,start);
var map__19049_19056 = shape_19055;
var map__19049_19057__$1 = ((cljs.core.seq_QMARK_.call(null,map__19049_19056))?cljs.core.apply.call(null,cljs.core.hash_map,map__19049_19056):map__19049_19056);
var vec__19050_19058 = cljs.core.get.call(null,map__19049_19057__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_19059 = cljs.core.nth.call(null,vec__19050_19058,(0),null);
var y_19060 = cljs.core.nth.call(null,vec__19050_19058,(1),null);
var __19061__$4 = cljs.core.nth.call(null,vec__19050_19058,(2),null);
var n_19062 = cljs.core.get.call(null,map__19049_19057__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs_19063 = ((x_19059 * sf) + x_offset);
var ys_19064 = ((y_19060 * sf) + y_offset);
var vtxs_19065 = cljstemplate.shape.vertices.call(null,shape_19055,xs_19063,ys_19064,sf);
var radius_19066 = (cljstemplate.shape.radii.call(null,n_19062) * sf);
var many_channels_19067 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,((4) - cljs.core.count.call(null,channels)),channels));
var channel_count_19068 = cljs.core.count.call(null,many_channels_19067);
context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_19065);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19063,ys_19064,radius_19066], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__19051_19069 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_19068));
var chunk__19052_19070 = null;
var count__19053_19071 = (0);
var i__19054_19072 = (0);
while(true){
if((i__19054_19072 < count__19053_19071)){
var i_19073 = cljs.core._nth.call(null,chunk__19052_19070,i__19054_19072);
var f_19074 = cljs.core.mod.call(null,(((sf * timestamp) * 0.01) + (i_19073 * (radius_19066 / channel_count_19068))),radius_19066);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19063,ys_19064,f_19074], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_19067,i_19073),((1) - (f_19074 / radius_19066))));

var G__19075 = seq__19051_19069;
var G__19076 = chunk__19052_19070;
var G__19077 = count__19053_19071;
var G__19078 = (i__19054_19072 + (1));
seq__19051_19069 = G__19075;
chunk__19052_19070 = G__19076;
count__19053_19071 = G__19077;
i__19054_19072 = G__19078;
continue;
} else {
var temp__4126__auto___19079 = cljs.core.seq.call(null,seq__19051_19069);
if(temp__4126__auto___19079){
var seq__19051_19080__$1 = temp__4126__auto___19079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19051_19080__$1)){
var c__4598__auto___19081 = cljs.core.chunk_first.call(null,seq__19051_19080__$1);
var G__19082 = cljs.core.chunk_rest.call(null,seq__19051_19080__$1);
var G__19083 = c__4598__auto___19081;
var G__19084 = cljs.core.count.call(null,c__4598__auto___19081);
var G__19085 = (0);
seq__19051_19069 = G__19082;
chunk__19052_19070 = G__19083;
count__19053_19071 = G__19084;
i__19054_19072 = G__19085;
continue;
} else {
var i_19086 = cljs.core.first.call(null,seq__19051_19080__$1);
var f_19087 = cljs.core.mod.call(null,(((sf * timestamp) * 0.01) + (i_19086 * (radius_19066 / channel_count_19068))),radius_19066);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19063,ys_19064,f_19087], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_19067,i_19086),((1) - (f_19087 / radius_19066))));

var G__19088 = cljs.core.next.call(null,seq__19051_19080__$1);
var G__19089 = null;
var G__19090 = (0);
var G__19091 = (0);
seq__19051_19069 = G__19088;
chunk__19052_19070 = G__19089;
count__19053_19071 = G__19090;
i__19054_19072 = G__19091;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_19065);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__19092,context,timestamp,p__19093,sf,p__19094,done){
var map__19113 = p__19092;
var map__19113__$1 = ((cljs.core.seq_QMARK_.call(null,map__19113))?cljs.core.apply.call(null,cljs.core.hash_map,map__19113):map__19113);
var level = map__19113__$1;
var shapes = cljs.core.get.call(null,map__19113__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__19114 = cljs.core.get.call(null,map__19113__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__19114,(0),null);
var _ = cljs.core.nth.call(null,vec__19114,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__19114,(2),null);
var channels = cljs.core.get.call(null,map__19113__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__19115 = p__19093;
var ___$2 = cljs.core.nth.call(null,vec__19115,(0),null);
var bdr = cljs.core.nth.call(null,vec__19115,(1),null);
var fg = cljs.core.nth.call(null,vec__19115,(2),null);
var vec__19116 = p__19094;
var x_offset = cljs.core.nth.call(null,vec__19116,(0),null);
var y_offset = cljs.core.nth.call(null,vec__19116,(1),null);
var shape_19131 = cljs.core.nth.call(null,shapes,end);
var map__19117_19132 = shape_19131;
var map__19117_19133__$1 = ((cljs.core.seq_QMARK_.call(null,map__19117_19132))?cljs.core.apply.call(null,cljs.core.hash_map,map__19117_19132):map__19117_19132);
var vec__19118_19134 = cljs.core.get.call(null,map__19117_19133__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_19135 = cljs.core.nth.call(null,vec__19118_19134,(0),null);
var y_19136 = cljs.core.nth.call(null,vec__19118_19134,(1),null);
var __19137__$3 = cljs.core.nth.call(null,vec__19118_19134,(2),null);
var n_19138 = cljs.core.get.call(null,map__19117_19133__$1,new cljs.core.Keyword(null,"n","n",562130025));
var wiring_19139 = cljs.core.get.call(null,map__19117_19133__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var xs_19140 = ((x_19135 * sf) + x_offset);
var ys_19141 = ((y_19136 * sf) + y_offset);
var vtxs_19142 = cljstemplate.shape.vertices.call(null,shape_19131,xs_19140,ys_19141,sf);
var radius_19143 = (cljstemplate.shape.radii.call(null,n_19138) * sf);
var radius_3rd_19144 = (radius_19143 / (3));
var radius_5th_19145 = (radius_19143 / (5));
var radius_15th_19146 = (radius_19143 / (15));
var radius_20th_19147 = (radius_19143 / (30));
var channel_count_19148 = cljs.core.count.call(null,channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_19142);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19140,ys_19141,radius_19143], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_19131,map__19117_19132,map__19117_19133__$1,vec__19118_19134,x_19135,y_19136,__19137__$3,n_19138,wiring_19139,xs_19140,ys_19141,vtxs_19142,radius_19143,radius_3rd_19144,radius_5th_19145,radius_15th_19146,radius_20th_19147,channel_count_19148,map__19113,map__19113__$1,level,shapes,vec__19114,end,_,___$1,channels,vec__19115,___$2,bdr,fg,vec__19116,x_offset,y_offset){
return (function iter__19119(s__19120){
return (new cljs.core.LazySeq(null,((function (shape_19131,map__19117_19132,map__19117_19133__$1,vec__19118_19134,x_19135,y_19136,__19137__$3,n_19138,wiring_19139,xs_19140,ys_19141,vtxs_19142,radius_19143,radius_3rd_19144,radius_5th_19145,radius_15th_19146,radius_20th_19147,channel_count_19148,map__19113,map__19113__$1,level,shapes,vec__19114,end,_,___$1,channels,vec__19115,___$2,bdr,fg,vec__19116,x_offset,y_offset){
return (function (){
var s__19120__$1 = s__19120;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19120__$1);
if(temp__4126__auto__){
var s__19120__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19120__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__19120__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__19122 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__19121 = (0);
while(true){
if((i__19121 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.call(null,c__4565__auto__,i__19121);
cljs.core.chunk_append.call(null,b__19122,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)));

var G__19149 = (i__19121 + (1));
i__19121 = G__19149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19122),iter__19119.call(null,cljs.core.chunk_rest.call(null,s__19120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19122),null);
}
} else {
var channel_wiring = cljs.core.first.call(null,s__19120__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)),iter__19119.call(null,cljs.core.rest.call(null,s__19120__$2)));
}
} else {
return null;
}
break;
}
});})(shape_19131,map__19117_19132,map__19117_19133__$1,vec__19118_19134,x_19135,y_19136,__19137__$3,n_19138,wiring_19139,xs_19140,ys_19141,vtxs_19142,radius_19143,radius_3rd_19144,radius_5th_19145,radius_15th_19146,radius_20th_19147,channel_count_19148,map__19113,map__19113__$1,level,shapes,vec__19114,end,_,___$1,channels,vec__19115,___$2,bdr,fg,vec__19116,x_offset,y_offset))
,null,null));
});})(shape_19131,map__19117_19132,map__19117_19133__$1,vec__19118_19134,x_19135,y_19136,__19137__$3,n_19138,wiring_19139,xs_19140,ys_19141,vtxs_19142,radius_19143,radius_3rd_19144,radius_5th_19145,radius_15th_19146,radius_20th_19147,channel_count_19148,map__19113,map__19113__$1,level,shapes,vec__19114,end,_,___$1,channels,vec__19115,___$2,bdr,fg,vec__19116,x_offset,y_offset))
;
return iter__4567__auto__.call(null,wiring_19139);
})())){
var seq__19123_19150 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(5)));
var chunk__19124_19151 = null;
var count__19125_19152 = (0);
var i__19126_19153 = (0);
while(true){
if((i__19126_19153 < count__19125_19152)){
var i_19154 = cljs.core._nth.call(null,chunk__19124_19151,i__19126_19153);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19140,ys_19141,(radius_19143 / ((5) - i_19154))], null),cljs.core.conj.call(null,fg,((1) / i_19154)));

var G__19155 = seq__19123_19150;
var G__19156 = chunk__19124_19151;
var G__19157 = count__19125_19152;
var G__19158 = (i__19126_19153 + (1));
seq__19123_19150 = G__19155;
chunk__19124_19151 = G__19156;
count__19125_19152 = G__19157;
i__19126_19153 = G__19158;
continue;
} else {
var temp__4126__auto___19159 = cljs.core.seq.call(null,seq__19123_19150);
if(temp__4126__auto___19159){
var seq__19123_19160__$1 = temp__4126__auto___19159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19123_19160__$1)){
var c__4598__auto___19161 = cljs.core.chunk_first.call(null,seq__19123_19160__$1);
var G__19162 = cljs.core.chunk_rest.call(null,seq__19123_19160__$1);
var G__19163 = c__4598__auto___19161;
var G__19164 = cljs.core.count.call(null,c__4598__auto___19161);
var G__19165 = (0);
seq__19123_19150 = G__19162;
chunk__19124_19151 = G__19163;
count__19125_19152 = G__19164;
i__19126_19153 = G__19165;
continue;
} else {
var i_19166 = cljs.core.first.call(null,seq__19123_19160__$1);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_19140,ys_19141,(radius_19143 / ((5) - i_19166))], null),cljs.core.conj.call(null,fg,((1) / i_19166)));

var G__19167 = cljs.core.next.call(null,seq__19123_19160__$1);
var G__19168 = null;
var G__19169 = (0);
var G__19170 = (0);
seq__19123_19150 = G__19167;
chunk__19124_19151 = G__19168;
count__19125_19152 = G__19169;
i__19126_19153 = G__19170;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,done,true);

cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"end","end",-268185958),context,xs_19140,ys_19141,radius_19143,timestamp);
} else {
}

var seq__19127_19171 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_19148));
var chunk__19128_19172 = null;
var count__19129_19173 = (0);
var i__19130_19174 = (0);
while(true){
if((i__19130_19174 < count__19129_19173)){
var i_19175 = cljs.core._nth.call(null,chunk__19128_19172,i__19130_19174);
var angle_19176 = ((i_19175 * (cljstemplate.constance.TAU / channel_count_19148)) - (timestamp / (3000)));
var xi_19177 = (xs_19140 + (radius_3rd_19144 * Math.sin.call(null,angle_19176)));
var yi_19178 = (ys_19141 + (radius_3rd_19144 * Math.cos.call(null,angle_19176)));
var on_19179 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_19139,i_19175)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_19177,yi_19178,radius_5th_19145], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_19175),(cljs.core.truth_(on_19179)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_19177,yi_19178,radius_5th_19145], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_19175),(cljs.core.truth_(on_19179)?0.75:0.25)));

if(cljs.core.truth_(on_19179)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_19177 - radius_15th_19146),(yi_19178 - radius_15th_19146),radius_15th_19146], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_19177 - radius_15th_19146),(yi_19178 - radius_15th_19146),radius_20th_19147], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__19180 = seq__19127_19171;
var G__19181 = chunk__19128_19172;
var G__19182 = count__19129_19173;
var G__19183 = (i__19130_19174 + (1));
seq__19127_19171 = G__19180;
chunk__19128_19172 = G__19181;
count__19129_19173 = G__19182;
i__19130_19174 = G__19183;
continue;
} else {
var temp__4126__auto___19184 = cljs.core.seq.call(null,seq__19127_19171);
if(temp__4126__auto___19184){
var seq__19127_19185__$1 = temp__4126__auto___19184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19127_19185__$1)){
var c__4598__auto___19186 = cljs.core.chunk_first.call(null,seq__19127_19185__$1);
var G__19187 = cljs.core.chunk_rest.call(null,seq__19127_19185__$1);
var G__19188 = c__4598__auto___19186;
var G__19189 = cljs.core.count.call(null,c__4598__auto___19186);
var G__19190 = (0);
seq__19127_19171 = G__19187;
chunk__19128_19172 = G__19188;
count__19129_19173 = G__19189;
i__19130_19174 = G__19190;
continue;
} else {
var i_19191 = cljs.core.first.call(null,seq__19127_19185__$1);
var angle_19192 = ((i_19191 * (cljstemplate.constance.TAU / channel_count_19148)) - (timestamp / (3000)));
var xi_19193 = (xs_19140 + (radius_3rd_19144 * Math.sin.call(null,angle_19192)));
var yi_19194 = (ys_19141 + (radius_3rd_19144 * Math.cos.call(null,angle_19192)));
var on_19195 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_19139,i_19191)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_19193,yi_19194,radius_5th_19145], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_19191),(cljs.core.truth_(on_19195)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_19193,yi_19194,radius_5th_19145], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_19191),(cljs.core.truth_(on_19195)?0.75:0.25)));

if(cljs.core.truth_(on_19195)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_19193 - radius_15th_19146),(yi_19194 - radius_15th_19146),radius_15th_19146], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_19193 - radius_15th_19146),(yi_19194 - radius_15th_19146),radius_20th_19147], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__19196 = cljs.core.next.call(null,seq__19127_19185__$1);
var G__19197 = null;
var G__19198 = (0);
var G__19199 = (0);
seq__19127_19171 = G__19196;
chunk__19128_19172 = G__19197;
count__19129_19173 = G__19198;
i__19130_19174 = G__19199;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_19142);

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
var vec__19201 = temp__4124__auto__;
var args = cljs.core.nth.call(null,vec__19201,(0),null);
var cached_value = cljs.core.nth.call(null,vec__19201,(1),null);
if(cljs.core._EQ_.call(null,args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,x,y,radius], null))){
return cached_value;
} else {
return cljstemplate.shape.mk_gradient.call(null,key,context,x,y,radius);
}
} else {
return cljstemplate.shape.mk_gradient.call(null,key,context,x,y,radius);
}
});
cljstemplate.shape.render_attention = (function render_attention(key,context,x,y,radius,timestamp){
var gradient = cljstemplate.shape.attention_gradient.call(null,key,context,x,y,radius);
context.fillStyle = gradient;

var seq__19206 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19207 = null;
var count__19208 = (0);
var i__19209 = (0);
while(true){
if((i__19209 < count__19208)){
var i = cljs.core._nth.call(null,chunk__19207,i__19209);
var start_19210 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_19211 = (start_19210 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_19210,end_19211,true);

context.closePath();

context.fill();

var G__19212 = seq__19206;
var G__19213 = chunk__19207;
var G__19214 = count__19208;
var G__19215 = (i__19209 + (1));
seq__19206 = G__19212;
chunk__19207 = G__19213;
count__19208 = G__19214;
i__19209 = G__19215;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19206);
if(temp__4126__auto__){
var seq__19206__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19206__$1)){
var c__4598__auto__ = cljs.core.chunk_first.call(null,seq__19206__$1);
var G__19216 = cljs.core.chunk_rest.call(null,seq__19206__$1);
var G__19217 = c__4598__auto__;
var G__19218 = cljs.core.count.call(null,c__4598__auto__);
var G__19219 = (0);
seq__19206 = G__19216;
chunk__19207 = G__19217;
count__19208 = G__19218;
i__19209 = G__19219;
continue;
} else {
var i = cljs.core.first.call(null,seq__19206__$1);
var start_19220 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_19221 = (start_19220 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_19220,end_19221,true);

context.closePath();

context.fill();

var G__19222 = cljs.core.next.call(null,seq__19206__$1);
var G__19223 = null;
var G__19224 = (0);
var G__19225 = (0);
seq__19206 = G__19222;
chunk__19207 = G__19223;
count__19208 = G__19224;
i__19209 = G__19225;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__19228,level,mouse,timestamp,done){
var vec__19232 = p__19228;
var context = cljs.core.nth.call(null,vec__19232,(0),null);
var width = cljs.core.nth.call(null,vec__19232,(1),null);
var height = cljs.core.nth.call(null,vec__19232,(2),null);
var sf = cljstemplate.shape.scale_factor.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(level);
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(level);
var vec__19233 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.call(null,vec__19233,(0),null);
var vec__19234 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.call(null,vec__19234,(0),null);
var ends = cljs.core.PersistentHashSet.fromArray([end,start], true);
context.lineJoin = "round";

context.lineCap = "butt";

if(cljs.core.truth_(cljs.core.deref.call(null,done))){
cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"next","next",-117701485),context,width,height,((function (){var x__4135__auto__ = width;
var y__4136__auto__ = height;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})() / (2)),timestamp);
} else {
}

return cljstemplate.shape.render_end.call(null,cljstemplate.shape.render_start.call(null,cljs.core.update.call(null,cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__19233,start,vec__19234,end,ends,vec__19232,context,width,height){
return (function (p1__19226_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_at_rest,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__19226_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__19233,start,vec__19234,end,ends,vec__19232,context,width,height))
),new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__19233,start,vec__19234,end,ends,vec__19232,context,width,height){
return (function (p1__19227_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_in_motion,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__19227_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__19233,start,vec__19234,end,ends,vec__19232,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});
