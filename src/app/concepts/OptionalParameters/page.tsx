export default function OptionalParameters() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Optional Parameters in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Optional Parameter</h2>
        <p>
          Optional parameters allow a function parameter to be optional,
          meaning the function can be called without providing that value.
          In TypeScript, optional parameters are defined using the
          <b> ? </b> symbol.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Optional Parameters</h2>
        <ul className="list-disc ml-6">
          <li>Provides flexibility when calling functions.</li>
          <li>Allows functions to work with partial information.</li>
          <li>Improves reusability of functions.</li>
        </ul>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Optional Parameters</h2>
        <ul className="list-disc ml-6">
          <li>When some inputs are not always required.</li>
          <li>When building flexible APIs.</li>
          <li>When user input may or may not exist.</li>
        </ul>
      </section>

      {/* Real world */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>
        <p>
          In a user profile system, a user may provide their age,
          but it may not always be required.
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Code Example</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function greet(name: string, age?: number) {
  if(age){
    console.log(name + " is " + age + " years old");
  } else {
    console.log("Hello " + name);
  }
}

greet("John")
greet("John", 25)`}
        </pre>

      </section>

      {/* Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. If Not Used What Issue</h2>
        <p>
          Without optional parameters, the function would require all
          arguments every time it is called.
        </p>
      </section>

    </div>
  );
}