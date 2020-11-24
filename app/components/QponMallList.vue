<template>
  <Page :actionBarHidden="actionBarHidden">
    <ActionBar :title="pageTitle" />
    <ListView for="qpon in qpons" @itemTap="onItemTap">
      <v-template>
        <StackLayout>
          <Label class='h3' :text="qpon.restaurant" />
          <Label :text="qpon.mall" />
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import QponDetail from "./QponDetail";
export default {
  props: ["qpons", "pageTitle", "actionBarHidden"],
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
  },
};
</script>

<style>
</style>
