export default function UnionTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Union Types in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Union Type</h2>
        <p>
          Union Types allow a variable to hold multiple types using the
          <b> | </b> operator.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Provides flexibility in handling multiple data types.</li>
          <li>Reduces need for multiple variables.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <p>
          Used when a value can be more than one type.
        </p>
      </section>

      {/* Real */}
      <section className="mb-6">
        <p>
          Example: User ID can be number or string.
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let userId: number | string;

userId = 101;
userId = "A101";`}
        </pre>
      </section>

      {/* Issue */}
      <section>
        <p>
          Without union types, you would need multiple variables or lose type safety.
        </p>
      </section>

    </div>
  );
}