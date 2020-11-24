<template>
  <Page>
    <GridLayout>
    <WebView
      id="map"
      :src="'https://leaflet-api.vercel.app?center=' + qponMall.latitude + ',' + qponMall.longitude + '&zoom=17&marker=' + encodeURIComponent(qponMall.mall) + '%7C' + qponMall.latitude + ',' + qponMall.longitude + '&sensor='"/>
    </GridLayout>
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
