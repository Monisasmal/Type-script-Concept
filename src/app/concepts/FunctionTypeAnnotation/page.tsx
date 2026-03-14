export default function FunctionTypeAnnotation() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Function Type Annotation in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Function Type Annotation
        </h2>

        <p>
          Function Type Annotation is a feature in TypeScript that allows
          developers to define the type of parameters a function accepts
          and the type of value it returns.
        </p>

        <p className="mt-2">
          This ensures that the function receives the correct data type
          and returns the expected result, which helps prevent runtime
          errors.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Function Type Annotation
        </h2>

        <ul className="list-disc ml-6">
          <li>To ensure correct data types are passed into functions.</li>
          <li>To prevent unexpected runtime errors.</li>
          <li>To improve code readability.</li>
          <li>To help developers understand how the function should be used.</li>
          <li>To provide better IntelliSense and editor support.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Function Type Annotation
        </h2>

        <ul className="list-disc ml-6">
          <li>When creating reusable utility functions.</li>
          <li>When building large applications.</li>
          <li>When multiple developers work on the same project.</li>
          <li>When strict type safety is required.</li>
        </ul>
      </section>

      {/* Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Imagine you are building an **e-commerce website**.  
          You may create a function to calculate the total price of products.
        </p>

        <p className="mt-2">
          If incorrect data types are passed (for example, a string instead
          of a number), the application may produce incorrect results.
        </p>

        <p className="mt-2">
          Function type annotation ensures that only the correct types
          are used.
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
      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Incorrect data types may be passed into the function.</li>
          <li>Unexpected bugs may occur during runtime.</li>
          <li>Large applications become difficult to maintain.</li>
          <li>Developers may misunderstand how the function should work.</li>
        </ul>
      </section>

    </div>
  );
}