export default function Interfaces() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Interfaces in TypeScript
      </h1>

      {/* 1 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Interface</h2>
        <p>
          An Interface is used to define the structure (shape) of an object.
        </p>
        <p className="mt-2">
          It describes what properties an object should have and their types.
        </p>
      </section>

      {/* 2 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Interface</h2>
        <ul className="list-disc ml-6">
          <li>To enforce structure in objects.</li>
          <li>To improve code readability.</li>
          <li>To ensure consistency across application.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When working with objects.</li>
          <li>When defining API data structure.</li>
          <li>When building large applications.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>
        <p>
          Example: User profile structure in an application.
        </p>
      </section>

      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Code Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rahul",
  age: 25
};`}
        </pre>

      </section>

      {/* 6 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. If Not Used</h2>
        <p>
          Object structure becomes inconsistent and error-prone.
        </p>
      </section>

    </div>
  );
}