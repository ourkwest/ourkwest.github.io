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
var G__39100 = (idx + (1));
var G__39101 = cljs.core.rest.call(null,items);
idx = G__39100;
items = G__39101;
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
cljstemplate.shape.clear_wire_connections = (function clear_wire_connections(p__39102){
var vec__39104 = p__39102;
var in$ = cljs.core.nth.call(null,vec__39104,(0),null);
var out = cljs.core.nth.call(null,vec__39104,(1),null);
var _ = cljs.core.nth.call(null,vec__39104,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__39104,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});
cljstemplate.shape.clear_channel_connections = (function clear_channel_connections(channel_wires){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_wire_connections,channel_wires);
});
cljstemplate.shape.clear_shape_connections = (function clear_shape_connections(shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),(function (p1__39105_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_channel_connections,p1__39105_SHARP_);
}));
});
cljstemplate.shape.clear_connections = (function clear_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__39106_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.shape.clear_shape_connections,p1__39106_SHARP_);
}));
});
cljstemplate.shape.switch_on = (function switch_on(shape,channel_id,wire_id,direction_id){
return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id,wire_id,(2),direction_id], null),new cljs.core.Keyword(null,"on","on",173873944));
});
cljstemplate.shape.wire_index_select = (function wire_index_select(target,p__39107,index){
var vec__39110 = p__39107;
var from = cljs.core.nth.call(null,vec__39110,(0),null);
var onto = cljs.core.nth.call(null,vec__39110,(1),null);
var vec__39111 = cljs.core.nth.call(null,vec__39110,(2),null);
var backward = cljs.core.nth.call(null,vec__39111,(0),null);
var forward = cljs.core.nth.call(null,vec__39111,(1),null);
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
return (function (p1__39112_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id], null),p1__39112_SHARP_);
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
cljstemplate.shape.populate_shape_connections = (function populate_shape_connections(shapes,p__39114){
while(true){
var vec__39117 = p__39114;
var vec__39118 = cljs.core.nth.call(null,vec__39117,(0),null);
var shape_id = cljs.core.nth.call(null,vec__39118,(0),null);
var channel_id = cljs.core.nth.call(null,vec__39118,(1),null);
var wire_id = cljs.core.nth.call(null,vec__39118,(2),null);
var direction_id = cljs.core.nth.call(null,vec__39118,(3),null);
var seeds = cljs.core.nthnext.call(null,vec__39117,(1));
var new_shapes = cljs.core.update.call(null,shapes,shape_id,((function (shapes,p__39114,vec__39117,vec__39118,shape_id,channel_id,wire_id,direction_id,seeds){
return (function (p1__39113_SHARP_){
return cljstemplate.shape.switch_on.call(null,p1__39113_SHARP_,channel_id,wire_id,direction_id);
});})(shapes,p__39114,vec__39117,vec__39118,shape_id,channel_id,wire_id,direction_id,seeds))
);
var new_seeds = cljs.core.concat.call(null,seeds,cljstemplate.shape.more_seeds.call(null,new_shapes,shape_id,channel_id,wire_id,direction_id));
if(cljs.core.seq.call(null,new_seeds)){
var G__39119 = new_shapes;
var G__39120 = new_seeds;
shapes = G__39119;
p__39114 = G__39120;
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
return (function (p1__39121_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__39121_SHARP_,(0)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))),cljs.core.mapv.call(null,((function (shapes,shape,wiring,channel_wiring){
return (function (p1__39122_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,channel_id,p1__39122_SHARP_,(1)], null));
});})(shapes,shape,wiring,channel_wiring))
,cljs.core.range.call(null,cljs.core.count.call(null,channel_wiring))));
});
cljstemplate.shape.seed_light = (function seed_light(level){
return cljs.core.mapcat.call(null,cljstemplate.shape.seed_lights,cljs.core.repeat.call(null,level),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level),cljs.core.range.call(null));
});
cljstemplate.shape.populate_connections = (function populate_connections(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__39123_SHARP_){
return cljstemplate.shape.populate_shape_connections.call(null,p1__39123_SHARP_,cljstemplate.shape.seed_light.call(null,level));
}));
});
cljstemplate.shape.check_connections = (function check_connections(level){
return cljstemplate.shape.populate_connections.call(null,cljstemplate.shape.clear_connections.call(null,level));
});
/**
* returns e
*/
cljstemplate.shape.proportionalise = (function proportionalise(p__39124,p__39125){
var vec__39128 = p__39124;
var a = cljs.core.nth.call(null,vec__39128,(0),null);
var b = cljs.core.nth.call(null,vec__39128,(1),null);
var c = cljs.core.nth.call(null,vec__39128,(2),null);
var vec__39129 = p__39125;
var d = cljs.core.nth.call(null,vec__39129,(0),null);
var f = cljs.core.nth.call(null,vec__39129,(1),null);
var dist1 = (c - a);
var prog1 = (b - a);
var prop = (prog1 / dist1);
var dist2 = (f - d);
var prog2 = (prop * dist2);
var e = (d + prog2);
return e;
});
cljstemplate.shape.rotated = (function rotated(timestamp,p__39130){
var map__39133 = p__39130;
var map__39133__$1 = ((cljs.core.seq_QMARK_.call(null,map__39133))?cljs.core.apply.call(null,cljs.core.hash_map,map__39133):map__39133);
var shape = map__39133__$1;
var map__39134 = cljs.core.get.call(null,map__39133__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__39134__$1 = ((cljs.core.seq_QMARK_.call(null,map__39134))?cljs.core.apply.call(null,cljs.core.hash_map,map__39134):map__39134);
var start = cljs.core.get.call(null,map__39134__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__39134__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start_time = cljs.core.get.call(null,map__39134__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var end_time = cljs.core.get.call(null,map__39134__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
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
return (function (p1__39135_SHARP_){
return cljs.core.map.call(null,r_fn,p1__39135_SHARP_);
});})(r_fn))
);
});
cljstemplate.shape.clicked = (function clicked(shape,p__39136){
var vec__39138 = p__39136;
var _ = cljs.core.nth.call(null,vec__39138,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__39138,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__39138,(2),null);
var timestamp = cljs.core.nth.call(null,vec__39138,(3),null);
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
cljstemplate.shape.rgb_str = (function rgb_str(p__39139){
var vec__39141 = p__39139;
var r = cljs.core.nth.call(null,vec__39141,(0),null);
var g = cljs.core.nth.call(null,vec__39141,(1),null);
var b = cljs.core.nth.call(null,vec__39141,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
cljstemplate.shape.rgba_str = (function rgba_str(p__39142){
var vec__39144 = p__39142;
var r = cljs.core.nth.call(null,vec__39144,(0),null);
var g = cljs.core.nth.call(null,vec__39144,(1),null);
var b = cljs.core.nth.call(null,vec__39144,(2),null);
var a = cljs.core.nth.call(null,vec__39144,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a),cljs.core.str(")")].join('');
});
cljstemplate.shape.alphas = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.shape.radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_radius,(4),cljstemplate.shapeconstance.square_radius,(6),cljstemplate.shapeconstance.hex_radius,(8),cljstemplate.shapeconstance.oct_radius], null);
cljstemplate.shape.inner_radii = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_inner_radius,(4),cljstemplate.shapeconstance.square_inner_radius,(6),cljstemplate.shapeconstance.hex_inner_radius,(8),cljstemplate.shapeconstance.oct_inner_radius], null);
cljstemplate.shape.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.shape.click_result = (function click_result(shape,context,click){
if(cljs.core.truth_((function (){var temp__4124__auto__ = click;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__39146 = temp__4124__auto__;
var x = cljs.core.nth.call(null,vec__39146,(0),null);
var y = cljs.core.nth.call(null,vec__39146,(1),null);
var clicked = cljs.core.nth.call(null,vec__39146,(2),null);
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
cljstemplate.shape.vertices = (function vertices(p__39148,xs,ys,sf){
var map__39155 = p__39148;
var map__39155__$1 = ((cljs.core.seq_QMARK_.call(null,map__39155))?cljs.core.apply.call(null,cljs.core.hash_map,map__39155):map__39155);
var n = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"n","n",562130025));
var vec__39156 = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__39156,(0),null);
var y = cljs.core.nth.call(null,vec__39156,(1),null);
var r = cljs.core.nth.call(null,vec__39156,(2),null);
var rotation = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
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
var gammas = cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (alpha,delta,radius,beta,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation){
return (function (p1__39147_SHARP_){
return (p1__39147_SHARP_ + alpha);
});})(alpha,delta,radius,beta,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation))
,beta));
var iter__4567__auto__ = ((function (alpha,delta,radius,beta,gammas,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation){
return (function iter__39157(s__39158){
return (new cljs.core.LazySeq(null,((function (alpha,delta,radius,beta,gammas,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation){
return (function (){
var s__39158__$1 = s__39158;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39158__$1);
if(temp__4126__auto__){
var s__39158__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39158__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__39158__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__39160 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__39159 = (0);
while(true){
if((i__39159 < size__4566__auto__)){
var gamma = cljs.core._nth.call(null,c__4565__auto__,i__39159);
cljs.core.chunk_append.call(null,b__39160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null));

var G__39161 = (i__39159 + (1));
i__39159 = G__39161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39160),iter__39157.call(null,cljs.core.chunk_rest.call(null,s__39158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39160),null);
}
} else {
var gamma = cljs.core.first.call(null,s__39158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (radius * Math.sin.call(null,gamma))),(ys + (radius * Math.cos.call(null,gamma)))], null),iter__39157.call(null,cljs.core.rest.call(null,s__39158__$2)));
}
} else {
return null;
}
break;
}
});})(alpha,delta,radius,beta,gammas,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation))
,null,null));
});})(alpha,delta,radius,beta,gammas,map__39155,map__39155__$1,n,vec__39156,x,y,r,rotation))
;
return iter__4567__auto__.call(null,gammas);
});
cljstemplate.shape.trace_path = (function trace_path(context,p__39162){
var vec__39171 = p__39162;
var vec__39172 = cljs.core.nth.call(null,vec__39171,(0),null);
var x1 = cljs.core.nth.call(null,vec__39172,(0),null);
var y1 = cljs.core.nth.call(null,vec__39172,(1),null);
var rest = cljs.core.nthnext.call(null,vec__39171,(1));
context.beginPath();

context.moveTo(x1,y1);

var seq__39173_39179 = cljs.core.seq.call(null,rest);
var chunk__39174_39180 = null;
var count__39175_39181 = (0);
var i__39176_39182 = (0);
while(true){
if((i__39176_39182 < count__39175_39181)){
var vec__39177_39183 = cljs.core._nth.call(null,chunk__39174_39180,i__39176_39182);
var xr_39184 = cljs.core.nth.call(null,vec__39177_39183,(0),null);
var yr_39185 = cljs.core.nth.call(null,vec__39177_39183,(1),null);
context.lineTo(xr_39184,yr_39185);

var G__39186 = seq__39173_39179;
var G__39187 = chunk__39174_39180;
var G__39188 = count__39175_39181;
var G__39189 = (i__39176_39182 + (1));
seq__39173_39179 = G__39186;
chunk__39174_39180 = G__39187;
count__39175_39181 = G__39188;
i__39176_39182 = G__39189;
continue;
} else {
var temp__4126__auto___39190 = cljs.core.seq.call(null,seq__39173_39179);
if(temp__4126__auto___39190){
var seq__39173_39191__$1 = temp__4126__auto___39190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39173_39191__$1)){
var c__4598__auto___39192 = cljs.core.chunk_first.call(null,seq__39173_39191__$1);
var G__39193 = cljs.core.chunk_rest.call(null,seq__39173_39191__$1);
var G__39194 = c__4598__auto___39192;
var G__39195 = cljs.core.count.call(null,c__4598__auto___39192);
var G__39196 = (0);
seq__39173_39179 = G__39193;
chunk__39174_39180 = G__39194;
count__39175_39181 = G__39195;
i__39176_39182 = G__39196;
continue;
} else {
var vec__39178_39197 = cljs.core.first.call(null,seq__39173_39191__$1);
var xr_39198 = cljs.core.nth.call(null,vec__39178_39197,(0),null);
var yr_39199 = cljs.core.nth.call(null,vec__39178_39197,(1),null);
context.lineTo(xr_39198,yr_39199);

var G__39200 = cljs.core.next.call(null,seq__39173_39191__$1);
var G__39201 = null;
var G__39202 = (0);
var G__39203 = (0);
seq__39173_39179 = G__39200;
chunk__39174_39180 = G__39201;
count__39175_39181 = G__39202;
i__39176_39182 = G__39203;
continue;
}
} else {
}
}
break;
}

