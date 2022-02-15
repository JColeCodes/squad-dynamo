const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// Create Engineer Object
test('Creates an Engineer object', () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(engineer.name).toBe('Nancy Drew');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('ndrew@mystery.com');
    expect(engineer.officeNumber).toBe(66293739);
});

// getName()
test("Gets engineer's name", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(engineer.getName()).toBe('Nancy Drew');
});

// getId()
test("Gets engineer's id", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(engineer.getId()).toBe(1);
});

// getEmail()
test("Gets engineer's email", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(engineer.getEmail()).toBe('ndrew@mystery.com');
});

// getRole()
test("Gets engineer's role - 'Engineer'", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 66293739);

    expect(engineer.getRole()).toBe('Engineer');
});