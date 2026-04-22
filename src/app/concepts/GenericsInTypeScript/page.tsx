export default function GenericsInTypeScript() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Generics in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Generics
        </h2>

        <p>
          Generics allow you to create reusable components (functions, classes, interfaces)
          that work with different types instead of a single type.
        </p>

        <p className="mt-2">
          They use a placeholder type (like <b>T</b>) which is replaced when the function or class is used.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Generics = Write once, use with any type</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(10);`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Generics
        </h2>

        <ul className="list-disc ml-6">
          <li>To create reusable code.</li>
          <li>To maintain type safety.</li>
          <li>To avoid using <b>any</b>.</li>
          <li>To write flexible and scalable code.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Generics
        </h2>

        <ul className="list-disc ml-6">
          <li>When function works with multiple types.</li>
          <li>When creating reusable libraries.</li>
          <li>When working with dynamic data.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: API Response Handler</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function getData<T>(data: T): T {
  return data;
}

const user = getData<{ name: string }>({ name: "Rahul" });
const count = getData<number>(100);`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Generic Function</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function printValue<T>(value: T): void {
  console.log(value);
}

printValue<string>("Hello");
printValue<number>(123);`}
        </pre>

        <p className="mt-4"><b>Example 2: Generic Array</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b"]);`}
        </pre>

        <p className="mt-4"><b>Example 3: Generic Interface</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`interface Box<T> {
  value: T;
}

const box1: Box<number> = { value: 10 };
const box2: Box<string> = { value: "Hello" };`}
        </pre>

        <p className="mt-4"><b>Example 4: Generic Class</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class DataStore<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}

const store = new DataStore<string>("Hello");`}
        </pre>

        <p className="mt-4"><b>Example 5: Multiple Generics</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function pair<K, V>(key: K, value: V) {
  return { key, value };
}

pair<string, number>("age", 25);`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Code duplication.</li>
          <li>Use of <b>any</b> (loses type safety).</li>
          <li>More bugs.</li>
          <li>Less reusable code.</li>
        </ul>

        <p className="mt-2">
          Generics provide flexibility with type safety.
        </p>

      </section>

    </div>
  );
}