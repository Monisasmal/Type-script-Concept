export default function ConditionalTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Conditional Types in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Conditional Types
        </h2>

        <p>
          Conditional Types allow you to create types based on a condition.
        </p>

        <p className="mt-2">
          They work similar to JavaScript ternary operator.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Condition ? TrueType : FalseType</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Conditional Types
        </h2>

        <ul className="list-disc ml-6">
          <li>To create dynamic types.</li>
          <li>To build flexible utilities.</li>
          <li>To improve type logic.</li>
          <li>To reduce duplication.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Conditional Types
        </h2>

        <ul className="list-disc ml-6">
          <li>When type depends on another type.</li>
          <li>When building reusable utilities.</li>
          <li>When handling dynamic APIs.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: API Response Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type ApiResponse<T> = T extends string
  ? { message: T }
  : { data: T };

type Res1 = ApiResponse<string>;
type Res2 = ApiResponse<number>;`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Extract Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type ExtractString<T> = T extends string ? T : never;

type Result = ExtractString<string | number>; // string`}
        </pre>

        <p className="mt-4"><b>Example 2: Remove Null</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type NonNullable<T> = T extends null | undefined ? never : T;

type Clean = NonNullable<string | null>;`}
        </pre>

        <p className="mt-4"><b>Example 3: Function Return Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type GetReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

type R = GetReturnType<() => number>;`}
        </pre>

        <p className="mt-4"><b>Example 4: Array Element Type</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<number[]>; // number`}
        </pre>

        <p className="mt-4"><b>Example 5: Boolean Check</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type IsNumber<T> = T extends number ? true : false;

type Check1 = IsNumber<10>;`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Static and rigid types.</li>
          <li>Repeated code.</li>
          <li>Less flexibility.</li>
          <li>Difficult to handle dynamic data.</li>
        </ul>

        <p className="mt-2">
          Conditional types make TypeScript powerful and dynamic.
        </p>

      </section>

    </div>
  );
}