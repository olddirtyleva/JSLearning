alert('Ваша задача потопить трехпалубный корабль противника на поле из семи клеток ') ;
var kolvopalub = 0;
var inputcounter = 0;
while (kolvopalub<3)
{
    var pole = prompt('введите номер поля от 1 до 7');
    if ((pole==3)|| (pole==4)||(pole==5))
    {kolvopalub++;
     alert ('УРА! Вы попали.\nОсталось потопить '+(3-kolvopalub)+' палубы корабля');
     inputcounter++;
    }
    else 
    {alert('Вы не попали, введите номер другого поля');    
    inputcounter++;
    }
}
alert ('Поздравляю!!!\nВы потопили корабль противника за '+inputcounter+' удара');



