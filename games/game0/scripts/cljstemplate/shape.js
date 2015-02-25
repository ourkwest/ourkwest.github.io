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
var G__17525 = (idx + (1));
var G__17526 = cljs.core.rest.call(null,items);
idx = G__17525;
items = G__17526;
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
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__17527){
var vec__17529 = p__17527;
var in$ = cljs.core.nth.call(null,vec__17529,(0),null);
var out = cljs.core.nth.call(null,vec__17529,(1),null);
var _ = cljs.core.nth.call(null,vec__17529,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__17529,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),(function (p1__17530_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_channel_connections,p1__17530_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__17531_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_shape_connections,p1__17531_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,(2),direction_id], null),new cljs.core.Keyword(null,"on","on",173873944));
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__17532,index){
var vec__17535 = p__17532;
var from = cljs.core.nth.call(null,vec__17535,(0),null);
var onto = cljs.core.nth.call(null,vec__17535,(1),null);
var vec__17536 = cljs.core.nth.call(null,vec__17535,(2),null);
var backward = cljs.core.nth.call(null,vec__17536,(0),null);
var forward = cljs.core.nth.call(null,vec__17536,(1),null);
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
return (function (p1__17537_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__17537_SHARP_);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__17539){
while(true){
var vec__17542 = p__17539;
var vec__17543 = cljs.core.nth.call(null,vec__17542,(0),null);
var shape_id = cljs.core.nth.call(null,vec__17543,(0),null);
var channel_id = cljs.core.nth.call(null,vec__17543,(1),null);
var wire_id = cljs.core.nth.call(null,vec__17543,(2),null);
var direction_id = cljs.core.nth.call(null,vec__17543,(3),null);
var seeds = cljs.core.nthnext.call(null,vec__17542,(1));
var new_shapes = cljs.core.update.call(null,shapes,shape_id,((function (shapes,p__17539,vec__17542,vec__17543,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__17538_SHARP_){
return cljstemplate.shape.switch_on.call(null,p1__17538_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__17539,vec__17542,vec__17543,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.call(null,seeds,cljstemplate.shape.more_seeds.call(null,new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq.call(null,new_seeds)){
var G__17544 = new_shapes;
var G__17545 = new_seeds;
shapes = G__17544;
p__17539 = G__17545;
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
return (function (p1__17546_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__17546_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))),cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__17547_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__17547_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.call(null,cljstemplate.shape.seed_lights,cljs.core.repeat.call(null,level),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.call(null));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__17548_SHARP_){
return cljstemplate.shape.populate_shape_connections.call(null,p1__17548_SHARP_,cljstemplate.shape.seed_light.call(null,level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections.call(null,cljstemplate.shape.clear_connections.call(null,level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__17549,p__17550){
var vec__17553 = p__17549;
var a = cljs.core.nth.call(null,vec__17553,(0),null);
var b = cljs.core.nth.call(null,vec__17553,(1),null);
var c = cljs.core.nth.call(null,vec__17553,(2),null);
var vec__17554 = p__17550;
var d = cljs.core.nth.call(null,vec__17554,(0),null);
var f = cljs.core.nth.call(null,vec__17554,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__17555){
var map__17558 = p__17555;
var map__17558__$1 = ((cljs.core.seq_QMARK_.call(null,map__17558))?cljs.core.apply.call(null,cljs.core.hash_map,map__17558):map__17558);
var shape = map__17558__$1;
var map__17559 = cljs.core.get.call(null,map__17558__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__17559__$1 = ((cljs.core.seq_QMARK_.call(null,map__17559))?cljs.core.apply.call(null,cljs.core.hash_map,map__17559):map__17559);
var start = cljs.core.get.call(null,map__17559__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__17559__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start_time = cljs.core.get.call(null,map__17559__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var end_time = cljs.core.get.call(null,map__17559__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
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
return (function (p1__17560_SHARP_){
return cljs.core.map.call(null,r_fn,p1__17560_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__17561){
var vec__17563 = p__17561;
var _ = cljs.core.nth.call(null,vec__17563,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17563,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__17563,(2),null);
var timestamp = cljs.core.nth.call(null,vec__17563,(3),null);
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
cljstemplate.shape.rgb_str = (function rgb_str(p__17564){
var vec__17566 = p__17564;
var r = cljs.core.nth.call(null,vec__17566,(0),null);
var g = cljs.core.nth.call(null,vec__17566,(1),null);
var b = cljs.core.nth.call(null,vec__17566,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__17567){
var vec__17569 = p__17567;
var r = cljs.core.nth.call(null,vec__17569,(0),null);
var g = cljs.core.nth.call(null,vec__17569,(1),null);
var b = cljs.core.nth.call(null,vec__17569,(2),null);
var a = cljs.core.nth.call(null,vec__17569,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__17571 = temp__4124__auto__;
var x = cljs.core.nth.call(null,vec__17571,(0),null);
var y = cljs.core.nth.call(null,vec__17571,(1),null);
var clicked = cljs.core.nth.call(null,vec__17571,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__17573,xs,ys,sf){
var map__17580 = p__17573;
var map__17580__$1 = ((cljs.core.seq_QMARK_.call(null,map__17580))?cljs.core.apply.call(null,cljs.core.hash_map,map__17580):map__17580);
var n = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"n","n",562130025));
var vec__17581 = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__17581,(0),null);
var y = cljs.core.nth.call(null,vec__17581,(1),null);
var r = cljs.core.nth.call(null,vec__17581,(2),null);
var rotation = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
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
var gammas = cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (alpha,delta,radius,beta,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation){
return (function (p1__17572_SHARP_){
return (p1__17572_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation){
return (function iter__17582(s__17583){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation){
return (function (){
var s__17583__$1 = s__17583;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17583__$1);
if(temp__4126__auto__){
var s__17583__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17583__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__17583__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__17585 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__17584 = (0);
while(true){
if((i__17584 < size__4566__auto__)){
var gamma = cljs.core._nth.call(null,c__4565__auto__,i__17584);
cljs.core.chunk_append.call(null,b__17585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null));

var G__17586 = (i__17584 + (1));
i__17584 = G__17586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17585),iter__17582.call(null,cljs.core.chunk_rest.call(null,s__17583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17585),null);
}
} else {
var gamma = cljs.core.first.call(null,s__17583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null),iter__17582.call(null,cljs.core.rest.call(null,s__17583__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__17580,map__17580__$1,n,vec__17581,x,y,r,rotation))
;
return iter__4567__auto__.call(null,gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__17587){
var vec__17596 = p__17587;
var vec__17597 = cljs.core.nth.call(null,vec__17596,(0),null);
var x1 = cljs.core.nth.call(null,vec__17597,(0),null);
var y1 = cljs.core.nth.call(null,vec__17597,(1),null);
var rest = cljs.core.nthnext.call(null,vec__17596,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__17598_17604 = cljs.core.seq.call(null,rest);
var chunk__17599_17605 = null;
var count__17600_17606 = (0);
var i__17601_17607 = (0);
while(true){
if((i__17601_17607 < count__17600_17606)){
var vec__17602_17608 = cljs.core._nth.call(null,chunk__17599_17605,i__17601_17607);
var xr_17609 = cljs.core.nth.call(null,vec__17602_17608,(0),null);
var yr_17610 = cljs.core.nth.call(null,vec__17602_17608,(1),null);
context.lineTo(xr_17609,yr_17610);

var G__17611 = seq__17598_17604;
var G__17612 = chunk__17599_17605;
var G__17613 = count__17600_17606;
var G__17614 = (i__17601_17607 + (1));
seq__17598_17604 = G__17611;
chunk__17599_17605 = G__17612;
count__17600_17606 = G__17613;
i__17601_17607 = G__17614;
continue;
} else {
var temp__4126__auto___17615 = cljs.core.seq.call(null,seq__17598_17604);
if(temp__4126__auto___17615){
var seq__17598_17616__$1 = temp__4126__auto___17615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17598_17616__$1)){
var c__4598__auto___17617 = cljs.core.chunk_first.call(null,seq__17598_17616__$1);
var G__17618 = cljs.core.chunk_rest.call(null,seq__17598_17616__$1);
var G__17619 = c__4598__auto___17617;
var G__17620 = cljs.core.count.call(null,c__4598__auto___17617);
var G__17621 = (0);
seq__17598_17604 = G__17618;
chunk__17599_17605 = G__17619;
count__17600_17606 = G__17620;
i__17601_17607 = G__17621;
continue;
} else {
var vec__17603_17622 = cljs.core.first.call(null,seq__17598_17616__$1);
var xr_17623 = cljs.core.nth.call(null,vec__17603_17622,(0),null);
var yr_17624 = cljs.core.nth.call(null,vec__17603_17622,(1),null);
context.lineTo(xr_17623,yr_17624);

var G__17625 = cljs.core.next.call(null,seq__17598_17616__$1);
var G__17626 = null;
var G__17627 = (0);
var G__17628 = (0);
seq__17598_17604 = G__17625;
chunk__17599_17605 = G__17626;
count__17600_17606 = G__17627;
i__17601_17607 = G__17628;
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
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__17631,p__17632,channels,p__17633,p__17634,id,timestamp){
var vec__17724 = p__17631;
var x_offset = cljs.core.nth.call(null,vec__17724,(0),null);
var y_offset = cljs.core.nth.call(null,vec__17724,(1),null);
var vec__17725 = p__17632;
var mx = cljs.core.nth.call(null,vec__17725,(0),null);
var my = cljs.core.nth.call(null,vec__17725,(1),null);
var mouse = vec__17725;
var vec__17726 = p__17633;
var _ = cljs.core.nth.call(null,vec__17726,(0),null);
var bdr = cljs.core.nth.call(null,vec__17726,(1),null);
var fg = cljs.core.nth.call(null,vec__17726,(2),null);
var map__17727 = p__17634;
var map__17727__$1 = ((cljs.core.seq_QMARK_.call(null,map__17727))?cljs.core.apply.call(null,cljs.core.hash_map,map__17727):map__17727);
var shape = map__17727__$1;
var vec__17728 = cljs.core.get.call(null,map__17727__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__17728,(0),null);
var y = cljs.core.nth.call(null,vec__17728,(1),null);
var r = cljs.core.nth.call(null,vec__17728,(2),null);
var n = cljs.core.get.call(null,map__17727__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotation = cljs.core.get.call(null,map__17727__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var wiring = cljs.core.get.call(null,map__17727__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
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
var gammas = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,vec__17724,x_offset,y_offset,vec__17725,mx,my,mouse,vec__17726,_,bdr,fg,map__17727,map__17727__$1,shape,vec__17728,x,y,r,n,rotation,wiring){
return (function (p1__17629_SHARP_){
return (p1__17629_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__17724,x_offset,y_offset,vec__17725,mx,my,mouse,vec__17726,_,bdr,fg,map__17727,map__17727__$1,shape,vec__17728,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__17724,x_offset,y_offset,vec__17725,mx,my,mouse,vec__17726,_,bdr,fg,map__17727,map__17727__$1,shape,vec__17728,x,y,r,n,rotation,wiring){
return (function (p1__17630_SHARP_){
return (p1__17630_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__17724,x_offset,y_offset,vec__17725,mx,my,mouse,vec__17726,_,bdr,fg,map__17727,map__17727__$1,shape,vec__17728,x,y,r,n,rotation,wiring))
,(beta - delta));
var side_length = (cljstemplate.shapeconstance.shape_side_length * sf);
var channel_width = (side_length * 0.07);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.lineWidth = (1);

context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__17729_17813 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__17730_17814 = null;
var count__17731_17815 = (0);
var i__17732_17816 = (0);
while(true){
if((i__17732_17816 < count__17731_17815)){
var gamma_17817 = cljs.core._nth.call(null,chunk__17730_17814,i__17732_17816);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_17817))),(ys + (radius * Math.cos.call(null,gamma_17817))));

var G__17818 = seq__17729_17813;
var G__17819 = chunk__17730_17814;
var G__17820 = count__17731_17815;
var G__17821 = (i__17732_17816 + (1));
seq__17729_17813 = G__17818;
chunk__17730_17814 = G__17819;
count__17731_17815 = G__17820;
i__17732_17816 = G__17821;
continue;
} else {
var temp__4126__auto___17822 = cljs.core.seq.call(null,seq__17729_17813);
if(temp__4126__auto___17822){
var seq__17729_17823__$1 = temp__4126__auto___17822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17729_17823__$1)){
var c__4598__auto___17824 = cljs.core.chunk_first.call(null,seq__17729_17823__$1);
var G__17825 = cljs.core.chunk_rest.call(null,seq__17729_17823__$1);
var G__17826 = c__4598__auto___17824;
var G__17827 = cljs.core.count.call(null,c__4598__auto___17824);
var G__17828 = (0);
seq__17729_17813 = G__17825;
chunk__17730_17814 = G__17826;
count__17731_17815 = G__17827;
i__17732_17816 = G__17828;
continue;
} else {
var gamma_17829 = cljs.core.first.call(null,seq__17729_17823__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_17829))),(ys + (radius * Math.cos.call(null,gamma_17829))));

var G__17830 = cljs.core.next.call(null,seq__17729_17823__$1);
var G__17831 = null;
var G__17832 = (0);
var G__17833 = (0);
seq__17729_17813 = G__17830;
chunk__17730_17814 = G__17831;
count__17731_17815 = G__17832;
i__17732_17816 = G__17833;
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
var seq__17733_17834 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var chunk__17734_17835 = null;
var count__17735_17836 = (0);
var i__17736_17837 = (0);
while(true){
if((i__17736_17837 < count__17735_17836)){
var ch_17838 = cljs.core._nth.call(null,chunk__17734_17835,i__17736_17837);
var channel_17839 = cljs.core.nth.call(null,channels,ch_17838);
var channel_wiring_17840 = cljs.core.nth.call(null,wiring,ch_17838);
var ch_pos_17841 = (((ch_17838 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / n)) * 2.5);
var seq__17737_17842 = cljs.core.seq.call(null,channel_wiring_17840);
var chunk__17738_17843 = null;
var count__17739_17844 = (0);
var i__17740_17845 = (0);
while(true){
if((i__17740_17845 < count__17739_17844)){
var vec__17741_17846 = cljs.core._nth.call(null,chunk__17738_17843,i__17740_17845);
var from_17847 = cljs.core.nth.call(null,vec__17741_17846,(0),null);
var onto_17848 = cljs.core.nth.call(null,vec__17741_17846,(1),null);
var vec__17742_17849 = cljs.core.nth.call(null,vec__17741_17846,(2),null);
var fw_17850 = cljs.core.nth.call(null,vec__17742_17849,(0),null);
var bw_17851 = cljs.core.nth.call(null,vec__17742_17849,(1),null);
var switched_17852 = vec__17742_17849;
context.beginPath();

var vec__17743_17853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_17847)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_17847))], null);
var from_x_17854 = cljs.core.nth.call(null,vec__17743_17853,(0),null);
var from_y_17855 = cljs.core.nth.call(null,vec__17743_17853,(1),null);
var vec__17744_17856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_17848)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_17848))], null);
var onto_x_17857 = cljs.core.nth.call(null,vec__17744_17856,(0),null);
var onto_y_17858 = cljs.core.nth.call(null,vec__17744_17856,(1),null);
var vec__17745_17859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_17847)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_17847)))], null);
var from_x_p_17860 = cljs.core.nth.call(null,vec__17745_17859,(0),null);
var from_y_p_17861 = cljs.core.nth.call(null,vec__17745_17859,(1),null);
var vec__17746_17862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_17848)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_17848)))], null);
var onto_x_p_17863 = cljs.core.nth.call(null,vec__17746_17862,(0),null);
var onto_y_p_17864 = cljs.core.nth.call(null,vec__17746_17862,(1),null);
var vec__17747_17865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_17854)),(ys + (pad * from_y_17855))], null);
var xa_17866 = cljs.core.nth.call(null,vec__17747_17865,(0),null);
var ya_17867 = cljs.core.nth.call(null,vec__17747_17865,(1),null);
var vec__17748_17868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_17854)) + (ch_pos_17841 * from_x_p_17860)),((ys + ((0.5 * inner_radius) * from_y_17855)) + (ch_pos_17841 * from_y_p_17861))], null);
var xb_17869 = cljs.core.nth.call(null,vec__17748_17868,(0),null);
var yb_17870 = cljs.core.nth.call(null,vec__17748_17868,(1),null);
var vec__17749_17871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_17857)) + (ch_pos_17841 * onto_x_p_17863)),((ys + ((0.5 * inner_radius) * onto_y_17858)) + (ch_pos_17841 * onto_y_p_17864))], null);
var xc_17872 = cljs.core.nth.call(null,vec__17749_17871,(0),null);
var yc_17873 = cljs.core.nth.call(null,vec__17749_17871,(1),null);
var vec__17750_17874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_17857)),(ys + (pad * onto_y_17858))], null);
var xd_17875 = cljs.core.nth.call(null,vec__17750_17874,(0),null);
var yd_17876 = cljs.core.nth.call(null,vec__17750_17874,(1),null);
context.moveTo(xa_17866,ya_17867);

