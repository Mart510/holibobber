export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DVo2nL4F.js","app":"_app/immutable/entry/app.C-20yiO8.js","imports":["_app/immutable/entry/start.DVo2nL4F.js","_app/immutable/chunks/entry.BQL2iE-0.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.C-20yiO8.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D16DZW7K.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
