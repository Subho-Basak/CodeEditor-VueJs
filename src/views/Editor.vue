<template>
  <div class="flx-layout md-layout md-gutter">
    <div class="md-layout-item md-size-25">
      <RecentUpload></RecentUpload>
    </div>
    <div class="md-layout-item" id="file">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-60">
          <h3 class="vue-heading">My files</h3>
        </div>
        <div class="md-layout-item md-size-40">

        </div>
        </div>
        <md-card v-for="file in 10" :key="file">
          <md-card-header>
            <md-avatar>
              <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
            </md-avatar>

            <div class="md-title"> Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
          </md-card-content>
          <md-divider></md-divider>
          <md-card-actions>
            <md-button>Action</md-button>
            <md-button to="/code/123">view</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import RecentUpload from '@/components/RecentUpload.vue'

  export default {
    name: 'home',
    components: {
      RecentUpload
    }
  }
</script>

<style>
  .md-card {
    width: 29%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>