import '../ts3.4/node-tests';
import '../test/globals';
import '../test/wasi';

//////////////////////////////////////////////////////////////////////////
/// `globalThis` Tests: https://node.green/#ES2020-features-globalThis ///
//////////////////////////////////////////////////////////////////////////

const isGlobal: NodeJS.Global = global;
const isGlobalThis: typeof globalThis = global;
