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
        <div v-bind:style="beta ? 'display:none;' : ''">
            {{announce}}
            <div class="players">
                <span v-bind:style="this.turn == 1 ? '' : 'filter:opacity(50%)'" class="player">
                    <span>${{players[1].winnings}}</span>
                    <input v-model="players[1].name" placeholder="player1">
                    <img class="score-die" v-bind:src="'/dice/' + players[1].score + '.svg'">
                </span>
                <br>
                <span v-bind:style="this.turn == 2 ? '' : 'filter:opacity(50%)'" class="player">
                    <span>${{players[2].winnings}}</span>
                    <input v-model="players[2].name" placeholder="player2">
                    <img class="score-die" v-bind:src="'/dice/' + players[2].score + '.svg'">
                </span>
            </div>
            <h3>💰 ${{pot}} 💰</h3>
        </div>
        <!-- <button class="rules-button" @click="toggle">{{close}} Player Beta</button> -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pot:0,
                resetScore:0,
                announce:"",
                beta:0,
                close:'',
                turn:1,
                players:{
                    count:2,
                    1:{
                        name:"🤖",
                        score:0,
                        winnings:5
                    },
                    2:{
                        name:"👾",
                        score:0,
                        winnings:5
                    },
                },
                message:'Touch a Die to Roll',
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
        mounted: function() {
            console.log("mounted")
        },
        updated: function () {
            this.$nextTick(function () {
                if(this.turn == 3){
                    this.reset()
                }
            })
        },
        methods:{
            blur(){
                if(this.turn == 1){

                }
            },
            toggle(){
                if(this.beta){ 
                    this.beta = 0;
                    this.close = 'Close'
                }else{
                    this.beta = 1;
                    this.close = '';
                }
                
            },
            reset(){
                this.resetScore = 0;
                this.turn = 1;
                this.announce = '';
            },
            winner(){
                this.resetScore = 1;
                for(var i=1;i<this.players.count+1;i++){
                    if(this.players[i].score == 456){
                        this.message = (this.players[i].name + " Got CeeLo!")
                        this.moneyDist(i)
                    }
                }
                if(this.players[1].score == this.players[2].score){
                    this.message = ( this.players[1].name + " Tied! " + this.players[2].name)
                    this.moneyDist(55)
                }else if(this.players[1].score > this.players[2].score){
                    console.log(this.pot)
                    this.message = ( this.players[1].name + " wins $" +this.pot + "!")
                    this.moneyDist(1)
                }else if(this.players[2].score > this.players[1].score){
                    console.log(this.pot)
                    this.message = ( this.players[2].name + " wins $" +this.pot + "!")
                    this.moneyDist(2)
                }
            },
            moneyDist(x){
                if(x == 55){
                    this.players[1].score = 0;
                    this.players[2].score = 0;
                }else{
                    this.players[x].winnings = this.players[x].winnings + this.pot
                    this.pot = 0;
                }
            },whosTurn(){
                this.turn++
                if(this.turn > this.players.count){
                    return this.winner()
                }
            },
            ante(){
                if(this.pot == 0){
                    for(var i=1;i<this.players.count+1;i++){
                        this.players[i].winnings--
                        this.players[i].score = 0;
                        this.pot++
                    }
                }else if(this.players[1].winnings == 0){
                    this.message = (this.players[1].name +", you lose")
                }else if(this.players[2].winnings == 0){
                    this.message = (this.players[2].name +", you lose")
                }
            },
            roll(){
                console.log(this.turn)
                this.ante()
                var self = this; // Assign this to self to use in scoped function
                var turn = self.turn

                self.rolling[1] = self.rolling[0]; // Hide first dice
                self.rolling[0] = ''; // Show second rolling dice
                // this.message = this.messages[Math.floor(Math.random()*12)+1]; //display a message while rolling

                setTimeout(function(){ // set timeout for 3 second roll
                    // Random dice 
                    
                    self.dice1.num = Math.floor(Math.random()*6)+1;
                    self.dice2.num = Math.floor(Math.random()*6)+1;
                    self.dice3.num = Math.floor(Math.random()*6)+1;

                    let allDice = JSON.stringify([self.dice1.num, self.dice2.num, self.dice3.num].sort())
                    
                    if(allDice == "[1,2,3]"){
                        self.dice1.glow = 'fade';
                        self.dice2.glow = 'fade';
                        self.dice3.glow = 'fade';
                        self.message = `1-2-3 Ouch, ${self.players[turn].name} scored 0`
                        self.players[turn].score = 123;
                        self.whosTurn()
                    }else if(allDice == "[4,5,6]"){
                        self.dice1.glow = 'glow';
                        self.dice2.glow = 'glow';
                        self.dice3.glow = 'glow';
                        self.message = `${self.players[turn].name} Cee-Lo'd! Automatic win!`
                        self.players[turn].score = 666
                        self.winner()
                    }else if(self.dice1.num == self.dice2.num){
                        if(self.dice2.num == self.dice3.num){
                            self.dice1.glow = 'glow';
                            self.dice2.glow = 'glow';
                            self.dice3.glow = 'glow';
                            self.message = `${self.players[turn].name} Got a triple ${self.dice1.num}'s!`
                            if(self.players[turn].score = 1){
                                self.players[turn].score = (self.players[turn].score + 110)
                            }else if(self.players[turn].score = 2){
                                self.players[turn].score = (self.players[turn].score + 220)
                            }
                            self.players[turn].score = self.dice1.num*3;
                            self.whosTurn()
                        }else{
                            self.dice1.glow = 'fade';
                            self.dice2.glow = 'fade';
                            self.dice3.glow = 'glow';
                            self.message = `${self.players[turn].name} scored a ${self.dice3.num}`
                            self.players[turn].score = self.dice3.num
                            self.whosTurn()
                        }
                    }else if(self.dice2.num == self.dice3.num){
                        self.dice1.glow = 'glow';
                        self.dice2.glow = 'fade';
                        self.dice3.glow = 'fade';
                        self.message = `${self.players[turn].name} scored a ${self.dice1.num}`
                        self.players[turn].score = self.dice1.num
                        self.whosTurn()
                    }else if(self.dice1.num == self.dice3.num){
                        self.dice1.glow = 'fade';
                        self.dice2.glow = 'glow';
                        self.dice3.glow = 'fade';
                        self.message = `${self.players[turn].name} scored a ${self.dice2.num}`
                        self.players[turn].score = self.dice2.num
                        self.whosTurn()
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