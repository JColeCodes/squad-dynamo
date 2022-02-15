const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// Create Engineer Object
test('Creates an Engineer object', () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.name).toBe('Nancy Drew');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('ndrew@mystery.com');
    expect(engineer.github).toBe('drewdossier');
});

// getName()
test("Gets engineer's name", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.getName()).toBe('Nancy Drew');
});

// getId()
test("Gets engineer's id", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.getId()).toBe(1);
});

// getEmail()
test("Gets engineer's email", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.getEmail()).toBe('ndrew@mystery.com');
});

// getGithub()
test("Gets engineer's github", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.getGithub()).toBe('drewdossier');
});

// getRole()
test("Gets engineer's role - 'Engineer'", () => {
    const engineer = new Engineer('Nancy Drew', 1, 'ndrew@mystery.com', 'drewdossier');

    expect(engineer.getRole()).toBe('Engineer');
});