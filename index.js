window.onload = function () {
    //1 获取到相关元素
    var itemBox = document.getElementsByClassName('itemBox')[0];
    var items = document.getElementsByClassName('item');
    //2 获取到元素的宽度
    var itemBoxW = itemBox.offsetWidth;
    // console.log(itemBoxW);
    var itemW = items[0].offsetWidth;
    // console.log(itemW);
    //3 求出列数
    var column = parseInt(itemBoxW / itemW);
    // console.log(column);
    //4 求出间距
    var distence = (itemBoxW - itemW * column) / (column - 1);
    // console.log(distence);

    //定义一个数组用来存放每列高度的容器
    var arr = [];
    waterFull(); //调用方法

    //  获取数组的最小值以及索引
    function getMin(arr) {
        var obj = {};
        obj.minV = arr[0];
        obj.minI = 0;
        for (var i = 0; i < arr.length; i++) {
            if (obj.minV > arr[i]) {
                obj.minV = arr[i]
                obj.minI = i;

            }
        }
        return obj;

    }

    //5 实现瀑布流的方法
    function waterFull() {
        for (var i = 0; i < items.length; i++) {
            if (i < column) {
                items[i].style.left = (itemW + distence) * i + 'px';
                arr[i] = items[i].offsetHeight;
            } else {
                var minV = getMin(arr).minV;
                var minI = getMin(arr).minI;
                items[i].style.left = (itemW + distence) * minI + 'px';
                items[i].style.top = minV + distence + 'px';
                arr[minI] = minV + distence + items[i].offsetHeight;
            }

        }

    }

    //6 滚动页面时加载数据
    window.onscroll = function () {
        if (window.pageYOffset + window.innerHeight > getMin(arr).minV) {
            var json = [{
                    "src": "./images/p_000.jpg"
                },
                {
                    "src": "./images/p_001.jpg"
                },
                {
                    "src": "./images/p_002.jpg"
                },
                {
                    "src": "./images/p_003.jpg"
                },
                {
                    "src": "./images/p_004.jpg"
                },
                {
                    "src": "./images/p_005.jpg"
                },
                {
                    "src": "./images/p_006.jpg"
                },
                {
                    "src": "./images/p_007.jpg"
                },
                {
                    "src": "./images/p_008.jpg"
                },
                {
                    "src": "./images/p_009.jpg"
                },
                {
                    "src": "./images/p_010.jpg"
                },
                {
                    "src": "./images/p_011.jpg"
                },
                {
                    "src": "./images/p_012.jpg"
                },
                {
                    "src": "./images/p_013.jpg"
                },
                {
                    "src": "./images/p_014.jpg"
                },
                {
                    "src": "./images/p_015.jpg"
                },
                {
                    "src": "./images/p_016.jpg"
                },
                {
                    "src": "./images/p_017.jpg"
                },
                {
                    "src": "./images/p_018.jpg"
                },
                {
                    "src": "./images/p_019.jpg"
                }
            ];
            for (var i = 0; i < json.length; i++) {
                var div = document.createElement('div');
                div.className = 'item';
                var img = document.createElement('img');
                img.src = json[i].src;
                div.appendChild(img);
                itemBox.appendChild(div);

            }
            waterFull(); //调用方法
        }
    }




}