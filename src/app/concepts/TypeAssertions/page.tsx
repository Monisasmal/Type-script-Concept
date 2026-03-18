export default function TypeAssertions() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Type Assertions in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Type Assertion
        </h2>

        <p>
          Type Assertion is used to tell TypeScript the exact type of a value.
        </p>

        <p className="mt-2">
          It means: <b>&quot;I know more about this value than TypeScript&quot;</b>.
        </p>

        <p className="mt-2">
          TypeScript will trust you and stop showing type errors.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let value: any = "Hello World";

let length = (value as string).length;`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Type Assertions
        </h2>

        <ul className="list-disc ml-6">
          <li>When TypeScript cannot correctly guess the type.</li>
          <li>When working with <b>any</b> or <b>unknown</b> types.</li>
          <li>When handling DOM elements.</li>
          <li>When working with API responses.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Type Assertions
        </h2>

        <ul className="list-disc ml-6">
          <li>When you are sure about the type.</li>
          <li>When TypeScript shows unnecessary errors.</li>
          <li>When narrowing <b>unknown</b> values.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: API Response</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let data: any = "User Data";

let length = (data as string).length;`}
        </pre>

        <p className="mt-4"><b>Example 2: DOM Element</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`const input = document.getElementById("username") as HTMLInputElement;

input.value = "John";`}
        </pre>

        <p className="mt-4"><b>Example 3: Unknown Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let value: unknown = "Hello";

let len = (value as string).length;`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Angle Bracket Syntax</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let value: any = "TypeScript";

let len = (<string>value).length;`}
        </pre>

        <p className="mt-2">
          ⚠️ Note: This syntax is not used in React (JSX) because it causes errors.
        </p>

        <p className="mt-4"><b>Function Example</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function getValue(): any {
  return "Hello";
}

let result = (getValue() as string).toUpperCase();`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>TypeScript may show unnecessary errors.</li>
          <li>You cannot access properties safely.</li>
          <li>Working with DOM becomes difficult.</li>
        </ul>

        <p className="mt-2">
          But ⚠️ wrong use of type assertion can cause runtime errors.
        </p>

      </section>

    </div>
  );
}