return context.lineTo(x1,y1);
});
cljstemplate.shape.render_shape = (function render_shape(context,sf,p__39206,p__39207,channels,p__39208,p__39209,id,timestamp){
var vec__39299 = p__39206;
var x_offset = cljs.core.nth.call(null,vec__39299,(0),null);
var y_offset = cljs.core.nth.call(null,vec__39299,(1),null);
var vec__39300 = p__39207;
var mx = cljs.core.nth.call(null,vec__39300,(0),null);
var my = cljs.core.nth.call(null,vec__39300,(1),null);
var mouse = vec__39300;
var vec__39301 = p__39208;
var _ = cljs.core.nth.call(null,vec__39301,(0),null);
var bdr = cljs.core.nth.call(null,vec__39301,(1),null);
var fg = cljs.core.nth.call(null,vec__39301,(2),null);
var map__39302 = p__39209;
var map__39302__$1 = ((cljs.core.seq_QMARK_.call(null,map__39302))?cljs.core.apply.call(null,cljs.core.hash_map,map__39302):map__39302);
var shape = map__39302__$1;
var vec__39303 = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__39303,(0),null);
var y = cljs.core.nth.call(null,vec__39303,(1),null);
var r = cljs.core.nth.call(null,vec__39303,(2),null);
var n = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotation = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var wiring = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
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
var gammas = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,vec__39299,x_offset,y_offset,vec__39300,mx,my,mouse,vec__39301,_,bdr,fg,map__39302,map__39302__$1,shape,vec__39303,x,y,r,n,rotation,wiring){
return (function (p1__39204_SHARP_){
return (p1__39204_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,vec__39299,x_offset,y_offset,vec__39300,mx,my,mouse,vec__39301,_,bdr,fg,map__39302,map__39302__$1,shape,vec__39303,x,y,r,n,rotation,wiring))
,beta);
var epsilons = cljs.core.iterate.call(null,((function (alpha,delta,radius,inner_radius,pad,beta,gammas,vec__39299,x_offset,y_offset,vec__39300,mx,my,mouse,vec__39301,_,bdr,fg,map__39302,map__39302__$1,shape,vec__39303,x,y,r,n,rotation,wiring){
return (function (p1__39205_SHARP_){
return (p1__39205_SHARP_ + alpha);
});})(alpha,delta,radius,inner_radius,pad,beta,gammas,vec__39299,x_offset,y_offset,vec__39300,mx,my,mouse,vec__39301,_,bdr,fg,map__39302,map__39302__$1,shape,vec__39303,x,y,r,n,rotation,wiring))
,(beta - delta));
var channel_width = ((5) * sf);
var xs = ((x * sf) + x_offset);
var ys = ((y * sf) + y_offset);
context.beginPath();

context.moveTo((xs + (radius * Math.sin.call(null,beta))),(ys + (radius * Math.cos.call(null,beta))));

var seq__39304_39388 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__39305_39389 = null;
var count__39306_39390 = (0);
var i__39307_39391 = (0);
while(true){
if((i__39307_39391 < count__39306_39390)){
var gamma_39392 = cljs.core._nth.call(null,chunk__39305_39389,i__39307_39391);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_39392))),(ys + (radius * Math.cos.call(null,gamma_39392))));

var G__39393 = seq__39304_39388;
var G__39394 = chunk__39305_39389;
var G__39395 = count__39306_39390;
var G__39396 = (i__39307_39391 + (1));
seq__39304_39388 = G__39393;
chunk__39305_39389 = G__39394;
count__39306_39390 = G__39395;
i__39307_39391 = G__39396;
continue;
} else {
var temp__4126__auto___39397 = cljs.core.seq.call(null,seq__39304_39388);
if(temp__4126__auto___39397){
var seq__39304_39398__$1 = temp__4126__auto___39397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39304_39398__$1)){
var c__4598__auto___39399 = cljs.core.chunk_first.call(null,seq__39304_39398__$1);
var G__39400 = cljs.core.chunk_rest.call(null,seq__39304_39398__$1);
var G__39401 = c__4598__auto___39399;
var G__39402 = cljs.core.count.call(null,c__4598__auto___39399);
var G__39403 = (0);
seq__39304_39388 = G__39400;
chunk__39305_39389 = G__39401;
count__39306_39390 = G__39402;
i__39307_39391 = G__39403;
continue;
} else {
var gamma_39404 = cljs.core.first.call(null,seq__39304_39398__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_39404))),(ys + (radius * Math.cos.call(null,gamma_39404))));

