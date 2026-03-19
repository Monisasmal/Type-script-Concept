export default function OptionalProperties() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Optional Properties in TypeScript Interfaces
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Optional Property
        </h2>

        <p>
          Optional Properties are properties that may or may not be present in an object.
        </p>

        <p className="mt-2">
          They are defined using the <b>?</b> symbol in an interface.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  age?: number; // optional
}`}
        </pre>

        <p className="mt-2">
          Here, <b>age</b> is optional — it is not required while creating an object.
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Optional Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>To handle incomplete or partial data.</li>
          <li>To make objects flexible.</li>
          <li>To avoid forcing unnecessary values.</li>
          <li>Common in API responses where some fields may be missing.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Optional Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>When some fields are not always available.</li>
          <li>When creating forms (optional inputs).</li>
          <li>When working with API data.</li>
          <li>When building reusable components.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: User Profile</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  email: string;
  phone?: string;
}

const user1: User = {
  name: "Rahul",
  email: "rahul@gmail.com"
}; // phone not required`}
        </pre>

        <p className="mt-4"><b>Example 2: Form Input</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface FormData {
  username: string;
  password: string;
  rememberMe?: boolean;
}`}
        </pre>

        <p className="mt-4">
          &quot;Remember Me&quot; checkbox is optional.
        </p>

      </section>

      {/* 5. Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Optional with Function</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  age?: number;
}

function printUser(user: User) {
  console.log(user.name);

  if (user.age) {
    console.log(user.age);
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 2: Multiple Optional Fields</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Product {
  name: string;
  price: number;
  discount?: number;
  description?: string;
}`}
        </pre>

        <p className="mt-4"><b>Example 3: Partial Update</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  name: string;
  email: string;
  age?: number;
}

function updateUser(user: User) {
  console.log("Updated:", user);
}

updateUser({ name: "John", email: "john@gmail.com" });`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>You will be forced to provide unnecessary values.</li>
          <li>Code becomes less flexible.</li>
          <li>Difficult to handle real-world API data.</li>
          <li>More boilerplate code.</li>
        </ul>

        <p className="mt-2">
          Optional properties help make your code flexible and realistic.
        </p>

      </section>

    </div>
  );
}