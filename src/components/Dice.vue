<template>
    <div id='dice'>
        <a @click="roll" v-bind:style="rolling[1]" class="die">
            <img v-bind:class="dice1.glow" v-bind:src="'/dice/' + dice1.num + '.svg'">
            <img v-bind:class="dice2.glow" v-bind:src="'/dice/' + dice2.num + '.svg'">
            <img v-bind:class="dice3.glow" v-bind:src="'/dice/' + dice3.num + '.svg'">
        </a>
        <a v-bind:style="rolling[0]" class="die">
            <img class="spun" v-bind:src="'/dice/' + dice1.num + '.svg'">
            <img class="spun" v-bind:src="'/dice/' + dice2.num + '.svg'">
            <img class="spun" v-bind:src="'/dice/' + dice3.num + '.svg'">
        </a>
        <br>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:'touch a Die to Roll',
                messages: {
                    1:'Hot Dice!',
                    2:"Rollin' Rollin' Rollin'",
                    3:'Roll it up, Light it up',
                    4:'A Pun About Rolling',
                    5:'Dice is fun!',
                    6:'Imagine playing this with 20 sided die',
                    7:'Yahtzee!',
                    8:'Skip Bo! What even is skip bo?',
                    9:'Hawaiian sweet Rolls!',
                    10:'Hawaiian sweet Rolls!',
                    11:'Fruit roll ups < fruit by the foot ',
                    12:'Trump cant javascript.',
                    },
                rolling: {
                    0:'display:none;',
                    1:''
                    },
                dice1: {
                    num:'4',
                    glow:''
                    },
                dice2: {
                    num:'5',
                    glow:''
                    },
                dice3: {
                    num:'6',
                    glow:''
                    }
            }
        },
        methods:{
            roll(){
                var self = this;
                self.rolling[1] = self.rolling[0];
                self.rolling[0] = '';
                this.message = this.messages[Math.floor(Math.random()*12)+1];
                setTimeout(function(){
                self.dice1.num = Math.floor(Math.random()*6)+1;
                self.dice2.num = Math.floor(Math.random()*6)+1;
                self.dice3.num = Math.floor(Math.random()*6)+1;

                let allDice = JSON.stringify([self.dice1.num, self.dice2.num, self.dice3.num].sort())
                
                if(allDice == "[1,2,3]"){
                    self.dice1.glow = 'fade';
                    self.dice2.glow = 'fade';
                    self.dice3.glow = 'fade';
                    self.message = "1-2-3 Ouch, auto lose. Next player rolls."
                }else if(allDice == "[4,5,6]"){
                    self.dice1.glow = 'glow';
                    self.dice2.glow = 'glow';
                    self.dice3.glow = 'glow';
                    self.message = "Cee-Lo! Automatic win! Take the pot!"
                }else if(self.dice1.num == self.dice2.num){
                    if(self.dice2.num == self.dice3.num){
                        self.dice1.glow = 'glow';
                        self.dice2.glow = 'glow';
                        self.dice3.glow = 'glow';
                        self.message = `Triple ${self.dice1.num}'s! Next player rolls.`
                    }else{
                        self.dice1.glow = 'fade';
                        self.dice2.glow = 'fade';
                        self.dice3.glow = 'glow';
                        self.message = `Your Score is a ${self.dice3.num}, Next player rolls.`
                    }
                }else if(self.dice2.num == self.dice3.num){
                    self.dice1.glow = 'glow';
                    self.dice2.glow = 'fade';
                    self.dice3.glow = 'fade';
                    self.message = `Your Score is a ${self.dice1.num}, Next player rolls.`
                }else if(self.dice1.num == self.dice3.num){
                    self.dice1.glow = 'fade';
                    self.dice2.glow = 'glow';
                    self.dice3.glow = 'fade';
                    self.message = `Your Score is a ${self.dice2.num}, Next player rolls.`
                }else{
                    self.message = "Nothin, roll again"
                    self.dice1.glow = '';
                    self.dice2.glow = '';
                    self.dice3.glow = '';
                }
                self.rolling[1] = '';
                self.rolling[0] = 'display:none;';
                }, 3000);
            }
        }
    }
</script>