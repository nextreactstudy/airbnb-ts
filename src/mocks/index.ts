// async function initMocks() {
//     if (typeof window === "undefined") {
//         const { server } = await import("./server");
//         server.listen();
//     } else {
//         const { worker } = await import("./browser");
//         worker.start();
//     }
// }

// initMocks();

// export {};

if (typeof window === "undefined") {
    const server = import("./server");
    server.then((s) => s.server.listen());
} else {
    const worker = import("./browser");
    worker.then((w) => w.worker.start());
}

export {};
