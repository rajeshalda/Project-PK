from flask import Flask, render_template, request, redirect, jsonify
import os

app = Flask(__name__)

# Store messages in memory (you can expand this to use a database or file storage)
messages = []

# Path to the static image folder
image_folder = os.path.join(app.root_path, 'static', 'images')

@app.route('/')
def home():
    try:
        photos = os.listdir(image_folder)
        photos = [photo for photo in photos if photo.endswith(('png', 'jpg', 'jpeg', 'gif'))]
    except FileNotFoundError:
        photos = []
    return render_template('index.html', messages=messages, photos=photos)

@app.route('/add_message', methods=['POST'])
def add_message():
    name = request.form['name']
    message = request.form['message']
    if name and message:
        messages.append({'name': name, 'message': message})
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
