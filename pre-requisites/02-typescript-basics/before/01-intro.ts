// TypeScript is a superscript of ES2015.
// We can use ES2015 features in TypeScript files

(function() {
    let language = `TypeScript`;
    let message = `${language} works!`;

    let output = document.getElementById( 'output' );
    output.classList.add( 'full-screen-banner' );
    output.innerHTML = message;
}());