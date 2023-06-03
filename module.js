import {logger2} from './logger/index.js';
import {TYPE_ERROR, TYPE_LOG,TYPE_WARN} from './constants.js';
import * as constains from './constants.js';


logger2("cach1", TYPE_WARN);
logger2("cach2", constains.TYPE_ERROR);

//option chaining
let obj = {
    age:10,
    name:'bao',
    cat:{
        cat1:{
            cat2:{
                name: "Cat cua bao"
            }
        }
    }
}
if (obj.cat.cat1.cat2.cat3?.name){
    console.log(obj.cat.cat1.cat2.cat3.name);
}

const obj1 = {
    // getName(val){
    //     console.log(val);
    // }
}

obj1.getName?.("a");

let array = [1,2];
if (array[3]?.[1]){console.log(array[2])}