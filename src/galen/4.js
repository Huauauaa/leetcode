// 计算面积
// 绘图机器的绘图初始位置在原点（0，0），机器启动后其绘图笔按下面规则绘制直线

// 1）尝试沿横坐标正向绘制直线，直到给定的终点值E
// 2）期间可通过指令在纵坐标方向进行偏移，并且绘制直线，偏移后按规则绘制直线，指令格式为XoffsetY，即在横坐标X沿纵坐标偏移，offsetY为正数表示正向偏移，为负数时则为负向偏移
// 给定了横坐坐标，终点值E，以及若干条绘制指令，请计算绘制的直线和横坐标轴，以及X=E的直线组成图形的面积

// 输入描述：
// 首行为两个整数N E,表示有N条指令，机器的横坐标重点为E，接下来N行，每行两个整数表示一条绘制指令XoffsetY,用例保证横坐标X以递增排序方式出现；且不会出现相同横坐标X
// 取值范围0<N<=10000
//         0<=X<=E<=20000
//        -10000<=offset<=10000
// 输出描述：一个整数，表示计算所的面积，用例保证，结果范围在0-4294967295内

// 输入：4 10
//       1 1
//       2 1
//       3 1
//       4 -2

// 输出  12
