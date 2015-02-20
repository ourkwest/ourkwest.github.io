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
var G__9750 = (idx + (1));
var G__9751 = cljs.core.rest.call(null,items);
idx = G__9750;
items = G__9751;
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
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__9752){
var vec__9754 = p__9752;
var in$ = cljs.core.nth.call(null,vec__9754,(0),null);
var out = cljs.core.nth.call(null,vec__9754,(1),null);
var _ = cljs.core.nth.call(null,vec__9754,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__9754,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),(function (p1__9755_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_channel_connections,p1__9755_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__9756_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_shape_connections,p1__9756_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,(2),direction_id], null),new cljs.core.Keyword(null,"on","on",173873944));
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__9757,index){
var vec__9760 = p__9757;
var from = cljs.core.nth.call(null,vec__9760,(0),null);
var onto = cljs.core.nth.call(null,vec__9760,(1),null);
var vec__9761 = cljs.core.nth.call(null,vec__9760,(2),null);
var backward = cljs.core.nth.call(null,vec__9761,(0),null);
var forward = cljs.core.nth.call(null,vec__9761,(1),null);
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
return (function (p1__9762_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__9762_SHARP_);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__9764){
while(true){
var vec__9767 = p__9764;
var vec__9768 = cljs.core.nth.call(null,vec__9767,(0),null);
var shape_id = cljs.core.nth.call(null,vec__9768,(0),null);
var channel_id = cljs.core.nth.call(null,vec__9768,(1),null);
var wire_id = cljs.core.nth.call(null,vec__9768,(2),null);
var direction_id = cljs.core.nth.call(null,vec__9768,(3),null);
var seeds = cljs.core.nthnext.call(null,vec__9767,(1));
var new_shapes = cljs.core.update.call(null,shapes,shape_id,((function (shapes,p__9764,vec__9767,vec__9768,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__9763_SHARP_){
return cljstemplate.shape.switch_on.call(null,p1__9763_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__9764,vec__9767,vec__9768,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.call(null,seeds,cljstemplate.shape.more_seeds.call(null,new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq.call(null,new_seeds)){
var G__9769 = new_shapes;
var G__9770 = new_seeds;
shapes = G__9769;
p__9764 = G__9770;
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
return (function (p1__9771_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__9771_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))),cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__9772_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__9772_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.call(null,cljstemplate.shape.seed_lights,cljs.core.repeat.call(null,level),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.call(null));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__9773_SHARP_){
return cljstemplate.shape.populate_shape_connections.call(null,p1__9773_SHARP_,cljstemplate.shape.seed_light.call(null,level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections.call(null,cljstemplate.shape.clear_connections.call(null,level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__9774,p__9775){
var vec__9778 = p__9774;
var a = cljs.core.nth.call(null,vec__9778,(0),null);
var b = cljs.core.nth.call(null,vec__9778,(1),null);
var c = cljs.core.nth.call(null,vec__9778,(2),null);
var vec__9779 = p__9775;
var d = cljs.core.nth.call(null,vec__9779,(0),null);
var f = cljs.core.nth.call(null,vec__9779,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__9780){
var map__9783 = p__9780;
var map__9783__$1 = ((cljs.core.seq_QMARK_.call(null,map__9783))?cljs.core.apply.call(null,cljs.core.hash_map,map__9783):map__9783);
var shape = map__9783__$1;
var map__9784 = cljs.core.get.call(null,map__9783__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__9784__$1 = ((cljs.core.seq_QMARK_.call(null,map__9784))?cljs.core.apply.call(null,cljs.core.hash_map,map__9784):map__9784);
var start = cljs.core.get.call(null,map__9784__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__9784__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start_time = cljs.core.get.call(null,map__9784__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var end_time = cljs.core.get.call(null,map__9784__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
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
return (function (p1__9785_SHARP_){
return cljs.core.map.call(null,r_fn,p1__9785_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__9786){
var vec__9788 = p__9786;
var _ = cljs.core.nth.call(null,vec__9788,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9788,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__9788,(2),null);
var timestamp = cljs.core.nth.call(null,vec__9788,(3),null);
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
cljstemplate.shape.rgb_str = (function rgb_str(p__9789){
var vec__9791 = p__9789;
var r = cljs.core.nth.call(null,vec__9791,(0),null);
var g = cljs.core.nth.call(null,vec__9791,(1),null);
var b = cljs.core.nth.call(null,vec__9791,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__9792){
var vec__9794 = p__9792;
var r = cljs.core.nth.call(null,vec__9794,(0),null);
var g = cljs.core.nth.call(null,vec__9794,(1),null);
var b = cljs.core.nth.call(null,vec__9794,(2),null);
var a = cljs.core.nth.call(null,vec__9794,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__9796 = temp__4124__auto__;
var x = cljs.core.nth.call(null,vec__9796,(0),null);
var y = cljs.core.nth.call(null,vec__9796,(1),null);
var clicked = cljs.core.nth.call(null,vec__9796,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__9798,xs,ys,sf){
var map__9805 = p__9798;
var map__9805__$1 = ((cljs.core.seq_QMARK_.call(null,map__9805))?cljs.core.apply.call(null,cljs.core.hash_map,map__9805):map__9805);
var n = cljs.core.get.call(null,map__9805__$1,new cljs.core.Keyword(null,"n","n",562130025));
var vec__9806 = cljs.core.get.call(null,map__9805__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__9806,(0),null);
var y = cljs.core.nth.call(null,vec__9806,(1),null);
var r = cljs.core.nth.call(null,vec__9806,(2),null);
var rotation = cljs.core.get.call(null,map__9805__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
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
var gammas = cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (alpha,delta,radius,beta,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation){
return (function (p1__9797_SHARP_){
return (p1__9797_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation){
return (function iter__9807(s__9808){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation){
return (function (){
var s__9808__$1 = s__9808;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9808__$1);
if(temp__4126__auto__){
var s__9808__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9808__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__9808__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__9810 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__9809 = (0);
while(true){
if((i__9809 < size__4566__auto__)){
var gamma = cljs.core._nth.call(null,c__4565__auto__,i__9809);
cljs.core.chunk_append.call(null,b__9810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null));

var G__9811 = (i__9809 + (1));
i__9809 = G__9811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9810),iter__9807.call(null,cljs.core.chunk_rest.call(null,s__9808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9810),null);
}
} else {
var gamma = cljs.core.first.call(null,s__9808__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null),iter__9807.call(null,cljs.core.rest.call(null,s__9808__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__9805,map__9805__$1,n,vec__9806,x,y,r,rotation))
;
return iter__4567__auto__.call(null,gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__9812){
var vec__9821 = p__9812;
var vec__9822 = cljs.core.nth.call(null,vec__9821,(0),null);
var x1 = cljs.core.nth.call(null,vec__9822,(0),null);
var y1 = cljs.core.nth.call(null,vec__9822,(1),null);
var rest = cljs.core.nthnext.call(null,vec__9821,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__9823_9829 = cljs.core.seq.call(null,rest);
var chunk__9824_9830 = null;
var count__9825_9831 = (0);
var i__9826_9832 = (0);
while(true){
if((i__9826_9832 < count__9825_9831)){
var vec__9827_9833 = cljs.core._nth.call(null,chunk__9824_9830,i__9826_9832);
var xr_9834 = cljs.core.nth.call(null,vec__9827_9833,(0),null);
var yr_9835 = cljs.core.nth.call(null,vec__9827_9833,(1),null);
context.lineTo(xr_9834,yr_9835);

var G__9836 = seq__9823_9829;
var G__9837 = chunk__9824_9830;
var G__9838 = count__9825_9831;
var G__9839 = (i__9826_9832 + (1));
seq__9823_9829 = G__9836;
chunk__9824_9830 = G__9837;
count__9825_9831 = G__9838;
i__9826_9832 = G__9839;
continue;
} else {
var temp__4126__auto___9840 = cljs.core.seq.call(null,seq__9823_9829);
if(temp__4126__auto___9840){
var seq__9823_9841__$1 = temp__4126__auto___9840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9823_9841__$1)){
var c__4598__auto___9842 = cljs.core.chunk_first.call(null,seq__9823_9841__$1);
var G__9843 = cljs.core.chunk_rest.call(null,seq__9823_9841__$1);
var G__9844 = c__4598__auto___9842;
var G__9845 = cljs.core.count.call(null,c__4598__auto___9842);
var G__9846 = (0);
seq__9823_9829 = G__9843;
chunk__9824_9830 = G__9844;
count__9825_9831 = G__9845;
i__9826_9832 = G__9846;
continue;
} else {
var vec__9828_9847 = cljs.core.first.call(null,seq__9823_9841__$1);
var xr_9848 = cljs.core.nth.call(null,vec__9828_9847,(0),null);
var yr_9849 = cljs.core.nth.call(null,vec__9828_9847,(1),null);
context.lineTo(xr_9848,yr_9849);

var G__9850 = cljs.core.next.call(null,seq__9823_9841__$1);
var G__9851 = null;
var G__9852 = (0);
var G__9853 = (0);
seq__9823_9829 = G__9850;
chunk__9824_9830 = G__9851;
count__9825_9831 = G__9852;
i__9826_9832 = G__9853;
continue;
}
} else {
}
}
break;
}

return context.lineTo(x1,y1);
});
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__9856,p__9857,channels,p__9858,p__9859,id,timestamp){
var vec__9949 = p__9856;
var x_offset = cljs.core.nth.call(null,vec__9949,(0),null);
var y_offset = cljs.core.nth.call(null,vec__9949,(1),null);
var vec__9950 = p__9857;
var mx = cljs.core.nth.call(null,vec__9950,(0),null);
var my = cljs.core.nth.call(null,vec__9950,(1),null);
var mouse = vec__9950;
var vec__9951 = p__9858;
var _ = cljs.core.nth.call(null,vec__9951,(0),null);
var bdr = cljs.core.nth.call(null,vec__9951,(1),null);
var fg = cljs.core.nth.call(null,vec__9951,(2),null);
var map__9952 = p__9859;
var map__9952__$1 = ((cljs.core.seq_QMARK_.call(null,map__9952))?cljs.core.apply.call(null,cljs.core.hash_map,map__9952):map__9952);
var shape = map__9952__$1;
var vec__9953 = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__9953,(0),null);
var y = cljs.core.nth.call(null,vec__9953,(1),null);
var r = cljs.core.nth.call(null,vec__9953,(2),null);
var n = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotation = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var wiring = cljs.core.get.call(null,map__9952__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
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
var gammas = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,vec__9949,x_offset,y_offset,vec__9950,mx,my,mouse,vec__9951,_,bdr,fg,map__9952,map__9952__$1,shape,vec__9953,x,y,r,n,rotation,wiring){
return (function (p1__9854_SHARP_){
return (p1__9854_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__9949,x_offset,y_offset,vec__9950,mx,my,mouse,vec__9951,_,bdr,fg,map__9952,map__9952__$1,shape,vec__9953,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__9949,x_offset,y_offset,vec__9950,mx,my,mouse,vec__9951,_,bdr,fg,map__9952,map__9952__$1,shape,vec__9953,x,y,r,n,rotation,wiring){
return (function (p1__9855_SHARP_){
return (p1__9855_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__9949,x_offset,y_offset,vec__9950,mx,my,mouse,vec__9951,_,bdr,fg,map__9952,map__9952__$1,shape,vec__9953,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__9954_10038 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__9955_10039 = null;
var count__9956_10040 = (0);
var i__9957_10041 = (0);
while(true){
if((i__9957_10041 < count__9956_10040)){
var gamma_10042 = cljs.core._nth.call(null,chunk__9955_10039,i__9957_10041);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_10042))),(ys + (radius * Math.cos.call(null,gamma_10042))));

var G__10043 = seq__9954_10038;
var G__10044 = chunk__9955_10039;
var G__10045 = count__9956_10040;
var G__10046 = (i__9957_10041 + (1));
seq__9954_10038 = G__10043;
chunk__9955_10039 = G__10044;
count__9956_10040 = G__10045;
i__9957_10041 = G__10046;
continue;
} else {
var temp__4126__auto___10047 = cljs.core.seq.call(null,seq__9954_10038);
if(temp__4126__auto___10047){
var seq__9954_10048__$1 = temp__4126__auto___10047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9954_10048__$1)){
var c__4598__auto___10049 = cljs.core.chunk_first.call(null,seq__9954_10048__$1);
var G__10050 = cljs.core.chunk_rest.call(null,seq__9954_10048__$1);
var G__10051 = c__4598__auto___10049;
var G__10052 = cljs.core.count.call(null,c__4598__auto___10049);
var G__10053 = (0);
seq__9954_10038 = G__10050;
chunk__9955_10039 = G__10051;
count__9956_10040 = G__10052;
i__9957_10041 = G__10053;
continue;
} else {
var gamma_10054 = cljs.core.first.call(null,seq__9954_10048__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_10054))),(ys + (radius * Math.cos.call(null,gamma_10054))));

var G__10055 = cljs.core.next.call(null,seq__9954_10048__$1);
var G__10056 = null;
var G__10057 = (0);
var G__10058 = (0);
seq__9954_10038 = G__10055;
chunk__9955_10039 = G__10056;
count__9956_10040 = G__10057;
i__9957_10041 = G__10058;
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
var seq__9958_10059 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var chunk__9959_10060 = null;
var count__9960_10061 = (0);
var i__9961_10062 = (0);
while(true){
if((i__9961_10062 < count__9960_10061)){
var ch_10063 = cljs.core._nth.call(null,chunk__9959_10060,i__9961_10062);
var channel_10064 = cljs.core.nth.call(null,channels,ch_10063);
var channel_wiring_10065 = cljs.core.nth.call(null,wiring,ch_10063);
var ch_pos_10066 = ((ch_10063 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__9962_10067 = cljs.core.seq.call(null,channel_wiring_10065);
var chunk__9963_10068 = null;
var count__9964_10069 = (0);
var i__9965_10070 = (0);
while(true){
if((i__9965_10070 < count__9964_10069)){
var vec__9966_10071 = cljs.core._nth.call(null,chunk__9963_10068,i__9965_10070);
var from_10072 = cljs.core.nth.call(null,vec__9966_10071,(0),null);
var onto_10073 = cljs.core.nth.call(null,vec__9966_10071,(1),null);
var vec__9967_10074 = cljs.core.nth.call(null,vec__9966_10071,(2),null);
var fw_10075 = cljs.core.nth.call(null,vec__9967_10074,(0),null);
var bw_10076 = cljs.core.nth.call(null,vec__9967_10074,(1),null);
var switched_10077 = vec__9967_10074;
context.beginPath();

var vec__9968_10078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10072)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10072))], null);
var from_x_10079 = cljs.core.nth.call(null,vec__9968_10078,(0),null);
var from_y_10080 = cljs.core.nth.call(null,vec__9968_10078,(1),null);
var vec__9969_10081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10073)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10073))], null);
var onto_x_10082 = cljs.core.nth.call(null,vec__9969_10081,(0),null);
var onto_y_10083 = cljs.core.nth.call(null,vec__9969_10081,(1),null);
var vec__9970_10084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10072)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10072)))], null);
var from_x_p_10085 = cljs.core.nth.call(null,vec__9970_10084,(0),null);
var from_y_p_10086 = cljs.core.nth.call(null,vec__9970_10084,(1),null);
var vec__9971_10087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10073)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10073)))], null);
var onto_x_p_10088 = cljs.core.nth.call(null,vec__9971_10087,(0),null);
var onto_y_p_10089 = cljs.core.nth.call(null,vec__9971_10087,(1),null);
var vec__9972_10090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_10079)),(ys + (pad * from_y_10080))], null);
var xa_10091 = cljs.core.nth.call(null,vec__9972_10090,(0),null);
var ya_10092 = cljs.core.nth.call(null,vec__9972_10090,(1),null);
var vec__9973_10093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_10079)) + (ch_pos_10066 * from_x_p_10085)),((ys + ((0.5 * inner_radius) * from_y_10080)) + (ch_pos_10066 * from_y_p_10086))], null);
var xb_10094 = cljs.core.nth.call(null,vec__9973_10093,(0),null);
var yb_10095 = cljs.core.nth.call(null,vec__9973_10093,(1),null);
var vec__9974_10096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_10082)) + (ch_pos_10066 * onto_x_p_10088)),((ys + ((0.5 * inner_radius) * onto_y_10083)) + (ch_pos_10066 * onto_y_p_10089))], null);
var xc_10097 = cljs.core.nth.call(null,vec__9974_10096,(0),null);
var yc_10098 = cljs.core.nth.call(null,vec__9974_10096,(1),null);
var vec__9975_10099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_10082)),(ys + (pad * onto_y_10083))], null);
var xd_10100 = cljs.core.nth.call(null,vec__9975_10099,(0),null);
var yd_10101 = cljs.core.nth.call(null,vec__9975_10099,(1),null);
context.moveTo(xa_10091,ya_10092);

