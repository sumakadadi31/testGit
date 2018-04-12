// TypeScript is a superscript of ES2015.
// We can use ES2015 features in TypeScript files
(function () {
    var language = "TypeScript";
    var message = language + " works!";
    var sum = function (a, b) { return a + b; };
    var output = document.getElementById('output');
    output.classList.add('full-screen-banner');
    output.innerHTML = message;
}());
