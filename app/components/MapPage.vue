<template>
  <Page>
    <WebView
      id="map" src="https://leaflet-api.vercel.app?center=22.34,114.18&zoom=17&marker=AC%20Hall%7C22.341072,114.179645&sensor="
    />
  </Page>
</template>

<script>
export default {
  props: ["qponMall"], // Instance property
  data() {
    return {};
  },

  mounted() {
      console.log(this.qponMall);
      console.log("abc");
      var mallObj = global.mallLoc.filter(function(m) {
          return m.mall = qponMall;
      });
      console.log("def");
      console.log(mallObj);
  }
};
</script>

<style>
</style>