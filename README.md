# Web__Blog

注意：修改editor.min.css源码

//新增
html, body {      
  height: 100%;
  width: 100%;
}

.editormd {
  width: 90%;
  height: 90%;//修改
  margin: 0 auto;
  text-align: left;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  font-family: "Meiryo UI", "Microsoft YaHei", "Malgun Gothic", "Segoe UI", "Trebuchet MS", Helvetica, "Monaco", monospace, Tahoma, STXihei, "华文细黑", STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans, Arimo, Arial, SimSun, "宋体", Heiti, "黑体", sans-serif;
}


##11.17
完成了登录注册

todo:移植评论部分功能以及加入管理员相关页面，查询所有用户

##11.18

文章页：完成md渲染，代码块高亮
      todo:1、代码背景色，部分显示调整
          2、文章页整合
编辑页：完成编辑器所有功能
      todo:1、文章保存
          2、草稿箱
          3、文章修改
          4、md教程（类似csdn）
