// Compiled by ClojureScript 0.0-2719 {}
goog.provide('cljstemplate.shapeconstance');
goog.require('cljs.core');
goog.require('cljstemplate.constance');
cljstemplate.shapeconstance.shape_side_length = (50);
cljstemplate.shapeconstance.shape_pad = (function shape_pad(inner_radius){
return (inner_radius * 1.025);
});
cljstemplate.shapeconstance.square_side = cljstemplate.shapeconstance.shape_side_length;
cljstemplate.shapeconstance.square_inner_radius = (cljstemplate.shapeconstance.square_side / (2));
cljstemplate.shapeconstance.square_radius = (cljstemplate.shapeconstance.square_inner_radius * cljstemplate.constance.ROOT_TWO);
cljstemplate.shapeconstance.square_pad = cljstemplate.shapeconstance.shape_pad.call(null,cljstemplate.shapeconstance.square_inner_radius);
cljstemplate.shapeconstance.hex_side = cljstemplate.shapeconstance.shape_side_length;
cljstemplate.shapeconstance.hex_radius = cljstemplate.shapeconstance.hex_side;
cljstemplate.shapeconstance.hex_inner_radius = (cljstemplate.shapeconstance.hex_side * (cljstemplate.constance.ROOT_THREE / (2)));
cljstemplate.shapeconstance.hex_pad = cljstemplate.shapeconstance.shape_pad.call(null,cljstemplate.shapeconstance.hex_inner_radius);
cljstemplate.shapeconstance.oct_side = cljstemplate.shapeconstance.shape_side_length;
cljstemplate.shapeconstance.oct_radius = Math.sqrt.call(null,(((cljstemplate.shapeconstance.oct_side / (2)) * (cljstemplate.shapeconstance.oct_side / (2))) + (((cljstemplate.shapeconstance.oct_side / (2)) + (cljstemplate.shapeconstance.oct_side / cljstemplate.constance.ROOT_TWO)) * ((cljstemplate.shapeconstance.oct_side / (2)) + (cljstemplate.shapeconstance.oct_side / cljstemplate.constance.ROOT_TWO)))));
cljstemplate.shapeconstance.oct_inner_radius = (cljstemplate.shapeconstance.oct_side * (((1) + cljstemplate.constance.ROOT_TWO) / (2)));
cljstemplate.shapeconstance.oct_pad = cljstemplate.shapeconstance.shape_pad.call(null,cljstemplate.shapeconstance.oct_inner_radius);
cljstemplate.shapeconstance.tri_side = cljstemplate.shapeconstance.shape_side_length;
cljstemplate.shapeconstance.half_tri_side = (cljstemplate.shapeconstance.tri_side / (2));
cljstemplate.shapeconstance.tri_radius = (cljstemplate.shapeconstance.half_tri_side / (cljstemplate.constance.ROOT_THREE / (2)));
cljstemplate.shapeconstance.tri_inner_radius = (cljstemplate.shapeconstance.tri_radius / (2));
cljstemplate.shapeconstance.tri_pad = cljstemplate.shapeconstance.shape_pad.call(null,cljstemplate.shapeconstance.tri_inner_radius);
cljstemplate.shapeconstance.pad_diff = (cljstemplate.shapeconstance.hex_pad - cljstemplate.shapeconstance.hex_inner_radius);
cljstemplate.shapeconstance.tri_adjust = ((cljstemplate.shapeconstance.tri_pad - cljstemplate.shapeconstance.pad_diff) / cljstemplate.shapeconstance.tri_inner_radius);
cljstemplate.shapeconstance.tri_radius = (cljstemplate.shapeconstance.tri_radius * cljstemplate.shapeconstance.tri_adjust);
cljstemplate.shapeconstance.tri_inner_radius = (cljstemplate.shapeconstance.tri_inner_radius * cljstemplate.shapeconstance.tri_adjust);
cljstemplate.shapeconstance.square_adjust = ((cljstemplate.shapeconstance.square_pad - cljstemplate.shapeconstance.pad_diff) / cljstemplate.shapeconstance.square_inner_radius);
cljstemplate.shapeconstance.square_radius = (cljstemplate.shapeconstance.square_radius * cljstemplate.shapeconstance.square_adjust);
cljstemplate.shapeconstance.square_inner_radius = (cljstemplate.shapeconstance.square_inner_radius * cljstemplate.shapeconstance.square_adjust);
cljstemplate.shapeconstance.oct_adjust = ((cljstemplate.shapeconstance.oct_pad - cljstemplate.shapeconstance.pad_diff) / cljstemplate.shapeconstance.oct_inner_radius);
cljstemplate.shapeconstance.oct_radius = (cljstemplate.shapeconstance.oct_radius * cljstemplate.shapeconstance.oct_adjust);
cljstemplate.shapeconstance.oct_inner_radius = (cljstemplate.shapeconstance.oct_inner_radius * cljstemplate.shapeconstance.oct_adjust);

//# sourceMappingURL=shapeconstance.js.map