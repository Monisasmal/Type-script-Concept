export default function NeverType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Never Type in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Never Type</h2>
        <p>
          The <strong>never</strong> type represents values that never occur.
          It is used for functions that never return a value, such as functions
          that throw errors or run infinite loops.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Never</h2>
        <ul className="list-disc ml-6">
          <li>To indicate that a function never finishes execution.</li>
          <li>To represent unreachable code.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Never</h2>
        <ul className="list-disc ml-6">
          <li>When a function throws an error.</li>
          <li>When a function contains an infinite loop.</li>
        </ul>
      </section>

      {/* Real Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function throwError(message: string): never {
  throw new Error(message);
}`}
        </pre>
      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Never Type Is Not Used
        </h2>

        <ul className="list-disc ml-6">
          <li>The compiler may not detect unreachable code.</li>
          <li>Error handling may become unclear.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function infiniteLoop(): never {
  while (true) {}
}`}
        </pre>
      </section>

    </div>
  );
}