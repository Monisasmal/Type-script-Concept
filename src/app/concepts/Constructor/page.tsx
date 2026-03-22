export default function ConstructorInTypeScript() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Constructor in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Constructor
        </h2>

        <p>
          A Constructor is a special method inside a class that is automatically
          called when an object is created.
        </p>

        <p className="mt-2">
          It is mainly used to initialize properties of the class.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Constructor = Setup function that runs when object is created</b>
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Constructor
        </h2>

        <ul className="list-disc ml-6">
          <li>To initialize object properties.</li>
          <li>To pass values while creating objects.</li>
          <li>To reduce repetitive code.</li>
          <li>To ensure object is created with proper data.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Constructor
        </h2>

        <ul className="list-disc ml-6">
          <li>When objects need initial values.</li>
          <li>When working with classes.</li>
          <li>When building real-world models (User, Product).</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Example: Creating a User with name and age.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Rahul", 25);
console.log(user1.name);`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Constructor Shortcut (Parameter Properties)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  constructor(public name: string, public age: number) {}
}

const u = new User("Amit", 30);`}
        </pre>

        <p className="mt-2">
          👉 No need to write <b>this.name</b> manually.
        </p>

        <p className="mt-4"><b>Example 2: Default Values</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Product {
  name: string;
  price: number;

  constructor(name: string, price: number = 100) {
    this.name = name;
    this.price = price;
  }
}

const p1 = new Product("Laptop");
console.log(p1.price); // 100`}
        </pre>

        <p className="mt-4"><b>Example 3: Optional Parameters</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 4: Access Modifiers in Constructor</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge() {
    return this.age;
  }
}`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Objects may not have proper initial values.</li>
          <li>More repetitive code.</li>
          <li>Hard to maintain large applications.</li>
          <li>Risk of undefined properties.</li>
        </ul>

        <p className="mt-2">
          Constructors ensure objects are properly initialized and structured.
        </p>

      </section>

    </div>
  );
}