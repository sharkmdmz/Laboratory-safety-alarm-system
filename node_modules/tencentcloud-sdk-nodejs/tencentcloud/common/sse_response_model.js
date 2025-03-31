"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSEResponseModel = void 0;
const events_1 = require("events");
const readline_1 = require("readline");
class SSEEventEmitter extends events_1.EventEmitter {
}
class SSEResponseModel {
    constructor(stream) {
        this.stream = stream;
        this.readline = readline_1.createInterface({
            input: stream,
            crlfDelay: Infinity,
        });
        this.eventSource = new SSEEventEmitter();
        this.init();
    }
    /**
     * @inner
     */
    init() {
        const { stream, readline, eventSource } = this;
        let lines = [];
        readline.on("line", (line) => {
            if (line) {
                lines.push(line);
                return;
            }
            eventSource.emit("message", this.parseSSEMessage(lines.splice(0)));
        });
        readline.on("close", () => {
            if (lines.length > 0) {
                eventSource.emit("message", this.parseSSEMessage(lines.splice(0)));
            }
        });
        stream.on("close", () => {
            eventSource.emit("close");
        });
        stream.on("error", (err) => {
            eventSource.emit("error", err);
        });
    }
    /**
     * @inner
     */
    parseSSEMessage(lines) {
        const message = {
            data: "",
            event: "",
            id: "",
            retry: undefined,
        };
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // line is of format "<field>:<value>" or "<field>: <value>"
            const colonIndex = line.indexOf(":");
            if (colonIndex <= 0)
                continue; // exclude comments and lines with no values
            const field = line.slice(0, colonIndex);
            const value = line.slice(colonIndex + (line[colonIndex + 1] === " " ? 2 : 1));
            switch (field) {
                case "data":
                    message.data = message.data ? message.data + "\n" + value : value;
                    break;
                case "event":
                    message.event = value;
                    break;
                case "id":
                    message.id = value;
                    break;
                case "retry":
                    const retry = parseInt(value, 10);
                    if (!isNaN(retry)) {
                        // per spec, ignore non-integers
                        message.retry = retry;
                    }
                    break;
            }
        }
        return message;
    }
    on(event, listener) {
        this.eventSource.on(event, listener);
        return this;
    }
    removeListener(event, listener) {
        this.eventSource.removeListener(event, listener);
        return this;
    }
    async *[Symbol.asyncIterator]() {
        let lines = [];
        for await (const line of this.readline) {
            if (line) {
                lines.push(line);
                continue;
            }
            yield this.parseSSEMessage(lines.splice(0));
        }
        if (lines.length > 0) {
            yield this.parseSSEMessage(lines.splice(0));
        }
    }
}
exports.SSEResponseModel = SSEResponseModel;
