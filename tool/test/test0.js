var arr = [
        {
            id: 1,
            riqi: '2017-11-13'
        },
        {
            id: 2,
            riqi: '2017-11-14'
        },
        {
            id: 3,
            riqi: '2017-11-15'
        },
    ],
// 缓存数组长度，进一步提升代码性能
    len = arr.length,
    result = [];

for (var i = 0; i < len; i++) {
    result[i] = arr[i]['riqi']
};