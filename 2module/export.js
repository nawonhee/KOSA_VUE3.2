let base = 100
const add = (x) => base+x
const test = () => {    
    console.log('module내부에서 this는 undefined입니다', this)
}

export {add, test } //없으면 외부에 노출되지 않음
