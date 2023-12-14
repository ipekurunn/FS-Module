const fs = require('fs');

// CREATE
const newEmployee = {
    name: "Employee 1 Name",
    salary: 2000
  };

fs.writeFileSync('employees.json', JSON.stringify(newEmployee));
console.log('Veri başarıyla oluşturuldu.');

// READ 
const data = fs.readFileSync('employees.json', 'utf8');
const employee = JSON.parse(data);
console.log('Okunan Veri:', employee);

// UPDATE 
const updatedEmployee = {
  ...employee, 
  salary: 2500 
};

fs.writeFileSync('employees.json', JSON.stringify(updatedEmployee));
console.log('Veri başarıyla güncellendi.');

// DELETE 
fs.unlinkSync('employees.json');
console.log('Dosya başarıyla silindi.');
