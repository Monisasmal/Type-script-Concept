export default function RestParameters() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Rest Parameters in TypeScript
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Rest Parameter</h2>
        <p>
          Rest parameters allow a function to accept multiple values
          as a single array using the ... syntax.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To handle multiple arguments easily.</li>
          <li>To create flexible functions.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Real World Example</h2>
        <p>
          In a shopping cart system, a function may calculate the total
          price of multiple products.
        </p>
      </section>

      <section className="mb-6">
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function calculateTotal(...prices:number[]){
  return prices.reduce((total,price)=> total + price)
}

calculateTotal(10,20,30,40)`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. If Not Used What Issue</h2>
        <p>
          Without rest parameters, functions must define a fixed number
          of arguments.
        </p>
      </section>

    </div>
  );
}