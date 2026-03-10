export default function TypeScriptVsJavaScript() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        TypeScript vs JavaScript
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is TypeScript vs JavaScript</h2>
        <p>
          JavaScript is a dynamic programming language used to build web
          applications. It runs directly in the browser and is one of the core
          technologies of the web.
        </p>

        <p className="mt-2">
          TypeScript is a superset of JavaScript developed by Microsoft.
          It adds static typing and advanced features on top of JavaScript.
          TypeScript code must be compiled into JavaScript before running
          in the browser.
        </p>

        <p className="mt-2">
          In simple terms, every valid JavaScript code is also valid
          TypeScript code, but TypeScript provides additional tools to make
          development safer and more maintainable.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use TypeScript Instead of JavaScript</h2>

        <ul className="list-disc ml-6">
          <li>Provides static type checking.</li>
          <li>Helps detect errors during development.</li>
          <li>Improves code readability.</li>
          <li>Better support for large applications.</li>
          <li>Provides powerful development tools like IntelliSense.</li>
        </ul>

        <p className="mt-2">
          Because of these advantages, many modern frameworks like React,
          Angular, and Next.js prefer TypeScript for large-scale projects.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use TypeScript Instead of JavaScript</h2>

        <ul className="list-disc ml-6">
          <li>When building large-scale applications.</li>
          <li>When multiple developers work on the same project.</li>
          <li>When maintaining long-term projects.</li>
          <li>When better error detection is required.</li>
          <li>When using frameworks like React, Angular, or Next.js.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p>
          Suppose you are building an e-commerce application where a product
          price must always be a number.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">JavaScript Example</h3>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let price = 500;

price = "cheap"; // No error in JavaScript`}
        </pre>

        <p className="mt-2">
          JavaScript allows changing the type, which may cause runtime errors.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">TypeScript Example</h3>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let price: number = 500;

price = "cheap"; // Error in TypeScript`}
        </pre>

        <p className="mt-2">
          TypeScript prevents assigning incorrect data types and helps catch
          mistakes during development.
        </p>
      </section>

      {/* If Not Used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If TypeScript Is Not Used What Issues May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Type related bugs may appear during runtime.</li>
          <li>Large codebases become difficult to maintain.</li>
          <li>Developers may accidentally misuse variables.</li>
          <li>Debugging becomes more difficult.</li>
          <li>Team collaboration becomes harder in large projects.</li>
        </ul>
      </section>

    </div>
  );
}