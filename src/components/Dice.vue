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
            <h3>The Pot is ${{pot}}</h3>
            {{announce}}
            <div class="players">
                <span><span>${{players[1].winnings}}</span><input v-model="players[1].name" placeholder="player1"><span>{{players[1].score}}</span></span>
                <br>
                <span><span>${{players[2].winnings}}</span><input v-model="players[2].name" placeholder="player2"><span>{{players[2].score}}</span></span>
                <!-- <span><input v-model="players[3].name" placeholder="player3"><span>{{players[3].score}}</span></span>
                <span><input v-model="players[4].name" placeholder="player4"><span>{{players[4].score}}</span></span>
                <span><input v-model="players[5].name" placeholder="player5"><span>{{players[5].score}}</span></span> -->
            </div>
        </div>
        <button class="rules-button" @click="toggle">Player Beta</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pot:'',
                resetScore:0,
                announce:"",
                beta:1,
                turn:1,
                players:{
                    count:2,
                    1:{
                        name:"Andrew 🍹",
                        score:'',
                        winnings:5
                    },
                    2:{
                        name:"Alex 💇‍♀️",
                        score:'',
                        winnings:5
                    },
                },
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
            toggle(){
                this.beta ? this.beta = 0 : this.beta = 1;
            },
            reset(){
                this.resetScore = 0;
                this.players[1].score = '';
                this.players[2].score = '';
                this.turn = 1;
                this.announce = '';
            },
            winner(){
                this.resetScore = 1;
                console.log(this.resetScore)
                for(var i=1;i<this.players.count+1;i++){
                    if(this.players[i].score == 456){
                        this.message = (this.players[i].name + " Got CeeLo!")
                    }
                }
                if(this.players[1].score == this.players[2].score){
                    this.message = ( this.players[1].name + " Tied! " + this.players[2].name)
                }else if(this.players[1].score > this.players[2].score){
                    this.message = ( this.players[1].name + " wins!")
                }else if(this.players[2].score > this.players[1].score){
                    this.message = ( this.players[2].name + " wins!")
                }
            },
            whosTurn(){
                this.turn++
                if(this.turn > this.players.count){
                    return this.winner()
                }
            },
            ante(){
                if(this.players[1].winnings = 0){
                    this.message = (this.players[1].name +", you lose")
                }else if(this.players[2].winnings = 0){
                    this.message = (this.players[2].name +", you lose")
                }
                this.players[1].winnings = this.players[1].winnings - 1
                this.pot++
                this.players[2].winnings = this.players[2].winnings - 1
                this.pot++
            },
            roll(){
                console.log(" ")
                console.log(this.resetScore)
                console.log("initialize roll() turn:" + this.turn)
                var self = this; // Assign this to self to use in scoped function
                var turn = self.turn

                // this.ante()

                self.rolling[1] = self.rolling[0]; // Hide first dice
                self.rolling[0] = ''; // Show second rolling dice
                this.message = this.messages[Math.floor(Math.random()*12)+1]; //display a message while rolling

                setTimeout(function(){ // set timeout for 3 second roll
                    if(self.resetScore){
                        console.log("reset")
                        self.reset()
                    }
                    // Random dice 
                    console.log("rolling " + "turn:" + turn + " player-count:" + self.players.count)
                    self.dice1.num = Math.floor(Math.random()*6)+1;
                    self.dice2.num = Math.floor(Math.random()*6)+1;
                    self.dice3.num = Math.floor(Math.random()*6)+1;

                    let allDice = JSON.stringify([self.dice1.num, self.dice2.num, self.dice3.num].sort())
                    
                    if(allDice == "[1,2,3]"){
                        self.dice1.glow = 'fade';
                        self.dice2.glow = 'fade';
                        self.dice3.glow = 'fade';
                        self.message = "1-2-3 Ouch, auto lose. Next player rolls."
                        self.players[turn].score = 0;
                        self.whosTurn()
                    }else if(allDice == "[4,5,6]"){
                        self.dice1.glow = 'glow';
                        self.dice2.glow = 'glow';
                        self.dice3.glow = 'glow';
                        self.message = "Cee-Lo! Automatic win! Take the pot!"
                        self.players[turn].score = 666
                        self.winner()
                    }else if(self.dice1.num == self.dice2.num){
                        if(self.dice2.num == self.dice3.num){
                            self.dice1.glow = 'glow';
                            self.dice2.glow = 'glow';
                            self.dice3.glow = 'glow';
                            self.message = `Triple ${self.dice1.num}'s! Next player rolls.`
                            self.players[turn].score = self.dice1.num*3;
                            self.whosTurn()
                        }else{
                            self.dice1.glow = 'fade';
                            self.dice2.glow = 'fade';
                            self.dice3.glow = 'glow';
                            self.message = `Your Score is a ${self.dice3.num}, Next player rolls.`
                            self.players[turn].score = self.dice3.num
                            self.whosTurn()
                        }
                    }else if(self.dice2.num == self.dice3.num){
                        self.dice1.glow = 'glow';
                        self.dice2.glow = 'fade';
                        self.dice3.glow = 'fade';
                        self.message = `Your Score is a ${self.dice1.num}, Next player rolls.`
                        self.players[turn].score = self.dice1.num
                        self.whosTurn()
                    }else if(self.dice1.num == self.dice3.num){
                        self.dice1.glow = 'fade';
                        self.dice2.glow = 'glow';
                        self.dice3.glow = 'fade';
                        self.message = `Your Score is a ${self.dice2.num}, Next player rolls.`
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

                    if(self.turn > self.players.count){ 
                        self.winner()
                    }   
                }, 1000);
            }
        }
    }
</script>