context.bezierCurveTo(xb_10094,yb_10095,xc_10097,yc_10098,xd_10100,yd_10101);

var offset_10102 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_10103 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_10077))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_10064,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__9976_10104 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_10075,offset_10102], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_10076,(- offset_10102)], null)], null));
var chunk__9977_10105 = null;
var count__9978_10106 = (0);
var i__9979_10107 = (0);
while(true){
if((i__9979_10107 < count__9978_10106)){
var vec__9980_10108 = cljs.core._nth.call(null,chunk__9977_10105,i__9979_10107);
var direction_10109 = cljs.core.nth.call(null,vec__9980_10108,(0),null);
var os_10110 = cljs.core.nth.call(null,vec__9980_10108,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10109)){
context.setLineDash(lineDash_10103);

context.lineDashOffset = os_10110;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10111 = seq__9976_10104;
var G__10112 = chunk__9977_10105;
var G__10113 = count__9978_10106;
var G__10114 = (i__9979_10107 + (1));
seq__9976_10104 = G__10111;
chunk__9977_10105 = G__10112;
count__9978_10106 = G__10113;
i__9979_10107 = G__10114;
continue;
} else {
var temp__4126__auto___10115 = cljs.core.seq.call(null,seq__9976_10104);
if(temp__4126__auto___10115){
var seq__9976_10116__$1 = temp__4126__auto___10115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9976_10116__$1)){
var c__4598__auto___10117 = cljs.core.chunk_first.call(null,seq__9976_10116__$1);
var G__10118 = cljs.core.chunk_rest.call(null,seq__9976_10116__$1);
var G__10119 = c__4598__auto___10117;
var G__10120 = cljs.core.count.call(null,c__4598__auto___10117);
var G__10121 = (0);
seq__9976_10104 = G__10118;
chunk__9977_10105 = G__10119;
count__9978_10106 = G__10120;
i__9979_10107 = G__10121;
continue;
} else {
var vec__9981_10122 = cljs.core.first.call(null,seq__9976_10116__$1);
var direction_10123 = cljs.core.nth.call(null,vec__9981_10122,(0),null);
var os_10124 = cljs.core.nth.call(null,vec__9981_10122,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10123)){
context.setLineDash(lineDash_10103);

context.lineDashOffset = os_10124;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10125 = cljs.core.next.call(null,seq__9976_10116__$1);
var G__10126 = null;
var G__10127 = (0);
var G__10128 = (0);
seq__9976_10104 = G__10125;
chunk__9977_10105 = G__10126;
count__9978_10106 = G__10127;
i__9979_10107 = G__10128;
continue;
}
} else {
}
}
break;
}

