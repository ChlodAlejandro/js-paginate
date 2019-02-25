'use strict';

module.exports = (object, perPage) => {
    if (typeof object != "object") {
        return new Error("Object (first argument) is not of type \"object\".");
    }
    if (perPage < 1) {
        return new Error("Pages must contain at least one object.");
    }
    if (perPage == undefined) {
        var perPage = 10;
    }

    var pages = [];

    var len = object.length;
    if (len == 0) {
        return pages;
    } else if (len <= perPage) {
        return [object];
    }

    var keys = Object.keys(object);

    var pageCounter = 0;
    var page = {};
    for (var i = 0; i < keys.length; i++) {
        page[keys[i]] = object[keys[i]];
        pageCounter++;
        if (perPage == pageCounter) {
            pages.push(page);
            pageCounter = 0;
            page = {};
        }
    }

    if (pageCounter != 0) {
        pages.push(page);
        pageCounter = 0;
        page = {};
    }

    return pages;
};
