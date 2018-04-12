/**
 *  Module and namespace
    Implicit and exlicit module declaration
    Splitting module/namespace definition across files
    Private variables, objects, classes, methods, modules/namespaces and exported ones
    Working with sub-modules
 */

// For example, jQuery creates $, jQuery variables
// *** In JS **
/*
let TravelGuru = TravelGuru || {};

TravelGuru.BookingModule = (function() {
    // private variables etc...
    let roomsAvailable = [];

    return {
        book: function(date, person, roomType, hotelId) {

        },
        cancel: function() {

        }
    };
}());

TravelGuru.ItinerayPlanner = TravelGuru.ItinerrayPlanner || {};
*/

// ** In TypeScript **
namespace TravelGuru {
    let roomsAvailable = [];

    export let BookingModule = {
        book: function(date, person, roomType, hotelId) {

        },
        cancel: function() {

        }
    };

    export let ItineraryPlanner = {
        plan: function() {

        }
    };
}

// How is export and import used in ES2015?

let roomsAvailable = [];

 export let BookingModule = {
        book: function(date, person, roomType, hotelId) {

        },
        cancel: function() {

        }
    };

export let ItineraryPlanner = {
        plan: function() {

        }
    };