var G__10129 = seq__9962_10067;
var G__10130 = chunk__9963_10068;
var G__10131 = count__9964_10069;
var G__10132 = (i__9965_10070 + (1));
seq__9962_10067 = G__10129;
chunk__9963_10068 = G__10130;
count__9964_10069 = G__10131;
i__9965_10070 = G__10132;
continue;
} else {
var temp__4126__auto___10133 = cljs.core.seq.call(null,seq__9962_10067);
if(temp__4126__auto___10133){
var seq__9962_10134__$1 = temp__4126__auto___10133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9962_10134__$1)){
var c__4598__auto___10135 = cljs.core.chunk_first.call(null,seq__9962_10134__$1);
var G__10136 = cljs.core.chunk_rest.call(null,seq__9962_10134__$1);
var G__10137 = c__4598__auto___10135;
var G__10138 = cljs.core.count.call(null,c__4598__auto___10135);
var G__10139 = (0);
seq__9962_10067 = G__10136;
chunk__9963_10068 = G__10137;
count__9964_10069 = G__10138;
i__9965_10070 = G__10139;
continue;
} else {
var vec__9982_10140 = cljs.core.first.call(null,seq__9962_10134__$1);
var from_10141 = cljs.core.nth.call(null,vec__9982_10140,(0),null);
var onto_10142 = cljs.core.nth.call(null,vec__9982_10140,(1),null);
var vec__9983_10143 = cljs.core.nth.call(null,vec__9982_10140,(2),null);
var fw_10144 = cljs.core.nth.call(null,vec__9983_10143,(0),null);
var bw_10145 = cljs.core.nth.call(null,vec__9983_10143,(1),null);
var switched_10146 = vec__9983_10143;
context.beginPath();

var vec__9984_10147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10141)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10141))], null);
var from_x_10148 = cljs.core.nth.call(null,vec__9984_10147,(0),null);
var from_y_10149 = cljs.core.nth.call(null,vec__9984_10147,(1),null);
var vec__9985_10150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10142)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10142))], null);
var onto_x_10151 = cljs.core.nth.call(null,vec__9985_10150,(0),null);
var onto_y_10152 = cljs.core.nth.call(null,vec__9985_10150,(1),null);
var vec__9986_10153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10141)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10141)))], null);
var from_x_p_10154 = cljs.core.nth.call(null,vec__9986_10153,(0),null);
var from_y_p_10155 = cljs.core.nth.call(null,vec__9986_10153,(1),null);
var vec__9987_10156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10142)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10142)))], null);
var onto_x_p_10157 = cljs.core.nth.call(null,vec__9987_10156,(0),null);
var onto_y_p_10158 = cljs.core.nth.call(null,vec__9987_10156,(1),null);
var vec__9988_10159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_10148)),(ys + (pad * from_y_10149))], null);
var xa_10160 = cljs.core.nth.call(null,vec__9988_10159,(0),null);
var ya_10161 = cljs.core.nth.call(null,vec__9988_10159,(1),null);
var vec__9989_10162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_10148)) + (ch_pos_10066 * from_x_p_10154)),((ys + ((0.5 * inner_radius) * from_y_10149)) + (ch_pos_10066 * from_y_p_10155))], null);
var xb_10163 = cljs.core.nth.call(null,vec__9989_10162,(0),null);
var yb_10164 = cljs.core.nth.call(null,vec__9989_10162,(1),null);
var vec__9990_10165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_10151)) + (ch_pos_10066 * onto_x_p_10157)),((ys + ((0.5 * inner_radius) * onto_y_10152)) + (ch_pos_10066 * onto_y_p_10158))], null);
var xc_10166 = cljs.core.nth.call(null,vec__9990_10165,(0),null);
var yc_10167 = cljs.core.nth.call(null,vec__9990_10165,(1),null);
var vec__9991_10168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_10151)),(ys + (pad * onto_y_10152))], null);
var xd_10169 = cljs.core.nth.call(null,vec__9991_10168,(0),null);
var yd_10170 = cljs.core.nth.call(null,vec__9991_10168,(1),null);
context.moveTo(xa_10160,ya_10161);

