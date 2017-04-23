# qf20170419

说明:
比如这个页面文件名是  product.html 我访问 http://xxx.com/product.html?id=5&lang=en  (lang:cn中文 en英文)
你需要拿到id 和 lang
然后请求:
http://xxx.com/index.php/product/view?id=5&lang=en 拿到值 dh2940...这些
然后是图片:
http://xxx.com/index.php/product/pic?id=5&lang=en 图片json
下拉到页面底部,自动请求 http://xxx.com/index.php/product/pic?id=5&lang=en&page=2 ... 继续载入更多图片;
点击图片 ,载入大图, 有关闭按钮;






http://xxx.com/index.php/product/view?id=5&lang=en 返回json:


{
    "Article" : "Article",
    "Name" : "Name",
    "Content" : "Content",
    "Width" : "Width",
    "Weight" : "Weight",
    "Pics1" : [
        1,
        5,
        6
    ],
    "Pics2" : [
        1,
        3,
        6
    ],
    "List" : [
        [
            "#FFS332",
            "202",
            "Wt1",
            "860",
            "2.95",
            "3",
            "4",
            "yes"
        ],
        [
            "#FFS333",
            "203",
            "Wt2",
            "860",
            "2.95",
            "3",
            "4",
            "yes"
        ]
    ]
}




http://xxx.com/index.php/product/view?id=5&lang=cn 返回json:

{
    "Article" : "Article",
    "Name" : "Name",
    "Content" : "Content",
    "Width" : "Width",
    "Weight" : "Weight",
    "Pics1" : [
        1,
        5,
        6
    ],
    "Pics2" : [
        1,
        3,
        6
    ],
    "List" : [
        [
            "#FFS332",
            "202",
            "Wt1",
            "860",
            "17",
            "数千米"
        ],
        [
            "#FFS331",
            "203",
            "Wt1",
            "860",
            "17",
            "数千米"
        ]
    ]
}


http://xxx.com/index.php/product/pic?id=5&lang=en&page=2 返回json:
1小图  2大图

[
    [
        "http://xxx.com/1.jpg",
        "http://xxx.com/2.jpg"
    ],
    [
        "http://xxx.com/1.jpg",
        "http://xxx.com/2.jpg"
    ],
    [
        "http://xxx.com/1.jpg",
        "http://xxx.com/2.jpg"
    ],
    [
        "http://xxx.com/1.jpg",
        "http://xxx.com/2.jpg"
    ],
    [
        "http://xxx.com/1.jpg",
        "http://xxx.com/2.jpg"
    ]
]