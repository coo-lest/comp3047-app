<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Image :src="tappedQpon.image" height="300" stretch="aspectFill" />

      <ScrollView>
        <StackLayout class="m-10">
          <Label class="h1" :text="tappedQpon.restaurant" />
          <Label class="body" :text="tappedQpon.detail" />
          <Label class="h2">
            <Span text="Mall: " />
            <Span :text="tappedQpon.mall" />
            <Span text=", Coins: " />
            <Span :text="tappedQpon.coins" />
          </Label>
          <Label class="h3">
            <Span text="Expiry Date: " />
            <Span :text="tappedQpon.expire" />
          </Label>

          <Button
            class="h2 -primary -rounded-lg"
            text="Redeem"
            @tap="onRedeemTap"
          />
          <Button
            class="h2 -primary -rounded-lg"
            text="Address"
            @tap="onAddressTap"
          />
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import MapPage from "./MapPage.vue";
export default {
  props: ["tappedQpon"], // Instance property

  methods: {
    async onRedeemTap() {
      var result = await confirm({
        title: "Are you sure",
        message: "To redeem this coupon?",
        okButtonText: "Yes",
        cancelButtonText: "No",
      });
      if (result) {
        var res = await fetch(global.baseUrl + "/qpon/" + this.tappedQpon.id, {
          method: "POST",
        });
        if (res.ok) {
          alert({ title: "Redeem successfully", okButtonText: "OK" });
        } else if (res.status == 403) {
          alert({ title: "Please login", okButtonText: "OK" });
        } else {
          alert({ title: await res.json(), okButtonText: "OK" });
        }
      }
    },

    onAddressTap: function() {
      var mallObj = global.mallLoc.filter(function(m) {
          return m.mall == this.tappedQpon.mall;
      }.bind(this))[0];
      this.$navigateTo(MapPage, {
        transition: {},
        props: {
          qponMall: mallObj
        },
      });
    },
  },

  data() {
    return {
      textFieldValue: this.tappedQpon.quantity || "",
    };
  },
};
</script>

<style>
</style>