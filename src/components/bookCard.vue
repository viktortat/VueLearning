<template>
<div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
  <div class="card">
    <div class="card-image">
      <router-link :to=bookDetailInfo><img :src=bookCoverImage></router-link>
    </div>
    <div class="card-action">
      <div class="input-group">
        <span class="input-group-addon">¥</span>
        <input type="text" class="form-control" :placeholder=bookPrice disabled>

        <span class="input-group-btn">
                 <!--router-link 里面加入 target="_blank" 可以从新的选项卡打开一个新界面-->
                <a class="btn btn-success" @click="goGoodsCart">购买</a>
                <!-- <button class="dropdown btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                    下载
                    <span class="caret"></span>
        </button>
        <ul class="dropdown-menu products-dropdown-menu">
          <li><a href="">PDF 格式</a></li>
          <li><a href="">mobi 格式</a></li>
          <li><a href="">epub 格式</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="">打包下载</a></li>
        </ul> -->
        <router-link :to="{ path: bookDetailInfo }" class="btn btn-default" type="button">详细</router-link>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '@/router'

export default {
  props: [
    'book-cover-image',
    'book-price',
    'book-detail-info'
  ],
  methods: {
    goGoodsCart() {
      this.$store.state.user.isLogin ? router.push('/goodscart') : router.push('/login')
    }
  }
}
</script>

<style>

</style>
