export default function TupleTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Tuple Types in TypeScript
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          A <strong>Tuple</strong> in TypeScript is a special type of array that
          allows storing <strong>multiple values with different data types</strong>
          in a <strong>fixed order</strong>.
        </p>

        <p className="mt-2">
          In a normal array, all values usually have the same type. But in a
          tuple, each position has a predefined type.
        </p>

        <p className="mt-2">
          Example: The first value must be a <strong>string</strong> and the second
          value must be a <strong>number</strong>.
        </p>

      </section>

      {/* Why */}
      <section className="mb-6">

        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Tuple</h2>

        <ul className="list-disc ml-6">
          <li>To store multiple values with different types.</li>
          <li>To enforce a fixed structure of data.</li>
          <li>To improve data safety and prevent wrong data types.</li>
          <li>To represent small structured data.</li>
        </ul>

      </section>

      {/* When */}
      <section className="mb-6">

        <h2 className="text-2xl font-semibold mb-2">3. When to Use Tuple</h2>

        <ul className="list-disc ml-6">
          <li>When the number of elements is fixed.</li>
          <li>When each element has a different type.</li>
          <li>When representing structured data like coordinates or user data.</li>
        </ul>

      </section>

      {/* Real World Example */}
      <section className="mb-6">

        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p className="mb-2">
          Suppose we store a <strong>user&apos;s basic information</strong>.
          The first value is the user&apos;s name (string) and the second value is
          the user&apos;s age (number).
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let user: [string, number] = ["Moni", 25];`}
        </pre>

        <p className="mt-3">
          Here:
        </p>

        <ul className="list-disc ml-6">
          <li>The first value must be a <strong>string</strong></li>
          <li>The second value must be a <strong>number</strong></li>
        </ul>

      </section>

      {/* Another Real World Example */}
      <section className="mb-6">

        <h2 className="text-2xl font-semibold mb-2">
          Another Real World Example
        </h2>

        <p className="mb-2">
          A location coordinate system like <strong>Google Maps</strong>
          stores latitude and longitude.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let location: [number, number] = [20.2961, 85.8245];`}
        </pre>

        <p className="mt-2">
          Here:
        </p>

        <ul className="list-disc ml-6">
          <li>First value = Latitude</li>
          <li>Second value = Longitude</li>
        </ul>

      </section>

      {/* If Not Used */}
      <section className="mb-6">

        <h2 className="text-2xl font-semibold mb-2">
          5. If Tuple Is Not Used
        </h2>

        <p>
          Without tuples, incorrect values could be assigned or the order
          of data might change, which may cause application errors.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
{`let user = ["Moni", 25];

user = [25, "Moni"];  // wrong order but JavaScript allows`}
        </pre>

        <p className="mt-2">
          TypeScript tuples prevent this issue by enforcing the correct structure.
        </p>

      </section>

      {/* Example Code */}
      <section>

        <h2 className="text-2xl font-semibold mb-2">
          6. Example Code
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let student: [string, number, boolean] = ["Rahul", 22, true];

console.log(student[0]); // Name
console.log(student[1]); // Age
console.log(student[2]); // Active status`}
        </pre>

      </section>

    </div>
  );
}