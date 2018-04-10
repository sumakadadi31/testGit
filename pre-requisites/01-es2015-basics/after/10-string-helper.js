/**
 * The script within a module is executed in its own scope (and not global scope). Thus variables, functions and classes it defines are not available outside the module by default.
 * 
 * A module needs to specify which variables, functions and classes can be used outside of it. Those exported can be used outside the module. Rest are available only within a module.
 * 
 * The export keyword is applied before a variable, function or class declaration. Alternatively use export { identifier } or export { identifier1 as identifier2 } to export something after its definition
 */

// you can re-export everything exported by string-helper-core module this way - can feature can be used to break down code of a feature into smaller helper modules and import them all in an master module for that feature and re-export
export * from './10-string-helper-core.js';

// one of the members can be specified as the default export - when importing, an identifer not matching any of the exported ones will be taken to mean the default export
export default function quotify( str ) { return `"${str}"`; }

console.log( 'end of string helper module' );