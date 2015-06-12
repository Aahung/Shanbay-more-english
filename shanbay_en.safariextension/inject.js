var replaceMapping = {
    '认识': 'I know it',
    '不认识': 'I don\'t know it',
    '进度': 'progress',
    '想起来了': 'Got it!',
    '没想起来': 'Still don\'t know it',
    '查看详细': 'Check details',
    '显示全部释义': 'Show all definitions',
    '单词解释': 'Definition',
    '英语释义': 'Definition in English',
    '编辑': 'Edit',
    '正在获取更多数据 ...': 'Loading more ...',
    '关闭': 'Close',
    '保存': 'Save'
};

function isTemplate(ele) {
    var attributes = ele.attributes;
    for (var i = attributes.length - 1; i >= 0; i--) {
        if (attributes[i].value == "text/x-jquery-tmpl") {
            return true;
        }
    };
    return false;
}

function replaceTextWithinTags(html, map) {
    for (var key in map) {
        html = html.replace('>' + key + '<', '>' + map[key] + '<');
    }
    return html;
}

function replaceChineseInTemplates() {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
       if (isTemplate(scripts[i])) {
           var html = scripts[i].innerHTML;
           scripts[i].innerHTML 
               = replaceTextWithinTags(html, replaceMapping);
       }
    };
}

document.addEventListener("DOMContentLoaded", replaceChineseInTemplates, true);
console.log('Welcome to use Shanbay Englisher, ');