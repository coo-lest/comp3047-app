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
export default {
  props: ["qpons"],
  data() {
    return {
      qpons: [],
    };
  },
};
</script>

<style>
</style>