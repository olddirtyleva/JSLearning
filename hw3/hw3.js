
alert('Ваша задача потопить трехпалубный корабль противника на поле из семи клеток ') ;

var kolvopalub = 0;
var inputcounter = 0;

function paluba() {
paluba.hitting;
paluba.location;
}

function randomInteger(min, max) {
     var rand = min + Math.random() * (max + 1 - min);
     rand = Math.floor(rand);
     return rand;
}

var paluba0 = new paluba();
var paluba1 = new paluba();
var paluba2 = new paluba();
paluba0.location = randomInteger(1,7);
paluba0.hitting=false;
paluba1.hitting=false;
paluba2.hitting=false;

switch(paluba0.location)
{case 1:
    paluba1.location=2;
    paluba2.location=3;
    break;
case 7:
    paluba1.location=6;
    paluba2.location=5;
    break;
default:
    paluba1.location=paluba0.location-1;
    paluba2.location=paluba0.location+1;
}

// while ((paluba0.hitting==false) || (paluba1.hitting==false) || (paluba2.hitting==false))
// { 
//     var pole = prompt('введите номер поля от 1 до 7');
//     switch(pole)
//     {case  'paluba0.location':
//         if(paluba0.hitting==false)
//         {
//             kolvopalub++;
//             alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
//             inputcounter++;
//             paluba0.hitting=true;
//             break;
//         }
//         else 
//         {
//             inputcounter++;
//             break;
//         }
//     case 'paluba1.location':
//         if(paluba1.hitting==false)
//         {
//             kolvopalub++;
//             alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
//             inputcounter++;
//             paluba1.hitting=true;
//             break;
//         }    
//         else 
//         {
//             inputcounter++;
//             break;
//         }
//     case 'paluba2.location':
//         if(paluba2.hitting==false)
//         {
//             kolvopalub++;
//             alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
//             inputcounter++;
//             paluba2.hitting=true;
//             break;
//         }
//         else 
//         {
//             inputcounter++;
//             break;
//         }
//     default: 
//     alert('Вы не попали, введите номер другого поля');    
//     inputcounter++;   
//     }
// }
while ((paluba0.hitting==false) || (paluba1.hitting==false) || (paluba2.hitting==false))
{ 
    var pole = prompt('введите номер поля от 1 до 7');
    if (pole==paluba0.location)
    {
        if(paluba0.hitting==false)
        {
            kolvopalub++;
            alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
            inputcounter++;
            paluba0.hitting=true;            
        }
        else 
        {
            inputcounter++;            
        }
    }
    else if (pole==paluba1.location)
    {
        if(paluba1.hitting==false)
        {
            kolvopalub++;
            alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
            inputcounter++;
            paluba1.hitting=true;
        }    
        else 
        {
            inputcounter++;            
        }
    }
    else if (pole==paluba2.location)
    {
        if(paluba2.hitting==false)
        {
            kolvopalub++;
            alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
            inputcounter++;
            paluba2.hitting=true;
        }
        else 
        {
            inputcounter++;
        }
    }
    else 
    {
    alert('Вы не попали, введите номер другого поля');    
    inputcounter++;   
    }
}

alert ('Поздравляю!!!\nВы потопили корабль противника за '+inputcounter+' выстрелов');