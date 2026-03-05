export default function WhatIsTypeScript() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is TypeScript
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          TypeScript is a strongly typed programming language that builds on
          JavaScript. It adds static typing, interfaces, and advanced features
          that help developers write safer and more maintainable code.
        </p>
      </section>

      {/* Inventor */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Who Invented TypeScript</h2>
        <p>
          TypeScript was developed by Microsoft and first released in 2012.
          The main architect of TypeScript is Anders Hejlsberg, the creator of
          C#.
        </p>
      </section>

      {/* Why Use */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Why We Use TypeScript</h2>
        <ul className="list-disc ml-6">
          <li>To detect errors during development.</li>
          <li>To write scalable applications.</li>
          <li>Better code readability.</li>
          <li>Better support for large projects.</li>
        </ul>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. When to Use TypeScript</h2>
        <ul className="list-disc ml-6">
          <li>Large scale applications.</li>
          <li>Enterprise level projects.</li>
          <li>React, Angular, and Next.js projects.</li>
          <li>When multiple developers work on the same project.</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Static typing.</li>
          <li>Better code completion.</li>
          <li>Early error detection.</li>
          <li>Supports modern JavaScript features.</li>
          <li>Improves code maintainability.</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Extra compilation step.</li>
          <li>Learning curve for beginners.</li>
          <li>More setup compared to JavaScript.</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`let message: string = "Hello TypeScript";`}
        </pre>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`function greet(name: string): string {
  return "Hello " + name;
}`}
        </pre>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>TypeScript is a superset of JavaScript</li>
          <li>It adds static typing</li>
          <li>Compiled into JavaScript</li>
          <li>Improves code quality and maintainability</li>
        </ul>
      </section>

      {/* Installation */}
      <section className="mb-6 mt-6">
        <h2 className="text-2xl font-semibold mb-2">7. How to Install TypeScript</h2>

        <p className="mb-2">Install TypeScript globally using npm:</p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`npm install -g typescript`}
        </pre>
      </section>

      {/* Version */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Check TypeScript Version</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`tsc -v`}
        </pre>
      </section>

    </div>
  );
}