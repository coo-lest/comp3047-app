<template>
  <ListView for="qpon in qpons" @itemTap="onItemTap">
    <v-template>
      <Label :text="mall.mall"></Label>
    </v-template>
  </ListView>
</template>

<script>
export default {
  props: ["selectedRange"],
  data() {
    return {
        qpons: [],
    };
  },
};
</script>

<style>
</style>