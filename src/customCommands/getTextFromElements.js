/**
 * Created by paula on 8/22/17.
 */

 exports.command = function ({locatorType = 'css selector', locator}, callback) {
 let results = [];

 this.elements(locatorType, locator, function (elems) {
 elems.value.forEach((element) => {
 this.elementIdText(element.ELEMENT, function (element) {
 results.push(element.value);
 });
 });
 this.perform(function () {
 callback(results);
 });
 });
 };
