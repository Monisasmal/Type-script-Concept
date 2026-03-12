export default function EnumType() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Enum in TypeScript
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>

        <p>
          An <strong>Enum (Enumeration)</strong> in TypeScript is used to define
          a group of named constant values.
        </p>

        <p className="mt-2">
          Enums make code more readable and easier to maintain by replacing
          magic numbers or strings with meaningful names.
        </p>

      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Why We Use Enum</h2>

        <ul className="list-disc ml-6">
          <li>To represent a fixed set of values.</li>
          <li>To improve code readability.</li>
          <li>To avoid using hardcoded numbers or strings.</li>
          <li>To make code more structured and maintainable.</li>
        </ul>

      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use Enum</h2>

        <ul className="list-disc ml-6">
          <li>User roles in an application.</li>
          <li>Order status in e-commerce.</li>
          <li>Application states.</li>
          <li>Permission levels.</li>
        </ul>

      </section>

      {/* Real world example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Real World Example</h2>

        <p className="mb-2">
          In an <strong>e-commerce application</strong>, an order can have
          different statuses such as Pending, Shipped, or Delivered.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`enum OrderStatus {
  Pending,
  Shipped,
  Delivered
}

let orderStatus: OrderStatus = OrderStatus.Shipped;`}
        </pre>

        <p className="mt-3">
          Here:
        </p>

        <ul className="list-disc ml-6">
          <li>Pending = 0</li>
          <li>Shipped = 1</li>
          <li>Delivered = 2</li>
        </ul>

      </section>

      {/* If not used */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. If Enum Is Not Used
        </h2>

        <p>
          Developers might use random numbers or strings which makes the code
          confusing and difficult to maintain.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
{`let status = 2; // What does 2 mean?`}
        </pre>

        <p className="mt-2">
          Enums replace these unclear values with meaningful names.
        </p>

      </section>

      {/* Example code */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Code</h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`enum Role {
  Admin,
  User,
  Guest
}

let currentRole: Role = Role.Admin;

console.log(currentRole);`}
        </pre>

      </section>

    </div>
  );
}