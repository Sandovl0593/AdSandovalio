/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, h as createAstro, i as defineStyleVars, s as spreadAttributes } from '../chunks/astro/server_IwBQGZOX.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CK11S7yk.mjs';
export { renderers } from '../renderers.mjs';

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed z-10 flex h-20 w-3/4 items-center justify-around pt-2 backdrop-blur-xl md:w-[90%] lmd:h-16 lmd:text-xs"> <div class="text-xl md:hidden">AdSandovalio</div> <nav class="relative flex w-1/2 items-center justify-around gap-x-1 py-1 md:w-full"> <a href="#top">HOME</a> <a href="#sec-projects">PROJECTS</a> <a href="mailto:adrian.sandoval@utec.edu.pe">CONTACT ME</a> </nav> </header>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/NavBar.astro", void 0);

const $$Gradient = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute flex h-full w-3/4 flex-col"> <div class="flex w-full flex-row"> <div class="h-[500px] w-[500px] -translate-x-40 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="right-0 h-[500px] w-[500px] translate-x-80 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> </div> <div class="flex w-full flex-row"> <div class="h-[500px] w-[500px] -translate-x-40 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="right-0 h-[500px] w-[500px] translate-x-80 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> </div> <div class="flex w-full flex-row"> <div class="h-[500px] w-[500px] -translate-x-40 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="right-0 h-[500px] w-[500px] translate-x-80 rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> </div> </div>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/Gradient.astro", void 0);

const $$Astro$f = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-slate-950 text-white"> <span id="top"></span> ${renderComponent($$result, "Gradient", $$Gradient, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} <div id="app" class="relative h-full gap-4 pt-20 lmd:pt-16"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/Layout.astro", void 0);

const $$Astro$e = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Card;
  const { areaSection } = Astro2.props;
  const $$definedVars = defineStyleVars([{ areaSection }]);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center rounded-lg bg-slate-800 shadow md:flex-row" data-astro-cid-nq2o6opf${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/Card.astro", void 0);

