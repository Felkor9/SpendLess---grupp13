import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import {BootstrapVueNextResolver} from "unplugin-vue-components/resolvers"
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [BootstrapVueNextResolver()],
			resolvers: [IconsResolve()],
		    dts: true,
		}),
		Icons({
			compiler: 'vue3',
			autoInstall: true,
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
