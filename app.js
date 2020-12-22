const app = Vue.createApp({
  data: function () {
    return {
      name: "Tyler Funk",
      age: 28,
      hometown: "Kansas City, MO",
      hobbies: ["Golf", "Coding", "Video Games"],
      displayedHobby: `Click the button to see this person's hobbies!`,
      avatarImage: "https://www.w3schools.com/howto/img_avatar.png",
      colorOne: false,
      colorTwo: false,
      colorThree: false,
      colorFour: false,
      colorFive: false,
      activeColor: "#FFFFFF"
    }
  },
  computed: {
    activeBackgroundColor() {
      return { 
        colorOne: this.colorOne, 
        colorTwo: this.colorTwo, 
        colorThree: this.colorThree, 
        colorFour: this.colorFour, 
        colorFive: this.colorFive, 
      }
    }
  },
  methods: {
    setDisplayedHobby() {
      let randomIndex = Math.floor(Math.random() * this.hobbies.length);

      if(this.displayedHobby === this.hobbies[randomIndex]) {
        if(randomIndex === 0) {
          randomIndex = 1;
        } else {
          randomIndex -= 1;
        }
      }
      
      this.displayedHobby = this.hobbies[randomIndex];
    },
    changeBackgroundColor() {
      const colorPalette = ['#72195A', '#386FA4', '#D0D6B5', '#F9B5AC', '#EE7674']
      let randomIndex = Math.floor(Math.random() * colorPalette.length);

      if(colorPalette[randomIndex] === this.activeColor) {
        if(randomIndex === 0) {
          randomIndex = colorPalette.length - 1;
        } else {
          randomIndex -= 1;
        }
      }

      this.colorOne = false;
      this.colorTwo = false;
      this.colorThree = false;
      this.colorFour = false;
      this.colorFive = false;

      switch(colorPalette[randomIndex]) {
        case '#72195A':
          this.colorOne = true;
          this.activeColor = '#72195A';
          break;
        case '#386FA4':
          this.colorTwo = true;
          this.activeColor = '#386FA4';
          break;
        case '#D0D6B5':
          this.colorThree = true;
          this.activeColor = '#D0D6B5';
          break;
        case '#F9B5AC':
          this.colorFour = true;
          this.activeColor = '#F9B5AC';
          break;
        case '#EE7674':
          this.colorFive = true;
          this.activeColor = '#EE7674';
          break;
        default:
          this.activeColor = '#FFFFFF'
          break;
      }
    }
  }
});

app.mount("#app-body");
