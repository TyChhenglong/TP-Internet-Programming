<template>
  <div class="about">
    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
        <label class="textUser">please fill in this form to create an account.</label>
        <div class="text-center">
          <!-- <img
          class="mb-4"
          src="../assets/logo.png"
          alt=""
          width="72"
          height="57"
        /> -->
        </div>
        <h1 class="h3 mb-3 fw-normal"></h1>
        <label class="textUser">Email</label>

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

        <label class="textUser">Usernamer</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
            id=""
            placeholder="username"
            v-model="username"
          />
          <label for="floatingInput">Username</label>
        </div>

        <label class="textUser">First name</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
            
            placeholder="firstname"
            v-model="firstname"
          />
          <label for="floatingInput">First name</label>
        </div>

        <label class="textUser">Last name</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
           
            placeholder="lastname"
            v-model="lastname"
          />
          <label for="">Last name</label>
        </div>

        <label class="textUser">Password</label>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Create your password</label>
        </div>

        <label class="textUser">Password</label>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            
            placeholder="repeatPassword"
            v-model="repeat_password"
          />
          <label for="floatingPassword">Repeat your password</label>
        </div>


        <label style="display: flex; justify-content: flex-start; padding: 20px">
          By creating an account you agree to our
          <span style="color: #4285f4"> &nbsp Terms & Privay</span>
        </label>
        
      </form>
       <button class="w-100 btn btn-lg btn-primary" type="submit" @click="created">Sign in</button>
       <div class="checkbox mb-3"></div>
        <a href="http://localhost:3000/"
        ><label
          style="
            display: flex;
            justify-content: center;
            padding: 20px;
            color: #41b883;
          "
        >
          Login 
        </label>
      </a>
       <div class="redcolor" id="err"></div>
    </main>

    


  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
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


<script>

import "@/assets/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      repeat_password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          firstName: this.firstname,
          lastName: this.lastname,
          password: this.password,
          repeat_password: this.repeat_password
        }),
      };
      const response = await fetch("http://localhost:3001/auth/register", requestOptions);
      const data = await response.json();
      console.log("data: ", data);

      //check if user is not existed
      if(data.success == false) {
        var element = document.getElementById("err");
         element.innerHTML = `<h2>Please complete information </h2>`
      }
      else {
        // this.msg = data.message;
        // this.input_color = "rgba(106,168,79,.8)";

        //clear input value
        this.email = "";
        this.username = "";
        this.lastname = "";
        this.firstname = "";
        this.password = "";

        this.$router.push({name:"login" ,hash:"#login"});

      } 
    },
  },
};
</script>

<style scoped>
.redcolor{
color: red;}

.container {
  border: 1px solid rgb(204, 203, 203);
  padding: 10px;
  width: 400px;
  height: 600px;
}

a {
  font-weight: 700;
  color: #00a271;
}

.log_in {
  padding: 10px;
  border-radius: 2%;
}

.log_in h4 {
  margin-bottom: 10px;
}

.log_in > input {
  width: 100%;
  border: 1px solid rgb(247, 244, 244);
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  background-color: rgb(228, 226, 226);
}

#btn_signup {
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 48%;
  background-color: #41b883;
  border: 1px solid white;
  color: white;
  padding-bottom: 4%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
  margin-top: 10px;
}
#btn_signup:hover {
  color: red;
}
</style>
