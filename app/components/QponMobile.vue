<template>
  <Page @loaded="updateUsername" actionBarHidden="true">
    <ActionBar title="Home" />

    <StackLayout>
      <BottomNavigation>
        <TabStrip>
          <TabStripItem>
            <Label text="Home"></Label>
            <Image src="res://home"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="Malls"></Label>
            <Image src="res://settings"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="Coins"></Label>
            <Image src="res://search"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="User"></Label>
            <Image src="res://search"></Image>
          </TabStripItem>
        </TabStrip>
        <TabContentItem>
          <ListView for="qpon in qpons" @itemTap="onItemTap">
            <v-template>
              <StackLayout orientation="vertical">
                <Image :src="qpon.image" height="300" stretch="aspectFill" />
                <Label :text="qpon.title" class="h1" />
                <Label :text="qpon.detail" class="body" />
                <Label class="h2">
                  <Span text="Coins: "></Span>
                  <Span :text="qpon.coins" />
                </Label>
              </StackLayout>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <ListView for="mall in malls" @itemTap="onMallTap">
            <v-template>
              <Label :text="mall.mall"></Label>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <ListView for="range in ranges" @itemTap="onRangeTap">
            <v-template>
              <Label :text="range[0]">
                <Span :text="range[0]" />
                <Span text=" ~ " />
                <Span :text="range[1]" />
              </Label>
            </v-template>
          </ListView>
        </TabContentItem>
        <TabContentItem>
          <GridLayout columns="*" rows="*, 3*" margin="0, 30">
            <GridLayout
              columns="*, 2*"
              rows="*"
              text-align="center"
              verticalAlignment="middle"
            >
              <Image
                row="0"
                col="0"
                src="https://avatars2.githubusercontent.com/u/46864977?s=460&u=de25e87229941ffcbc3d27a9dd6051caac479fdd&v=4"
              />
              <FlexboxLayout
                row="0"
                col="1"
                height="150"
                verticalAlignment="middle"
                alignItems="center"
                justifyContent="center"
              >
                <Label class="h2" :text="username" />
              </FlexboxLayout>
            </GridLayout>
            <StackLayout row="1" col="0">
              <Button text="Logoff / Login" @tap="onLogTap" />
              <Button text="My Redeemed Coupons" @tap="onRedeemedTap" />
            </StackLayout>
          </GridLayout>
        </TabContentItem>
      </BottomNavigation>
    </StackLayout>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import RadCartesianChart from "nativescript-ui-chart/vue";
Vue.use(RadCartesianChart);

import QponDetail from "./QponDetail";
import QponList from "./QponList";
import QponMallList from "./QponMallList";
import LoginPage from "./LoginPage";
export default {
  methods: {
    onItemTap: function (args) {
      this.$navigateTo(QponDetail, {
        transition: {},
        props: {
          tappedQpon: args.item, // tappedProduct: name in the child page
        },
      });
    },

    onRangeTap: function (args) {
      var qponsInRange = this.qpons.filter(function (qpon) {
        return qpon.coins >= args.item[0] && qpon.coins <= args.item[1];
      });

      this.$navigateTo(QponMallList, {
        transition: {},
        props: {
          qpons: qponsInRange,
          pageTitle: ""
        },
      });
    },

    onMallTap: function (args) {
      var qponsInMall = this.qpons.filter(function (qpon) {
        return qpon.mall == args.item.mall;
      });

      this.$navigateTo(QponList, {
        transition: {},
        props: {
          qpons: qponsInMall,
          pageTitle: args.item.mall
        },
      });
    },

    onLogTap: async function () {
      await fetch(global.baseUrl + "/user/logout");
      global.username = "";

      this.$navigateTo(LoginPage, {
        transition: {},
        props: {},
      });
    },

    onRedeemedTap: async function () {
      var res = await fetch(global.baseUrl + "/qpon/my_coupons");

      if (res.ok) {
        this.$navigateTo(QponMallList, {
          transition: {},
          props: { qpons: await res.json(), pageTitle: "My Redeemed Coupons" },
        });
      } else if (res.status == 403) {
        alert("Please Login");
      }
    },

    updateUsername: function () {
      this.username = global.username;
    },
  },

  computed: {
    inCart: function () {
      return this.products.filter(function (p) {
        return p.quantity > 0;
      });
    },
    total: function () {
      var sum = 0;
      this.products.forEach(function (p) {
        sum += p.quantity * p.price;
      });
      return sum;
    },
  },
  computed: {},

  async mounted() {
    this.ladies = this.products.filter(function (p) {
      return p.department == "Ladies";
    });
    this.gents = this.products.filter(function (p) {
      return p.department == "Gents";
    });
    var res = await fetch(global.baseUrl);
    this.qpons = await res.json();
    this.malls = global.mallLoc;
  },

  data() {
    return {
      username: "",
      qpons: [],
      malls: [],
      ladies: [],
      gents: [],
      products: [
        {
          id: "1",
          department: "Gents",
          name: "Denim Men's Shirts",
          desc: "Passion, dedication, hard work and creativity",
          image: "https://cdn.stocksnap.io/img-thumbs/960w/GAVVVYCGXC.jpg",
          price: 450,
          quantity: 0,
        },
        {
          id: "2",
          department: "Ladies",
          name: "RUN Hoodies",
          desc: "Top-quality, instant-favorite sweatshirt",
          image: "https://cdn.stocksnap.io/img-thumbs/960w/UHAQDIYT6X.jpg",
          price: 600,
          quantity: 0,
        },
        {
          id: "3",
          department: "Gents",
          name: "Men's Lightweight Coat",
          desc: "Signature Buck appliqué",
          image: "https://cdn.stocksnap.io/img-thumbs/960w/PJY3Y7010M.jpg",
          price: 2500,
          quantity: 0,
        },
        {
          id: "4",
          department: "Ladies",
          name: "Story Story Tee",
          desc: "Ultra soft T-shirt",
          image: "https://cdn.stocksnap.io/img-thumbs/960w/GCJ7VU3PZ0.jpg",
          price: 340,
          quantity: 0,
        },
      ],
      figures: [],
      ranges: [
        [0, 299],
        [300, 599],
        [600, 899],
        [900, 1199],
        [1200, 9999],
      ],
    };
  },
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>