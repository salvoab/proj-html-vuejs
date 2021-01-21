
let app = new Vue({
    el: '#root',
    data: {
        navbarLinks: ['Homes', 'Pages', 'Shop', 'Events', 'Elements'],
        activeLinkIndex: 0,
        headerCarouselIndex: 0,
        headerCarousel:[
            {
                title: 'Our Teams',
                img: './assets/img/rev-slider-main-home-img-03.jpg',
                paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi quod.'
            },
            {
                title: 'Our Mission',
                img: './assets/img/rev-slider-main-home-img-02.png',
                paragraph: 'Some other Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi quod.'
            }
        ],
        /*Vettore di oggetti, ogni oggetto rappresenta una colonna del footer
        typeOfContent serve per distinguere fra colonne contenenti liste e colonne con un paragrafo
        le liste sono rappresentate da un vettore di oggetti, in ciascun oggetto è indicata la classe
        dell'icona usata per sostituire il classico cerchio delle ul, e il contenuto del list item*/
        footerColumns:[
            {
                columnTitle: 'About',
                typeOfContent: 'paragraph',
                data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita.'
            },
            {
                columnTitle: 'Twitter',
                typeOfContent: 'list',
                data:[
                    {
                        iconClass: 'fab fa-twitter',
                        liContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        iconClass: 'fab fa-twitter',
                        liContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    }
                ]
            },
            {
                columnTitle: 'Important links',
                typeOfContent: 'list',
                data:[
                    {
                        iconClass: '',
                        liContent: 'About me'
                    },
                    {
                        iconClass: '',
                        liContent: 'About us'
                    },
                    {
                        iconClass: '',
                        liContent: 'Language packs'
                    },
                    {
                        iconClass: '',
                        liContent: 'Become coach'
                    },
                    {
                        iconClass: '',
                        liContent: 'Monthly events'
                    }
                ]
            },
            {
                columnTitle: 'Contact me',
                typeOfContent: 'list',
                data:[
                    {
                        iconClass: 'fas fa-map-marker-alt',
                        liContent: '457 BigBlue Street, NY 10013'
                    },
                    {
                        iconClass: 'fas fa-phone',
                        liContent: '(315) 5512-2579'
                    },
                    {
                        iconClass: 'far fa-envelope',
                        liContent: 'everlead@mikado.com'
                    }
                ]
            },
        ]
    },
    methods:{
        prevHeader(){
            if(this.headerCarouselIndex-1 < 0){
                this.headerCarouselIndex = this.headerCarousel.length - 1;
            } else {
                this.headerCarouselIndex--;
            }
        },
        nextHeader(){
            if(this.headerCarouselIndex+1 >= this.headerCarousel.length){
                this.headerCarouselIndex =  0;
            } else {
                this.headerCarouselIndex++;
            }
        },
        topScroll(){
            window.scroll(0, 0);
        }
    }
    
});