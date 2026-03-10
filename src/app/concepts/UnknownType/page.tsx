export default function UnknownType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Unknown Type in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Unknown Type</h2>
        <p>
          The <strong>unknown</strong> type represents a variable whose type is
          not known at the time of writing the code. It is safer than the any
          type because TypeScript requires type checking before using it.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Unknown Type</h2>
        <ul className="list-disc ml-6">
          <li>To handle uncertain data safely.</li>
          <li>To force type checking before usage.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Unknown Type</h2>
        <ul className="list-disc ml-6">
          <li>When receiving API responses.</li>
          <li>When dealing with external data sources.</li>
        </ul>
      </section>

      {/* Real Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}`}
        </pre>
      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Unknown Type Is Not Checked
        </h2>

        <ul className="list-disc ml-6">
          <li>The compiler will not allow direct operations.</li>
          <li>You must verify the type before using the variable.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let userInput: unknown;

userInput = "Hello";
userInput = 42;`}
        </pre>
      </section>

    </div>
  );
}