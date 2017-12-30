<template>
  <div>
      <div>
        <!-- <a @click="show"><h4>Rules</h4></a> -->
            <div class="rules">
                <a href="https://en.wikipedia.org/wiki/Cee-lo" target="_blank"><button class="rules-button">Cee-lo Wiki</button></a>
            </div>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                display: 'display:none;',
            }
        },methods:{
            show(){
                this.display = 'display:none;' ? this.display = '': this.display = 'display:none;';
                console.log(this.display)
            }
        }
    }
</script>
