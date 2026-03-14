export default function FunctionReturnTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Function Return Types in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Function Return Type
        </h2>

        <p>
          A Function Return Type specifies the type of value that a function
          will return after executing. In TypeScript, we define the return
          type after the parameter list using a colon (<b>:</b>).
        </p>

        <p className="mt-2">
          This helps TypeScript ensure that the function always returns the
          correct type of value.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Function Return Types
        </h2>

        <ul className="list-disc ml-6">
          <li>Ensures the function returns the correct data type.</li>
          <li>Helps prevent unexpected bugs.</li>
          <li>Makes code easier to understand.</li>
          <li>Improves code reliability in large applications.</li>
          <li>Provides better developer experience with editor suggestions.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Function Return Types
        </h2>

        <ul className="list-disc ml-6">
          <li>When building reusable functions.</li>
          <li>When creating APIs or utility functions.</li>
          <li>In large applications where type safety is important.</li>
          <li>When multiple developers work on the same project.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Imagine you are building an **e-commerce website**. You create a
          function that calculates the total price of a product including tax.
        </p>

        <p className="mt-2">
          The result must always be a <b>number</b>. Using a return type ensures
          that the function does not accidentally return a string or another
          incorrect value.
        </p>
      </section>

      {/* Code Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Code Example
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function calculateTotal(price: number, tax: number): number {
  return price + tax;
}

const total = calculateTotal(100, 20);
console.log(total);`}
        </pre>

        <p className="mt-2">
          In this example, the function must return a <b>number</b>. If it
          returns any other type, TypeScript will show an error.
        </p>
      </section>

      {/* Another Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Another Example
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function getUserName(): string {
  return "John Doe";
}`}
        </pre>

        <p className="mt-2">
          This function returns a string, so the return type is defined as
          <b> string</b>.
        </p>
      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>The function may return incorrect data types.</li>
          <li>Bugs may appear during runtime.</li>
          <li>Large applications become harder to maintain.</li>
          <li>Developers may misuse the function.</li>
        </ul>

        <p className="mt-2">
          Using return types helps make code more predictable and reliable.
        </p>
      </section>

    </div>
  );
}