

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CGDV0tzE.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D16DZW7K.js"];
export const stylesheets = [];
export const fonts = [];
