export default function StringType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        String Type in TypeScript
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          The <strong>string</strong> type in TypeScript is used to store textual
          data such as names, messages, titles, or descriptions.
        </p>

      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use String Type</h2>

        <ul className="list-disc ml-6">
          <li>To store text-based information.</li>
          <li>To ensure only text values are assigned.</li>
          <li>To avoid type-related errors.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use String Type</h2>

        <ul className="list-disc ml-6">
          <li>When storing usernames.</li>
          <li>When storing product names.</li>
          <li>When working with messages or descriptions.</li>
        </ul>

      </section>

      {/* Real world */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let username: string = "Moni";
let city: string = "Bhubaneswar";`}
        </pre>

      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If String Type Is Not Used
        </h2>

        <p>
          Without defining string type, a variable might receive numbers or
          boolean values which may break the program logic.
        </p>

      </section>

      {/* Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let message: string = "Welcome to TypeScript";
console.log(message);`}
        </pre>
      </section>

    </div>
  );
}