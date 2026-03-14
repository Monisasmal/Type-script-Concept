export default function DefaultParameters() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Default Parameters in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Default Parameter</h2>
        <p>
          Default parameters allow a function to use a predefined value
          when no argument is provided during function execution.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Prevents undefined values.</li>
          <li>Ensures functions always have a valid value.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Real World Example</h2>
        <p>
          In an application greeting system, if a username is not
          provided, the system may display &quot;Guest&quot;.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Code Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function greet(name: string = "Guest"){
  console.log("Hello " + name);
}

greet()
greet("Alex")`}
        </pre>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. If Not Used What Issue</h2>
        <p>
          Without default values, functions may receive undefined
          parameters which could break the application logic.
        </p>
      </section>

    </div>
  );
}