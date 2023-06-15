


<template>
  <div>
    <main class="form-signin">
      <form>
        <div class="text-center">
          <img
            class="mb-4"
            src="../assets/logo.png"
            alt=""
            width="72"
            height="57"
          />
        </div>
        <h1 class="h3 mb-3 fw-normal"></h1>
        <label class="textUser">Usernamer</label>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Enter Email</label>
        </div>
        <label class="textUser">Password</label>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Enter Password</label>
        </div>
      </form>
      <div class="checkbox mb-3"></div>
      <button
        class="w-100 btn btn-lg btn-primary"
        @click="created()"
        type="submit"
      >
        Login
      </button>

      <a href="http://localhost:3000/register"
        ><label
          style="
            display: flex;
            justify-content: flex-end;
            padding: 20px;
            color: #41b883;
          "
        >
          Create your new account here.
        </label>
      </a>

      <div class="redcolor" id="err"></div>
    </main>
  </div>
</template>

<script>
import "@/assets/dist/css/bootstrap.min.css";


export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {

   
    async created() {

       if(this.email == "" && this.password == 0) { 
         
         var element = document.getElementById("err");
         element.innerHTML = `<h2>Your information incorrect</h2>`
        
    }
    else{
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json",  
         "Access-Control-Allow-Credentials": true, },
        body: JSON.stringify({ email: this.email, password: this.password }),
        
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/auth/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
     
      if (data.success == true) {
       
        this.$router.push({ name: "homeform", hash: "#HOME" });
      } else {
       
      }
    }

     
      
    },
  },
};
</script>

<style scoped>
.redcolor{
color: red;}
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
.btn-primary {
  background-color: #41b883;
  border-color: #41b883;
}
.mb-4 {
  height: 200px;
  width: 200px;
}
.textUser {
  padding: 12px;
}
form {
  box-shadow: 0 0 3px #ccc;
  padding: 10px;
}
.form-signin {
  width: 100%;
  max-width: 6 30px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
  