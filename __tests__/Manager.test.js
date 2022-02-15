const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

// Create Manager Object
test('Creates an Manager object', () => {
    const manager = new Manager('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(manager.name).toBe('Nancy Drew');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('ndrew@mystery.com');
    expect(manager.officeNumber).toBe(66293739);
});

// getName()
test("Gets manager's name", () => {
    const manager = new Manager('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(manager.getName()).toBe('Nancy Drew');
});

// getId()
test("Gets manager's id", () => {
    const manager = new Manager('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(manager.getId()).toBe(1);
});

// getEmail()
test("Gets manager's email", () => {
    const manager = new Manager('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(manager.getEmail()).toBe('ndrew@mystery.com');
});

// getRole()
test("Gets manager's role - 'Manager'", () => {
    const manager = new Manager('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(manager.getRole()).toBe('Manager');
});