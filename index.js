// Code your solutions in this file
function writeCards(arr, birthday){
    let ar=[]

    for (let i=0;i<arr.length;i++){
        ar.push(`Thank you, ${arr[i]}, for the wonderful ${birthday} gift!`);
        console.log(ar)
    
    }
    
    return ar;

}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(z){
    while(z>=0){
        console.log(z)
        z--
    }
    return z
}

countDown(10)