<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <!-- <md-button
        class="md-just-icon md-simple md-toolbar-toggle"
        :class="{ toggled: $sidebar.showSidebar }"
        @click="toggleSidebar"
      >
        <md-icon>menu</md-icon>
      </md-button> -->

      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>

      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
            </md-list-item>

            <li class="md-list-item">
              <a
                href="#/notification"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <md-button
                    slot="title"
                    class="md-just-icon md-simple"
                    data-toggle="dropdown"
                  >
                    <md-icon>notifications</md-icon>
                    <span
                      class="notification"
                      :class="{
                        'no-notification': $store.state.numOfNotifications == 0
                      }"
                      >{{ $store.state.numOfNotifications }}</span
                    >
                  </md-button>
                </div>
              </a>
            </li>

            <md-list-item href="#/profile">
              <i class="material-icons">person</i>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="css"></style>
