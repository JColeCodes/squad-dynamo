const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// Create Intern Object
test('Creates an Intern object', () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.name).toBe('Nancy Drew');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('ndrew@mystery.com');
    expect(intern.school).toBe('River Heights Academy');
});

// getName()
test("Gets intern's name", () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.getName()).toBe('Nancy Drew');
});

// getId()
test("Gets intern's id", () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.getId()).toBe(1);
});

// getEmail()
test("Gets intern's email", () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.getEmail()).toBe('ndrew@mystery.com');
});

// getSchool()
test("Gets intern's school", () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.getSchool()).toBe('River Heights Academy');
});

// getRole()
test("Gets intern's role - 'Intern'", () => {
    const intern = new Intern('Nancy Drew', 1, 'ndrew@mystery.com', 'River Heights Academy');

    expect(intern.getRole()).toBe('Intern');
});