export default function ArrayTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Array Types in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          Array type allows storing multiple values of the same type
          in a single variable.
        </p>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Arrays</h2>

        <ul className="list-disc ml-6">
          <li>To store collections of data.</li>
          <li>To manage lists efficiently.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Arrays</h2>

        <ul className="list-disc ml-6">
          <li>Product lists.</li>
          <li>User lists.</li>
          <li>Order history.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let products: string[] = ["Laptop","Mobile","Tablet"];`}
        </pre>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. If Not Used</h2>

        <p>
          Managing multiple values becomes difficult using separate variables.
        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let numbers: number[] = [1,2,3,4];
console.log(numbers);`}
        </pre>

      </section>

    </div>
  );
}