var G__39405 = cljs.core.next.call(null,seq__39304_39398__$1);
var G__39406 = null;
var G__39407 = (0);
var G__39408 = (0);
seq__39304_39388 = G__39405;
chunk__39305_39389 = G__39406;
count__39306_39390 = G__39407;
i__39307_39391 = G__39408;
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
var seq__39308_39409 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var chunk__39309_39410 = null;
var count__39310_39411 = (0);
var i__39311_39412 = (0);
while(true){
if((i__39311_39412 < count__39310_39411)){
var ch_39413 = cljs.core._nth.call(null,chunk__39309_39410,i__39311_39412);
var channel_39414 = cljs.core.nth.call(null,channels,ch_39413);
var channel_wiring_39415 = cljs.core.nth.call(null,wiring,ch_39413);
var ch_pos_39416 = ((ch_39413 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__39312_39417 = cljs.core.seq.call(null,channel_wiring_39415);
var chunk__39313_39418 = null;
var count__39314_39419 = (0);
var i__39315_39420 = (0);
while(true){
if((i__39315_39420 < count__39314_39419)){
var vec__39316_39421 = cljs.core._nth.call(null,chunk__39313_39418,i__39315_39420);
var from_39422 = cljs.core.nth.call(null,vec__39316_39421,(0),null);
var onto_39423 = cljs.core.nth.call(null,vec__39316_39421,(1),null);
var vec__39317_39424 = cljs.core.nth.call(null,vec__39316_39421,(2),null);
var fw_39425 = cljs.core.nth.call(null,vec__39317_39424,(0),null);
var bw_39426 = cljs.core.nth.call(null,vec__39317_39424,(1),null);
var switched_39427 = vec__39317_39424;
context.beginPath();

var vec__39318_39428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39422)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39422))], null);
var from_x_39429 = cljs.core.nth.call(null,vec__39318_39428,(0),null);
var from_y_39430 = cljs.core.nth.call(null,vec__39318_39428,(1),null);
var vec__39319_39431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39423)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39423))], null);
var onto_x_39432 = cljs.core.nth.call(null,vec__39319_39431,(0),null);
var onto_y_39433 = cljs.core.nth.call(null,vec__39319_39431,(1),null);
var vec__39320_39434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39422)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39422)))], null);
var from_x_p_39435 = cljs.core.nth.call(null,vec__39320_39434,(0),null);
var from_y_p_39436 = cljs.core.nth.call(null,vec__39320_39434,(1),null);
var vec__39321_39437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39423)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39423)))], null);
var onto_x_p_39438 = cljs.core.nth.call(null,vec__39321_39437,(0),null);
var onto_y_p_39439 = cljs.core.nth.call(null,vec__39321_39437,(1),null);
var vec__39322_39440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_39429)),(ys + (pad * from_y_39430))], null);
var xa_39441 = cljs.core.nth.call(null,vec__39322_39440,(0),null);
var ya_39442 = cljs.core.nth.call(null,vec__39322_39440,(1),null);
var vec__39323_39443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_39429)) + (ch_pos_39416 * from_x_p_39435)),((ys + ((0.5 * inner_radius) * from_y_39430)) + (ch_pos_39416 * from_y_p_39436))], null);
var xb_39444 = cljs.core.nth.call(null,vec__39323_39443,(0),null);
var yb_39445 = cljs.core.nth.call(null,vec__39323_39443,(1),null);
var vec__39324_39446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_39432)) + (ch_pos_39416 * onto_x_p_39438)),((ys + ((0.5 * inner_radius) * onto_y_39433)) + (ch_pos_39416 * onto_y_p_39439))], null);
var xc_39447 = cljs.core.nth.call(null,vec__39324_39446,(0),null);
var yc_39448 = cljs.core.nth.call(null,vec__39324_39446,(1),null);
var vec__39325_39449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_39432)),(ys + (pad * onto_y_39433))], null);
var xd_39450 = cljs.core.nth.call(null,vec__39325_39449,(0),null);
var yd_39451 = cljs.core.nth.call(null,vec__39325_39449,(1),null);
context.moveTo(xa_39441,ya_39442);

context.bezierCurveTo(xb_39444,yb_39445,xc_39447,yc_39448,xd_39450,yd_39451);

var offset_39452 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_39453 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_39427))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_39414,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__39326_39454 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_39425,offset_39452], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_39426,(- offset_39452)], null)], null));
var chunk__39327_39455 = null;
var count__39328_39456 = (0);
var i__39329_39457 = (0);
while(true){
if((i__39329_39457 < count__39328_39456)){
var vec__39330_39458 = cljs.core._nth.call(null,chunk__39327_39455,i__39329_39457);
var direction_39459 = cljs.core.nth.call(null,vec__39330_39458,(0),null);
var os_39460 = cljs.core.nth.call(null,vec__39330_39458,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39459)){
context.setLineDash(lineDash_39453);

context.lineDashOffset = os_39460;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39461 = seq__39326_39454;
var G__39462 = chunk__39327_39455;
var G__39463 = count__39328_39456;
var G__39464 = (i__39329_39457 + (1));
seq__39326_39454 = G__39461;
chunk__39327_39455 = G__39462;
count__39328_39456 = G__39463;
i__39329_39457 = G__39464;
continue;
} else {
var temp__4126__auto___39465 = cljs.core.seq.call(null,seq__39326_39454);
if(temp__4126__auto___39465){
var seq__39326_39466__$1 = temp__4126__auto___39465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39326_39466__$1)){
var c__4598__auto___39467 = cljs.core.chunk_first.call(null,seq__39326_39466__$1);
var G__39468 = cljs.core.chunk_rest.call(null,seq__39326_39466__$1);
var G__39469 = c__4598__auto___39467;
var G__39470 = cljs.core.count.call(null,c__4598__auto___39467);
var G__39471 = (0);
seq__39326_39454 = G__39468;
chunk__39327_39455 = G__39469;
count__39328_39456 = G__39470;
i__39329_39457 = G__39471;
continue;
} else {
var vec__39331_39472 = cljs.core.first.call(null,seq__39326_39466__$1);
var direction_39473 = cljs.core.nth.call(null,vec__39331_39472,(0),null);
var os_39474 = cljs.core.nth.call(null,vec__39331_39472,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39473)){
context.setLineDash(lineDash_39453);

context.lineDashOffset = os_39474;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39475 = cljs.core.next.call(null,seq__39326_39466__$1);
var G__39476 = null;
var G__39477 = (0);
var G__39478 = (0);
seq__39326_39454 = G__39475;
chunk__39327_39455 = G__39476;
count__39328_39456 = G__39477;
i__39329_39457 = G__39478;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__39479 = seq__39312_39417;
var G__39480 = chunk__39313_39418;
var G__39481 = count__39314_39419;
var G__39482 = (i__39315_39420 + (1));
seq__39312_39417 = G__39479;
chunk__39313_39418 = G__39480;
count__39314_39419 = G__39481;
i__39315_39420 = G__39482;
continue;
} else {
var temp__4126__auto___39483 = cljs.core.seq.call(null,seq__39312_39417);
if(temp__4126__auto___39483){
var seq__39312_39484__$1 = temp__4126__auto___39483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39312_39484__$1)){
var c__4598__auto___39485 = cljs.core.chunk_first.call(null,seq__39312_39484__$1);
var G__39486 = cljs.core.chunk_rest.call(null,seq__39312_39484__$1);
var G__39487 = c__4598__auto___39485;
var G__39488 = cljs.core.count.call(null,c__4598__auto___39485);
var G__39489 = (0);
seq__39312_39417 = G__39486;
chunk__39313_39418 = G__39487;
count__39314_39419 = G__39488;
i__39315_39420 = G__39489;
continue;
} else {
var vec__39332_39490 = cljs.core.first.call(null,seq__39312_39484__$1);
var from_39491 = cljs.core.nth.call(null,vec__39332_39490,(0),null);
var onto_39492 = cljs.core.nth.call(null,vec__39332_39490,(1),null);
var vec__39333_39493 = cljs.core.nth.call(null,vec__39332_39490,(2),null);
var fw_39494 = cljs.core.nth.call(null,vec__39333_39493,(0),null);
var bw_39495 = cljs.core.nth.call(null,vec__39333_39493,(1),null);
var switched_39496 = vec__39333_39493;
context.beginPath();

var vec__39334_39497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39491)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39491))], null);
var from_x_39498 = cljs.core.nth.call(null,vec__39334_39497,(0),null);
var from_y_39499 = cljs.core.nth.call(null,vec__39334_39497,(1),null);
var vec__39335_39500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39492)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39492))], null);
var onto_x_39501 = cljs.core.nth.call(null,vec__39335_39500,(0),null);
var onto_y_39502 = cljs.core.nth.call(null,vec__39335_39500,(1),null);
var vec__39336_39503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39491)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39491)))], null);
var from_x_p_39504 = cljs.core.nth.call(null,vec__39336_39503,(0),null);
var from_y_p_39505 = cljs.core.nth.call(null,vec__39336_39503,(1),null);
var vec__39337_39506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39492)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39492)))], null);
var onto_x_p_39507 = cljs.core.nth.call(null,vec__39337_39506,(0),null);
var onto_y_p_39508 = cljs.core.nth.call(null,vec__39337_39506,(1),null);
var vec__39338_39509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_39498)),(ys + (pad * from_y_39499))], null);
var xa_39510 = cljs.core.nth.call(null,vec__39338_39509,(0),null);
var ya_39511 = cljs.core.nth.call(null,vec__39338_39509,(1),null);
var vec__39339_39512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_39498)) + (ch_pos_39416 * from_x_p_39504)),((ys + ((0.5 * inner_radius) * from_y_39499)) + (ch_pos_39416 * from_y_p_39505))], null);
var xb_39513 = cljs.core.nth.call(null,vec__39339_39512,(0),null);
var yb_39514 = cljs.core.nth.call(null,vec__39339_39512,(1),null);
var vec__39340_39515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_39501)) + (ch_pos_39416 * onto_x_p_39507)),((ys + ((0.5 * inner_radius) * onto_y_39502)) + (ch_pos_39416 * onto_y_p_39508))], null);
var xc_39516 = cljs.core.nth.call(null,vec__39340_39515,(0),null);
var yc_39517 = cljs.core.nth.call(null,vec__39340_39515,(1),null);
var vec__39341_39518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_39501)),(ys + (pad * onto_y_39502))], null);
var xd_39519 = cljs.core.nth.call(null,vec__39341_39518,(0),null);
var yd_39520 = cljs.core.nth.call(null,vec__39341_39518,(1),null);
context.moveTo(xa_39510,ya_39511);