context.bezierCurveTo(xb_10163,yb_10164,xc_10166,yc_10167,xd_10169,yd_10170);

var offset_10171 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_10172 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_10146))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_10064,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__9992_10173 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_10144,offset_10171], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_10145,(- offset_10171)], null)], null));
var chunk__9993_10174 = null;
var count__9994_10175 = (0);
var i__9995_10176 = (0);
while(true){
if((i__9995_10176 < count__9994_10175)){
var vec__9996_10177 = cljs.core._nth.call(null,chunk__9993_10174,i__9995_10176);
var direction_10178 = cljs.core.nth.call(null,vec__9996_10177,(0),null);
var os_10179 = cljs.core.nth.call(null,vec__9996_10177,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10178)){
context.setLineDash(lineDash_10172);

context.lineDashOffset = os_10179;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10180 = seq__9992_10173;
var G__10181 = chunk__9993_10174;
var G__10182 = count__9994_10175;
var G__10183 = (i__9995_10176 + (1));
seq__9992_10173 = G__10180;
chunk__9993_10174 = G__10181;
count__9994_10175 = G__10182;
i__9995_10176 = G__10183;
continue;
} else {
var temp__4126__auto___10184__$1 = cljs.core.seq.call(null,seq__9992_10173);
if(temp__4126__auto___10184__$1){
var seq__9992_10185__$1 = temp__4126__auto___10184__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9992_10185__$1)){
var c__4598__auto___10186 = cljs.core.chunk_first.call(null,seq__9992_10185__$1);
var G__10187 = cljs.core.chunk_rest.call(null,seq__9992_10185__$1);
var G__10188 = c__4598__auto___10186;
var G__10189 = cljs.core.count.call(null,c__4598__auto___10186);
var G__10190 = (0);
seq__9992_10173 = G__10187;
chunk__9993_10174 = G__10188;
count__9994_10175 = G__10189;
i__9995_10176 = G__10190;
continue;
} else {
var vec__9997_10191 = cljs.core.first.call(null,seq__9992_10185__$1);
var direction_10192 = cljs.core.nth.call(null,vec__9997_10191,(0),null);
var os_10193 = cljs.core.nth.call(null,vec__9997_10191,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10192)){
context.setLineDash(lineDash_10172);

context.lineDashOffset = os_10193;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10064);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10194 = cljs.core.next.call(null,seq__9992_10185__$1);
var G__10195 = null;
var G__10196 = (0);
var G__10197 = (0);
seq__9992_10173 = G__10194;
chunk__9993_10174 = G__10195;
count__9994_10175 = G__10196;
i__9995_10176 = G__10197;
continue;
}
} else {
}
}
break;
}

var G__10198 = cljs.core.next.call(null,seq__9962_10134__$1);
var G__10199 = null;
var G__10200 = (0);
var G__10201 = (0);
seq__9962_10067 = G__10198;
chunk__9963_10068 = G__10199;
count__9964_10069 = G__10200;
i__9965_10070 = G__10201;
continue;
}
} else {
}
}
break;
}

var G__10202 = seq__9958_10059;
var G__10203 = chunk__9959_10060;
var G__10204 = count__9960_10061;
var G__10205 = (i__9961_10062 + (1));
seq__9958_10059 = G__10202;
chunk__9959_10060 = G__10203;
count__9960_10061 = G__10204;
i__9961_10062 = G__10205;
continue;
} else {
var temp__4126__auto___10206 = cljs.core.seq.call(null,seq__9958_10059);
if(temp__4126__auto___10206){
var seq__9958_10207__$1 = temp__4126__auto___10206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9958_10207__$1)){
var c__4598__auto___10208 = cljs.core.chunk_first.call(null,seq__9958_10207__$1);
var G__10209 = cljs.core.chunk_rest.call(null,seq__9958_10207__$1);
var G__10210 = c__4598__auto___10208;
var G__10211 = cljs.core.count.call(null,c__4598__auto___10208);
var G__10212 = (0);
seq__9958_10059 = G__10209;
chunk__9959_10060 = G__10210;
count__9960_10061 = G__10211;
i__9961_10062 = G__10212;
continue;
} else {
var ch_10213 = cljs.core.first.call(null,seq__9958_10207__$1);
var channel_10214 = cljs.core.nth.call(null,channels,ch_10213);
var channel_wiring_10215 = cljs.core.nth.call(null,wiring,ch_10213);
var ch_pos_10216 = ((ch_10213 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__9998_10217 = cljs.core.seq.call(null,channel_wiring_10215);
var chunk__9999_10218 = null;
var count__10000_10219 = (0);
var i__10001_10220 = (0);
while(true){
if((i__10001_10220 < count__10000_10219)){
var vec__10002_10221 = cljs.core._nth.call(null,chunk__9999_10218,i__10001_10220);
var from_10222 = cljs.core.nth.call(null,vec__10002_10221,(0),null);
var onto_10223 = cljs.core.nth.call(null,vec__10002_10221,(1),null);
var vec__10003_10224 = cljs.core.nth.call(null,vec__10002_10221,(2),null);
var fw_10225 = cljs.core.nth.call(null,vec__10003_10224,(0),null);
var bw_10226 = cljs.core.nth.call(null,vec__10003_10224,(1),null);
var switched_10227 = vec__10003_10224;
context.beginPath();

var vec__10004_10228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10222)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10222))], null);
var from_x_10229 = cljs.core.nth.call(null,vec__10004_10228,(0),null);
var from_y_10230 = cljs.core.nth.call(null,vec__10004_10228,(1),null);
var vec__10005_10231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10223)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10223))], null);
var onto_x_10232 = cljs.core.nth.call(null,vec__10005_10231,(0),null);
var onto_y_10233 = cljs.core.nth.call(null,vec__10005_10231,(1),null);
var vec__10006_10234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10222)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10222)))], null);
var from_x_p_10235 = cljs.core.nth.call(null,vec__10006_10234,(0),null);
var from_y_p_10236 = cljs.core.nth.call(null,vec__10006_10234,(1),null);
var vec__10007_10237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10223)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10223)))], null);
var onto_x_p_10238 = cljs.core.nth.call(null,vec__10007_10237,(0),null);
var onto_y_p_10239 = cljs.core.nth.call(null,vec__10007_10237,(1),null);
var vec__10008_10240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_10229)),(ys + (pad * from_y_10230))], null);
var xa_10241 = cljs.core.nth.call(null,vec__10008_10240,(0),null);
var ya_10242 = cljs.core.nth.call(null,vec__10008_10240,(1),null);
var vec__10009_10243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_10229)) + (ch_pos_10216 * from_x_p_10235)),((ys + ((0.5 * inner_radius) * from_y_10230)) + (ch_pos_10216 * from_y_p_10236))], null);
var xb_10244 = cljs.core.nth.call(null,vec__10009_10243,(0),null);
var yb_10245 = cljs.core.nth.call(null,vec__10009_10243,(1),null);
var vec__10010_10246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_10232)) + (ch_pos_10216 * onto_x_p_10238)),((ys + ((0.5 * inner_radius) * onto_y_10233)) + (ch_pos_10216 * onto_y_p_10239))], null);
var xc_10247 = cljs.core.nth.call(null,vec__10010_10246,(0),null);
var yc_10248 = cljs.core.nth.call(null,vec__10010_10246,(1),null);
var vec__10011_10249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_10232)),(ys + (pad * onto_y_10233))], null);
var xd_10250 = cljs.core.nth.call(null,vec__10011_10249,(0),null);
var yd_10251 = cljs.core.nth.call(null,vec__10011_10249,(1),null);
context.moveTo(xa_10241,ya_10242);

