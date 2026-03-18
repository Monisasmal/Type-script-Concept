export default function TypeGuards() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Type Guards in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Type Guard
        </h2>

        <p>
          Type Guards are techniques used to check the type of a variable at runtime
          and help TypeScript understand the exact type.
        </p>

        <p className="mt-2">
          They are mainly used with <b>Union Types</b> to safely access properties.
        </p>

        <p className="mt-2">
          In simple words:
          <br />
          👉 <b>Type Guard = Checking type before using it</b>
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Type Guards
        </h2>

        <ul className="list-disc ml-6">
          <li>To safely work with multiple types.</li>
          <li>To avoid runtime errors.</li>
          <li>To help TypeScript narrow down types.</li>
          <li>To safely access properties and methods.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Type Guards
        </h2>

        <ul className="list-disc ml-6">
          <li>When using union types (string | number).</li>
          <li>When working with API responses.</li>
          <li>When dealing with unknown or dynamic data.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: User Input</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string methods
  } else {
    console.log(value.toFixed(2)); // number methods
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 2: Login System</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function login(id: string | number) {
  if (typeof id === "string") {
    console.log("Login using email:", id);
  } else {
    console.log("Login using user ID:", id);
  }
}`}
        </pre>

      </section>

      {/* 5. Types of Type Guards */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Types of Type Guards
        </h2>

        <p><b>1. typeof (Primitive Types)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`if (typeof value === "string") {
  // string
}`}
        </pre>

        <p className="mt-4"><b>2. instanceof (Objects)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Car {
  drive() {}
}

let vehicle = new Car();

if (vehicle instanceof Car) {
  vehicle.drive();
}`}
        </pre>

        <p className="mt-4"><b>3. in Operator</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = { name: string };
type Admin = { role: string };

function check(person: User | Admin) {
  if ("name" in person) {
    console.log(person.name);
  } else {
    console.log(person.role);
  }
}`}
        </pre>

        <p className="mt-4"><b>4. Custom Type Guard</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function isString(value: unknown): value is string {
  return typeof value === "string";
}

function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
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
          <li>Runtime errors (calling wrong methods).</li>
          <li>TypeScript will show errors.</li>
          <li>Unsafe code execution.</li>
          <li>Difficult debugging.</li>
        </ul>

        <p className="mt-2">
          Type Guards ensure safe and predictable code behavior.
        </p>

      </section>

    </div>
  );
}