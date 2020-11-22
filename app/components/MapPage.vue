<template>
  <Page>
    <WebView
      id="map" src="https://leaflet-api.vercel.app?center=" + this.qponMall.latitude + "," + this.qponMall.longitude + "&zoom=17&marker=AC%20Hall%7C" + this.qponMall.latitude + "," + this.qponMall.longitude + "&sensor="
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
    console.log("https://leaflet-api.vercel.app?center=" + this.qponMall.latitude + "," + this.qponMall.longitude + "&zoom=17&marker=AC%20Hall%7C" + this.qponMall.latitude + "," + this.qponMall.longitude + "&sensor=");
  }
};
</script>

<style>
</style>