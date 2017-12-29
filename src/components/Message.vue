<template>
  <div>
      <div class="title">
        <h1>{{message}}</h1>
        <h2>{{tagLine}}</h2>
      </div>
      <!-- <app-input :msg="message" @messageChanged="message = $event"></app-input> -->
  </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        data(){
            return {
                message: 'CeeLo',
                tagLine: 'That game you see people playing in the back alley'
            }
        },
        components:{
            'app-input': Input
        }
    }
</script>

