module.exports = async function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    context.log(eventGridEvent);
    context.log("log from index.js for trigger method" +  JSON.stringify(context));
    context.bindings.msg = "func app event grid adds queue item with context: " + JSON.stringify(context);
};