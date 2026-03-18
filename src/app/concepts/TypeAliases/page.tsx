export default function TypeAliases() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Type Aliases in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Type Alias
        </h2>

        <p>
          A Type Alias is used to create a custom name for a type.
        </p>

        <p className="mt-2">
          Instead of writing the same type structure again and again,
          we define it once and reuse it everywhere.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = {
  name: string;
  age: number;
};

const u1: User = { name: "John", age: 25 };`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Type Aliases
        </h2>

        <ul className="list-disc ml-6">
          <li>To avoid repeating the same type structure.</li>
          <li>To make code more readable and clean.</li>
          <li>To manage complex types easily.</li>
          <li>To improve maintainability in large projects.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Type Aliases
        </h2>

        <ul className="list-disc ml-6">
          <li>When working with objects having same structure.</li>
          <li>When using union or complex types.</li>
          <li>When defining API response types.</li>
          <li>When building reusable components.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: User Data</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = {
  id: number;
  name: string;
  email: string;
};

const user1: User = {
  id: 1,
  name: "Rahul",
  email: "rahul@gmail.com"
};`}
        </pre>

        <p className="mt-4"><b>Example 2: API Response</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type ApiStatus = "loading" | "success" | "error";

let status: ApiStatus = "loading";`}
        </pre>

        <p className="mt-4"><b>Example 3: E-commerce Product</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const item: Product = {
  name: "Laptop",
  price: 50000,
  inStock: true
};`}
        </pre>

      </section>

      {/* 5. Code Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Function with Type Alias</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Add = (a: number, b: number) => number;

const addNumbers: Add = (a, b) => {
  return a + b;
};`}
        </pre>

        <p className="mt-4"><b>Example 2: Union Type Alias</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type ID = string | number;

let userId: ID;
userId = "abc123";
userId = 101;`}
        </pre>

        <p className="mt-4"><b>Example 3: Nested Type Alias</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Address = {
  city: string;
  pincode: number;
};

type User = {
  name: string;
  address: Address;
};

const u: User = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Code repetition increases.</li>
          <li>Hard to maintain large applications.</li>
          <li>More chances of errors.</li>
          <li>Complex types become difficult to manage.</li>
        </ul>

        <p className="mt-2">
          Type aliases help keep code clean, reusable, and scalable.
        </p>

      </section>

    </div>
  );
}