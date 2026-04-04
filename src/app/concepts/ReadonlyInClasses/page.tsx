export default function ReadonlyInClasses() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Readonly Properties in TypeScript Classes
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Readonly Property
        </h2>

        <p>
          A Readonly Property is a property that can only be assigned once
          (during declaration or inside the constructor) and cannot be modified later.
        </p>

        <p className="mt-2">
          It is defined using the <b>readonly</b> keyword.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}`}
        </pre>

        <p className="mt-2">
          👉 After object creation, <b>id cannot be changed</b>.
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Readonly Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>To protect important data.</li>
          <li>To prevent accidental modification.</li>
          <li>To ensure data consistency.</li>
          <li>Useful for IDs, API keys, and constant values.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Readonly Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>When value should never change after creation.</li>
          <li>When working with database IDs.</li>
          <li>When handling configuration values.</li>
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
{`class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(1, "Rahul");

user.name = "Amit"; // ✅ allowed
user.id = 2; // ❌ error`}
        </pre>

        <p className="mt-4"><b>Example 2: Product SKU</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Product {
  readonly sku: string;
  price: number;

  constructor(sku: string, price: number) {
    this.sku = sku;
    this.price = price;
  }
}

const item = new Product("ABC123", 500);

item.price = 600; // ✅
item.sku = "XYZ"; // ❌`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Constructor Shortcut</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  constructor(
    public name: string,
    readonly id: number
  ) {}
}`}
        </pre>

        <p className="mt-2">
          👉 Automatically creates and assigns readonly property.
        </p>

        <p className="mt-4"><b>Example 2: Readonly Array</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`const numbers: readonly number[] = [1, 2, 3];

numbers.push(4); // ❌ error`}
        </pre>

        <p className="mt-4"><b>Example 3: Nested Object Behavior</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  readonly profile: { name: string };

  constructor(name: string) {
    this.profile = { name };
  }
}

const user = new User("John");

user.profile.name = "Amit"; // ✅ allowed
user.profile = { name: "New" }; // ❌`}
        </pre>

        <p className="mt-2">
          👉 Only reference is readonly, not inner object.
        </p>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Important values may change accidentally.</li>
          <li>Inconsistent application state.</li>
          <li>Hard-to-debug bugs.</li>
          <li>Security risks in large applications.</li>
        </ul>

        <p className="mt-2">
          Readonly properties ensure stability and data protection.
        </p>

      </section>

    </div>
  );
}