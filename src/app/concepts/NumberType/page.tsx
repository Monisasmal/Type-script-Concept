export default function NumberType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Number Type in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Number Type</h2>
        <p>
          The <strong>number</strong> type is used to represent numeric values
          such as integers, floating numbers, and calculations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Number Type</h2>
        <ul className="list-disc ml-6">
          <li>To store numeric values.</li>
          <li>To perform mathematical operations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Number Type</h2>
        <ul className="list-disc ml-6">
          <li>Product price</li>
          <li>User age</li>
          <li>Score or rating systems</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let price: number = 500;
let age: number = 25;`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Number Type Is Not Used
        </h2>

        <p>
          Incorrect values like text may be assigned which can break
          calculations in the application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let totalPrice: number = 1000;
console.log(totalPrice);`}
        </pre>
      </section>

    </div>
  );
}