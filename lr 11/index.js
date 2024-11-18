function Worker( name, surname, rate, days) {

    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    this.getSalary = () => {
        return this.rate*this.days;
    }

    this.getName = () => {
        return this.name;
    }

    this.getSurname = () => {
        return this.surname;
    }
    
    this.getRate = () => {
        return this.rate;
    }
    
    this.getDays = () => {
        return this.days;
    }
    
    this.setRate = (rate) => {
        this.rate = rate;
    }
    
    this.setDays = (days) => {
        this.days = days;
    }
}


let MyString = {

    reverse(word) {
        return word.split('').reverse().join('');
    },

    ucFirst(word) {
        return word[0].toUpperCase() + word.slice(1);
    },

    ucWords(word) {
        return word.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}

let Validator = {

    isEmail(email) {
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailPattern.test(email) ? "Email корректный." : "Некорректный email.";
    },

    isDomain(domain) {
        const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        return domainPattern.test(domain) ? "Домен корректный." : "Некорректный домен.";
    },

    isDate(date) {
        return /^\d{2}\.\d{2}\.\d{4}$/.test(date) && !isNaN(new Date(date.split('.').reverse().join('-'))) ? "Дата корректная." : "Некорректная дата.";
    },

    isPhone(phone) {
        const phonePattern = /^\+?[1-9]\d{1,14}$/;
        return phonePattern.test(phone) ? "Телефон корректный." : "Некорректный телефон.";
    }
}


var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());
worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());

console.log(MyString.reverse('abcde'));
console.log(MyString.ucFirst('abcde'));
console.log(MyString.ucWords('abcde abcde abcde'));

console.log(Validator.isEmail('phphtml@mail.ru'));
console.log(Validator.isDomain('phphtml.net'));
console.log(Validator.isDate('15.05.2020'));
console.log(Validator.isPhone('+375298176892'));
