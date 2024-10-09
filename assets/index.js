//Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.

//Шаги выполнения:

//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const grades = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
document.querySelector('#allGrades').innerHTML = `Оценки студентов по предмету ${grades}`;

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
let gradeSum = grades.reduce((sum, current) => sum + current, 0);
const averageGrade = (gradeSum/grades.length).toFixed(2);
document.querySelector('#average_grade').innerHTML = averageGrade;


//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max.apply(null, grades);
document.querySelector('#maxGrade').innerHTML = maxGrade;

//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min.apply(null, grades);
document.querySelector('#minGrade').innerHTML = minGrade;

//Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). 
//Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. 
//Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrade = grades.filter(function(item){
    return  item >= 60; 
});
document.querySelector('#positiveGrade').innerHTML = positiveGrade.length;

//Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrade = grades.filter(function(item){
    return  item < 60; 
});
document.querySelector('#negativeGrade').innerHTML = negativeGrade.length;

//Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//Если оценка ниже 20, преобразуйте её в "E"
const ABCDE = grades.map(function(item){
    if (item >= 80 && item <=100){
        return item = 'A'
    }

    else if (item >= 60 && item <= 79){
        return item = 'B'
    }

    else if (item >= 40 && item <= 59){
        return item = 'C'
    }

    else if (item >= 20 && item <= 39){
        return item = 'D'
    }

    else {
        return item = 'E'
    }
})
document.querySelector('#ABCDE').innerHTML = ABCDE;

//Выведите все найденные значения на экран.









