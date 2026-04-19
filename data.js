// 中级消防员考试题库
const questionBank = {
    categories: [
        { id: 1, name: "消防基础知识", icon: "📚" },
        { id: 2, name: "建筑消防设施", icon: "🏢" },
        { id: 3, name: "消防法律法规", icon: "📜" },
        { id: 4, name: "火灾预防", icon: "🔥" },
        { id: 5, name: "消防应急", icon: "🚨" }
    ],
    questions: [
        // ==================== 消防基础知识（约40道）====================
        // 燃烧学基础
        {
            id: 1001,
            type: "single",
            question: "燃烧是一种什么反应？",
            options: ["物理反应", "化学反应", "生物反应", "核反应"],
            answer: "B",
            explanation: "燃烧是物质与氧发生的剧烈化学反应，同时发出光和热的现象。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1002,
            type: "single",
            question: "燃烧的三要素包括：可燃物、助燃物和什么？",
            options: ["温度", "火源", "氧气", "催化剂"],
            answer: "B",
            explanation: "燃烧三要素为：可燃物、助燃物（通常为氧气）和火源。三者同时存在并相互作用才能发生燃烧。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1003,
            type: "single",
            question: "燃烧类型中，最容易发生回火的是哪种？",
            options: ["扩散燃烧", "预混燃烧", "分解燃烧", "表面燃烧"],
            answer: "B",
            explanation: "预混燃烧中，火焰传播速度快，容易产生回火现象，在消防工作中需要特别注意。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1004,
            type: "single",
            question: "可燃物质在没有明火作用的情况下发生的燃烧称为？",
            options: ["点燃", "自燃", "闪燃", "爆燃"],
            answer: "B",
            explanation: "自燃是指可燃物质在没有明火作用的情况下，因自身温度升高而发生燃烧的现象。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1005,
            type: "single",
            question: "闪点低于多少摄氏度的液体属于易燃液体？",
            options: ["28℃", "38℃", "48℃", "60℃"],
            answer: "C",
            explanation: "根据消防规范，闪点低于60℃的液体为可燃液体，闪点低于28℃的液体为易燃液体。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1006,
            type: "single",
            question: "爆炸极限是指什么？",
            options: ["爆炸的最大浓度", "爆炸的最低浓度", "可燃物质与空气混合后遇火源能发生爆炸的浓度范围", "物质爆炸的速度"],
            answer: "C",
            explanation: "爆炸极限是指可燃物质与空气混合后，遇火源能发生爆炸的浓度范围，包括最低爆炸极限和最高爆炸极限。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1007,
            type: "single",
            question: "下列哪种气体具有爆炸性？",
            options: ["氮气", "二氧化碳", "甲烷", "氩气"],
            answer: "C",
            explanation: "甲烷是可燃气体，与空气混合在爆炸极限范围内遇明火会发生爆炸。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1008,
            type: "single",
            question: "燃烧过程中产生的火焰属于什么状态？",
            options: ["固体状态", "液体状态", "等离子体状态", "气态"],
            answer: "C",
            explanation: "火焰是燃烧过程中可燃气体达到燃点时形成的等离子体状态，发出光和热。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1009,
            type: "single",
            question: "自燃点是指物质在什么条件下自行着火的最低温度？",
            options: ["有明火存在", "无任何火源", "有催化剂", "高压"],
            answer: "B",
            explanation: "自燃点是指可燃物质与空气混合，在无任何火源情况下达到自行着火的最低温度。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1010,
            type: "single",
            question: "木材、纸张等物质的燃烧属于什么燃烧形式？",
            options: ["蒸发燃烧", "分解燃烧", "表面燃烧", "阴燃"],
            answer: "B",
            explanation: "木材、纸张等固体可燃物受热分解出可燃气体后燃烧，属于分解燃烧。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1011,
            type: "single",
            question: "下列哪种物质燃烧时火焰呈蓝色？",
            options: ["木材", "煤炭", "天然气", "汽油"],
            answer: "C",
            explanation: "天然气主要成分为甲烷，燃烧时火焰呈蓝色，燃烧充分，污染小。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1012,
            type: "single",
            question: "燃烧热值是指什么？",
            options: ["燃烧时的最高温度", "单位质量可燃物完全燃烧放出的热量", "燃烧所需的时间", "火焰的高度"],
            answer: "B",
            explanation: "燃烧热值是指单位质量的可燃物质完全燃烧时所放出的热量，单位为kJ/kg。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1013,
            type: "single",
            question: "乙醚的闪点为-45℃，属于什么类危险品？",
            options: ["低闪点易燃液体", "中闪点易燃液体", "高闪点易燃液体", "可燃液体"],
            answer: "A",
            explanation: "闪点低于-18℃的液体属于低闪点易燃液体，乙醚闪点为-45℃，属于此类。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1014,
            type: "single",
            question: "粉尘爆炸的必要条件不包括哪一项？",
            options: ["粉尘本身可燃", "粉尘悬浮在空气中达到一定浓度", "有足够的氧气", "高温环境"],
            answer: "D",
            explanation: "粉尘爆炸需要：粉尘可燃、悬浮浓度达标、氧气充足、有点火源。高温不是必要条件。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1015,
            type: "single",
            question: "热传导是热量通过什么方式传递？",
            options: ["物体相对运动", "物体直接接触", "电磁波", "气体流动"],
            answer: "B",
            explanation: "热传导是热量通过物体直接接触从高温部分向低温部分传递的方式。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1016,
            type: "single",
            question: "热对流是指什么？",
            options: ["热量通过物体直接传递", "热量通过流体流动传递", "热量通过电磁波传递", "热量通过气体扩散传递"],
            answer: "B",
            explanation: "热对流是指热量通过流体（液体或气体）的流动进行传递的过程。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1017,
            type: "single",
            question: "热辐射是以什么形式传递热量？",
            options: ["分子振动", "电磁波", "气体对流", "液体蒸发"],
            answer: "B",
            explanation: "热辐射是通过电磁波形式传递热量，不需要介质，是火灾中重要的蔓延方式。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1018,
            type: "single",
            question: "燃烧产物的危害性主要体现在哪方面？",
            options: ["增加空气密度", "产生有毒有害气体", "降低温度", "减少氧气含量"],
            answer: "B",
            explanation: "燃烧产物主要危害是产生一氧化碳、氰化氢等有毒有害气体，威胁人员生命安全。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1019,
            type: "single",
            question: "烟气的危害不包括哪一项？",
            options: ["毒害性", "窒息性", "减光性", "防潮性"],
            answer: "D",
            explanation: "烟气具有毒害性、窒息性、减光性等危害，防潮性不是烟气的危害。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1020,
            type: "single",
            question: "火灾中防止烟气危害的最佳方法是？",
            options: ["大声呼救", "用湿毛巾捂住口鼻", "奔跑逃离", "原地等待救援"],
            answer: "B",
            explanation: "用湿毛巾捂住口鼻可以过滤烟尘，减少有毒气体吸入，是防止烟气危害的有效方法。",
            module: "消防基础知识",
            categoryId: 1
        },
        // 火灾分类
        {
            id: 1021,
            type: "single",
            question: "按燃烧对象分类，火灾分为哪几类？",
            options: ["2类", "3类", "4类", "6类"],
            answer: "D",
            explanation: "根据GB/T 4968-2008，火灾分为A、B、C、D、E、F六类，分别对应固体、液体、气体、金属、带电体、烹饪物火灾。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1022,
            type: "single",
            question: "A类火灾是指？",
            options: ["液体火灾", "气体火灾", "固体火灾", "金属火灾"],
            answer: "C",
            explanation: "A类火灾是指固体物质火灾，如木材、纸张、棉布等燃烧形成的火灾。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1023,
            type: "single",
            question: "B类火灾是指？",
            options: ["固体火灾", "液体火灾", "气体火灾", "电气火灾"],
            answer: "B",
            explanation: "B类火灾是指液体火灾和可熔化的固体物质火灾，如汽油、沥青、石蜡等。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1024,
            type: "single",
            question: "C类火灾是指？",
            options: ["固体火灾", "液体火灾", "气体火灾", "金属火灾"],
            answer: "C",
            explanation: "C类火灾是指气体火灾，如天然气、甲烷、氢气等可燃气体的火灾。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1025,
            type: "single",
            question: "D类火灾是指？",
            options: ["气体火灾", "电气火灾", "金属火灾", "液体火灾"],
            answer: "C",
            explanation: "D类火灾是指金属火灾，如钾、钠、镁、铝等金属燃烧形成的火灾。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1026,
            type: "single",
            question: "E类火灾是指？",
            options: ["固体火灾", "液体火灾", "带电火灾", "金属火灾"],
            answer: "C",
            explanation: "E类火灾是指带电火灾，即物体带电燃烧形成的火灾，如电气设备、线路等。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1027,
            type: "single",
            question: "F类火灾是指？",
            options: ["气体火灾", "液体火灾", "烹饪火灾", "金属火灾"],
            answer: "C",
            explanation: "F类火灾是指烹饪器具内烹饪物的火灾，如动植物油脂燃烧形成的火灾。",
            module: "消防基础知识",
            categoryId: 1
        },
        // 灭火原理
        {
            id: 1028,
            type: "single",
            question: "灭火的基本原理不包括哪一项？",
            options: ["冷却", "窒息", "隔离", "催化"],
            answer: "D",
            explanation: "灭火基本原理包括冷却法、窒息法、隔离法、抑制法，催化不是灭火原理。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1029,
            type: "single",
            question: "冷却灭火法的原理是什么？",
            options: ["隔绝空气", "降低温度到燃点以下", "移除可燃物", "中断燃烧链式反应"],
            answer: "B",
            explanation: "冷却灭火法是通过水等灭火剂吸收热量，使燃烧物温度降低到燃点以下而停止燃烧。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1030,
            type: "single",
            question: "窒息灭火法的原理是什么？",
            options: ["降低温度", "隔绝空气中的氧气", "移除可燃物", "抑制自由基"],
            answer: "B",
            explanation: "窒息灭火法是通过排除或稀释空气中的氧气，使燃烧因缺氧而终止。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1031,
            type: "single",
            question: "隔离灭火法的原理是什么？",
            options: ["降低温度", "隔绝氧气", "移除或隔离可燃物", "抑制燃烧链式反应"],
            answer: "C",
            explanation: "隔离灭火法是将可燃物与引火源隔离，阻止燃烧蔓延扩大。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1032,
            type: "single",
            question: "抑制灭火法的原理是什么？",
            options: ["降低温度", "隔绝氧气", "移除可燃物", "中断燃烧链式反应"],
            answer: "D",
            explanation: "抑制灭火法是通过化学抑制剂中断燃烧的链式反应，使火焰熄灭。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1033,
            type: "multi",
            question: "以下哪些属于火灾蔓延的途径？",
            options: ["直接燃烧", "热传导", "热对流", "热辐射"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾蔓延主要通过直接燃烧、热传导、热对流和热辐射四种方式进行。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1034,
            type: "single",
            question: "灭火器灭火的基本原理属于哪一种？",
            options: ["冷却法", "窒息法", "隔离法", "抑制法"],
            answer: "B",
            explanation: "灭火器喷射的灭火剂主要通过隔绝空气（氧气）使燃烧窒息而熄灭。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1035,
            type: "single",
            question: "水灭火的主要原理是什么？",
            options: ["隔离", "窒息和冷却", "抑制", "隔离和抑制"],
            answer: "B",
            explanation: "水灭火主要通过汽化吸热实现冷却，同时水蒸气稀释空气实现窒息。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1036,
            type: "single",
            question: "干粉灭火器主要通过什么原理灭火？",
            options: ["冷却", "窒息", "抑制", "隔离"],
            answer: "C",
            explanation: "干粉灭火器喷射的干粉粉末覆盖可燃物，通过抑制燃烧链式反应灭火。",
            module: "消防基础知识",
            categoryId: 1
        },
        // 建筑防火
        {
            id: 1037,
            type: "single",
            question: "建筑物的耐火等级分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "C",
            explanation: "根据建筑构件的燃烧性能和耐火极限，建筑耐火等级分为一、二、三、四级。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1038,
            type: "single",
            question: "防火墙的耐火极限不应小于多少小时？",
            options: ["1h", "2h", "3h", "4h"],
            answer: "C",
            explanation: "防火墙的耐火极限不应小于3.0h，以阻止火势蔓延扩大。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1039,
            type: "single",
            question: "防火门按耐火极限可分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "B",
            explanation: "防火门按耐火极限分为甲级（1.5h）、乙级（1.0h）、丙级（0.5h）三个等级。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1040,
            type: "single",
            question: "防火间距是指什么？",
            options: ["建筑物到道路的距离", "两栋建筑物之间保持的安全距离", "建筑物到消防站的距离", "室内到室外的距离"],
            answer: "B",
            explanation: "防火间距是指相邻两栋建筑物之间，保持的足以防止火灾蔓延的安全距离。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1041,
            type: "single",
            question: "防火分区的最大允许面积与什么因素有关？",
            options: ["建筑高度和耐火等级", "建筑面积", "建筑层数", "投资规模"],
            answer: "A",
            explanation: "防火分区的最大允许面积根据建筑耐火等级和高度确定，高度越高、耐火等级越低，面积越小。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1042,
            type: "single",
            question: "防烟分区的作用是什么？",
            options: ["阻止火势蔓延", "阻挡烟气蔓延", "分隔区域", "防水漫延"],
            answer: "B",
            explanation: "防烟分区是通过挡烟设施阻挡烟气在建筑内水平蔓延，为人员疏散争取时间。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1043,
            type: "single",
            question: "疏散走道的净宽度不应小于多少米？",
            options: ["0.8m", "1.1m", "1.5m", "2.0m"],
            answer: "C",
            explanation: "疏散走道和疏散楼梯的净宽度不应小于1.5m，以保证人员安全疏散。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1044,
            type: "single",
            question: "消防车道的净宽度和净空高度不应小于多少米？",
            options: ["3m", "4m", "5m", "6m"],
            answer: "B",
            explanation: "消防车道的净宽度和净空高度均不应小于4.0m，以保证消防车正常通行。",
            module: "消防基础知识",
            categoryId: 1
        },
        {
            id: 1045,
            type: "single",
            question: "消防车道的转弯半径一般不应小于多少米？",
            options: ["6m", "9m", "12m", "15m"],
            answer: "B",
            explanation: "消防车道的转弯半径一般不应小于9米，以便大型消防车通行。",
            module: "消防基础知识",
            categoryId: 1
        },
        // ==================== 建筑消防设施（约60道）====================
        // 火灾自动报警系统
        {
            id: 2001,
            type: "single",
            question: "火灾自动报警系统由哪几部分组成？",
            options: ["探测器、控制器", "探测器、控制器、手动报警按钮", "探测器、控制器、手动报警按钮、警报装置", "探测器、控制器、联动系统"],
            answer: "C",
            explanation: "火灾自动报警系统由火灾探测器、手动报警按钮、火灾报警控制器、警报装置等组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2002,
            type: "single",
            question: "感温探测器适用于什么场所？",
            options: ["正常温度变化较大的场所", "正常温度变化较小的场所", "可能发生阴燃的场所", "所有场所"],
            answer: "B",
            explanation: "感温探测器适用于正常温度变化较小的场所，如会议室、商场等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2003,
            type: "single",
            question: "感烟探测器适用于什么场所？",
            options: ["正常情况下有烟雾的场所", "正常情况下无烟雾的场所", "温度过高的场所", "湿度大的场所"],
            answer: "B",
            explanation: "感烟探测器适用于正常情况下无烟雾但发生火灾会产生烟雾的场所，如办公室、走廊等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2004,
            type: "single",
            question: "离子感烟探测器的工作原理是什么？",
            options: ["利用光电效应", "利用电离室原理", "利用热敏元件", "利用红外线"],
            answer: "B",
            explanation: "离子感烟探测器利用放射性物质使电离室内的空气电离，烟雾进入时改变电离电流而报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2005,
            type: "single",
            question: "光电感烟探测器的工作原理是什么？",
            options: ["利用电离原理", "利用光电效应", "利用热效应", "利用声波"],
            answer: "B",
            explanation: "光电感烟探测器利用烟雾对红外光的散射作用，使光敏元件接收信号变化而报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2006,
            type: "single",
            question: "线型感温探测器适用于什么场所？",
            options: ["点型探测器适用的场所", "大空间场所、电气电缆场所", "住宅", "办公室"],
            answer: "B",
            explanation: "线型感温探测器适用于大空间场所、输送带、电缆隧道等需要线型探测的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2007,
            type: "single",
            question: "手动火灾报警按钮的设置要求是？",
            options: ["每个防火分区至少1个", "每个报警区域至少1个", "每个楼层至少1个", "任意位置"],
            answer: "C",
            explanation: "每个楼层至少设置一个手动火灾报警按钮，从任一点到最近按钮的距离不应大于30m。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2008,
            type: "single",
            question: "手动火灾报警按钮的复位方法是？",
            options: ["自动复位", "更换新按钮", "专用工具复位", "水冲洗"],
            answer: "C",
            explanation: "手动火灾报警按钮需要使用专用工具（有机玻璃）进行复位，复位后火灾报警控制器应自动恢复。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2009,
            type: "single",
            question: "火灾报警控制器按结构形式可分为哪两种？",
            options: ["台式和壁挂式", "柜式和台式", "壁挂式和柜式", "便携式和固定式"],
            answer: "C",
            explanation: "火灾报警控制器按结构形式分为壁挂式和柜式两种，大型系统通常采用柜式。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2010,
            type: "single",
            question: "火灾报警控制器的备用电源作用是什么？",
            options: ["正常供电", "主电源断电时维持控制器工作", "为探测器供电", "为联动设备供电"],
            answer: "B",
            explanation: "备用电源在主电源断电时维持控制器正常工作，确保系统持续运行。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2011,
            type: "single",
            question: "火灾自动报警系统接地电阻值不应大于多少欧姆？",
            options: ["1Ω", "4Ω", "10Ω", "20Ω"],
            answer: "B",
            explanation: "火灾自动报警系统采用联合接地时，接地电阻不应大于4Ω。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2012,
            type: "single",
            question: "火灾报警控制器接收到探测器报警后应在多少秒内发出报警声光信号？",
            options: ["5秒", "10秒", "15秒", "30秒"],
            answer: "B",
            explanation: "火灾报警控制器在收到探测器报警信号后，应在10秒内发出报警声光信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2013,
            type: "multi",
            question: "以下哪些是火灾自动报警系统的组成部分？",
            options: ["火灾探测器", "火灾报警控制器", "消防广播", "手动报警按钮"],
            answer: ["A", "B", "D"],
            explanation: "火灾自动报警系统由火灾探测器、手动报警按钮、火灾报警控制器等组成，消防广播属于消防联动控制系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2014,
            type: "single",
            question: "火灾报警控制器显示\"系统故障\"时，应首先？",
            options: ["关机重启", "检查主电源", "检查故障点并排除", "通知维保单位"],
            answer: "C",
            explanation: "发现系统故障时应首先检查故障点，排查短路、断路等问题，无法解决时通知维保单位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2015,
            type: "single",
            question: "火灾报警控制器的屏蔽功能作用是什么？",
            options: ["关闭探测器", "暂时隔离故障设备", "清除报警记录", "重启系统"],
            answer: "B",
            explanation: "屏蔽功能可以暂时隔离故障设备，使系统在其他设备正常报警的情况下继续运行。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 自动喷水灭火系统
        {
            id: 2016,
            type: "single",
            question: "自动喷水灭火系统属于哪类灭火系统？",
            options: ["气体灭火系统", "泡沫灭火系统", "水灭火系统", "干粉灭火系统"],
            answer: "C",
            explanation: "自动喷水灭火系统属于水灭火系统，是应用最广泛的固定灭火系统之一。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2017,
            type: "single",
            question: "湿式自动喷水灭火系统的特点是？",
            options: ["管道内充满有压气体", "管道内充满有压水", "管道内无水", "采用预作用方式"],
            answer: "B",
            explanation: "湿式系统管道内始终充满有压水，火灾发生时闭式喷头破裂出水灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2018,
            type: "single",
            question: "干式自动喷水灭火系统的特点是？",
            options: ["管道内充满有压水", "管道内充满有压气体", "管道内无水", "采用开式喷头"],
            answer: "B",
            explanation: "干式系统管道内充满有压气体，火灾发生时喷头破裂排气出水灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2019,
            type: "single",
            question: "自动喷水灭火系统中，水喷淋动作温度一般为多少摄氏度？",
            options: ["57℃", "68℃", "79℃", "93℃"],
            answer: "B",
            explanation: "闭式喷头的动作温度通常为68℃（红色）或79℃（黄色），这是根据保护场所的火灾特点设定的。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2020,
            type: "single",
            question: "闭式喷头按动作温度可分为几种？",
            options: ["2种", "3种", "4种", "5种"],
            answer: "B",
            explanation: "闭式喷头按动作温度分为红色（68℃）、黄色（79℃）、蓝色（93℃）三种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2021,
            type: "single",
            question: "快速响应喷头适用于什么场所？",
            options: ["普通商场", "仓库", "人员密集场所", "工业厂房"],
            answer: "C",
            explanation: "快速响应喷头动作时间短，适用于人员密集场所，如商场、影院等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2022,
            type: "single",
            question: "边墙型喷头适用于什么场所？",
            options: ["湿式系统", "干式系统", "安装空间受限的场所", "仓库"],
            answer: "C",
            explanation: "边墙型喷头安装在墙壁侧面，适用于安装空间受限或美观要求高的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2023,
            type: "single",
            question: "报警阀组的作用是什么？",
            options: ["过滤水", "报警", "控制水压和启动喷头", "储存水"],
            answer: "C",
            explanation: "报警阀组是自动喷水灭火系统的核心部件，控制水压、监测水流动和启动报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2024,
            type: "single",
            question: "湿式报警阀组的工作原理是什么？",
            options: ["利用气压控制", "利用水压控制", "利用温度控制", "利用时间控制"],
            answer: "B",
            explanation: "湿式报警阀利用水压控制，当喷头动作出水时，阀瓣打开，水流入延迟器触发报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2025,
            type: "single",
            question: "水流指示器的作用是什么？",
            options: ["报警", "显示火灾位置", "监测管道水流动", "控制水泵"],
            answer: "C",
            explanation: "水流指示器安装在每个楼层或分区的水平配水管上，当有水流动时发出信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2026,
            type: "single",
            question: "信号阀的作用是什么？",
            options: ["普通阀门", "显示开闭状态", "自动控制", "减压"],
            answer: "B",
            explanation: "信号阀具有阀位指示装置，可向控制中心显示阀门的开闭状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2027,
            type: "single",
            question: "末端试水装置的作用是什么？",
            options: ["排水", "测试系统性能", "报警", "补水"],
            answer: "B",
            explanation: "末端试水装置用于测试系统能否正常启动、压力是否达标、报警是否正常。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2028,
            type: "single",
            question: "末端试水装置的排水管径不应小于多少毫米？",
            options: ["25mm", "50mm", "75mm", "100mm"],
            answer: "C",
            explanation: "末端试水装置的排水管径不应小于75mm，以确保排水畅通。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2029,
            type: "single",
            question: "自动喷水灭火系统消防水泵的启动方式有？",
            options: ["仅自动启动", "仅手动启动", "自动和手动启动", "仅远程启动"],
            answer: "C",
            explanation: "消防水泵应具备自动和手动启动功能，确保在任何情况下都能及时启动供水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2030,
            type: "single",
            question: "自动喷水灭火系统水泵的备用电源切换时间不应大于多少秒？",
            options: ["10秒", "30秒", "60秒", "120秒"],
            answer: "B",
            explanation: "自动喷水灭火系统水泵的备用电源切换时间不应大于30秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 气体灭火系统
        {
            id: 2031,
            type: "single",
            question: "气体灭火系统主要适用于什么场所？",
            options: ["一般场所", "有人员场所", "忌水场所、重要档案室", "户外场所"],
            answer: "C",
            explanation: "气体灭火系统适用于不能用水灭火的场所，如计算机房、配电房、档案室等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2032,
            type: "single",
            question: "七氟丙烷灭火系统属于什么类型的灭火系统？",
            options: ["惰性气体灭火系统", "卤代烷灭火系统", "高压二氧化碳系统", "热气溶胶系统"],
            answer: "B",
            explanation: "七氟丙烷是一种洁净气体灭火剂，属于卤代烷替代类灭火系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2033,
            type: "single",
            question: "IG541混合气体灭火系统由哪些气体组成？",
            options: ["氮气、氩气、二氧化碳", "氮气、氧气、二氧化碳", "氦气、氩气、氮气", "氮气、氩气、氧气"],
            answer: "A",
            explanation: "IG541由52%氮气、40%氩气、8%二氧化碳组成，混合气体无色无味无污染。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2034,
            type: "single",
            question: "气体灭火系统的启动方式有？",
            options: ["仅自动", "仅手动", "自动、手动和机械应急操作", "仅机械应急"],
            answer: "C",
            explanation: "气体灭火系统应具备自动、手动和机械应急三种启动方式，确保可靠启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2035,
            type: "single",
            question: "气体灭火系统的防护区应在什么情况下设置泄压口？",
            options: ["所有防护区", "七氟丙烷防护区", " IG541防护区", "高压二氧化碳防护区"],
            answer: "B",
            explanation: "七氟丙烷灭火时防护区内气压增加，应设置泄压口； IG541和二氧化碳一般不需设。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2036,
            type: "single",
            question: "气体灭火系统防护区的最低环境温度不应低于多少摄氏度？",
            options: ["-10℃", "0℃", "10℃", "20℃"],
            answer: "A",
            explanation: "气体灭火系统防护区的最低环境温度不应低于-10℃，以确保灭火剂正常释放。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2037,
            type: "single",
            question: "气体灭火系统防护区的围护结构耐火极限不应小于多少小时？",
            options: ["0.25h", "0.5h", "0.75h", "1.0h"],
            answer: "B",
            explanation: "气体灭火系统防护区的围护结构耐火极限不应小于0.5h。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2038,
            type: "single",
            question: "气体灭火系统防护区的门应向什么方向开启？",
            options: ["向内开启", "向外开启", "无所谓方向", "常开状态"],
            answer: "B",
            explanation: "防护区的门应向外开启，以确保人员紧急疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 泡沫灭火系统
        {
            id: 2039,
            type: "single",
            question: "泡沫灭火系统主要由哪几部分组成？",
            options: ["泡沫灭火器", "泡沫比例混合器、泡沫产生器、管道", "仅泡沫产生器", "水泵和泡沫管"],
            answer: "B",
            explanation: "泡沫灭火系统由泡沫比例混合器、泡沫产生器、泡沫液储罐、管道等组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2040,
            type: "single",
            question: "泡沫灭火系统按喷射方式分为哪两种？",
            options: ["固定式和半固定式", "液上喷射和液下喷射", "储罐式和管道式", "移动式和固定式"],
            answer: "B",
            explanation: "泡沫灭火系统按喷射方式分为液上喷射和液下喷射两种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2041,
            type: "single",
            question: "蛋白泡沫灭火剂主要用于扑救什么火灾？",
            options: ["醇类火灾", "油类火灾", "气体火灾", "电气火灾"],
            answer: "B",
            explanation: "蛋白泡沫灭火剂主要用于扑救油类火灾，不能用于醇类等水溶性液体火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2042,
            type: "single",
            question: "抗溶性泡沫灭火剂适用于扑救什么火灾？",
            options: ["油类火灾", "醇类火灾", "气体火灾", "金属火灾"],
            answer: "B",
            explanation: "抗溶性泡沫灭火剂可以抵抗醇、酯、醚等水溶性溶剂，适用于此类液体火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2043,
            type: "single",
            question: "泡沫灭火系统扑救B类火灾时，泡沫液的混合比例一般为多少？",
            options: ["1%", "3%", "6%", "10%"],
            answer: "C",
            explanation: "泡沫液与水的混合比例通常为3%或6%，根据泡沫液类型和火灾类别确定。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防供水设施
        {
            id: 2044,
            type: "single",
            question: "室内消火栓系统主要由哪几部分组成？",
            options: ["消火栓箱、水带、水枪", "消火栓箱、水带、水枪、报警按钮", "管道、阀门、消火栓箱", "水泵、水箱、管道、阀门"],
            answer: "A",
            explanation: "室内消火栓系统由消火栓箱、水带、水枪组成，完整的系统还包括管道、水泵、水箱等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2045,
            type: "single",
            question: "室内消火栓的栓口直径不应小于多少毫米？",
            options: ["40mm", "50mm", "65mm", "80mm"],
            answer: "C",
            explanation: "室内消火栓的栓口直径不应小于65mm，以满足消防水枪的连接要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2046,
            type: "single",
            question: "消防水带的标准长度为多少米？",
            options: ["10米", "15米", "20米", "25米"],
            answer: "D",
            explanation: "消防水带的标准长度为25米，使用时应将水带展开避免扭曲。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2047,
            type: "single",
            question: "消防水带接口的公称直径为多少毫米？",
            options: ["25mm", "40mm", "50mm", "65mm"],
            answer: "D",
            explanation: "消防水带接口的公称直径为65mm，与室内消火栓栓口直径一致。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2048,
            type: "single",
            question: "直流开花水枪用于什么场所？",
            options: ["一般灭火", "喷雾灭火", "既要直流又要喷雾", "掩护射水"],
            answer: "C",
            explanation: "直流开花水枪可同时或分别喷出直流和喷雾水流，适用于多种灭火场合。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2049,
            type: "single",
            question: "消火栓按钮启泵后，现场如何停泵？",
            options: ["按下同一按钮", "关闭管网阀门", "在泵房控制柜上停泵", "切断电源"],
            answer: "C",
            explanation: "消火栓按钮启泵后，应在泵房控制柜上手动停泵，切断电源后水泵才会停止运行。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2050,
            type: "single",
            question: "消防水泵应采用什么启动方式？",
            options: ["仅自动启动", "仅手动启动", "自动和手动启动", "异地启动"],
            answer: "C",
            explanation: "消防水泵应具备自动和手动启动功能，确保在任何情况下都能及时启动供水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2051,
            type: "single",
            question: "消防水泵的额定流量不应小于多少升/秒？",
            options: ["5L/s", "10L/s", "15L/s", "20L/s"],
            answer: "B",
            explanation: "建筑消火栓系统的消防水泵额定流量不应小于10L/s，以保证灭火供水需求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2052,
            type: "single",
            question: "消防水泵的额定扬程应满足什么要求？",
            options: ["满足最不利点水枪充实水柱要求", "满足最有利点水压要求", "满足水泵并联要求", "满足经济运行要求"],
            answer: "A",
            explanation: "消防水泵的额定扬程应满足最不利点消火栓水枪充实水柱不小于10米的要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2053,
            type: "single",
            question: "消防水箱的有效容积应不小于多少立方米？",
            options: ["6m³", "12m³", "18m³", "36m³"],
            answer: "A",
            explanation: "一类高层建筑消防水箱有效容积不应小于18m³，二类高层建筑不应小于12m³。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2054,
            type: "single",
            question: "消防水箱的设置高度应满足什么要求？",
            options: ["任意高度", "最不利点静水压力不低于0.15MPa", "最不利点静水压力不低于0.07MPa", "与建筑同高"],
            answer: "C",
            explanation: "消防水箱应设置在建筑最高处，其最低水位应满足最不利点静水压力不低于0.07MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2055,
            type: "single",
            question: "稳压泵的启动压力应高于消防主泵启动压力多少MPa？",
            options: ["0.01~0.02MPa", "0.05~0.10MPa", "0.15~0.20MPa", "0.20~0.25MPa"],
            answer: "B",
            explanation: "稳压泵的启动压力应高于消防主泵启动压力0.05~0.10MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 防排烟系统
        {
            id: 2056,
            type: "single",
            question: "防排烟系统的主要作用是什么？",
            options: ["输送新鲜空气", "排除烟气和热量", "调节温度", "美观装饰"],
            answer: "B",
            explanation: "防排烟系统的主要作用是在火灾时排除烟气和热量，为人员疏散和灭火创造条件。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2057,
            type: "single",
            question: "机械排烟系统主要由哪几部分组成？",
            options: ["送风机、风管", "排烟风机、风管、排烟口", "风阀、风管", "风机、风管、防火阀"],
            answer: "B",
            explanation: "机械排烟系统由排烟风机、风管、排烟口及控制系统组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2058,
            type: "single",
            question: "自然排烟的方式有哪两种？",
            options: ["机械排烟、自然通风", "自然排烟口排烟、竖井排烟", "正压排烟、负压排烟", "上排烟、下排烟"],
            answer: "B",
            explanation: "自然排烟包括利用排烟口和利用竖井两种方式，通过热压和风压实现排烟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2059,
            type: "single",
            question: "排烟口与附近安全出口的水平距离不应小于多少米？",
            options: ["1.0m", "1.5m", "2.0m", "3.0m"],
            answer: "B",
            explanation: "排烟口与附近安全出口的水平距离不应小于1.5m，确保安全疏散不受影响。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2060,
            type: "single",
            question: "机械加压送风系统的作用是什么？",
            options: ["排除烟气", "为疏散通道提供正压", "为房间送风", "降低温度"],
            answer: "B",
            explanation: "机械加压送风系统通过向疏散楼梯间、前室等部位送风，形成正压，阻止烟气入侵。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2061,
            type: "single",
            question: "机械加压送风系统的送风口设置在哪里？",
            options: ["走廊", "房间", "楼梯间和前室", "机房"],
            answer: "C",
            explanation: "机械加压送风系统的送风口设置在楼梯间和前室，保持疏散通道的正压状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2062,
            type: "single",
            question: "排烟防火阀的动作温度是多少摄氏度？",
            options: ["68℃", "70℃", "280℃", "180℃"],
            answer: "C",
            explanation: "排烟防火阀在排烟管道上设置，动作温度为280℃，火灾时自动关闭防止火势蔓延。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2063,
            type: "single",
            question: "防火阀的动作温度是多少摄氏度？",
            options: ["68℃", "70℃", "280℃", "180℃"],
            answer: "B",
            explanation: "防火阀安装在通风、空调管道上，动作温度为70℃，火灾时自动关闭。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防应急照明和疏散指示系统
        {
            id: 2064,
            type: "single",
            question: "消防应急照明灯具的照度要求是什么？",
            options: ["不低于0.5勒克斯", "不低于1勒克斯", "不低于5勒克斯", "不低于10勒克斯"],
            answer: "B",
            explanation: "消防应急照明灯具的地面水平照度不低于1勒克斯，确保人员在疏散时能看清道路。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2065,
            type: "single",
            question: "疏散指示标志灯的间距不应大于多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "B",
            explanation: "疏散指示标志灯的间距不应大于10米，以确保疏散人员能看清方向。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2066,
            type: "single",
            question: "消防应急照明灯具的备用照明时间不应少于多少分钟？",
            options: ["30分钟", "60分钟", "90分钟", "120分钟"],
            answer: "C",
            explanation: "消防应急照明灯具的备用照明时间不应少于90分钟，保证人员疏散时间。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2067,
            type: "single",
            question: "疏散指示标志灯安装在疏散通道的什么位置？",
            options: ["距地面0.5~1.0米", "距地面1.0~1.5米", "距地面2.0~2.5米", "无要求"],
            answer: "C",
            explanation: "疏散指示标志灯安装在疏散通道两侧，距地面2.0~2.5米，便于人员观察。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2068,
            type: "single",
            question: "消防应急标志灯具的颜色规定中，安全出口标志是什么颜色？",
            options: ["红色", "绿色", "蓝色", "黄色"],
            answer: "B",
            explanation: "消防应急标志灯具中，安全出口标志为绿色，疏散指示标志为绿色或白色。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防广播
        {
            id: 2069,
            type: "single",
            question: "消防广播系统的主要作用是什么？",
            options: ["播放音乐", "火灾时引导人员疏散", "日常通知", "播放广告"],
            answer: "B",
            explanation: "消防广播系统在火灾时播放疏散引导信息，提醒人员安全疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2070,
            type: "single",
            question: "消防广播系统应与火灾报警系统实现什么联动？",
            options: ["报警联动", "确认火灾后联动", "手动联动", "定时联动"],
            answer: "B",
            explanation: "消防广播应在确认火灾后联动启动，通过控制器自动或手动控制广播疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2071,
            type: "single",
            question: "消防广播的声压级应大于多少分贝？",
            options: ["60dB", "75dB", "85dB", "100dB"],
            answer: "C",
            explanation: "消防广播的声压级应大于85dB，以确保在火灾噪声环境下能清晰听到。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2072,
            type: "single",
            question: "客房内设置的消防广播扬声器功率一般为多少瓦？",
            options: ["1W", "3W", "5W", "10W"],
            answer: "A",
            explanation: "客房内设置的消防广播扬声器功率一般为1W，满足客房内收听需求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 防火门监控系统
        {
            id: 2073,
            type: "single",
            question: "防火门监控器的作用是什么？",
            options: ["控制防火门开关", "监测防火门状态", "记录防火门信息", "以上都是"],
            answer: "D",
            explanation: "防火门监控器用于监测和控制防火门的状态，包括开关控制、状态监测和记录。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2074,
            type: "single",
            question: "常开防火门平时应处于什么状态？",
            options: ["常开状态", "常闭状态", "无所谓状态", "报警状态"],
            answer: "A",
            explanation: "常开防火门在日常保持常开状态，火灾时自动或手动关闭，起到防火分隔作用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2075,
            type: "single",
            question: "防火门监控器应安装在什么位置？",
            options: ["防火门附近", "消防控制室或值班室", "走廊", "楼梯间"],
            answer: "B",
            explanation: "防火门监控器应安装在消防控制室或值班室，便于集中监控管理。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防电梯
        {
            id: 2076,
            type: "single",
            question: "火灾时消防电梯的使用原则是？",
            options: ["优先使用", "禁止使用", "视情况使用", "无要求"],
            answer: "B",
            explanation: "火灾时电梯井易窜烟气，消防电梯应停止使用，人员通过楼梯疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2077,
            type: "single",
            question: "消防电梯的排水井容积不应小于多少立方米？",
            options: ["1m³", "2m³", "3m³", "5m³"],
            answer: "B",
            explanation: "消防电梯的排水井容积不应小于2m³，用于排除电梯井内的积水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2078,
            type: "single",
            question: "消防电梯从首层到顶层的运行时间不应大于多少秒？",
            options: ["30秒", "45秒", "60秒", "90秒"],
            answer: "C",
            explanation: "消防电梯从首层到顶层的运行时间不应大于60秒，保证紧急情况下快速运输。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2079,
            type: "single",
            question: "消防电梯应具备什么功能？",
            options: ["只具备基本功能", "消防迫降功能", "消防迫降和电梯控制功能", "无特殊要求"],
            answer: "C",
            explanation: "消防电梯应具备消防迫降功能和电梯控制功能，火灾时自动迫降至首层供消防使用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 2080,
            type: "single",
            question: "消防电梯的供电要求是什么？",
            options: ["普通供电", "双重电源供电", "不间断电源", "无所谓"],
            answer: "B",
            explanation: "消防电梯应采用双重电源供电，确保火灾时主电源切断后仍有电源供电。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // ==================== 消防法律法规（约40道）====================
        {
            id: 3001,
            type: "single",
            question: "根据《消防法》，任何单位和个人都有维护消防安全、保护消防设施、预防火灾、报告火警的义务。",
            options: ["正确", "错误"],
            answer: "A",
            explanation: "《消防法》第五条规定，任何单位和个人都有维护消防安全、保护消防设施、预防火灾、报告火警的义务。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3002,
            type: "single",
            question: "《消防法》明确规定消防工作方针是什么？",
            options: ["预防为主、防消结合", "安全第一、预防为主", "防消结合、安全第一", "预防为主、安全第一"],
            answer: "A",
            explanation: "《消防法》第二条规定，消防工作贯彻预防为主、防消结合的方针。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3003,
            type: "single",
            question: "根据《消防法》，哪些单位应当建立单位消防安全责任制？",
            options: ["所有单位", "机关、团体、企业、事业等单位", "消防安全重点单位", "大型企业"],
            answer: "B",
            explanation: "《消防法》第十六条规定，机关、团体、企业、事业等单位应当落实消防安全责任制。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3004,
            type: "single",
            question: "消防安全重点单位应当确定一名消防安全工作负责人作为消防安全管理人。",
            options: ["正确", "错误"],
            answer: "A",
            explanation: "消防安全重点单位应当确定消防安全管理人，负责组织日常消防安全管理工作。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3005,
            type: "single",
            question: "重点防火单位应当对什么人员进行消防安全培训？",
            options: ["仅消防安全责任人", "仅消防安全管理人", "所有从业人员", "仅消防控制室值班人员"],
            answer: "C",
            explanation: "重点防火单位应当对所有从业人员进行消防安全培训，确保全员掌握基本的消防知识和技能。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3006,
            type: "single",
            question: "消防控制室应当实行什么值班制度？",
            options: ["8小时工作制", "12小时工作制", "每日24小时专人值班", "弹性值班制度"],
            answer: "C",
            explanation: "消防控制室应实行每日24小时专人值班制度，确保火灾自动报警系统正常运行。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3007,
            type: "single",
            question: "进行电焊、气焊等明火作业时，应当采取什么措施？",
            options: ["无需采取措施", "配备灭火器材", "落实现场监护人", "办理动火审批手续并采取防火措施"],
            answer: "D",
            explanation: "进行电焊、气焊等明火作业时，必须办理动火审批手续，并采取现场监护、配备灭火器材等防火措施。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3008,
            type: "multi",
            question: "消防安全重点单位应当履行哪些职责？",
            options: ["建立消防档案", "确定消防安全管理人", "定期组织消防安全培训和演练", "设置明显的消防安全标志"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防安全重点单位应建立消防档案、确定消防安全管理人、定期培训演练、设置消防标志等。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3009,
            type: "single",
            question: "机关、团体、企业、事业等单位对建筑消防设施每年至少进行几次全面检查？",
            options: ["1次", "2次", "3次", "4次"],
            answer: "A",
            explanation: "机关、团体、企业、事业等单位对建筑消防设施每年至少进行一次全面检查，确保设施完好有效。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3010,
            type: "single",
            question: "消防安全重点单位应当按照灭火和应急疏散预案，至少多长时间进行一次演练？",
            options: ["每月", "每季度", "每半年", "每年"],
            answer: "B",
            explanation: "消防安全重点单位应当按照灭火和应急疏散预案，至少每季度进行一次演练。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3011,
            type: "single",
            question: "《消防法》规定，禁止在哪些地方使用明火？",
            options: ["所有地方", "火灾危险性大的场所", "特殊场所", "无人场所"],
            answer: "B",
            explanation: "《消防法》规定，禁止在具有火灾爆炸危险的场所使用明火，特殊情况下需办理审批。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3012,
            type: "single",
            question: "消防技术服务机构应当取得什么证书方可从事消防技术服务？",
            options: ["营业执照", "资质证书", "执业证书", "许可证"],
            answer: "B",
            explanation: "消防技术服务机构应当取得相应的资质证书，方可从事消防设施检测、维修等技术服务。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3013,
            type: "single",
            question: "根据《消防法》，对建筑消防设施每年至少进行几次全面检测？",
            options: ["1次", "2次", "3次", "4次"],
            answer: "A",
            explanation: "消防设施每年至少进行一次全面检测，确保消防设施完好有效。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3014,
            type: "single",
            question: "《消防法》规定的重点防火单位应当对职工进行多少时间的消防安全培训？",
            options: ["每半年至少1次", "每年至少1次", "每两年至少1次", "无时间要求"],
            answer: "B",
            explanation: "重点防火单位应当每年至少对职工进行一次消防安全培训。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3015,
            type: "single",
            question: "消防控制室值班人员应当持有何种证书？",
            options: ["身份证", "消防职业资格证书", "健康证", "无要求"],
            answer: "B",
            explanation: "消防控制室值班人员应当持有消防设施操作员职业资格证书方可上岗。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3016,
            type: "single",
            question: "根据《消防监督检查规定》，公众聚集场所投入使用前消防安全检查合格证由哪个部门发放？",
            options: ["消防救援机构", "公安机关", "建设部门", "安全监督部门"],
            answer: "A",
            explanation: "公众聚集场所投入使用前应由消防救援机构进行消防安全检查，合格后发放证明文件。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3017,
            type: "single",
            question: "消防安全重点单位应当报哪个部门备案？",
            options: ["当地政府", "消防救援机构", "公安机关", "安全生产监督管理部门"],
            answer: "B",
            explanation: "消防安全重点单位应当向当地消防救援机构备案，接受消防监督管理。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3018,
            type: "single",
            question: "根据《消防法》，过失引起火灾尚不构成犯罪的，应如何处理？",
            options: ["批评教育", "警告或罚款", "拘留或罚款", "追究刑事责任"],
            answer: "C",
            explanation: "过失引起火灾尚不构成犯罪的，处十日以上十五日以下拘留，可以并处五百元以下罚款。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3019,
            type: "single",
            question: "《消防法》规定，任何人不得损坏、挪用或者擅自拆除、停用消防设施器材。",
            options: ["正确", "错误"],
            answer: "A",
            explanation: "《消防法》第二十八条规定，任何人不得损坏、挪用或者擅自拆除、停用消防设施器材。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3020,
            type: "single",
            question: "根据《消防法》，阻拦报火警或者谎报火警的，应如何处罚？",
            options: ["警告", "罚款", "警告或五百元以下罚款", "拘留"],
            answer: "C",
            explanation: "阻拦报火警或者谎报火警的，处警告或者五百元以下罚款。",
            module: "消防法律法规",
            categoryId: 3
        },
        // 机关团体企业事业单位消防安全管理规定
        {
            id: 3021,
            type: "single",
            question: "《机关团体企业事业单位消防安全管理规定》由谁发布？",
            options: ["国务院", "公安部", "应急管理部", "住房和城乡建设部"],
            answer: "B",
            explanation: "《机关团体企业事业单位消防安全管理规定》于2001年由公安部发布施行。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3022,
            type: "single",
            question: "根据《机关团体企业事业单位消防安全管理规定》，单位应当如何确定消防安全责任人？",
            options: ["由上级部门指定", "由法定代表人或主要负责人担任", "由消防安全管理人担任", "任意人员担任"],
            answer: "B",
            explanation: "单位的法定代表人或主要负责人为单位消防安全责任人，对消防安全工作全面负责。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3023,
            type: "single",
            question: "消防安全重点单位应当按照什么要求建立健全消防档案？",
            options: ["简洁明了", "全面详实", "无所谓", "按照领导要求"],
            answer: "B",
            explanation: "消防安全重点单位应当建立健全消防档案，全面详实记录消防安全基本情况和管理情况。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3024,
            type: "single",
            question: "消防档案应当包括哪些内容？",
            options: ["基本情况", "消防管理情况", "消防设施情况", "以上全部"],
            answer: "D",
            explanation: "消防档案应当包括基本情况、消防管理情况、消防设施情况、火灾隐患及处理情况等内容。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3025,
            type: "single",
            question: "根据规定，防火巡查应当多长时间进行一次？",
            options: ["每小时", "每2小时", "每日", "每周"],
            answer: "C",
            explanation: "消防安全重点单位应当每日进行防火巡查，公众聚集场所营业期间至少每2小时巡查一次。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3026,
            type: "single",
            question: "单位对发现的火灾隐患应当如何处理？",
            options: ["立即消除", "限期消除", "记录上报", "以上方式均可"],
            answer: "D",
            explanation: "对能够立即消除的火灾隐患应当立即消除，不能立即消除的应当制定整改方案限期消除。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3027,
            type: "single",
            question: "根据规定，机关团体企业事业单位应将什么部位列为消防安全重点部位？",
            options: ["任意部位", "容易发生火灾事故的部位", "美观要求高的部位", "无要求"],
            answer: "B",
            explanation: "单位应将容易发生火灾、一旦发生火灾可能造成重大人员伤亡或财产损失的区域列为重点部位。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3028,
            type: "single",
            question: "根据《消防安全重点单位界定标准》，以下哪些场所属于消防安全重点单位？",
            options: ["商场", "医院", "学校", "以上都是"],
            answer: "D",
            explanation: "商场、医院、学校、车站、宾馆等人员密集场所均属于消防安全重点单位界定范围。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3029,
            type: "single",
            question: "消防安全重点单位应当按照什么频率进行消防安全检查？",
            options: ["每日巡查", "每月检查", "每季检查", "每年检查"],
            answer: "A",
            explanation: "消防安全重点单位应当每日进行防火巡查，并定期组织消防安全检查。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3030,
            type: "single",
            question: "在火灾隐患排查治理中，单位应当建立什么制度？",
            options: ["报告制度", "整改制度", "登记制度", "以上都是"],
            answer: "D",
            explanation: "单位应当建立火灾隐患报告、整改、登记等制度，确保隐患及时发现和处理。",
            module: "消防法律法规",
            categoryId: 3
        },
        // 重点单位消防安全管理规定
        {
            id: 3031,
            type: "single",
            question: "《消防安全管理规定》要求重点单位每年至少组织几次消防安全培训？",
            options: ["1次", "2次", "3次", "4次"],
            answer: "B",
            explanation: "重点单位每年应当组织两次以上消防安全培训和消防演练。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3032,
            type: "single",
            question: "重点单位对从业人员的岗前消防安全培训时间不应小于多少学时？",
            options: ["4学时", "8学时", "12学时", "16学时"],
            answer: "B",
            explanation: "重点单位对从业人员的岗前消防安全培训时间不应小于8学时。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3033,
            type: "single",
            question: "根据规定，消防控制室应配备多少名值班人员？",
            options: ["1名", "2名", "不少于2名", "不少于3名"],
            answer: "C",
            explanation: "消防控制室应配备不少于2名值班人员，确保24小时双人值班。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3034,
            type: "single",
            question: "消防控制室值班人员应接受什么培训？",
            options: ["入职培训", "消防安全专门培训", "技术培训", "不需要培训"],
            answer: "B",
            explanation: "消防控制室值班人员应接受消防安全专门培训，取得职业资格证书后方可上岗。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3035,
            type: "single",
            question: "根据规定，消防设施器材应设置什么标志？",
            options: ["产品标志", "操作说明标志", "醒目标识或使用说明", "无所谓"],
            answer: "C",
            explanation: "消防设施器材应当设置醒目标识或使用说明，方便人员识别和正确操作。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3036,
            type: "single",
            question: "《消防安全管理规定》中，灭火和应急疏散预案应当包括哪些内容？",
            options: ["组织机构", "报警程序", "疏散程序", "以上都是"],
            answer: "D",
            explanation: "灭火和应急疏散预案应当包括组织机构、报警程序、疏散程序、扑救措施等内容。",
            module: "消防法律法规",
            categoryId: 3
        },
        // 消防监督检查规定
        {
            id: 3037,
            type: "single",
            question: "《消防监督检查规定》由哪个部门制定？",
            options: ["国务院", "全国人大常委会", "公安部", "应急管理部"],
            answer: "C",
            explanation: "《消防监督检查规定》由公安部制定，于2012年发布施行。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3038,
            type: "single",
            question: "消防救援机构进行消防监督检查时，可以采取什么措施？",
            options: ["要求被检查单位提供资料", "实地测试消防设施", "询问相关人员", "以上都可以"],
            answer: "D",
            explanation: "消防救援机构进行消防监督检查时，可以要求提供资料、实地测试、询问人员等措施。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3039,
            type: "single",
            question: "对公众聚集场所投入使用前的消防安全检查，应当自受理之日起几个工作日内进行检查？",
            options: ["3个工作日", "5个工作日", "10个工作日", "15个工作日"],
            answer: "C",
            explanation: "消防救援机构应当自受理之日起10个工作日内进行检查，并作出是否合格的决定。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 3040,
            type: "single",
            question: "消防救援机构在消防监督检查中发现火灾隐患时，应当通知什么部门或个人限期改正？",
            options: ["单位消防安全责任人", "消防安全管理人", "立即改正", "责令限期改正"],
            answer: "D",
            explanation: "消防救援机构发现火灾隐患应当责令限期改正，填写《责令限期改正通知书》。",
            module: "消防法律法规",
            categoryId: 3
        },
        // ==================== 火灾预防（约30道）====================
        // 电气防火
        {
            id: 4001,
            type: "single",
            question: "发现火灾时，首先应当做什么？",
            options: ["立即灭火", "立即拨打119报警", "组织人员疏散", "保护贵重物品"],
            answer: "B",
            explanation: "发现火灾后应立即拨打119报警，报告火灾地点、燃烧物质和人员被困情况。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4002,
            type: "single",
            question: "电器火灾应首先使用什么灭火器？",
            options: ["清水灭火器", "干粉灭火器", "泡沫灭火器", "水基灭火器"],
            answer: "B",
            explanation: "电器火灾应使用干粉灭火器或二氧化碳灭火器，避免使用水和泡沫导致触电。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4003,
            type: "single",
            question: "身上着火时，正确的做法是？",
            options: ["快速奔跑", "用手拍打", "就地打滚或用湿衣物覆盖", "脱掉衣物"],
            answer: "C",
            explanation: "身上着火时应就地打滚或用湿衣物覆盖，压灭火苗，切忌快速奔跑导致火势扩大。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4004,
            type: "single",
            question: "高层建筑发生火灾时，正确的逃生方法是？",
            options: ["乘坐电梯逃生", "沿楼梯向下逃生", "往楼上跑寻找安全地带", "跳楼逃生"],
            answer: "B",
            explanation: "高层火灾时应沿楼梯向下逃生，切勿乘坐电梯（可能停电困人），也不要往楼上跑。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4005,
            type: "multi",
            question: "扑救火灾的基本方法包括？",
            options: ["冷却法", "窒息法", "隔离法", "抑制法"],
            answer: ["A", "B", "C", "D"],
            explanation: "灭火的基本方法包括：冷却法（降低温度）、窒息法（隔绝氧气）、隔离法（移除可燃物）、抑制法（中断燃烧链式反应）。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4006,
            type: "single",
            question: "电气线路火灾的主要原因有哪些？",
            options: ["短路", "过载", "接触电阻过大", "以上都是"],
            answer: "D",
            explanation: "电气线路火灾的主要原因包括短路、过载、接触电阻过大和漏电等。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4007,
            type: "single",
            question: "防止电气线路短路的措施不包括哪项？",
            options: ["按规定安装熔断器", "加强维护检查", "任意增加负载", "规范敷设导线"],
            answer: "C",
            explanation: "防止短路应按规定安装保护装置、加强维护、规范敷设，任意增加负载会导致过载和短路。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4008,
            type: "single",
            question: "照明灯具与可燃物之间的安全距离不应小于多少厘米？",
            options: ["30cm", "50cm", "80cm", "100cm"],
            answer: "B",
            explanation: "照明灯具与可燃物之间的安全距离不应小于50cm，以防灯具过热引燃可燃物。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4009,
            type: "single",
            question: "电热器具使用完毕后应如何处理？",
            options: ["拔掉电源", "关掉开关", "放在原处", "无所谓"],
            answer: "A",
            explanation: "电热器具使用完毕后必须拔掉电源插头，防止长时间通电引发火灾。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4010,
            type: "single",
            question: "插座板允许插接的用电器具总功率不应超过其额定功率的多少？",
            options: ["50%", "75%", "90%", "100%"],
            answer: "D",
            explanation: "插座板允许插接的用电器具总功率不应超过其额定功率，防止过载发热。",
            module: "火灾预防",
            categoryId: 4
        },
        // 易燃易爆化学品管理
        {
            id: 4011,
            type: "single",
            question: "易燃易爆化学品的储存应符合什么要求？",
            options: ["分类存放", "专人管理", "防火措施", "以上都是"],
            answer: "D",
            explanation: "易燃易爆化学品应分类存放、专人管理、采取防火措施，确保储存安全。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4012,
            type: "single",
            question: "易燃液体闪点低于多少摄氏度时应采取防爆措施？",
            options: ["28℃", "38℃", "48℃", "60℃"],
            answer: "A",
            explanation: "闪点低于28℃的易燃液体危险性较大，储存和使用时应采取防爆措施。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4013,
            type: "single",
            question: "液化石油气钢瓶与灶具的距离不应小于多少米？",
            options: ["0.5m", "0.8m", "1.0m", "1.5m"],
            answer: "A",
            explanation: "液化石油气钢瓶与灶具的距离不应小于0.5米，以确保用火安全。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4014,
            type: "single",
            question: "易燃易爆场所应配备什么类型的灭火器材？",
            options: ["水型灭火器", "泡沫灭火器", "干粉或二氧化碳灭火器", "以上都不对"],
            answer: "C",
            explanation: "易燃易爆场所应配备干粉或二氧化碳灭火器，避免使用水型或泡沫灭火器。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4015,
            type: "single",
            question: "化学性质相抵触的易燃易爆物品可以混合存放。",
            options: ["正确", "错误"],
            answer: "B",
            explanation: "化学性质相抵触的易燃易爆物品必须分开存放，严禁混合储存。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4016,
            type: "single",
            question: "库房内堆放危险化学品时，垛与垛之间的距离不应小于多少米？",
            options: ["0.5m", "0.8m", "1.0m", "1.2m"],
            answer: "C",
            explanation: "库房内堆放危险化学品时，垛与垛之间的距离不应小于1.0米，便于检查和疏散。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4017,
            type: "single",
            question: "危险化学品运输车辆应配备什么安全设备？",
            options: ["消防器材", "接地线", "阻火器", "以上都是"],
            answer: "D",
            explanation: "危险化学品运输车辆应配备消防器材、防静电接地线、阻火器等安全设备。",
            module: "火灾预防",
            categoryId: 4
        },
        // 施工现场消防安全管理
        {
            id: 4018,
            type: "single",
            question: "施工现场应设置什么消防水源？",
            options: ["临时消防水源", "市政水源", "天然水源", "以上都可以"],
            answer: "D",
            explanation: "施工现场应设置临时消防水源，或利用市政水源、天然水源作为消防水源。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4019,
            type: "single",
            question: "施工现场临时用房的防火间距不应小于多少米？",
            options: ["3m", "4m", "5m", "6m"],
            answer: "C",
            explanation: "临时用房与在建工程的防火间距不应小于5米，确保火灾时不会相互蔓延。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4020,
            type: "single",
            question: "施工现场动火作业前应办理什么手续？",
            options: ["无需手续", "动火许可证", "领导批准", "安全协议"],
            answer: "B",
            explanation: "施工现场动火作业前必须办理动火许可证，并采取防火措施。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4021,
            type: "single",
            question: "电焊、气焊作业时，与易燃易爆物品的距离不应小于多少米？",
            options: ["3m", "5m", "10m", "15m"],
            answer: "C",
            explanation: "电焊、气焊作业时，与易燃易爆物品的距离不应小于10米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4022,
            type: "single",
            question: "施工现场临时消防车道宽度不应小于多少米？",
            options: ["3m", "4m", "5m", "6m"],
            answer: "B",
            explanation: "施工现场临时消防车道宽度不应小于4米，确保消防车正常通行。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4023,
            type: "single",
            question: "施工现场易燃材料应存放在什么区域？",
            options: ["任意区域", "专用仓库或区域", "靠近生活区", "无所谓"],
            answer: "B",
            explanation: "易燃材料应存放在专用仓库或区域，远离火源和人员密集区。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4024,
            type: "single",
            question: "施工现场消防安全管理应贯彻什么方针？",
            options: ["安全第一", "预防为主", "防消结合", "预防为主、防消结合"],
            answer: "D",
            explanation: "施工现场消防安全管理应贯彻预防为主、防消结合的方针。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4025,
            type: "single",
            question: "建筑工地木工加工棚的火灾危险性属于哪一类？",
            options: ["甲类", "乙类", "丙类", "丁类"],
            answer: "C",
            explanation: "木工加工棚使用易燃木材，火灾危险性属于丙类。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4026,
            type: "single",
            question: "施工现场配电箱周围多少米范围内不得堆放可燃物品？",
            options: ["1m", "2m", "3m", "5m"],
            answer: "B",
            explanation: "配电箱周围2米范围内不得堆放可燃物品，防止电气故障引燃可燃物。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4027,
            type: "single",
            question: "临时消防设施的设置应与在建工程同步设置。",
            options: ["正确", "错误"],
            answer: "A",
            explanation: "临时消防设施应与在建工程同步设置，确保施工期间消防安全。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4028,
            type: "single",
            question: "施工现场消防安全管理规章制度应包括哪些内容？",
            options: ["动火审批制度", "消防设施管理制度", "火灾隐患整改制度", "以上都是"],
            answer: "D",
            explanation: "施工现场消防安全管理规章制度应包括动火审批、消防设施管理、隐患整改等制度。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4029,
            type: "single",
            question: "施工现场灭火器的配置数量应按什么要求确定？",
            options: ["任意配置", "按照规范要求计算配置", "越多越好", "无所谓"],
            answer: "B",
            explanation: "灭火器配置数量应按照《建筑灭火器配置设计规范》要求计算确定。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 4030,
            type: "single",
            question: "施工现场临时用电线路应采用什么保护措施？",
            options: ["漏电保护", "短路保护", "过载保护", "以上都是"],
            answer: "D",
            explanation: "临时用电线路应采用漏电保护、短路保护、过载保护等安全措施。",
            module: "火灾预防",
            categoryId: 4
        },
        // ==================== 消防应急（约30道）====================
        // 应急预案编制
        {
            id: 5001,
            type: "single",
            question: "消防控制室接到火灾警报后，首先应当？",
            options: ["立即启动消防广播", "立即确认火灾", "立即启动灭火系统", "立即拨打119"],
            answer: "B",
            explanation: "消防控制室接到警报后应首先确认火灾是否真实，再根据情况启动相关灭火和疏散预案。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5002,
            type: "single",
            question: "疏散通道的净宽度不应小于多少米？",
            options: ["0.8米", "1.1米", "1.5米", "2.0米"],
            answer: "C",
            explanation: "疏散通道的净宽度不应小于1.5米，以保证人员快速、安全疏散。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5003,
            type: "single",
            question: "消防应急照明灯具的照度要求是什么？",
            options: ["不低于0.5勒克斯", "不低于1勒克斯", "不低于5勒克斯", "不低于10勒克斯"],
            answer: "B",
            explanation: "消防应急照明灯具的地面水平照度不低于1勒克斯，确保人员在疏散时能看清道路。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5004,
            type: "single",
            question: "火灾时消防电梯的使用原则是？",
            options: ["优先使用", "禁止使用", "视情况使用", "无要求"],
            answer: "B",
            explanation: "火灾时电梯井易窜烟气，消防电梯应停止使用，人员通过楼梯疏散。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5005,
            type: "single",
            question: "下列哪种情况应立即启动消防应急预案？",
            options: ["火灾探测器报警", "确认发生火灾", "仅闻到焦糊味", "仅听到警报声"],
            answer: "B",
            explanation: "只有在确认发生火灾后，才能启动消防应急预案，进行灭火和疏散操作。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5006,
            type: "single",
            question: "灭火和应急疏散预案应包括哪些内容？",
            options: ["组织机构", "报警程序", "疏散程序", "以上都是"],
            answer: "D",
            explanation: "灭火和应急疏散预案应包括组织机构、报警程序、疏散程序、扑救措施等内容。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5007,
            type: "single",
            question: "灭火和应急疏散预案中，通信保障组的主要职责是什么？",
            options: ["灭火", "疏散人员", "确保消防通信畅通", "医疗救护"],
            answer: "C",
            explanation: "通信保障组负责确保火灾现场的消防通信畅通，及时传递火灾信息。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5008,
            type: "single",
            question: "应急疏散时应先疏散什么人？",
            options: ["贵重物品", "着火层人员", "老弱病残人员", "全体人员"],
            answer: "C",
            explanation: "应急疏散时应优先疏散老弱病残等行动不便人员，确保其安全撤离。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5009,
            type: "single",
            question: "人员密集场所的员工应熟悉安全出口的位置吗？",
            options: ["仅管理人员需要", "仅消防员需要", "所有员工都需要", "无所谓"],
            answer: "C",
            explanation: "人员密集场所的所有员工都应熟悉安全出口的位置，确保火灾时引导顾客疏散。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5010,
            type: "single",
            question: "火灾确认后，消防控制室应立即启动什么系统？",
            options: ["消防广播", "消防应急照明", "消防联动系统", "以上都是"],
            answer: "D",
            explanation: "火灾确认后，消防控制室应立即启动消防广播、应急照明、消防联动等系统。",
            module: "消防应急",
            categoryId: 5
        },
        // 灭火救援
        {
            id: 5011,
            type: "single",
            question: "火灾发生时，首先发现火灾的人应当？",
            options: ["立即灭火", "立即报警", "组织疏散", "保护财产"],
            answer: "B",
            explanation: "首先发现火灾的人应立即拨打119报警，报告火灾地点和基本情况。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5012,
            type: "single",
            question: "拨打119报警时，应报告哪些信息？",
            options: ["火灾地点", "燃烧物质", "人员被困情况", "以上都是"],
            answer: "D",
            explanation: "拨打119报警时应报告火灾地点、燃烧物质、人员被困情况、报警人电话等信息。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5013,
            type: "single",
            question: "灭火救援时，消防车应停放在什么位置？",
            options: ["着火建筑正前方", "距着火建筑一定距离的上风或侧风方向", "任意位置", "着火建筑下方"],
            answer: "B",
            explanation: "消防车应停放在距着火建筑一定距离的上风或侧风方向，便于射水灭火。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5014,
            type: "single",
            question: "扑救油类火灾时，不宜采用什么灭火方法？",
            options: ["窒息法", "冷却法", "隔离法", "用水直接灭火"],
            answer: "D",
            explanation: "油类火灾不宜用水直接灭火，水会导致油品飞溅，扩大火灾面积。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5015,
            type: "single",
            question: "扑救电气火灾时应首先做什么？",
            options: ["立即灭火", "切断电源", "报警", "疏散人员"],
            answer: "B",
            explanation: "电气火灾应首先切断电源，然后再进行灭火和疏散，防止触电事故。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5016,
            type: "single",
            question: "有毒有害气体泄漏火灾时，救援人员应佩戴什么防护装备？",
            options: ["空气呼吸器", "防火服", "隔热服", "简易防护"],
            answer: "A",
            explanation: "有毒有害气体泄漏火灾时，救援人员应佩戴空气呼吸器等防护装备。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5017,
            type: "single",
            question: "火灾扑救中，冷却防止蔓延的原则是什么？",
            options: ["先灭后防", "边灭边防", "先防后灭", "以上都不对"],
            answer: "B",
            explanation: "火灾扑救应边灭火边防止火势蔓延，冷却受威胁部位，阻止火灾扩大。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5018,
            type: "single",
            question: "灭火救援时应将水枪阵地设置在什么位置？",
            options: ["火焰正前方", "便于射水且安全的地点", "越高越好", "任意位置"],
            answer: "B",
            explanation: "水枪阵地应设置在便于射水且安全的地点，便于灭火和自身撤退。",
            module: "消防应急",
            categoryId: 5
        },
        // 应急疏散
        {
            id: 5019,
            type: "single",
            question: "应急疏散时应沿什么路线撤离？",
            options: ["最近路线", "疏散指示标志指示的路线", "任意路线", "电梯"],
            answer: "B",
            explanation: "应急疏散时应沿疏散指示标志指示的路线撤离，切勿乘坐电梯。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5020,
            type: "single",
            question: "疏散过程中穿过浓烟区域时，应采取什么措施？",
            options: ["快速跑过", "用湿毛巾捂住口鼻", "深呼吸快速通过", "原地等待"],
            answer: "B",
            explanation: "穿过浓烟区域时应用湿毛巾捂住口鼻，尽量弯腰低姿快速通过。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5021,
            type: "single",
            question: "疏散过程中如果门不能打开应该怎么办？",
            options: ["用力撞击", "寻找其他出口", "等待救援", "以上都可以"],
            answer: "B",
            explanation: "如果门不能打开应寻找其他疏散出口，切勿用力撞击门，等待救援是最后选择。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5022,
            type: "single",
            question: "人员密集场所的疏散门应向什么方向开启？",
            options: ["向内开启", "向外开启", "无所谓方向", "常开状态"],
            answer: "B",
            explanation: "人员密集场所的疏散门应向外开启，确保紧急情况下人员快速疏散。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5023,
            type: "single",
            question: "疏散过程中应保持什么秩序？",
            options: ["快速奔跑", "不推不挤有序撤离", "各自逃命", "无所谓"],
            answer: "B",
            explanation: "疏散过程中应保持不推不挤、有序撤离，防止拥挤踩踏造成人员伤亡。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5024,
            type: "single",
            question: "被困在着火房间内时，正确的做法是？",
            options: ["跳窗逃生", "开门逃生", "关闭房门，用湿衣物堵住门缝，等待救援", "大声呼救"],
            answer: "C",
            explanation: "被困在着火房间时应关闭房门，用湿衣物堵住门缝，阻止烟气进入，等待救援。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5025,
            type: "single",
            question: "高层建筑着火时，向上还是向下逃生？",
            options: ["向上逃生", "向下逃生", "原地等待", "乘坐电梯"],
            answer: "B",
            explanation: "高层建筑着火时应向下逃生，切勿向上跑，如安全通道被堵可固守待援。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5026,
            type: "single",
            question: "逃生前是否应该先触摸门的温度？",
            options: ["不需要", "应该先用手背轻触门把手和门板", "无所谓", "直接开门"],
            answer: "B",
            explanation: "逃生前应用手背轻触门把手和门板，如门板发烫说明门外有火，不应开门。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5027,
            type: "single",
            question: "在公共场所遇到火灾时，应首先做什么？",
            options: ["拿好个人物品", "迅速有序撤离", "寻找贵重物品", "等待广播通知"],
            answer: "B",
            explanation: "在公共场所遇到火灾时应迅速有序撤离，切勿因收拾物品延误逃生时间。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5028,
            type: "single",
            question: "疏散过程中如果身上衣服着火，应该怎么办？",
            options: ["奔跑", "用手拍打", "就地打滚", "脱掉衣服"],
            answer: "C",
            explanation: "身上衣服着火时应就地打滚压灭火苗，切勿奔跑或用手拍打使火焰扩大。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5029,
            type: "single",
            question: "消防控制室值班人员在火灾确认后应立即报告哪些部门？",
            options: ["119火警", "单位领导", "消防安全责任人", "以上都是"],
            answer: "D",
            explanation: "火灾确认后应立即报告119火警、单位领导和消防安全责任人，启动灭火预案。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 5030,
            type: "single",
            question: "火灾扑救结束后，现场人员应做好哪些工作？",
            options: ["清理现场", "协助调查", "恢复消防设施", "以上都是"],
            answer: "D",
            explanation: "火灾扑救结束后应清理现场、协助消防部门调查、检修恢复消防设施。",
            module: "消防应急",
            categoryId: 5
        },
        // ==================== 中级消防设施操作员真题（200道）====================
        // 火灾自动报警系统
        {
            id: 6001,
            type: "single",
            question: "火灾自动报警系统中，感烟探测器的灵敏度分为几级？",
            options: ["2级", "3级", "4级", "5级"],
            answer: "B",
            explanation: "感烟探测器灵敏度分为三级：一级灵敏度高（红色）、二级中等（黄色）、三级低（蓝色）。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6002,
            type: "single",
            question: "点型感烟探测器至墙壁、梁边的水平距离不应小于多少米？",
            options: ["0.5m", "1.0m", "1.5m", "2.0m"],
            answer: "A",
            explanation: "点型感烟探测器至墙壁、梁边的水平距离不应小于0.5m。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6003,
            type: "single",
            question: "点型感烟探测器周围多少米内不应有遮挡物？",
            options: ["0.3m", "0.5m", "0.8m", "1.0m"],
            answer: "B",
            explanation: "点型感烟探测器周围0.5m内不应有遮挡物，以免影响烟雾进入探测器。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6004,
            type: "single",
            question: "火灾自动报警系统采用共用接地装置时，接地电阻值不应大于多少欧姆？",
            options: ["1Ω", "4Ω", "10Ω", "20Ω"],
            answer: "B",
            explanation: "火灾自动报警系统采用共用接地装置时，接地电阻不应大于4Ω。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6005,
            type: "single",
            question: "火灾报警控制器的主电源应使用什么电源？",
            options: ["蓄电池", "消防电源", "城市电网电源", "UPS电源"],
            answer: "B",
            explanation: "火灾报警控制器的主电源应使用消防电源，确保火灾时能持续工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6006,
            type: "single",
            question: "火灾报警控制器的备用电源在断电后应至少保持多少小时？",
            options: ["4小时", "8小时", "12小时", "24小时"],
            answer: "B",
            explanation: "火灾报警控制器的备用电源在断电后应至少保持8小时工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6007,
            type: "single",
            question: "在报警区域内的探测器报警时，火灾报警控制器应在多少秒内发出报警信号？",
            options: ["5秒", "10秒", "15秒", "30秒"],
            answer: "B",
            explanation: "在报警区域内的探测器报警时，火灾报警控制器应在10秒内发出报警信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6008,
            type: "single",
            question: "火灾报警控制器显示“公共故障”指示灯亮时，表示什么？",
            options: ["控制器内部故障", "系统外部设备故障", "主电源故障", "备用电源故障"],
            answer: "B",
            explanation: "“公共故障”指示灯亮表示系统外部设备（如探测器、模块）发生故障。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6009,
            type: "single",
            question: "火灾报警控制器显示“系统故障”时，首先应检查什么？",
            options: ["主电源", "备用电源", "线路连接", "探测器"],
            answer: "C",
            explanation: "“系统故障”通常由线路短路、断路引起，应首先检查线路连接。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6010,
            type: "single",
            question: "总线制火灾自动报警系统中，每个总线短路隔离器保护的探测器数量不应超过多少个？",
            options: ["10个", "20个", "32个", "50个"],
            answer: "C",
            explanation: "总线短路隔离器保护的探测器数量不应超过32个。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6011,
            type: "single",
            question: "红外光束感烟探测器发出报警信号的条件是什么？",
            options: ["烟雾遮挡部分光束", "烟雾完全遮挡光束", "烟雾使光束折射", "光束中断"],
            answer: "A",
            explanation: "红外光束感烟探测器在烟雾遮挡部分光束使接收信号减弱到一定程度时发出报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6012,
            type: "single",
            question: "火灾自动报警系统布线时，不同电压等级的线路应如何敷设？",
            options: ["可同管敷设", "分管敷设", "无所谓", "视情况而定"],
            answer: "B",
            explanation: "不同电压等级的线路应分管或分槽敷设，以防干扰和安全隐患。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6013,
            type: "single",
            question: "火灾报警控制器显示“单元故障”时，可能的故障原因是？",
            options: ["探测器损坏", "总线短路", "主电源断电", "控制器损坏"],
            answer: "A",
            explanation: "“单元故障”通常指探测器或模块等外部设备损坏或通讯故障。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6014,
            type: "single",
            question: "在火灾自动报警系统中，手动火灾报警按钮的报警信号属于什么信号？",
            options: ["自动报警信号", "人工报警信号", "联动报警信号", "故障报警信号"],
            answer: "B",
            explanation: "手动火灾报警按钮由人工触发，属于人工报警信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6015,
            type: "single",
            question: "火灾报警控制器处于“正常监视状态”时，哪个指示灯应常亮？",
            options: ["火警指示灯", "故障指示灯", "主电工作指示灯", "备电工作指示灯"],
            answer: "C",
            explanation: "控制器正常监视状态下主电工作指示灯应常亮，表示主电源正常供电。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防控制室值班
        {
            id: 6016,
            type: "single",
            question: "消防控制室应实行每日多少小时专人值班制度？",
            options: ["12小时", "18小时", "24小时", "8小时"],
            answer: "C",
            explanation: "消防控制室应实行每日24小时专人值班制度，确保火灾监控不间断。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6017,
            type: "single",
            question: "消防控制室值班人员每次换班时，交接班时间间隔不应小于多少分钟？",
            options: ["10分钟", "15分钟", "20分钟", "30分钟"],
            answer: "C",
            explanation: "消防控制室值班人员交接班时间间隔不应小于20分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6018,
            type: "single",
            question: "消防控制室内禁止堆放什么物品？",
            options: ["消防资料", "设备说明书", "易燃易爆物品", "值班记录"],
            answer: "C",
            explanation: "消防控制室内禁止堆放易燃易爆物品，确保控制室安全。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6019,
            type: "single",
            question: "消防控制室的消防通讯设备应处于什么状态？",
            options: ["关闭状态", "待机状态", "随时通讯状态", "静音状态"],
            answer: "C",
            explanation: "消防控制室的火灾报警控制器、消防联动控制器等应始终处于随时通讯状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6020,
            type: "single",
            question: "接到火灾报警后，消防控制室值班人员首先应做什么？",
            options: ["立即启动灭火系统", "确认火灾报警信息", "拨打119报警", "组织人员疏散"],
            answer: "B",
            explanation: "接到火灾报警后应首先确认火灾报警信息，判断是否为误报或真实火警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6021,
            type: "single",
            question: "火灾确认后，消防控制室应立即启动什么装置向消防部门报警？",
            options: ["自动喷水系统", "消防广播", "火灾报警装置", "防排烟系统"],
            answer: "C",
            explanation: "火灾确认后应立即启动火灾报警装置向消防部门报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6022,
            type: "single",
            question: "消防控制室内火灾报警控制器发出报警后，值班人员应在多少分钟内完成现场确认？",
            options: ["3分钟", "5分钟", "10分钟", "15分钟"],
            answer: "A",
            explanation: "火灾报警控制器发出报警后，值班人员应在3分钟内完成现场确认。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6023,
            type: "single",
            question: "消防控制室值班记录应存档多长时间？",
            options: ["1个月", "3个月", "6个月", "12个月"],
            answer: "D",
            explanation: "消防控制室值班记录应存档12个月，以便查阅和追溯。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6024,
            type: "single",
            question: "消防控制室应保存哪些资料？",
            options: ["值班记录", "巡查记录", "设备技术资料", "以上都是"],
            answer: "D",
            explanation: "消防控制室应保存值班记录、巡查记录、设备技术资料等完整档案。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6025,
            type: "single",
            question: "消防控制室应配备哪些消防器材？",
            options: ["手提式灭火器", "消防过滤式综合防毒面具", "消防斧", "以上都是"],
            answer: "D",
            explanation: "消防控制室应配备灭火器、防毒面具、消防斧等基本消防器材。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6026,
            type: "single",
            question: "消防控制室与消防部门之间应保持什么样的联系制度？",
            options: ["定期联系", "随时通讯", "火灾时联系", "无所谓"],
            answer: "B",
            explanation: "消防控制室与消防部门应保持随时通讯联系，确保火灾时快速响应。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6027,
            type: "single",
            question: "消防控制室发生误报时，应如何处理？",
            options: ["立即现场查看", "做好记录并复位", "通知维保单位", "报告领导"],
            answer: "B",
            explanation: "消防控制室发生误报时，值班人员应做好记录并对控制器进行复位操作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6028,
            type: "single",
            question: "消防控制室值班人员在火灾确认后应立即通知哪些人员？",
            options: ["消防安全责任人", "消防安全管理人", "单位负责人", "以上都是"],
            answer: "D",
            explanation: "火灾确认后应立即通知消防安全责任人、消防安全管理人和单位负责人。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6029,
            type: "single",
            question: "消防控制室应设置在什么位置？",
            options: ["任意位置", "地下一层", "首层或地下一层", "高层建筑顶层"],
            answer: "C",
            explanation: "消防控制室宜设置在首层或地下一层，便于火灾时指挥和救援。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6030,
            type: "single",
            question: "消防控制室的照明照度有什么要求？",
            options: ["无特殊要求", "不应低于正常照度", "应高于正常照度", "最低照度100勒克斯"],
            answer: "C",
            explanation: "消防控制室的应急照明照度应高于正常照度，确保火灾时正常工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 自动喷水灭火系统
        {
            id: 6031,
            type: "single",
            question: "湿式自动喷水灭火系统的报警阀组安装在什么地方？",
            options: ["泵房内", "报警阀间", "屋顶水箱间", "任意位置"],
            answer: "B",
            explanation: "湿式报警阀组应安装在报警阀间内，保持干燥清洁的工作环境。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6032,
            type: "single",
            question: "自动喷水灭火系统末端试水装置的出水口应采取什么措施？",
            options: ["直接排水", "间接排水", "排向污水系统", "排向雨水系统"],
            answer: "B",
            explanation: "末端试水装置应采取间接排水方式，排向排水管道。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6033,
            type: "single",
            question: "自动喷水灭火系统水泵启动后，水流指示器应在多少秒内发出信号？",
            options: ["5秒", "10秒", "15秒", "30秒"],
            answer: "B",
            explanation: "水泵启动后，水流指示器应在10秒内发出水流信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6034,
            type: "single",
            question: "湿式报警阀组延迟器的作用是什么？",
            options: ["延迟报警", "防止误报警", "储存水", "调节水压"],
            answer: "B",
            explanation: "延迟器的作用是防止因水源压力波动引起的误报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6035,
            type: "single",
            question: "自动喷水灭火系统中，每个报警阀组控制的喷头数量不宜超过多少个？",
            options: ["200个", "500个", "800个", "1000个"],
            answer: "B",
            explanation: "每个报警阀组控制的喷头数量不宜超过500个。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6036,
            type: "single",
            question: "自动喷水灭火系统消防水泵的启动时间从接到启泵信号到水泵运转不应超过多少秒？",
            options: ["30秒", "60秒", "90秒", "120秒"],
            answer: "B",
            explanation: "消防水泵从接到启泵信号到运转的时间不应超过60秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6037,
            type: "single",
            question: "闭式喷头的玻璃球内充装的液体是什么？",
            options: ["水", "酒精", "易熔合金", "有机溶液"],
            answer: "D",
            explanation: "闭式喷头玻璃球内充装的是有机溶液（酒精、丙酮等），受热膨胀破裂。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6038,
            type: "single",
            question: "仓库用闭式喷头的最高环境温度不应超过多少摄氏度？",
            options: ["38℃", "50℃", "68℃", "80℃"],
            answer: "C",
            explanation: "仓库用闭式喷头动作温度不应低于68℃，以适应仓库环境温度。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6039,
            type: "single",
            question: "自动喷水灭火系统管道的连接，当管径大于DN100时，应采用什么连接方式？",
            options: ["螺纹连接", "焊接连接", "法兰连接", "卡箍连接"],
            answer: "D",
            explanation: "自动喷水灭火系统管道管径大于DN100时，应采用卡箍连接。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6040,
            type: "single",
            question: "自动喷水灭火系统的湿式报警阀组应安装什么阀门防止系统误动作？",
            options: ["止回阀", "安全阀", "压力开关", "湿式报警阀"],
            answer: "A",
            explanation: "湿式报警阀组应安装止回阀，防止水倒流引起误动作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6041,
            type: "single",
            question: "雨淋系统属于什么类型的自动喷水灭火系统？",
            options: ["闭式系统", "开式系统", "预作用系统", "重复启闭系统"],
            answer: "B",
            explanation: "雨淋系统采用开式喷头，属于开式系统，由雨淋报警阀控制喷水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6042,
            type: "single",
            question: "预作用系统的特点是？",
            options: ["管道内充满有压水", "管道内充满有压气体", "管道内无水", "管道内有压缩空气"],
            answer: "C",
            explanation: "预作用系统管道内平时无水，发生火灾时由火灾探测器联动打开预作用阀充水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6043,
            type: "single",
            question: "自动喷水灭火系统水力警铃的工作压力不应小于多少兆帕？",
            options: ["0.05MPa", "0.1MPa", "0.15MPa", "0.2MPa"],
            answer: "A",
            explanation: "水力警铃的工作压力不应小于0.05MPa，确保警铃能正常发出警报。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6044,
            type: "single",
            question: "自动喷水灭火系统末端试水装置的试水接头出水口流量系数等同于哪个规格的喷头？",
            options: ["K=80", "K=115", "K=160", "K=200"],
            answer: "A",
            explanation: "末端试水装置的试水接头出水口流量系数等同于K=80的喷头。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6045,
            type: "single",
            question: "自动喷水灭火系统稳压泵的启动压力应高于系统主泵的启动压力多少兆帕？",
            options: ["0.01～0.02MPa", "0.03～0.05MPa", "0.06～0.08MPa", "0.1～0.2MPa"],
            answer: "B",
            explanation: "稳压泵的启动压力应高于系统主泵启动压力0.03～0.05MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 气体灭火系统
        {
            id: 6046,
            type: "single",
            question: "七氟丙烷灭火系统用于扑救火灾时，防护区灭火浓度应为多少？",
            options: ["5%～7%", "8%～10%", "10%～12%", "15%以上"],
            answer: "B",
            explanation: "七氟丙烷灭火系统用于扑救火灾时，防护区灭火浓度应为8%～10%。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6047,
            type: "single",
            question: "气体灭火系统手动控制操作时，应在多少秒内完成启动？",
            options: ["5秒", "10秒", "15秒", "30秒"],
            answer: "B",
            explanation: "气体灭火系统手动控制操作时，应在10秒内完成启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6048,
            type: "single",
            question: "气体灭火系统防护区的疏散通道应设置什么指示标志？",
            options: ["普通指示标志", "消防应急标志", "气体灭火区域标志", "安全出口标志"],
            answer: "B",
            explanation: "气体灭火系统防护区疏散通道应设置消防应急标志和指示标志。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6049,
            type: "single",
            question: " IG541混合气体灭火系统的喷射时间不应超过多少秒？",
            options: ["30秒", "60秒", "90秒", "120秒"],
            answer: "C",
            explanation: "IG541混合气体灭火系统的喷射时间不应超过90秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6050,
            type: "single",
            question: "气体灭火系统储存容器的工作压力不应小于多少兆帕？",
            options: ["10MPa", "12MPa", "15MPa", "20MPa"],
            answer: "C",
            explanation: "气体灭火系统储存容器的工作压力不应小于15MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6051,
            type: "single",
            question: "气体灭火系统容器阀按用途可分为几种类型？",
            options: ["2种", "3种", "4种", "5种"],
            answer: "B",
            explanation: "气体灭火系统容器阀按用途可分为灭火剂储存容器用阀、驱动气体储存容器用阀和加压气体储存容器用阀三种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6052,
            type: "single",
            question: "七氟丙烷灭火系统的灭火浸渍时间对于图书档案类火灾不应小于多少分钟？",
            options: ["5分钟", "10分钟", "20分钟", "30分钟"],
            answer: "C",
            explanation: "七氟丙烷灭火系统对于图书档案类火灾的灭火浸渍时间不应小于20分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6053,
            type: "single",
            question: "气体灭火系统选择阀的工作压力不应小于多少兆帕？",
            options: ["5MPa", "10MPa", "12MPa", "15MPa"],
            answer: "C",
            explanation: "气体灭火系统选择阀的工作压力不应小于12MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6054,
            type: "single",
            question: "热气溶胶灭火装置的灭火剂属于什么类型？",
            options: ["洁净气体", "惰性气体", "固体烟雾型灭火剂", "液体灭火剂"],
            answer: "C",
            explanation: "热气溶胶灭火装置的灭火剂属于固体烟雾型灭火剂，通过气溶胶灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6055,
            type: "single",
            question: "气体灭火系统管网宜采用什么形式的管道？",
            options: ["钢管", "不锈钢管", "铜管", "均可"],
            answer: "D",
            explanation: "气体灭火系统管网可采用钢管、不锈钢管或铜管，应根据系统设计选择。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 防排烟系统
        {
            id: 6056,
            type: "single",
            question: "防排烟系统的作用是什么？",
            options: ["灭火", "控烟", "防火", "逃生"],
            answer: "B",
            explanation: "防排烟系统的主要作用是控制烟气蔓延，为人员疏散和灭火创造条件。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6057,
            type: "single",
            question: "自然排烟方式适用于什么场所？",
            options: ["所有场所", "有外窗的建筑", "地下建筑", "高层建筑"],
            answer: "B",
            explanation: "自然排烟适用于有外窗的建筑，通过可开启外窗实现排烟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6058,
            type: "single",
            question: "机械排烟系统的排烟量应按什么要求确定？",
            options: ["固定值", "计算确定", "经验值", "设备最大值"],
            answer: "B",
            explanation: "机械排烟系统的排烟量应通过计算确定，满足排烟区域的实际需求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6059,
            type: "single",
            question: "排烟风机应能在多少摄氏度环境下连续工作不少于30分钟？",
            options: ["200℃", "250℃", "280℃", "300℃"],
            answer: "C",
            explanation: "排烟风机应能在280℃环境下连续工作不少于30分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6060,
            type: "single",
            question: "送风机应能在多少摄氏度环境下连续工作不少于30分钟？",
            options: ["100℃", "150℃", "200℃", "250℃"],
            answer: "C",
            explanation: "送风机应能在200℃环境下连续工作不少于30分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6061,
            type: "single",
            question: "机械加压送风系统的余压值应满足什么要求？",
            options: ["防烟楼梯间压力>前室压力", "前室压力>楼梯间压力", "楼梯间压力=前室压力", "无所谓"],
            answer: "A",
            explanation: "机械加压送风系统应保证防烟楼梯间压力大于前室压力，防止烟气进入楼梯间。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6062,
            type: "single",
            question: "防排烟系统风机的启动方式有？",
            options: ["自动启动", "手动启动", "远程启动", "以上都是"],
            answer: "D",
            explanation: "防排烟系统风机应具备自动、手动和远程启动方式，确保可靠启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6063,
            type: "single",
            question: "排烟口平时应处于什么状态？",
            options: ["常开状态", "常闭状态", "手动开启状态", "无要求"],
            answer: "B",
            explanation: "排烟口平时应处于常闭状态，火灾时由控制中心联动开启排烟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6064,
            type: "single",
            question: "火灾时，加压送风口应处于什么状态？",
            options: ["常开状态", "火灾自动开启", "手动开启", "常闭状态"],
            answer: "D",
            explanation: "火灾时加压送风口应处于常开状态，向楼梯间和前室送风。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6065,
            type: "single",
            question: "防排烟系统风管穿过防火分区时，应设置什么防火阀？",
            options: ["70℃防火阀", "150℃防火阀", "280℃防火阀", "不需设置"],
            answer: "C",
            explanation: "防排烟系统风管穿过防火分区时应设置280℃排烟防火阀。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6066,
            type: "single",
            question: "排烟管道应采用什么材料？",
            options: ["普通钢板", "不燃材料", "难燃材料", "无所谓"],
            answer: "B",
            explanation: "排烟管道应采用不燃材料制作，确保火灾时不会成为燃烧源。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6067,
            type: "single",
            question: "当火灾确认后，防排烟系统应在多少秒内联动开启？",
            options: ["10秒", "15秒", "30秒", "60秒"],
            answer: "B",
            explanation: "火灾确认后，防排烟系统应在15秒内联动开启排烟口和排烟风机。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6068,
            type: "single",
            question: "自然排烟口的外窗设置有什么要求？",
            options: ["任意位置", "距顶棚80cm以内", "设置在墙面上部", "无所谓"],
            answer: "C",
            explanation: "自然排烟口应设置在墙面上部，距顶棚80cm以内，以有效排出烟气。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6069,
            type: "single",
            question: "机械排烟系统与机械加压送风系统能否合用风机？",
            options: ["可以", "不可以", "视情况", "无所谓"],
            answer: "B",
            explanation: "机械排烟系统与机械加压送风系统应分别设置独立风机，不宜合用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6070,
            type: "single",
            question: "防排烟系统的联动控制信号应由什么设备发出？",
            options: ["火灾报警控制器", "消防联动控制器", "手动手柄", "均可"],
            answer: "B",
            explanation: "防排烟系统的联动控制信号应由消防联动控制器发出。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防应急照明和疏散指示系统
        {
            id: 6071,
            type: "single",
            question: "消防应急照明和疏散指示系统的应急转换时间不应大于多少秒？",
            options: ["1秒", "3秒", "5秒", "10秒"],
            answer: "C",
            explanation: "消防应急照明和疏散指示系统的应急转换时间不应大于5秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6072,
            type: "single",
            question: "人员密集场所的应急照明工作寿命不应低于多少小时？",
            options: ["500小时", "1000小时", "5000小时", "10000小时"],
            answer: "D",
            explanation: "人员密集场所的应急照明工作寿命不应低于10000小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6073,
            type: "single",
            question: "消防应急灯具的应急工作时间不应少于多少分钟？",
            options: ["30分钟", "60分钟", "90分钟", "120分钟"],
            answer: "C",
            explanation: "消防应急灯具的应急工作时间不应少于90分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6074,
            type: "single",
            question: "疏散指示标志的间距不应大于多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "B",
            explanation: "疏散指示标志的间距不应大于10米，确保人员能看清疏散方向。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6075,
            type: "single",
            question: "消防应急照明灯具的照度要求中，楼梯间的地面照度不应低于多少勒克斯？",
            options: ["1lx", "3lx", "5lx", "10lx"],
            answer: "C",
            explanation: "楼梯间的消防应急照明地面照度不应低于5勒克斯。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6076,
            type: "single",
            question: "疏散走道消防应急照明的最低照度不应低于多少勒克斯？",
            options: ["0.5lx", "1lx", "2lx", "3lx"],
            answer: "B",
            explanation: "疏散走道消防应急照明的最低照度不应低于1勒克斯。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6077,
            type: "single",
            question: "消防应急照明电源的切换时间应不超过多少秒？",
            options: ["1秒", "3秒", "5秒", "10秒"],
            answer: "C",
            explanation: "消防应急照明电源切换时间应不超过5秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6078,
            type: "single",
            question: "集中电源型消防应急照明和疏散指示系统的组成不包括？",
            options: ["应急照明集中控制器", "应急照明配电箱", "集中电源", "消防应急灯具"],
            answer: "B",
            explanation: "集中电源型系统由集中控制器、集中电源和消防应急灯具组成，不包括应急照明配电箱。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6079,
            type: "single",
            question: "自带电源型消防应急灯具的蓄电池应安装在什么地方？",
            options: ["灯具体内", "配电箱内", "集中电源内", "均可"],
            answer: "A",
            explanation: "自带电源型消防应急灯具的蓄电池应安装在灯具体内。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6080,
            type: "single",
            question: "疏散指示标志灯安装高度宜为什么范围？",
            options: ["距地面0.5m以下", "距地面1.0m以下", "距地面1.0～1.5m", "距地面1.5m以上"],
            answer: "B",
            explanation: "疏散指示标志灯安装高度宜距地面1.0m以下，便于人员观察。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6081,
            type: "single",
            question: "安全出口指示标志应安装在门的什么位置？",
            options: ["门扇上", "门正上方", "门侧墙上", "无所谓"],
            answer: "B",
            explanation: "安全出口指示标志应安装在门的正上方，清晰可见。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6082,
            type: "single",
            question: "消防应急照明灯具的色温有什么要求？",
            options: ["无要求", "应采用暖色温", "应采用冷色温", "无所谓"],
            answer: "B",
            explanation: "消防应急照明灯具宜采用暖色温光源，色温在2700～3000K之间。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6083,
            type: "single",
            question: "应急照明控制器应能显示什么信息？",
            options: ["系统工作状态", "故障信息", "应急时间", "以上都是"],
            answer: "D",
            explanation: "应急照明控制器应能显示系统工作状态、故障信息和应急时间等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6084,
            type: "single",
            question: "消防应急照明和疏散指示系统的主电源应采用什么供电方式？",
            options: ["消防电源", "城市电网", "蓄电池", "无所谓"],
            answer: "A",
            explanation: "消防应急照明系统的主电源应采用消防电源，确保火灾时持续供电。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6085,
            type: "single",
            question: "疏散指示标志的持续应急工作时间应至少多少小时？",
            options: ["1小时", "2小时", "3小时", "4小时"],
            answer: "A",
            explanation: "疏散指示标志的持续应急工作时间应至少1小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 灭火器使用
        {
            id: 6086,
            type: "single",
            question: "手提式灭火器的型号MP6表示什么？",
            options: ["6公斤泡沫灭火器", "6升泡沫灭火器", "6公斤干粉灭火器", "6升水基灭火器"],
            answer: "B",
            explanation: "手提式灭火器型号中，MP表示泡沫灭火器，6表示6升容量。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6087,
            type: "single",
            question: "干粉灭火器的灭火原理是什么？",
            options: ["冷却法", "窒息法", "抑制法", "隔离法"],
            answer: "C",
            explanation: "干粉灭火器主要通过抑制燃烧链式反应达到灭火目的。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6088,
            type: "single",
            question: "水基型灭火器的灭火剂是什么？",
            options: ["清水", "泡沫混合液", "细水雾", "水凝胶"],
            answer: "A",
            explanation: "水基型灭火器的灭火剂是清水或添加添加剂的水溶液。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6089,
            type: "single",
            question: "二氧化碳灭火器的灭火原理是什么？",
            options: ["冷却法", "窒息法", "抑制法", "隔离法"],
            answer: "B",
            explanation: "二氧化碳灭火器主要通过窒息作用灭火，二氧化碳密度大于空气，覆盖燃烧物隔绝氧气。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6090,
            type: "single",
            question: "ABC干粉灭火器可以扑救哪类火灾？",
            options: ["A类", "B类", "C类", "以上都是"],
            answer: "D",
            explanation: "ABC干粉灭火器可用于扑救A类、B类、C类火灾及带电设备火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6091,
            type: "single",
            question: "灭火器瓶体上标注的MA表示什么？",
            options: ["灭火剂类型", "认证标志", "生产厂家", "无所谓"],
            answer: "B",
            explanation: "灭火器瓶体上的MA表示产品认证标志，是消防产品合格评定标志。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6092,
            type: "single",
            question: "手提式灭火器在使用时，灭火距离火源的安全距离是多少？",
            options: ["1～2米", "2～3米", "3～4米", "4～5米"],
            answer: "C",
            explanation: "手提式灭火器使用时，灭火距离火源的安全距离一般为3～4米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6093,
            type: "single",
            question: "灭火器在进行外观检查时，主要检查什么？",
            options: ["压力指示器", "喷射软管", "铭牌标识", "以上都是"],
            answer: "D",
            explanation: "灭火器外观检查包括压力指示器、喷射软管、铭牌标识等是否完好。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6094,
            type: "single",
            question: "手提式灭火器指针在什么区域表示正常？",
            options: ["红色区域", "绿色区域", "黄色区域", "无所谓"],
            answer: "B",
            explanation: "手提式灭火器压力指针在绿色区域表示正常可用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6095,
            type: "single",
            question: "灭火器筒体严重变形时应如何处理？",
            options: ["维修后继续使用", "报废", "降级使用", "继续使用"],
            answer: "B",
            explanation: "灭火器筒体严重变形时应报废，不得维修后继续使用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6096,
            type: "single",
            question: "灭火器的维修期限是多久？",
            options: ["1年", "2年", "3年", "5年"],
            answer: "B",
            explanation: "灭火器的维修期限为出厂满2年，首次维修后每年进行一次维修。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6097,
            type: "single",
            question: "灭火器的报废期限是多久？",
            options: ["5年", "8年", "10年", "15年"],
            answer: "C",
            explanation: "手提式灭火器的报废期限一般为10年，水基型灭火器为6年。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6098,
            type: "single",
            question: "扑救B类火灾时，灭火器应对准火焰什么部位喷射？",
            options: ["火焰上部", "火焰根部", "火焰中部", "无所谓"],
            answer: "B",
            explanation: "扑救B类火灾时，灭火器应对准火焰根部喷射，由近至远扫射。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6099,
            type: "single",
            question: "手提式灭火器使用后应如何处理？",
            options: ["丢弃", "重新充装", "维修后充装", "检查后继续使用"],
            answer: "B",
            explanation: "手提式灭火器使用后无论是否用完，都应送专业维修单位进行重新充装。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6100,
            type: "single",
            question: "推车式灭火器的型号MFZ/ABC8表示什么？",
            options: ["8公斤二氧化碳", "8公斤ABC干粉", "8升泡沫", "8升水基"],
            answer: "B",
            explanation: "推车式灭火器型号MFZ/ABC8表示8公斤ABC干粉推车式灭火器。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防水带操作
        {
            id: 6101,
            type: "single",
            question: "消防水带的直径一般是多少毫米？",
            options: ["25mm", "50mm", "65mm", "80mm"],
            answer: "C",
            explanation: "室内消防水带的标准直径为65mm，与消火栓接口配套。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6102,
            type: "single",
            question: "消防水带的标准长度为多少米？",
            options: ["15米", "20米", "25米", "30米"],
            answer: "C",
            explanation: "消防水带的标准长度为25米，使用时应展开平直。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6103,
            type: "single",
            question: "消防水带使用后应如何处理？",
            options: ["直接放回原位", "晾干后盘好放回", "冲洗后放回", "无所谓"],
            answer: "B",
            explanation: "消防水带使用后应冲洗干净，晾干后盘好放回消火栓箱。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6104,
            type: "single",
            question: "消防水带平时应检查什么？",
            options: ["接口是否完好", "胶层是否脱落", "有无霉变", "以上都是"],
            answer: "D",
            explanation: "消防水带平时应检查接口、胶层和有无霉变损坏等情况。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6105,
            type: "single",
            question: "连接水带时，接口处应如何处理？",
            options: ["直接连接", "加垫片连接", "对准接口顺时针旋转连接", "无所谓"],
            answer: "C",
            explanation: "连接水带时应将接口对准，顺时针旋转卡口锁定，确保连接牢固。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6106,
            type: "single",
            question: "消防水带展开时应注意什么？",
            options: ["快速抛出", "展开平直无扭曲", "折叠起来", "盘绕放置"],
            answer: "B",
            explanation: "消防水带展开时应平直无扭曲，避免折叠影响水流。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6107,
            type: "single",
            question: "水带挂置在消火栓箱内时，水带带口应朝向什么方向？",
            options: ["内", "外", "无所谓方向", "侧面"],
            answer: "B",
            explanation: "水带挂置时水带带口应朝外，便于快速连接水枪。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6108,
            type: "single",
            question: "消防水带与消火栓连接时，应用什么工具紧固？",
            options: ["扳手", "手拧紧即可", "钳子", "无需工具"],
            answer: "B",
            explanation: "消防水带接口采用卡扣式设计，手拧紧即可，不需工具。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6109,
            type: "single",
            question: "消防水带在什么情况下应报废？",
            options: ["磨损", "老化龟裂", "接口松动", "以上情况均应报废"],
            answer: "D",
            explanation: "消防水带出现磨损、老化龟裂、接口松动等情况时应报废。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6110,
            type: "single",
            question: "消防水带接口的材质通常是什么？",
            options: ["塑料", "铝合金", "铜合金", "不锈钢"],
            answer: "B",
            explanation: "消防水带接口通常采用铝合金材质，轻便耐用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6111,
            type: "single",
            question: "多出口消火栓的水带敷设要求是什么？",
            options: ["任意敷设", "每条水带单独敷设", "可以缠绕", "无所谓"],
            answer: "B",
            explanation: "多出口消火栓每条水带应单独敷设，避免缠绕影响供水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6112,
            type: "single",
            question: "地下消火栓的水带连接顺序是什么？",
            options: ["消火栓-水带-水枪", "消火栓-水枪-水带", "无所谓顺序", "水带-消火栓-水枪"],
            answer: "A",
            explanation: "地下消火栓水带连接顺序为：消火栓接口-水带-水枪。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6113,
            type: "single",
            question: "消防水带耐压试验压力是多少？",
            options: ["工作压力", "1.5倍工作压力", "2倍工作压力", "无要求"],
            answer: "B",
            explanation: "消防水带耐压试验压力应为工作压力的1.5倍。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6114,
            type: "single",
            question: "水带使用后应放置在什么位置？",
            options: ["任意位置", "消火栓箱内", "室外", "仓库"],
            answer: "B",
            explanation: "消防水带使用后应放回消火栓箱内，保持备用状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6115,
            type: "single",
            question: "消防水带在什么情况下不得使用？",
            options: ["接口损坏", "胶层脱落", "霉变严重", "以上情况均不得使用"],
            answer: "D",
            explanation: "消防水带接口损坏、胶层脱落或霉变严重时均不得使用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防联动控制系统
        {
            id: 6116,
            type: "single",
            question: "消防联动控制器的功能不包括什么？",
            options: ["火灾报警", "联动控制", "故障报警", "总线控制"],
            answer: "A",
            explanation: "消防联动控制器主要实现联动控制和故障报警功能，火灾报警由火灾报警控制器完成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6117,
            type: "single",
            question: "消防联动控制器接收到火灾报警信号后，应在多少秒内发出控制信号？",
            options: ["3秒", "5秒", "10秒", "30秒"],
            answer: "A",
            explanation: "消防联动控制器接收到火灾报警信号后，应在3秒内发出联动控制信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6118,
            type: "single",
            question: "消防联动控制器的手动控制单元应设置在什么位置？",
            options: ["控制室内部", "现场设备处", "均可", "无所谓"],
            answer: "C",
            explanation: "消防联动控制器的手动控制单元可设置在控制室内部或现场设备处。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6119,
            type: "single",
            question: "消防联动控制系统中，模块的作用是什么？",
            options: ["放大信号", "隔离和转换", "储存数据", "显示状态"],
            answer: "B",
            explanation: "消防联动控制模块主要用于信号隔离和协议转换，实现系统通讯。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6120,
            type: "single",
            question: "消防联动控制器显示“模块故障”时，可能的原因是？",
            options: ["模块损坏", "线路短路", "线路断路", "以上都是"],
            answer: "D",
            explanation: "模块故障可能是模块本身损坏、线路短路或断路等原因。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6121,
            type: "single",
            question: "消防联动控制器与火灾报警控制器之间的关系是什么？",
            options: ["完全独立", "联动控制器从属于火灾报警控制器", "火灾报警控制器从属于联动控制器", "并列关系"],
            answer: "B",
            explanation: "消防联动控制器从属于火灾报警控制器，接收其报警信号后发出联动控制命令。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6122,
            type: "single",
            question: "总线制消防联动控制系统使用的总线类型是？",
            options: ["电源总线", "控制总线", "通讯总线", "以上都是"],
            answer: "D",
            explanation: "总线制消防联动控制系统使用电源总线、控制总线和通讯总线。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6123,
            type: "single",
            question: "消防联动控制器的手动操作方式有？",
            options: ["直接手动操作", "总线手动操作", "多线手动操作", "以上都是"],
            answer: "D",
            explanation: "消防联动控制器具备直接手动操作、总线手动操作和多线手动操作方式。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6124,
            type: "single",
            question: "消防联动控制器对消防水泵的控制应采用什么控制方式？",
            options: ["总线控制", "多线控制", "两者均可", "无所谓"],
            answer: "B",
            explanation: "消防水泵等重要消防设备应采用多线控制，确保可靠启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6125,
            type: "single",
            question: "消防联动控制系统的接地形式应为？",
            options: ["单独接地", "联合接地", "无所谓", "不需接地"],
            answer: "B",
            explanation: "消防联动控制系统应采用联合接地，接地电阻不应大于4Ω。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6126,
            type: "single",
            question: "消防联动控制器显示的联动关系包括什么？",
            options: ["逻辑关系", "时序关系", "设备对应关系", "以上都是"],
            answer: "D",
            explanation: "消防联动控制器的联动关系包括逻辑关系、时序关系和设备对应关系。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6127,
            type: "single",
            question: "消防联动控制系统的布线要求是什么？",
            options: ["随意布线", "穿管暗敷", "穿管明敷", "无所谓"],
            answer: "B",
            explanation: "消防联动控制系统布线应穿管暗敷，确保线路安全可靠。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6128,
            type: "single",
            question: "消防联动控制器与现场设备之间的线路短路时，系统应如何动作？",
            options: ["继续工作", "自动隔离故障点", "停机检修", "发出故障报警"],
            answer: "D",
            explanation: "消防联动控制系统线路短路时，应发出故障报警并自动隔离故障点。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6129,
            type: "single",
            question: "消防联动控制器的手动允许开关应设置在什么状态时才能手动操作？",
            options: ["手动", "自动", "两者都可以", "无所谓"],
            answer: "A",
            explanation: "消防联动控制器的手动允许开关设置在“手动”状态时才能进行手动操作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6130,
            type: "single",
            question: "总线短路隔离器的设置原则是什么？",
            options: ["按楼层设置", "按防火分区设置", "按报警区域设置", "无所谓"],
            answer: "B",
            explanation: "总线短路隔离器应按防火分区设置，每个隔离器保护的设备数量不宜超过32个。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防给水系统
        {
            id: 6131,
            type: "single",
            question: "室内消火栓系统的水枪充实水柱不应小于多少米？",
            options: ["7米", "10米", "13米", "15米"],
            answer: "B",
            explanation: "高层建筑室内消火栓系统充实水柱不应小于10米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6132,
            type: "single",
            question: "室内消火栓的布置应保证每个防火分区有多少个消火栓？",
            options: ["1个", "2个", "3个", "无所谓"],
            answer: "A",
            explanation: "室内消火栓的布置应保证每个防火分区至少有1个消火栓。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6133,
            type: "single",
            question: "消防水泵的流量扬程曲线应为什么曲线？",
            options: ["陡降型", "平缓型", "驼峰型", "无所谓"],
            answer: "B",
            explanation: "消防水泵的流量扬程曲线应为平缓型，避免系统超压。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6134,
            type: "single",
            question: "消防水泵的主备泵切换时间不应大于多少秒？",
            options: ["30秒", "60秒", "90秒", "120秒"],
            answer: "A",
            explanation: "消防水泵的主备泵切换时间不应大于30秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6135,
            type: "single",
            question: "消防水泵吸水管流速不应大于多少米每秒？",
            options: ["1.0m/s", "1.2m/s", "1.6m/s", "2.0m/s"],
            answer: "B",
            explanation: "消防水泵吸水管流速不应大于1.2m/s，出水管流速不应大于2.0m/s。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6136,
            type: "single",
            question: "消防水泵出水管上应设置什么阀门？",
            options: ["止回阀", "闸阀", "蝶阀", "以上都要设置"],
            answer: "D",
            explanation: "消防水泵出水管上应设置止回阀、闸阀或蝶阀等阀门。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6137,
            type: "single",
            question: "消防水泵吸水管上的阀门应采用什么阀门？",
            options: ["止回阀", "闸阀", "蝶阀", "球阀"],
            answer: "B",
            explanation: "消防水泵吸水管上的阀门应采用闸阀，便于检修。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6138,
            type: "single",
            question: "消防水箱的设置高度应满足什么要求？",
            options: ["任意高度", "最不利点消火栓静水压力要求", "美观要求", "无所谓"],
            answer: "B",
            explanation: "消防水箱的设置高度应满足最不利点消火栓静水压力要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6139,
            type: "single",
            question: "高位消防水箱的有效容积应不小于多少立方米？",
            options: ["6m³", "12m³", "18m³", "36m³"],
            answer: "A",
            explanation: "一类高层建筑高位消防水箱有效容积不应小于18m³，二类高层不应小于12m³。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6140,
            type: "single",
            question: "消防水池的有效容积应满足什么要求？",
            options: ["满足火灾延续时间内消防用水量", "越大越好", "无所谓", "满足1小时用水量"],
            answer: "A",
            explanation: "消防水池的有效容积应满足火灾延续时间内消防用水量的要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6141,
            type: "single",
            question: "消防水池的补水时间不宜超过多少小时？",
            options: ["24小时", "36小时", "48小时", "72小时"],
            answer: "C",
            explanation: "消防水池的补水时间不宜超过48小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6142,
            type: "single",
            question: "消火栓系统管道的工作压力不应大于多少兆帕？",
            options: ["1.0MPa", "1.2MPa", "1.6MPa", "2.0MPa"],
            answer: "B",
            explanation: "消火栓系统管道的工作压力不应大于1.2MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6143,
            type: "single",
            question: "减压阀的设置应符合什么要求？",
            options: ["安装在主管道", "安装在分支管道", "安装在报警阀前", "无所谓"],
            answer: "A",
            explanation: "减压阀应安装在报警阀前，且宜采用比例式减压阀。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6144,
            type: "single",
            question: "消防水泵的轴封机构应采用什么密封？",
            options: ["填料密封", "机械密封", "两者均可", "无所谓"],
            answer: "B",
            explanation: "消防水泵的轴封机构应采用机械密封，确保密封可靠。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6145,
            type: "single",
            question: "消防水泵基础的设计尺寸应满足什么要求？",
            options: ["设备重量1.5倍", "设备重量2倍", "无所谓", "美观即可"],
            answer: "A",
            explanation: "消防水泵基础的设计尺寸应满足水泵市重1.5倍以上的要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 火灾自动报警系统深入
        {
            id: 6146,
            type: "single",
            question: "火灾探测器按响应参数分类不包括哪种类型？",
            options: ["感温探测器", "感烟探测器", "感光探测器", "可燃气体探测器"],
            answer: "C",
            explanation: "火灾探测器按响应参数分为感温、感烟、可燃气体等类型，感光探测器不是标准分类。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6147,
            type: "single",
            question: "火焰探测器主要适用于什么场所？",
            options: ["阴燃火灾", "快速燃烧火灾", "缓慢阴燃", "所有场所"],
            answer: "B",
            explanation: "火焰探测器适用于快速燃烧的火灾场所，能探测火焰发出的紫外或红外辐射。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6148,
            type: "single",
            question: "线型火灾探测器的探测范围用什么表示？",
            options: ["长度", "宽度", "长度和宽度", "面积"],
            answer: "A",
            explanation: "线型火灾探测器（感温、感烟）的探测范围用长度表示。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6149,
            type: "single",
            question: "点型火灾探测器的保护面积用什么单位？",
            options: ["米", "平方米", "立方米", "无关"],
            answer: "B",
            explanation: "点型火灾探测器的保护面积以平方米为单位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6150,
            type: "single",
            question: "火灾报警控制器的报警声压级应不小于多少分贝？",
            options: ["50dB", "65dB", "75dB", "85dB"],
            answer: "C",
            explanation: "火灾报警控制器的报警声压级应不小于75dB。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6151,
            type: "single",
            question: "火灾报警控制器应能显示的信息包括？",
            options: ["报警时间", "报警部位", "报警类型", "以上都是"],
            answer: "D",
            explanation: "火灾报警控制器应能显示报警时间、报警部位和报警类型等信息。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6152,
            type: "single",
            question: "火灾报警控制器在何种情况下会发出故障报警声信号？",
            options: ["探测器故障", "线路短路", "线路断路", "以上都会"],
            answer: "D",
            explanation: "探测器故障、线路短路或断路都会触发故障报警声信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6153,
            type: "single",
            question: "火灾报警控制器复位后，还需要人工处理的程序是什么？",
            options: ["无", "火灾报警控制器自检", "火灾报警控制器消音", "屏蔽信息"],
            answer: "D",
            explanation: "火灾报警控制器复位后，屏蔽信息需要人工解除后才能恢复正常监控。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6154,
            type: "single",
            question: "火灾报警控制器的屏蔽功能主要用于什么情况？",
            options: ["暂时隔离故障设备", "永久移除设备", "调试设备", "测试系统"],
            answer: "A",
            explanation: "屏蔽功能用于暂时隔离故障设备，使系统能继续监控其他设备。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6155,
            type: "single",
            question: "火灾报警控制器的打印机的打印速度是多少？",
            options: ["每秒不少于10个字符", "每秒不少于20个字符", "每秒不少于30个字符", "无所谓"],
            answer: "A",
            explanation: "火灾报警控制器的打印速度应不低于每秒10个字符。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6156,
            type: "single",
            question: "火灾报警控制器与区域报警控制器之间的关系是什么？",
            options: ["主从关系", "完全独立", "并列关系", "无所谓"],
            answer: "A",
            explanation: "区域报警控制器从属于火灾报警控制器（集中机），构成主从式报警系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6157,
            type: "single",
            question: "火灾报警控制器按应用方式分类可分为哪两种？",
            options: ["独立型和区域型", "区域型和集中型", "集中型和通用型", "独立型和联动型"],
            answer: "C",
            explanation: "火灾报警控制器按应用方式分为集中型和通用型两种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6158,
            type: "single",
            question: "火灾报警控制器的交流电源输入电压适应范围是多少？",
            options: ["187～242V", "170～242V", "190～250V", "180～260V"],
            answer: "A",
            explanation: "火灾报警控制器的交流电源输入电压适应范围为187～242V。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6159,
            type: "single",
            question: "火灾报警控制器在环境温度0～40℃时，相对湿度不应超过多少？",
            options: ["80%", "90%", "95%", "100%"],
            answer: "C",
            explanation: "火灾报警控制器在0～40℃环境温度时，相对湿度不应超过95%。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6160,
            type: "single",
            question: "感烟探测器的保护面积与哪个因素无关？",
            options: ["地面面积", "房间高度", "屋顶坡度", "探测器颜色"],
            answer: "D",
            explanation: "感烟探测器的保护面积与地面面积、房间高度和屋顶坡度有关，与探测器颜色无关。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防通信设施
        {
            id: 6161,
            type: "single",
            question: "消防控制室应设置什么通信设备？",
            options: ["消防专用电话", "外线电话", "对讲机", "以上都是"],
            answer: "D",
            explanation: "消防控制室应设置消防专用电话、外线电话和对讲机等通信设备。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6162,
            type: "single",
            question: "消防专用电话网络应为什么独立的通信系统？",
            options: ["区域电话", "城市电话", "消防电话", "无所谓"],
            answer: "C",
            explanation: "消防专用电话网络应为独立的消防电话通信系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6163,
            type: "single",
            question: "消防控制室应设置什么报警装置？",
            options: ["火灾报警装置", "故障报警装置", "信息显示装置", "以上都是"],
            answer: "D",
            explanation: "消防控制室应设置火灾报警装置、故障报警装置和信息显示装置。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6164,
            type: "single",
            question: "消防控制室图形显示装置应能显示什么信息？",
            options: ["建筑总平面图", "保护对象平面图", "系统分布图", "以上都是"],
            answer: "D",
            explanation: "消防控制室图形显示装置应能显示建筑总平面图、保护对象平面图和系统分布图。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6165,
            type: "single",
            question: "消防广播系统应采用什么电压级别？",
            options: ["24V", "48V", "100V", "220V"],
            answer: "C",
            explanation: "消防广播系统应采用100V电压级别进行音频信号传输。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6166,
            type: "single",
            question: "消防广播扬声器的功率不应小于多少瓦？",
            options: ["1W", "3W", "5W", "10W"],
            answer: "B",
            explanation: "消防广播扬声器的功率不应小于3W。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6167,
            type: "single",
            question: "火灾确认后，消防广播应如何启动？",
            options: ["全楼广播", "着火层及相邻层广播", "地下室广播", "任意区域广播"],
            answer: "B",
            explanation: "火灾确认后，消防广播应启动着火层及相邻层广播，引导人员疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6168,
            type: "single",
            question: "消防广播系统的备用电源应能保证系统连续工作多少小时？",
            options: ["4小时", "8小时", "12小时", "24小时"],
            answer: "B",
            explanation: "消防广播系统的备用电源应能保证系统连续工作8小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6169,
            type: "single",
            question: "消防专用电话插孔的设置间距不应大于多少米？",
            options: ["20米", "30米", "50米", "100米"],
            answer: "B",
            explanation: "消防专用电话插孔的设置间距不应大于30米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6170,
            type: "single",
            question: "消防控制室应配备什么直拨外线电话？",
            options: ["119火警电话", "单位值班电话", "无所谓", "普通电话"],
            answer: "A",
            explanation: "消防控制室应配备直拨119火警电话的外线电话。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6171,
            type: "single",
            question: "消防控制室图形显示装置的汉字显示时间不应大于多少秒？",
            options: ["1秒", "3秒", "5秒", "10秒"],
            answer: "B",
            explanation: "消防控制室图形显示装置的汉字显示时间不应大于3秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6172,
            type: "single",
            question: "火灾报警传输设备应能将火灾报警控制器发出的信息传送到什么机构？",
            options: ["消防救援机构", "单位领导", "物业", "无所谓"],
            answer: "A",
            explanation: "火灾报警传输设备应能将火灾报警信息传送至消防救援机构。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6173,
            type: "single",
            question: "消防控制室应设置的设备不包括？",
            options: ["火灾报警控制器", "消防联动控制器", "娱乐设备", "消防电话总机"],
            answer: "C",
            explanation: "消防控制室应设置火灾报警控制器、消防联动控制器和消防电话总机等，不应设置娱乐设备。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6174,
            type: "single",
            question: "消防控制室对消防设备的监控权应为什么优先？",
            options: ["自动控制", "手动控制", "远程控制", "现场控制"],
            answer: "D",
            explanation: "消防控制室对消防设备的监控权应为现场控制优先。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6175,
            type: "single",
            question: "火灾报警控制器主机之外的附加显示装置应设置在哪里？",
            options: ["任意位置", "消防控制室内", "保护区域", "无所谓"],
            answer: "B",
            explanation: "火灾报警控制器主机之外的附加显示装置应设置在消防控制室内。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防法律法规
        {
            id: 6176,
            type: "single",
            question: "消防工作的方针是什么？",
            options: ["预防为主，防消结合", "安全第一，预防为主", "以人为本，安全第一", "防消结合，安全第一"],
            answer: "A",
            explanation: "我国消防工作实行“预防为主，防消结合”的方针。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6177,
            type: "single",
            question: "机关、团体、企业、事业等单位应按照什么标准配置消防设施器材？",
            options: ["国家标准或行业标准", "企业标准", "无所谓", "进口标准"],
            answer: "A",
            explanation: "机关、团体、企业、事业等单位应按照国家标准或行业标准配置消防设施器材。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6178,
            type: "single",
            question: "消防安全重点单位应履行什么消防安全职责？",
            options: ["确定消防安全管理人", "建立消防档案", "定期组织演练", "以上都是"],
            answer: "D",
            explanation: "消防安全重点单位应履行确定消防安全管理人、建立消防档案、定期组织演练等职责。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6179,
            type: "single",
            question: "消防设施操作人员应取得什么证书方可上岗？",
            options: ["职业资格证书", "上岗证", "结业证书", "不需要证书"],
            answer: "A",
            explanation: "消防设施操作人员应取得消防设施操作员职业资格证书后方可上岗。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6180,
            type: "single",
            question: "消防设施维护保养检测机构应取得什么资质？",
            options: ["消防安全评估资质", "消防技术服务机构资质", "无所谓资质", "建筑企业资质"],
            answer: "B",
            explanation: "消防设施维护保养检测机构应取得消防技术服务机构资质。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6181,
            type: "single",
            question: "人员密集场所的消防安全管理人应具备什么条件？",
            options: ["经过消防安全培训", "具有消防工程师资格", "无所谓", "具有消防员经历"],
            answer: "A",
            explanation: "人员密集场所的消防安全管理人应经过消防安全培训。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6182,
            type: "single",
            question: "消防控制室值班人员应满足什么要求？",
            options: ["持证上岗", "每日24小时值班", "每班不少于2人", "以上都是"],
            answer: "D",
            explanation: "消防控制室值班人员应持证上岗，每日24小时值班，每班不少于2人。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6183,
            type: "single",
            question: "消防安全重点单位应当按照灭火和应急疏散预案，至少多长时间进行一次演练？",
            options: ["每季度", "每半年", "每年", "每月"],
            answer: "A",
            explanation: "消防安全重点单位应至少每季度进行一次灭火和应急疏散预案演练。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6184,
            type: "single",
            question: "建筑消防设施的维护保养记录应存档多长时间？",
            options: ["不少于1年", "不少于2年", "不少于5年", "永久保存"],
            answer: "C",
            explanation: "建筑消防设施的维护保养记录应存档不少于5年。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6185,
            type: "single",
            question: "消防技术服务机构出具虚假文件的，将受到什么处罚？",
            options: ["罚款", "吊销资质", "依法追究刑事责任", "以上处罚"],
            answer: "D",
            explanation: "消防技术服务机构出具虚假文件的，将受到罚款、吊销资质和追究刑事责任等处罚。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6186,
            type: "single",
            question: "单位消防安全管理人对单位的消防安全工作负责，对消防安全责任人负责。",
            options: ["正确", "错误", "部分正确", "无所谓"],
            answer: "A",
            explanation: "单位消防安全管理人对单位的消防安全工作负责，并定期向消防安全责任人报告工作情况。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6187,
            type: "single",
            question: "消防设施投入使用后，应定期进行什么操作？",
            options: ["巡查", "检测", "维护保养", "以上都是"],
            answer: "D",
            explanation: "消防设施投入使用后应定期进行巡查、检测和维护保养，确保设施完好有效。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6188,
            type: "single",
            question: "自动消防设施应委托什么机构进行定期检测？",
            options: ["消防救援机构", "具有相应资质的消防技术服务机构", "无所谓", "设备厂家"],
            answer: "B",
            explanation: "自动消防设施应委托具有相应资质的消防技术服务机构进行定期检测。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6189,
            type: "single",
            question: "建筑消防设施年度检测报告应由谁签字？",
            options: ["检测人员", "技术负责人", "消防安全责任人", "以上都要"],
            answer: "D",
            explanation: "建筑消防设施年度检测报告应由检测人员、技术负责人和消防安全责任人签字。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6190,
            type: "single",
            question: "消防设施操作员分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "D",
            explanation: "消防设施操作员分为5个等级：五级（初级）、四级（中级）、三级（高级）、二级（技师）和一级（高级技师）。",
            module: "消防法律法规",
            categoryId: 3
        },
        // 火灾预防
        {
            id: 6191,
            type: "single",
            question: "建筑内装修材料的燃烧性能等级分为几级？",
            options: ["2级", "3级", "4级", "5级"],
            answer: "C",
            explanation: "建筑内部装修材料燃烧性能等级分为A（不燃）、B1（难燃）、B2（可燃）和B3（易燃）四级。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6192,
            type: "single",
            question: "高层民用建筑的楼梯间、前室应采用什么级别装修材料？",
            options: ["A级", "B1级", "B2级", "B3级"],
            answer: "A",
            explanation: "高层民用建筑的楼梯间、走廊和前室应采用A级不燃装修材料。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6193,
            type: "single",
            question: "建筑内部装修时，疏散走道的顶棚应采用什么级别材料？",
            options: ["A级", "B1级", "B2级", "B3级"],
            answer: "A",
            explanation: "疏散走道顶棚应采用A级不燃装修材料，确保火灾时疏散安全。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6194,
            type: "single",
            question: "电气线路的敷设应符合什么要求？",
            options: ["穿管敷设", "保护措施", "与可燃物保持距离", "以上都是"],
            answer: "D",
            explanation: "电气线路敷设应穿管保护，与可燃物保持必要距离，防止电气火灾。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6195,
            type: "single",
            question: "低压配电线路的铜芯导线截面积不应小于多少平方毫米？",
            options: ["1.5mm²", "2.5mm²", "4mm²", "6mm²"],
            answer: "A",
            explanation: "低压配电线路的铜芯导线截面积不应小于1.5mm²。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6196,
            type: "single",
            question: "插座、开关的安装高度距地面不应小于多少米？",
            options: ["0.8米", "1.0米", "1.3米", "1.8米"],
            answer: "C",
            explanation: "插座、开关的安装高度距地面不应小于1.3米，托儿所、幼儿园不应小于1.8米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6197,
            type: "single",
            question: "电气设备着火的扑救方法首先是？",
            options: ["用水灭火", "切断电源", "用灭火器灭火", "逃离现场"],
            answer: "B",
            explanation: "电气设备着火应首先切断电源，然后再进行灭火和疏散。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6198,
            type: "single",
            question: "临时用电设备应安装什么保护装置？",
            options: ["漏电保护器", "过载保护", "短路保护", "以上都是"],
            answer: "D",
            explanation: "临时用电设备应安装漏电保护器、过载保护和短路保护等保护装置。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6199,
            type: "single",
            question: "仓库物品堆放时，垛与垛之间的距离不应小于多少米？",
            options: ["0.5米", "0.8米", "1.0米", "1.2米"],
            answer: "C",
            explanation: "仓库物品堆放时，垛与垛之间的距离不应小于1.0米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6200,
            type: "single",
            question: "可燃气体探测器应安装在什么位置？",
            options: ["距顶棚0.3m以内", "距地面1.5m以下", "根据气体密度确定", "无所谓位置"],
            answer: "C",
            explanation: "可燃气体探测器的安装位置应根据气体密度确定，比空气轻的气体安装在上部，比空气重的安装在下部。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6201,
            type: "single",
            question: "仓库内消火栓箱前方应留有什么操作空间？",
            options: ["不小于0.5米", "不小于1米", "不小于1.5米", "无所谓"],
            answer: "C",
            explanation: "仓库内消火栓箱前方应留有不小于1.5米的操作空间。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6202,
            type: "single",
            question: "仓库的耐火等级分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "C",
            explanation: "仓库的耐火等级分为一、二、三、四级，一级最高，四级最低。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6203,
            type: "single",
            question: "甲类仓库内什么区域范围内不得有明火和散发火花地点？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "D",
            explanation: "甲类仓库周围20米范围内不得有明火和散发火花地点。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6204,
            type: "single",
            question: "建筑物内疏散走道的最小净宽度不应小于多少米？",
            options: ["0.8米", "1.1米", "1.4米", "1.8米"],
            answer: "C",
            explanation: "建筑物内疏散走道的最小净宽度不应小于1.4米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6205,
            type: "single",
            question: "高层建筑内的电影院观众厅的疏散门净宽度不应小于多少米？",
            options: ["1.2米", "1.4米", "1.6米", "2.0米"],
            answer: "B",
            explanation: "高层建筑内的电影院观众厅的疏散门净宽度不应小于1.4米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6206,
            type: "single",
            question: "火灾危险性分类中，甲类危险性最大。",
            options: ["正确", "错误", "部分正确", "无所谓"],
            answer: "A",
            explanation: "根据生产、储存火灾危险性分类，甲类火灾危险性最大。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6207,
            type: "single",
            question: "爆炸下限小于10%的气体属于哪类火灾危险性？",
            options: ["甲类", "乙类", "丙类", "丁类"],
            answer: "A",
            explanation: "爆炸下限小于10%的气体属于甲类火灾危险性。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6208,
            type: "single",
            question: "乙类厂房与明火或散发火花地点的防火间距不应小于多少米？",
            options: ["20米", "25米", "30米", "50米"],
            answer: "C",
            explanation: "乙类厂房与明火或散发火花地点的防火间距不应小于30米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6209,
            type: "single",
            question: "消防车道边缘距可燃物堆场不应小于多少米？",
            options: ["2米", "3米", "5米", "10米"],
            answer: "C",
            explanation: "消防车道边缘距可燃物堆场不应小于5米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6210,
            type: "single",
            question: "易燃易爆危险品应存放在什么建筑内？",
            options: ["普通建筑", "专用库房", "露天场地", "无所谓"],
            answer: "B",
            explanation: "易燃易爆危险品应存放在专用库房内，并采取防火防爆措施。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6211,
            type: "single",
            question: "液化石油气储罐与所属泵房的距离不应小于多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "C",
            explanation: "液化石油气储罐与所属泵房的距离不应小于15米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6212,
            type: "single",
            question: "燃气锅炉房应设置什么报警装置？",
            options: ["可燃气体报警装置", "感温探测器", "感烟探测器", "无所谓"],
            answer: "A",
            explanation: "燃气锅炉房应设置可燃气体报警装置，并与事故通风系统联动。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6213,
            type: "single",
            question: "建筑内装修时，墙面装修材料的B1级表示什么燃烧性能？",
            options: ["不燃", "难燃", "可燃", "易燃"],
            answer: "B",
            explanation: "装修材料燃烧性能等级中，B1级为难燃材料，B2级为可燃材料。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6214,
            type: "single",
            question: "歌舞娱乐放映游艺场所的顶棚应采用什么级别材料？",
            options: ["A级", "B1级", "B2级", "B3级"],
            answer: "A",
            explanation: "歌舞娱乐放映游艺场所的顶棚应采用A级不燃材料。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6215,
            type: "single",
            question: "商场内的仓库应采用什么防火分隔措施？",
            options: ["防火墙", "防火卷帘", "防火门", "以上都是"],
            answer: "D",
            explanation: "商场内的仓库应采用防火墙、防火卷帘和防火门进行防火分隔。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6216,
            type: "single",
            question: "建筑物内柴油发电机房应设置什么灭火系统？",
            options: ["水喷淋系统", "气体灭火系统", "干粉灭火器", "以上都可以"],
            answer: "B",
            explanation: "柴油发电机房宜采用气体灭火系统进行保护。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6217,
            type: "single",
            question: "空调系统的风管穿过防火分区时，应设置什么阀门？",
            options: ["70℃防火阀", "150℃防火阀", "280℃排烟防火阀", "无所谓"],
            answer: "A",
            explanation: "空调系统的风管穿过防火分区时应设置70℃防火阀。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6218,
            type: "single",
            question: "厨房的油烟管道应至少多长时间清洗一次？",
            options: ["3个月", "6个月", "1年", "2年"],
            answer: "A",
            explanation: "厨房的油烟管道应至少每3个月清洗一次，防止油污积聚引发火灾。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6219,
            type: "single",
            question: "电缆井应采用什么材料进行防火封堵？",
            options: ["防火卷帘", "防火泥", "不燃材料", "无所谓"],
            answer: "C",
            explanation: "电缆井应采用不燃材料进行防火封堵，防止火灾蔓延。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6220,
            type: "single",
            question: "施工现场的消防安全管理应由谁负责？",
            options: ["建设单位", "施工单位", "监理单位", "无所谓"],
            answer: "B",
            explanation: "施工现场的消防安全管理应由施工单位负责。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6221,
            type: "single",
            question: "施工现场的消防车道宽度不应小于多少米？",
            options: ["3米", "4米", "5米", "6米"],
            answer: "B",
            explanation: "施工现场的消防车道宽度不应小于4米。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6222,
            type: "single",
            question: "施工现场动火作业前应办理什么手续？",
            options: ["动火许可证", "施工许可证", "消防安全证", "无所谓"],
            answer: "A",
            explanation: "施工现场动火作业前应办理动火许可证，并采取防火措施。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6223,
            type: "single",
            question: "公共娱乐场所的营业时间不得超过几点？",
            options: ["22点", "24点", "凌晨2点", "无限制"],
            answer: "B",
            explanation: "公共娱乐场所的营业时间不得超过24点。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6224,
            type: "single",
            question: "公共娱乐场所的疏散门应采用什么门？",
            options: ["旋转门", "卷帘门", "平开门", "推拉门"],
            answer: "C",
            explanation: "公共娱乐场所的疏散门应采用平开门，不应采用旋转门、卷帘门。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6225,
            type: "single",
            question: "易燃易爆危险品生产车间应安装什么通风设备？",
            options: ["自然通风", "机械通风", "事故通风", "无所谓"],
            answer: "C",
            explanation: "易燃易爆危险品生产车间应安装事故通风设备，确保安全。",
            module: "火灾预防",
            categoryId: 4
        },
        // 多选题
        {
            id: 6226,
            type: "multi",
            question: "火灾自动报警系统包括哪些组件？",
            options: ["火灾探测器", "手动报警按钮", "火灾报警控制器", "消防广播"],
            answer: ["A", "B", "C"],
            explanation: "火灾自动报警系统包括火灾探测器、手动报警按钮和火灾报警控制器，消防广播属于联动控制系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6227,
            type: "multi",
            question: "消防控制室值班人员的职责包括哪些？",
            options: ["监视设备运行状态", "记录报警信息", "处理报警信号", "维修消防设备"],
            answer: ["A", "B", "C"],
            explanation: "消防控制室值班人员职责包括监视设备运行状态、记录报警信息、处理报警信号等，维修设备由专业人员负责。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6228,
            type: "multi",
            question: "自动喷水灭火系统的组成包括哪些组件？",
            options: ["闭式喷头", "报警阀组", "水流指示器", "消防水泵"],
            answer: ["A", "B", "C", "D"],
            explanation: "自动喷水灭火系统由闭式喷头、报警阀组、水流指示器、末端试水装置和消防水泵等组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6229,
            type: "multi",
            question: "气体灭火系统适用于哪些场所？",
            options: ["计算机房", "配电房", "档案室", "停车场"],
            answer: ["A", "B", "C"],
            explanation: "气体灭火系统适用于不能用水灭火的场所，如计算机房、配电房、档案室、文物库房等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6230,
            type: "multi",
            question: "防排烟系统的组成包括哪些设备？",
            options: ["送风机", "排烟风机", "送风口", "排烟口"],
            answer: ["A", "B", "C", "D"],
            explanation: "防排烟系统由送风机、排烟风机、送风口、排烟口、风管及控制系统组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6231,
            type: "multi",
            question: "消防应急照明和疏散指示系统的组成包括哪些？",
            options: ["应急照明灯具", "疏散指示标志", "应急照明配电箱", "集中电源"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防应急照明和疏散指示系统由应急照明灯具、疏散指示标志、配电箱、集中电源和应急照明控制器组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6232,
            type: "multi",
            question: "手提式灭火器的使用方法包括哪些步骤？",
            options: ["拔掉保险销", "握住喷管", "按下压把", "对准火焰根部喷射"],
            answer: ["A", "B", "C", "D"],
            explanation: "手提式灭火器使用步骤为：拔掉保险销、握住喷管、按下压把、对准火焰根部喷射。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6233,
            type: "multi",
            question: "消防水带检查项目包括哪些？",
            options: ["接口是否完好", "胶层是否脱落", "有无霉变", "压力指示"],
            answer: ["A", "B", "C"],
            explanation: "消防水带检查项目包括接口完好性、胶层完整性、有无霉变等，压力检查通过试压进行。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6234,
            type: "multi",
            question: "火灾报警控制器的屏蔽功能可以屏蔽哪些设备？",
            options: ["探测器", "模块", "火灾报警控制器本身", "总线"],
            answer: ["A", "B"],
            explanation: "火灾报警控制器的屏蔽功能可以屏蔽探测器和模块等外部设备，使系统继续监控其他设备。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6235,
            type: "multi",
            question: "消防联动控制器的控制对象包括哪些？",
            options: ["消防水泵", "防排烟系统", "消防电梯", "消防广播"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防联动控制器的控制对象包括消防水泵、防排烟系统、消防电梯、消防广播、消防应急照明等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6236,
            type: "multi",
            question: "消防控制室应配置的消防器材包括哪些？",
            options: ["手提式灭火器", "消防过滤式综合防毒面具", "消防斧", "消防腰带"],
            answer: ["A", "B", "C"],
            explanation: "消防控制室应配置手提式灭火器、消防过滤式综合防毒面具、消防斧等消防器材。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6237,
            type: "multi",
            question: "火灾应急广播的播放程序包括哪些？",
            options: ["全楼广播", "着火层广播", "相邻层广播", "地下室广播"],
            answer: ["B", "C"],
            explanation: "火灾应急广播应首先对着火层和相邻层进行广播，引导人员疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6238,
            type: "multi",
            question: "湿式报警阀组包括哪些组件？",
            options: ["湿式报警阀", "延迟器", "压力开关", "水力警铃"],
            answer: ["A", "B", "C", "D"],
            explanation: "湿式报警阀组由湿式报警阀、延迟器、压力开关和水力警铃组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6239,
            type: "multi",
            question: "消防给水系统的组成包括哪些设施？",
            options: ["消防水池", "消防水箱", "消火栓", "水泵接合器"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防给水系统由消防水池、消防水箱、消火栓系统、水泵接合器、消防水泵等组成。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6240,
            type: "multi",
            question: "消防设施操作员应具备哪些基本技能？",
            options: ["操作火灾自动报警系统", "操作自动喷水灭火系统", "操作消防广播系统", "维修消防设备"],
            answer: ["A", "B", "C"],
            explanation: "消防设施操作员应能操作火灾自动报警系统、自动喷水灭火系统、消防广播系统等，维修由专业人员负责。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6241,
            type: "multi",
            question: "建筑消防设施维护保养的内容包括哪些？",
            options: ["清洁", "润滑", "调整", "更换损坏部件"],
            answer: ["A", "B", "C", "D"],
            explanation: "建筑消防设施维护保养内容包括清洁、润滑、调整、更换损坏部件等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6242,
            type: "multi",
            question: "消防安全重点单位应当进行每日防火巡查，巡查内容包括哪些？",
            options: ["用火用电情况", "安全出口情况", "消防设施运行情况", "火灾隐患整改情况"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防安全重点单位每日防火巡查内容包括用火用电情况、安全出口、消防设施运行和隐患整改情况。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6243,
            type: "multi",
            question: "消防行政处罚的种类包括哪些？",
            options: ["警告", "罚款", "拘留", "责令停止施工"],
            answer: ["A", "B", "C", "D"],
            explanation: "消防行政处罚种类包括警告、罚款、拘留、责令停止施工、停止使用等。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6244,
            type: "multi",
            question: "灭火和应急疏散预案的内容包括哪些？",
            options: ["组织机构", "报警程序", "灭火程序", "疏散程序"],
            answer: ["A", "B", "C", "D"],
            explanation: "灭火和应急疏散预案应包括组织机构、报警程序、灭火程序、疏散程序、通信保障等内容。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6245,
            type: "multi",
            question: "火灾时人员疏散的基本原则包括哪些？",
            options: ["首先疏散着火层人员", "优先疏散老弱病残人员", "沿疏散指示标志方向疏散", "乘坐电梯快速撤离"],
            answer: ["B", "C"],
            explanation: "火灾疏散应优先疏散老弱病残人员，沿疏散指示标志方向撤离，切勿乘坐电梯。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6246,
            type: "multi",
            question: "火灾确认后，消防控制室应立即采取哪些措施？",
            options: ["启动消防广播", "启动防排烟系统", "关闭所有电源", "启动消防联动系统"],
            answer: ["A", "B", "D"],
            explanation: "火灾确认后消防控制室应启动消防广播、防排烟系统、消防联动系统等，但不关闭所有电源。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6247,
            type: "multi",
            question: "火灾报警控制器发出故障报警声时，可能的故障原因有哪些？",
            options: ["探测器损坏", "总线短路", "总线断路", "主电源断电"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾报警控制器故障报警可能由探测器损坏、总线短路断路、主电源断电等原因引起。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6248,
            type: "multi",
            question: "自动喷水灭火系统水泵启动的方式包括哪些？",
            options: ["自动启动", "手动启动", "机械应急启动", "远程启动"],
            answer: ["A", "B", "C"],
            explanation: "自动喷水灭火系统水泵应具备自动启动、手动启动和机械应急启动三种方式。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6249,
            type: "multi",
            question: "建筑消防设施档案的保存期限为多久？",
            options: ["消防设施基本情况档案应永久保存", "消防设施动态管理档案不少于1年", "不少于5年", "不少于10年"],
            answer: ["A", "C"],
            explanation: "建筑消防设施基本情况档案应永久保存，动态管理档案保存期限不少于5年。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6250,
            type: "multi",
            question: "火灾探测器按探测原理可分为哪些类型？",
            options: ["感烟探测器", "感温探测器", "火焰探测器", "可燃气体探测器"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾探测器按探测原理分为感烟、感温、火焰和可燃气体探测器等类型。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // ==================== 中级消防员新增题目（100道）====================
        // 火灾自动报警系统
        {
            id: 6251,
            type: "single",
            question: "火灾自动报警系统中，感烟探测器的灵敏度等级分为几级？",
            options: ["2级", "3级", "4级", "5级"],
            answer: "B",
            explanation: "感烟探测器灵敏度分为三级：一级灵敏度高（红色），二级灵敏度中等（黄色），三级灵敏度低（蓝色）。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6252,
            type: "single",
            question: "在火灾自动报警系统中，探测区域是指什么？",
            options: ["一个房间", "按防火分区划分的区域", "一只探测器保护的区域", "一层楼"],
            answer: "C",
            explanation: "探测区域是指一只探测器有效探测的范围，一个探测区域可由一只或数只探测器覆盖。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6253,
            type: "single",
            question: "火灾自动报警系统的工作状态显示不包括以下哪项？",
            options: ["火灾报警", "故障报警", "电源状态", "GPS定位"],
            answer: "D",
            explanation: "火灾自动报警系统显示火灾报警、故障报警、屏蔽状态、电源状态等信息，不包括GPS定位功能。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6254,
            type: "single",
            question: "点型感烟探测器至墙壁、梁边的水平距离不应小于多少米？",
            options: ["0.5m", "1.0m", "1.5m", "2.0m"],
            answer: "A",
            explanation: "点型感烟探测器至墙壁、梁边的水平距离不应小于0.5m，以避免遮挡影响探测效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6255,
            type: "single",
            question: "火灾自动报警系统中，报警区域应按什么划分？",
            options: ["楼层", "防火分区", "房间", "探测区域"],
            answer: "B",
            explanation: "报警区域应按防火分区或楼层划分，一个报警区域不宜超过防火分区或楼层的最大允许面积。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6256,
            type: "single",
            question: "在火灾报警控制器上，什么情况会导致'故障'声信号？",
            options: ["有火灾报警", "探测器被遮挡", "系统检测到故障", "手动报警按钮触发"],
            answer: "C",
            explanation: "火灾报警控制器的故障声信号表示系统检测到故障，如探测器故障、线路短路或断路等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6257,
            type: "single",
            question: "离子感烟探测器的工作原理是什么？",
            options: ["利用光电效应", "利用电离原理", "利用热敏原理", "利用红外原理"],
            answer: "B",
            explanation: "离子感烟探测器利用放射性物质使空气电离，当烟雾进入电离室时影响离子电流，从而检测烟雾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6258,
            type: "single",
            question: "消防控制室应能在收到火灾报警后多少时间内发出警报？",
            options: ["30秒", "1分钟", "2分钟", "5分钟"],
            answer: "B",
            explanation: "消防控制室收到火灾报警后，应在1分钟内发出警报，联动相关设备启动灭火救援程序。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6259,
            type: "single",
            question: "火灾自动报警系统备用电源采用蓄电池时，容量应保证系统连续正常工作多少小时？",
            options: ["4小时", "8小时", "12小时", "24小时"],
            answer: "B",
            explanation: "火灾自动报警系统备用电源采用蓄电池时，容量应保证系统在主电源断电后连续正常工作8小时以上。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6260,
            type: "single",
            question: "在火灾报警控制器上，'监管'状态指示灯亮表示什么？",
            options: ["有火灾报警", "有故障", "监管设备报警", "系统屏蔽"],
            answer: "C",
            explanation: "监管状态指示灯亮表示监管设备（如压力开关、水流指示器等）发出报警信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防控制室值班
        {
            id: 6261,
            type: "single",
            question: "消防控制室实行每日24小时专人值班制度，每班不应少于多少人？",
            options: ["1人", "2人", "3人", "4人"],
            answer: "B",
            explanation: "消防控制室应实行每日24小时专人值班制度，每班不应少于2人，确保及时发现和处理火灾报警。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6262,
            type: "single",
            question: "消防控制室值班人员接到火灾报警信号后，应在多少分钟内到达现场确认？",
            options: ["1分钟", "3分钟", "5分钟", "10分钟"],
            answer: "C",
            explanation: "消防控制室值班人员接到火灾报警后，应在5分钟内携带应急装备到达现场进行确认。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6263,
            type: "single",
            question: "消防控制室内设备面盘前的操作距离，双列布置时不应小于多少米？",
            options: ["1.0m", "1.5m", "2.0m", "3.0m"],
            answer: "C",
            explanation: "设备面盘前的操作距离，单列布置时不小于1.5m，双列布置时不小于2.0m。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6264,
            type: "single",
            question: "火灾确认后，消防控制室应立即启动的灭火设施不包括哪项？",
            options: ["室内消火栓系统", "自动喷水灭火系统", "气体灭火系统", "电梯"],
            answer: "D",
            explanation: "火灾确认后，消防控制室启动消火栓、自动喷水、气体灭火等系统，电梯应迫降而非启动。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6265,
            type: "single",
            question: "消防控制室的消防设备应急电源在自动状态下应保持连续供电多少小时？",
            options: ["4小时", "6小时", "8小时", "12小时"],
            answer: "C",
            explanation: "消防控制室的消防设备应急电源在自动状态下应保持连续供电8小时以上。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6266,
            type: "single",
            question: "消防控制室值班期间，每班记录系统运行状态信息不应少于多少条？",
            options: ["10条", "50条", "100条", "200条"],
            answer: "C",
            explanation: "消防控制室值班期间，每班记录系统运行状态信息不应少于100条，确保可追溯性。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6267,
            type: "single",
            question: "火灾报警控制器开机时，应先开哪个电源？",
            options: ["主电源", "备用电源", "控制器电源", "探测器电源"],
            answer: "A",
            explanation: "火灾报警控制器开机时应先开主电源，确认主电源正常后再开备用电源，关机顺序相反。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6268,
            type: "single",
            question: "消防控制室应能显示哪些系统的联动反馈信号？",
            options: ["消火栓系统", "自动喷水灭火系统", "防排烟系统", "以上全部"],
            answer: "D",
            explanation: "消防控制室应能显示消火栓、自动喷水、防排烟、防火卷帘、消防广播等所有消防联动系统的反馈信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6269,
            type: "single",
            question: "消防控制室的下列资料中，不需要保存的是哪项？",
            options: ["消防设施系统图", "值班记录", "员工工资表", "操作规程"],
            answer: "C",
            explanation: "消防控制室需要保存消防设施系统图、值班记录、操作规程等技术资料，员工工资表不属于消防资料。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6270,
            type: "single",
            question: "火灾报警控制器在接收到第一个火灾报警信号后，应执行什么操作？",
            options: ["立即启动灭火系统", "进入报警确认程序", "直接拨打119", "启动消防广播"],
            answer: "B",
            explanation: "控制器接收到第一个火灾报警信号后，应进入报警确认程序，值班人员到现场确认是否发生火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 自动喷水灭火系统
        {
            id: 6271,
            type: "single",
            question: "自动喷水灭火系统中，闭式喷头的适用场所温度范围是多少？",
            options: ["4℃-68℃", "0℃-68℃", "4℃-79℃", "0℃-79℃"],
            answer: "B",
            explanation: "闭式喷头的适用环境温度范围一般为0℃-68℃，应根据场所最高环境温度选择合适额定温度的喷头。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6272,
            type: "single",
            question: "湿式自动喷水灭火系统最适合的环境温度范围是？",
            options: ["0℃-4℃", "4℃-70℃", "70℃-100℃", "任何温度"],
            answer: "B",
            explanation: "湿式系统管道内充满有压水，环境温度宜在4℃-70℃之间，低于4℃会结冰，高于70℃会影响灭火效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6273,
            type: "single",
            question: "自动喷水灭火系统的喷头选型中，高大空间场所应选用什么喷头？",
            options: ["下垂型喷头", "直立型喷头", "快速响应喷头", "大流量喷头"],
            answer: "D",
            explanation: "高大空间场所（如中庭、仓库）应选用大流量喷头，以满足增大喷水强度的要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6274,
            type: "single",
            question: "湿式报警阀组应安装在什么位置？",
            options: ["喷头附近", "报警管路上", "水流方向之前", "系统末端"],
            answer: "B",
            explanation: "湿式报警阀组安装在报警管路上，用于监测和控制水压，当喷头动作时自动发出报警信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6275,
            type: "single",
            question: "末端试水装置的作用是什么？",
            options: ["测试系统压力", "检测系统启动和报警功能", "排水作用", "代替喷头"],
            answer: "B",
            explanation: "末端试水装置用于测试自动喷水灭火系统的启动和报警功能，检测系统是否正常工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6276,
            type: "single",
            question: "闭式自动喷水灭火系统，管网的工作压力不应大于多少MPa？",
            options: ["1.0MPa", "1.2MPa", "1.6MPa", "2.0MPa"],
            answer: "B",
            explanation: "闭式自动喷水灭火系统管网的工作压力不应大于1.2MPa，以保证系统安全运行。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6277,
            type: "single",
            question: "湿式系统中，水流指示器的作用是什么？",
            options: ["报警", "报警和显示火灾区域", "控制水泵", "调节水压"],
            answer: "B",
            explanation: "水流指示器的作用是当喷头动作时，通过检测水流信号报警并显示火灾区域位置。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6278,
            type: "single",
            question: "自动喷水灭火系统水泵应能自动启动，启动时间距火灾开始时间不宜超过多少分钟？",
            options: ["2分钟", "5分钟", "10分钟", "15分钟"],
            answer: "B",
            explanation: "自动喷水灭火系统水泵应能自动启动，启动时间距火灾开始时间不宜超过5分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6279,
            type: "single",
            question: "报警阀组测试时，湿式报警阀应在什么压力下启动？",
            options: ["0.01MPa", "0.05MPa", "0.10MPa", "0.15MPa"],
            answer: "D",
            explanation: "湿式报警阀应在压力达到0.14MPa时启动报警，当管网滴漏时可在0.05-0.10MPa范围内启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6280,
            type: "single",
            question: "自动喷水灭火系统维护管理中，对报警阀组的检查周期是？",
            options: ["每日", "每周", "每月", "每季度"],
            answer: "A",
            explanation: "自动喷水灭火系统应每日对报警阀组进行外观检查，每周进行功能测试，确保系统随时可用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 灭火器使用
        {
            id: 6281,
            type: "single",
            question: "ABC干粉灭火器主要针对哪类火灾？",
            options: ["A类火灾", "B类火灾", "C类火灾", "ABC类火灾"],
            answer: "D",
            explanation: "ABC干粉灭火器适用于A类（固体）、B类（液体）、C类（气体）火灾的扑救。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6282,
            type: "single",
            question: "灭火器维修期限，水基型灭火器为几年？",
            options: ["1年", "2年", "3年", "5年"],
            answer: "C",
            explanation: "水基型灭火器维修期限为3年，干粉灭火器为5年，洁净气体灭火器为5年，二氧化碳灭火器为12年。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6283,
            type: "single",
            question: "手提式灭火器使用时，灭火距离目标一般为多少米？",
            options: ["1-2米", "2-3米", "3-5米", "5-8米"],
            answer: "C",
            explanation: "手提式灭火器使用时，灭火距离目标一般为3-5米，过近影响灭火效果，过远喷射力度不够。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6284,
            type: "single",
            question: "使用二氧化碳灭火器时，应注意什么危险？",
            options: ["触电", "冻伤", "中毒", "燃烧"],
            answer: "B",
            explanation: "二氧化碳灭火器喷射时温度很低（-78℃），直接接触会造成冻伤，使用时应注意防护。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6285,
            type: "single",
            question: "灭火器压力表上绿色区域表示什么？",
            options: ["压力不足", "压力正常", "压力过高", "已过期"],
            answer: "B",
            explanation: "灭火器压力表绿色区域表示压力正常，红色表示压力不足或过高，黄色表示超压。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6286,
            type: "single",
            question: "扑救带电设备火灾时，不宜使用哪种灭火器？",
            options: ["二氧化碳灭火器", "干粉灭火器", "水基型灭火器", "洁净气体灭火器"],
            answer: "C",
            explanation: "水基型灭火器含有水分，扑救带电设备火灾可能造成触电危险，应选用干粉、二氧化碳等灭火器。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6287,
            type: "single",
            question: "灭火器的报废年限，手提式二氧化碳灭火器为多少年？",
            options: ["5年", "10年", "12年", "15年"],
            answer: "C",
            explanation: "手提式二氧化碳灭火器报废年限为12年，钢瓶报废年限参照气瓶安全技术规范。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6288,
            type: "single",
            question: "灭火器配置场所的危险等级应根据什么因素划分？",
            options: ["场所面积", "火灾危险性、人员密集程度等", "建筑高度", "投资规模"],
            answer: "B",
            explanation: "灭火器配置场所的危险等级应根据火灾危险性、人员密集程度、可燃物数量等因素划分。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6289,
            type: "single",
            question: "推车式灭火器一般用于哪种场所？",
            options: ["家庭", "小型办公室", "大型工业场所", "个人车辆"],
            answer: "C",
            explanation: "推车式灭火器容量较大（20-100kg），适用于大型工业场所、仓库、车站等需要大量灭火剂的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6290,
            type: "single",
            question: "灭火器扑救液体火灾时，灭火器应对准火焰什么部位喷射？",
            options: ["火焰上部", "火焰中部", "火焰根部", "任意部位"],
            answer: "C",
            explanation: "灭火器扑救液体火灾时，应对准火焰根部喷射，并左右扫射，快速覆盖燃烧表面。",
            module: "消防应急",
            categoryId: 5
        },
        // 消防水带操作
        {
            id: 6291,
            type: "single",
            question: "室内消火栓箱内应配备的水带长度一般为多少米？",
            options: ["10米", "15米", "20米", "25米"],
            answer: "D",
            explanation: "室内消火栓箱内应配备的水带长度一般为25米，公称口径有50mm和65mm两种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6292,
            type: "single",
            question: "消防水带应根据什么原则选用？",
            options: ["价格优先", "与消火栓和喷头相匹配", "颜色鲜艳", "进口品牌"],
            answer: "B",
            explanation: "消防水带选用应与消火栓、喷头的口径相匹配，确保连接密封性和水压传输效率。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6293,
            type: "single",
            question: "消防水带使用后应如何处理？",
            options: ["直接卷起", "晾干后卷起", "扔在地上", "浸泡在水里"],
            answer: "B",
            explanation: "消防水带使用后应冲洗干净，晾干后卷起存放，避免霉变和损坏，延长使用寿命。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6294,
            type: "single",
            question: "消防水带的报废年限一般为多少年？",
            options: ["3年", "5年", "8年", "10年"],
            answer: "B",
            explanation: "消防水带使用年限一般为5-8年，发现破损、老化、接口松动时应及时更换。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6295,
            type: "single",
            question: "室内消火栓栓口压力不应大于多少MPa？",
            options: ["0.5MPa", "0.8MPa", "1.0MPa", "1.2MPa"],
            answer: "A",
            explanation: "室内消火栓栓口压力不应大于0.5MPa，以免水带承受过大压力而破裂，影响灭火效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6296,
            type: "single",
            question: "消防水带展开时，以下哪种方式是错误的？",
            options: ["直线展开", "盘卷展开", "扔摔展开", "折叠展开"],
            answer: "C",
            explanation: "消防水带应盘卷或折叠展开，禁止扔摔展开，以免造成水带接口损坏或内衬破损。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6297,
            type: "single",
            question: "消火栓按钮启动消防水泵的启动方式属于？",
            options: ["自动启动", "手动启动", "联动启动", "远程启动"],
            answer: "B",
            explanation: "消火栓按钮属于手动启动方式，值班人员按下按钮可直接启动消防水泵，无需自动报警确认。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6298,
            type: "single",
            question: "消防水带接口形式不包括以下哪种？",
            options: ["卡式接口", "螺纹式接口", "卡箍式接口", "焊接式接口"],
            answer: "D",
            explanation: "消防水带接口形式有卡式、螺纹式、卡箍式等，焊接式接口不适用于水带连接。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6299,
            type: "single",
            question: "连接消火栓和水枪的接头叫什么名称？",
            options: ["直通", "异径接头", "集水器", "闷盖"],
            answer: "A",
            explanation: "连接消火栓和水枪的接头称为直通，用于连接两段不同口径的水带或水枪。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6300,
            type: "single",
            question: "室外消火栓的布置间距，城市道路两侧一般为多少米？",
            options: ["30-50米", "50-120米", "120-150米", "150-200米"],
            answer: "C",
            explanation: "室外消火栓布置间距，城市道路两侧一般为120-150米，室外消火栓距路边不宜超过2米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 火灾预防
        {
            id: 6301,
            type: "single",
            question: "人员密集场所的安全出口应配备什么标志？",
            options: ["指示标志", "应急照明", "疏散指示标志和应急照明", "消防车道标志"],
            answer: "C",
            explanation: "人员密集场所的安全出口应配备疏散指示标志和应急照明，确保人员紧急疏散时能看清逃生路线。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6302,
            type: "single",
            question: "火灾危险性分类中，甲类仓库储存的物质特性是什么？",
            options: ["闪点≥60℃的液体", "爆炸下限≥10%的气体", "常温下自行分解或在空气中氧化即能导致迅速自燃的物质", "可燃固体"],
            answer: "C",
            explanation: "甲类仓库储存常温下自行分解或在空气中氧化即能导致迅速自燃或爆炸的物质，危险性最高。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6303,
            type: "single",
            question: "建筑内部装修材料燃烧性能等级分为几级？",
            options: ["3级", "4级", "5级", "6级"],
            answer: "B",
            explanation: "建筑内部装修材料燃烧性能等级分为A（不然）、B1（难燃）、B2（可燃）、B3（易燃）四级。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6304,
            type: "single",
            question: "以下哪种行为容易引发电气火灾？",
            options: ["定期检查电线", "私拉乱接电线", "使用漏电保护器", "安装过载保护"],
            answer: "B",
            explanation: "私拉乱接电线容易导致线路过载、短路，是引发电气火灾的主要原因之一。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6305,
            type: "single",
            question: "火灾应急广播的备用功率不应小于火灾事故广播扬声器最大单组扬声器功率的多少倍？",
            options: ["1倍", "1.5倍", "2倍", "3倍"],
            answer: "B",
            explanation: "火灾应急广播的备用功率不应小于火灾事故广播扬声器最大单组扬声器功率的1.5倍。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6306,
            type: "single",
            question: "防火门监控器的功能不包括什么？",
            options: ["监测防火门状态", "控制常开防火门关闭", "显示故障位置", "灭火功能"],
            answer: "D",
            explanation: "防火门监控器用于监测和控制防火门状态，显示故障位置等，不具备灭火功能。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6307,
            type: "single",
            question: "下列哪种物质发生火灾不能用水扑救？",
            options: ["木材", "棉花", "电石", "纸张"],
            answer: "C",
            explanation: "电石（碳化钙）遇水会产生乙炔气体，可能引起爆炸或扩大火势，不能用水扑救。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6308,
            type: "single",
            question: "消防车道的净宽度和净空高度均不应小于多少米？",
            options: ["3米", "4米", "5米", "6米"],
            answer: "B",
            explanation: "消防车道的净宽度和净空高度均不应小于4米，以满足消防车辆通行和作业要求。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6309,
            type: "single",
            question: "建筑防烟楼梯间前室的面积，公共建筑不应小于多少平方米？",
            options: ["4.5㎡", "6㎡", "10㎡", "12㎡"],
            answer: "B",
            explanation: "建筑防烟楼梯间前室面积，公共建筑不应小于6㎡，居住建筑不应小于4.5㎡。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6310,
            type: "single",
            question: "高层建筑中庭的防火分区面积应按什么面积计算？",
            options: ["中庭地面面积", "中庭贯通各层面积之和", "整栋建筑面积", "防火分区面积"],
            answer: "A",
            explanation: "高层建筑中庭的防火分区面积应按中庭地面面积计算，但应设置自动喷水灭火系统保护。",
            module: "火灾预防",
            categoryId: 4
        },
        // 多选题
        {
            id: 6311,
            type: "multi",
            question: "火灾自动报警系统包括哪些基本组件？",
            options: ["火灾报警控制器", "火灾探测器", "手动火灾报警按钮", "消防联动控制器"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾自动报警系统包括火灾报警控制器、火灾探测器、手动火灾报警按钮、消防联动控制器等基本组件。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6312,
            type: "multi",
            question: "消防控制室值班人员的职责包括哪些？",
            options: ["监视系统运行状态", "记录火灾报警信息", "现场确认火灾报警", "进行消防设施维保"],
            answer: ["A", "B", "C"],
            explanation: "消防控制室值班人员职责包括监视系统运行、记录报警信息、现场确认火灾等，不包括设施维保工作。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6313,
            type: "multi",
            question: "湿式自动喷水灭火系统的组件包括哪些？",
            options: ["闭式喷头", "湿式报警阀", "水流指示器", "火灾探测器"],
            answer: ["A", "B", "C"],
            explanation: "湿式系统组件包括闭式喷头、湿式报警阀、水流指示器、压力开关等，火灾探测器不是系统组件。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6314,
            type: "multi",
            question: "灭火器检查的内容包括哪些？",
            options: ["外观检查", "压力指示", "喷射软管检查", "维保记录检查"],
            answer: ["A", "B", "C"],
            explanation: "灭火器检查内容包括外观检查、压力指示检查、喷射软管检查等，维保记录检查不是现场检查内容。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6315,
            type: "multi",
            question: "消火栓系统在使用前应检查哪些内容？",
            options: ["栓口是否完好", "水带是否齐全", "阀门是否灵活", "水压是否正常"],
            answer: ["A", "B", "C", "D"],
            explanation: "消火栓系统使用前应检查栓口完好性、水带齐全性、阀门灵活性、水压正常性，确保灭火时能正常使用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6316,
            type: "multi",
            question: "消防控制室应具备哪些功能？",
            options: ["火灾报警显示", "消防联动控制", "故障诊断", "人员住宿"],
            answer: ["A", "B", "C"],
            explanation: "消防控制室具备火灾报警显示、联动控制，故障诊断等功能，但不能用于人员住宿。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6317,
            type: "multi",
            question: "哪些场所应设置火灾自动报警系统？",
            options: ["大型商场", "高层住宅", "地下车库", "简易自行车棚"],
            answer: ["A", "B", "C"],
            explanation: "大型商场、高层住宅、地下车库等人员密集或火灾危险性较大的场所应设置火灾自动报警系统。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6318,
            type: "multi",
            question: "消防水泵的启动方式包括哪些？",
            options: ["自动启动", "手动启动", "机械应急启动", "远程启动"],
            answer: ["A", "B", "C"],
            explanation: "消防水泵应具备自动启动、手动启动和机械应急启动三种方式，确保在不同情况下都能启动水泵。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6319,
            type: "multi",
            question: "火灾应急预案的内容应包括哪些？",
            options: ["组织机构及职责", "报警和接警处置程序", "应急疏散程序", "灭火救援措施"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾应急预案应包括组织机构、报警接警、疏散程序、灭火救援等完整的应急处置程序。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6320,
            type: "multi",
            question: "防火卷帘的检查内容有哪些？",
            options: ["帘面是否完好", "导轨是否通畅", "控制箱是否正常", "是否擅自改造"],
            answer: ["A", "B", "C"],
            explanation: "防火卷帘检查内容包括帘面完好性、导轨通畅性、控制箱功能等，擅自改造不是检查内容。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 继续新增题目
        {
            id: 6321,
            type: "single",
            question: "火灾报警控制器开机顺序，先开什么电源？",
            options: ["主电", "备电", "联动电源", "探测器电源"],
            answer: "A",
            explanation: "火灾报警控制器开机时，应先开主电，确认主电正常后再开备电，关机顺序相反。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6322,
            type: "single",
            question: "点型感烟探测器安装间距不应超过多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "C",
            explanation: "点型感烟探测器安装间距不应超过15米，安装高度不超过12米时，一只探测器保护面积不超过60㎡。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6323,
            type: "single",
            question: "消防控制室应配备哪些消防工具？",
            options: ["手电筒", "消防斧", "扳手", "以上全部"],
            answer: "D",
            explanation: "消防控制室应配备手电筒、消防斧、扳手等应急工具，用于紧急情况下的处置操作。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6324,
            type: "single",
            question: "手动报警按钮的设置，每个防火分区应至少设置几个？",
            options: ["1个", "2个", "3个", "5个"],
            answer: "A",
            explanation: "每个防火分区应至少设置一只手动火灾报警按钮，从任何位置到最近手动报警按钮的距离不应超过30米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6325,
            type: "single",
            question: "消防控制室图形显示装置应能显示哪些信息？",
            options: ["建筑总平面图", "各楼层平面图", "系统组成", "以上全部"],
            answer: "D",
            explanation: "消防控制室图形显示装置应能显示建筑总平面图、各楼层平面图、系统组成等完整信息。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6326,
            type: "single",
            question: "自动喷水灭火系统管道穿过墙体时，应设置什么？",
            options: ["套管", "法兰", "直接穿过", "防水套管"],
            answer: "A",
            explanation: "自动喷水灭火系统管道穿过墙体或楼板时应设置套管，套管与管道之间间隙应采用防火封堵材料填塞。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6327,
            type: "single",
            question: "消火栓箱门打开角度不应小于多少度？",
            options: ["90度", "120度", "150度", "160度"],
            answer: "B",
            explanation: "消火栓箱门打开角度不应小于120度，确保使用时能完全打开，方便快速取用消防器材。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6328,
            type: "single",
            question: "消防水泵接合器的数量应按什么计算？",
            options: ["室内消火栓数量", "自动喷水灭火系统设计流量", "室内消火栓和自动喷水系统数量之和", "建筑物面积"],
            answer: "C",
            explanation: "消防水泵接合器数量应按室内消火栓和自动喷水灭火系统设计流量之和计算确定。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6329,
            type: "single",
            question: "火灾声光警报器的设置，高度应在什么范围内？",
            options: ["1.0-1.5m", "1.3-2.2m", "2.0-2.5m", "2.5-3.0m"],
            answer: "B",
            explanation: "火灾声光警报器安装高度应在1.3-2.2米范围内，便于人员操作和声音传播。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6330,
            type: "single",
            question: "在消防控制室发现某区域报警点同时报警，应首先做什么？",
            options: ["立即启动灭火系统", "通知人员疏散", "派人到现场确认", "拨打119"],
            answer: "C",
            explanation: "消防控制室发现报警后，应首先派人到现场确认是否发生火灾，再根据确认情况采取相应措施。",
            module: "消防应急",
            categoryId: 5
        },
        // 更多题目
        {
            id: 6331,
            type: "single",
            question: "消防控制室视频监控系统的录像资料应保存不少于多少天？",
            options: ["7天", "15天", "30天", "90天"],
            answer: "D",
            explanation: "消防控制室视频监控系统的录像资料应保存不少于90天，以便事后追溯调查。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6332,
            type: "single",
            question: "疏散指示标志的间距不应大于多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "B",
            explanation: "疏散指示标志的间距不应大于10米，在转角处不应大于5米，确保人员能清晰看到疏散方向。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6333,
            type: "single",
            question: "防排烟系统风机的启动方式不包括哪种？",
            options: ["自动启动", "手动启动", "遥控启动", "机械应急启动"],
            answer: "C",
            explanation: "防排烟系统风机应具备自动、手动和机械应急启动方式，不包括遥控启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6334,
            type: "single",
            question: "应急照明和疏散指示标志的备用电源连续供电时间不应少于多少分钟？",
            options: ["30分钟", "60分钟", "90分钟", "120分钟"],
            answer: "C",
            explanation: "应急照明和疏散指示标志的备用电源连续供电时间，对于人员密集场所不应少于90分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6335,
            type: "single",
            question: "消防电梯的排水井容量不应小于多少立方米？",
            options: ["1立方米", "2立方米", "5立方米", "10立方米"],
            answer: "B",
            explanation: "消防电梯的排水井容量不应小于2立方米，排水泵的排水量不应小于10升/秒。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6336,
            type: "single",
            question: "防火卷帘一步降落的条件是什么？",
            options: ["任意一只探测器报警", "两只独立的感烟探测器报警", "两只独立的感温探测器报警", "手动报警按钮报警"],
            answer: "B",
            explanation: "防火卷帘一步降落的条件通常是两只独立的感烟探测器报警或一只探测器加一个手报信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6337,
            type: "single",
            question: "气体灭火系统启动方式分为哪两种？",
            options: ["自动和手动", "电气和手动", "自动和机械", "远程和本地"],
            answer: "A",
            explanation: "气体灭火系统启动方式分为自动启动和手动启动，确保在不同情况下都能及时启动灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6338,
            type: "single",
            question: "消防给水系统管网水压试验，试验压力应为工作压力的多少倍？",
            options: ["1.0倍", "1.5倍", "2.0倍", "2.5倍"],
            answer: "B",
            explanation: "消防给水系统管网水压试验压力应为工作压力的1.5倍，且不低于0.6MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6339,
            type: "single",
            question: "自动喷水灭火系统管道系统冲洗的水流速度不宜小于多少米/秒？",
            options: ["1.0m/s", "1.5m/s", "2.0m/s", "3.0m/s"],
            answer: "B",
            explanation: "自动喷水灭火系统管道冲洗的水流速度不宜小于1.5m/s，以确保冲洗效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6340,
            type: "single",
            question: "火灾报警控制器的备电功能在主电断电后应能自动投入运行，并持续供电至少多少小时？",
            options: ["4小时", "6小时", "8小时", "12小时"],
            answer: "C",
            explanation: "火灾报警控制器的备电功能在主电断电后应能自动投入运行，并持续供电至少8小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6341,
            type: "single",
            question: "消防控制室应建立每日多少小时巡检制度？",
            options: ["12小时", "18小时", "24小时", "8小时"],
            answer: "C",
            explanation: "消防控制室应建立每日24小时巡检制度，确保消防设施全天候处于正常监控状态。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6342,
            type: "single",
            question: "点型火灾探测器在有倾斜天花板安装时，倾斜角不应大于多少度？",
            options: ["15度", "30度", "45度", "60度"],
            answer: "C",
            explanation: "点型火灾探测器在有倾斜天花板安装时，倾斜角不应大于45度，以免影响探测效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6343,
            type: "single",
            question: "火灾报警控制器的复位操作会使哪些信息被清除？",
            options: ["火警信息", "故障信息", "屏蔽信息", "历史记录"],
            answer: "A",
            explanation: "火灾报警控制器的复位操作主要用于清除火警信息，故障和屏蔽信息需要单独复位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6344,
            type: "single",
            question: "防火门按耐火极限可分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "B",
            explanation: "防火门按耐火极限可分为甲级（1.5h）、乙级（1.0h）、丙级（0.5h）三个等级。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6345,
            type: "single",
            question: "水喷雾灭火系统的水雾喷头工作压力不应小于多少MPa？",
            options: ["0.3MPa", "0.35MPa", "0.5MPa", "0.7MPa"],
            answer: "B",
            explanation: "水喷雾灭火系统的水雾喷头工作压力不应小于0.35MPa，以达到良好的雾化效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6346,
            type: "single",
            question: "消防电梯从首层到顶层的运行时间不宜大于多少秒？",
            options: ["30秒", "45秒", "60秒", "90秒"],
            answer: "C",
            explanation: "消防电梯从首层到顶层的运行时间不宜大于60秒，确保消防人员快速到达高层。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6347,
            type: "single",
            question: "消防水泵的流量-扬程曲线应为什么类型？",
            options: ["陡降型", "平缓型", "驼峰型", "直线型"],
            answer: "A",
            explanation: "消防水泵的流量-扬程曲线应为陡降型，便于系统在流量变化时保持较稳定的扬程。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6348,
            type: "single",
            question: "消防应急广播的扬声器功率不应小于多少瓦？",
            options: ["1W", "3W", "5W", "10W"],
            answer: "B",
            explanation: "消防应急广播的扬声器功率不应小于3W，环境噪声大于60dB的场所，扬声器功率不应小于5W。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6349,
            type: "single",
            question: "火灾报警控制器与探测器之间的总线回路，报警区域内的模块数量不宜超过多少只？",
            options: ["100只", "150只", "200只", "250只"],
            answer: "C",
            explanation: "火灾报警控制器与探测器之间的总线回路，报警区域内的模块数量不宜超过200只。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6350,
            type: "single",
            question: "消火栓按钮的报警电压应采用什么电压？",
            options: ["220V", "110V", "安全电压24V以下", "380V"],
            answer: "C",
            explanation: "消火栓按钮的报警电压应采用安全电压（24V以下），确保人员操作安全。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 综合题目
        {
            id: 6351,
            type: "single",
            question: "消防控制室应能显示消防电源的什么状态信息？",
            options: ["电流", "电压", "工作状态和故障信息", "功率"],
            answer: "C",
            explanation: "消防控制室应能显示消防电源的工作状态和故障信息，确保消防设备供电正常。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6352,
            type: "single",
            question: "消防给水系统维护管理中，对消防水泵应试运转的时间是多少？",
            options: ["5分钟", "10分钟", "15分钟", "30分钟"],
            answer: "B",
            explanation: "消防水泵应每季度应试运转一次，每次运转时间不少于10分钟，确保水泵随时可用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6353,
            type: "single",
            question: "火灾自动报警系统中，区域报警控制器最大容量为多少个报警点？",
            options: ["500个", "1000个", "2000个", "5000个"],
            answer: "C",
            explanation: "区域报警控制器的最大容量不宜超过2000个报警点，超过时应设置多个区域报警控制器。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6354,
            type: "single",
            question: "灭火器维修标识应贴在灭火器哪个位置？",
            options: ["底部", "中部", "顶部", "任意位置"],
            answer: "B",
            explanation: "灭火器维修标识应贴在中上部，即筒体毛坯面下方200mm处的明显位置。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6355,
            type: "single",
            question: "自动喷水灭火系统末端试水装置的排水立管直径不应小于多少mm？",
            options: ["50mm", "75mm", "100mm", "150mm"],
            answer: "B",
            explanation: "自动喷水灭火系统末端试水装置的排水立管直径不应小于75mm，确保排水畅通。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6356,
            type: "multi",
            question: "火灾自动报警系统日常检查内容包括哪些？",
            options: ["控制器显示是否正常", "探测器是否清洁", "线路是否完好", "是否过期"],
            answer: ["A", "B", "C"],
            explanation: "火灾自动报警系统日常检查内容包括控制器显示、探测器清洁度、线路完好性等，是否过期不是检查内容。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6357,
            type: "multi",
            question: "消防控制室值班记录应包含哪些内容？",
            options: ["火灾报警控制器运行情况", "消防设施动作情况", "异常情况处理", "设备维保计划"],
            answer: ["A", "B", "C"],
            explanation: "消防控制室值班记录应包含控制器运行情况、消防设施动作情况、异常处理等内容。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6358,
            type: "multi",
            question: "哪些消防设施应进行月度功能测试？",
            options: ["火灾自动报警系统", "自动喷水灭火系统", "消火栓系统", "办公设备"],
            answer: ["A", "B", "C"],
            explanation: "火灾自动报警系统、自动喷水灭火系统、消火栓系统等消防设施应进行定期功能测试。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6359,
            type: "multi",
            question: "消防水泵房的检查内容有哪些？",
            options: ["水泵运行状态", "阀门开闭状态", "润滑油油位", "员工考勤"],
            answer: ["A", "B", "C"],
            explanation: "消防水泵房检查内容包括水泵运行状态、阀门状态、润滑油油位等，不包括员工考勤。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6360,
            type: "multi",
            question: "建筑消防设施档案应包括哪些内容？",
            options: ["消防设施基本情况", "消防设施动态管理情况", "值班人员名单", "维保合同"],
            answer: ["A", "B", "D"],
            explanation: "建筑消防设施档案包括基本情况、动态管理情况、维保合同等内容，值班人员名单不属于档案内容。",
            module: "消防法律法规",
            categoryId: 3
        },
        // ==================== 中级消防员新增题目（100道）====================
        // 火灾自动报警系统
        {
            id: 6361,
            type: "single",
            question: "火灾自动报警系统中，点型感温火灾探测器的报警温度通常设置为多少？",
            options: ["50℃", "58℃", "68℃", "80℃"],
            answer: "B",
            explanation: "点型感温火灾探测器的报警温度通常为58℃，当环境温度达到此值时探测器会发出报警信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6362,
            type: "single",
            question: "火灾自动报警系统中，探测器的安装高度超过多少米时，应增设探测器？",
            options: ["6米", "8米", "12米", "15米"],
            answer: "C",
            explanation: "根据规范，当探测器的安装高度超过12米时，应增设探测器以确保探测效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6363,
            type: "single",
            question: "火灾自动报警系统中，区域报警控制器通常用于连接多少个以下的探测器？",
            options: ["50个", "100个", "200个", "500个"],
            answer: "C",
            explanation: "区域报警控制器通常用于连接200个以下的探测器，构成区域报警系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6364,
            type: "single",
            question: "火灾自动报警系统的布线时，管线经过变形缝时应采取什么措施？",
            options: ["直接穿过", "加套管保护", "断开处理", "缠绕处理"],
            answer: "B",
            explanation: "管线经过变形缝时应加套管保护，并留有适当余量，以便变形缝位移时管线不受损伤。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6365,
            type: "single",
            question: "火灾自动报警系统中，手动火灾报警按钮的安装高度宜为多少米？",
            options: ["0.8-1.0", "1.0-1.2", "1.3-1.5", "1.8-2.0"],
            answer: "C",
            explanation: "手动火灾报警按钮的安装高度宜为1.3-1.5米，便于人员紧急情况下操作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6366,
            type: "single",
            question: "火灾自动报警系统中，火灾警报装置的设置应遵循什么原则？",
            options: ["任意设置", "便于操作", "均匀分布", "隐蔽安装"],
            answer: "C",
            explanation: "火灾警报装置应均匀分布，确保在报警时建筑内各部位都能听到警报声。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6367,
            type: "single",
            question: "火灾自动报警系统中，探测器的确认灯应面向什么方向？",
            options: ["任意方向", "主要人流方向", "墙角", "天花板"],
            answer: "B",
            explanation: "探测器的确认灯应面向主要人流方向，以便于观察探测器的工作状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6368,
            type: "single",
            question: "火灾自动报警系统控制器的主电源应使用什么电源？",
            options: ["电池", "UPS电源", "消防专用电源", "普通电源"],
            answer: "C",
            explanation: "火灾自动报警系统控制器的主电源应使用消防专用电源，确保火灾时可靠供电。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6369,
            type: "single",
            question: "火灾自动报警系统中，线型感温火灾探测器主要用于哪些场所？",
            options: ["办公室", "停车场", "电缆廊道", "会议室"],
            answer: "C",
            explanation: "线型感温火灾探测器主要用于电缆廊道、地铁隧道等线性分布的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6370,
            type: "single",
            question: "火灾自动报警系统的年度检查内容不包括以下哪项？",
            options: ["探测器功能测试", "控制室记录", "备用电源测试", "线路绝缘测试"],
            answer: "B",
            explanation: "年度检查内容包括探测器功能测试、备用电源测试、线路绝缘测试等，控制室记录不是检查内容。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 消防控制室值班
        {
            id: 6371,
            type: "single",
            question: "消防控制室应实行每日24小时专人值班制度，每班不应少于多少人？",
            options: ["1人", "2人", "3人", "4人"],
            answer: "B",
            explanation: "消防控制室应实行每日24小时专人值班制度，每班不应少于2人，确保监控不间断。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6372,
            type: "single",
            question: "消防控制室值班人员应持有哪种证书？",
            options: ["电工证", "消防设施操作员证", "安全员证", "管理员证"],
            answer: "B",
            explanation: "消防控制室值班人员应持有消防设施操作员证书，具备相应的专业技能。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6373,
            type: "single",
            question: "消防控制室内设备的布置应符合规范，以下说法正确的是？",
            options: ["设备面盘前的操作距离不应小于1米", "设备面盘前的操作距离不应小于1.5米", "设备面盘后的维修距离不应小于0.8米", "控制室面积无要求"],
            answer: "B",
            explanation: "设备面盘前的操作距离不应小于1.5米，设备面盘后的维修距离不应小于1米。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6374,
            type: "single",
            question: "消防控制室值班期间，发现火灾报警控制器报警应首先做什么？",
            options: ["立即拨打119", "确认报警部位", "启动灭火系统", "疏散人员"],
            answer: "B",
            explanation: "发现报警后应首先确认报警部位，核实是否为真实火警，再采取相应措施。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6375,
            type: "single",
            question: "消防控制室应保存的档案不包括以下哪项？",
            options: ["竣工资料", "值班记录", "个人简历", "系统操作规程"],
            answer: "C",
            explanation: "消防控制室应保存竣工资料、值班记录、系统操作规程等档案，不包括个人简历。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6376,
            type: "single",
            question: "消防控制室值班记录的保存期限不少于多少年？",
            options: ["1年", "2年", "3年", "5年"],
            answer: "C",
            explanation: "消防控制室值班记录的保存期限不少于3年，以便追溯和查询。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6377,
            type: "single",
            question: "火灾报警控制器在故障报警时，故障指示灯是什么颜色？",
            options: ["红色", "黄色", "绿色", "蓝色"],
            answer: "B",
            explanation: "火灾报警控制器故障指示灯为黄色，当控制器检测到故障时亮起。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6378,
            type: "single",
            question: "消防控制室发现重大故障时，应如何处理？",
            options: ["自行处理", "立即报告", "忽略继续值班", "下班后处理"],
            answer: "B",
            explanation: "消防控制室发现重大故障时应立即报告，不得延误或自行处理。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6379,
            type: "single",
            question: "消防控制室应配备哪些消防器材？",
            options: ["灭火器、消防斧", "灭火器、消防水带", "灭火器、破拆工具", "所有选项都正确"],
            answer: "D",
            explanation: "消防控制室应配备灭火器、消防斧、消防水带等基本消防器材，以便紧急情况下使用。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6380,
            type: "single",
            question: "消防控制室与外界应保持怎样的通信联系？",
            options: ["无需联系", "单向联系", "双向联系", "定期联系"],
            answer: "C",
            explanation: "消防控制室应与外界保持双向联系，确保火灾时能及时报警和接受指令。",
            module: "消防应急",
            categoryId: 5
        },
        // 自动喷水灭火系统
        {
            id: 6381,
            type: "single",
            question: "湿式自动喷水灭火系统的报警阀组安装在什么环境中？",
            options: ["干燥环境", "潮湿环境", "高温环境", "低温环境"],
            answer: "B",
            explanation: "湿式报警阀组安装在潮湿环境中，因为系统管道内始终充满有压水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6382,
            type: "single",
            question: "自动喷水灭火系统中，快速响应喷头的响应时间系数是多少？",
            options: ["50以下", "50-80", "80-100", "100以上"],
            answer: "B",
            explanation: "快速响应喷头的响应时间系数（RTI）在50-80之间，比标准喷头响应更快。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6383,
            type: "single",
            question: "自动喷水灭火系统的末端试水装置安装在什么位置？",
            options: ["系统最不利点", "系统中间位置", "水泵出口", "报警阀前"],
            answer: "A",
            explanation: "末端试水装置安装在系统最不利点处，用于测试系统是否能正常供水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6384,
            type: "single",
            question: "自动喷水灭火系统水流指示器的功能是什么？",
            options: ["报警", "显示火灾位置", "检测水流并发出信号", "控制水泵"],
            answer: "C",
            explanation: "水流指示器用于检测管网中是否有水流流动，并发出信号显示火灾区域。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6385,
            type: "single",
            question: "湿式报警阀延迟器的作用是什么？",
            options: ["延迟报警", "防止误报警", "增加水压", "过滤杂质"],
            answer: "B",
            explanation: "延迟器的作用是防止因管网渗漏或压力波动造成的误报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6386,
            type: "single",
            question: "自动喷水灭火系统水力警铃的启动压力是多少？",
            options: ["0.01MPa", "0.05MPa", "0.1MPa", "0.5MPa"],
            answer: "B",
            explanation: "水力警铃的启动压力通常为0.05MPa，当水压达到此值时警铃开始报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6387,
            type: "single",
            question: "闭式喷头的公称动作温度分为几个温度等级？",
            options: ["3个", "5个", "7个", "9个"],
            answer: "C",
            explanation: "闭式喷头的公称动作温度分为7个温度等级，以适应不同环境温度场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6388,
            type: "single",
            question: "自动喷水灭火系统官网的充水时间不宜超过多少分钟？",
            options: ["1分钟", "2分钟", "5分钟", "10分钟"],
            answer: "C",
            explanation: "自动喷水灭火系统官网的充水时间不宜超过5分钟，确保火灾时及时供水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6389,
            type: "single",
            question: "边墙型喷头的最大保护跨度是多少米？",
            options: ["3米", "4米", "5米", "6米"],
            answer: "B",
            explanation: "边墙型喷头的最大保护跨度为4米，应布置在靠墙一侧。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6390,
            type: "single",
            question: "自动喷水灭火系统水泵接合器的数量应按什么确定？",
            options: ["系统设计流量", "系统压力", "建筑高度", "防护区数量"],
            answer: "A",
            explanation: "水泵接合器的数量应按系统设计流量确定，每个按5-10L/s计算。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 灭火器使用
        {
            id: 6391,
            type: "single",
            question: "灭火器压力表的指针在绿色区域表示什么？",
            options: ["压力过低", "压力正常", "压力过高", "灭火器失效"],
            answer: "B",
            explanation: "灭火器压力表指针在绿色区域表示压力正常，灭火器可以正常使用。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6392,
            type: "single",
            question: "ABC干粉灭火器主要用于扑救哪类火灾？",
            options: ["仅A类", "仅B类", "仅C类", "A、B、C类"],
            answer: "D",
            explanation: "ABC干粉灭火器可用于扑救A类（固体）、B类（液体）、C类（气体）火灾。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6393,
            type: "single",
            question: "灭火器的检查周期是多久？",
            options: ["每周", "每月", "每季度", "每半年"],
            answer: "B",
            explanation: "灭火器应每月进行一次全面检查，确保其处于正常状态。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6394,
            type: "single",
            question: "使用二氧化碳灭火器时，手应握在什么位置？",
            options: ["瓶身", "喇叭筒", "橡胶软管", "无所谓"],
            answer: "B",
            explanation: "使用二氧化碳灭火器时手应握在喇叭筒上，防止冻伤。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6395,
            type: "single",
            question: "灭火器的维修期限应符合什么标准？",
            options: ["厂家标准", "行业标准", "国家标准", "地方标准"],
            answer: "C",
            explanation: "灭火器的维修期限应符合国家标准《建筑灭火器配置验收及检查规范》。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6396,
            type: "single",
            question: "手提式灭火器距地面不宜超过多少米放置？",
            options: ["0.5米", "1米", "1.5米", "2米"],
            answer: "B",
            explanation: "手提式灭火器距地面不宜超过1米，便于取用且保证稳定性。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6397,
            type: "single",
            question: "灭火器配置场所的危险等级分为几类？",
            options: ["2类", "3类", "4类", "5类"],
            answer: "B",
            explanation: "灭火器配置场所的危险等级分为严重危险级、中危险级、轻危险级三类。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6398,
            type: "single",
            question: "灭火器的喷射时间是多少秒？",
            options: ["3-5秒", "5-8秒", "8-13秒", "13-20秒"],
            answer: "C",
            explanation: "灭火器的喷射时间一般为8-13秒，应在此时限内完成灭火。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6399,
            type: "single",
            question: "水基型灭火器主要用于扑救哪类火灾？",
            options: ["B类火灾", "C类火灾", "A类火灾", "D类火灾"],
            answer: "C",
            explanation: "水基型灭火器主要用于扑救A类固体物质火灾，不宜用于B、C类火灾。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6400,
            type: "single",
            question: "灭火器报废后应如何处理？",
            options: ["随意丢弃", "卖给废品站", "交由有资质单位处理", "掩埋处理"],
            answer: "C",
            explanation: "灭火器报废后应交由具有相应资质的单位进行处理，不得随意丢弃。",
            module: "消防应急",
            categoryId: 5
        },
        // 消防水带操作
        {
            id: 6401,
            type: "single",
            question: "消防水带的标准长度是多少？",
            options: ["10米", "15米", "20米", "25米"],
            answer: "C",
            explanation: "消防水带的标准长度为20米，便于操作和铺设。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6402,
            type: "single",
            question: "消防水带展开时应注意什么？",
            options: ["任意展开", "避免扭曲", "快速抛出", "缠绕展开"],
            answer: "B",
            explanation: "消防水带展开时应避免扭曲和折叠，确保水流畅通。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6403,
            type: "single",
            question: "消防水带与水枪的连接方式是？",
            options: ["卡扣连接", "螺纹连接", "绑扎连接", "插槽连接"],
            answer: "B",
            explanation: "消防水带与水枪采用螺纹连接或卡扣连接，确保连接牢固可靠。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6404,
            type: "single",
            question: "消防水带使用后应如何处理？",
            options: ["直接存放", "清洗晾干", "涂抹润滑油", "晾晒后折叠"],
            answer: "B",
            explanation: "消防水带使用后应清洗干净并晾干，然后盘卷存放，避免霉变。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6405,
            type: "single",
            question: "消防水带的耐压试验压力应为工作压力的多少倍？",
            options: ["1倍", "1.5倍", "2倍", "2.5倍"],
            answer: "B",
            explanation: "消防水带的耐压试验压力应为工作压力的1.5倍，确保安全使用。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6406,
            type: "single",
            question: "地上式消防水泵接合器的接口应距地面多少米？",
            options: ["0.4米", "0.5米", "0.7米", "1.1米"],
            answer: "D",
            explanation: "地上式消防水泵接合器的接口距地面约1.1米，便于消防车连接。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6407,
            type: "single",
            question: "消防水带在高压状态下，接口松动应如何处理？",
            options: ["直接拧紧", "泄压后拧紧", "更换新接口", "无所谓"],
            answer: "B",
            explanation: "消防水带在高压状态下不得直接拧紧接口，必须先泄压再进行处理。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6408,
            type: "single",
            question: "消防水带在低温环境下存放应注意什么？",
            options: ["防止冰冻", "防止潮湿", "防止虫蛀", "无特殊要求"],
            answer: "A",
            explanation: "消防水带在低温环境下存放应注意防止冰冻，以免损坏水带。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6409,
            type: "single",
            question: "消防水带每经过多长时间应进行试水？",
            options: ["半年", "一年", "两年", "三年"],
            answer: "A",
            explanation: "消防水带每半年应进行一次试水，检查是否有渗漏或损坏。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6410,
            type: "single",
            question: "消防水带的最大允许工作压力是多少？",
            options: ["0.8MPa", "1.0MPa", "1.6MPa", "2.5MPa"],
            answer: "C",
            explanation: "消防水带的最大允许工作压力为1.6MPa，一般场合使用此规格。",
            module: "消防应急",
            categoryId: 5
        },
        // 火灾预防
        {
            id: 6411,
            type: "single",
            question: "人员密集场所的安全出口应配备什么标志？",
            options: ["指示牌", "应急灯", "疏散指示标志和应急照明", "警示牌"],
            answer: "C",
            explanation: "人员密集场所的安全出口应配备疏散指示标志和应急照明，确保人员安全疏散。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6412,
            type: "single",
            question: "仓库内灭火器的配置数量应根据什么计算？",
            options: ["面积", "体积", "火灾危险类别和场所面积", "高度"],
            answer: "C",
            explanation: "仓库灭火器配置数量应根据火灾危险类别和场所面积计算确定。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6413,
            type: "single",
            question: "歌舞娱乐放映游艺场所的疏散楼梯应如何设置？",
            options: ["可共用一个", "必须设置两个以上", "设置一个即可", "可设在同一防火分区内"],
            answer: "B",
            explanation: "歌舞娱乐放映游艺场所属于人员密集场所，必须设置两个以上疏散楼梯。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6414,
            type: "single",
            question: "高层建筑发生火灾时，人员疏散主要依靠什么？",
            options: ["电梯", "楼梯间", "消防电梯", "自动扶梯"],
            answer: "B",
            explanation: "高层建筑发生火灾时人员疏散主要依靠楼梯间，电梯可能断电停止使用。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6415,
            type: "single",
            question: "厨房油锅着火，正确的方法是？",
            options: ["用水浇灭", "用灭火器", "用锅盖覆盖", "离开现场"],
            answer: "C",
            explanation: "厨房油锅着火应用锅盖覆盖，隔绝空气灭火，切忌用水浇灭。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6416,
            type: "single",
            question: "电线短路引发火灾的主要原因是什么？",
            options: ["电压过低", "接触不良", "绝缘老化或损坏", "电流过大"],
            answer: "C",
            explanation: "电线绝缘老化或损坏导致短路，是引发电气火灾的主要原因。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6417,
            type: "single",
            question: "公共建筑的安全出口宽度应按什么计算？",
            options: ["固定值", "百人宽度指标", "楼层高度", "建筑面积"],
            answer: "B",
            explanation: "公共建筑安全出口宽度应按百人宽度指标计算，确保疏散能力。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6418,
            type: "single",
            question: "发现燃气泄漏应首先做什么？",
            options: ["开灯检查", "关闭阀门", "点火测试", "在现场打电话"],
            answer: "B",
            explanation: "发现燃气泄漏应首先关闭阀门，然后开窗通风，切忌点火或打电话。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6419,
            type: "single",
            question: "建筑物防烟楼梯间的前室面积不应小于多少平方米？",
            options: ["4平方米", "6平方米", "10平方米", "12平方米"],
            answer: "B",
            explanation: "防烟楼梯间的前室面积不应小于6平方米，确保排烟效果。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6420,
            type: "single",
            question: "可燃气体探测器的安装高度应根据什么确定？",
            options: ["房间高度", "气体密度", "温度", "湿度"],
            answer: "B",
            explanation: "可燃气体探测器安装高度应根据气体密度确定，比空气轻的气体安装在上部。",
            module: "火灾预防",
            categoryId: 4
        },
        // 消防法律法规
        {
            id: 6421,
            type: "single",
            question: "《消防法》规定，任何单位、个人都有维护消防安全和什么的义务？",
            options: ["预防火灾", "扑救火灾", "报告火警", "所有选项"],
            answer: "D",
            explanation: "《消防法》规定任何单位、个人都有维护消防安全、预防火灾、扑救火灾、报告火警的义务。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6422,
            type: "single",
            question: "消防安全重点单位应至少多久进行一次灭火和应急疏散演练？",
            options: ["每月", "每季度", "每半年", "每年"],
            answer: "B",
            explanation: "消防安全重点单位应至少每季度进行一次灭火和应急疏散演练。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6423,
            type: "single",
            question: "消防设施检测、维护保养应委托什么单位进行？",
            options: ["任意单位", "具有相应资质的单位", "消防队", "物业公司"],
            answer: "B",
            explanation: "消防设施检测、维护保养应委托具有相应资质的消防技术服务机构进行。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6424,
            type: "single",
            question: "根据《消防法》，哪些场所应当建立单位专职消防队？",
            options: ["所有单位", "大型企业", "火灾危险较大的单位", "国有企业"],
            answer: "C",
            explanation: "根据《消防法》，火灾危险较大的单位应当建立单位专职消防队。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6425,
            type: "single",
            question: "消防控制室应当按照国家标准配备什么设备？",
            options: ["监控设备", "应急通信设备", "图形显示装置", "所有选项"],
            answer: "D",
            explanation: "消防控制室应按照国家标准配备监控、应急通信、图形显示等设备。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6426,
            type: "single",
            question: "公众聚集场所在投入使用、营业前，建设单位应向哪个部门申请消防安全检查？",
            options: ["消防救援机构", "公安机关", "安全生产监督部门", "物业管理部门"],
            answer: "A",
            explanation: "公众聚集场所在投入使用、营业前，建设单位应向消防救援机构申请消防安全检查。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6427,
            type: "single",
            question: "消防技术标准可分为国家标准、行业标准和什么标准？",
            options: ["企业标准", "地方标准", "国际标准", "团体标准"],
            answer: "B",
            explanation: "消防技术标准可分为国家标准、行业标准和地方标准。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6428,
            type: "single",
            question: "根据规定，消防控制室值班人员应当持有几级消防设施操作员证书？",
            options: ["一级", "二级", "三级", "四级"],
            answer: "B",
            explanation: "消防控制室值班人员应持有五级/初级消防设施操作员证书，变配电站值班人员需四级/中级。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6429,
            type: "single",
            question: "建筑消防设施投入使用后，应至少多久进行一次全面检测？",
            options: ["每月", "每季度", "每半年", "每年"],
            answer: "D",
            explanation: "建筑消防设施投入使用后，应每年至少进行一次全面检测，确保设施完好有效。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6430,
            type: "single",
            question: "消防设施未保持完好有效被查处，单位将面临什么处罚？",
            options: ["警告", "罚款", "停产停业", "所有选项"],
            answer: "D",
            explanation: "消防设施未保持完好有效的，单位可能面临警告、罚款、停产停业等处罚。",
            module: "消防法律法规",
            categoryId: 3
        },
        // 多选题
        {
            id: 6431,
            type: "multi",
            question: "火灾自动报警系统包括哪些组件？",
            options: ["火灾探测器", "手动报警按钮", "消防水泵", "火灾报警控制器"],
            answer: ["A", "B", "D"],
            explanation: "火灾自动报警系统包括火灾探测器、手动报警按钮、火灾报警控制器、火灾声光警报器等组件。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6432,
            type: "multi",
            question: "消防控制室值班人员的职责包括哪些？",
            options: ["监控消防设施运行状态", "接收处理报警信号", "进行消防设施维保", "火灾时启动灭火系统"],
            answer: ["A", "B", "D"],
            explanation: "消防控制室值班人员职责包括监控设施运行、接收处理报警信号、火灾时启动灭火系统等，不包括维保工作。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6433,
            type: "multi",
            question: "湿式自动喷水灭火系统由哪些组件组成？",
            options: ["闭式喷头", "湿式报警阀", "水流指示器", "气体灭火剂"],
            answer: ["A", "B", "C"],
            explanation: "湿式自动喷水灭火系统由闭式喷头、湿式报警阀、水流指示器、压力开关等组件组成，不使用气体灭火剂。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6434,
            type: "multi",
            question: "灭火器的检查内容包括哪些？",
            options: ["压力是否正常", "是否在有效期内", "外观是否完好", "是否需要进行维修保养"],
            answer: ["A", "B", "C", "D"],
            explanation: "灭火器检查内容包括压力是否正常、是否在有效期内、外观是否完好、是否需要维修保养等。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6435,
            type: "multi",
            question: "消防水带在使用过程中应注意什么？",
            options: ["避免扭曲", "防止磨损", "定期试水", "任意存放"],
            answer: ["A", "B", "C"],
            explanation: "消防水带使用中应避免扭曲、防止磨损，定期试水检查，晾干后妥善存放，不能任意存放。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6436,
            type: "multi",
            question: "火灾探测器包括哪些类型？",
            options: ["感烟探测器", "感温探测器", "感光探测器", "可燃气体探测器"],
            answer: ["A", "B", "C", "D"],
            explanation: "火灾探测器包括感烟、感温、感光、可燃气体等多种类型，适用于不同火灾特点的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6437,
            type: "multi",
            question: "消防控制室应建立的档案包括哪些？",
            options: ["消防设施平面布置图", "消防设施系统图", "值班人员私人档案", "维护保养记录"],
            answer: ["A", "B", "D"],
            explanation: "消防控制室档案包括设施平面布置图、系统图、维护保养记录等，不包括个人私人档案。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6438,
            type: "multi",
            question: "哪些场所应设置火灾自动报警系统？",
            options: ["高层公共建筑", "老年人照料设施", "小型商店", "国家级重点文物保护建筑"],
            answer: ["A", "B", "D"],
            explanation: "高层公共建筑、老年人照料设施、国家级重点文物保护建筑等应设置火灾自动报警系统。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6439,
            type: "multi",
            question: "灭火器配置计算步骤包括哪些？",
            options: ["确定危险等级", "计算保护面积", "确定灭火器数量", "随便放置"],
            answer: ["A", "B", "C"],
            explanation: "灭火器配置计算需确定危险等级、计算保护面积、确定灭火器数量和类型，不能随便放置。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6440,
            type: "multi",
            question: "消防水泵应满足什么要求？",
            options: ["火灾时持续运转", "备用泵自动投入", "可就地启动", "远程启动"],
            answer: ["A", "B", "D"],
            explanation: "消防水泵应火灾时持续运转，备用泵自动投入，可远程启动，一般不就地启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        // 继续单选题
        {
            id: 6441,
            type: "single",
            question: "防火门按耐火极限可分为几个等级？",
            options: ["2个", "3个", "4个", "5个"],
            answer: "B",
            explanation: "防火门按耐火极限可分为甲级（1.2h）、乙级（0.9h）、丙级（0.6h）三个等级。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6442,
            type: "single",
            question: "排烟风机应能在多少温度下连续运转不少于30分钟？",
            options: ["200℃", "280℃", "350℃", "400℃"],
            answer: "B",
            explanation: "排烟风机应能在280℃温度下连续运转不少于30分钟，满足排烟要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6443,
            type: "single",
            question: "消防应急广播系统的优先级顺序是什么？",
            options: ["正常广播大于火灾广播", "火灾广播大于正常广播", "同等优先级", "无优先级"],
            answer: "B",
            explanation: "火灾广播具有最高优先级，火灾时应自动切换到火灾广播状态。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6444,
            type: "single",
            question: "防火卷帘的升降应由什么控制？",
            options: ["手动控制", "电动控制", "消防控制室控制", "所有选项"],
            answer: "D",
            explanation: "防火卷帘的升降应能手控、电控、消防控制室控制，确保火灾时能正常工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6445,
            type: "single",
            question: "消防电梯的排水井容量不应小于多少立方米？",
            options: ["1立方米", "2立方米", "5立方米", "10立方米"],
            answer: "B",
            explanation: "消防电梯的排水井容量不应小于2立方米，确保排水能力。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6446,
            type: "single",
            question: "消防控制室应设置在什么位置？",
            options: ["任意位置", "地下一层", "首层或地下一层", "顶层"],
            answer: "C",
            explanation: "消防控制室应设置在首层或地下一层，便于火灾时应急操作和疏散。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6447,
            type: "single",
            question: "火灾报警控制器备用电源的容量应满足控制器在监视状态下工作多少小时？",
            options: ["8小时", "12小时", "24小时", "48小时"],
            answer: "C",
            explanation: "火灾报警控制器备用电源的容量应满足控制器在监视状态下工作24小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6448,
            type: "single",
            question: "疏散指示标志的间距不应大于多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "B",
            explanation: "疏散指示标志的间距不应大于10米，确保人员在火灾时能看清疏散方向。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6449,
            type: "single",
            question: "消防车道净宽度和净空高度均不应小于多少米？",
            options: ["3米", "4米", "5米", "6米"],
            answer: "B",
            explanation: "消防车道净宽度和净空高度均不应小于4米，确保消防车通行无阻。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6450,
            type: "single",
            question: "建筑高度超过多少米的民用建筑应设置避难层？",
            options: ["50米", "100米", "150米", "200米"],
            answer: "B",
            explanation: "建筑高度超过100米的民用建筑应设置避难层，用于人员临时避难。",
            module: "火灾预防",
            categoryId: 4
        },
        {
            id: 6451,
            type: "single",
            question: "室内消火栓的间距不应大于多少米？",
            options: ["20米", "30米", "50米", "100米"],
            answer: "B",
            explanation: "室内消火栓的间距不应大于30米，确保两支水枪的充实水柱同时到达室内任何部位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6452,
            type: "single",
            question: "消火栓栓口动压力不应大于多少MPa？",
            options: ["0.35MPa", "0.5MPa", "0.7MPa", "1.0MPa"],
            answer: "B",
            explanation: "消火栓栓口动压力不应大于0.5MPa，否则可能造成水带破裂或人员受伤。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6453,
            type: "single",
            question: "消防水泵的扬程应满足什么要求？",
            options: ["最不利点水枪的充实水柱", "最不利点消火栓栓口压力", "最不利点喷头压力", "所有选项"],
            answer: "D",
            explanation: "消防水泵的扬程应满足最不利点水枪充实水柱、栓口压力、喷头压力等要求。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6454,
            type: "single",
            question: "气体灭火系统启动方式有哪几种？",
            options: ["自动启动", "手动启动", "机械应急启动", "所有选项"],
            answer: "D",
            explanation: "气体灭火系统启动方式包括自动启动、手动启动和机械应急启动三种。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6455,
            type: "single",
            question: "火灾时消防控制室可以通过总线联动控制什么设备？",
            options: ["防火卷帘", "防排烟系统", "消防广播", "所有选项"],
            answer: "D",
            explanation: "火灾时消防控制室可通过总线联动控制防火卷帘、防排烟系统、消防广播等设备。",
            module: "消防应急",
            categoryId: 5
        },
        {
            id: 6456,
            type: "single",
            question: "消防控制室图形显示装置应能显示什么信息？",
            options: ["火灾报警区域", "消防设施状态", "应急疏散路线", "所有选项"],
            answer: "D",
            explanation: "消防控制室图形显示装置应能显示火灾报警区域、消防设施状态、应急疏散路线等信息。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6457,
            type: "single",
            question: "火灾探测器的保护面积与什么因素有关？",
            options: ["探测器的类型", "安装高度", "场所环境", "所有选项"],
            answer: "D",
            explanation: "火灾探测器的保护面积与探测器类型、安装高度、场所环境等因素有关。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6458,
            type: "single",
            question: "应急照明和疏散指示标志的连续供电时间不应少于多少分钟？",
            options: ["30分钟", "60分钟", "90分钟", "120分钟"],
            answer: "C",
            explanation: "应急照明和疏散指示标志的连续供电时间不应少于90分钟，确保人员疏散时间。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6459,
            type: "single",
            question: "防火卷帘的耐火极限不应低于多少小时？",
            options: ["0.5小时", "1小时", "2小时", "3小时"],
            answer: "D",
            explanation: "防火卷帘的耐火极限不应低于3小时，有效阻止火势蔓延。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6460,
            type: "single",
            question: "建筑消防设施维护管理不包括以下哪项内容？",
            options: ["巡查", "维修", "投资核算", "检测"],
            answer: "C",
            explanation: "建筑消防设施维护管理包括巡查、维修、检测等，不包括投资核算。",
            module: "消防法律法规",
            categoryId: 3
        },
        {
            id: 6461,
            type: "single",
            question: "火灾自动报警系统中，感温探测器适用于以下哪种场所？",
            options: ["正常情况下有烟的场所", "正常情况下温度相对稳定的场所", "高温场所", "有粉尘的场所"],
            answer: "B",
            explanation: "感温探测器适用于正常情况下温度相对稳定的场所，如办公室、商场等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6462,
            type: "single",
            question: "火灾自动报警系统中，感烟探测器的灵敏度等级分为几级？",
            options: ["2级", "3级", "4级", "5级"],
            answer: "B",
            explanation: "感烟探测器灵敏度分为三级：一级灵敏度高，适用于禁烟场所；二级中等灵敏度；三级灵敏度低，适用于有烟场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6463,
            type: "single",
            question: "火灾自动报警系统的报警区域划分应符合什么规定？",
            options: ["每个报警区域不超过500平方米", "每个报警区域不超过1000平方米", "报警区域必须按防火分区划分", "报警区域由设计单位随意划分"],
            answer: "C",
            explanation: "报警区域的划分应符合防火分区的划分要求，一个报警区域不应超过防火分区面积。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6464,
            type: "single",
            question: "火灾自动报警系统中，手动火灾报警按钮的设置间距不宜大于多少米？",
            options: ["20米", "30米", "50米", "100米"],
            answer: "B",
            explanation: "手动火灾报警按钮的设置间距不宜大于30米，保证在任一点都能方便触发报警。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6465,
            type: "single",
            question: "火灾自动报警系统应设有自动和手动两种触发装置，以下哪项不属于自动触发装置？",
            options: ["感烟探测器", "感温探测器", "手动火灾报警按钮", "火焰探测器"],
            answer: "C",
            explanation: "手动火灾报警按钮属于手动触发装置，不属于自动触发装置。自动触发装置包括各类探测器。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6466,
            type: "single",
            question: "火灾自动报警系统中，火灾报警控制器的主要功能不包括？",
            options: ["接收报警信号", "发出声光报警", "控制消防水泵启动", "显示报警部位"],
            answer: "C",
            explanation: "火灾报警控制器主要功能是接收、显示和传输报警信息，不直接控制消防水泵启动。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6467,
            type: "single",
            question: "火灾自动报警系统总线制报警控制器与智能型报警控制器的主要区别是？",
            options: ["总线制采用多线制连接", "智能型可实现地址编码", "总线制不能联动", "智能型价格更低"],
            answer: "B",
            explanation: "智能型报警控制器采用地址编码技术，每一探测器有独立地址，总线制则采用树形或环形总线连接。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6468,
            type: "single",
            question: "火灾自动报警系统中，短路隔离器的作用是？",
            options: ["增加线路长度", "隔离故障回路，保证系统正常工作", "提高探测器灵敏度", "延长探测器寿命"],
            answer: "B",
            explanation: "短路隔离器用于隔离故障回路，当某段线路发生短路时，自动隔离该段，保证其他回路正常工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6469,
            type: "single",
            question: "火灾自动报警系统应每月至少检查试验几次？",
            options: ["1次", "2次", "3次", "6次"],
            answer: "B",
            explanation: "火灾自动报警系统应每月至少检查试验2次，确保系统运行正常。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6470,
            type: "single",
            question: "火灾自动报警系统使用年限超过多少年时，应报废处理？",
            options: ["5年", "10年", "15年", "20年"],
            answer: "C",
            explanation: "火灾自动报警系统使用年限超过15年时应报废处理，以确保系统可靠性。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6471,
            type: "single",
            question: "点型感烟探测器至墙壁、梁边的水平距离不应小于多少米？",
            options: ["0.5米", "1米", "1.5米", "2米"],
            answer: "A",
            explanation: "点型感烟探测器至墙壁、梁边的水平距离不应小于0.5米，保证探测效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6472,
            type: "single",
            question: "在宽度小于3米的走道顶棚上设置点型探测器时，感烟探测器的安装间距不应超过多少米？",
            options: ["5米", "10米", "15米", "20米"],
            answer: "C",
            explanation: "在宽度小于3米的走道顶棚上设置时，感烟探测器安装间距不应超过15米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6473,
            type: "single",
            question: "火灾自动报警系统中，区域报警控制器和集中报警控制器的主要区别是？",
            options: ["品牌不同", "容量不同", "区域报警控制器不能向集中报警控制器传输信号", "价格不同"],
            answer: "B",
            explanation: "区域报警控制器容量较小，用于保护局部区域；集中报警控制器容量大，用于接收多个区域报警控制器的信号。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6474,
            type: "single",
            question: "红外光束感烟探测器的光束轴线至顶棚的垂直距离宜为多少米？",
            options: ["0.3-0.5米", "0.5-1米", "1-1.5米", "1.5-2米"],
            answer: "B",
            explanation: "红外光束感烟探测器的光束轴线至顶棚的垂直距离宜为0.5-1米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6475,
            type: "single",
            question: "火灾自动报警系统主电源应采用什么供电方式？",
            options: ["城市自来水", "消防电源", "普通照明电", "ups电源"],
            answer: "B",
            explanation: "火灾自动报警系统主电源应采用消防电源，保证火灾时系统仍能正常工作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6476,
            type: "single",
            question: "火灾自动报警系统备用电源的容量应满足系统连续正常工作多少小时？",
            options: ["4小时", "8小时", "12小时", "24小时"],
            answer: "B",
            explanation: "火灾自动报警系统备用电源的容量应满足系统连续正常工作8小时。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6477,
            type: "single",
            question: "下列哪种探测器不宜安装在浴室环境中？",
            options: ["感烟探测器", "感温探测器", "离子感烟探测器", "光电感烟探测器"],
            answer: "D",
            explanation: "浴室水雾会影响光电感烟探测器的正常工作，不宜安装。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6478,
            type: "single",
            question: "火灾自动报警系统每年应至少进行几次全面检查？",
            options: ["1次", "2次", "4次", "12次"],
            answer: "A",
            explanation: "火灾自动报警系统每年应至少进行1次全面检查，包括对探测器的实效测试等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6479,
            type: "single",
            question: "火灾自动报警系统线路暗敷时应采用什么保护措施？",
            options: ["塑料管保护", "金属管或金属槽盒保护", "不用保护", "随便敷设"],
            answer: "B",
            explanation: "火灾自动报警系统线路暗敷时应采用金属管或金属槽盒保护，并刷防火涂料。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6480,
            type: "single",
            question: "线型感温探测器的保护范围不宜超过多少米？",
            options: ["100米", "200米", "300米", "500米"],
            answer: "B",
            explanation: "线型感温探测器的保护范围不宜超过200米，保证探测灵敏度。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6481,
            type: "single",
            question: "消防控制室应实行每日24小时专人值班制度，每班不应少于几人？",
            options: ["1人", "2人", "3人", "4人"],
            answer: "B",
            explanation: "消防控制室应每日24小时专人值班，每班不应少于2人，确保监控到位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6482,
            type: "single",
            question: "消防控制室值班人员应通过什么级别消防设施操作员考核？",
            options: ["初级", "中级", "高级", "技师"],
            answer: "B",
            explanation: "消防控制室值班人员应通过中级消防设施操作员考核，持证上岗。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6483,
            type: "single",
            question: "消防控制室值班期间，每班交接班时间间隔不宜超过多少小时？",
            options: ["4小时", "8小时", "12小时", "24小时"],
            answer: "B",
            explanation: "每班交接班时间间隔不宜超过8小时，确保值班连续性。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6484,
            type: "single",
            question: "消防控制室值班人员在火灾确认后应首先做什么？",
            options: ["启动灭火系统", "拨打119报警", "报告领导", "操作消防设备"],
            answer: "B",
            explanation: "火灾确认后应首先拨打119报警，然后再进行其他应急操作。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6485,
            type: "single",
            question: "消防控制室内设备的布置应符合规范要求，以下说法错误的是？",
            options: ["设备面盘前操作距离不小于1.5米", "设备面盘后维修距离不小于0.8米", "壁挂设备靠近门安装", "设备间距适当"],
            answer: "C",
            explanation: "消防控制室内设备布置应便于操作和维修，壁挂设备宜靠近墙面安装，不应安装在门附近。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6486,
            type: "single",
            question: "消防控制室应具备接受火灾报警、发出火灾信号等功能，以下哪项不属于消防控制室功能？",
            options: ["火灾报警", "消防通信", "灭火救援指挥", "联动控制"],
            answer: "C",
            explanation: "消防控制室主要功能是监控和联动控制，灭火救援指挥由消防队伍现场指挥。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6487,
            type: "single",
            question: "消防控制室值班人员发现误报警时应首先？",
            options: ["拆除探测器", "按下消音键，记录误报时间及原因", "切断电源", "通知领导"],
            answer: "B",
            explanation: "误报警时应先按下消音键消除声音，然后记录误报时间及原因，及时排查故障。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6488,
            type: "single",
            question: "消防控制室值班记录应保存不少于多少时间？",
            options: ["3个月", "6个月", "12个月", "24个月"],
            answer: "C",
            explanation: "消防控制室值班记录应保存不少于12个月，便于追溯查询。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6489,
            type: "single",
            question: "消防控制室应配备必要的哪类消防器材？",
            options: ["灭火器", "消防头盔", "消防手套", "全部都需要"],
            answer: "D",
            explanation: "消防控制室应配备灭火器、消防头盔、消防手套、消防斧等必要的消防器材。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6490,
            type: "single",
            question: "消防控制室对消防泵的远程手动启动功能正常，但水泵未动作，可能的故障原因是？",
            options: ["报警控制器故障", "模块故障", "水泵控制柜处于手动状态", "探测器故障"],
            answer: "C",
            explanation: "水泵控制柜处于手动状态时，消防控制室只能远程发出启动指令，但无法实际启动水泵。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6491,
            type: "single",
            question: "消防控制室值班人员发现故障探测器应？",
            options: ["立即拆除", "填写记录并通知维保单位检修", "切断电源", "不用处理"],
            answer: "B",
            explanation: "发现故障探测器应填写记录并及时通知有资质的维保单位进行检修。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6492,
            type: "single",
            question: "消防控制室应建立哪些管理制度？",
            options: ["值班制度", "交接班制度", "设备维护制度", "以上全部"],
            answer: "D",
            explanation: "消防控制室应建立完善的值班制度、交接班制度、设备维护制度等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6493,
            type: "single",
            question: "消防控制室值班人员上岗前应接受哪些培训？",
            options: ["消防理论培训", "消防设施操作培训", "应急预案培训", "以上全部"],
            answer: "D",
            explanation: "消防控制室值班人员上岗前应接受消防理论、设施操作、应急预案等全面培训。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6494,
            type: "single",
            question: "消防控制室图形显示装置应能显示什么信息？",
            options: ["火灾报警部位", "消防联动状态", "消防设备动作反馈", "全部都是"],
            answer: "D",
            explanation: "消防控制室图形显示装置应能显示火灾报警、联动状态、设备动作反馈等全部相关信息。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6495,
            type: "single",
            question: "消防控制室的消防通信设备应符合什么要求？",
            options: ["能与消防队直接通话", "能显示电话号码", "具备录音功能", "全部符合"],
            answer: "D",
            explanation: "消防控制室消防通信设备应能与消防队直接通话、显示电话号码、具备录音功能。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6496,
            type: "single",
            question: "消防控制室值班时收到报警信号但未发现火情，应首先？",
            options: ["直接离开", "到报警区域核实", "关闭报警控制器", "不用理会"],
            answer: "B",
            explanation: "收到报警信号应立即派人到报警区域进行核实，确认是否有火灾发生。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6497,
            type: "single",
            question: "消防控制室对防排烟系统的控制方式不包括？",
            options: ["远程手动控制", "自动控制", "机械应急控制", "强制切断非消防电源"],
            answer: "D",
            explanation: "消防控制室对防排烟系统的控制包括远程手动、自动、机械应急等方式，强制切断非消防电源不属于防排烟控制内容。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6498,
            type: "single",
            question: "消防控制室应设置在城市中心区域，门外应设置什么标志？",
            options: ["禁止吸烟标志", "醒目提示标志", "火警电话标志", "消防控制室标志"],
            answer: "D",
            explanation: "消防控制室门外应设置明显的'消防控制室'标志，便于识别。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6499,
            type: "single",
            question: "消防控制室与外界应保持什么样的通信联络？",
            options: ["只能内部通话", "能与消防队直接通话", "只能接听电话", "不需要通信设备"],
            answer: "B",
            explanation: "消防控制室应能与消防队保持直接通信联络，确保火灾时能及时报警和协调。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6500,
            type: "single",
            question: "消防控制室值班记录中不需要记录哪项内容？",
            options: ["火灾报警情况", "设备故障情况", "个人生活情况", "交接班情况"],
            answer: "C",
            explanation: "消防控制室值班记录应记录火灾报警、设备故障、交接班等内容，不记录个人生活情况。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6501,
            type: "single",
            question: "自动喷水灭火系统按安装位置分为哪几类？",
            options: ["湿式、干式", "闭式、开式", "水幕、雨淋", "全部都是"],
            answer: "D",
            explanation: "自动喷水灭火系统按安装位置分为湿式、干式；按系统形式分为闭式、开式、水幕、雨淋等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6502,
            type: "single",
            question: "湿式自动喷水灭火系统的特点是什么？",
            options: ["管道内充满压缩空气", "管道内充满有压水", "适用于寒冷地区", "喷头为开式"],
            answer: "B",
            explanation: "湿式系统管道内始终充满有压水，火灾发生时闭式喷头破裂出水，适合4-70℃环境。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6503,
            type: "single",
            question: "干式自动喷水灭火系统适用于什么场所？",
            options: ["高温场所", "寒冷地区不能采暖的场所", "有腐蚀性场所", "图书馆"],
            answer: "B",
            explanation: "干式系统适用于环境温度低于4℃或高于70℃且不能采用湿式系统的场所，如寒冷地区不采暖建筑。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6504,
            type: "single",
            question: "自动喷水灭火系统末端试水装置的作用是什么？",
            options: ["排水", "测试系统性能", "报警", "减压"],
            answer: "B",
            explanation: "末端试水装置用于测试系统能否正常报警、联动，以及最不利点喷头的工作压力。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6505,
            type: "single",
            question: "闭式喷头按结构分为哪两种类型？",
            options: ["下垂型、直立型", "边墙型、吊顶型", "玻璃球型、易熔合金型", "以上都不对"],
            answer: "C",
            explanation: "闭式喷头按结构分为玻璃球洒水喷头和易熔合金洒水喷头两大类。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6506,
            type: "single",
            question: "玻璃球洒水喷头的工作原理是什么？",
            options: ["温度升高使玻璃球爆裂", "压力使喷头打开", "探测器控制", "手动启动"],
            answer: "A",
            explanation: "玻璃球内充有有机溶液，当环境温度升高时玻璃球爆裂，密封件脱落，喷水灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6507,
            type: "single",
            question: "快速响应早期抑制喷头的工作温度一般为多少摄氏度？",
            options: ["57℃", "68℃", "79℃", "141℃"],
            answer: "D",
            explanation: "快速响应早期抑制喷头（ESFR）工作温度一般为141℃或182℃。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6508,
            type: "single",
            question: "湿式报警阀组的作用是？",
            options: ["过滤杂质", "防止水倒流，输出报警信号", "增加水压", "控制喷头"],
            answer: "B",
            explanation: "湿式报警阀组具有防止水倒流的功能，并能在火灾时输出报警信号，启动水力警铃。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6509,
            type: "single",
            question: "自动喷水灭火系统水力警铃的工作压力不应小于多少MPa？",
            options: ["0.05MPa", "0.1MPa", "0.2MPa", "0.3MPa"],
            answer: "A",
            explanation: "水力警铃的工作压力不应小于0.05MPa，确保能发出清晰的报警声。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6510,
            type: "single",
            question: "自动喷水灭火系统管网的试验压力不应小于多少MPa？",
            options: ["0.8MPa", "1.0MPa", "1.5MPa", "2.0MPa"],
            answer: "B",
            explanation: "自动喷水灭火系统管网的水压试验压力不应小于1.0MPa。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6511,
            type: "single",
            question: "自动喷水灭火系统管道直径不应小于多少毫米？",
            options: ["15mm", "20mm", "25mm", "50mm"],
            answer: "C",
            explanation: "自动喷水灭火系统配水管道直径不应小于25mm。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6512,
            type: "single",
            question: "自动喷水灭火系统每根配水支管控制的喷头数量不宜超过多少个？",
            options: ["5个", "8个", "10个", "15个"],
            answer: "B",
            explanation: "每根配水支管控制的喷头数量不宜超过8个，保证系统可靠性。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6513,
            type: "single",
            question: "自动喷水灭火系统的作用面积是指什么？",
            options: ["保护区域总面积", "火灾时开放的喷头覆盖面积", "建筑总面积", "水泵房面积"],
            answer: "B",
            explanation: "作用面积是指火灾时开放喷头能够有效覆盖的面积，是系统设计的参数。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6514,
            type: "single",
            question: "预作用自动喷水灭火系统的适用范围是？",
            options: ["常温场所", "严禁管道漏水的场所", "严重冰冻场所", "高温场所"],
            answer: "B",
            explanation: "预作用系统适用于严禁管道漏水和系统误喷的场所，以及替代干式系统的场所。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6515,
            type: "single",
            question: "雨淋系统的工作原理是什么？",
            options: ["闭式喷头破裂启动", "火灾时传动管爆裂，开式喷头喷水", "手动启动", "温控启动"],
            answer: "B",
            explanation: "雨淋系统采用开式喷头，火灾时通过火灾探测器控制雨淋阀开启，所有喷头同时喷水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6516,
            type: "single",
            question: "水幕系统的作用是什么？",
            options: ["灭火", "防火分隔", "保护设备", "全部都是"],
            answer: "D",
            explanation: "水幕系统主要用于防火分隔，也可用于冷却防火分隔物和保护设备。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6517,
            type: "single",
            question: "自动喷水灭火系统喷头的选型应符合什么要求？",
            options: ["仅考虑美观", "根据设置场所选择适合的喷头类型", "选择最贵的", "随意选择"],
            answer: "B",
            explanation: "喷头选型应根据设置场所的环境温度、可燃物性质等选择合适类型的喷头。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6518,
            type: "single",
            question: "自动喷水灭火系统末端试水装置的出水应直接排向哪里？",
            options: ["卫生间", "雨水管道", "明沟或其他排水设施", "下水道"],
            answer: "C",
            explanation: "末端试水装置的出水应排向明沟或其他排水设施，便于观察和检测。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6519,
            type: "single",
            question: "自动喷水灭火系统每月应检查项目不包括？",
            options: ["喷头外观", "管网外观", "建筑装修", "报警阀组"],
            answer: "C",
            explanation: "每月应检查喷头、管网、报警阀组等，不包括建筑装修检查。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6520,
            type: "single",
            question: "自动喷水灭火系统水流指示器的设置要求是？",
            options: ["每个楼层设置一个", "每个防火分区设置一个", "每个报警阀组控制的最不利点喷头处设置一个", "不用设置"],
            answer: "B",
            explanation: "每个防火分区应设置水流指示器，以便显示火灾区域。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6521,
            type: "single",
            question: "灭火器按充装灭火剂类型分为哪几类？",
            options: ["水型、泡沫型", "干粉型、二氧化碳型", "洁净气体型", "全部都是"],
            answer: "D",
            explanation: "灭火器按灭火剂类型分为水型、泡沫型、干粉型、二氧化碳型、洁净气体型等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6522,
            type: "single",
            question: "ABC干粉灭火器主要适用于哪类火灾？",
            options: ["A类火灾", "B类火灾", "C类火灾", "适用于A、B、C类火灾"],
            answer: "D",
            explanation: "ABC干粉灭火器适用于A类（固体）、B类（液体）、C类（气体）火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6523,
            type: "single",
            question: "CO2灭火器主要适用于哪类火灾？",
            options: ["A类火灾", "B类火灾和带电设备", "金属火灾", "厨房火灾"],
            answer: "B",
            explanation: "CO2灭火器适用于B类火灾和带电设备火灾，不适用于A类固体火灾和金属火灾。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6524,
            type: "single",
            question: "灭火器使用时，灭火器距离火焰应保持多少米？",
            options: ["1-2米", "3-5米", "8-10米", "越近越好"],
            answer: "B",
            explanation: "灭火器使用时，应距离火焰3-5米，既能有效灭火，又确保人员安全。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6525,
            type: "single",
            question: "手提式灭火器的报废年限是多少年？",
            options: ["5年", "8年", "10年", "15年"],
            answer: "C",
            explanation: "手提式灭火器（干粉型、二氧化碳型）报废年限为10年，水基型为6年。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6526,
            type: "single",
            question: "灭火器指针在什么区域时表示压力正常？",
            options: ["红色区域", "绿色区域", "黄色区域", "白色区域"],
            answer: "B",
            explanation: "灭火器压力表指针在绿色区域表示压力正常，红色表示压力不足，黄色表示压力过高。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6527,
            type: "single",
            question: "使用灭火器扑救火灾时，对准火焰哪个部位喷射效果最好？",
            options: ["火焰上部", "火焰中部", "火焰根部", "随意部位"],
            answer: "C",
            explanation: "灭火器应对准火焰根部喷射，使灭火剂覆盖燃烧物，达到最佳灭火效果。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6528,
            type: "single",
            question: "灭火器放置应遵循什么原则？",
            options: ["便于取用，不影响疏散", "可以放置在角落", "可以上锁", "任意位置"],
            answer: "A",
            explanation: "灭火器应放置在便于取用、不影响安全疏散的明显位置，不得上锁或阻挡。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6529,
            type: "single",
            question: "灭火器的检查周期是多久？",
            options: ["每天", "每周", "每月", "每年"],
            answer: "C",
            explanation: "灭火器应每月至少检查一次，检查内容包括压力、铅封、外观等。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6530,
            type: "single",
            question: "手提式灭火器操作方法正确的是？",
            options: ["先拔保险销，再握喷管", "先握喷管，再拔保险销", "不用拔保险销", "直接扔向火源"],
            answer: "A",
            explanation: "正确操作顺序：拔掉保险销，一手握喷管，一手压把，对准火焰根部喷射。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6531,
            type: "single",
            question: "推车式灭火器的最大保护距离是多少米？",
            options: ["10米", "20米", "50米", "100米"],
            answer: "B",
            explanation: "推车式灭火器的最大保护距离为20米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6532,
            type: "single",
            question: "灭火器扑救液体火灾时，是否可以直接冲击液面？",
            options: ["是", "否", "无所谓", "看情况"],
            answer: "B",
            explanation: "扑救液体火灾时，灭火器不应直接冲击液面，以免引起飞溅造成更大危险。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6533,
            type: "single",
            question: "下列哪种火灾不能使用水型灭火器扑救？",
            options: ["木材火灾", "纸张火灾", "带电设备火灾", "棉布火灾"],
            answer: "C",
            explanation: "水型灭火器不能用于扑救带电设备火灾，以免造成触电危险。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6534,
            type: "single",
            question: "灭火器的配置数量应按什么标准计算？",
            options: ["建筑面积", "保护距离", "建筑防火规范关于灭火器配置的规定", "随便配置"],
            answer: "C",
            explanation: "灭火器配置数量应按照《建筑灭火器配置设计规范》计算确定。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6535,
            type: "single",
            question: "手提式灭火器首次维修年限是多久？",
            options: ["1年", "3年", "5年", "不需要维修"],
            answer: "C",
            explanation: "手提式灭火器首次维修期限为5年，以后每隔2年维修一次。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6536,
            type: "single",
            question: "灭火器灭B类火灾时，灭火器与燃烧物的距离不宜超过多少米？",
            options: ["3米", "5米", "8米", "10米"],
            answer: "B",
            explanation: "灭火器灭B类火灾时，与燃烧物的距离不宜超过5米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6537,
            type: "single",
            question: "洁净气体灭火器主要适用于哪类火灾？",
            options: ["A类火灾", "B类火灾和带电设备", "金属火灾", "厨房油脂火灾"],
            answer: "B",
            explanation: "洁净气体灭火器适用于B类火灾和带电设备火灾，灭火后不留残留物。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6538,
            type: "single",
            question: "灭火器在使用后是否需要重新充装？",
            options: ["不需要", "需要", "看情况", "无所谓"],
            answer: "B",
            explanation: "灭火器使用后必须重新充装才能继续使用，即使未用完也应送专业机构充装。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6539,
            type: "single",
            question: "下列关于灭火器摆放的说法，错误的是？",
            options: ["应放置在明显位置", "可以放置在角落", "不应影响疏散", "应设置指示标志"],
            answer: "B",
            explanation: "灭火器应放置在明显易取的位置，不应放置在角落或隐蔽处，以便紧急时快速取用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6540,
            type: "single",
            question: "灭火器的喷射时间要求是多少秒以上？",
            options: ["3秒", "5秒", "8秒", "10秒"],
            answer: "B",
            explanation: "灭火器的有效喷射时间不应小于5秒，确保有足够时间灭火。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6541,
            type: "single",
            question: "消防水带按承受工作压力分为哪几类？",
            options: ["0.8MPa、1.0MPa、1.3MPa", "低压、中压、高压", "有衬里、无衬里", "合成纤维、橡胶"],
            answer: "B",
            explanation: "消防水带按工作压力分为低压（≤1.6MPa）、中压（>1.6MPa且≤3.0MPa）、高压（>3.0MPa）三类。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6542,
            type: "single",
            question: "室内消火栓给水系统的水枪射程不应小于多少米？",
            options: ["5米", "8米", "10米", "15米"],
            answer: "C",
            explanation: "室内消火栓给水系统的水枪射程不应小于10米。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6543,
            type: "single",
            question: "消防水带的标准长度是多少米？",
            options: ["10米", "15米", "20米", "25米"],
            answer: "D",
            explanation: "消防水带的标准长度为25米，其他长度可根据实际需要定制。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6544,
            type: "single",
            question: "消防水带与消火栓的连接方式是？",
            options: ["螺纹连接", "卡式连接", "内扣式或螺纹式", "焊接"],
            answer: "C",
            explanation: "消防水带与消火栓采用内扣式或螺纹式连接，确保连接牢固密封。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6545,
            type: "single",
            question: "消防水带使用后应如何处理？",
            options: ["直接卷起存放", "冲洗干净、晾干后卷起存放", "扔掉", "不用处理"],
            answer: "B",
            explanation: "消防水带使用后应冲洗干净，晾干后卷起存放，防止霉变和损坏。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6546,
            type: "single",
            question: "消防水带平时的检查内容不包括？",
            options: ["外观检查", "密封性检查", "长度检查", "价格检查"],
            answer: "D",
            explanation: "消防水带检查包括外观、密封性、长度等，不包括价格检查。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6547,
            type: "single",
            question: "消防水带的技术档案应保存不少于多少年？",
            options: ["1年", "3年", "5年", "永久"],
            answer: "C",
            explanation: "消防水带的技术档案应保存不少于5年，便于追溯管理。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6548,
            type: "single",
            question: "消防水带接头漏水可能的原因是什么？",
            options: ["密封垫圈损坏", "接口松动", "水带破裂", "阀门未开"],
            answer: "A",
            explanation: "消防水带接头漏水的主要原因是密封垫圈损坏或老化，应及时更换。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6549,
            type: "single",
            question: "铺设消防水带时应注意什么？",
            options: ["可以折叠", "不应折叠铺设", "无所谓", "折叠越紧越好"],
            answer: "B",
            explanation: "消防水带应平直铺设，不应折叠，以免影响通水能力和使用寿命。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6550,
            type: "single",
            question: "室内消火栓栓口动压力不应大于多少MPa？",
            options: ["0.35MPa", "0.5MPa", "0.7MPa", "1.0MPa"],
            answer: "B",
            explanation: "室内消火栓栓口动压力不应大于0.5MPa，否则应采取减压措施。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6551,
            type: "single",
            question: "SN型室内消火栓中，S代表什么含义？",
            options: ["双阀双出口", "单阀单出口", "双阀单出口", "单阀双出口"],
            answer: "B",
            explanation: "SN型室内消火栓中，S代表单阀单出口，N代表室内用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6552,
            type: "single",
            question: "消防水带的工作压力试验压力应为额定压力的多少倍？",
            options: ["1.0倍", "1.2倍", "1.5倍", "2.0倍"],
            answer: "C",
            explanation: "消防水带的水压试验压力应为额定工作压力的1.5倍，保压5分钟。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6553,
            type: "single",
            question: "消防水带应每半年至少进行几次全面检查？",
            options: ["1次", "2次", "3次", "4次"],
            answer: "A",
            explanation: "消防水带应每半年至少进行1次全面检查，包括密封性试验。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6554,
            type: "single",
            question: "连接消防水带时，接口处应如何处理？",
            options: ["涂润滑剂", "加垫圈确保密封", "用力拧紧即可", "不用处理"],
            answer: "B",
            explanation: "连接消防水带时接口处应加垫圈确保密封，防止漏水。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6555,
            type: "single",
            question: "消防水带卷法正确的是？",
            options: ["随便卷", "应双扣卷", "单向卷", "不用卷"],
            answer: "B",
            explanation: "消防水带应采用双扣卷法卷好，即每卷一圈压边翻扣一次，确保使用时能自动展开。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6556,
            type: "single",
            question: "消火栓箱内应配置的器材一般不包括？",
            options: ["消防水带", "消防水枪", "消防斧", "灭火器"],
            answer: "D",
            explanation: "消火栓箱内一般配置消防水带、水枪、消防水带包布等，不包括灭火器。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6557,
            type: "single",
            question: "消防水带接头材质通常是什么？",
            options: ["塑料", "铝合金或铜合金", "纯铜", "不锈钢"],
            answer: "B",
            explanation: "消防水带接头通常采用铝合金或铜合金材质，轻便耐用。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6558,
            type: "single",
            question: "室内消火栓的间距不应大于多少米？",
            options: ["20米", "30米", "50米", "100米"],
            answer: "B",
            explanation: "室内消火栓的间距不应大于30米，保证两股充实水柱能到达室内任何部位。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6559,
            type: "single",
            question: "消防水带在保管时应注意什么？",
            options: ["避免暴晒", "避免潮湿", "避免腐蚀性物质", "全部注意"],
            answer: "D",
            explanation: "消防水带保管时应避免暴晒、潮湿、腐蚀性物质和尖锐物体，确保水带不受损害。",
            module: "建筑消防设施",
            categoryId: 2
        },
        {
            id: 6560,
            type: "single",
            question: "消火栓使用后应检查的内容是？",
            options: ["水带是否损坏", "阀门是否灵活", "接口是否完好", "全部都是"],
            answer: "D",
            explanation: "消火栓使用后应全面检查水带、阀门、接口等是否完好，及时维修或更换损坏部件。",
            module: "建筑消防设施",
            categoryId: 2
        }
    ]
}; 

// 模拟考试题目（从题库随机抽取）
function generateExamQuestions(count = 50) {
    const shuffled = [...questionBank.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map((q, index) => ({
        ...q,
        id: index + 1
    }));
}

// 获取分类题目
function getQuestionsByCategory(categoryId) {
    return questionBank.questions.filter(q => q.module === getCategoryName(categoryId));
}

// 根据分类ID获取分类名称
function getCategoryName(categoryId) {
    const categories = {
        1: "消防基础知识",
        2: "建筑消防设施",
        3: "消防法律法规",
        4: "火灾预防",
        5: "消防应急"
    };
    return categories[categoryId] || "";
}

// 获取题目数量统计
function getQuestionStats() {
    const stats = {
        total: questionBank.questions.length,
        byCategory: {}
    };
    
    questionBank.categories.forEach(cat => {
        stats.byCategory[cat.id] = {
            name: cat.name,
            count: questionBank.questions.filter(q => q.module === cat.name).length
        };
    });
    
    return stats;
}
