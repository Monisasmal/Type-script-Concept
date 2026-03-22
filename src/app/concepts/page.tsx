import Link from "next/link";

const concept = [
     {name: "What is Type Script?", path:"/concepts/what-is-typescript"},
     {name: "What is Type Annotation?", path:"/concepts/TypeAnnotation"},
     {name: "What is Type Inference?", path:"/concepts/TypeInference"},
     {name: "What is TypeScript Vs JavaScript?", path:"/concepts/TypeScriptVsJavaScript"},
     {name: "What is TypeScript Compiler?", path:"/concepts/TypeScriptCompiler"},
     {name: "What is Primitive Type?", path:"/concepts/PrimitiveTypes"},
     {name: "What is Any Type?", path:"/concepts/AnyType"},
     {name: "What is Unknown Type?", path:"/concepts/UnknownType"},
     {name: "What is Void Type?", path:"/concepts/VoidType"},
     {name: "What is Never Type?", path:"/concepts/NeverType"},
     {name: "What is String Type?", path:"/concepts/StringType"},
     {name: "What is Number Type?", path:"/concepts/NumberType"},
     {name: "What is Boolean Type?", path:"/concepts/BooleanType"},
     {name: "What is Null and Undefined Type?", path:"/concepts/NullandUndefined"},
     {name: "What is Array Type?", path:"/concepts/ArrayTypes"},
     {name: "What is Tuple?", path:"/concepts/Tuple"},
     {name: "What is Enum Type?", path:"/concepts/EnumType"},
     {name: "What is Object Type?", path:"/concepts/ObjectTypes"},
     {name: "What is Function Type Annotation?", path:"/concepts/FunctionTypeAnnotation"},
     {name: "What is Optional Parameters?", path:"/concepts/OptionalParameters"},
     {name: "What is Default Parameters?", path:"/concepts/DefaultParameters"},
     {name: "What is Rest Parameters?", path:"/concepts/RestParameters"},
     {name: "What is Function Return Type?", path:"/concepts/FunctionReturnTypes"},
     {name: "What is Arrow Function?", path:"/concepts/ArrowFunctions"},
     {name: "What is Function Overloading?", path:"/concepts/FunctionOverloading"},
     {name: "What is Union Type?", path:"/concepts/UnionTypes"},
     {name: "What is Intersection Type?", path:"/concepts/IntersectionTypes"},
     {name: "What is Literal Type?", path:"/concepts/LiteralTypes"},
     {name: "What is Type Aliases?", path:"/concepts/TypeAliases"},
     {name: "What is Type Assertions?", path:"/concepts/TypeAssertions"},
     {name: "What is Type Guards?", path:"/concepts/TypeGuards"},
     {name: "What is Type Narrowing?", path:"/concepts/TypeNarrowing"},
     {name: "What is Interface?", path:"/concepts/InterfacesInTypescript"},
     {name: "What is Interface Optional Properties?", path:"/concepts/InterfaceOptionalProperties"},
     {name: "What is Interface Readonly Properties?", path:"/concepts/InterfaceReadonlyProperties"},

];

export default function Concepts(){
    
    return(
        <section>
         <h1 className="text-3xl font-bold mb-6">TypeScript Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3">
        {concept.map(c => (
          <li key={c.name} className="bg-white p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
    )
}