export default function ReadonlyProperties() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Readonly Properties in TypeScript Interfaces
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Readonly Property
        </h2>

        <p>
          A Readonly Property is a property that can be assigned only once
          (at the time of object creation) and cannot be modified later.
        </p>

        <p className="mt-2">
          It is defined using the <b>readonly</b> keyword.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  readonly id: number;
  name: string;
}`}
        </pre>

        <p className="mt-2">
          Here, <b>id</b> cannot be changed after initialization.
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Readonly Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>To protect important data from being changed.</li>
          <li>To ensure data consistency.</li>
          <li>To prevent accidental updates.</li>
          <li>Useful for IDs, configuration values, constants.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Readonly Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>When a value should never change (like ID).</li>
          <li>When working with database data.</li>
          <li>When handling configuration settings.</li>
          <li>When building secure applications.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: User ID</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Rahul"
};

user.name = "Amit"; // ✅ allowed
user.id = 2; // ❌ error`}
        </pre>

        <p className="mt-4">
          ID should never change after user creation.
        </p>

        <p className="mt-4"><b>Example 2: Product SKU</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Product {
  readonly sku: string;
  price: number;
}

const item: Product = {
  sku: "ABC123",
  price: 500
};

item.price = 600; // ✅
item.sku = "XYZ"; // ❌`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Configuration Object</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Config {
  readonly apiUrl: string;
  timeout: number;
}

const config: Config = {
  apiUrl: "https://api.com",
  timeout: 5000
};

config.timeout = 6000; // ✅
config.apiUrl = "new-url"; // ❌`}
        </pre>

        <p className="mt-4"><b>Example 2: Readonly Array</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`const numbers: readonly number[] = [1, 2, 3];

numbers.push(4); // ❌ error`}
        </pre>

        <p className="mt-2">
          Array cannot be modified.
        </p>

        <p className="mt-4"><b>Example 3: Nested Object</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface User {
  readonly id: number;
  profile: {
    name: string;
  };
}

const user: User = {
  id: 1,
  profile: { name: "John" }
};

user.profile.name = "Amit"; // ✅ allowed
user.id = 2; // ❌`}
        </pre>

        <p className="mt-2">
          Only top-level readonly is protected.
        </p>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Important data may be accidentally modified.</li>
          <li>Inconsistent application state.</li>
          <li>Hard-to-debug bugs.</li>
          <li>Security issues in large applications.</li>
        </ul>

        <p className="mt-2">
          Readonly properties help protect critical data and maintain stability.
        </p>

      </section>

    </div>
  );
}