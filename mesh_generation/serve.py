from flask import Flask, send_file, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/scene.gltf')
def serve_gltf():
    response = make_response(send_file('scene.gltf', mimetype='model/gltf+json'))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run()