export default function AnyType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Any Type in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Any Type</h2>
        <p>
          The <strong>any</strong> type in TypeScript allows a variable to hold
          values of any data type. When a variable is assigned the any type,
          TypeScript disables type checking for that variable.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Any Type</h2>
        <ul className="list-disc ml-6">
          <li>When the data type is not known.</li>
          <li>When migrating JavaScript code to TypeScript.</li>
          <li>When working with third-party libraries.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Any Type</h2>
        <ul className="list-disc ml-6">
          <li>When handling dynamic data.</li>
          <li>When receiving unpredictable API data.</li>
        </ul>
      </section>

      {/* Real Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let data: any = "Hello";

data = 100;
data = true;`}
        </pre>
      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Any Type Is Misused What Issues May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Type safety is lost.</li>
          <li>Errors may occur at runtime.</li>
          <li>Code becomes harder to maintain.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let value: any = 10;
value = "TypeScript";
value = false;`}
        </pre>
      </section>

    </div>
  );
}