const ProfilePhoto = new Proxy({"src":"/_astro/profile.DVEty7nn.jpg","width":200,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/Codes/AdSandovalio/src/assets/profile.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro();
const $$LinkedInIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LinkedInIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#fff"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/LinkedInIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#fff"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/GithubIcon.astro", void 0);

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="flex
   max-h-max flex-row items-center rounded-lg bg-slate-800 px-12 py-8 shadow
  [grid-area:profile] md:flex-col"> ${renderComponent($$result, "Image", $$Image, { "src": ProfilePhoto, "alt": "Profile Photo", "class": "size-56 rounded-full object-cover md:h-auto md:w-48 lmd:size-36" })} <article class="flex h-max flex-col justify-between px-12 leading-normal md:px-0 md:py-8"> <header class="mb-4"> <h1 class="text-2xl font-bold text-yellow-200 lmd:text-xl">
Hola, soy Adrian Sandoval Huamaní
</h1> <h3 class="font-bold lmd:text-xs">
Computer Science | Data Analysis & ML focused
</h3> </header> <p class="mb-3 font-normal text-gray-700 lmd:text-xs dark:text-gray-400">
Profesional desde el pregrado (9° ciclo) en aprendizaje continuo en la
      resolución de problemas dirigidos a sectores de propósito social y
      financiero demostrando habilidades técnicas en procesamiento, analítica, visualización y técnicas de Machine
      Learning.
</p> <footer class="flex flex-row gap-10 text-xs"> <a href="https://www.linkedin.com/in/adsandovalio/" class="flex h-8 w-8 duration-200 hover:rounded-md hover:bg-slate-700"> ${renderComponent($$result, "LinkedInIcon", $$LinkedInIcon, { "class": "m-auto h-6 w-6" })} </a> <a href="https://www.github.com/Sandvl0593" class="flex h-8 w-8 duration-200 hover:rounded-md hover:bg-slate-700"> ${renderComponent($$result, "GithubIcon", $$GithubIcon, { "class": "m-auto h-6 w-6" })} </a> <div class="flex flex-col text-gray-400"> <span>Lima, Perú</span> <!-- <a href="mailto:adrian.sandoval@utec.edu.pe" class="hover:text-white"
          >adrian.sandoval@utec.edu.pe</a
        > --> <span>(+51) 939 772 757</span> </div> </footer> </article> </main> ${renderComponent($$result, "Card", $$Card, { "areaSection": "info" }, { "default": ($$result2) => renderTemplate` <div class="flex h-full w-full flex-col p-6"> <h2 class="mb-4 text-2xl font-bold text-yellow-200">
Formación Académica
</h2> <div class="flex flex-col gap-2"> <h3 class="text-md">Universidad de Ingeniería y Tecnología, Barranco</h3> <p class="text-sm text-gray-300">
Ciencia de la Computación | Becario PRONABEC (Beca 18)
</p> <p class="text-xs text-gray-400">
Set, 2021 - actualidad
</p> </div> </div> ` })}`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/Profile.astro", void 0);

const $$Astro$b = createAstro();
const $$PythonIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PythonIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.02 29.328h61.761L127.96 74.39H88.758s-38.56-.408-38.56 38.355v25.29H8.254v-31.91S-.874 38.406 32.535 15.688C56.671-.72 82.522.125 82.522.125h44.394zm5.832 18.275c5.385 0 9.73 4.341 9.73 9.73 0 5.385-4.345 9.726-9.73 9.726-5.382 0-9.727-4.341-9.727-9.726 0-5.389 4.345-9.73 9.727-9.73zm-63.621 54.33c-8.913 0-16.124 7.215-16.124 16.128v58.21h31.83V98.122c0-4.73 3.823-8.552 8.553-8.552h59.697l-.02-16.885H69.127zm108.99 15.115l-31.917.02v49.19H184.22c4.73 0 8.549 3.82 8.549 8.553v37.601h15.938c8.913 0 16.128-7.215 16.128-16.128v-59.04c0-11.23-9.096-20.2-20.196-20.196zm-92.35 62.473L53.79 150.29v31.91s9.124 67.747 101.996 67.747h41.474c64.836 0 60.788-28.119 60.788-28.119l-.02-29.328h-61.76l-.048-16.877h39.202s38.56.409 38.56-38.354v-25.29h-41.944v31.91s9.124 67.751-24.281 90.469c-24.137 16.407-49.988 15.562-49.988 15.562h-44.394l.024-18.25h-.008c-5.385 0-9.73-4.341-9.73-9.73 0-5.385 4.345-9.726 9.73-9.726 5.386 0 9.731 4.341 9.731 9.726 0 5.389-4.345 9.73-9.73 9.73h.016v.013H102v.004h-16.233z" fill="currentColor"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/PythonIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$PostgresIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PostgresIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M129.563 0C59.345 0 .97 55.773.97 125.798c0 70.323 58.673 126.136 128.593 126.136 71.01 0 128.97-54.73 128.97-124.747C258.533 55.078 198.536 0 129.563 0zm43.518 200.088c-1.39 12.164-9.387 19.467-27.464 19.467-33.024 0-48.675-22.943-48.675-69.627 0-46.684 19.12-70.323 50.413-70.323 30.244 0 46.589 19.12 50.413 54.68h-11.474c-4.17-27.112-14.254-43.903-38.238-43.903-24.683 0-38.586 19.467-38.586 59.546 0 40.08 14.6 58.85 37.89 58.85 10.43 0 19.466-2.086 26.42-7.301v-27.464h-30.59v-9.734h41.716v35.81z" fill="currentColor"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/PostgresIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$AWSIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AWSIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"> <rect width="256" height="256" fill="#242938" rx="60"></rect> <path fill="#fff" d="M84.7447 111.961C84.7447 114.395 85.0079 116.368 85.4684 117.816C85.9947 119.263 86.6526 120.842 87.5737 122.553C87.9026 123.079 88.0342 123.605 88.0342 124.066C88.0342 124.724 87.6395 125.382 86.7842 126.039L82.6395 128.803C82.0474 129.197 81.4553 129.395 80.929 129.395C80.2711 129.395 79.6132 129.066 78.9553 128.474C78.0342 127.487 77.2447 126.434 76.5869 125.382C75.929 124.263 75.2711 123.013 74.5474 121.5C69.4158 127.553 62.9684 130.579 55.2053 130.579C49.679 130.579 45.2711 129 42.0474 125.842C38.8237 122.684 37.179 118.474 37.179 113.211C37.179 107.618 39.1526 103.079 43.1658 99.6579C47.179 96.2368 52.5079 94.5263 59.2842 94.5263C61.5211 94.5263 63.8237 94.7237 66.2579 95.0526C68.6921 95.3816 71.1921 95.9079 73.8237 96.5V91.6974C73.8237 86.6974 72.7711 83.2105 70.7316 81.1711C68.6263 79.1316 65.0737 78.1447 60.0079 78.1447C57.7053 78.1447 55.3368 78.4079 52.9026 79C50.4684 79.5921 48.1 80.3158 45.7974 81.2368C44.7447 81.6974 43.9553 81.9605 43.4947 82.0921C43.0342 82.2237 42.7053 82.2895 42.4421 82.2895C41.5211 82.2895 41.0605 81.6316 41.0605 80.25V77.0263C41.0605 75.9737 41.1921 75.1842 41.5211 74.7237C41.85 74.2632 42.4421 73.8026 43.3632 73.3421C45.6658 72.1579 48.429 71.1711 51.6526 70.3816C54.8763 69.5263 58.2974 69.1316 61.9158 69.1316C69.7447 69.1316 75.4684 70.9079 79.1526 74.4605C82.7711 78.0132 84.6132 83.4079 84.6132 90.6447V111.961H84.7447ZM58.0342 121.961C60.2053 121.961 62.4421 121.566 64.8105 120.776C67.179 119.987 69.2842 118.539 71.0605 116.566C72.1132 115.316 72.9026 113.934 73.2974 112.355C73.6921 110.776 73.9553 108.868 73.9553 106.632V103.868C72.0474 103.408 70.0079 103.013 67.9026 102.75C65.7974 102.487 63.7579 102.355 61.7184 102.355C57.3105 102.355 54.0868 103.211 51.9158 104.987C49.7447 106.763 48.6921 109.263 48.6921 112.553C48.6921 115.645 49.4816 117.947 51.1263 119.526C52.7053 121.171 55.0079 121.961 58.0342 121.961ZM110.863 129.066C109.679 129.066 108.889 128.868 108.363 128.408C107.837 128.013 107.376 127.092 106.982 125.842L91.5211 74.9868C91.1263 73.6711 90.929 72.8158 90.929 72.3553C90.929 71.3026 91.4553 70.7105 92.5079 70.7105H98.9553C100.205 70.7105 101.061 70.9079 101.521 71.3684C102.047 71.7632 102.442 72.6842 102.837 73.9342L113.889 117.487L124.153 73.9342C124.482 72.6184 124.876 71.7632 125.403 71.3684C125.929 70.9737 126.85 70.7105 128.034 70.7105H133.297C134.547 70.7105 135.403 70.9079 135.929 71.3684C136.455 71.7632 136.916 72.6842 137.179 73.9342L147.574 118.013L158.955 73.9342C159.35 72.6184 159.811 71.7632 160.271 71.3684C160.797 70.9737 161.653 70.7105 162.837 70.7105H168.955C170.008 70.7105 170.6 71.2368 170.6 72.3553C170.6 72.6842 170.534 73.0132 170.468 73.4079C170.403 73.8026 170.271 74.3289 170.008 75.0526L154.153 125.908C153.758 127.224 153.297 128.079 152.771 128.474C152.245 128.868 151.389 129.132 150.271 129.132H144.613C143.363 129.132 142.508 128.934 141.982 128.474C141.455 128.013 140.995 127.158 140.732 125.842L130.534 83.4079L120.403 125.776C120.074 127.092 119.679 127.947 119.153 128.408C118.626 128.868 117.705 129.066 116.521 129.066H110.863ZM195.403 130.842C191.982 130.842 188.561 130.447 185.271 129.658C181.982 128.868 179.416 128.013 177.705 127.026C176.653 126.434 175.929 125.776 175.666 125.184C175.403 124.592 175.271 123.934 175.271 123.342V119.987C175.271 118.605 175.797 117.947 176.784 117.947C177.179 117.947 177.574 118.013 177.968 118.145C178.363 118.276 178.955 118.539 179.613 118.803C181.85 119.789 184.284 120.579 186.85 121.105C189.482 121.632 192.047 121.895 194.679 121.895C198.824 121.895 202.047 121.171 204.284 119.724C206.521 118.276 207.705 116.171 207.705 113.474C207.705 111.632 207.113 110.118 205.929 108.868C204.745 107.618 202.508 106.5 199.284 105.447L189.745 102.487C184.942 100.974 181.389 98.7368 179.218 95.7763C177.047 92.8816 175.929 89.6579 175.929 86.2368C175.929 83.4737 176.521 81.0395 177.705 78.9342C178.889 76.8289 180.468 74.9868 182.442 73.5395C184.416 72.0263 186.653 70.9079 189.284 70.1184C191.916 69.3289 194.679 69 197.574 69C199.021 69 200.534 69.0658 201.982 69.2632C203.495 69.4605 204.876 69.7237 206.258 69.9868C207.574 70.3158 208.824 70.6447 210.008 71.0395C211.192 71.4342 212.113 71.8289 212.771 72.2237C213.692 72.75 214.35 73.2763 214.745 73.8684C215.139 74.3947 215.337 75.1184 215.337 76.0395V79.1316C215.337 80.5132 214.811 81.2368 213.824 81.2368C213.297 81.2368 212.442 80.9737 211.324 80.4474C207.574 78.7368 203.363 77.8816 198.692 77.8816C194.942 77.8816 191.982 78.4737 189.942 79.7237C187.903 80.9737 186.85 82.8816 186.85 85.5789C186.85 87.4211 187.508 89 188.824 90.25C190.139 91.5 192.574 92.75 196.061 93.8684L205.403 96.8289C210.139 98.3421 213.561 100.447 215.6 103.145C217.639 105.842 218.626 108.934 218.626 112.355C218.626 115.184 218.034 117.75 216.916 119.987C215.732 122.224 214.153 124.197 212.113 125.776C210.074 127.421 207.639 128.605 204.811 129.461C201.85 130.382 198.758 130.842 195.403 130.842Z"></path><path fill="#F90" fill-rule="evenodd" d="M207.837 162.816C186.192 178.803 154.745 187.29 127.705 187.29C89.8105 187.29 55.6658 173.276 29.8763 149.987C27.8369 148.145 29.679 145.645 32.1132 147.092C60.0079 163.276 94.4158 173.079 130.008 173.079C154.021 173.079 180.403 168.079 204.679 157.816C208.297 156.171 211.389 160.184 207.837 162.816Z" clip-rule="evenodd"></path><path fill="#F90" fill-rule="evenodd" d="M216.85 152.553C214.087 149 198.561 150.842 191.521 151.697C189.416 151.961 189.087 150.118 190.995 148.737C203.363 140.053 223.692 142.553 226.061 145.447C228.429 148.408 225.403 168.737 213.824 178.474C212.047 179.987 210.337 179.197 211.126 177.224C213.758 170.711 219.613 156.039 216.85 152.553Z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/AWSIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$ReactIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ReactIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M125.7 5.6c-38.9-.3-72.2 24.3-81.8 59.9-1.9 6.9-2.7 13.5-3.3 22.1-.5-6.1-1.1-12.3-2-18.4-3.5-25.3-17.1-42.3-36.2-46.7-1.3-.3-1.4-.4-1.8.4-.5 1-1.3 2.1-.5 3.1 3.2 3.9 4.7 9.8 5.6 15 .2 1.3.4 2.5.6 3.8.3 1.7.5 3.3.8 5 3.3 19.3 2.4 39.3-.8 58.7-.5 3-.9 6-1.5 9-6.4-.9-12.9-1.9-19.3-2.9-10.7-1.7-21.7-2.6-32-4.1-3.1-.4-6.2-.7-9.3-1-3.7-.3-5.3 4.2-2.4 6.7 5.2 4.4 12.3 6.9 18.9 9 7.7 2.4 15.6 3.6 23.6 5.4 3 .7 5.9 1.4 8.9 2 5.4 1.1 10.9 2.2 16.3 3.3-.4 5.3-1 10.6-1.9 15.8-3.1 18.5-8.4 36.6-21.1 50.9-2.8 3.2-6.1 5.9-9.5 8.5-4.1 3.2-4.6 9 .5 10.9 2.5 1 5.2 1.5 7.9 1.6 19.7 1 36.3-8.8 49.3-23.1 9.4-10.4 15.6-23.4 19.3-37.1 1.7-6.2 2.6-12.3 4-18.7.5 6.3 1.1 12.6 2.1 18.8 4.6 29 20.6 48.7 44.4 51.3 4 .4 6-3.7 3.3-6.5-5.2-5.4-12.5-8.5-19-11.2-7.4-3.1-15.1-4.8-22.8-7.2-2.6-.8-5.2-1.6-7.8-2.3-5.8-1.7-11.6-3.2-17.4-4.8.5-5.3 1.1-10.5 2-15.8 4.9-27.1 14.4-53 36.3-71.8 1.4-1.2 2.9-2.4 4.1-3.8 3.5-3.8 3.3-9.5-1.9-11.5-2.7-1-5.6-1.5-8.6-1.6-18.5-.6-34 9.3-46.1 22.3M58 136c4.6-19.3 13.5-36.9 20.8-54.7 1.8 10.7 3.9 21.3 5.3 32.1-8.7 7.5-17.4 15-26.1 22.6zm63.4-33.1c11.7.3 23.3.6 35 1 1.4 4.5.9 9.3 1.6 13.9-12.2.3-24.3.5-36.6.6-.4-4.7.7-10.6 0-15.5zm-5-.6c-1.3-4.5-1.1-9.3-1.6-13.9 12.2-.3 24.3-.5 36.5-.6.6 4.6-.6 10.1.1 14.8-11.7-.1-23.3-.3-35-.3zm39.1 25.1c7 7.6 14.9 14.7 20.6 23.3-3.6 8.1-12.7 14-20 18.7-2.6-13.8-1.5-27.8-.6-42zm-53.5 13.9c-4.9 18.2-12.9 34.9-20.1 51.6-2.5-9.3-4.5-18.7-5.9-28.2 8.7-7.8 17.3-15.6 26-23.4z" fill="currentColor"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/ReactIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$PowerBIIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PowerBIIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M109.28 174.613V94.187h36.586v80.426H109.28zM54.88 174.613v-38.346h36.587v38.346H54.88zm109.653 0V60.587h36.587v114.026h-36.587zM20.267 217.6c-5.867 0-10.667-4.8-10.667-10.667V32c0-5.867 4.8-10.667 10.667-10.667h215.466c5.867 0 10.667 4.8 10.667 10.667v174.933c0 5.867-4.8 10.667-10.667 10.667H20.267z" fill="currentColor"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/PowerBIIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$NodeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NodeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128 0C57.399 0 0 57.408 0 128.01c0 70.592 57.399 127.99 128 127.99 70.59 0 128-57.398 128-127.99C256 57.408 198.59 0 128 0zm-8.256 68.618l3.124-.555c-.019 1.488-.131 2.92-.354 4.316-2.503 14.653-15.176 16.59-15.176 16.59s1.423-11.498 10.023-19.034a17.915 17.915 0 0 1 2.383-1.317zm30.932 9.077c12.435 0 22.083 4.296 27.675 14.653.699 1.48 1.4 3.654 1.4 5.925 0 8.04-10.154 11.21-17.159 13.111-6.13 1.69-12.79.846-12.79.846 1.76-7.818 10.687-9.405 10.687-9.405s-2.981-6.87-8.948-6.13c-4.382.53-7.53 4.867-7.53 4.867l-2.633-10.465s4.907-7.72 17.009-8.455h11.922l-1.4 3.17c-2.43 14.432-15.46 22.952-15.46 22.952-1.928.847-19.82 4.02-31.737-9.52-5.495 2.87-6.077 7.747-3.86 11.977 15.65 19.344 65.556 12.052 65.556 12.052l-9.833 34.143s14.908.432 29.47-5.497c23.575-9.608 43.14-53.763 36.43-85.474-5.32-25.127-19.782-41.918-62.77-38.65-48.47 3.67-88.94 45.47-81.936 94.045 1.58 11.0.865 17.758.865 17.758s-22.78-7.925-24.536-39.636c-.114-1.998-.696-18.002 9.49-33.856.35-1.066.883-2.124 1.758-2.964.739-.283 5.435-5.632 6.14-8.98 1.05-5.917-7.188-4.226-7.188-4.226s-15.344 5.285-23.493 25.885c-6.841 17.44-.061 36.782-.061 36.782S13.435 98.742 41.737 80.56l4.044 14.07s-18.799 15.006-21.785 32.766c-.662 4.102-1.895 19.957 6.495 38.03 14.73 31.79 50.407 35.594 50.407 35.594l1.378-4.88c-17.202-3.17-23.702-8.56-23.702-8.56s34.333 13.923 81.654-20.942c26.046-19.236 29.61-42.548 29.61-42.548s-17.76 12.046-52.127-1.902c-4.502-1.83-16.155-7.4-1.58-21.14l-3.33-12.87s-9.489 7.022-4.043-.699z" fill="currentColor"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/NodeIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$GitIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GitIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"> <path d="M223.295 119.23L136.838 32.7376C135.655 31.5526 134.249 30.6127 132.702 29.9714C131.155 29.33 129.496 29 127.822 29C126.148 29 124.489 29.33 122.942 29.9714C121.395 30.6127 119.989 31.5526 118.806 32.7376L100.86 50.6911L123.633 73.4735C128.93 71.6162 134.995 72.8853 139.214 77.1075C141.223 79.1209 142.626 81.6591 143.262 84.432C143.898 87.2049 143.741 90.1009 142.81 92.789L164.76 114.748C170.07 112.916 176.196 114.097 180.434 118.351C181.844 119.761 182.962 121.435 183.725 123.278C184.487 125.12 184.879 127.094 184.879 129.088C184.878 131.082 184.486 133.056 183.723 134.899C182.959 136.74 181.841 138.414 180.431 139.824C179.022 141.234 177.349 142.352 175.508 143.114C173.666 143.878 171.693 144.27 169.699 144.269C167.706 144.269 165.732 143.876 163.891 143.113C162.05 142.35 160.376 141.231 158.967 139.821C154.512 135.363 153.411 128.801 155.663 123.309L135.193 102.83V156.722C136.679 157.457 138.036 158.428 139.214 159.595C140.623 161.004 141.741 162.677 142.505 164.52C143.267 166.361 143.659 168.335 143.659 170.329C143.659 172.323 143.267 174.297 142.505 176.139C141.741 177.981 140.623 179.655 139.214 181.065C137.806 182.474 136.132 183.593 134.292 184.355C132.45 185.118 130.477 185.511 128.484 185.511C126.491 185.511 124.518 185.118 122.677 184.355C120.836 183.593 119.162 182.474 117.753 181.065C116.343 179.655 115.224 177.982 114.46 176.141C113.696 174.298 113.303 172.323 113.303 170.329C113.303 168.335 113.696 166.361 114.46 164.519C115.224 162.676 116.343 161.003 117.753 159.595C119.22 158.134 120.848 157.025 122.723 156.282V101.889C120.916 101.146 119.22 100.051 117.753 98.5774C115.623 96.4483 114.174 93.7326 113.592 90.7766C113.011 87.8205 113.322 84.7581 114.486 81.9797L92.0228 59.5193L32.739 118.766C31.5537 119.951 30.6134 121.357 29.9718 122.905C29.3302 124.454 29 126.113 29 127.789C29 129.465 29.3302 131.125 29.9718 132.673C30.6134 134.221 31.5537 135.628 32.739 136.812L119.202 223.298C120.385 224.483 121.791 225.423 123.338 226.065C124.885 226.706 126.544 227.036 128.218 227.036C129.892 227.036 131.551 226.706 133.098 226.065C134.645 225.423 136.051 224.483 137.234 223.298L223.295 137.338C224.48 136.154 225.421 134.747 226.062 133.199C226.704 131.651 227.034 129.992 227.034 128.316C227.034 126.64 226.704 124.979 226.062 123.431C225.421 121.883 224.48 120.476 223.295 119.292" fill="#fff"></path> </svg>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/icons/GitIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Badge;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="shrink-0 text-xs text-gray-400 bg-slate-800 px-2 py-1 rounded">${text}</span>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/Badge.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProjectItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectItem;
  const { title, date, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col justify-between gap-4 rounded-lg bg-slate-700/50 p-6 transition-transform duration-300 hover:scale-[1.02] hover:bg-slate-700/70"> <div class="flex flex-col gap-2"> <div class="flex w-full justify-between items-start"> <h3 class="text-lg font-bold text-blue-200"> ${title} </h3> ${renderComponent($$result, "Badge", $$Badge, { "text": date })} </div> <p class="text-sm leading-relaxed text-gray-300"> ${description} </p> </div> <div class="flex gap-4 border-t border-slate-600 pt-4"> ${renderSlot($$result, $$slots["default"])} </div> </article>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/ProjectItem.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "areaSection": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full flex-col p-8 md:p-4"> <span id="sec-projects"></span> <h2 class="mb-6 text-2xl font-bold text-yellow-200">
Proyectos Académicos
</h2> <div class="grid grid-cols-2 gap-6 md:grid-cols-1"> <!-- Project 1 --> ${renderComponent($$result2, "ProjectItem", $$ProjectItem, { "title": "Clustering para recomendaci\xF3n de pel\xEDculas", "date": "Nov. 2025", "description": "Implementaci\xF3n y comparaci\xF3n de modelos de clasificaci\xF3n de p\xF3steres\r\n        de pel\xEDculas aplicando procesamiento de im\xE1genes, reducci\xF3n\r\n        dimensional y algoritmos de clustering como K-Means y DBSCAN." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PythonIcon", $$PythonIcon, { "class": "h-6 w-6 text-gray-400 hover:text-yellow-300 transition-colors" })} ${renderComponent($$result3, "GitIcon", $$GitIcon, { "class": "h-6 w-6 text-gray-400 hover:text-red-400 transition-colors" })} ` })} <!-- Project 2 --> ${renderComponent($$result2, "ProjectItem", $$ProjectItem, { "title": "FeelScan", "date": "Set - Dic 2023", "description": "Aplicaci\xF3n web de asistente de recomendaci\xF3n y monitoreo, basada en\r\n        an\xE1lisis de patrones emocionales y rendimiento acad\xE9mico integrando\r\n        servicios de AWS Rekognition y Textract." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ReactIcon", $$ReactIcon, { "class": "h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors" })} ${renderComponent($$result3, "NodeIcon", $$NodeIcon, { "class": "h-6 w-6 text-gray-400 hover:text-green-500 transition-colors" })} ${renderComponent($$result3, "AWSIcon", $$AWSIcon, { "class": "h-6 w-6 text-gray-400 hover:text-orange-400 transition-colors" })} ` })} <!-- Project 3 --> ${renderComponent($$result2, "ProjectItem", $$ProjectItem, { "title": "PremierLeague Analysis", "date": "Abril 2025", "description": "Integraci\xF3n de un modelo relacional con PostgreSQL, extracci\xF3n de\r\n        datos con Selenium y anal\xEDtica de performance de los partidos\r\n        proveniente de datos de la Premier League." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PythonIcon", $$PythonIcon, { "class": "h-6 w-6 text-gray-400 hover:text-yellow-300 transition-colors" })} ${renderComponent($$result3, "PostgresIcon", $$PostgresIcon, { "class": "h-6 w-6 text-gray-400 hover:text-blue-300 transition-colors" })} ${renderComponent($$result3, "PowerBIIcon", $$PowerBIIcon, { "class": "h-6 w-6 text-gray-400 hover:text-yellow-500 transition-colors" })} ` })} <!-- Project 4 --> ${renderComponent($$result2, "ProjectItem", $$ProjectItem, { "title": "B\xFAsqueda de canciones Spotify", "date": "Junio - Julio 2024", "description": "Sistema de motor de b\xFAsqueda eficiente mediante \xEDndices invertidos\r\n        utilizando canciones de Spotify aplicando Python y PostgreSQL que\r\n        mejora la relevancia y precisi\xF3n de los resultados." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PythonIcon", $$PythonIcon, { "class": "h-6 w-6 text-gray-400 hover:text-yellow-300 transition-colors" })} ${renderComponent($$result3, "PostgresIcon", $$PostgresIcon, { "class": "h-6 w-6 text-gray-400 hover:text-blue-300 transition-colors" })} ` })} </div> </div> ` })}`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, date, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> <div class="flex w-full justify-between"> <h3 class="text-lg font-bold">${title}</h3> ${renderComponent($$result, "Badge", $$Badge, { "text": date })} </div> <p class="text-sm leading-relaxed text-gray-300"> ${description} </p> </div>`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "areaSection": "volunteers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full flex-col p-8 md:p-4"> <h2 class="mb-6 text-2xl font-bold text-yellow-200">Voluntariados</h2> <div class="flex flex-col gap-6"> ${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": "Talento Gu\xEDa 2025-2", "date": "Setiembre 2025", "description": "Seguimiento y orientaci\xF3n a un estudiante beneficiario de Beca 18 de\r\n        UTEC desde el primer ciclo de estudios, brindando espacios de mentor\xEDas\r\n        anticipadas con tem\xE1ticas clave para sobrellevar los primeros pasos de\r\n        su nueva etapa universitaria." })} ${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": "Asesor\xEDa acad\xE9mica en IE\u2019s", "date": "Octubre 2024", "description": "Asesor acad\xE9mico de 5\xBA de secundaria de dos IE\u2019s F\xE9 y Alegr\xEDa en\r\n        Ayacucho en el reforzamiento virtual de Matem\xE1tica, mejorando la\r\n        confiabilidad y el nivel acad\xE9mico de los estudiantes." })} </div> </div> ` })} ${renderComponent($$result, "Card", $$Card, { "areaSection": "image2" }, { "default": ($$result2) => renderTemplate` <div class="flex h-full w-full flex-col items-center justify-center p-4"> <h2 class="mb-4 text-xl font-bold text-yellow-200">Habilidades Blandas</h2> <ul class="flex flex-col gap-2 text-center text-sm text-gray-300"> <li>Trabajo en equipo y coordinación</li> <li>Curiosidad y entusiasmo</li> <li>Comunicación técnica asertiva</li> <li>Aprendizaje autodidacta</li> </ul> </div> ` })}`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$IconMapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconMapper;
  const icons = {
    aws: $$AWSIcon,
    git: $$GitIcon,
    github: $$GithubIcon
    // nodejs: NodeIcon,
    // postgres: PostgresIcon,
    // powerbi: PowerBIIcon,
    // python: PythonIcon,
    // react: ReactIcon,
    // Add other mappings as you create more icons
    // "r", "sklearn", "pytorch", "tensorflow", "excel", "mysql", "gcp", "vue", "supabase", "postman", "html", "css", "js" are currently missing
  };
  const { name } = Astro2.props;
  const Icon = icons[name];
  return renderTemplate`${Icon ? renderTemplate`${renderComponent($$result, "Icon", Icon, { "class": "h-12 w-12" })}` : renderTemplate`${maybeRenderHead()}<div${addAttribute(name, "title")} class="flex h-12 w-12 items-center justify-center truncate rounded bg-gray-700/50 font-mono text-xs text-gray-400">${name}</div>`}`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/layouts/IconMapper.astro", void 0);

const $$Astro = createAstro();
const $$SkillMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillMarquee;
  const { skills, speed = "30s", className = "" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ speed }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`marquee-container w-full overflow-hidden whitespace-nowrap mask-gradient ${className}`, "class")} data-astro-cid-fgtlddbx${addAttribute($$definedVars, "style")}> <div class="marquee-content hover:pause flex w-max gap-[6em]" data-astro-cid-fgtlddbx${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "IconMapper", $$IconMapper, { "name": skill, "data-astro-cid-fgtlddbx": true })}`)} ${skills.map((skill) => renderTemplate`${renderComponent($$result, "IconMapper", $$IconMapper, { "name": skill, "data-astro-cid-fgtlddbx": true })}`)} </div> </div> `;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/SkillMarquee.astro", void 0);

const $$Techs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "areaSection": "techs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full flex-col p-8 md:p-4"> <h2 class="mb-6 text-2xl font-bold text-yellow-200">Habilidades</h2> <div class="flex flex-col gap-1"> <h3 class="font-bold pb-5 text-gray-200">Data Processing & ML</h3> ${renderComponent($$result2, "SkillMarquee", $$SkillMarquee, { "skills": ["python", "r", "sklearn", "pytorch", "git", "github", "tensorflow"], "speed": "30s" })} </div> <div class="flex flex-col gap-1"> <h3 class="font-bold py-5 text-gray-200">Data Analysis</h3> ${renderComponent($$result2, "SkillMarquee", $$SkillMarquee, { "skills": ["excel", "mysql", "postgres", "aws", "gcp"], "speed": "35s" })} </div> <div class="flex flex-col gap-1"> <h3 class="font-bold py-5 text-gray-200">Back-end/Web</h3> ${renderComponent($$result2, "SkillMarquee", $$SkillMarquee, { "skills": ["nodejs", "react", "vue", "supabase", "postman", "html", "css", "js"], "speed": "25s" })} </div> </div> ` })}`;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/components/Techs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AdSandovalio" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Profile", $$Profile, {})}  ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Techs", $$Techs, {})}  ${renderComponent($$result2, "Projects", $$Projects, {})} ` })} `;
}, "C:/Users/USER/Desktop/Codes/AdSandovalio/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/Codes/AdSandovalio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
