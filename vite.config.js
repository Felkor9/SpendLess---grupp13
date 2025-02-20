import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import {BootstrapVueNextResolver} from "unplugin-vue-components/resolvers"

export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [BootstrapVueNextResolver()],
		}),

	],
})



// import {defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'

// import Components from 'unplugin-vue-components/vite'
// import IconsResolve from 'unplugin-icons/resolver'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     Components({
//       resolvers: [IconsResolve()],
//       dts: true,
//     }),
//     Icons({
//       compiler: 'vue3',
//       autoInstall: true,
//     }),
//   ],
// })
