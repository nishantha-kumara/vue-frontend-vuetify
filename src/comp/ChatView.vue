<template>
    <div>
        <h4>Chat view</h4>
        {{$route.params.set}}
    </div>
</template>


<script>
    export default {
        data: function () {
            return {
                chatMessage: [],
                userId: null,
                chats: [],
                chatWindows: [],
                chatStatus: 0,
                chatWindowStatus: [],
                chatCount: [],
            }

        },
        methods: {
            sendMessage() {

            }
        },
        mounted() {
            alert(this.$route.params.set.id)
            window.Echo.channel('chat-message' + this.$route.params.set.id)
                .listen('ChatMessage', (e) => {
                    console.log(e)
                    this.userId = e.user.sourceuserid;

                    if (this.chats[this.userId]) {
                        this.show = 1;
                        this.$set(app.chats[this.userId], this.chatCount[this.userId], e.user);
                        this.chatCount[this.userId]++;
                        console.log("pusher");
                        console.log(this.chats[this.userId]);
                    } else {
                        this.createChatWindow(e.user.sourceuserid, e.user.name)
                        this.$set(app.chats[this.userId], this.chatCount[this.userId], e.user);
                        this.chatCount[this.userId]++;
                    }


                })
        },

    }
</script>