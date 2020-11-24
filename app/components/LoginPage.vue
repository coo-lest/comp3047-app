<template>
  <Page>
    <ActionBar title="Login" />
    <StackLayout>
      <TextField v-model="username" hint="username" />
      <TextField v-model="password" hint="password" secure="true" />
      <Button text="Login" @tap="onLoginTap" />
    </StackLayout>
  </Page>
</template>

<script>
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

      if (res.ok) {
        global.username = this.username;
        await alert("Login successful");
        this.$navigateBack();
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