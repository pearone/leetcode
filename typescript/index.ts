/* 类型体操 */

// 提取Promise<T>
type GetValueType<T> = T extends Promise<infer R> ? R : never;
type PromiseType = Promise<number[]>;

type res = GetValueType<PromiseType>;

// Pop
type Pop<T extends unknown[]> = T extends [...infer Rest, infer R]
  ? [...Rest]
  : never;

type res = Pop<[1, 2, 3]>;

// shift
type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest]
  ? [...Rest]
  : never;

type res = Shift<[1, 2, 3]>;

/* trim */
type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\t"
  | "\n"}${infer Rest}`
  ? TrimLeft<Rest>
  : Str;

type res = TrimLeft<"\tabc">;
type res = TrimLeft<"\nabc">;
type res = TrimLeft<"    abc">;

type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\t"
  | "\n"}`
  ? TrimRight<Rest>
  : Str;

type res = TrimRight<"abc\t">;
type res = TrimRight<"abc\n">;
type res = TrimRight<"abc    ">;

type Trim<Str extends string> = TrimRight<TrimLeft<Str>>;

type res = Trim<"   abc   ">;
type res = Trim<"\nabc   ">;
type res = Trim<"\nabc\n">;
type res = Trim<"\nabc\t">;
type res = Trim<"\tabc\t">;

/* replace 单次替换 */
type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : Str;

type res = Replace<"三等功热特发v地方地方保护对方更好的", "地方", "444">;

/* 参数类型 */

type GetParams<Func extends Function> = Func extends (
  ...params: infer Params
) => any
  ? Params
  : never;

// args 类型
type res = GetParams<(a: number, b: boolean) => void>;
type res = GetParams<({ a: number, b: boolean }) => void>;

/* 返回值类型 */

type GetReturnType<Func extends Function> = Func extends (
  ...params: any
) => infer R
  ? R
  : never;
type res = GetReturnType<(a: number, b: boolean) => Promise<number>>;
