<template>
  <Page>
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
              <StackLayout orientation="vertical" height="350">
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
          <StackLayout>
            <FlexboxLayout flexDirection="row">
              <Label text="1" backgroundColor="#EEEEEE" flexGrow="1" />
              <Label text="2" backgroundColor="#DDDDDD" flexGrow="2" />
            </FlexboxLayout>
            <Button text="Logoff / Login" @tap="onLogTap" />
            <Button text="My Redeemed Coupons" @tap="onRedeemedTap" />
          </StackLayout>
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
import LoginPage from "./LoginPage";
export default {
  methods: {
    onItemTap: function (args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Product tapped: " + args.item.name);

      this.$navigateTo(QponDetail, {
        transition: {},
        props: {
          tappedQpon: args.item, // tappedProduct: name in the child page
        },
      });
    },

    onButtonTap: async function () {
      var result = await confirm({
        title: "Confirm to place order?",
        message: "Sending to httpbin.org",
        okButtonText: "Yes",
        cancelButtonText: "Cancel",
      });
      if (result) {
        var response = await fetch("https://httpbin.org/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.inCart),
        });
        if (response.ok) {
          var data = await response.json();
          this.figures = data.json;
        } else {
          console.log(response.status);
        }
      }
    },

    onRangeTap: function (args) {
      console.log(args.item[0]);
      console.log(args.item[1]);
      var qponsInRange = this.qpons.filter(function (qpon) {
        return qpon.coins >= args.item[0] && qpon.coins <= args.item[1];
      });

      this.$navigateTo(QponList, {
        transition: {},
        props: {
          qpons: qponsInRange,
        },
      });
    },

    onMallTap: function (args) {
      console.log(args.item.mall);

      var qponsInMall = this.qpons.filter(function (qpon) {
        return qpon.mall == args.item.mall;
      });

      this.$navigateTo(QponList, {
        transition: {},
        props: {
          qpons: qponsInMall,
        },
      });
    },

    onLogTap: async function () {
      await fetch(global.baseUrl + "/user/logout");

      this.$navigateTo(LoginPage, {
        transition: {},
        props: {},
      });
    },

    onRedeemedTap: async function () {
      var res = await fetch(global.baseUrl + "/qpon/my_coupons");

      if (res.ok) {
        this.$navigateTo(QponList, {
          transition: {},
          props: { qpons: await res.json() },
        });
      } else if (res.status == 403) {
        alert("Please Login");
      }

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
    console.log("qpons");
    console.log(this.qpons);
  },

  data() {
    return {
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