context.bezierCurveTo(xb_17869,yb_17870,xc_17872,yc_17873,xd_17875,yd_17876);

var length_est_17877 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_17847 - onto_17848))], null),(2)));
var length_bit_17878 = (length_est_17877 / ((length_est_17877 / (sf * (10))) | (0)));
var bit_1_17879 = (channel_width / (3));
var bit_2_17880 = (length_bit_17878 * ((2) / (3)));
var bits_17881 = (bit_1_17879 + bit_2_17880);
var offset_17882 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_17881),bits_17881);
var lineDash_17883 = [bit_1_17879,bit_2_17880];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_17852))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17839);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17839);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__17751_17884 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_17850,offset_17882], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_17851,(- offset_17882)], null)], null));
var chunk__17752_17885 = null;
var count__17753_17886 = (0);
var i__17754_17887 = (0);
while(true){
if((i__17754_17887 < count__17753_17886)){
var vec__17755_17888 = cljs.core._nth.call(null,chunk__17752_17885,i__17754_17887);
var direction_17889 = cljs.core.nth.call(null,vec__17755_17888,(0),null);
var os_17890 = cljs.core.nth.call(null,vec__17755_17888,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_17889)){
context.setLineDash(lineDash_17883);

context.lineDashOffset = os_17890;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__17891 = seq__17751_17884;
var G__17892 = chunk__17752_17885;
var G__17893 = count__17753_17886;
var G__17894 = (i__17754_17887 + (1));
seq__17751_17884 = G__17891;
chunk__17752_17885 = G__17892;
count__17753_17886 = G__17893;
i__17754_17887 = G__17894;
continue;
} else {
var temp__4126__auto___17895 = cljs.core.seq.call(null,seq__17751_17884);
if(temp__4126__auto___17895){
var seq__17751_17896__$1 = temp__4126__auto___17895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17751_17896__$1)){
var c__4598__auto___17897 = cljs.core.chunk_first.call(null,seq__17751_17896__$1);
var G__17898 = cljs.core.chunk_rest.call(null,seq__17751_17896__$1);
var G__17899 = c__4598__auto___17897;
var G__17900 = cljs.core.count.call(null,c__4598__auto___17897);
var G__17901 = (0);
seq__17751_17884 = G__17898;
chunk__17752_17885 = G__17899;
count__17753_17886 = G__17900;
i__17754_17887 = G__17901;
continue;
} else {
var vec__17756_17902 = cljs.core.first.call(null,seq__17751_17896__$1);
var direction_17903 = cljs.core.nth.call(null,vec__17756_17902,(0),null);
var os_17904 = cljs.core.nth.call(null,vec__17756_17902,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_17903)){
context.setLineDash(lineDash_17883);

context.lineDashOffset = os_17904;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__17905 = cljs.core.next.call(null,seq__17751_17896__$1);
var G__17906 = null;
var G__17907 = (0);
var G__17908 = (0);
seq__17751_17884 = G__17905;
chunk__17752_17885 = G__17906;
count__17753_17886 = G__17907;
i__17754_17887 = G__17908;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__17909 = seq__17737_17842;
var G__17910 = chunk__17738_17843;
var G__17911 = count__17739_17844;
var G__17912 = (i__17740_17845 + (1));
seq__17737_17842 = G__17909;
chunk__17738_17843 = G__17910;
count__17739_17844 = G__17911;
i__17740_17845 = G__17912;
continue;
} else {
var temp__4126__auto___17913 = cljs.core.seq.call(null,seq__17737_17842);
if(temp__4126__auto___17913){
var seq__17737_17914__$1 = temp__4126__auto___17913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17737_17914__$1)){
var c__4598__auto___17915 = cljs.core.chunk_first.call(null,seq__17737_17914__$1);
var G__17916 = cljs.core.chunk_rest.call(null,seq__17737_17914__$1);
var G__17917 = c__4598__auto___17915;
var G__17918 = cljs.core.count.call(null,c__4598__auto___17915);
var G__17919 = (0);
seq__17737_17842 = G__17916;
chunk__17738_17843 = G__17917;
count__17739_17844 = G__17918;
i__17740_17845 = G__17919;
continue;
} else {
var vec__17757_17920 = cljs.core.first.call(null,seq__17737_17914__$1);
var from_17921 = cljs.core.nth.call(null,vec__17757_17920,(0),null);
var onto_17922 = cljs.core.nth.call(null,vec__17757_17920,(1),null);
var vec__17758_17923 = cljs.core.nth.call(null,vec__17757_17920,(2),null);
var fw_17924 = cljs.core.nth.call(null,vec__17758_17923,(0),null);
var bw_17925 = cljs.core.nth.call(null,vec__17758_17923,(1),null);
var switched_17926 = vec__17758_17923;
context.beginPath();

var vec__17759_17927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_17921)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_17921))], null);
var from_x_17928 = cljs.core.nth.call(null,vec__17759_17927,(0),null);
var from_y_17929 = cljs.core.nth.call(null,vec__17759_17927,(1),null);
var vec__17760_17930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_17922)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_17922))], null);
var onto_x_17931 = cljs.core.nth.call(null,vec__17760_17930,(0),null);
var onto_y_17932 = cljs.core.nth.call(null,vec__17760_17930,(1),null);
var vec__17761_17933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_17921)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_17921)))], null);
var from_x_p_17934 = cljs.core.nth.call(null,vec__17761_17933,(0),null);
var from_y_p_17935 = cljs.core.nth.call(null,vec__17761_17933,(1),null);
var vec__17762_17936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_17922)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_17922)))], null);
var onto_x_p_17937 = cljs.core.nth.call(null,vec__17762_17936,(0),null);
var onto_y_p_17938 = cljs.core.nth.call(null,vec__17762_17936,(1),null);
var vec__17763_17939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_17928)),(ys + (pad * from_y_17929))], null);
var xa_17940 = cljs.core.nth.call(null,vec__17763_17939,(0),null);
var ya_17941 = cljs.core.nth.call(null,vec__17763_17939,(1),null);
var vec__17764_17942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_17928)) + (ch_pos_17841 * from_x_p_17934)),((ys + ((0.5 * inner_radius) * from_y_17929)) + (ch_pos_17841 * from_y_p_17935))], null);
var xb_17943 = cljs.core.nth.call(null,vec__17764_17942,(0),null);
var yb_17944 = cljs.core.nth.call(null,vec__17764_17942,(1),null);
var vec__17765_17945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_17931)) + (ch_pos_17841 * onto_x_p_17937)),((ys + ((0.5 * inner_radius) * onto_y_17932)) + (ch_pos_17841 * onto_y_p_17938))], null);
var xc_17946 = cljs.core.nth.call(null,vec__17765_17945,(0),null);
var yc_17947 = cljs.core.nth.call(null,vec__17765_17945,(1),null);
var vec__17766_17948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_17931)),(ys + (pad * onto_y_17932))], null);
var xd_17949 = cljs.core.nth.call(null,vec__17766_17948,(0),null);
var yd_17950 = cljs.core.nth.call(null,vec__17766_17948,(1),null);
context.moveTo(xa_17940,ya_17941);

