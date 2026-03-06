export default function TypeAnnotation() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Type Annotation in TypeScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Type Annotation</h2>
        <p>
          Type Annotation in TypeScript is a way to explicitly define the type
          of a variable, function parameter, or return value. It tells the
          TypeScript compiler what type of data a variable should store.
        </p>

        <p className="mt-2">
          Type annotations are written using a colon <b>(:)</b> followed by the
          data type.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Type Annotation</h2>

        <ul className="list-disc ml-6">
          <li>To define the type of variables clearly.</li>
          <li>To prevent type related errors during development.</li>
          <li>To improve code readability.</li>
          <li>To make large applications easier to maintain.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Type Annotation</h2>

        <ul className="list-disc ml-6">
          <li>When writing large scale applications.</li>
          <li>When working in a team project.</li>
          <li>When defining function parameters.</li>
          <li>When defining return types for functions.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p>
          Suppose you are building a user registration system. You want to make
          sure the users age is always a number.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2">
{`let age: number = 25;

console.log(age);`}
        </pre>

        <p className="mt-2">
          Here <b>age: number</b> ensures that only numeric values can be
          assigned.
        </p>
      </section>

      {/* If not */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. What Happens If We Do Not Use Type Annotation
        </h2>

        <p>
          Without type annotation, wrong data types may be assigned to variables,
          which can cause unexpected errors in the application.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2">
{`let age = 25;

age = "twenty five"; // ❌ Wrong data type`}
        </pre>

        <p className="mt-2">
          This can lead to runtime bugs and unpredictable behavior.
        </p>
      </section>

      {/* Code Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let username: string = "Moni";
let age: number = 28;
let isLoggedIn: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

console.log(username);
console.log(add(5, 10));`}
        </pre>
      </section>

    </div>
  );
}