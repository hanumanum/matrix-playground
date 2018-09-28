let matrixColors = [
     ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#ccc","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#150","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#fff","#adc","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#200","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#acb","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
     ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"]
]


let matrixBooleans = [
  [true, true, true,false,false,true,true,false,false,true],
  [false, false, true,false,false,false,true,false,true,true],
  [true, true, true,false,false,true,true,false,false,true],
  [true, true, true,false,false,true,true,false,false,true],
  [true, true, true,false,false,true,true,false,false,true],
  [true, false, true,false,false,true,true,false,false,true],
  [true, true, true,true,false,true,true,false,false,true],
  [true, false, true,true,false,true,true,false,false,true],
  [true, true, true,false,false,true,true,false,false,true],
  [true, false, true,false,false,true,true,false,false,true]
];


let matrixNumbers = [
  [5861,5867,5869,5879,5881,5897,5903,5923,5927,5939],
  [5953,5981,5987,6007,6011,6029,6037,6043,6047,6053],
  [7649,7669,7673,7681,7687,7691,7699,7703,7717,7723],
  [8039,8053,8059,8069,8081,8087,8089,8093,8101,8111],
  [8389,8419,8423,8429,8431,8443,8447,8461,8467,8501],
  [8599,8609,8623,8627,8629,8641,8647,8663,8669,8677],
  [3343,3347,3359,3361,3371,3373,3389,3391,3407,3413],
  [1229,1231,1237,1249,1259,1277,1279,1283,1289,1291],
  [31,37,41,43,47,53,59,61,67,71],
  [2,3,5,7,11,13,17,19,23,29]
];



let matrixStrings = [];
let wordlist = ["busy","call","calm","came","camp","card","care","case","cash","cast","cell","chat","chip","city","club","coal","coat","code","cold","come","cook","cool","cope","copy","CORE","cost","crew","crop","dark","data","date","dawn","days","dead","deal","dean","dear","debt","deep","deny","desk","dial","diet","disc","disk","does","done","door","dose","down","draw","drew","drop","drug","dual","duke","dust","duty","each","earn","ease","east","easy","edge","else","even","ever","evil","exit","face","fact","fail","fair","fall","farm","fast","fate","fear","feed","feel","feet","fell","felt","file","fill","film","find","fine","fire","firm","fish","five","flat","flow","food","foot","ford","form","fort","four","free","from","fuel","full","fund","gain","game","gate","gave","gear","gene","gift","girl","give","glad","goal","goes","gold","Golf","gone","good","gray","grew","grey","grow","gulf","hair","half","hall","hand","hang","hard","harm","hate","have","head","hear","heat","held","hell","help","here","hero","high","hill","hire","hold","hole","holy","home","hope","host","hour","huge","hung","hunt","hurt","idea","inch","into","iron","item","jack","jane","jean","john","join","jump","jury","just","keen","keep","kent","kept","kick","kill","kind","king","knee"];
var j = -1

for(let n = 0; n<100; n++){
  if(n%10==0){
    matrixStrings.push([])
    j++
    i=0
  }
  matrixStrings[j][i++] = wordlist[n]
    
}
console.log(matrixStrings.length)