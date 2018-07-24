let input ='';

let lang = ['ru','uk'];
let langjoin =  lang.join('|');
let klass = ['ekonom-klassa','standart','biznes-klassa','elit-klassa','dachnyy','komfort-klassa','premium'];
let klassjoin = klass.join('|');
let ras = 'rassrochka';
let remont = 's-remontom';
let type = ['kvartiry','kottedzhi','taunkhausy','pomeshcheniya'];
let typejoin = type.join('|');
let clasS = ['ekonom-klassa','standart','biznes-klassa','elit-klassa','dachnyy','komfort-klassa','premium'];
let clasSjoin = clasS.join('|');
let rooms = ['odnokomnatnyye','dvukhkomnatnyye','trekhkomnatnyye','chetyrekhkomnatnyye'];
let roomsjoin = rooms.join('|');
let obl = ['volynskaya','nikolayevskaya','poltavskaya','zakarpatskaya','khersonskaya','cherkasskaya',
'chernovitskaya','donetskaya','luganskaya','vinnitskaya','zhitomirskaya','ternopolskaya','khmelnitskaya'
,'lvovskaya','chernigovskaya','kharkovskaya','sumskaya','rovenskaya','kiyevskaya','dnepropetrovskaya',
'odesskaya','zaporozhskaya','ivano-frankovskaya','kirovogradskaya'];
let obljoin =  obl.join('|');
let paramCity = ['rayon','metro','bereg','vozle-metro','ulitsa'];
let paramCityjoin = paramCity.join('|');
let ready = 'sdannyye';
let notReady = 'stroyashchiyesya';
let keys = paramCityjoin+'|'+ready+'|'+notReady+'|'+typejoin+'|'+clasSjoin+'|'+roomsjoin+'|'+ras+'|'+remont;  
let regular = new RegExp('^/('+langjoin+')/novostroyki(?:-('+obljoin+')-(?:oblast))?(?:(?:-(?!'+keys+')([a-z]*-?(?:(?!'+keys+')[a-z]*)))?(?:(?:(?:-rayon)-([a-z]*-?(?:(?!'+keys+')[a-z]*)))|(?:(?:-metro)-([a-z]*-?(?:(?!'+keys+')[a-z]*)))|(?:-([a-z]*)-(?:bereg))|(?:-(vozle-metro))|(?:(?:-ulitsa)-([a-z]*-?(?:(?!'+keys+')[a-z]*-?(?:(?!'+keys+')[a-z]*)))))?)?(?:(?:-(sdannyye))?(?:-(stroyashchiyesya))?(?:-('+typejoin+'))?(?:-('+clasSjoin+'))?(?:-('+roomsjoin+'))?(?:-(rassrochka))?(?:-(s-remontom))?)?$');

let out = new RegExp(regular,"g").exec(input);
for(let i of out){
    if(i != undefined){
console.log(i);
}
};