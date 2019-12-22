<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Amplify, { API } from 'aws-amplify';

@Component
export default class HelloWorld extends Vue {
  private msg = "There is tasks";

  private created() {
    let apiName = 'tasks';
    let path = '/';
    let myInit = { // OPTIONAL
        headers: {}, // OPTIONAL
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        queryStringParameters: {}
    }

    API.get(apiName, path, myInit).then(response => {
        console.log(response);
        // Add your code here
    }).catch(error => {
        console.log(error.response);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
