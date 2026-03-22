export default function InterfaceVsTypeAlias() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Interface vs Type Alias in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Interface vs Type Alias
        </h2>

        <p>
          Both <b>Interface</b> and <b>Type Alias</b> are used to define the structure of data in TypeScript.
        </p>

        <p className="mt-2">
          But they have different capabilities and use cases.
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Them
        </h2>

        <ul className="list-disc ml-6">
          <li>To define object structure.</li>
          <li>To make code reusable.</li>
          <li>To improve readability and maintainability.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Which
        </h2>

        <ul className="list-disc ml-6">
          <li>Use <b>Interface</b> → for objects and OOP-style design.</li>
          <li>Use <b>Type</b> → for unions, primitives, functions, complex types.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: Interface (User Object)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rahul",
  age: 25
};`}
        </pre>

        <p className="mt-4"><b>Example 2: Type Alias (Union)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";`}
        </pre>

      </section>

      {/* 5. Differences */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Key Differences
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`1. Interface:
- Used for objects
- Supports extends
- Can be reopened (declaration merging)

2. Type Alias:
- More flexible
- Supports union, primitives, tuples
- Cannot be reopened`}
        </pre>

      </section>

      {/* 6. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. More Examples
        </h2>

        <p><b>Example 1: Extending</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface A {
  name: string;
}

interface B extends A {
  age: number;
}`}
        </pre>

        <p className="mt-4"><b>Type Equivalent</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type A = {
  name: string;
};

type B = A & {
  age: number;
};`}
        </pre>

        <p className="mt-4"><b>Example 2: Function Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Add = (a: number, b: number) => number;

const sum: Add = (a, b) => a + b;`}
        </pre>

        <p className="mt-4"><b>Example 3: Declaration Merging (Only Interface)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "John",
  age: 25
};`}
        </pre>

        <p className="mt-2">
          Type cannot do this ❌
        </p>

      </section>

      {/* 7. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. If Not Used Properly What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Wrong choice may reduce flexibility.</li>
          <li>Code becomes harder to scale.</li>
          <li>Confusion in large projects.</li>
        </ul>

        <p className="mt-2">
          Choosing the right one improves code quality and maintainability.
        </p>

      </section>

    </div>
  );
}