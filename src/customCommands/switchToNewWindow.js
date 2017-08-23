/**
 * Created by paula on 8/22/17.
 */

 exports.command = function (browser) {
 browser.pause(1000);
 browser.windowHandles((result) => {
 browser.switchWindow(result.value[1]);
 });
 browser.pause(1000);

 return this;
 };
