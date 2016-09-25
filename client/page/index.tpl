{% spaceless %}
<!DOCTYPE html>
{% html lang="en" %}
{% head %}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="renderer" content="webkit">
    {% require "home:static/main.css" %}
{% endhead %}
{% body %}
    <!--[if lt IE 9]>
      <p class="browsehappy">您正在用一个 <strong>老掉牙</strong> 的浏览器. 请 <a href="http://browsehappy.com/">点击升级</a> 跟上时代吧!!</p>
    <![endif]-->
    <div id="app"></div>
    {% require "home:static/app.js" %}
{% endbody %}
{% endhtml %}
{% endspaceless %}