context.bezierCurveTo(xb_39513,yb_39514,xc_39516,yc_39517,xd_39519,yd_39520);

var offset_39521 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_39522 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_39496))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_39414,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__39342_39523 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_39494,offset_39521], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_39495,(- offset_39521)], null)], null));
var chunk__39343_39524 = null;
var count__39344_39525 = (0);
var i__39345_39526 = (0);
while(true){
if((i__39345_39526 < count__39344_39525)){
var vec__39346_39527 = cljs.core._nth.call(null,chunk__39343_39524,i__39345_39526);
var direction_39528 = cljs.core.nth.call(null,vec__39346_39527,(0),null);
var os_39529 = cljs.core.nth.call(null,vec__39346_39527,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39528)){
context.setLineDash(lineDash_39522);

context.lineDashOffset = os_39529;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39530 = seq__39342_39523;
var G__39531 = chunk__39343_39524;
var G__39532 = count__39344_39525;
var G__39533 = (i__39345_39526 + (1));
seq__39342_39523 = G__39530;
chunk__39343_39524 = G__39531;
count__39344_39525 = G__39532;
i__39345_39526 = G__39533;
continue;
} else {
var temp__4126__auto___39534__$1 = cljs.core.seq.call(null,seq__39342_39523);
if(temp__4126__auto___39534__$1){
var seq__39342_39535__$1 = temp__4126__auto___39534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39342_39535__$1)){
var c__4598__auto___39536 = cljs.core.chunk_first.call(null,seq__39342_39535__$1);
var G__39537 = cljs.core.chunk_rest.call(null,seq__39342_39535__$1);
var G__39538 = c__4598__auto___39536;
var G__39539 = cljs.core.count.call(null,c__4598__auto___39536);
var G__39540 = (0);
seq__39342_39523 = G__39537;
chunk__39343_39524 = G__39538;
count__39344_39525 = G__39539;
i__39345_39526 = G__39540;
continue;
} else {
var vec__39347_39541 = cljs.core.first.call(null,seq__39342_39535__$1);
var direction_39542 = cljs.core.nth.call(null,vec__39347_39541,(0),null);
var os_39543 = cljs.core.nth.call(null,vec__39347_39541,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39542)){
context.setLineDash(lineDash_39522);

context.lineDashOffset = os_39543;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39414);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39544 = cljs.core.next.call(null,seq__39342_39535__$1);
var G__39545 = null;
var G__39546 = (0);
var G__39547 = (0);
seq__39342_39523 = G__39544;
chunk__39343_39524 = G__39545;
count__39344_39525 = G__39546;
i__39345_39526 = G__39547;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__39548 = cljs.core.next.call(null,seq__39312_39484__$1);
var G__39549 = null;
var G__39550 = (0);
var G__39551 = (0);
seq__39312_39417 = G__39548;
chunk__39313_39418 = G__39549;
count__39314_39419 = G__39550;
i__39315_39420 = G__39551;
continue;
}
} else {
}
}
break;
}

var G__39552 = seq__39308_39409;
var G__39553 = chunk__39309_39410;
var G__39554 = count__39310_39411;
var G__39555 = (i__39311_39412 + (1));
seq__39308_39409 = G__39552;
chunk__39309_39410 = G__39553;
count__39310_39411 = G__39554;
i__39311_39412 = G__39555;
continue;
} else {
var temp__4126__auto___39556 = cljs.core.seq.call(null,seq__39308_39409);
if(temp__4126__auto___39556){
var seq__39308_39557__$1 = temp__4126__auto___39556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39308_39557__$1)){
var c__4598__auto___39558 = cljs.core.chunk_first.call(null,seq__39308_39557__$1);
var G__39559 = cljs.core.chunk_rest.call(null,seq__39308_39557__$1);
var G__39560 = c__4598__auto___39558;
var G__39561 = cljs.core.count.call(null,c__4598__auto___39558);
var G__39562 = (0);
seq__39308_39409 = G__39559;
chunk__39309_39410 = G__39560;
count__39310_39411 = G__39561;
i__39311_39412 = G__39562;
continue;
} else {
var ch_39563 = cljs.core.first.call(null,seq__39308_39557__$1);
var channel_39564 = cljs.core.nth.call(null,channels,ch_39563);
var channel_wiring_39565 = cljs.core.nth.call(null,wiring,ch_39563);
var ch_pos_39566 = ((ch_39563 - ((cljs.core.count.call(null,channels) - (1)) / (2))) * (inner_radius / (2)));
var seq__39348_39567 = cljs.core.seq.call(null,channel_wiring_39565);
var chunk__39349_39568 = null;
var count__39350_39569 = (0);
var i__39351_39570 = (0);
while(true){
if((i__39351_39570 < count__39350_39569)){
var vec__39352_39571 = cljs.core._nth.call(null,chunk__39349_39568,i__39351_39570);
var from_39572 = cljs.core.nth.call(null,vec__39352_39571,(0),null);
var onto_39573 = cljs.core.nth.call(null,vec__39352_39571,(1),null);
var vec__39353_39574 = cljs.core.nth.call(null,vec__39352_39571,(2),null);
var fw_39575 = cljs.core.nth.call(null,vec__39353_39574,(0),null);
var bw_39576 = cljs.core.nth.call(null,vec__39353_39574,(1),null);
var switched_39577 = vec__39353_39574;
context.beginPath();

var vec__39354_39578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39572)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39572))], null);
var from_x_39579 = cljs.core.nth.call(null,vec__39354_39578,(0),null);
var from_y_39580 = cljs.core.nth.call(null,vec__39354_39578,(1),null);
var vec__39355_39581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39573)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39573))], null);
var onto_x_39582 = cljs.core.nth.call(null,vec__39355_39581,(0),null);
var onto_y_39583 = cljs.core.nth.call(null,vec__39355_39581,(1),null);
var vec__39356_39584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39572)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39572)))], null);
var from_x_p_39585 = cljs.core.nth.call(null,vec__39356_39584,(0),null);
var from_y_p_39586 = cljs.core.nth.call(null,vec__39356_39584,(1),null);
var vec__39357_39587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39573)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39573)))], null);
var onto_x_p_39588 = cljs.core.nth.call(null,vec__39357_39587,(0),null);
var onto_y_p_39589 = cljs.core.nth.call(null,vec__39357_39587,(1),null);
var vec__39358_39590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_39579)),(ys + (pad * from_y_39580))], null);
var xa_39591 = cljs.core.nth.call(null,vec__39358_39590,(0),null);
var ya_39592 = cljs.core.nth.call(null,vec__39358_39590,(1),null);
var vec__39359_39593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_39579)) + (ch_pos_39566 * from_x_p_39585)),((ys + ((0.5 * inner_radius) * from_y_39580)) + (ch_pos_39566 * from_y_p_39586))], null);
var xb_39594 = cljs.core.nth.call(null,vec__39359_39593,(0),null);
var yb_39595 = cljs.core.nth.call(null,vec__39359_39593,(1),null);
var vec__39360_39596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_39582)) + (ch_pos_39566 * onto_x_p_39588)),((ys + ((0.5 * inner_radius) * onto_y_39583)) + (ch_pos_39566 * onto_y_p_39589))], null);
var xc_39597 = cljs.core.nth.call(null,vec__39360_39596,(0),null);
var yc_39598 = cljs.core.nth.call(null,vec__39360_39596,(1),null);
var vec__39361_39599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_39582)),(ys + (pad * onto_y_39583))], null);
var xd_39600 = cljs.core.nth.call(null,vec__39361_39599,(0),null);
var yd_39601 = cljs.core.nth.call(null,vec__39361_39599,(1),null);
context.moveTo(xa_39591,ya_39592);

