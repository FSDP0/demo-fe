const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
	transpileDependencies: true,

	outputDir: path.resolve(__dirname, "../demo-api/src/main/resources/static"),
	// indexPath: path.resolve(
	// 	__dirname,
	// 	"../demo-api/src/main/resources/static/index.html",
	// ),

	// Migration with Spring Boot Port
	devServer: {
		proxy: {
			"/": {
				target: "http://localhost:8080",
				changeOrigin: true,
			},
		},
	},
});
