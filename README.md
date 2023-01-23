# worker

# image_resize

This code will convert an image to three different sizes in parallel. It’s much quicker than processing each size sequentially.

```

npm install sharp

```

Next, place a large image in your working directory and name it image.jpg

```
node resize-main.js image.jpg

```

You should see all three “Resizing” messages appear instantaneously. The main thread iterates over the requested sizes, creates a new thread for each one, and waits until they complete. This ensures the sizes are generated in parallel, without blocking the main thread.

# video_resize

The example relies on the popular ffmpeg encoder. The fluent-ffmpeg package is a Node.js wrapper around the existing ffmpeg libraries on your system. You’ll need to [install ffmpeg before you can run your code. Most Linux environments will already include it, but Windows and Mac users may need to get it manually.

Install instractions:

https://snyk.io/blog/node-js-multithreading-with-worker-threads/

# encrypt_files

Create a simple text file in your working directory, ready to encrypt, using the following command in your terminal:

```

echo foobar > demo.txt

```

Now execute your code to encrypt the file:

```

node encrypt-main.js demo.txt

```
