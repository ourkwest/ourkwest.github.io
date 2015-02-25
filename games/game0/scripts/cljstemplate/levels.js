// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.levels');
goog.require('cljs.core');
goog.require('cljstemplate.shapeconstance');
goog.require('cljstemplate.constance');
goog.require('cljstemplate.logging');
cljstemplate.levels.log = cljstemplate.logging.logger.call(null,new cljs.core.Keyword(null,"levels","levels",-950747887));
cljstemplate.levels.apply_step = (function apply_step(p__6740,p__6741){
var vec__6744 = p__6740;
var x = cljs.core.nth.call(null,vec__6744,(0),null);
var y = cljs.core.nth.call(null,vec__6744,(1),null);
var rotation = cljs.core.nth.call(null,vec__6744,(2),null);
var vec__6745 = p__6741;
var angle = cljs.core.nth.call(null,vec__6745,(0),null);
var distance = cljs.core.nth.call(null,vec__6745,(1),null);
var new_rotation = (rotation + angle);
var new_x = (x + (distance * Math.sin.call(null,new_rotation)));
var new_y = (y + (distance * Math.cos.call(null,new_rotation)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y,new_rotation], null);
});
/**
* @param {...*} var_args
*/
cljstemplate.levels.path = (function() { 
var path__delegate = function (location,steps){
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,steps);
if(cljs.core.truth_(temp__4124__auto__)){
var step = temp__4124__auto__;
var G__6746 = cljstemplate.levels.apply_step.call(null,location,step);
var G__6747 = cljs.core.rest.call(null,steps);
location = G__6746;
steps = G__6747;
continue;
} else {
return location;
}
break;
}
};
var path = function (location,var_args){
var steps = null;
if (arguments.length > 1) {
var G__6748__i = 0, G__6748__a = new Array(arguments.length -  1);
while (G__6748__i < G__6748__a.length) {G__6748__a[G__6748__i] = arguments[G__6748__i + 1]; ++G__6748__i;}
  steps = new cljs.core.IndexedSeq(G__6748__a,0);
} 
return path__delegate.call(this,location,steps);};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = (function (arglist__6749){
var location = cljs.core.first(arglist__6749);
var steps = cljs.core.rest(arglist__6749);
return path__delegate(location,steps);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
cljstemplate.levels.pads = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.shapeconstance.tri_pad,(4),cljstemplate.shapeconstance.square_pad,(6),cljstemplate.shapeconstance.hex_pad,(8),cljstemplate.shapeconstance.oct_pad], null);
cljstemplate.levels.angles = new cljs.core.PersistentArrayMap(null, 4, [(3),cljstemplate.constance.TAU_3RD,(4),cljstemplate.constance.TAU_4TH,(6),cljstemplate.constance.TAU_6TH,(8),cljstemplate.constance.TAU_8TH], null);
cljstemplate.levels.mk_shapes = (function mk_shapes(shapes,p__6751,p__6752){
var vec__6759 = p__6751;
var x = cljs.core.nth.call(null,vec__6759,(0),null);
var y = cljs.core.nth.call(null,vec__6759,(1),null);
var r = cljs.core.nth.call(null,vec__6759,(2),null);
var vec__6760 = p__6752;
var n = cljs.core.nth.call(null,vec__6760,(0),null);
var neighbours = cljs.core.nth.call(null,vec__6760,(1),null);
var rest = cljs.core.nthnext.call(null,vec__6760,(2));
var my_pad = cljstemplate.levels.pads.call(null,n);
var new_shape = ((cljs.core._EQ_.call(null,(0),n))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"location","location",1815599388),cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.constance.PI,(0)], null))], null)], null));
var my_angle = cljstemplate.levels.angles.call(null,n);
var neighbours_pairs = cljs.core.partition.call(null,(2),neighbours);
var neighbour_count = cljs.core.count.call(null,neighbours_pairs);
var neighbour_angles = cljs.core.iterate.call(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__6759,x,y,r,vec__6760,n,neighbours,rest){
return (function (p1__6750_SHARP_){
return (p1__6750_SHARP_ + my_angle);
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,vec__6759,x,y,r,vec__6760,n,neighbours,rest))
,(cljstemplate.constance.PI + my_angle));
var neighbour_shapes = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4567__auto__ = ((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__6759,x,y,r,vec__6760,n,neighbours,rest){
return (function iter__6761(s__6762){
return (new cljs.core.LazySeq(null,((function (my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__6759,x,y,r,vec__6760,n,neighbours,rest){
return (function (){
var s__6762__$1 = s__6762;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6762__$1);
if(temp__4126__auto__){
var s__6762__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6762__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6762__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6764 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6763 = (0);
while(true){
if((i__6763 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6763);
cljs.core.chunk_append.call(null,b__6764,mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,neighbour_angles,i),my_pad], null)),cljs.core.nth.call(null,neighbours_pairs,i)));

var G__6765 = (i__6763 + (1));
i__6763 = G__6765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6764),iter__6761.call(null,cljs.core.chunk_rest.call(null,s__6762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6764),null);
}
} else {
var i = cljs.core.first.call(null,s__6762__$2);
return cljs.core.cons.call(null,mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,cljstemplate.levels.path.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_pad], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,neighbour_angles,i),my_pad], null)),cljs.core.nth.call(null,neighbours_pairs,i)),iter__6761.call(null,cljs.core.rest.call(null,s__6762__$2)));
}
} else {
return null;
}
break;
}
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__6759,x,y,r,vec__6760,n,neighbours,rest))
,null,null));
});})(my_pad,new_shape,my_angle,neighbours_pairs,neighbour_count,neighbour_angles,vec__6759,x,y,r,vec__6760,n,neighbours,rest))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,neighbour_count));
})());
var more_shapes = ((rest)?mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),rest):cljs.core.PersistentVector.EMPTY);
return cljs.core.vec.call(null,cljs.core.concat.call(null,shapes,new_shape,neighbour_shapes,more_shapes));
});
/**
* Round a double to the given precision (number of significant digits)
*/
cljstemplate.levels.round2 = (function round2(precision,d){
var factor = Math.pow.call(null,(10),precision);
return (Math.round.call(null,(d * factor)) / factor);
});
cljstemplate.levels.round_location = (function round_location(p__6766){
var vec__6768 = p__6766;
var x = cljs.core.nth.call(null,vec__6768,(0),null);
var y = cljs.core.nth.call(null,vec__6768,(1),null);
var r = cljs.core.nth.call(null,vec__6768,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.round2.call(null,(2),x),cljstemplate.levels.round2.call(null,(2),y),cljstemplate.levels.round2.call(null,(4),r)], null);
});
cljstemplate.levels.round_shapes = (function round_shapes(shapes){
return cljs.core.mapv.call(null,(function (p1__6769_SHARP_){
return cljs.core.update_in.call(null,p1__6769_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),cljstemplate.levels.round_location);
}),shapes);
});
cljstemplate.levels.translate_each = (function translate_each(by_x,by_y,shape){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(0)], null),cljs.core._PLUS_,by_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(1)], null),cljs.core._PLUS_,by_y);
});
cljstemplate.levels.translate = (function translate(shapes,by_x,by_y){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.translate_each,by_x,by_y),shapes);
});
cljstemplate.levels.padding = cljstemplate.levels.round2.call(null,(2),(1.1 * cljstemplate.shapeconstance.oct_radius));
cljstemplate.levels.centre = (function centre(shapes){
var xs = cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,new cljs.core.Keyword(null,"location","location",1815599388),shapes));
var ys = cljs.core.map.call(null,cljs.core.second,cljs.core.map.call(null,new cljs.core.Keyword(null,"location","location",1815599388),shapes));
var min_x = cljs.core.reduce.call(null,cljs.core.min,xs);
var min_y = cljs.core.reduce.call(null,cljs.core.min,ys);
var max_x = cljs.core.reduce.call(null,cljs.core.max,xs);
var max_y = cljs.core.reduce.call(null,cljs.core.max,ys);
var new_shapes = cljstemplate.levels.translate.call(null,shapes,(cljstemplate.levels.padding - min_x),(cljstemplate.levels.padding - min_y));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shapes,(((2) * cljstemplate.levels.padding) + (max_x - min_x)),(((2) * cljstemplate.levels.padding) + (max_y - min_y))], null);
});
cljstemplate.levels.add_shape_wires = (function add_shape_wires(channel_count,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__6790(s__6791){
return (new cljs.core.LazySeq(null,(function (){
var s__6791__$1 = s__6791;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6791__$1);
if(temp__4126__auto__){
var s__6791__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6791__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6791__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6793 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6792 = (0);
while(true){
if((i__6792 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6792);
cljs.core.chunk_append.call(null,b__6793,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i__6792,i,c__4565__auto__,size__4566__auto__,b__6793,s__6791__$2,temp__4126__auto__){
return (function iter__6802(s__6803){
return (new cljs.core.LazySeq(null,((function (i__6792,i,c__4565__auto__,size__4566__auto__,b__6793,s__6791__$2,temp__4126__auto__){
return (function (){
var s__6803__$1 = s__6803;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6803__$1);
if(temp__4126__auto____$1){
var s__6803__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6803__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first.call(null,s__6803__$2);
var size__4566__auto____$1 = cljs.core.count.call(null,c__4565__auto____$1);
var b__6805 = cljs.core.chunk_buffer.call(null,size__4566__auto____$1);
if((function (){var i__6804 = (0);
while(true){
if((i__6804 < size__4566__auto____$1)){
var j = cljs.core._nth.call(null,c__4565__auto____$1,i__6804);
cljs.core.chunk_append.call(null,b__6805,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__6810 = (i__6804 + (1));
i__6804 = G__6810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6805),iter__6802.call(null,cljs.core.chunk_rest.call(null,s__6803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6805),null);
}
} else {
var j = cljs.core.first.call(null,s__6803__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__6802.call(null,cljs.core.rest.call(null,s__6803__$2)));
}
} else {
return null;
}
break;
}
});})(i__6792,i,c__4565__auto__,size__4566__auto__,b__6793,s__6791__$2,temp__4126__auto__))
,null,null));
});})(i__6792,i,c__4565__auto__,size__4566__auto__,b__6793,s__6791__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.rand_int.call(null,(2))));
})()));

var G__6811 = (i__6792 + (1));
i__6792 = G__6811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6793),iter__6790.call(null,cljs.core.chunk_rest.call(null,s__6791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6793),null);
}
} else {
var i = cljs.core.first.call(null,s__6791__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i,s__6791__$2,temp__4126__auto__){
return (function iter__6806(s__6807){
return (new cljs.core.LazySeq(null,((function (i,s__6791__$2,temp__4126__auto__){
return (function (){
var s__6807__$1 = s__6807;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6807__$1);
if(temp__4126__auto____$1){
var s__6807__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6807__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6807__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6809 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6808 = (0);
while(true){
if((i__6808 < size__4566__auto__)){
var j = cljs.core._nth.call(null,c__4565__auto__,i__6808);
cljs.core.chunk_append.call(null,b__6809,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})());

var G__6812 = (i__6808 + (1));
i__6808 = G__6812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6809),iter__6806.call(null,cljs.core.chunk_rest.call(null,s__6807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6809),null);
}
} else {
var j = cljs.core.first.call(null,s__6807__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
var b = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(a + (1)),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
})(),iter__6806.call(null,cljs.core.rest.call(null,s__6807__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__6791__$2,temp__4126__auto__))
,null,null));
});})(i,s__6791__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.rand_int.call(null,(2))));
})()),iter__6790.call(null,cljs.core.rest.call(null,s__6791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_blank_wires = (function add_blank_wires(channel_count,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__6817(s__6818){
return (new cljs.core.LazySeq(null,(function (){
var s__6818__$1 = s__6818;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6818__$1);
if(temp__4126__auto__){
var s__6818__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6818__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6818__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6820 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6819 = (0);
while(true){
if((i__6819 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6819);
cljs.core.chunk_append.call(null,b__6820,cljs.core.PersistentVector.EMPTY);

var G__6821 = (i__6819 + (1));
i__6819 = G__6821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6820),iter__6817.call(null,cljs.core.chunk_rest.call(null,s__6818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6820),null);
}
} else {
var i = cljs.core.first.call(null,s__6818__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.EMPTY,iter__6817.call(null,cljs.core.rest.call(null,s__6818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_wires = (function add_wires(shapes,channel_count){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_shape_wires,channel_count),shapes);
});
cljstemplate.levels.blank_wires = (function blank_wires(shapes,channel_count){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_blank_wires,channel_count),shapes);
});
cljstemplate.levels.endpoint_wiring = (function endpoint_wiring(channel_count,direction,shape){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),cljs.core.vec.call(null,(function (){var iter__4567__auto__ = (function iter__6842(s__6843){
return (new cljs.core.LazySeq(null,(function (){
var s__6843__$1 = s__6843;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6843__$1);
if(temp__4126__auto__){
var s__6843__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6843__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6843__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6845 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6844 = (0);
while(true){
if((i__6844 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6844);
cljs.core.chunk_append.call(null,b__6845,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i__6844,i,c__4565__auto__,size__4566__auto__,b__6845,s__6843__$2,temp__4126__auto__){
return (function iter__6854(s__6855){
return (new cljs.core.LazySeq(null,((function (i__6844,i,c__4565__auto__,size__4566__auto__,b__6845,s__6843__$2,temp__4126__auto__){
return (function (){
var s__6855__$1 = s__6855;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6855__$1);
if(temp__4126__auto____$1){
var s__6855__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6855__$2)){
var c__4565__auto____$1 = cljs.core.chunk_first.call(null,s__6855__$2);
var size__4566__auto____$1 = cljs.core.count.call(null,c__4565__auto____$1);
var b__6857 = cljs.core.chunk_buffer.call(null,size__4566__auto____$1);
if((function (){var i__6856 = (0);
while(true){
if((i__6856 < size__4566__auto____$1)){
var j = cljs.core._nth.call(null,c__4565__auto____$1,i__6856);
cljs.core.chunk_append.call(null,b__6857,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__6862 = (i__6856 + (1));
i__6856 = G__6862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6857),iter__6854.call(null,cljs.core.chunk_rest.call(null,s__6855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6857),null);
}
} else {
var j = cljs.core.first.call(null,s__6855__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__6854.call(null,cljs.core.rest.call(null,s__6855__$2)));
}
} else {
return null;
}
break;
}
});})(i__6844,i,c__4565__auto__,size__4566__auto__,b__6845,s__6843__$2,temp__4126__auto__))
,null,null));
});})(i__6844,i,c__4565__auto__,size__4566__auto__,b__6845,s__6843__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)));
})()));

var G__6863 = (i__6844 + (1));
i__6844 = G__6863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6845),iter__6842.call(null,cljs.core.chunk_rest.call(null,s__6843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6845),null);
}
} else {
var i = cljs.core.first.call(null,s__6843__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4567__auto__ = ((function (i,s__6843__$2,temp__4126__auto__){
return (function iter__6858(s__6859){
return (new cljs.core.LazySeq(null,((function (i,s__6843__$2,temp__4126__auto__){
return (function (){
var s__6859__$1 = s__6859;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6859__$1);
if(temp__4126__auto____$1){
var s__6859__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6859__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6859__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6861 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6860 = (0);
while(true){
if((i__6860 < size__4566__auto__)){
var j = cljs.core._nth.call(null,c__4565__auto__,i__6860);
cljs.core.chunk_append.call(null,b__6861,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)));

var G__6864 = (i__6860 + (1));
i__6860 = G__6864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6861),iter__6858.call(null,cljs.core.chunk_rest.call(null,s__6859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6861),null);
}
} else {
var j = cljs.core.first.call(null,s__6859__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,direction,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(9)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),j], null)),iter__6858.call(null,cljs.core.rest.call(null,s__6859__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__6843__$2,temp__4126__auto__))
,null,null));
});})(i,s__6843__$2,temp__4126__auto__))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(shape)));
})()),iter__6842.call(null,cljs.core.rest.call(null,s__6843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4567__auto__.call(null,cljs.core.range.call(null,channel_count));
})()));
});
cljstemplate.levels.add_endpoint_wiring = (function add_endpoint_wiring(shapes,shape_id,channel_count,direction){
return cljs.core.update_in.call(null,shapes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),cljs.core.partial.call(null,cljstemplate.levels.endpoint_wiring,channel_count,direction));
});
cljstemplate.levels.get_sides = (function get_sides(shape){
var map__6872 = shape;
var map__6872__$1 = ((cljs.core.seq_QMARK_.call(null,map__6872))?cljs.core.apply.call(null,cljs.core.hash_map,map__6872):map__6872);
var vec__6873 = cljs.core.get.call(null,map__6872__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var x = cljs.core.nth.call(null,vec__6873,(0),null);
var y = cljs.core.nth.call(null,vec__6873,(1),null);
var r = cljs.core.nth.call(null,vec__6873,(2),null);
var n = cljs.core.get.call(null,map__6872__$1,new cljs.core.Keyword(null,"n","n",562130025));
var shape_angle = cljstemplate.levels.angles.call(null,n);
var radius = cljstemplate.levels.pads.call(null,n);
var iter__4567__auto__ = ((function (map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius){
return (function iter__6874(s__6875){
return (new cljs.core.LazySeq(null,((function (map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius){
return (function (){
var s__6875__$1 = s__6875;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6875__$1);
if(temp__4126__auto__){
var s__6875__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6875__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6875__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6877 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6876 = (0);
while(true){
if((i__6876 < size__4566__auto__)){
var side_angle = cljs.core._nth.call(null,c__4565__auto__,i__6876);
cljs.core.chunk_append.call(null,b__6877,(function (){var side_x = (x + (radius * Math.sin.call(null,side_angle)));
var side_y = (y + (radius * Math.cos.call(null,side_angle)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})());

var G__6878 = (i__6876 + (1));
i__6876 = G__6878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6877),iter__6874.call(null,cljs.core.chunk_rest.call(null,s__6875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6877),null);
}
} else {
var side_angle = cljs.core.first.call(null,s__6875__$2);
return cljs.core.cons.call(null,(function (){var side_x = (x + (radius * Math.sin.call(null,side_angle)));
var side_y = (y + (radius * Math.cos.call(null,side_angle)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [side_x,side_y,shape], null);
})(),iter__6874.call(null,cljs.core.rest.call(null,s__6875__$2)));
}
} else {
return null;
}
break;
}
});})(map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius))
,null,null));
});})(map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius))
;
return iter__4567__auto__.call(null,cljs.core.take.call(null,n,cljs.core.iterate.call(null,((function (iter__4567__auto__,map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius){
return (function (p1__6865_SHARP_){
return (p1__6865_SHARP_ + shape_angle);
});})(iter__4567__auto__,map__6872,map__6872__$1,vec__6873,x,y,r,n,shape_angle,radius))
,r)));
});
cljstemplate.levels.close_enough = (function close_enough(p__6879,p__6880){
var vec__6883 = p__6879;
var x1 = cljs.core.nth.call(null,vec__6883,(0),null);
var y1 = cljs.core.nth.call(null,vec__6883,(1),null);
var vec__6884 = p__6880;
var x2 = cljs.core.nth.call(null,vec__6884,(0),null);
var y2 = cljs.core.nth.call(null,vec__6884,(1),null);
var x_diff = (x2 - x1);
var y_diff = (y2 - y1);
var h2 = ((x_diff * x_diff) + (y_diff * y_diff));
var limit = (cljstemplate.shapeconstance.shape_side_length / (3));
var l2 = (limit * limit);
return (h2 < l2);
});
cljstemplate.levels.find_neighbours = (function find_neighbours(shapes,p__6885){
var vec__6891 = p__6885;
var x = cljs.core.nth.call(null,vec__6891,(0),null);
var y = cljs.core.nth.call(null,vec__6891,(1),null);
var shape = cljs.core.nth.call(null,vec__6891,(2),null);
return cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4567__auto__ = ((function (vec__6891,x,y,shape){
return (function iter__6892(s__6893){
return (new cljs.core.LazySeq(null,((function (vec__6891,x,y,shape){
return (function (){
var s__6893__$1 = s__6893;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6893__$1);
if(temp__4126__auto__){
var s__6893__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6893__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6893__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6895 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6894 = (0);
while(true){
if((i__6894 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6894);
cljs.core.chunk_append.call(null,b__6895,((cljs.core._EQ_.call(null,shape,cljs.core.nth.call(null,shapes,i)))?null:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides.call(null,cljs.core.nth.call(null,shapes,i))))?i:null)));

var G__6896 = (i__6894 + (1));
i__6894 = G__6896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6895),iter__6892.call(null,cljs.core.chunk_rest.call(null,s__6893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6895),null);
}
} else {
var i = cljs.core.first.call(null,s__6893__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,shape,cljs.core.nth.call(null,shapes,i)))?null:(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljstemplate.levels.close_enough,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljstemplate.levels.get_sides.call(null,cljs.core.nth.call(null,shapes,i))))?i:null)),iter__6892.call(null,cljs.core.rest.call(null,s__6893__$2)));
}
} else {
return null;
}
break;
}
});})(vec__6891,x,y,shape))
,null,null));
});})(vec__6891,x,y,shape))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,shapes)));
})());
});
cljstemplate.levels.add_neighbours = (function add_neighbours(shapes){
return cljs.core.mapv.call(null,(function (p1__6897_SHARP_){
return cljs.core.assoc.call(null,p1__6897_SHARP_,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053),cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.find_neighbours,shapes),cljstemplate.levels.get_sides.call(null,p1__6897_SHARP_)));
}),shapes);
});
cljstemplate.levels.wire = (function wire(level,shape_id,wiring){
return cljs.core.assoc_in.call(null,level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_id,new cljs.core.Keyword(null,"wiring","wiring",-1202756092)], null),wiring);
});
cljstemplate.levels.shuffle = (function shuffle(shapes){
return cljs.core.mapv.call(null,(function (p1__6898_SHARP_){
return cljs.core.merge.call(null,p1__6898_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(p1__6898_SHARP_))], null)], null));
}),shapes);
});
cljstemplate.levels.un_shuffle = (function un_shuffle(shapes){
return cljs.core.mapv.call(null,(function (p1__6899_SHARP_){
return cljs.core.merge.call(null,p1__6899_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null)], null));
}),shapes);
});
cljstemplate.levels.shuffle_shapes = (function shuffle_shapes(level){
return cljs.core.update.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljstemplate.levels.shuffle);
});
cljstemplate.levels.mk_level = (function mk_level(start_location,data,p__6900,colours,channels){
var vec__6903 = p__6900;
var start_index = cljs.core.nth.call(null,vec__6903,(0),null);
var end_index = cljs.core.nth.call(null,vec__6903,(1),null);
var shapes0 = cljstemplate.levels.mk_shapes.call(null,cljs.core.PersistentVector.EMPTY,start_location,data);
var shapes1 = cljstemplate.levels.round_shapes.call(null,shapes0);
var vec__6904 = cljstemplate.levels.centre.call(null,shapes1);
var shapes2 = cljs.core.nth.call(null,vec__6904,(0),null);
var width = cljs.core.nth.call(null,vec__6904,(1),null);
var height = cljs.core.nth.call(null,vec__6904,(2),null);
var start = cljs.core.repeat.call(null,cljs.core.count.call(null,channels),start_index);
var end = cljs.core.repeat.call(null,cljs.core.count.call(null,channels),end_index);
var shapes25 = cljstemplate.levels.blank_wires.call(null,shapes2,cljs.core.count.call(null,channels));
var shapes3 = cljstemplate.levels.add_endpoint_wiring.call(null,shapes25,start_index,cljs.core.count.call(null,channels),(0));
var shapes4 = cljstemplate.levels.add_endpoint_wiring.call(null,shapes3,end_index,cljs.core.count.call(null,channels),(1));
var shapes5 = cljstemplate.levels.add_neighbours.call(null,shapes4);
var shapes6 = cljstemplate.levels.un_shuffle.call(null,shapes5);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes6,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"channels","channels",1132759174),channels,new cljs.core.Keyword(null,"colours","colours",659341642),colours,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null);
});
cljstemplate.levels.add_msgs = (function add_msgs(level,start_msg,end_msg){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,level,new cljs.core.Keyword(null,"start-msg","start-msg",-815546523),start_msg),new cljs.core.Keyword(null,"end-msg","end-msg",-2016422505),end_msg);
});
cljstemplate.levels.add_distance = (function add_distance(distance,ends,p__6905){
var map__6907 = p__6905;
var map__6907__$1 = ((cljs.core.seq_QMARK_.call(null,map__6907))?cljs.core.apply.call(null,cljs.core.hash_map,map__6907):map__6907);
var shape = map__6907__$1;
var dte = cljs.core.get.call(null,map__6907__$1,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641));
var neighbours = cljs.core.get.call(null,map__6907__$1,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053));
if(cljs.core.truth_(cljs.core.some.call(null,ends,neighbours))){
return cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641),(function (){var x__4135__auto__ = (function (){var or__3811__auto__ = dte;
if(cljs.core.truth_(or__3811__auto__)){
return or__3811__auto__;
} else {
return (1000000);
}
})();
var y__4136__auto__ = distance;
return ((x__4135__auto__ < y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());
} else {
return shape;
}
});
cljstemplate.levels.has_distance = (function has_distance(distance,ends,p__6908,id){
var map__6910 = p__6908;
var map__6910__$1 = ((cljs.core.seq_QMARK_.call(null,map__6910))?cljs.core.apply.call(null,cljs.core.hash_map,map__6910):map__6910);
var dte = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641));
var neighbours = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053));
if(cljs.core.truth_((function (){var and__3799__auto__ = cljs.core.some.call(null,ends,neighbours);
if(cljs.core.truth_(and__3799__auto__)){
return cljs.core._EQ_.call(null,distance,dte);
} else {
return and__3799__auto__;
}
})())){
return id;
} else {
return null;
}
});
cljstemplate.levels.add_distance_to_end = (function add_distance_to_end(shapes,distance,ends){
while(true){
var new_shapes = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_distance,distance,ends),shapes);
var new_ends = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljstemplate.levels.has_distance,distance,ends),new_shapes,cljs.core.range.call(null))));
var new_distance = (distance + (1));
if((cljs.core.seq.call(null,ends)) && ((distance < (20)))){
var G__6911 = new_shapes;
var G__6912 = new_distance;
var G__6913 = new_ends;
shapes = G__6911;
distance = G__6912;
ends = G__6913;
continue;
} else {
return new_shapes;
}
break;
}
});
cljstemplate.levels.index_of = (function index_of(s,v){
var idx = (0);
var items = s;
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return null;
} else {
if(cljs.core._EQ_.call(null,v,cljs.core.first.call(null,items))){
return idx;
} else {
var G__6914 = (idx + (1));
var G__6915 = cljs.core.rest.call(null,items);
idx = G__6914;
items = G__6915;
continue;

}
}
break;
}
});
cljstemplate.levels.add_path_to_end = (function add_path_to_end(here_id,from_shape_id,end_id,travelled,shapes,channel_id){
while(true){
if(cljs.core._EQ_.call(null,here_id,end_id)){
return shapes;
} else {
var shape = shapes.call(null,here_id);
var neighbour_ids = new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shape);
var available_ids = cljs.core.filter.call(null,cljs.core.identity,cljs.core.filter.call(null,((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids){
return (function (p1__6916_SHARP_){
return cljs.core.not_EQ_.call(null,from_shape_id,p1__6916_SHARP_);
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids))
,neighbour_ids));
var min_dte = cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641),shapes),available_ids));
var neighbour_id = (((min_dte < travelled))?cljs.core.rand_nth.call(null,cljs.core.filter.call(null,((function (here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte){
return (function (p1__6917_SHARP_){
return cljs.core._EQ_.call(null,min_dte,new cljs.core.Keyword(null,"temp-dte","temp-dte",1964905641).cljs$core$IFn$_invoke$arity$1(shapes.call(null,p1__6917_SHARP_)));
});})(here_id,from_shape_id,end_id,travelled,shapes,channel_id,shape,neighbour_ids,available_ids,min_dte))
,available_ids)):cljs.core.rand_nth.call(null,available_ids));
var wire_to = cljstemplate.levels.index_of.call(null,neighbour_ids,neighbour_id);
var wire_from = cljstemplate.levels.index_of.call(null,neighbour_ids,from_shape_id);
var wire = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wire_from,wire_to], null);
var new_shapes = cljs.core.update_in.call(null,shapes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [here_id,new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel_id], null),cljs.core.conj,wire);
var G__6918 = neighbour_id;
var G__6919 = here_id;
var G__6920 = end_id;
var G__6921 = (travelled + (1));
var G__6922 = new_shapes;
var G__6923 = channel_id;
here_id = G__6918;
from_shape_id = G__6919;
end_id = G__6920;
travelled = G__6921;
shapes = G__6922;
channel_id = G__6923;
continue;
}
break;
}
});
cljstemplate.levels.merge_spam = (function merge_spam(shape,p__6924){
var vec__6926 = p__6924;
var channel = cljs.core.nth.call(null,vec__6926,(0),null);
var from = cljs.core.nth.call(null,vec__6926,(1),null);
var onto = cljs.core.nth.call(null,vec__6926,(2),null);
return cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092),channel], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,onto], null));
});
cljstemplate.levels.mk_filter = (function mk_filter(collection){
return (function (p__6929){
var vec__6930 = p__6929;
var a = cljs.core.nth.call(null,vec__6930,(0),null);
var b = cljs.core.nth.call(null,vec__6930,(1),null);
return cljs.core.not.call(null,(function (){var and__3799__auto__ = (a < b);
if(and__3799__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null)], true),collection);
} else {
return and__3799__auto__;
}
})());
});
});
cljstemplate.levels.de_dupe_channel_spam = (function de_dupe_channel_spam(channel_wiring){
return cljs.core.filterv.call(null,cljstemplate.levels.mk_filter.call(null,channel_wiring),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,channel_wiring)));
});
cljstemplate.levels.de_dupe_spam = (function de_dupe_spam(shape){
return cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiring","wiring",-1202756092)], null),(function (p1__6931_SHARP_){
return cljs.core.mapv.call(null,cljstemplate.levels.de_dupe_channel_spam,p1__6931_SHARP_);
}));
});
cljstemplate.levels.spam_each = (function spam_each(p__6932){
var map__6938 = p__6932;
var map__6938__$1 = ((cljs.core.seq_QMARK_.call(null,map__6938))?cljs.core.apply.call(null,cljs.core.hash_map,map__6938):map__6938);
var shape = map__6938__$1;
var wiring = cljs.core.get.call(null,map__6938__$1,new cljs.core.Keyword(null,"wiring","wiring",-1202756092));
var n = cljs.core.get.call(null,map__6938__$1,new cljs.core.Keyword(null,"n","n",562130025));
var total_wires = (cljs.core.count.call(null,cljs.core.flatten.call(null,wiring)) / (2));
var target_wires = ((1) + cljs.core.rand_int.call(null,(n - (1))));
var channel_count = cljs.core.count.call(null,wiring);
return cljstemplate.levels.de_dupe_spam.call(null,cljs.core.reduce.call(null,cljstemplate.levels.merge_spam,shape,(function (){var iter__4567__auto__ = ((function (total_wires,target_wires,channel_count,map__6938,map__6938__$1,shape,wiring,n){
return (function iter__6939(s__6940){
return (new cljs.core.LazySeq(null,((function (total_wires,target_wires,channel_count,map__6938,map__6938__$1,shape,wiring,n){
return (function (){
var s__6940__$1 = s__6940;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6940__$1);
if(temp__4126__auto__){
var s__6940__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6940__$2)){
var c__4565__auto__ = cljs.core.chunk_first.call(null,s__6940__$2);
var size__4566__auto__ = cljs.core.count.call(null,c__4565__auto__);
var b__6942 = cljs.core.chunk_buffer.call(null,size__4566__auto__);
if((function (){var i__6941 = (0);
while(true){
if((i__6941 < size__4566__auto__)){
var i = cljs.core._nth.call(null,c__4565__auto__,i__6941);
cljs.core.chunk_append.call(null,b__6942,(function (){var a = cljs.core.rand_int.call(null,n);
var b = cljs.core.rand_int.call(null,n);
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),cljs.core.mod.call(null,(a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),a,b], null);
}
})());

var G__6943 = (i__6941 + (1));
i__6941 = G__6943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6942),iter__6939.call(null,cljs.core.chunk_rest.call(null,s__6940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6942),null);
}
} else {
var i = cljs.core.first.call(null,s__6940__$2);
return cljs.core.cons.call(null,(function (){var a = cljs.core.rand_int.call(null,n);
var b = cljs.core.rand_int.call(null,n);
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),cljs.core.mod.call(null,(a + (1)),n),b], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,channel_count),a,b], null);
}
})(),iter__6939.call(null,cljs.core.rest.call(null,s__6940__$2)));
}
} else {
return null;
}
break;
}
});})(total_wires,target_wires,channel_count,map__6938,map__6938__$1,shape,wiring,n))
,null,null));
});})(total_wires,target_wires,channel_count,map__6938,map__6938__$1,shape,wiring,n))
;
return iter__4567__auto__.call(null,cljs.core.range.call(null,total_wires,target_wires));
})()));
});
cljstemplate.levels.spam = (function spam(shapes){
return cljs.core.mapv.call(null,cljstemplate.levels.spam_each,shapes);
});
cljstemplate.levels.wire_paths = (function wire_paths(p__6944){
var map__6948 = p__6944;
var map__6948__$1 = ((cljs.core.seq_QMARK_.call(null,map__6948))?cljs.core.apply.call(null,cljs.core.hash_map,map__6948):map__6948);
var level = map__6948__$1;
var vec__6949 = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var start = cljs.core.nth.call(null,vec__6949,(0),null);
var vec__6950 = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var end = cljs.core.nth.call(null,vec__6950,(0),null);
var shapes = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var channels = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"channels","channels",1132759174));
var shapes0 = cljstemplate.levels.add_distance_to_end.call(null,shapes,(0),cljs.core.PersistentHashSet.fromArray([end], true));
var first_id = cljs.core.some.call(null,cljs.core.identity,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1(shapes.call(null,start)));
var shapes1 = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljstemplate.levels.add_path_to_end,first_id,start,end,(0)),shapes0,cljs.core.range.call(null,cljs.core.count.call(null,channels)));
var shapes2 = cljstemplate.levels.spam.call(null,shapes1);
return cljs.core.assoc.call(null,level,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes2);
});
cljstemplate.levels.blue_on_orange = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(150),(225)], null)], null);
cljstemplate.levels.orange_yellow_red_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(175),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(100),(0)], null)], null);
cljstemplate.levels.green_on_pink = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(150),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0),(50)], null)], null);
cljstemplate.levels.red_yellow_blue_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150),(255)], null)], null);
cljstemplate.levels.red_white = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null)], null);
cljstemplate.levels.red_white_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(50),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(125),(125)], null)], null);
cljstemplate.levels.black_on_lightgrey = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
cljstemplate.levels.cyan_magenta_yellow_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(250),(250)], null)], null);
cljstemplate.levels.grey_on_black = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(125),(125)], null)], null);
cljstemplate.levels.red_purple_lilac_channels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(0),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(175),(255)], null)], null);
cljstemplate.levels.all_colours = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.green_on_pink,cljstemplate.levels.red_yellow_blue_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.black_on_lightgrey,cljstemplate.levels.cyan_magenta_yellow_channels], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.grey_on_black,cljstemplate.levels.red_purple_lilac_channels], null)], null);
cljstemplate.levels.tutorial_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),cljstemplate.levels.blue_on_orange,cljs.core.butlast.call(null,cljs.core.butlast.call(null,cljstemplate.levels.orange_yellow_red_channels))),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(5),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Click on shapes to rotate them. Complete the path.","Awesome! You did it."),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9)], null),cljstemplate.levels.blue_on_orange,cljs.core.butlast.call(null,cljstemplate.levels.orange_yellow_red_channels)),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),"Sometimes you need to create more than one path.","Well done!"),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12)], null),cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(4),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null)),"There may be as many as three paths.","You're getting the hang of this!"),cljstemplate.levels.add_msgs.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.wire.call(null,cljstemplate.levels.mk_level.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(cljstemplate.constance.PI / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(16)], null),cljstemplate.levels.blue_on_orange,cljstemplate.levels.orange_yellow_red_channels),(5),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(7),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(9),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null)),(10),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(11),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),cljs.core.PersistentVector.EMPTY], null)),(12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null)),(13),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(14),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),(15),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null)),(18),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null)], null)),"You don't always have to use all the pieces.","Wow! Onto the real levels...")], null);
cljstemplate.levels.unfinished_levels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(2)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY], null),(6),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null),(3),cljs.core.PersistentVector.EMPTY], null)], null)], null),(6),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(6)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null),(4),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.PersistentVector.EMPTY], null)], null),(3),cljs.core.PersistentVector.EMPTY], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(6),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(4)], null)),cljs.core.partial.call(null,cljstemplate.levels.mk_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),cljstemplate.constance.PI], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),cljs.core.PersistentVector.EMPTY,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(8),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY,(8),cljs.core.PersistentVector.EMPTY,(4),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(5)], null))], null);
cljstemplate.levels.start_messages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Good luck!","You're doing really well!","You're really good at this game!","May the hugs of a thousand kittens be with you.","<img src=\"https://placekitten.com/g/300/300\" width=\"50px\" height=\"50px\" />"], null);
cljstemplate.levels.end_messages = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wow!","Awesome!","You did it!","You totally nailed that level!","You're really good at this game.","You must be, like, a genius or something."], null);
cljstemplate.levels.add_random_msg = (function add_random_msg(level){
return cljstemplate.levels.add_msgs.call(null,level,cljs.core.rand_nth.call(null,cljstemplate.levels.start_messages),cljs.core.rand_nth.call(null,cljstemplate.levels.end_messages));
});
cljstemplate.levels.pick_channels = (function pick_channels(number,channels){
return cljs.core.take.call(null,number,cljs.core.drop.call(null,cljs.core.rand_int.call(null,(3)),cljs.core.cycle.call(null,channels)));
});
cljstemplate.levels.finish = (function finish(level,channel_count,p__6951){
var vec__6953 = p__6951;
var colours = cljs.core.nth.call(null,vec__6953,(0),null);
var channels = cljs.core.nth.call(null,vec__6953,(1),null);
return cljstemplate.levels.add_random_msg.call(null,cljstemplate.levels.wire_paths.call(null,level.call(null,colours,cljstemplate.levels.pick_channels.call(null,channel_count,channels))));
});
cljstemplate.levels.finish_level = (function finish_level(n){
var index = cljs.core.mod.call(null,((n / (3)) | (0)),cljs.core.count.call(null,cljstemplate.levels.unfinished_levels));
var channel_count = (cljs.core.mod.call(null,n,(3)) + (1));
var level = cljstemplate.levels.unfinished_levels.call(null,index);
var colours = cljs.core.rand_nth.call(null,cljstemplate.levels.all_colours);
return cljstemplate.levels.finish.call(null,level,channel_count,colours);
});
cljstemplate.levels.get_level = (function get_level(n){
var t = cljs.core.count.call(null,cljstemplate.levels.tutorial_levels);
if((n < t)){
return cljstemplate.levels.tutorial_levels.call(null,n);
} else {
return cljstemplate.levels.finish_level.call(null,(n - t));
}
});

//# sourceMappingURL=levels.js.map