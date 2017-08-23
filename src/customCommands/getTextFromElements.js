/**
 * Created by paula on 8/22/17.
 */

exports.command = function ({ locatorType = 'css selector', locator }, callback) {
    const results = [];

    this.elements(locatorType, locator, function (elems) {
        elems.value.forEach((element) => {
            this.elementIdText(element.ELEMENT, () => {
                results.push(element.value);
            });
        });
        this.perform(() => {
            callback(results);
        });
    });
};
