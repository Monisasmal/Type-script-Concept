export default function ImplementingInterfaces() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Implementing Interfaces in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Implementing Interfaces
        </h2>

        <p>
          Implementing an Interface means a class follows the structure defined by that interface.
        </p>

        <p className="mt-2">
          It ensures that the class includes all required properties and methods.
        </p>

        <p className="mt-2">
          It is done using the <b>implements</b> keyword.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Interface = Rules</b> <br />
          <b>Class = Must follow those rules</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  greet(): void;
}

class Person implements User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Implementing Interfaces
        </h2>

        <ul className="list-disc ml-6">
          <li>To enforce structure in classes.</li>
          <li>To ensure consistency.</li>
          <li>To improve code reliability.</li>
          <li>To follow OOP principles.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Implementing Interfaces
        </h2>

        <ul className="list-disc ml-6">
          <li>When multiple classes share the same structure.</li>
          <li>When building scalable applications.</li>
          <li>When defining contracts for classes.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: Payment System</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Payment {
  pay(amount: number): void;
}

class CreditCard implements Payment {
  pay(amount: number) {
    console.log("Paid via Credit Card:", amount);
  }
}

class UPI implements Payment {
  pay(amount: number) {
    console.log("Paid via UPI:", amount);
  }
}`}
        </pre>

        <p className="mt-2">
          👉 All payment methods must follow same structure.
        </p>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Multiple Interfaces</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Name {
  name: string;
}

interface Age {
  age: number;
}

class Person implements Name, Age {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 2: Method Enforcement</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Shape {
  area(): number;
}

class Circle implements Shape {
  area() {
    return 3.14 * 5 * 5;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 3: Missing Implementation Error</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
}

class Person implements User {
  // ❌ Error: name is missing
}`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>No standard structure across classes.</li>
          <li>Inconsistent implementation.</li>
          <li>Hard to maintain large applications.</li>
          <li>More bugs and confusion.</li>
        </ul>

        <p className="mt-2">
          Implementing interfaces ensures consistency and scalability.
        </p>

      </section>

    </div>
  );
}