context.bezierCurveTo(xb_10244,yb_10245,xc_10247,yc_10248,xd_10250,yd_10251);

var offset_10252 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_10253 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_10227))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_10214,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__10012_10254 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_10225,offset_10252], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_10226,(- offset_10252)], null)], null));
var chunk__10013_10255 = null;
var count__10014_10256 = (0);
var i__10015_10257 = (0);
while(true){
if((i__10015_10257 < count__10014_10256)){
var vec__10016_10258 = cljs.core._nth.call(null,chunk__10013_10255,i__10015_10257);
var direction_10259 = cljs.core.nth.call(null,vec__10016_10258,(0),null);
var os_10260 = cljs.core.nth.call(null,vec__10016_10258,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10259)){
context.setLineDash(lineDash_10253);

context.lineDashOffset = os_10260;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10261 = seq__10012_10254;
var G__10262 = chunk__10013_10255;
var G__10263 = count__10014_10256;
var G__10264 = (i__10015_10257 + (1));
seq__10012_10254 = G__10261;
chunk__10013_10255 = G__10262;
count__10014_10256 = G__10263;
i__10015_10257 = G__10264;
continue;
} else {
var temp__4126__auto___10265__$1 = cljs.core.seq.call(null,seq__10012_10254);
if(temp__4126__auto___10265__$1){
var seq__10012_10266__$1 = temp__4126__auto___10265__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10012_10266__$1)){
var c__4598__auto___10267 = cljs.core.chunk_first.call(null,seq__10012_10266__$1);
var G__10268 = cljs.core.chunk_rest.call(null,seq__10012_10266__$1);
var G__10269 = c__4598__auto___10267;
var G__10270 = cljs.core.count.call(null,c__4598__auto___10267);
var G__10271 = (0);
seq__10012_10254 = G__10268;
chunk__10013_10255 = G__10269;
count__10014_10256 = G__10270;
i__10015_10257 = G__10271;
continue;
} else {
var vec__10017_10272 = cljs.core.first.call(null,seq__10012_10266__$1);
var direction_10273 = cljs.core.nth.call(null,vec__10017_10272,(0),null);
var os_10274 = cljs.core.nth.call(null,vec__10017_10272,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10273)){
context.setLineDash(lineDash_10253);

context.lineDashOffset = os_10274;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10275 = cljs.core.next.call(null,seq__10012_10266__$1);
var G__10276 = null;
var G__10277 = (0);
var G__10278 = (0);
seq__10012_10254 = G__10275;
chunk__10013_10255 = G__10276;
count__10014_10256 = G__10277;
i__10015_10257 = G__10278;
continue;
}
} else {
}
}
break;
}

var G__10279 = seq__9998_10217;
var G__10280 = chunk__9999_10218;
var G__10281 = count__10000_10219;
var G__10282 = (i__10001_10220 + (1));
seq__9998_10217 = G__10279;
chunk__9999_10218 = G__10280;
count__10000_10219 = G__10281;
i__10001_10220 = G__10282;
continue;
} else {
var temp__4126__auto___10283__$1 = cljs.core.seq.call(null,seq__9998_10217);
if(temp__4126__auto___10283__$1){
var seq__9998_10284__$1 = temp__4126__auto___10283__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9998_10284__$1)){
var c__4598__auto___10285 = cljs.core.chunk_first.call(null,seq__9998_10284__$1);
var G__10286 = cljs.core.chunk_rest.call(null,seq__9998_10284__$1);
var G__10287 = c__4598__auto___10285;
var G__10288 = cljs.core.count.call(null,c__4598__auto___10285);
var G__10289 = (0);
seq__9998_10217 = G__10286;
chunk__9999_10218 = G__10287;
count__10000_10219 = G__10288;
i__10001_10220 = G__10289;
continue;
} else {
var vec__10018_10290 = cljs.core.first.call(null,seq__9998_10284__$1);
var from_10291 = cljs.core.nth.call(null,vec__10018_10290,(0),null);
var onto_10292 = cljs.core.nth.call(null,vec__10018_10290,(1),null);
var vec__10019_10293 = cljs.core.nth.call(null,vec__10018_10290,(2),null);
var fw_10294 = cljs.core.nth.call(null,vec__10019_10293,(0),null);
var bw_10295 = cljs.core.nth.call(null,vec__10019_10293,(1),null);
var switched_10296 = vec__10019_10293;
context.beginPath();

var vec__10020_10297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10291)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10291))], null);
var from_x_10298 = cljs.core.nth.call(null,vec__10020_10297,(0),null);
var from_y_10299 = cljs.core.nth.call(null,vec__10020_10297,(1),null);
var vec__10021_10300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10292)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10292))], null);
var onto_x_10301 = cljs.core.nth.call(null,vec__10021_10300,(0),null);
var onto_y_10302 = cljs.core.nth.call(null,vec__10021_10300,(1),null);
var vec__10022_10303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_10291)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_10291)))], null);
var from_x_p_10304 = cljs.core.nth.call(null,vec__10022_10303,(0),null);
var from_y_p_10305 = cljs.core.nth.call(null,vec__10022_10303,(1),null);
var vec__10023_10306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_10292)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_10292)))], null);
var onto_x_p_10307 = cljs.core.nth.call(null,vec__10023_10306,(0),null);
var onto_y_p_10308 = cljs.core.nth.call(null,vec__10023_10306,(1),null);
var vec__10024_10309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_10298)),(ys + (pad * from_y_10299))], null);
var xa_10310 = cljs.core.nth.call(null,vec__10024_10309,(0),null);
var ya_10311 = cljs.core.nth.call(null,vec__10024_10309,(1),null);
var vec__10025_10312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_10298)) + (ch_pos_10216 * from_x_p_10304)),((ys + ((0.5 * inner_radius) * from_y_10299)) + (ch_pos_10216 * from_y_p_10305))], null);
var xb_10313 = cljs.core.nth.call(null,vec__10025_10312,(0),null);
var yb_10314 = cljs.core.nth.call(null,vec__10025_10312,(1),null);
var vec__10026_10315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_10301)) + (ch_pos_10216 * onto_x_p_10307)),((ys + ((0.5 * inner_radius) * onto_y_10302)) + (ch_pos_10216 * onto_y_p_10308))], null);
var xc_10316 = cljs.core.nth.call(null,vec__10026_10315,(0),null);
var yc_10317 = cljs.core.nth.call(null,vec__10026_10315,(1),null);
var vec__10027_10318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_10301)),(ys + (pad * onto_y_10302))], null);
var xd_10319 = cljs.core.nth.call(null,vec__10027_10318,(0),null);
var yd_10320 = cljs.core.nth.call(null,vec__10027_10318,(1),null);
context.moveTo(xa_10310,ya_10311);

context.bezierCurveTo(xb_10313,yb_10314,xc_10316,yc_10317,xd_10319,yd_10320);

