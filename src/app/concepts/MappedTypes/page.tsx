export default function MappedTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Mapped Types in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Mapped Types
        </h2>

        <p>
          Mapped Types allow you to create new types by transforming existing types.
        </p>

        <p className="mt-2">
          They iterate over properties of an existing type and modify them.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Mapped Types = Loop over type properties and transform them</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = {
  name: string;
  age: number;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Mapped Types
        </h2>

        <ul className="list-disc ml-6">
          <li>To avoid repeating code.</li>
          <li>To transform types easily.</li>
          <li>To create flexible and reusable types.</li>
          <li>To build utility types (Partial, Readonly).</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Mapped Types
        </h2>

        <ul className="list-disc ml-6">
          <li>When modifying existing types.</li>
          <li>When working with large data structures.</li>
          <li>When building reusable utilities.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: Make all fields optional (like form update)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = {
  name: string;
  age: number;
};

type PartialUser = {
  [K in keyof User]?: User[K];
};`}
        </pre>

        <p className="mt-2">
          👉 Useful for update APIs where not all fields are required.
        </p>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Make all properties readonly</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};`}
        </pre>

        <p className="mt-4"><b>Example 2: Remove readonly</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};`}
        </pre>

        <p className="mt-4"><b>Example 3: Required Fields</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type RequiredUser = {
  [K in keyof User]-?: User[K];
};`}
        </pre>

        <p className="mt-4"><b>Example 4: Boolean Flags</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Flags<T> = {
  [K in keyof T]: boolean;
};

type FeatureFlags = Flags<{
  darkMode: string;
  newUI: string;
}>;`}
        </pre>

        <p className="mt-4"><b>Example 5: Key Remapping</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Prefix<T> = {
  [K in keyof T as \`prefix_\${string & K}\`]: T[K];
};`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Repeated type definitions.</li>
          <li>Hard to maintain large types.</li>
          <li>Less flexibility.</li>
          <li>More bugs in type handling.</li>
        </ul>

        <p className="mt-2">
          Mapped types make code cleaner and more scalable.
        </p>

      </section>

    </div>
  );
}