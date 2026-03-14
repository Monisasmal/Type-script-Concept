export default function ArrowFunctionsTS() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Arrow Functions in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is an Arrow Function
        </h2>

        <p>
          Arrow functions are a shorter and more modern way to write
          functions in JavaScript and TypeScript. They use the <b>=&gt;</b>
          syntax instead of the traditional <b>function</b> keyword.
        </p>

        <p className="mt-2">
          In TypeScript, arrow functions also support type annotations
          for parameters and return values.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Arrow Functions
        </h2>

        <ul className="list-disc ml-6">
          <li>Provides shorter and cleaner syntax.</li>
          <li>Improves readability of code.</li>
          <li>Very useful in callbacks and array methods.</li>
          <li>Automatically binds the <b>this</b> keyword.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Arrow Functions
        </h2>

        <ul className="list-disc ml-6">
          <li>When writing small utility functions.</li>
          <li>When working with callbacks.</li>
          <li>When using array methods like map, filter, reduce.</li>
          <li>Commonly used in React and Next.js components.</li>
        </ul>
      </section>

      {/* Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Imagine you are building an **e-commerce website** where you
          need to calculate the price of products inside a cart.
        </p>

        <p className="mt-2">
          Arrow functions are often used with array methods to process
          product data quickly.
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Code Example
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(10, 20);
console.log(result);`}
        </pre>

        <p className="mt-2">
          Here the arrow function takes two numbers and returns their sum.
        </p>
      </section>

      {/* Another Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Example with Array
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`const numbers = [1,2,3,4];

const doubled = numbers.map(n => n * 2);

console.log(doubled);`}
        </pre>

        <p className="mt-2">
          Arrow functions make array operations concise and readable.
        </p>
      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Code becomes longer and harder to read.</li>
          <li>Callbacks become difficult to manage.</li>
          <li>More boilerplate code is required.</li>
        </ul>
      </section>

    </div>
  );
}