context.bezierCurveTo(xb_39594,yb_39595,xc_39597,yc_39598,xd_39600,yd_39601);

var offset_39602 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_39603 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_39577))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_39564,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__39362_39604 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_39575,offset_39602], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_39576,(- offset_39602)], null)], null));
var chunk__39363_39605 = null;
var count__39364_39606 = (0);
var i__39365_39607 = (0);
while(true){
if((i__39365_39607 < count__39364_39606)){
var vec__39366_39608 = cljs.core._nth.call(null,chunk__39363_39605,i__39365_39607);
var direction_39609 = cljs.core.nth.call(null,vec__39366_39608,(0),null);
var os_39610 = cljs.core.nth.call(null,vec__39366_39608,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39609)){
context.setLineDash(lineDash_39603);

context.lineDashOffset = os_39610;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39611 = seq__39362_39604;
var G__39612 = chunk__39363_39605;
var G__39613 = count__39364_39606;
var G__39614 = (i__39365_39607 + (1));
seq__39362_39604 = G__39611;
chunk__39363_39605 = G__39612;
count__39364_39606 = G__39613;
i__39365_39607 = G__39614;
continue;
} else {
var temp__4126__auto___39615__$1 = cljs.core.seq.call(null,seq__39362_39604);
if(temp__4126__auto___39615__$1){
var seq__39362_39616__$1 = temp__4126__auto___39615__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39362_39616__$1)){
var c__4598__auto___39617 = cljs.core.chunk_first.call(null,seq__39362_39616__$1);
var G__39618 = cljs.core.chunk_rest.call(null,seq__39362_39616__$1);
var G__39619 = c__4598__auto___39617;
var G__39620 = cljs.core.count.call(null,c__4598__auto___39617);
var G__39621 = (0);
seq__39362_39604 = G__39618;
chunk__39363_39605 = G__39619;
count__39364_39606 = G__39620;
i__39365_39607 = G__39621;
continue;
} else {
var vec__39367_39622 = cljs.core.first.call(null,seq__39362_39616__$1);
var direction_39623 = cljs.core.nth.call(null,vec__39367_39622,(0),null);
var os_39624 = cljs.core.nth.call(null,vec__39367_39622,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39623)){
context.setLineDash(lineDash_39603);

context.lineDashOffset = os_39624;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39625 = cljs.core.next.call(null,seq__39362_39616__$1);
var G__39626 = null;
var G__39627 = (0);
var G__39628 = (0);
seq__39362_39604 = G__39625;
chunk__39363_39605 = G__39626;
count__39364_39606 = G__39627;
i__39365_39607 = G__39628;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__39629 = seq__39348_39567;
var G__39630 = chunk__39349_39568;
var G__39631 = count__39350_39569;
var G__39632 = (i__39351_39570 + (1));
seq__39348_39567 = G__39629;
chunk__39349_39568 = G__39630;
count__39350_39569 = G__39631;
i__39351_39570 = G__39632;
continue;
} else {
var temp__4126__auto___39633__$1 = cljs.core.seq.call(null,seq__39348_39567);
if(temp__4126__auto___39633__$1){
var seq__39348_39634__$1 = temp__4126__auto___39633__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39348_39634__$1)){
var c__4598__auto___39635 = cljs.core.chunk_first.call(null,seq__39348_39634__$1);
var G__39636 = cljs.core.chunk_rest.call(null,seq__39348_39634__$1);
var G__39637 = c__4598__auto___39635;
var G__39638 = cljs.core.count.call(null,c__4598__auto___39635);
var G__39639 = (0);
seq__39348_39567 = G__39636;
chunk__39349_39568 = G__39637;
count__39350_39569 = G__39638;
i__39351_39570 = G__39639;
continue;
} else {
var vec__39368_39640 = cljs.core.first.call(null,seq__39348_39634__$1);
var from_39641 = cljs.core.nth.call(null,vec__39368_39640,(0),null);
var onto_39642 = cljs.core.nth.call(null,vec__39368_39640,(1),null);
var vec__39369_39643 = cljs.core.nth.call(null,vec__39368_39640,(2),null);
var fw_39644 = cljs.core.nth.call(null,vec__39369_39643,(0),null);
var bw_39645 = cljs.core.nth.call(null,vec__39369_39643,(1),null);
var switched_39646 = vec__39369_39643;
context.beginPath();

var vec__39370_39647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39641)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39641))], null);
var from_x_39648 = cljs.core.nth.call(null,vec__39370_39647,(0),null);
var from_y_39649 = cljs.core.nth.call(null,vec__39370_39647,(1),null);
var vec__39371_39650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39642)),Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39642))], null);
var onto_x_39651 = cljs.core.nth.call(null,vec__39371_39650,(0),null);
var onto_y_39652 = cljs.core.nth.call(null,vec__39371_39650,(1),null);
var vec__39372_39653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,from_39641)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,from_39641)))], null);
var from_x_p_39654 = cljs.core.nth.call(null,vec__39372_39653,(0),null);
var from_y_p_39655 = cljs.core.nth.call(null,vec__39372_39653,(1),null);
var vec__39373_39656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,cljs.core.nth.call(null,epsilons,onto_39642)),(- Math.sin.call(null,cljs.core.nth.call(null,epsilons,onto_39642)))], null);
var onto_x_p_39657 = cljs.core.nth.call(null,vec__39373_39656,(0),null);
var onto_y_p_39658 = cljs.core.nth.call(null,vec__39373_39656,(1),null);
var vec__39374_39659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * from_x_39648)),(ys + (pad * from_y_39649))], null);
var xa_39660 = cljs.core.nth.call(null,vec__39374_39659,(0),null);
var ya_39661 = cljs.core.nth.call(null,vec__39374_39659,(1),null);
var vec__39375_39662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * from_x_39648)) + (ch_pos_39566 * from_x_p_39654)),((ys + ((0.5 * inner_radius) * from_y_39649)) + (ch_pos_39566 * from_y_p_39655))], null);
var xb_39663 = cljs.core.nth.call(null,vec__39375_39662,(0),null);
var yb_39664 = cljs.core.nth.call(null,vec__39375_39662,(1),null);
var vec__39376_39665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xs + ((0.5 * inner_radius) * onto_x_39651)) + (ch_pos_39566 * onto_x_p_39657)),((ys + ((0.5 * inner_radius) * onto_y_39652)) + (ch_pos_39566 * onto_y_p_39658))], null);
var xc_39666 = cljs.core.nth.call(null,vec__39376_39665,(0),null);
var yc_39667 = cljs.core.nth.call(null,vec__39376_39665,(1),null);
var vec__39377_39668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xs + (pad * onto_x_39651)),(ys + (pad * onto_y_39652))], null);
var xd_39669 = cljs.core.nth.call(null,vec__39377_39668,(0),null);
var yd_39670 = cljs.core.nth.call(null,vec__39377_39668,(1),null);
context.moveTo(xa_39660,ya_39661);

context.bezierCurveTo(xb_39663,yb_39664,xc_39666,yc_39667,xd_39669,yd_39670);

var offset_39671 = cljs.core.mod.call(null,((timestamp / (1000)) * channel_width),((2.0 * channel_width) + (1)));
var lineDash_39672 = [(1),(2.0 * channel_width)];
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),switched_39646))){
context.strokeStyle = "rgb(255,255,255)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
context.strokeStyle = "rgb(0,0,0)";

context.lineWidth = ((channel_width / (2)) + (1));

context.stroke();

context.strokeStyle = cljstemplate.shape.rgba_str.call(null,cljs.core.conj.call(null,channel_39564,0.75));

context.lineWidth = (channel_width / (2));

context.stroke();
}

