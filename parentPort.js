// Explanation
// https://snyk.io/blog/node-js-multithreading-with-worker-threads/
// A new worker is constructed, and hello is passed in as its data.
// The code running in the worker accesses its data and passes a new friendly message back to the main thread.
// The main thread’s event listener picks up the message sent from the worker thread and emits it to the console.
// The worker thread has no more code to run, so it exits. The main thread is notified of this by the exit event.

const {
      Worker,
      isMainThread,
      parentPort,
      workerData
  } = require("worker_threads");
  
  if (isMainThread) {
      const worker = new Worker(__filename, {workerData: "hello"});
      worker.on("message", msg => console.log(`Worker message received: ${msg}`));
      worker.on("error", err => console.error(error));
      worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
  }
  else {
      const data = workerData;
      parentPort.postMessage(`You said \"${data}\".`);
  }