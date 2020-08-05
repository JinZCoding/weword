<template>
  <div>
    <mt-header title="首页">
      <template v-if="$route.name == 'Index' || $route.name == 'Home'">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </template>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="0" @click="goIndex">
        <i slot="icon" class="iconfont icon-shouye1"></i>
        首页
      </mt-tab-item>
      <mt-tab-item :id="1" @click="goMy">
        <i slot="icon" class="iconfont icon-my"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  public selected = 0;

  created() {
    console.log("a", this.$route.name);
    this.$toast("提示信息");
    // console.log(this);
    // Toast("提示");
  }

  goIndex() {
    console.log("1");
    this.$router.push("/home");
  }
  goMy() {
    console.log("2");
    this.$router.push("/about");
  }
}
</script>

<style scoped lang="scss">
.mint-tabbar {
  font-weight: 700;
}
i {
  font-weight: 700;
  font-size: 26px;
}
</style>
