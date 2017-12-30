<template>
  <div>
      <div>
        <!-- <a @click="show"><h4>Rules</h4></a> -->
            <div class="rules" v-bind:style="display">
                1. Keep Rolling until you have a score, then pass to the next player
                    <br>
                2. Once everyone has their score, the player with the highest score wins
                    <br>
                3. ✨ Money Get ✨
                    <br>
                <h4> How to Score </h4>
                <b>4-5-6</b> Highest possible roll Automatic Win
                <br>
                <b>Trips</b> Rolling three of the same number is known as rolling "trips". Higher trips beat lower trips, so 4-4-4 is better than 3-3-3. Any trips beats any established point.
                <br>
                <b> Point </b>Rolling a pair, and another number, establishes the singleton as a "point". A higher point beats a lower point, so 2-2-6 is better than 5-5-2.
                <br>
                <b>1-2-3</b>The lowest possible roll. If you roll 1-2-3, you automatically lose. 
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
