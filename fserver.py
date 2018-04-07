from flask import Flask, Response, send_from_directory

app=Flask(__name__,static_url_path="")

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory("css",path)

@app.route('/')
def root():
    return send_from_directory('',"index.html")



if __name__=="__main__":
    app.run(debug=True, port=5001, ssl_context=('cert/server.crt','cert/server.key'))