context.bezierCurveTo(xb_17943,yb_17944,xc_17946,yc_17947,xd_17949,yd_17950);

var length_est_17951 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_17921 - onto_17922))], null),(2)));
var length_bit_17952 = (length_est_17951 / ((length_est_17951 / (sf * (10))) | (0)));
var bit_1_17953 = (channel_width / (3));
var bit_2_17954 = (length_bit_17952 * ((2) / (3)));
var bits_17955 = (bit_1_17953 + bit_2_17954);
var offset_17956 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_17955),bits_17955);
var lineDash_17957 = [bit_1_17953,bit_2_17954];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_17926))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17839);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17839);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__17767_17958 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_17924,offset_17956], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_17925,(- offset_17956)], null)], null));
var chunk__17768_17959 = null;
var count__17769_17960 = (0);
var i__17770_17961 = (0);
while(true){
if((i__17770_17961 < count__17769_17960)){
var vec__17771_17962 = cljs.core._nth.call(null,chunk__17768_17959,i__17770_17961);
var direction_17963 = cljs.core.nth.call(null,vec__17771_17962,(0),null);
var os_17964 = cljs.core.nth.call(null,vec__17771_17962,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_17963)){
context.setLineDash(lineDash_17957);

context.lineDashOffset = os_17964;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__17965 = seq__17767_17958;
var G__17966 = chunk__17768_17959;
var G__17967 = count__17769_17960;
var G__17968 = (i__17770_17961 + (1));
seq__17767_17958 = G__17965;
chunk__17768_17959 = G__17966;
count__17769_17960 = G__17967;
i__17770_17961 = G__17968;
continue;
} else {
var temp__4126__auto___17969__$1 = cljs.core.seq.call(null,seq__17767_17958);
if(temp__4126__auto___17969__$1){
var seq__17767_17970__$1 = temp__4126__auto___17969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17767_17970__$1)){
var c__4598__auto___17971 = cljs.core.chunk_first.call(null,seq__17767_17970__$1);
var G__17972 = cljs.core.chunk_rest.call(null,seq__17767_17970__$1);
var G__17973 = c__4598__auto___17971;
var G__17974 = cljs.core.count.call(null,c__4598__auto___17971);
var G__17975 = (0);
seq__17767_17958 = G__17972;
chunk__17768_17959 = G__17973;
count__17769_17960 = G__17974;
i__17770_17961 = G__17975;
continue;
} else {
var vec__17772_17976 = cljs.core.first.call(null,seq__17767_17970__$1);
var direction_17977 = cljs.core.nth.call(null,vec__17772_17976,(0),null);
var os_17978 = cljs.core.nth.call(null,vec__17772_17976,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_17977)){
context.setLineDash(lineDash_17957);

context.lineDashOffset = os_17978;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__17979 = cljs.core.next.call(null,seq__17767_17970__$1);
var G__17980 = null;
var G__17981 = (0);
var G__17982 = (0);
seq__17767_17958 = G__17979;
chunk__17768_17959 = G__17980;
count__17769_17960 = G__17981;
i__17770_17961 = G__17982;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__17983 = cljs.core.next.call(null,seq__17737_17914__$1);
var G__17984 = null;
var G__17985 = (0);
var G__17986 = (0);
seq__17737_17842 = G__17983;
chunk__17738_17843 = G__17984;
count__17739_17844 = G__17985;
i__17740_17845 = G__17986;
continue;
}
} else {
}
}
break;
}