var seq__39378_39673 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fw_39644,offset_39671], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bw_39645,(- offset_39671)], null)], null));
var chunk__39379_39674 = null;
var count__39380_39675 = (0);
var i__39381_39676 = (0);
while(true){
if((i__39381_39676 < count__39380_39675)){
var vec__39382_39677 = cljs.core._nth.call(null,chunk__39379_39674,i__39381_39676);
var direction_39678 = cljs.core.nth.call(null,vec__39382_39677,(0),null);
var os_39679 = cljs.core.nth.call(null,vec__39382_39677,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39678)){
context.setLineDash(lineDash_39672);

context.lineDashOffset = os_39679;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39680 = seq__39378_39673;
var G__39681 = chunk__39379_39674;
var G__39682 = count__39380_39675;
var G__39683 = (i__39381_39676 + (1));
seq__39378_39673 = G__39680;
chunk__39379_39674 = G__39681;
count__39380_39675 = G__39682;
i__39381_39676 = G__39683;
continue;
} else {
var temp__4126__auto___39684__$2 = cljs.core.seq.call(null,seq__39378_39673);
if(temp__4126__auto___39684__$2){
var seq__39378_39685__$1 = temp__4126__auto___39684__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39378_39685__$1)){
var c__4598__auto___39686 = cljs.core.chunk_first.call(null,seq__39378_39685__$1);
var G__39687 = cljs.core.chunk_rest.call(null,seq__39378_39685__$1);
var G__39688 = c__4598__auto___39686;
var G__39689 = cljs.core.count.call(null,c__4598__auto___39686);
var G__39690 = (0);
seq__39378_39673 = G__39687;
chunk__39379_39674 = G__39688;
count__39380_39675 = G__39689;
i__39381_39676 = G__39690;
continue;
} else {
var vec__39383_39691 = cljs.core.first.call(null,seq__39378_39685__$1);
var direction_39692 = cljs.core.nth.call(null,vec__39383_39691,(0),null);
var os_39693 = cljs.core.nth.call(null,vec__39383_39691,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),direction_39692)){
context.setLineDash(lineDash_39672);

context.lineDashOffset = os_39693;

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,channel_39564);

context.lineWidth = channel_width;

context.stroke();

context.strokeStyle = "rgba(255,255,255, 0.5)";

context.lineWidth = (channel_width / (2));

context.stroke();
} else {
}

var G__39694 = cljs.core.next.call(null,seq__39378_39685__$1);
var G__39695 = null;
var G__39696 = (0);
var G__39697 = (0);
seq__39378_39673 = G__39694;
chunk__39379_39674 = G__39695;
count__39380_39675 = G__39696;
i__39381_39676 = G__39697;
continue;
}
} else {
}
}
break;
}

context.setLineDash([]);

var G__39698 = cljs.core.next.call(null,seq__39348_39634__$1);
var G__39699 = null;
var G__39700 = (0);
var G__39701 = (0);
seq__39348_39567 = G__39698;
chunk__39349_39568 = G__39699;
count__39350_39569 = G__39700;
i__39351_39570 = G__39701;
continue;
}
} else {
}
}
break;
}

var G__39702 = cljs.core.next.call(null,seq__39308_39557__$1);
var G__39703 = null;
var G__39704 = (0);
var G__39705 = (0);
seq__39308_39409 = G__39702;
chunk__39309_39410 = G__39703;
count__39310_39411 = G__39704;
i__39311_39412 = G__39705;
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

var seq__39384_39706 = cljs.core.seq.call(null,cljs.core.take.call(null,(n - (1)),cljs.core.drop.call(null,(1),gammas)));
var chunk__39385_39707 = null;
var count__39386_39708 = (0);
var i__39387_39709 = (0);
while(true){
if((i__39387_39709 < count__39386_39708)){
var gamma_39710 = cljs.core._nth.call(null,chunk__39385_39707,i__39387_39709);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_39710))),(ys + (radius * Math.cos.call(null,gamma_39710))));

var G__39711 = seq__39384_39706;
var G__39712 = chunk__39385_39707;
var G__39713 = count__39386_39708;
var G__39714 = (i__39387_39709 + (1));
seq__39384_39706 = G__39711;
chunk__39385_39707 = G__39712;
count__39386_39708 = G__39713;
i__39387_39709 = G__39714;
continue;
} else {
var temp__4126__auto___39715 = cljs.core.seq.call(null,seq__39384_39706);
if(temp__4126__auto___39715){
var seq__39384_39716__$1 = temp__4126__auto___39715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39384_39716__$1)){
var c__4598__auto___39717 = cljs.core.chunk_first.call(null,seq__39384_39716__$1);
var G__39718 = cljs.core.chunk_rest.call(null,seq__39384_39716__$1);
var G__39719 = c__4598__auto___39717;
var G__39720 = cljs.core.count.call(null,c__4598__auto___39717);
var G__39721 = (0);
seq__39384_39706 = G__39718;
chunk__39385_39707 = G__39719;
count__39386_39708 = G__39720;
i__39387_39709 = G__39721;
continue;
} else {
var gamma_39722 = cljs.core.first.call(null,seq__39384_39716__$1);
context.lineTo((xs + (radius * Math.sin.call(null,gamma_39722))),(ys + (radius * Math.cos.call(null,gamma_39722))));

var G__39723 = cljs.core.next.call(null,seq__39384_39716__$1);
var G__39724 = null;
var G__39725 = (0);
var G__39726 = (0);
seq__39384_39706 = G__39723;
chunk__39385_39707 = G__39724;
count__39386_39708 = G__39725;
i__39387_39709 = G__39726;
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
var vec__39728 = coords;
var x = cljs.core.nth.call(null,vec__39728,(0),null);
var y = cljs.core.nth.call(null,vec__39728,(1),null);
var d = cljs.core.nth.call(null,vec__39728,(2),null);
surface.fillStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.fill();
});
cljstemplate.shape.stroke_circle = (function stroke_circle(surface,coords,colour){
var vec__39730 = coords;
var x = cljs.core.nth.call(null,vec__39730,(0),null);
var y = cljs.core.nth.call(null,vec__39730,(1),null);
var d = cljs.core.nth.call(null,vec__39730,(2),null);
surface.strokeStyle = cljstemplate.shape.rgba_str.call(null,colour);

surface.beginPath();

surface.arc(x,y,d,(0),((2) * Math.PI),true);

surface.closePath();

return surface.stroke();
});
cljstemplate.shape.render_start = (function render_start(p__39731,context,timestamp,p__39732,sf,p__39733){
var map__39744 = p__39731;
var map__39744__$1 = ((cljs.core.seq_QMARK_.call(null,map__39744))?cljs.core.apply.call(null,cljs.core.hash_map,map__39744):map__39744);
var level = map__39744__$1;
var shapes = cljs.core.get.call(null,map__39744__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__39745 = cljs.core.get.call(null,map__39744__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__39745,(0),null);
var _ = cljs.core.nth.call(null,vec__39745,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__39745,(2),null);
var channels = cljs.core.get.call(null,map__39744__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__39746 = p__39732;
var ___$2 = cljs.core.nth.call(null,vec__39746,(0),null);
var bdr = cljs.core.nth.call(null,vec__39746,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__39746,(2),null);
var vec__39747 = p__39733;
var x_offset = cljs.core.nth.call(null,vec__39747,(0),null);
var y_offset = cljs.core.nth.call(null,vec__39747,(1),null);
var shape_39754 = cljs.core.nth.call(null,shapes,start);
var map__39748_39755 = shape_39754;
var map__39748_39756__$1 = ((cljs.core.seq_QMARK_.call(null,map__39748_39755))?cljs.core.apply.call(null,cljs.core.hash_map,map__39748_39755):map__39748_39755);
var vec__39749_39757 = cljs.core.get.call(null,map__39748_39756__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_39758 = cljs.core.nth.call(null,vec__39749_39757,(0),null);
var y_39759 = cljs.core.nth.call(null,vec__39749_39757,(1),null);
var __39760__$4 = cljs.core.nth.call(null,vec__39749_39757,(2),null);
var n_39761 = cljs.core.get.call(null,map__39748_39756__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs_39762 = ((x_39758 * sf) + x_offset);
var ys_39763 = ((y_39759 * sf) + y_offset);
var vtxs_39764 = cljstemplate.shape.vertices.call(null,shape_39754,xs_39762,ys_39763,sf);
var radius_39765 = (cljstemplate.shape.radii.call(null,n_39761) * sf);
var many_channels_39766 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,((4) - cljs.core.count.call(null,channels)),channels));
var channel_count_39767 = cljs.core.count.call(null,many_channels_39766);
context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_39764);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39762,ys_39763,radius_39765], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

var seq__39750_39768 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_39767));
var chunk__39751_39769 = null;
var count__39752_39770 = (0);
var i__39753_39771 = (0);
while(true){
if((i__39753_39771 < count__39752_39770)){
var i_39772 = cljs.core._nth.call(null,chunk__39751_39769,i__39753_39771);
var f_39773 = cljs.core.mod.call(null,((timestamp / (100)) + (i_39772 * (radius_39765 / channel_count_39767))),radius_39765);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39762,ys_39763,f_39773], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_39766,i_39772),((1) - (f_39773 / radius_39765))));

