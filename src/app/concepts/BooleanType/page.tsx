export default function BooleanType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Boolean Type in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          The <strong>boolean</strong> type represents logical values:
          <strong>true</strong> or <strong>false</strong>.
        </p>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Boolean</h2>

        <ul className="list-disc ml-6">
          <li>To represent logical conditions.</li>
          <li>To control program flow.</li>
          <li>To track application states.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Boolean</h2>

        <ul className="list-disc ml-6">
          <li>User login status.</li>
          <li>Feature enabled or disabled.</li>
          <li>Form validation results.</li>
        </ul>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let isLoggedIn: boolean = true;
let isAdmin: boolean = false;`}
        </pre>

      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Boolean Type Is Not Used
        </h2>

        <p>
          Logical checks may become unreliable because variables may contain
          unexpected values.
        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let isAvailable: boolean = true;

if(isAvailable){
 console.log("Product available");
}`}
        </pre>

      </section>

    </div>
  );
}