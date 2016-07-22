module.exports = {
    entry: {
        "scripts/bundle": "./build/main.js",
        "scripts/shim": "./node_modules/core-js/shim.js",
        "scripts/zone": "./node_modules/zone.js/dist/zone.js",
        "scripts/reflect": "./node_modules/reflect-metadata/Reflect.js",        
    },
    output: {
        path: './public',
        filename: "[name].js"
    }
}