var G__39774 = seq__39750_39768;
var G__39775 = chunk__39751_39769;
var G__39776 = count__39752_39770;
var G__39777 = (i__39753_39771 + (1));
seq__39750_39768 = G__39774;
chunk__39751_39769 = G__39775;
count__39752_39770 = G__39776;
i__39753_39771 = G__39777;
continue;
} else {
var temp__4126__auto___39778 = cljs.core.seq.call(null,seq__39750_39768);
if(temp__4126__auto___39778){
var seq__39750_39779__$1 = temp__4126__auto___39778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39750_39779__$1)){
var c__4598__auto___39780 = cljs.core.chunk_first.call(null,seq__39750_39779__$1);
var G__39781 = cljs.core.chunk_rest.call(null,seq__39750_39779__$1);
var G__39782 = c__4598__auto___39780;
var G__39783 = cljs.core.count.call(null,c__4598__auto___39780);
var G__39784 = (0);
seq__39750_39768 = G__39781;
chunk__39751_39769 = G__39782;
count__39752_39770 = G__39783;
i__39753_39771 = G__39784;
continue;
} else {
var i_39785 = cljs.core.first.call(null,seq__39750_39779__$1);
var f_39786 = cljs.core.mod.call(null,((timestamp / (100)) + (i_39785 * (radius_39765 / channel_count_39767))),radius_39765);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39762,ys_39763,f_39786], null),cljs.core.conj.call(null,cljs.core.nth.call(null,many_channels_39766,i_39785),((1) - (f_39786 / radius_39765))));

var G__39787 = cljs.core.next.call(null,seq__39750_39779__$1);
var G__39788 = null;
var G__39789 = (0);
var G__39790 = (0);
seq__39750_39768 = G__39787;
chunk__39751_39769 = G__39788;
count__39752_39770 = G__39789;
i__39753_39771 = G__39790;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_39764);

context.strokeStyle = cljstemplate.shape.rgb_str.call(null,bdr);

context.lineWidth = (1);

context.stroke();

return level;
});
cljstemplate.shape.render_end = (function render_end(p__39791,context,timestamp,p__39792,sf,p__39793,done){
var map__39812 = p__39791;
var map__39812__$1 = ((cljs.core.seq_QMARK_.call(null,map__39812))?cljs.core.apply.call(null,cljs.core.hash_map,map__39812):map__39812);
var level = map__39812__$1;
var shapes = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var vec__39813 = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__39813,(0),null);
var _ = cljs.core.nth.call(null,vec__39813,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__39813,(2),null);
var channels = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var vec__39814 = p__39792;
var ___$2 = cljs.core.nth.call(null,vec__39814,(0),null);
var bdr = cljs.core.nth.call(null,vec__39814,(1),null);
var fg = cljs.core.nth.call(null,vec__39814,(2),null);
var vec__39815 = p__39793;
var x_offset = cljs.core.nth.call(null,vec__39815,(0),null);
var y_offset = cljs.core.nth.call(null,vec__39815,(1),null);
var shape_39830 = cljs.core.nth.call(null,shapes,end);
var map__39816_39831 = shape_39830;
var map__39816_39832__$1 = ((cljs.core.seq_QMARK_.call(null,map__39816_39831))?cljs.core.apply.call(null,cljs.core.hash_map,map__39816_39831):map__39816_39831);
var vec__39817_39833 = cljs.core.get.call(null,map__39816_39832__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x_39834 = cljs.core.nth.call(null,vec__39817_39833,(0),null);
var y_39835 = cljs.core.nth.call(null,vec__39817_39833,(1),null);
var __39836__$3 = cljs.core.nth.call(null,vec__39817_39833,(2),null);
var n_39837 = cljs.core.get.call(null,map__39816_39832__$1,new cljs.core.Keyword(null,"n","n",562130025));
var wiring_39838 = cljs.core.get.call(null,map__39816_39832__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var xs_39839 = ((x_39834 * sf) + x_offset);
var ys_39840 = ((y_39835 * sf) + y_offset);
var vtxs_39841 = cljstemplate.shape.vertices.call(null,shape_39830,xs_39839,ys_39840,sf);
var radius_39842 = (cljstemplate.shape.radii.call(null,n_39837) * sf);
var radius_3rd_39843 = (radius_39842 / (3));
var radius_5th_39844 = (radius_39842 / (5));
var radius_15th_39845 = (radius_39842 / (15));
var radius_20th_39846 = (radius_39842 / (30));
var channel_count_39847 = cljs.core.count.call(null,channels);
context.lineWidth = (5);

context.save();

cljstemplate.shape.trace_path.call(null,context,vtxs_39841);

context.clip();

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39839,ys_39840,radius_39842], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null));

if(cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (shape_39830,map__39816_39831,map__39816_39832__$1,vec__39817_39833,x_39834,y_39835,__39836__$3,n_39837,wiring_39838,xs_39839,ys_39840,vtxs_39841,radius_39842,radius_3rd_39843,radius_5th_39844,radius_15th_39845,radius_20th_39846,channel_count_39847,map__39812,map__39812__$1,level,shapes,vec__39813,end,_,___$1,channels,vec__39814,___$2,bdr,fg,vec__39815,x_offset,y_offset){
return (function iter__39818(s__39819){
return (new cljs.core.LazySeq(null,((function (shape_39830,map__39816_39831,map__39816_39832__$1,vec__39817_39833,x_39834,y_39835,__39836__$3,n_39837,wiring_39838,xs_39839,ys_39840,vtxs_39841,radius_39842,radius_3rd_39843,radius_5th_39844,radius_15th_39845,radius_20th_39846,channel_count_39847,map__39812,map__39812__$1,level,shapes,vec__39813,end,_,___$1,channels,vec__39814,___$2,bdr,fg,vec__39815,x_offset,y_offset){
return (function (){
var s__39819__$1 = s__39819;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39819__$1);
if(temp__4126__auto__){
var s__39819__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39819__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__39819__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__39821 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__39820 = (0);
while(true){
if((i__39820 < size__4566__auto__)){
var channel_wiring = cljs.core._nth.call(null,c__4565__auto__,i__39820);
cljs.core.chunk_append.call(null,b__39821,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)));

var G__39848 = (i__39820 + (1));
i__39820 = G__39848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39821),iter__39818.call(null,cljs.core.chunk_rest.call(null,s__39819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39821),null);
}
} else {
var channel_wiring = cljs.core.first.call(null,s__39819__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,channel_wiring)),iter__39818.call(null,cljs.core.rest.call(null,s__39819__$2)));
}
} else {
return null;
}
break;
}
});})(shape_39830,map__39816_39831,map__39816_39832__$1,vec__39817_39833,x_39834,y_39835,__39836__$3,n_39837,wiring_39838,xs_39839,ys_39840,vtxs_39841,radius_39842,radius_3rd_39843,radius_5th_39844,radius_15th_39845,radius_20th_39846,channel_count_39847,map__39812,map__39812__$1,level,shapes,vec__39813,end,_,___$1,channels,vec__39814,___$2,bdr,fg,vec__39815,x_offset,y_offset))
,null,null));
});})(shape_39830,map__39816_39831,map__39816_39832__$1,vec__39817_39833,x_39834,y_39835,__39836__$3,n_39837,wiring_39838,xs_39839,ys_39840,vtxs_39841,radius_39842,radius_3rd_39843,radius_5th_39844,radius_15th_39845,radius_20th_39846,channel_count_39847,map__39812,map__39812__$1,level,shapes,vec__39813,end,_,___$1,channels,vec__39814,___$2,bdr,fg,vec__39815,x_offset,y_offset))
;
return iter__4567__auto__.call(null,wiring_39838);
})())){
var seq__39822_39849 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(5)));
var chunk__39823_39850 = null;
var count__39824_39851 = (0);
var i__39825_39852 = (0);
while(true){
if((i__39825_39852 < count__39824_39851)){
var i_39853 = cljs.core._nth.call(null,chunk__39823_39850,i__39825_39852);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39839,ys_39840,(radius_39842 / ((5) - i_39853))], null),cljs.core.conj.call(null,fg,((1) / i_39853)));

var G__39854 = seq__39822_39849;
var G__39855 = chunk__39823_39850;
var G__39856 = count__39824_39851;
var G__39857 = (i__39825_39852 + (1));
seq__39822_39849 = G__39854;
chunk__39823_39850 = G__39855;
count__39824_39851 = G__39856;
i__39825_39852 = G__39857;
continue;
} else {
var temp__4126__auto___39858 = cljs.core.seq.call(null,seq__39822_39849);
if(temp__4126__auto___39858){
var seq__39822_39859__$1 = temp__4126__auto___39858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39822_39859__$1)){
var c__4598__auto___39860 = cljs.core.chunk_first.call(null,seq__39822_39859__$1);
var G__39861 = cljs.core.chunk_rest.call(null,seq__39822_39859__$1);
var G__39862 = c__4598__auto___39860;
var G__39863 = cljs.core.count.call(null,c__4598__auto___39860);
var G__39864 = (0);
seq__39822_39849 = G__39861;
chunk__39823_39850 = G__39862;
count__39824_39851 = G__39863;
i__39825_39852 = G__39864;
continue;
} else {
var i_39865 = cljs.core.first.call(null,seq__39822_39859__$1);
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_39839,ys_39840,(radius_39842 / ((5) - i_39865))], null),cljs.core.conj.call(null,fg,((1) / i_39865)));

