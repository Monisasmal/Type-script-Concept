export default function VoidType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Void Type in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Void Type</h2>
        <p>
          The <strong>void</strong> type represents the absence of a value.
          It is commonly used for functions that do not return any value.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Void</h2>
        <ul className="list-disc ml-6">
          <li>To indicate that a function does not return anything.</li>
          <li>To improve code clarity.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Void</h2>
        <ul className="list-disc ml-6">
          <li>In functions that perform actions like logging.</li>
          <li>When updating UI or database operations.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function printMessage(): void {
  console.log("Hello TypeScript");
}`}
        </pre>
      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Void Is Not Used
        </h2>

        <ul className="list-disc ml-6">
          <li>Developers may assume a function returns a value.</li>
          <li>This may cause confusion in large projects.</li>
        </ul>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function logUser(): void {
  console.log("User logged in");
}`}
        </pre>
      </section>

    </div>
  );
}