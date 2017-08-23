/**
 * Created by paula on 8/22/17.
 */

 exports.command = function (browser) {

 browser.windowHandles((result) => {
 browser.switchWindow(result.value[0]);
 });
 browser.pause(500);

 return this;
 };