var G__39866 = cljs.core.next.call(null,seq__39822_39859__$1);
var G__39867 = null;
var G__39868 = (0);
var G__39869 = (0);
seq__39822_39849 = G__39866;
chunk__39823_39850 = G__39867;
count__39824_39851 = G__39868;
i__39825_39852 = G__39869;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,done,true);

cljstemplate.shape.render_attention.call(null,new cljs.core.Keyword(null,"end","end",-268185958),context,xs_39839,ys_39840,radius_39842,timestamp);
} else {
}

var seq__39826_39870 = cljs.core.seq.call(null,cljs.core.range.call(null,channel_count_39847));
var chunk__39827_39871 = null;
var count__39828_39872 = (0);
var i__39829_39873 = (0);
while(true){
if((i__39829_39873 < count__39828_39872)){
var i_39874 = cljs.core._nth.call(null,chunk__39827_39871,i__39829_39873);
var angle_39875 = ((i_39874 * (cljstemplate.constance.TAU / channel_count_39847)) - (timestamp / (3000)));
var xi_39876 = (xs_39839 + (radius_3rd_39843 * Math.sin.call(null,angle_39875)));
var yi_39877 = (ys_39840 + (radius_3rd_39843 * Math.cos.call(null,angle_39875)));
var on_39878 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_39838,i_39874)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_39876,yi_39877,radius_5th_39844], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_39874),(cljs.core.truth_(on_39878)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_39876,yi_39877,radius_5th_39844], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_39874),(cljs.core.truth_(on_39878)?0.75:0.25)));

if(cljs.core.truth_(on_39878)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_39876 - radius_15th_39845),(yi_39877 - radius_15th_39845),radius_15th_39845], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_39876 - radius_15th_39845),(yi_39877 - radius_15th_39845),radius_20th_39846], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__39879 = seq__39826_39870;
var G__39880 = chunk__39827_39871;
var G__39881 = count__39828_39872;
var G__39882 = (i__39829_39873 + (1));
seq__39826_39870 = G__39879;
chunk__39827_39871 = G__39880;
count__39828_39872 = G__39881;
i__39829_39873 = G__39882;
continue;
} else {
var temp__4126__auto___39883 = cljs.core.seq.call(null,seq__39826_39870);
if(temp__4126__auto___39883){
var seq__39826_39884__$1 = temp__4126__auto___39883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39826_39884__$1)){
var c__4598__auto___39885 = cljs.core.chunk_first.call(null,seq__39826_39884__$1);
var G__39886 = cljs.core.chunk_rest.call(null,seq__39826_39884__$1);
var G__39887 = c__4598__auto___39885;
var G__39888 = cljs.core.count.call(null,c__4598__auto___39885);
var G__39889 = (0);
seq__39826_39870 = G__39886;
chunk__39827_39871 = G__39887;
count__39828_39872 = G__39888;
i__39829_39873 = G__39889;
continue;
} else {
var i_39890 = cljs.core.first.call(null,seq__39826_39884__$1);
var angle_39891 = ((i_39890 * (cljstemplate.constance.TAU / channel_count_39847)) - (timestamp / (3000)));
var xi_39892 = (xs_39839 + (radius_3rd_39843 * Math.sin.call(null,angle_39891)));
var yi_39893 = (ys_39840 + (radius_3rd_39843 * Math.cos.call(null,angle_39891)));
var on_39894 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),null], null), null),cljs.core.flatten.call(null,cljs.core.nth.call(null,wiring_39838,i_39890)));
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_39892,yi_39893,radius_5th_39844], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_39890),(cljs.core.truth_(on_39894)?(1):0.25)));

cljstemplate.shape.stroke_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi_39892,yi_39893,radius_5th_39844], null),cljs.core.conj.call(null,cljs.core.nth.call(null,channels,i_39890),(cljs.core.truth_(on_39894)?0.75:0.25)));

if(cljs.core.truth_(on_39894)){
cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_39892 - radius_15th_39845),(yi_39893 - radius_15th_39845),radius_15th_39845], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));

cljstemplate.shape.fill_circle.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xi_39892 - radius_15th_39845),(yi_39893 - radius_15th_39845),radius_20th_39846], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),0.15], null));
} else {
}

var G__39895 = cljs.core.next.call(null,seq__39826_39884__$1);
var G__39896 = null;
var G__39897 = (0);
var G__39898 = (0);
seq__39826_39870 = G__39895;
chunk__39827_39871 = G__39896;
count__39828_39872 = G__39897;
i__39829_39873 = G__39898;
continue;
}
} else {
}
}
break;
}

context.restore();

cljstemplate.shape.trace_path.call(null,context,vtxs_39841);

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
var vec__39900 = temp__4124__auto__;
var args = cljs.core.nth.call(null,vec__39900,(0),null);
var cached_value = cljs.core.nth.call(null,vec__39900,(1),null);
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

var seq__39905 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__39906 = null;
var count__39907 = (0);
var i__39908 = (0);
while(true){
if((i__39908 < count__39907)){
var i = cljs.core._nth.call(null,chunk__39906,i__39908);
var start_39909 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_39910 = (start_39909 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_39909,end_39910,true);

context.closePath();

context.fill();

var G__39911 = seq__39905;
var G__39912 = chunk__39906;
var G__39913 = count__39907;
var G__39914 = (i__39908 + (1));
seq__39905 = G__39911;
chunk__39906 = G__39912;
count__39907 = G__39913;
i__39908 = G__39914;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__39905);
if(temp__4126__auto__){
var seq__39905__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39905__$1)){
var c__4598__auto__ = cljs.core.chunk_first.call(null,seq__39905__$1);
var G__39915 = cljs.core.chunk_rest.call(null,seq__39905__$1);
var G__39916 = c__4598__auto__;
var G__39917 = cljs.core.count.call(null,c__4598__auto__);
var G__39918 = (0);
seq__39905 = G__39915;
chunk__39906 = G__39916;
count__39907 = G__39917;
i__39908 = G__39918;
continue;
} else {
var i = cljs.core.first.call(null,seq__39905__$1);
var start_39919 = ((i * (cljstemplate.constance.PI / (8))) - (timestamp / (3000)));
var end_39920 = (start_39919 - 0.2);
context.beginPath();

context.moveTo(x,y);

context.arc(x,y,radius,start_39919,end_39920,true);

context.closePath();

context.fill();

var G__39921 = cljs.core.next.call(null,seq__39905__$1);
var G__39922 = null;
var G__39923 = (0);
var G__39924 = (0);
seq__39905 = G__39921;
chunk__39906 = G__39922;
count__39907 = G__39923;
i__39908 = G__39924;
continue;
}
} else {
return null;
}
}
break;
}
});
cljstemplate.shape.render = (function render(p__39927,level,mouse,timestamp,done){
var vec__39931 = p__39927;
var context = cljs.core.nth.call(null,vec__39931,(0),null);
var width = cljs.core.nth.call(null,vec__39931,(1),null);
var height = cljs.core.nth.call(null,vec__39931,(2),null);
var sf = cljstemplate.shape.scale_factor.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level),width,height);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((width - (sf * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(level))) / (2)),((height - (sf * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(level))) / (2))], null);
var channels = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(level);
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(level);
var vec__39932 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(level);
var start = cljs.core.nth.call(null,vec__39932,(0),null);
var vec__39933 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(level);
var end = cljs.core.nth.call(null,vec__39933,(0),null);
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

return cljstemplate.shape.render_end.call(null,cljstemplate.shape.render_start.call(null,cljs.core.update.call(null,cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__39932,start,vec__39933,end,ends,vec__39931,context,width,height){
return (function (p1__39925_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_at_rest,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__39925_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__39932,start,vec__39933,end,ends,vec__39931,context,width,height))
),new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (sf,offset,channels,colours,vec__39932,start,vec__39933,end,ends,vec__39931,context,width,height){
return (function (p1__39926_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.shape.render_in_motion,context,sf,offset,mouse,channels,colours,ends,timestamp),p1__39926_SHARP_,cljs.core.range.call(null)));
});})(sf,offset,channels,colours,vec__39932,start,vec__39933,end,ends,vec__39931,context,width,height))
),context,timestamp,colours,sf,offset),context,timestamp,colours,sf,offset,done);
});

//# sourceMappingURL=shape.js.map