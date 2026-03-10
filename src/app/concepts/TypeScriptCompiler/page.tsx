export default function TypeScriptCompiler() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        TypeScript Compiler (tsc)
      </h1>

      {/* What is */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is TypeScript Compiler (tsc)</h2>

        <p>
          The TypeScript Compiler, commonly called <strong>tsc</strong>, is a tool
          used to convert TypeScript code into JavaScript code.
        </p>

        <p className="mt-2">
          Browsers do not understand TypeScript directly. Therefore, before running
          TypeScript code in a browser or Node.js environment, it must first be
          compiled into JavaScript using the TypeScript compiler.
        </p>

        <p className="mt-2">
          The compiler also checks the code for type errors and reports them during
          development, which helps developers detect problems early.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use the TypeScript Compiler</h2>

        <ul className="list-disc ml-6">
          <li>To convert TypeScript code into JavaScript.</li>
          <li>To detect type errors during development.</li>
          <li>To ensure code follows TypeScript rules.</li>
          <li>To generate JavaScript that browsers can execute.</li>
          <li>To improve application reliability and maintainability.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use the TypeScript Compiler</h2>

        <ul className="list-disc ml-6">
          <li>When writing applications using TypeScript.</li>
          <li>When converting TypeScript files (.ts) into JavaScript files (.js).</li>
          <li>When checking for type errors before running the application.</li>
          <li>When building production-ready JavaScript code.</li>
        </ul>
      </section>

      {/* Real World Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p>
          Suppose you write a TypeScript file named <strong>app.ts</strong>.
          To run this code in the browser, it must first be converted to JavaScript.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Step 1: TypeScript File
        </h3>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let message: string = "Hello TypeScript";

console.log(message);`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Step 2: Compile Using tsc
        </h3>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`tsc app.ts`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Step 3: Generated JavaScript File
        </h3>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`var message = "Hello TypeScript";

console.log(message);`}
        </pre>

        <p className="mt-2">
          The TypeScript compiler converts the TypeScript code into JavaScript,
          which can then run in browsers or Node.js.
        </p>
      </section>

      {/* If Not Used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If TypeScript Compiler Is Not Used What Issues May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Browsers will not understand TypeScript syntax.</li>
          <li>TypeScript code cannot run directly in JavaScript environments.</li>
          <li>Type errors will not be checked before execution.</li>
          <li>The application may produce runtime errors.</li>
        </ul>
      </section>

      {/* Check Version */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Check TypeScript Compiler Version
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`tsc -v`}
        </pre>

        <p className="mt-2">
          This command shows the installed TypeScript compiler version.
        </p>
      </section>

    </div>
  );
}