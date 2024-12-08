Object.assign(muban.mxone5.二级,{
    //tabs: '.module-tab-item',
    lists: '.module-row-one:eq(#id)&&a.module-row-text',
    list_text:'h4&&Text',
    list_url:'a&&data-clipboard-text',
});
var rule = {
    title: '玩偶哥哥[盘]',
    模板: 'mxone5',
    host: 'https://www.wogg.net',
    //url: '/index.php/vod/show/fyclass--------fypage---.html',
    url: '/index.php/vodshow/fyclass-fyfilter.html',
    filter_url: '{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    filter:'',
    class_parse: '.grid-box&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '全部影片',
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