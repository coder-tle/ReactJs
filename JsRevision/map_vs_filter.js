var playersArr = [
    {name: 'Jason', footedness: 'left', position: 'forward'},
    {name: 'Blake', footedness: 'right', position: 'defense'},
    {name: 'Philip', footedness: 'right', position: 'goalie'},
    {name: 'Logan', footedness: 'left', position: 'defense'},
    {name: 'Will', footedness: 'right', position: 'forward'}
];

var leftFootArr = playersArr.filter((a)=>{
    return a.footedness ==='left';
});

console.log(leftFootArr);





var agesArr = [25, 36, 49, 64, 81];

var squareRootAgesArr = agesArr.map(Math.sqrt);

console.log(squareRootAgesArr);
