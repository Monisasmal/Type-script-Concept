export default function TypeNarrowing() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Type Narrowing in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Type Narrowing
        </h2>

        <p>
          Type Narrowing is the process of reducing a variable from a general type
          to a more specific type.
        </p>

        <p className="mt-2">
          TypeScript automatically understands the type based on conditions like
          <b> typeof</b>, <b>instanceof</b>, <b>in</b>, etc.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Type Narrowing = Converting a broad type into a specific type</b>
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Type Narrowing
        </h2>

        <ul className="list-disc ml-6">
          <li>To safely access properties and methods.</li>
          <li>To avoid runtime errors.</li>
          <li>To make code more predictable.</li>
          <li>To improve TypeScript’s type inference.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Type Narrowing
        </h2>

        <ul className="list-disc ml-6">
          <li>When using union types.</li>
          <li>When handling API responses.</li>
          <li>When working with unknown or dynamic values.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: User Input</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 2: Payment Method</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Card = { cardNumber: string };
type UPI = { upiId: string };

function pay(method: Card | UPI) {
  if ("cardNumber" in method) {
    console.log("Pay using card:", method.cardNumber);
  } else {
    console.log("Pay using UPI:", method.upiId);
  }
}`}
        </pre>

      </section>

      {/* 5. Different Ways */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Different Ways of Type Narrowing
        </h2>

        <p><b>1. typeof Narrowing</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`if (typeof value === "string") {
  // value is string
}`}
        </pre>

        <p className="mt-4"><b>2. instanceof Narrowing</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Dog {
  bark() {}
}

let pet = new Dog();

if (pet instanceof Dog) {
  pet.bark();
}`}
        </pre>

        <p className="mt-4"><b>3. in Operator</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`if ("name" in obj) {
  // obj has name property
}`}
        </pre>

        <p className="mt-4"><b>4. Truthy / Falsy Check</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function printName(name?: string) {
  if (name) {
    console.log(name.toUpperCase());
  }
}`}
        </pre>

        <p className="mt-4"><b>5. Custom Type Guard</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function print(value: unknown) {
  if (isNumber(value)) {
    console.log(value.toFixed(2));
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
          <li>Runtime errors (wrong method usage).</li>
          <li>TypeScript errors.</li>
          <li>Unpredictable behavior.</li>
          <li>Hard debugging.</li>
        </ul>

        <p className="mt-2">
          Type Narrowing ensures safe and correct code execution.
        </p>

      </section>

    </div>
  );
}