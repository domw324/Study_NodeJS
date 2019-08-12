var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);
var i = 0;
while(i<members.length){
    console.log(members[i]);
    i += 1;
}

var roles = {
    'programmer':'egoging',
    'designer':'k8805',
    'manager':'hoya'
};
console.log(roles.designer); // k8805

for(var key in roles){
    console.log('object => ', key, '/ value => ', roles[key]);
} // key 값을 배열의 index처럼 사용할 수 있다.