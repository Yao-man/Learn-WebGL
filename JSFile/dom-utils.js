//判断元素是否为所需类型
function judgeType(targerTypeStr, elementObj) {
    let type = elementObj.tagName || elementObj.nodeName;
    if (targerTypeStr.toUpperCase() === type.toUpperCase()) {
        return true;
    }
    return false;
}

//获取script标签 内 文本内容
function getScriptText(scriptId) {
    const scriptEle = document.getElementById(scriptId);
    if (!judgeType('script', scriptEle)) {
        return null;
    }
    return scriptEle.text;
}