var offset_10321 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_10322 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_10296))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_10214,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__10028_10323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_10294,offset_10321], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_10295,(- offset_10321)], null)], null));
var chunk__10029_10324 = null;
var count__10030_10325 = (0);
var i__10031_10326 = (0);
while(true){
if((i__10031_10326 < count__10030_10325)){
var vec__10032_10327 = cljs.core._nth.call(null,chunk__10029_10324,i__10031_10326);
var direction_10328 = cljs.core.nth.call(null,vec__10032_10327,(0),null);
var os_10329 = cljs.core.nth.call(null,vec__10032_10327,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10328)){
context.setLineDash(lineDash_10322);

context.lineDashOffset = os_10329;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10330 = seq__10028_10323;
var G__10331 = chunk__10029_10324;
var G__10332 = count__10030_10325;
var G__10333 = (i__10031_10326 + (1));
seq__10028_10323 = G__10330;
chunk__10029_10324 = G__10331;
count__10030_10325 = G__10332;
i__10031_10326 = G__10333;
continue;
} else {
var temp__4126__auto___10334__$2 = cljs.core.seq.call(null,seq__10028_10323);
if(temp__4126__auto___10334__$2){
var seq__10028_10335__$1 = temp__4126__auto___10334__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10028_10335__$1)){
var c__4598__auto___10336 = cljs.core.chunk_first.call(null,seq__10028_10335__$1);
var G__10337 = cljs.core.chunk_rest.call(null,seq__10028_10335__$1);
var G__10338 = c__4598__auto___10336;
var G__10339 = cljs.core.count.call(null,c__4598__auto___10336);
var G__10340 = (0);
seq__10028_10323 = G__10337;
chunk__10029_10324 = G__10338;
count__10030_10325 = G__10339;
i__10031_10326 = G__10340;
continue;
} else {
var vec__10033_10341 = cljs.core.first.call(null,seq__10028_10335__$1);
var direction_10342 = cljs.core.nth.call(null,vec__10033_10341,(0),null);
var os_10343 = cljs.core.nth.call(null,vec__10033_10341,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_10342)){
context.setLineDash(lineDash_10322);

context.lineDashOffset = os_10343;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_10214);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__10344 = cljs.core.next.call(null,seq__10028_10335__$1);
var G__10345 = null;
var G__10346 = (0);
var G__10347 = (0);
seq__10028_10323 = G__10344;
chunk__10029_10324 = G__10345;
count__10030_10325 = G__10346;
i__10031_10326 = G__10347;
continue;
}
} else {
}
}
break;
}

var G__10348 = cljs.core.next.call(null,seq__9998_10284__$1);
var G__10349 = null;
var G__10350 = (0);
var G__10351 = (0);
seq__9998_10217 = G__10348;
chunk__9999_10218 = G__10349;
count__10000_10219 = G__10350;
i__10001_10220 = G__10351;
continue;
}
} else {
}
}
break;
}

var G__10352 = cljs.core.next.call(null,seq__9958_10207__$1);
var G__10353 = null;
var G__10354 = (0);
var G__10355 = (0);
seq__9958_10059 = G__10352;
chunk__9959_10060 = G__10353;
count__9960_10061 = G__10354;
i__9961_10062 = G__10355;
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

var seq__10034_10356 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__10035_10357 = null;
var count__10036_10358 = (0);
var i__10037_10359 = (0);
while(true){
if((i__10037_10359 < count__10036_10358)){
var gamma_10360 = cljs.core._nth.call(null,chunk__10035_10357,i__10037_10359);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_10360))),(ys + (radius * Math.cos.call(null,gamma_10360))));

var G__10361 = seq__10034_10356;
var G__10362 = chunk__10035_10357;
var G__10363 = count__10036_10358;
var G__10364 = (i__10037_10359 + (1));
seq__10034_10356 = G__10361;
chunk__10035_10357 = G__10362;
count__10036_10358 = G__10363;
i__10037_10359 = G__10364;
continue;
} else {
var temp__4126__auto___10365 = cljs.core.seq.call(null,seq__10034_10356);
if(temp__4126__auto___10365){
var seq__10034_10366__$1 = temp__4126__auto___10365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10034_10366__$1)){
var c__4598__auto___10367 = cljs.core.chunk_first.call(null,seq__10034_10366__$1);
var G__10368 = cljs.core.chunk_rest.call(null,seq__10034_10366__$1);
var G__10369 = c__4598__auto___10367;
var G__10370 = cljs.core.count.call(null,c__4598__auto___10367);
var G__10371 = (0);
seq__10034_10356 = G__10368;
chunk__10035_10357 = G__10369;
count__10036_10358 = G__10370;
i__10037_10359 = G__10371;
continue;
} else {
var gamma_10372 = cljs.core.first.call(null,seq__10034_10366__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_10372))),(ys + (radius * Math.cos.call(null,gamma_10372))));

var G__10373 = cljs.core.next.call(null,seq__10034_10366__$1);
var G__10374 = null;
var G__10375 = (0);
var G__10376 = (0);
seq__10034_10356 = G__10373;
chunk__10035_10357 = G__10374;
count__10036_10358 = G__10375;
i__10037_10359 = G__10376;
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
var vec__10378 = coords;
var x = cljs.core.nth.call(null,vec__10378,(0),null);
var y = cljs.core.nth.call(null,vec__10378,(1),null);
var d = cljs.core.nth.call(null,vec__10378,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__10380 = coords;
var x = cljs.core.nth.call(null,vec__10380,(0),null);
var y = cljs.core.nth.call(null,vec__10380,(1),null);
var d = cljs.core.nth.call(null,vec__10380,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__10381,context,timestamp,p__10382,sf,p__10383){
var map__10394 = p__10381;
var map__10394__$1 = ((cljs.core.seq_QMARK_.call(null,map__10394))?cljs.core.apply.call(null,cljs.core.hash_map,map__10394):map__10394);
var level = map__10394__$1;
var shapes = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__10395 = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__10395,(0),null);
var _ = cljs.core.nth.call(null,vec__10395,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__10395,(2),null);
var channels = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__10396 = p__10382;
var ___$2 = cljs.core.nth.call(null,vec__10396,(0),null);
var bdr = cljs.core.nth.call(null,vec__10396,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__10396,(2),null);
var vec__10397 = p__10383;
var x_offset = cljs.core.nth.call(null,vec__10397,(0),null);
var y_offset = cljs.core.nth.call(null,vec__10397,(1),null);
var shape_10404 = cljs.core.nth.call(null,shapes,start);
var map__10398_10405 = shape_10404;
var map__10398_10406__$1 = ((cljs.core.seq_QMARK_.call(null,map__10398_10405))?cljs.core.apply.call(null,cljs.core.hash_map,map__10398_10405):map__10398_10405);
var vec__10399_10407 = cljs.core.get.call(null,map__10398_10406__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_10408 = cljs.core.nth.call(null,vec__10399_10407,(0),null);
var y_10409 = cljs.core.nth.call(null,vec__10399_10407,(1),null);
var __10410__$4 = cljs.core.nth.call(null,vec__10399_10407,(2),null);
var n_10411 = cljs.core.get.call(null,map__10398_10406__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs_10412 = ((x_10408 * sf) + x_offset);
var ys_10413 = ((y_10409 * sf) + y_offset);
var vtxs_10414 = cljstemplate.shape.vertices.call(null,shape_10404,xs_10412,ys_10413,sf);
var radius_10415 = (cljstemplate.shape.radii.call(null,n_10411) * sf);
var many_channels_10416 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,((4) - cljs.core.count.call(null,channels)),channels));
var channel_count_10417 = cljs.core.count.call(null,many_channels_10416);
context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_10414);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10412,ys_10413,radius_10415], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__10400_10418 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_10417));
var chunk__10401_10419 = null;
var count__10402_10420 = (0);
var i__10403_10421 = (0);
while(true){
if((i__10403_10421 < count__10402_10420)){
var i_10422 = cljs.core._nth.call(null,chunk__10401_10419,i__10403_10421);
var f_10423 = cljs.core.mod.call(null,((timestamp / (100)) + (i_10422 * (radius_10415 / channel_count_10417))),radius_10415);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10412,ys_10413,f_10423], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_10416,i_10422),((1) - (f_10423 / radius_10415))));

