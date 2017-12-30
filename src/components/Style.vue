<style src="normalize.css/normalize.css"></style>
<style>
  h1{
    font-weight: bold;
    color: white;
    font-size:3rem;
    margin:0;
    text-shadow: -4px 4px 0 #0000001a;
  }
  h2{
    color: #ffffff80;
    font-style: italic;
    font-weight: 100;
    font-size: 1rem;
  }
  h3{
    color: #fff;
    text-shadow: -2px 2px 0 #ffffff4d;

  }
  a{
    cursor: pointer;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 1rem;
    background: linear-gradient(50deg,purple,salmon);
    height: 100vh;
  }
  #app {
    text-align: center;
    display:grid;
    grid-template-columns: auto 280px auto;
  }
  .rules{
    text-align: left;
    padding:1rem;
  }
  #dice{
    text-align: center;
  }
  .die *{
    width: 25%;
    margin: 1%;
    box-shadow: 0px 5px 5px #0003;
    border-radius: 10px;
  }
  .title{
    padding-bottom:2rem;
  }
  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }


  .spin {
    animation: spin 0.5s linear;
  }

  .spun {
    filter:blur(2px);
    animation: spin 0.5s linear;
    animation-iteration-count: 6;
  }

  .fade {
    filter:opacity(0.5);
  }

  .glow{
    box-shadow: 0px 0px 20px #fff300;
    border-radius: 10px;
  }

  @keyframes spin {
    0% {transform:rotate(0deg);}
    33% {transform:rotate(360deg);}
    66% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
</style>