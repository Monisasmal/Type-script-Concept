export default function GenericConstraints() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Generic Constraints in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Generic Constraints
        </h2>

        <p>
          Generic Constraints allow you to restrict the types that a generic can accept.
        </p>

        <p className="mt-2">
          It ensures that the generic type follows certain rules or structure.
        </p>

        <p className="mt-2">
          We use the <b>extends</b> keyword to apply constraints.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Generics = Flexible</b> <br />
          <b>Constraints = Controlled flexibility</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("Hello");
printLength([1, 2, 3]);`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Generic Constraints
        </h2>

        <ul className="list-disc ml-6">
          <li>To ensure required properties exist.</li>
          <li>To prevent runtime errors.</li>
          <li>To improve type safety.</li>
          <li>To restrict unwanted types.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Generic Constraints
        </h2>

        <ul className="list-disc ml-6">
          <li>When generic needs specific properties.</li>
          <li>When working with objects.</li>
          <li>When accessing properties like length, id, etc.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: API with ID</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface HasId {
  id: number;
}

function getId<T extends HasId>(item: T): number {
  return item.id;
}

getId({ id: 1, name: "Rahul" }); // ✅`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Length Constraint</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

logLength("Hello");
logLength([1, 2, 3]);`}
        </pre>

        <p className="mt-4"><b>Example 2: Key Constraint (keyof)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Rahul", age: 25 };

getProperty(user, "name"); // ✅
getProperty(user, "email"); // ❌`}
        </pre>

        <p className="mt-4"><b>Example 3: Class Constraint</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Animal {
  name: string = "";
}

function printName<T extends Animal>(obj: T) {
  console.log(obj.name);
}`}
        </pre>

        <p className="mt-4"><b>Example 4: Multiple Constraints</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Name {
  name: string;
}

interface Age {
  age: number;
}

function printUser<T extends Name & Age>(user: T) {
  console.log(user.name, user.age);
}`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Accessing properties may cause errors.</li>
          <li>Uncontrolled generic usage.</li>
          <li>Runtime bugs.</li>
          <li>Loss of type safety.</li>
        </ul>

        <p className="mt-2">
          Constraints ensure safe and controlled generics.
        </p>

      </section>

    </div>
  );
}