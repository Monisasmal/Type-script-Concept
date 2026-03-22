export default function ClassesInTypeScript() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Classes in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Class in TypeScript
        </h2>

        <p>
          A Class is a blueprint used to create objects with properties and methods.
        </p>

        <p className="mt-2">
          It helps in implementing Object-Oriented Programming (OOP) concepts like
          encapsulation, inheritance, and abstraction.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Class = Template to create objects</b>
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Classes
        </h2>

        <ul className="list-disc ml-6">
          <li>To organize code in a structured way.</li>
          <li>To reuse logic using objects.</li>
          <li>To implement OOP concepts.</li>
          <li>To build scalable applications.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Classes
        </h2>

        <ul className="list-disc ml-6">
          <li>When modeling real-world entities (User, Product).</li>
          <li>When using OOP concepts.</li>
          <li>When building large applications.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Example: User system in an application.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const user1 = new User("Rahul", 25);
console.log(user1.greet());`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Access Modifiers</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}`}
        </pre>

        <p className="mt-2">
          👉 private cannot be accessed outside the class.
        </p>

        <p className="mt-4"><b>Example 2: Readonly in Class</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Product {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 3: Inheritance</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const d = new Dog();
d.move();
d.bark();`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Code becomes unstructured.</li>
          <li>Hard to manage large applications.</li>
          <li>Code duplication increases.</li>
          <li>Difficult to implement OOP concepts.</li>
        </ul>

        <p className="mt-2">
          Classes help create structured, reusable, and scalable code.
        </p>

      </section>

    </div>
  );
}