/*boolzapp*/

//array obj creation
const app = new Vue({
    el: '#app',
    data: {
        newMessage: "",
        activeChat: 0,
        user: {
            nameUser: 'Sandro',
            avatar: '_leoni'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            }, {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        lastAcces: dayjs().format('HH:mm'),

        answers: ['ok', 'pota!', 'lè semper lù!', 'Vi torna la situation?'],
    },
    created() {

        dayjs();
    },

    methods: {

        randomNumber() {
            return number = Math.floor(Math.random() * this.answers.length);
        },

        currentChat(i) {

            this.activeChat = i;

            this.addScroll();
        },

        sendMessage() {
            const message = this.newMessage;


            if (message !== '') {

                const newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: message,
                    status: 'sent',
                }

                this.contacts[this.activeChat].messages.push(newMessage);
                console.log(this.randomNumber());

                this.addScroll();

                setTimeout(() => {

                    const newMessageReceived = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.answers[this.randomNumber()],
                        status: 'received',
                    }

                    this.contacts[this.activeChat].messages.push(newMessageReceived);


                    this.addScroll();
                }, 2000);

                this.newMessage = '';

                this.$refs.messInput.focus();
            }
        },

        addScroll() {

            setTimeout(() => {

                this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
            }, 1);
        },

        downMenuChat() {
            this.$refs.menuChat.classList.toggle('spownNone');
        },

        search() {

            const searchName = this.nameSearch.toLowerCase();
            console.log(searchName);

            this.contacts.forEach(contact => {

                const nameContact = contact.name.toLowerCase();

                if (nameContact.includes(searchName)) {

                    contact.visible = true;
                } else {

                    contact.visible = false;
                }
            });

        },
    },
})