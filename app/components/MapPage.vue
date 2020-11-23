<template>
  <Page>
    <WebView
      id="map"
      :src="
        'https://leaflet-api.vercel.app?center=' +
        this.qponMall.latitude +
        ',' +
        this.qponMall.longitude +
        '&zoom=17&marker=' + this.qponMall.mall + '%7C' +
        this.qponMall.latitude +
        ',' +
        this.qponMall.longitude +
        '&sensor='
      "
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
  },
};
</script>

<style>
</style>