var G__17987 = seq__17733_17834;
var G__17988 = chunk__17734_17835;
var G__17989 = count__17735_17836;
var G__17990 = (i__17736_17837 + (1));
seq__17733_17834 = G__17987;
chunk__17734_17835 = G__17988;
count__17735_17836 = G__17989;
i__17736_17837 = G__17990;
continue;
} else {
var temp__4126__auto___17991 = cljs.core.seq.call(null,seq__17733_17834);
if(temp__4126__auto___17991){
var seq__17733_17992__$1 = temp__4126__auto___17991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17733_17992__$1)){
var c__4598__auto___17993 = cljs.core.chunk_first.call(null,seq__17733_17992__$1);
var G__17994 = cljs.core.chunk_rest.call(null,seq__17733_17992__$1);
var G__17995 = c__4598__auto___17993;
var G__17996 = cljs.core.count.call(null,c__4598__auto___17993);
var G__17997 = (0);
seq__17733_17834 = G__17994;
chunk__17734_17835 = G__17995;
count__17735_17836 = G__17996;
i__17736_17837 = G__17997;
continue;
} else {
var ch_17998 = cljs.core.first.call(null,seq__17733_17992__$1);
var channel_17999 = cljs.core.nth.call(null,channels,ch_17998);
var channel_wiring_18000 = cljs.core.nth.call(null,wiring,ch_17998);
var ch_pos_18001 = (((ch_17998 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / n)) * 2.5);
var seq__17773_18002 = cljs.core.seq.call(null,channel_wiring_18000);
var chunk__17774_18003 = null;
var count__17775_18004 = (0);
var i__17776_18005 = (0);
while(true){
if((i__17776_18005 < count__17775_18004)){
var vec__17777_18006 = cljs.core._nth.call(null,chunk__17774_18003,i__17776_18005);
var from_18007 = cljs.core.nth.call(null,vec__17777_18006,(0),null);
var onto_18008 = cljs.core.nth.call(null,vec__17777_18006,(1),null);
var vec__17778_18009 = cljs.core.nth.call(null,vec__17777_18006,(2),null);
var fw_18010 = cljs.core.nth.call(null,vec__17778_18009,(0),null);
var bw_18011 = cljs.core.nth.call(null,vec__17778_18009,(1),null);
var switched_18012 = vec__17778_18009;
context.beginPath();

var vec__17779_18013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18007)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18007))], null);
var from_x_18014 = cljs.core.nth.call(null,vec__17779_18013,(0),null);
var from_y_18015 = cljs.core.nth.call(null,vec__17779_18013,(1),null);
var vec__17780_18016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18008)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18008))], null);
var onto_x_18017 = cljs.core.nth.call(null,vec__17780_18016,(0),null);
var onto_y_18018 = cljs.core.nth.call(null,vec__17780_18016,(1),null);
var vec__17781_18019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18007)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18007)))], null);
var from_x_p_18020 = cljs.core.nth.call(null,vec__17781_18019,(0),null);
var from_y_p_18021 = cljs.core.nth.call(null,vec__17781_18019,(1),null);
var vec__17782_18022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18008)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18008)))], null);
var onto_x_p_18023 = cljs.core.nth.call(null,vec__17782_18022,(0),null);
var onto_y_p_18024 = cljs.core.nth.call(null,vec__17782_18022,(1),null);
var vec__17783_18025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18014)),(ys + (pad * from_y_18015))], null);
var xa_18026 = cljs.core.nth.call(null,vec__17783_18025,(0),null);
var ya_18027 = cljs.core.nth.call(null,vec__17783_18025,(1),null);
var vec__17784_18028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18014)) + (ch_pos_18001 * from_x_p_18020)),((ys + ((0.5 * inner_radius) * from_y_18015)) + (ch_pos_18001 * from_y_p_18021))], null);
var xb_18029 = cljs.core.nth.call(null,vec__17784_18028,(0),null);
var yb_18030 = cljs.core.nth.call(null,vec__17784_18028,(1),null);
var vec__17785_18031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18017)) + (ch_pos_18001 * onto_x_p_18023)),((ys + ((0.5 * inner_radius) * onto_y_18018)) + (ch_pos_18001 * onto_y_p_18024))], null);
var xc_18032 = cljs.core.nth.call(null,vec__17785_18031,(0),null);
var yc_18033 = cljs.core.nth.call(null,vec__17785_18031,(1),null);
var vec__17786_18034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18017)),(ys + (pad * onto_y_18018))], null);
var xd_18035 = cljs.core.nth.call(null,vec__17786_18034,(0),null);
var yd_18036 = cljs.core.nth.call(null,vec__17786_18034,(1),null);
context.moveTo(xa_18026,ya_18027);

