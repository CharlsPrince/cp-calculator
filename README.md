# cp-calculator
结构化计算器，支持加法、减法、乘法、除法、求余。

## Use
```
var calculator = new CPCalculator();
var add = calculator.add(12,13,14,15); // 加法
...
```

## Methods
> calculator.add(args);  // 传入参数，计算返回参数之和, 可传入多个参数值。
>
> calculator.sub(args);  // 传入参数，计算返回参数之差，可传入多个参数值，第一个值将作为被减数。
>
> calculator.mul(args);  // 传入参数，计算返回参数之积，可传入多个参数值。
>
> calculator.div(args);  // 传入参数，计算返回参数之商，可传入多个参数值，第一个值将作为被除数。
> 
> calculator.sur(args);  // 传入参数，计算返回参数之余，一般只传两个参数，第一个值将作为被除数。
