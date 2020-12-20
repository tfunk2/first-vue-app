const app = Vue.createApp({
  data: function () {
    return {
      name: "Tyler Funk",
      age: 28,
      hometown: "Kansas City, MO",
      hobbies: ["Golf", "Coding", "Video Games"],
      displayedHobby: `Click the button to see this person's hobbies!`,
      avatarImage: "https://www.w3schools.com/howto/img_avatar.png",
    };
  },
  methods: {
    setDisplayedHobby() {
      let randomIndex = Math.floor(Math.random() * this.hobbies.length);

      if(this.displayedHobby === this.hobbies[randomIndex]) {
        if(randomIndex === 0) {
          randomIndex = 1;
        } else {
          randomIndex -= 1
        }
      }
      
      this.displayedHobby = this.hobbies[randomIndex];
    },
  },
});

app.mount("#app-body");