context.bezierCurveTo(xb_18029,yb_18030,xc_18032,yc_18033,xd_18035,yd_18036);

var length_est_18037 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18007 - onto_18008))], null),(2)));
var length_bit_18038 = (length_est_18037 / ((length_est_18037 / (sf * (10))) | (0)));
var bit_1_18039 = (channel_width / (3));
var bit_2_18040 = (length_bit_18038 * ((2) / (3)));
var bits_18041 = (bit_1_18039 + bit_2_18040);
var offset_18042 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18041),bits_18041);
var lineDash_18043 = [bit_1_18039,bit_2_18040];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18012))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17999);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17999);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__17787_18044 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18010,offset_18042], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18011,(- offset_18042)], null)], null));
var chunk__17788_18045 = null;
var count__17789_18046 = (0);
var i__17790_18047 = (0);
while(true){
if((i__17790_18047 < count__17789_18046)){
var vec__17791_18048 = cljs.core._nth.call(null,chunk__17788_18045,i__17790_18047);
var direction_18049 = cljs.core.nth.call(null,vec__17791_18048,(0),null);
var os_18050 = cljs.core.nth.call(null,vec__17791_18048,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18049)){
context.setLineDash(lineDash_18043);

context.lineDashOffset = os_18050;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18051 = seq__17787_18044;
var G__18052 = chunk__17788_18045;
var G__18053 = count__17789_18046;
var G__18054 = (i__17790_18047 + (1));
seq__17787_18044 = G__18051;
chunk__17788_18045 = G__18052;
count__17789_18046 = G__18053;
i__17790_18047 = G__18054;
continue;
} else {
var temp__4126__auto___18055__$1 = cljs.core.seq.call(null,seq__17787_18044);
if(temp__4126__auto___18055__$1){
var seq__17787_18056__$1 = temp__4126__auto___18055__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17787_18056__$1)){
var c__4598__auto___18057 = cljs.core.chunk_first.call(null,seq__17787_18056__$1);
var G__18058 = cljs.core.chunk_rest.call(null,seq__17787_18056__$1);
var G__18059 = c__4598__auto___18057;
var G__18060 = cljs.core.count.call(null,c__4598__auto___18057);
var G__18061 = (0);
seq__17787_18044 = G__18058;
chunk__17788_18045 = G__18059;
count__17789_18046 = G__18060;
i__17790_18047 = G__18061;
continue;
} else {
var vec__17792_18062 = cljs.core.first.call(null,seq__17787_18056__$1);
var direction_18063 = cljs.core.nth.call(null,vec__17792_18062,(0),null);
var os_18064 = cljs.core.nth.call(null,vec__17792_18062,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18063)){
context.setLineDash(lineDash_18043);

context.lineDashOffset = os_18064;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18065 = cljs.core.next.call(null,seq__17787_18056__$1);
var G__18066 = null;
var G__18067 = (0);
var G__18068 = (0);
seq__17787_18044 = G__18065;
chunk__17788_18045 = G__18066;
count__17789_18046 = G__18067;
i__17790_18047 = G__18068;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18069 = seq__17773_18002;
var G__18070 = chunk__17774_18003;
var G__18071 = count__17775_18004;
var G__18072 = (i__17776_18005 + (1));
seq__17773_18002 = G__18069;
chunk__17774_18003 = G__18070;
count__17775_18004 = G__18071;
i__17776_18005 = G__18072;
continue;
} else {
var temp__4126__auto___18073__$1 = cljs.core.seq.call(null,seq__17773_18002);
if(temp__4126__auto___18073__$1){
var seq__17773_18074__$1 = temp__4126__auto___18073__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17773_18074__$1)){
var c__4598__auto___18075 = cljs.core.chunk_first.call(null,seq__17773_18074__$1);
var G__18076 = cljs.core.chunk_rest.call(null,seq__17773_18074__$1);
var G__18077 = c__4598__auto___18075;
var G__18078 = cljs.core.count.call(null,c__4598__auto___18075);
var G__18079 = (0);
seq__17773_18002 = G__18076;
chunk__17774_18003 = G__18077;
count__17775_18004 = G__18078;
i__17776_18005 = G__18079;
continue;
} else {
var vec__17793_18080 = cljs.core.first.call(null,seq__17773_18074__$1);
var from_18081 = cljs.core.nth.call(null,vec__17793_18080,(0),null);
var onto_18082 = cljs.core.nth.call(null,vec__17793_18080,(1),null);
var vec__17794_18083 = cljs.core.nth.call(null,vec__17793_18080,(2),null);
var fw_18084 = cljs.core.nth.call(null,vec__17794_18083,(0),null);
var bw_18085 = cljs.core.nth.call(null,vec__17794_18083,(1),null);
var switched_18086 = vec__17794_18083;
context.beginPath();

var vec__17795_18087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18081)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18081))], null);
var from_x_18088 = cljs.core.nth.call(null,vec__17795_18087,(0),null);
var from_y_18089 = cljs.core.nth.call(null,vec__17795_18087,(1),null);
var vec__17796_18090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18082)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18082))], null);
var onto_x_18091 = cljs.core.nth.call(null,vec__17796_18090,(0),null);
var onto_y_18092 = cljs.core.nth.call(null,vec__17796_18090,(1),null);
var vec__17797_18093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_18081)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_18081)))], null);
var from_x_p_18094 = cljs.core.nth.call(null,vec__17797_18093,(0),null);
var from_y_p_18095 = cljs.core.nth.call(null,vec__17797_18093,(1),null);
var vec__17798_18096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_18082)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_18082)))], null);
var onto_x_p_18097 = cljs.core.nth.call(null,vec__17798_18096,(0),null);
var onto_y_p_18098 = cljs.core.nth.call(null,vec__17798_18096,(1),null);
var vec__17799_18099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_18088)),(ys + (pad * from_y_18089))], null);
var xa_18100 = cljs.core.nth.call(null,vec__17799_18099,(0),null);
var ya_18101 = cljs.core.nth.call(null,vec__17799_18099,(1),null);
var vec__17800_18102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_18088)) + (ch_pos_18001 * from_x_p_18094)),((ys + ((0.5 * inner_radius) * from_y_18089)) + (ch_pos_18001 * from_y_p_18095))], null);
var xb_18103 = cljs.core.nth.call(null,vec__17800_18102,(0),null);
var yb_18104 = cljs.core.nth.call(null,vec__17800_18102,(1),null);
var vec__17801_18105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_18091)) + (ch_pos_18001 * onto_x_p_18097)),((ys + ((0.5 * inner_radius) * onto_y_18092)) + (ch_pos_18001 * onto_y_p_18098))], null);
var xc_18106 = cljs.core.nth.call(null,vec__17801_18105,(0),null);
var yc_18107 = cljs.core.nth.call(null,vec__17801_18105,(1),null);
var vec__17802_18108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_18091)),(ys + (pad * onto_y_18092))], null);
var xd_18109 = cljs.core.nth.call(null,vec__17802_18108,(0),null);
var yd_18110 = cljs.core.nth.call(null,vec__17802_18108,(1),null);
context.moveTo(xa_18100,ya_18101);

context.bezierCurveTo(xb_18103,yb_18104,xc_18106,yc_18107,xd_18109,yd_18110);

var length_est_18111 = (inner_radius * cljs.core.get.call(null,cljstemplate.shape.path_lengths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,Math.abs.call(null,(from_18081 - onto_18082))], null),(2)));
var length_bit_18112 = (length_est_18111 / ((length_est_18111 / (sf * (10))) | (0)));
var bit_1_18113 = (channel_width / (3));
var bit_2_18114 = (length_bit_18112 * ((2) / (3)));
var bits_18115 = (bit_1_18113 + bit_2_18114);
var offset_18116 = cljs.core.mod.call(null,((timestamp / (1000)) * bits_18115),bits_18115);
var lineDash_18117 = [bit_1_18113,bit_2_18114];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_18086))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = (channel_width + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17999);

context.lineWidth = channel_width;

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (3)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_17999);

