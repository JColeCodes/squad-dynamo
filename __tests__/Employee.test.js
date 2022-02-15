const Employee = require('../lib/Employee');

// Create Employee Object
test('Creates an Employee object', () => {
    const employee = new Employee('Nancy Drew', 1, 'ndrew@mystery.com');

    expect(employee.name).toBe('Nancy Drew');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('ndrew@mystery.com');
});

// getName()
test("Gets employee's name", () => {
    const employee = new Employee('Nancy Drew', 1, 'ndrew@mystery.com');

    expect(employee.getName()).toBe('Nancy Drew');
});

// getId()
test("Gets employee's id", () => {
    const employee = new Employee('Nancy Drew', 1, 'ndrew@mystery.com');

    expect(employee.getId()).toBe(1);
});

// getEmail()
test("Gets employee's email", () => {
    const employee = new Employee('Nancy Drew', 1, 'ndrew@mystery.com');

    expect(employee.getEmail()).toBe('ndrew@mystery.com');
});

// getRole()
test("Gets employee's role - 'Employee'", () => {
    const employee = new Employee('Nancy Drew', 1, 'ndrew@mystery.com');

    expect(employee.getRole()).toBe('Employee');
});