<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="">
        <span class="md-title md-toolbar-section-start">
        <a routerLink="/">My Title</a></span>
        <div data-v-785dc556="" class="vue-ui-spacer"></div>
        <md-autocomplete
            class="search"
            v-model="selectedEmployee"
            :md-options="employees"
            md-layout="box">
          <label>Search...</label>
        </md-autocomplete>
        <div class="md-toolbar-section-end">
          <md-button class="md-raised md-primary" to="/account/add-new-code">
            <md-icon>add</md-icon>
          add new
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" class="flx-layout flx-col project-drawer">
        <md-list>
          <md-list-item to="/account/my-editor">
            <md-icon>chrome_reader_mode</md-icon>
            <span class="md-list-item-text">My editor</span>
          </md-list-item>

          <md-list-item to="/account/shared-with-me">
            <md-icon>group</md-icon>
            <span class="md-list-item-text">Shared with me</span>
          </md-list-item>

          <md-list-item to="/account/trash">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item href="https://google.com">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
        <div class="v-footer">
          <md-list>
            <md-list-item to="/account/about">
              <md-icon>info</md-icon>
              <span class="md-list-item-text">About</span>
            </md-list-item>
          </md-list>
        </div>
      </md-app-drawer>

      <md-app-content >
        <transition name="router-animation">
         <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PermanentClipped',
    data: () => ({
    selectedEmployee: null,
    employees: [
      'Jim Halpert',
      'Dwight Schrute',
      'Michael Scott',
      'Pam Beesly',
      'Angela Martin',
      'Kelly Kapoor',
      'Ryan Howard',
      'Kevin Malone',
      'Creed Bratton',
      'Oscar Nunez',
      'Toby Flenderson',
      'Stanley Hudson',
      'Meredith Palmer',
      'Phyllis Lapin-Vance'
    ]
  })
  }

</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }
  .md-toolbar{
    background-color: #fff !important;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);

  }
  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .search {
    max-width: 40%;
    background-color:rgba(200,200,200,0.3) !important;
  }


  .router-animation-enter-active{
    animation:fadeOut 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }
  .router-animation-leave-active{
    animation:fadeIn 1s;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(0);
    }
    to{
      transform: translateY(100px);
      opacity:0;
    }
  }

    @keyframes fadeOut {
    from {
      transform: translateY(100px);
      opacity:0;
    }
    to{
      transform: translateY(0);
      opacity:1;
    }
  }
</style>