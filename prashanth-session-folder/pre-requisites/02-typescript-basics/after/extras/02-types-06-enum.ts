/*
 * enum defines a custom type (enumeration)
 * As in many other languages enum assigns a number value to a constant
 */
enum LogLevel { Debug, Verbose, Info, Warning, Error };
console.log( LogLevel.Debug, LogLevel.Error ); // 0 4

let defaultLogLevel: LogLevel = LogLevel.Info;
console.log( `defaultLogLevel = ${defaultLogLevel}` );

// we can give explicit values to the enum members, or a starting value too
enum Days { Sunday = 1, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
console.log( `Days.Monday = ${Days.Monday}` );