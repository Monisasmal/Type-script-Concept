export default function NumberType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Number Type in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>number</strong> type represents numeric values such as
          integers, floating numbers, and calculations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Number Type</h2>
        <ul className="list-disc ml-6">
          <li>To store numeric values safely.</li>
          <li>To perform mathematical calculations.</li>
          <li>To prevent incorrect data types in calculations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Number Type</h2>
        <ul className="list-disc ml-6">
          <li>Product price in e-commerce.</li>
          <li>User age in profile systems.</li>
          <li>Scores, ratings, and quantities.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let price: number = 45000;
let quantity: number = 3;`}
        </pre>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Number Type Is Not Used
        </h2>

        <p>
          Incorrect values like text could be assigned which can break
          calculations in the application.
        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let total: number = 100 + 200;
console.log(total);`}
        </pre>

      </section>

    </div>
  );
}