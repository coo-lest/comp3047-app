<template>
  <Page>
    <StackLayout>
      <TextField v-model="username" hint="username" />
      <TextField v-model="password" hint="password" />
      <Button text="Login" @tap="onLoginTap" />
    </StackLayout>
  </Page>
</template>

<script>
import HelloWorld from "./HelloWorld"
export default {
  props: [],
  methods: {
    onLoginTap: async function () {
      var res = await fetch(global.baseUrl + "/user/login", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      console.log(res);

      if (res.ok) {
        alert("Login successful");
        this.$navigateTo(HelloWorld, {
          transition: {},
          props: {},
        });
      } else {
        alert(await res.json());
      }
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },

  mounted() {},
};
</script>

<style>
</style>