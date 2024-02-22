<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="vars.css">
  <link rel="stylesheet" href="styles.css">
  <title>Calculadora de Média DOTA 2</title>
</head>

<body>
  <header>
    <h1>Calculadora de Média DOTA 2</h1>
  </header>
                                                          
  <main>

    <section id="rankingForm">
      <div id="player1div" class="player">
        <p id="player1MMR">MMR: ?</p>
        <img src="imgs/0.webp" alt="rank" id="imgp1">
        <label for="PLAYER1" id="player1mmr">
          <select id="PLAYER1" class="rankingSelect" onchange="medal1()">
            <option value="0" selected="selected">UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
            <option value="6500">IMMORTAL 6500 MMR</option>
            <option value="7000">IMMORTAL 7K MMR</option>
            <option value="7500">IMMORTAL 7.5K MMR</option>
            <option value="8000">IMMORTAL 8K MMR</option>
          </select>
        </label>
        
      </div>
      <div id="player2div" class="player">
        <p id="player2MMR">MMR: ?</p>
        <img src="imgs/0.webp" alt="rank" id="imgp2">
        <label for="PLAYER2" id="player2mmr">
          <select id="PLAYER2" class="rankingSelect" onchange="medal2()">
            <option value="0" selected="selected">UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
            <option value="6500">IMMORTAL 6500 MMR</option>
            <option value="7000">IMMORTAL 7K MMR</option>
            <option value="7500">IMMORTAL 7.5K MMR</option>
            <option value="8000">IMMORTAL 8K MMR</option>
          </select>
        </label>
      </div>
      <div id="player3div" class="player">
        <p id="player3MMR">MMR: ?</p>
        <img src="imgs/0.webp" alt="rank"  id="imgp3">
        <label for="PLAYER3" id="player3mmr">
          <select id="PLAYER3" class="rankingSelect" onchange="medal3()">
            <option value="0" selected="selected">UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
            <option value="6500">IMMORTAL 6500 MMR</option>
            <option value="7000">IMMORTAL 7K MMR</option>
            <option value="7500">IMMORTAL 7.5K MMR</option>
            <option value="8000">IMMORTAL 8K MMR</option>
          </select>
        </label>
      </div>
      <div id="player4div" class="player">
        <p id="player4MMR">MMR: ?</p>
        <img src="imgs/0.webp" alt="rank" id="imgp4">
        <label for="PLAYER4" id="player4mmr">
          <select id="PLAYER4" class="rankingSelect" onchange="medal4()">
            <option value="0" selected="selected">UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
            <option value="6500">IMMORTAL 6500 MMR</option>
            <option value="7000">IMMORTAL 7K MMR</option>
            <option value="7500">IMMORTAL 7.5K MMR</option>
            <option value="8000">IMMORTAL 8K MMR</option>
          </select>
        </label>
      </div>
      <div id="player5div" class="player">
        <p id="player5MMR">MMR: ?</p>
        <img src="imgs/0.webp" alt="rank" id="imgp5">
        <label for="PLAYER5" id="player5mmr">
          <select id="PLAYER5" class="rankingSelect" onchange="medal5()">
            <option value="0" selected="selected">UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
            <option value="6500">IMMORTAL 6500 MMR</option>
            <option value="7000">IMMORTAL 7K MMR</option>
            <option value="7500">IMMORTAL 7.5K MMR</option>
            <option value="8000">IMMORTAL 8K MMR</option>
          </select>
        </label>
      </div>
    </section>

    <section id="avgConfirm">

      <div id="avg">
        <p id="avgmmr">Média: 0000 MMR</p>
      </div>

      <div id="divContent">
        <div id="imgavg">
        <img src="imgs/0.webp" alt="avgrank" id="imgavg">
        </div>

        <div id="divisions">
          <div id="div1">
            <p id="div1text">DIVISÃO 1</p>
          </div>
          <div id="div2">
            <p id="div2text">DIVISÃO 2</p>
          </div>
        </div>
      </div>

    </section>
  </main> 
                  
  <footer>
    <p>Feito por <a href="https://github.com/arthurmenos" target="_blank" rel="external">@Arthurmenos</a></p>
  </footer>

</body>
  <script src="script.js"></script>
</html>
