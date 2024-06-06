import { createRouter, createWebHistory } from 'vue-router';


// vue-cli + webpack 可以用request.context
// vite 用glob
const pageModules = import.meta.glob('@/views/**/page.js', {
    eager: true,
    import: 'default',
});
console.log("pageModules: ", pageModules);
const compoModules = import.meta.glob('@/views/**/index.vue');
console.log("compoModules: ", compoModules);
const routes = Object.entries(pageModules).map(([pagePath, config]) => {
    console.log("pagePath: ", pagePath);
    console.log("config: ", config);
    // 第一个replace不管用！
    let path = pagePath.replace('../views', '').replace('/page.js', '');
    path=path.split('/views')[path.split('/views').length - 1];
    console.log("path: ", path);
    path = path || '/';
    const name = path.split('/').filter(Boolean).join('-') || 'index';
    console.log("name: ", name);

    const compoPath = pagePath.replace('/page.js', '/index.vue');
    console.log("compoPath: ", compoPath);

    return {
        path: path,
        name: name,
        component: compoModules[compoPath],
        meta: config,
    }
});
console.log("routes:", routes);

export default createRouter({
    history: createWebHistory(),
    routes: routes,
});