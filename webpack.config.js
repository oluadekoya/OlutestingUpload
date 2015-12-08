module.exports ={
entry: "./controller.js",
output: {
  filename: "bundle.js",
  path: __dirname
},
devtool:"source-map",
module: {
  loaders:[
    {test:/\.html$/, loader:"raw"},
    {test:/\.css$/, loaders:["style", "css"] },

  ]
}
};
