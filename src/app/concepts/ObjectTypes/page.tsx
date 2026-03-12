export default function ObjectTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Object Types in TypeScript
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          An <strong>Object Type</strong> in TypeScript is used to define the
          structure of an object. It specifies what properties an object should
          have and what type of values those properties must contain.
        </p>

        <p className="mt-2">
          In simple terms, object types describe the <strong>shape of an object</strong>.
        </p>

        <p className="mt-2">
          For example, a user object might contain a name, age, and login status.
        </p>

      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Object Types</h2>

        <ul className="list-disc ml-6">
          <li>To define the structure of objects clearly.</li>
          <li>To ensure objects contain correct properties.</li>
          <li>To prevent assigning incorrect data types.</li>
          <li>To improve code readability and maintainability.</li>
        </ul>

      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Object Types</h2>

        <ul className="list-disc ml-6">
          <li>When storing user information.</li>
          <li>When managing product data in e-commerce.</li>
          <li>When working with API responses.</li>
          <li>When representing structured data.</li>
        </ul>

      </section>

      {/* Real world example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p className="mb-2">
          In a <strong>user management system</strong>, each user has
          multiple properties such as name, age, and login status.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let user: { name: string; age: number; isActive: boolean } = {
  name: "Moni",
  age: 25,
  isActive: true
};`}
        </pre>

        <p className="mt-3">
          Here:
        </p>

        <ul className="list-disc ml-6">
          <li><strong>name</strong> must be a string</li>
          <li><strong>age</strong> must be a number</li>
          <li><strong>isActive</strong> must be a boolean</li>
        </ul>

      </section>

      {/* If not used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Object Type Is Not Used
        </h2>

        <p>
          Without object types, incorrect values could be assigned to properties,
          which may cause bugs in the application.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
{`let user = {
 name: "Moni",
 age: "twenty five" // wrong type but JavaScript allows
}`}
        </pre>

        <p className="mt-2">
          TypeScript object types prevent this problem by enforcing correct types.
        </p>

      </section>

      {/* Example code */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let product: { title: string; price: number } = {
  title: "Laptop",
  price: 50000
};

console.log(product.title);`}
        </pre>

      </section>

    </div>
  );
}