var G__10424 = seq__10400_10418;
var G__10425 = chunk__10401_10419;
var G__10426 = count__10402_10420;
var G__10427 = (i__10403_10421 + (1));
seq__10400_10418 = G__10424;
chunk__10401_10419 = G__10425;
count__10402_10420 = G__10426;
i__10403_10421 = G__10427;
continue;
} else {
var temp__4126__auto___10428 = cljs.core.seq.call(null,seq__10400_10418);
if(temp__4126__auto___10428){
var seq__10400_10429__$1 = temp__4126__auto___10428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10400_10429__$1)){
var c__4598__auto___10430 = cljs.core.chunk_first.call(null,seq__10400_10429__$1);
var G__10431 = cljs.core.chunk_rest.call(null,seq__10400_10429__$1);
var G__10432 = c__4598__auto___10430;
var G__10433 = cljs.core.count.call(null,c__4598__auto___10430);
var G__10434 = (0);
seq__10400_10418 = G__10431;
chunk__10401_10419 = G__10432;
count__10402_10420 = G__10433;
i__10403_10421 = G__10434;
continue;
} else {
var i_10435 = cljs.core.first.call(null,seq__10400_10429__$1);
var f_10436 = cljs.core.mod.call(null,((timestamp / (100)) + (i_10435 * (radius_10415 / channel_count_10417))),radius_10415);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10412,ys_10413,f_10436], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_10416,i_10435),((1) - (f_10436 / radius_10415))));

var G__10437 = cljs.core.next.call(null,seq__10400_10429__$1);
var G__10438 = null;
var G__10439 = (0);
var G__10440 = (0);
seq__10400_10418 = G__10437;
chunk__10401_10419 = G__10438;
count__10402_10420 = G__10439;
i__10403_10421 = G__10440;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_10414);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__10441,context,timestamp,p__10442,sf,p__10443,done){
var map__10462 = p__10441;
var map__10462__$1 = ((cljs.core.seq_QMARK_.call(null,map__10462))?cljs.core.apply.call(null,cljs.core.hash_map,map__10462):map__10462);
var level = map__10462__$1;
var shapes = cljs.core.get.call(null,map__10462__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__10463 = cljs.core.get.call(null,map__10462__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__10463,(0),null);
var _ = cljs.core.nth.call(null,vec__10463,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__10463,(2),null);
var channels = cljs.core.get.call(null,map__10462__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__10464 = p__10442;
var ___$2 = cljs.core.nth.call(null,vec__10464,(0),null);
var bdr = cljs.core.nth.call(null,vec__10464,(1),null);
var fg = cljs.core.nth.call(null,vec__10464,(2),null);
var vec__10465 = p__10443;
var x_offset = cljs.core.nth.call(null,vec__10465,(0),null);
var y_offset = cljs.core.nth.call(null,vec__10465,(1),null);
var shape_10480 = cljs.core.nth.call(null,shapes,end);
var map__10466_10481 = shape_10480;
var map__10466_10482__$1 = ((cljs.core.seq_QMARK_.call(null,map__10466_10481))?cljs.core.apply.call(null,cljs.core.hash_map,map__10466_10481):map__10466_10481);
var vec__10467_10483 = cljs.core.get.call(null,map__10466_10482__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_10484 = cljs.core.nth.call(null,vec__10467_10483,(0),null);
var y_10485 = cljs.core.nth.call(null,vec__10467_10483,(1),null);
var __10486__$3 = cljs.core.nth.call(null,vec__10467_10483,(2),null);
var n_10487 = cljs.core.get.call(null,map__10466_10482__$1,new cljs.core.Keyword(null,"n","n",562130025));
var wiring_10488 = cljs.core.get.call(null,map__10466_10482__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var xs_10489 = ((x_10484 * sf) + x_offset);
var ys_10490 = ((y_10485 * sf) + y_offset);
var vtxs_10491 = cljstemplate.shape.vertices.call(null,shape_10480,xs_10489,ys_10490,sf);
var radius_10492 = (cljstemplate.shape.radii.call(null,n_10487) * sf);
var radius_3rd_10493 = (radius_10492 / (3));
var radius_5th_10494 = (radius_10492 / (5));
var radius_15th_10495 = (radius_10492 / (15));
var radius_20th_10496 = (radius_10492 / (30));
var channel_count_10497 = cljs.core.count.call(null,channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_10491);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10489,ys_10490,radius_10492], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_10480,map__10466_10481,map__10466_10482__$1,vec__10467_10483,x_10484,y_10485,__10486__$3,n_10487,wiring_10488,xs_10489,ys_10490,vtxs_10491,radius_10492,radius_3rd_10493,radius_5th_10494,radius_15th_10495,radius_20th_10496,channel_count_10497,map__10462,map__10462__$1,level,shapes,vec__10463,end,_,___$1,channels,vec__10464,___$2,bdr,fg,vec__10465,x_offset,y_offset){
return (function iter__10468(s__10469){
return (new cljs.core.LazySeq(null,((function (shape_10480,map__10466_10481,map__10466_10482__$1,vec__10467_10483,x_10484,y_10485,__10486__$3,n_10487,wiring_10488,xs_10489,ys_10490,vtxs_10491,radius_10492,radius_3rd_10493,radius_5th_10494,radius_15th_10495,radius_20th_10496,channel_count_10497,map__10462,map__10462__$1,level,shapes,vec__10463,end,_,___$1,channels,vec__10464,___$2,bdr,fg,vec__10465,x_offset,y_offset){
return (function (){
var s__10469__$1 = s__10469;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10469__$1);
if(temp__4126__auto__){
var s__10469__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10469__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__10469__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__10471 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__10470 = (0);
while(true){
if((i__10470 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.call(null,c__4565__auto__,i__10470);
cljs.core.chunk_append.call(null,b__10471,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)));

var G__10498 = (i__10470 + (1));
i__10470 = G__10498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10471),iter__10468.call(null,cljs.core.chunk_rest.call(null,s__10469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10471),null);
}
} else {
var channel_wiring = cljs.core.first.call(null,s__10469__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)),iter__10468.call(null,cljs.core.rest.call(null,s__10469__$2)));
}
} else {
return null;
}
break;
}
});})(shape_10480,map__10466_10481,map__10466_10482__$1,vec__10467_10483,x_10484,y_10485,__10486__$3,n_10487,wiring_10488,xs_10489,ys_10490,vtxs_10491,radius_10492,radius_3rd_10493,radius_5th_10494,radius_15th_10495,radius_20th_10496,channel_count_10497,map__10462,map__10462__$1,level,shapes,vec__10463,end,_,___$1,channels,vec__10464,___$2,bdr,fg,vec__10465,x_offset,y_offset))
,null,null));
});})(shape_10480,map__10466_10481,map__10466_10482__$1,vec__10467_10483,x_10484,y_10485,__10486__$3,n_10487,wiring_10488,xs_10489,ys_10490,vtxs_10491,radius_10492,radius_3rd_10493,radius_5th_10494,radius_15th_10495,radius_20th_10496,channel_count_10497,map__10462,map__10462__$1,level,shapes,vec__10463,end,_,___$1,channels,vec__10464,___$2,bdr,fg,vec__10465,x_offset,y_offset))
;
return iter__4567__auto__.call(null,wiring_10488);
})())){
var seq__10472_10499 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(5)));
var chunk__10473_10500 = null;
var count__10474_10501 = (0);
var i__10475_10502 = (0);
while(true){
if((i__10475_10502 < count__10474_10501)){
var i_10503 = cljs.core._nth.call(null,chunk__10473_10500,i__10475_10502);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10489,ys_10490,(radius_10492 / ((5) - i_10503))], null),cljs.core.conj.call(null,fg,((1) / i_10503)));

