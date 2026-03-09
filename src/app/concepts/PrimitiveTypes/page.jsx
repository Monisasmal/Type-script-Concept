export default function PrimitiveTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Primitive Types in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What are Primitive Types</h2>

        <p>
          Primitive types are the basic data types provided by TypeScript to
          represent simple values. These types define the kind of data a
          variable can store.
        </p>

        <p className="mt-2">
          TypeScript uses primitive types to ensure that variables hold the
          correct type of value during development.
        </p>

        <p className="mt-2">
          The most commonly used primitive types in TypeScript are:
        </p>

        <ul className="list-disc ml-6 mt-2">
          <li>string</li>
          <li>number</li>
          <li>boolean</li>
          <li>null</li>
          <li>undefined</li>
          <li>symbol</li>
          <li>bigint</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Primitive Types</h2>

        <ul className="list-disc ml-6">
          <li>To define the type of data stored in variables.</li>
          <li>To prevent assigning incorrect values.</li>
          <li>To improve code safety.</li>
          <li>To help developers understand the data structure.</li>
          <li>To detect errors during development.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Primitive Types</h2>

        <ul className="list-disc ml-6">
          <li>When declaring variables.</li>
          <li>When defining function parameters.</li>
          <li>When returning values from functions.</li>
          <li>When working with simple data values.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p>
          Suppose you are building a user profile system where you store user
          information like name, age, and login status.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
{`let username: string = "Moni";
let age: number = 25;
let isLoggedIn: boolean = true;

console.log(username);
console.log(age);
console.log(isLoggedIn);`}
        </pre>

        <p className="mt-2">
          In this example:
        </p>

        <ul className="list-disc ml-6">
          <li><strong>string</strong> is used for text values.</li>
          <li><strong>number</strong> is used for numeric values.</li>
          <li><strong>boolean</strong> is used for true or false values.</li>
        </ul>
      </section>

      {/* If Not Used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Primitive Types Are Not Used What Issues May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Incorrect data types may be assigned to variables.</li>
          <li>Applications may produce runtime errors.</li>
          <li>Debugging becomes more difficult.</li>
          <li>Large applications become harder to maintain.</li>
          <li>Code readability decreases.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example of Primitive Types</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let productName: string = "Laptop";
let price: number = 50000;
let inStock: boolean = true;

console.log(productName);
console.log(price);
console.log(inStock);`}
        </pre>

        <p className="mt-2">
          These primitive types ensure that the correct data is stored and
          prevent assigning invalid values.
        </p>
      </section>

    </div>
  );
}