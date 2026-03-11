export default function StringType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        String Type in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is String Type</h2>
        <p>
          The <strong>string</strong> type represents textual data in TypeScript.
          It is used to store characters, words, or sentences.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use String Type</h2>
        <ul className="list-disc ml-6">
          <li>To store text-based information.</li>
          <li>To ensure only text values are stored.</li>
          <li>To prevent assigning incorrect data types.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use String Type</h2>
        <ul className="list-disc ml-6">
          <li>When storing user names.</li>
          <li>When storing product titles.</li>
          <li>When handling textual data.</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let username: string = "Moni";
let email: string = "moni@gmail.com";`}
        </pre>
      </section>

      {/* Issue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If String Type Is Not Used
        </h2>

        <p>
          If string type is not defined, a variable might receive
          incorrect values such as numbers or boolean values.
        </p>
      </section>

      {/* Code */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let city: string = "Bhubaneswar";
console.log(city);`}
        </pre>
      </section>

    </div>
  );
}