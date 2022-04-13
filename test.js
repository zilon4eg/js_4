let answer = 'y';
let yes = ['yes', 'y', 'да', 'д'];
let no = ['no', 'n', 'нет', 'н'];

if (yes.includes(answer.toLowerCase())) {
    console.log('Y')
}
else if (no.includes(answer.toLowerCase())) {
    console.log('N')
}