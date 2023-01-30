const Mobile = {
    Brand: 'Apple',
    Model: '14 max pro',
    Ram: '256GB',
    Price: 1400000,
}

const Laptop ={
    Brand: 'HP',
    Processor: "i7",
    Model: "G3",
    Price: 40000,
}
// var llaptop= ( Laptop ['Price'] );
// var lxtop= Object.keys(Laptop);
// var lytop= Object.values(Laptop);
// console.log(lxtop);
// console.log(lytop);


var kiss=Object.keys(Mobile);

for ( var i=0; i < kiss.length; i++){
    console.log(kiss [i]);
}
