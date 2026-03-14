export default function FunctionOverloading() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Function Overloading in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Function Overloading
        </h2>

        <p>
          Function overloading allows a function to have multiple
          signatures with different parameter types while sharing
          a single implementation.
        </p>

        <p className="mt-2">
          This means the same function name can behave differently
          depending on the type or number of arguments passed.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Function Overloading
        </h2>

        <ul className="list-disc ml-6">
          <li>Allows a function to work with multiple data types.</li>
          <li>Improves flexibility of functions.</li>
          <li>Maintains clean and reusable code.</li>
          <li>Provides better type safety.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Function Overloading
        </h2>

        <ul className="list-disc ml-6">
          <li>When the same operation works with different data types.</li>
          <li>When designing APIs or libraries.</li>
          <li>When function behavior depends on input type.</li>
        </ul>
      </section>

      {/* Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Imagine a **search function** in a website. The user might search
          using either a product ID (number) or a product name (string).
        </p>

        <p className="mt-2">
          Function overloading allows the same search function to handle
          both types of inputs.
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Code Example
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
  return a + b;
}

console.log(add(10, 20));
console.log(add("Hello ", "World"));`}
        </pre>

        <p className="mt-2">
          The same function works with both numbers and strings.
        </p>
      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>You may need to create multiple functions for the same task.</li>
          <li>Code duplication increases.</li>
          <li>Code becomes harder to maintain.</li>
        </ul>
      </section>

    </div>
  );
}