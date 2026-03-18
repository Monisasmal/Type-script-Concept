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
          A Union Type allows a variable to store multiple types of values.
          It is defined using the <b>| (pipe)</b> operator.
        </p>

        <p className="mt-2">
          This means a variable can be one type OR another type.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Union Types</h2>
        <ul className="list-disc ml-6">
          <li>To handle flexible data.</li>
          <li>To avoid creating multiple variables.</li>
          <li>To improve type safety compared to <b>any</b>.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Union Types</h2>
        <ul className="list-disc ml-6">
          <li>When a value can be multiple types.</li>
          <li>When handling API responses.</li>
          <li>When dealing with user input.</li>
        </ul>
      </section>

      {/* Real */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>
        <p>
          In a login system, a user can log in using:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Email (string)</li>
          <li>User ID (number)</li>
        </ul>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Code Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let loginId: string | number;

loginId = "user@gmail.com";
loginId = 101;`}
        </pre>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-4">
{`function printId(id: string | number) {
  console.log(id);
}`}
        </pre>

      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. If Not Used What Issue</h2>
        <ul className="list-disc ml-6">
          <li>You may use <b>any</b> which removes type safety.</li>
          <li>Multiple variables may be required.</li>
          <li>Code becomes harder to maintain.</li>
        </ul>
      </section>

    </div>
  );
}