context.lineWidth = (channel_width / (3));

context.stroke();
}

var seq__17803_18118 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_18084,offset_18116], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_18085,(- offset_18116)], null)], null));
var chunk__17804_18119 = null;
var count__17805_18120 = (0);
var i__17806_18121 = (0);
while(true){
if((i__17806_18121 < count__17805_18120)){
var vec__17807_18122 = cljs.core._nth.call(null,chunk__17804_18119,i__17806_18121);
var direction_18123 = cljs.core.nth.call(null,vec__17807_18122,(0),null);
var os_18124 = cljs.core.nth.call(null,vec__17807_18122,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18123)){
context.setLineDash(lineDash_18117);

context.lineDashOffset = os_18124;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18125 = seq__17803_18118;
var G__18126 = chunk__17804_18119;
var G__18127 = count__17805_18120;
var G__18128 = (i__17806_18121 + (1));
seq__17803_18118 = G__18125;
chunk__17804_18119 = G__18126;
count__17805_18120 = G__18127;
i__17806_18121 = G__18128;
continue;
} else {
var temp__4126__auto___18129__$2 = cljs.core.seq.call(null,seq__17803_18118);
if(temp__4126__auto___18129__$2){
var seq__17803_18130__$1 = temp__4126__auto___18129__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17803_18130__$1)){
var c__4598__auto___18131 = cljs.core.chunk_first.call(null,seq__17803_18130__$1);
var G__18132 = cljs.core.chunk_rest.call(null,seq__17803_18130__$1);
var G__18133 = c__4598__auto___18131;
var G__18134 = cljs.core.count.call(null,c__4598__auto___18131);
var G__18135 = (0);
seq__17803_18118 = G__18132;
chunk__17804_18119 = G__18133;
count__17805_18120 = G__18134;
i__17806_18121 = G__18135;
continue;
} else {
var vec__17808_18136 = cljs.core.first.call(null,seq__17803_18130__$1);
var direction_18137 = cljs.core.nth.call(null,vec__17808_18136,(0),null);
var os_18138 = cljs.core.nth.call(null,vec__17808_18136,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_18137)){
context.setLineDash(lineDash_18117);

context.lineDashOffset = os_18138;

context.strokeStyle = "black";

context.lineWidth = (channel_width / (3));

context.stroke();
} else {
}

var G__18139 = cljs.core.next.call(null,seq__17803_18130__$1);
var G__18140 = null;
var G__18141 = (0);
var G__18142 = (0);
seq__17803_18118 = G__18139;
chunk__17804_18119 = G__18140;
count__17805_18120 = G__18141;
i__17806_18121 = G__18142;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__18143 = cljs.core.next.call(null,seq__17773_18074__$1);
var G__18144 = null;
var G__18145 = (0);
var G__18146 = (0);
seq__17773_18002 = G__18143;
chunk__17774_18003 = G__18144;
count__17775_18004 = G__18145;
i__17776_18005 = G__18146;
continue;
}
} else {
}
}
break;
}

var G__18147 = cljs.core.next.call(null,seq__17733_17992__$1);
var G__18148 = null;
var G__18149 = (0);
var G__18150 = (0);
seq__17733_17834 = G__18147;
chunk__17734_17835 = G__18148;
count__17735_17836 = G__18149;
i__17736_17837 = G__18150;
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

var seq__17809_18151 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__17810_18152 = null;
var count__17811_18153 = (0);
var i__17812_18154 = (0);
while(true){
if((i__17812_18154 < count__17811_18153)){
var gamma_18155 = cljs.core._nth.call(null,chunk__17810_18152,i__17812_18154);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_18155))),(ys + (radius * Math.cos.call(null,gamma_18155))));

var G__18156 = seq__17809_18151;
var G__18157 = chunk__17810_18152;
var G__18158 = count__17811_18153;
var G__18159 = (i__17812_18154 + (1));
seq__17809_18151 = G__18156;
chunk__17810_18152 = G__18157;
count__17811_18153 = G__18158;
i__17812_18154 = G__18159;
continue;
} else {
var temp__4126__auto___18160 = cljs.core.seq.call(null,seq__17809_18151);
if(temp__4126__auto___18160){
var seq__17809_18161__$1 = temp__4126__auto___18160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17809_18161__$1)){
var c__4598__auto___18162 = cljs.core.chunk_first.call(null,seq__17809_18161__$1);
var G__18163 = cljs.core.chunk_rest.call(null,seq__17809_18161__$1);
var G__18164 = c__4598__auto___18162;
var G__18165 = cljs.core.count.call(null,c__4598__auto___18162);
var G__18166 = (0);
seq__17809_18151 = G__18163;
chunk__17810_18152 = G__18164;
count__17811_18153 = G__18165;
i__17812_18154 = G__18166;
continue;
} else {
var gamma_18167 = cljs.core.first.call(null,seq__17809_18161__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_18167))),(ys + (radius * Math.cos.call(null,gamma_18167))));

var G__18168 = cljs.core.next.call(null,seq__17809_18161__$1);
var G__18169 = null;
var G__18170 = (0);
var G__18171 = (0);
seq__17809_18151 = G__18168;
chunk__17810_18152 = G__18169;
count__17811_18153 = G__18170;
i__17812_18154 = G__18171;
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
var vec__18173 = coords;
var x = cljs.core.nth.call(null,vec__18173,(0),null);
var y = cljs.core.nth.call(null,vec__18173,(1),null);
var d = cljs.core.nth.call(null,vec__18173,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__18175 = coords;
var x = cljs.core.nth.call(null,vec__18175,(0),null);
var y = cljs.core.nth.call(null,vec__18175,(1),null);
var d = cljs.core.nth.call(null,vec__18175,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__18176,context,timestamp,p__18177,sf,p__18178){
var map__18189 = p__18176;
var map__18189__$1 = ((cljs.core.seq_QMARK_.call(null,map__18189))?cljs.core.apply.call(null,cljs.core.hash_map,map__18189):map__18189);
var level = map__18189__$1;
var shapes = cljs.core.get.call(null,map__18189__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__18190 = cljs.core.get.call(null,map__18189__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__18190,(0),null);
var _ = cljs.core.nth.call(null,vec__18190,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__18190,(2),null);
var channels = cljs.core.get.call(null,map__18189__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__18191 = p__18177;
var ___$2 = cljs.core.nth.call(null,vec__18191,(0),null);
var bdr = cljs.core.nth.call(null,vec__18191,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__18191,(2),null);
var vec__18192 = p__18178;
var x_offset = cljs.core.nth.call(null,vec__18192,(0),null);
var y_offset = cljs.core.nth.call(null,vec__18192,(1),null);
var shape_18199 = cljs.core.nth.call(null,shapes,start);
var map__18193_18200 = shape_18199;
var map__18193_18201__$1 = ((cljs.core.seq_QMARK_.call(null,map__18193_18200))?cljs.core.apply.call(null,cljs.core.hash_map,map__18193_18200):map__18193_18200);
var vec__18194_18202 = cljs.core.get.call(null,map__18193_18201__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_18203 = cljs.core.nth.call(null,vec__18194_18202,(0),null);
var y_18204 = cljs.core.nth.call(null,vec__18194_18202,(1),null);
var __18205__$4 = cljs.core.nth.call(null,vec__18194_18202,(2),null);
var n_18206 = cljs.core.get.call(null,map__18193_18201__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs_18207 = ((x_18203 * sf) + x_offset);
var ys_18208 = ((y_18204 * sf) + y_offset);
var vtxs_18209 = cljstemplate.shape.vertices.call(null,shape_18199,xs_18207,ys_18208,sf);
var radius_18210 = (cljstemplate.shape.radii.call(null,n_18206) * sf);
var many_channels_18211 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,((4) - cljs.core.count.call(null,channels)),channels));
var channel_count_18212 = cljs.core.count.call(null,many_channels_18211);
context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_18209);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18207,ys_18208,radius_18210], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__18195_18213 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_18212));
var chunk__18196_18214 = null;
var count__18197_18215 = (0);
var i__18198_18216 = (0);
while(true){
if((i__18198_18216 < count__18197_18215)){
var i_18217 = cljs.core._nth.call(null,chunk__18196_18214,i__18198_18216);
var f_18218 = cljs.core.mod.call(null,(((sf * timestamp) * 0.01) + (i_18217 * (radius_18210 / channel_count_18212))),radius_18210);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18207,ys_18208,f_18218], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_18211,i_18217),((1) - (f_18218 / radius_18210))));

