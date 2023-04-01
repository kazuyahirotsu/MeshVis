import fcntl
import os
from flask import Flask, send_file, make_response
from flask_cors import CORS
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app)
CORS(app)

OBJ_FILE = 'test.obj'

@app.route('/scene.obj')
def serve_obj():
    with open(OBJ_FILE, 'rb') as f:
        # Acquire an exclusive lock on the file
        fcntl.flock(f.fileno(), fcntl.LOCK_EX)
        
        # Read the file contents and serve it as a response
        response = make_response(send_file(OBJ_FILE, mimetype='model/obj+json'))
        # response.headers.add('Access-Control-Allow-Origin', '*')
        
        # Release the lock on the file
        fcntl.flock(f.fileno(), fcntl.LOCK_UN)
        
        return response

if __name__ == '__main__':
    app.run(debug=True, port=443, ssl_context=('./certification_test/server.crt', './certification_test/server.key'), host='0.0.0.0')
