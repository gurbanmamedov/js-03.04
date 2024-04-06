// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в процентах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов

// class Marker {
//   color;
//   inkLevel;
//   constructor(color, inkLevel) {
//     this.color = color;
//     this.inkLevel = inkLevel;
//   }

//   print(text) {
//     let printedText = "";
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] !== " ") {
//         if (this.inkLevel >= 0.5) {
//           printedText += text[i];
//           this.inkLevel -= 0.5;
//         } else {
//           console.log("Нет чернил в маркере!");
//           break;
//         }
//       } else {
//         printedText += " ";
//       }
//     }
//     console.log(`%c${printedText}`, `color: ${this.color}`);
//   }
// }

// class RefillableMarker extends Marker {
//   constructor(color, inkLevel, capacity) {
//     super(color, inkLevel);
//     this.capacity = capacity;
//   }

//   refill(amount) {
//     if (this.inkLevel === this.capacity) {
//       console.log("Marker already full ");
//     } else {
//       this.inkLevel = Math.min(this.inkLevel + amount, this.capacity);
//       console.log(`marker refilled ${this.inkLevel}%`);
//     }
//   }
// }

// const simpleMarker = new Marker("blue", 50);

// simpleMarker.print("Some Example text");

// const refillableMarker = new RefillableMarker("red", 20, 100);

// refillableMarker.print("Another text example");

// refillableMarker.refill(50);

// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов

// class ExtendedDate extends Date {
//   constructor(year, month, day) {
//     super(year, month, day);
//   }

//   formatDateText() {
//     const months = [
//       "января",
//       "февраля",
//       "марта",
//       "апреля",
//       "мая",
//       "июня",
//       "июля",
//       "августа",
//       "сентября",
//       "октября",
//       "ноября",
//       "декабря",
//     ];
//     return `${this.getDate()} ${
//       months[this.getMonth()]
//     } ${this.getFullYear()} года`;
//   }

//   isFuture() {
//     const now = new Date();
//     return this.getTime() >= now.getTime();
//   }

//   isLeapYear() {
//     const year = this.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }

//   getNextDate() {
//     const nextDate = new Date(this.getTime());
//     nextDate.setDate(this.getDate() + 1);
//     return nextDate;
//   }
// }

// const myDate = new ExtendedDate(2024, 3, 6);

// console.log("Дата текстом:", myDate.formatDateText());
// console.log("Это будущая дата:", myDate.isFuture());
// console.log("Это високосный год:", myDate.isLeapYear());
// console.log("Следующая дата:", myDate.getNextDate().formatDateText());

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml()

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
// }

// class EmployeesTable {
//   constructor(employees) {
//     this.employees = employees;
//   }

//   generateHeader() {
//     return "<tr><th>Имя</th><th>Должность</th><th>Зарплата</th></tr>";
//   }

//   generateRow(employee) {
//     return `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
//   }

//   generateTable() {
//     let tableHtml = "<table>";
//     tableHtml += this.generateHeader();
//     this.employees.forEach((employee) => {
//       tableHtml += this.generateRow(employee);
//     });
//     tableHtml += "</table>";
//     return tableHtml;
//   }

//   getHtml() {
//     return this.generateTable();
//   }
// }

// const bankEmployees = [
//   new Employee("Sam", "Manager", 50000),
//   new Employee("Herald", "CEO", 400000),
//   new Employee("Triss", "HR", 30000),
// ];

// const empTable = new EmployeesTable(bankEmployees);
// const htmlCode = empTable.getHtml();

