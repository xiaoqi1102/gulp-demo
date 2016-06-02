/**
 * Created by yzsoft on 16/6/2.
 */
function hello(){
    console.log('hello this is index.js');
    setTimeout(function(){
        console.log('continue run');
        return false;
    },1000);
}