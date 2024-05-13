import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<!DOCTYPE html> <head data-svelte-h="svelte-lwl2vd"><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Holibobber</title></head> <h1 class="text-center font-bold text-xl py-2" data-svelte-h="svelte-dt1y39">Holibobber</h1> <p class="px-6 text-justify" data-svelte-h="svelte-rqxn2j">Unlock the full potential of your annual leave this year. Take longer and bigger breaks around national holidays for extended and more frequent getaways. It&#39;s time to maximize your time off and create memories that last a lifetime!</p> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
