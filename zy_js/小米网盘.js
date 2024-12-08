Object.assign(muban.mxone5.二级, {
    //tabs: '.module-tab-item',
    lists: '.module-row-one:eq(#id)&&a.module-row-text',
    list_text: 'h4&&Text',
    list_url: 'a&&data-clipboard-text',
});
var rule = {
    title: '小米｜网盘',
    模板: 'mxone5',
    host: 'http://www.mucpan.cc/',
    //url: '/index.php/vod/show/fyclass--------fypage---.html',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    searchUrl: '/index.php/vod/search.html?wd=**',
    filter: '',
    class_parse: '.grid-box&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '网址|专题|全部影片|少儿',
    tab_rename: {
        'xiaoge': 'UC云盘',
    },
    搜索: '.module-search-item;.video-serial&&title;*;.video-serial&&Text;.video-serial&&href',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    lazy: `
  if (/(pan.quark.cn|www.aliyundrive.com|www.alipan.com)/.test(input)){
let type="ali";
if (input.includes("pan.quark.cn")){
type="quark";
} else if (input.includes("www.aliyundrive.com") || input.includes("www.alipan.com")){
type="ali";
}
let confirm="";
//let confirm="&confirm=0";
input = getProxyUrl().replace('js',type)+'&type=push'+confirm+'&url='+encodeURIComponent(input);
//input={parse:0,url:input}
}
  
  `,
}