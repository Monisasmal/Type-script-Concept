export default function NullUndefined() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Null and Undefined in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          <strong>null</strong> represents an intentional absence of value.
        </p>

        <p>
          <strong>undefined</strong> represents a variable that has been declared
          but not assigned a value.
        </p>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Them</h2>

        <ul className="list-disc ml-6">
          <li>To represent empty values.</li>
          <li>To indicate missing data.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>

        <ul className="list-disc ml-6">
          <li>API response not available.</li>
          <li>Optional database fields.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let profileImage: string | null = null;`}
        </pre>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. If Not Used</h2>

        <p>
          The application might not properly handle missing or optional data.
        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let data: undefined;
console.log(data);`}
        </pre>

      </section>

    </div>
  );
}