cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "customPlugin.customPlugin",
        "file": "plugins/customPlugin/www/customPlugin.js",
        "pluginId": "customPlugin",
        "clobbers": [
            "cordova.plugins.customPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "customPlugin": "1.0.0"
};
// BOTTOM OF METADATA
});