var G__18219 = seq__18195_18213;
var G__18220 = chunk__18196_18214;
var G__18221 = count__18197_18215;
var G__18222 = (i__18198_18216 + (1));
seq__18195_18213 = G__18219;
chunk__18196_18214 = G__18220;
count__18197_18215 = G__18221;
i__18198_18216 = G__18222;
continue;
} else {
var temp__4126__auto___18223 = cljs.core.seq.call(null,seq__18195_18213);
if(temp__4126__auto___18223){
var seq__18195_18224__$1 = temp__4126__auto___18223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18195_18224__$1)){
var c__4598__auto___18225 = cljs.core.chunk_first.call(null,seq__18195_18224__$1);
var G__18226 = cljs.core.chunk_rest.call(null,seq__18195_18224__$1);
var G__18227 = c__4598__auto___18225;
var G__18228 = cljs.core.count.call(null,c__4598__auto___18225);
var G__18229 = (0);
seq__18195_18213 = G__18226;
chunk__18196_18214 = G__18227;
count__18197_18215 = G__18228;
i__18198_18216 = G__18229;
continue;
} else {
var i_18230 = cljs.core.first.call(null,seq__18195_18224__$1);
var f_18231 = cljs.core.mod.call(null,(((sf * timestamp) * 0.01) + (i_18230 * (radius_18210 / channel_count_18212))),radius_18210);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18207,ys_18208,f_18231], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_18211,i_18230),((1) - (f_18231 / radius_18210))));

var G__18232 = cljs.core.next.call(null,seq__18195_18224__$1);
var G__18233 = null;
var G__18234 = (0);
var G__18235 = (0);
seq__18195_18213 = G__18232;
chunk__18196_18214 = G__18233;
count__18197_18215 = G__18234;
i__18198_18216 = G__18235;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_18209);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__18236,context,timestamp,p__18237,sf,p__18238,done){
var map__18257 = p__18236;
var map__18257__$1 = ((cljs.core.seq_QMARK_.call(null,map__18257))?cljs.core.apply.call(null,cljs.core.hash_map,map__18257):map__18257);
var level = map__18257__$1;
var shapes = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__18258 = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__18258,(0),null);
var _ = cljs.core.nth.call(null,vec__18258,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__18258,(2),null);
var channels = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__18259 = p__18237;
var ___$2 = cljs.core.nth.call(null,vec__18259,(0),null);
var bdr = cljs.core.nth.call(null,vec__18259,(1),null);
var fg = cljs.core.nth.call(null,vec__18259,(2),null);
var vec__18260 = p__18238;
var x_offset = cljs.core.nth.call(null,vec__18260,(0),null);
var y_offset = cljs.core.nth.call(null,vec__18260,(1),null);
var shape_18275 = cljs.core.nth.call(null,shapes,end);
var map__18261_18276 = shape_18275;
var map__18261_18277__$1 = ((cljs.core.seq_QMARK_.call(null,map__18261_18276))?cljs.core.apply.call(null,cljs.core.hash_map,map__18261_18276):map__18261_18276);
var vec__18262_18278 = cljs.core.get.call(null,map__18261_18277__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_18279 = cljs.core.nth.call(null,vec__18262_18278,(0),null);
var y_18280 = cljs.core.nth.call(null,vec__18262_18278,(1),null);
var __18281__$3 = cljs.core.nth.call(null,vec__18262_18278,(2),null);
var n_18282 = cljs.core.get.call(null,map__18261_18277__$1,new cljs.core.Keyword(null,"n","n",562130025));
var wiring_18283 = cljs.core.get.call(null,map__18261_18277__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var xs_18284 = ((x_18279 * sf) + x_offset);
var ys_18285 = ((y_18280 * sf) + y_offset);
var vtxs_18286 = cljstemplate.shape.vertices.call(null,shape_18275,xs_18284,ys_18285,sf);
var radius_18287 = (cljstemplate.shape.radii.call(null,n_18282) * sf);
var radius_3rd_18288 = (radius_18287 / (3));
var radius_5th_18289 = (radius_18287 / (5));
var radius_15th_18290 = (radius_18287 / (15));
var radius_20th_18291 = (radius_18287 / (30));
var channel_count_18292 = cljs.core.count.call(null,channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_18286);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18284,ys_18285,radius_18287], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_18275,map__18261_18276,map__18261_18277__$1,vec__18262_18278,x_18279,y_18280,__18281__$3,n_18282,wiring_18283,xs_18284,ys_18285,vtxs_18286,radius_18287,radius_3rd_18288,radius_5th_18289,radius_15th_18290,radius_20th_18291,channel_count_18292,map__18257,map__18257__$1,level,shapes,vec__18258,end,_,___$1,channels,vec__18259,___$2,bdr,fg,vec__18260,x_offset,y_offset){
return (function iter__18263(s__18264){
return (new cljs.core.LazySeq(null,((function (shape_18275,map__18261_18276,map__18261_18277__$1,vec__18262_18278,x_18279,y_18280,__18281__$3,n_18282,wiring_18283,xs_18284,ys_18285,vtxs_18286,radius_18287,radius_3rd_18288,radius_5th_18289,radius_15th_18290,radius_20th_18291,channel_count_18292,map__18257,map__18257__$1,level,shapes,vec__18258,end,_,___$1,channels,vec__18259,___$2,bdr,fg,vec__18260,x_offset,y_offset){
return (function (){
var s__18264__$1 = s__18264;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18264__$1);
if(temp__4126__auto__){
var s__18264__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18264__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__18264__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__18266 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__18265 = (0);
while(true){
if((i__18265 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.call(null,c__4565__auto__,i__18265);
cljs.core.chunk_append.call(null,b__18266,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)));

var G__18293 = (i__18265 + (1));
i__18265 = G__18293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18266),iter__18263.call(null,cljs.core.chunk_rest.call(null,s__18264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18266),null);
}
} else {
var channel_wiring = cljs.core.first.call(null,s__18264__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)),iter__18263.call(null,cljs.core.rest.call(null,s__18264__$2)));
}
} else {
return null;
}
break;
}
});})(shape_18275,map__18261_18276,map__18261_18277__$1,vec__18262_18278,x_18279,y_18280,__18281__$3,n_18282,wiring_18283,xs_18284,ys_18285,vtxs_18286,radius_18287,radius_3rd_18288,radius_5th_18289,radius_15th_18290,radius_20th_18291,channel_count_18292,map__18257,map__18257__$1,level,shapes,vec__18258,end,_,___$1,channels,vec__18259,___$2,bdr,fg,vec__18260,x_offset,y_offset))
,null,null));
});})(shape_18275,map__18261_18276,map__18261_18277__$1,vec__18262_18278,x_18279,y_18280,__18281__$3,n_18282,wiring_18283,xs_18284,ys_18285,vtxs_18286,radius_18287,radius_3rd_18288,radius_5th_18289,radius_15th_18290,radius_20th_18291,channel_count_18292,map__18257,map__18257__$1,level,shapes,vec__18258,end,_,___$1,channels,vec__18259,___$2,bdr,fg,vec__18260,x_offset,y_offset))
;
return iter__4567__auto__.call(null,wiring_18283);
})())){
var seq__18267_18294 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(5)));
var chunk__18268_18295 = null;
var count__18269_18296 = (0);
var i__18270_18297 = (0);
while(true){
if((i__18270_18297 < count__18269_18296)){
var i_18298 = cljs.core._nth.call(null,chunk__18268_18295,i__18270_18297);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18284,ys_18285,(radius_18287 / ((5) - i_18298))], null),cljs.core.conj.call(null,fg,((1) / i_18298)));

