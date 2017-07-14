(function () {
var app = angular.module("MobileStore",[]);
    var iphone = {
        name:"iphone7 Plus",
        color:"apple Red",
        memory:"3GB RAM, 128 Internal Memory",
        price:75000,
        image:"img/apple_iphone_7.Png",
        isSoldOut:false,
        activeTab:"Description"
    };
    var pixel = {
        name: "Google pixel",
        color: "Black",
        memory: "3GB RAM, 80 Internal Memory",
        price: 70000,
        image: "img/pixel.Png",
        isSoldOut: false,
        activeTab:"Description"
    };
    var samsung = {
        name: "samsung s8",
        color: "Black",
        memory: "4GB RAM, 80 Internal Memory",
        price: 60000,
        image: "img/sams8.Png",
        isSoldOut: false,
        activeTab:"Description"
    };

    app.controller("StoreController",function () {
        this.mobiles=[iphone,pixel,samsung];

    this.setActiveTab=function (mobile,tab) {
        mobile.activeTab=tab;
    }
    });
})();
