goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../cljstemplate/constance.js", ['cljstemplate.constance'], ['cljs.core']);
goog.addDependency("../cljstemplate/shapeconstance.js", ['cljstemplate.shapeconstance'], ['cljs.core', 'cljstemplate.constance']);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'cljs.core.async.impl.timers']);
goog.addDependency("../cljstemplate/logging.js", ['cljstemplate.logging'], ['cljs.core']);
goog.addDependency("../cljstemplate/levels.js", ['cljstemplate.levels'], ['cljs.core', 'cljstemplate.shapeconstance', 'cljstemplate.constance', 'cljstemplate.logging']);
goog.addDependency("../cljstemplate/shape.js", ['cljstemplate.shape'], ['cljs.core', 'cljstemplate.shapeconstance', 'cljs.core.async', 'cljstemplate.constance', 'cljstemplate.logging']);
goog.addDependency("../cljstemplate/core.js", ['cljstemplate.core'], ['goog.dom', 'goog.Uri', 'cljs.core', 'cljstemplate.shapeconstance', 'cljs.core.async', 'cljstemplate.levels', 'cljstemplate.constance', 'goog.events', 'cljstemplate.shape', 'cljstemplate.logging']);