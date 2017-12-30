<template>
  <div>
      <div class="title">
        <h1>{{message}}</h1>
        <h2>{{tagLine[Math.floor(Math.random()*6)]}}</h2>
      </div>
  </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        data(){
            return {
                message: 'CeeLo',
                tagLine: [
                    'That dice game you see people playing in back alleys.',
                    'No, not like Ceelo green.',
                    'Actually the name comes from the Chinese Sì-Wŭ-Liù (四五六), meaning "four-five-six."',
                    "A great excuse to take your friend's money!",
                    'Great, you forgot your dice again?',
                    "Honestly, shouldn't all bars have dice?"
                    ]
            }
        },
        components:{
            'app-input': Input
        }
    }
</script>