var G__18299 = seq__18267_18294;
var G__18300 = chunk__18268_18295;
var G__18301 = count__18269_18296;
var G__18302 = (i__18270_18297 + (1));
seq__18267_18294 = G__18299;
chunk__18268_18295 = G__18300;
count__18269_18296 = G__18301;
i__18270_18297 = G__18302;
continue;
} else {
var temp__4126__auto___18303 = cljs.core.seq.call(null,seq__18267_18294);
if(temp__4126__auto___18303){
var seq__18267_18304__$1 = temp__4126__auto___18303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18267_18304__$1)){
var c__4598__auto___18305 = cljs.core.chunk_first.call(null,seq__18267_18304__$1);
var G__18306 = cljs.core.chunk_rest.call(null,seq__18267_18304__$1);
var G__18307 = c__4598__auto___18305;
var G__18308 = cljs.core.count.call(null,c__4598__auto___18305);
var G__18309 = (0);
seq__18267_18294 = G__18306;
chunk__18268_18295 = G__18307;
count__18269_18296 = G__18308;
i__18270_18297 = G__18309;
continue;
} else {
var i_18310 = cljs.core.first.call(null,seq__18267_18304__$1);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_18284,ys_18285,(radius_18287 / ((5) - i_18310))], null),cljs.core.conj.call(null,fg,((1) / i_18310)));

var G__18311 = cljs.core.next.call(null,seq__18267_18304__$1);
var G__18312 = null;
var G__18313 = (0);
var G__18314 = (0);
seq__18267_18294 = G__18311;
chunk__18268_18295 = G__18312;
count__18269_18296 = G__18313;
i__18270_18297 = G__18314;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,done,true);

cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"end","end",-268185958),context,xs_18284,ys_18285,radius_18287,timestamp);
} else {
}

var seq__18271_18315 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_18292));
var chunk__18272_18316 = null;
var count__18273_18317 = (0);
var i__18274_18318 = (0);
while(true){
if((i__18274_18318 < count__18273_18317)){
var i_18319 = cljs.core._nth.call(null,chunk__18272_18316,i__18274_18318);
var angle_18320 = ((i_18319 * (cljstemplate.constance.TAU / channel_count_18292)) - (timestamp / (3000)));
var xi_18321 = (xs_18284 + (radius_3rd_18288 * Math.sin.call(null,angle_18320)));
var yi_18322 = (ys_18285 + (radius_3rd_18288 * Math.cos.call(null,angle_18320)));
var on_18323 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_18283,i_18319)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_18321,yi_18322,radius_5th_18289], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_18319),(cljs.core.truth_(on_18323)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_18321,yi_18322,radius_5th_18289], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_18319),(cljs.core.truth_(on_18323)?0.75:0.25)));

if(cljs.core.truth_(on_18323)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_18321 - radius_15th_18290),(yi_18322 - radius_15th_18290),radius_15th_18290], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_18321 - radius_15th_18290),(yi_18322 - radius_15th_18290),radius_20th_18291], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__18324 = seq__18271_18315;
var G__18325 = chunk__18272_18316;
var G__18326 = count__18273_18317;
var G__18327 = (i__18274_18318 + (1));
seq__18271_18315 = G__18324;
chunk__18272_18316 = G__18325;
count__18273_18317 = G__18326;
i__18274_18318 = G__18327;
continue;
} else {
var temp__4126__auto___18328 = cljs.core.seq.call(null,seq__18271_18315);
if(temp__4126__auto___18328){
var seq__18271_18329__$1 = temp__4126__auto___18328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18271_18329__$1)){
var c__4598__auto___18330 = cljs.core.chunk_first.call(null,seq__18271_18329__$1);
var G__18331 = cljs.core.chunk_rest.call(null,seq__18271_18329__$1);
var G__18332 = c__4598__auto___18330;
var G__18333 = cljs.core.count.call(null,c__4598__auto___18330);
var G__18334 = (0);
seq__18271_18315 = G__18331;
chunk__18272_18316 = G__18332;
count__18273_18317 = G__18333;
i__18274_18318 = G__18334;
continue;
} else {
var i_18335 = cljs.core.first.call(null,seq__18271_18329__$1);
var angle_18336 = ((i_18335 * (cljstemplate.constance.TAU / channel_count_18292)) - (timestamp / (3000)));
var xi_18337 = (xs_18284 + (radius_3rd_18288 * Math.sin.call(null,angle_18336)));
var yi_18338 = (ys_18285 + (radius_3rd_18288 * Math.cos.call(null,angle_18336)));
var on_18339 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_18283,i_18335)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_18337,yi_18338,radius_5th_18289], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_18335),(cljs.core.truth_(on_18339)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_18337,yi_18338,radius_5th_18289], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_18335),(cljs.core.truth_(on_18339)?0.75:0.25)));

if(cljs.core.truth_(on_18339)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_18337 - radius_15th_18290),(yi_18338 - radius_15th_18290),radius_15th_18290], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_18337 - radius_15th_18290),(yi_18338 - radius_15th_18290),radius_20th_18291], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__18340 = cljs.core.next.call(null,seq__18271_18329__$1);
var G__18341 = null;
var G__18342 = (0);
var G__18343 = (0);
seq__18271_18315 = G__18340;
chunk__18272_18316 = G__18341;
count__18273_18317 = G__18342;
i__18274_18318 = G__18343;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_18286);

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
var vec__18345 = temp__4124__auto__;
var args = cljs.core.nth.call(null,vec__18345,(0),null);
var cached_value = cljs.core.nth.call(null,vec__18345,(1),null);
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

var seq__18350 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__18351 = null;
var count__18352 = (0);
var i__18353 = (0);
while(true){
if((i__18353 < count__18352)){
var i = cljs.core._nth.call(null,chunk__18351,i__18353);
var start_18354 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_18355 = (start_18354 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_18354,end_18355,true);

context.closePath();

context.fill();

var G__18356 = seq__18350;
var G__18357 = chunk__18351;
var G__18358 = count__18352;
var G__18359 = (i__18353 + (1));
seq__18350 = G__18356;
chunk__18351 = G__18357;
count__18352 = G__18358;
i__18353 = G__18359;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18350);
if(temp__4126__auto__){
var seq__18350__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18350__$1)){
var c__4598__auto__ = cljs.core.chunk_first.call(null,seq__18350__$1);
var G__18360 = cljs.core.chunk_rest.call(null,seq__18350__$1);
var G__18361 = c__4598__auto__;
var G__18362 = cljs.core.count.call(null,c__4598__auto__);
var G__18363 = (0);
seq__18350 = G__18360;
chunk__18351 = G__18361;
count__18352 = G__18362;
i__18353 = G__18363;
continue;
} else {
var i = cljs.core.first.call(null,seq__18350__$1);
var start_18364 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_18365 = (start_18364 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_18364,end_18365,true);

context.closePath();

context.fill();

var G__18366 = cljs.core.next.call(null,seq__18350__$1);
var G__18367 = null;
var G__18368 = (0);
var G__18369 = (0);
seq__18350 = G__18366;
chunk__18351 = G__18367;
count__18352 = G__18368;
i__18353 = G__18369;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__18372,level,mouse,timestamp,done){
var vec__18376 = p__18372;
var context = cljs.core.nth.call(null,vec__18376,(0),null);
var width = cljs.core.nth.call(null,vec__18376,(1),null);
var height = cljs.core.nth.call(null,vec__18376,(2),null);
var sf = cljstemplate.shape.scale_factor.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(level);
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(level);
var vec__18377 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.call(null,vec__18377,(0),null);
var vec__18378 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.call(null,vec__18378,(0),null);
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

return cljstemplate.shape.render_end.call(null,cljstemplate.shape.render_start.call(null,cljs.core.update.call(null,cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__18377,start,vec__18378,end,ends,vec__18376,context,width,height){
return (function (p1__18370_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_at_rest,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__18370_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__18377,start,vec__18378,end,ends,vec__18376,context,width,height))
),new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__18377,start,vec__18378,end,ends,vec__18376,context,width,height){
return (function (p1__18371_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_in_motion,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__18371_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__18377,start,vec__18378,end,ends,vec__18376,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});

//# sourceMappingURL=shape.js.map