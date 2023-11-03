# 从 Flask 这个包中导入 flask 这个类
from flask import Flask

# 使用Flask类创建一个app对象
# __name__ 代表当前的这个模块
# 1.以后出现bug，它可以帮助我们快速定位
# 2.对于寻找模板文件，有一个相对路径
app = Flask(__name__)
app.config.from_object('config')
print(app.config['DEBUG'])

# 创建一个路由和视图函数的映射
# 创建的是根路由
# 访问根路由，就会执行hello_world这个函数
@app.route('/book/search/<q>/<page>')
def search(q, page):  # put application's code here
    """
        q :普通关键字 isbn
        page
    """
    isbn_or_key = 'key'
    if len(q) == 13 and q.isdigit():
        isbn_or_key = 'isbn'
    short_q = q.replace('-','')
    if '-' in q and len(short_q) == 10 and short_q.isdigit:
        isbn_or_key = 'isbn'
    pass

# 运行代码
if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=app.config['DEBUG'],port=5001)