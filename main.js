const vm = new Vue({
    el: '#app',
    data() {
        return {
            myName: 'Joe',
            myImgs: [
                './img/1.jpg',
                './img/2.png',
                './img/3.png',
                './img/4.jpg',
                './img/5.jpg'
            ],
            slideIndex: 0,
            keepPlay: null
        }
    },
    mounted() {
        this.keepPlay = setInterval(() => {
            this.changeSlide(this.slideIndex + 1)
        }, 3000)
    },
    methods: {
        changeSlide(n) {
            this.slideIndex = (parseInt(n, 10) + this.countImg) % this.countImg
        },
        keepStop() {
            clearInterval(this.keepPlay);
            console.log('stop!');

        }
    },
    computed: {
        countImg() {
            return this.myImgs.length
        }
    }
})