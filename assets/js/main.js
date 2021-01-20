
let app = new Vue({
    el: '#root',
    data: {
        navbarLinks: ['Homes', 'Pages', 'Shop', 'Events', 'Elements'],
        activeLinkIndex: 0,
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
    }
    
});