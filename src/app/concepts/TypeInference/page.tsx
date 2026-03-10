export default function TypeInference() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Type Inference in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Type Inference</h2>
        <p>
          Type Inference is a feature in TypeScript where the compiler
          automatically determines the type of a variable based on the value
          assigned to it. This means developers do not always need to write
          explicit type annotations.
        </p>
        <p className="mt-2">
          TypeScript analyzes the assigned value and infers the correct type
          automatically during compilation.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Type Inference</h2>
        <ul className="list-disc ml-6">
          <li>Reduces the need to write explicit type annotations.</li>
          <li>Makes the code cleaner and shorter.</li>
          <li>Provides automatic type checking.</li>
          <li>Improves developer productivity.</li>
          <li>Still maintains strong type safety.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Type Inference</h2>
        <ul className="list-disc ml-6">
          <li>When the variable value clearly defines its type.</li>
          <li>In small variable declarations.</li>
          <li>When writing simple functions.</li>
          <li>When the type can easily be understood from the assigned value.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>
        <p>
          Suppose you are developing an e-commerce website and storing the
          product price in a variable. TypeScript automatically understands that
          the value is a number.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
{`let productPrice = 500;

productPrice = 600; // valid
productPrice = "cheap"; // error`}
        </pre>

        <p className="mt-2">
          TypeScript automatically infers that <strong>productPrice</strong> is
          a number based on the first assigned value.
        </p>
      </section>

      {/* If Not Used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Type Inference Did Not Exist What Issues Would Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Developers would need to write type annotations everywhere.</li>
          <li>The code would become longer and repetitive.</li>
          <li>Development speed would decrease.</li>
          <li>Code readability would reduce due to excessive type declarations.</li>
        </ul>
      </section>

      {/* Example Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let username = "Moni"; // inferred as string
let age = 25; // inferred as number
let isAdmin = false; // inferred as boolean

console.log(username);
console.log(age);
console.log(isAdmin);`}
        </pre>

        <p className="mt-2">
          In this example, TypeScript automatically detects the type of each
          variable without explicitly writing the type.
        </p>
      </section>

    </div>
  );
}