var G__10504 = seq__10472_10499;
var G__10505 = chunk__10473_10500;
var G__10506 = count__10474_10501;
var G__10507 = (i__10475_10502 + (1));
seq__10472_10499 = G__10504;
chunk__10473_10500 = G__10505;
count__10474_10501 = G__10506;
i__10475_10502 = G__10507;
continue;
} else {
var temp__4126__auto___10508 = cljs.core.seq.call(null,seq__10472_10499);
if(temp__4126__auto___10508){
var seq__10472_10509__$1 = temp__4126__auto___10508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10472_10509__$1)){
var c__4598__auto___10510 = cljs.core.chunk_first.call(null,seq__10472_10509__$1);
var G__10511 = cljs.core.chunk_rest.call(null,seq__10472_10509__$1);
var G__10512 = c__4598__auto___10510;
var G__10513 = cljs.core.count.call(null,c__4598__auto___10510);
var G__10514 = (0);
seq__10472_10499 = G__10511;
chunk__10473_10500 = G__10512;
count__10474_10501 = G__10513;
i__10475_10502 = G__10514;
continue;
} else {
var i_10515 = cljs.core.first.call(null,seq__10472_10509__$1);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_10489,ys_10490,(radius_10492 / ((5) - i_10515))], null),cljs.core.conj.call(null,fg,((1) / i_10515)));

var G__10516 = cljs.core.next.call(null,seq__10472_10509__$1);
var G__10517 = null;
var G__10518 = (0);
var G__10519 = (0);
seq__10472_10499 = G__10516;
chunk__10473_10500 = G__10517;
count__10474_10501 = G__10518;
i__10475_10502 = G__10519;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,done,true);

cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"end","end",-268185958),context,xs_10489,ys_10490,radius_10492,timestamp);
} else {
}

var seq__10476_10520 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_10497));
var chunk__10477_10521 = null;
var count__10478_10522 = (0);
var i__10479_10523 = (0);
while(true){
if((i__10479_10523 < count__10478_10522)){
var i_10524 = cljs.core._nth.call(null,chunk__10477_10521,i__10479_10523);
var angle_10525 = ((i_10524 * (cljstemplate.constance.TAU / channel_count_10497)) - (timestamp / (3000)));
var xi_10526 = (xs_10489 + (radius_3rd_10493 * Math.sin.call(null,angle_10525)));
var yi_10527 = (ys_10490 + (radius_3rd_10493 * Math.cos.call(null,angle_10525)));
var on_10528 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_10488,i_10524)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_10526,yi_10527,radius_5th_10494], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_10524),(cljs.core.truth_(on_10528)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_10526,yi_10527,radius_5th_10494], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_10524),(cljs.core.truth_(on_10528)?0.75:0.25)));

if(cljs.core.truth_(on_10528)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_10526 - radius_15th_10495),(yi_10527 - radius_15th_10495),radius_15th_10495], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_10526 - radius_15th_10495),(yi_10527 - radius_15th_10495),radius_20th_10496], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__10529 = seq__10476_10520;
var G__10530 = chunk__10477_10521;
var G__10531 = count__10478_10522;
var G__10532 = (i__10479_10523 + (1));
seq__10476_10520 = G__10529;
chunk__10477_10521 = G__10530;
count__10478_10522 = G__10531;
i__10479_10523 = G__10532;
continue;
} else {
var temp__4126__auto___10533 = cljs.core.seq.call(null,seq__10476_10520);
if(temp__4126__auto___10533){
var seq__10476_10534__$1 = temp__4126__auto___10533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10476_10534__$1)){
var c__4598__auto___10535 = cljs.core.chunk_first.call(null,seq__10476_10534__$1);
var G__10536 = cljs.core.chunk_rest.call(null,seq__10476_10534__$1);
var G__10537 = c__4598__auto___10535;
var G__10538 = cljs.core.count.call(null,c__4598__auto___10535);
var G__10539 = (0);
seq__10476_10520 = G__10536;
chunk__10477_10521 = G__10537;
count__10478_10522 = G__10538;
i__10479_10523 = G__10539;
continue;
} else {
var i_10540 = cljs.core.first.call(null,seq__10476_10534__$1);
var angle_10541 = ((i_10540 * (cljstemplate.constance.TAU / channel_count_10497)) - (timestamp / (3000)));
var xi_10542 = (xs_10489 + (radius_3rd_10493 * Math.sin.call(null,angle_10541)));
var yi_10543 = (ys_10490 + (radius_3rd_10493 * Math.cos.call(null,angle_10541)));
var on_10544 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_10488,i_10540)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_10542,yi_10543,radius_5th_10494], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_10540),(cljs.core.truth_(on_10544)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_10542,yi_10543,radius_5th_10494], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_10540),(cljs.core.truth_(on_10544)?0.75:0.25)));

if(cljs.core.truth_(on_10544)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_10542 - radius_15th_10495),(yi_10543 - radius_15th_10495),radius_15th_10495], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_10542 - radius_15th_10495),(yi_10543 - radius_15th_10495),radius_20th_10496], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__10545 = cljs.core.next.call(null,seq__10476_10534__$1);
var G__10546 = null;
var G__10547 = (0);
var G__10548 = (0);
seq__10476_10520 = G__10545;
chunk__10477_10521 = G__10546;
count__10478_10522 = G__10547;
i__10479_10523 = G__10548;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_10491);

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
var vec__10550 = temp__4124__auto__;
var args = cljs.core.nth.call(null,vec__10550,(0),null);
var cached_value = cljs.core.nth.call(null,vec__10550,(1),null);
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

var seq__10555 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10556 = null;
var count__10557 = (0);
var i__10558 = (0);
while(true){
if((i__10558 < count__10557)){
var i = cljs.core._nth.call(null,chunk__10556,i__10558);
var start_10559 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_10560 = (start_10559 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_10559,end_10560,true);

context.closePath();

context.fill();

var G__10561 = seq__10555;
var G__10562 = chunk__10556;
var G__10563 = count__10557;
var G__10564 = (i__10558 + (1));
seq__10555 = G__10561;
chunk__10556 = G__10562;
count__10557 = G__10563;
i__10558 = G__10564;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10555);
if(temp__4126__auto__){
var seq__10555__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10555__$1)){
var c__4598__auto__ = cljs.core.chunk_first.call(null,seq__10555__$1);
var G__10565 = cljs.core.chunk_rest.call(null,seq__10555__$1);
var G__10566 = c__4598__auto__;
var G__10567 = cljs.core.count.call(null,c__4598__auto__);
var G__10568 = (0);
seq__10555 = G__10565;
chunk__10556 = G__10566;
count__10557 = G__10567;
i__10558 = G__10568;
continue;
} else {
var i = cljs.core.first.call(null,seq__10555__$1);
var start_10569 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_10570 = (start_10569 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_10569,end_10570,true);

context.closePath();

context.fill();

var G__10571 = cljs.core.next.call(null,seq__10555__$1);
var G__10572 = null;
var G__10573 = (0);
var G__10574 = (0);
seq__10555 = G__10571;
chunk__10556 = G__10572;
count__10557 = G__10573;
i__10558 = G__10574;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__10577,level,mouse,timestamp,done){
var vec__10581 = p__10577;
var context = cljs.core.nth.call(null,vec__10581,(0),null);
var width = cljs.core.nth.call(null,vec__10581,(1),null);
var height = cljs.core.nth.call(null,vec__10581,(2),null);
var sf = cljstemplate.shape.scale_factor.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(level);
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(level);
var vec__10582 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.call(null,vec__10582,(0),null);
var vec__10583 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.call(null,vec__10583,(0),null);
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

return cljstemplate.shape.render_end.call(null,cljstemplate.shape.render_start.call(null,cljs.core.update.call(null,cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__10582,start,vec__10583,end,ends,vec__10581,context,width,height){
return (function (p1__10575_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_at_rest,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__10575_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__10582,start,vec__10583,end,ends,vec__10581,context,width,height))
),new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__10582,start,vec__10583,end,ends,vec__10581,context,width,height){
return (function (p1__10576_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_in_motion,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__10576_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__10582,start,vec__10583,end,ends,vec__10581,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});

//# sourceMappingURL=shape.js.map