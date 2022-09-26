let hash = "0-1-0-3-3-0-0";
const coinSymbolArr = ["BTC", "ETH", "USDT", "USDC", "BNB", "ADA", "XRP", "SOL", "DOT", "AVAX", "MATIC"];

function defineTraitMatch(hash){
    let symbolNumberArray = hash.split('-');
    let groupMap = {}
    let traitMatchArr = [];
    let race = "";


      symbolNumberArray.forEach(key => {
        const value = symbolNumberArray[key]
        if(key == 1){
        race = race + value;
        }else{
        traitMatchArr.push(coinSymbolArr[value]);
        }
      });
      
    

    console.log(traitMatchArr);
}

function defineTraitMatch1(hash){
    let symbolNumberArray = hash.split('-');
    let groupMap = {}
  
    for (let i = 0; i < symbolNumberArray.length; ++i){
  
      if (i == 1) {
        continue;
      }
  
  
      if (coinSymbolArr[symbolNumberArray[i]] in groupMap) {
        groupMap[coinSymbolArr[symbolNumberArray[i]]] += 1;
      } else {
        groupMap[coinSymbolArr[symbolNumberArray[i]]] = 1;
      }
  
    }  
   

    //let jsonString = JSON.stringify(groupMap);

    //console.log(jsonString);

    let finalString = "";

    //final string = "4 BTC 2 USDC"
    
    Object.keys(groupMap).forEach(key => {
        if (finalString == "") {
            finalString += groupMap[key] + " " + key;
        } else {
            finalString += " " + groupMap[key] + " " + key; 
        }       
      });   



  
  }

defineTraitMatch1(hash);
