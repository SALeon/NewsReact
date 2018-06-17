import {Map, OrderedMap} from 'immutable';

export function arrToMap(arr, Model = Map){
    return arr.reduce((acc, item) => acc.set(item.id, new Model(item)), new OrderedMap);
}

export function mapToArr(map) {
    return map.valueSeq().toArray();
}