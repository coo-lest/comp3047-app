<template>
  <Page>
    <ListView for="qpon in qpons" @itemTap="onItemTap">
      <v-template>
        <Label :text="qpon.title" />
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import QponDetail from "./QponDetail"
export default {
  props: ["qpons"],
  data() {
    return {
      qpons: [],
    };
  },
  methods: {
    onItemTap: function (args) {
      this.$navigateTo(QponDetail, {
        transition: {},
        props: {
          tappedQpon: args.item, // tappedProduct: name in the child page
        },
      });
    },

  }
};
</script>

<style>
</style>
