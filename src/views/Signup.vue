<template>
  <div>
    <md-content class="md-primary banner-bg">
      <h1 class="banner-title"><span class="light-txt">Coddicted</span><span class="v-bar"></span> Sign Up</h1>
    </md-content>
    <md-content class="md-elevation-2 signup-form">
      <h2>Sign up</h2>
      <form>
        <md-field :class="messageClass">
          <label>Full name</label>
          <md-input v-model="required" required></md-input>
          <span class="md-error">Name is required</span>
        </md-field>
        <md-field :class="messageClass">
          <label>Email-id</label>
          <md-input v-model="required" required></md-input>
          <span class="md-error">Email-id is required</span>
        </md-field>
        <md-field :class="messageClass">
          <label>Phone no.</label>
          <md-input v-model="required" required></md-input>
          <span class="md-error">Phone no is required</span>
        </md-field>
        <b>Security</b>
        <md-field :class="messageClass">
          <label>Create password</label>
          <md-input v-model="password" type="password"></md-input>
          <span class="md-error">Password is required</span>
        </md-field>
        <md-field :class="messageClass" :md-toggle-password="false">
          <label>Re-type password</label>
          <md-input v-model="password" type="password"></md-input>
          <span class="md-error">Re-type password is required</span>
        </md-field>
        <div class="text-right">
          <md-button class="md-raised md-primary" disabled>save and continue</md-button>
        </div>
      </form>
    </md-content>
  </div>

</template>

<script>
  export default {
    name: "signup",
    data: () => ({
    noError: null,
    required: null,
    textarea: null,
    hasMessages: false
  }),
  computed: {
    messageClass()
    {
      return {
        'md-invalid': this.hasMessages
      }
    }
  }
  }
</script>

<style scoped>
.signup-form{
  width:26%;
  padding:2rem;
  margin:auto;
  transform:translateY(-50px);
}
.v-bar{
  height: 45px;
  margin: 0 10px;
  vertical-align: middle;
  display: inline-block;
  border-left: 1px solid #fff;
}
  .light-txt{
    opacity:0.8;
  }
</style>