import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/pages/home/Home.vue";
import Flims from "../components/pages/flims/Flims.vue";
import NotFound from "../components/common/NotFound.vue";
import Detail from "../components/pages/detail/Detail.vue";

const routes = new VueRouter({
  routes:[
    {
      path:"",
      redirect:"/home" //重定向
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/flims",
      component:Flims
    },
    {
      path:"/notfound",
      component:NotFound
    },
    {
      path:"**",
      redirect:"/notfound"
    },
    {
      path:"/detail/:id",
      name:"detail",
      component:Detail,
      props:true
    }
  ]
});

// router.beforeEach((to,from,next)=>{
//   bus.$emit("closeNav");
//   next();
// });

export default routes;
